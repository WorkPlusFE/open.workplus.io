<template><h1 id="网页头部" tabindex="-1"><a class="header-anchor" href="#网页头部" aria-hidden="true">#</a> 网页头部</h1>
<p>通常我们访问一个非全屏的轻应用，往往需要对头部功能进行设置，该模块提供自定义标题及左右按钮的能力。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当访问一个轻应用时，移动端仅打开一个 WebView，也就是头部只会有一个，此时所有的设置都是作用在同一个头部上。例如常见的单页面应用（SPA）开发，前端页面的切换时，都需要修改标题。且为了确保应用的可用性，设置返回按钮事件时请谨慎处理。</p>
</div>
<h2 id="设置标题" tabindex="-1"><a class="header-anchor" href="#设置标题" aria-hidden="true">#</a> 设置标题</h2>
<p>更换头部 title。</p>
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
<CodeWrapper custom-link="header/setTitle">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">'test title'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<div class="custom-container tip"><p class="custom-container-title">初始标题</p>
<p>打开一个页面，标题通常默认取自 html 页面上的 title 标签的内容，如果希望初始不显示任何标题内容，可以将 title 内容设置如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>$No_Title$<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这是一个约定好的标签内容，若设置，标题将显示空白。</p>
</div>
<h2 id="设置返回按钮动作" tabindex="-1"><a class="header-anchor" href="#设置返回按钮动作" aria-hidden="true">#</a> 设置返回按钮动作</h2>
<p>更换左侧的返回按钮动作。</p>
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
<CodeWrapper fn="header.leftButton">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">leftButton</span><span class="token punctuation">(</span>
  method<span class="token operator">:</span> <span class="token string">'goBack'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeWrapper>
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
<td>method</td>
<td>String</td>
<td>点击左边返回按钮需要执行的方法名</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>传入的方法名，必须在全局上能找到，否则无法触发。通常我们把方法挂在<code>window</code>对象下，如果使用<code>webpack</code>构建工具来开发，要特别注意这个问题。</p>
</div>
<h2 id="还原返回按钮事件" tabindex="-1"><a class="header-anchor" href="#还原返回按钮事件" aria-hidden="true">#</a> 还原返回按钮事件</h2>
<p>清除左侧按钮事件和显示。</p>
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
<CodeWrapper fn="header.clearLeftButton">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">clearLeftButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<h2 id="锁定网页顶部栏" tabindex="-1"><a class="header-anchor" href="#锁定网页顶部栏" aria-hidden="true">#</a> 锁定网页顶部栏</h2>
<p>锁定顶部栏，使得顶部栏按钮无效。</p>
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
<CodeWrapper fn="header.openWebView">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 锁定</span>
w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 解锁</span>
w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeWrapper>
<h2 id="设置右侧按钮动作" tabindex="-1"><a class="header-anchor" href="#设置右侧按钮动作" aria-hidden="true">#</a> 设置右侧按钮动作</h2>
<p>自定义右侧按钮，最多允许在右边定义三个按钮，每个按钮允许定义成下拉类型，下拉没有数量限制，但建议不超过 5 个。</p>
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
<p><strong>右键导航功能格式：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"更多"</span><span class="token punctuation">,</span>
    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">""</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"拍照"</span><span class="token punctuation">,</span>
    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"js"</span><span class="token punctuation">,</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"photo"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"下一步"</span><span class="token punctuation">,</span>
    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"js"</span><span class="token punctuation">,</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"next"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"刷新"</span><span class="token punctuation">,</span>
    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"system"</span><span class="token punctuation">,</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"refresh"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>上述为定义一个按钮的 JSON 格式，是由一个数组组成；格式采用<strong>流水式布局</strong>， 即数组中的第一个定义，为按钮本身的定义，它可以<code>List</code>，<code>Js</code>，<code>System</code>三者之一。</p>
<p>可定义包含三种行为：</p>
<ol>
<li>List 下拉组件，表示点击会弹出一个 popview，只能在一级菜单中定义，在二级菜单中无效；</li>
<li>JS 调用 HTML 页面中的 JS 全局方法；可在一级，二级菜单中定义；</li>
<li>System 系统事件；内置的一些系统行为，比如刷新，分享等，可在一级，二级菜单中定义；</li>
</ol>
<p>调用方法，每个按钮为一个数组:</p>
<CodeWrapper fn="header.rightButtons">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">rightButtons</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  items<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token string">"icon"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"更多"</span><span class="token punctuation">,</span> <span class="token string">"action"</span><span class="token operator">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token string">"icon"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span> <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span> <span class="token string">"action"</span><span class="token operator">:</span> <span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token string">"icon"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">,</span> <span class="token string">"action"</span><span class="token operator">:</span> <span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token operator">:</span> <span class="token string">"bbb"</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> 
      <span class="token punctuation">{</span><span class="token string">"icon"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"下一步"</span><span class="token punctuation">,</span> <span class="token string">"action"</span><span class="token operator">:</span> <span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token operator">:</span> <span class="token string">"next"</span><span class="token punctuation">}</span> 
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></CodeWrapper>
<p>如上，定义了两个右键按钮，第一个为更多，它是一个下拉式按钮，用户点击时，会出现 aaa、bbb 两个选项， 用户点击 aaa 时,会调用页面的 aaa 方法，点击 bbb 时，用调用 bbb 方法。</p>
<p>另一个是<code>下一步</code>按钮，这是个 JS 事件按钮，用户点击下一步时，会直接调用页面中的 JS（next）方法。</p>
<h3 id="系统默认行为事件" tabindex="-1"><a class="header-anchor" href="#系统默认行为事件" aria-hidden="true">#</a> 系统默认行为事件</h3>
<p>系统行为有自己的默认图标，如用户未指定文字或图标，使用默认图标，否则使用用户指定的图标或文字（图片优先）。</p>
<table>
<thead>
<tr>
<th>Action</th>
<th>行为</th>
</tr>
</thead>
<tbody>
<tr>
<td>Refresh</td>
<td>刷新当前页面</td>
</tr>
<tr>
<td>Share</td>
<td>分享</td>
</tr>
<tr>
<td>Close</td>
<td>关闭</td>
</tr>
</tbody>
</table>
<h3 id="按钮图标规则" tabindex="-1"><a class="header-anchor" href="#按钮图标规则" aria-hidden="true">#</a> 按钮图标规则</h3>
<p>目前支持两种规则：</p>
<ol>
<li>使用系统内置图标，如下表；</li>
<li>使用 base64，此时 icon 取值为 &quot;icon&quot;: &quot;base64:xxxxxx&quot;。</li>
</ol>
<p><strong>以下为系统内置图标：</strong></p>
<table>
<thead>
<tr>
<th>图标编号</th>
<th>图标</th>
<th>图标编号</th>
<th>图标</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td><img :src="$withBase('/header/ICON_1.png')" alt="icon1" width="40px"></td>
<td>1</td>
<td><img :src="$withBase('/header/ICON_2.png')" alt="icon2" width="40px"></td>
</tr>
<tr>
<td>2</td>
<td><img :src="$withBase('/header/ICON_3.png')" alt="icon3" width="40px"></td>
<td>3</td>
<td><img :src="$withBase('/header/ICON_4.png')" alt="icon4" width="40px"></td>
</tr>
<tr>
<td>4</td>
<td><img :src="$withBase('/header/ICON_5.png')" alt="icon5" width="40px"></td>
<td>5</td>
<td><img :src="$withBase('/header/ICON_6.png')" alt="icon6" width="40px"></td>
</tr>
<tr>
<td>6</td>
<td><img :src="$withBase('/header/ICON_7.png')" alt="icon7" width="40px"></td>
<td>7</td>
<td><img :src="$withBase('/header/ICON_8.png')" alt="icon8" width="40px"></td>
</tr>
<tr>
<td>8</td>
<td><img :src="$withBase('/header/ICON_9.png')" alt="icon9" width="40px"></td>
<td>9</td>
<td><img :src="$withBase('/header/ICON_10.png')" alt="icon10" width="40px"></td>
</tr>
<tr>
<td>10</td>
<td><img :src="$withBase('/header/ICON_11.png')" alt="icon11" width="40px"></td>
<td>11</td>
<td><img :src="$withBase('/header/ICON_12.png')" alt="icon12" width="40px"></td>
</tr>
<tr>
<td>12</td>
<td><img :src="$withBase('/header/ICON_13.png')" alt="icon13" width="40px"></td>
<td>13</td>
<td><img :src="$withBase('/header/ICON_14.png')" alt="icon14" width="40px"></td>
</tr>
<tr>
<td>14</td>
<td><img :src="$withBase('/header/ICON_15.png')" alt="icon15" width="40px"></td>
<td>15</td>
<td><img :src="$withBase('/header/ICON_16.png')" alt="icon16" width="40px"></td>
</tr>
<tr>
<td>16</td>
<td><img :src="$withBase('/header/ICON_17.png')" alt="icon17" width="40px"></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>以上图片均为白色，透明背景（为显示效果做了灰色背景处理）。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"刷新"</span><span class="token punctuation">,</span>
  <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"system"</span><span class="token punctuation">,</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"refresh"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如上述定义，表示将使用<code>图标编号为2</code>的图标，也就是 <img :src="$withBase('/header/ICON_3.png')" alt="icon3" width="40px"></p>
<h2 id="清除右侧按钮" tabindex="-1"><a class="header-anchor" href="#清除右侧按钮" aria-hidden="true">#</a> 清除右侧按钮</h2>
<p>清除右侧按钮事件和显示。</p>
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
<CodeWrapper fn="header.clearRightButtons">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">clearRightButtons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper>
<h2 id="设置左侧的按钮和关闭" tabindex="-1"><a class="header-anchor" href="#设置左侧的按钮和关闭" aria-hidden="true">#</a> 设置左侧的按钮和关闭</h2>
<p>是否隐藏或显示左侧的按钮和关闭字样。</p>
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
<CodeWrapper fn="header.visibleLeftButton">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">visibleLeftButton</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  showBack<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  showClose<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
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
<td>showBack</td>
<td>Boolean</td>
<td>是否显示<code>返回</code>按钮图标</td>
</tr>
<tr>
<td>showClose</td>
<td>Boolean</td>
<td>是否显示<code>关闭</code>文字</td>
</tr>
</tbody>
</table>
<h2 id="修改顶部栏颜色" tabindex="-1"><a class="header-anchor" href="#修改顶部栏颜色" aria-hidden="true">#</a> 修改顶部栏颜色</h2>
<p>时间和电量的那一栏（最顶上），而<code>Header</code>部分的颜色，需要在后台添加应用的时候设置。</p>
<p>该方法无需调用接口，在 html 页面的<code>&lt;head&gt;</code>标签里添加该标签即可，其中 content 的内容必须为 HEX 格式（以井号开头）。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_navigation_color<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#194c7b<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="显示搜索栏" tabindex="-1"><a class="header-anchor" href="#显示搜索栏" aria-hidden="true">#</a> 显示搜索栏 <badge type="success" text="v4.10.0+" /></h2>
<p>让原生头部变成一个搜索框。</p>
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
<CodeWrapper fn="header.showSearchBar">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">showSearchBar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hint<span class="token operator">:</span> <span class="token string">'请输入关键字'</span><span class="token punctuation">,</span>
  cancelMode<span class="token operator">:</span> <span class="token string">'reset'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeWrapper>
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
<td>hint</td>
<td>string</td>
<td>搜索时，输入框的 placeholder</td>
</tr>
<tr>
<td>cancelMode</td>
<td>reset|back|custom</td>
<td>取消按钮的行为，可不传，默认为 reset。具体说明请看下方。</td>
</tr>
</tbody>
</table>
<p><strong>关于 cancelMode 的说明:</strong></p>
<ul>
<li><code>reset</code> 表示点击取消时，隐藏搜索栏，还原回去；</li>
<li><code>back</code> 表示点击取消时，表现为同返回按钮一样的行为；</li>
<li><code>custom</code> 表示点击取消时，完全交由前端管理维护，原生不会触发任何行为。</li>
</ul>
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
<td>action</td>
<td>表示用户的动作，包括以下行为：input、search 及 cancel</td>
</tr>
<tr>
<td>content</td>
<td>搜索栏输入的内容</td>
</tr>
</tbody>
</table>
<p><strong>关于回调的触发：</strong></p>
<p>会触发回调的行为，有以下三种：</p>
<ol>
<li>用户在搜索栏输入内容，此时会触发 success 回调，并返回上述数据，action 为 input；</li>
<li>用户点击键盘的搜索按钮，此时会触发回调，action 为 search；</li>
<li>用户点击取消按钮，此时会触发回调，action 为 cancel。</li>
</ol>
<p>注意，在输入搜索内容有变化时，回调会马上被触发，此时执行搜索，应做好 <strong>防抖</strong> 处理。</p>
<h2 id="隐藏搜索栏" tabindex="-1"><a class="header-anchor" href="#隐藏搜索栏" aria-hidden="true">#</a> 隐藏搜索栏 <badge type="success" text="v4.10.0+" /></h2>
<p>针对<code>显示搜索栏</code>接口，用于隐藏搜索栏。</p>
<blockquote>
<p>仅对执行<code>显示搜索栏</code>接口后出现的搜索框有效！</p>
</blockquote>
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
<CodeWrapper fn="header.hideSearchBar" :qrcode="false">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">hideSearchBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeWrapper></template>
