---
title: "Does TypeScript make for more performant JavaScript?"
date: 2018-07-19
---

I have a theory that the use of TypeScript _de facto_ makes for more performant JavaScript, by making the runtime’s “type prediction” more accurate.

TypeScript’s static types are erased at compile time, of course, and are not present at runtime. But I suspect that we get a performance benefit anyway. Hear me out.

At runtime, a JavaScript variable can be any type – number, object, string, etc. 

As an optimization, if I understand correctly, JavaScript runtimes (such as V8) do their best to predict types, based on runtime observation. If a variable – say, a function parameter – turns out to be a number most of the time, V8 will predict a number type for subsequent invocations.

If this assumption turns out to be wrong, V8 will back out of the predicted branch, and handle it correctly. But if the assumption is correct, we get a performance benefit. A hot path, so to speak.

My hypothesis is that the use of TypeScript by the developer makes correct predictions **more likely**.

By typing a function parameter as `number`, we prevent _ourselves_ from passing some other type to that function call. So V8’s type prediction turns out to be more accurate, more often, thanks to the discipline enforced at development time.
