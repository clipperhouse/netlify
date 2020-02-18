---
title: "Stack Overflow tag correlations"
date: 2018-05-26
style: "app"
css:
- "css/stack.css"
- "css/jquery-ui.css"
js:
- "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
- "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
- "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.1.0/mustache.min.js"
- "js/stack.js"
---

A tool to discover correlations between tags on Stack Exchange sites. Start typing a tag name below, or click one of the popular ones.

<form>
    <input name="tag" id="tag" placeholder="type a tag name here" type="search" autocapitalize="none" autocorrect="off" />
</form>

<div id="popular">
	Popular:
		<a class="tag" title="View correlations for “javascript”" href="#stackoverflow/javascript">javascript</a>
		<a class="tag" title="View correlations for “java”" href="#stackoverflow/java">java</a>
		<a class="tag" title="View correlations for “c#”" href="#stackoverflow/c%23">c#</a>
		<a class="tag" title="View correlations for “python”" href="#stackoverflow/python">python</a>
</div>

<div id="correlations"></div>

This works for all Stack Exchange sites. Select a different one below:

<p id="menu">
    <a href="#stackoverflow" class="selected">Stack Overflow</a>
    <a href="#serverfault">Server Fault</a>
    <a href="#superuser">Super User</a>
    <a href="#webapps">Web Applications</a>
    <a href="#gaming">Arqade</a>
    <a href="#webmasters">Webmasters</a>
    <a href="#cooking">Seasoned Advice</a>
    <a href="#gamedev">Game Development</a>
    <a href="#photo">Photography</a>
</p>

### Details

“Correlation” is coincidence of tags on questions. Note that correlations are asymmetric:
e.g., <a href="#stackoverflow/coffeescript">CoffeeScript</a> questions often involve <a href="#stackoverflow/javascript">JavaScript</a>, but not vice versa.

Built by <a href="http://clipperhouse.com/about/">Matt Sherman</a> using the <a href="http://api.stackexchange.com">Stack Exchange API</a> (all client-side). The source is <a href="https://github.com/clipperhouse/stack-correlation">on GitHub</a>.

<script id="correlations-tmpl" type="text/template">
    {{#correlations}}
        <a class="tag" title="View correlations for “{{tag}}”" href="{{href}}">{{tag}}</a>
		{{#first}}
			appears on {{correlation}} of <span class="tag">{{parent}}</span> questions
		{{/first}}
		{{^first}}
			{{correlation}}
		{{/first}}
		<br />
    {{/correlations}}
</script>

<script id="popular-tmpl" type="text/template">
	Popular:
	<div>
    {{#tags}}
        <a class="tag" title="View correlations for “{{name}}”" href="#{{site.api_site_parameter}}/{{encodedName}}">{{name}}</a>
	{{/tags}}
	</div>
</script>
