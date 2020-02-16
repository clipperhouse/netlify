---
title: "Jargon demo"
date: 2018-05-18
style: "app"
css:
- "css/jargon.css"
js:
- "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
- "js/jargon.js"
---

Jargon is a Go package with tokenizers and lemmatizers. [Source & docs](https://github.com/clipperhouse/jargon).

<form action="https://clipperhouse.com/api/jargon/" method="POST">
<span class="hint">
    Examples:
</span>

<div id="labels">
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
</div>

<textarea class="code" id="text" name="text" rows="8"></textarea>

<button type="submit">Click to lemmatize</button>

<div class="pre code result"></div>
</form>

<div id="examples" class="examples">
<div id="prose">

    Jargon picks out known terms (lemmas) from technical text, for example:

    We are looking for experienced Rails developers, with experience in NodeJS and Obj C.

    The result is consistent, canonical terminology — allowing for better analysis like NLP. Jargon uses tags and synonyms from StackOverflow, and implements insensitivity to spaces, hyphens, dots and case.

    Source data might use react, React.js or React  JS or REACTJS, but we are confident they get converted to one string.

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
