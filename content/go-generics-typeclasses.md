---
title: "Generics as builtin typeclasses (in Go)"
date: 2018-09-04
author: "Matt Sherman"
---

I love the debate around the [generics proposal for Go 2](https://go.googlesource.com/proposal/+/master/design/go2draft-generics-overview.md).

In the spirit of Go's ‘good enough’ type system, here's a thought experiment for a ‘good enough’ generics. I think we can get 80% of the power for 20% of the complexity.

(‘Good enough’ is a compliment – I come from a C# and find the simplicity of Go’s type system refreshing.)

### Typeclasses

I propose that the first version of Go’s generics consist of a finite-but-thorough set of **builtin type classes**, instead of user-defined contracts.

Usage might look like:

```
func Sum(type T numeric)(x []T) T {
	var total T
	for _, v := range x {
		total += v
	}
	return total
}
```

...where `numeric` is a typeclass (defined below). In fact, the `go/types` library already [defines many type classes](https://github.com/golang/go/blob/master/src/go/types/predicates.go), without using that terminology.

Inspired by `go/types`, here’s a set of typeclasses that might meet a broad set of needs.

```
numeric = integer | float | complex	
  // supports +, -, *, / operators, enabling generic Sum, Average, etc

comparable = [requires logic]
   // supports == operator, enabling generic Set. logic at:
   // https://github.com/golang/go/blob/master/src/go/types/predicates.go#L81

orderable = integer | float | string
  // supports < and > operators, enabling generic Min, Max, Sort

integer = int | int8 | int16 | int32 | int64| uint | uint8 | uint16 | uint32 | uint64 | uintptr | byte | rune

float = float32 | float64

complex = complex64 | complex128
```

### What these remind me of

These look a lot like **union types**. `int8` gets unioned into `integer` which gets unioned into `numeric`, etc.

Another way to think of type classes is as **interfaces for infix operators**. Imagine that the `+` operator were an `Add()` method instead. The `numeric` type above is a lot like an `Adder` interface.

### Inferrable?

It appears that type classes are inferrable at compile time, even without declaring them – if we call a generic Sum with a non-numeric type, we can know that, no?