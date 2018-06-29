---
title: "gen: optional typewriters"
style: "app"
---

Here are a few optional [typewriters](/gen/typewriters/) I've created. They are not built into [gen](/gen/), but can be added as follows.

### Set

To add:

	gen add github.com/clipperhouse/set

To use:

	// +gen set
	type MyType struct{}

Implements a strongly-typed set with common [operations](http://godoc.org/github.com/deckarep/golang-set) (Union, Difference, etc). Items stored within it are unordered and unique.

The implementation is based on [github.com/deckarep/golang-set](https://github.com/deckarep/golang-set), with permission. API documentation is available here. Parameters and return values that would be `interface{}` in the @deckarep implementation will instead use your type in the gen implementation.

### List

To add:

	gen add github.com/clipperhouse/linkedlist

To use:

	// +gen list
	type MyType struct{}

Implements a strongly-typed, doubly-linked list, based on [golang.org/pkg/container/list](https://golang.org/pkg/container/list). API documentation is available at that link. Parameters and return values that would be interface{} in the golang implementation will instead use your type in the gen implementation.

### Ring

To add:

	gen add github.com/clipperhouse/ring

To use:

	// +gen ring
	type MyType struct{}

Implements strongly-typed operations on circular lists, based on [golang.org/pkg/container/ring](https://golang.org/pkg/container/ring). API documentation is available at that link. Parameters and return values that would be interface{} in the golang implementation will instead use your type in the gen implementation.

[← back to gen overview](/gen/overview/)
