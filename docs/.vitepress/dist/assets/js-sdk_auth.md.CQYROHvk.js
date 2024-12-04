import{_ as e,E as h,c as n,m as t,a as s,J as d,a5 as i,o as l}from"./chunks/framework.BPJJowRx.js";const T=JSON.parse('{"title":"认证","description":"","frontmatter":{},"headers":[],"relativePath":"js-sdk/auth.md","filePath":"js-sdk/auth.md"}'),p={name:"js-sdk/auth.md"},k=i(`<h1 id="认证" tabindex="-1">认证 <a class="header-anchor" href="#认证" aria-label="Permalink to &quot;认证&quot;">​</a></h1><h2 id="获取临时-ticket" tabindex="-1">获取临时 Ticket <a class="header-anchor" href="#获取临时-ticket" aria-label="Permalink to &quot;获取临时 Ticket&quot;">​</a></h2><p>为当前登录用户获取一个临时性的 Ticket。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th><th>PC 客户端</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.auth.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserTicket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>user_ticket</td><td>申请到的用户 Ticket</td></tr></tbody></table>`,8),r={id:"生物认证",tabindex:"-1"},o=t("a",{class:"header-anchor",href:"#生物认证","aria-label":'Permalink to "生物认证 <badge type="success" text="v3.15.0+" />"'},"​",-1),c=i(`<p>需要设备具备<code>指纹</code>或者<code>FACE_ID</code>解锁功能，解锁后触发回调，适用于对安全性要求较高的操作。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.auth.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">biometric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>code</td><td>0 表示生物认证成功, 2 表示用户取消了设置</td></tr><tr><td>message</td><td>描述信息</td></tr></tbody></table>`,6);function E(g,_,y,b,u,F){const a=h("badge");return l(),n("div",null,[k,t("h2",r,[s("生物认证 "),d(a,{type:"success",text:"v3.15.0+"}),s(),o]),c])}const f=e(p,[["render",E]]);export{T as __pageData,f as default};