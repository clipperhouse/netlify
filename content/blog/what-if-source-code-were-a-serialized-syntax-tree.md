---
title: "What if ‘source code’ were a serialized syntax tree?"
date: 2013-04-04T02:41:46.000Z
---

At the risk of revealing my lack of a CompSci degree: what if ‘source code’ were replaced by serialized syntax trees?

What if the canonical ‘source’ of an application were not source code, as created by humans, but rather a serialized format of the syntax tree?

The workflow would go like this. You check out the repository. You make changes, and debug, to your satisfaction. Your _local_ changes are still ‘source code’ as we currently understand it.

Then, instead of committing your changes, you feed your source code to the complier/interpreter, which creates a naive syntax tree. This syntax tree preserves the names of your symbols, and does no optimization.

The syntax tree is then decompiled into new source code, and written out. It is logically and semantically the identical to the original text, but style choices you may have made are swept away.

The generated source code is still meant for human consumption. It would need to preserve things like names and comments.

Among the things that are obviated: formatting, obviously, but also storage. The serialization includes rules for how the tree is persisted to disk.

It also means that changesets consist **solely of logical &amp; semantic changes**. Syntactic and formatting changes are eliminated. IDE’s could facilitate a lot of this. Heck, perhaps this process could happen _right inside source control_, with the appropriate plugins.

The idea would be to eliminate a class of friction within teams. Fewer subjective decisions.

(This might remind you of whitespace-significant languages, which are good for disposing of formatting arguments among programmers.)

I don’t doubt this would require a fair amount of work so that it functions for humans. My question is, is there a _logical_ dealbreaker in this idea? I suspect it’s been attempted, and would love to hear stories.

[discuss on hacker news](https://news.ycombinator.com/item?id=5490663)

_Addendum: it didn’t take long for it to be pointed out that this is a thing, and that Lisp is the canonical example. So a further question: what human factors prevent it from becoming common?_
