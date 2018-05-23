---
title: "Bugs are a failure of prediction"
date: 2015-02-07T23:12:58.000Z
author: "Matt Sherman"

---

We think of bugs as flaws in code. This is incorrect, or at best, banal.

Rather, the essential definition of a bug is that a programmer **failed to predict** what a piece of code would do.

See, smart programmers wrote the code. Other smart programmers looked at the code. It went into production, and did the wrong thing.

No programmer wanted it to do the wrong thing. They thought it would do the right thing. The prediction was wrong. So let’s focus not on the broken code, but on the flawed prediction.

#### Tests

I like tests not for safety, per se. I like tests because they require us to articulate what a piece of code should do. Further, they require us to interact with our code from the outside (you know, like a user). Safety is a side effect of these two things.

When we test code, we test our predictions of what the code will do.

#### Complexity

Humans form a mental model of what a piece of code will do. That mental model is limited in size. To the extent that understanding a piece of code requires understanding other, possibly far away, pieces of code, we make forming an accurate mental model more difficult.

Code becomes unpredictable by humans when it taxes our mental models.

#### Playing computer

Some rare programmers can look at a piece of code and know what it will do. Most of us can’t. Instead, we have educated guesses.

The computer (the compiler, the environment) is the unambiguous decider of what the code will do. When we think we know what a piece of code will do, we are playing computer.

The computer is better at playing computer than the human mind. A prediction about what a piece of code will do, short of executing it, is folly.

#### “Readability”

Failure of prediction often happens because a piece of code doesn’t look like what it does. This is a very subjective idea, of course.

The measure for me is: how often would a programmer _new to this code_ make correct predictions about how it behaves?

This is of course an argument about abstractions. One person’s “readable abstraction” is another’s “too much magic”.

What we call “readability” is in fact predictability.

—

None of these are new ideas. They are mostly best practices. We believe them, often correctly, to lead to higher quality software.

They work, however, not because they “improve code”. Rather, they improve _human understanding_ of code. That distinction is the essence of understanding bugs.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=9017793)
