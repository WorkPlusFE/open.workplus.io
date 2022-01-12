<template><h1 id="鉴权流程" tabindex="-1"><a class="header-anchor" href="#鉴权流程" aria-hidden="true">#</a> 鉴权流程</h1>
<p>为了保证 JS-SDK 的调用者是可信任的，同时对当前页面可用的 API 进行安全限制，防止恶意网页通过 JS-API 随意获取用户私密信息，对用户财产造成损失。因此在部分 JS-API 在被调用前，需要通过接口进行鉴权，只有鉴权成功的情况下，JS-API 的调用才会正常生效。</p>
<blockquote>
<p>目前所有接口（除鉴权接口外）均需要鉴权后才可使用！</p>
</blockquote>
<h2 id="步骤一-获取-access-key" tabindex="-1"><a class="header-anchor" href="#步骤一-获取-access-key" aria-hidden="true">#</a> 步骤一：获取 access_key</h2>
<p>管理后台颁发和维护，请联系相关负责人获取。</p>
<h2 id="步骤二-计算签名" tabindex="-1"><a class="header-anchor" href="#步骤二-计算签名" aria-hidden="true">#</a> 步骤二：计算签名</h2>
<p>在进行鉴权之前，需要设置以下签名所需的参数：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>access_key</td>
<td>string</td>
<td>从管理后台获取的 key，参考步骤一</td>
</tr>
<tr>
<td>nonce</td>
<td>string | number</td>
<td>六位随机数</td>
</tr>
<tr>
<td>timestamp</td>
<td>string | number</td>
<td>时间戳（毫秒数）</td>
</tr>
</tbody>
</table>
<p>然后，需通过以上 3 个参数，计算出最终的签名<code>signature</code>。</p>
<p><strong>签名方法</strong>：</p>
<ul>
<li>
<ol>
<li>参数排序</li>
</ol>
</li>
</ul>
<p>按自然升序进行排序，可以直接使用 sort 方法进行处理：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sorted <span class="token operator">=</span> <span class="token punctuation">[</span>access_secret<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<ol start="2">
<li>参数拼接</li>
</ol>
</li>
</ul>
<p>完成第一步后，需要将 3 个参数连起来，可以利用 reduce 方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> sorted<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> str <span class="token operator">+=</span> item<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你也可以直接1、2两步一起处理，如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token punctuation">[</span>access_secret<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">]</span>
  <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> str <span class="token operator">+=</span> item<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>
<ol start="3">
<li>对字符串进行 SHA-1 加密，并转成全小写字母</li>
</ol>
</li>
</ul>
<p>推荐使用<a href="https://github.com/brix/crypto-js" target="_blank" rel="noopener noreferrer">brix/crypto-js<ExternalLinkIcon/></a>或<a href="https://github.com/Caligatio/jsSHA" target="_blank" rel="noopener noreferrer">Caligatio/jsSHA<ExternalLinkIcon/></a>库进行加密处理。</p>
<p>以 crypto-js 库为例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入模块</span>
<span class="token keyword">import</span> sha1 <span class="token keyword">from</span> <span class="token string">'crypto-js/sha1'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> access_secret <span class="token operator">=</span> <span class="token string">'access_secret'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nonce <span class="token operator">=</span> <span class="token string">'123456'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timestamp <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token punctuation">[</span>access_secret<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">]</span>
  <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> str <span class="token operator">+=</span> item<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 最终还需要转成全小写</span>
<span class="token keyword">const</span> signature <span class="token operator">=</span> <span class="token function">sha1</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>完成签名计算后，即可调用鉴权接口。</p>
<div class="custom-container warning"><p class="custom-container-title">timestamp 的时效性</p>
<p>提交的<code>timestamp</code>在 <strong>300秒</strong> 内有效，如果超出，则验证失败。</p>
</div>
<h2 id="步骤三-调用鉴权接口" tabindex="-1"><a class="header-anchor" href="#步骤三-调用鉴权接口" aria-hidden="true">#</a> 步骤三：调用鉴权接口</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> w6s <span class="token keyword">from</span> <span class="token string">'szient-js-sdk'</span><span class="token punctuation">;</span>

w6s<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">access_key</span><span class="token operator">:</span> <span class="token string">'access_key'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nonce</span><span class="token operator">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token string">'timestamp'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">signature</span><span class="token operator">:</span> <span class="token string">'signature'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 成功</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 失败</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>接口成功与否，会在对应的回调方法中返回，返回格式如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"授权成功"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>状态码说明：</p>
<table>
<thead>
<tr>
<th>状态码</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>鉴权成功, success 回调中返回</td>
</tr>
<tr>
<td>-1</td>
<td>参数有误, 例如传入参数缺失等, 在 fail 回调中返回</td>
</tr>
<tr>
<td>-2</td>
<td>鉴权失败, 在 fail 回调中返回</td>
</tr>
</tbody>
</table>
<h2 id="步骤四-调用-js-api" tabindex="-1"><a class="header-anchor" href="#步骤四-调用-js-api" aria-hidden="true">#</a> 步骤四：调用 JS-API</h2>
<p>完成鉴权后，便可以在<code>w6s.ready</code>里调用 JS-API 了。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>w6s.ready</code>的触发时机：</p>
<ul>
<li>如果调用时，授权并未完成，则会在授权完成时触发；</li>
<li>如果调用时，授权已经完成，则会马上被触发；</li>
</ul>
<p>基于以上机制，在应用初始化时，可以更好地管理代码的执行流程，例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 执行鉴权</span>
w6s<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>

<span class="token comment">// 同时，监听 ready 回调</span>
w6s<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 鉴权成功后，马上执行</span>
  w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意！</p>
<p>在开发调试过程中，需要经常刷新页面，在这种情况下，如果 SDK 已经授权成功，那<code>ready</code>回调会触发先于授权接口<code>config</code>回调，这样可能会导致代码运行先后上的不一致。</p>
<p>所以，建议不要在授权接口的回调中处理业务逻辑，应统一在<code>ready</code>回调中处理。</p>
</div>
</template>
