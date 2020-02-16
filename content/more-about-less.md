---
title: "More about {less}"
date: 2009-06-30
author: "Matt Sherman"

---

Raena Jackson Armitage offers an [interesting exploration of LessCSS](http://www.sitepoint.com/blogs/2009/06/30/write-better-css-with-less/):
I have a confession: I think parts of CSS _suck._ It’s repetitive, tedious, and … well, kind of dumb.

(Here are my [previous comments](/blog/post/Imagine-CSS-evolved-as-a-programming-language.aspx).)

I wonder what it would take to work LESS into the [CSS standard](http://www.w3.org/Style/CSS/)? The syntax seems intuitive and unambiguous, and feels like CSS. It’s a small evolution that would make a lot of people happy. I suspect the standards process is not so nimble. ;)

This presents an interesting case in standards versioning. CSS versions are mostly based around the addition of more sophisticated styles, but the syntax doesn’t change. So when a browser doesn’t support a particular CSS feature, it’s an incremental, cosmetic loss. It degrades gently. Since my above suggestion is a syntactic change, we must take more care as not to break things.

That said, I believe we can **begin using the new syntax now**. Here’s a straightforward, server-side backward- and forward-compatibility story.

On the .Net side, one would write an HttpHandler for “.less” files. For the current generation of browsers, the handler would parse the .less into standard CSS, as the Ruby-based [LESS compiler](http://github.com/cloudhead/less/tree/master) does. For those browsers that support the new standard — whenever that might be — the handler would simply pass the .less code straightaway. (I am sure that an Apache mod would be similarly straightforward.)

We don’t need to wait for a standard — if the web community likes this idea, let’s make it a de facto standard and let the W3C catch up if they care to.

I’ll ask again — what enterprising .Net Ruby person is gonna implement this so I can start playing?
