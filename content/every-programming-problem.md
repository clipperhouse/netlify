---
title: "Every programming problem…"
date: 2011-03-19

---

…can be entirely described in these four dimensions:

*   **Cache:** The browser is a cache for a web page, whose canonical version lives on a server. A web page is a cache for structured data, whose canonical version lives in (say) SQL. Structured data is a cache for bits that live on a spinning piece of rust. The questions for the programmer are, how similar is a piece of data to its canonical source, and how similar does it have to be?
*   **Abstractions:** You’ve hidden some words behind a smaller number of words. What words are you really saying, when you say DoThing()? It’s [turtles](http://en.wikipedia.org/wiki/Turtles_all_the_way_down) all the way down.
*   **Scope:** What does this variable (symbol) mean at this moment? Will it mean the same thing a moment later, after we’ve gone off and done other stuff? There is a symbol over there which seems to be the same guy. Is it? And if I change it here, what happens elsewhere?
*   **Delimiters:** Aka encoding. Nothing is understandable without rules describing where meaning begins and ends. White space is a delimiter between commands in your programs. Slashes are delimiters in URLs. HTML, JSON, GZIP: defined by delimiters and encoding.

Every bug fix is an exercise in asking one of these questions until the answer is satisfactory.
