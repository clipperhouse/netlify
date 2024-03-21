---
title: "Speeding up localhost in Visual Studio"
date: 2009-12-16

---

I recently put a new [SSD](http://www.amazon.com/gp/product/B002IJA1EG?ie=UTF8&amp;tag=clipperhouse-20&amp;linkCode=as2&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B002IJA1EG) in my system (yay!) and did a clean install of Windows 7, Visual Studio, etc. I found that when viewing my web app on localhost (using the Cassini web server built into VS), it was very slow. This was true across browsers.

Turns out it’s a DNS thing — the lookup for “localhost” was apparently going out to the DNS server, a waste. You can easily “short-circuit” this by modifying your hosts file. It’s in the C:\Windows\System32\drivers\etc folder.

Simply un-comment the localhost entry at the bottom of that file, like so:
`# localhost name resolution is handled within DNS itself.  
 **127.0.0.1       localhost**  
#	::1             localhost`

It made things lickety-split for me.

_Tip: you’ll need to run Notepad as an administrator to modify the file._
