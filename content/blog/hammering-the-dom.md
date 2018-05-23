---
title: "Hammering the DOM"
date: 2009-04-28T18:18:00.000Z
---

As I work on my ASP.net [jQuery controls](/jQuery/), I got to thinking about what “animations” really are. The core animation framework in jQuery (as far as I can tell) is to simply iterate in small steps between two CSS states. So if you are going from 0% opacity to 100% opacity, jQuery applies (say) 100 CSS changes in 1% increments.

This is essentially hammering the DOM. The browser is forced to make 100 updates to the state of an element, and re-render it, over a short period of time. This must incur a lot of overhead. Indeed, I see very different degrees of “smoothness” on different browsers.

There must be a better way. Wouldn’t it be better to tell the browser: “transition smoothly between these two states”, and have it happen natively?

Considering the horsepower on most computers, a simply fade should be trivial in terms of computing effort. Even better, imagine if the browser could offload it to a video card?

Thinking further: wouldn’t it be great if jQuery could take advantage of such a thing?

A little research led me to [this](http://weston.ruter.net/projects/jquery-css-transitions/). Indeed, Webkit does have proprietary native support for such animations. Weston Ruter created a shim to use the native transition where available.

I’d like to see jQuery adopt this approach. Preserve the API — eg, $(“p”).fadeOut() — but change the underlying implementation based on browser capabilities. More capable browsers get smooter animations, less capable browsers do things the old way (circa 2009!).

This would move jQuery toward being more of an API than an animation engine. I think that’s a fine thing.

— -

Update: Indeed it has already been [discussed](http://ejohn.org/blog/css-animations-and-javascript/) over at jQuery. Sounds like John Resig sees a couple of dealbreakers in the current technologies.
