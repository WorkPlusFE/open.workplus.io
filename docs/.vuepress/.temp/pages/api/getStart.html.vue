<template><h1 id="接入流程" tabindex="-1"><a class="header-anchor" href="#接入流程" aria-hidden="true">#</a> 接入流程</h1>
<p>WorkPlus 平台作为企业移动应用的统一入口，提供了用户身份集成，应用接入等基础能力接口。第三方应用主动调用接口时，需带上AccessToken 参数。AccessToken 参数由 DomainId，OrgId，AppKey，AppSecret 获取。</p>
<p>具体需要以下步骤：</p>
<ol>
<li>以组织管理员身份登录后台创建应用，并获取 DomainId，OrgId，AppKey 及A ppSecret 等信息；</li>
<li>通过 DomainId，OrgId，AppKey 及 AppSecret 获取 AccessToken；</li>
<li>通过 AccessToken 调用相关接口。</li>
</ol>
<h2 id="获取-appkey-及-appsecret" tabindex="-1"><a class="header-anchor" href="#获取-appkey-及-appsecret" aria-hidden="true">#</a> 获取 AppKey 及 AppSecret</h2>
<p>登录管理后台并创建应用。创建成功后，可以在应用管理列表，找到对应的应用，点击会弹出下图的信息框，AppKey 及 AppSecret 分别对应图中的<code>应用KEY</code>及<code>应用SECRET</code>。</p>
<p class="w6s-image">
  <img :src="$withBase('/api/appKeys.png')" alt="获取 AppKey 及 AppSecret" width="60%">
</p>
<h2 id="获取-accesstoken" tabindex="-1"><a class="header-anchor" href="#获取-accesstoken" aria-hidden="true">#</a> 获取 AccessToken</h2>
<p>通过 DomainId，OrgId，AppKey 及 AppSecret 调用以下接口获取 AccessToken:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>demo<span class="token operator">-</span>api<span class="token punctuation">.</span>workplus<span class="token punctuation">.</span>io<span class="token operator">/</span>v1<span class="token operator">/</span>token
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>实际 API 接口地址，以所部署环境为准。</p>
</blockquote>
<p><strong>请求头部：</strong></p>
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
<p><strong>请求格式：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"grant_type"</span><span class="token operator">:</span> <span class="token string">"client_credentials"</span><span class="token punctuation">,</span>
  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token string">"app"</span><span class="token punctuation">,</span>
  <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"DomainId"</span><span class="token punctuation">,</span>
  <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"OrgId"</span><span class="token punctuation">,</span>
  <span class="token property">"client_id"</span><span class="token operator">:</span> <span class="token string">"AppKey"</span><span class="token punctuation">,</span>
  <span class="token property">"client_secret"</span><span class="token operator">:</span> <span class="token string">"5tAkUIt1rrnP0WNLg7BWYuuqwzn3xRoO"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>grant_type</td>
<td>String</td>
<td>固定值 <code>client_credentials</code></td>
</tr>
<tr>
<td>scope</td>
<td>String</td>
<td>固定值 <code>app</code></td>
</tr>
<tr>
<td>domain_id</td>
<td>String</td>
<td>应用所在域的域id</td>
</tr>
<tr>
<td>org_id</td>
<td>String</td>
<td>应用所在组织的组织id</td>
</tr>
<tr>
<td>client_id</td>
<td>String</td>
<td>应用的 appKey</td>
</tr>
<tr>
<td>client_secret</td>
<td>String</td>
<td>应用的 appSecret</td>
</tr>
</tbody>
</table>
<p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token string">"7447497d58de4d55879ce1e441a101c4"</span><span class="token punctuation">,</span> 
    <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token string">"02a639c9bffc4640aa5045ded3902a31"</span><span class="token punctuation">,</span> 
    <span class="token property">"issued_time"</span><span class="token operator">:</span> <span class="token number">1484882719965</span><span class="token punctuation">,</span> 
    <span class="token property">"expire_time"</span><span class="token operator">:</span> <span class="token number">1487474719965</span><span class="token punctuation">,</span> 
    <span class="token property">"client_id"</span><span class="token operator">:</span> <span class="token string">"92bc3faa-12bd-4afc-9962-01f2410f0bee"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>成功返回字段说明：</strong></p>
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
<td>client_id</td>
<td>String</td>
<td>当前登录用户的标识</td>
</tr>
<tr>
<td>access_token</td>
<td>String</td>
<td>应用的身份凭证</td>
</tr>
<tr>
<td>refresh_token</td>
<td>String</td>
<td>更新身份凭证</td>
</tr>
<tr>
<td>issued_time</td>
<td>String</td>
<td>access_token的生效时间</td>
</tr>
<tr>
<td>expire_time</td>
<td>String</td>
<td>access_token的过期时间</td>
</tr>
</tbody>
</table>
<p><strong>错误返回值：</strong></p>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>202102</td>
<td>没有对应的应用</td>
</tr>
<tr>
<td>202104</td>
<td>应用认证失败</td>
</tr>
</tbody>
</table>
</template>
