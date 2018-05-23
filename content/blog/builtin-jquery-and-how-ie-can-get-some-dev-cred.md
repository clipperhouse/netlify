---
title: "“Built-in” jQuery (and how IE can get some dev cred)"
date: 2009-06-15T13:27:00.000Z
author: "Matt Sherman"

---

I’ve mentioned in the past that [jQuery is an API](http://clipperhouse.com/blog/post/Hammering-the-DOM.aspx) as much as it is a set of functions. As syntaxes go, it’s very nice — consistent, logical, readable.

What are the chances that one of the browser makers will announce “native” support for jQuery in their next version? What would this even mean?

Well, for starters, I think it would mean that the jQuery selector syntax would be understood by the browser as a [DOM query language](http://clipperhouse.com/blog/post/jQuery-performance-tips.aspx). Browsers have made incremental steps in this direction: [getElementsByTagName](https://developer.mozilla.org/en/DOM/element.getElementsByTagName) and [getElementsByClassName](http://www.quirksmode.org/blog/archives/2008/05/getelementsbycl.html), for example. Still not generalized enough, IMHO.

The next step would be support for [CSS transitions](http://ejohn.org/blog/css-animations-and-javascript/). Tell the browser three things: beginning state, end state and how to get there (easing). Right now, jQuery achieves animation by asking the browser to [redraw the DOM a hundred times](/blog/post/Hammering-the-DOM.aspx). Yikes. We can feel IE struggling in the form of less-than-smooth animations.

Today’s machines can do 60 frames/sec of 3D rendering. Shouldn’t the browser be able to smoothly fade in a paragraph of text without spiking the CPU?

Announcing these two things, while working closely with John Resig to make sure they serve the jQ community, would be a great way for Microsoft get a little cred for IE 9. Maybe even leapfrog the current jQ and go straight to [Sizzle](http://sizzlejs.com/).
