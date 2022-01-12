<template><h1 id="网页" tabindex="-1"><a class="header-anchor" href="#网页" aria-hidden="true">#</a> 网页</h1>
<h2 id="打开一个网页" tabindex="-1"><a class="header-anchor" href="#打开一个网页" aria-hidden="true">#</a> 打开一个网页</h2>
<p>传入地址，新窗口打开网页。</p>
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
<CodeWrapper fn="webview.openWebView">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">openWebView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://网页地址'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Test'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useAndroidWebview</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useSystemWebview</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">displayMode</span><span class="token operator">:</span> <span class="token string">'FULL_SCREEN'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">muteConfig</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'always_hide_close'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>url</td>
<td>String</td>
<td>要打开的网址 url</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>显示的标题</td>
</tr>
<tr>
<td>useAndroidWebview</td>
<td>Boolean</td>
<td>是否使用 android 原生 webview 打开, 否则使用 workplus 订制的 webview</td>
</tr>
<tr>
<td>useSystemWebview</td>
<td>Boolean</td>
<td>等同于 useAndroidWebview，只是该参数能用于ios以及android平台</td>
</tr>
<tr>
<td>displayMode</td>
<td>String</td>
<td>全屏打开 webview(即不包含原生标题栏)，默认非全屏</td>
</tr>
<tr>
<td>muteConfig</td>
<td>String[]</td>
<td>屏蔽移动端设置，具体设置值由移动端制定提供。<code>always_hide_close</code>代表一直隐藏&quot;关闭&quot;按钮，传入该参数代表该设置会被无效化。</td>
</tr>
</tbody>
</table>
<h2 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h2>
<p>关闭整个 WebView。</p>
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
<CodeWrapper fn="webview.exit">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<h2 id="弹出分享对话框" tabindex="-1"><a class="header-anchor" href="#弹出分享对话框" aria-hidden="true">#</a> 弹出分享对话框</h2>
<p>弹出分享对话框，跳转分享。</p>
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
<CodeWrapper fn="webview.share">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://www.workplus.io'</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'WorkPlus'</span>
  <span class="token literal-property property">coverMediaId</span><span class="token operator">:</span> <span class="token string">'分享图标mediaId'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">coverUrl</span><span class="token operator">:</span> <span class="token string">'分享图标 url'</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token number">0</span> 
  <span class="token literal-property property">summary</span> <span class="token operator">:</span> <span class="token string">'这是一段摘要'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directly</span><span class="token operator">:</span> <span class="token string">'w6s_contact'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directSession</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'discussion'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>url</td>
<td>String</td>
<td>要分享的网页地址</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>分享后显示的标题</td>
</tr>
<tr>
<td>coverMediaId</td>
<td>String</td>
<td>分享后显示的图标，媒体id</td>
</tr>
<tr>
<td>coverUrl</td>
<td>String</td>
<td>分享后显示的图标，网络地址，与 coverMediaId 二选一即可</td>
</tr>
<tr>
<td>scope</td>
<td>Number</td>
<td>用于显示范围，0 只显示内部分享的操作，包括&quot;发送给&quot;，&quot;分享到圈子&quot;；1则显示全部</td>
</tr>
<tr>
<td>summary</td>
<td>String</td>
<td>分享的内容摘要，一般会放到分享后的描述位置</td>
</tr>
<tr>
<td>directly</td>
<td>String</td>
<td>可选值：w6s_contact、w6s_current_session，具体说明请看下方描述</td>
</tr>
<tr>
<td>directSession.id</td>
<td>String</td>
<td>会话的id</td>
</tr>
<tr>
<td>directSession.type</td>
<td>String</td>
<td>会话的类型</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">directly 参数</p>
<p>直接执行分享操作支持: <code>w6s_contact</code>对应“分享弹出窗”的“发送给”，为App内部的联系人等列表；<code>w6s_current_session</code>表示直接分享给指定会话，无任何弹出窗或者选择界面。当<code>directly</code>存在值时，<code>scope</code>参数无意义，请忽略, 默认<code>directly</code>为空，也即该接口会显示”分享弹出框“。</p>
</div>
<h2 id="控制屏幕旋转" tabindex="-1"><a class="header-anchor" href="#控制屏幕旋转" aria-hidden="true">#</a> 控制屏幕旋转</h2>
<p>根据参数控制屏幕横屏显示或者竖屏显示。</p>
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
<CodeWrapper custom-link="webview/changeOrientation">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">changeOrientation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">landscape</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>landscape</td>
<td>Boolean</td>
<td>表示横屏或者竖屏，非必须</td>
</tr>
<tr>
<td>lock</td>
<td>Boolean</td>
<td>表示锁定当前横屏或者竖屏的状态, false 表示 app 随用户系统设置来控制旋转，默认是 false</td>
</tr>
</tbody>
</table>
<blockquote>
<p>lock 参数在低于 4.9.1 版本的 APP 下可能无效。</p>
</blockquote>
<h2 id="添加水印" tabindex="-1"><a class="header-anchor" href="#添加水印" aria-hidden="true">#</a> 添加水印</h2>
<p>给页面添加水印。</p>
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
<CodeWrapper custom-link="webview/waterMask">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">addWaterMask</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">textColor</span><span class="token operator">:</span> <span class="token string">'#000000'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">orgId</span><span class="token operator">:</span> <span class="token string">'xxxid'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">alpha</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">verticalPadding</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>textColor</td>
<td>String</td>
<td>字体颜色</td>
</tr>
<tr>
<td>orgId</td>
<td>String</td>
<td>组织id，传值则以这个组织下的雇员名显示内容，可不传，默认当前组织</td>
</tr>
<tr>
<td>alpha</td>
<td>Number</td>
<td>水印文字透明度 0-1.0之间，可不传， 默认1.0</td>
</tr>
<tr>
<td>verticalPadding</td>
<td>Number</td>
<td>水印文字上下的垂直高度（密度），可不传，默认40</td>
</tr>
<tr>
<td>fontSize</td>
<td>Number</td>
<td>字体大小，可不传，默认16</td>
</tr>
</tbody>
</table>
<h2 id="移除水印" tabindex="-1"><a class="header-anchor" href="#移除水印" aria-hidden="true">#</a> 移除水印</h2>
<p>给页面移除水印。</p>
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
<CodeWrapper fn="webview.removeWaterMask" :qrcode="false">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">removeWaterMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<h2 id="注册摇一摇监听" tabindex="-1"><a class="header-anchor" href="#注册摇一摇监听" aria-hidden="true">#</a> 注册摇一摇监听</h2>
<p>注册摇一摇监听。</p>
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
<CodeWrapper custom-link="webview/shake">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">registerShakeListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<p>前端需要实现<code>onWorkplusShake()</code>方法, 在该处执行自己的业务, 摇一摇后将在该方法回调。</p>
<div class="custom-container warning"><p class="custom-container-title">onWorkplusShake</p>
<p>该方法必须为全局方法，并且方法名不可以转换。</p>
</div>
<h2 id="注销摇一摇监听" tabindex="-1"><a class="header-anchor" href="#注销摇一摇监听" aria-hidden="true">#</a> 注销摇一摇监听</h2>
<p>注销摇一摇监听。</p>
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
<CodeWrapper custom-link="webview/shake">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">unregisterShakeListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<h2 id="微信分享-会话-朋友圈" tabindex="-1"><a class="header-anchor" href="#微信分享-会话-朋友圈" aria-hidden="true">#</a> 微信分享(会话/朋友圈)</h2>
<p>根据接口直接调起微信分享页面。</p>
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
<CodeWrapper fn="webview.wxShare" :qrcode="false">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">wxShare</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'wx63f4a539bf345965'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'这是一个标题'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">'webpage'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是概要'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">thumb</span><span class="token operator">:</span> <span class="token string">'base64://xxxxx=='</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scene</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'url'</span><span class="token operator">:</span> <span class="token string">'https://workplus.io'</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>appId</td>
<td>String</td>
<td>微信的<code>AppId</code></td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>分享的标题</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>分享的消息类型，webpage(网页链接), image(图片)</td>
</tr>
<tr>
<td>description</td>
<td>String</td>
<td>描述</td>
</tr>
<tr>
<td>thumb</td>
<td>String</td>
<td>缩略图数据，为 base64</td>
</tr>
<tr>
<td>scene</td>
<td>Number</td>
<td>0 为聊天界面 1为朋友圈</td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>{'url': 'www.workplus.io'} or {'image': 'base64://AAAAAA=='}</td>
</tr>
</tbody>
</table>
<p><code>data</code>参数的值，请注意:</p>
<ul>
<li>type 为<code>webpage</code>时，url 字段为分享的链接；</li>
<li>type 为<code>image</code>时，image 为分享的图片链接或者是 base64。</li>
</ul>
</template>
