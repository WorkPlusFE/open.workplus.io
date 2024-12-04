import{_ as s,c as i,o as t,a5 as a}from"./chunks/framework.BPJJowRx.js";const y=JSON.parse('{"title":"联系人","description":"","frontmatter":{},"headers":[],"relativePath":"js-sdk/contact.md","filePath":"js-sdk/contact.md"}'),h={name:"js-sdk/contact.md"},n=a(`<h1 id="联系人" tabindex="-1">联系人 <a class="header-anchor" href="#联系人" aria-label="Permalink to &quot;联系人&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">人员复选</p><p>选择用户或雇员后返回的信息，若需要进行复选，回传的用户或雇员数据至少要包含<code>userId</code>属性。</p></div><h2 id="单选联系人" tabindex="-1">单选联系人 <a class="header-anchor" href="#单选联系人" aria-label="Permalink to &quot;单选联系人&quot;">​</a></h2><p>打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th><th>PC 客户端</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.contact.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSingleContact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  hideMe: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  filterSenior: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>hideMe</td><td>Boolean</td><td>表示在选择联系人的时候，是否显示自己</td></tr><tr><td>filterSenior</td><td>Number</td><td>1 表示过滤高管, 0 表示不过滤</td></tr></tbody></table><h2 id="多选联系人" tabindex="-1">多选联系人 <a class="header-anchor" href="#多选联系人" aria-label="Permalink to &quot;多选联系人&quot;">​</a></h2><p>打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.contact.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  hideMe: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  filterSenior: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  selectedContacts: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;联系人列表信息，用于复选&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>hideMe</td><td>Boolean</td><td>表示在选择联系人的时候，是否显示自己</td></tr><tr><td>filterSenior</td><td>Number</td><td>1 表示过滤高管, 0 表示不过滤</td></tr><tr><td>selectedContacts</td><td>Array</td><td>非必须，雇员列表信息，用于复选</td></tr></tbody></table><h2 id="多选当前组织的雇员列表" tabindex="-1">多选当前组织的雇员列表 <a class="header-anchor" href="#多选当前组织的雇员列表" aria-label="Permalink to &quot;多选当前组织的雇员列表&quot;">​</a></h2><p>打开<code>当前组织</code>的联系人列表，选择多个联系人，返回雇员信息。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.contact.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getEmployeesFromCurrentOrg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  hideMe: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  filterSenior: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  selectedEmpList: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;联系人列表信息，用于复选&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>hideMe</td><td>Boolean</td><td>表示在选择联系人的时候，是否显示自己</td></tr><tr><td>filterSenior</td><td>Number</td><td>1 表示过滤高管, 0 表示不过滤</td></tr><tr><td>selectedEmpList</td><td>Array</td><td>非必须，雇员列表信息，用于复选</td></tr></tbody></table><h2 id="打开通用选择人员界面" tabindex="-1">打开通用选择人员界面 <a class="header-anchor" href="#打开通用选择人员界面" aria-label="Permalink to &quot;打开通用选择人员界面&quot;">​</a></h2><p>该接口打开通用的选择界面，此界面能选择组织内的雇员信息, 用户的星标联系人等。</p><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.contact.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">selectContacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  filterSenior: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  maxCount: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  selectedUsers: [{..}, {..}], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 已选择的users</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  selectedEmployees: [{..}, {..}], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 已选择的employees</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><strong>参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>filterSenior</td><td>Number</td><td>1 表示过滤高管, 0 表示不过滤，默认为 1</td></tr><tr><td>maxCount</td><td>Number</td><td>选人最大数量, 最小为1, 默认不限制数量</td></tr><tr><td>selectedUsers</td><td>Array</td><td>回传已选人员，用于复选</td></tr><tr><td>selectedEmployees</td><td>Array</td><td>回传已选雇员，用于复选</td></tr></tbody></table><p><strong>返回数据</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>user</td><td>所选用户</td></tr><tr><td>employee</td><td>所选雇员</td></tr></tbody></table><h2 id="获取手机通讯录" tabindex="-1">获取手机通讯录 <a class="header-anchor" href="#获取手机通讯录" aria-label="Permalink to &quot;获取手机通讯录&quot;">​</a></h2><p>获取手机通讯录联系人的列表。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>首次访问会提示是否允许设备访问手机通讯录，请允许，否则无法获取通讯录信息。</p></div><p><strong>使用说明</strong></p><table><thead><tr><th>客户端</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>支持情况</td><td>支持</td><td>支持</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w6s.contact.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getMobileContacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  success: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fail: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>返回的数据会以英文字母拆分：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;allin(联系人名称)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123456(联系方式)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ball(联系人名称)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;135xxx(联系方式)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;boy(联系人名称)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;137xxx(联系方式)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,40),l=[n];function e(p,k,d,E,r,o){return t(),i("div",null,l)}const c=s(h,[["render",e]]);export{y as __pageData,c as default};