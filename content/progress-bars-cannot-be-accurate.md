---
title: "Progress bars cannot be accurate"
date: 2013-10-23T01:52:42.000Z
author: "Matt Sherman"

---

We all see progress bars and some of us even implement them. And we’ve all seen how hilariously wrong they can be. There’s a reason for that.

In order for a progress bar to be accurate, a program needs to determine how long it will take to run, prior to running it. It needs to know how much work it will do before doing it.

It seems to me that the only way to accurately know how much work a program has to do, is to do the work. That’s not as banal as it sounds.

Computer-theoretically, is it possible for a program to calculate how much work it needs to do, in less work than is required to actually run the program? I haven’t done the math, but my instinct says it cannot.

The best we can hope for, and what most progress bars actually do, is to estimate based on **other evidence**.

For example, when downloading a file from a network, the progress bar indicates how much time is left based on how much time it took so far. Subsequent bytes might come down at the same rate as previous bytes; some may not. So “progress” is, at best, probabilistic.

If we set aside time as the measure of progress, and instead simply indicate how many more bytes need to transfer, we are still making an assumption. The program can’t _know_ how big the downloaded file is prior to downloading it; what it _can_ do is trust that the server correctly told it what to expect prior to download (eg, in a header).

One might also gather evidence over time. I’m watching Mavericks install on my MacBook. The progress bar seems reasonable enough. My assumption is that Apple, refined as they are, has sampled/recorded previous install times on different hardware. Maybe Apple has put previous measurements of the program _in the program_.

In many cases, in controlled environments or with lots of trials, we can offer a progress bar that gives the user a reasonably confident guess. But that’s all it can be.
