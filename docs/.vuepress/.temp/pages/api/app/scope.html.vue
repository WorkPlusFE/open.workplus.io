<template><h1 id="应用范围" tabindex="-1"><a class="header-anchor" href="#应用范围" aria-hidden="true">#</a> 应用范围</h1>
<h2 id="获取应用范围" tabindex="-1"><a class="header-anchor" href="#获取应用范围" aria-hidden="true">#</a> 获取应用范围</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span><span class="token punctuation">{</span>appId<span class="token punctuation">}</span><span class="token operator">/</span>scope<span class="token operator">-</span>views<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>org_id<span class="token operator">=</span><span class="token punctuation">{</span>org_id<span class="token punctuation">}</span><span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token punctuation">{</span>source_type<span class="token punctuation">}</span>
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
<td>appId</td>
<td>String</td>
<td>Y</td>
<td>应用标识</td>
</tr>
<tr>
<td>org_id</td>
<td>String</td>
<td>N</td>
<td>组织标识</td>
</tr>
<tr>
<td>source_type</td>
<td>String</td>
<td>N</td>
<td>枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>92bc3faa<span class="token operator">-</span>12bd<span class="token operator">-</span>4afc<span class="token operator">-</span><span class="token number">9962</span><span class="token operator">-</span>01f2410f0bee<span class="token operator">/</span>scope<span class="token operator">-</span>views<span class="token operator">?</span>access_token<span class="token operator">=</span>ac2a8470c0fb4ad2a27edd7459c6c770<span class="token operator">&amp;</span>org_id<span class="token operator">=</span><span class="token number">312</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<details>
<summary>点击查看返回数据</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">312</span><span class="token punctuation">,</span> 
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/232/312/"</span><span class="token punctuation">,</span> 
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"研发中心(导入)"</span><span class="token punctuation">,</span> 
      <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">315</span><span class="token punctuation">,</span> 
          <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/232/312/315/"</span><span class="token punctuation">,</span> 
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"研发二部(导入)"</span><span class="token punctuation">,</span> 
          <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">313</span><span class="token punctuation">,</span> 
          <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/232/312/313/"</span><span class="token punctuation">,</span> 
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"研发一部(导入)"</span><span class="token punctuation">,</span> 
          <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></details>
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
<h2 id="应用管理员信息" tabindex="-1"><a class="header-anchor" href="#应用管理员信息" aria-hidden="true">#</a> 应用管理员信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span><span class="token punctuation">{</span>appId<span class="token punctuation">}</span><span class="token operator">/</span>admins<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token punctuation">{</span>source_type<span class="token punctuation">}</span>
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
<td>appId</td>
<td>String</td>
<td>Y</td>
<td>应用标识</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>N</td>
<td>雇员名称（支持模糊查询,名称、昵称、拼音、拼音首字母等）</td>
</tr>
<tr>
<td>source_type</td>
<td>String</td>
<td>N</td>
<td>枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>dafc2d03<span class="token operator">-</span><span class="token number">3991</span><span class="token operator">-</span>4de0<span class="token operator">-</span>91d6<span class="token operator">-</span>de3135c1fb4f<span class="token operator">/</span>admins<span class="token operator">?</span>access_token<span class="token operator">=</span>e62970d58f6a40c7b68040dabe50f678
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<details>
<summary>点击查看返回数据</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"records"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
        <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"85939199-6424-4f28-84d4-fce2aedf0e64"</span><span class="token punctuation">,</span> 
        <span class="token property">"display_name"</span><span class="token operator">:</span> <span class="token string">"XXX"</span><span class="token punctuation">,</span> 
        <span class="token property">"employee_type_id"</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span> 
        <span class="token property">"employee_type"</span><span class="token operator">:</span> <span class="token string">"正式员工"</span><span class="token punctuation">,</span> 
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">829</span><span class="token punctuation">,</span> 
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"XXX"</span><span class="token punctuation">,</span> 
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"EMPLOYEE"</span><span class="token punctuation">,</span> 
        <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span> 
        <span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token string">"53419de6c13a494b85187f20116338f1"</span><span class="token punctuation">,</span> 
        <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"lizj"</span><span class="token punctuation">,</span> 
        <span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"XXX"</span><span class="token punctuation">,</span> 
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ACTIVATED"</span><span class="token punctuation">,</span> 
        <span class="token property">"senior"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"MALE"</span><span class="token punctuation">,</span> 
        <span class="token property">"birthday"</span><span class="token operator">:</span> <span class="token number">1477612800000</span><span class="token punctuation">,</span> 
        <span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"zhijun"</span><span class="token punctuation">,</span> 
        <span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"zj"</span><span class="token punctuation">,</span> 
        <span class="token property">"more_info"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123@test.com"</span><span class="token punctuation">,</span> 
        <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">"expired"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">"root_org_info"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">144</span><span class="token punctuation">,</span> 
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"研发部"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">"positions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"employee_id"</span><span class="token operator">:</span> <span class="token number">829</span><span class="token punctuation">,</span> 
            <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token number">332</span><span class="token punctuation">,</span> 
            <span class="token property">"org_name"</span><span class="token operator">:</span> <span class="token string">"财经管理部"</span><span class="token punctuation">,</span> 
            <span class="token property">"corp_id"</span><span class="token operator">:</span> <span class="token number">144</span><span class="token punctuation">,</span> 
            <span class="token property">"corp_name"</span><span class="token operator">:</span> <span class="token string">"研发部"</span><span class="token punctuation">,</span> 
            <span class="token property">"job_title"</span><span class="token operator">:</span> <span class="token string">"测试"</span><span class="token punctuation">,</span> 
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/144/332/"</span><span class="token punctuation">,</span> 
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEPT"</span><span class="token punctuation">,</span> 
            <span class="token property">"primary"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
            <span class="token property">"chief"</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"total_counts"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div></details>
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
<h2 id="超级应用管理员信息" tabindex="-1"><a class="header-anchor" href="#超级应用管理员信息" aria-hidden="true">#</a> 超级应用管理员信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span><span class="token punctuation">{</span>appId<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">super</span><span class="token operator">-</span>admins<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token punctuation">{</span>source_type<span class="token punctuation">}</span>
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
<td>appId</td>
<td>String</td>
<td>Y</td>
<td>应用标识</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>N</td>
<td>雇员名称（支持模糊查询）</td>
</tr>
<tr>
<td>source_type</td>
<td>String</td>
<td>N</td>
<td>枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>dafc2d03<span class="token operator">-</span><span class="token number">3991</span><span class="token operator">-</span>4de0<span class="token operator">-</span>91d6<span class="token operator">-</span>de3135c1fb4f<span class="token operator">/</span><span class="token keyword">super</span><span class="token operator">-</span>admins<span class="token operator">?</span>access_token<span class="token operator">=</span>e62970d58f6a40c7b68040dabe50f678
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<details>
<summary>点击查看返回数据</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"records"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
        <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"85939199-6424-4f28-84d4-fce2aedf0e64"</span><span class="token punctuation">,</span> 
        <span class="token property">"display_name"</span><span class="token operator">:</span> <span class="token string">"XXX"</span><span class="token punctuation">,</span> 
        <span class="token property">"employee_type_id"</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span> 
        <span class="token property">"employee_type"</span><span class="token operator">:</span> <span class="token string">"正式员工"</span><span class="token punctuation">,</span> 
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">829</span><span class="token punctuation">,</span> 
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"XXX"</span><span class="token punctuation">,</span> 
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"EMPLOYEE"</span><span class="token punctuation">,</span> 
        <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span> 
        <span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token string">"53419de6c13a494b85187f20116338f1"</span><span class="token punctuation">,</span> 
        <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"lizj"</span><span class="token punctuation">,</span> 
        <span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"XXX"</span><span class="token punctuation">,</span> 
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ACTIVATED"</span><span class="token punctuation">,</span> 
        <span class="token property">"senior"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"MALE"</span><span class="token punctuation">,</span> 
        <span class="token property">"birthday"</span><span class="token operator">:</span> <span class="token number">1477612800000</span><span class="token punctuation">,</span> 
        <span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"zhijun"</span><span class="token punctuation">,</span> 
        <span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"zj"</span><span class="token punctuation">,</span> 
        <span class="token property">"more_info"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123@test.com"</span><span class="token punctuation">,</span> 
        <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">"expired"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">"root_org_info"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">144</span><span class="token punctuation">,</span> 
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"研发部"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">"positions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"employee_id"</span><span class="token operator">:</span> <span class="token number">829</span><span class="token punctuation">,</span> 
            <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token number">332</span><span class="token punctuation">,</span> 
            <span class="token property">"org_name"</span><span class="token operator">:</span> <span class="token string">"财经管理部"</span><span class="token punctuation">,</span> 
            <span class="token property">"corp_id"</span><span class="token operator">:</span> <span class="token number">144</span><span class="token punctuation">,</span> 
            <span class="token property">"corp_name"</span><span class="token operator">:</span> <span class="token string">"研发部"</span><span class="token punctuation">,</span> 
            <span class="token property">"job_title"</span><span class="token operator">:</span> <span class="token string">"测试"</span><span class="token punctuation">,</span> 
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/144/332/"</span><span class="token punctuation">,</span> 
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEPT"</span><span class="token punctuation">,</span> 
            <span class="token property">"primary"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
            <span class="token property">"chief"</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"total_counts"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div></details>
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
