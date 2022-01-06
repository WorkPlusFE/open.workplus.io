<template><h1 id="邮箱" tabindex="-1"><a class="header-anchor" href="#邮箱" aria-hidden="true">#</a> 邮箱</h1>
<h2 id="写邮件" tabindex="-1"><a class="header-anchor" href="#写邮件" aria-hidden="true">#</a> 写邮件</h2>
<!-- OK -->
<p>跳转到写邮件的页面。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>email<span class="token punctuation">.</span><span class="token function">writeEmail</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  emails<span class="token operator">:</span> <span class="token string">'xxx.163.com,xxx.foreverht.com'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>emails</td>
<td>String</td>
<td>要发送的邮箱地址, 支持多地址, 使用逗号<code>,</code>进行分割</td>
</tr>
</tbody>
</table>
<h2 id="打开邮箱" tabindex="-1"><a class="header-anchor" href="#打开邮箱" aria-hidden="true">#</a> 打开邮箱</h2>
<!-- OK -->
<p>跳转到我的邮箱，未登录就跳转到登录页。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有回调</span>
w6s<span class="token punctuation">.</span>email<span class="token punctuation">.</span><span class="token function">openEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
