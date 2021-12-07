<template><h1 id="工作台" tabindex="-1"><a class="header-anchor" href="#工作台" aria-hidden="true">#</a> 工作台</h1>
<p class="w6s-image">
  <img :src="$withBase('/app/workbench.png')" alt="工作台" width="15%" />
</p>
<p>本文档用于指引第三方业务系统接入<code>WorkPlus工作台</code>。</p>
<h2 id="卡片类型" tabindex="-1"><a class="header-anchor" href="#卡片类型" aria-hidden="true">#</a> 卡片类型</h2>
<p>工作台当前支持以下卡片类型，它们的数据来源为：</p>
<table>
<thead>
<tr>
<th>卡片类型</th>
<th>基础定义来源</th>
<th>业务数据来源</th>
</tr>
</thead>
<tbody>
<tr>
<td>搜索卡片</td>
<td>后台</td>
<td>无</td>
</tr>
<tr>
<td>Banner卡片</td>
<td>后台</td>
<td>后台</td>
</tr>
<tr>
<td>快捷入口卡片1</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>快捷入口卡片2</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>常用应用卡片</td>
<td>后台</td>
<td>无</td>
</tr>
<tr>
<td>列表卡片1</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>列表卡片2</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>新闻卡片1</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>新闻卡片2</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>新闻卡片3</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>新闻卡片4</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>分类卡片</td>
<td>后台</td>
<td>第三方业务</td>
</tr>
<tr>
<td>自定义卡片</td>
<td>后台</td>
<td>无</td>
</tr>
</tbody>
</table>
<h2 id="常用卡片说明" tabindex="-1"><a class="header-anchor" href="#常用卡片说明" aria-hidden="true">#</a> 常用卡片说明</h2>
<h3 id="搜索卡片" tabindex="-1"><a class="header-anchor" href="#搜索卡片" aria-hidden="true">#</a> 搜索卡片</h3>
<blockquote>
<p>搜索卡片无第三方业务数据</p>
</blockquote>
<p><el-popover
  placement="right"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/SEARCH.png')" alt="搜索卡片" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">点击预览</el-button>
</el-popover>
<ul>
<li>搜索卡片的的所有数据来源于后台，无需调用客户系统的数据；</li>
<li>大小固定；</li>
<li>搜索卡片包含搜索功能及右边的扫一扫功能，不可定制其它功能。</li>
</ul>
<h3 id="banner卡片" tabindex="-1"><a class="header-anchor" href="#banner卡片" aria-hidden="true">#</a> Banner卡片</h3>
<blockquote>
<p>Banner卡片无第三方业务数据</p>
</blockquote>
<p><el-popover
  placement="right"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/BANNER.png')" alt="Banner卡片" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">点击预览</el-button>
</el-popover>
<ul>
<li>无需调用业务数据接口；</li>
<li>大小固定；</li>
<li>Banner卡片的广告定义也在后台中进行定义；</li>
</ul>
<h3 id="常用应用卡片" tabindex="-1"><a class="header-anchor" href="#常用应用卡片" aria-hidden="true">#</a> 常用应用卡片</h3>
<blockquote>
<p>常用应用卡片无第三方业务数据</p>
</blockquote>
<p><el-popover
  placement="right"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/SHORTCUT.png')" alt="常用应用卡片" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">点击预览</el-button>
</el-popover>
<ul>
<li>常用应用卡片的逻辑是对应用的相关编辑；</li>
<li>无需调用业务数据接口；</li>
<li>大小固定；</li>
</ul>
<h3 id="快捷方式入口卡片" tabindex="-1"><a class="header-anchor" href="#快捷方式入口卡片" aria-hidden="true">#</a> 快捷方式入口卡片</h3>
<blockquote>
<p>该卡片有两种风格</p>
</blockquote>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/SHORTCUT_1.png')" alt="快捷方式入口卡片1" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">快捷方式入口卡片-1</el-button>
</el-popover>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/SHORTCUT_2_1.png')" alt="快捷方式入口卡片2" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">快捷方式入口卡片-2</el-button>
</el-popover>
<ul>
<li>是否显示标题，内容个数，样式由后台 API 决定及返回；</li>
<li>快捷方式支持红点显示规则（参见<a href="/light-app/notify.md" target="_blank" rel="noopener noreferrer">应用红点<OutboundLink/></a>)；</li>
<li>调用业务系统数据，渲染 UI。</li>
</ul>
<p><strong>业务数据返回参考：</strong></p>
<details>
<summary>点击查看业务数据详情</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">"message"</span><span class="token operator">:</span> <span class="token string">"everything is ok"</span><span class="token punctuation">,</span>
  <span class="token string">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//卡片内容定义</span>
    <span class="token string">"items"</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//显示类型，文本或数字</span>
        <span class="token string">"show_type"</span><span class="token operator">:</span> <span class="token string">"number"</span><span class="token punctuation">,</span>
        <span class="token comment">//数字值</span>
        <span class="token string">"number"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>
        <span class="token comment">//标题</span>
        <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"待办"</span><span class="token punctuation">,</span>
        <span class="token comment">//事件类型</span>
        <span class="token string">"event_type"</span><span class="token operator">:</span> <span class="token string">"Url"</span><span class="token punctuation">,</span>
        <span class="token comment">//点击事件值 </span>
        <span class="token string">"event_value"</span><span class="token operator">:</span> <span class="token string">"http://www.baidu.com/todo"</span><span class="token punctuation">,</span>
        <span class="token comment">//红点请求配置</span>
        <span class="token string">"tip_url"</span><span class="token operator">:</span> <span class="token string">"http://data/com/tip"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string">"show_type"</span><span class="token operator">:</span> <span class="token string">"icon"</span><span class="token punctuation">,</span>
        <span class="token string">"icon_type"</span><span class="token operator">:</span> <span class="token string">"Url"</span><span class="token punctuation">,</span>
        <span class="token string">"icon_value"</span><span class="token operator">:</span> <span class="token string">"http://icon.com/a.png"</span><span class="token punctuation">,</span>
        <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"待办"</span><span class="token punctuation">,</span>
        <span class="token string">"event_type"</span><span class="token operator">:</span> <span class="token string">"Url"</span><span class="token punctuation">,</span>
        <span class="token string">"event_value"</span><span class="token operator">:</span> <span class="token string">"http://www.workplus.io/todo"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></details>
<p><strong>字段说明：</strong></p>
<p><code>items</code>元素说明：</p>
<p>每个<code>item</code>代表快捷方式中的一个显示内容：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>show_type</td>
<td>Icon：图标，number: 数字</td>
</tr>
<tr>
<td>number</td>
<td>仅 show_type 为 number 时有效</td>
</tr>
<tr>
<td>title</td>
<td>标题内容</td>
</tr>
<tr>
<td>icon_type</td>
<td>图标类型，仅在 show_type 为 icon 时有效，值为 <code>Url</code>、<code>MediaId</code>、<code>Inner</code></td>
</tr>
<tr>
<td>icon_value</td>
<td>图标值，仅在 show_type 为 icon 时有效</td>
</tr>
<tr>
<td>event_type</td>
<td>点击事件</td>
</tr>
<tr>
<td>event_value</td>
<td>事件值</td>
</tr>
<tr>
<td>tip_url</td>
<td>红点规则 URL，客户端会从此 URL 请求红点的逻辑</td>
</tr>
</tbody>
</table>
<h3 id="列表卡片" tabindex="-1"><a class="header-anchor" href="#列表卡片" aria-hidden="true">#</a> 列表卡片</h3>
<blockquote>
<p>该卡片有两种风格</p>
</blockquote>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/LIST_1.png')" alt="列表卡片1" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">列表卡片-1</el-button>
</el-popover>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/LIST_2.png')" alt="列表卡片2" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">列表卡片-2</el-button>
</el-popover>
<ul>
<li>是否显示标题，内容个数，样式由后台 API 决定及返回</li>
<li>调用业务系统数据，渲染UI</li>
</ul>
<p><strong>业务数据返回参考：</strong></p>
<details>
<summary>点击查看业务数据详情</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string">"message"</span><span class="token operator">:</span> <span class="token string">"everything is ok"</span><span class="token punctuation">,</span>
	<span class="token string">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//列表元素定义</span>
		<span class="token string">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token comment">//标题</span>
			<span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"细数麦当劳那些'奇特'的餐"</span><span class="token punctuation">,</span>
			<span class="token comment">//时间</span>
			<span class="token string">"date_time"</span><span class="token operator">:</span> <span class="token string">"2018-01-12"</span><span class="token punctuation">,</span>
			<span class="token comment">//来源</span>
			<span class="token string">"source"</span><span class="token operator">:</span> <span class="token string">"消息来源"</span><span class="token punctuation">,</span>
			<span class="token comment">//事件类型</span>
			<span class="token string">"event_type"</span><span class="token operator">:</span> <span class="token string">"Url"</span><span class="token punctuation">,</span>
			<span class="token comment">//事件值</span>
			<span class="token string">"event_value"</span><span class="token operator">:</span> <span class="token string">"http://www.baidu.com/todo"</span><span class="token punctuation">,</span>
			<span class="token comment">//图片类型(列表卡片2才支持)</span>
			<span class="token string">"icon_type"</span><span class="token operator">:</span> <span class="token string">"Url"</span><span class="token punctuation">,</span>
			<span class="token comment">//图片链接(列表卡片2才支持)</span>
			<span class="token string">"icon_value"</span><span class="token operator">:</span> <span class="token string">"http://icon.com/a.png"</span>
		<span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details>
<p><strong>字段说明：</strong></p>
<p><code>items</code>元素说明：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>列表主内容</td>
</tr>
<tr>
<td>datetime</td>
<td>时间值</td>
</tr>
<tr>
<td>source</td>
<td>来源</td>
</tr>
<tr>
<td>event_type</td>
<td>事件类型</td>
</tr>
<tr>
<td>event_value</td>
<td>事件值</td>
</tr>
<tr>
<td>icon_type</td>
<td>图标类型，仅在 show_type 为 icon 时有效(列表卡片2才支持)，值为 <code>Url</code>、<code>MediaId</code>、<code>Inner</code></td>
</tr>
<tr>
<td>icon_value</td>
<td>图标值，仅在 show_type 为 icon 时有效(列表卡片2才支持)</td>
</tr>
</tbody>
</table>
<h3 id="新闻卡片" tabindex="-1"><a class="header-anchor" href="#新闻卡片" aria-hidden="true">#</a> 新闻卡片</h3>
<blockquote>
<p>该卡片有四种风格</p>
</blockquote>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/NEWS_1.png')" alt="新闻卡片1" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">新闻卡片-1</el-button>
</el-popover>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/NEWS_2.png')" alt="新闻卡片2" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">新闻卡片-2</el-button>
</el-popover>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/NEWS_3.png')" alt="新闻卡片3" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">新闻卡片-3</el-button>
</el-popover>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/NEWS_4.png')" alt="新闻卡片4" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">新闻卡片-4</el-button>
</el-popover>
<p><strong>业务数据返回参考：</strong></p>
<details>
<summary>点击查看业务数据详情</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">"message"</span><span class="token operator">:</span> <span class="token string">"everything is ok"</span><span class="token punctuation">,</span>
  <span class="token string">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string">"items"</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//新闻主标题</span>
        <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"细数麦当劳那些'奇特'的餐"</span><span class="token punctuation">,</span>
        <span class="token comment">//新闻副标题</span>
        <span class="token string">"sub_title"</span><span class="token operator">:</span> <span class="token string">"作为一个老牌的快餐企业，制作流程的标准化，规范化并不是其成功的唯一秘决"</span><span class="token punctuation">,</span>
        <span class="token comment">//时间</span>
        <span class="token string">"date_time"</span><span class="token operator">:</span> <span class="token string">"2018-01-12"</span><span class="token punctuation">,</span>
        <span class="token comment">//来源</span>
        <span class="token string">"source"</span><span class="token operator">:</span> <span class="token string">"消息来源"</span><span class="token punctuation">,</span>
        <span class="token comment">//事件类型</span>
        <span class="token string">"event_type"</span><span class="token operator">:</span> <span class="token string">"Url"</span><span class="token punctuation">,</span>
        <span class="token comment">//事件值</span>
        <span class="token string">"event_value"</span><span class="token operator">:</span> <span class="token string">"http://www.baidu.com/todo"</span><span class="token punctuation">,</span>
        <span class="token comment">//图片类型</span>
        <span class="token string">"icon_type"</span><span class="token operator">:</span> <span class="token string">"Url"</span><span class="token punctuation">,</span>
        <span class="token comment">//图片链接</span>
        <span class="token string">"icon_value"</span><span class="token operator">:</span> <span class="token string">"http://icon.com/a.png"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></details>
<p><strong>字段说明：</strong></p>
<p><code>items</code>元素说明：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>新闻主标题</td>
</tr>
<tr>
<td>sub_title</td>
<td>新闻子标题</td>
</tr>
<tr>
<td>date_time</td>
<td>新闻时间</td>
</tr>
<tr>
<td>source</td>
<td>新闻来源</td>
</tr>
<tr>
<td>event_type</td>
<td>事件类型，值为 <code>Url</code>、<code>System</code></td>
</tr>
<tr>
<td>event_value</td>
<td>点击事件值</td>
</tr>
<tr>
<td>icon_type</td>
<td>图标类型，值为 <code>Url</code>、<code>MediaId</code>、<code>Inner</code></td>
</tr>
<tr>
<td>icon_value</td>
<td>图标值</td>
</tr>
</tbody>
</table>
<h3 id="分类卡片" tabindex="-1"><a class="header-anchor" href="#分类卡片" aria-hidden="true">#</a> 分类卡片</h3>
<blockquote>
<p>分类卡片适用于组合多个列表数据</p>
</blockquote>
<p><el-popover
  placement="top"
  width="400"
  trigger="click">
<img :src="$withBase('/widget/CATEGORY_1.png')" alt="分类卡片" width="100%" /></p>
  <el-button type="primary" size="small" slot="reference">点击预览</el-button>
</el-popover>
<ul>
<li>分类卡片本身无业务数据，来源于后台数据；</li>
<li>每个分类的内容才调用业务数据；</li>
<li>分类的内容支持<code>列表卡片</code>和<code>新闻卡片</code>，其返回数据参考前文。</li>
</ul>
<h3 id="自定义卡片" tabindex="-1"><a class="header-anchor" href="#自定义卡片" aria-hidden="true">#</a> 自定义卡片</h3>
<blockquote>
<p>自定义卡片内容主要通过<code>H5页面</code>进行展示。</p>
</blockquote>
<ul>
<li>自定义卡片的数据来源于后台；</li>
<li>本身无业务内容。</li>
</ul>
<p><strong>URL 参数说明：</strong></p>
<p>自定义卡片在初始化时，会加载 H5页面，但卡片本身无法提前知道卡片内容的高度等信息，允许通过以<code>URL参数</code>的形式来告知客户端，如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>xxxx<span class="token punctuation">.</span>html<span class="token operator">?</span>custom_height<span class="token operator">=</span><span class="token number">300</span><span class="token operator">&amp;</span>custom_scale<span class="token operator">=</span><span class="token number">0.5</span><span class="token operator">&amp;</span>open_with_out<span class="token operator">=</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>custom_height</td>
<td>浮点型</td>
<td>自定义卡片高度</td>
</tr>
<tr>
<td>custom_scale</td>
<td>浮点型</td>
<td>自定义卡片高度相对宽的比例 (传 scale 优选选用，与 height 互斥)</td>
</tr>
<tr>
<td>open_with_out</td>
<td>布尔值</td>
<td>是否打开新的页面跳转链接</td>
</tr>
</tbody>
</table>
<p>除了上述属性，同样支持带入其他参数，详情查看<a href="/light-app/workbench.md#%E5%8F%82%E6%95%B0%E6%94%AF%E6%8C%81" target="_blank" rel="noopener noreferrer">参数支持<OutboundLink/></a>。</p>
<div class="custom-container warning"><p class="custom-container-title">关于自定义卡片</p>
<p>毫无疑问，自定义卡片是最灵活的，因为一切都通过<code>H5页面</code>进行展示，一个卡片就是一个<code>WebView</code>；但也因为该原因，会产生一些问题及约束：</p>
<ul>
<li>性能不如原生卡片；</li>
<li>网络不稳定时，可能会导致卡片无法正常展示，白屏等；</li>
<li>卡片高度可能会存在偏差，导致卡片内容展示不完整；</li>
<li>不支持使用<code>js-sdk</code>能力；</li>
<li>不支持离线资源。</li>
</ul>
</div>
<h2 id="参数支持" tabindex="-1"><a class="header-anchor" href="#参数支持" aria-hidden="true">#</a> 参数支持</h2>
<p>对于工作台中的任意 URL，用户可配置参数支持，以下为支持的参数：</p>
<p>::: v-pre</p>
<table>
<thead>
<tr>
<th>字段</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>{{userId}}</td>
<td>当前登录<code>用户ID</code></td>
</tr>
<tr>
<td>{{username}}</td>
<td>当前登录<code>用户名</code></td>
</tr>
<tr>
<td>{{username/name}}</td>
<td>用户名/中文名</td>
</tr>
<tr>
<td>{{domainId}}</td>
<td>域ID</td>
</tr>
<tr>
<td>{{orgCode}}</td>
<td>当前<code>组织code</code>，也是<code>orgId</code></td>
</tr>
<tr>
<td>{{ticket}}</td>
<td>临时<code>ticket</code>值</td>
</tr>
<tr>
<td>{{language}}</td>
<td>当前应用的语言版本，如<code>en</code>、<code>zh-CN</code></td>
</tr>
<tr>
<td>:::</td>
<td></td>
</tr>
</tbody>
</table>
<p>如：</p>
<p>::: v-pre</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>data<span class="token punctuation">.</span>com<span class="token operator">?</span>usernmae<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">// 会被替换成：</span>
http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>data<span class="token punctuation">.</span>com<span class="token operator">?</span>usename<span class="token operator">=</span>foo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>:::</p>
<h3 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h3>
<p>国际化通过参数支持，由返回内容自行国际化，返回不同语言数据。</p>
<h3 id="红点规则" tabindex="-1"><a class="header-anchor" href="#红点规则" aria-hidden="true">#</a> 红点规则</h3>
<p>对于支持红点的卡片类型（当前为快捷卡片），相关红点配置请参考<a href="/light-app/notify.md" target="_blank" rel="noopener noreferrer">应用红点<OutboundLink/></a>。</p>
<h2 id="系统行为值" tabindex="-1"><a class="header-anchor" href="#系统行为值" aria-hidden="true">#</a> 系统行为值</h2>
<p>当工作台中的<code>event_type</code>定义为<code>System</code>时，其点击行为，将会是 WorkPlus 内置的一些行为：</p>
<table>
<thead>
<tr>
<th>值</th>
<th>系统行为</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>CREATE_GROUP</td>
<td>创建群聊</td>
<td>打开创建群聊的页面</td>
</tr>
<tr>
<td>QRCODE_SCAN</td>
<td>扫一扫</td>
<td>打开应用的扫一扫页面</td>
</tr>
<tr>
<td>BING_MESSAGE</td>
<td>必应消息</td>
<td>打开必应消息页面</td>
</tr>
<tr>
<td>VOICE_MEETING</td>
<td>语音视频</td>
<td>打开音视频功能</td>
</tr>
</tbody>
</table>
</template>
