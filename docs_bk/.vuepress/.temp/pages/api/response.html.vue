<template><h1 id="全局返回值" tabindex="-1"><a class="header-anchor" href="#全局返回值" aria-hidden="true">#</a> 全局返回值</h1>
<p>返回结果类型若无特殊说明，均为<code>application/json</code>。</p>
<table>
<thead>
<tr>
<th>字段</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>Int</td>
<td>状态码；0表示正常，非0表示错误，错误请参考<a href="/api/errorCode.md" target="_blank" rel="noopener noreferrer">全局错误码<OutboundLink/></a></td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>状态码说明</td>
</tr>
<tr>
<td>result</td>
<td>对象或数组</td>
<td>返回结果</td>
</tr>
</tbody>
</table>
<p><strong>对象类型返回示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"key"</span> <span class="token operator">:</span> <span class="token string">"value"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>数组类型返回示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token property">"key"</span> <span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token property">"key"</span> <span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
