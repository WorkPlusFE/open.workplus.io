<template><h1 id="支付" tabindex="-1"><a class="header-anchor" href="#支付" aria-hidden="true">#</a> 支付</h1>
<h2 id="微信支付" tabindex="-1"><a class="header-anchor" href="#微信支付" aria-hidden="true">#</a> 微信支付</h2>
<p>提供微信支付的能力。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>WorkPlus 应用已默认集成<code>微信支付SDK</code>，但相关<code>app_id</code>信息需要自行申请。</p>
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
<CodeWrapper fn="pay.wxPay" :qrcode="false">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>pay<span class="token punctuation">.</span><span class="token function">wxPay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">requestData</span><span class="token operator">:</span> <span class="token string">'demo-data'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>appId</td>
<td>String</td>
<td>sdk appId</td>
</tr>
<tr>
<td>requestData</td>
<td>String</td>
<td>sdk请求所需要参数, 包括具体商户 id, 金额, 数据加密等, 格式参考微信文档PayReq类</td>
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
<td>code</td>
<td>微信支付回调结果</td>
</tr>
<tr>
<td>message</td>
<td>结果描述</td>
</tr>
</tbody>
</table>
</template>
