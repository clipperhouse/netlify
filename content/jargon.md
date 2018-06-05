---
title: "Jargon demo"
date: 2018-05-18
style: "app"
css:
- "/css/jargon.css"
js:
- "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
- "/js/jargon.js"
---

Jargon is a Go package with tokenizers and lemmatizers. It’s useful for identifying, and optionally replacing, canonical terms in text. [Source](https://github.com/clipperhouse/jargon).

### Text

<form action="//jargon-demo.appspot.com" method="POST" id="text-form">
    <span class="hint">
        Examples:
    </span>
    <label for="prose">
        <input type="radio" id="prose" name="format">
        Prose
    </label>
    <label for="json">
        <input type="radio" id="json" name="format">
        JSON
    </label>        
    <label for="csv">
        <input type="radio" id="csv" name="format">
        CSV
    </label>

    <textarea class="code" id="text" name="text" rows="6"></textarea>

    <div>
        <button type="submit">👉 Lemmatize text</button>
    </div>

    <div class="pre code result"></div>
</form>

### HTML

<form action="//jargon-demo.appspot.com" method="POST" id="text-form">
    <textarea class="code" name="html" rows="6">We can lemmatize HTML, but only the text nodes.

<!— Comments are left verbatim even if terms like Ruby are within them. True for tags and attributes as well. -->

<p class="rails">Hi! Let's talk Rails and SQL.</p>
</textarea>

    <div>
        <button type="submit">👉 Lemmatize HTML</button>
    </div>

    <div id="html-result" class="pre code result"></div>
</form>

<div id="text-examples" class="examples">
    <div id="prose">
We can lemmatize plain prose, perhaps a technical job listing:

We are looking for experienced Rails developers, with experience in HTML 5 and T-SQL.

Experience with ObjC and cpp and vue and React  Native is a plus.
    </div>
    <div id="csv">
The parsing rules work well for comma separated files:

Name,Skills,Years
Jane Doe,"c sharp, ecma script",6
Foo Bar,"aspnet mvc R NodeJS", 7.5
    </div>
    <div id="json">
The parsing rules work well for JSON:

{[
    "name": "Microsoft Access",
    "name": "X Code"
]}
    </div>
</div>
