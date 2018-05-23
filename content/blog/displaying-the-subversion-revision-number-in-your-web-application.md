---
title: "Displaying the Subversion revision number in your web application"
date: 2009-05-26T22:28:00.000Z
---

I found a nice technique for automatically displaying the SVN revision number in the footer of a web site. It is based in [CruiseControl.Net](http://ccnet.thoughtworks.com/).

Why would I do this? Well, we don’t have a strict version numbering convention for our app. We roll out incremental builds all the time. This falls under the technique of “continuous integration”, or in Google’s case, “eternal beta”. So it’s easier just to have the app give itself an incremental version number each time, that corresponds with our build process.

First, go get the SVN revision labeller and follow the instructions: [http://code.google.com/p/svnrevisionlabeller/](http://code.google.com/p/svnrevisionlabeller/)

This will automatically write the revision number in the .state file associated with your CruiseControl project. This file is usually stored at C:\Program Files\CruiseControl.NET\server\[ProjectName].state

It’s just an XML file, so you can read the contents. Using a bit of Linq to XML, I am able to grab that data on the fly:

[code:c#]using System.Xml.Linq;   
using System.IO;   

public string GetRevisionLabel()   
{   
 string result = String.Empty;   
 string stateFilePath = “C:\Program Files\CruiseControl.NET\server\MyProject.state”;  
 if (HttpContext.Current.Application[“BuildLabel”] != null)   
 {  
 result = (string)HttpContext.Current.Application[“BuildLabel”];  
 }  
 else if (File.Exists(stateFilePath))   
 {  
 XDocument stateFileRoot = XDocument.Load(stateFilePath);   

 var q = (from label in stateFileRoot.Descendants(“Label”)  
 select (string)label).SingleOrDefault();  

 if (q != null)   
 {   
 result = q.ToString();  
 HttpContext.Current.Application[“BuildLabel”] = result;   
 }  
 }   
 return result;   
}[/code]

Now display it wherever you like. In this case, you can see that I cache it for performance and easy access.

Security note: you might not want your web process reaching into the Program Files folder. I copy the .state files to App_Data as part of the build process, and query them there.

Hope this helps.

— —

Inspired by: [http://stackoverflow.com/questions/913904/why-would-a-site-display-svn-version-and-what-are-the-advantages](http://stackoverflow.com/questions/913904/why-would-a-site-display-svn-version-and-what-are-the-advantages)
