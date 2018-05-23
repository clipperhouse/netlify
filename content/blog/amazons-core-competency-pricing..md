---
title: "Amazon’s core competency? Pricing."
date: 2009-12-16T08:06:00.000Z
---

I think it’s quite brilliant that Amazon has introduced spot pricing for servers. Great way to exploit unutilized CPUs and bring prices down. Nicholas Carr explains it in [utility terms](http://www.roughtype.com/archives/2009/12/the_new_chicago.php):
At the end of the nineteenth century, Samuel Insull, president of the then-tiny Chicago Edison, started the electric utility revolution when he had the counterintuitive realization that to make more money his company had to cut its prices drastically, at least for those customers whose patterns of electricity use would help the utility maximize its capacity utilization.Amazon Web Services is emerging as the Chicago Edison of utility computing.

I seem to recall Sun predicting this many, many years ago. And yet while they were right in broad terms, for all that “insight”, Sun didn’t even come close to executing on the idea.

(Btw, you might recognize the Insull name if you’ve read [The Forgotten Man](http://www.amazon.com/dp/0060936428?tag=clipperhouse-20&amp;camp=213381&amp;creative=390973&amp;linkCode=as4&amp;creativeASIN=0060936428&amp;adid=0ZMSZJTMKKR7Y447XWNJ&amp;)


![image](https://www.assoc-amazon.com/e/ir?t=clipperhouse-20&amp;l=ur2&amp;o=1)



.)

It’s very surprising that Amazon, the _bookseller_, would be the company to lead the way. If you believed in the utility computing vision 10 years ago, and were asked to predict the winners, would Amazon have even come to mind…?

The truth is, Amazon is not simply a bookseller, or even a retailer per se. What Amazon has mastered is **making money in low-margin, inventory-driven businesses**. Of course their technical and operational execution is excellent, but that’s table stakes. Their core competency is pricing.

—

Update: A quick explanation of spot pricing, by request. Let’s say Amazon is running 10,000 servers. A customer can rent time on those servers at a standard hourly rate, let’s say $0.50/hour.

Of course, not all of Amazon’s hardware will be used all the time. So let’s say on average, only 40% of their capacity is being used. 60% of Amazon’s infrastructure, which costs them plenty, is not earning money.

Students of economics know that those unused servers are not simply “unwanted” by customers. They are unwanted _at that price_.

Amazon says, OK, since we’re earning $0.00 on that unused inventory, let’s see if we can get _something more than nothing_. Let’s drop the price on the unused capacity until people buy. That price will vary, in real-time, based on supply and demand. It might be $0.30/hr or it might be $0.45. That’s the spot price.

The customer trade-off for the lower price is that they don’t know in advance what the price (or supply) will be. In this case, Amazon has set a mechanism for a customer to say what price they will pay; when the spot price is lower, the customer’s server will be activated automatically. If the spot price is higher, the server shuts down and the customer pays nothing.

—

Oh, and if you want a “ticker” to see how the spot prices are trending, [here you go](http://cloudexchange.org/):
