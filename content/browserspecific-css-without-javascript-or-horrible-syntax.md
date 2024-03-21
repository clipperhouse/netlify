---
title: "Browser-specific CSS without Javascript or horrible syntax"
date: 2009-12-07

---

So, we all know that browsers have [differing levels](http://www.quirksmode.org/css/contents.html) of CSS support. Working around them can be a pain in the a**, requiring non-standards-based [hacks](http://www.webmonkey.com/tutorial/Browser-Specific_CSS_Hacks) which are very hard to read and debug.

I’d like to write CSS that looks like this:

.ie div.thing  
{  
…some tweaks for IE…  
}

.ff div.thing  
{  
…some tweaks for Firefox…  
}  
…etc. Even better:

.ie6 div.thing  
{  
…curse you old browser…  
}

That’s readable, and isn’t polluted with the –moz stuff or &lt;! — If IE –&gt; or whatever. How to do it? Well, on the server, I simply add a class (or classes) to the &lt;body&gt; tag. It ends up looking like this:

…or…

**So, every child of &lt;body&gt; inherits the browser-specific class(es).** This allows you to use the readable CSS above.

I implemented this in C# as an [extension method](http://msdn.microsoft.com/en-us/library/bb383977.aspx) on HttpBrowserCapabilities. Like so:

namespace ClipperHouse.Extensions  
{  
 public static partial class BrowserCapabilityExtensions  
 {  
 public static string CssClass(this HttpBrowserCapabilities b, bool addVersion)  
 {  
 string cssClass = String.Empty;

if (b.Browser.ToLower() == “ie”)  
 cssClass = “ie”;  
 if (b.Browser.ToLower().Contains(“firefox”))  
 cssClass = “ff”;

bool isChrome = b.Capabilities[“”].ToString().ToLower().Contains(“chrome”);  
 bool isSafari = b.Browser.ToLower().Contains(“safari”) &amp;&amp; !isChrome;  
 bool isWebkit = isChrome || isSafari;

if (isWebkit)  
 {  
 cssClass = “webkit”;  
 }

if (addVersion)  
 cssClass += “ “ + cssClass + b.MajorVersion.ToString();

if (isChrome)  
 cssClass += “ chrome”;  
 if (isSafari)  
 cssClass += “ safari”;

return cssClass;  
 }

public static string CssClass(this HttpBrowserCapabilities b)  
 {  
 return b.CssClass(false);  
 }  
 }  
}

Then, in my master page:

&lt;body class=””&gt;

Easy-peasy. I added a bit of cleverness that gives you both “webkit” and “chrome” so you can target the rendering engine and/or the browser. Of course, this could go further, recognizing (say) mobile browsers or operating systems. Give me your ideas in the comments.

You should be able to do similar in PHP or whatever. Hope this helps!

—

PS: One might be tempted to use Javascript/jQuery to achieve the above. But CSS mustn’t depend on JS — we need our pages to degrade gracefully in the absence of JS.

Related: [CSS that is scoped only when Javascript is present](http://stackoverflow.com/questions/1855998/jquery-how-to-hide-divs-they-are-showing-for-a-split-second-on-page-load)

—

_PPS, using extension methods in your master page may require adding a line to web.config, let me know if you need help_
