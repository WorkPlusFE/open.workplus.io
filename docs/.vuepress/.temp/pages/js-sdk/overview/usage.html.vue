<template><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1>
<p><code>JS-SDK</code>支持<code>script</code>标签及以<code>模块</code>的形式引入；初始化时，可以设置日志输出、数据模拟等配置。</p>
<h2 id="引入及使用" tabindex="-1"><a class="header-anchor" href="#引入及使用" aria-hidden="true">#</a> 引入及使用</h2>
<p><strong>基于<code>npm</code>包的方式引入：</strong></p>
<p>1、使用<code>npm</code>或<code>yarn</code>安装模块：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> szient-js-sdk --save

<span class="token comment"># 使用 yarn </span>
<span class="token function">yarn</span> <span class="token function">add</span> szient-js-sdk
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>2、安装成功后，使用<code>es module</code>或<code>commonjs</code>模块规范引入，支持全量及按模块引入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全量引入</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> w6s <span class="token keyword">from</span> <span class="token string">'szient-js-sdk'</span><span class="token punctuation">;</span>

<span class="token comment">// 按模块引入</span>
<span class="token keyword">import</span> auth <span class="token keyword">from</span> <span class="token string">'szient-js-sdk/auth'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3、引入模块后，可以通过调用初始化方法<code>init</code>来修改默认配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> debug<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>init</code>方法并不是必须的。所有配置项，请看下方<RouterLink to="/js-sdk/overview/usage.html#%E9%85%8D%E7%BD%AE">配置说明</RouterLink>。</p>
<p>4、SDK 就绪后，将可调用各模块方法，所有接口均支持<code>promise</code>及<code>callback</code>的调用方式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Promise</span>
w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>user_ticket<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// CallBack</span>
w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>user_ticket<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="js-api-鉴权" tabindex="-1"><a class="header-anchor" href="#js-api-鉴权" aria-hidden="true">#</a> JS-API 鉴权</h2>
<p>为了保证 JS-SDK 的调用者是可信任的，同时对当前页面可用的 API 进行安全限制，防止恶意网页通过 JS-API 随意获取用户私密信息，对用户财产造成损失。因此在部分 JS-API 在被调用前，需要通过接口进行鉴权，只有鉴权成功的情况下，JS-API 的调用才会正常生效。</p>
<p>更多 JS-API 鉴权的信息，请查看<RouterLink to="/js-sdk/overview/auth.html">鉴权流程</RouterLink>。</p>
<h2 id="配合-vue-使用" tabindex="-1"><a class="header-anchor" href="#配合-vue-使用" aria-hidden="true">#</a> 配合 Vue 使用</h2>
<p><strong>一、<code>npm</code> 模式：</strong></p>
<p>基于 @vue/cli 创建的项目，可以通过<code>Vue.use(w6s, initOptions)</code>的方式初始化 sdk。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> w6s <span class="token keyword">from</span> <span class="token string">'szient-js-sdk'</span><span class="token punctuation">;</span>

<span class="token comment">// 初始化 sdk，同时会在 Vue 原型链上挂载 $w6s 对象</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>w6s<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>接下来，可以在 Vue 组件内，直接访问<code>this.$w6s</code>对象，以调用 sdk 方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$w6s<span class="token punctuation">.</span>header<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">'JS-SDK VueJS Demo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>二、<code>script</code> 标签模式：</strong></p>
<p>除此之外，sdk 还支持以 script 标签引入的方式，结合 vue 进行使用，如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 以实际sdk访问地址为准 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./sdk.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 必须主动调用初始化方法</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$w6s<span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getDeviceInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>可以通过<code>w6s.init</code>方法进行初始化参数设置，具体可设置参数如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 是否开启调试模式</span>
  debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 接口超时时间，单位毫秒</span>
  timeout<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>

  <span class="token comment">// 是否开启接口数据模拟功能</span>
  mock<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Mock 数据 </span>
  mockData<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明：</h4>
<p><strong>debug</strong></p>
<p>默认为 false。开启后，将会在控制台打印调用接口的相关信息。</p>
<p><strong>timeout</strong></p>
<p>接口调用超时设置，毫秒数，默认为 5 秒。</p>
<p>部分接口不受该参数影响，例如选择照片。任何有原生页面弹出或没有回调的方法，timeout 将不生效。</p>
<p><strong>mock</strong></p>
<p>开启 js-sdk 接口的数据模拟功能，该开关可通过<code>process.env.NODE_ENV</code>环境变量来控制。</p>
<p><strong>mockData</strong></p>
<p>接口的模拟数据定义，格式如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 启用 Mock 服务</span>
  mock<span class="token operator">:</span> <span class="token boolean">true</span>                      
  mockData<span class="token operator">:</span> <span class="token punctuation">{</span>     
    <span class="token comment">// 服务类名                </span>
    auth<span class="token operator">:</span> <span class="token punctuation">{</span>         
      <span class="token comment">// 具体执行方法的回调              </span>
      <span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>           
        <span class="token keyword">return</span> <span class="token punctuation">{</span> user_ticket<span class="token operator">:</span> <span class="token string">'testmock'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

w6s<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUserTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>user_ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// testmock</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="错误信息" tabindex="-1"><a class="header-anchor" href="#错误信息" aria-hidden="true">#</a> 错误信息</h2>
<p>js-sdk 在调用失败会触发 error 函数，错误信息可在返回的 error 参数中参看，下面为示例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'sdk error: '</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
