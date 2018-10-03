(function ($) {

	// set up json & cache
	var api_cache = {};

	$.ajaxSetup({
		cache: true
	});

	getJSONCached = function (url, callback) {
		var cache = api_cache[url];
		if (cache != null) {
			return callback && callback(cache);
		}

		var continuation = function (json) {
			api_cache[url] = json;
			return callback && callback(json);
		};

		return $.getJSON(url + '&callback=?', continuation);
	};

	var api_base_url = 'https://api.stackexchange.com/2.2/';
	var api_key_param = '&key=zg)SFUiAw3KznQKAw)AXzQ((';

	var urls = {
		api_sites: function (page) {
			return api_base_url + 'sites?page=' + page + '&pagesize=100&filter=!Fn45Y*tjmFi3M0vFdE*Orm1hST' + api_key_param;
		},
		api_tags: function (site, tag) {
			return api_base_url + 'tags?pagesize=16&order=desc&sort=popular&inname=' + encodeURIComponent(tag) + '&site=' + site.api_site_parameter + '&filter=!*M27MxijjqVg4jGo' + api_key_param;
		},
		api_tags_popular: function (site) {
			return api_base_url + 'tags?pagesize=5&order=desc&sort=popular&site=' + site.api_site_parameter + '&filter=!*M27MxijjqVg4jGo' + api_key_param;
		},
		api_tag_count: function (site, tag) {
			return api_base_url + 'questions?order=desc&sort=activity&tagged=' + encodeURIComponent(tag) + '&site=' + site.api_site_parameter + '&filter=!LQa0AXyWeCS0eBBhfz)UnE' + api_key_param;
		},
		api_tags_related: function (site, tag) {
			return api_base_url + 'tags/' + encodeURIComponent(tag) + '/related?site=' + site.api_site_parameter + '&pagesize=10&filter=!n9Z4Y*b7KJ' + api_key_param;
		},
		site_tag: function (site, tag) {
			return site.site_url.replace('http:', '') + '/tags/' + encodeURIComponent(tag) + '/info';
		},
		wikipedia_search: function (tag) {
			return '//en.wikipedia.org/w/index.php?search=' + encodeURIComponent(tag.replace(/\-/g, ' ').replace('#', ' sharp').replace('-', ' '));
		},
	};

	var round = function (num, dec) {
		var result = (Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toString();

		while (result.split('.').length > 1 && result.split('.')[1].length < dec) {
			result += '0';
		}

		return result;
	};

	var state = {};
	var sites = {};
	var defaultSite = null;

	var doc = $(document);
	var menu, header, results, title, popular, input;

	doc.ready(function () {
		// start by loading all the sites
		getJSONCached(urls.api_sites(1), function (data) {
			var items = data.items;
			var len = items.length;
			for (var i = 0; i < len; i++) {
				var site = items[i];
				if (site.site_type === 'main_site' && site.name.indexOf('Meta') !== 0 && site.site_state === 'normal') {
					// scheme-relative url
					sites[site.api_site_parameter] = site;

					// first one, effectively
					if (defaultSite == null) {
						defaultSite = site;
					}
				}
			}
			doc.trigger('sites:load');
		});

		// and get the elements
		menu = $("#menu")
		header = $('h1 > a');
		input = $('input[name=tag]');
		results = $('#correlations');
		title = $('title');
		popular = $('#popular');

		// set up autocomplete
		input.autocomplete({
			source: function (request, response) {
				getJSONCached(urls.api_tags(state.site, request.term.toLowerCase()), function (data) {
					var results = [];
					var items = data.items;
					var len = items.length;

					for (var i = 0; i < len; i++) {
						item = items[i];
						results.push({
							label: item.name,
							value: item.name,
							href: '#' + state.site.api_site_parameter + '/' + encodeURIComponent(item.name),
						});
					}

					response(results);
				});
			},
			select: function (event, ui) {
				location.href = ui.item.href;
			},
			autoFocus: true,
			delay: 200
		});

		input.focus();
	});

	// build the right-hand sites menu once we have the data
	doc.on('sites:load', function () {
		var temp = $("<div>")
		for (var key in sites) {
			if (sites.hasOwnProperty(key)) {
				var site = sites[key];
				var a = $('<a>')
					.attr('href', '#' + site.api_site_parameter)
					.html(site.name)
					.css('background-image', 'url(' + site.icon_url + ')');
				temp.append(a).append('\n');
			}
		}
		menu.html(temp.html());
		doc.trigger('menu:load');
	});

	// once we have the menu, initialize state
	doc.on('menu:load', function () {
		pop();
		window.onpopstate = pop;
	});

	var pop = function () {
		var newState = parseUrl(location.href);
		transition(newState);
	};

	// returns a state object, as expressed by the url
	var parseUrl = function (url) {
		var newState = {};

		// is there a hash?
		var parts = url.split('#');
		if (parts.length < 2) {
			// if no hash, go with first site
			newState.site = defaultSite;
			return newState;
		}

		var hash = parts[1];
		parts = hash.split('/');
		var site = sites[parts[0]]

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

	var transition = function (newState) {
		state = newState;

		setSiteUI(state.site);

		if (state.tag) {
			loadTag(state.site, state.tag)
			input.val(state.tag);
		} else {
			// clear it out
			input.val('').attr('placeholder', 'type a tag name here');
			results.html('');
			loadPopularTags(state.site);
			$('html, body').animate({scrollTop:0},'50')
		}
	};

	var setSiteUI = function (site) {
		// select menu item
		var selector = "a[href='#" + site.api_site_parameter + "']";
		var el = menu.find(selector);
		menu.find(selector).addClass('selected').siblings().removeClass('selected');

		// update header
		header.html(site.name + ' tag correlations');
		header.css('background-image', 'url(' + site.icon_url + ')')
			.attr('href', '#' + site.api_site_parameter);
	};

	var loadPopularTags = function (site) {
		getJSONCached(urls.api_tags_popular(site), function (data) {
			popular.html('Popular: &nbsp;');

			var items = data.items;
			var len = items.length;

			for (var i = 0; i < len; i++) {
				item = items[i];
				var a = $('<a>').attr('href', '#' + state.site.api_site_parameter + '/' + encodeURIComponent(item.name))
					.addClass('tag').html(item.name);
				popular.append(a).append('\n');
			}
			popular.css('visibility', 'visible').show();
		});
	};

	var loadTag = function (site, tag) {
		getJSONCached(urls.api_tag_count(site, tag), function (data) {
			loadCorrelations(site, tag, data.total);
		});
	};

	var loadCorrelations = function (site, tag, total) {
		getJSONCached(urls.api_tags_related(site, tag), function (data) {
			var correlations = [];
			var items = data.items;
			var len = items.length;

			for (var i = 0; i < len; i++) {
				item = items[i];
				if (item.name == tag) continue;
				correlations.push({
					tag: item.name,
					href: '#' + site.api_site_parameter + '/' + encodeURIComponent(item.name),
					correlation: correlations.length == 0 ? ('appears on ' + round(100 * item.count / total, 0) + '% of ‘' + tag + '’ questions') : (round(100 * item.count / total, 0) + '%')
				});
			}

			var template = $('#correlations-tmpl').html();
			var data = { 'correlations': correlations };
			var html = Mustache.to_html(template, data);

			results.css('opacity', '0').html(html).animate({opacity: 1}, 100);
			popular.hide();
		});
	};

	doc.on('mouseover', 'a.tag', function () {
		preFetchTag(this);
	});

	var preFetchTag = function (a) {
		var stateToBe = parseUrl(a.href);
		getJSONCached(urls.api_tag_count(stateToBe.site, stateToBe.tag), null);
		getJSONCached(urls.api_tags_related(stateToBe.site, stateToBe.tag), null);
	};

	doc.on('search', 'input', function () {
		if (this.value === '') {
			location.href = '#' + state.site.api_site_parameter;
		}
	});
})(jQuery);