<template><h1 id="设备" tabindex="-1"><a class="header-anchor" href="#设备" aria-hidden="true">#</a> 设备</h1>
<h2 id="获取-ip-地址" tabindex="-1"><a class="header-anchor" href="#获取-ip-地址" aria-hidden="true">#</a> 获取 IP 地址</h2>
<p>获取手机设备当前连接网络的 IP 地址。</p>
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
<CodeWrapper fn="device.getIpAddress">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getIpAddress</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
<td>result</td>
<td>接口状态</td>
</tr>
<tr>
<td>ipAddress</td>
<td>手机连接网络的ip地址</td>
</tr>
</tbody>
</table>
<h2 id="获取设备信息" tabindex="-1"><a class="header-anchor" href="#获取设备信息" aria-hidden="true">#</a> 获取设备信息</h2>
<p>获取当前设备和 WorkPlus 的一些信息。</p>
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
<CodeWrapper fn="device.getDeviceInfo">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getDeviceInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
<td>device_id</td>
<td>设备id</td>
</tr>
<tr>
<td>platform</td>
<td>平台（Android/iOS）</td>
</tr>
<tr>
<td>domain_id</td>
<td>域id</td>
</tr>
<tr>
<td>product_version</td>
<td>当前应用的 versionCode</td>
</tr>
<tr>
<td>system_version</td>
<td>使用的系统版本（如 iOS9、Android 6.0）</td>
</tr>
<tr>
<td>system_model</td>
<td>使用的手机型号（如 iPhone7、Android sumsang）</td>
</tr>
<tr>
<td>channel_id</td>
<td>应用的包名</td>
</tr>
<tr>
<td>channel_vendor</td>
<td>Apple or ？</td>
</tr>
</tbody>
</table>
<h2 id="获取运动数据" tabindex="-1"><a class="header-anchor" href="#获取运动数据" aria-hidden="true">#</a> 获取运动数据</h2>
<p>获取设备当天凌晨 0 点至当前时间的运动数据。</p>
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
<CodeWrapper fn="device.getPedometerData">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getPedometerData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
<td>steps</td>
<td>步数</td>
</tr>
<tr>
<td>distances</td>
<td>距离，单位米</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>该接口无法获取其他设备的步数，例如运动手环。</p>
</div>
<h2 id="获取-app-信息" tabindex="-1"><a class="header-anchor" href="#获取-app-信息" aria-hidden="true">#</a> 获取 App 信息</h2>
<p>获取 WorkPlus App 版本等信息。</p>
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
<CodeWrapper fn="device.getAppInfo">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getAppInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
<td>version_code</td>
<td>应用当前版本 Version Code</td>
</tr>
<tr>
<td>version_name</td>
<td>应用当前版本名称</td>
</tr>
<tr>
<td>app_name</td>
<td>应用名</td>
</tr>
<tr>
<td>bundle_id</td>
<td>应用包名/bundleId</td>
</tr>
<tr>
<td>app_icon</td>
<td>应用图标，为 base64 字符串</td>
</tr>
</tbody>
</table>
</template>
