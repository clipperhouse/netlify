---
title: "Designing a composable rate limiter"
date: 2025-07-20
---

Having used rate limiters a few times, I've observed that they must be thoughtfully designed. In particular,
they are typically comprised of several policies which we wish to stack on one another. It can get messy.

So I decided to design a rate limiter that emphasizes **composability**, which I define as having the right
primitives, where one can express arbitrary policies, and which can be combined in a way
that is easy to reason about.

Here are the primitives we'll need:

- `Limit`, a count over a period of time
- `Bucket`, which counts [tokens](https://en.wikipedia.org/wiki/Token_bucket)
- `Limiter`, a collection of buckets and limits. (This will be the primary API.)
- `Keyer`, a function for defining a bucket's key in the `Limiter`
- `LimitFunc`, a function for specifying dynamic `Limit`s
- `LimiterStack`?

> If you'd like to skip ahead to the work-in-progress: https://github.com/clipperhouse/rate. It's in Go,
but if I like this work I may port to C#, Rust or Zig.

> The code below will be illustrative more than literal, I'll elide some details.

## Limit

The first primitive is a `Limit`. We would like to be able to define an arbitrary number of requests
for an arbitrary amount of time. We might like to address short spikes, say 10 requests per second,
or sustained load, such as 100 requests per minute. This [type](https://github.com/clipperhouse/rate/blob/main/limit.go) will be pretty simple:

```go
type Limit struct {
    count    int64
    period   time.Duration
}
```

## Bucket

We will implement a [token-bucket algorithm](https://en.wikipedia.org/wiki/Token_bucket). The metaphor is
that a bucket will begin by containing some number of tokens; each request consumes a token; the bucket
refills as time passes. If there are no tokens left, the request is denied.

I believe this type can be minimal. In fact, I would like to prematurely optimize for the fewest bytes,
as I imagine that in production use, there will be thousands or millions of buckets.

The `bucket` type need only contain a `time`. In combination with a `Limit`, we can fully
determine how many tokens are in the bucket. The [type](https://github.com/clipperhouse/rate/blob/main/bucket.go) is:

```go
type bucket struct {
    time time.Time
}
```

It's helpful to understand that **a duration of time is isomorphic to a "token"**. So we'll have no
`token` type, no `token` field, and only do arithmetic on time. There is no explicit refilling
operation, just the system clock moving along.

Let's define `durationPerToken` as `Limit.period / Limit.count`.

Let's give ourselves some helper methods. To determine if a bucket contains at least one token,
we check to see if the bucket's time is before or equal to now, minus the duration
representing one token.

```go
func (b *bucket) hasToken(now time.Time, limit Limit) bool {
    threshold := now.Add(-limit.durationPerToken)
    return b.time.Before(threshold)
}
```

To consume a token, we forward the bucket's time by one token:

```go
func (b *bucket) consumeToken(limit Limit) {
    b.time = b.time.Add(limit.durationPerToken)
}
```

To count the remaining tokens:

```go
func (b *bucket) remainingTokens(now time.Time, limit Limit) int64 {
    return now.Sub(b.time) / limit.durationPerToken
}
```

I've elided some type conversions and edge cases for the sake of this brevity.

🐞 First bug! What happens if a bucket is old -- say it hasn't been updated in
an hour, but is defined by a 10-per-second limit? Naïve arithmetic would calculate thousands
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

## Limiter

This will be our main API. The `Limiter`'s job is to dynamically allow or deny a request. It will
track many buckets and (later) many limits. We want an API like:

```go
// Define a limit
perSecond := Limit{count: 10, period: time.Second}

// Define a "keyer" for the bucket
func byIP(req *http.Request) string {
    // You can put arbitrary logic in here. In this case, we’ll just use IP address.
    return req.RemoteAddr
}

limiter := rate.NewLimiter(byIP, perSecond)
```

I think we're starting to compose nicely! The bucket key can be defined by
arbitrary logic, encapsulated in a named func.

Then, in our (e.g.) HTTP handler:

```go
if limiter.Allow(r) {
    w.WriteHeader(http.StatusOK)
} else {
    w.WriteHeader(http.StatusTooManyRequests)
}
```

The `Allow` method's job is to:

- Fetch or create the bucket for the IP address.
- See if the bucket has tokens.
- Deduct a token and return true if yes; otherwise return false and mutate nothing.

See the [implementation-in-progress](https://github.com/clipperhouse/rate/blob/main/limiter.go). A few interesting
things you may notice:

- `Limiter` and `Keyer` are **generic**, allowing arbitrary types for keys. Type inference allows this to read nicely.
- `Limiter` manages a map of key → bucket. We need safe concurrency, so we use a `sync.Map`.
- A bucket is only meaningful in combination with a limit, so we create a composite key of limit + user-defined key.

### Multiple limits per bucket

Let's extend `Limiter` to accept multiple limits per bucket. Perhaps we wish to tolerate short spikes
but not sustained load:

```go
perSecond := Limit{count: 10, period: time.Second}
perMinute := Limit{count: 100, period: time.Minute}

func byIP(req *http.Request) string {
    return req.RemoteAddr
}

limiter := rate.NewLimiter(byIP, perSecond, perMinute)
```

We still call a single `limiter.Allow()` method. We want "all or nothing" semantics:
if any one of the limits is exhausted, we return false.

Further, we want something subtler: we only will consume a token from one bucket _iff_
all limits were allowed. Otherwise, we deduct none. I think this sort of "transactional" accounting
is desirable, especially under load.

It's non-trivial to do this right. The basic logic is:

- Lock all buckets
- Check all limits
- If all are allowed, only then deduct a token from all buckets.
- Otherwise return false and mutate nothing.

Further, in the spirit of a database-like transaction, and to allow testability,
we start with an `executionTime` and use it throughout the logic (instead of repeatedly calling
`time.Now()`).

[Implementation-in-progress here](https://github.com/clipperhouse/rate/blob/main/limiter.go#L126).

## Conditional Limits

Perhaps we want a limit to be determined dynamically.

```go
db := getDatabase()
func byCustomerID(r *http.Request) int {
    return db.GetCustomerID(r.Cookies["CustomerID"])
}

// reads are cheap
readLimit := rate.NewLimit(50, time.Second)
// writes are expensive
writeLimit := rate.NewLimit(10, time.Second)

limitFunc := func(r *http.Request) Limit {
    if r.Method == "GET" {
        return readLimit
    }
    return writeLimit
}
limiter := rate.NewLimiterFunc(byCustomerID, limitFunc)
```

We can support multiple `LimitFunc`'s as well:

```go
db := getDatabase()
func byPlan(r *http.Request) PlanID {
    return db.GetCustomerPlan(r.Cookies["CustomerID"])
}

readLimitFreePlan := rate.NewLimit(50, time.Second)
writeLimitFreePlan := rate.NewLimit(10, time.Second)

free := func(r *http.Request) Limit {
    if r.Method == "GET" {
        return readLimitFreePlan
    }
    return writeLimitFreePlan
}

readLimitEnterprisePlan := rate.NewLimit(100, time.Second)
writeLimitEnterprisePlan := rate.NewLimit(20, time.Second)

enterprise := func(r *http.Request) Limit {
    if r.Method == "GET" {
        return readLimitEnterprisePlan
    }
    return writeLimitEnterprisePlan
}

limiter := rate.NewLimiterFunc(byPlan, free, enterprise)
```

## Stacked Limiter?

An idea for the future: combine multiple `Limiter`s into a single `LimiterStack`.

Implement logic similar to the "multiple limits" above -- one `Allow()` method for
all limiters; "all or nothing" transactional semantics. I'm musing about it now 🤔.

## Review of composability concepts

The overall design here is that each primitive should be easy to express,
and then combined into sophisticated logic for our application's needs.

For anything dynamic, let's allow arbitrary computation, i.e. a function with a name. Let's
allow the arbitrary combination of each primitive, and handle the hard parts, such
as transactions.

The user does need to do some thinking, as they build up their logic. There is no substitute for doing the reasoning and the arithmetic.

If we've done a good job, then the user will be unsurprised by the outcomes, even under
complex circumstances.

Have we done that? The work is [in progress](https://github.com/clipperhouse/rate). Your opinion is welcome on [GitHub](https://github.com/clipperhouse/rate) or on [𝕏](https://x.com/clipperhouse).
