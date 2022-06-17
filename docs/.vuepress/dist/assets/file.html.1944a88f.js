import{r as e,o as r,c,b as n,a,w as l,F as i,e as t,d as s}from"./app.3c883d3f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},k=t(`<h1 id="\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6" aria-hidden="true">#</a> \u6587\u4EF6</h1><div class="custom-container warning"><p class="custom-container-title">\u5173\u4E8E\u6587\u4EF6\u672C\u5730\u8DEF\u5F84</p><p>\u6587\u4EF6\u76F8\u5173\u7684\u63A5\u53E3\uFF0C\u82E5\u9700\u4F20\u5165\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u90FD\u9700\u8981\u53BB\u6389<code>file://</code>\u5F00\u5934\u3002</p><p>\u4F8B\u5982\uFF0C\u901A\u5E38\u6211\u4EEC\u83B7\u53D6\u5230\u7684\u672C\u5730\u56FE\u7247\u8DEF\u5F84\u4E3A\uFF1A<code>file:///var/mobile/xxxx/test.xlsx</code>\uFF0C\u9700\u53BB\u6389<code>file://</code>\uFF0C\u53D8\u6210<code>/var/mobile/xxxx/test.xlsx</code>\u3002</p></div><h2 id="\u9009\u62E9\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6587\u4EF6" aria-hidden="true">#</a> \u9009\u62E9\u6587\u4EF6</h2><p>\u6253\u5F00 WorkPlus \u6587\u4EF6\u9009\u62E9\u7BA1\u7406\u5668\uFF0C\u652F\u6301\u5355\u9009\u6216\u591A\u9009\uFF0C\u5E76\u81EA\u52A8\u4E0A\u4F20\u6587\u4EF6\u5230\u540E\u53F0\u5A92\u4F53\u4E2D\u5FC3\uFF0C\u8FD4\u56DE\u5BF9\u5E94 mediaId\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">chooseFiles</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5DF2\u9009\u6587\u4EF6\u672C\u5730\u5730\u5740&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileLimit</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">maxSelectCount</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token literal-property property">singleSelectSize</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">totalSelectSize</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>multiple</td><td>Boolean</td><td>\u662F\u5426\u4E3A\u591A\u9009</td></tr><tr><td>fileKeys</td><td>Array[String]</td><td>\u5DF2\u9009\u6587\u4EF6\u672C\u5730\u5730\u5740\u6570\u7EC4\uFF0C\u7528\u4E8E\u590D\u9009</td></tr><tr><td>fileLimit.maxSelectCount</td><td>Number</td><td>\u975E\u5FC5\u987B\uFF0C\u591A\u9009\u65F6\u6570\u91CF\u7684\u9650\u5236\uFF0C\u9ED8\u8BA4\u4E3A 9</td></tr><tr><td>fileLimit.singleSelectSize</td><td>Number</td><td>\u975E\u5FC5\u987B\uFF0C\u5355\u4E2A\u6587\u4EF6\u9009\u62E9\u5927\u5C0F\u9650\u5236(byte),-1\u8868\u793A\u4E0D\u9650\u5236\uFF0C\u9ED8\u8BA4\u4E3A -1</td></tr><tr><td>fileLimit.totalSelectSize</td><td>Number</td><td>\u975E\u5FC5\u987B\uFF0C\u6240\u6709\u6587\u4EF6\u9009\u62E9\u5927\u5C0F\u9650\u5236(byte),-1\u8868\u793A\u4E0D\u9650\u5236\uFF0C\u9ED8\u8BA4\u4E3A -1</td></tr></tbody></table><p><strong>\u8FD4\u56DE\u6570\u636E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>filePath</td><td>\u6587\u4EF6\u5728\u672C\u673A\u7684\u8DEF\u5F84</td></tr><tr><td>mediaId</td><td>\u8BE5\u6587\u4EF6\u5728\u5A92\u4F53\u4E2D\u5FC3\u7684 mediaId</td></tr><tr><td>name</td><td>\u6587\u4EF6\u540D\u5B57</td></tr></tbody></table><h2 id="\u6253\u5F00\u6587\u4EF6\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u6587\u4EF6\u8BE6\u60C5" aria-hidden="true">#</a> \u6253\u5F00\u6587\u4EF6\u8BE6\u60C5</h2><p>\u901A\u8FC7\u6307\u5B9A mediaId, fileName \u7B49\u53C2\u6570, \u6253\u5F00\u6587\u4EF6\u8BE6\u60C5\u754C\u9762\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BE5\u65B9\u6CD5\u6CA1\u6709\u56DE\u8C03</span>
w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">openFileDetail</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">filePath</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u4EF6\u5730\u5740&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mediaId</span><span class="token operator">:</span> <span class="token string">&#39;demo-mediaId&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isImage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>filePath</td><td>String</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u6587\u4EF6\u8DEF\u5F84, \u82E5\u4F20\u5165\u8BE5\u53C2\u6570, \u5219\u4F18\u5148\u4EE5\u8BE5\u8DEF\u5F84\u4E3A\u4E3B; \u652F\u6301\u672C\u5730\u4EE5\u53CAhttp url \u5730\u5740</td></tr><tr><td>fileName</td><td>String</td><td>\u6587\u4EF6\u540D</td></tr><tr><td>fileSize</td><td>Number</td><td>\u975E\u5FC5\u987B\uFF0C\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D byte</td></tr><tr><td>mediaId</td><td>String</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u4F20\u5165\u5A92\u4F53id\uFF0C\u8BE6\u89C1<code>filePath</code>\u53C2\u6570\u8BF4\u660E</td></tr><tr><td>isImage</td><td>Boolean</td><td>\u5FC5\u987B\uFF0C\u6307\u5B9A\u6587\u4EF6\u662F\u5426\u662F\u56FE\u7247, \u82E5\u4E3A true, \u5BA2\u6237\u7AEF\u5219\u5F3A\u5236\u6253\u5F00\u56FE\u7247\u9884\u89C8\u754C\u9762, false \u5219\u901A\u8FC7 fileName\u540E\u7F00\u6765\u5224\u65AD\u6587\u4EF6\u7C7B\u578B, \u975E\u56FE\u7247\u5219\u4F7F\u7528\u6587\u4EF6\u8BE6\u60C5\u754C\u9762</td></tr></tbody></table><h2 id="\u672C\u5730\u6253\u5F00\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6253\u5F00\u6587\u4EF6" aria-hidden="true">#</a> \u672C\u5730\u6253\u5F00\u6587\u4EF6</h2><p>\u539F\u751F\u6253\u5F00\u6587\u4EF6\uFF0Cpdf\u3001excel\u3001word \u53CA ppt \u7B49\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u4E0E&quot;\u6253\u5F00\u6587\u4EF6\u8BE6\u60C5&quot;\u7684\u533A\u522B</p><p>\u8BE5\u65B9\u6CD5\u662F\u76F4\u63A5\u901A\u8FC7\u7CFB\u7EDF\u7684\u65B9\u5F0F\u53BB\u6253\u5F00\u672C\u5730\u6587\u4EF6\uFF0C\u800C<code>\u6253\u5F00\u6587\u4EF6\u8BE6\u60C5</code>\u5219\u662F\u6253\u5F00\u4E00\u4E2A WorkPlus \u7684\u6587\u4EF6\u9884\u89C8\u9875\u9762\uFF0C\u8BE5\u9875\u9762\u5177\u5907\u4E0B\u8F7D\u6216\u9884\u89C8\u7684\u529F\u80FD\u3002</p></div><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BE5\u65B9\u6CD5\u6CA1\u6709\u56DE\u8C03</span>
w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u4EF6\u5730\u5740&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>path</td><td>String</td><td>\u6587\u4EF6\u8BBF\u95EE\u5730\u5740</td></tr></tbody></table><h2 id="\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> \u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728</h2><p>\u5224\u65AD\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">isFileExist</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u4EF6\u5730\u5740&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>path</td><td>String</td><td>\u6587\u4EF6\u8BBF\u95EE\u5730\u5740</td></tr></tbody></table><p><strong>\u8FD4\u56DE\u6570\u636E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>exist</td><td>Boolean, \u8868\u793A\u6587\u4EF6\u662F\u5426\u5B58\u5728</td></tr></tbody></table><h2 id="\u6587\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> \u6587\u4EF6\u4E0B\u8F7D</h2><p>\u4E0B\u8F7D\u6587\u4EF6\u5230\u672C\u5730\uFF0C\u53EF\u4EE5\u5728 WorkPlus \u6587\u4EF6\u9009\u62E9\u5668\u4E2D\u770B\u5230\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;https://demo.com/xx.file&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;file:///var/mobile/xx/files/xxx.file&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">trustAllHosts</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>source</td><td>string</td><td>\u6587\u4EF6\u7684\u4E0B\u8F7D\u5730\u5740\uFF0C\u9700\u505A encodeURI \u5904\u7406</td></tr><tr><td>target</td><td>string</td><td>\u6587\u4EF6\u4E0B\u8F7D\u540E\u5B58\u653E\u5728\u672C\u7EA7\u7684\u5730\u5740</td></tr><tr><td>trustAllHosts</td><td>boolean</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002 \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u5B83\u63A5\u53D7\u6240\u6709\u5B89\u5168\u8BC1\u4E66\u3002 \u8FD9\u5F88\u6709\u7528\uFF0C\u56E0\u4E3AAndroid\u62D2\u7EDD\u81EA\u7B7E\u540D\u5B89\u5168\u8BC1\u4E66\u3002 \u4E0D\u5EFA\u8BAE\u7528\u4E8E\u751F\u4EA7\u3002</td></tr><tr><td>options</td><td>object</td><td>\u901A\u5E38\u7528\u4E8E\u8BBE\u7F6E\u5934\u90E8\u4FE1\u606F</td></tr></tbody></table>`,42),b=s("\u5177\u4F53\u63A5\u53E3\u53C2\u6570\u8BF4\u660E\uFF0C\u8BF7\u67E5\u770B"),h={href:"https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-file-transfer/index.html#download",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B98\u65B9\u6587\u6863"),f=s("\u3002"),g=n("p",null,[n("strong",null,"\u8FD4\u56DE\u6570\u636E")],-1),y=n("p",null,[s("\u4E0B\u8F7D\u6210\u529F\u540E\uFF0C\u5C06\u4F1A\u6267\u884C"),n("code",null,"success"),s("\u56DE\u8C03\u65B9\u6CD5\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A"),n("code",null,"FileEntry"),s("\u5BF9\u8C61\u3002\u82E5\u5931\u8D25\uFF0C\u5C06\u89E6\u53D1"),n("code",null,"fail"),s("\u56DE\u8C03\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A"),n("code",null,"FileTransferError"),s("\u9519\u8BEF\u5BF9\u8C61\u3002")],-1),v={class:"custom-container tip"},_=n("p",{class:"custom-container-title"},"\u5173\u4E8E target \u53C2\u6570",-1),x=s("\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5F97\u77E5\u8BBE\u5907\u672C\u5730\u5B58\u50A8\u6587\u4EF6\u7684\u5177\u4F53\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7"),S=s("\u83B7\u53D6\u6587\u4EF6\u76EE\u5F55\u8DEF\u5F84"),j=s("\u83B7\u53D6\u3002"),w=t(`<h2 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20</h2><p>\u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u670D\u52A1\u5668\uFF0C\u901A\u5E38\u7528\u4E8E\u9009\u62E9\u56FE\u7247\u6216\u8005\u6587\u4EF6\u540E\u4E0A\u4F20\u5230\u7B2C\u4E09\u65B9\u670D\u52A1\u5668\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">fileURL</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u4EF6\u672C\u5730\u5730\u5740&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u4F20\u5A92\u4F53\u7684\u670D\u52A1\u5668\u5730\u5740&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">trustAllHosts</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E0A\u4F20\u6210\u529F\u56DE\u8C03</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E0A\u4F20\u5931\u8D25\u56DE\u8C03</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">progress</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">loaded<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// loaded\uFF1A\u5DF2\u7ECF\u4E0A\u4F20\u7684\uFF0Ctottal\uFF1A\u6587\u4EF6\u603B\u5927\u5C0F</span>
    <span class="token comment">// \u53EF\u5728\u6B64\u5904\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u7684\u8FDB\u5EA6\u8BA1\u7B97</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>fileURL</td><td>string</td><td>\u6587\u4EF6\u5728\u8BBE\u5907\u4E2D\u7684\u672C\u5730\u5730\u5740</td></tr><tr><td>server</td><td>string</td><td>\u4E0A\u4F20\u6587\u4EF6\u7684\u670D\u52A1\u5668\u5730\u5740</td></tr><tr><td>trustAllHosts</td><td>boolean</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002 \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u5B83\u63A5\u53D7\u6240\u6709\u5B89\u5168\u8BC1\u4E66\u3002 \u8FD9\u5F88\u6709\u7528\uFF0C\u56E0\u4E3AAndroid\u62D2\u7EDD\u81EA\u7B7E\u540D\u5B89\u5168\u8BC1\u4E66\u3002 \u4E0D\u5EFA\u8BAE\u7528\u4E8E\u751F\u4EA7\u3002</td></tr></tbody></table>`,7),E=s("\u5177\u4F53\u63A5\u53E3\u53C2\u6570\u8BF4\u660E\uFF0C\u8BF7\u67E5\u770B"),A={href:"https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-file-transfer/index.html#upload",target:"_blank",rel:"noopener noreferrer"},B=s("\u5B98\u65B9\u6587\u6863"),I=s("\u3002"),N=t(`<h2 id="\u83B7\u53D6\u6587\u4EF6\u76EE\u5F55\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6587\u4EF6\u76EE\u5F55\u8DEF\u5F84" aria-hidden="true">#</a> \u83B7\u53D6\u6587\u4EF6\u76EE\u5F55\u8DEF\u5F84</h2><p>\u83B7\u53D6\u8BBE\u5907\u7684\u6587\u4EF6\u5B58\u5728\u76EE\u5F55\uFF0C\u5305\u62EC\u4E0B\u8F7D\u6587\u4EF6\u5939\u53CA\u7F51\u76D8\uFF08\u5982\u679C\u6709\uFF09\u53CA\u7528\u6237\u81EA\u5B9A\u4E49\u76EE\u5F55\u3002</p><p><strong>\u4F7F\u7528\u8BF4\u660E</strong></p><table><thead><tr><th>\u5BA2\u6237\u7AEF</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>\u652F\u6301\u60C5\u51B5</td><td>\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">getFilePath</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">system</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">custom</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>system</td><td>string</td><td>\u8868\u793A WorkPlus \u5B9A\u4E49\u7684\u8DEF\u5F84\uFF0C\u76EE\u524D\u652F\u6301<code>file</code>, <code>dropbox</code>\u7C7B\u578B, \u5206\u522B\u83B7\u53D6\u4E0B\u8F7D\u6587\u4EF6\u76EE\u5F55, \u8DDF\u7F51\u76D8\u76EE\u5F55</td></tr><tr><td>custom</td><td>string</td><td>\u8F7B\u5E94\u7528\u81EA\u5B9A\u4E49\u7684\u7528\u6237\u76EE\u5F55\uFF0C\u5982\u4F20\u5165\u53C2\u6570<code>&quot;custom&quot; : &quot;abc&quot;</code>, app \u5C06\u521B\u5EFA<code>sdcard_root/app_file/username/abc</code>\u7684\u6587\u4EF6\u76EE\u5F55, \u5E76\u8FD4\u56DE\u8DEF\u5F84\u7ED9\u8C03\u7528\u8005</td></tr></tbody></table><p>\u6CE8\u610F\uFF0C\u4EE5\u4E0A\u53C2\u6570<code>system</code>\u4F18\u5148\u7EA7\u8F83\u9AD8, \u5373\u4E24\u4E2A\u7C7B\u578B\u540C\u65F6\u4F20\u5165\u65F6, \u4EE5<code>system</code>\u4E3A\u51C6\u3002</p>`,8);function F(L,P){const p=e("ExternalLinkIcon"),o=e("RouterLink");return r(),c(i,null,[k,n("p",null,[b,n("a",h,[m,a(p)]),f]),g,y,n("div",v,[_,n("p",null,[x,a(o,{to:"/js-sdk/file.html#%E8%8E%B7%E5%8F%96%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E8%B7%AF%E5%BE%84"},{default:l(()=>[S]),_:1}),j])]),w,n("p",null,[E,n("a",A,[B,a(p)]),I]),N],64)}var z=u(d,[["render",F]]);export{z as default};
