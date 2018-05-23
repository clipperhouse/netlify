---
title: "Improve the median, not the mean"
date: 2015-04-20T21:13:18.000Z
author: "Matt Sherman"

---

I like seeing Google Fiber prompt incumbent dinosaurs into [boosting speeds](http://www.wired.com/2015/04/comcast-says-itll-bring-ultra-fast-internet-us-2016/). It’s great.

But: it doesn’t matter much. I have 10x the bandwidth at work (gigabit) than I do at home. I barely notice it, however, for both [technical](https://www.igvita.com/2012/07/19/latency-the-new-web-performance-bottleneck/) and [perceptual](http://en.wikipedia.org/wiki/Stevens%27_power_law) reasons.

In fact, my home internet recently improved 3x from ~30mbps to its current ~100mbps. Maybe videos achieve HD a little more quickly? Maybe?

Point being, I had decent bandwidth for my use cases, and the new bandwidth — which I am _intellectually_ thrilled about — offers diminishing returns of actual utility.

Because I already had above-average bandwidth, these improvements **move the mean more than they move the median**. This disparity offers a clue about utility.

There’s more bang for the buck in improving the lower percentiles of performance. Moving a substantial number of users from 1mbps to 10mbps is a greater increase in utility than my recent improvements.

Google has the [right idea](https://blog.chromium.org/2015/04/a-quic-update-on-googles-experimental.html) here with QUIC. It offers a substantial improvement for the worst 1% of latency, which nudges the median upward. Let’s focus on that.
