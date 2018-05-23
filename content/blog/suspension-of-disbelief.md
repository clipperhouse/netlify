---
title: "Suspension of disbelief"
date: 2012-02-29T16:52:27.000Z
---

You watch a movie. In order to get something from it, you have to enter the world that it presents. You must suspend disbelief.

This is essential for the product to work correctly. If you are unwilling to believe, say, that space mercenaries have Wookiee friends, or that the bumbling Bluth family exists — then it’s very unlikely the product is for you.

Restated, you know full well that none of what you perceive actually exists, but you believe it in order to get something out of the experience.

And so it is with programming abstractions. It might be a language, like C#, or a framework, like jQuery. **What they actually do is much less important than your perception of what they do.**

There is in fact no “integer” named “x” — but you operate as if it exists. You suspend disbelief. To do otherwise would be counterproductive.

It would puzzle me immensely if a person continues to watch a movie while insisting that Meryl Streep isn’t actually a nun or that there is no such thing as a warp core. Commit, or find another movie.

Similarly, it puzzles me when programmers choose an abstraction while being unwilling to adopt its mental model.

This usually expresses itself as poorly separated concerns: observables that try to look at their observers. Business logic that’s tied to a web server. Jamming arbitrary SQL into an ORM.

— -

I know your reaction: sometimes this is necessary. And you’re right! Abstractions can be leaky.

Indeed, films can be poorly made. There might be [continuity errors](http://www.youtube.com/watch?v=owH54AiCheg), or bad costumes. In which case the creator has failed to a degree, and broken your illusion.

But your choice is still: believe in Wookiees or find another movie. **Each is reasonable, but not both.**

With a language or a framework, you have the same choice. The creator of the abstraction is offering you an illusion and a mental model to go with it.

If poor coding breaks the illusion, you might need to work around specific bugs. If the model is confusing, you might not think it worthwhile.

But if you adopt an abstraction, while enforcing a different mental model than the designer intended, I don’t get that. It’s like staying in the theater, but telling everyone within earshot that Robert DeNiro is not, in fact, a taxi driver.

Commit. Or find another movie.
