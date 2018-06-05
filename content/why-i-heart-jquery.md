---
title: "Why I heart jQuery"
date: 2009-09-01T21:46:00.000Z
author: "Matt Sherman"

---

I am one of the many people who have fallen in love with jQuery over the past year or two. I haven’t seen it articulated why this might be, so here’s my stab at it.

Many programmers I know are server-oriented. They consider dealing with HTML and Javascript a chore. Those client-side things are sloppy, loose and hard to predict. We patch them together as best we can, and cross fingers.

So why do such people (including myself) find jQuery so appealing? I believe it’s because jQuery works in a metaphor that we server types understand: **identify, and manipulate.**

jQuery is comfortable for database types because it is a set (or selection) language. It provides a clear, flexible, unambiguous way of identifying the things you’d like to manipulate.

You can select them individually (via id) or as a group (by class or element type). You can do intersections (give me all things that are paragraphs _and_ also of class x), unions (give me everything that’s a button _or_ a link) and filters (give me all checkboxes that are checked). You can combine these sets ad hoc, in one concise statement. It is, indeed, a [query](/blog/post/jQuery-performance-tips.aspx).

Then, you have a well-defined set of verbs (methods) by which you can act on the elements you’ve selected. You can hide them, move them, re-style them with clear commands. You can change their attributes, mark them up, and come back to them later.

We server guys do those things all the time, except that it usually involves databases and object models. These familiar concepts had eluded Javascript prior, and that’s the bridge that jQuery has built.
