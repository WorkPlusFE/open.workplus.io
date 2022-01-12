<template><h1 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h1>
<h2 id="图片查看" tabindex="-1"><a class="header-anchor" href="#图片查看" aria-hidden="true">#</a> 图片查看</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /v1/medias/images/{fileId}?access_token={access_token}&amp;domain_id={domain_id}&amp;type=获取文件方式(ID/DIGEST,默认ID)&amp;width=图片剪裁的宽度&amp;heigh=图片剪裁的高度&amp;rotate=图片旋转角度(默认0.0)&amp;quality=图片压缩率(0~1,默认1)&amp;default_thumbnail=是否缩略图(默认false)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>请求参数：</strong></p>
<table>
<thead>
<tr>
<th>字段</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>access_token</td>
<td>String</td>
<td>Y</td>
<td>访问令牌</td>
</tr>
<tr>
<td>domain_id</td>
<td>String</td>
<td>Y</td>
<td>域标识</td>
</tr>
<tr>
<td>fileId</td>
<td>String</td>
<td>Y</td>
<td>图片标识</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>images<span class="token operator">/</span>Z3JvdXAxL00wMC8wMC8wMS9yQkFCR1ZoX0xnZUFMaFN5QUFBaUxtMGx2b2szMTEuanBn<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token number">111</span><span class="token operator">&amp;</span>width<span class="token operator">=</span><span class="token number">200</span><span class="token operator">&amp;</span>heigh<span class="token operator">=</span><span class="token number">100</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>Content-Type<span class="token operator">:</span> image/jpeg
<span class="token comment">// ......</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>错误返回值：</strong></p>
<table>
<thead>
<tr>
<th>status</th>
<th>message</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>10011</td>
<td>token not found.</td>
<td>访问令牌不存在</td>
</tr>
</tbody>
</table>
<h2 id="文件下载" tabindex="-1"><a class="header-anchor" href="#文件下载" aria-hidden="true">#</a> 文件下载</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span><span class="token punctuation">{</span>fileId<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>domain_id<span class="token operator">=</span><span class="token punctuation">{</span>domain_id<span class="token punctuation">}</span><span class="token operator">&amp;</span>type<span class="token operator">=</span><span class="token function">获取文件方式</span><span class="token punctuation">(</span><span class="token constant">ID</span><span class="token operator">/</span><span class="token constant">DIGEST</span><span class="token punctuation">,</span>默认<span class="token constant">ID</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>请求头部：</strong></p>
<table>
<thead>
<tr>
<th>请求头</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content-Type</td>
<td>application/json</td>
</tr>
</tbody>
</table>
<p><strong>请求参数：</strong></p>
<table>
<thead>
<tr>
<th>字段</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>access_token</td>
<td>String</td>
<td>Y</td>
<td>访问令牌</td>
</tr>
<tr>
<td>domain_id</td>
<td>String</td>
<td>Y</td>
<td>域标识</td>
</tr>
<tr>
<td>fileId</td>
<td>String</td>
<td>Y</td>
<td>文件标识</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>N</td>
<td>获取文件方式(ID/DIGEST,默认ID)</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>Z3JvdXAxL00wMC8wMC8wMi9yQkFCR1ZpQ3VOaUFRdkx1QUFBTFgwUW9fVXM4MDMucG5n<span class="token operator">?</span>access_token<span class="token operator">=</span>ac2a8470c0fb4ad2a27edd7459c6c770
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>Content-Disposition<span class="token operator">:</span>attachment; filename=<span class="token string">"%E8%93%9D%E5%A4%A9.png"</span>
Content-Length<span class="token operator">:</span> <span class="token number">2911</span>
Content-Type<span class="token operator">:</span> image/jpeg
<span class="token comment">// ......</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="获取文件信息" tabindex="-1"><a class="header-anchor" href="#获取文件信息" aria-hidden="true">#</a> 获取文件信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span><span class="token punctuation">{</span>fileId<span class="token punctuation">}</span><span class="token operator">/</span>info<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>type<span class="token operator">=</span><span class="token function">获取文件方式</span><span class="token punctuation">(</span><span class="token constant">ID</span><span class="token operator">/</span><span class="token constant">DIGEST</span><span class="token punctuation">,</span>默认<span class="token constant">ID</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>请求头部：</strong></p>
<table>
<thead>
<tr>
<th>请求头</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content-Type</td>
<td>application/json</td>
</tr>
</tbody>
</table>
<p><strong>请求参数：</strong></p>
<table>
<thead>
<tr>
<th>字段</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>access_token</td>
<td>String</td>
<td>Y</td>
<td>访问令牌</td>
</tr>
<tr>
<td>fileId</td>
<td>String</td>
<td>Y</td>
<td>文件标识</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>N</td>
<td>获取文件方式(ID/DIGEST,默认ID)</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>Z3JvdXAxL00wMC8wMC8wMi9yQkFCR1ZpQ3VOaUFRdkx1QUFBTFgwUW9fVXM4MDMucG5n<span class="token operator">/</span>info<span class="token operator">?</span>access_token<span class="token operator">=</span>ac2a8470c0fb4ad2a27edd7459c6c770
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wMi9yQkFCR1ZpQ3VOaUFRdkx1QUFBTFgwUW9fVXM4MDMucG5n"</span><span class="token punctuation">,</span> 
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"蓝天.png"</span><span class="token punctuation">,</span> 
    <span class="token property">"digest"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token property">"state"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">2911</span><span class="token punctuation">,</span> 
    <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token number">1484962008275</span><span class="token punctuation">,</span> 
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>错误返回值：</strong></p>
<table>
<thead>
<tr>
<th>status</th>
<th>message</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>10011</td>
<td>token not found.</td>
<td>访问令牌不存在</td>
</tr>
</tbody>
</table>
</template>
