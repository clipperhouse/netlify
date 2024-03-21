---
title: "Using the Microsoft Ajax Minifier, some gotcha’s"
date: 2009-11-20

---

I am playing with the [Microsoft Ajax Minifier](http://aspnet.codeplex.com/Release/ProjectReleases.aspx?ReleaseId=35893), which removes whitespace from your Javascripts for quicker download. Stephen Walther has a [nice how-to](http://stephenwalther.com/blog/archive/2009/10/16/using-the-new-microsoft-ajax-minifier.aspx).

In my case, I am using the MSBuild task, which will minimize your Javascripts on build. Works great on my machine. But here’s the gotcha: if you have a build server that does not have the Minifier installed, your build will fail.

What to do? In my case, I updated Stephen’s MSBuild code with a Condition such that the task will only run under the Debug configuration. Thus, if your build server uses the Release configuration (as it should), the task will be ignored and your build won’t fail.

Here’s Stephen’s original code:
`&lt;Import Project=&#34;$(MSBuildExtensionsPath)\Microsoft\MicrosoftAjax\ajaxmin.tasks&#34; /&gt;``&lt;Target Name=&#34;AfterBuild&#34;&gt;``&lt;ItemGroup&gt;``&lt;JS Include=&#34;**\*.js&#34; Exclude=&#34;**\*.min.js;Scripts\*.js&#34; /&gt;``&lt;/ItemGroup&gt;``&lt;AjaxMin SourceFiles=&#34;@(JS)&#34; SourceExtensionPattern=&#34;\.js$&#34; TargetExtension=&#34;.min.js&#34; /&gt;``&lt;/Target&gt;``And here are my adjustments, note the Condition attributes:``&lt;Import Project=&#34;$(MSBuildExtensionsPath)\Microsoft\MicrosoftAjax\ajaxmin.tasks&#34;   
 **Condition=&#34; &#39;$(Configuration)|$(Platform)&#39; == &#39;Debug|AnyCPU&#39; &#34;** /&gt;``&lt;Target Name=&#34;AfterBuild&#34;  
 **Condition=&#34; &#39;$(Configuration)|$(Platform)&#39; == &#39;Debug|AnyCPU&#39; &#34;**&gt;``&lt;ItemGroup&gt;``&lt;JS Include=&#34;**\*.js&#34; Exclude=&#34;**\*.min.js;Scripts\*.js&#34; /&gt;``&lt;/ItemGroup&gt;``&lt;AjaxMin SourceFiles=&#34;@(JS)&#34; SourceExtensionPattern=&#34;\.js$&#34; TargetExtension=&#34;.min.js&#34; /&gt;``&lt;/Target&gt;``Hope this helps!`
