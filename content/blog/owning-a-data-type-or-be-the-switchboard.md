---
title: "Owning a data type, or, be the switchboard"
date: 2012-02-11T19:39:32.000Z
---

I was chatting with my colleagues at Stack Exchange the other day and we wondered what it means to “own” a data type.

The best recent example is Twitter. They effectively “own” the format of short, one-to-many messaging. Their “product”, the web app, is good but not that compelling on its own. The fact that everyone who wants to participate in their particular communication protocol needs to pass through their “switchboard” — well, that _is_ compelling. They own the format.

I see a similar opportunity in a couple of small products right now. With luck, [Pinterest](http://pinterest.com/) could become the canonical data format for shared “things” — any noun really. And my corporate cousins at [Trello](http://trello.com/) could do the same for a particular idea of lists-on-boards.

Each of these data formats is not particularly profound in architecture. But they loosely couple a few ideas which, when opened via an API and adopted by many, can lead to many emergent use cases.

(It’s kinda Unix-y, actually — small parts, loosely coupled, some of which become “the” way to do certain things. Who wants to be grep?)

Call it data, or call it a protocol, but the idea is that there is a surprising number of “simple” schemas that no one has established a standard for. A small set of correct assumptions, well presented, can be quite profound.
