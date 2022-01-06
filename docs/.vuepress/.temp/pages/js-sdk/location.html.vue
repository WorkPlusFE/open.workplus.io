<template><h1 id="地理位置" tabindex="-1"><a class="header-anchor" href="#地理位置" aria-hidden="true">#</a> 地理位置</h1>
<h2 id="获取定位信息" tabindex="-1"><a class="header-anchor" href="#获取定位信息" aria-hidden="true">#</a> 获取定位信息</h2>
<!-- OK -->
<p>返回地理位置信息。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>返回数据</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>latitude</td>
<td>纬度</td>
</tr>
<tr>
<td>longitude</td>
<td>经度</td>
</tr>
<tr>
<td>address</td>
<td>具体地址信息</td>
</tr>
<tr>
<td>city</td>
<td>所在城市</td>
</tr>
<tr>
<td>district</td>
<td>所在的区</td>
</tr>
<tr>
<td>street</td>
<td>所在街道</td>
</tr>
<tr>
<td>aoiName</td>
<td>推测的建筑名称</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>地理位置信息是通过<code>高德地图SDK</code>返回。</p>
</div>
</template>
