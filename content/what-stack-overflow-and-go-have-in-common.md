---
title: "What Stack Overflow and Go have in common"
date: 2014-03-21
author: "Matt Sherman"

---

I’ve been working at Stack for over three years now, and over the last six months or so I’ve been doing [playing with](http://clipperhouse.github.io/gen/) a programming language called Go. Both are highly regarded and, for many, controversial, and I’ve realized what they have in common.

Stack Overflow and Go are both **optimized for artifacts**. Which is to say, their goal is to create good outcomes that last a long time. Note that this is not the same as optimizing for the pleasure of their users.

Stack users are sometimes [frustrated](https://twitter.com/search?q=stackoverflow%20useful%20closed&amp;src=typd) the strictness of our policies, especially regarding the relevance and objectivity of questions. Go users often gripe about the need to [constantly](https://groups.google.com/forum/#!topic/golang-nuts/5V2XPWksny8) be handling errors at their source — bubbling and catching exceptions is just not a thing.

What both of these _design choices_ have in common is that they help to ensure that what comes out the other side is actually of value.

And make no mistake, they are design choices. They are not technical shortcomings or oversights.

Now, these choices need to be balanced against the pleasure of the authors. If Go were hard to write, or Stack capriciously rejected good questions, neither would be a success.

What both of them demand is, do your homework. Stack questioner: take the time to research your question and express it clearly. Go programmer: that file system call can fail, and your code needs to account for that.

It’s a [trade-off](http://www.natureworldnews.com/articles/3242/20130730/human-body-distinguishes-between-hedonic-eudaimonic-happiness-molecular-level.htm) between the hedonic happiness of authors in exchange for a longer-term eudaimonia of end users.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=7442811)
