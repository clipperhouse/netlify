---
title: "How about jQuery-style “property methods” for C#?"
date: 2010-02-23
author: "Matt Sherman"

---

Here’s an idiom that I think would be useful in C#: “property methods” in the style of jQuery.

There are many methods in jQ — html(), val(), width() — that are getters when they are called without an argument, and setters when they are. This makes for some very nice fluent code:
$(“#someElement”).width(“100px”).html(“hello there”);   
window.alert(“The width of #someElement is ” + $(“#someElement”).width());

I’d love to be able to do this in C#, to bring in some of that fluency and terseness. For example, I currently have to write:
myPerson.FirstName = “Joe”;   
myPerson.LastName = “Smith”;   
myPerson.ZipCode = “12345”;

The code smell here is that I refer to myPerson 3 times. Don’t you just wanna say “Yeah, I get it, myPerson, sheesh.” Wouldn’t it be better to write:
myPerson.FirstName(“Joe”).LastName(“Smith”).ZipCode(“12345”);

Of course I could implement the above with overloads and private fields. But I shouldn’t need to do that much notation.

I think it can be done in C# without new keywords. Simply allow methods to have get and set bodies:
public class Person   
{   
public string FirstName() { get; set ; }   
public string LastName () { get; set ; }   
public string ZipCode () { get; set ; }   
}

The compiler would interpret these much like regular properties, backed by (automagical) private fields, with the caveat that a passed value invokes _set_. **The setter returns the parent object**, giving us the fluency.

And as with properties, you could add bodies to get and set as you desire, where the _value_ argument is implied for _set_.

Overall, this is the equivalent of:
public class Person   
{   
public string FirstName() // getter   
{   
 return _FirstName;   
}public Person FirstName(string value) // setter   
{   
 _FirstName = value;   
 return this; // the fluent bit   
}private string _FirstName; // backing store   
   
//…and repeat for each property   
}

Again, I _could_ write my classes this way. But that would be so much boilerplate, uninformative code. Please compiler, do it for me.
