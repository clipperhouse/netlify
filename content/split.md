---
title: "So, you’re splitting strings on the hot path"
date: 2024-08-03
---

Can we make it less expensive? Probably yes. We'll talk about Go and C# in this post.

### n+1 allocations

The semantics of splitting strings (or bytes) in standard libraries typically is "return `n` substrings and collect them in an array".

These are fine semantics! But it certainly means `1` allocation (for the array) and likely `n` (for the substrings). Let's try two techniques to see if we can make them zero.

(I don't claim originality, there's prior art for everything below.)

## Iterate instead of collect (the `+1`)

Instead of collecting all of the substrings upfront, we might create an **iterator** (or enumerator in C# parlance). We return each substring as needed, but don't collect them all at once. Think streaming instead of batching.

#### In Go

In my experiments, `strings.Split` and `bytes.Split` (standard library) will always allocate the `1` array.

To zero it out, I've implemented an [iterator over splits](https://github.com/clipperhouse/split) for bytes & strings. `bufio.Scanner` in the standard library follows a similar pattern.

#### In C#

`string.Split` will always allocate `n+1` in my experiments.

[`SpanSplitEnumerator`](https://github.com/dotnet/runtime/pull/104534) (coming in C# 9) achieves zero allocations in my experiments. Forking that, I've implemented a [enumerator over splits](https://github.com/clipperhouse/Split.net) for bytes, strings, streams & readers.

Other implementations in C#: [`StringTokenizer`](https://learn.microsoft.com/en-us/dotnet/core/extensions/primitives#the-stringtokenizer-type), [`StringExtensions.Tokenize`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.toolkit.highperformance.extensions.stringextensions.tokenize?view=win-comm-toolkit-dotnet-6.1)

## Don't allocate substrings (the `n`)

The original string is already in memory. We would like the substring to be an **inexpensive "view"** into that underlying storage, instead of a literal copy.

#### In Go

In my experiments, `strings.Split`'s and `bytes.Split`'s substrings might or might not allocate on the heap. They are slices or string headers -- which are inexpensive views into the underlying bytes.

The allocation depends on escape analysis. We can make the escape less likely by using the aforementioned [iterator](https://github.com/clipperhouse/split) -- only one substring is in memory at a time, on-demand.

#### In C#

`string.Split` will always allocate `n` (sub)strings in my experiments. C# has implemented `Span<T>`, a type which is an inexpensive view into the underlying memory, and is guranteed to stay on the stack.

There is a [new `Span` splitter](https://github.com/dotnet/runtime/pull/104534) in the standard library, coming in C# 9. It achieves zero allocations in my experiments. My [aforementioned splitter](https://github.com/clipperhouse/Split.net) began as a fork of the above, and is available for C# 8.

## Why you might do this

To make hot paths faster, and perhaps more importantly, to reduce the tax on the garbage collector.

Ideally, you'll look at your whole pipeline and think _streaming_ -- small batches in memory, inexpensive views into underlying bytes, minimal copying. What's the original source of the string, and what's its ultimate destination?

## Why you might not do this

If you actually need to _collect_ the substrings -- if later functions are just going to allocate them anyway -- the above techniques might not be a win.

## By the way

If your goal in splitting strings to parse "words", splitting on spaces will be too naive. There is a [Unicode spec](https://www.unicode.org/reports/tr29/#Word_Boundaries) for word boundaries, which is probably what you want.

I've implemented that spec [here in Go](https://github.com/clipperhouse/uax29) and [here in C#](https://github.com/clipperhouse/uax29.net).
