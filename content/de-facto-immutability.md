---
title: "De facto immutability"
date: 2014-06-05
author: "Matt Sherman"

---

_Another in a series of posts wherein I spitball about things that computer scientists already know, but have only just occurred to me._

Browsing the new [Swift docs](https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/Swift_Programming_Language/GuidedTour.html#//apple_ref/doc/uid/TP40014097-CH2-XID_1) reveals that immutability is given pretty high billing. There are two keywords for variable declaration/assignment: let and var.

The former declares an immutable value; the latter a mutable one. The former is used much more often in the examples, providing a hint about the intentions of the designers.

The first thing I like about this is that the programmer is encouraged to default to immutable. It’s a nudge which suggests, when using var, that perhaps they should think about why they are doing that. It feels exceptional and just a little unsafe. Could this code be rearranged to avoid it?

It also got me thinking about Go, which doesn’t really have a notion of immutability. Well, it does have [const](http://golang.org/ref/spec#Constants), but it’s only for primitives.

Do compilers have a notion of “de facto immutable”? Which is to say, although the programmer has not intended this value to be immutable, the compiler can prove that, in fact, it is not mutated; that there is no path by which the value can change.

This opens up optimization possibilities. One is that values can be [inlined](https://groups.google.com/d/msg/golang-nuts/FBkKg3LIKB8/wHW0gGo5J6sJ) in simple situations.

A second, as [pointed out](https://twitter.com/kevinmontrose/status/474670162390818816) by Kevin Montrose, is that [ordering of reads and writes](http://en.wikipedia.org/wiki/Memory_barrier) can be skipped for de facto immutable values. (Similarly helpful in concurrent situations, of course.)

A third is that anything passed by value, but known not to be mutated, need not result in a copy of the value. Under the hood, a pointer can be passed safely, reducing work as well as memory/GC pressure. This is analogous to [interning strings](http://en.wikipedia.org/wiki/String_interning).

Would be interested to know which languages exploit these ideas, or if there are logical problems with them that I’ve missed.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=7855306)
