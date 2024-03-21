---
title: "How Microsoft can make Visual Studio cool among the cool kids"
date: 2011-02-01

---

I am quite partial to ASP.net MVC and C#. I’ve played with other platforms, esp Ruby, which have appeal as well.

While many aspects of the platform are, imho, technologically ahead of its competition (LINQ, Intellisense and Razor), I can’t shake the feeling that MS still appeals primarily to those with an enterprise background. Which is to say, the cool kids are choosing Rails and doing their editing on a Mac.

It needn’t be this way. Microsoft can do a small handful of things to make Visual Studio relevant to these trends, by reducing the unresolved pain points one experiences across all platforms. My ideas:

### Best-of-breed IDE for dynamic frameworks, especially Ruby on Rails.

I haven’t seen anyone crack the nut of code completion for methods and properties that are _likely to exist at runtime_. Rails’ conventions are pretty clear, and it seems to me that Intellisense should be able to use this information to offer hints and save keystrokes.

At the very least, VS should do basic syntax coloring for Ruby and Python out of box, with Intellisense for core keywords — just as they did with jQuery.

### Workflow and GUI support for the major source control systems: Git, SVN and Mercurial.

Command lines suck. There, I said it. I consider them a failure of imagination. Which is to say, I think of workflows visually, and I wish the tools were with me.

Nobody has done a great job with source control GUIs yet. The Tortoise-* and Visual-* folks have done some nice things, but they are not nearly where they could be. They are Windows 3.1, design-wise.

Imagine a clear visual picture of your source **built into the IDE and Windows Explorer**. Imagine your “git status” files staged in real time in a sidebar. Imagine a system that pings the main repo and gives you a hint of what others have done lately.

The simple tasks of add/commit/push/pull should be two clicks, max. No one is doing this yet, I see a huge opportunity for the one who gets it right.

_PS: I recognize that Microsoft can’t *ship* any of these source control systems. But they can obviously detect a .git folder._

_PPS: I know that source control workflows often require command-line precision. But the 80% case should be achievable in a GUI._
