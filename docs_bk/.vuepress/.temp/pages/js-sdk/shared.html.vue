<template><h1 id="通用" tabindex="-1"><a class="header-anchor" href="#通用" aria-hidden="true">#</a> 通用</h1>
<h2 id="扫一扫" tabindex="-1"><a class="header-anchor" href="#扫一扫" aria-hidden="true">#</a> 扫一扫</h2>
<p>调用相机扫描二维码。</p>
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
<CodeWrapper fn="util.scanner">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">scanner</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeWrapper>
<h2 id="语音转文本" tabindex="-1"><a class="header-anchor" href="#语音转文本" aria-hidden="true">#</a> 语音转文本</h2>
<p>执行时会弹出原生界面，录音完毕后，返回文本信息。</p>
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
<CodeWrapper fn="util.voiceToText">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">voiceToText</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
<td>message</td>
<td>语音转出的文本</td>
</tr>
</tbody>
</table>
<h2 id="复制文本" tabindex="-1"><a class="header-anchor" href="#复制文本" aria-hidden="true">#</a> 复制文本</h2>
<p>把文本内容复制到粘贴板中。</p>
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
<CodeWrapper custom-link="util/copyText">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">copyText</span><span class="token punctuation">(</span><span class="token string">'open.workplus.io'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<blockquote>
<p>该方法没有回调，若要提示复制成功信息，在方法执行后提示即可。</p>
</blockquote>
</template>
