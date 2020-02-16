---
title: "Is Google building an anti-spam empire?, or, size matters"
date: 2009-09-16
author: "Matt Sherman"

---

Google [acquired](http://googleblog.blogspot.com/2009/09/teaching-computers-to-read-google.html) reCAPTCHA today, a company that provides a simple means of adding a spam-limiting mechanism to your site. (I’ve implemented it several times and I recommend it to clients.)

There are technologies where size matters more than others. One of them is spam-fighting.

Spam, whether in email or in the comments of a blog, is fought with data. It is a statistical game — lots of very fast computers doing their best to ask, how much does this message resemble spam? Or did it more likely come from a human? Getting it wrong — being too tight or too loose — will piss off a lot of people.

Getting this right would be hard for a small company, even if they have great algorithms. Why? Because you need data: [lots of new data](/blog/post/Ite28099s-the-data-not-the-algorithm.aspx), all the time.

Spam is high-volume and constantly adapting. Tracking these adaptations, from which one can build a sample set and glean intelligence, requires a lot of input.

To get a lot of input, you need a lot of users, and reCAPTCHA did a great job of acquiring users. They get (presumably) millions of hits a day, and each of those hits is a test of “spamness”. This allows them to see a lot of trends.

And, they (presumably) can correlate IP addresses with each of those test results. So spam is not just what, but who.

Google has an obvious interest in fighting spam for Gmail. They’ve done a great job so far, in my experience. Combine that with reCAPTCHA and one sees Google building a serious anti-spam arsenal.

My prediction: Google’s next purchase in this space will be [Akismet](http://akismet.com/).
