import{_ as t,c as a,o as e,a5 as s}from"./chunks/framework.BPJJowRx.js";const m=JSON.parse('{"title":"跳转协议","description":"","frontmatter":{},"headers":[],"relativePath":"light-app/urlScheme.md","filePath":"light-app/urlScheme.md"}'),i={name:"light-app/urlScheme.md"},d=s('<h1 id="跳转协议" tabindex="-1">跳转协议 <a class="header-anchor" href="#跳转协议" aria-label="Permalink to &quot;跳转协议&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">阅读本文，你将了解：</p><ul><li>可通过 url scheme 打开应用某些功能或某个指定的轻应用；</li><li>在一个轻应用内也可以通过协议打开另一个轻应用；</li><li>JS-SDK 同样具备跳转协议的能力。</li></ul><p>通常情况下，不同客户的包，注册的<code>scheme</code>会不一样，可通过 <a href="/js-sdk/device.html#获取-app-信息">获取 APP 信息</a> 接口获取，或咨询相关负责人。</p></div><p>通过在浏览器敲入<code>url scheme</code>，即可检验是否有效或正确。例如在已经安装 WorkPlus 的手机设备上，在浏览器的访问地址栏敲入<code>workplus://</code>，将会弹出提示框，询问是否跳转到该应用。</p><h2 id="轻应用跳转" tabindex="-1">轻应用跳转 <a class="header-anchor" href="#轻应用跳转" aria-label="Permalink to &quot;轻应用跳转&quot;">​</a></h2><p>支持在轻应用内打开另一个轻应用。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">workplus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//openApp?id=foo&amp;domainId=workplus</span></span></code></pre></div><p><strong>参数说明：</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>appId，具体值，请登录管理后台，在应用管理栏目点击该应用即可查看</td></tr><tr><td>domainId</td><td>应用所在的域</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><p><code>JS-SDK</code>也提供相应的<a href="/js-sdk/app.html#路由跳转">应用跳转</a>接口，相比直接从浏览器地址栏输入<code>url scheme</code>或<code>a标签</code>触发跳转，SDK 接口可以提供回调，交互会更加友好。</p></div><h2 id="音视频会议" tabindex="-1">音视频会议 <a class="header-anchor" href="#音视频会议" aria-label="Permalink to &quot;音视频会议&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">workplus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//meeting?type=zoom&amp;action=join</span></span></code></pre></div><p><strong>Type 定义：</strong></p><table><thead><tr><th>type</th><th>定义</th></tr></thead><tbody><tr><td>umeeting</td><td>umeeting</td></tr><tr><td>zoom</td><td>zoom</td></tr><tr><td>bizconf</td><td>会畅</td></tr></tbody></table><p><strong>Action 定义：</strong></p><table><thead><tr><th>action</th><th>定义</th></tr></thead><tbody><tr><td>join</td><td>加入会议</td></tr><tr><td>launch</td><td>发起会议入口, 触发路由时弹出加入会议选择框</td></tr></tbody></table><h2 id="即时呼叫" tabindex="-1">即时呼叫 <a class="header-anchor" href="#即时呼叫" aria-label="Permalink to &quot;即时呼叫&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">workplus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//voip?action=launch</span></span></code></pre></div><p><strong>Action 定义：</strong></p><table><thead><tr><th>action</th><th>定义</th></tr></thead><tbody><tr><td>不传值</td><td>打开默认的发起会议界面</td></tr><tr><td>launch</td><td>触发聊天界面里的\b发起即时呼叫，只允许在聊天界面的范围里使用</td></tr></tbody></table>',19),o=[d];function l(h,p,r,n,c,k){return e(),a("div",null,o)}const b=t(i,[["render",l]]);export{m as __pageData,b as default};