---
title: "The binary web"
date: 2011-10-30

---

It’s easy to see the web as sets of advances that come in waves. The first was its emergence as a consumer (and corporate) phenomenon, starting with Netscape and continuing through Internet Explorer 6 (which, we often forget, was the first “legitimate” browser for many businesses).

The second wave was Ajax and broadband. This combination allowed web sites to act less like pages and more like applications — responsive enough for things like email. Javascript came of age.

Even at that second milestone, however, the web as an application platform was still behind most desktop apps. I began my professional career on Filemaker, and its capabilities weren’t matched by web sites for a decade or more.

The main limitation, in my opinion, was markup + styles as the interface language. HTML and CSS are a complex of interacting and highly dependent rules. Any change to the DOM requires a recalculation of the layout. Small operations compel the browser runtime to do work that is disproportionate to the size of the change.

(Of course there are optimizations to be had, and browsers are amazing from this perspective.)

We are experiencing the third wave now, which I will call “the binary web”. Three technologies in particular — Canvas, WebGL and sockets — are the next big step forward. What these have in common is the ability to do truly granular operations.

These technologies replace a world of markup and bytes with one of pixels and bits. WebGL and Canvas allow pixels to be changed without reflowing a document; witness the frame rates of web pages that use these technologies.

Similarly, web sockets free us from the expense of the HTTP request-response cycle; the data-to-overhead ratio is greatly improved. (And the “server push” promised in the 90’s finally arrives.)

In other words, these technologies make the web computationally cheaper, perhaps by an order of magnitude. It’s a matter of economics more than technology. Think of it as Moore’s Law for the browser.

_comments on_ [_Hacker News_](http://news.ycombinator.com/item?id=3175584)
