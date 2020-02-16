---
title: "Is proprietary Mac hardware killing Windows battery life?"
date: 2009-07-31
author: "Matt Sherman"

---

Dong Ngo over at CNET has a review of the experience of [installing the final Windows 7](http://news.cnet.com/8301-17938_105-10301015-1.html?part=rss&amp;subj=news&amp;tag=2547-1_3-0-20) on a new (unibody) MacBook Pro.

The install works. However, the battery life is awful:
What’s missing has been a known issue with Mac laptop running Boot Camp: the battery life. According to Apple, the MacBook Pro offers about eight hours of battery life (in my experience it’s more like about five hours, which is still very impressive). However, when running Windows XP and Vista, this reduces the life to just merely an hour and a half. And you guessed it: it’s the same with Windows 7. The battery somehow drains really fast, even when the screen brightness turned down, I couldn’t get two hours out of a full charge, even when just doing regular work on the machine.   
   
While I don’t know the exact reason, my best guess is this is because the Mac hardware is not optimized for [Windows drivers](http://download.cnet.com/windows/drivers/2001-2014_4-0.html). I hope that Apple (or Microsoft or hardware vendors) would look into this and make the MacBook, or any other Mac laptop, a truly great platform for Windows 7.

I can’t imagine what would cause a 70% loss of battery life under these circumstances. Most of the hardware is stock stuff (Intel &amp; NVIDIA). Either the drivers must be very bad on some fundamental level or there is a proprietary, non-standard layer of hardware that requires Windows to jump through hoops.

I’d put my money on the latter. Mac OS X will only run on Apple hardware. So OS X must be doing something to verify the hardware — and the hardware must securely communicate back to OS X that it’s legit.

I conjecture that BootCamp includes some sort of shim which allows Windows to “prove” itself to the hardware. Whatever this additional layer is, I suspect that most operating system interactions must pass through it on some level. Does Windows need to “show its ID” for every operation?

Only this could explain such a dramatic difference in battery life. The Windows drivers for Intel hardware are a solved problem. So there must be something exotic in the hardware.

I’d pretty much committed in my mind to the 13” MacBook Pro for my next machine.

But this is a deal-breaker. Will Snow Leopard fix it?

—

PS To be clear, I am not accusing Apple of doing this intentionally. I am saying that they designed a computer for OS X, not Windows. :)
