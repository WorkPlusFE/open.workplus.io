<template><h1 id="开发者接口回调" tabindex="-1"><a class="header-anchor" href="#开发者接口回调" aria-hidden="true">#</a> 开发者接口回调</h1>
<h2 id="消息回调" tabindex="-1"><a class="header-anchor" href="#消息回调" aria-hidden="true">#</a> 消息回调</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">XXXXXX</span><span class="token operator">?</span>signature<span class="token operator">=</span><span class="token punctuation">{</span>signature<span class="token punctuation">}</span><span class="token operator">&amp;</span>timestamp<span class="token operator">=</span><span class="token punctuation">{</span>timestamp<span class="token punctuation">}</span><span class="token operator">&amp;</span>nonce<span class="token operator">=</span><span class="token punctuation">{</span>nonce<span class="token punctuation">}</span>
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
<td>http://XXXXXX</td>
<td>String</td>
<td>Y</td>
<td>回调地址</td>
</tr>
<tr>
<td>signature</td>
<td>String</td>
<td>Y</td>
<td>签名,明文模式下,用message计算签名,其余情况用encrypt计算</td>
</tr>
<tr>
<td>timestamp</td>
<td>String</td>
<td>Y</td>
<td>时间戳</td>
</tr>
<tr>
<td>nonce</td>
<td>String</td>
<td>Y</td>
<td>随机数</td>
</tr>
<tr>
<td>encrypt</td>
<td>String</td>
<td>Y</td>
<td>密文,安全模式及兼容模式下,返回该字段</td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>Y</td>
<td>明文,明文模式及兼容模式下,返回该字段</td>
</tr>
<tr>
<td>to_user_name</td>
<td>String</td>
<td>Y</td>
<td>消息接收对象</td>
</tr>
<tr>
<td>from_user_name</td>
<td>String</td>
<td>Y</td>
<td>消息发送对象</td>
</tr>
<tr>
<td>create_time</td>
<td>String</td>
<td>Y</td>
<td>回调消息时间</td>
</tr>
<tr>
<td>msg_type</td>
<td>String</td>
<td>Y</td>
<td>消息类型,text/image/voice/video/file/location/link/event</td>
</tr>
<tr>
<td>content</td>
<td>String</td>
<td>N</td>
<td>文本消息内容</td>
</tr>
<tr>
<td>media_id</td>
<td>String</td>
<td>N</td>
<td>媒体类消息的媒体ID</td>
</tr>
<tr>
<td>event</td>
<td>String</td>
<td>N</td>
<td>事件类型,SUBSCRIBE, SCAN, LOCATION, CLICK, VIEW</td>
</tr>
<tr>
<td>event_key</td>
<td>String</td>
<td>N</td>
<td>事件标识</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"encrypt"</span><span class="token operator">:</span> <span class="token string">"YN4w4Kudkm-6p1y8AATO6V"</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"38-9izmiUlNo37wPV8dPQV"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>响应数据：</strong></p>
<p>Map 的 JSON，推荐返回格式如下:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// application/json</span>
<span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>加密说明：</strong></p>
<ul>
<li>计算签名：signature=sha1(sort(token、timestamp、nonce、echoStr))。sort的含义是将参数按照字母字典排序，然后从小到大拼接成一个字符串, echoStr:明文模式下,等于message,其余为encrypt;</li>
<li>encrypt = Base64_Encode( AES_Encrypt[random(16B) + msg_len(4B) + msg + $appKey] )，是对明文消息msg加密处理后的Base64编码。 其中random为16字节的随机字符串；msg_len为4字节的msg长度，网络字节序；msg为消息体明文；$appKey为APP的标识</li>
</ul>
<p><strong>解密说明：</strong></p>
<ul>
<li>对密文BASE64解码：aes_msg=Base64_Decode(encrypt)</li>
<li>使用AESKey做AES解密：rand_msg=AES_Decrypt(aes_msg)</li>
<li>验证解密后$appKey、msg_len</li>
<li>去掉rand_msg头部的16个随机字节，4个字节的msg_len,和尾部的$appKey即为最终的消息体原文msg</li>
</ul>
<p><strong>回调消息示例（明文格式化结果）</strong></p>
<p>文本消息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"to_user_name"</span><span class="token operator">:</span> <span class="token string">"abbd71f0-e213-481d-81f1-fcd143230e46"</span><span class="token punctuation">,</span> 
  <span class="token property">"from_user_name"</span><span class="token operator">:</span> <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span><span class="token punctuation">,</span> 
  <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1487642989572</span><span class="token punctuation">,</span> 
  <span class="token property">"msg_type"</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span> 
  <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"test message"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>语音消息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"to_user_name"</span><span class="token operator">:</span> <span class="token string">"abbd71f0-e213-481d-81f1-fcd143230e46"</span><span class="token punctuation">,</span> 
  <span class="token property">"from_user_name"</span><span class="token operator">:</span> <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span><span class="token punctuation">,</span> 
  <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1487643037326</span><span class="token punctuation">,</span> 
  <span class="token property">"msg_type"</span><span class="token operator">:</span> <span class="token string">"voice"</span><span class="token punctuation">,</span> 
  <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wMy9yQkFCRzFpcm9aeUFIbUZ1QUFBSXhqbVlpQXczNzkudG1w"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>文件消息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"to_user_name"</span><span class="token operator">:</span> <span class="token string">"abbd71f0-e213-481d-81f1-fcd143230e46"</span><span class="token punctuation">,</span> 
  <span class="token property">"from_user_name"</span><span class="token operator">:</span> <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span><span class="token punctuation">,</span> 
  <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1487643081302</span><span class="token punctuation">,</span> 
  <span class="token property">"msg_type"</span><span class="token operator">:</span> <span class="token string">"file"</span><span class="token punctuation">,</span> 
  <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wMy9yQkFCRjFpcm92ZUFia0ZhQUFlc25sSGZMRVE5NTYuanBn"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>图片消息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"to_user_name"</span><span class="token operator">:</span> <span class="token string">"abbd71f0-e213-481d-81f1-fcd143230e46"</span><span class="token punctuation">,</span> 
  <span class="token property">"from_user_name"</span><span class="token operator">:</span> <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span><span class="token punctuation">,</span> 
  <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1487643104435</span><span class="token punctuation">,</span> 
  <span class="token property">"msg_type"</span><span class="token operator">:</span> <span class="token string">"image"</span><span class="token punctuation">,</span> 
  <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wMy9yQkFCRzFpcm9kLUFWUG9PQUFDNlJGRW0wWWM5MTEuanBn"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>视频消息：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"to_user_name"</span><span class="token operator">:</span> <span class="token string">"abbd71f0-e213-481d-81f1-fcd143230e46"</span><span class="token punctuation">,</span> 
  <span class="token property">"from_user_name"</span><span class="token operator">:</span> <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span><span class="token punctuation">,</span> 
  <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1487643141486</span><span class="token punctuation">,</span> 
  <span class="token property">"msg_type"</span><span class="token operator">:</span> <span class="token string">"video"</span><span class="token punctuation">,</span> 
  <span class="token property">"media_id"</span><span class="token operator">:</span> <span class="token string">"Z3JvdXAxL00wMC8wMC8wMy9yQkFCRjFpcm96T0FTT2d6QUFGbTkyYVppemc1NzMubXA0"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>订阅事件：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"to_user_name"</span><span class="token operator">:</span> <span class="token string">"abbd71f0-e213-481d-81f1-fcd143230e46"</span><span class="token punctuation">,</span> 
  <span class="token property">"from_user_name"</span><span class="token operator">:</span> <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span><span class="token punctuation">,</span> 
  <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1487643267580</span><span class="token punctuation">,</span> 
  <span class="token property">"msg_type"</span><span class="token operator">:</span> <span class="token string">"event"</span><span class="token punctuation">,</span> 
  <span class="token property">"event"</span><span class="token operator">:</span> <span class="token string">"SUBSCRIBE"</span><span class="token punctuation">,</span> 
  <span class="token property">"event_key"</span><span class="token operator">:</span> <span class="token string">"subscribe"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
