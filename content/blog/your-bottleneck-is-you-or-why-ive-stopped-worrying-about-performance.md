---
title: "Your bottleneck is you, or, why I’ve stopped worrying about performance"
date: 2009-09-16T13:32:00.000Z
---

Provocative headline, no? Let me explain.

Like Jeff Atwood, I consider end-user [performance to be a feature](http://blog.stackoverflow.com/2009/08/a-few-speed-improvements/). Pages should _snap_. It sends a very positive signal to customers, IMHO. And the site should snap with 10 or 10,000 users.

That said, as a developer I am learning to worry less about the little things when it comes to performance.

For example, I went to a SQL Server talk where they worried about how many disk spindles to split the load across. And I read others worrying about whether String or StringBuilder will [concatenate faster](http://blog.briandicroce.com/2008/02/04/stringbuilder-vs-string-performance-in-net/), and under what circumstances.

And that’s all well-and-good.

But I’ve found that even on relatively low-end hardware, reasonable code is plenty fast. And by reasonable, I mean code that avoids the most obvious pitfalls like the [n+1 problem](http://www.pbell.com/index.cfm/2006/9/17/Understanding-the-n1-query-problem).

Beyond that, I prefer to focus on the logic. That is, I treat languages more declaratively as time goes on. I spend more time focusing on _what_ and less time worrying about the _how_ that happens under the covers.

We come far enough that hardware costs are trivial for all but the [top 1% of sites](/blog/post/Scale-means-reversing-your-thinking-on-the-database.aspx). And modern compilers do a great job of turning high-level languages into fast machine code.

**In all likelihood, your bottleneck is not your tools. Your bottleneck is your time.**

So take advantage of modern platforms, reclaim your time, and focus on your customers.
