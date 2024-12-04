import{_ as s,c as t,o as i,a5 as a,b9 as n,ba as l,bb as h,bc as p,bd as e,be as d,bf as k,bg as r,bh as o,bi as E,bj as c,bk as u,bl as g}from"./chunks/framework.BPJJowRx.js";const w=JSON.parse('{"title":"工作台","description":"","frontmatter":{},"headers":[],"relativePath":"light-app/workbench.md","filePath":"light-app/workbench.md"}'),y={name:"light-app/workbench.md"},F=a('<h1 id="工作台" tabindex="-1">工作台 <a class="header-anchor" href="#工作台" aria-label="Permalink to &quot;工作台&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">阅读本文，你将了解：</p><ul><li>所有卡片的总类和表现形式；</li><li>如何开发定制的离线 H5 卡片；</li><li>如何实现工作台的应用红点。</li></ul></div><h2 id="什么是工作台" tabindex="-1">什么是工作台 <a class="header-anchor" href="#什么是工作台" aria-label="Permalink to &quot;什么是工作台&quot;">​</a></h2><p><img src="'+n+'" alt="工作台" width="400"></p><p>“工作台”是 WokrPlus 移动平台上的一个比较重要的 Tab 栏目，通过卡片组合的方式来打造个性化的工作台。可根据不同人员的需求来定义工作台卡片，然后将卡片搭建成不同的工作台配置进行下发，实现“千人千面”。同时，在移动端上可对工作台进行管理和定制，并且支持离线 H5 卡片，应用红点提醒等。</p><div class="warning custom-block"><p class="custom-block-title">需要更高级别的定制？</p><p>此文档描述的“工作台”为原生应用开发的页面，需要通过约定好的方式进行配置和管理。</p><p>如果需要一个高度定制的工作台，我们推荐使用 H5 的模式进行整个工作台的页面开发，WorkPlus 支持将 Tab 绑定到访问指定的 H5 页面，并且支持沉浸式头部、离线资源包等。</p></div><h2 id="卡片类型" tabindex="-1">卡片类型 <a class="header-anchor" href="#卡片类型" aria-label="Permalink to &quot;卡片类型&quot;">​</a></h2><p>工作台当前支持以下卡片类型，它们的数据来源为：</p><details class="details custom-block"><summary>查看所有卡片类型</summary><table><thead><tr><th>卡片类型</th><th>基础定义来源</th><th>业务数据来源</th></tr></thead><tbody><tr><td>搜索卡片</td><td>后台</td><td>无</td></tr><tr><td>Banner卡片</td><td>后台</td><td>后台</td></tr><tr><td>快捷入口卡片1</td><td>后台</td><td>第三方业务</td></tr><tr><td>快捷入口卡片2</td><td>后台</td><td>第三方业务</td></tr><tr><td>常用应用卡片</td><td>后台</td><td>无</td></tr><tr><td>列表卡片1</td><td>后台</td><td>第三方业务</td></tr><tr><td>列表卡片2</td><td>后台</td><td>第三方业务</td></tr><tr><td>新闻卡片1</td><td>后台</td><td>第三方业务</td></tr><tr><td>新闻卡片2</td><td>后台</td><td>第三方业务</td></tr><tr><td>新闻卡片3</td><td>后台</td><td>第三方业务</td></tr><tr><td>新闻卡片4</td><td>后台</td><td>第三方业务</td></tr><tr><td>分类卡片</td><td>后台</td><td>第三方业务</td></tr><tr><td>自定义卡片</td><td>后台</td><td>无</td></tr></tbody></table></details><h2 id="常用卡片说明" tabindex="-1">常用卡片说明 <a class="header-anchor" href="#常用卡片说明" aria-label="Permalink to &quot;常用卡片说明&quot;">​</a></h2><h3 id="_1、搜索卡片" tabindex="-1">1、搜索卡片 <a class="header-anchor" href="#_1、搜索卡片" aria-label="Permalink to &quot;1、搜索卡片&quot;">​</a></h3><p><img src="'+l+'" alt="搜索卡片" width="400"></p><p>搜索卡片无第三方业务数据。</p><ul><li>搜索卡片的的所有数据来源于后台，无需调用客户系统的数据；</li><li>大小固定；</li><li>搜索卡片包含搜索功能及右边的扫一扫功能，不可定制其它功能。</li></ul><h3 id="_2、banner卡片" tabindex="-1">2、Banner卡片 <a class="header-anchor" href="#_2、banner卡片" aria-label="Permalink to &quot;2、Banner卡片&quot;">​</a></h3><p><img src="'+h+'" alt="Banner卡片" width="400"></p><p>Banner卡片无第三方业务数据。</p><ul><li>无需调用业务数据接口；</li><li>大小固定；</li><li>Banner卡片的广告定义也在后台中进行定义；</li></ul><h3 id="_3、常用应用卡片" tabindex="-1">3、常用应用卡片 <a class="header-anchor" href="#_3、常用应用卡片" aria-label="Permalink to &quot;3、常用应用卡片&quot;">​</a></h3><p><img src="'+p+'" alt="常用应用卡片" width="400"></p><p>常用应用卡片无第三方业务数据。</p><ul><li>常用应用卡片的逻辑是对应用的相关编辑；</li><li>无需调用业务数据接口；</li><li>大小固定；</li></ul><h3 id="_4、快捷方式入口卡片" tabindex="-1">4、快捷方式入口卡片 <a class="header-anchor" href="#_4、快捷方式入口卡片" aria-label="Permalink to &quot;4、快捷方式入口卡片&quot;">​</a></h3><p><img src="'+e+'" alt="快捷方式入口卡片1" width="400"></p><p><img src="'+d+`" alt="快捷方式入口卡片2" width="400"></p><p>该卡片有两种风格。</p><ul><li>是否显示标题，内容个数，样式由后台 API 决定及返回；</li><li>快捷方式支持红点显示规则（参见<a href="/light-app/notify.html">应用红点</a>)；</li><li>调用业务系统数据，渲染 UI。</li></ul><p><strong>业务数据返回参考：</strong></p><details><summary>点击查看业务数据详情</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;everything is ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //卡片内容定义</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //显示类型，文本或数字</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;show_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //数字值</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;待办&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //事件类型</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;event_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //点击事件值 </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;event_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.baidu.com/todo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //红点请求配置</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;tip_url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://data/com/tip&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;show_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;icon_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;icon_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://icon.com/a.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;待办&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;event_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;event_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.workplus.io/todo&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><p><strong>字段说明：</strong></p><p><code>items</code>元素说明：</p><p>每个<code>item</code>代表快捷方式中的一个显示内容：</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>show_type</td><td>Icon：图标，number: 数字</td></tr><tr><td>number</td><td>仅 show_type 为 number 时有效</td></tr><tr><td>title</td><td>标题内容</td></tr><tr><td>icon_type</td><td>图标类型，仅在 show_type 为 icon 时有效，值为 <code>Url</code>、<code>MediaId</code>、<code>Inner</code></td></tr><tr><td>icon_value</td><td>图标值，仅在 show_type 为 icon 时有效</td></tr><tr><td>event_type</td><td>点击事件</td></tr><tr><td>event_value</td><td>事件值</td></tr><tr><td>tip_url</td><td>红点规则 URL，客户端会从此 URL 请求红点的逻辑</td></tr></tbody></table><h3 id="_5、列表卡片" tabindex="-1">5、列表卡片 <a class="header-anchor" href="#_5、列表卡片" aria-label="Permalink to &quot;5、列表卡片&quot;">​</a></h3><p><img src="`+k+'" alt="列表卡片1" width="400"></p><p><img src="'+r+`" alt="列表卡片2" width="400"></p><p>该卡片有两种风格。</p><ul><li>是否显示标题，内容个数，样式由后台 API 决定及返回；</li><li>调用业务系统数据，渲染 UI；</li></ul><p><strong>业务数据返回参考：</strong></p><details><summary>点击查看业务数据详情</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;everything is ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		//列表元素定义</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			//标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;细数麦当劳那些&#39;奇特&#39;的餐&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			//时间</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;date_time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2018-01-12&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			//来源</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;消息来源&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			//事件类型</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;event_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			//事件值</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;event_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.baidu.com/todo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			//图片类型(列表卡片2才支持)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;icon_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">			//图片链接(列表卡片2才支持)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;icon_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://icon.com/a.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><p><strong>字段说明：</strong></p><p><code>items</code>元素说明：</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>title</td><td>列表主内容</td></tr><tr><td>datetime</td><td>时间值</td></tr><tr><td>source</td><td>来源</td></tr><tr><td>event_type</td><td>事件类型</td></tr><tr><td>event_value</td><td>事件值</td></tr><tr><td>icon_type</td><td>图标类型，仅在 show_type 为 icon 时有效(列表卡片2才支持)，值为 <code>Url</code>、<code>MediaId</code>、<code>Inner</code></td></tr><tr><td>icon_value</td><td>图标值，仅在 show_type 为 icon 时有效(列表卡片2才支持)</td></tr></tbody></table><h3 id="_6、新闻卡片" tabindex="-1">6、新闻卡片 <a class="header-anchor" href="#_6、新闻卡片" aria-label="Permalink to &quot;6、新闻卡片&quot;">​</a></h3><p><img src="`+o+'" alt="新闻卡片1" width="400"></p><details class="details custom-block"><summary>查看其他三种</summary><p><img src="'+E+'" alt="新闻卡片2" width="400"></p><p><img src="'+c+'" alt="新闻卡片3" width="400"></p><p><img src="'+u+`" alt="新闻卡片4" width="400"></p></details><p>该卡片有四种风格。</p><p><strong>业务数据返回参考：</strong></p><details><summary>点击查看业务数据详情</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;everything is ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //新闻主标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;细数麦当劳那些&#39;奇特&#39;的餐&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //新闻副标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;sub_title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;作为一个老牌的快餐企业，制作流程的标准化，规范化并不是其成功的唯一秘决&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //时间</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;date_time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2018-01-12&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //来源</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;消息来源&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //事件类型</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;event_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //事件值</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;event_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.baidu.com/todo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //图片类型</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;icon_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //图片链接</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;icon_value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://icon.com/a.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><p><strong>字段说明：</strong></p><p><code>items</code>元素说明：</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>title</td><td>新闻主标题</td></tr><tr><td>sub_title</td><td>新闻子标题</td></tr><tr><td>date_time</td><td>新闻时间</td></tr><tr><td>source</td><td>新闻来源</td></tr><tr><td>event_type</td><td>事件类型，值为 <code>Url</code>、<code>System</code></td></tr><tr><td>event_value</td><td>点击事件值</td></tr><tr><td>icon_type</td><td>图标类型，值为 <code>Url</code>、<code>MediaId</code>、<code>Inner</code></td></tr><tr><td>icon_value</td><td>图标值</td></tr></tbody></table><h3 id="_7、分类卡片" tabindex="-1">7、分类卡片 <a class="header-anchor" href="#_7、分类卡片" aria-label="Permalink to &quot;7、分类卡片&quot;">​</a></h3><p><img src="`+g+`" alt="分类卡片" width="400"></p><blockquote><p>分类卡片适用于组合多个列表数据</p></blockquote><ul><li>分类卡片本身无业务数据，来源于后台数据；</li><li>每个分类的内容才调用业务数据；</li><li>分类的内容支持<code>列表卡片</code>和<code>新闻卡片</code>，其返回数据参考前文。</li></ul><h3 id="_8、自定义卡片" tabindex="-1">8、自定义卡片 <a class="header-anchor" href="#_8、自定义卡片" aria-label="Permalink to &quot;8、自定义卡片&quot;">​</a></h3><blockquote><p>自定义卡片内容主要通过<code>H5页面</code>进行展示。</p></blockquote><ul><li>自定义卡片的数据来源于后台；</li><li>本身无业务内容。</li></ul><p><strong>URL 参数说明：</strong></p><p>自定义卡片在初始化时，会加载 H5页面，但卡片本身无法提前知道卡片内容的高度等信息，允许通过以<code>URL参数</code>的形式来告知客户端，如下:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//xxxx.html?custom_height=300&amp;custom_scale=0.5&amp;open_with_out=true</span></span></code></pre></div><table><thead><tr><th>属性</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>custom_height</td><td>浮点型</td><td>自定义卡片高度</td></tr><tr><td>custom_scale</td><td>浮点型</td><td>自定义卡片高度相对宽的比例 (传 scale 优选选用，与 height 互斥)</td></tr><tr><td>open_with_out</td><td>布尔值</td><td>是否打开新的页面跳转链接</td></tr></tbody></table><p>除了上述属性，同样支持带入其他参数，详情查看<a href="/light-app/workbench.html#参数支持">参数支持</a>。</p><div class="warning custom-block"><p class="custom-block-title">关于自定义卡片</p><p>毫无疑问，自定义卡片是最灵活的，因为一切都通过<code>H5页面</code>进行展示，一个卡片就是一个<code>WebView</code>；但也因为该原因，会产生一些问题及约束：</p><ul><li>性能不如原生卡片；</li><li>网络不稳定时，可能会导致卡片无法正常展示，白屏等；</li><li>卡片高度可能会存在偏差，导致卡片内容展示不完整；</li><li>不支持使用<code>js-sdk</code>能力；</li><li>不支持离线资源。</li></ul></div><h2 id="参数支持" tabindex="-1">参数支持 <a class="header-anchor" href="#参数支持" aria-label="Permalink to &quot;参数支持&quot;">​</a></h2><p>对于工作台中的任意 URL，用户可配置参数支持，以下为支持的参数：</p><table><thead><tr><th>字段</th><th>描述</th></tr></thead><tbody><tr><td><span>{{userId}}</span></td><td>当前登录<code>用户ID</code></td></tr><tr><td><span>{{username}}</span></td><td>当前登录<code>用户名</code></td></tr><tr><td><span>{{username/name}}</span></td><td>用户名/中文名</td></tr><tr><td><span>{{domainId}}</span></td><td>域ID</td></tr><tr><td><span>{{orgCode}}</span></td><td>当前<code>组织code</code>，也是<code>orgId</code></td></tr><tr><td><span>{{ticket}}</span></td><td>临时<code>ticket</code>值</td></tr><tr><td><span>{{language}}</span></td><td>当前应用的语言版本，如<code>en</code>、<code>zh-CN</code></td></tr></tbody></table><p>如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//data.com?username={{username}}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 会被替换成：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//data.com?usename=foo</span></span></code></pre></div><h3 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h3><p>国际化通过参数支持，由返回内容自行国际化，返回不同语言数据。</p><h3 id="红点规则" tabindex="-1">红点规则 <a class="header-anchor" href="#红点规则" aria-label="Permalink to &quot;红点规则&quot;">​</a></h3><p>对于支持红点的卡片类型（当前为快捷卡片），相关红点配置请参考<a href="/light-app/notify.html">应用红点</a>。</p><h2 id="系统行为值" tabindex="-1">系统行为值 <a class="header-anchor" href="#系统行为值" aria-label="Permalink to &quot;系统行为值&quot;">​</a></h2><p>当工作台中的<code>event_type</code>定义为<code>System</code>时，其点击行为，将会是 WorkPlus 内置的一些行为：</p><table><thead><tr><th>值</th><th>系统行为</th><th>描述</th></tr></thead><tbody><tr><td>CREATE_GROUP</td><td>创建群聊</td><td>打开创建群聊的页面</td></tr><tr><td>QRCODE_SCAN</td><td>扫一扫</td><td>打开应用的扫一扫页面</td></tr><tr><td>BING_MESSAGE</td><td>必应消息</td><td>打开必应消息页面</td></tr><tr><td>VOICE_MEETING</td><td>语音视频</td><td>打开音视频功能</td></tr></tbody></table>`,77),q=[F];function m(b,_,C,B,v,A){return i(),t("div",null,q)}const f=s(y,[["render",m]]);export{w as __pageData,f as default};