---
title: "Imagine CSS evolved as a programming language"
date: 2009-06-16T17:35:27.000Z
author: "Matt Sherman"

---

I’ve gotten reasonably good with CSS, but I often find myself feeling that certain concepts are conflated or a bit ad hoc.

CSS does two _separate_ things:

*   Defines a set of visual attributes as a “style”
*   Specifies the DOM elements to which those styles are to be applied

These are different ideas, IMHO. For example, I’d like to define a color palette in once place, and then apply it in different ways throughout in my style library.

What if I want to apply a primary brand color to my links and also to the background of my header? I need to specify it in two places — and then track down all those places if the palette changes. Ditto if I decide that my standard margin needs to go from 10 to 15.

There are ways of doing reuse and encapsulation in regular CSS, but they are not intuitive. Do my DOM elements inherit styles from their parents? Do styles inherit attributes from one another? It seems like I need to implement the logic anew for each case — violating [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself). And the “logic” is spread across CSS and the DOM.

So I’m intrigued by this thing called [LESS](http://lesscss.org/). It’s a CSS “compiler” that allows you to express your styles with things like variables and hierarchy, in a quasi-CSS syntax. Then it converts that syntax to real CSS for the browser. For example:
`@brand_color: #4D926F;``#header {  
  color: @brand_color;  
}``h2 {  
  color: @brand_color;  
}``That’s very readable to me and the reuse is obvious. How about this:``#header {  
  color: red;  
  a {  
    font-weight: bold;  
    text-decoration: none;  
  }  
}``That looks a lot like inheritance. It’s terse and intuitive.``LESS is written in Ruby and it requires you to pre-process your CSS before you deploy. So…who’s gonna port it to .Net (IronRuby?) and turn it into a HttpHandler?``:)``--``PS: this sort of thing could greatly simplify skinning, too`
