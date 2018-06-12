$(function() {
	$('audio').mediaelementplayer({
		mode: 'auto',
		audioWidth: 120,
		audioHeight: 120,
		features: ['playpause'],
		pluginPath: '/mediaelement/',
		success : function(me, node) {
			var status = $("#status small");

			me.addEventListener('play', function() {
				status.text('Loading...');
			}, false);

			me.addEventListener('playing', function() {
				status.text('Playing');
			}, false);

			me.addEventListener('pause', function() {
				status.text('Paused');
			}, false);
		}
	});
});