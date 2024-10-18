import{_ as s,c as t,o as i,a5 as a}from"./chunks/framework.BPJJowRx.js";const g=JSON.parse('{"title":"聊天","description":"","frontmatter":{},"headers":[],"relativePath":"js-sdk/session.md","filePath":"js-sdk/session.md"}'),h={name:"js-sdk/session.md"},n=a(`<h1 id="聊天" tabindex="-1">聊天 <a class="header-anchor" href="#聊天" aria-label="Permalink to &quot;聊天&quot;">​</a></h1><h2 id="打开用户聊天页面" tabindex="-1">打开用户聊天页面 <a class="header-anchor" href="#打开用户聊天页面" aria-label="Permalink to &quot;打开用户聊天页面&quot;">​</a></h2><p>传入<code>userId</code>、<code>domianId</code>，打开到 WorkPlus 与该用户的聊天页面。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th><th>PC 客户端</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showUserChatViewByUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;用户的userId&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  domainId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;用户的domainId&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>userId</td><td>String</td><td>用户的 userId</td></tr><tr><td>domainId</td><td>String</td><td>用户的 domainId</td></tr><tr><td>newWindow</td><td>Boolean</td><td>是否在新窗口打开； 仅 PC 客户端支持，默认为 true。</td></tr></tbody></table><h2 id="打开群组聊天页面" tabindex="-1">打开群组聊天页面 <a class="header-anchor" href="#打开群组聊天页面" aria-label="Permalink to &quot;打开群组聊天页面&quot;">​</a></h2><p>通过<code>群组id</code>打开该群组的聊天页面。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th><th>PC 客户端</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openDiscussionById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  discussionId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0629aadxx3fb0bd6&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>discussionId</td><td>String</td><td>群组的id</td></tr><tr><td>newWindow</td><td>Boolean</td><td>是否在新窗口打开； 仅 PC 客户端支持，默认为 true。</td></tr></tbody></table><h2 id="创建群组" tabindex="-1">创建群组 <a class="header-anchor" href="#创建群组" aria-label="Permalink to &quot;创建群组&quot;">​</a></h2><p>通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th><th>PC 客户端</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 移动端</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createDiscussionChat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// PC 客户端</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createDiscussionChat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ newWindow: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>newWindow</td><td>Boolean</td><td>是否在新窗口打开； 仅 PC 客户端支持，默认为 true。</td></tr></tbody></table><h2 id="打开群组选人界面" tabindex="-1">打开群组选人界面 <a class="header-anchor" href="#打开群组选人界面" aria-label="Permalink to &quot;打开群组选人界面&quot;">​</a></h2><p>根据<code>群组id</code>, 打开群组成员界面, 并进行选择。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">selectDiscussionMembers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  discussionId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;7e41cf3691344b28a9dd2035bac47&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  membersSelected: [{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>discussionId</td><td>String</td><td>群组 id</td></tr><tr><td>membersSelected</td><td>Array</td><td>已选的群成员数据</td></tr></tbody></table><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>members</td><td>返回群成员数据</td></tr></tbody></table>`,31),d=[n];function e(l,p,r,k,o,E){return i(),t("div",null,d)}const y=s(h,[["render",e]]);export{g as __pageData,y as default};
