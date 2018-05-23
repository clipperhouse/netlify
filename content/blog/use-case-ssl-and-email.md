---
title: "Use case: SSL and email"
date: 2009-06-17T14:04:00.000Z
author: "Matt Sherman"

---

Interesting article in the NYT about [using SSL for email](http://bits.blogs.nytimes.com/2009/06/16/gmail-to-get-more-protection-from-snoops/). It’s an option for Gmail which I turned on some time ago.

Eric Schmidt mentions that the (potential) downside of SSL is performance — your computer and the email service need to encrypt and decrypt data for every operation. That’s work. But does it matter to humans?

Let’s do the use case: how do we use email? Of all the applications we use on the internet, I would argue that email is the **least real-time of all of them**.

Email is pretty much the only electronic medium that a user does not actively wait for. When you click to a web page, you are waiting for something to happen. Same for voice and video and instant messaging. Small performance degradations can be felt very intuitively at human scale.

Not so with email. You won’t know if it takes an extra 5 or 30 seconds for a message to come in. This is because user has **no expectation of a message until after it has arrived**. So it always feels “fast”.

(This is why Blackberry was very successful even when it went over a dog-slow paging network.)

It’s almost like ignorance is bliss: if you knew that a message has been sent then you might feel like it’s taking a while. But that only ever happens if you are simultaneously communicating with a person over a more real-time medium.

Therefore, enabling SSL for email seems an obvious choice: improved security without the user perceiving any difference whatsoever.
