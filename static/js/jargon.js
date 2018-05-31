(function () {
    var textForm = $('#text-form');
    var textRadios = textForm.find('input[name=format]');
    var textInput = textForm.find('textarea');
    var textExamples = $('#text-examples');
    var textResult = $('#text-result');

    textForm.on('submit', function (e) {
        var url = this.action;
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: url,             
            crossDomain: false,
            data: data,
            success: update
        });
        e.preventDefault();
    });

    function update(html) {
        textResult.html(html);
        html ? textResult.show() : textResult.hide();
    }

    textRadios.on('change', function (e) {
        var ex = textExamples.find('#' + this.id);
        textInput.val(ex.text().trim());
        textResult.html('').hide();
    });

    textRadios.first().click();

    if (location.hostname == 'localhost') {
        textForm.attr('action', '//localhost:8080/text')
    }
})();