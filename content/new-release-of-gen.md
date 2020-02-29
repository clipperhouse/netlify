---
title: "New release of gen"
date: 2014-01-26
author: "Matt Sherman"

---

I’ve a new release of gen, the generics-like tool for Go. It includes API changes so I suggest reading the [changelog](http://clipperhouse.github.io/gen/#Changelog). Highlights:

### Markup instead of command-line

Where before you would specify types to gen at the command line, à la gen package.Type, now you simply add tags to types (in comments):

// +gen  
type MyType struct {…}  

…and the command-line simply becomes gen. This make re-generating easy, the specs are entirely in your code.

### Projections

You can now [project](http://clipperhouse.github.io/gen/#Projections) your types into other types, including primitives.

// +gen projections:”int,OtherType”  
type MyType struct {…}

### Type evaluation

This release includes much more evaluation of types to determine what they are capable of. So, for example, we know whether a type is comparable (usable as a map key), ordered (max, min, sort) or numeric (sum, average).

### Tests

…are more complete and more granular.

### Anything&lt;T&gt;

We’re now oriented for adding arbitrary generics-like functionality. Up next (probably), we’ll add support for containers, so you can simply generate (e.g.) Set&lt;T&gt;, List&lt;T&gt;, Pool&lt;T&gt;…

**To update:** go get -u github.com/clipperhouse/gen

Hope you like it, feedback welcome on Twitter or GitHub, both @clipperhouse.
