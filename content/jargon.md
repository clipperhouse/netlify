---
title: "Jargon playground"
date: 2018-05-18T17:07:55.000Z
css:
- "/css/jargon.css"
js:
- "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
- "/js/jargon.js"
---

[Jargon](https://github.com/clipperhouse/jargon) is a Go package with tokenizers and lemmatizers. It’s useful for identifying, and optionally replacing, canonical terms in text.

The default implementation is based on a dictionary of tags and synonyms from Stack Overflow. I’ve put together a playground below.

<form action="https://jargon-demo.appspot.com/jargon" method="POST" id="text-form">
    <span class="hint">
        Try it out:
    </span>
    <label for="prose">
        <input type="radio" id="prose" name="format" value="prose">
        Prose
    </label>
    <label for="json">
        <input type="radio" id="json" name="format" value="json">
        JSON
    </label>        
    <label for="csv">
        <input type="radio" id="csv" name="format" value="csv">
        CSV
    </label>

    <textarea class="code" id="text" name="text" rows="6"></textarea>

    <div>
        <button type="submit">👉 Lemmatize</button>
    </div>
</form>

<div id="result" class="pre code">
</div>

<div id="examples">
    <div id="prose">
We can lemmatize some plain prose, perhaps a job listing.

We are looking for experienced Rails developers, with experience in HTML 5 and T-SQL.

Experience with ObjC and React Native is a plus.
    </div>
    <div id="csv">
Name,Skills,Years
Jane Doe,"c sharp, ecma script",6
Foo Bar,"aspnet mvc R NodeJS", 7.5
    </div>
    <div id="json">
{
    "product": {
        "name": "Microsoft Access",
    },
    "product": {
        "name": "X Code",
    }
}
    </div>
</div>
