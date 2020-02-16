---
title: "Betting on a future without IE6"
date: 2009-11-30
author: "Matt Sherman"

---

My startup is developing a new web site, and every web developer must decide the extent to which they will support old technology — especially Internet Explorer 6.

From a technology perspective, officially supporting that browser could mean forgoing sexy features, or spending an inordinate amount of time working around the browser’s limitations and inconsistencies. You want your devs to spend their time making your site more compelling.

On the other hand, there are a lot of customers on IE6 whom you don’t want to alienate. It’s easy to say, hey, that browser sucks and we’re [way cooler](/blog/post/IE6-users-and-status-conscious-creative-directors.aspx) than that. We don’t want those customers anyway!

But that sort of reasoning is childish and passive-aggressive, and the [research shows](http://blog.digg.com/?p=878) that those using old technology don’t do so by choice.

So: how much of your resources do you dedicate to this problem? Here’s how I am thinking through it.

IE6 is [losing around 1 percentage point](http://gs.statcounter.com/#browser_version-ww-monthly-200812-200911) of market share per month, over the last year. It’s around 15% right now. So, it may break below 10% by the middle of next year — or sooner, if it turns out that new Windows 7 computers are replacing old XP machines (more below).

You’ll notice that the sum of IE7 and IE8’s market share has remained almost perfectly steady for a year. This implies that there is a group of people who are willing and able to use a more modern Microsoft browser — but that group is not growing.

Thus, we can infer that **IE6 users are not the upgrading to newer MS browser versions** at all. We see that IE6 expats are [going to other browsers](http://gs.statcounter.com/#browser-ww-monthly-200812-200911), mostly Firefox and Chrome.

Windows XP is losing market share at a rate that [tracks very closely](http://gs.statcounter.com/#os-ww-monthly-200812-200911) to IE6. However, in this case, it _would_ appear that those customers are sticking with Microsoft and moving to Windows 7 (note the parallel uptick and downtick in November), though some surveys [say otherwise](http://technologizer.com/2009/11/11/survey-xp-users-arent-upgrading-to-windows-7/).

—

At my (bootstrap) startup, the two most critical things are my time and features that don’t exist yet. Since we are at an early stage, the math goes like this: I am willing to lose one customer (the IE6 person) if I gain five others via new functionality.

So I **will not be testing my site on IE6** until I hear a complaint from a customer.

Testing for IE7 and IE8 is [easy](http://blogs.msdn.com/ie/archive/2008/08/27/introducing-compatibility-view.aspx), and I spend plenty of time in Chrome, Firefox and Safari. I am relying on [Javascript](http://jquery.com/) and [CSS](http://developer.yahoo.com/yui/3/cssreset/) libraries, which cushion many browser differences.

I am also architecting my site to degrade gracefully. If a user does not have Javascript, for example, they will fall back to an HTML 4 experience — which IE can handle.

I’ve found a very nice methodology — create all functionality **without** Javascript (relying on standard forms), and then apply JS as a layer of UI. If JS fails, all you miss are the pretty bits (like modals, animations and drop shadows).

So, due to fortunate timing and decent tools, I am making a calculated bet that there is more upside in focusing on features than legacy compatibility. By the time we are successful, the business case for IE6 will have passed.
