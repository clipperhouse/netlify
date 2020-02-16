---
title: "Making good programmers feel like bad programmers"
date: 2009-07-24
author: "Matt Sherman"
---

A web developer friend of mine has been doing a lot of backend-integration-type work over the last year, and has therefore has not been developing web sites. He made a point of wading back in to the web this week, so as not to get too “rusty”, in his words.


![image](//ecx.images-amazon.com/images/I/5115SW8FP3L._SL500_AA280_.jpg)



He is working in ASP.net [Web Forms](//www.west-wind.com/WebLog/posts/198731.aspx) — and the wading did not go well. He is struggling to do what he considers basic stuff like toggling between an edit form and a detail view.

Now, he’s been doing web work since the mid-90’s, when the tools were extremely raw. He knows web apps. And right now he feels like an idiot.

Is he as rusty as he says? No. The problem is the abstraction layer that is Web Forms. It was designed for people who don’t know how the web works; it abstracts away all the request-response stuff in an attempt to achieve a desktop-app metaphor.

Sadly, for all its sophistication, it can feel like **doing surgery while wearing boxing gloves**.

If you _do_ know how the web works, you may find this abstraction hurts more than it helps. Knowing “when” a piece of code will execute under Web Forms, or what an element’s value will be at the time, is mysterious. It wants you to commit completely to its event-driven metaphor — in other words, to forget what you know about the actual web.

If your project requires you to jump outside the metaphor, then you end up in a special circle of hell, one where some things happen as you expect them to, and others don’t. It is a classic [leaky abstraction](//www.joelonsoftware.com/articles/LeakyAbstractions.html).

I say this as someone who has spent a lot of time in the web forms [page life-cycle](http://msdn.microsoft.com/en-us/library/ms178472.aspx). It is quite an achievement in many ways; it opened the web to many traditional desktop developers. However, in 2009, it feels like a lot of [useless beauty](/use-case-the-metric-system-or-all-that-useless-beauty/).

The result of such high-level abstractions is that a good programmer (like my friend) feels like a bad programmer. I suspect I’ll find him going [back to basics](//www.asp.net/mvc/) soon.
