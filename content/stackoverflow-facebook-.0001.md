---
title: "StackOverflow == Facebook * .0001"
date: 2009-10-13
author: "Matt Sherman"

---

Apparently, Facebook is [running around 30,000 physical servers](http://www.datacenterknowledge.com/archives/2009/10/13/facebook-now-has-30000-servers/). That hurts my head. With 300,000,000 users, that translates to around 10,000 users per server. They are doing (back-of-the-envelope) ~4.2 billion pageviews/day. Each server, then, is doing around 140,000 page views per day.

What Facebook is doing is [especially hard](http://highscalability.com/blog/2009/10/13/why-are-facebook-digg-and-twitter-so-hard-to-scale.html): nearly every page that you view on the site is generated fresh just for you, and needs to know about new changes from any one of your dozens or hundreds of friends.

StackOverflow is getting by with around 3 servers, as far as I can glean from their podcast. Of course, they are not at Facebook’s scale and the pages don’t need to be as personalized. They are doing around 1,000,000 page hits a day, and have around 50,000 users. That works out to around 16,000 users per server — in the same ballpark as Facebook.
