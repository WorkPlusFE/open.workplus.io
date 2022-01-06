<template><h1 id="媒体操作" tabindex="-1"><a class="header-anchor" href="#媒体操作" aria-hidden="true">#</a> 媒体操作</h1>
<h2 id="图片上传-json" tabindex="-1"><a class="header-anchor" href="#图片上传-json" aria-hidden="true">#</a> 图片上传(json)</h2>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /v1/medias/images?access_token={access_token}
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
<td>file_name</td>
<td>String</td>
<td>Y</td>
<td>文件名称</td>
</tr>
<tr>
<td>file_content</td>
<td>byte[]</td>
<td>Y</td>
<td>文件内容(BASE64)</td>
</tr>
<tr>
<td>file_digest</td>
<td>String</td>
<td>N</td>
<td>文件摘要,用于标记文件</td>
</tr>
<tr>
<td>file_type</td>
<td>String</td>
<td>N</td>
<td>图片类型（例如:image/jpeg）</td>
</tr>
<tr>
<td>width</td>
<td>Int</td>
<td>N</td>
<td>图片宽度</td>
</tr>
<tr>
<td>height</td>
<td>Int</td>
<td>N</td>
<td>图片高度</td>
</tr>
<tr>
<td>quality</td>
<td>Float</td>
<td>N</td>
<td>图片质量（取值范围：0-1）（默认值：1）</td>
</tr>
<tr>
<td>rotate</td>
<td>Float</td>
<td>N</td>
<td>图片旋转角度,默认0.0</td>
</tr>
<tr>
<td>format</td>
<td>String</td>
<td>N</td>
<td>图片输入格式(默认jpg)</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/v1/medias/images?access_token=b646339e2f4f4234af6bae5f72db9879
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
    "file_name" : "文件名称",
    "file_type" : "图片格式用于读取时响应的Content-Type"
    "file_digest" : "文件摘要",
    "file_content" : "文件内容",
    "width" : 100,
    "height" : 100,
    "rotate" : 0,
    "quality" : 0.6,
    "format" : "jpg"
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "status": 0,
  "message": "Everything is ok.",
  "result": {
    "Z3JvdXAxL00wMC8wMC8wMC9yQkFCR1ZoSGlGeUFkNWowQUFENXFPZDZ6LW8wMDguZ2lm"
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>错误返回值：</strong></p>
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
<h2 id="图片上传-multipart-form-data" tabindex="-1"><a class="header-anchor" href="#图片上传-multipart-form-data" aria-hidden="true">#</a> 图片上传(multipart/form-data)</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>images<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_digest<span class="token operator">=</span><span class="token punctuation">{</span>file_digest<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_size<span class="token operator">=</span><span class="token punctuation">{</span>file_size<span class="token punctuation">}</span><span class="token operator">&amp;</span>width<span class="token operator">=</span><span class="token punctuation">{</span>width<span class="token punctuation">}</span><span class="token operator">&amp;</span>heigh<span class="token operator">=</span><span class="token punctuation">{</span>heigh<span class="token punctuation">}</span><span class="token operator">&amp;</span>rotate<span class="token operator">=</span><span class="token punctuation">{</span>heigh<span class="token punctuation">}</span><span class="token operator">&amp;</span>quality<span class="token operator">=</span><span class="token punctuation">{</span>quality<span class="token punctuation">}</span><span class="token operator">&amp;</span>format<span class="token operator">=</span><span class="token punctuation">{</span>format<span class="token punctuation">}</span>
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
<td>filename</td>
<td>String</td>
<td>Y</td>
<td>文件名称</td>
</tr>
<tr>
<td>file_content</td>
<td>Stream</td>
<td>Y</td>
<td>文件流</td>
</tr>
<tr>
<td>file_digest</td>
<td>String</td>
<td>N</td>
<td>文件摘要,用于标记文件</td>
</tr>
<tr>
<td>file_type</td>
<td>String</td>
<td>N</td>
<td>图片类型（例如:image/jpeg）</td>
</tr>
<tr>
<td>width</td>
<td>Int</td>
<td>N</td>
<td>图片宽度</td>
</tr>
<tr>
<td>height</td>
<td>Int</td>
<td>N</td>
<td>图片高度</td>
</tr>
<tr>
<td>quality</td>
<td>Float</td>
<td>N</td>
<td>图片质量（取值范围：0-1）（默认值：1）</td>
</tr>
<tr>
<td>rotate</td>
<td>Float</td>
<td>N</td>
<td>图片旋转角度,默认0.0</td>
</tr>
<tr>
<td>format</td>
<td>String</td>
<td>N</td>
<td>图片输入格式(默认jpg)</td>
</tr>
</tbody>
</table>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>POST /medias/images?access_token=<span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>&amp;file_digest=文件摘要&amp;file_size=文件大小&amp;width=图片剪裁的宽度&amp;heigh=图片剪裁的高度&amp;rotate=图片旋转角度&amp;quality=图片压缩率(<span class="token number">0</span>~<span class="token number">1</span>)&amp;format=图片输入格式(默认jpg)
Content-Type<span class="token operator">:</span> multipart/form-data
Accept<span class="token operator">:</span> application/json

------------boundary
Content-Disposition<span class="token operator">:</span>form-data; name=<span class="token string">"file"</span>;filename=<span class="token string">""</span>
Content-Type<span class="token operator">:</span> <span class="token punctuation">{</span>content-type<span class="token punctuation">}</span>

file content...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8xMi9yQkFCR1ZuSWkxU0FINl9LQUFGeTNEQzlfYUEyOTQuanBn"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>错误返回值：</strong></p>
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
<h2 id="文件上传-json" tabindex="-1"><a class="header-anchor" href="#文件上传-json" aria-hidden="true">#</a> 文件上传(json)</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>file_name</td>
<td>String</td>
<td>Y</td>
<td>文件名称</td>
</tr>
<tr>
<td>file_content</td>
<td>byte[]</td>
<td>Y</td>
<td>文件内容</td>
</tr>
<tr>
<td>file_digest</td>
<td>String</td>
<td>N</td>
<td>文件摘要,用于标记文件</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">?</span>access_token<span class="token operator">=</span>b646339e2f4f4234af6bae5f72db9879
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"file_name"</span> <span class="token operator">:</span> <span class="token string">"文件名称"</span><span class="token punctuation">,</span>
  <span class="token property">"file_digest"</span> <span class="token operator">:</span> <span class="token string">"文件摘要"</span><span class="token punctuation">,</span>
  <span class="token property">"file_content"</span> <span class="token operator">:</span> <span class="token string">"文件流"</span><span class="token punctuation">,</span>
  <span class="token property">"file_metadata"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"key1"</span> <span class="token operator">:</span> <span class="token string">"value1"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8xMi9yQkFCRzFuSWpkdUFJVmE2QUFBQ0ZPcVh3eXM0MjMubXA0"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>错误返回值：</strong></p>
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
<h2 id="文件上传-multipart-form-data" tabindex="-1"><a class="header-anchor" href="#文件上传-multipart-form-data" aria-hidden="true">#</a> 文件上传(multipart/form-data)</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_digest<span class="token operator">=</span><span class="token punctuation">{</span>file_digest<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_size<span class="token operator">=</span><span class="token punctuation">{</span>file_size<span class="token punctuation">}</span>
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
<td>file</td>
<td>Stream</td>
<td>Y</td>
<td>文件流（multipart/form-data）</td>
</tr>
<tr>
<td>file_digest</td>
<td>String</td>
<td>Y</td>
<td>文件摘要,用于标记文件</td>
</tr>
<tr>
<td>file_size</td>
<td>long</td>
<td>Y</td>
<td>文件大小</td>
</tr>
<tr>
<td>filename</td>
<td>String</td>
<td>Y</td>
<td>文件名称</td>
</tr>
</tbody>
</table>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>POST /medias?access_token=<span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>&amp;file_digest=文件摘要&amp;file_size=文件大小
Content-Type<span class="token operator">:</span> multipart/form-data
Accept<span class="token operator">:</span> application/json

------------boundary
Content-Disposition<span class="token operator">:</span>form-data; name=<span class="token string">"file"</span>;filename=<span class="token string">""</span>
Content-Type<span class="token operator">:</span> <span class="token punctuation">{</span>content-type<span class="token punctuation">}</span>

file content...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8xMi9yQkFCRzFuSWpkdUFJVmE2QUFBQ0ZPcVh3eXM0MjMubXA0"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>错误返回值：</strong></p>
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
