---
title: "Allocations are a dependency"
date: 2025-09-10
---

I like to reduce or eliminate allocations in my projects, which use garbage-collected languages (Go and C#). Like you, I want efficiency -- both in CPU cycles and memory.

But we might also understand allocations as taking a dependency on other systems. As such,
eliminating allocations is also an improvement in reliability.

First, by allocating, we take a dependency on the garbage collector. Modern
GC's are great. But, they are complex systems in themselves. When we take them
out of our code paths, we eliminate a class of complexity. We also become less-noisy
neighbors to the other dependents of that shared system.

The second dependency is the OS, which provides the memory allocation. Also
a complex system! If we can remove that system call, we avoid invoking a
yet another code path, and again are kind to our neighbors.

Our apps get big over time. If you've ever handled an escalation or an outage
(who hasn't), you learn that our ability to predict the behavior of our systems
is the definition of reliability. To the extent we can take a variable out of
the equation, we and our users benefit.
