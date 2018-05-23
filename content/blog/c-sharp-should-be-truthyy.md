---
title: "C# should be truthy-y"
date: 2012-03-04T05:41:45.000Z
author: "Matt Sherman"

---

While “truthy” values in JavaScript can cause no small amount of heartache, one must admit they help readability. For objects anyway, it’s very nice to say if (object) {…} and get on with business. If the object is null or undefined, “false” strikes me as a perfectly legitimate behavior in that context.

I’d love to see something similar in C# — not truthiness, but an implicit test for existence.

Every object in C# has a ToString method. What if every object had a similar Exists method? The compiler could simply interpret if (object) — or any boolean expression — to the Exists() value, without requiring the developer to type it out.

The default implementation, from which every class would inherit, would be this != null. Yes, the current syntax wouldn’t support that evaluation (one can’t call a method on a null). The trickery would be akin to extension methods. Syntactic sugar, yes.

Like ToString, it might be overridden, depending on how one defines a legitimate value for their particular class. Doing so is fraught with danger if one goes about changing it a lot (careful with that axe, [Eugene](http://www.youtube.com/watch?v=tMpGdG27K9o)).

I would only support this idea for Object and Nullable&lt;T&gt;. And note this is not truthiness — it’s an **explicit definition with a sensible default**. Thoughts?
