<template><h1 id="存储" tabindex="-1"><a class="header-anchor" href="#存储" aria-hidden="true">#</a> 存储</h1>
<p>提供对 localStorage 及 sessionStorage 的封装，默认使用 <code>workplus.</code> 前缀作为命名空间， 使用如下：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Storage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@w6s/sdk'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Storage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'localStorage'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加 item</span>
storage<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'version'</span><span class="token punctuation">,</span> <span class="token string">'0.0.1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 实际的 key 为 workplus.version</span>

<span class="token comment">// 获取 item</span>
storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'version'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.0.1</span>

<span class="token comment">// 检测 key 是否存在</span>
storage<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token string">'version'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 获取 item 数量 (所有 workplus 相关的 item):</span>
storage<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token comment">// 清空 storage (所有 workplus 相关的 item):</span>
storage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历 item (所有 workplus 相关的 item):</span>
storage<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
