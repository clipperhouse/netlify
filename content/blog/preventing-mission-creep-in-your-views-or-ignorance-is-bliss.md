---
title: "Preventing mission creep in your Views, or, ignorance is bliss"
date: 2009-12-19T13:48:00.000Z
---

An important concept in MVC is that Views are meant to be “dumb” — and by that I mean, your View should only care about outputting a user interface, and should know very little about business logic.

You want this for a few reasons. For example, you might create alternate Views for different kinds of output, such as for a mobile device. You shouldn’t have to re-implement any business logic to do that.

And down the road, when your logic inevitably changes, you shouldn’t have to worry about changing it in more than one place. Not only is that tedious and time-consuming, but you open up the risk of having inconsistent behavior. It violates [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

How might this happen? Here’s an example.

Let’s say you have a social app which displays user profiles. If a user is looking at their own profile, you might want to offer them a link to edit it. So your View would have something like:

&lt;% if (Model.DisplayedUser == Model.LoggedInUser) { %&gt;  
&lt;a href=”url_of_edit_screen”&gt;edit this profile&lt;/a&gt;  
&lt;% } %&gt;

Simple enough, and it might not raise any red flags at the time. Then, however, you realize that administrators should be able to edit profiles as well. Now your View code becomes:

&lt;% if (Model.DisplayedUser == Model.LoggedInUser || Request.User.IsInRole(“Administrator”)) { %&gt;  
&lt;a href=”url_of_edit_screen”&gt;edit this profile&lt;/a&gt;  
&lt;% } %&gt;

See where this is going? A month later, you realize that “moderators” need the same ability. And if a profile has been suspended, perhaps the user should no longer see that link. And maybe you want to offer a “preview” mode, where the link is hidden. Etc.

Your View is now handling business logic. It becomes unreadable and untestable, and you are blurring the [separation of concerns](http://consultingblogs.emc.com/jamesbroome/archive/2009/08/24/asp-net-mvc-separation-of-concerns-amongst-team-members.aspx).

The best way to avoid this is, first, [have a ViewModel](http://www.superexpert.com/blog/archive/2009/04/13/asp.net-mvc-tip-50-ndash-create-view-models.aspx) (the above code already assumes that). Second, add properties to that ViewModel that describe only **what the View should show, without regard for why**. The usage becomes:

&lt;% if (Model.EnableEditLink) { %&gt;  
&lt;a href=”url_of_edit_screen”&gt;edit this profile&lt;/a&gt;  
&lt;% } %&gt;

Now, your View doesn’t know anything about Users, Roles or anything like that. It’s simply **following orders** that describe what to output. For Views, **ignorance is bliss**.

Meanwhile, back in your ViewModel class, the property might be something like:

public class ProfileViewModel  
{  
 public bool EnableEditLink {  
 get  
 {  
 bool display = (this.DisplayedUser == this.LoggedInUser)  
 || Request.User.IsInRole(“Administrator”)  
 &amp;&amp; !UserAccountIsSuspended  
 &amp;&amp; !IsPreviewMode;  
 return display;  
 }  
 }  
}

(Another practical benefit: **you can’t set a breakpoint in a View**. By encapsulating the logic in the ViewModel, you can debug and write tests to your heart’s content.)

So next time you need to put an if-then in your View, resist the urge to let the View make the decision. No matter how simple, push the logic back into the ViewModel, where it belongs.
