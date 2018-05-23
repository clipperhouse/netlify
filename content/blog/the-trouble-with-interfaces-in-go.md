---
title: "The trouble with interfaces in Go"
date: 2014-02-04T03:35:38.000Z
author: "Matt Sherman"

---

I am working on a [tool](https://github.com/clipperhouse/gen) for generics-like functionality in Go. Despite what you may have heard, Go does have generic functionality, in that you can create (e.g.) methods which operate on any type, by using interface{} — the interface that all types implement. For example, you can do something like:

func DoSomething(interface{}) interface{} {  
…  
}

…where both the input parameter and the output return value are interface{}. It’s quite flexible. The very nice [go-linq](https://github.com/ahmetalpbalkan/go-linq) operates this way, as do data structure packages like [Set](https://github.com/fatih/set). That they will accept any type, and can return any type, meets a definition of generic.

The trouble is, the user will (in all likelihood) need to cast return values into types to do something meaningful. If they use such a function to, say, filter a slice of int, the user will need to cast the resulting values back to int to proceed.

There is an [adage](http://en.wikipedia.org/wiki/Robustness_principle) in programming that one should be liberal in what one accepts, and conservative with what one emits. The above pattern only gets the first part right. The input parameter is liberal, but unfortunately so is the return value.

This burdens the user with figuring out the nature of the output. It’s more code, and less safety.

For me, static typing means exploiting type information to make guarantees at compile time. Without traditional generics, we must resort to doing some of what (IMHO) is the type system’s job.

So one of the motivations of [gen](https://github.com/clipperhouse/gen) is to deal with that return value on the right-hand side of the above code sample — to bring it into the realm of known types that the compiler (and the user) can reliably exploit.
