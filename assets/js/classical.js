"use strict";
(function () {
	const faq = document.getElementById('faq');
	const what = document.getElementById('what');
	if (faq && what) {
		faq.classList.add('hide');
		what.addEventListener('click', e => {
			e.stopPropagation();
			faq.classList.toggle('hide');
		});
		what.classList.add('clickable');
	}
	const control = document.getElementById('wrapper');
	if (!control) {
		return;
	}
	const audio = document.getElementById('audio');
	if (!audio) {
		return;
	}
	control.addEventListener('click', () => {
		audio.paused ? audio.play() : audio.pause();
	});
	audio.addEventListener('playing', () => {
		control.classList.add('playing');
		control.classList.remove('waiting');
	});
	audio.addEventListener('pause', () => {
		control.classList.remove('playing');
	});
	audio.addEventListener('waiting', () => {
		control.classList.add('waiting');
	});
	let stations = Array();
	for (const el of document.getElementsByClassName('station')) {
		const src = el.getAttribute('data-src');
		if (!src) {
			console.log('station ' + el.id + ' lacks a data-src attribute');
			continue;
		}
		const station = { el, src };
		stations.push(station);
	}
	const $c = $(control);
	let current;
	for (const station of stations) {
		station.el.addEventListener('click', e => {
			e.stopPropagation();

			if (current && (current.el.id === station.el.id)) {
				return;
			}

			current = station;
			audio.pause();
			audio.src = current.src;

			$c.slideUp(250, () => {
				audio.play();
				station.el.after(control);
				$c.slideDown();
			});
		});
	}
})();
