---
title: "Bugs are a failure of prediction"
date: 2015-02-07T23:12:58.000Z
author: "Matt Sherman"

---

We think of bugs as flaws in code. This is incorrect, or at best, banal.

Rather, the essential definition of a bug is that we **failed to predict** what a piece of code would do.

See, smart programmers wrote the code. Other smart programmers looked at the code. It went into production, and did the wrong thing.

We thought it would do the right thing. The prediction was wrong. So let’s focus not on the broken code, but on improving our predictions.

### Tests

I like tests not for safety, per se, but because they require us to articulate what a piece of code should do. Further, they require us to interact with our code from the outside (you know, like a user). Safety is a side effect of these two things.

When we test code, we test our predictions of what the code will do.

### Complexity

Humans form a mental model of what a piece of code will do. That mental model is limited in size. To the extent that understanding a piece of code requires understanding other, possibly far away, pieces of code, we make forming an accurate mental model more difficult.

Code becomes unpredictable by humans when it taxes our mental models.

### Playing computer

Some rare programmers can look at a piece of code and know what it will do. Most of us can’t. Instead, we make educated guesses.

The computer (the compiler, the environment) is the unambiguous decider of what the code will do. When we think we know what a piece of code will do, we are playing computer.

The computer is better at playing computer than the human mind. A prediction about what a piece of code will do, short of executing it, is folly.

### “Readability”

Prediction is more likely when a piece of code looks like what it does. This is a very subjective idea, of course.

The best measure is: how often would a programmer _new to this code_ make correct predictions about how it behaves?

This is an argument about abstractions, of course. One person’s “spare me the details” is another’s “too much magic”.

What we call “readability” is in fact predictability.

—

None of these are new ideas. They are mostly best practices, and we believe they lead to higher quality software.

These practices work, however, not because they “improve code”. Rather, they improve _human understanding_ of code. That distinction is the essence of predicting bugs.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=9017793)
