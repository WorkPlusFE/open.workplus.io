import{e as t}from"./app.3c883d3f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=t(`<h1 id="\u5A92\u4F53\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u64CD\u4F5C" aria-hidden="true">#</a> \u5A92\u4F53\u64CD\u4F5C</h1><h2 id="\u56FE\u7247\u4E0A\u4F20-json" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u4E0A\u4F20-json" aria-hidden="true">#</a> \u56FE\u7247\u4E0A\u4F20(json)</h2><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /v1/medias/images?access_token={access_token}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BF7\u6C42\u5934\u90E8\uFF1A</strong></p><table><thead><tr><th>\u8BF7\u6C42\u5934</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Content-Type</td><td>application/json</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u53C2\u6570\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>access_token</td><td>String</td><td>Y</td><td>\u8BBF\u95EE\u4EE4\u724C</td></tr><tr><td>file_name</td><td>String</td><td>Y</td><td>\u6587\u4EF6\u540D\u79F0</td></tr><tr><td>file_content</td><td>byte[]</td><td>Y</td><td>\u6587\u4EF6\u5185\u5BB9(BASE64)</td></tr><tr><td>file_digest</td><td>String</td><td>N</td><td>\u6587\u4EF6\u6458\u8981,\u7528\u4E8E\u6807\u8BB0\u6587\u4EF6</td></tr><tr><td>file_type</td><td>String</td><td>N</td><td>\u56FE\u7247\u7C7B\u578B\uFF08\u4F8B\u5982:image/jpeg\uFF09</td></tr><tr><td>width</td><td>Int</td><td>N</td><td>\u56FE\u7247\u5BBD\u5EA6</td></tr><tr><td>height</td><td>Int</td><td>N</td><td>\u56FE\u7247\u9AD8\u5EA6</td></tr><tr><td>quality</td><td>Float</td><td>N</td><td>\u56FE\u7247\u8D28\u91CF\uFF08\u53D6\u503C\u8303\u56F4\uFF1A0-1\uFF09\uFF08\u9ED8\u8BA4\u503C\uFF1A1\uFF09</td></tr><tr><td>rotate</td><td>Float</td><td>N</td><td>\u56FE\u7247\u65CB\u8F6C\u89D2\u5EA6,\u9ED8\u8BA40.0</td></tr><tr><td>format</td><td>String</td><td>N</td><td>\u56FE\u7247\u8F93\u5165\u683C\u5F0F(\u9ED8\u8BA4jpg)</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u793A\u4F8B\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/v1/medias/images?access_token=b646339e2f4f4234af6bae5f72db9879
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;file_name&quot; : &quot;\u6587\u4EF6\u540D\u79F0&quot;,
    &quot;file_type&quot; : &quot;\u56FE\u7247\u683C\u5F0F\u7528\u4E8E\u8BFB\u53D6\u65F6\u54CD\u5E94\u7684Content-Type&quot;
    &quot;file_digest&quot; : &quot;\u6587\u4EF6\u6458\u8981&quot;,
    &quot;file_content&quot; : &quot;\u6587\u4EF6\u5185\u5BB9&quot;,
    &quot;width&quot; : 100,
    &quot;height&quot; : 100,
    &quot;rotate&quot; : 0,
    &quot;quality&quot; : 0.6,
    &quot;format&quot; : &quot;jpg&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u8FD4\u56DE\u6570\u636E\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;status&quot;: 0,
  &quot;message&quot;: &quot;Everything is ok.&quot;,
  &quot;result&quot;: {
    &quot;Z3JvdXAxL00wMC8wMC8wMC9yQkFCR1ZoSGlGeUFkNWowQUFENXFPZDZ6LW8wMDguZ2lm&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u9519\u8BEF\u8FD4\u56DE\u503C\uFF1A</strong></p><table><thead><tr><th>status</th><th>message</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>10011</td><td>token not found.</td><td>\u8BBF\u95EE\u4EE4\u724C\u4E0D\u5B58\u5728</td></tr></tbody></table><h2 id="\u56FE\u7247\u4E0A\u4F20-multipart-form-data" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u4E0A\u4F20-multipart-form-data" aria-hidden="true">#</a> \u56FE\u7247\u4E0A\u4F20(multipart/form-data)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">/</span>images<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_digest<span class="token operator">=</span><span class="token punctuation">{</span>file_digest<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_size<span class="token operator">=</span><span class="token punctuation">{</span>file_size<span class="token punctuation">}</span><span class="token operator">&amp;</span>width<span class="token operator">=</span><span class="token punctuation">{</span>width<span class="token punctuation">}</span><span class="token operator">&amp;</span>heigh<span class="token operator">=</span><span class="token punctuation">{</span>heigh<span class="token punctuation">}</span><span class="token operator">&amp;</span>rotate<span class="token operator">=</span><span class="token punctuation">{</span>heigh<span class="token punctuation">}</span><span class="token operator">&amp;</span>quality<span class="token operator">=</span><span class="token punctuation">{</span>quality<span class="token punctuation">}</span><span class="token operator">&amp;</span>format<span class="token operator">=</span><span class="token punctuation">{</span>format<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BF7\u6C42\u53C2\u6570\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>access_token</td><td>String</td><td>Y</td><td>\u8BBF\u95EE\u4EE4\u724C</td></tr><tr><td>filename</td><td>String</td><td>Y</td><td>\u6587\u4EF6\u540D\u79F0</td></tr><tr><td>file_content</td><td>Stream</td><td>Y</td><td>\u6587\u4EF6\u6D41</td></tr><tr><td>file_digest</td><td>String</td><td>N</td><td>\u6587\u4EF6\u6458\u8981,\u7528\u4E8E\u6807\u8BB0\u6587\u4EF6</td></tr><tr><td>file_type</td><td>String</td><td>N</td><td>\u56FE\u7247\u7C7B\u578B\uFF08\u4F8B\u5982:image/jpeg\uFF09</td></tr><tr><td>width</td><td>Int</td><td>N</td><td>\u56FE\u7247\u5BBD\u5EA6</td></tr><tr><td>height</td><td>Int</td><td>N</td><td>\u56FE\u7247\u9AD8\u5EA6</td></tr><tr><td>quality</td><td>Float</td><td>N</td><td>\u56FE\u7247\u8D28\u91CF\uFF08\u53D6\u503C\u8303\u56F4\uFF1A0-1\uFF09\uFF08\u9ED8\u8BA4\u503C\uFF1A1\uFF09</td></tr><tr><td>rotate</td><td>Float</td><td>N</td><td>\u56FE\u7247\u65CB\u8F6C\u89D2\u5EA6,\u9ED8\u8BA40.0</td></tr><tr><td>format</td><td>String</td><td>N</td><td>\u56FE\u7247\u8F93\u5165\u683C\u5F0F(\u9ED8\u8BA4jpg)</td></tr></tbody></table><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>POST /medias/images?access_token=<span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>&amp;file_digest=\u6587\u4EF6\u6458\u8981&amp;file_size=\u6587\u4EF6\u5927\u5C0F&amp;width=\u56FE\u7247\u526A\u88C1\u7684\u5BBD\u5EA6&amp;heigh=\u56FE\u7247\u526A\u88C1\u7684\u9AD8\u5EA6&amp;rotate=\u56FE\u7247\u65CB\u8F6C\u89D2\u5EA6&amp;quality=\u56FE\u7247\u538B\u7F29\u7387(<span class="token number">0</span>~<span class="token number">1</span>)&amp;format=\u56FE\u7247\u8F93\u5165\u683C\u5F0F(\u9ED8\u8BA4jpg)
Content-Type<span class="token operator">:</span> multipart/form-data
Accept<span class="token operator">:</span> application/json

------------boundary
Content-Disposition<span class="token operator">:</span>form-data; name=<span class="token string">&quot;file&quot;</span>;filename=<span class="token string">&quot;&quot;</span>
Content-Type<span class="token operator">:</span> <span class="token punctuation">{</span>content-type<span class="token punctuation">}</span>

file content...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>\u8FD4\u56DE\u6570\u636E\uFF1A</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Everything is ok.&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z3JvdXAxL00wMC8wMC8xMi9yQkFCR1ZuSWkxU0FINl9LQUFGeTNEQzlfYUEyOTQuanBn&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u9519\u8BEF\u8FD4\u56DE\u503C\uFF1A</strong></p><table><thead><tr><th>status</th><th>message</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>10011</td><td>token not found.</td><td>\u8BBF\u95EE\u4EE4\u724C\u4E0D\u5B58\u5728</td></tr></tbody></table><h2 id="\u6587\u4EF6\u4E0A\u4F20-json" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20-json" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20(json)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BF7\u6C42\u5934\u90E8\uFF1A</strong></p><table><thead><tr><th>\u8BF7\u6C42\u5934</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Content-Type</td><td>application/json</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u53C2\u6570\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>access_token</td><td>String</td><td>Y</td><td>\u8BBF\u95EE\u4EE4\u724C</td></tr><tr><td>file_name</td><td>String</td><td>Y</td><td>\u6587\u4EF6\u540D\u79F0</td></tr><tr><td>file_content</td><td>byte[]</td><td>Y</td><td>\u6587\u4EF6\u5185\u5BB9</td></tr><tr><td>file_digest</td><td>String</td><td>N</td><td>\u6587\u4EF6\u6458\u8981,\u7528\u4E8E\u6807\u8BB0\u6587\u4EF6</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u793A\u4F8B\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">?</span>access_token<span class="token operator">=</span>b646339e2f4f4234af6bae5f72db9879
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;file_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u6587\u4EF6\u540D\u79F0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;file_digest&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u6587\u4EF6\u6458\u8981&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;file_content&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u6587\u4EF6\u6D41&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;file_metadata&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;key1&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;value1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\u8FD4\u56DE\u6570\u636E\uFF1A</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Everything is ok.&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z3JvdXAxL00wMC8wMC8xMi9yQkFCRzFuSWpkdUFJVmE2QUFBQ0ZPcVh3eXM0MjMubXA0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u9519\u8BEF\u8FD4\u56DE\u503C\uFF1A</strong></p><table><thead><tr><th>status</th><th>message</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>10011</td><td>token not found.</td><td>\u8BBF\u95EE\u4EE4\u724C\u4E0D\u5B58\u5728</td></tr></tbody></table><h2 id="\u6587\u4EF6\u4E0A\u4F20-multipart-form-data" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20-multipart-form-data" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20(multipart/form-data)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>medias<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_digest<span class="token operator">=</span><span class="token punctuation">{</span>file_digest<span class="token punctuation">}</span><span class="token operator">&amp;</span>file_size<span class="token operator">=</span><span class="token punctuation">{</span>file_size<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BF7\u6C42\u53C2\u6570\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>access_token</td><td>String</td><td>Y</td><td>\u8BBF\u95EE\u4EE4\u724C</td></tr><tr><td>file</td><td>Stream</td><td>Y</td><td>\u6587\u4EF6\u6D41\uFF08multipart/form-data\uFF09</td></tr><tr><td>file_digest</td><td>String</td><td>Y</td><td>\u6587\u4EF6\u6458\u8981,\u7528\u4E8E\u6807\u8BB0\u6587\u4EF6</td></tr><tr><td>file_size</td><td>long</td><td>Y</td><td>\u6587\u4EF6\u5927\u5C0F</td></tr><tr><td>filename</td><td>String</td><td>Y</td><td>\u6587\u4EF6\u540D\u79F0</td></tr></tbody></table><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>POST /medias?access_token=<span class="token punctuation">{</span>access_token<span class="token punctuation">}</span>&amp;file_digest=\u6587\u4EF6\u6458\u8981&amp;file_size=\u6587\u4EF6\u5927\u5C0F
Content-Type<span class="token operator">:</span> multipart/form-data
Accept<span class="token operator">:</span> application/json

------------boundary
Content-Disposition<span class="token operator">:</span>form-data; name=<span class="token string">&quot;file&quot;</span>;filename=<span class="token string">&quot;&quot;</span>
Content-Type<span class="token operator">:</span> <span class="token punctuation">{</span>content-type<span class="token punctuation">}</span>

file content...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>\u8FD4\u56DE\u6570\u636E\uFF1A</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Everything is ok.&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z3JvdXAxL00wMC8wMC8xMi9yQkFCRzFuSWpkdUFJVmE2QUFBQ0ZPcVh3eXM0MjMubXA0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u9519\u8BEF\u8FD4\u56DE\u503C\uFF1A</strong></p><table><thead><tr><th>status</th><th>message</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>10011</td><td>token not found.</td><td>\u8BBF\u95EE\u4EE4\u724C\u4E0D\u5B58\u5728</td></tr></tbody></table>`,46);function e(p,o){return a}var l=s(n,[["render",e]]);export{l as default};
