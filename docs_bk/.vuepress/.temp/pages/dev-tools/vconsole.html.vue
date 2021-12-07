<template><h1 id="vconsole" tabindex="-1"><a class="header-anchor" href="#vconsole" aria-hidden="true">#</a> vConsole</h1>
<p><a href="https://github.com/Tencent/vConsole/blob/dev/README_CN.md" target="_blank" rel="noopener noreferrer">vConsole<OutboundLink/></a> 是腾讯开源的一个轻量、可拓展、针对手机网页的前端开发者调试面板。</p>
<p>它具备以下特性：</p>
<ul>
<li>查看 console 日志</li>
<li>查看网络请求</li>
<li>查看页面 element 结构</li>
<li>查看 Cookies、localStorage 和 SessionStorage</li>
<li>手动执行 JS 命令行</li>
<li>自定义插件</li>
</ul>
<h3 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h3>
<p>你可在线下载最新版本的<a href="https://github.com/Tencent/vConsole/releases/latest" target="_blank" rel="noopener noreferrer">vConsole<OutboundLink/></a>，或者使用 npm 进行安装。</p>
<blockquote>
<p>CDN: https://cdn.bootcdn.net/ajax/libs/vConsole/3.3.4/vconsole.min.js</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vconsole
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>引入 dist/vconsole.min.js 到项目中：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/vconsole.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 初始化</span>
  <span class="token keyword">var</span> vConsole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>对于 TypeScript，可引入 d.ts 文件：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">'path/to/vconsole.min.d.ts'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>详细使用方法请参阅<a href="https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md" target="_blank" rel="noopener noreferrer">使用教程<OutboundLink/></a>。</p>
</template>
