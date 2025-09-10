---
title: "Allocations are a dependency"
date: 2025-09-10
---

I like to reduce or eliminate allocations in [my projects](https://github.com/clipperhouse),
which use garbage-collected languages (Go and C#). Like you, I want efficiency --
both in CPU cycles and memory.

But we should also understand allocations as taking a dependency on other systems.
As such, eliminating allocations is also an improvement in reliability.

First, by allocating, we take a dependency on the garbage collector. Modern
GCs are great! But they are complex systems in themselves. When we remove
them from our code paths, we eliminate a class of complexity. We also become
less-noisy neighbors to other dependents of that shared system.

The second dependency is the OS, which provides the memory. Also
a complex system! If we can avoid that system call, we bypass yet
another code path, and again are kind to our neighbors.

Our apps get big over time. If you've ever handled an escalation or an outage
(who hasn't?), you learn that our ability to predict the behavior of our systems
is the definition of reliability. To the extent we can take a variable out of
the equation, we and our users benefit.
