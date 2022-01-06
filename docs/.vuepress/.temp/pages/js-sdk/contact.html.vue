<template><h1 id="联系人" tabindex="-1"><a class="header-anchor" href="#联系人" aria-hidden="true">#</a> 联系人</h1>
<div class="custom-container tip"><p class="custom-container-title">人员复选</p>
<p>选择用户或雇员后返回的信息，若需要进行复选，回传的用户或雇员数据至少要包含<code>userId</code>属性。</p>
</div>
<h2 id="单选联系人" tabindex="-1"><a class="header-anchor" href="#单选联系人" aria-hidden="true">#</a> 单选联系人</h2>
<p>打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>contact<span class="token punctuation">.</span><span class="token function">getSingleContact</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hideMe<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  filterSenior<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
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
<td>hideMe</td>
<td>Boolean</td>
<td>表示在选择联系人的时候，是否显示自己</td>
</tr>
<tr>
<td>filterSenior</td>
<td>Number</td>
<td>1 表示过滤高管, 0 表示不过滤</td>
</tr>
</tbody>
</table>
<h2 id="多选联系人" tabindex="-1"><a class="header-anchor" href="#多选联系人" aria-hidden="true">#</a> 多选联系人</h2>
<p>打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>contact<span class="token punctuation">.</span><span class="token function">getContacts</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hideMe<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  filterSenior<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  selectedContacts<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'联系人列表信息，用于复选'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>hideMe</td>
<td>Boolean</td>
<td>表示在选择联系人的时候，是否显示自己</td>
</tr>
<tr>
<td>filterSenior</td>
<td>Number</td>
<td>1 表示过滤高管, 0 表示不过滤</td>
</tr>
<tr>
<td>selectedContacts</td>
<td>Array</td>
<td>非必须，雇员列表信息，用于复选</td>
</tr>
</tbody>
</table>
<h2 id="多选当前组织的雇员列表" tabindex="-1"><a class="header-anchor" href="#多选当前组织的雇员列表" aria-hidden="true">#</a> 多选当前组织的雇员列表</h2>
<p>打开<code>当前组织</code>的联系人列表，选择多个联系人，返回雇员信息。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>contact<span class="token punctuation">.</span><span class="token function">getEmployeesFromCurrentOrg</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hideMe<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  filterSenior<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  selectedEmpList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'联系人列表信息，用于复选'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>hideMe</td>
<td>Boolean</td>
<td>表示在选择联系人的时候，是否显示自己</td>
</tr>
<tr>
<td>filterSenior</td>
<td>Number</td>
<td>1 表示过滤高管, 0 表示不过滤</td>
</tr>
<tr>
<td>selectedEmpList</td>
<td>Array</td>
<td>非必须，雇员列表信息，用于复选</td>
</tr>
</tbody>
</table>
<h2 id="打开通用选择人员界面" tabindex="-1"><a class="header-anchor" href="#打开通用选择人员界面" aria-hidden="true">#</a> 打开通用选择人员界面</h2>
<p>该接口打开通用的选择界面，此界面能选择组织内的雇员信息, 用户的星标联系人等。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>contact<span class="token punctuation">.</span><span class="token function">selectContacts</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  filterSenior<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  maxCount<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  selectedUsers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 已选择的users</span>
  selectedEmployees<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 已选择的employees</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>filterSenior</td>
<td>Number</td>
<td>1 表示过滤高管, 0 表示不过滤，默认为 1</td>
</tr>
<tr>
<td>maxCount</td>
<td>Number</td>
<td>选人最大数量, 最小为1, 默认不限制数量</td>
</tr>
<tr>
<td>selectedUsers</td>
<td>Array</td>
<td>回传已选人员，用于复选</td>
</tr>
<tr>
<td>selectedEmployees</td>
<td>Array</td>
<td>回传已选雇员，用于复选</td>
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
<td>user</td>
<td>所选用户</td>
</tr>
<tr>
<td>employee</td>
<td>所选雇员</td>
</tr>
</tbody>
</table>
<h2 id="获取手机通讯录" tabindex="-1"><a class="header-anchor" href="#获取手机通讯录" aria-hidden="true">#</a> 获取手机通讯录</h2>
<p>获取手机通讯录联系人的列表。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>首次访问会提示是否允许设备访问手机通讯录，请允许，否则无法获取通讯录信息。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>contact<span class="token punctuation">.</span><span class="token function">getMobileContacts</span><span class="token punctuation">(</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>返回的数据会以英文字母拆分：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"a"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token operator">:</span><span class="token string">"allin(联系人名称)"</span><span class="token punctuation">,</span> <span class="token string">"tel"</span><span class="token operator">:</span><span class="token string">"123456(联系方式)"</span><span class="token punctuation">}</span>
  <span class="token string">"b"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token operator">:</span><span class="token string">"ball(联系人名称)"</span><span class="token punctuation">,</span> <span class="token string">"tel"</span><span class="token operator">:</span><span class="token string">"135xxx(联系方式)"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token operator">:</span><span class="token string">"boy(联系人名称)"</span><span class="token punctuation">,</span> <span class="token string">"tel"</span><span class="token operator">:</span><span class="token string">"137xxx(联系方式)"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
