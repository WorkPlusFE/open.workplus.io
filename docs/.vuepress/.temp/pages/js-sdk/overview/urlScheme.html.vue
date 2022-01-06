<template><h1 id="跳转协议" tabindex="-1"><a class="header-anchor" href="#跳转协议" aria-hidden="true">#</a> 跳转协议 <Badge type="success" text="v3.18.0+" /></h1>
<p>本文档主要描述 WorkPlus 内部使用的路由协议，已达到具体业务需求。</p>
<p>通过在浏览器敲入<code>url scheme</code>，就可以检验是否有效，例如在已经安装 WorkPlus 的手机设备上，在浏览器的访问地址栏敲入<code>workplus://</code>，将会弹出提示框，询问是否跳转到该应用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>通常情况下，不同客户的包，注册的<code>scheme</code>会不一样，可通过 <RouterLink to="/js-sdk/device.html#%E8%8E%B7%E5%8F%96-app-%E4%BF%A1%E6%81%AF">获取 APP 信息</RouterLink> 接口获取，或咨询相关负责人。</p>
</div>
<h2 id="轻应用跳转" tabindex="-1"><a class="header-anchor" href="#轻应用跳转" aria-hidden="true">#</a> 轻应用跳转</h2>
<p>支持在轻应用内打开另一个轻应用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>workplus<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>openApp<span class="token operator">?</span>id<span class="token operator">=</span>foo<span class="token operator">&amp;</span>domainId<span class="token operator">=</span>workplus
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>参数说明：</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>appId，具体值，请登录管理后台，在应用管理栏目点击该应用即可查看</td>
</tr>
<tr>
<td>domainId</td>
<td>应用所在的域</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>JS-SDK</code>也提供相应的<RouterLink to="/js-sdk/app.html#%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC">应用跳转</RouterLink>接口，相比直接从浏览器地址栏输入<code>url scheme</code>或<code>a标签</code>触发跳转，SDK 接口可以提供回调，交互会更加友好。</p>
</div>
<h2 id="音视频会议" tabindex="-1"><a class="header-anchor" href="#音视频会议" aria-hidden="true">#</a> 音视频会议</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>workplus<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>meeting<span class="token operator">?</span>type<span class="token operator">=</span>zoom<span class="token operator">&amp;</span>action<span class="token operator">=</span>join 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Type 定义：</strong></p>
<table>
<thead>
<tr>
<th>type</th>
<th>定义</th>
</tr>
</thead>
<tbody>
<tr>
<td>umeeting</td>
<td>umeeting</td>
</tr>
<tr>
<td>zoom</td>
<td>zoom</td>
</tr>
<tr>
<td>bizconf</td>
<td>会畅</td>
</tr>
</tbody>
</table>
<p><strong>Action 定义：</strong></p>
<table>
<thead>
<tr>
<th>action</th>
<th>定义</th>
</tr>
</thead>
<tbody>
<tr>
<td>join</td>
<td>加入会议</td>
</tr>
<tr>
<td>launch</td>
<td>发起会议入口, 触发路由时弹出加入会议选择框</td>
</tr>
</tbody>
</table>
<h2 id="即时呼叫" tabindex="-1"><a class="header-anchor" href="#即时呼叫" aria-hidden="true">#</a> 即时呼叫</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>workplus<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>voip<span class="token operator">?</span>action<span class="token operator">=</span>launch 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Action 定义：</strong></p>
<table>
<thead>
<tr>
<th>action</th>
<th>定义</th>
</tr>
</thead>
<tbody>
<tr>
<td>不传值</td>
<td>打开默认的发起会议界面</td>
</tr>
<tr>
<td>launch</td>
<td>触发聊天界面里的发起即时呼叫，只允许在聊天界面的范围里使用</td>
</tr>
</tbody>
</table>
</template>
