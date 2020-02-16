---
title: "Tip: random sort order in C#"
date: 2010-04-28
author: "Matt Sherman"

---

I wanted to randomize the display of a List on [my site](http://alikewise.com/) — meaning I would retrieve (say) 20 records, but display only 5, chosen at random. I was imagining a loop that generates a bunch of random indexes, which I use to individually pull elements from the list. Yuck.

The solution I [found](http://wiki.evident.nl/Default.aspx?Page=Random-sort-order-Csharp) is much more elegant — two lines! To randomize your list, simply:
var rnd = new Random();   
myList = myList.OrderBy(x =&gt; rnd.Next()).ToList();

To take _n_ random elements:
var rnd = new Random();   
myList = myList.OrderBy(x =&gt; rnd.Next()).Take(n).ToList();

If you’d like to encapsulate it, you might use extension methods:
public static IEnumerable&lt;T&gt; OrderByRandom&lt;T&gt;(this IEnumerable&lt;T&gt; source)   
{   
 var rnd = new Random();   
 return source.OrderBy(x =&gt; rnd.Next());   
}   
   
public static IEnumerable&lt;T&gt; TakeRandom&lt;T&gt;(this IEnumerable&lt;T&gt; source, int n)   
{   
 return source.OrderByRandom().Take(n);   
}

Hope this helps.

_Note: be careful with IEnumerable here — because it behaves_ [_lazily_](http://blogs.msdn.com/ericwhite/pages/Lazy-Evaluation-_2800_and-in-contrast_2C00_-Eager-Evaluation_2900_.aspx)_, it can cause the randomization to happen multiple times, depending on how you call it. Better to “realize” it using ToList()._
