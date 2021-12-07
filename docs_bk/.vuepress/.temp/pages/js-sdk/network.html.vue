<template><h1 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h1>
<h2 id="当前连接wifi信息" tabindex="-1"><a class="header-anchor" href="#当前连接wifi信息" aria-hidden="true">#</a> 当前连接Wifi信息</h2>
<!-- OK -->
<p>获取当前连接 Wifi 信息, 包括 bssid、名字等。</p>
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
<CodeWrapper fn="network.getWifiInfo">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>network<span class="token punctuation">.</span><span class="token function">getWifiInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeWrapper>
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
<td>bssid</td>
<td>wifi 接入点标识</td>
</tr>
<tr>
<td>name</td>
<td>wifi 名称</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>同一个路由设备，<code>bssid</code>可能会有多个不同的值。</p>
</div>
</template>
