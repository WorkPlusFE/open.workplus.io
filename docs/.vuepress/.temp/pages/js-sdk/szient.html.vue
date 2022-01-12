<template><h1 id="深i企" tabindex="-1"><a class="header-anchor" href="#深i企" aria-hidden="true">#</a> 深i企</h1>
<h2 id="查询当前登录状态" tabindex="-1"><a class="header-anchor" href="#查询当前登录状态" aria-hidden="true">#</a> 查询当前登录状态</h2>
<p>只返回登录信息，未登录时不进行登录操作 (wokrplus 支持游客模式时使用)。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">getLoginState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>biz</td>
<td>业务属性, 用来做特殊定制的场景</td>
</tr>
<tr>
<td>id_card</td>
<td>身份证（string）</td>
</tr>
<tr>
<td>role_level</td>
<td>用户在办事企业的可信等级, 取值范围：null, L1, L2, L3, L4</td>
</tr>
<tr>
<td>current_org_name</td>
<td>用户办事企业名称</td>
</tr>
<tr>
<td>current_org_code</td>
<td>办事企业统一社会信用代码</td>
</tr>
</tbody>
</table>
<p><strong>异常返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>-1，未登录</td>
</tr>
<tr>
<td>message</td>
<td>异常描述</td>
</tr>
</tbody>
</table>
<h2 id="检查登录流程" tabindex="-1"><a class="header-anchor" href="#检查登录流程" aria-hidden="true">#</a> 检查登录流程</h2>
<p>若未登录则尝试进行登录操作，已登录则返回人的信息。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">checkLogin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>biz</td>
<td>业务属性, 用来做特殊定制的场景</td>
</tr>
<tr>
<td>id_card</td>
<td>身份证（string）</td>
</tr>
<tr>
<td>role_level</td>
<td>用户在办事企业的可信等级, 取值范围：null, L1, L2, L3, L4</td>
</tr>
</tbody>
</table>
<p><strong>异常返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>-1，未登录</td>
</tr>
<tr>
<td>message</td>
<td>异常描述</td>
</tr>
</tbody>
</table>
<h2 id="观察状态变化" tabindex="-1"><a class="header-anchor" href="#观察状态变化" aria-hidden="true">#</a> 观察状态变化</h2>
<p>前端在首页等场景, 在 WorkPlus 支持游客模式使用时, 当需要感知到登录/登出变化, 可通过该接口进行监听。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 绑定监听事件</span>
w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">watchStatusChanged</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 登录或登出会触发回调</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>event</td>
<td>事件类型，分别为 LOGIN、LOGOUT 和 BIZ_INTEGRITY</td>
</tr>
<tr>
<td>data</td>
<td>若登录，会返回登录的用户信息，可参考<code>查询当前登录状态</code>的接口返回</td>
</tr>
</tbody>
</table>
<p>你可以通过<code>unwatchStatusChanged</code>方法取消状态的监听：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 取消事件监听</span>
w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">unwatchStatusChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="选择聊天消息" tabindex="-1"><a class="header-anchor" href="#选择聊天消息" aria-hidden="true">#</a> 选择聊天消息</h2>
<p>如投诉场景，前端需要选择聊天消息进行后续处理，此接口返回所选中的聊天id集合。</p>
<blockquote>
<p>该接口会根据<code>session_id</code>打开对应会话窗口，并根据传参<code>delivery_ids</code>复选消息。当操作完成后，会返回最后选中的消息的id。</p>
</blockquote>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">selectMessages</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">delivery_ids</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'456'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">session_id</span><span class="token operator">:</span> <span class="token string">'session-123'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>delivery_ids</td>
<td>Array</td>
<td>已经选中的消息，再次来修改时需要带上这些消息id，客户端会提前选中这些消息</td>
</tr>
<tr>
<td>session_id</td>
<td>String</td>
<td>会话的id</td>
</tr>
</tbody>
</table>
<h2 id="查看合并消息" tabindex="-1"><a class="header-anchor" href="#查看合并消息" aria-hidden="true">#</a> 查看合并消息</h2>
<p>根据合并消息的 JSON 字符串查看合并消息，如投诉场景，投诉详情页面需要查看聊天证据。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">showMultipartMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">multipart_message</span><span class="token operator">:</span> <span class="token string">'JSON 字符串'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>multipart_message</td>
<td>String</td>
<td>合并消息的 JSON 字符串数据</td>
</tr>
</tbody>
</table>
<h2 id="原生-ajax-请求" tabindex="-1"><a class="header-anchor" href="#原生-ajax-请求" aria-hidden="true">#</a> 原生 AJAX 请求</h2>
<p>模拟前端的 AJAX 能力，相比之下，更安全和可控，并且不存在跨域问题。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'请求的url'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>String</td>
<td>必须，请求的 URL，完整路径</td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>请求的参数</td>
</tr>
<tr>
<td>header</td>
<td>Object</td>
<td>请求的 Header 参数扩展</td>
</tr>
<tr>
<td>timeout</td>
<td>Number</td>
<td>超时时间，单位为毫秒，默认值 30000 毫秒</td>
</tr>
<tr>
<td>method</td>
<td>String</td>
<td>HTTP的请求方法，只支持GET/HEAD/POST/PUT/DELETE，默认 GET</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">带平台特定信息的请求</p>
<p>如果你开发的应用，是作为混合开发的 H5 部分，接口是直接调到 WorkPlus 后台，可以使用<code>w6s.authRequest</code>方法进行 AJAX 请求，该方法在<code>已鉴权</code>的情况下，会默认带上用户验证及平台信息等。</p>
<p>该方法的传参和返回，跟<code>w6s.request</code>一致。</p>
</div>
<p><strong>返回说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>Object/ArrayBuffer</td>
<td>返回的结果</td>
</tr>
<tr>
<td>header</td>
<td>Object</td>
<td>请求响应返回的的 Header</td>
</tr>
<tr>
<td>statusCode</td>
<td>Number</td>
<td>HTTP 的状态码</td>
</tr>
</tbody>
</table>
<h2 id="检查流程完整性" tabindex="-1"><a class="header-anchor" href="#检查流程完整性" aria-hidden="true">#</a> 检查流程完整性</h2>
<p>检查是否关联企业，若未关联，尝试关联操作；已关联，则返回相关信息。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">checkBizIntegrity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>biz</td>
<td>业务属性, 用来做特殊定制的场景</td>
</tr>
</tbody>
</table>
<p><strong>异常返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>-1：失败， -2：取消， -4：没有办事企业，-5：未登录</td>
</tr>
<tr>
<td>message</td>
<td>异常描述</td>
</tr>
</tbody>
</table>
<h2 id="确定完整性完成-设置当前办事企业" tabindex="-1"><a class="header-anchor" href="#确定完整性完成-设置当前办事企业" aria-hidden="true">#</a> 确定完整性完成(设置当前办事企业)</h2>
<p>关联企业（选择办事企业）流程结果回调。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">okBizIntegrity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">biz</span><span class="token operator">:</span> <span class="token string">'your_page_name'</span><span class="token punctuation">,</span> <span class="token comment">//见下面参数说明</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>String</td>
<td>success 成功， fail 失败， cancel 取消</td>
</tr>
<tr>
<td>biz</td>
<td>String</td>
<td>业务字段，以页面名为准，如申请权限为my-permissions</td>
</tr>
</tbody>
</table>
<p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>0</td>
</tr>
<tr>
<td>message</td>
<td>'success'</td>
</tr>
</tbody>
</table>
<h2 id="行为埋点" tabindex="-1"><a class="header-anchor" href="#行为埋点" aria-hidden="true">#</a> 行为埋点</h2>
<p>通过原生接口，进行前端页面埋点，与移动端保持为一个整体。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">buryingPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">'tgp'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">event_code</span><span class="token operator">:</span> <span class="token string">'c_event'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">c_event_name</span><span class="token operator">:</span> <span class="token string">'c_event_name_1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c_event_id</span><span class="token operator">:</span> <span class="token string">'c_event_id_1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>channel</td>
<td>String</td>
<td>可不传，默认为客户端默认配置的</td>
</tr>
<tr>
<td>event_code</td>
<td>String</td>
<td>必须的，定义的<code>event_code</code>，如<code>c_event</code>、<code>pageview</code>、<code>share</code></td>
</tr>
<tr>
<td>params</td>
<td>Object</td>
<td>针对<code>event_code</code>定义的参数键值对，如 c_event 下有定义：c_event_name 与 c_event_id 两个参数，具体请查看下方 params 的可用参数说明</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">params 可用参数说明</p>
<p>当前共 3 个<code>event_code</code>，不同的<code>event_code</code>对应的<code>params</code>传参不一样，居图如下：</p>
<ol>
<li><code>c_event</code>点击类事件
<ul>
<li>c_event_name： 事件名称</li>
<li>c_event_id： 事件id</li>
</ul>
</li>
<li><code>pageview</code>页面浏览事件
<ul>
<li>page_name： 页面名称</li>
<li>page_interval： 页面停留时长(毫秒数)</li>
</ul>
</li>
<li><code>share</code>分享事件
<ul>
<li>page_name： 页面名称</li>
</ul>
</li>
</ol>
<p>注意，参数的值需要与运营中心的埋点定义文档一一对应，另<code>page_interval</code>需要自行计算，以毫秒数为单位。</p>
</div>
<h2 id="键盘高度监听" tabindex="-1"><a class="header-anchor" href="#键盘高度监听" aria-hidden="true">#</a> 键盘高度监听</h2>
<p>返回当前键盘的高度，持续监听。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 绑定监听事件</span>
w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">watchKeyboardChanged</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 键盘变化时触发返回</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>height</td>
<td>键盘高度，发生变化就会回调，前端需要持续监听。0 为键盘未打开</td>
</tr>
</tbody>
</table>
<h2 id="获取键盘信息" tabindex="-1"><a class="header-anchor" href="#获取键盘信息" aria-hidden="true">#</a> 获取键盘信息</h2>
<p>暂时只提供返回键盘高度信息，后续扩展其它需要的返回值。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 绑定监听事件</span>
w6s<span class="token punctuation">.</span>szient<span class="token punctuation">.</span><span class="token function">getKeyboardInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>height</td>
<td>键盘高度，发生变化就会回调，前端需要持续监听。0 为键盘未打开</td>
</tr>
</tbody>
</table>
<h2 id="调用小程序" tabindex="-1"><a class="header-anchor" href="#调用小程序" aria-hidden="true">#</a> 调用小程序</h2>
<p>该接口用来调用小程序，获取小程序返回信息。</p>
<p><strong>使用说明</strong></p>
<table>
<thead>
<tr>
<th>客户端</th>
<th>Android</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td>支持情况</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>webview<span class="token punctuation">.</span><span class="token function">launchMiniProgram</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">user_name</span><span class="token operator">:</span> <span class="token string">'gh_xa11'</span><span class="token punctuation">,</span> <span class="token comment">// 小程序id      </span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'pages/xx'</span><span class="token punctuation">,</span> <span class="token comment">// 小程序具体路径          </span>
  <span class="token literal-property property">miniprogram_type</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">,</span> <span class="token comment">//0 正式版，1 开发版，2 体验版</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>成功返回</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>0成功，-1失败</td>
</tr>
<tr>
<td>result</td>
<td>返回的数据</td>
</tr>
<tr>
<td>message</td>
<td>接口状态描述</td>
</tr>
</tbody>
</table>
</template>
