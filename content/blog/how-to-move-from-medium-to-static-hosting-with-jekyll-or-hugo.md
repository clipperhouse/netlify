---
title: "How to move from Medium to static hosting with Jekyll or Hugo"
date: 2018-05-24
author: "Matt Sherman"
---

I recently moved [my blog](http://clipperhouse.netlify.com/) from Medium to static generation with Hugo & hosting with Netlify. I prefer static hosting for performance reasons, and because Markdown is so nice.

This approach is good for people who are comfortable with Git and other dev tools. It’s not great if you like UI’s that (say) Medium or Wordpress provides.

### 0: Get familiar with Hugo or Jekyll

Out of scope of this article is how to use [Hugo](https://gohugo.io/getting-started/), [Jekyll](https://jekyllrb.com/docs/quickstart/) or [Netlify](https://www.netlify.com). That’s what their docs are for! I suggest you get up and running with “Hello, world” using those platforms before continuing.

> I happen to prefer Hugo, it’s super fast and I like Go. I like Netlify because the static hosting is automagic (triggered via Git).

### 1: Export from Medium

First, download your articles from [your Medium export page](https://medium.com/me/export), and expand the .zip file. (It takes a second, they email when it’s ready.)

Once downloaded and expanded, you should see a list of HTML files.

### 2: Convert to Markdown

Your Medium HTML pages need to be converted to Markdown. I [wrote a script](https://gist.github.com/clipperhouse/010d4666892807afee16ba7711b41401) (in Go) that worked for me. Copy it into a local file on your computer.

> You’ll need to [set up Go](https://golang.org/doc/install). If that’s not for you, [here are some other options](https://www.google.com/search?q=convert+medium+to+markdown).

In that script, you’ll need to change the `src` and `dest` variables. `src` is the folder with your Medium HTML files; `dest` is where you want the new Markdown files to end up. Then, `go run main.go`.

You should see a folder full of `.md` files in the `dest` folder. Move those into the content folder of Hugo/Jekyll and you should be on your way. If not...

### Happy to help

I learned a bunch during this project and am happy to help. Ping me [@clipperhouse](https://mobile.twitter.com/clipperhouse).