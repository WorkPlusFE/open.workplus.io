<template><h1 id="弹窗" tabindex="-1"><a class="header-anchor" href="#弹窗" aria-hidden="true">#</a> 弹窗</h1>
<div class="custom-container tip"><p class="custom-container-title">版本要求</p>
<p>该功能需要 WorkPlus APP 版本在 <strong>v4.12.0</strong> 及以上。</p>
</div>
<h2 id="确认框" tabindex="-1"><a class="header-anchor" href="#确认框" aria-hidden="true">#</a> 确认框</h2>
<p>弹出原生的确认框，可以通过控制按钮实现 Alert 和 Confirm 两种形态的弹出框。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>dialog<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"标题"</span><span class="token punctuation">,</span>
  content<span class="token operator">:</span> <span class="token string">"内容"</span><span class="token punctuation">,</span>
  show_cancel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  cancel_text<span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span>
  confirm_text<span class="token operator">:</span> <span class="token string">"确认"</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>title</td>
<td>String</td>
<td>必须，弹框的标题</td>
</tr>
<tr>
<td>content</td>
<td>String</td>
<td>弹框的内容</td>
</tr>
<tr>
<td>show_cancel</td>
<td>Boolean</td>
<td>是否显示“取消”按钮，默认显示</td>
</tr>
<tr>
<td>cancel_text</td>
<td>String</td>
<td>“取消”按钮的文本，默认使用系统按钮文本</td>
</tr>
<tr>
<td>confirm_text</td>
<td>String</td>
<td>“确认”按钮的文本，默认使用系统按钮文本</td>
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
<td>cancel</td>
<td>如果为 true，表示点击了“取消”按钮</td>
</tr>
<tr>
<td>confirm</td>
<td>如果为 true，表示点击了“确认”按钮</td>
</tr>
</tbody>
</table>
<h2 id="actionsheet" tabindex="-1"><a class="header-anchor" href="#actionsheet" aria-hidden="true">#</a> ActionSheet</h2>
<p>从底部弹出原生的 ActionSheet，可以自定义各按钮的文本，但”取消“按钮是固定的。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>dialog<span class="token punctuation">.</span><span class="token function">showActionSheet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  item_list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'选项A'</span><span class="token punctuation">,</span> <span class="token string">'选项B'</span><span class="token punctuation">,</span> <span class="token string">'选项C'</span><span class="token punctuation">]</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>item_list</td>
<td>Array</td>
<td>必须的，选项的字符串数组</td>
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
<td>tap_index</td>
<td>点击了第几项（从0开始）</td>
</tr>
</tbody>
</table>
<h2 id="轻提示" tabindex="-1"><a class="header-anchor" href="#轻提示" aria-hidden="true">#</a> 轻提示</h2>
<p>弹出原生的轻提示弹框 Toast，可以自定义文本及显示时长，默认<code>3秒</code>后隐藏。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>dialog<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'这是一个toast'</span><span class="token punctuation">,</span>
  duration<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// 毫秒数</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>title</td>
<td>String</td>
<td>必须的，标题</td>
</tr>
<tr>
<td>duration</td>
<td>Number</td>
<td>非必须，显示的时长，默认 3000 毫秒</td>
</tr>
</tbody>
</table>
<h2 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h2>
<p>弹出原生的 Loading，可以添加文本，但需要手动关闭。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 显示 Loading</span>
w6s<span class="token punctuation">.</span>dialog<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'加载中...'</span><span class="token punctuation">,</span>
  block<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 隐藏 Loading</span>
w6s<span class="token punctuation">.</span>dialog<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>title</td>
<td>String</td>
<td>非必须，标题</td>
</tr>
<tr>
<td>block</td>
<td>Boolean</td>
<td>非必须，默认不锁定屏幕</td>
</tr>
</tbody>
</table>
</template>
