---
title: "What Netflix bought from Comcast is a CDN"
date: 2014-05-08T00:40:39.000Z
author: "Matt Sherman"

---

With the hubbub about net neutrality, fast lanes and Netflix, I though I would illustrate what we are dealing with technologically.

Netflix’s deal with Comcast is called “interconnect” or “peering”. It’s part of the wholesale, or B2B, side of the Internet.

Traditionally, Netflix would buy “transit” from a third-party like Cogent. Cogent, in turn, would make a deal with consumer ISPs such as Comcast, Verizon, Time Warner, et al, and thereby deliver Netflix’s bits to consumers.


![cdn](http://clipperhouse.files.wordpress.com/2014/05/cdn6.png?w=625)



What happened in this instance, however, is that Netflix decided to skip Cogent and connect directly to Comcast (and [Verizon](http://www.vox.com/cards/network-neutrality/how-does-netflixs-recent-peering-dispute-with-comcast-affect-net)), and to pay for the connection. The term for this is “paid interconnect”. We call it this because in many instances, interconnect is done without an exchange of money — those circumstances are called “settlement-free”.

Netflix’s arrangement with Comcast been called a fast lane, and it is. But it is technologically indistinguishable from a CDN, which most of us are familiar with, and which have been around for a long time.

As you can see from the diagram above, a CDN and paid interconnect are the same thing. Bits — Netflix’s video content in this case — are allowed ingress to Comcast’s network. By being on a CDN, or using paid interconnect, the buyer is given a privileged place on Comcast’s network, in exchange for money.

I can understand the upset that people have over the Netflix arrangement. I completely agree that Comcast et al are monopolies, and their [behavior](http://www.vox.com/2014/5/5/5683642/five-big-internet-providers-are-slowing-down-internet-access-until) reflects that. (I am on Time Warner and can point you to the grey hairs I acquired when dealing with them.)

But I also believe being upset about these monopolies is being conflated with being upset about fast lanes. We have fast lanes, have had for a while, and use them happily in exchange for money.

If we wish to prohibit fast lanes, then we wish to prohibit CDNs. It might be the right thing to do, given the state of local ISP monopolies. But let’s articulate what it is we want.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=7713468)

**Updates 11 May**

I’ve updated the image above to note that Netflix must also replicate its content to the CDN cache. The replication is not bandwidth-intensive the way consumer delivery is; once Netflix delivers a movie to the CDN it can be delivered to consumers hundreds of times without going back to Netflix’s servers.

Also, the diagram above refers to a CDN where a cache server is on the premises of the last-mile ISP. One can also imagine a third-party CDN off-premises:


![cdn3](http://clipperhouse.files.wordpress.com/2014/05/cdn31.png?w=625)



The basic logic does not change: if there is a high volume of bandwidth being delivered to the last mile, the ingress to Comcast’s network still needs to accommodate; it’s a fast lane with more middlemen.
