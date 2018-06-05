---
title: "Embedding a struct declaration in a text template in Go"
date: 2015-01-31T23:38:25.000Z
author: "Matt Sherman"

---

Here’s a nice little technique I came across in developing [gen](http://clipperhouse.github.io/gen).

Say you have a text template, and that template is intended to output Go code. You’d like to pass a data structure into the template, and have the structure appear in the template as its own value literal.

There is a printf format string that does just this: %#v

Let’s say you have a template like:
`p := {{.}}`

Where {{.}} represents the passed-in data. Let’s say the data is a struct.
`type Person struct {  
	Name string  
	Age int  
}``person := Person{&#34;Jane&#34;, 30}  

In order to have the output work as we wish, we make this modification to the template:``p := {{ printf &#34;%#v&#34; . }}``...which means &#34;call printf with the format string %#v and the value ., which represents the passed data.``We execute the template along the lines of:``tmpl.Execute(w, person)``(Where tmpl is the compiled template above, and w is an io.Writer)``The resulting output will be:``p := pkg.Person{Name:&#34;Jane&#34;, Age:30}``...where pkg is your package name. That&#39;s valid Go code which in turn can be executed. Neat.``Here&#39;s a [runnable version](http://play.golang.org/p/7lF_UmL2Qt) on the Go playground.`
