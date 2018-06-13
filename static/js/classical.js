$(function(){

	var control = document.getElementById('wrapper');
	control.addEventListener('click', function() { 
		audio.paused ? audio.play() : audio.pause();
	}, true);

	var audio = document.getElementById('audio');
	audio.addEventListener('playing', function() { 
		control.classList.add('playing');
		control.classList.remove('waiting');
	}, true);
	audio.addEventListener('pause', function() {
		control.classList.remove('playing');
	}, true);
	audio.addEventListener('waiting', function() {
		control.classList.add('waiting');
	}, true);

	var current;

	$(document).on('click', '.station', function(e) {
		var station = $(this);

		if (current && station.attr('id') === current.attr('id')) {
			return;
		}

		current = station;
		audio.pause();
		audio.src = station.data('src');

		var c = $(control);

		c.slideUp(200, function(){
			audio.play();
			station.after(control);
			c.slideDown();
		});

		e.preventDefault();
	});	
});
