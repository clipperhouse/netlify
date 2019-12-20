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
	if (!control) { return; }

	const audio = document.getElementById('audio') as HTMLAudioElement;
	if (!audio) { return; }

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

	interface Station {
		el: Element,
		src: string,
	}

	let stations = Array<Station>();

	for (const el of document.querySelectorAll('.station')) {
		const src = el.getAttribute('data-src');
		if (!src) {
			console.log('station ' + el.id + ' lacks a data-src attribute')
			continue;
		}

		const station: Station = { el, src };
		stations.push(station)
	}

	const $c = $(control);
	let current: Station;

	for (const station of stations) {
		station.el.addEventListener('click', e => {
			e.stopPropagation();

			if (current && station.el.id === current.el.id) { return; }
			current = station;

			audio.pause();
			audio.src = station.src;

			$c.slideUp(250, () => {
				audio.play();
				station.el.after(control);
				$c.slideDown();
			});
		});
	}
})();
