---
title: "Javastrict"
date: 2009-05-22T09:45:00.000Z
---

John Resig (jQuery guy) talks about [advances in the next rev of Javascript](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/) (properly known as ECMAScript 5). It now has a “strict” mode, which makes Javascript look a lot more like a compiled language.

When I first moved from classic ASP — interpreted VBScript — to C# in .Net, I must admit I was a bit annoyed. Why do I need to declare every variable? What’s this “build” stuff? I was used to just throwing text files on the server and if they were broken, I would hear about it.

Then I came to understand why we have compilers and strict languages: prevention of _silent-but-deadly_ errors. Like mistyping a variable name. Or not paying attention to scope, where the “i = 0” in your subroutine overwrites the “i” that was defined one level up.

The difference comes in **when** you learn about the defect. In a strict language, you’ll hear about it immediately, before it gets out the door. In a less-strict language, you might hear about it after your user has lost a week of work. A priori, or a posteriori?

The fact that JS is not strict (it rarely throws errors) and also dynamic (you can mutate objects at runtime) means that the burden for accuracy is entirely on the developer. S/he needs to be as smart and exacting as a compiler. And user testing is the only way to catch logical errors.

Now, with strict mode, you can tell JS not to be so forgiving. Undeclared variables are caught — which helps to catch typos and forces you to manage scope. And asking-for-trouble functions like Eval() are no longer allowed.

What John doesn’t mention is that strict mode will probably lead to greater performance. If the browser is told “I declare this code to be good and right”, it can spend less time handling ambiguities, and get on to the business at hand.
