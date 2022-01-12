<template><h1 id="自定义方法" tabindex="-1"><a class="header-anchor" href="#自定义方法" aria-hidden="true">#</a> 自定义方法</h1>
<p><code>WorkPlus JS-SDK</code>是在移动端提供的 Cordova 接口能力的基础上进行的二次封装，基于通用性的考虑，一些客户定制的接口并不包含在内。</p>
<p>如果你需要查看完整的 Cordova 文档，请点击<a href="https://open.workplus.io/cordova/" target="_blank" rel="noopener noreferrer">此处<ExternalLinkIcon/></a>。</p>
<h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> exec</h2>
<p>如果你需要使用的接口不包含在 JS-SDK 内，但又想获得 JS-SDK 一样的接口调用体验，可以使用下方接口进行包装转换：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 带回调的方法，setTimer 为 boolean类型，表示是否启用定时器</span>
w6s<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>service<span class="token punctuation">,</span> action<span class="token punctuation">,</span> args<span class="token punctuation">,</span> success<span class="token punctuation">,</span> fail<span class="token punctuation">,</span> setTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>以某客户定制需求为例，<strong>获取签名信息</strong>，Cordova 接口定义如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  cordova<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>
    <span class="token comment">// success 成功回调</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// fail 失败回调</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// service</span>
    <span class="token string">"WorkPlus_HTMember"</span><span class="token punctuation">,</span>
    <span class="token comment">// action</span>
    <span class="token string">"getSignature"</span><span class="token punctuation">,</span> 
    <span class="token comment">// args，为数组</span>
    <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>使用<code>w6s.exec</code>包装后：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getSignature <span class="token operator">=</span> w6s<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">'WorkPlus_HTMember'</span><span class="token punctuation">,</span> <span class="token string">'getSignature'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 基于 Promise 的调用方式</span>
<span class="token comment">// 如果需要兼容 callback 的方式，需要在方法定义时传入success和fail函数</span>
<span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="execsync" tabindex="-1"><a class="header-anchor" href="#execsync" aria-hidden="true">#</a> execSync</h2>
<p><code>execSync</code>相比<code>exec</code>，唯一的区别就是没有回调。</p>
<p>例如打开一个网页，这样的动作不会有任何返回，此时就应该使用<code>execSync</code>方法进行转换。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">execSync</span><span class="token punctuation">(</span>service<span class="token punctuation">,</span> action<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="接口检测" tabindex="-1"><a class="header-anchor" href="#接口检测" aria-hidden="true">#</a> 接口检测</h2>
<p>因版本及一些特殊定制原因，某些接口可能并不存在，可以通过<code>w6s.checkApi</code>检测。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">checkApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 插件名称 */</span>
  <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token string">'auth'</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 插件方法 */</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'getTicket'</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">需使用原始 Cordova 接口的定义参数</p>
<p>JS-SDK 会优化一些接口的方法和属性名，目前暂不支持内部转换成原始的 Cordova 接口的参数及属性。你可以查看<a href="https://open.workplus.io/cordova/" target="_blank" rel="noopener noreferrer">原始 Cordova 接口文档<ExternalLinkIcon/></a>进行参数设置。</p>
</div>
</template>
