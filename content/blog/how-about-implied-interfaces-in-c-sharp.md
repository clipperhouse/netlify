---
title: "How about implied interfaces in C#?"
date: 2009-12-30T18:51:21.000Z
---

I took a look at Google’s new language, Go. Some interesting stuff in there.

One idea in Go that would be especially handy in C# is [implied interfaces](http://golang.org/doc/go_lang_faq.html#inheritance). What does this mean?

Well, in C# you are accustomed to Interfaces. It’s a description of a type, without an implementation. I won’t go into [why](http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_interrfaces03052006095933AM/csharp_interrfaces.aspx) they are a good idea (think loose coupling).

A class (aka a Type) is said to satisfy an interface if it includes all the interface’s elements. So perhaps your IPerson interface requires FirstName and LastName properties. Then, when you implement an actual Person in C#, you will:

1.  Declare that the class implements IPerson (public class Person : IPerson)
2.  Implement IPerson’s properties in Person (public string FirstName { get; set; }, etc)

Those who have become accustomed to C#’s [var](http://msdn.microsoft.com/en-us/library/bb383973.aspx) keyword might recognize something here. By simply looking at the properties of Person, **the compiler has all the information it needs** to infer that Person implements IPerson. Why should I have to say so explicitly? **Step #1 is logically superfluous.**

Therefore I would like to see the interface declaration become _optional_.

You _might_ choose to keep it in there as a convenience. For example, Visual Studio offers some nice tools to help you implement Interfaces. It might be nice to “state your intention” of implementing an interface, so that the compiler will stop you until you do — giving you red flags earlier. Error messages might be made more informative as a result. (That said, the tooling in VS could help you with implicit interfaces, too.)

But, unless I am missing something, the “: IPerson”syntax is not logically necessary. In the spirit of a more terse and “dynamic” style in C#, implicit interfaces would be a nice win.
