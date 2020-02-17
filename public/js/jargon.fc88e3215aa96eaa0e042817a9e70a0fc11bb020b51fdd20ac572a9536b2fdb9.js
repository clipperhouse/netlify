(function () {
	const form = $('form');
	const action = form.attr('action');
	const input = form.find('textarea');
	const result = form.find('.result');

	const radios = $('input[name=format]');
	const examples = $('#examples');

	form.on('submit', function (e) {
		const url = action + radios.filter(':checked').val();
		const data = input.val();

		$.ajax({
			type: 'POST',
			url: url,
			crossDomain: false,
			data: data,
			success: function (html) {
				result.html(html);
				html ? result.addClass('show') : result.removeClass('show');
			}
		});
		e.preventDefault();
	});

	radios.on('click', function (e) {
		var ex = examples.find('#' + this.id).find('code');
		var val = ex.html().trim();

		input.val(htmlDecode(val));
		result.html('').removeClass('show');
	});

	setTimeout(() => {
		radios.first().click();
	}, 1);

	function htmlDecode(value) {
		return $('<div/>').html(value).text();
	}

	// ping for warmup
	var ping = action + radios.filter(':checked').val();
	$.get(ping, function (data) {
		console.log(data);
	});
})();
