---
title: "64-bitness: what it is and what it ain’t"
date: 2009-06-12
author: "Matt Sherman"

---

Very interesting post from Rico Mariani on the [why’s and why-not’s of doing 64-bit applications](http://blogs.msdn.com/ricom/archive/2009/06/10/visual-studio-why-is-there-no-64-bit-version.aspx), specifically Visual Studio. It’s important to understand that Visual Studio is about manipulating code, not the data that your code will ultimately handle.

This implies that, in order to truly exploit 64-bit, your program _itself_ would need to be 4 gigabytes in size or larger.

Photoshop will benefit from keeping a massive image file in memory. In Visual Studio, the “file” is your source code (and its compiled and debug representations). There aren’t many programs that are comprised of 4G of code. I think the SQL Server executable is maybe 1G, max, and that’s a massive friggin’ program.

The distinction: SQL Server, when deployed, may manipulate much more than 4G of data — so deploying it as a 64-bit executable makes sense. But the developers who write SQL Server would get almost no benefit from a 64-bit Visual Studio, since the program is much smaller than that.

Rico concludes that your best bet is running 32-bit Visual Studio on a 64-bit operating system. This obviates a lot of the limitations that 32-bit operating systems place on their applications, without requiring VS itself to be 64-bit.
