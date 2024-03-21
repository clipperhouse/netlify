---
title: "403 Forbidden (and 400 Bad Request) errors with Amazon Product Advertising API"
date: 2009-08-01

---

I recently experienced an issue using the Amazon Product Advertising API (formerly the Amazon Associates Web Service). I was getting a “403 Forbidden” error for what seemed like a normal request.

I am using the sample C# code provided [here](http://developer.amazonwebservices.com/connect/entry.jspa?externalID=2480&amp;categoryID=14), along with the Amazon.ECS library (which apparently is no longer supported by Amazon).

I was doing an ItemSearchRequest, with a search term of “black swan”.

I tracked the error down to the encoding of the search terms. They were being passed with the URL encoding, so the querystring became “black+swan”. This is apparently no longer supported — you must use percent-style encoding. By using “black%20swan” instead, it worked.

This is caused by a bug in the sample code at the link above. Line 142 of SignedRequestHelper.cs reads:
`str.Replace(&#34;&#39;&#34;, &#34;%27&#34;).Replace(&#34;(&#34;, &#34;%28&#34;).Replace(&#34;)&#34;, &#34;%29&#34;)  
   .Replace(&#34;*&#34;, &#34;%2A&#34;).Replace(&#34;!&#34;, &#34;%21&#34;).Replace(&#34;%7e&#34;, &#34;~&#34;).Replace(&#34;+&#34;, &#34;%20&#34;);`

It needs to read:
`str = str.Replace(&#34;&#39;&#34;, &#34;%27&#34;).Replace(&#34;(&#34;, &#34;%28&#34;).Replace(&#34;)&#34;, &#34;%29&#34;)  
         .Replace(&#34;*&#34;, &#34;%2A&#34;).Replace(&#34;!&#34;, &#34;%21&#34;).Replace(&#34;%7e&#34;, &#34;~&#34;).Replace(&#34;+&#34;, &#34;%20&#34;);`

Someone forgot that strings are [immutable](http://codebetter.com/blogs/patricksmacchia/archive/2008/01/13/immutable-types-understand-them-and-use-them.aspx)!

By the way, I was making changes because Amazon has a [new security requirement](http://developer.amazonwebservices.com/connect/ann.jspa?annID=444) for this API. If you would like some help/code in adapting to the updated API, [drop me a note](/blog/Contact.aspx).

—

While I’m in the neighborhood, I also had to deal with a “400 Bad Request” error.

Part of the new API authentication scheme is a timestamp. The clock on my server had fallen quite a ways behind — it hadn’t been synced in a while. This resulted in an inaccurate timestamp on the request, and Amazon rejected it.

After correcting the server’s clock, it worked fine.
