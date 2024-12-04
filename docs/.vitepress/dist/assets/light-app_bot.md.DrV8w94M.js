import{_ as t,c as a,o as r,a5 as e,aI as d,aJ as o,aK as l,aL as p,aM as i,ad as s,ae as h}from"./chunks/framework.BPJJowRx.js";const E=JSON.parse('{"title":"机器人","description":"","frontmatter":{},"headers":[],"relativePath":"light-app/bot.md","filePath":"light-app/bot.md"}'),c={name:"light-app/bot.md"},b=e('<h1 id="机器人" tabindex="-1">机器人 <a class="header-anchor" href="#机器人" aria-label="Permalink to &quot;机器人&quot;">​</a></h1><p>目前机器人支持用户通过以下两种场景进行交互：</p><ul><li>单聊场景：用户直接通过发送消息/指令与机器人交互；</li><li>群聊场景：用户在群里通过@机器人的方式。</li></ul><p>用户/机器人/WorkPlus涉及三方整体交互流程如下图所示：</p><p><img src="'+d+'" alt="交互流程"></p><div class="tip custom-block"><p class="custom-block-title">其他说明</p><ol><li>用户与机器人间所有交互请求，均由 WorkPlus 根据配置，将请求回调至机器人服务；</li><li>机器人处理回调请求时，可同步返回应答响应或异步调用 WorkPlus 开放接口应答请求；</li><li>机器人可配置事件订阅，处理入群/退群等逻辑；</li><li>回调过程中通过请求签名/内容加密等方式保证通信安全（<a href="/api/bot/callback.html#签名及加密">请见回调签名与加密</a>）。</li></ol></div><h2 id="回调配置" tabindex="-1">回调配置 <a class="header-anchor" href="#回调配置" aria-label="Permalink to &quot;回调配置&quot;">​</a></h2><p>进入应用后台后，如下图，点击“回调设置”进行配置机器人的回调设置，只有开启了回调功能，WorkPlus 才能把用户的消息传给业务方，以下是必填信息：</p><p><img src="'+o+'" alt="bot-create-5"></p><p>配置详细说明如下：</p><table><thead><tr><th>配置项</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>是否开启回调功能</td><td>是</td><td>开启之后消息将抄送至回调地址</td></tr><tr><td>URL</td><td>是</td><td>应用回调 URL, WorkPlus 在推送消息给企业时，会对消息内容做 AES 加密，以 Json 格式 POST 到应用的 URL 上</td></tr><tr><td>TOKEN</td><td>是</td><td>消息签名 TOKEN，用于验证请求是否来自 WorkPlus（防止攻击者伪造）</td></tr><tr><td>EncodingAESKey</td><td>是</td><td>用于消息体的加密，长度固定为43个字符，从a-z, A-Z, 0-9共62个字符中选取，是 AESKey 的 Base64 编码。解码后即32字节长的 AESKey；<br>AESKey：AES 算法的密钥，长度为32字节。<br>AES 采用 CBC 模式，数据采用 PKCS#7 填充至32字节的倍数；IV 初始向量大小为16字节，取 AESKey 前16字节，详见：<a href="http://tools.ietf.org/html/rfc2315" target="_blank" rel="noreferrer">http://tools.ietf.org/html/rfc2315</a></td></tr><tr><td>接收消息类型</td><td>是</td><td>消息类型支持多选：<br>1.【用户消息】：选择后接收用户发送的消息<br>2.【事件订阅】：选择后接收事件订阅的通知；订阅事件后，平台会在事件发生时（例如:机器人入群）向请求网址推送消息，开发者可以根据事件回传消息；事件订阅支持：机器人进群、机器人被移出群聊。<br>3.【指令消息】：选择后接收用户发出的机器人指令消息，业务方收到后可以根据指令回复用户相关的内容</td></tr><tr><td>是否开启回调加密</td><td>是</td><td>开启之后回调地址将收到密文消息</td></tr></tbody></table><p>详细的回调说明，请查阅<a href="/api/bot/callback.html">开放接口-机器人-被动回调</a>。</p><h2 id="事件订阅" tabindex="-1">事件订阅 <a class="header-anchor" href="#事件订阅" aria-label="Permalink to &quot;事件订阅&quot;">​</a></h2><p>订阅事件后，平台会在事件发生时向回调地址推送消息，开发者可以根据事件回传消息。可以视业务情况决定要订阅哪些事件。</p><p><img src="'+l+'" alt="bot-create-6"></p><p>详细说明如下：</p><table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>机器人进群</td><td>机器人被用户添加至群聊时触发此事件</td></tr><tr><td>机器人被移出群聊</td><td>机器人被移出群聊后触发此事件</td></tr></tbody></table><h2 id="机器人指令" tabindex="-1">机器人指令 <a class="header-anchor" href="#机器人指令" aria-label="Permalink to &quot;机器人指令&quot;">​</a></h2><p>机器人指令是在客户端提供给用户可选择发出的内容，在配置好机器人指令后，业务方还需要在业务后台把机器人指令的【KEY】与相关操作进行匹配，机器人指令才能真正生效。</p><p><img src="'+p+'" alt="bot-action"></p><p>配置详细说明如下：</p><table><thead><tr><th>名称</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>KEY</td><td>是</td><td>与业务方约定的唯一标识</td></tr><tr><td>指令名称</td><td>是</td><td>需要填写简体中文、繁体中文、英文</td></tr><tr><td>作用</td><td>是</td><td>让用户知道指令的作用</td></tr><tr><td>使用范围</td><td>是</td><td>可多选，设置指令在与机器人单聊、群聊中@机器人</td></tr></tbody></table><p>添加后，用户可以在输入过程中通过选择指令与机器人交互，如<a href="/light-app/createBot.html#与机器人互动">与机器人互动</a>;</p><h2 id="机器人消息" tabindex="-1">机器人消息 <a class="header-anchor" href="#机器人消息" aria-label="Permalink to &quot;机器人消息&quot;">​</a></h2><p>用户与机器人之间的交互是建立在 WorkPlus 与机器人之间的消息传递，为了赋予用户与机器人更丰富的交互方式，我们增加了全新的<a href="#消息按钮">消息按钮</a>及<a href="#消息更新">消息更新</a>能力。</p><p>机器人可以回复用户发送的机器人指令，或响应用户点击的消息按钮并更新消息内容或按钮状态等。详细的接口及说明，请查阅<a href="/api/bot/response.html">开放接口-机器人-响应消息</a>。</p><div class="tip custom-block"><p class="custom-block-title">应用消息通知</p><p>机器人作为轻应用的一种新形态，原平台的应用消息推送能力同样可用，可以参考<a href="/light-app/message.html">应用消息通知</a>。</p></div><h3 id="消息按钮" tabindex="-1">消息按钮 <a class="header-anchor" href="#消息按钮" aria-label="Permalink to &quot;消息按钮&quot;">​</a></h3><p><img src="'+i+'" alt="bot-btns" width="200"></p><p>如上图所示，机器人消息支持在消息体下方添加按钮，当前最多支持<strong>5x5</strong>的按钮(即一行5个按钮，共5行)。</p><p>按钮有两种行为模式:</p><ul><li>蓝色框的代表<code>指定按钮</code>：用户点击后，WorkPlus 会以对应的 action 值回调给机器人，以便机器人做出相应的回复响应；</li><li>红色框的代表<code>链接按钮</code>：用户点击后，WorkPlus 会跳转到 url 对应的地址，如果按钮的 action 和 url 同时存在，会优先响应 url；</li></ul><div class="tip custom-block"><p class="custom-block-title">链接多平台性</p><p>“链接按钮”支持<a href="/api/bot/response.html#url参数说明">多平台链接地址</a>设置，包括 iOS，安卓和 PC，其外也支持链接占位符替换。</p></div><p>此外，还可对按钮的可访问性进行控制，支持设置按钮的“可见”和“可点击”黑白名单。</p><p>更多“消息按钮”的信息请查阅<a href="/api/bot/response.html#消息按钮">开放接口-机器人-响应消息-消息按钮</a>。</p><h3 id="消息更新" tabindex="-1">消息更新 <a class="header-anchor" href="#消息更新" aria-label="Permalink to &quot;消息更新&quot;">​</a></h3><p>假如有一个可交互的消息示例如下：</p><p><img src="'+s+'" alt="bot-update-1" width="200"></p><p>用户点击 [同意] 按钮后，客户端会把当前消息更新，如下图所示：</p><p><img src="'+h+'" alt="bot-update-2" width="200"></p><p>在这个过程中，用户操作消息按钮后，WorkPlus 向业务方提交用户操作数据的交互。业务方可以根据收到用户提交的信息，请求更新消息内容，及时对用户的交互行为进行反馈。</p><p>更多“消息更新”的信息请查阅<a href="/api/bot/response.html#更新消息">开放接口-机器人-响应消息-更新消息</a>。</p>',42),n=[b];function m(u,_,f,k,P,g){return r(),a("div",null,n)}const q=t(c,[["render",m]]);export{E as __pageData,q as default};