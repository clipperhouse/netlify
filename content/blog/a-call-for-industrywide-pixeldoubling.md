---
title: "A call for industry-wide pixel-doubling"
date: 2011-01-18T16:31:28.000Z
---

Computer screens have not changed much over the last 20 years, relative to other technologies like processing power and bandwidth. Yes, panels are better in many ways in terms of color accuracy and “resolution”. But most applications are designed around an assumption of 72 or 96 pixels per inch.

I put “resolution” in quotes because, while screens have inched up in absolute pixels-per-inch, we are not using those pixels effectively.

Each increase of 10% is not enough to justify a change in assumptions about how applications interact with the screen. **The incrementalism is the problem.**

Apple has had a rare opportunity with its iPhone. When switching over to the Retina Display of the iPhone 4, with exactly twice the resolution of its predecessor, Apple was able to dictate to its captive application vendors, _deal with it_. **It’s time for the computer industry as a whole to make the same move.**

How did Apple manage this transition? They supported previous-generation applications by simply stretching pixels. The user experience was not dramatically different — older apps might look a little blurry — while allowing new applications to take advantage of the hardware. Nothing _broke_, while new apps raised the quality bar.

**We can do the same with the PC.** By approaching this transition as an industry, though a standards body, we can make a quantum step forward in terms of on-screen quality and user experience.

While I don’t have much to say about native apps, but here’s how it might work in web browsers.

**Typography**

Many web sites specify their typography in pixels, despite good advice to the contrary. A new “pixel-doubled” browser would simply double CSS pixel sizes, unless otherwise instructed. Old sites would not break.

Then, as time permits, a site publisher could:

*   Improve the CSS to use true typographical concepts like _em_, or,
*   If they must, add a newly-defined META tag to instruct the browser to respect the CSS pixels (though this would be a bit silly)

**Images &amp; video (ie, raster images)**

Similarly, browsers would simply double the pixel size of images in the browser by default. They might appears stretched on close inspection, but really they shouldn’t look worse than they did on a traditional-resolution screen.

(When you hit full-screen mode on that Hulu video, your computer is already doing something similar.)

Site publishers could then update their IMG tags with a new src2 attribute — this file would be handled in literal pixels, in most cases backed with a higher-res asset.

**Dynamic &amp; vector graphics**

True vector images would not struggle with this, as they are already are resolution-independent. The element in the DOM in which they reside would follow the rules as above — rendered at double the pixels unless otherwise instructed.

Elements such as &lt;canvas&gt; would follow the same rules as raster images above — doubled by default — while adding an attribute or meta tag which communicates “I recognize that we are at double-resolution, my code understands that, render exactly the pixels I specify”.

Even better, for programmatic images, expose the presence of pixel-doubling via a Javascript environment property. Then the script could could [test for capabilities](http://engineeredweb.com/blog/09/10/operating-features-not-browser-versions) and do its own math. (Tedious, I realize, but such accommodations are necessary with every new capability.)

If this isn’t done by the industry, some PC vendor (hmm, wonder who) might go ahead and do it anyway. I’d be OK with that. But it would be nice for everyone to be on board.
