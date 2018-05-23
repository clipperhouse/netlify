---
title: "Principles of null-free programming"
date: 2016-03-02T19:35:42.000Z
author: "Matt Sherman"

---

Nulls are a notorious source of bugs in many programming languages. Here, I sketch out a way to avoid them, using C# for illustration.

To be clear, this post is intended as **habits for human programmers**; it is specifically _not_ about static analysis or language features.

#### Principles

I submit that we can avoid a large majority of null-related errors if we follow these two principles:

*   Passing a null is a programming error
*   Branching on null is a programming error

I think most of our problems trace back to imbuing null with meaning, i.e., we use it as a signal.

I submit that null is the **absence of meaning**. It is not a _de facto_ Boolean describing existence. Rather, it should be treated non-deterministically.

This implies that **most functions should not “handle” null**. Because null is the absence of meaning, we can not use it to make a decision.

When a method receives a null, and throws, it should be interpreted as a **bug in the caller**. (Admirably, C#’s LINQ methods do this.)

#### Some patterns

One great way of avoiding null is to have a better definition of non-existence. For example, where we might be tempted to define non-existence as null, let’s define it as **a collection of length zero**. [Option type](https://en.wikipedia.org/wiki/Option_type) implementations often look like this.

In C#, “by ID” database calls will typically return null if such a record does not exist. In LINQ, it’s expressed as a FirstOrDefault or SingleOrDefault, which return null on “not found”. Or, one can call First or Single methods which throw on same. I consider both to be bad semantics.

Rather, consider a pattern based on an explicit Boolean for existence, and where **null is not in our vocabulary**:
`Thing t;  
if (!TryThingById(12345, out t)) {  
    return &#34;Sorry, not found!&#34;;  
}``// …do as you wish with t, without worrying about null`

The Try pseudocode would look something like:
`bool TryThingById(int id, out Thing t) {  
    var rows = DB.Query(&#34;select * from Things where ID = ?&#34;, id);  
    if (rows.Length == 0) {  
        return false; // t is indeed null but should be irrelevant  
    }  
    if (rows.Length == 1) {  
        t = rows[0];  
        return true;  
    }  
    throw; // there’s a database problem  
}`

I believe this code follows our Principles above: we don’t pass a null, and we don’t branch on one either.

A common idiom in C# is to use **optional parameters**, with null as the default value:
`void Foo(int id, Bar bar = null, Baz baz = null)`

When I see a method signature like this, I have $5 that says the method’s implementation branches on those parameters. Which means that parameters are no longer just values, but are control flow. Bad semantics.

Instead, consider creating several methods with good names, and which **accept and require only the parameters they use** – no more optionals. “Branching” is done via method resolution, about which we can more easily reason.

---

What’s nice about the above code is that nulls are not mentioned, or even relevant. Of _course_ a caller can do the wrong thing, but now the word “null” sticks out as a code smell.

Again, these are patterns for humans, not static guarantees. But now we can lint for strings like “null”, and have a good chance of catching errors.
