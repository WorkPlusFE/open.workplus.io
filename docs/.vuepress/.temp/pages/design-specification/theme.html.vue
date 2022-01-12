<template><h1 id="主题定制" tabindex="-1"><a class="header-anchor" href="#主题定制" aria-hidden="true">#</a> 主题定制</h1>
<div class="custom-container warning"><p class="custom-container-title">版本要求</p>
<p>该功能需要升级 WorkPlus 到<code>v4.10.0</code>或更高版本。</p>
</div>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>WorkPlus 主题是基于设计规范落地实践的技术方案，支撑 WorkPlus 应用在不同企业文化场景，提供Android、iOS、PC、HTML 全链路生态支持，轻松构建企业专属的应用程序。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>更进一步，我们支持基于主题的千变万化、节日主题、暗黑模式、千人千面、灰度发布等特性。</p>
</div>
<h2 id="创建主题" tabindex="-1"><a class="header-anchor" href="#创建主题" aria-hidden="true">#</a> 创建主题</h2>
<p>移动端通过<code>主题包</code>的形似，来构建或者变换主题，主题包包含色值、字体、icon 等展示元素信息。存在以下概念：</p>
<ul>
<li><strong>默认主题</strong></li>
</ul>
<p>打包构建时，支持加入<code>主题包</code>，使移动端应用默认就打开显示。</p>
<ul>
<li><strong>远程主题</strong></li>
</ul>
<p>通过远程服务器动态下发的<code>主题包</code>，具有范围以及时效性。</p>
<h3 id="管理后台操作" tabindex="-1"><a class="header-anchor" href="#管理后台操作" aria-hidden="true">#</a> 管理后台操作</h3>
<p>登录管理后台，在<code>客户端管理</code>点击<code>主题换肤</code>：</p>
<p style="text-align: left">
  <img :src="$withBase('/theme/list-theme.png')" alt="list-theme" width="600">
</p>
<p>打开页面后点击<code>添加主题</code>，即可进入创建主题界面：</p>
<p style="text-align: left">
  <img :src="$withBase('/theme/new-theme.png')" alt="new-theme" width="600">
</p>
<h3 id="主题包结构" tabindex="-1"><a class="header-anchor" href="#主题包结构" aria-hidden="true">#</a> 主题包结构</h3>
<p>主题包以<code>.zip</code>压缩包的形式存在，具体结构以及定义如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>theme
├── img _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
│   └──  w6s_skin_img_icon_*.png/jpg
├── theme.json
├── dark_theme.json _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
├── font<span class="token punctuation">\</span>_<span class="token punctuation">\</span>*<span class="token punctuation">\</span>_regular.ttf _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
├── font<span class="token punctuation">\</span>_<span class="token punctuation">\</span>*<span class="token punctuation">\</span>_bold.ttf _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
├── native_iconfont.ttf _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
├── native_iconfont.json _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
├── web_iconfont.ttf _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
├── web_iconfont.json  _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
├── w6s_skin_theme.css
├── w6s_skin_dark_theme.css _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
└── w6s_skin_common_theme.css _<span class="token punctuation">(</span>**Optional**<span class="token punctuation">)</span>_
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li><code>img</code></li>
</ul>
<p>用以存放主题的图片资源，命名格式为：w6s_skin_img_icon_*.png/jpg；</p>
<ul>
<li><code>theme.json</code></li>
</ul>
<p>主题包配置入口文件，用以定义主题名、版本、包含的色彩参数、字体及 iconfont 资源映射，详细介绍请查看 <a href="#theme-json">theme.json 定义</a>；</p>
<ul>
<li><code>dark_theme.json</code></li>
</ul>
<p>主题包暗黑模式的配置文件；</p>
<ul>
<li><code>font_*_regular.ttf</code></li>
</ul>
<p>字体文件，常规类型；</p>
<ul>
<li><code>font_*_bold.ttf</code></li>
</ul>
<p>字体文件，粗体类型；</p>
<ul>
<li><code>native_iconfont.ttf</code></li>
</ul>
<p>原生使用的 iconfont 文件；</p>
<ul>
<li><code>native_iconfont.json</code></li>
</ul>
<p>原生使用的 iconfont 定义 json，包括 font_class、unicode 等；</p>
<ul>
<li><code>web_iconfont.ttf</code></li>
</ul>
<p>web 端使用的 iconfont 文件；</p>
<ul>
<li><code>web_iconfont.json</code></li>
</ul>
<p>web 端使用的 iconfont 定义 json，包括 font_class、unicode 等；</p>
<ul>
<li><code>w6s_skin_theme.css</code></li>
</ul>
<p>H5 本地对接引入的 CSS 文件；</p>
<ul>
<li><code>w6s_skin_dark_theme.css</code></li>
</ul>
<p><strong>w6s_skin_theme.css</strong> 暗黑模式对应的 CSS 文件；</p>
<ul>
<li><code>w6s_skin_common_theme.css</code></li>
</ul>
<p><strong>w6s_skin_theme.css</strong>，<strong>w6s_skin_dark_theme.css</strong> 公共依赖的 CSS 文件。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以上涉及 iconfont 的数据，可通过工具或者<a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">www.iconfont.cn<ExternalLinkIcon/></a> 生成。</p>
</div>
<h3 id="theme-json" tabindex="-1"><a class="header-anchor" href="#theme-json" aria-hidden="true">#</a> theme.json</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//按照"设计规范"色彩约定</span>
    <span class="token property">"primary"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
    <span class="token property">"secondary"</span><span class="token operator">:</span> <span class="token string">"#92A2BD"</span><span class="token punctuation">,</span>
    <span class="token property">"accent0"</span><span class="token operator">:</span> <span class="token string">"#FF9100"</span><span class="token punctuation">,</span>
    <span class="token property">"accent1"</span><span class="token operator">:</span> <span class="token string">"#C7C7C7"</span><span class="token punctuation">,</span>
    <span class="token property">"primary_text"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
    <span class="token property">"secondary_text"</span><span class="token operator">:</span> <span class="token string">"#A3A3A3"</span><span class="token punctuation">,</span>
    <span class="token property">"tertiary_text"</span><span class="token operator">:</span> <span class="token string">"#666666"</span><span class="token punctuation">,</span>
    <span class="token property">"common_text0"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
    <span class="token property">"main_background"</span><span class="token operator">:</span> <span class="token string">"#F2F3F4"</span><span class="token punctuation">,</span>
    <span class="token property">"title_background"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
    <span class="token property">"tabbar_background"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
    <span class="token property">"nav_shadow"</span><span class="token operator">:</span> <span class="token string">"#DDDDDD"</span><span class="token punctuation">,</span>
    <span class="token property">"surface_background0_normal"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
    <span class="token property">"surface_background0_pressed"</span><span class="token operator">:</span> <span class="token string">"#F2F3F4"</span><span class="token punctuation">,</span>
    <span class="token property">"surface_background1_normal"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
    <span class="token property">"surface_background1_pressed"</span><span class="token operator">:</span> <span class="token string">"#E4E5E6"</span><span class="token punctuation">,</span>
    <span class="token property">"surface_background2_normal"</span><span class="token operator">:</span> <span class="token string">"#F4F4F4"</span><span class="token punctuation">,</span>
    <span class="token property">"common_background0"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
    <span class="token property">"common_background1"</span><span class="token operator">:</span> <span class="token string">"#EEEFEA"</span><span class="token punctuation">,</span>
    <span class="token property">"common_divider0"</span><span class="token operator">:</span> <span class="token string">"#D9D9D9"</span><span class="token punctuation">,</span>
    <span class="token property">"icf_primary"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
    <span class="token property">"status_bar_content"</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span>
    <span class="token property">"button_background"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
    <span class="token property">"popup_background"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
    <span class="token property">"toast_background"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
    <span class="token property">"tabbar_item_unselected"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
    <span class="token property">"tabbar_item_selected"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
    <span class="token property">"tabbar_item_text_unselected"</span><span class="token operator">:</span> <span class="token string">"#A3A3A3"</span><span class="token punctuation">,</span>
    <span class="token property">"tabbar_item_text_selected"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
    <span class="token property">"particular"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"search_background"</span><span class="token operator">:</span> <span class="token string">"#F4F4F4"</span><span class="token punctuation">,</span>
      <span class="token property">"page_control_selected"</span><span class="token operator">:</span> <span class="token string">"#444444"</span><span class="token punctuation">,</span>
      <span class="token property">"page_control_unselected"</span><span class="token operator">:</span> <span class="token string">"#C7C7C7"</span><span class="token punctuation">,</span>
      <span class="token property">"watermark_text"</span><span class="token operator">:</span> <span class="token string">"99E1E1E1"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"font"</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//全局字体规范，覆盖全局文本控件</span>
    <span class="token property">"regular"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token string">"BMWGroup_Cond_Regular.ttf"</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"BMWGroupCondensed-Regular"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"bold"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token string">"BMWGroup_Cond_Bold.ttf"</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"BMWGroupCondensed-Bold"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"iconfont"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//iconfont文件映射</span>
    <span class="token property">"native"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token string">"native_iconfont.ttf"</span><span class="token punctuation">,</span>
      <span class="token property">"definition"</span><span class="token operator">:</span> <span class="token string">"native_iconfont.json"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"web"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token string">"web_iconfont.ttf"</span><span class="token punctuation">,</span>
      <span class="token property">"definition"</span><span class="token operator">:</span> <span class="token string">"web_iconfont.json"</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"dark"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//是否支持开启暗黑模式</span>
    <span class="token property">"enable"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"theme"</span><span class="token operator">:</span> <span class="token string">"workplus"</span><span class="token punctuation">,</span> <span class="token comment">//主题名字</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>  <span class="token comment">//主题版本号</span>
  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token number">-1</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>详细说明：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>color</td>
<td>按照设计规范色彩约定</td>
<td>必填</td>
</tr>
<tr>
<td>font</td>
<td>全局字体规范，覆盖全局文本控件</td>
<td>选填</td>
</tr>
<tr>
<td>iconfont</td>
<td>iconfont文件映射, 我们推荐主题包按约定引入iconfont，以达到更好的展示效果跟灵活变换，具体参考[详细说明]</td>
<td>选填</td>
</tr>
<tr>
<td>dark</td>
<td>暗黑模式配置，决定是否支持开启。若开启，则会显示<code>深色模式</code>设置项，操作路径：<br/><code>关于-&gt;通用-&gt;深色模式</code>。当该配置项打开后，会优先使用当前使用的主题包里的 <code>dark_theme.json</code>，若主题包不存在该文件，则会依次降级匹配对应的<code>dark_theme.json</code></td>
<td>选填</td>
</tr>
<tr>
<td>theme</td>
<td>主题包名称，例如: <code>新春版</code></td>
<td>必填</td>
</tr>
<tr>
<td>version</td>
<td>主题包版本号，每次更新时必须+1，否则会无法生效</td>
<td>必填</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>iconfont 以及暗黑模式开启后，对应资源不存在时都会有对应的降级处理，也即按照优先级依次寻找对应需要的资源文件，优先级顺序如下：</p>
<p><code>远程定制主题包 &gt; 远程默认主题包 -&gt; 构建时默认主题包</code></p>
<p>一般情况下，默认主题包的<code>dark_theme.json</code>满足多数场景。</p>
</div>
<h3 id="iconfont" tabindex="-1"><a class="header-anchor" href="#iconfont" aria-hidden="true">#</a> iconfont</h3>
<p>iconfont 可译为图标字体，顾名思义就是用字体文件取代图片文件来展示图标、特殊字体等元素的一种方法。简单来说，iconfont 就是把多个图标文件打包为 ttf 字体文件，注册到系统中，app 可以像使用字体一样使用图标。</p>
<p>其原理可以简单理解为通过 ttf 字体文件维护一个 unicode 码与图形的映射关系。当使用 iconfont 为项目助力的时候，配置多个图标不再需要去下载数个 png 文件，仅需要维护一套 ttf 字体文件即可。iconfont 不仅具有矢量性、可自由变化大小的特点，而且支持任意改变颜色。从项目角度来看，由于无需针对不同手机分辨率内置多张图片，可以一定程度减小包体积，而且方便UI同学对图标进行统一管理，为无用 icon 和相似 icon 检测做基础。</p>
<p>WorkPlus 在 UI 一致性建设的过程中，已经陆续完成了 200+ 个 iconfont 的替换，去除了许多冗余的 icon。通过主题的介入，基于WorkPlus 平台建设的轻应用，我们也支持使用同一套 iconfont，达到全面 UI 一致的目标。</p>
<p>我们通过 <a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn<ExternalLinkIcon/></a> 维护管理的部分 icon，如下：</p>
<p style="text-align: left">
  <img :src="$withBase('/theme/display-iconfont.jpg')" alt="display-iconfont" width="600">
</p>
<h2 id="使用主题" tabindex="-1"><a class="header-anchor" href="#使用主题" aria-hidden="true">#</a> 使用主题</h2>
<h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h3>
<p>WorkPlus 支持简单快捷的方式，让轻应用前端快速对接当前 WorkPlus 正在使用的主题，仅需要应用主题对应的 CSS 文件即可，CSS 文件里包含了<code>字体</code>、<code>色值</code>、<code>iconfont</code>等主题信息，当前支持<code>本地</code>以及<code>在线</code>的引入方式。</p>
<p><code>本地</code>引入规则如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"reslocal://open.workplus.io/w6s_skin_theme.css"</span><span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>WorkPlus 移动端识别到规则后，会对应返回当前主题包内的 CSS 资源给到前端，无需任何网络交互。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>目前<code>本地</code>方式在http部署的轻应用使用时，根据部署情况，在iOS 里可能会存在跨域问题，需要开发者关注处理，离线应用就不存在该问题。
<br/>
<code>在线</code>方式待后续提供，暂时需要开发者自行维护。</p>
</div>
<h3 id="w6s-skin-theme-css" tabindex="-1"><a class="header-anchor" href="#w6s-skin-theme-css" aria-hidden="true">#</a> w6s_skin_theme.css</h3>
<p>引入后，前端css包含如下内容👇</p>
<h4 id="色值" tabindex="-1"><a class="header-anchor" href="#色值" aria-hidden="true">#</a> 色值</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--primary</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--secondary</span><span class="token punctuation">:</span> #007AFF<span class="token punctuation">;</span>
  <span class="token property">--accent0</span><span class="token punctuation">:</span> #FF3B30<span class="token punctuation">;</span>
  <span class="token property">--accent1</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--primary-text</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--secondary-text</span><span class="token punctuation">:</span> #666666<span class="token punctuation">;</span>
  <span class="token property">--tertiary-text</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--common-text0</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">--main-background</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
  <span class="token property">--title-background</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">--tabbar-background</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">--nav-shadow</span><span class="token punctuation">:</span> #DDDDDD<span class="token punctuation">;</span>
  <span class="token property">--surface-background0-normal</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">--surface-background0-pressed</span><span class="token punctuation">:</span> #E4E5E6<span class="token punctuation">;</span>
  <span class="token property">--surface-background1-normal</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">--surface-background1-pressed</span><span class="token punctuation">:</span> #E4E5E6<span class="token punctuation">;</span>
  <span class="token property">--surface-background2-normal</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
  <span class="token property">--common-background0</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">--common-background1</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
  <span class="token property">--common-divider0</span><span class="token punctuation">:</span> #0C000000<span class="token punctuation">;</span>
  <span class="token property">--icf-primary</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--button-background</span><span class="token punctuation">:</span> #007AFF<span class="token punctuation">;</span>
  <span class="token property">--popup-background</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">--toast-background</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--tabbar-item-unselected</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--tabbar-item-selected</span><span class="token punctuation">:</span> #007AFF<span class="token punctuation">;</span>
  <span class="token property">--tabbar-item-text-unselected</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
  <span class="token property">--tabbar-item-text-selected</span><span class="token punctuation">:</span> #F12525<span class="token punctuation">;</span>
  <span class="token property">--search-background</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
  <span class="token property">--page-control-selected</span><span class="token punctuation">:</span> #007AFF<span class="token punctuation">;</span>
  <span class="token property">--page-control-unselected</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>CSS 变量对应的值具体以当前使用主题为准，以上仅提供参考，具体定义严格遵守 <RouterLink to="/design-specification/visual-norms/style.html">设计规范-视觉规范</RouterLink>。</p>
<h4 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"hcbm"</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAG7UABIAAAAA2Aw...QwAAAA=='</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'hcbm_Regular.ttf'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="iconfont-1" tabindex="-1"><a class="header-anchor" href="#iconfont-1" aria-hidden="true">#</a> iconfont</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.skin_icf</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"skin_icf"</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon_skin_icf_friendship_friend:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e6c9"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon_skin_icf_friendship_star:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e6ca"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon_skin_icf_session_remind:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e6c8"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon_skin_icf_common_mac:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\e6bf"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="暗黑模式" tabindex="-1"><a class="header-anchor" href="#暗黑模式" aria-hidden="true">#</a> 暗黑模式</h3>
<p>前端引入 CSS 后，相关色值 CSS 变量就自然支持暗黑模式了。WorkPlus 会在进入暗黑模式后，对应把色值变量无感知修改掉。</p>
<p>例如:</p>
<div style="display: flex">
  <div style="display: flex; ">
      <div style="background:#F5F5F5;width: 30px; height: 30px; "></div>
      <div style="line-height:30px; padding-left:10px">  --main-background: #F5F5F5 &nbsp;&nbsp;&nbsp; 替换为 &nbsp;&nbsp;&nbsp;</div>
  </div>
  <div style="display: flex; ">
    <div style="background:#000000;width: 30px; height: 30px;"></div>
    <div style="line-height:30px; padding-left:10px">  --main-background: #000000</div>
  </div>
</div>
<p><br/><br/>
对于不需要暗黑模式的轻应用，可以增加<code>dark=disabled</code>来禁止掉，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"reslocal://open.workplus.io/w6s_skin_theme.css?dark=disabled"</span><span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>支持参数:</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>dark=auto</td>
<td>自动匹配上当前使用的皮肤，也即如果当前用着暗黑模式，那就直接返回暗黑对应的w6s_skin_theme.css，否则，就正常的 w6s_skin_theme.css</td>
<td>默认为auto</td>
</tr>
<tr>
<td>dark=disabled</td>
<td>禁止使用暗黑模式，直接返回 w6s_skin_theme.css</td>
<td></td>
</tr>
<tr>
<td>dark=forced表示</td>
<td>强制使用暗黑模式，直接返回 w6s_skin_dark_theme.css</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="更多支持" tabindex="-1"><a class="header-anchor" href="#更多支持" aria-hidden="true">#</a> 更多支持</h3>
<p>更多特性正在开发中，敬请期待！</p>
<!-- 如支持通过`@media (prefers-color-scheme: dark) `语法支持暗黑，让轻应用哪怕脱离了WorkPlus 平台，也能继续支持暗黑模式。 -->
</template>
