---
title: "Static file hosting with active content"
date: 2018-05-29
author: "Matt Sherman"
---

The combination of Hugo & Netlify to host my blog has turned out to make [easy things easy, and hard things possible](https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible).

Static content – blog posts, docs – is a natural win. Set-it-and-forget-it. Once it’s up in the cloud, there is no bit rot.

But! It’s turned out to be a good way to host active apps too, like these…

- [Jargon playground](/jargon/)
- [Stack Overflow tag correlations](/stack-correlations/)

### What I did

In the case of Stack correlations, it’s calling the Stack API client-side. The hosted page entirely static and can be served from anywhere.

Similar for Jargon: I created an API endpoint on Google Cloud Engine (Go), and call it entirely client-side as well.

Despite being apps, they have the same chrome and styles as the rest of the site. I like that.

### Proxying

There is a third option for keeping all your apps under one domain. Netlify offers [proxying](https://www.netlify.com/docs/redirects/#proxying) of paths to URLs.

So if I want the Jargon API above to “live” on clipperhouse.com, I could proxy the `clipperhouse.com/jargon` path to the `jargon-demo.appspot.com` host.

This might also work to rate-limit or cache your dynamic content.

--

See also: [How to move from Medium to static hosting with Jekyll or Hugo]({{< relref "blog/how-to-move-from-medium-to-static-hosting-with-jekyll-or-hugo.md" >}})