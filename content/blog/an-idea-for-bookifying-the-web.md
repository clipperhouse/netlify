---
title: "An idea for bookifying the web"
date: 2014-04-19T19:16:25.000Z
author: "Matt Sherman"

---

I use Pocket, a handy “read it later” tool. The idea is that I can “pocket” a web page by clicking a bookmarklet (or browser extension), and the page is:

*   added to a reading list
*   delivered to my device(s)
*   reformatted for readability (the main content is extracted and the page noise is stripped away)

You can see that there are 3 distinct use cases here, which happen to work well together. I’d like to suggest a 4th use case, which I’ll call PocketBook.

A PocketBook is a manifest of web pages that comprise a unit. In its simplest form, it might look something like:
`&#34;book&#34;: {  
    &#34;title&#34;: &#34;The Things&#34;,  
    &#34;pages&#34;: [  
        &#34;http://thing.com/article1.html&#34;,  
        &#34;http://thing.com/article2.html&#34;,  
        &#34;http://thing.com/article3.html&#34;  
    ]  
}`

(One could imagine adding levels of hierarchy to represent chapters.)

Given such a manifest, a Pocket client (including a regular HTML5 page) could slurp up all the content, format it and organize it for sequential reading.

A more sophisticated client would generate nice navigation and a table of contents, say. More so, it could be automatically translated into EPUB or PDF, and sent along to a Kindle.

Among the advantages: you always get the latest version of the “book”. You’ll note that even in the age of Kindle we don’t see book updates or corrections very often. The Pocket client could easily refresh. (And HTTP has well-defined, mature cache rules!)

The manifest could also include licensing information. Since these resources are all simply public web pages, I don’t see a place for _protecting_ the content, but certainly the author could put purchase options in there:
`&#34;book&#34;: {  
    &#34;title&#34;: &#34;The Things&#34;,  
    &#34;chapters&#34;: [  
        &#34;title&#34;: &#34;Chapter 1: The thingening&#34;,  
        &#34;pages&#34;: [  
            &#34;http://thing.com/article1.html&#34;,  
            &#34;http://thing.com/article2.html&#34;,  
            &#34;http://thing.com/article3.html&#34;  
        ],  
    ],  
    &#34;purchase&#34;: [  
        &#34;paypal&#34;: &#34;some url&#34;,  
        &#34;hardcover&#34;: &#34;some url&#34;,  
        &#34;btc&#34;: &#34;some address&#34;  
    ]  
}`

Of course there is nothing special about Pocket here, I just chose them cuz I use them and it allows for a clever name. Instapaper or Readability could do the same.

Readability, for example, has [Readlists](http://readlists.com/5abc5760/), which I’ve used and are quite nice and do some of these things. But as far as I can tell, they must be created and hosted on readlists.com, and I don’t see an obvious update mechanism. A simple manifest format that one could create programmatically would open more possibilities.

(My motive, by the way, is a desire to see this [excellent site](http://learnyouahaskell.com/) packaged up.)
