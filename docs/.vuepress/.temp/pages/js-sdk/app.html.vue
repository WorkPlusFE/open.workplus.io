<template><h1 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h1>
<h2 id="路由跳转" tabindex="-1"><a class="header-anchor" href="#路由跳转" aria-hidden="true">#</a> 路由跳转</h2>
<p>根据参数跳转到指定的 App。</p>
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
<CodeWrapper fn="app.route">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">schemeUrl</span><span class="token operator">:</span> <span class="token string">'workplus://voip'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>scheme_url</td>
<td>String</td>
<td>除了原生应用的<code>schema_url</code>规则, 也支持内部的应用协议, 例如<code>workplus://openApp?id=abc&amp;domainId=abc</code></td>
</tr>
</tbody>
</table>
<h2 id="打开应用聊天界面" tabindex="-1"><a class="header-anchor" href="#打开应用聊天界面" aria-hidden="true">#</a> 打开应用聊天界面</h2>
<p>通过<code>应用id</code>和<code>orgId</code>，打开该组织下某个应用聊天界面。</p>
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
<CodeWrapper fn="app.showAppChatViewById" :qrcode="false">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">showAppChatViewById</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'eb66ba3d-1d83-4104-8119-c6fc3b12cdca'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">domainId</span><span class="token operator">:</span> <span class="token string">'workplus'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">orgId</span><span class="token operator">:</span> <span class="token string">'37a2ef9f-8683-4369-ae7b-121cea149d05'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sessionType</span> <span class="token operator">:</span> <span class="token string">'service'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>appId</td>
<td>String</td>
<td>当前应用所在域的id</td>
</tr>
<tr>
<td>domainId</td>
<td>String</td>
<td>前应用所在组织的id</td>
</tr>
<tr>
<td>orgId</td>
<td>String</td>
<td>当前应用的id</td>
</tr>
<tr>
<td>sessionType</td>
<td>String</td>
<td>当前应用的类型：主要类型有<code>service</code>及<code>lightApp</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>service 是服务号，lightApp 是轻应用。</p>
</blockquote>
<h2 id="打开搜索页面" tabindex="-1"><a class="header-anchor" href="#打开搜索页面" aria-hidden="true">#</a> 打开搜索页面</h2>
<p>打开 WorkPlus 的搜索页面。</p>
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
<CodeWrapper fn="app.searchInApp">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">searchInApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<h2 id="打开app列表页面" tabindex="-1"><a class="header-anchor" href="#打开app列表页面" aria-hidden="true">#</a> 打开App列表页面</h2>
<p>根据<code>组织id</code>打开该组织下的应用列表页面。</p>
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
<CodeWrapper fn="app.showAppListById">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">showAppListById</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">orgId</span><span class="token operator">:</span> <span class="token string">'37a2ef9f-8683-4369-ae7b-121cea149d05'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>orgId</td>
<td>String</td>
<td>需要显示应用列表的组织id，若为空，将自动打开当前用户所在组织下的应用列表</td>
</tr>
</tbody>
</table>
</template>
