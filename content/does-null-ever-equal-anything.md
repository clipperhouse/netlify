---
title: "Does null ever equal anything?"
date: 2009-05-15
author: "Matt Sherman"

---

Yesterday’s [discussion](/blog/post/Nulls-and-knowledge.aspx) of nulls got me to thinking about this common bit of syntax in C#:

[code:c#]if (myObject == null)  
{  
…  
[/code]

But here’s the thing: null is not data. It’s metadata. That is, it describes the state of a variable, not its contents.

Null indicates the absence of a value. So the above code says, is myObject’s value equal to not having a value? Seems strange.

Other languages seem to make this distinction. VB (if I recall) has the construct “Is Nothing”. SQL uses “IS NULL” (as opposed to “= NULL”). These syntaxes make more sense to me — they differentiate testing a value and testing the existence of a value.

I imagine the “== null” operator is allowed in C# as a syntactic convenience. I mean, it’s readable and easy to remember. No complaints.

But I bet this requires the compiler to extract those statements and send them to a different evaluation algorithm. It’s a different kind of test. Curious if any C# language designers would have an insight.
