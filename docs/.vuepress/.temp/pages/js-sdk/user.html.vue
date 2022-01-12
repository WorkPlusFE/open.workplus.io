<template><h1 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h1>
<h2 id="获取登录用户详情" tabindex="-1"><a class="header-anchor" href="#获取登录用户详情" aria-hidden="true">#</a> 获取登录用户详情</h2>
<p>获取当前登录用户详细信息，包括某个组织下的雇员信息。</p>
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
<CodeWrapper fn="user.getCurrentUserInfo">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">getCurrentUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">needEmpInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
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
<td>needEmpInfo</td>
<td>Boolean</td>
<td>返回用户资料是否带上当前组织的雇员信息</td>
</tr>
</tbody>
</table>
<h2 id="获取用户的雇员信息" tabindex="-1"><a class="header-anchor" href="#获取用户的雇员信息" aria-hidden="true">#</a> 获取用户的雇员信息</h2>
<p>通过传入组织id，获取当前用户的雇员信息，默认为当前所在组织。</p>
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
<CodeWrapper fn="user.getCurrentEmployeeInfo">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">getCurrentEmployeeInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">orgCode</span><span class="token operator">:</span> <span class="token string">'组织id'</span><span class="token punctuation">,</span>
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
<td>orgCode</td>
<td>Boolean</td>
<td>组织<code>org_id</code>或<code>org_code</code> 表示用户所在的组织</td>
</tr>
</tbody>
</table>
<h2 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h2>
<p>通过用户的<code>domainId</code>和<code>userId</code>获取该用户的详细信息。</p>
<div class="custom-container tip"><p class="custom-container-title">用户和雇员的区别</p>
<p>用户简单理解就是一个账号，而雇员就是这个用户可能存在于多个组织或部门中，作为一个雇员的角色。</p>
</div>
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
<CodeWrapper fn="user.getUserInfoByUserId" :qrcode="false">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">getUserInfoByUserId</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">'用户的userId'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">domainId</span><span class="token operator">:</span> <span class="token string">'用户的domainId'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeWrapper>
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
<td>userId</td>
<td>String</td>
<td>用户的 userId</td>
</tr>
<tr>
<td>domainId</td>
<td>String</td>
<td>用户的 domainId</td>
</tr>
</tbody>
</table>
<h2 id="打开用户详情页面" tabindex="-1"><a class="header-anchor" href="#打开用户详情页面" aria-hidden="true">#</a> 打开用户详情页面</h2>
<p>通过用户<code>username</code>打开该用户信息的详情页面。</p>
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
<CodeWrapper fn="user.showUserInfoByUsername" :qrcode="false">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">showUserInfoByUsername</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'用户的username'</span><span class="token punctuation">,</span>
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
<td>username</td>
<td>String</td>
<td>用户的username</td>
</tr>
</tbody>
</table>
</template>
