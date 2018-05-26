---
title: "Stack Overflow tag correlations"
date: 2018-05-26
---

<div id="form">
    <link href="/css/stack.css" rel="stylesheet">
    <link href="/css/jquery-ui.css" rel="stylesheet" />
    <input type="text" name="tag" id="tag" /><br />
    <span id="popular"></span>
</div>

<div id="tag-correlations"></div>

<div id="tag-links">
<h3>Learn more...</h3>
<p>
<ul>
    <li><a id="so" class="up-and-out" target="_blank">View <span class="tag-name tag"></span> on <span class="site-name">Stack Overflow</span></a>
    <li><a id="wikipedia" class="up-and-out" target="_blank">Search Wikipedia for ‘<span class="tag-name"></span>’</a>
</ul>
</p>
</div>

### Details

“Correlation” is coincidence of tags on questions. Note that correlations are asymmetric:
e.g., <a href="#stackoverflow/coffeescript">CoffeeScript</a> questions often involve <a href="#stackoverflow/javascript">JavaScript</a>, but not vice versa.

Built by <a href="http://clipperhouse.com/about/">Matt Sherman</a> using the <a href="http://api.stackexchange.com">Stack Exchange API</a> (all client-side). The source is <a href="https://github.com/clipperhouse/stack-correlation">on GitHub</a>.    

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.1.3/mustache.min.js"></script>
<script src="/js/stack.js"></script>
<script id="correlations-tmpl" type="text/template">
    {{#correlations}}
    <div>
        <a class="tag" title="View correlations for “{{tag}}”" href="{{href}}">{{tag}}</a>
        <span class="c">{{correlation}}</span>
    </div>
    {{/correlations}}
</script>
