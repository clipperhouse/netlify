---
title: "Logic as data, and a case where strong typing impeded learning"
date: 2009-12-06

---

These days, I am doing a lot of Javascript, or more accurately, a lot of jQuery. A concept I have gotten comfortable with is the idea of passing logic as data.

[This article](http://leftrightfold.com/?p=85) demonstrates a pattern to avoid brittle if-then statements. Instead of very long conditional branches, one encapsulates evaluation logic in a table of data. Each data item is a function containing an arbitrary piece of logic — code which runs _after_ being passed to the main algorithm. To add new rules you add a new item to the table — no code changes to your core algorithm. The algorithm **delegates** decision-making to functions outside of its own scope.

The key point is that we are not passing the results of a function, we are passing the function itself. **I never quite got my head around this in C#** (it’s doable via delegates), but in Javascript it’s very easy. If you are referring to a function, you pass its variable name: myfunction. It’s not evaluated yet. When you want to actually run the code, you refer to myfunction().

myfunction is verbs — a set of instructions. myfunction() is a noun — the outcome of those instructions. Both can be passed around equivalently.

The simple syntax really helped me make this breakthrough. C#’s [delegate](http://msdn.microsoft.com/en-us/library/ms173171%28VS.85%29.aspx) syntax — which is logically equivalent to the above, but more strongly typed — left me confused.

Professionally, I grew up on static typing — unambiguous definitions and compile-time checking. And for my core business logic, I still insist on it. (Silent-but-deadly errors are very frightening.)

In the case of delegation, however, the syntax required by strong typing was a hindrance to learning. Interesting trade-off.
