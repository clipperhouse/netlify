---
title: "Designing a composable rate limiter, part 1"
date: 2025-07-20
---

Having used rate limiters a few times, I've observed that they must be thoughtfully designed. In particular,
there are typically comprised of several policies which we wish to stack on one another. It can get messy.

So I decided to design a rate limiter that emphasizes **composability**, which I define as having the right
primitives, where one can express arbitrary policies, and which can be combined in a way
that is easy to read and reason about. Let's start by defining the basics.

> If you'd like to skip ahead to the work-in-progress: https://github.com/clipperhouse/rate. It's in Go,
but if I like this work I may port to C#, Rust or Zig.

### Limit

The first primitive is a `Limit`. We would like to be able to define an abritrary number of requests
for an arbitrary amount of time. We might like to address short spikes, say 10 requests per second,
or sustained load, such as 100 requests per minute. This [type](https://github.com/clipperhouse/rate/blob/main/limit.go) will be pretty simple:

```go
type Limit struct {
    count    int64
    period   time.Duration
}
```
Not much else to say about it!

### Bucket

We will implement a [token-bucket algorithm](https://en.wikipedia.org/wiki/Token_bucket). The metaphor is
that a bucket will begin by containing some number of tokens; each request consumes a token; the bucket
refills as time passes.

I believe this type can be minimal. In fact, I would like to prematurely optimize for the fewest bytes,
as I imagine that in production use, there will be thousands or millions of buckets.

I believe the `bucket` type need only contain a `time`. In combination with a `Limit`, we can fully
determine how many tokens are in the bucket. The [type](https://github.com/clipperhouse/rate/blob/main/bucket.go) is:

```
type bucket struct {
    time time.Time
}
```

It's helpful to understand that a duration of time is isomorphic to a "token". So we'll have no
`token` type, no `token` field, and only do arithmetic on time. There is no explicit refilling
operation, just the passage of time.

We'll give ourselves some helper methods. To determine if a bucket contains at least one token,
we check to see if the bucket's time is before or equal to now, minus the time duration
representing one token.

```go
func (b *bucket) hasToken(now time.Time, limit Limit) bool {
    // "not after" expresses "before or equal"
    return !b.time.After(now.Add(-limit.durationPerToken))
}

// We can add a durationPerToken property to Limit: Limit.period / Limit.count.
```

To consume a token, we forward the bucket's time by one token:

```go
func (b *bucket) consumeToken(limit Limit) {
    b.time = b.time.Add(limit.durationPerToken)
}
```

To count all the remaining tokens:

```go
func (b *bucket) remainingTokens(now time.Time, limit Limit) int64 {
    return now.Sub(b.time) / limit.durationPerToken
}
```

I've elided some type conversions and other concerns for the sake of this brevity.

🐞 First bug alert! What happens if a bucket is old -- say it hasn't been updated in
an hour, but is defined by a 10-per-second limit? Naive arithmetic would calculate thousands
of tokens. But, we want it only to ever "have" up to 10 tokens. Let's fix that:

```go
func (b *bucket) remainingTokens(now time.Time, limit Limit) int64 {
    cutoff := now.Add(-limit.period)
    if b.time.Before(cutoff) {
        return limit.count
    }
    return now.Sub(b.time) / limit.durationPerToken
}
```

I think these primitives form a good basis for building up our structures. In part 2,
we'll talk about managing many buckets.
