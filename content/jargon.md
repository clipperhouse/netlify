---
title: "Jargon demo"
date: 2010-05-18T17:07:55.000Z
jquery: true
---

Jargon is a Go package with tokenizers and lemmatizers. The source code and docs are [here](https://github.com/clipperhouse/jargon).

I've put together a little playground below.

<style type="text/css">
    #result-wrap, #examples {
        display:none;
    }
    .hint {
        color: #666;
        padding-right: 8px;
    }
</style>

<form action="http://localhost:8080/jargon" method="POST" id="text-form">
    <div class="form-group">
        <div>
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
            <label for="html">
                <input type="radio" id="html" name="format" value="html">
                HTML
            </label>
        </div>
        <textarea class="code" id="text" name="text" rows="6"></textarea>
    </div>

    <div>
        <button type="submit">Lemmatize</button>
    </div>
</form>

<div id="result-wrap">
    <pre><code id="result">

    </code></pre>        
</div>

<div id="examples">
    <div id="prose">
We can lemmatize some plain prose, perhaps a job listing.

We are looking for experienced Rails developers, with experience in HTML 5 and T-SQL.

Experience with ObjC and React Native is a plus.
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script type="text/javascript" defer>
    (function () {
        // Intercept the submit to use ajax
        $(document).on("submit", "#text-form", function (e) {
            var url = this.action;
            var data = $(this).serialize();
            $.ajax({
                type: "POST",
                url: url,             
                crossDomain: false,
                data: data,
                success: update
            });
            e.preventDefault();
        });

        function update(html) {
            $("#result").html(html);
            if (html) {
                $("#result-wrap").show();
            } else {
                $("#result-wrap").hide();
            }
        }

        $(document).on("click", "input[name='format']", function (e) {
            var id = this.id;
            var example = $("#examples").find('#' + id);
            var text = example.text().trim();
            $("form #text").val(text);
        });

        $("input#prose").click();
    })();
</script>