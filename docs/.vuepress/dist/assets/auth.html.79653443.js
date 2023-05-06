<<<<<<< HEAD:docs/.vuepress/dist/assets/auth.html.4b5d75e2.js
import{b as t}from"./app.e7996973.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=t(`<h1 id="ticket-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#ticket-\u9A8C\u8BC1" aria-hidden="true">#</a> Ticket \u9A8C\u8BC1</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>tickets<span class="token operator">/</span><span class="token punctuation">{</span>ticket<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
=======
import{e as t}from"./app.f928f672.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=t(`<h1 id="ticket-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#ticket-\u9A8C\u8BC1" aria-hidden="true">#</a> Ticket \u9A8C\u8BC1</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>v1<span class="token operator">/</span>tickets<span class="token operator">/</span><span class="token punctuation">{</span>ticket<span class="token punctuation">}</span><span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
>>>>>>> a50f66fc8cc1572bb15a4a87044fb74ee4af38f1:docs/.vuepress/dist/assets/auth.html.79653443.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BF7\u6C42\u5934\u90E8\uFF1A</strong></p><table><thead><tr><th>\u8BF7\u6C42\u5934</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Content-Type</td><td>application/json</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u53C2\u6570\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>ticket</td><td>String</td><td>Y</td><td>\u7528\u6237ticket</td></tr><tr><td>access_token</td><td>String</td><td>Y</td><td>\u8BBF\u95EE\u4EE4\u724C</td></tr></tbody></table><p><strong>\u8FD4\u56DE\u6570\u636E\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>client_id</td><td>String</td><td>\u8BE5ticket\u6240\u5C5E\u7684\u7528\u6237\u6807\u8BC6</td></tr><tr><td>domain_id</td><td>String</td><td>\u8BE5ticket\u6240\u5C5E\u7684\u57DF\u6807\u8BC6</td></tr><tr><td>org_id</td><td>String</td><td>\u8BE5ticket\u6240\u5C5E\u7684\u7EC4\u7EC7\u6807\u8BC6</td></tr><tr><td>device_id</td><td>String</td><td>\u8BE5ticket\u6240\u5C5E\u7684\u8BBE\u5907\u6807\u8BC6</td></tr></tbody></table><p><strong>\u6210\u529F\u8FD4\u56DE\u503C\uFF1A</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Everything is ok.&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domain_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atwork&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;client_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a86e83a26bee5d5c&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;org_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;85df0e64&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;device_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test10fdfd0111&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u9519\u8BEF\u8FD4\u56DE\u503C\uFF1A</strong></p><table><thead><tr><th>status</th><th>message</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>10015</td><td>ticket expired.</td><td>ticket\u5DF2\u8FC7\u671F.</td></tr><tr><td>10016</td><td>ticket not found.</td><td>ticket\u4E0D\u5B58\u5728.</td></tr></tbody></table>`,12);function e(p,o){return a}var d=s(n,[["render",e]]);export{d as default};
