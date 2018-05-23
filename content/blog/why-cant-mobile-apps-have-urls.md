---
title: "Why can’t mobile apps have URLs?"
date: 2011-12-14T03:23:02.000Z
author: "Matt Sherman"

---

Dave Winer [laments](http://scripting.com/stories/2011/12/13/whyAppsAreNotTheFuture.html) that mobile apps are not universally addressable via a locator like a URL.

Actually, they are, it’s just underexploited. For example, this [little radio app](http://tunein.com/mobile/windows/) allows me to deep-link specific radio stations as tiles on my (Win Phone 7) home screen.

Guess what? The tile [has a URL](http://msdn.microsoft.com/en-us/library/hh202979%28v=VS.92%29.aspx), pointed to a specific place in the app. Now, I haven’t dug deeply enough to know about the security boundaries, but it seems to me it would be a small step to allow the app to register a namespace on the phone (app://appid) and expose endpoints to any other app.

This seems like a nice way to bridge the gap between the advantages of phone and web. iPhone allows [protocol handlers](http://mobileorchard.com/apple-approved-iphone-inter-process-communication/) which are the same idea, putting the namespace at the front of the URL.

(Of course, URLs would need to be managed just like public, web URLs — you’d want them to be stable, and deliberate about what’s exposed.)

A future of on-device linking may be closer than we think.
