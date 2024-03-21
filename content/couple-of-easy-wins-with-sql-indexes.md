---
title: "A couple of easy wins with SQL indexes"
date: 2010-10-17

---

I was lucky enough to watch a great talk by SQL expert [Brent Ozar](http://www.brentozar.com/) courtesy of [Fog Creek](http://www.fogcreek.com/). A couple of actionable takeaways that stuck with me are about creating and choosing indexes.

Indexes in SQL for me are kind of a black art. You look at Query Execution plans, try to intuit where the work is being done, and then make a guess as to what index might help. Then you see if things are “faster”. I never _really_ know which ones are helping in an empirical way.

Turns out you can query SQL Server itself to find out. Check out this [Find Missing Indexes](http://www.sqlserverpedia.com/wiki/Find_Missing_Indexes) query by Brent. And if you are wondering whether your existing indexes are doing any good, try this [Find Indexes Not In Use](http://www.sqlserverpedia.com/wiki/Find_Indexes_Not_In_Use) query.

(As a practical matter, Brent recommends only changing a few indexes at a time. Keep the experiment controlled.)

These scripts look like great 80–20 solutions: a small amount of work to find the the most glaring issues. It’s the sort of thing a guru like Brent would charge big $$ for. ;)
