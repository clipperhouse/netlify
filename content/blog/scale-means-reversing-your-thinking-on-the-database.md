---
title: "Scale means reversing your thinking on the database"
date: 2009-09-09T19:14:00.000Z
---

There are only a small number of sites in the world that require truly tremendous scale. Usually, this is referred to as “web scale”, and describes a site where the data is **user-generated and highly dynamic**. Among the first that come to mind are Facebook, Digg, MySpace and the like.

Once you get to that scale, the rules of building a site become counter-intuitive to what most of us know.

Most sites can treat the database as an abstraction layer. You plan the ideal, normalized model. You trust it to optimize performance and make sure that the data keeps its integrity.

Then you write ad-hoc queries against this model — some joins perhaps, subqueries sure, depending on your needs at the moment.

The truth is, for 99.99% of sites out there, this is the right solution. Abstraction layers exist to save time. Your programmer could spend 4 days on optimizing indexes, or she can spend those same 4 days building a great new feature. Put on your customer-facing business hat, and which do you choose?

But at a Digg level, there is no traditional database that can keep up with their traffic. For you and me, performing a few joins and aggregates against a couple of 5000-record tables is no biggie, as long as we don’t need to do it more that a few times a minute. For Digg, it’s 10,000,000-record tables, several times per second.

So they [throw out what you and I know](http://blog.digg.com/?p=966). Their assumption becomes: calculate nothing on the fly — no joins, no aggregates. No new information. Instead, dumb down the database so that it is truly just a data bucket with a massive spigot.

This means that **any calculation is done at write-time instead of read-time**. Throw out the idea that your database reflects a model, which you can manipulate ad-hoc. Rather, you calculate what you need, write it once, and serve it up unfettered, a million times.
