import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.XredCqQG.js";const g=JSON.parse('{"title":"vConsole","description":"","frontmatter":{},"headers":[],"relativePath":"dev-tools/vconsole.md","filePath":"dev-tools/vconsole.md"}'),e={name:"dev-tools/vconsole.md"},l=t(`<h1 id="vconsole" tabindex="-1">vConsole <a class="header-anchor" href="#vconsole" aria-label="Permalink to &quot;vConsole&quot;">​</a></h1><p><a href="https://github.com/Tencent/vConsole/blob/dev/README_CN.md" target="_blank" rel="noreferrer">vConsole</a> 是腾讯开源的一个轻量、可拓展、针对手机网页的前端开发者调试面板。</p><p>它具备以下特性：</p><ul><li>查看 console 日志</li><li>查看网络请求</li><li>查看页面 element 结构</li><li>查看 Cookies、localStorage 和 SessionStorage</li><li>手动执行 JS 命令行</li><li>自定义插件</li></ul><h3 id="安装使用" tabindex="-1">安装使用 <a class="header-anchor" href="#安装使用" aria-label="Permalink to &quot;安装使用&quot;">​</a></h3><p>你可在线下载最新版本的<a href="https://github.com/Tencent/vConsole/releases/latest" target="_blank" rel="noreferrer">vConsole</a>，或者使用 npm 进行安装。</p><blockquote><p>CDN: <a href="https://cdn.bootcdn.net/ajax/libs/vConsole/3.3.4/vconsole.min.js" target="_blank" rel="noreferrer">https://cdn.bootcdn.net/ajax/libs/vConsole/3.3.4/vconsole.min.js</a></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install vconsole</span></span></code></pre></div><p>引入 dist/vconsole.min.js 到项目中：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path/to/vconsole.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 初始化</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vConsole </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VConsole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>对于 TypeScript，可引入 d.ts 文件：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;path/to/vconsole.min.d.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>详细使用方法请参阅<a href="https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md" target="_blank" rel="noreferrer">使用教程</a>。</p>`,13),n=[l];function h(p,o,k,r,d,c){return a(),i("div",null,n)}const v=s(e,[["render",h]]);export{g as __pageData,v as default};
