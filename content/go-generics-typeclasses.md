---
title: "Generics as builtin typeclasses"
date: 2018-09-04
author: "Matt Sherman"
---

I love the debate around the [generics proposal for Go 2](https://go.googlesource.com/proposal/+/master/design/go2draft-generics-overview.md).

In the spirit of Go’s ‘good enough’ type system, here’s a thought experiment for ‘good enough’ generics. I think we can get 80% of the power for 20% of the complexity.

(‘Good enough’ is a compliment – I come from a C# background and find the simplicity of Go’s type system refreshing.)

I propose that the first version of Go’s generics consist of a finite-but-thorough set of **builtin type classes**, instead of user-defined contracts. Usage might look like:

```
func Sum(type T numeric)(x []T) T {
	var total T
	for _, v := range x {
		total += v
	}
	return total
}
```

or

```
type Set(type T comparable) []T
```

...where `numeric` and `comparable` are typeclasses, defined below. In fact, the `go/types` package already [defines many type classes](https://github.com/golang/go/blob/master/src/go/types/predicates.go), without using that terminology.

Instead of covering the full design space of what generics can do, we focus on an intuitive set of typeclasses that meets a broad set of needs.

### Typeclasses

```
numeric = integer | float | complex
  // supports +, -, *, / operators, enabling generic Sum, Average, etc

comparable = [requires logic]
   // supports == operator, enabling generic Set
   // Defined here: https://golang.org/ref/spec#Comparison_operators

orderable = integer | float | string
  // supports < and > operators, enabling generic Min, Max, Sort

integer = int | int8 | int16 | int32 | int64| uint | uint8 | uint16 | uint32 | uint64 | uintptr | byte | rune

float = float32 | float64

complex = complex64 | complex128
```

### Assignability

Typeclasses are not assignable types, they are (optional) constraints on generic type declarations.

```
// Wrong
type Foo struct {
	Age numeric
}

// Right
type Foo(type T numeric) struct {
	Age T
}

// Constructor example
func NewFoo(type T numeric)(age T) Foo(T) {
	foo := Foo(T) {
		Age : age,
	}
	return foo
}
```

### What this reminds me of

Typeclasses look a lot like **union types**. `int8` gets unioned into `integer` which gets unioned into `numeric`, etc.

Another way to think of type classes is as **interfaces for operators**. Imagine that the `+` operator were an `Add()` method instead. The `numeric` type above is a lot like an `Adder` interface.
