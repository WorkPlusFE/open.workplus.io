<template><h1 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h1>
<div class="custom-container tip"><p class="custom-container-title">阅读本文，你将了解：</p>
<ul>
<li>前端如何获取用户信息；</li>
<li>单点登录的完整流程。</li>
</ul>
</div>
<h2 id="什么是单点登录" tabindex="-1"><a class="header-anchor" href="#什么是单点登录" aria-hidden="true">#</a> 什么是单点登录</h2>
<p>第三方应用在接入 WorkPlus 平台时，往往需要集成 WorkPlus 的用户系统、应用通知等能力，而在使用这些能力之前，通常会对用户的合法性进行校验，此时就需要做“单点登录”验证。</p>
<p>目前 WorkPlus 实现单点登录的机制如下：</p>
<ol>
<li>客户端打开第三方应用时，第三方应用可以通过<code>js-sdk</code>或从<code>url</code>上获得临时 Ticket；</li>
<li>第三方应用后端服务通过<RouterLink to="/api/getStart.html">应用参数获取应用 Token</RouterLink>；</li>
<li>第三方应用后端服务根据客户端提交的 Ticket 参数，<RouterLink to="/api/auth.html">验证用户 Ticket</RouterLink> 的合法性；</li>
</ol>
<p>如果需要取得应用访问者的详细信息，前端可以提交<code>user_id</code>、<code>org_id</code>、<code>domain_id</code>等用户关键信息，后端即可通过开放接口获取该用户在平台上的详细信息。</p>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>“单点登录”的目的是为了验证用户的合法性，跟第三方应用是否能调用平台接口能力无关。第三方应用通过应用“key/secret”取得“应用Token”后，即可调用平台接口，例如推送应用消息、获取应用的使用范围等。</p>
</div>
<h2 id="单点登录流程" tabindex="-1"><a class="header-anchor" href="#单点登录流程" aria-hidden="true">#</a> 单点登录流程</h2>
<p class="w6s-image">
  <img :src="$withBase('/app/sso.png')" alt="单点登录流程解析" />
</p>
<h2 id="获取客户端用户信息" tabindex="-1"><a class="header-anchor" href="#获取客户端用户信息" aria-hidden="true">#</a> 获取客户端用户信息</h2>
<p>客户端作为“单点登录”的发起端，通常需要传递一些关键用户信息到对应应用的后端服务。而不同的端，获取用户信息的方式会不太一样。</p>
<h3 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h3>
<p>移动端通常会通过<code>js-sdk</code>接口进行获取，例如使用<code>w6s.auth.getUserTicket</code>及<code>w6s.contact.getCurrentUserInfo</code>方法来获取临时 Ticket 及当前登录的用户信息。</p>
<p>另一种方式，就是通过截取应用启动地址上的参数，具体设置请查看<RouterLink to="/light-app/create.html#%E5%90%AF%E5%8A%A8%E5%9C%B0%E5%9D%80">应用启动地址</RouterLink>。</p>
<h3 id="pc-客户端" tabindex="-1"><a class="header-anchor" href="#pc-客户端" aria-hidden="true">#</a> PC 客户端</h3>
<p>PC 客户端目前主要的方式就是截取应用启动地址上的参数，每个应用被打开时，客户端会获取临时 Ticket 及用户信息并拼接在应用启动地址上，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>test<span class="token operator">-</span>app<span class="token punctuation">.</span>workplus<span class="token punctuation">.</span>io<span class="token operator">?</span>ticket<span class="token operator">=</span>ticket<span class="token operator">&amp;</span>user_id<span class="token operator">=</span>xxx<span class="token operator">&amp;</span>domain_id<span class="token operator">=</span>xx
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
<div class="custom-container warning"><p class="custom-container-title">应用启动地址</p>
<p>应用的启动地址，请尽可能遵照标准来设置。例如常见的单页面应用会使用<code>#hash</code>的方式做前端路由，但是<code>井号</code>在链接访问上是没有意义的，我们建议链接的属性，应该是先<code>search(query)</code>再<code>hash</code>，如：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>https://workplus.io?key1=val1&amp;key2=val2#hash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div>
</template>
