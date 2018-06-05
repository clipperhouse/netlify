---
title: "Alerts as spam"
date: 2013-05-15T15:42:05.000Z
author: "Matt Sherman"

---

I went to a talk last night by John Allspaw at Etsy, about alerts and how they are hard to get right.

The short story is, signal-to-noise. Most alerting systems don’t _alert_, because they are largely false-positive. Due to sheer volume, the recipients of those alerts start inventing their own subjective algorithm as to what deserves attention.

Those human factors are the hard part. Alerts require serious design, and need to be designed with the knowledge that they will be consumed in the context of several other alerting systems.

(By my definition, anything feed-like is an alerting system if you let it be. Error logs, emails, Twitter.)

If an alert does not require action, why was I alerted? It’s literally spam at that point.

It’s understandable why we put up with this. A false positive is low cost, but a false-negative (the alert you needed but didn’t get) is high cost. So we err on the side of _more_.

See the problem? Bad alerts become non-alerts, but there are some we can’t afford to miss. Conundrum.

Solutions include semi-obvious things like improved UI, where the alert tells you why it alerted and what it expects you to do. Graphs. Sounds. There are interesting ideas.

My idea is that _change_ is what we care about, and what we should work to define. That means calculating not just levels of (say) RAM usage, but velocity, acceleration, and even [jerk](http://en.wikipedia.org/wiki/Jerk_%28physics%29).

I also think there is an opportunity for ML-type learning within the alert system. Every alert you get, you respond ‘useful’ or ‘not’. Then you [classify](http://en.wikipedia.org/wiki/Statistical_classification). Not unlike spam.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=5712834)
