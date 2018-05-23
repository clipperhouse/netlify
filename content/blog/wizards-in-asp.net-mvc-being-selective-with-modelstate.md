---
title: "Wizards in ASP.Net MVC: being selective with ModelState"
date: 2009-11-23T21:22:50.000Z
---

So, there are many ways to skin the cat we called form validation. With a wizard-style application, it requires some nuance.

With ASP.Net MVC, a traditional way to do validation is to use [ModelState](http://davidhayden.com/blog/dave/archive/2008/09/07/MVCUIErrorHandlingModelStateAddModelError.aspx). ModelState is a property on your controller where you can collect errors relating to your Model. For example, if a LastName property is required, you would do something like this:

if (String.IsNullOrEmpty(lastName))  
 ModelState.AddModelError(“lastName”, “A last name is required.”);

And then, when deciding whether to commit the changes, you’ll test the IsValid property:

if (ModelState.IsValid)  
{  
 …commit to database or whatever  
}

What I am trying to do, however, is create a “wizard”. A characteristic of a wizard is that you can move forward only if all the data is valid, but you can **move back regardless**. And, after moving back and continuing forward again, your **data on the forward screens will have been preserved**. (Observe this on the next wizard you use.)

The ModelState.IsValid approach above is a bit monolithic — progress can only be made if all the submitted data is valid. What I want to do is save data on the back button where it’s valid, but still allow the backward move even if it’s not _all_ correct. Follow?

So I found a nice little way of doing this. First, I created an extension method on ModelState which allows me to test if a _particular part_ of the ModelState is valid:

namespace Clipperhouse.Mvc  
{  
 public static partial class Extensions  
 {  
 public static bool IsValid(this ModelState modelState)  
 {  
 return (modelState == null || modelState.Errors.Count == 0);  
 }  
 }  
}

This allows me to selectively commit the valid data, while simply ignoring the bad stuff:

public ActionResult Register(string firstName, string lastName)  
{  
 // 1. Detect model errors  
 if (String.IsNullOrEmpty(firstName))  
 {  
 ModelState.AddModelError(“firstName”, “A first name is required”);  
 }  
 if (String.IsNullOrEmpty(lastName))  
 {  
 ModelState.AddModelError(“lastName”, “A last name is required”);  
 }

// 2. Detect which button was clicked  
 bool isNext = Request.Form[“nextButton”] != null;  
 bool isBack = Request.Form[“backButton”] != null;

// 3. Get my model object  
 var personRep = new PersonRepository();  
 var person = personRep.GetPerson(5);

// 4. Selectively update only those properties that are valid  
 if (ModelState[“firstName”].IsValid())  
 person.FirstName = firstName;  
 if (ModelState[“lastName”].IsValid())  
 person.LastName = lastName;

personRep.Save();

// If the user clicked “Next”, only move forward if the whole model is valid.  
 // If the user clicked “Back”, go back regardless,  
 // with the knowledge that “we saved what we could” above.  
 if (ModelState.IsValid &amp;&amp; isNext)  
 {  
 return RedirectToAction(…next screen…));  
 }  
 else if (isBack)  
 {  
 return RedirectToAction(…previous screen…);  
 }

// If we got this far, the user is trying to go Next,  
 // but the data is not completely valid. Return to the current view  
 // and display errors  
 return Register();  
}

Hopefully the above will help.

I haven’t seen a lot of discussion of wizards in ASP.Net MVC. There was explicit support for this sort of thing in WebForms, but it’s a roll-your-own proposition in MVC. This is to be expected — the stateless nature of the web is not really made for wizards, and MVC is close to the metal.

Would love to see Microsoft thinking about this scenario in future versions.
