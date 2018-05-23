---
title: "keyCode vs charCode vs Firefox"
date: 2009-11-17T15:35:50.000Z
---

I am working on a filtered HTML field. The idea is to only allow alphanumeric characters to be typed, and have all other keystrokes ignored.

I am using the [keypress event](http://docs.jquery.com/Events/keypress) in jQuery to capture the keystrokes — my function returns true for valid characters (which simply passes the event to the field) and false for everything else (which kills the event before it can “reach” the field).

The behavior was fine in IE and Chrome, but not in Firefox. My script was suppressing the arrow keys in only that browser. Certainly, a user should be able to arrow back and forth within the field they are editing.

The problem is twofold. First, different browsers fire the keypress event for some keystrokes, but not all. Chrome and IE didn’t fire the event when using the arrow keys, while Firefox did. Secondly, the keystroke’s value will appear in e.keyCode property in some browsers, but in the e.charCode property in others. Jeez Louise.

This [quirksmode article](http://www.quirksmode.org/js/keys.html) turned out to be a lifesaver. He exhaustively catalogs the differences across browsers, and provides a very valuable little test app (scroll to the bottom of that page).

So, short story long, here is a simple script that I ended up with, I hope it’s useful to you.
`$(&#34;#username&#34;).keypress(function(e) {  
	var k = e.keyCode || e.charCode;  
	var c = e.charCode;  
	var isArrow = (c == 0 &amp;&amp; k &gt;= 37 &amp;&amp; k &lt;= 40);  
	var isSpecial = ((k == 8) || (k == 9) || (k == 127)) || isArrow;	// backspace, tab, delete  
	var isOK = (k &gt;= 48 &amp;&amp; k &lt;= 57) || (k &gt;= 65 &amp;&amp; k &lt;= 90) || (k &gt;= 97 &amp;&amp; k &lt;= 122);  // letters and numbers  
	return isOK || isSpecial;  
});`

It hasn’t been exhaustively tested, but is in the “works for me” stage right now. Let me know if it’s helpful.
