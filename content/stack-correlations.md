---
title: "Stack Overflow tag correlations"
date: 2018-05-26
style: "app"
css:
- "stack"
- "jquery-ui"
js:
- "jquery"
- "jquery-ui"
- "mustache"
- "stack"
---

A tool to discover correlations between tags on Stack Exchange sites. Start typing a tag name below, or click one of the popular ones.

<form autocomplete="off">
<input name="search" id="search" type="search" placeholder="type a tag name here" 
	autocapitalize="none" autocorrect="off" spellcheck="off" autocomplete="false" />
<p id="popular">
	Popular:
		<a class="tag" title="View correlations for “javascript”" href="#stackoverflow/javascript">javascript</a>
		<a class="tag" title="View correlations for “java”" href="#stackoverflow/java">java</a>
		<a class="tag" title="View correlations for “c#”" href="#stackoverflow/c%23">c#</a>
		<a class="tag" title="View correlations for “python”" href="#stackoverflow/python">python</a>
</p>

<p id="correlations"></p>
</form>


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
        <a class="tag" title="View correlations for “{{tag}}”" href="{{href}}" data-turbolinks="false">{{tag}}</a>
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
        <a class="tag" title="View correlations for “{{name}}”" href="#{{site.api_site_parameter}}/{{encodedName}}" data-turbolinks="false">{{name}}</a>
	{{/tags}}
	</div>
</script>
