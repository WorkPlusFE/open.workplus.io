<template><h1 id="页面事件绑定" tabindex="-1"><a class="header-anchor" href="#页面事件绑定" aria-hidden="true">#</a> 页面事件绑定</h1>
<p><code>JS-SDK</code>提供方法用于绑定设备的一些场景操作事件，例如安卓设备特有的物理返回按钮（或虚拟按钮），绑定后，可以在回调方法内处理特定的逻辑。</p>
<h2 id="安卓物理返回按钮" tabindex="-1"><a class="header-anchor" href="#安卓物理返回按钮" aria-hidden="true">#</a> 安卓物理返回按钮</h2>
<p>绑定安卓设备的物理返回按钮，绑定后，原始返回动作将无效。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>不支持</td>
</tr>
</tbody>
</table>
<CodeWrapper :qrcode="false" fn="event.bindBackButtonEvent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 单个 WebView 中只需要绑定一次</span>
w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindBackButtonEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 此处处理返回的逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeWrapper>
<div class="custom-container tip"><p class="custom-container-title">关于返回</p>
<p>在 WebView 中，物理返回按钮会以标准的浏览器访问记录进行页面退回，但是往往在开发单页面应用(SPA)时，返回事件可能会让整个应用退出，此时可以通过绑定物理返回按钮事件，正确地处理页面切换。</p>
</div>
<h2 id="页面离开" tabindex="-1"><a class="header-anchor" href="#页面离开" aria-hidden="true">#</a> 页面离开</h2>
<p>当页面不可见时，WorkPlus 会产生回调，开发者可以监听此<code>pause事件</code>，并处理特定的业务逻辑。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<CodeWrapper :qrcode="false" fn="event.bindPauseEvent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindPauseEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 此处执行特定逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeWrapper>
<h2 id="页面返回" tabindex="-1"><a class="header-anchor" href="#页面返回" aria-hidden="true">#</a> 页面返回</h2>
<p>当页面重新可见并可交互时，WorkPlus 会产生回调，开发者可监听此<code>resume事件</code>，并处理特定的业务逻辑。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<CodeWrapper :qrcode="false" fn="event.bindResumeEvent">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindResumeEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 此处执行特定逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeWrapper></template>
