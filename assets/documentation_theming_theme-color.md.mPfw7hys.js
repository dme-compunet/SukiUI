import{_ as s,c as i,o as a,a4 as e,av as t}from"./chunks/framework.HoyOUnvS.js";const m=JSON.parse('{"title":"Color","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/theming/theme-color.md","filePath":"documentation/theming/theme-color.md"}'),h={name:"documentation/theming/theme-color.md"},n=e('<h1 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;Color&quot;">​</a></h1><p><code>SukiTheme</code> allows app to switch color themes easily</p><img src="'+t+`" alt="theming-color"><h2 id="switch-between-available-color-theme" tabindex="-1">Switch between available Color Theme <a class="header-anchor" href="#switch-between-available-color-theme" aria-label="Permalink to &quot;Switch between available Color Theme&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SwitchColorTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="switch-to-a-specific-color-theme" tabindex="-1">Switch to a specific Color Theme <a class="header-anchor" href="#switch-to-a-specific-color-theme" aria-label="Permalink to &quot;Switch to a specific Color Theme&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeColorTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SukiColor.Red);</span></span></code></pre></div><h2 id="create-a-custom-color-theme-register-it-and-switch-to-it" tabindex="-1">Create a Custom Color Theme, register it and switch to it <a class="header-anchor" href="#create-a-custom-color-theme-register-it-and-switch-to-it" aria-label="Permalink to &quot;Create a Custom Color Theme, register it and switch to it&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PurpleTheme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SukiColorTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Purple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Colors.Purple, Colors.DarkBlue);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddColorTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PurpleTheme);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeColorTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PurpleTheme);</span></span></code></pre></div><h2 id="colorchanged-event" tabindex="-1">ColorChanged Event <a class="header-anchor" href="#colorchanged-event" aria-label="Permalink to &quot;ColorChanged Event&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().OnColorThemeChanged </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Color theme change triggered !&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,11),l=[n];function o(p,r,k,c,d,E){return a(),i("div",null,l)}const u=s(h,[["render",o]]);export{m as __pageData,u as default};