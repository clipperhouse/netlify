---
title: "Stack Overflow tag correlations"
date: 2018-05-26
style: "app"
css:
- "/css/stack.css"
- "/css/jquery-ui.css"
js:
- "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
- "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
- "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"
- "/js/stack.js?1"

---

A tool to discover correlations between technologies on Stack Exchange sites. Start typing a tag name below, or click one of the popular ones.

<div id="form">
    <input name="tag" id="tag" type="search" autocapitalize="none" autocorrect="off" /><br />
    <span id="popular">
        Popular: &nbsp;<a href="#stackoverflow/javascript" class="tag">javascript</a>
        <a href="#stackoverflow/java" class="tag">java</a>
        <a href="#stackoverflow/c%23" class="tag">c#</a>
        <a href="#stackoverflow/php" class="tag">php</a>
        <a href="#stackoverflow/android" class="tag">android</a>
    </span>
</div>

<div id="correlations"></div>

This works for all Stack Exchange sites. Select a different one below if you like.

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
    <a href="#stats">Cross Validated</a>
    <a href="#math">Mathematics</a>
    <a href="#diy">Home Improvement</a>
    <a href="#gis">Geographic Information Systems</a>
    <a href="#tex">TeX - LaTeX</a>
    <a href="#askubuntu">Ask Ubuntu</a>
    <a href="#money">Personal Finance &amp; Money</a>
    <a href="#english">English Language &amp; Usage</a>
    <a href="#stackapps">Stack Apps</a>
    <a href="#ux">User Experience</a>
    <a href="#unix">Unix &amp; Linux</a>
    <a href="#wordpress">WordPress Development</a>
    <a href="#cstheory">Theoretical Computer Science</a>
    <a href="#apple">Ask Different</a>
    <a href="#rpg">Role-playing Games</a>
    <a href="#bicycles">Bicycles</a>
    <a href="#softwareengineering">Software Engineering</a>
    <a href="#electronics">Electrical Engineering</a>
    <a href="#android">Android Enthusiasts</a>
    <a href="#physics">Physics</a>
    <a href="#security">Information Security</a>
    <a href="#graphicdesign">Graphic Design</a>
    <a href="#dba">Database Administrators</a>
    <a href="#scifi">Science Fiction &amp; Fantasy</a>
    <a href="#codereview">Code Review</a>
    <a href="#codegolf">Programming Puzzles &amp; Code Golf</a>
    <a href="#quant">Quantitative Finance</a>
    <a href="#skeptics">Skeptics</a>
    <a href="#drupal">Drupal Answers</a>
    <a href="#mechanics">Motor Vehicle Maintenance &amp; Repair</a>
    <a href="#sharepoint">SharePoint</a>
    <a href="#music">Music: Practice &amp; Theory</a>
    <a href="#judaism">Mi Yodeya</a>
</p>

### Details

“Correlation” is coincidence of tags on questions. Note that correlations are asymmetric:
e.g., <a href="#stackoverflow/coffeescript">CoffeeScript</a> questions often involve <a href="#stackoverflow/javascript">JavaScript</a>, but not vice versa.

Built by <a href="http://clipperhouse.com/about/">Matt Sherman</a> using the <a href="http://api.stackexchange.com">Stack Exchange API</a> (all client-side). The source is <a href="https://github.com/clipperhouse/stack-correlation">on GitHub</a>.

<script id="correlations-tmpl" type="text/template">
    {{#correlations}}
        <a class="tag" title="View correlations for “{{tag}}”" href="{{href}}">{{tag}}</a>
        <span class="c">{{correlation}}</span><br />
    {{/correlations}}
</script>
