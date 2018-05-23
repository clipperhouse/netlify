---
title: "Deploying an ASP.net MVC project"
date: 2009-09-10T17:17:15.000Z
---

So, I was looking around for a simple way to emulate the “Publish” function of Visual Studio for my first ASP.net MVC project.

I am doing my builds on a server with CruiseControl.Net. Google led me to things like [msdeploy](http://blogs.iis.net/msdeploy/), which I am sure is great, but really I shouldn’t need another tool.

I need two steps implemented as simply as possible:

*   Build it
*   Move the built project to directory that IIS points to — but only the _required_ files

The build step is straightforward and familiar to those who use CC: the [MsBuild Task](http://confluence.public.thoughtworks.org/display/CCNET/MsBuild+Task). It builds in-place.

For the deployment, why complicate it? I just use robocopy to move the files from the built source, while being selective. Thus:

robocopy “C:\MyStuff\Source\Alikewise.Web” “C:\MyStuff\Dev” *.dll *.aspx *.ascx *.asax *.master *.ico *.gif *.png *.jpg *.js *.css *.config /S /PURGE /XF *.pdb *.cs *.csproj *.t4 *.tt /XD .svn obj

It looks long but that’s only because I am being very specific about what files to copy. A web project needs:

*   dll’s
*   views (aspx, ascx, asax and master files)
*   images (png, gif, jpg, ico)
*   CSS
*   Javascript
*   Config files

That’s enough, but for good measure I make sure to exclude:

*   C# source
*   Debug files
*   Project files

And it works! Have a better suggestion? Lemme know.
