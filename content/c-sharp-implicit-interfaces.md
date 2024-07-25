---
title: "C# (almost) has implicit interfaces"
date: 2024-07-25
---

_Background: I move between Go and C# a lot, and like to [compare them]({{< relref "go-csharp.md" >}})_

Go has [implicit interfaces](https://go.dev/tour/methods/10), which means that a type implements an interface _iff_ it satisfies that interface. It's not declared. It's simply something that the type system determines is true or false, as needed.

When I first heard this, I though it was clever and I was a bit enamored (having come from a C# background). Now, I think implicit interfaces are simply, obviously right. Satisfying an interface is a characteristic, not an assertion.

> There is an [idiom in Go](https://stackoverflow.com/questions/31753282/go-how-to-explicitly-state-that-a-structure-is-implementing-an-interface) for making such declarations explcit, if only to signal intent and avoid regressions.

C#, on the other hand, has explicit interfaces, by design. It's a fine choice, but I have found myself wishing to classify types that have a shared method signature, but do not share an interface.

For example, C#'s `Stream` and `StreamReader` have identical `Read` methods -- but no `Reader` interface declared. I have a type that I wish to accept `Stream` or `StreamReader`. What to do?

Well, I realized I don't care about the _types_, per se, I care about their `Read` methods.

Turns out, if one wants "implicit interfaces" in C#, one can use generic delegates. [Here's one called `Read<T>`](https://github.com/clipperhouse/uax29.net/blob/main/uax29/Buffer.cs).

`Stream.Read<byte>` matches that delegate, as does `StreamReader.Read<char>`. So my type can accept both.

A delegate is just a function signature, and a method "implicitly implements" the delegate or doesn't, regardless of whether one declares it.
