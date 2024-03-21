---
title: "Know your guarantees, Go edition"
date: 2014-07-12

---

I was directed to a thread about a [poor soul](http://forums.thedailywtf.com/forums/t/27755.aspx) who started a project in Go, eventually had to hand it off to the community, and discovered that his original source no longer compiled, due to third-party dependencies having changed. Key quote:
Not even the original programmer, with the original files on his original dev machine, can compile the source anymore.

I feel for the guy. Unfortunately, the above quote is not correct. He didn’t have all of the original files. He only had his own.

See, he took dependencies on third-party code he doesn’t control. That’s a fundamental choice to make. It is a fundamental characteristic of his program (and his dev process).

The complaint is that Go does not prevent this. It’s true! Versioned dependencies are not a feature of the base platform.

It’s also a deliberate choice, where the Go authors chose not to implement a feature when they felt that the trade-offs were no good.

One low-level reason they made this choice is to avoid slow compilation and bloated binaries (which are two sides of the same coin). Remember, packages depend on other packages. So Foo might depend on Bar 2.1. Foo might also depend on Baz which in turn depends on Bar 1.9, and on down the tree. So that would mean compiling and linking several copies of nearly identical code.

Depending on several versions of the same package also means knowing which version one is calling, whereby the dependency mess seeps into your source code.

Which leads us to the high-level reasoning behind the Go platform punting on this feature: they did not have a logical solution they considered acceptable. It’s not that they don’t understand the problem; it’s that, at the moment, there is not a solution they like. So they choose no feature over over a regressive one.

It’s a controversial stance. After all, npm and bundler and many other systems have dependency versioning built-in, and people work with them every day. But if you’ve used them, you know they are not without flaws.

I’ll speculate further: perhaps dependency versioning is not unlike “high availability” software. It makes promises of reliability, at the expense of increased complexity and bloat. After all, you are running a lot more code with a lot more relationships.

Often, “high availability” solutions don’t net out to being more reliable, due to this underestimated complexity. **Perhaps it’s better to make no guarantee, than to make one that you can’t keep.**

This is also something of a cultural experiment on Go’s part. By removing these (possibly) false guarantees, you are forced to be much more deliberate about managing your code and its dependencies. Trust but verify.

It sounds like our poor soul from the opening paragraph trusted, but didn’t verify.

— -

As a practical matter, here’s what he should have done. First, recognize that he was depending on code that is **out of his control**. Second, make a choice: don’t depend on it, or turn it into code that he does control.

He could fork those repos and depend on his own copy. He could “vendor” them into his solution with something like [godep](https://github.com/tools/godep). He could depend on the weak (but not non-existent) promise of [tagged versions](http://labix.org/gopkg.in).

Remember: everything about third-party code is a decision about trust. Waving the wand of “versioned dependencies” doesn’t change that. In fact, it might fool us into seeing guarantees that don’t exist.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=8028216)
