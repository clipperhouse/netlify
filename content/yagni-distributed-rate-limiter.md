---
title: "YAGNI for distributed rate limiters"
date: 2025-08-28

---

So, I am working on [this rate limiter](https://github.com/clipperhouse/rate).
It's in-process and in-memory. I look at other fine rate limiters, and many
offer the ability to store the state in a shared system, such as Redis. Should
I offer that?

Cards on the table: I worked pretty hard on optimal semantics and performance
for my rate limiter, and the task of supporting an external store gives me a
feeling of "ugh". It would be a step change in complexity and perf. Distributed
data is a hard problem.

Is it possible that, for most cases,
[you aren't gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)?
Let me attempt to talk ~~you~~ me out of the need for a distributed rate
limiter.

## The use case

We often run clusters of machines (say web servers), and wish to apply a rate
limit policy to the _cluster_, not the individual machine.

Let's adopt the assumption that the primary use case for a rate limiter is to
protect a service from overload, with some notion of fairness. There are other
use cases, but this is Job One.

Let's further stipulate that precision is not _too_ important. There is not a
meaningful difference between 10 requests per second and 11 requests per second;
we care about blunting the guy hitting us with 100 requests per second.

### Strategy 1: Round-robin and divide by N

If we have a cluster of `N` machines, we can use a round-robin (or similar)
algorithm to distribute the requests ~equally across all machines.

Instead of sharing state, we can decide on a **cluster** rate limit of `X`, and
on each machine, simply configure a rate limit of `X/N`. We can do further
division if we run multiple processes.

### Strategy 2: Sticky sessions (and ignore N)

A [sticky session](https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/welcome.html)
means that the same user (or IP address or whatever) will always be routed to
the same machine.

If our rate limit is applied per-user (or other sharding key), then we don't
need to share state at all. The machine-local state is equivalent to the
"cluster" state for that user, since that user will only ever "see"
one machine.

(Credit to [@kevin-montrose](https://github.com/kevin-montrose) for this idea.)

### Strategy 3: Do it on the load balancer

The load balancer is a proxy for the cluster, both literally and figuratively.
If we wish apply a cluster-wide rate limit, let's do it there, and not on
individual machines.

## Summary and addendum

So perhaps the complexity of true, distributed rate limiting should only be
adopted after we have proved that the above strategies are insufficient.

### Spitballing: if I were to implement it...

If I choose to support distribution in
[my rate limiter](https://github.com/clipperhouse/rate), I will try to do it
_not_ by implementing alternative data stores within the package. Rather, I
would offer the primitives to allow others to do so.

I might offer a method to emit events from the rate limiter, and a complementary
method for consuming such events. I would define a serializable data type
representing the event.

In turn, you, the user, can choose to transport that event over pub/sub,
persist it to a database, or whatever. The user can decide on synchrony,
batching, eventual consistency, etc.
