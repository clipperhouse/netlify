---
title: "For want of parens in Ruby"
date: 2013-06-03

---

Ruby is beautiful in many ways. The opportunities to create tight, readable code are impressive. More than other languages, it affords the opportunity to make code look like what it does.

One syntactic wart, however, is functions. I’ll make an analogy with JavaScript, where
`myFunction()`

_executes_ myFunction, while
`myFunction`

is a variable that _refers_ to the function, that can be passed as, say, a callback. In Ruby, parentheses around method arguments are optional, such that
`my_thing.do_something one_argument, another_argument`

is the same as
`my_thing.do_something(one_argument, another_argument)`

I can understand this as a cosmetic choice — fewer delimiters, less noise. However, it makes passing functions as arguments unfortunately ugly.

Because there is no distinction between parens and not, simply referring to a function becomes non-trivial. As a result, if one wants to use a functional style, there are hoops.

Now, I’m a noob (Nuby?) so there’s no doubt that I am missing something idiomatic. But I see no fewer than 4 ways in Ruby to pass a function, none of which strike me as pretty. There are blocks, which are good for anonymous functions, such as:
`array.map{ |x| x * 2 }`

That ain’t bad, but naming and reusing it is less than obvious. (Again, I’m a noob, correct me.) Another approach is a do block:
`form_for my_model do |f|  
 f.stuff  
 f.things  
end`

There are Proc’s which explicitly say, make this a function:
`my_func = Proc.new { |x| x * 2 }`

And not least, a lambda keyword:
`my_lamb = lambda { |x| x * 2 }`

Further, for lack of parens, we can’t simply my_func(5), we have to my_func.call(5).

There are subtle and [reasonable differences](http://www.robertsosinski.com/2008/12/21/understanding-ruby-blocks-procs-and-lambdas/) for these things. A method is not a proc, is not a lambda. And there are [idioms](http://ruby-doc.org/core-2.0/Proc.html) for hiding the ugly.

But for a language a beautiful as Ruby, and for a person coming from C# or JavaScript, this is surprisingly baroque.
