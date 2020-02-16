---
title: "jQuery appears to be incompatible with IE9 preview"
date: 2010-03-16
author: "Matt Sherman"

---

It would appear that jQuery (1.4.2) is not compatible with the new [IE9 preview](http://ie.microsoft.com/testdrive/):

Looks like the .ready() and .live() events are throwing errors. Anyone else?

With IE9’s focus on CSS selectors, I am hoping for some jQuery optimizations — those selectors are a lot like jQ’s so I wonder if a native API will be exposed to use the “native” selector engine.
