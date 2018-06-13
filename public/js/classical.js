$(function(){

	var audio = document.getElementById('player');
	var status;
	var player = new MediaElementPlayer(audio, {
	  mode: 'auto',
	  audioWidth: 120,
	  audioHeight: 120,
	  features: ['playpause'],
	  pluginPath: '/js/mediaelement/',
	  success: function(me, node) {
		me.addEventListener(
		  'play',
		  function() {
			status.text('Loading...');
		  },
		  false
		);
	
		me.addEventListener(
		  'playing',
		  function() {
			status.text('Playing');
		  },
		  false
		);
	
		me.addEventListener(
		  'pause',
		  function() {
			status.text('Paused');
		  },
		  false
		);
	  }
	});
	
	$(document).on('click', '.station', function(e) {
		player.pause();
		$('.status small').text('Click to play');
		status = $(this).find('.status small');
		player.setSrc($(this).data('src'));
		player.play();
		e.preventDefault();
	});	
});
