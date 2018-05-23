---
title: "Lore"
date: 2016-03-10T16:39:52.000Z
---

Code has a user experience. Our methods have a UX. Our data models have a UX.

The users are our colleagues, current and future. We are always on the lookout for fresh information, even anecdotal, on the success of our users.

A big UX problem is an **abundance of lore**. Lore is when a developer needs to hear an explanation from an elder before using a piece of code, and in the absence of such storytelling, will have a bad time.

If a smart person using an API causes things to blow up, that’s a bad UX. If an API leads a smart person to lose hours down a rabbit hole, we need to recognize it, first and foremost, as a UX problem.

Lore is an **unreliable dependency**. No one wants to depend on having spoken to the right person at the right time, in order to succeed. Occasionally, lore is unavoidable; usually it’s not.

The opposite of lore is the **“pit of success”**. An API offers a pit of success when an ignorant person, using it naively, is likely to succeed. Or at the very least, dangerous things clearly advertise their danger. (Words like “unsafe” and “async” and “thread” should appear in names more often).

As we design our code, let’s ask: will a subsequent programmer, without the benefit your advice, understand this code? Are the callers of your code successful, in your absence?

Think of **lore minimization** as an everyday goal.
