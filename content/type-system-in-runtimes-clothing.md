---
title: "A type system in runtime’s clothing"
date: 2014-08-25

---

Any sufficiently complicated C or Fortran program contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp. — [Greenspun](http://en.wikipedia.org/wiki/Greenspun%27s_tenth_rule)

I am reminded of this quote when I see a common pattern in data stores, especially RDBMS. It’s a key-value pattern, along the lines of:
`Columns: IDType | ID | Value`

…combined with application code which branches on the IDType column. The Value (and heck, the identifier) are interpreted differently based on the type.

This is a fine pattern depending on one’s goals. But it’s important to understand the choice one is making here: **we’ve created a dynamic type system**. Those if’s and switch’s are type resolution, happening at runtime.

With a RDBMS, a table typically maps to a single type, say “Person”. One can completely express the shape of that entity in code, requiring no conditionals at runtime. Values flow into known slots.

Using the pattern at top, by contrast, one might create a “Documents” table. IDType might be “PDF” or “Section” or whatever; the Value may be a complex payload or a reference to another entity.

And it can work great. As a key-value store, the store is “dumb”: meaning happens in code. This can give you great performance and a lot of presentation choices at runtime.

But one gives up a large class of static (compile-time) type guarantees; one inevitably will do “type” checks at runtime, to combat newly-possible [illegal states](https://www.google.com/webhp?sourceid=chrome-instant&amp;ion=1&amp;espv=2&amp;ie=UTF-8#q=make%20illegal%20states%20unrepresentable).

Too often, such code looks like an _ad hoc, informally-specified, slow_ type system.

The upshot is, it’s a trade-off between safety and flexibility, exactly as with static and dynamic type systems. If one chooses the latter, plan on accounting for legal and illegal states in application code — and be clear about guarantees the system will and won’t offer.
