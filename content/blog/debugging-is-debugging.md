---
title: "Debugging is debugging"
date: 2013-03-17T17:38:25.000Z
author: "Matt Sherman"

---

I use CoffeeScript [here](https://github.com/clipperhouse/classicalrad.io) and [there](https://github.com/clipperhouse/BetterBird). And JavaScript everywhere else.

Depending on the scenario, and this is a matter of taste, CoffeeScript is more elegant, readable, and usable.

When offering this notion, inevitably there is a complaint about “debugging.” CS is generating code, it’s a layer of abstraction, which will lead to frustration, etc.

The question is, compared to what? When JavaScript is not behaving as you wish, what do you do?

You debug it. You log, you hit breakpoints, and most importantly, you build a mental model of how the program is behaving.

Did you learn about truthiness and ‘this’ in JS by _logic_? Ex post facto maybe. But you debugged your way to that understanding.

CoffeeScript is identical in this regard. It has syntax, and semantics. You write code, see what it does, change it, see what it does. You build a mental model.

CoffeeScript doesn’t make a program easier to debug; it also doesn’t make it harder. Semantics. Behavior. Mental model. Rinse and repeat.

What CoffeeScript does do, in my experience, it make trivial debugging less likely.

Because it’s whitespace-significant, you are unlikely to miss a closing brace. Because it has sensible iterators, you are not going to fuck it up Google it for the 50th time. Because it has ?, you are not going to choose among false, falsy, null, undefined, typeof, instanceof. For the 50th time.

Maybe I’m projecting. I am sure you’re adept with the above issues. You’ve memorized them over time, hammered JS’s behaviors into your head, experimented and built a robust mental model. Which is great!

But there might be a bit of [_challenge accepted_](http://www.youtube.com/watch?v=ekeELle5g-o) in there, if we’re honest. JS is tedious and idiosyncratic — which is how normals see programming in general. Our ability to reason through that stuff to make something useful is where we derive our reward.

For me, and more so over time, shipping is where I derive my reward. Correctness is rewarding. Code that looks like what it does, is rewarding. So CoffeeScript, for me, is rewarding.

—

A couple of addenda — in terms of the ‘taste’ thing, I’ve settled on CS on the server (if using node) and plain JS on the client. The difference is that the latter requires a build step while the former does not. coffee app.coffee just works, no hint of JS.

And source maps are a nice tool, so I can imagine that objection to the CS abstraction. Looks like CS got [support](http://coffeescript.org/#source-maps) for that as well, but haven’t yet tried it.
