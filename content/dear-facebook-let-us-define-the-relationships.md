---
title: "Dear Facebook: let us define the relationships"
date: 2010-04-25

---

We’ve begun implementing some of Facebook’s Open Graph on [Alikewise](http://alikewise.com/), my dating startup. By [Dare Obasanjo’s definition](http://www.25hoursaday.com/weblog/2010/04/24/FacebooksOpenGraphProtocolFromAWebDevelopersPerspective.aspx), books are our main “social object”.

(The site is based around the idea that a person will associate themselves with any number of books, with the hope that this will inspire notice by other singles.)

Indeed, the Open Graph protocol is a step toward a more semantic web by allowing us to put [agreed-upon metadata](http://developers.facebook.com/docs/opengraph#types) into our pages. What it doesn’t do is allow us to **define relationships** among the metadata. Facebook reserves this right for itself.

For example, books obviously have authors. There is no way to define this relationship, as far as I can tell. We can indicate that a page is about a book _or_ about an author, but not both. Ditto actors and movies, or politicians and their voting history.

In other words, one page = one freestanding social object. We need more.

On my site, I’d like to associate a person with any number of books, in a way that is meaningful outside our site. (A person might choose to identify themselves via Facebook, Twitter or any OpenID, for example.)

Then, any third-party site could aggregate a profile of a person based on Alikewise’s information and others. One might Google “people who like [Catch-22](http://alikewise.com/Books/Details/180)” and get more meaningful results.

The Open Graph is helpful in that it pushes a semantic web forward, using Facebook’s market power. And via its Like button, Facebook can indeed relate people to social objects. I would like this ability extended beyond Facebook’s firewall.
