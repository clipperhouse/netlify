---
title: "So, you’re inspecting strings on the hot path"
date: 2025-07-28
---

> A follow-up to [So, you're splitting strings on the hot path]({{< relref "split.md" >}})

I have enjoyed optimizing [my Go library](https://github.com/clipperhouse/uax29) for splitting (tokenizing) words according to the Unicode standard.

I recently [added optional "joiners" functionality](https://github.com/clipperhouse/uax29/tree/master/words#joiners), with a focus on performance. A "joiner" is a character, typically a symbol like `@` or `#` or `/`, that you specify should be treated like any other letter, and which should _not_ split a word.

## Use case

According to the [Unicode standard](https://unicode.org/reports/tr29/#Word_Boundaries), handles such as "@clipperhouse" will result in two separate tokens: "@" and "clipperhouse".

Similarly, a `#hashtag` will be two tokens, and `email@example.com` will be three. The standard also splits on hyphens `-`, slashes `/`, etc.

This is all fine, but perhaps you don't want that -- perhaps, for your app, you'd like to treat handles & email addresses -- or hyphen-ates, or fract/ions -- as a single word.

## Naïve version

One could do this joining logic _after_ the tokens come out of the tokenizer. Something like “if this token is ‘@’ and the next token is alphanumeric, concatenate". Perfectly fine.

But it’s a _lot_ faster to do it within the tokenizer. Why?

## Faster version

This is a lot faster within the tokenizer because:

1. The tokenizer is already looking at all the bytes. If you do it outside the tokenizer, you will inspect the same bytes a second time. That might be twice as slow, or worse!

2. You will be allocating an additional string.

From my perf-obsessed perspective, wins come from iterating as few times as possible, and allocating as little as possible.

My tokenizer is pretty optimal in those respects today. So, if you add even a single allocation on your hot path, or a redundant iteration, your perf craters.

So, I moved some logic into the tokenizer's [main loop](https://github.com/clipperhouse/uax29/blob/master/words/splitfunc.go#L91-L96), so you won't have to do those things. Here's [how to use it](https://github.com/clipperhouse/uax29/tree/master/words#joiners).

## Your code

The above is intended as food for thought in your own code. If you are working with strings on the hot path, you might be iterating over bytes you've already seen, and adding allocations. If you can think of ways to avoid that, you will get a performance win.

--

This blog post started as [this series of tweets](https://x.com/clipperhouse/status/1949872965169893833).
