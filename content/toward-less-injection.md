---
title: "Toward less injection"
date: 2017-09-18
---

Here’s a habit that may help to reduce the complexity of your dependency injection tree. Ask yourself: **how much of an injected dependency** are you actually using?

The conversation goes like this…

### I need to inject an `HttpContext`

Great. Why? Because we need to read a cookie. So really….

### Ah, OK I only need to inject an `HttpRequest`

Better! But seriously, are you only looking at cookies?

### Right, I only ever touch `Request.Cookies`

Now we are getting somewhere! You only need an `HttpCookieCollection`. That’s a pretty simple data type.

If that’s all you need, you don’t need to _inject_ it at all — just pass it as an **argument** to the method that needs it.

Further, you likely don’t need to mock it (in the mocking-framework sense) for testing. Just `new` one up and add some test values. Nice!

–

You could push it further and say, OK, which of [CookieCollection’s methods](https://msdn.microsoft.com/en-us/library/system.web.httpcookiecollection%28v=vs.110%29.aspx) am I actually using? Is there an **smaller type** that I could accept, maybe an `IEnumerable<HttpCookie>`? How about just the `HttpCookie`, no collection at all? A `string`, even?

The smaller the interface, the easier the mock — though there may be a trade-off in asking the caller to do more work.

–

Now: does your service have state, or more precisely, do its methods depend on the service’s state? If not, the method can — and likely should — be static. One less dependency on injection, one hopes.
