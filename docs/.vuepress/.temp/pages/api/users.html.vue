<template><h1 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h1>
<h2 id="用户查询" tabindex="-1"><a class="header-anchor" href="#用户查询" aria-hidden="true">#</a> 用户查询</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>query<span class="token operator">=</span><span class="token punctuation">{</span>query<span class="token punctuation">}</span><span class="token operator">&amp;</span>type<span class="token operator">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span><span class="token operator">&amp;</span>matching<span class="token operator">=</span><span class="token punctuation">{</span>matching<span class="token punctuation">}</span>
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
<td>access_token</td>
<td>String</td>
<td>Y</td>
<td>访问令牌</td>
</tr>
<tr>
<td>query</td>
<td>String</td>
<td>Y</td>
<td>查询条件,当matching =true,代表匹配用户名或用户标识,当matching =false,代表完全匹配用户名或模糊匹配用户姓名，拼音，简拼字段</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>Y</td>
<td>查询类型，当type=id查询条件query为用户标识，当type=username查询条件query为用户名</td>
</tr>
<tr>
<td>matching</td>
<td>String</td>
<td>Y</td>
<td>是否匹配query，当matching =true时，query可以多条件查询，以[,]分隔开多条件，如query=id1,id2</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<ol>
<li>模糊匹配查询</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">?</span>access_token<span class="token operator">=</span>8e0d7b9e4e4a49b888d6b0b5f882b7cd<span class="token operator">&amp;</span>query<span class="token operator">=</span><span class="token number">136</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>匹配查询用户标识</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">?</span>access_token<span class="token operator">=</span>8e0d7b9e4e4a49b888d6b0b5f882b7cd<span class="token operator">&amp;</span>query<span class="token operator">=</span>92353e192ef4492f8d2772fef98f29be<span class="token operator">&amp;</span>matching<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>type<span class="token operator">=</span>id
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3">
<li>匹配查询用户名</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">?</span>access_token<span class="token operator">=</span>8e0d7b9e4e4a49b888d6b0b5f882b7cd<span class="token operator">&amp;</span>query<span class="token operator">=</span><span class="token number">13610117012</span><span class="token operator">&amp;</span>matching<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>type<span class="token operator">=</span>username
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"total_count"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">"users"</span><span class="token operator">:</span><span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token string">"92353e192ef4492f8d2772fef98f29be"</span><span class="token punctuation">,</span>
				<span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span>
				<span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ACTIVATED"</span><span class="token punctuation">,</span>
				<span class="token property">"state"</span><span class="token operator">:</span> <span class="token string">"NORMAL"</span><span class="token punctuation">,</span>
				<span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"13610117012@qq.com"</span><span class="token punctuation">,</span>
				<span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"MALE"</span><span class="token punctuation">,</span>
				<span class="token property">"birthday"</span><span class="token operator">:</span> <span class="token number">1472601600000</span><span class="token punctuation">,</span>
				<span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>错误返回值：</strong></p>
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
<h2 id="指定用户标识或用户名查询" tabindex="-1"><a class="header-anchor" href="#指定用户标识或用户名查询" aria-hidden="true">#</a> 指定用户标识或用户名查询</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>query<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>type<span class="token operator">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span>
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
<td>access_token</td>
<td>String</td>
<td>Y</td>
<td>访问令牌</td>
</tr>
<tr>
<td>query</td>
<td>String</td>
<td>Y</td>
<td>查询条件，根据type判断</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>Y</td>
<td>查询类型，当type=id查询条件query为用户标识，当type=username查询条件query为用户名</td>
</tr>
</tbody>
</table>
<p><strong>请求示例：</strong></p>
<ol>
<li>匹配查询用户名</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">13610117012</span><span class="token operator">?</span>access_token<span class="token operator">=</span>8e0d7b9e4e4a49b888d6b0b5f882b7cd<span class="token operator">&amp;</span>type<span class="token operator">=</span>username
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>匹配查询用户标识</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span>92353e192ef4492f8d2772fef98f29be<span class="token operator">?</span>access_token<span class="token operator">=</span>8e0d7b9e4e4a49b888d6b0b5f882b7cd<span class="token operator">&amp;</span>type<span class="token operator">=</span>id
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token string">"92353e192ef4492f8d2772fef98f29be"</span><span class="token punctuation">,</span>
		<span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span>
		<span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ACTIVATED"</span><span class="token punctuation">,</span>
		<span class="token property">"state"</span><span class="token operator">:</span> <span class="token string">"NORMAL"</span><span class="token punctuation">,</span>
		<span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
		<span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
		<span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
		<span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
		<span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
		<span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"13610117012@qq.com"</span><span class="token punctuation">,</span>
		<span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"MALE"</span><span class="token punctuation">,</span>
		<span class="token property">"birthday"</span><span class="token operator">:</span> <span class="token number">1472601600000</span><span class="token punctuation">,</span>
		<span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><strong>错误返回值：</strong></p>
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
<h2 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>skip<span class="token operator">=</span><span class="token punctuation">{</span>skip<span class="token punctuation">}</span><span class="token operator">&amp;</span>limit<span class="token operator">=</span><span class="token punctuation">{</span>limit<span class="token punctuation">}</span><span class="token operator">&amp;</span>refresh_time<span class="token operator">=</span><span class="token punctuation">{</span>refresh_time<span class="token punctuation">}</span>
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
<td>access_token</td>
<td>String</td>
<td>Y</td>
<td>访问令牌</td>
</tr>
<tr>
<td>skip</td>
<td>String</td>
<td>N</td>
<td>开始记录数，默认值 0</td>
</tr>
<tr>
<td>limit</td>
<td>String</td>
<td>N</td>
<td>最大记录数，默认值 10</td>
</tr>
<tr>
<td>refresh_time</td>
<td>String</td>
<td>N</td>
<td>刷新时间戳，获取刷新时间以后的记录，默认值 -1</td>
</tr>
</tbody>
</table>
<p><strong>示例：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">?</span>access_token<span class="token operator">=</span>8e0d7b9e4e4a49b888d6b0b5f882b7cd<span class="token operator">&amp;</span>skip<span class="token operator">=</span><span class="token number">0</span><span class="token operator">&amp;</span>limit<span class="token operator">=</span><span class="token number">10</span><span class="token operator">&amp;</span>refresh_time<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>返回数据：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Everything is ok."</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"total_count"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">"users"</span><span class="token operator">:</span><span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token string">"92353e192ef4492f8d2772fef98f29be"</span><span class="token punctuation">,</span>
				<span class="token property">"domain_id"</span><span class="token operator">:</span> <span class="token string">"atwork"</span><span class="token punctuation">,</span>
				<span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ACTIVATED"</span><span class="token punctuation">,</span>
				<span class="token property">"state"</span><span class="token operator">:</span> <span class="token string">"NORMAL"</span><span class="token punctuation">,</span>
				<span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"pinyin"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"initial"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"13610117012"</span><span class="token punctuation">,</span>
				<span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"13610117012@qq.com"</span><span class="token punctuation">,</span>
				<span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"MALE"</span><span class="token punctuation">,</span>
				<span class="token property">"birthday"</span><span class="token operator">:</span> <span class="token number">1472601600000</span><span class="token punctuation">,</span>
				<span class="token property">"disabled"</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>错误返回值：</strong></p>
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
