import{e as s}from"./app.3c883d3f.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=s(`<h1 id="\u5E94\u7528\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u6D88\u606F" aria-hidden="true">#</a> \u5E94\u7528\u6D88\u606F</h1><h2 id="\u6D88\u606F\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u63A8\u9001" aria-hidden="true">#</a> \u6D88\u606F\u63A8\u9001</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>mbox<span class="token operator">?</span>access_token<span class="token operator">=</span><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span><span class="token operator">&amp;</span>source_type<span class="token operator">=</span><span class="token punctuation">{</span>source_type<span class="token punctuation">}</span><span class="token operator">&amp;</span>for_all<span class="token operator">=</span><span class="token punctuation">{</span>for_all<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BF7\u6C42\u5934\u90E8\uFF1A</strong></p><table><thead><tr><th>\u8BF7\u6C42\u5934</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Content-Type</td><td>application/json</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u53C2\u6570\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>access_token</td><td>String</td><td>Y</td><td>\u8BBF\u95EE\u4EE4\u724C</td></tr><tr><td>source_type</td><td>String</td><td>N</td><td>\u679A\u4E3E,NATIVE/ISV,\u9ED8\u8BA4\u503C\u4E3ANATIVE,ISV\u5E94\u7528\u65F6\u4F20ISV</td></tr><tr><td>type</td><td>String</td><td>Y</td><td>\u6D88\u606F\u7C7B\u578B,default/text/iamge/file/article/template</td></tr><tr><td>for_all</td><td>Boolean</td><td>N</td><td>\u662F\u5426\u5168\u5458\u63A8\u9001,client_ids\u3001usernames\u3001scopes\u4E09\u8005\u5747\u4E3A\u7A7A,\u4E14for_all=true\u65F6,\u624D\u5168\u5458\u63A8\u6D88\u606F,\u5426\u5219\u5747\u4E0D\u751F\u6548</td></tr><tr><td>client_ids</td><td>List&lt;String&gt;</td><td>N</td><td>\u6D88\u606F\u63A8\u9001\u7684\u7528\u6237\u6807\u8BC6</td></tr><tr><td>scopes</td><td>List&lt;String&gt;</td><td>N</td><td>\u53D1\u9001\u8303\u56F4,\u7EC4\u7EC7\u8DEF\u5F84,\u4F8B\u5982/122/234/</td></tr><tr><td>usernames</td><td>List&lt;String&gt;</td><td>N</td><td>\u7528\u6237\u8D26\u53F7\u5217\u8868</td></tr><tr><td>platforms</td><td>List</td><td>N</td><td>\u679A\u4E3E,ANDROID/IOS/PC,\u9ED8\u8BA4\u503C\u4E3AIOS\u548CANDROID</td></tr><tr><td>body</td><td>Map</td><td>Y</td><td>\u63A8\u9001\u6D88\u606F\u4F53</td></tr><tr><td>body.at_all</td><td>boolean</td><td>N</td><td>\u662F\u5426AT\u6240\u6709\u4EBA\u5458</td></tr><tr><td>body.content</td><td>String</td><td>N</td><td>\u53D1\u9001\u5185\u5BB9,\u5177\u4F53\u6839\u636E\u6D88\u606F\u7C7B\u578B\u51B3\u5B9A</td></tr><tr><td>body.is_gif</td><td>int</td><td>N</td><td>\u662F\u5426gif\u56FE\u7247,1\u4EE3\u8868\u662F</td></tr><tr><td>body.size</td><td>int</td><td>N</td><td>\u5927\u5C0F</td></tr><tr><td>body.width</td><td>int</td><td>N</td><td>\u56FE\u7247\u5BBD\u5EA6</td></tr><tr><td>body.height</td><td>int</td><td>N</td><td>\u56FE\u7247\u9AD8\u5EA6</td></tr><tr><td>body.media_id</td><td>String</td><td>N</td><td>\u53D1\u9001\u7684\u5A92\u4F53ID</td></tr><tr><td>body.path</td><td>String</td><td>N</td><td>\u53D1\u9001\u7684\u5A92\u4F53ID</td></tr><tr><td>body.file_status</td><td>int</td><td>N</td><td>\u6587\u4EF6\u72B6\u6001,0\u4E3A\u6B63\u5E38</td></tr><tr><td>body.name</td><td>String</td><td>N</td><td>\u540D\u79F0</td></tr><tr><td>body.articles.summary</td><td>String</td><td>N</td><td>\u6587\u7AE0\u6458\u8981</td></tr><tr><td>body.articles.cover_url</td><td>String</td><td>N</td><td>\u5C01\u9762URL</td></tr><tr><td>body.articles.cover_enabled</td><td>boolean</td><td>N</td><td>\u662F\u5426\u663E\u793A\u5C01\u9762,true/false</td></tr><tr><td>body.articles.create_time</td><td>long</td><td>N</td><td>\u521B\u5EFA\u65F6\u95F4</td></tr><tr><td>body.articles.title</td><td>String</td><td>N</td><td>\u6587\u7AE0\u6807\u9898</td></tr><tr><td>body.articles.url</td><td>String</td><td>N</td><td>\u56FE\u6587\u8BE6\u60C5\u5185\u5BB9,\u6709\u4E9B\u83B7\u53D6url\u5185\u5BB9,\u4E3A\u7A7A\u65F6,\u56FE\u6587\u8BE6\u60C5\u663E\u793Acontent\u5185\u5BB9</td></tr><tr><td>body.template_id</td><td>String</td><td>N</td><td>\u6A21\u677FID,\u6A21\u677F\u6D88\u606F\u5FC5\u586B</td></tr><tr><td>body.data</td><td>String</td><td>N</td><td>\u6A21\u677F\u6570\u636E,\u6A21\u677F\u6D88\u606F\u5FC5\u586B,value\u4E3A\u53D8\u91CF\u503C,color\u4E3A\u989C\u8272,font_size\u4E3A\u5B57\u53F7\u5927\u5C0F</td></tr><tr><td>body.emphasis_keyword</td><td>String</td><td>N</td><td>\u9AD8\u4EAE\u5C5E\u6027,\u4FDD\u7559\u5B57\u6BB5</td></tr><tr><td>body.top_color</td><td>String</td><td>N</td><td>\u9876\u90E8\u989C\u8272</td></tr><tr><td>body.top_avatar</td><td>String</td><td>N</td><td>\u9876\u90E8\u56FE\u6807</td></tr><tr><td>body.top_title</td><td>String</td><td>N</td><td>\u9876\u90E8\u6807\u9898</td></tr><tr><td>body.data.text_style</td><td>String</td><td>N</td><td>normal(\u6B63\u5E38)bold(\u7C97\u4F53)</td></tr></tbody></table><p><strong>\u8BF7\u6C42\u793A\u4F8B\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">/</span>v1<span class="token operator">/</span>apps<span class="token operator">/</span>mbox<span class="token operator">?</span>access_token<span class="token operator">=</span>b646339e2f4f4234af6bae5f72db9879
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u6587\u672C\u793A\u4F8B\uFF1A</strong></p><details><summary>\u70B9\u51FB\u67E5\u770B\u6587\u672C\u793A\u4F8B</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TEXT&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;at_all&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;client_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;c24b6a94cfb14b79af12a1399edc9e31&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ANDROID&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;IOS&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;PC&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details><p><strong>\u56FE\u7247\u793A\u4F8B\uFF1A</strong></p><details><summary>\u70B9\u51FB\u67E5\u770B\u56FE\u7247\u793A\u4F8B</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IMAGE&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;is_gif&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1852</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z3JvdXAxL00wMC8wMC80OC9yQkFCR1ZkaFI5Q0FjNmp2QUFBSFBIRkhXSkk1NDEuanBn&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u56FE\u7247\u5185\u5BB9,base64\u7F16\u7801&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">280</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;client_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;c24b6a94cfb14b79af12a1399edc9e31&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ANDROID&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;IOS&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;PC&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details><p><strong>\u6587\u4EF6\u793A\u4F8B\uFF1A</strong></p><details><summary>\u70B9\u51FB\u67E5\u770B\u6587\u4EF6\u793A\u4F8B</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FILE&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//\u6587\u4EF6\u72B6\u6001,0\u4EE3\u8868\u6B63\u5E38</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">71416</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IMG_0778.GIF&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z3JvdXAxL00wMC8wMC80Ny9yQkFCR1ZkaEdBZUFYRkxmQUFFVy1JYmNRbTgwNjkuZ2lm&quot;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;client_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;c24b6a94cfb14b79af12a1399edc9e31&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ANDROID&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;IOS&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;PC&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><p><strong>\u56FE\u6587\u793A\u4F8B\uFF1A</strong></p><details><summary>\u70B9\u51FB\u67E5\u770B\u56FE\u6587\u793A\u4F8B</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ARTICLE&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;articles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;cover_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;show_cover&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;cover_media_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z3JvdXAxL00wMC8wMC8zQi9yQkFCR1ZkVlFwYUFicjJ3QUFQa2NkSHlFM280MDMuanBn&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1465205632846</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u51EF\u91CC&quot;</span><span class="token punctuation">,</span>  
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E91\u5357\u4E3D\u6C5F&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;p&gt;\u8FD9\u4E2A\u6587\u7AE0\u88AB\u5220\u9664\u4E86&lt;/p&gt;&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ANDROID&quot;</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;IOS&quot;</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;PC&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details><p><strong>\u6A21\u677F\u6D88\u606F--\u6839\u636E\u6A21\u677FID\uFF1A</strong></p><details><summary>\u70B9\u51FB\u67E5\u770B\u6A21\u677F\u6D88\u606F\u793A\u4F8B</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TEMPLATE&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;template_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;152891af-1bec-4a18-8201-a58e08a7afad&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;top_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;top_avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z3JvdXAxL00wMC8wMC80MC9yQkFCR1ZkWDQ0ZUFRY21LQUFBZXVHZDBHS0U4MTkuanBn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;top_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D41\u7A0B\u5927\u5E08&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword1&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;339208499&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;font_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;text_style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword2&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2016\u5E7401\u670805\u65E5&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;font_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;text_style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword3&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;830138013810&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;font_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;text_style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword4&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8310380131&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;font_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;text_style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emphasis_keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword1.DATA&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;client_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;a86e83a26be44eb59806901cc8be5d5c&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ANDROID&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></details><p><strong>\u8FD4\u56DE\u6570\u636E\uFF1A</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>\u63A8\u9001\u8BA1\u5212ID</td></tr><tr><td>material_id</td><td>String</td><td>\u63A8\u9001\u7684\u7D20\u6750ID</td></tr><tr><td>app_id</td><td>String</td><td>\u63A8\u9001\u8005ID</td></tr><tr><td>expects</td><td>int</td><td>\u76EE\u6807\u63A8\u9001\u6570</td></tr><tr><td>fails</td><td>int</td><td>\u63A8\u9001\u5931\u8D25\u6570</td></tr><tr><td>oks</td><td>int</td><td>\u6210\u529F\u63A8\u9001\u6570</td></tr><tr><td>scopes</td><td>List&lt;String&gt;</td><td>\u53D1\u9001\u8303\u56F4,\u7EC4\u7EC7\u8DEF\u5F84,\u4F8B\u5982/122/234/</td></tr><tr><td>client_ids</td><td>List&lt;String&gt;</td><td>\u6D88\u606F\u63A8\u9001\u7684\u5BF9\u8C61\u6807\u8BB0</td></tr></tbody></table><p><strong>\u8FD4\u56DE\u793A\u4F8B\uFF1A</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Everything is ok.&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domain_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atwork&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;org_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a918d8a6-67e9-4e76-8503-baa73d3c6fd2&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f3b9250c-96d4-414b-be7f-308f2fdeca99&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;app_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;92bc3faa-12bd-4afc-9962-01f2410f0bee&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;material_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;52dec89a-04a0-4127-99b5-a3d136c638a4&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;expects&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;fails&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;oks&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1485053077748</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;refresh_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;expect_time&quot;</span><span class="token operator">:</span> <span class="token number">1485054877748</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;scopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;client_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/232/301/c24b6a94cfb14b79af12a1399edc9e31&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><strong>\u9519\u8BEF\u8FD4\u56DE\u503C\uFF1A</strong></p><table><thead><tr><th>status</th><th>message</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>10011</td><td>token not found.</td><td>\u8BBF\u95EE\u4EE4\u724C\u4E0D\u5B58\u5728</td></tr><tr><td>202012</td><td>\u6CA1\u6709\u5BF9\u5E94\u7684\u96C7\u5458</td><td>\u6CA1\u6709\u5BF9\u5E94\u7684\u96C7\u5458</td></tr></tbody></table><p><strong>\u9519\u8BEF\u8FD4\u56DE\u503C\uFF1A</strong></p><table><thead><tr><th>status</th><th>message</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>10011</td><td>token not found.</td><td>\u8BBF\u95EE\u4EE4\u724C\u4E0D\u5B58\u5728</td></tr></tbody></table>`,27);function p(o,e){return t}var c=n(a,[["render",p]]);export{c as default};
