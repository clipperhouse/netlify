---
title: "More jQuery performance tips: 11 keystrokes buy you 10x"
date: 2009-06-09T11:54:00.000Z
author: "Matt Sherman"

---

Dave Ward has a very extensive post (with benchmarks) on [jQuery selector optimization](http://encosia.com/2009/06/09/11-keystrokes-that-made-my-jquery-selector-run-10x-faster/). Really interesting stuff — the lesson is, the more specific your query, the faster it executes. [The DOM is a data source](/blog/post/jQuery-performance-tips.aspx), after all. He was able to achieve a 10x performance improvement by adding just 11 characters.
