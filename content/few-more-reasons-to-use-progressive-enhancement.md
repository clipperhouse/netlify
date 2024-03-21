---
title: "A few more reasons to use Progressive Enhancement"
date: 2010-02-23

---

[Progressive Enhancement](http://www.alistapart.com/articles/understandingprogressiveenhancement) is a methodology where a web application is developed in layers. Each layer works correctly on its own, and additional layers on top enhance the user experience.

The justifications for Progressive Enhancement are usually around graceful degradation — people using older technologies are not left out in the cold, while better technologies are exploited for more cutting edge users.

Those are fine things, but there are more compelling reasons to use PE, in my opinion.

### **Easier to develop**

When developing a modern web app, we’ll likely want to use Ajax, to make efficient and responsive UIs. Great!

But what if something breaks? The user clicks and nothing happens. Is it a Javascript error, a CSS thing, or is the problem on the backend?

We avoid this mystery by **separating concerns**.

First, we develop a web app that works reliably without Ajax. We focus on the HTML experience — buttons that submit forms and links that navigate to real URLs. A back button that works!

We work it to the point that we know the server-side is reliable, and **ship it**.

Now let’s sprinkle Ajax on top. Intercept clicks and submits, and route them to your Ajax bits. During this process, if something doesn’t work, we can say with reasonable confidence that the problem is client-side.

(Tip: use the same “end point” on the server for both Ajax and traditional requests. In MVC, this would be the controller action URL. Vary vary the end point’s _response_ depending on the request type — a partial instead of a full layout, say.)

### **Robust against humans using a failure-prone language**

Proponents of PE will tell you that you need to support users that don’t have Javascript enabled. That’s valid. But it’s also an edge case.

The greater danger is that _our_ Javascript will have bugs. In most browsers, this simply means that the JS will stop executing without notice. What happens then?

If we’ve authored the non-JS experience correctly and separately, then the experience should fall back to a plain HTML experience. Graceful degradation is an insurance policy for _our_ shortcomings, too.

### **Division of labor**

Each of these layers (JS, HTML, server) is a specialty. If our site gets big, we might have separate people working on each. Make sure the jQuery person and the Django person can work independently.

### **Now keep up the discipline**

Over time, it’s easy to forget the HTML experience, since your Ajax stuff works so well. Remember, each time you want to add a new feature, stick with the above methodology.

Turn off JS in your browser. Develop the feature. Test it thoroughly. Then, turn JS back on and delight your users.
