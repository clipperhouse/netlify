---
title: "Preserving the back button on Ajax pages"
date: 2010-01-19

---

So, I’ve been going a little Ajax crazy lately. I am using a [progressive enhancement](http://www.alistapart.com/articles/understandingprogressiveenhancement/) approach — make everything work solidly without Javascript, then drizzle on some Ajaxy goodness as refinement.

One problem is, on an Ajax-driven page, your user “loses” the use of the back button. It’s caused a mismatch between what the user and the browser consider to be a “new page”.

You’ll note that in your Ajax page, when the user clicks to a new “page state”, the URL doesn’t change. Now the user and the browser have a different concept of “last page”. And so, if the user hits the back button, they will be taken to the last URL, not the last “page” as the user understands it. That last URL might have been 10 clicks ago.

In trying to work around it, I found the problem to be surprisingly complex. But I’ve found a [life-saver of jQuery plugin](http://www.asual.com/jquery/address/) that solves exactly this.

It does two things: first, it changes the URL on every Ajax click. Second, the plugin “records” the page history in a hidden frame. So now your browser sees each page state as a new page — just like your user. The back button magically works.

This also provides the advantage of deep-linking: each Ajax page state gets its own URL, so you can link directly to that state. Brilliant.
