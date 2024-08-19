---
title: "The surprises of CDC on production workloads"
date: 2024-08-17
---

> Motivated by [this Twitter post by Craig Kerstiens](https://x.com/craigkerstiens/status/1824114371737616794)

CDC ([change data capture](https://en.wikipedia.org/wiki/Change_data_capture)) tends to surprise in terms of expense on the production database. Each write becomes two writes — once to the system of record, and once to the changefeed.

This is an essential characteristic, not an accidental one. That’s what the semantics of CDC are.

In CockroachDB (where I previously led the CDC team), we started with a good baseline, that the changefeed was always asynchronous. Accept the SQL write, return to the SQL client, and queue the change event. This way you don’t risk immediate backpressure (latency) on the production OLTP workload. But...

That queue is still work to be done. The production system has to pay for it.

If you’ve done 1000 SQL writes, you owe the changefeed 1000 writes. You will be retrieving 1000 datums, transforming into a new format (Avro, JSON) and sending them over the network.

The definition of a successful changefeed event is:

1) emitted to the downstream system (e.g. message broker, OLAP), and

2) that system has acknowledged it

Until those two things happen, those events are stored on disk, and will remain there until they are successfully emitted. It’s a GC buildup.

You'll note this implies that the production OLTP system now has a dependency on an external system. If Kafka is offline or too slow, the OLTP system is building up a backlog of changes.

Anyway, back to the “surprise” part:

- CDC imposes a non-trivial increase in I/O and CPU
- If the downstream sink is not keeping up, you will be slowly losing disk space. It’s like a memory leak.
- It will not be obvious to operators that CDC is the culprit, and that slowness of the downstream sink is the root cause.
- When the downstream sink gets “unblocked”, the backlog of CDC events will try to catch up, and may flood the network and spike CPU.

### What can be done?

We need to get the backpressure (the backlog) off of the production system.

The best thing is to ensure that the downstream sink is reliable and sufficiently provisioned.

If that's not an option, reconsider your latency requirements. Does your application actually require SQL updates to be replicated in ~seconds? If not, consider adding a buffer in the form of cloud storage (like S3).

So instead of `OLTP → CDC → Kafka/OLAP`, consider `OLTP → CDC → S3 → Kafka/OLAP`.

Cloud storage has high reliability and capacity -- you're unlikely to tax it. By writing to S3, the OLTP system will consider the changes emitted, avoiding a backlog, and reducing the likelihood of surprise.
