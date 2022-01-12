<template><h1 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h1>
<p>第三方应用在接入 WorkPlus 平台时，往往需要和 WorkPlus 用户系统集成。</p>
<p>目前 WorkPlus 实现单点登录的机制如下：</p>
<ol>
<li>客户端打开第三方应用时，第三方应用可以通过<code>js-sdk</code>或从<code>url</code>上获得临时 Ticket；</li>
<li>第三方应用根据 Ticket 参数，验证该 Ticket，如该 Ticket 有效，则返回关联的用户信息。</li>
</ol>
<p>具体接口使用说明，请查看<RouterLink to="/api/auth.html">API文档-单点登录</RouterLink>。</p>
<h2 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h2>
<p>不同的端，获取用户信息的方式会不太一样。</p>
<h3 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h3>
<p>移动端通常会通过<code>js-sdk</code>接口进行获取，例如使用<code>w6s.auth.getUserTicket</code>及<code>w6s.contact.getCurrentUserInfo</code>方法来获取临时 Ticket 及当前登录的用户信息。</p>
<p>另一种方式，就是通过截取应用启动地址上的参数，具体设置请查看<RouterLink to="/light-app/#%E5%90%AF%E5%8A%A8%E5%9C%B0%E5%9D%80">应用启动地址</RouterLink>。</p>
<h3 id="pc-客户端" tabindex="-1"><a class="header-anchor" href="#pc-客户端" aria-hidden="true">#</a> PC 客户端</h3>
<p>PC 客户端目前主要的方式就是截取应用启动地址上的参数，每个应用被打开时，客户端会获取临时 Ticket 及用户信息并拼接在应用启动地址上，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>test<span class="token operator">-</span>app<span class="token punctuation">.</span>workplus<span class="token punctuation">.</span>io<span class="token operator">?</span>ticket<span class="token operator">=</span>ticket<span class="token operator">&amp;</span>user_id<span class="token operator">=</span>xxx<span class="token operator">&amp;</span>domain_id<span class="token operator">=</span>xx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>参数包括以下属性:</p>
<ul>
<li><code>ticket</code> 临时 Ticket</li>
<li><code>username</code> 用户名</li>
<li><code>user_id</code> 用户的 userId</li>
<li><code>domain_id</code> 用户当前所在的域</li>
<li><code>org_id</code> 用户当前所在的组织</li>
<li><code>nickname</code> 用户的昵称，注意转码</li>
<li><code>random</code> 随机数，一般为时间戳</li>
</ul>
<h2 id="流程解析" tabindex="-1"><a class="header-anchor" href="#流程解析" aria-hidden="true">#</a> 流程解析</h2>
<p class="w6s-image">
  <img :src="$withBase('/app/sso.png')" alt="单点登录流程解析" width="100%">
</p>
</template>
