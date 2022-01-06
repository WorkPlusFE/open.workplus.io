<template><h1 id="模板消息" tabindex="-1"><a class="header-anchor" href="#模板消息" aria-hidden="true">#</a> 模板消息</h1>
<h2 id="获取模板列表" tabindex="-1"><a class="header-anchor" href="#获取模板列表" aria-hidden="true">#</a> 获取模板列表</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>kw<span class="token operator">=</span><span class="token punctuation">{</span>kw<span class="token punctuation">}</span><span class="token operator">&amp;</span>skip<span class="token operator">=</span><span class="token punctuation">{</span>skip<span class="token punctuation">}</span><span class="token operator">&amp;</span>limit<span class="token operator">=</span><span class="token punctuation">{</span>limit<span class="token punctuation">}</span>
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
<td>kw</td>
<td>String</td>
<td>N</td>
<td>关键字查询,检索模板标题,tags</td>
</tr>
<tr>
<td>skip</td>
<td>int</td>
<td>N</td>
<td>分页参数,默认值0</td>
</tr>
<tr>
<td>limit</td>
<td>int</td>
<td>N</td>
<td>分页参数,默认值10</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token number">9e37</span>bbc45be34cd8be8bc3fa31149b88
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<details>
<summary>点击查看返回数据</summary>
<p>::: v-pre</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"total_count"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
    <span class="token property">"records"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"32790e3d-2ce2-45ad-b9c2-c562f39882c3"</span><span class="token punctuation">,</span> 
        <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
        <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"85939199-6424-4f28-84d4-fce2aedf0e64"</span><span class="token punctuation">,</span> 
        <span class="token property">"app_id"</span><span class="token operator">:</span> <span class="token string">"DEFAULT"</span><span class="token punctuation">,</span> 
        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"标题"</span><span class="token punctuation">,</span> 
        <span class="token property">"sample"</span><span class="token operator">:</span> <span class="token string">"消息示例"</span><span class="token punctuation">,</span> 
        <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span><span class="token punctuation">,</span> 
        <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1502336857426</span><span class="token punctuation">,</span> 
        <span class="token property">"refresh_time"</span><span class="token operator">:</span> <span class="token number">1502336857426</span><span class="token punctuation">,</span> 
        <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"查看详情"</span><span class="token punctuation">,</span> 
            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> 
          <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"投诉"</span><span class="token punctuation">,</span> 
            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"我是第一行:{{data1.DATA}}"</span><span class="token punctuation">,</span> 
              <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"2-1"</span><span class="token punctuation">,</span> 
              <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"right"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> 
            <span class="token punctuation">{</span>
              <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"2-2"</span><span class="token punctuation">,</span> 
              <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"left"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"第三行信息"</span><span class="token punctuation">,</span> 
              <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>:::</p>
</details>
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
<h2 id="新增模板" tabindex="-1"><a class="header-anchor" href="#新增模板" aria-hidden="true">#</a> 新增模板</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>app_id<span class="token operator">=</span><span class="token punctuation">{</span>app_id<span class="token punctuation">}</span><span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token punctuation">{</span>source_type<span class="token punctuation">}</span>
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
<p><strong>请求参数：</strong>
::: v-pre</p>
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
<td>app_id</td>
<td>String</td>
<td>Y</td>
<td>应用标识</td>
</tr>
<tr>
<td>source_type</td>
<td>String</td>
<td>N</td>
<td>枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV</td>
</tr>
<tr>
<td>tags</td>
<td>String</td>
<td>N</td>
<td>标签信息,用于检索</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>N</td>
<td>模板标题</td>
</tr>
<tr>
<td>actions</td>
<td>String</td>
<td>N</td>
<td>模板动作,name为显示名称,value为点击动作,格式请参考样例</td>
</tr>
<tr>
<td>contents</td>
<td>String</td>
<td>N</td>
<td>模板内容,格式请参考样例</td>
</tr>
<tr>
<td>contents.align</td>
<td>String</td>
<td>N</td>
<td>对其方式: left/right/center</td>
</tr>
<tr>
<td>contents.content</td>
<td>String</td>
<td>N</td>
<td>变量格式为:{XXX.DATA}}&quot;,其中XXX为自定义变量名</td>
</tr>
<tr>
<td>:::</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>请求示例：</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token number">9e37</span>bbc45be34cd8be8bc3fa31149b88<span class="token operator">&amp;</span>app_id<span class="token operator">=</span>dafc2d03<span class="token operator">-</span><span class="token number">3991</span><span class="token operator">-</span><span class="token number">4</span>de0<span class="token operator">-</span><span class="token number">91</span>d6<span class="token operator">-</span>de3135c1fb4f<span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token constant">NATIVE</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>::: v-pre</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"接口模板2"</span><span class="token punctuation">,</span> 
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">"标签信息"</span><span class="token punctuation">,</span> 
  <span class="token property">"sample"</span><span class="token operator">:</span> <span class="token string">"消息示例"</span><span class="token punctuation">,</span> 
  <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"查看详情"</span><span class="token punctuation">,</span> 
      <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"投诉"</span><span class="token punctuation">,</span> 
      <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"我是第一行:{{data1.DATA}}"</span><span class="token punctuation">,</span> 
        <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>:::</p>
<p><strong>返回数据：</strong></p>
<details>
<summary>点击查看返回数据</summary>
<p>::: v-pre</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"86007b6c-5cd1-4a9d-a5a6-f85ba8fdd03f"</span><span class="token punctuation">,</span> 
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
    <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"85939199-6424-4f28-84d4-fce2aedf0e64"</span><span class="token punctuation">,</span> 
    <span class="token property">"app_id"</span><span class="token operator">:</span> <span class="token string">"dafc2d03-3991-4de0-91d6-de3135c1fb4f"</span><span class="token punctuation">,</span> 
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEFAULT"</span><span class="token punctuation">,</span> 
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"接口模板2"</span><span class="token punctuation">,</span> 
    <span class="token property">"sample"</span><span class="token operator">:</span> <span class="token string">"消息示例"</span><span class="token punctuation">,</span> 
    <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"dafc2d03-3991-4de0-91d6-de3135c1fb4f"</span><span class="token punctuation">,</span> 
    <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"refresh_time"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"查看详情"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"投诉"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"我是第一行:{{data1.DATA}}"</span><span class="token punctuation">,</span> 
          <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">"标签信息"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>:::</p>
</details>
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
<h2 id="修改模板" tabindex="-1"><a class="header-anchor" href="#修改模板" aria-hidden="true">#</a> 修改模板</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">/</span><span class="token punctuation">{</span>templateId<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>app_id<span class="token operator">=</span><span class="token punctuation">{</span>app_id<span class="token punctuation">}</span><span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token punctuation">{</span>source_type<span class="token punctuation">}</span>
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
<p>::: v-pre</p>
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
<td>templateId</td>
<td>String</td>
<td>Y</td>
<td>模板标识</td>
</tr>
<tr>
<td>app_id</td>
<td>String</td>
<td>Y</td>
<td>应用标识</td>
</tr>
<tr>
<td>source_type</td>
<td>String</td>
<td>N</td>
<td>枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV</td>
</tr>
<tr>
<td>tags</td>
<td>String</td>
<td>N</td>
<td>标签信息,用于检索</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>N</td>
<td>模板标题</td>
</tr>
<tr>
<td>actions</td>
<td>String</td>
<td>N</td>
<td>模板动作,name为显示名称,value为点击动作,格式请参考样例</td>
</tr>
<tr>
<td>contents</td>
<td>String</td>
<td>N</td>
<td>模板内容,格式请参考样例</td>
</tr>
<tr>
<td>contents.align</td>
<td>String</td>
<td>N</td>
<td>对其方式:left/right/center</td>
</tr>
<tr>
<td>contents.content</td>
<td>String</td>
<td>N</td>
<td>变量格式固定为:{{data1.DATA}}</td>
</tr>
<tr>
<td>:::</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">/</span>a624d18d<span class="token operator">-</span><span class="token number">98</span>a3<span class="token operator">-</span><span class="token number">4</span>bec<span class="token operator">-</span>a854<span class="token operator">-</span>b279d260b478<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token number">9e37</span>bbc45be34cd8be8bc3fa31149b88
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>::: v-pre</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"接口模板3"</span><span class="token punctuation">,</span> 
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">"标签信息"</span><span class="token punctuation">,</span> 
  <span class="token property">"sample"</span><span class="token operator">:</span> <span class="token string">"消息示例"</span><span class="token punctuation">,</span> 
  <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"查看详情"</span><span class="token punctuation">,</span> 
      <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"投诉"</span><span class="token punctuation">,</span> 
      <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"我是第一行:{{data1.DATA}}"</span><span class="token punctuation">,</span> 
        <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>:::</p>
<p><strong>返回数据：</strong></p>
<details>
<summary>点击查看返回数据</summary>
<p>::: v-pre</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"86007b6c-5cd1-4a9d-a5a6-f85ba8fdd03f"</span><span class="token punctuation">,</span> 
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
    <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"85939199-6424-4f28-84d4-fce2aedf0e64"</span><span class="token punctuation">,</span> 
    <span class="token property">"app_id"</span><span class="token operator">:</span> <span class="token string">"dafc2d03-3991-4de0-91d6-de3135c1fb4f"</span><span class="token punctuation">,</span> 
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEFAULT"</span><span class="token punctuation">,</span> 
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"接口模板3"</span><span class="token punctuation">,</span> 
    <span class="token property">"sample"</span><span class="token operator">:</span> <span class="token string">"消息示例"</span><span class="token punctuation">,</span> 
    <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"dafc2d03-3991-4de0-91d6-de3135c1fb4f"</span><span class="token punctuation">,</span> 
    <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"refresh_time"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"查看详情"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"投诉"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"我是第一行:`{{data1.DATA}}`"</span><span class="token punctuation">,</span> 
          <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">"标签信息"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>:::</p>
</details>
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
<h2 id="获取模板详情" tabindex="-1"><a class="header-anchor" href="#获取模板详情" aria-hidden="true">#</a> 获取模板详情</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">/</span><span class="token punctuation">{</span>templateId<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<p>::: v-pre</p>
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
<td>templateId</td>
<td>String</td>
<td>Y</td>
<td>模板标识</td>
</tr>
<tr>
<td>appId</td>
<td>String</td>
<td>Y</td>
<td>应用标识</td>
</tr>
<tr>
<td>source_type</td>
<td>String</td>
<td>N</td>
<td>枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV</td>
</tr>
<tr>
<td>category_id</td>
<td>String</td>
<td>N</td>
<td>模板分类标识,可为空</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>N</td>
<td>模板标题</td>
</tr>
<tr>
<td>actions</td>
<td>String</td>
<td>N</td>
<td>模板动作,name为显示名称,value为点击动作,格式请参考样例</td>
</tr>
<tr>
<td>contents</td>
<td>String</td>
<td>N</td>
<td>模板内容,格式请参考样例</td>
</tr>
<tr>
<td>contents.align</td>
<td>String</td>
<td>N</td>
<td>对其方式:left/right/center</td>
</tr>
<tr>
<td>contents.content</td>
<td>String</td>
<td>N</td>
<td>变量格式固定为:{{data1.DATA}}</td>
</tr>
<tr>
<td>:::</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>templates<span class="token operator">/</span>a624d18d<span class="token operator">-</span><span class="token number">98</span>a3<span class="token operator">-</span><span class="token number">4</span>bec<span class="token operator">-</span>a854<span class="token operator">-</span>b279d260b478<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token number">9e37</span>bbc45be34cd8be8bc3fa31149b88
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<details>
<summary>点击查看返回数据</summary>
<p>::: v-pre</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"86007b6c-5cd1-4a9d-a5a6-f85ba8fdd03f"</span><span class="token punctuation">,</span> 
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span> 
    <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"85939199-6424-4f28-84d4-fce2aedf0e64"</span><span class="token punctuation">,</span> 
    <span class="token property">"app_id"</span><span class="token operator">:</span> <span class="token string">"dafc2d03-3991-4de0-91d6-de3135c1fb4f"</span><span class="token punctuation">,</span> 
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEFAULT"</span><span class="token punctuation">,</span> 
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"接口模板3"</span><span class="token punctuation">,</span> 
    <span class="token property">"sample"</span><span class="token operator">:</span> <span class="token string">"消息示例"</span><span class="token punctuation">,</span> 
    <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"dafc2d03-3991-4de0-91d6-de3135c1fb4f"</span><span class="token punctuation">,</span> 
    <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"refresh_time"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"查看详情"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"投诉"</span><span class="token punctuation">,</span> 
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"https://baidu.com"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"contents"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"我是第一行:{{data1.DATA}}"</span><span class="token punctuation">,</span> 
          <span class="token property">"align"</span><span class="token operator">:</span> <span class="token string">"center"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">"标签信息"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>:::</p>
</details>
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
<h2 id="模板消息推送" tabindex="-1"><a class="header-anchor" href="#模板消息推送" aria-hidden="true">#</a> 模板消息推送</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>mbox<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>type</td>
<td>String</td>
<td>Y</td>
<td>消息类型,模板消息类型固定为template</td>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>模板消息：</strong></p>
<details>
<summary>点击查看模板消息</summary>
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
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"client_ids"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"a86e83a26be44eb59806901cc8be5d5c"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"ANDROID"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></details>
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
<details>
<summary>点击查看返回示例</summary>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details>
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
<tr>
<td>202012</td>
<td>没有对应的雇员</td>
<td>没有对应的雇员</td>
</tr>
</tbody>
</table>
</template>
