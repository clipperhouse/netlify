---
title: "Nulls and knowledge"
date: 2009-05-14T18:43:00.000Z
author: "Matt Sherman"

---

Eric Lippert has a worthwhile post about [what nulls are and why we use them](http://blogs.msdn.com/ericlippert/archive/2009/05/14/null-is-not-empty.aspx). I like reading Eric because I think we think alike — computer languages are languages, with grammar and semantics.

Thinking this way allows one to design architectures that are intuitive. After all, when you create an object model, you are effectively creating a [domain-specific language](http://en.wikipedia.org/wiki/Domain-specific_programming_language). Even it it’s written in C#, GetWidgets() is only meaningful within your business. You are creating vocabulary (if not grammar, necessarily).

Thus, your code should be as readable, semantic and unambiguous as any prose that you write.

But back to the null thing — I find them incredibly convenient but I don’t see them discussed in simple terms often enough.

A null is a very valuable piece of metadata. It means “I don’t know”. I find them especially useful with booleans. Sometimes true and false aren’t enough.

For example, I often create structs which carry a bunch of search parameters, which later get translated into a database query. Let’s say I have a table of Person, with a bit field that indicates IsManager.

When doing adhoc queries, there are three possibilities that I care about: give me managers (IsManager=true), give me non-managers (IsManager=false), or I don’t care if they are a manager or not (IsManager=null). This third possibility allows me to remove that parameter from the query entirely. A nullable bool is the solution.

I have a bit of (amateur) background in [epistemology](http://en.wikipedia.org/wiki/Epistemology), so perhaps that’s why this sort of thing lights up my brain. One of the great scourges of science (including social sciences) is the belief that someone knows something.

You might have a very good idea of something. You might have incomplete information, but lack the luxury of indecision. These are the elements of daily life — but they are not the same as knowing.

The danger is in the fallacy of the sure bet, or “what could [possibly](http://beta.sling.com/video/show/31898/92/Arriving-At-Itchy-And-Scratchy-Land) go wrong”? A sense of what might go wrong requires both great discipline and great creativity — and is fundamental to any sort of scientific endeavor, like, say, software.

Great engineers treat ignorance an important piece of data; mediocre engineers see certainty where it doesn’t exist.

— -

PS: If this sort of thing lights up your brain too, I can’t recommend enough Nassim Nicholas Taleb’s two books, [Fooled by Randomness](https://www.amazon.com/dp/0812975219?tag=clipperhouse-20&amp;camp=0&amp;creative=0&amp;linkCode=as1&amp;creativeASIN=0812975219&amp;adid=0EAHD85E2DJ83HX26JXJ&amp;) and [The Black Swan](http://www.amazon.com/gp/product/1400063515?ie=UTF8&amp;tag=clipperhouse-20&amp;link_code=as3&amp;camp=211189&amp;creative=373489&amp;creativeASIN=1400063515).

[http://www.hulu.com/sling/http%3A%2F%2Fclipperhouse%2Ecom%2Fblog%2Fpost%2FNulls%2Dand%2Dknowledge%2Easpx/embed/qho2SOuWVGE62lTBYNJfZg](http://www.hulu.com/sling/http%3A%2F%2Fclipperhouse%2Ecom%2Fblog%2Fpost%2FNulls%2Dand%2Dknowledge%2Easpx/embed/qho2SOuWVGE62lTBYNJfZg)

Follow up post: [Does null ever equal anything?](/blog/post/Does-null-ever-equal-anything.aspx)
