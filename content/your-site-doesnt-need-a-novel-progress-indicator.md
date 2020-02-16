---
title: "Your site doesn’t need a novel progress indicator"
date: 2013-09-18
author: "Matt Sherman"
---

There’s been healthy talk about progress indicators in the age of ajax. In our will-to-design I think some things are being missed.

First, your browser’s UI already includes a progress indicator, and perhaps more than one:

![progress-chrome](//clipperhouse.files.wordpress.com/2013/09/progress-chrome2.png)

![status-chrome](//clipperhouse.files.wordpress.com/2013/09/status-chrome1.png)

![progress-ff](//clipperhouse.files.wordpress.com/2013/09/progress-ff.png)

Your user is accustomed to these things, not unlike the back button. Why would we introduce a novel UI element, adding to the user’s cognitive load, when we already have them?

The shortcoming here is that, perhaps, the browser doesn’t offer obvious programmatic access to the above, or that it doesn’t occur to us to use it.

So I published [this hack](//gist.github.com/clipperhouse/6600675) to put the browser in a loading state programmatically. I am sure it can be improved upon, let me know your thoughts.

[discuss on hacker news](//news.ycombinator.com/item?id=6405483)
