<template><h1 id="创建应用" tabindex="-1"><a class="header-anchor" href="#创建应用" aria-hidden="true">#</a> 创建应用</h1>
<p>此文档以<code>WorkPlus v4.0</code>新版本为主，会与<code>3.0</code>版本的交互有所不同，但创建应用所需要设置的内容基本一致。</p>
<p>此文档只描述轻应用相关的内容。</p>
<h2 id="添加内部应用" tabindex="-1"><a class="header-anchor" href="#添加内部应用" aria-hidden="true">#</a> 添加内部应用</h2>
<p>登录管理后台，选择并进入对应的组织，然后点击<code>应用管理</code>菜单，从右上角的<code>添加</code>按钮，选择<code>内部应用</code>。</p>
<h3 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息" aria-hidden="true">#</a> 基本信息</h3>
<p>如下图，带红星的字段表示必填，如果没有<code>应用分类</code>，点击<code>创建分类</code>进行创建即可。</p>
<p class="w6s-image">
  <img :src="$withBase('/app/base1.png')" alt="基本信息" width="80%">
</p>
<h3 id="应用启动地址" tabindex="-1"><a class="header-anchor" href="#应用启动地址" aria-hidden="true">#</a> 应用启动地址</h3>
<p>如下图，启动地址为必填项。</p>
<p class="w6s-image">
  <img :src="$withBase('/app/base2.png')" alt="启动地址" width="80%">
</p>
<p>应用启动地址，是比较重要的设置，目前提供3个平台的设置，包括<code>苹果</code>、<code>安卓</code>及<code>PC客户端</code>，其中<code>苹果</code>和<code>安卓</code>的设置是一样，而<code>PC客户端</code>的相对少一些。以下是各字段的各端支持说明：</p>
<table>
<thead>
<tr>
<th>字段名</th>
<th>苹果</th>
<th>安卓</th>
<th>PC 客户端</th>
</tr>
</thead>
<tbody>
<tr>
<td>应用参数设置</td>
<td>支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>消息通知提醒源</td>
<td>支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>启动地址</td>
<td>支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>强制安装</td>
<td>支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>应用市场显示</td>
<td>支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>离线资源包</td>
<td>支持</td>
<td>支持</td>
<td>不支持</td>
</tr>
<tr>
<td>显示风格</td>
<td>支持</td>
<td>支持</td>
<td>不支持</td>
</tr>
<tr>
<td>是否全屏</td>
<td>支持</td>
<td>支持</td>
<td>不支持</td>
</tr>
<tr>
<td>标题栏设置</td>
<td>支持</td>
<td>支持</td>
<td>不支持</td>
</tr>
<tr>
<td>进度条颜色</td>
<td>支持</td>
<td>支持</td>
<td>不支持</td>
</tr>
<tr>
<td>使用应用内嵌浏览器</td>
<td>不支持</td>
<td>不支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<h4 id="应用参数设置" tabindex="-1"><a class="header-anchor" href="#应用参数设置" aria-hidden="true">#</a> 应用参数设置</h4>
<p>注意，该参数设置，并非为常见的 URL 上的参数设置，而是作为应用实体的一个属性。通常用于应对特殊的情况，例如设置参数<code>vpn</code>为 1，即在启动应用之前，会开启 vpn。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该设置并非为通用设置，通常情况下，需要客户端进行定制。</p>
</div>
<h4 id="消息通知提醒源" tabindex="-1"><a class="header-anchor" href="#消息通知提醒源" aria-hidden="true">#</a> 消息通知提醒源</h4>
<p>该设置，适用于需要做红点提示的应用，例如审批类的轻应用，支持显示<code>红点</code>、<code>数字</code>及<code>图标</code>，具体文档，请查看<RouterLink to="/light-app/notify.html">应用红点</RouterLink>。</p>
<h4 id="启动地址" tabindex="-1"><a class="header-anchor" href="#启动地址" aria-hidden="true">#</a> 启动地址</h4>
<p>顾名思义，就是轻应用的访问地址，通常都是<code>http(s)://</code>的访问方式。同时，入口支持传入参数占位符，当应用在客户端被打开时，客户端会自行填充参数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 设置启动地址如下：</span>
<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>test<span class="token operator">-</span>app<span class="token punctuation">.</span>workplus<span class="token punctuation">.</span>io<span class="token operator">?</span>ticket<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>ticket<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&amp;</span>language<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>language<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">// 当应用启动时，ticket及language会根据当前用户信息及语言进行填充：</span>
<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>test<span class="token operator">-</span>app<span class="token punctuation">.</span>workplus<span class="token punctuation">.</span>io<span class="token operator">?</span>ticket<span class="token operator">=</span>demo<span class="token operator">-</span>ticket<span class="token operator">&amp;</span>language<span class="token operator">=</span>en
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>支持的参数占位符包括以下属性：</p>
<table>
<thead>
<tr>
<th>字段名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ticket</td>
<td>用户ticket，常用于单点登录</td>
</tr>
<tr>
<td>userId</td>
<td>用户的 userId</td>
</tr>
<tr>
<td>orgId</td>
<td>打开应用时，用户所在的组织id</td>
</tr>
<tr>
<td>domainId</td>
<td>打开应用时，用户所在的域id</td>
</tr>
<tr>
<td>language</td>
<td>应用的语言类型</td>
</tr>
<tr>
<td>username</td>
<td>用户的 username</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">关于占位符</p>
<p>因为<code>PC客户端</code>默认使用下划线的命名方式设置参数的<code>key</code>值，具体原因可以查看<RouterLink to="/light-app/sso.html#pc-%E5%AE%A2%E6%88%B7%E7%AB%AF">单点登录-获取用户信息</RouterLink>，为了保持一致性，请统一使用下划线的<code>key</code>值，如：</p>
<p><code>?user_id={userId}&amp;domain_id={domainId}</code>。</p>
</div>
<p>除了设置占位符来获取用户信息，通常为了避免缓存，上架新版本时，可以尝试在启动地址后加入版本信息参数，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>test<span class="token operator">-</span>app<span class="token punctuation">.</span>workplus<span class="token punctuation">.</span>io<span class="token operator">?</span>v<span class="token operator">=</span><span class="token number">1.2</span><span class="token number">.0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">关于启动地址</p>
<p>首次创建应用，可以同时选择3个平台，安卓、苹果及 PC 客户端，但实际可以填写启动地址只有一处，那是因为创建应用实际也是创建快捷入口的一种，如果各端的访问地址不一样，需要创建应用后，再单独添加对应端的应用快捷入口。</p>
</div>
<h4 id="离线资源包" tabindex="-1"><a class="header-anchor" href="#离线资源包" aria-hidden="true">#</a> 离线资源包</h4>
<p><code>离线资源包</code>设置是移动端特有，需要上传<code>zip</code>压缩包，并且需要设置相应的<code>启动地址</code>，具体说明，请查看<RouterLink to="/light-app/offline.html">离线应用</RouterLink>。</p>
<h3 id="应用权限" tabindex="-1"><a class="header-anchor" href="#应用权限" aria-hidden="true">#</a> 应用权限</h3>
<p>应用权限设置，实际就是对应用角色的设置。如下图，共分为3个角色：</p>
<ul>
<li>普通用户，即<code>使用范围</code></li>
<li>管理员</li>
<li>超级管理员</li>
</ul>
<p>通常开发轻应用，都需要设定<code>普通用户</code>及<code>管理员</code>的角色，通过平台提供的应用相关<strong>API接口</strong>，即可获取到应用对应的角色人员。</p>
<p class="w6s-image">
  <img :src="$withBase('/app/base3.png')" alt="使用范围" width="80%">
</p>
<h3 id="创建应用入口" tabindex="-1"><a class="header-anchor" href="#创建应用入口" aria-hidden="true">#</a> 创建应用入口</h3>
<p>应用入口又名快捷入口，一个应用可以创建多个快捷入口，相关设置跟上面提到的<code>基本信息</code>及<code>启动地址</code>一致。</p>
<p class="w6s-image">
  <img :src="$withBase('/app/base4.png')" alt="创建应用入口" width="100%">
</p>
<h3 id="消息模版" tabindex="-1"><a class="header-anchor" href="#消息模版" aria-hidden="true">#</a> 消息模版</h3>
<p>模版消息是一种特殊的消息类型，可以在管理后台进行可视化编辑，保存成功后，可以获得对应的<code>模板ID</code>。</p>
<p class="w6s-image">
  <img :src="$withBase('/app/base5.png')" alt="消息模版" width="100%">
</p>
<p>可以根据实际需求，设定不同的模版消息，具体使用方式，请查看<RouterLink to="/api/app/template.html">模板消息</RouterLink>。</p>
<h2 id="添加-isv-应用" tabindex="-1"><a class="header-anchor" href="#添加-isv-应用" aria-hidden="true">#</a> 添加 ISV 应用</h2>
<p>登录管理后台，选择并进入对应的组织，然后点击<code>应用管理</code>菜单，从右上角的<code>添加</code>按钮，选择<code>ISV应用</code>。打开后，将列出可以购买的 ISV 应用，点击获取按钮后会弹出对应的应用信息资料框，然后勾选进行获取即可。</p>
<p class="w6s-image">
  <img :src="$withBase('/app/isv.png')" alt="ISV 应用" width="70%">
</p>
<p>获取成功后，可以在应用管理列表找到该应用，但并不能马上使用，还需给应用设置使用权限，参考<a href="#%E5%BA%94%E7%94%A8%E6%9D%83%E9%99%90">应用权限</a>。</p>
</template>
