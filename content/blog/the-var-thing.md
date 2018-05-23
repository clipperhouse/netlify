---
title: "The “var” thing"
date: 2009-09-04T11:02:54.000Z
---

I’ve come to really enjoy using the “var” keyword in C#. Although it’s been [written about](http://haacked.com/archive/2009/08/31/7-stages-of-language-keyword-grief.aspx) many times, I want to clarify what it is.

C# is a strongly-typed language, which means that every variable you declare must have a specified type. You must say it’s an integer or a string or a Thing. “var” does not change that.

“var” looks a lot like the var in Javascript. Javascript is not strongly-typed, so you don’t have to say what “x” represents. Maybe it’s an integer at the moment and a string later. You don’t have to decide.

But let’s be clear: var in C# has nothing to do with var in Javascript. **C#’s “var” is a syntactic shortcut, and nothing more.** Your variable is still strongly typed.

Here is a typical piece of C# code:
`List&lt;Thing&gt; myThingList = new List&lt;Thing&gt;();`

Notice something redundant in there? We said List&lt;Thing&gt; twice.

Since the right side of that assignment _will always result in a List&lt;Thing&gt;,_ why do we need to say so on the left side? Thus:
`var myThingList = new List&lt;Thing&gt;();`

The compiler knows that myThingList will always be a List&lt;Thing&gt;. So it can unambiguously (strongly) type it as such. No need for us to spell it out.

So I find that var is a nice thing for more terse code. And if I decide that myThingList should actually be an array, I just need to change it one place.
