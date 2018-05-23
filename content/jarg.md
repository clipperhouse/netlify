---
title: "Jargon demo"
date: 2010-05-18T17:07:55.000Z
jquery: true
---

<form action="https://jargon-demo.appspot.com" method="POST" id="text-form">
    <div class="form-group">
        <label for="text">
            <strong>Try some text here</strong>
        </label>
        <textarea class="form-control" id="text" name="text" rows="6"></textarea>
    </div>

    <p>
        <button type="submit" class="btn btn-primary">Lemmatize</button>
        <a href="" class="btn btn-link">reset</a>
    </p>

    <div id="result">
        
    </div>
</form>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script type="text/javascript" defer>
    (function () {
        console.log('hi');
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
            return false;
            e.preventDefault();
        });

        function update(html) {
            $("#result").html(html);
        }
    })();
</script>