---
title: "Google Closure based on naive server-side notions?"
date: 2009-11-12T09:05:11.000Z
---

I rely on libraries (mostly jQuery) instead of writing a lot of serious JavaScript these days. I mean, of course I am writing JavaScript but the libraries allow me to stay in “script space” — small procedure bits that are _scripts_ as opposed to applications.

But I do like to keep an eye on best practices, and [this article](http://www.sitepoint.com/blogs/2009/11/12/google-closure-how-not-to-write-javascript/) offers some great tips from an experienced JS library developer.

He offers them in the context of ripping Google’s new Closure library — he says it’s evident that it was done by Java people without much real-world JavaScript experience. In other words, Closure appears to be based on the naive assumptions of a server developer.

This is understandable if it’s true that these are Java developers behind Closure. Java is a compiled and garbage-collected language. Poor coding patterns may be optimized away at compile-time. The behavior of Java’s garbage collector is known science, so if you manage scope well, you should have no trouble.

And, in Java or any other compiled (static) language, others can’t swoop in and change your code at runtime.

JavaScript, however, can’t rely on any of these assumptions. Your users will be on a variety of browsers, with widely varying JS performance. Sloppy code may or may not get optimized. Who knows how good the memory management is. And other libraries can change your code, intentionally or otherwise.

It’s the difference between knowns and unknowns. On the server (Java), you have 100% control of the environment. On the client (JavaScript), you have almost none. These are very different ways of thinking.
