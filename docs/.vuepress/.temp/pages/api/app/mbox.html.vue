<template><h1 id="应用消息" tabindex="-1"><a class="header-anchor" href="#应用消息" aria-hidden="true">#</a> 应用消息</h1>
<h2 id="消息推送" tabindex="-1"><a class="header-anchor" href="#消息推送" aria-hidden="true">#</a> 消息推送</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>mbox<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token punctuation">{</span>source_type<span class="token punctuation">}</span><span class="token operator">&amp;</span>for_all<span class="token operator">=</span><span class="token punctuation">{</span>for_all<span class="token punctuation">}</span>
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
<td>source_type</td>
<td>String</td>
<td>N</td>
<td>枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>Y</td>
<td>消息类型,default/text/iamge/file/article/template</td>
</tr>
<tr>
<td>for_all</td>
<td>Boolean</td>
<td>N</td>
<td>是否全员推送,client_ids、usernames、scopes三者均为空,且for_all=true时,才全员推消息,否则均不生效</td>
</tr>
<tr>
<td>client_ids</td>
<td>List&lt;String&gt;</td>
<td>N</td>
<td>消息推送的用户标识</td>
</tr>
<tr>
<td>scopes</td>
<td>List&lt;String&gt;</td>
<td>N</td>
<td>发送范围,组织路径,例如/122/234/</td>
</tr>
<tr>
<td>usernames</td>
<td>List&lt;String&gt;</td>
<td>N</td>
<td>用户账号列表</td>
</tr>
<tr>
<td>platforms</td>
<td>List</td>
<td>N</td>
<td>枚举,ANDROID/IOS/PC,默认值为IOS和ANDROID</td>
</tr>
<tr>
<td>body</td>
<td>Map</td>
<td>Y</td>
<td>推送消息体</td>
</tr>
<tr>
<td>body.at_all</td>
<td>boolean</td>
<td>N</td>
<td>是否AT所有人员</td>
</tr>
<tr>
<td>body.content</td>
<td>String</td>
<td>N</td>
<td>发送内容,具体根据消息类型决定</td>
</tr>
<tr>
<td>body.is_gif</td>
<td>int</td>
<td>N</td>
<td>是否gif图片,1代表是</td>
</tr>
<tr>
<td>body.size</td>
<td>int</td>
<td>N</td>
<td>大小</td>
</tr>
<tr>
<td>body.width</td>
<td>int</td>
<td>N</td>
<td>图片宽度</td>
</tr>
<tr>
<td>body.height</td>
<td>int</td>
<td>N</td>
<td>图片高度</td>
</tr>
<tr>
<td>body.media_id</td>
<td>String</td>
<td>N</td>
<td>发送的媒体ID</td>
</tr>
<tr>
<td>body.path</td>
<td>String</td>
<td>N</td>
<td>发送的媒体ID</td>
</tr>
<tr>
<td>body.file_status</td>
<td>int</td>
<td>N</td>
<td>文件状态,0为正常</td>
</tr>
<tr>
<td>body.name</td>
<td>String</td>
<td>N</td>
<td>名称</td>
</tr>
<tr>
<td>body.articles.summary</td>
<td>String</td>
<td>N</td>
<td>文章摘要</td>
</tr>
<tr>
<td>body.articles.cover_url</td>
<td>String</td>
<td>N</td>
<td>封面URL</td>
</tr>
<tr>
<td>body.articles.cover_enabled</td>
<td>boolean</td>
<td>N</td>
<td>是否显示封面,true/false</td>
</tr>
<tr>
<td>body.articles.create_time</td>
<td>long</td>
<td>N</td>
<td>创建时间</td>
</tr>
<tr>
<td>body.articles.title</td>
<td>String</td>
<td>N</td>
<td>文章标题</td>
</tr>
<tr>
<td>body.articles.url</td>
<td>String</td>
<td>N</td>
<td>图文详情内容,有些获取url内容,为空时,图文详情显示content内容</td>
</tr>
<tr>
<td>body.template_id</td>
<td>String</td>
<td>N</td>
<td>模板ID,模板消息必填</td>
</tr>
<tr>
<td>body.data</td>
<td>String</td>
<td>N</td>
<td>模板数据,模板消息必填,value为变量值,color为颜色,font_size为字号大小</td>
</tr>
<tr>
<td>body.emphasis_keyword</td>
<td>String</td>
<td>N</td>
<td>高亮属性,保留字段</td>
</tr>
<tr>
<td>body.top_color</td>
<td>String</td>
<td>N</td>
<td>顶部颜色</td>
</tr>
<tr>
<td>body.top_avatar</td>
<td>String</td>
<td>N</td>
<td>顶部图标</td>
</tr>
<tr>
<td>body.top_title</td>
<td>String</td>
<td>N</td>
<td>顶部标题</td>
</tr>
<tr>
<td>body.data.text_style</td>
<td>String</td>
<td>N</td>
<td>normal(正常)bold(粗体)</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>mbox<span class="token operator">?</span>access_token<span class="token operator">=</span>b646339e2f4f4234af6bae5f72db9879
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>文本示例：</strong></p>
<details>
<summary>点击查看文本示例</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"TEXT"</span><span class="token punctuation">,</span> 
  <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"at_all"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
    <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"2"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"client_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"c24b6a94cfb14b79af12a1399edc9e31"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"ANDROID"</span><span class="token punctuation">,</span><span class="token string">"IOS"</span><span class="token punctuation">,</span><span class="token string">"PC"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details>
<p><strong>图片示例：</strong></p>
<details>
<summary>点击查看图片示例</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"IMAGE"</span><span class="token punctuation">,</span> 
  <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"is_gif"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">1852</span><span class="token punctuation">,</span> 
    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span> 
    <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC80OC9yQkFCR1ZkaFI5Q0FjNmp2QUFBSFBIRkhXSkk1NDEuanBn"</span><span class="token punctuation">,</span> 
    <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"图片内容,base64编码"</span><span class="token punctuation">,</span> 
    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">280</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"client_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"c24b6a94cfb14b79af12a1399edc9e31"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"ANDROID"</span><span class="token punctuation">,</span><span class="token string">"IOS"</span><span class="token punctuation">,</span><span class="token string">"PC"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details>
<p><strong>文件示例：</strong></p>
<details>
<summary>点击查看文件示例</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FILE"</span><span class="token punctuation">,</span> 
  <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"file_status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//文件状态,0代表正常</span>
    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">71416</span><span class="token punctuation">,</span> 
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"IMG_0778.GIF"</span><span class="token punctuation">,</span> 
    <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC80Ny9yQkFCR1ZkaEdBZUFYRkxmQUFFVy1JYmNRbTgwNjkuZ2lm"</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"client_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"c24b6a94cfb14b79af12a1399edc9e31"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"ANDROID"</span><span class="token punctuation">,</span><span class="token string">"IOS"</span><span class="token punctuation">,</span><span class="token string">"PC"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details>
<p><strong>图文示例：</strong></p>
<details>
<summary>点击查看图文示例</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"ARTICLE"</span><span class="token punctuation">,</span> 
  <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"articles"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"summary"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
        <span class="token property">"cover_url"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
        <span class="token property">"show_cover"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">"cover_media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8zQi9yQkFCR1ZkVlFwYUFicjJ3QUFQa2NkSHlFM280MDMuanBn"</span><span class="token punctuation">,</span> 
        <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1465205632846</span><span class="token punctuation">,</span> 
        <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"凯里"</span><span class="token punctuation">,</span>  
        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"云南丽江"</span><span class="token punctuation">,</span> 
        <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"&lt;p>这个文章被删除了&lt;/p>"</span><span class="token punctuation">,</span> 
        <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">""</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"ANDROID"</span><span class="token punctuation">,</span> 
    <span class="token string">"IOS"</span><span class="token punctuation">,</span> 
    <span class="token string">"PC"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details>
<p><strong>模板消息--根据模板ID：</strong></p>
<details>
<summary>点击查看模板消息示例</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"TEMPLATE"</span><span class="token punctuation">,</span> 
  <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"template_id"</span><span class="token operator">:</span> <span class="token string">"152891af-1bec-4a18-8201-a58e08a7afad"</span><span class="token punctuation">,</span> 
    <span class="token property">"top_color"</span><span class="token operator">:</span> <span class="token string">"#00ff00"</span><span class="token punctuation">,</span>
    <span class="token property">"top_avatar"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC80MC9yQkFCR1ZkWDQ0ZUFRY21LQUFBZXVHZDBHS0U4MTkuanBn"</span><span class="token punctuation">,</span>
    <span class="token property">"top_title"</span><span class="token operator">:</span> <span class="token string">"流程大师"</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"keyword1"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"339208499"</span><span class="token punctuation">,</span> 
        <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#00ff00"</span><span class="token punctuation">,</span> 
        <span class="token property">"font_size"</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span> 
        <span class="token property">"text_style"</span><span class="token operator">:</span> <span class="token string">"normal"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"keyword2"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"2016年01月05日"</span><span class="token punctuation">,</span> 
        <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#00ff00"</span><span class="token punctuation">,</span> 
        <span class="token property">"font_size"</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span> 
        <span class="token property">"text_style"</span><span class="token operator">:</span> <span class="token string">"normal"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"keyword3"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"830138013810"</span><span class="token punctuation">,</span> 
        <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#00ff00"</span><span class="token punctuation">,</span> 
        <span class="token property">"font_size"</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span> 
        <span class="token property">"text_style"</span><span class="token operator">:</span> <span class="token string">"normal"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"keyword4"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"8310380131"</span><span class="token punctuation">,</span> 
        <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#00ff00"</span><span class="token punctuation">,</span> 
        <span class="token property">"font_size"</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span> 
        <span class="token property">"text_style"</span><span class="token operator">:</span> <span class="token string">"bold"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"emphasis_keyword"</span><span class="token operator">:</span> <span class="token string">"keyword1.DATA"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"client_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"ANDROID"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></details>
<p><strong>返回数据：</strong></p>
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
<td>id</td>
<td>String</td>
<td>推送计划ID</td>
</tr>
<tr>
<td>material_id</td>
<td>String</td>
<td>推送的素材ID</td>
</tr>
<tr>
<td>app_id</td>
<td>String</td>
<td>推送者ID</td>
</tr>
<tr>
<td>expects</td>
<td>int</td>
<td>目标推送数</td>
</tr>
<tr>
<td>fails</td>
<td>int</td>
<td>推送失败数</td>
</tr>
<tr>
<td>oks</td>
<td>int</td>
<td>成功推送数</td>
</tr>
<tr>
<td>scopes</td>
<td>List&lt;String&gt;</td>
<td>发送范围,组织路径,例如/122/234/</td>
</tr>
<tr>
<td>client_ids</td>
<td>List&lt;String&gt;</td>
<td>消息推送的对象标记</td>
</tr>
</tbody>
</table>
<p><strong>返回示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
    <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"a918d8a6-67e9-4e76-8503-baa73d3c6fd2"</span><span class="token punctuation">,</span> 
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"f3b9250c-96d4-414b-be7f-308f2fdeca99"</span><span class="token punctuation">,</span> 
    <span class="token property">"app_id"</span><span class="token operator">:</span> <span class="token string">"92bc3faa-12bd-4afc-9962-01f2410f0bee"</span><span class="token punctuation">,</span> 
    <span class="token property">"material_id"</span><span class="token operator">:</span> <span class="token string">"52dec89a-04a0-4127-99b5-a3d136c638a4"</span><span class="token punctuation">,</span> 
    <span class="token property">"expects"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"fails"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"oks"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1485053077748</span><span class="token punctuation">,</span> 
    <span class="token property">"refresh_time"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"expect_time"</span><span class="token operator">:</span> <span class="token number">1485054877748</span><span class="token punctuation">,</span> 
    <span class="token property">"scopes"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"client_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"/232/301/c24b6a94cfb14b79af12a1399edc9e31"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><strong>错误返回值：</strong></p>
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
<tr>
<td>202012</td>
<td>没有对应的雇员</td>
<td>没有对应的雇员</td>
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
