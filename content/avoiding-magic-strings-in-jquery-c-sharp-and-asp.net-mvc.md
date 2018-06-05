---
title: "Avoiding “magic strings” in jQuery, C# and ASP.net MVC"
date: 2010-09-07T16:44:00.000Z
author: "Matt Sherman"

---

The longer I program, the less tolerance I have for “magic strings”. You might be familiar with them — they are strings that have programmatic meaning but are trapped between quotes in another language.

A classic example is SQL held in a string variable within your C#/PHP/whatever code. It might just as easily be HTML in your Javascript.

The problem is that this code is meaningless outside of its domain. Your SQL server knows what SELECT means, but the PHP interpreter does not. If you misspell it, or generate it dynamically, and it fails, you are not going to know why. Cross your fingers!

The problems are clear:

*   Magic strings are error-prone
*   Your tools (compilers, interpreters, debuggers and IDEs) can’t tell you if (or why) they are wrong
*   They are tedious, hard to read, and hard to maintain — i.e., a waste of a smart programmer’s time

I’ve learned a few ways of avoiding these problems. Most of the techniques come down to being disciplined about [separation of concerns](http://en.wikipedia.org/wiki/Separation_of_concerns).

#### Javascript (jQuery) and HTML

How many times have you seen something like…
$(“body”).append(‘&lt;div class=”highlight” id=”’ + newid + ‘”&gt;” + message + ‘&lt;/div&gt;’);

That new div might or might not appear in the browser. See the syntax error? You might have to squint. And imagine, god forbid, that we need to nest an element inside that div.

We’re not adding a DOM element to the page, we are adding a magic string that might maybe be a tag.

How do we avoid this? One option is to have the DOM element already on the page (perhaps with display:none), and then just manipulate it with jQuery — that would be ideal separation of concerns.

But if you must create the new element, jQuery allows us to do this with a minimum of stringy-ness:
var newdiv = $(“&lt;div /&gt;”).addClass(“highlight”).attr(“id”, newid).html(message);   
$(“body”).append(newdiv);

That first bit creates a jQuery _object_ that can accept the methods that follow. We avoid worrying about matching up the closing tags &amp; attribute quotes, counting apostrophes — and squinting.

#### C#, HTML and URLs

There are places where you might want to dynamically create markup in your executable code. This leads us down the same road as above.

(Again, you would hope your HTML lives elsewhere, but-if-you-must…)

C# has classes which can help here. The first is [TagBuilder](http://msdn.microsoft.com/en-us/library/system.web.mvc.tagbuilder_members.aspx), and it has a style similar to the jQuery thing above:
var img = new TagBuilder(“img”);   
img.MergeAttribute(“src”, my_image_url, true);   
img.MergeAttribute(“alt”, my_image_desc);   
img.MergeAttributes(new RouteValueDictionary(htmlAttributes));   
   
var a = new TagBuilder(“a”);   
a.MergeAttribute(“href”, my_url, true);   
a.InnerHtml = img.ToString(TagRenderMode.SelfClosing);

An img inside an anchor is clean and readable. There are a number of convenience bits in there (note the MergeAttributes and SelfClosing) that will save you tedium.

And you know what? URL’s are magic strings too. How many times have you concatenated and replaced and parsed them? Ick. Check out [UriBuilder](http://msdn.microsoft.com/en-us/library/system.uribuilder_members.aspx). (URI is the proper term, btw.)

Want to switch from http to https?
var url = new UriBuilder(Request.Url);   
url.Scheme = Uri.UriSchemeHttps;

Then just call ToString() when you need the full URL as a string.

Want to find out the fully qualified host name, without parsing? That’s simply the url.Host property. The querystring is .Query. You get it. Not a substring() or indexOf() in sight.

#### ASP.net MVC

…is wonderful, IMHO. But there can be a lot o’ magic strings. This allows us to work fluidly, as if we are in a dynamic language. But, speaking for myself, I want to know when I’ve fat-fingered something before runtime.

There is a great third-party tool called [T4MVC](http://mvccontrib.codeplex.com/wikipage?title=T4MVC) by the brilliant [David Ebbo](http://blogs.msdn.com/b/davidebb/). Long story short, it gives you strongly-typed helpers such as:
&lt;%= Html.ActionLink(“view my profile”, MVC.Profile.Detail(some_user_id)) %&gt;

…and…
return Redirect(MVC.Account.Logon());

It helps with versioning your static CSS and JS files, too. (I bet you are using magic strings for that.)

And if you really want to go nuts, check out [Chirpy](http://www.weirdlover.com/tag/chirpy/), which automates T4MVC and a bunch more.
