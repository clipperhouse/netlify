---
title: "Fixing the jQuery “jump” on slide"
date: 2011-02-10T08:59:00.000Z
author: "Matt Sherman"

---

You may notice in some situations, when using jQuery’s slideDown(), that the last little bit of the animation “jumps”. It feel un-smooth and frustrates those who like to dot our i’s. ([Here an explanation](http://jqueryfordesigners.com/slidedown-animation-jump-revisited/).)

The main issue is that the browser (and thus jQuery) is uncertain about the height of the element that is sliding. This, in turn, is based on uncertainty about the _width_ — the width determines how lines wrap, and dictates the height.

If your width is defined in % or auto, it remains uncertain. So, to smooth the animation, let’s make it certain. Here’s a one-liner:

$elementToSlide.width($elementToSlide.width());

All it does is assign a pixel value to the width of the element, based on the … width of the element. Worked for me.
