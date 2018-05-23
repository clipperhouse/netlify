---
title: "A thought experiment: serial vs parallel"
date: 2009-09-19T18:54:50.000Z
---

Now that solid-state drives are arriving in the mainstream, I’ve been thinking about the implications of serial vs parallel and how they affect overall perceived performance. And by “perceived” I mean, what does the client — both the technical and human variety — experience?

If the capacity of two systems is each (say) ten requests per hour, yet one is serial and one is parallel, can there be a net benefit for the user? Mathematically, one thinks shouldn’t be a difference. Intuitively, I feel that there might be. So let’s do the math.

We have two supermarkets, A and B. At supermarket A, there is one fast cashier, who can handle 10 normal customers per hour. At the other, there are two slow cashiers, who can each handle 5 normal customers per hour. Each store can therefore handle 10 normal customers per hour.

The line of customers in each store is identical. Here’s the wrinkle: one customer in each store’s line is has a huge cart, with 4 times the groceries of a normal customer. That customer is #5 in line, in both stores.

We start at 1pm. What happens?

At 1:12, store A and store B have both handled two customers. 8 customers not yet served.

At 1:24, ditto, 4 customers served, 6 customers not yet served.

Mr Big customer #5 walks up to the register. At store A, the only cashier is monopolized. At store B, they monopolize one of the two cashiers, we’ll call him B1.

_Note, because store B’s cashiers are half as fast as the one at store A, it will take twice as long to resolve the big customer at store B. Store A’s cashier can handle one normal customer every 6 minutes, therefore Mr Big Customer will take 24 minutes. Store B’s cashiers can individually handle one customer in 12 minutes, therefore it will take 48 minutes for one of them to serve Mr Big._

At 1:36, Store A has not handled any new customers, so still only 4 served. The one free cashier at store B (call her B2) has handled one, so 5 served.

At 1:48, Store A has finished with Mr Big, so now 5 served. At store B, one more served, so 6.

_For this 48-minute time span, Store B’s parallelism has resulted 6 customers being served compared to A’s 5. That’s 20% better end-user performance, even though both stores have identical total capacity._

At 2:00, Store A is back at full speed, 7 customers have been served. Store B, still at half capacity, serves one more, putting it at 7 as well.

At 2:12, B1 finishes with Mr Big. B2 has served one at normal pace, so 9 customers served by B. Store A has also served 2, total of 9.

At 2:18, Store A finishes the last customer.

At 2:24, B1 finishes with his last customer.

—

_[please check my math]_

Moral of the story? Heck, I’m not sure.

At Store A, the longest period where the line didn’t move was 24 minutes. At Store B, the longest was 12 minutes.

Store A finished everything in a shorter period of time. Store B handled more customers in the first 48 minutes but took longer overall.

If Mr Big was first in line, Store A would serve only one customer in the first 24 minutes. Store B’s free cashier would have served two in that time. Store A would soon catch up.

Seems to me that a parallel system would ensure more “liquid” service — like anti-freeze, it may move slowly but it won’t stop. Store A can freeze up for short periods, but otherwise runs quickly.

Personally, I net out on the parallel side, as I think customers’ perception will be better. Am I right?
