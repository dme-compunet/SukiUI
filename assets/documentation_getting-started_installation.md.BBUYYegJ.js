import{_ as t,c as a,o as e,a4 as i,ap as l,aq as o,ar as s,as as n,at as r}from"./chunks/framework.HoyOUnvS.js";const v=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/getting-started/installation.md","filePath":"documentation/getting-started/installation.md"}'),c={name:"documentation/getting-started/installation.md"},p=i('<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>When this page was written, the latest Avalonia version was <code>11.1.0-beta2</code> with SukiUI version <code>6.0.0-beta6</code></p></div><p>SukiUI can be installed in two ways:</p><ul><li><a href="https://www.nuget.org/packages/SukiUI" target="_blank" rel="noreferrer">Nuget</a> <strong>Recommended</strong></li><li>CI Artifacts from <a href="https://github.com/kikipoulet/SukiUI/actions/workflows/build.yml" target="_blank" rel="noreferrer">Github Action</a></li></ul><h2 id="prepare-your-application" tabindex="-1">Prepare your application <a class="header-anchor" href="#prepare-your-application" aria-label="Permalink to &quot;Prepare your application&quot;">​</a></h2><p>The following picture shows packages already installed with the default <code>Avalonia Template</code>:</p><p><img src="'+l+'" alt="" title="default package list"></p><p>In these packages, <code>Avalonia.Themes.Fluent</code> will no longer be necessary and can be removed.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>About <code>Avalonia Template</code>: <a href="https://docs.avaloniaui.net/docs/get-started/set-up-an-editor" target="_blank" rel="noreferrer">Set up an editor</a></p></div><h2 id="install-latest-sukiui-package" tabindex="-1">Install latest SukiUI package <a class="header-anchor" href="#install-latest-sukiui-package" aria-label="Permalink to &quot;Install latest SukiUI package&quot;">​</a></h2><p>The Nuget installation is suitable for most users, but if you want to use the latest build, you can download the dll from Github Action after the automatic build.</p><h3 id="via-nuget" tabindex="-1">Via Nuget <a class="header-anchor" href="#via-nuget" aria-label="Permalink to &quot;Via Nuget&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet add package SukiUI --version 6.0.0</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Visit <a href="https://www.nuget.org/packages/SukiUI" target="_blank" rel="noreferrer">SukiUI on Nuget</a> for more information</p></div><h3 id="via-github-action" tabindex="-1">Via Github Action <a class="header-anchor" href="#via-github-action" aria-label="Permalink to &quot;Via Github Action&quot;">​</a></h3><ol><li><p>Visit <a href="https://github.com/kikipoulet/SukiUI/actions/workflows/build.yml" target="_blank" rel="noreferrer">SukiUI CI</a></p></li><li><p>Select the latest workflow <img src="'+o+'" alt="" title="workflow"></p></li><li><p>Download the artifact <img src="'+s+'" alt="" title="artifact"></p></li><li><p>Add reference <img src="'+n+'" alt="" title="reference"></p></li><li><p>Select <code>SukiUI.dll</code> you downloaded</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The package list should be:</p><p><img src="'+r+'" alt="" title="package list"></p></div>',17),d=[p];function u(h,k,g,m,b,f){return e(),a("div",null,d)}const w=t(c,[["render",u]]);export{v as __pageData,w as default};