<<<<<<< HEAD:docs/.vuepress/dist/assets/eventListener.html.fe5a0e90.js
import{b as n}from"./app.e7996973.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u9875\u9762\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a> \u9875\u9762\u4E8B\u4EF6\u7ED1\u5B9A</h1><p><code>JS-SDK</code>\u63D0\u4F9B\u65B9\u6CD5\u7528\u4E8E\u7ED1\u5B9A\u8BBE\u5907\u7684\u4E00\u4E9B\u573A\u666F\u64CD\u4F5C\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u5B89\u5353\u8BBE\u5907\u7279\u6709\u7684\u7269\u7406\u8FD4\u56DE\u6309\u94AE\uFF08\u6216\u865A\u62DF\u6309\u94AE\uFF09\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u53EF\u4EE5\u5728\u56DE\u8C03\u65B9\u6CD5\u5185\u5904\u7406\u7279\u5B9A\u7684\u903B\u8F91\u3002</p><h2 id="\u4E8B\u4EF6\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C</h2><p>\u4E00\u65E6\u8C03\u7528\u8BE5\u63A5\u53E3\uFF0C\u5C06\u4F1A\u76D1\u63A7\u9875\u9762\u4E0A\u7684<code>pause(\u9875\u9762\u79BB\u5F00)</code>\u3001<code>resume\uFF08\u9875\u9762\u53EF\u89C1\uFF09</code>\u548C<code>back\uFF08\u5B89\u5353\u7684\u7269\u7406\u8FD4\u56DE\u4E8B\u4EF6\uFF0CiOS\u4E3A\u9875\u9762\u53F3\u6ED1\uFF09</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE\u6570\u636E\u91CC\u7684<code>action</code>\u6765\u533A\u5206\u4E8B\u4EF6\u7C7B\u578B\u3002</p><p>\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u8C03\u7528\u540E\uFF0C\u4E8B\u4EF6\u5BF9\u5E94\u7684\u539F\u59CB\u884C\u4E3A\u52A8\u4F5C\u4E0D\u4F1A\u88AB\u91CD\u7F6E\u3002\u6B64\u5916\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301\u53D6\u6D88\u7ED1\u5B9A\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindMessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">result</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
=======
import{r as t,o as e,c as p,b as n,a as c,F as o,d as s,e as l}from"./app.f928f672.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"\u9875\u9762\u4E8B\u4EF6\u7ED1\u5B9A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9875\u9762\u4E8B\u4EF6\u7ED1\u5B9A","aria-hidden":"true"},"#"),s(" \u9875\u9762\u4E8B\u4EF6\u7ED1\u5B9A")],-1),d=n("p",null,[n("code",null,"JS-SDK"),s("\u63D0\u4F9B\u65B9\u6CD5\u7528\u4E8E\u7ED1\u5B9A\u8BBE\u5907\u7684\u4E00\u4E9B\u573A\u666F\u64CD\u4F5C\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u5B89\u5353\u8BBE\u5907\u7279\u6709\u7684\u7269\u7406\u8FD4\u56DE\u6309\u94AE\uFF08\u6216\u865A\u62DF\u6309\u94AE\uFF09\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u53EF\u4EE5\u5728\u56DE\u8C03\u65B9\u6CD5\u5185\u5904\u7406\u7279\u5B9A\u7684\u903B\u8F91\u3002")],-1),k={id:"\u4E8B\u4EF6\u76D1\u542C",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\u76D1\u542C","aria-hidden":"true"},"#",-1),m=s(" \u4E8B\u4EF6\u76D1\u542C "),h=l(`<p>\u4E00\u65E6\u8C03\u7528\u8BE5\u63A5\u53E3\uFF0C\u5C06\u4F1A\u76D1\u63A7\u9875\u9762\u4E0A\u7684<code>pause(\u9875\u9762\u79BB\u5F00)</code>\u3001<code>resume\uFF08\u9875\u9762\u53EF\u89C1\uFF09</code>\u548C<code>back\uFF08\u5B89\u5353\u7684\u7269\u7406\u8FD4\u56DE\u4E8B\u4EF6\uFF0CiOS\u4E3A\u9875\u9762\u53F3\u6ED1\uFF09</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE\u6570\u636E\u91CC\u7684<code>action</code>\u6765\u533A\u5206\u4E8B\u4EF6\u7C7B\u578B\u3002</p><p>\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u8C03\u7528\u540E\uFF0C\u8FD4\u56DE\u529F\u80FD\u5C06\u4F1A\u88AB\u91CD\u7F6E\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u81EA\u884C\u5B9E\u73B0\u8FD4\u56DE\u903B\u8F91\u3002\u6B64\u5916\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301\u53D6\u6D88\u7ED1\u5B9A\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindMessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">result</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
>>>>>>> a50f66fc8cc1572bb15a4a87044fb74ee4af38f1:docs/.vuepress/dist/assets/eventListener.html.b5509b5f.js
  <span class="token doc-comment comment">/** \u8FD4\u56DE\u7684\u4E8B\u4EF6\u7C7B\u578B */</span>
  <span class="token comment">// action: &#39;pause&#39; | &#39;resume&#39; | &#39;back&#39;;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;pause&#39;</span><span class="token operator">:</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u9875\u9762\u79BB\u5F00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;resume&#39;</span><span class="token operator">:</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u9875\u9762\u8FD4\u56DE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;back&#39;</span><span class="token operator">:</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u89E6\u53D1\u4E86\u7269\u7406\u8FD4\u56DE\u4E8B\u4EF6&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u5B89\u5353\u7269\u7406\u8FD4\u56DE\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5353\u7269\u7406\u8FD4\u56DE\u6309\u94AE" aria-hidden="true">#</a> \u5B89\u5353\u7269\u7406\u8FD4\u56DE\u6309\u94AE</h2><p>\u7ED1\u5B9A\u5B89\u5353\u8BBE\u5907\u7684\u7269\u7406\u8FD4\u56DE\u6309\u94AE\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u539F\u59CB\u8FD4\u56DE\u52A8\u4F5C\u5C06\u65E0\u6548\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u4E0D\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5355\u4E2A WebView \u4E2D\u53EA\u9700\u8981\u7ED1\u5B9A\u4E00\u6B21</span>
w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindBackButtonEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B64\u5904\u5904\u7406\u8FD4\u56DE\u7684\u903B\u8F91</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u89E3\u9664\u7ED1\u5B9A</span>
w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">unbindBackButtonEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u5173\u4E8E\u8FD4\u56DE</p><p>\u5728 WebView \u4E2D\uFF0C\u7269\u7406\u8FD4\u56DE\u6309\u94AE\u4F1A\u4EE5\u6807\u51C6\u7684\u6D4F\u89C8\u5668\u8BBF\u95EE\u8BB0\u5F55\u8FDB\u884C\u9875\u9762\u9000\u56DE\uFF0C\u4F46\u662F\u5F80\u5F80\u5728\u5F00\u53D1\u5355\u9875\u9762\u5E94\u7528(SPA)\u65F6\uFF0C\u8FD4\u56DE\u4E8B\u4EF6\u53EF\u80FD\u4F1A\u8BA9\u6574\u4E2A\u5E94\u7528\u9000\u51FA\uFF0C\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9A\u7269\u7406\u8FD4\u56DE\u6309\u94AE\u4E8B\u4EF6\uFF0C\u6B63\u786E\u5730\u5904\u7406\u9875\u9762\u5207\u6362\u3002</p></div><h2 id="\u9875\u9762\u79BB\u5F00" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u79BB\u5F00" aria-hidden="true">#</a> \u9875\u9762\u79BB\u5F00</h2><p>\u5F53\u9875\u9762\u4E0D\u53EF\u89C1\u65F6\uFF0CWorkPlus \u4F1A\u4EA7\u751F\u56DE\u8C03\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u76D1\u542C\u6B64<code>pause\u4E8B\u4EF6</code>\uFF0C\u5E76\u5904\u7406\u7279\u5B9A\u7684\u4E1A\u52A1\u903B\u8F91\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindPauseEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B64\u5904\u6267\u884C\u7279\u5B9A\u903B\u8F91</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u9875\u9762\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u8FD4\u56DE" aria-hidden="true">#</a> \u9875\u9762\u8FD4\u56DE</h2><p>\u5F53\u9875\u9762\u91CD\u65B0\u53EF\u89C1\u5E76\u53EF\u4EA4\u4E92\u65F6\uFF0CWorkPlus \u4F1A\u4EA7\u751F\u56DE\u8C03\uFF0C\u5F00\u53D1\u8005\u53EF\u76D1\u542C\u6B64<code>resume\u4E8B\u4EF6</code>\uFF0C\u5E76\u5904\u7406\u7279\u5B9A\u7684\u4E1A\u52A1\u903B\u8F91\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">bindResumeEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B64\u5904\u6267\u884C\u7279\u5B9A\u903B\u8F91</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,24);function p(e,c){return t}var r=s(a,[["render",p]]);export{r as default};
