---
title: "Compile-time checking of views in ASP.Net MVC"
date: 2009-09-19T15:20:41.000Z
---

I noticed that syntax errors in my views were not being caught during the build process — instead I would find them at run-time when I actually hit the view.

This struck me as odd — certainly one would want to know about compilation errors at compile-time, no?

So I emailed [ScottGu](http://weblogs.asp.net/scottgu/) and he directed me to this helpful tip, with will do exactly the above:

[http://devermind.com/aspnet/aspnet-mvc-tip-turn-on-compile-time-view-checking/](http://devermind.com/aspnet/aspnet-mvc-tip-turn-on-compile-time-view-checking/)

Scott (and the author of the above) warn that this will slow down builds. Will let you know if I find this onerous over time.
