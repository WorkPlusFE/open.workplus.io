<template><h1 id="媒体转换" tabindex="-1"><a class="header-anchor" href="#媒体转换" aria-hidden="true">#</a> 媒体转换</h1>
<h2 id="媒体转换-1" tabindex="-1"><a class="header-anchor" href="#媒体转换-1" aria-hidden="true">#</a> 媒体转换</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /v1/medias/{media_id}/translate?access_token={access_token}&amp;source_type={source_type}&amp;dest_type={dest_type}
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
<td>media_id</td>
<td>String</td>
<td>Y</td>
<td>待转换的媒体标识</td>
</tr>
<tr>
<td>source_type</td>
<td>String</td>
<td>Y</td>
<td>源类型</td>
</tr>
<tr>
<td>dest_type</td>
<td>String</td>
<td>Y</td>
<td>目标类型</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">支持的转换类型</p>
<p>目前只支持：office 转 pdf  pdf 转图片  office 转图片  amr 转 Mp3  其它转换不支持，请注意！！！</p>
</div>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>office转图片：source_type<span class="token operator">=</span>office<span class="token operator">&amp;</span>dest_type<span class="token operator">=</span>jpg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>Z3JvdXAxL00wMC8wMi9FQi9yQkFDLUZoLTBibUVOWFluQUFBQUFBQUFBQUE0NjYudG1w<span class="token operator">/</span>translate<span class="token operator">?</span>source_type<span class="token operator">=</span>office<span class="token operator">&amp;</span>dest_type<span class="token operator">=</span>jpg<span class="token operator">&amp;</span>access_token<span class="token operator">=</span><span class="token number">06</span>bcdf9d4dab437ab46d35128a60b491
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<details>
<summary>点击查看响应数据</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC81Ni9yQkFDLUZmQUFuZUFlR1ZvQUF4RmNLS2xwQXMzNi5wcHR4"</span><span class="token punctuation">,</span>
    <span class="token property">"dest_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FhSWFrQUFCNVZpSkdEdXMzOTkuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FPR01QQUFCeUxWcXhURWs2NDYuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FZdml0QUFCOFJ5dmZnaVE1NDEuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FTN25kQUFDVjU2QzMzb0ExMTguanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FHQ3FpQUFDVWw4bjVWdXMyMDUuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FlVHNBQUFCODBLOVBBRU05NDQuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FFLXRNQUFDVWpPT3Zkcm84NzYuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FVem5yQUFDSHFOM05BdUEyNzAuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FQeDkzQUFDU2x3OUU4Ums2MDIuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FiNmZFQUFDVEhKNjFIV2MxNjAuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FIYzBWQUFDVzRpdF91UVExOTUuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FHUHBsQUFDSzhna2g5RE03NzMuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FJaG4tQUFDRm1GelpzRE0wNTMuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FjX1JrQUFDZDFhdTNNd1kwNzMuanBn"</span><span class="token punctuation">,</span>
      <span class="token string">"Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FRSENqQUFCbEY4ZThBQlkzNDQuanBn"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"新版atwork技术架构.pptx"</span><span class="token punctuation">,</span>
    <span class="token property">"source_type"</span><span class="token operator">:</span> <span class="token string">"office"</span><span class="token punctuation">,</span>
    <span class="token property">"dest_type"</span><span class="token operator">:</span> <span class="token string">"jpg"</span><span class="token punctuation">,</span>
    <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1479190247137</span><span class="token punctuation">,</span>
    <span class="token property">"expire_time"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></details>
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
<td>media_id</td>
<td>String</td>
<td>待转换的媒体标识</td>
</tr>
<tr>
<td>dest_ids</td>
<td>List[String]</td>
<td>转换后的媒体标识集合</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>媒体名称</td>
</tr>
</tbody>
</table>
<p><strong>错误返回值：</strong></p>
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
<hr>
<h2 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩" aria-hidden="true">#</a> 图片压缩</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>compress<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>width<span class="token operator">=</span><span class="token punctuation">{</span>width<span class="token punctuation">}</span><span class="token operator">&amp;</span>height<span class="token operator">=</span><span class="token punctuation">{</span>height<span class="token punctuation">}</span><span class="token operator">&amp;</span>quality<span class="token operator">=</span><span class="token punctuation">{</span>quality<span class="token punctuation">}</span><span class="token operator">&amp;</span>format<span class="token operator">=</span><span class="token punctuation">{</span>format<span class="token punctuation">}</span><span class="token operator">&amp;</span>thumb<span class="token operator">=</span><span class="token punctuation">{</span>thumb<span class="token punctuation">}</span><span class="token operator">&amp;</span>thumb_width<span class="token operator">=</span><span class="token punctuation">{</span>thumb_width<span class="token punctuation">}</span><span class="token operator">&amp;</span>thumb_height<span class="token operator">=</span><span class="token punctuation">{</span>thumb_height<span class="token punctuation">}</span><span class="token operator">&amp;</span>thumb_size<span class="token operator">=</span><span class="token punctuation">{</span>thumb_size<span class="token punctuation">}</span><span class="token operator">&amp;</span>original<span class="token operator">=</span><span class="token punctuation">{</span>original<span class="token punctuation">}</span>
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
<td>multipart/form-data</td>
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
<td>media</td>
<td>Stream</td>
<td>Y</td>
<td>待压缩的图片流（multipart/form-data）</td>
</tr>
<tr>
<td>width</td>
<td>Int</td>
<td>N</td>
<td>压缩后的图片宽度（默认值：800）</td>
</tr>
<tr>
<td>height</td>
<td>Int</td>
<td>N</td>
<td>压缩后的图片高度（默认值：800）</td>
</tr>
<tr>
<td>quality</td>
<td>Float</td>
<td>N</td>
<td>压缩后的图片质量（取值范围：0-1）（默认值：1）</td>
</tr>
<tr>
<td>format</td>
<td>String</td>
<td>N</td>
<td>压缩后的图片类型（默认值：JPG）</td>
</tr>
<tr>
<td>thumb</td>
<td>Boolean</td>
<td>N</td>
<td>是否需要缩略图（默认值：false）</td>
</tr>
<tr>
<td>thumb_width</td>
<td>Int</td>
<td>N</td>
<td>缩略图宽度（默认值：180）</td>
</tr>
<tr>
<td>thumb_height</td>
<td>Int</td>
<td>N</td>
<td>缩略图高度（默认值：180）</td>
</tr>
<tr>
<td>thumb_size</td>
<td>Int</td>
<td>N</td>
<td>缩略图大小（默认值：20480字节）</td>
</tr>
<tr>
<td>original</td>
<td>Boolean</td>
<td>N</td>
<td>是否保存原文件（默认值：false）</td>
</tr>
<tr>
<td>digest</td>
<td>String</td>
<td>N</td>
<td>文件签名,一般采用MD5码即可</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>compress<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token number">299</span>abb50111349c5a347b510a4ab9ee1<span class="token operator">&amp;</span>thumb<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>original<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>digest<span class="token operator">=</span><span class="token number">999</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<details>
<summary>点击查看响应数据</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"original_media"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wRS9yQkFCR1ZrLU8tbUFhMWZsQUFHODJTNURYMGszODAuanBn"</span><span class="token punctuation">,</span> 
      <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">113881</span><span class="token punctuation">,</span> 
      <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
      <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"media"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">208</span><span class="token punctuation">,</span> 
      <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wMC9yQkFCR1ZoSGlGeUFkNWowQUFENXFPZDZ6LW8wMDguZ2lm"</span><span class="token punctuation">,</span> 
      <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">63912</span><span class="token punctuation">,</span> 
      <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">208</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"thumb_media"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"blob"</span><span class="token operator">:</span> <span class="token string">"Base64 encode data"</span><span class="token punctuation">,</span> 
      <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> 
      <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wMC9yQkFCRzFoSGgydUFMZnhzQUFBWDBCeEJlbUUxMjcuanBn"</span><span class="token punctuation">,</span> 
      <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">6096</span><span class="token punctuation">,</span> 
      <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">180</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></details>
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
<td>media.height</td>
<td>Int</td>
<td>图片高度</td>
</tr>
<tr>
<td>media.width</td>
<td>Int</td>
<td>图片宽度</td>
</tr>
<tr>
<td>media.size</td>
<td>Int</td>
<td>图片大小</td>
</tr>
<tr>
<td>media.media_id</td>
<td>String</td>
<td>图片媒体标识</td>
</tr>
<tr>
<td>thumb_media.height</td>
<td>Int</td>
<td>缩略图片高度</td>
</tr>
<tr>
<td>thumb_media.width</td>
<td>Int</td>
<td>缩略图片宽度</td>
</tr>
<tr>
<td>thumb_media.size</td>
<td>Int</td>
<td>缩略图片大小</td>
</tr>
<tr>
<td>thumb_media.media_id</td>
<td>String</td>
<td>缩略图片媒体标识</td>
</tr>
<tr>
<td>thumb_media. blob</td>
<td>String</td>
<td>缩略图片(经Base64编码的二进制流)</td>
</tr>
</tbody>
</table>
<p><strong>错误返回值：</strong></p>
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
