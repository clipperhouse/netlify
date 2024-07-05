---
title: "Tips for moving between Go and C#"
date: 2024-07-04
---

Recently, I've implemented a Unicode tokenizer in [in Go](https://github.com/clipperhouse/uax29) and [in C#](https://github.com/clipperhouse/uax29.net), and my career has been ~equally divided between those languages. Here are some tips moving between them.

### Statics & instances

In Go, properties and methods defined at the top level of a package have ~the same semantics as C#'s `static`. Go uses the unfortunate term "global" for this, but it's better understood package-scoped, and static for callers.

In C#, there are reference types (classes) and value types (structs, primitives). In Go, there are only value types, and then one can choose to make a reference (pointer) to the value. You will do this if you want to the object to be mutable or to maintain state.

C# classes have constructor methods with their own semantics. In Go, one just writes a plain method that does the constructing. This is also true of getters and setters. Go doesn't have them, just use plain methods.

### Overloads

C# allows several methods to have the same name but different parameters. Those unique signatures are enough to infer which of the same-named methods to call. This can make for a nice API for the caller.

Go doesn't have overloads. If a method takes different parameters, it needs a different name.

Default values are a form of overload, btw. C# offers them, Go does not.

### Namespaces

Go doesn't have explicit namespaces as C# does. In Go, the package is the namespace. Go also doesn't have static classes, which in C# are _de facto_ namespaces.

Go will generally resist if one tries to create deep namespace hierarchies. Instead, in Go, one is encouraged make subfolders (which are packages). This is a nudge toward [compostion over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance).

### Slices and arrays

In Go, the distinction between "array" and "slice" is mostly abstracted away. One declares a slice and appends to it. The backing array is automatically allocated (and resized as necessary).

A slice is a **view into the backing array**, though by-and-large you don't think about it. [Here are the details](https://go.dev/blog/slices-intro).

This is most similar to C#'s `List`, in that it also automatically allocates and re-allocates (resizes) as needed.

C# does have arrays of course. You can allocate them yourself. A gotcha I ran into: if you slice into an array in C#, like `myArray[1..5]`, you will **allocate a new array**.

C# now has `Span<T>` which is very much like Go's slices. They are small, lightweight structs that represent a view into the backing array. Really nice.

A gotcha in both languages: if you have a view into a backing array (Go slice or C# span), and you mutate the backing array, you may find yourself unpleasantly surprised. It's really easy to do this in both languages.

Your best bet is to ensure that writes to the array happen first, and then hand it off to the reading logic, and ne'er the two should be intertwined. In C#, `ReadOnlySpan<T>` offers some protection. I wish Go had that.

### Accessibility/visibility

In Go, members of a package or struct are either exported or not (by using upper or lower case names).

In C#, these equivalents are `public` and `internal`/`private`. `internal` means package-scoped; `private` is narrower than that.

If you want C# to feel like Go, use the `public` modifier for exported, and `internal` for unexported. C# has further modifiers if you wanna get into it.

### Testing

In C#, it's idiomatic to have a separate project for testing. In Go, it's idiomatic for tests to live in the same package. When in Rome.

In Go, the advantage of tests in the same package is the ability to test internal methods. [Here's](https://stackoverflow.com/questions/358196/c-sharp-internal-access-modifier-when-doing-unit-testing) the idiomatic way of testing internal methods in C#.

Or, you can try my crazy little way of doing [Go-style "alongside" testing in C#]({{< relref "go-test-csharp.md" >}}). I like it so far.

### Benchmarking & JITs

Benchmarking in C# is a little more difficult, as the runtime has a JIT. This means that the performance of a routine will change (for the better usually) over time, as the hot path is optimized by the JIT.

The downside is that C# benchmarking must account for this. Out of the box, BenchmarkDotNet takes care of this for you -- it goes through warmup phases in an attempt to replicate a long-running (JITted) process. Takes a while.

Go is ahead-of-time compiled, and so benchmarks are straightforward and fast, but basic. For rigorous statistics, consider [benchstat](https://pkg.go.dev/golang.org/x/perf/cmd/benchstat).