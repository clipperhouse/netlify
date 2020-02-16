---
title: "Statements are statements, and expressions are expressions (in Go)"
date: 2015-04-03
author: "Matt Sherman"
---

I got [trolled](https://twitter.com/clipperhouse/status/583393327757860864) by a facetious article on Go on April 1. But it did trigger a conversation about why Go doesn’t do certain things other languages do.

The answer, in several cases, is that Go chooses to make a clear distinction between expressions and statements. It chooses not to conflate them.

By way of definition, an expression is a thing that has (returns) a value. A statement is an imperative command to _do something_, but itself does not have a value.

I’ll use C# by way of comparison.

#### Increment operators

Most C-family languages have an operator like a++, which says “increment the value of a value by 1”.

In some languages, this expression has a return value. In Go, it does not.

**C#**

```
var a = 5;  
Console.WriteLine(a++);  
// prints 5 (though a is now valued at 6)
```

**Go**

```
a := 5  
fmt.Println(a++)  
// syntax error: unexpected ++
```

To be clear, `a++` is a valid statement in Go; it increments by 1. It does not, however, return a value, avoiding error-prone patterns like `if (a++ == 6) { …`

#### Assignment

In C#, assignments have return values.

**C#**

```
int a;  
Console.WriteLine(a = 5);  
// prints 5
```

The expression `a = 5` has a return value of 5. Further shenanigans:

```
int a;  
Console.WriteLine((a = 5) == 5);  
// prints True
```

The expression `(a = 5)` returns a value of 5, which is then compared to 5.

**Go**

In Go, assignments are statements.

```
a := 5  
fmt.Println(a = 6)  
// syntax error: unexpected =
```

`a = 6` is a valid assignment statement. It is not, however, an expression (and thus can’t be evaluated and printed).

#### Ternaries

You are probably familiar with an expression like `condition ? value : other`. It’s generally understood as syntactic sugar for an if-else statement, with a return value.

**C#**

```
var temp = 50;  
Console.WriteLine(temp &gt; 30 ? “warm” : “cold”);  
// prints warm
```

**Go**

Go doesn’t have ternaries! Reason being, it’s sugar for an if-else, and if-else’s are statements, not expressions.

You may be detecting a pattern here: Go prefers orthogonality over sugar. There are classes of (human) error that result from a statement also being an expression, and Go chooses to make that class of error less likely.
