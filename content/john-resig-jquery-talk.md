---
title: "John Resig jQuery talk"
date: 2009-12-17
author: "Matt Sherman"

---

Very interesting (if-you’re-a-nerd) talk by John Resig. It’s real geek stuff but the takeaways are:

*   John is very serious about testing, tracing and benchmarking for jQuery (and frameworks in general). For you and me, that means faster, more reliable jQuery. Win. (He also thinks many common benchmarks are bullshit not statistically sound.)
*   jQuery 1.4 takes advantage of the above. He approaches performance more in terms of reducing complexity, as opposed to tweaking optimizations. The result is much-increased performance, even if that isn’t the proximate goal.
*   New jQuery.require() method. A way of loading scripts dynamically. JS (and CSS for that matter) do not have a good mechanism for dependencies. This helps a bit.
*   The [Closure compiler](http://code.google.com/closure/compiler/) sounds fascinating. It’s not a Javascript minifier. It actually goes through your code, removes any code paths that aren’t called.

[http://d.yimg.com/m/up/ypp/default/player.swf](http://d.yimg.com/m/up/ypp/default/player.swf)
