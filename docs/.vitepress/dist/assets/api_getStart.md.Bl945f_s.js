import{_ as s,c as t,o as i,a5 as a,al as n}from"./chunks/framework.XredCqQG.js";const y=JSON.parse('{"title":"Token 申请","description":"","frontmatter":{},"headers":[],"relativePath":"api/getStart.md","filePath":"api/getStart.md"}'),e={name:"api/getStart.md"},p=a('<h1 id="token-申请" tabindex="-1">Token 申请 <a class="header-anchor" href="#token-申请" aria-label="Permalink to &quot;Token 申请&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>应用只能拥有一个 AccessToken，重复获取将导致先前的 AccessToken 失效。</p></div><p>WorkPlus 平台作为企业移动应用的统一入口，提供了用户身份集成，应用接入等基础能力接口。第三方应用主动调用接口时，需带上AccessToken 参数。AccessToken 参数由 DomainId，OrgId，AppKey，AppSecret 获取。</p><p>具体需要以下步骤：</p><ol><li>以组织管理员身份登录后台创建应用，并获取 DomainId，OrgId，AppKey 及A ppSecret 等信息；</li><li>通过 DomainId，OrgId，AppKey 及 AppSecret 获取 AccessToken；</li><li>通过 AccessToken 调用相关接口。</li></ol><h2 id="获取-appkey-及-appsecret" tabindex="-1">获取 AppKey 及 AppSecret <a class="header-anchor" href="#获取-appkey-及-appsecret" aria-label="Permalink to &quot;获取 AppKey 及 AppSecret&quot;">​</a></h2><p>登录管理后台并创建应用。创建成功后，可以在应用管理列表，找到对应的应用，点击会弹出下图的信息框，AppKey 及 AppSecret 分别对应图中的<code>应用KEY</code>及<code>应用SECRET</code>。</p><p><img src="'+n+`" alt="获取 AppKey 及 AppSecret" width="500"></p><h2 id="获取-accesstoken" tabindex="-1">获取 AccessToken <a class="header-anchor" href="#获取-accesstoken" aria-label="Permalink to &quot;获取 AccessToken&quot;">​</a></h2><p>通过 DomainId，OrgId，AppKey 及 AppSecret 调用以下接口获取 AccessToken:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">POST</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo-api.workplus.io/v1/token</span></span></code></pre></div><blockquote><p>实际 API 接口地址，以所部署环境为准。</p></blockquote><p><strong>请求头部：</strong></p><table><thead><tr><th>请求头</th><th>说明</th></tr></thead><tbody><tr><td>Content-Type</td><td>application/json</td></tr></tbody></table><p><strong>请求格式：</strong> 组织应用参数</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;grant_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;client_credentials&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;domain_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DomainId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;org_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OrgId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;client_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AppKey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;client_secret&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5tAkUIt1rrnP0WNLg7BWYuuqwzn3xRoO&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>域应用参数</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;grant_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;client_credentials&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;domain_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DomainId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;owner_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DomainId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;client_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AppKey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;client_secret&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5tAkUIt1rrnP0WNLg7BWYuuqwzn3xRoO&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>参数</th><th>类型</th><th>是否必填</th><th>说明</th></tr></thead><tbody><tr><td>grant_type</td><td>String</td><td>是</td><td>固定值 <code>client_credentials</code></td></tr><tr><td>scope</td><td>String</td><td>是</td><td>固定值 <code>app</code></td></tr><tr><td>domain_id</td><td>String</td><td>是</td><td>应用所在域的域id</td></tr><tr><td>client_id</td><td>String</td><td>是</td><td>应用的 appKey</td></tr><tr><td>client_secret</td><td>String</td><td>是</td><td>应用的 appSecret</td></tr><tr><td>org_id</td><td>String</td><td>否</td><td>应用所在组织的组织id[org_id 和 owner_id 不能同时为空]</td></tr><tr><td>owner_id</td><td>String</td><td>否</td><td>域应用填domain_id[org_id 和 owner_id 不能同时为空]</td></tr></tbody></table><p><strong>返回数据：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Everything is ok.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;access_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7447497d58de4d55879ce1e441a101c4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;refresh_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;02a639c9bffc4640aa5045ded3902a31&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;issued_time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1484882719965</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;expire_time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1487474719965</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;client_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;92bc3faa-12bd-4afc-9962-01f2410f0bee&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>成功返回字段说明：</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>client_id</td><td>String</td><td>当前登录用户的标识</td></tr><tr><td>access_token</td><td>String</td><td>应用的身份凭证</td></tr><tr><td>refresh_token</td><td>String</td><td>保留字段，与access_token相同</td></tr><tr><td>issued_time</td><td>String</td><td>access_token的生效时间</td></tr><tr><td>expire_time</td><td>String</td><td>access_token的过期时间</td></tr></tbody></table><p><strong>错误返回值：</strong></p><table><thead><tr><th>状态码</th><th>说明</th></tr></thead><tbody><tr><td>202102</td><td>没有对应的应用</td></tr><tr><td>202104</td><td>应用认证失败</td></tr></tbody></table>`,25),h=[p];function l(d,k,r,o,E,c){return i(),t("div",null,h)}const u=s(e,[["render",l]]);export{y as __pageData,u as default};
