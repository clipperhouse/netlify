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
            $("#result").show();
        } else {
            $("#result").hide();
        }
    }

    $(document).on("change", "input[name='format']", function (e) {
        var id = this.id;
        var example = $("#examples").find('#' + id);
        var text = example.text().trim();
        $("form #text").val(text);
        $("#result").html('').hide();
    });

    $("input#prose").click();
})();