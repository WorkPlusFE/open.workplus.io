<template><h1 id="组织" tabindex="-1"><a class="header-anchor" href="#组织" aria-hidden="true">#</a> 组织</h1>
<h2 id="组织信息" tabindex="-1"><a class="header-anchor" href="#组织信息" aria-hidden="true">#</a> 组织信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>org_code<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>访问token</td>
</tr>
<tr>
<td>org_code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
</tbody>
</table>
<p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"组织id"</span><span class="token punctuation">,</span>
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"域标识"</span><span class="token punctuation">,</span>
    <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"组织标识(org_code)"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"根结点为CORP,其他节点为CORP或DEPT"</span><span class="token punctuation">,</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"组织路径"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"组织名称"</span><span class="token punctuation">,</span>
    <span class="token property">"en_name"</span><span class="token operator">:</span> <span class="token string">"组织英文名称"</span><span class="token punctuation">,</span>
    <span class="token property">"tw_name"</span><span class="token operator">:</span> <span class="token string">"组织繁体名称"</span><span class="token punctuation">,</span>
    <span class="token property">"logo"</span><span class="token operator">:</span> <span class="token string">"组织logo,媒体ID"</span><span class="token punctuation">,</span>
    <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"唯一编码"</span><span class="token punctuation">,</span>
    <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"拥有者userId"</span><span class="token punctuation">,</span>
    <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"拥有者userId"</span><span class="token punctuation">,</span>
    <span class="token property">"owner_name"</span><span class="token operator">:</span> <span class="token string">"拥有者"</span><span class="token punctuation">,</span>
    <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1534829681346</span><span class="token punctuation">,</span> <span class="token comment">// 创建时间,13位时间戳</span>
    <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1564998633361</span><span class="token punctuation">,</span> <span class="token comment">// 最后修改时间,13位时间戳</span>
    <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用禁用,false为有效组织</span>
    <span class="token property">"employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 当前节点雇员数</span>
    <span class="token property">"all_employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 总雇员数</span>
    <span class="token property">"employees"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="组织架构列表" tabindex="-1"><a class="header-anchor" href="#组织架构列表" aria-hidden="true">#</a> 组织架构列表</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET http://{host}:{port}/v1/admin/organizations/{code}/page-orgs?access_token={access_token}&amp;kw={kw}&amp;refresh_time={refresh_time}&amp;skip={skip}&amp;limit={limit}
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
<td>domain_id</td>
<td>String</td>
<td>Y</td>
<td>域信息</td>
</tr>
<tr>
<td>code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>kw</td>
<td>String</td>
<td>N</td>
<td>搜索条件</td>
</tr>
<tr>
<td>refresh_time</td>
<td>Long</td>
<td>N</td>
<td>更新时间,用于增量获取</td>
</tr>
<tr>
<td>skip</td>
<td>Integer</td>
<td>N</td>
<td>分页查询条件</td>
</tr>
<tr>
<td>limit</td>
<td>Integer</td>
<td>N</td>
<td>分页查询条件</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span>xxxx<span class="token operator">/</span>page<span class="token operator">-</span>orgs<span class="token operator">?</span>access_token<span class="token operator">=</span>xxxx<span class="token operator">&amp;</span>skip<span class="token operator">=</span><span class="token number">0</span><span class="token operator">&amp;</span>limit<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"total_count"</span><span class="token operator">:</span> <span class="token number">56</span><span class="token punctuation">,</span>
    <span class="token property">"records"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span>
        <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
        <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxxxx"</span><span class="token punctuation">,</span>
        <span class="token property">"parent_org_id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEPT"</span><span class="token punctuation">,</span>
        <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"bbbName"</span><span class="token punctuation">,</span>
        <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span>
        <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span>
        <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span>
        <span class="token property">"owner_name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span>
        <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1576578664410</span><span class="token punctuation">,</span>
        <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1576578664410</span><span class="token punctuation">,</span>
        <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"all_employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"employees"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="组织架构视图" tabindex="-1"><a class="header-anchor" href="#组织架构视图" aria-hidden="true">#</a> 组织架构视图</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>view<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>org_id<span class="token operator">=</span><span class="token punctuation">{</span>org_id<span class="token punctuation">}</span><span class="token operator">&amp;</span>employee_skip<span class="token operator">=</span><span class="token punctuation">{</span>employee_skip<span class="token punctuation">}</span><span class="token operator">&amp;</span>employee_limit<span class="token operator">=</span><span class="token punctuation">{</span>employee_limit<span class="token punctuation">}</span><span class="token operator">&amp;</span>org_skip<span class="token operator">=</span><span class="token punctuation">{</span>org_skip<span class="token punctuation">}</span><span class="token operator">&amp;</span>org_limit<span class="token operator">=</span><span class="token punctuation">{</span>org_limit<span class="token punctuation">}</span><span class="token operator">&amp;</span>counting<span class="token operator">=</span><span class="token punctuation">{</span>counting<span class="token punctuation">}</span>
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
<td>domain_id</td>
<td>String</td>
<td>Y</td>
<td>域信息</td>
</tr>
<tr>
<td>code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>org_id</td>
<td>String</td>
<td>N</td>
<td>节点ID,不传则查根节点</td>
</tr>
<tr>
<td>employee_skip</td>
<td>Integer</td>
<td>N</td>
<td>雇员分页查询条件</td>
</tr>
<tr>
<td>employee_limit</td>
<td>Integer</td>
<td>N</td>
<td>雇员分页查询条件</td>
</tr>
<tr>
<td>org_skip</td>
<td>Integer</td>
<td>N</td>
<td>组织分页查询条件</td>
</tr>
<tr>
<td>org_limit</td>
<td>Integer</td>
<td>N</td>
<td>组织分页查询条件</td>
</tr>
<tr>
<td>counting</td>
<td>Boolean</td>
<td>N</td>
<td>是否统计雇员树,默认true</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span>xxxxx<span class="token operator">/</span>view<span class="token operator">?</span>access_token<span class="token operator">=</span>xxxxx<span class="token operator">&amp;</span>org_id<span class="token operator">=</span>bbb<span class="token operator">&amp;</span>employee_skip<span class="token operator">=</span><span class="token number">0</span><span class="token operator">&amp;</span>employee_limit<span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;</span>org_skip<span class="token operator">=</span><span class="token number">0</span><span class="token operator">&amp;</span>org_limit<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
      <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"parent_org_id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span> 
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"部门11"</span><span class="token punctuation">,</span> 
      <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
      <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
      <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
      <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span> 
      <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"owner_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1536828491327</span><span class="token punctuation">,</span> 
      <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1559113350544</span><span class="token punctuation">,</span> 
      <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
      <span class="token property">"employee_count"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> 
      <span class="token property">"all_employee_count"</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> 
      <span class="token property">"parent_org_name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"directly_corp"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"O"</span><span class="token punctuation">,</span> 
        <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/"</span><span class="token punctuation">,</span> 
        <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token property">"employees"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"EMPLOYEE"</span><span class="token punctuation">,</span> 
          <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"display_name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"xxx@xxx.com"</span><span class="token punctuation">,</span> 
          <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ACTIVATED"</span><span class="token punctuation">,</span> 
          <span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"avatar"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
          <span class="token property">"senior"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
          <span class="token property">"locked"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
          <span class="token property">"employee_rank"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
          <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"tag_names"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"positions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
              <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
              <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
              <span class="token property">"employee_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
              <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
              <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span> 
              <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
              <span class="token property">"job_title"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
              <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
              <span class="token property">"primary"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
              <span class="token property">"chief"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
              <span class="token property">"display_nodes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
                  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
                  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
                  <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/"</span><span class="token punctuation">,</span> 
                  <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> 
                <span class="token punctuation">{</span>
                  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
                  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
                  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
                  <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span> 
                  <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span> 
              <span class="token property">"full_name_path"</span><span class="token operator">:</span> <span class="token string">"/xxx/xxx/"</span><span class="token punctuation">,</span> 
              <span class="token property">"org_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"data_schemas"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1554085163675</span><span class="token punctuation">,</span> 
          <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1590636295123</span><span class="token punctuation">,</span> 
          <span class="token property">"root_org_info"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
            <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> 
          <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"ccc"</span><span class="token punctuation">,</span> 
          <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"parent_org_id"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEPT"</span><span class="token punctuation">,</span> 
          <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/ccc/"</span><span class="token punctuation">,</span> 
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"部门1-1"</span><span class="token punctuation">,</span> 
          <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span> 
          <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> 
          <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"ccc"</span><span class="token punctuation">,</span> 
          <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"owner_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1537412001987</span><span class="token punctuation">,</span> 
          <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1537412001987</span><span class="token punctuation">,</span> 
          <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
          <span class="token property">"employee_count"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
          <span class="token property">"all_employee_count"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
          <span class="token property">"parent_org_name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
          <span class="token property">"directly_corp"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"O"</span><span class="token punctuation">,</span> 
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span> 
            <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> 
          <span class="token property">"employees"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"full_name_path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/ccc/"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"full_name_path"</span><span class="token operator">:</span> <span class="token string">"/aaaName/bbbName/"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br></div></div><h2 id="获取指定机构信息" tabindex="-1"><a class="header-anchor" href="#获取指定机构信息" aria-hidden="true">#</a> 获取指定机构信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>org_code<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>访问token</td>
</tr>
<tr>
<td>org_code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>Y</td>
<td>组织id</td>
</tr>
</tbody>
</table>
<p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"节点ID"</span><span class="token punctuation">,</span>
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"域"</span><span class="token punctuation">,</span>
    <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"组织code"</span><span class="token punctuation">,</span>
    <span class="token property">"parent_org_id"</span><span class="token operator">:</span> <span class="token string">"父节点ID"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"导入组1"</span><span class="token punctuation">,</span>
    <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"节点ID"</span><span class="token punctuation">,</span>
    <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"节点编号"</span><span class="token punctuation">,</span>
    <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"拥有者ID"</span><span class="token punctuation">,</span>
    <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"拥有者ID"</span><span class="token punctuation">,</span>
    <span class="token property">"owner_name"</span><span class="token operator">:</span> <span class="token string">"拥有者"</span><span class="token punctuation">,</span>
    <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1554085163677</span><span class="token punctuation">,</span> <span class="token comment">// 创建时间,13位时间戳</span>
    <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1555145213090</span><span class="token punctuation">,</span> <span class="token comment">// 修改时间,13位时间戳</span>
    <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用禁用,false为有效节点</span>
    <span class="token property">"employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 当前节点雇员数</span>
    <span class="token property">"all_employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 总雇员数</span>
    <span class="token property">"employees"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="根据-serialno-获取机构信息" tabindex="-1"><a class="header-anchor" href="#根据-serialno-获取机构信息" aria-hidden="true">#</a> 根据 serialNo 获取机构信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>serial<span class="token operator">/</span><span class="token punctuation">{</span>serialNo<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>domain_id</td>
<td>String</td>
<td>Y</td>
<td>域信息</td>
</tr>
<tr>
<td>code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>serialNo</td>
<td>String</td>
<td>Y</td>
<td>第三方序列号</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span>xxxx<span class="token operator">/</span>serial<span class="token operator">/</span>xxx<span class="token operator">?</span>access_token<span class="token operator">=</span>xxxx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"节点ID"</span><span class="token punctuation">,</span>
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"域"</span><span class="token punctuation">,</span>
    <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"组织code"</span><span class="token punctuation">,</span>
    <span class="token property">"parent_org_id"</span><span class="token operator">:</span> <span class="token string">"父节点ID"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"导入组1"</span><span class="token punctuation">,</span>
    <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">"serial_no"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
    <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"节点ID"</span><span class="token punctuation">,</span>
    <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"节点编号"</span><span class="token punctuation">,</span>
    <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"拥有者ID"</span><span class="token punctuation">,</span>
    <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"拥有者ID"</span><span class="token punctuation">,</span>
    <span class="token property">"owner_name"</span><span class="token operator">:</span> <span class="token string">"拥有者"</span><span class="token punctuation">,</span>
    <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1554085163677</span><span class="token punctuation">,</span> <span class="token comment">// 创建时间,13位时间戳</span>
    <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1555145213090</span><span class="token punctuation">,</span> <span class="token comment">// 修改时间,13位时间戳</span>
    <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用禁用,false为有效节点</span>
    <span class="token property">"employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 当前节点雇员数</span>
    <span class="token property">"all_employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 总雇员数</span>
    <span class="token property">"employees"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="新增机构信息" tabindex="-1"><a class="header-anchor" href="#新增机构信息" aria-hidden="true">#</a> 新增机构信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>访问token</td>
</tr>
<tr>
<td>org_code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>Y</td>
<td>节点类型,DEPT或者CORP</td>
</tr>
<tr>
<td>parent_path</td>
<td>String</td>
<td>N</td>
<td>父节点path</td>
</tr>
<tr>
<td>parent_id</td>
<td>String</td>
<td>N</td>
<td>父节点ID,与parent_path不能同时为空</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>Y</td>
<td>节点名称</td>
</tr>
<tr>
<td>logo</td>
<td>String</td>
<td>N</td>
<td>logo媒体ID</td>
</tr>
<tr>
<td>tel</td>
<td>String</td>
<td>N</td>
<td>电话</td>
</tr>
<tr>
<td>contact</td>
<td>String</td>
<td>N</td>
<td>联系人</td>
</tr>
<tr>
<td>sn</td>
<td>String</td>
<td>N</td>
<td>节点编号</td>
</tr>
<tr>
<td>serial_no</td>
<td>String</td>
<td>N</td>
<td>第三方序列号,唯一</td>
</tr>
<tr>
<td>sort_order</td>
<td>Integer</td>
<td>N</td>
<td>排序号</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"节点名"</span><span class="token punctuation">,</span> 
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
  <span class="token property">"parent_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"节点名"</span><span class="token punctuation">,</span> 
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
  <span class="token property">"parent_path"</span><span class="token operator">:</span> <span class="token string">"/节点名字1/节点名字2/"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// result</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="修改机构信息" tabindex="-1"><a class="header-anchor" href="#修改机构信息" aria-hidden="true">#</a> 修改机构信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>org_code<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>访问token</td>
</tr>
<tr>
<td>org_code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>Y</td>
<td>组织id</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>N</td>
<td>节点name</td>
</tr>
<tr>
<td>logo</td>
<td>String</td>
<td>N</td>
<td>节点logo</td>
</tr>
<tr>
<td>tel</td>
<td>String</td>
<td>N</td>
<td>节点tel</td>
</tr>
<tr>
<td>contact</td>
<td>String</td>
<td>N</td>
<td>节点联系人</td>
</tr>
<tr>
<td>serial_no</td>
<td>String</td>
<td>N</td>
<td>节点第三方序列号</td>
</tr>
<tr>
<td>sort_order</td>
<td>String</td>
<td>N</td>
<td>排序号</td>
</tr>
<tr>
<td>sn</td>
<td>String</td>
<td>N</td>
<td>节点编号</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>N</td>
<td>节点类型</td>
</tr>
<tr>
<td>new_parentId</td>
<td>String</td>
<td>N</td>
<td>父节点id</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"新名字"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// result</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="删除机构信息" tabindex="-1"><a class="header-anchor" href="#删除机构信息" aria-hidden="true">#</a> 删除机构信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">DELETE</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>org_code<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>访问token</td>
</tr>
<tr>
<td>org_code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>Y</td>
<td>组织id</td>
</tr>
</tbody>
</table>
<p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// result</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>错误返回值：</strong></p>
<table>
<thead>
<tr>
<th>status</th>
<th>message</th>
</tr>
</thead>
<tbody>
<tr>
<td>208507</td>
<td>组织下已存在雇员</td>
</tr>
<tr>
<td>208502</td>
<td>没有对应的组织</td>
</tr>
</tbody>
</table>
<h2 id="导入机构信息" tabindex="-1"><a class="header-anchor" href="#导入机构信息" aria-hidden="true">#</a> 导入机构信息</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>org_code<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">import</span><span class="token operator">-</span>orgs<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<p>字段与新增一致。</p>
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
<td>访问token</td>
</tr>
<tr>
<td>org_code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"CCC"</span><span class="token punctuation">,</span> 
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
    <span class="token property">"parent_path"</span><span class="token operator">:</span> <span class="token string">"AAA/BBB"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"DDD"</span><span class="token punctuation">,</span> 
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
    <span class="token property">"parent_path"</span><span class="token operator">:</span> <span class="token string">"AAA/BBB"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"successes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"AAA/BBB/CCC"</span><span class="token operator">:</span> <span class="token number">2699</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"failures"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"AAA/BBB/DDD"</span><span class="token operator">:</span> <span class="token string">"错误信息"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="组织架构树" tabindex="-1"><a class="header-anchor" href="#组织架构树" aria-hidden="true">#</a> 组织架构树</h2>
<p><em>不推荐使用!!</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>tree<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>org_id<span class="token operator">=</span><span class="token punctuation">{</span>org_id<span class="token punctuation">}</span>
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
<td>domain_id</td>
<td>String</td>
<td>Y</td>
<td>域信息</td>
</tr>
<tr>
<td>code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>org_id</td>
<td>String</td>
<td>N</td>
<td>节点ID,不传则查根节点</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>tree<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>token<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
    <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/"</span><span class="token punctuation">,</span> 
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"en_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"tw_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"logo"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
    <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
    <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
    <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1534829681346</span><span class="token punctuation">,</span> 
    <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1564998633361</span><span class="token punctuation">,</span> 
    <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
    <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
        <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
        <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
        <span class="token property">"parent_org_id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEPT"</span><span class="token punctuation">,</span> 
        <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span> 
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
        <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
        <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
        <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> 
        <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> 
        <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
        <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
        <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1576578664410</span><span class="token punctuation">,</span> 
        <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1576578664410</span><span class="token punctuation">,</span> 
        <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="组织架构列表-1" tabindex="-1"><a class="header-anchor" href="#组织架构列表-1" aria-hidden="true">#</a> 组织架构列表</h2>
<p><em>不推荐使用!!</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>list<span class="token operator">-</span>all<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>org_id<span class="token operator">=</span><span class="token punctuation">{</span>org_id<span class="token punctuation">}</span>
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
<td>domain_id</td>
<td>String</td>
<td>Y</td>
<td>域信息</td>
</tr>
<tr>
<td>code</td>
<td>String</td>
<td>Y</td>
<td>组织标识</td>
</tr>
<tr>
<td>org_id</td>
<td>String</td>
<td>N</td>
<td>节点ID,不传则查根节点</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>list<span class="token operator">-</span>all<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>token<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
      <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/"</span><span class="token punctuation">,</span> 
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"en_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"tw_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"logo"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
      <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
      <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> 
      <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"owner_name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
      <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1534829681346</span><span class="token punctuation">,</span> 
      <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1564998633361</span><span class="token punctuation">,</span> 
      <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
      <span class="token property">"employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
      <span class="token property">"all_employee_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
      <span class="token property">"employees"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
