---
title: "Another reason publishers should adopt SSL: referrers"
date: 2014-01-22

---

I previously [mentioned](http://clipperhouse.com/2013/12/15/publishers-and-ssl/) that advertising-based publishers should embrace SSL as a product upgrade, a service to their customer. Here’s a more self-interested take.

When a user clicks is on a HTTPS site (such as Google, Hacker News, Twitter*…) and the link to which they navigate is plain HTTP, the referrer header **will not be included** with the request. So a publisher that receives incoming traffic from such a site will be blind in terms or referrers.

If the publisher does run HTTPS, they will receive the referrer.

The publisher might or might not care about this piece of data, but this undermines their ability to know their best traffic sources or aggregate reporting. I can’t imagine a publisher letting it go so easily. So SSL-up, already.

_* Twitter redirects users to their t.co URL shortening service, unencrypted, sadly._
