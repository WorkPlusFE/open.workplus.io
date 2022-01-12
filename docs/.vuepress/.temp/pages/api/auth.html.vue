<template><h1 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h1>
<p>第三方应用在接入 WorkPlus 平台时，往往需要和 WorkPlus 用户系统集成。</p>
<p>目前 WorkPlus 实现单点登录的机制如下：</p>
<ol>
<li>客户端打开第三方应用时，第三方应用可以通过<code>js-sdk</code>或从<code>url</code>上获得临时 Ticket；</li>
<li>第三方应用根据 Ticket 参数，验证该 Ticket，如该 Ticket 有效，则返回关联的用户信息。</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>access_token</code>的获取方式，请查看 <RouterLink to="/api/getStart.html#%E8%8E%B7%E5%8F%96-accesstoken">接入流程-获取 AccessToken</RouterLink>。</p>
</div>
<h2 id="验证用户-ticket" tabindex="-1"><a class="header-anchor" href="#验证用户-ticket" aria-hidden="true">#</a> 验证用户 Ticket</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>tickets<span class="token operator">/</span><span class="token punctuation">{</span>ticket<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>ticket</td>
<td>String</td>
<td>Y</td>
<td>用户ticket</td>
</tr>
<tr>
<td>access_token</td>
<td>String</td>
<td>Y</td>
<td>访问令牌</td>
</tr>
</tbody>
</table>
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
<td>client_id</td>
<td>String</td>
<td>该ticket所属的用户标识</td>
</tr>
<tr>
<td>domain_id</td>
<td>String</td>
<td>该ticket所属的域标识</td>
</tr>
<tr>
<td>org_id</td>
<td>String</td>
<td>该ticket所属的组织标识</td>
</tr>
<tr>
<td>device_id</td>
<td>String</td>
<td>该ticket所属的设备标识</td>
</tr>
</tbody>
</table>
<p><strong>成功返回值：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
    <span class="token property">"client_id"</span><span class="token operator">:</span> <span class="token string">"a86e83a26bee5d5c"</span><span class="token punctuation">,</span> 
    <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"85df0e64"</span><span class="token punctuation">,</span> 
    <span class="token property">"device_id"</span><span class="token operator">:</span> <span class="token string">"test10fdfd0111"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>错误返回值：</strong></p>
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
<td>10015</td>
<td>ticket expired.</td>
<td>ticket已过期.</td>
</tr>
<tr>
<td>10016</td>
<td>ticket not found.</td>
<td>ticket不存在.</td>
</tr>
</tbody>
</table>
</template>
