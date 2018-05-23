---
title: "{less} CSS for .Net"
date: 2009-12-04T15:47:00.000Z
---

A while back I [asked](/blog/post/Imagine-CSS-evolved-as-a-programming-language.aspx) whether some enterprising-person-who-is-smarter-than-I would offer a version of the [{less} CSS](http://lesscss.org/) framework for .Net. Looks like [they have](http://www.dotlesscss.com/), and they did it as I’d hoped: an HttpHandler mapped to the .less extension. So your .less files are compiled on the fly and served to the browser as plain ol’ CSS.

In brief, {less} is a syntax for CSS that allows for programmability and reusability. Define a color (or a whole set of CSS properties) in one place, and refer to them throughout. Makes global changes easy and makes your CSS much more concise. Heck, one wonders why CSS isn’t already like that.

And today Phil Haack offers another option: [{less} compilation as a T4 template](http://haacked.com/archive/2009/12/02/t4-template-for-less-css.aspx). The upside of that approach is that CSS files are created locally, right in Visual Studio. So you can deploy them to any server. It would help debugging, too.
