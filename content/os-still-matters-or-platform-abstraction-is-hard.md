---
title: "The OS still matters, or, platform abstraction is hard"
date: 2009-06-04
author: "Matt Sherman"

---

Google has released some [preliminary versions of Chrome](http://news.cnet.com/8301-17939_109-10257538-2.html?part=rss&amp;subj=news&amp;tag=2547-1_3-0-20) for Mac and Linux. They announced it almost apologetically.

Writing a browser is way harder than anything I’ll ever try. Hats off to those making the effort.

But the difficulty and time it’s taking for Google to match their Windows version of Chrome speaks to the [continuing importance of the OS](http://news.cnet.com/8301-13860_3-10257936-56.html). After all, the browser depends on the operating system for lots of stuff. Putting pixels on the screen, accepting keystrokes, sending out packets — on a million types of hardware.

In implementing Chrome for Windows, they took advantage of a lot of things that are built-in. The underpinnings of Mac and Linux are decidedly different. So to keep Chrome versions in parity across platforms, they will need to abstract away those differences, [as Firefox did](http://en.wikipedia.org/wiki/XPCOM).

Google chose to get the browser out the door instead of waiting for cross-platform parity, which clearly would have delayed the release for a year or more. I’m glad they did — Chrome is my everyday browser and it rocks.

Google’s ambition is also a key driver here. Chrome has characteristics that are normally reserved for the OS, like process separation and a task manager. They want to make the web the OS, in case you haven’t heard. Doing that is decidedly non-trivial.

—

Update: Jeff Atwood pushed me to be more specific about where the platform differences matter. To be clear, these are not complaints, rather they are examples as to why platform differences are still a big deal.

The Mac/Linux builds can’t show YouTube videos, which I take to mean that they either don’t handle plug-ins, or the plug-in implementation can’t handle the performance demands of video. Plug-ins are a good example of platform dependence — they are really separate programs, running natively on the OS, that the browser hands control over to. (I recall that Safari had growing pains with Flash too.)

Similarly, printing is not yet supported. That’s an OS function, and very different across platforms. Maybe Postscript or PDF can provide an abstraction layer.

The ability to create application shortcuts (which I love) isn’t there. Those are essentially little app launch commands, which are handled differently by OS.

Plus a bunch of UI stuff like setting preferences — that’s about windowing and file systems.

These _can_ all be abstracted away. But I understand why Google didn’t wait to do that. A bird in the hand.
