---
title: "Nesting is state"
date: 2014-03-30
author: "Matt Sherman"

---

There are stylistic debates about how much nesting or indentation one should choose in code. [This slide](http://talks.golang.org/2013/bestpractices.slide#3) and the [one that follows](http://talks.golang.org/2013/bestpractices.slide#4) illustrate the issue well. The slide refers to “cognitive load” without explaining, and it occurs to me that **nesting is state**.

In the first example, if we want to debug around the highlighted line, what do we need to keep in mind?
`func (g *Gopher) WriteTo(w io.Writer) (size int64, err error) {  
    err = binary.Write(w, binary.LittleEndian, int32(len(g.Name)))  
    if err == nil {  
        size += 4  
        var n int  
        n, err = w.Write([]byte(g.Name))  
        size += int64(n)  
        if err == nil {  
            err = binary.Write(w, binary.LittleEndian, int64(g.AgeYears))  
            if err == nil {  
                size += 4  
            }  
            return  
        }  
        return  
    }  
    return  
}`

Answer: _the truth of each of the if statements that precede it._ Each of those bits of truth is a piece of state. Now look at the alternative:
`func (g *Gopher) WriteTo(w io.Writer) (size int64, err error) {  
    err = binary.Write(w, binary.LittleEndian, int32(len(g.Name)))  
    if err != nil {  
        return  
    }  
    size += 4  
    n, err := w.Write([]byte(g.Name))  
    size += int64(n)  
    if err != nil {  
        return  
    }  
    err = binary.Write(w, binary.LittleEndian, int64(g.AgeYears))  
    if err == nil {  
        size += 4  
    }  
    return  
}`

In this case, the highlighted line “cares” very little about what came before — all it needs to know is that we got there.

The flattening of the hierarchy plus lots of return-on-fail can be thought of as “shedding” state. I call this pattern “fail fast”: by the time you get to the bottom of the code, you really only need one piece of “state”, which is “we’ve gotten this far successfully”. You can forget the past.

Of course, the logic of these two examples is equivalent. I am speaking of the mental model — the list of “non-local” things that must be kept in mind when working with a local piece of code.

And for me, “list of non-local things” is a good definition of “state”.

[_discuss on hacker news_](https://news.ycombinator.com/item?id=7497134)
