---
title: "Random numbers web service"
date: 2009-08-05T21:46:00.000Z
author: "Matt Sherman"

---

Generating numbers that are truly random is quite difficult. Every random number needs to be based on some starting place — the time of day in milliseconds, perhaps. As such it’s actually a predictable number; it’s [deterministic](http://en.wikipedia.org/wiki/Determinism), even if a regular human won’t realistically guess it.

For most of what we do, we create a pseudo-random number — one that is random enough for our purposes. Yet I’ve experienced situations where the “pseudo” part becomes very apparent.

For example, when generating test data, I will have a loop which quickly picks x number of records out of a hat. The problem is, that little bit of code will execute within a millisecond — so I find that I often pick out records that are quite close to one another. You think you’ve shuffled the cards, and yet you draw the 2, 3 and 4 of clubs right off the bat.

It’s a hard problem. The challenge is finding a function that varies unpredictably each time you ask for a random number.

Today I came across a web service that [offers such a thing](http://www.random.org/clients/http/) — random.org. They use all sorts of crazy techniques to ensure variability.

If we want, say, 10 numbers in the range from 1 to 6, we use:




Hitting this from C# would be pretty trivial with [WebClient](http://msdn.microsoft.com/en-us/library/system.net.webclient.aspx) or some such. Neat!

—

_PS, inspired by this post:_ [_http://stackoverflow.com/questions/1234094/how-can-i-generate-truly-not-pseudo-random-numbers-with-c_](http://stackoverflow.com/questions/1234094/how-can-i-generate-truly-not-pseudo-random-numbers-with-c)
