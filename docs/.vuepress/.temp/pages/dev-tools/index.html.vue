<template><h1 id="高科前端开发工具" tabindex="-1"><a class="header-anchor" href="#高科前端开发工具" aria-hidden="true">#</a> 高科前端开发工具</h1>
<br/>
<img :src="$withBase('/devtools/screenshot.png')" alt="5debug-qrcode" width="100%">
<br/>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p><code>高科前端开发工具</code>，是为了提高基于 WorkPlus 移动平台开发应用的开发及联调效率。工具专注于开发过程中真实环境数据及接口的模拟，通过创建角色及应用入口，可以快速切换环境，大大提升开发效率。</p>
<div class="custom-container tip"><p class="custom-container-title">相比微信小程序开发工具</p>
<p><code>微信小程序开发工具</code>是一套完整的应用开发调试工具，包含项目创建、开发调试及应用发布，但必须得使用小程序专用的开发框架，以及遵守小程序各种严格的规范。</p>
<p>而<code>高科前端开发工具</code>，为的是解决开发过程中调试效率不高的问题，通过提供真实的环境数据及接口模拟，从而达到提高开发效率的效果。对于项目所使用的技术栈，构建工具等，没有任何要求。</p>
</div>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2>
<p><code>高科前端开发工具</code>主要包括两个核心模块：<strong>角色</strong>及<strong>应用入口</strong>。同时提供一些简单的设置功能及文档入口。</p>
<h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h3>
<p>角色的定义为：<strong>一个环境中的某个具体的组织下的一个用户</strong>。</p>
<p>所以，在添加角色时，需要提供真实环境的配置，例如 API地址，域ID 等，以及在该环境下，可用的一个账号，验证服务通过后，选择其中一个组织，即可保存成角色，如下图。</p>
<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-role-create.png')" alt="5debug-qrcode" width="220">
</p>
<p>角色创建后，即可在创建应用入口时，关联起来。</p>
<blockquote>
<p>API地址，域ID 等信息，需咨询产品相关负责人获取，一般会存在多个环境，如测试环境、UAT环境等，请注意区分。</p>
</blockquote>
<h3 id="应用入口" tabindex="-1"><a class="header-anchor" href="#应用入口" aria-hidden="true">#</a> 应用入口</h3>
<p>应用入口的定义为：<strong>以一个角色的身份去访问一个 URL 地址</strong>。</p>
<p>所以，在添加应用入口时，需要启动地址及选择一个角色，如下图。</p>
<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-app-create.png')" alt="5debug-qrcode" width="220">
</p>
<p>输入完毕后，可以直接点击“保存并打开”按钮，直接打开应用；或者点击“添加应用”后，在应用列表点击打开。</p>
<h3 id="启动方式" tabindex="-1"><a class="header-anchor" href="#启动方式" aria-hidden="true">#</a> 启动方式</h3>
<p>当前应用支持两种打开方式，即<code>外部浏览器打开</code>及<code>H5模拟器</code>。</p>
<p><strong>外部浏览器打开：</strong></p>
<p><code>外部浏览器打开</code>打开是模拟在 PC客户端 打开应用的场景，多用于类似管理后台的单点登录，当应用打开时，url 会拼上一些关键的用户信息，如 ticket、user_id 等。</p>
<p>默认参数包括：</p>
<ul>
<li><code>ticket</code> 用户 Ticket</li>
<li><code>username</code> 用户名</li>
<li><code>user_id</code> 用户 ID</li>
<li><code>org_id</code> 组织 ID</li>
<li><code>domain_id</code> 域 ID</li>
<li><code>random</code> 随机数</li>
</ul>
<p>应用打开后，得到的 url 大概如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>http://app-test.link?ticket={{用户_Ticket}}&amp;username={{用户名}}&amp;user_id={{用户_ID}}&amp;org_id={{组织_ID}}&amp;domain_id={{域_ID}}&amp;random={{随机数}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>H5模拟器：</strong></p>
<p><code>H5模拟器</code>会打开一个独立的窗口，而在该窗口的 js 进程中，会动态注入部分模拟移动端 Cordova 接口的方法。</p>
<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-mobile.png')" alt="5debug-qrcode" width="500">
</p>
<p>在<code>H5模拟器</code>模式中，可以直接使用部分在移动端才可以使用的接口，例如获取用户信息，获取用户 Ticket等。在不侵入应用本身的同时，提供跟移动端一致的接口调用体验。</p>
<p>同时，此模式下启动应用，并不会在 URL 上拼接参数，但支持通过占位符的方式获取部分参数，具体可以查看<a href="./light-app/%E5%90%AF%E5%8A%A8%E5%9C%B0%E5%9D%80">启动地址</a>。</p>
<div class="custom-container warning"><p class="custom-container-title">关于 userAgent</p>
<p>首次打开时，开发工具会重写页面的 userAgent，会带上<code>workplus</code>等标式，但若此时切换到手机模拟器调试（如上图），userAgent 将会被刷新。如果需要通过 userAgent 来判断是否在 WorkPlus App 上访问，在开发阶段，建议通过 NODE_ENV 环境变量或其他方式来控制。</p>
</div>
<h3 id="页面导航" tabindex="-1"><a class="header-anchor" href="#页面导航" aria-hidden="true">#</a> 页面导航</h3>
<p>在<code>H5模拟器</code>模式下开发，如果应用是一个无顶部导航栏的 H5应用，可能页面无法进行上下页等操作，开发工具在该模式下，会提供一个模拟的简版导航条，如下图：</p>
<p style="text-align: left">
  <img :src="$withBase('/devtools/h5-navigation.png')" alt="navigation" width="500">
</p>
<p>导航条会固定在左上角（如上图，默认带点透明，鼠标移上去后会去掉透明度），点击最右边的按钮，可以收起导航条。</p>
<p>所有按钮功能说明如下：</p>
<ul>
<li>&quot;<i class="el-icon-back"></i>&quot; 页面返回（若有历史记录的情况下）；</li>
<li>&quot;<i class="el-icon-right"></i>&quot; 前往上一页（若有历史记录的情况下）；</li>
<li>&quot;<i class="el-icon-refresh"></i>&quot; 刷新当前页面；</li>
<li>&quot;<i class="el-icon-setting"></i>&quot; 开启或关闭开发调试工具；</li>
<li>&quot;<i class="el-icon-s-fold"></i>&quot; 收起导航条；</li>
<li>&quot;<i class="el-icon-s-unfold"></i>&quot; 展开导航条。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">页面刷新导致认证失败？</p>
<p>如果应用需要通过 Ticket 做单点登录，那使用页面刷新功能时，需要注意的是：链接上的 Ticket 不会再次生成，已消费的 Ticket 将不能再使用。</p>
<p>建议适当的情况下，存储用户登录状态到本地，或使用 JS-SDK 的获取 Ticket 接口。</p>
</div>
<h3 id="应用设置" tabindex="-1"><a class="header-anchor" href="#应用设置" aria-hidden="true">#</a> 应用设置</h3>
<p><code>高科前端开发工具</code>支持切换主题和语言，同时提供一些使用说明和文档入口，后续会扩展更多的设置功能。</p>
<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-setting.png')" alt="5debug-qrcode" width="220">
</p>
<h2 id="方法列表" tabindex="-1"><a class="header-anchor" href="#方法列表" aria-hidden="true">#</a> 方法列表</h2>
<p>在<code>H5模拟器</code>的打开方式下，通过接入 JS-SDK，可以使用以下方法：</p>
<table>
<thead>
<tr>
<th>功能模块</th>
<th>支持方法</th>
</tr>
</thead>
<tbody>
<tr>
<td>认证</td>
<td><RouterLink to="/js-sdk/auth.html#%E8%8E%B7%E5%8F%96%E4%B8%B4%E6%97%B6-ticket">获取 Ticket</RouterLink></td>
</tr>
<tr>
<td>用户</td>
<td><RouterLink to="/js-sdk/user.html#%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E7%94%A8%E6%88%B7%E8%AF%A6%E6%83%85">获取登录用户详情</RouterLink> <br/> <RouterLink to="/js-sdk/user.html#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E7%9A%84%E9%9B%87%E5%91%98%E4%BF%A1%E6%81%AF">获取用户的雇员信息</RouterLink></td>
</tr>
<tr>
<td>联系人</td>
<td><RouterLink to="/js-sdk/contact.html#%E5%8D%95%E9%80%89%E8%81%94%E7%B3%BB%E4%BA%BA">单选联系人</RouterLink> <br/> <RouterLink to="/js-sdk/contact.html#%E5%A4%9A%E9%80%89%E8%81%94%E7%B3%BB%E4%BA%BA">多选联系人</RouterLink> <br/> <RouterLink to="/js-sdk/contact.html#%E5%A4%9A%E9%80%89%E5%BD%93%E5%89%8D%E7%BB%84%E7%BB%87%E7%9A%84%E9%9B%87%E5%91%98%E5%88%97%E8%A1%A8">多选当前组织的雇员列表</RouterLink> <br/><RouterLink to="/js-sdk/contact.html#%E6%89%93%E5%BC%80%E9%80%9A%E7%94%A8%E9%80%89%E6%8B%A9%E4%BA%BA%E5%91%98%E7%95%8C%E9%9D%A2">打开通用选择人员界面</RouterLink></td>
</tr>
<tr>
<td>图片</td>
<td><RouterLink to="/js-sdk/image.html#%E9%80%89%E6%8B%A9%E7%85%A7%E7%89%87">选择照片</RouterLink> <br/> <RouterLink to="/js-sdk/image.html#%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88">图片预览</RouterLink></td>
</tr>
<tr>
<td>网络</td>
<td><RouterLink to="/js-sdk/network.html#%E5%BD%93%E5%89%8D%E8%BF%9E%E6%8E%A5wifi%E4%BF%A1%E6%81%AF">获取当前连接 Wifi 信息</RouterLink></td>
</tr>
<tr>
<td>地理位置</td>
<td><RouterLink to="/js-sdk/location.html#%E8%8E%B7%E5%8F%96%E5%AE%9A%E4%BD%8D%E4%BF%A1%E6%81%AF">获取定位信息</RouterLink></td>
</tr>
<tr>
<td>设备</td>
<td><RouterLink to="/js-sdk/device.html#%E8%8E%B7%E5%8F%96-ip-%E5%9C%B0%E5%9D%80">获取 IP 地址</RouterLink> </br> <RouterLink to="/js-sdk/device.html#%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF">获取设备信息</RouterLink> <br/> <RouterLink to="/js-sdk/device.html#%E8%8E%B7%E5%8F%96-app-%E4%BF%A1%E6%81%AF">获取 App 信息</RouterLink></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">方法未被支持怎么办？</p>
<p>工具仅对常用方法进行模拟支持，未被支持的方法，如果被调用，将不会得到任何相应或异常。若有需要，可以通过 JS-SDK 的接口模拟功能进行使用。</p>
</div>
<h2 id="工具下载" tabindex="-1"><a class="header-anchor" href="#工具下载" aria-hidden="true">#</a> 工具下载</h2>
<p>整理中，敬请期待！</p>
<!-- 最新版本`v1.0.0-beta.1`，请点击下方链接进行下载：

* [下载 MacOS 版本](https://open.workplus.io/static/dev-tools/mac/)
* [下载 Windows 版本](https://open.workplus.io/static/dev-tools/win/)

[查看更新日志](https://github.com/WorkPlusFE/dev-tools/blob/master/CHANGELOG.md) -->
</template>
