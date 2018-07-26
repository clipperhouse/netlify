---
title: "Query expansions in Stack Overflow Talent"
date: 2018-07-26
author: "Matt Sherman"
---

Stack Overflow Talent aims to connect the right company with the right developer. We call this a two-sided market – developers on one side and recruiters on the other.

One challenge is that the recruiter side of the market is not always technical. Many clients struggle to understand technology skill sets and ecosystems.

This is understandable! It’s a jungle of jargon (a jargle?) out there, and those of us on the inside don’t realize how inscrutable it all is.

This plays out in Stack Overflow’s candidate database, a product offered to recruiters to search for candidates of different skills. (Developers can [opt in](https://stackoverflow.com/users/jobsearch/current) to this database with their developer story.)

The candidate database uses Elastic on the back end. Elastic is pretty good out of the box, but like other databases, it’s quite literal – to get a match, you have to search for **precise terms** that appear in developer stories.

We observed that recruiters’ search terms didn’t always meet this standard. For example, ‘front end’ is a common search, as are ‘mobile’ and ‘.Net’.

Some developers use those terms in their developer stories. But more often, skills are expressed more granularly.

_We_ know that an Angular expert is a front end person; we know that iOS implies mobile, and that C# is .Net – but databases such as Elastic do not.

The result is that recruiters miss good, appropriate candidates (which we heard quite a lot from Stack’s customer success team).

### Query expansions, v1

We asked our customer success folks: how do you advise clients to find (e.g.) front end developers? The response was ‘search instead for HTML, CSS, JavaScript, React, Bootstrap…’ etc.

Great advice. But shouldn’t the system already know this?

So we made the system know that. The first implementation (by me) was crude as could be, in order to test the theory as cheaply as possible.

We intercepted the raw query text and literally did a string replace: `s/front end/html javascript css react bootstrap/` etc.

Queries are **expanded** into richer search terms (invisibly to the end user):

`front end → (html5 or javascript or css or dom or typescript or sass or …)`

We eyeballed the search results, got feedback from the customer success team, and put it into production. The results, while anecdotal, were positive.

In turn, we repeated this process for other common search terms: sysadmin, mobile, data science. We used some regex to tolerate minor variations.

### Query expansions, v2

We solved some obvious problems, but one can see the limits in the above approach. We are crudely substituting literal text, not tokens. Substrings are a problem, as are n-grams.

The next step was to move this logic down into the query-parsing infrastructure. By doing so, we operate on a real syntax tree, with real tokens, and avoid “stringy” edge cases. We added a [simple library](https://www.benjamin.pizza/posts/2017-11-13-recursion-without-recursion.html) for making substitutions, and eliminated regex.

As of this writing, we offer query expansions for a few dozen common search terms (examples below). The result is that the customer success team needs to give clients ‘tips and tricks’ less often, demos by salespeople are more impressive, and most importantly, developers are more likely to be found by the right companies.

### Appendix: example query expansions

_A non-exhaustive list, for illustration._

`front end → (html5 or javascript or css or dom or angular or typescript or…)`

`mobile → (ios or android or swift or objective-c or react-native or xcode or…)`

`full stack → (ruby on rails or asp.net or django or spring or mvc or flask or…)`

`sysadmin/devops → (sre or networking or dns or docker or cisco or iptables or…)`

`security → (encryption or infosec or owasp or harden or pki or kerberos or…)`

`embedded → (arm or rtos or microcontroller or qnx or wind river or asic or fpga or verilog or…)`

`kernel → (operating system or interrupt or scheduler or mutex or semaphore or userland or…)`

`cloud → (aws or ec2 or s3 or azure or gcp or kubernetes or…)`

`fintech → (quant or trading or banking or goldman or two sigma or bloomberg or jane street or…)`

`data science/ML/AI → (probability or predictive or r or ggplot or pandas or neural network or…)`

`distributed → (kafka or spark or hadoop or mapreduce or cockroachdb or concurrency or mvcc or…)`


_Thanks to [Benjamin Hodgson](https://www.benjamin.pizza) for contributing to this essay._