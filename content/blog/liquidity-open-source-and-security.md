---
title: "Liquidity, open source and security"
date: 2015-04-04T19:40:53.000Z
author: "Matt Sherman"

---

Jeff has a [thoughtful post](http://blog.codinghorror.com/given-enough-money-all-bugs-are-shallow/) about open source, security and incentives. A few points stood out to me.

#### Liquidity

First, the “all bugs are shallow” idea is a bit idealistic, as he points out. What comes to mind for me is Joel’s [Hitting the High Notes](http://www.joelonsoftware.com/articles/HighNotes.html). Tens of thousands of average developers will not pick up a bug that only experts would recognize, and adding another ten thousand won’t help.

If we have a “chunky”, discrete Gaussian distribution of talent reviewing the code, the area under of the far right-hand tail may be indistinguishable from zero.

Few markets are liquid enough for distributions to be smooth, which allows _some_ area under the right tail.

For example, casinos doing millions of bets with known probabilities have smooth, measurable, non-zero tails; they are liquid enough to predict that _someone_ will win a million dollars.

An open source project with an audience _not_ in the millions, less so. At some point moving right, the graph will **discretely drop to zero**. That zero represents “the number of people smart enough to identify difficult bugs”.

#### Incentives

Second, we consider incentives. Jeff explores the idea that paying for bugs may both be necessary and risky.

He sees moral hazard: perhaps there is an incentive to hoard important information for a payoff. Maybe only the wealthiest organizations can afford to pay for vulnerabilities, as their value is bid up.

But let’s consider the audience. A person that discovers a bug in an important piece of software is someone with an unusually strong interest in that software. They are likely a user, and therefore are more likely interested in having better software, for their own interests.

The alternative to imagine mercenaries that dive into unfamiliar software in the hope of a payoff. Not impossible! But unlikely.

Which is an essential quality of open source that confuses those new to it — that volunteers work not only on goodwill, but on self-interest.

I’ll stretch the analogy. The person next to you on the plane might be a terrorist. Not impossible!

But it’s more likely that, if they showed up where you showed up, they simply want the same things you do.

#### Cheaper

What if security becomes too cheap to meter? Which is to say, what happens if improving software quality requires a lot fewer humans?

In that case, the economics and incentives questions become a lot less salient.

It’s possible — likely, to my mind — that safer software will not come mainly from greater resources, but better tools.

The two that come to mind are formal methods and safer languages. (These are actually two sides of the same coin.)

To the extent that we can formally articulate a definition for “safety”, we can prove a program’s characteristics with static analysis. Describing code paths in terms of provable propositions allows us to know where logical guarantees exist, and where they don’t.

We talk less about talent and trust, and more about the existence, or non-existence, of guarantees.

And heck, even informally: languages like Rust and Go prevent classes of human errors that C cannot. Using such languages, we prevent _the humans_ from making certain classes of mistakes.

Both of the above strike me a relatively cheap and automatable, and therefore more likely a source of progress than foundations and funding.
