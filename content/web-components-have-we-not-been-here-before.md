---
title: "Web Components: have we not been here before?"
date: 2014-03-31
author: "Matt Sherman"

---

Addy Osmani describes [Web Components](http://addyosmani.com/blog/the-webs-declarative-composable-future/), of which an important part is custom tags. The promise:
In one word, a future with Web Components is declarative. JavaScript still exists in this future, but is relegated back to a role where it acts as a glue holding the other bits of a component together. Web Apps in the near future will be composed almost entirely from elements (tags). Some of these elements (like the &lt;audio&gt; tag) will be given to you by the browser but others like &lt;slide-show&gt; will be [custom elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/) provided by UI libraries or you can write it yourself.

Programming with tags. Where have we heard this before?

Starting in the 90’s (and through to the present), there’s ColdFusion. It offers quite a library of [custom tags](http://help.adobe.com/en_US/ColdFusion/9.0/CFMLRef/WSc3ff6d0ea77859461172e0811cbec17576-7ffd.html) — for everything from control flow ([&lt;cfif&gt;](http://help.adobe.com/en_US/ColdFusion/9.0/CFMLRef/WSc3ff6d0ea77859461172e0811cbec22c24-7fe8.html)) to database interaction ([&lt;cfinsert&gt;](http://help.adobe.com/en_US/ColdFusion/9.0/CFMLRef/WSc3ff6d0ea77859461172e0811cbec22c24-7c78.html)).

Microsoft has ’em too — called [Web Controls](http://msdn.microsoft.com/en-us/library/fxh7k08z%28v=vs.100%29.aspx) — abstracting away things like authentication and (again) database access. Drop in a tag, get a fully-functioning login form.

Logic as markup. So tempting, and so wrong.

Markup is nouns and adjectives. It doesn’t have verbs. It describes, but it does not impel.

Unless we start from the assumption that we want our logic to be declarative! In which case we end up with tags representing verby things like “authenticate the user, hit the database, and iterate the results”.

Now, expressing a syntax tree in markup is just as syntactically “correct” as any other way. If you want to wrap your if statements and subroutines in angle brackets, no problem, you can do that. If you want function arguments expressed as attributes, OK.

But why would we? We’ve got languages — lots of them. And we make new ones all the time. Why retrofit HTML?

ColdFusion and Web Forms were not unsuccessful. Lots of people adopted them, and there was a marketplace for custom tags. The same will probably go for Web Components.

I suspect, however, we’ll go through a time of irrational exuberance before realizing that everyone has created their own weird-ass pseudo-language with angle brackets.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=7502512)
