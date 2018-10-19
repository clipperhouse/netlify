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

Jargon is a Go package with tokenizers and lemmatizers. It’s useful for identifying, and optionally replacing, canonical terms in text. [Source & docs](https://github.com/clipperhouse/jargon).

<form action="/api/jargon/" method="POST">
    <span class="hint">
        Examples:
    </span>
    <label for="prose">
        <input type="radio" id="prose" name="format" value="text" checked>
        Text
    </label>
    <label for="html">
        <input type="radio" id="html" name="format" value="html">
        HTML
    </label>
    <label for="json">
        <input type="radio" id="json" name="format" value="text">
        JSON
    </label>
    <label for="csv">
        <input type="radio" id="csv" name="format" value="text">
        CSV
    </label>

    <textarea class="code" id="text" name="text" rows="8"></textarea>

    <div>
        <button type="submit">👉 Lemmatize</button>
    </div>

    <div class="pre code result"></div>
</form>

<div id="examples" class="examples">
    <div id="prose">
We can lemmatize plain prose, perhaps a technical job listing:

We are looking for experienced Rails developers, with experience in HTML 5 and T-SQL.

Experience with ObjC and cpp and vue and React  Native is a plus.
    </div>
    <div id="html">
We can lemmatize HTML, but only the text nodes.

<!— Comments are left verbatim even if terms like Ruby are within them. True for tags and attributes as well. -->

<p class="rails">Hi! Let's talk Rails and SQL.</p>
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
