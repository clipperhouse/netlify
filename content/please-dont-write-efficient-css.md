---
title: "Please don’t write “efficient” CSS"
date: 2010-05-31
author: "Matt Sherman"

---

Contra [many](http://css-tricks.com/efficiently-rendering-css/) [smart](http://developer.mozilla.org/en/Writing_Efficient_CSS) [people](http://code.google.com/speed/page-speed/docs/rendering.html), I am going to make a contrarian request: **please do not attempt to optimize your CSS for performance**. Instead, please optimize for correctness, specificity and maintainability.

A quick bit of philosophical background. CSS is a _declarative_ language, not unlike HTML and (basic) SQL. It is designed to describe what you want, but not how to execute it. Thus, declarative languages have no verbs — only nouns and adjectives.

Second-guessing how a browser will execute your nouns is a) a shot in the dark and b) a misuse of the language. You’re trying to micromanage without verbs. It reeks of [premature optimization](http://stackoverflow.com/questions/211414/is-premature-optimization-really-the-root-of-all-evil). And your optimizations may not be optimal in the future, or across different browsers.

More importantly, a user is more likely to notice something that’s _wrong_ as opposed to something that’s only 99% as fast as it could be. (And if it takes you an extra 15 minutes to locate and fix a bug, they’ll notice that too.)

Instead, think of CSS like other programming. This means you should focus on:

**_Separating concerns:_** You should be able to modify style without modifying HTML.

**_Managing scope:_** Local style changes should not affect other parts of your application.

_Optimized for scope:_
#home .advertisement h3.vendor { … }   
#productreview h3.vendor { … }

_Optimized for “performance”:_
h3.vendor { … }

**_Correct semantics:_** Classes and id’s of HTML elements should describe what they are, not how they look.
class=”mediumheader red” class=”storytitle featured”

**_Brevity:_** Write the least amount of code for the task at hand (aka [YAGNI](http://en.wikipedia.org/wiki/You_ain%27t_gonna_need_it)).

_Optimized for brevity:_
&lt;div class=”story”&gt;&lt;h2&gt;My title&lt;/h2&gt;&lt;p&gt;The description&lt;/p&gt;&lt;/div&gt;   
div.story { … }   
div.story &gt; h2 { … }   
div.story &gt; h2 + p { … }

Optimized for “performance”:
&lt;div class=”story”&gt;&lt;h2 class=”storytitle”&gt;My title&lt;/h2&gt;&lt;p class=”storydescription”&gt;The description&lt;/p&gt;&lt;/div&gt;   
div.story { … }   
h2.storytitle { … }   
p.storydescription { … }

I believe that following these rules will actually achieve higher CSS performance in the long run. Writing 10 smart rules will probably perform better than 50 micro-optimized rules. Adding classes and id’s only for the sake of CSS performance will probably cost more than it saves.

And remember, computers are fast and cheap. Programmers, by comparison, are expensive and slow. :)

—

**Addendum:** Another way to think of it is that CSS is a query language. That’s why they call them “selectors”. More rules = more queries. Keeping queries as few and as specific as possible should give the best results, just like SQL.
