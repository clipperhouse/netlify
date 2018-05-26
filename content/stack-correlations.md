---
title: "Stack Exchange tag correlations"
date: 2018-05-26
---

A tool to discover correlations between technologies on Stack Exchange sites. Start typing a tag name below, or click one of the popular ones.

<div id="form">
    <link href="/css/stack.css" rel="stylesheet">
    <link href="/css/jquery-ui.css" rel="stylesheet" />
    <input name="tag" id="tag" type="search" /><br />
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

This works for all Stack Exchange sites. Select a different one below if you like.

<div id="menu">
    <a href="#stackoverflow" style="background-image: url(https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico);">Stack Overflow</a>
    <a href="#serverfault" style="background-image: url(https://cdn.sstatic.net/Sites/serverfault/img/favicon.ico);">Server Fault</a>
    <a href="#superuser" class="" style="background-image: url(https://cdn.sstatic.net/Sites/superuser/img/favicon.ico);">Super User</a>
    <a href="#webapps" style="background-image: url(https://cdn.sstatic.net/Sites/webapps/img/favicon.ico);">Web Applications</a>
    <a href="#gaming" style="background-image: url(https://cdn.sstatic.net/Sites/gaming/img/favicon.ico);">Arqade</a>
    <a href="#webmasters" class="selected" style="background-image: url(https://cdn.sstatic.net/Sites/webmasters/img/favicon.ico);">Webmasters</a>
    <a href="#cooking" style="background-image: url(https://cdn.sstatic.net/Sites/cooking/img/favicon.ico);">Seasoned Advice</a>
    <a href="#gamedev" style="background-image: url(https://cdn.sstatic.net/Sites/gamedev/img/favicon.ico);">Game Development</a>
    <a href="#photo" style="background-image: url(https://cdn.sstatic.net/Sites/photo/img/favicon.ico);">Photography</a>
    <a href="#stats" style="background-image: url(https://cdn.sstatic.net/Sites/stats/img/favicon.ico);">Cross Validated</a>
    <a href="#math" style="background-image: url(https://cdn.sstatic.net/Sites/math/img/favicon.ico);">Mathematics</a>
    <a href="#diy" style="background-image: url(https://cdn.sstatic.net/Sites/diy/img/favicon.ico);">Home Improvement</a>
    <a href="#gis" style="background-image: url(https://cdn.sstatic.net/Sites/gis/img/favicon.ico);">Geographic Information Systems</a>
    <a href="#tex" style="background-image: url(https://cdn.sstatic.net/Sites/tex/img/favicon.ico);">TeX - LaTeX</a>
    <a href="#askubuntu" style="background-image: url(https://cdn.sstatic.net/Sites/askubuntu/img/favicon.ico);">Ask Ubuntu</a>
    <a href="#money" style="background-image: url(https://cdn.sstatic.net/Sites/money/img/favicon.ico);">Personal Finance &amp; Money</a>
    <a href="#english" style="background-image: url(https://cdn.sstatic.net/Sites/english/img/favicon.ico);">English Language &amp; Usage</a>
    <a href="#stackapps" style="background-image: url(https://cdn.sstatic.net/Sites/stackapps/img/favicon.ico);">Stack Apps</a>
    <a href="#ux" style="background-image: url(https://cdn.sstatic.net/Sites/ux/img/favicon.ico);">User Experience</a>
    <a href="#unix" style="background-image: url(https://cdn.sstatic.net/Sites/unix/img/favicon.ico);">Unix &amp; Linux</a>
    <a href="#wordpress" style="background-image: url(https://cdn.sstatic.net/Sites/wordpress/img/favicon.ico);">WordPress Development</a>
    <a href="#cstheory" style="background-image: url(https://cdn.sstatic.net/Sites/cstheory/img/favicon.ico);">Theoretical Computer Science</a>
    <a href="#apple" style="background-image: url(https://cdn.sstatic.net/Sites/apple/img/favicon.ico);">Ask Different</a>
    <a href="#rpg" style="background-image: url(https://cdn.sstatic.net/Sites/rpg/img/favicon.ico);">Role-playing Games</a>
    <a href="#bicycles" style="background-image: url(https://cdn.sstatic.net/Sites/bicycles/img/favicon.ico);">Bicycles</a>
    <a href="#softwareengineering" style="background-image: url(https://cdn.sstatic.net/Sites/softwareengineering/img/favicon.ico);">Software Engineering</a>
    <a href="#electronics" style="background-image: url(https://cdn.sstatic.net/Sites/electronics/img/favicon.ico);">Electrical Engineering</a>
    <a href="#android" style="background-image: url(https://cdn.sstatic.net/Sites/android/img/favicon.ico);">Android Enthusiasts</a>
    <a href="#physics" style="background-image: url(https://cdn.sstatic.net/Sites/physics/img/favicon.ico);">Physics</a>
    <a href="#security" style="background-image: url(https://cdn.sstatic.net/Sites/security/img/favicon.ico);">Information Security</a>
    <a href="#graphicdesign" style="background-image: url(https://cdn.sstatic.net/Sites/graphicdesign/img/favicon.ico);">Graphic Design</a>
    <a href="#dba" style="background-image: url(https://cdn.sstatic.net/Sites/dba/img/favicon.ico);">Database Administrators</a>
    <a href="#scifi" style="background-image: url(https://cdn.sstatic.net/Sites/scifi/img/favicon.ico);">Science Fiction &amp; Fantasy</a>
    <a href="#codereview" style="background-image: url(https://cdn.sstatic.net/Sites/codereview/img/favicon.ico);">Code Review</a>
    <a href="#codegolf" style="background-image: url(https://cdn.sstatic.net/Sites/codegolf/img/favicon.ico);">Programming Puzzles &amp; Code Golf</a>
    <a href="#quant" style="background-image: url(https://cdn.sstatic.net/Sites/quant/img/favicon.ico);">Quantitative Finance</a>
    <a href="#skeptics" style="background-image: url(https://cdn.sstatic.net/Sites/skeptics/img/favicon.ico);">Skeptics</a>
    <a href="#drupal" style="background-image: url(https://cdn.sstatic.net/Sites/drupal/img/favicon.ico);">Drupal Answers</a>
    <a href="#mechanics" style="background-image: url(https://cdn.sstatic.net/Sites/mechanics/img/favicon.ico);">Motor Vehicle Maintenance &amp; Repair</a>
    <a href="#sharepoint" style="background-image: url(https://cdn.sstatic.net/Sites/sharepoint/img/favicon.ico);">SharePoint</a>
    <a href="#music" style="background-image: url(https://cdn.sstatic.net/Sites/music/img/favicon.ico);">Music: Practice &amp; Theory</a>
    <a href="#judaism" style="background-image: url(https://cdn.sstatic.net/Sites/judaism/img/favicon.ico);">Mi Yodeya</a>
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
