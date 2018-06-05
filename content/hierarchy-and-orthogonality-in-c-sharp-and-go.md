---
title: "Hierarchy and orthogonality in C# and Go"
date: 2014-08-25T00:17:39.000Z
author: "Matt Sherman"

---

Prompted by [this question](https://groups.google.com/d/msg/golang-nuts/aJ6JiiIusqg/TJM09vOkv9YJ) I got to thinking about methods in C# and Go. It’s another example, I realized, of Go’s (logical) insistence on orthogonality and (stylistic) insistence on flatness/lack of hierarchy.

Go does not allow methods to be defined within a struct (ersatz class) definition. Instead of this, where the method lives in the declaration:
`type Foo struct {  
    Count, Price int  
    Total() int {     // nope  
        return Count * Price  
    }  
}`

…one writes this:
`type Foo struct {  
    Count, Price int  
}``func (f Foo) Total() int {  
    return f.Count * f.Price  
}`

Which is to say, the method is its own free-standing declaration.

In C#, you have a choice of doing either (eliding access modifiers):
`struct Foo {  
    int Count;  
    int Price;  
    int Total() {  
        return Count * Price;  
    }  
}`

...or, using extension methods (eliding the outer class):
`struct Foo {  
    int Count;  
    int Price;  
}``int Total(this Foo foo) {  
    return foo.Count * foo.Price;  
}`

Go achieves two things in this design decision. First, orthogonality: there is _one_ way to write a method.

Second, a matter of taste perhaps, there is less hierarchy in Go. Methods are just funcs alongside all the others; they don&#39;t represent a new level of &#34;indentation&#34; or membership.

There are other design justifications described in the above link, but these advantages are the ones that jump out for me.
