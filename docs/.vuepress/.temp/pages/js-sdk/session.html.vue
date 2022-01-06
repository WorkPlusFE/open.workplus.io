<template><h1 id="聊天" tabindex="-1"><a class="header-anchor" href="#聊天" aria-hidden="true">#</a> 聊天</h1>
<h2 id="打开用户聊天页面" tabindex="-1"><a class="header-anchor" href="#打开用户聊天页面" aria-hidden="true">#</a> 打开用户聊天页面</h2>
<p>传入<code>userId</code>、<code>domianId</code>，打开到 WorkPlus 与该用户的聊天页面。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">showUserChatViewByUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  userId<span class="token operator">:</span> <span class="token string">'用户的userId'</span><span class="token punctuation">,</span>
  domainId<span class="token operator">:</span> <span class="token string">'用户的domainId'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>参数说明</strong></p>
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
<h2 id="打开群组聊天页面" tabindex="-1"><a class="header-anchor" href="#打开群组聊天页面" aria-hidden="true">#</a> 打开群组聊天页面</h2>
<p>通过<code>群组id</code>打开该群组的聊天页面。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">openDiscussionById</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  discussionId<span class="token operator">:</span> <span class="token string">'0629aadxx3fb0bd6'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>discussionId</td>
<td>String</td>
<td>群组的id</td>
</tr>
</tbody>
</table>
<h2 id="创建群组" tabindex="-1"><a class="header-anchor" href="#创建群组" aria-hidden="true">#</a> 创建群组</h2>
<p>通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">createDiscussionChat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="打开群组选人界面" tabindex="-1"><a class="header-anchor" href="#打开群组选人界面" aria-hidden="true">#</a> 打开群组选人界面</h2>
<p>根据<code>群组id</code>, 打开群组成员界面, 并进行选择。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">selectDiscussionMembers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  discussionId<span class="token operator">:</span> <span class="token string">'7e41cf3691344b28a9dd2035bac47'</span><span class="token punctuation">,</span>
  membersSelected<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>discussionId</td>
<td>String</td>
<td>群组 id</td>
</tr>
<tr>
<td>membersSelected</td>
<td>Array</td>
<td>已选的群成员数据</td>
</tr>
</tbody>
</table>
<p><strong>返回数据</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>members</td>
<td>返回群成员数据</td>
</tr>
</tbody>
</table>
</template>
