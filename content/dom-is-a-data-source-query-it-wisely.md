---
title: "The DOM is a data source, query it wisely"
date: 2009-06-02
author: "Matt Sherman"

---

Nice set of performance tips for jQuery selectors: [http://www.artzstudio.com/2009/04/jquery-performance-rules/](http://www.artzstudio.com/2009/04/jquery-performance-rules/)

They are all quite logical if you are used to selecting from data sets or file hierarchies. More specificity = faster selection; don’t do the same “query” twice.

Remember, the DOM is a data source. With an API as simple as jQuery’s, it’s easy to forget about the work being done underneath.
