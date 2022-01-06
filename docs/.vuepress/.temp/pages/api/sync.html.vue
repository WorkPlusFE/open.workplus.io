<template><h1 id="账号同步" tabindex="-1"><a class="header-anchor" href="#账号同步" aria-hidden="true">#</a> 账号同步</h1>
<h2 id="组织" tabindex="-1"><a class="header-anchor" href="#组织" aria-hidden="true">#</a> 组织</h2>
<h3 id="组织导入" tabindex="-1"><a class="header-anchor" href="#组织导入" aria-hidden="true">#</a> 组织导入</h3>
<p>注意，组织导入的时候，要先把组织层级排序下，低层级的要先进行导入。如<code>AAA</code>，<code>AAA/BBB</code>。要先把<code>AAA</code>导入再进行<code>AAA/BBB</code>导入，否则会出现根组织找不到的问题。</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"测试部"</span><span class="token punctuation">,</span> 
        <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"00010122"</span><span class="token punctuation">,</span> 
        <span class="token property">"serial_no"</span><span class="token operator">:</span> <span class="token string">"00010122"</span><span class="token punctuation">,</span> 
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"DEPT"</span><span class="token punctuation">,</span> 
        <span class="token property">"parent_path"</span><span class="token operator">:</span> <span class="token string">"恒拓高科/地产集团"</span><span class="token punctuation">,</span> 
        <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"临高合作地产"</span><span class="token punctuation">,</span> 
        <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"00010124"</span><span class="token punctuation">,</span> 
        <span class="token property">"serial_no"</span><span class="token operator">:</span> <span class="token string">"00010124"</span><span class="token punctuation">,</span> 
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
        <span class="token property">"parent_path"</span><span class="token operator">:</span> <span class="token string">"恒拓高科/地产集团"</span><span class="token punctuation">,</span> 
        <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"successes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"恒拓高科/地产集团/测试部"</span><span class="token operator">:</span> <span class="token number">2699</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"failures"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"恒拓高科/地产集团/临高合作地产"</span><span class="token operator">:</span> <span class="token number">2700</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="组织删除" tabindex="-1"><a class="header-anchor" href="#组织删除" aria-hidden="true">#</a> 组织删除</h3>
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
<h3 id="组织架构列表" tabindex="-1"><a class="header-anchor" href="#组织架构列表" aria-hidden="true">#</a> 组织架构列表</h3>
<p><em>不推荐使用!</em></p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="雇员" tabindex="-1"><a class="header-anchor" href="#雇员" aria-hidden="true">#</a> 雇员</h2>
<h3 id="雇员列表" tabindex="-1"><a class="header-anchor" href="#雇员列表" aria-hidden="true">#</a> 雇员列表</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>employees<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>请求参数：</strong></p>
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
<td>type</td>
<td>String</td>
<td>N</td>
<td>默认值为&quot;id&quot;,为&quot;username&quot;时,query为用户名查询</td>
</tr>
<tr>
<td>query</td>
<td>String</td>
<td>N</td>
<td>查询条件</td>
</tr>
<tr>
<td>path</td>
<td>String</td>
<td>N</td>
<td>组织路径,非空时, 查该路径下, 符合query查询条件的雇员</td>
</tr>
<tr>
<td>matching</td>
<td>boolean</td>
<td>N</td>
<td>为true时, 根据type类型不同, 按<code>,</code>隔开查雇员列表, 为false时, 模糊查询该机构下的雇员信息</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<ol>
<li>根据userid批量查询雇员信息</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>employees<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>matching<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>query<span class="token operator">=</span>userId1<span class="token punctuation">,</span>userId2<span class="token punctuation">,</span>userId3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>根据username批量查询雇员信息</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>employees<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>matching<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>type<span class="token operator">=</span>username<span class="token operator">&amp;</span>query<span class="token operator">=</span>username1<span class="token punctuation">,</span>username2<span class="token punctuation">,</span>username3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3">
<li>指定组织节点查询雇员信息</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>employees<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>org_id<span class="token operator">=</span><span class="token number">999</span><span class="token operator">&amp;</span>recursion<span class="token operator">=</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4">
<li>指定路径查询雇员信息,path每个节点均为为orgId,query匹配雇员名</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>employees<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>path<span class="token operator">=</span><span class="token operator">/</span><span class="token number">111</span><span class="token operator">/</span><span class="token number">222</span><span class="token operator">/</span><span class="token number">333</span><span class="token operator">&amp;</span>query<span class="token operator">=</span>aaa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<details class="custom-container details"><summary>点击查看响应数据</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">// 雇员ID</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"EMPLOYEE"</span><span class="token punctuation">,</span> <span class="token comment">// 雇员类型,固定值</span>
      <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token comment">// 域标识</span>
      <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>  <span class="token comment">//组织标识</span>
      <span class="token property">"display_name"</span><span class="token operator">:</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token comment">//名称</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token comment">// 名称</span>
      <span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token comment">//拼音</span>
      <span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"ls"</span><span class="token punctuation">,</span> <span class="token comment">//拼音首字母</span>
      <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"MALE"</span><span class="token punctuation">,</span> <span class="token comment">//姓名</span>
      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"1231414324@qq.com"</span><span class="token punctuation">,</span> <span class="token comment">//邮箱</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ACTIVATED"</span><span class="token punctuation">,</span> <span class="token comment">//状态,已激活</span>
      <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"IMPL00001"</span><span class="token punctuation">,</span> <span class="token comment">// 工号</span>
      <span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token comment">// 用户ID</span>
      <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"****"</span><span class="token punctuation">,</span> <span class="token comment">// 账号</span>
      <span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token comment">// 昵称</span>
      <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span> <span class="token comment">//排序号</span>
      <span class="token property">"senior"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否高管</span>
      <span class="token property">"locked"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否离职</span>
      <span class="token property">"employee_rank"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//职级ID</span>
      <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">1</span> <span class="token comment">// 雇员标签</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"tag_names"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"分组1-标签1"</span> <span class="token comment">//标签名称</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"positions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"xxxxxx"</span><span class="token punctuation">,</span> <span class="token comment">//职位ID</span>
          <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token comment">//域标识</span>
          <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">//组织标识</span>
          <span class="token property">"employee_id"</span><span class="token operator">:</span> <span class="token string">"fdf82464bba34dc5a86f7af9ee20b3db"</span><span class="token punctuation">,</span> <span class="token comment">//雇员ID</span>
          <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token comment">// 组织节点ID</span>
          <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/abc/"</span><span class="token punctuation">,</span> <span class="token comment">//组织path</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> 
          <span class="token property">"job_title"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">// 职位</span>
          <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>  <span class="token comment">// 组织层级</span>
          <span class="token property">"primary"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否主职位</span>
          <span class="token property">"chief"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">// 是否首要职位</span>
          <span class="token property">"display_nodes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> <span class="token comment">//节点ID</span>
              <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">//节点名称</span>
              <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> <span class="token comment">//节点类型</span>
              <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/"</span><span class="token punctuation">,</span> <span class="token comment">//节点path</span>
              <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//是否显示</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> 
            <span class="token punctuation">{</span>
              <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token comment">//节点ID</span>
              <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">//节点名称</span>
              <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CORP"</span><span class="token punctuation">,</span> <span class="token comment">//节点类型</span>
              <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/abc/"</span><span class="token punctuation">,</span> <span class="token comment">//节点path</span>
              <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//是否显示</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"full_name_path"</span><span class="token operator">:</span> <span class="token string">"/xxxx/xxxx/"</span><span class="token punctuation">,</span> <span class="token comment">//中文全路径</span>
          <span class="token property">"org_name"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span> <span class="token comment">//节点名称</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"data_schemas"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">//域标识</span>
          <span class="token property">"org_code"</span><span class="token operator">:</span> <span class="token string">"xxxxx"</span><span class="token punctuation">,</span> <span class="token comment">//组织标识</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"xx"</span><span class="token punctuation">,</span> <span class="token comment">//ID</span>
          <span class="token property">"property"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token comment">//名称</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"TEXT"</span><span class="token punctuation">,</span> <span class="token comment">//类型</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token comment">//显示名称</span>
          <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span> <span class="token comment">//显示昵称</span>
          <span class="token property">"en_alias"</span><span class="token operator">:</span> <span class="token string">"Name"</span><span class="token punctuation">,</span> <span class="token comment">//英文昵称</span>
          <span class="token property">"tw_alias"</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span> <span class="token comment">//繁体昵称</span>
          <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
          <span class="token property">"min"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span> 
          <span class="token property">"max"</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span> 
          <span class="token property">"visible_range"</span><span class="token operator">:</span> <span class="token string">"ALL"</span><span class="token punctuation">,</span> <span class="token comment">//可见范围</span>
          <span class="token property">"ops_range"</span><span class="token operator">:</span> <span class="token string">"FINAL"</span><span class="token punctuation">,</span> <span class="token comment">//操作类型</span>
          <span class="token property">"opsable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否可操作</span>
          <span class="token property">"privacy"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">//是否隐私字段</span>
          <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token comment">// 排序</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
      <span class="token property">"created"</span><span class="token operator">:</span> <span class="token number">1539154556491</span><span class="token punctuation">,</span> <span class="token comment">//创建时间</span>
      <span class="token property">"last_modified"</span><span class="token operator">:</span> <span class="token number">1591095956291</span><span class="token punctuation">,</span> <span class="token comment">//修改时间</span>
      <span class="token property">"root_org_info"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span> <span class="token comment">//根节点ID</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxxxxx"</span><span class="token punctuation">,</span> <span class="token comment">//根节点名称</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"O"</span><span class="token punctuation">,</span> <span class="token comment">//根节点类型</span>
        <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/zcQ7KReg0Xe7sfCI5nZvkY/"</span><span class="token punctuation">,</span> <span class="token comment">//根节点路径</span>
        <span class="token property">"display"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 是否显示</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token property">"platforms"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br></div></div></details>
<h3 id="雇员导入-更新" tabindex="-1"><a class="header-anchor" href="#雇员导入-更新" aria-hidden="true">#</a> 雇员导入/更新</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">import</span><span class="token operator">-</span>employees<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<details class="custom-container details"><summary>查看所有请求参数</summary>
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
<td>name</td>
<td>String</td>
<td>Y</td>
<td>雇员名</td>
</tr>
<tr>
<td>en_name</td>
<td>String</td>
<td>N</td>
<td>雇员名</td>
</tr>
<tr>
<td>mobile</td>
<td>String</td>
<td>N</td>
<td>手机号</td>
</tr>
<tr>
<td>email</td>
<td>String</td>
<td>N</td>
<td>邮件</td>
</tr>
<tr>
<td>extension_id</td>
<td>String</td>
<td>N</td>
<td>第三方序列号</td>
</tr>
<tr>
<td>serial_no</td>
<td>String</td>
<td>N</td>
<td>第三方序列号,优先取extension_id</td>
</tr>
<tr>
<td>sort_order</td>
<td>Integer</td>
<td>N</td>
<td>排序号</td>
</tr>
<tr>
<td>senior</td>
<td>Boolean</td>
<td>N</td>
<td>是否高管</td>
</tr>
<tr>
<td>sn</td>
<td>String</td>
<td>N</td>
<td>工号</td>
</tr>
<tr>
<td>province</td>
<td>String</td>
<td>N</td>
<td>省份</td>
</tr>
<tr>
<td>city</td>
<td>String</td>
<td>N</td>
<td>城市</td>
</tr>
<tr>
<td>tel</td>
<td>String</td>
<td>N</td>
<td>座机号</td>
</tr>
<tr>
<td>fax</td>
<td>String</td>
<td>N</td>
<td>传真号</td>
</tr>
<tr>
<td>workPhone</td>
<td>String</td>
<td>N</td>
<td>工作电话</td>
</tr>
<tr>
<td>otherPhone</td>
<td>String</td>
<td>N</td>
<td>其他号码</td>
</tr>
<tr>
<td>otherEmail</td>
<td>String</td>
<td>N</td>
<td>其他邮箱</td>
</tr>
<tr>
<td>industry</td>
<td>String</td>
<td>N</td>
<td>行业</td>
</tr>
<tr>
<td>region</td>
<td>String</td>
<td>N</td>
<td>区域</td>
</tr>
<tr>
<td>label</td>
<td>String</td>
<td>N</td>
<td>标签</td>
</tr>
<tr>
<td>extended1</td>
<td>String</td>
<td>N</td>
<td>扩展字段1</td>
</tr>
<tr>
<td>extended2</td>
<td>String</td>
<td>N</td>
<td>扩展字段2</td>
</tr>
<tr>
<td>extended3</td>
<td>String</td>
<td>N</td>
<td>扩展字段3</td>
</tr>
<tr>
<td>username</td>
<td>String</td>
<td>Y</td>
<td>账号</td>
</tr>
<tr>
<td>source_id</td>
<td>String</td>
<td>N</td>
<td>认证源</td>
</tr>
<tr>
<td>user_id</td>
<td>String</td>
<td>N</td>
<td>用户ID</td>
</tr>
<tr>
<td>id_card</td>
<td>String</td>
<td>N</td>
<td>身份证号码</td>
</tr>
<tr>
<td>password</td>
<td>String</td>
<td>N</td>
<td>用户密码(仅用户新增时使用)</td>
</tr>
<tr>
<td>gender</td>
<td>String</td>
<td>N</td>
<td>性别</td>
</tr>
<tr>
<td>birthday</td>
<td>Long</td>
<td>N</td>
<td>生日,13为时间戳</td>
</tr>
<tr>
<td>source_credentials</td>
<td>String</td>
<td>N</td>
<td>第三方认证码</td>
</tr>
<tr>
<td>source_identifiers</td>
<td>Map[String, String]</td>
<td>N</td>
<td>第三方认证信息</td>
</tr>
<tr>
<td>tags</td>
<td>Seq[Long]</td>
<td>N</td>
<td>雇员标签,优先读取</td>
</tr>
<tr>
<td>tag_names</td>
<td>Seq[Tag]</td>
<td>N</td>
<td>雇员标签信息</td>
</tr>
<tr>
<td>Tag.group</td>
<td>String</td>
<td>Y</td>
<td>标签分组</td>
</tr>
<tr>
<td>Tag.tag</td>
<td>String</td>
<td>Y</td>
<td>标签名称</td>
</tr>
<tr>
<td>Tag.group_property</td>
<td>String</td>
<td>N</td>
<td>标签分组标识</td>
</tr>
<tr>
<td>Tag.tag_property</td>
<td>String</td>
<td>N</td>
<td>标签标识</td>
</tr>
<tr>
<td>rank</td>
<td>Long</td>
<td>N</td>
<td>雇员职级,优先读取</td>
</tr>
<tr>
<td>employee_rank_name</td>
<td>String</td>
<td>N</td>
<td>雇员职级</td>
</tr>
<tr>
<td>positions</td>
<td>Seq[Position]</td>
<td>Y</td>
<td>职位</td>
</tr>
<tr>
<td>Position.org_id</td>
<td>Long</td>
<td>N</td>
<td>节点ID</td>
</tr>
<tr>
<td>Position.org_path</td>
<td>String</td>
<td>N</td>
<td>节点path,与org_id不能同时为空</td>
</tr>
<tr>
<td>Position.job_title</td>
<td>String</td>
<td>N</td>
<td>职位</td>
</tr>
<tr>
<td>Position.primary</td>
<td>Boolean</td>
<td>N</td>
<td>是否主职位</td>
</tr>
<tr>
<td>Position.chief</td>
<td>Boolean</td>
<td>N</td>
<td>是否首要</td>
</tr>
<tr>
<td>Position.source_type</td>
<td>String</td>
<td>N</td>
<td>职位分组</td>
</tr>
<tr>
<td>properties</td>
<td>Seq[Property]</td>
<td>N</td>
<td>雇员扩展字段</td>
</tr>
<tr>
<td>Property.data_schema_id</td>
<td>Long</td>
<td>Y</td>
<td>扩展ID</td>
</tr>
<tr>
<td>Property.values</td>
<td>Seq[String]</td>
<td>Y</td>
<td>扩展内容</td>
</tr>
<tr>
<td>ops</td>
<td>String</td>
<td>N</td>
<td>默认新增/更新,为REMOVE为删除雇员</td>
</tr>
</tbody>
</table>
</details>
<p><strong>请求示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"birthDay"</span><span class="token operator">:</span> <span class="token number">773596800000</span><span class="token punctuation">,</span> 
    <span class="token property">"hireDay"</span><span class="token operator">:</span> <span class="token number">1612800000000</span><span class="token punctuation">,</span> 
    <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"male"</span><span class="token punctuation">,</span> 
    <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"15207710870"</span><span class="token punctuation">,</span> 
    <span class="token property">"positions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"chief"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">"org_path"</span><span class="token operator">:</span> <span class="token string">"恒拓高科/租售部"</span><span class="token punctuation">,</span> 
        <span class="token property">"job_title"</span><span class="token operator">:</span> <span class="token string">"租售主管"</span><span class="token punctuation">,</span> 
        <span class="token property">"primary"</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">"source_type"</span><span class="token operator">:</span> <span class="token string">"LDAP"</span><span class="token punctuation">,</span> 
    <span class="token property">"ops"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token property">"grade"</span><span class="token operator">:</span> <span class="token string">"租售主管"</span><span class="token punctuation">,</span> 
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"李三"</span><span class="token punctuation">,</span> 
    <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"200702"</span><span class="token punctuation">,</span> 
    <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span> 
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"test05@xx.com"</span><span class="token punctuation">,</span> 
    <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"KW2100702"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>响应示例：</strong></p>
<details class="custom-container details"><summary>点击查看响应数据</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"employee_id"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
      <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"雇员ID"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxxxxxx"</span><span class="token punctuation">,</span>
    <span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"xxxxxxx"</span><span class="token punctuation">,</span>
    <span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"xxxxxxx"</span><span class="token punctuation">,</span>
    <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"IMPL00001"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"1231414324@qq.com"</span><span class="token punctuation">,</span>
    <span class="token property">"sort_order"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
    <span class="token property">"senior"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"用户ID"</span><span class="token punctuation">,</span>
      <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"xxxxxxx"</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxxxxxx"</span><span class="token punctuation">,</span>
      <span class="token property">"id_card"</span><span class="token operator">:</span> <span class="token string">"1231414324@qq.com"</span><span class="token punctuation">,</span>
      <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"male"</span><span class="token punctuation">,</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"confirmed"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"extension_profiles"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"positions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"position_id"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
            <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"possitionID"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"employee_id"</span><span class="token operator">:</span> <span class="token string">"雇员ID"</span><span class="token punctuation">,</span>
        <span class="token property">"org_id"</span><span class="token operator">:</span> <span class="token string">"节点ID"</span><span class="token punctuation">,</span>
        <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/aaa/bbb/"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"O"</span><span class="token punctuation">,</span>
        <span class="token property">"job_title"</span><span class="token operator">:</span> <span class="token string">"测试"</span><span class="token punctuation">,</span>
        <span class="token property">"primary"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"chief"</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"rank"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"deleted"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"create_time"</span><span class="token operator">:</span> <span class="token number">1592284154154</span><span class="token punctuation">,</span>
    <span class="token property">"modify_time"</span><span class="token operator">:</span> <span class="token number">1592284154154</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></details>
<h3 id="雇员删除" tabindex="-1"><a class="header-anchor" href="#雇员删除" aria-hidden="true">#</a> 雇员删除</h3>
<p>跟雇员导入参数一致，不过<code>ops</code>的值为<code>REMOVE</code>。</p>
<p><strong>请求示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"ops"</span><span class="token operator">:</span> <span class="token string">"REMOVE"</span><span class="token punctuation">,</span> 
    <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"sn"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span> 
    <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"xxx@qq.com"</span><span class="token punctuation">,</span> 
    <span class="token property">"positions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"jobTitle"</span><span class="token operator">:</span> <span class="token string">"测试"</span><span class="token punctuation">,</span> 
        <span class="token property">"org_path"</span><span class="token operator">:</span> <span class="token string">"AAA/BBB/CCC"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span> 
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"successes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"username1"</span><span class="token operator">:</span> <span class="token number">31718</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"failures"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      <span class="token property">"username1"</span><span class="token operator">:</span> <span class="token string">"异常信息"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="雇员离职" tabindex="-1"><a class="header-anchor" href="#雇员离职" aria-hidden="true">#</a> 雇员离职</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>employees<span class="token operator">/</span><span class="token punctuation">{</span>employeeId<span class="token punctuation">}</span><span class="token operator">/</span>disable<span class="token operator">|</span>lock<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>employeeId</td>
<td>String</td>
<td>Y</td>
<td>雇员ID</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<blockquote>
<p>V3 版本接口仅支持 lock, V4 版本接口两者均支持。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span>xxx<span class="token operator">/</span>employees<span class="token operator">/</span>xxx<span class="token operator">/</span>disable<span class="token operator">?</span>access_token<span class="token operator">=</span>xxx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span>xxx<span class="token operator">/</span>employees<span class="token operator">/</span>xxx<span class="token operator">/</span>lock<span class="token operator">?</span>access_token<span class="token operator">=</span>xxx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>    <span class="token comment">// result  }}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="雇员复职" tabindex="-1"><a class="header-anchor" href="#雇员复职" aria-hidden="true">#</a> 雇员复职</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token operator">:</span><span class="token punctuation">{</span>port<span class="token punctuation">}</span><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">/</span>employees<span class="token operator">/</span><span class="token punctuation">{</span>employeeId<span class="token punctuation">}</span><span class="token operator">/</span>enable<span class="token operator">|</span>unlock<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
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
<td>employeeId</td>
<td>String</td>
<td>Y</td>
<td>雇员ID</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<blockquote>
<p>V3 版本接口仅支持<code>unlock</code>，V4 版本接口两者均支持。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span>xxx<span class="token operator">/</span>employees<span class="token operator">/</span>xxx<span class="token operator">/</span>enable<span class="token operator">?</span>access_token<span class="token operator">=</span>xxx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>admin<span class="token operator">/</span>organizations<span class="token operator">/</span>xxx<span class="token operator">/</span>employees<span class="token operator">/</span>xxx<span class="token operator">/</span>unlock<span class="token operator">?</span>access_token<span class="token operator">=</span>xxx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>响应示例：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// result</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
