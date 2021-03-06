(function ($) {
	$.ajaxSetup({ cache: true });

	const api_base_url = 'https://api.stackexchange.com/2.2/';
	const api_key_param = '&key=zg)SFUiAw3KznQKAw)AXzQ((';

	const urls = {
		api_sites: function (page) {
			return api_base_url + 'sites?page=' + page + '&pagesize=100&filter=!Fn45Y*tjmFi3M0vFdE*Orm1hST' + api_key_param;
		},
		api_tags: function (site, tag) {
			return api_base_url + 'tags?pagesize=16&order=desc&sort=popular&inname=' + encodeURIComponent(tag) + '&site=' + site.api_site_parameter + '&filter=!*M27MxijjqVg4jGo' + api_key_param;
		},
		api_tags_popular: function (site) {
			return api_base_url + 'tags?pagesize=4&order=desc&sort=popular&site=' + site.api_site_parameter + '&filter=!*M27MxijjqVg4jGo' + api_key_param;
		},
		api_tag_count: function (site, tag) {
			return api_base_url + 'questions?order=desc&sort=activity&tagged=' + encodeURIComponent(tag) + '&site=' + site.api_site_parameter + '&filter=!LQa0AXyWeCS0eBBhfz)UnE' + api_key_param;
		},
		api_tags_related: function (site, tag) {
			return api_base_url + 'tags/' + encodeURIComponent(tag) + '/related?site=' + site.api_site_parameter + '&pagesize=8&filter=!n9Z4Y*b7KJ' + api_key_param;
		},
		site_tag: function (site, tag) {
			return site.site_url.replace('http:', '') + '/tags/' + encodeURIComponent(tag) + '/info';
		},
		wikipedia_search: function (tag) {
			return '//en.wikipedia.org/w/index.php?search=' + encodeURIComponent(tag.replace(/\-/g, ' ').replace('#', ' sharp').replace('-', ' '));
		},
	};

	const round = function (num, dec) {
		var result = (Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toString();

		while (result.split('.').length > 1 && result.split('.')[1].length < dec) {
			result += '0';
		}

		return result;
	};

	let state = {};
	let defaultSite = null;

	const doc = $(document);
	const menu = $("#menu");
	const header = $('h1');
	const site_name = $('span.site-name');
	const input = $('input[name=tag]');
	const results = $('#correlations');
	const popular = $('#popular');

	doc.ready(async function () {
		await loadSites(sites);

		await pop();
		window.onpopstate = pop;

		// and get the elements
		// set up autocomplete
		input.autocomplete({
			source: async function (request, response) {
				const data = await $.getJSON(urls.api_tags(state.site, request.term.toLowerCase()));
				var results = [];

				for (var i = 0; i < data.items.length; i++) {
					item = data.items[i];
					results.push({
						label: item.name,
						value: item.name,
						href: '#' + state.site.api_site_parameter + '/' + encodeURIComponent(item.name),
					});
				}

				response(results);
			},
			select: function (event, ui) {
				location.href = ui.item.href;
			},
			autoFocus: true,
			delay: 200,
			open: function (result) {	// https://stackoverflow.com/a/32817003/70613
				if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
					$('.ui-autocomplete').off('menufocus hover mouseover');
				}
			}
		});

		input.focus();
	});

	let sites = new Map();
	// build the right-hand sites menu once we have the data
	const loadSites = async function () {
		// start by loading all the sites
		const data = await $.getJSON(urls.api_sites(1));

		for (let i = 0; i < data.items.length; i++) {
			const site = data.items[i];
			if (site.site_type === 'main_site' && site.name.indexOf('Meta') !== 0 && site.site_state === 'normal') {
				sites.set(site.api_site_parameter, site);
				defaultSite = defaultSite || site;	// first one
			}
		}

		let temp = $("<div>");
		sites.forEach((site) => {
			const a = $('<a>')
				.attr('href', '#' + site.api_site_parameter)
				.html(site.name)
				.css('background-image', 'url(' + site.icon_url + ')');
			temp.append(a).append('\n');
		});
		menu.html(temp.html());
	};

	const pop = async function () {
		const newState = parseUrl(location.href);
		await transition(newState);
	};

	// returns a state object, as expressed by the url
	const parseUrl = function (url) {
		let newState = {};

		// is there a hash?
		let parts = url.split('#');
		if (parts.length < 2) {
			// if no hash, go with first site
			newState.site = defaultSite;
			return newState;
		}

		const hash = parts[1];
		parts = hash.split('/');
		const site = sites.get(parts[0]);

		// is there a site for that?
		if (site) {
			newState.site = site;
		} else {
			// bad hash
		}

		if (parts.length > 1) {
			newState.tag = decodeURIComponent(parts[1]);
		}

		return newState;
	};

	const transition = async function (newState) {
		state = newState;

		setSiteUI(state.site);

		if (state.tag) {
			input.val(state.tag);
			await loadTag(state.site, state.tag);
		} else {
			// clear it out
			await loadPopularTags(state.site);
			input.val('');
			results.html('');
			$('html').animate({ scrollTop: 0 });
		}
	};

	var setSiteUI = function (site) {
		// select menu item
		const selector = "a[href='#" + site.api_site_parameter + "']";
		menu.find(selector).addClass('selected').siblings().removeClass('selected');

		// update header
		header.html(site.name + ' tag correlations');
		header.css('background-image', 'url(' + site.icon_url + ')')
			.attr('href', '#' + site.api_site_parameter);
		site_name.text(site.name);
	};

	const tmplPopular = document.getElementById('popular-tmpl').innerHTML;
	const loadPopularTags = async function (site) {
		const data = await $.getJSON(urls.api_tags_popular(site));
		data.items.forEach((item) => { item.encodedName = encodeURIComponent(item.name); });
		const html = Mustache.render(tmplPopular, { site: site, tags: data.items });

		popular.html(html).show();
	};

	const loadTag = async function (site, tag) {
		const data = await $.getJSON(urls.api_tag_count(site, tag));
		await loadCorrelations(site, tag, data.total);
	};

	const tmplCorrelations = document.getElementById('correlations-tmpl').innerHTML;
	const loadCorrelations = async function (site, tag, total) {
		const data = await $.getJSON(urls.api_tags_related(site, tag));
		let correlations = [];

		for (var i = 0; i < data.items.length; i++) {
			item = data.items[i];
			if (item.name == tag) continue;
			correlations.push({
				parent: tag,
				tag: item.name,
				href: '#' + site.api_site_parameter + '/' + encodeURIComponent(item.name),
				correlation: (round(100 * item.count / total, 0) + '%'),
				first: correlations.length == 0
			});
		}

		const html = Mustache.render(tmplCorrelations, { correlations });

		results.css('opacity', '0').html(html).animate({ opacity: 1 }, 100);
		popular.hide();
	};

	doc.on('search', 'input', function () {
		if (this.value === '') {
			location.href = '#' + state.site.api_site_parameter;
		}
	});
})(jQuery);