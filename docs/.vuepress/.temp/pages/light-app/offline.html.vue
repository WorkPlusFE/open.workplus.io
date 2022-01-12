<template><h1 id="离线应用" tabindex="-1"><a class="header-anchor" href="#离线应用" aria-hidden="true">#</a> 离线应用</h1>
<p>离线应用，就是把前端静态资源文件放置到客户端本地，提高访问速度的同时，也节省流量。当前离线应用功能只在移动客户端上提供。</p>
<h2 id="压缩包的规范" tabindex="-1"><a class="header-anchor" href="#压缩包的规范" aria-hidden="true">#</a> 压缩包的规范</h2>
<p>发布离线应用，需要对前端资源包进行压缩，格式规定为<code>zip</code>。除了格式要求，资源的目录也同样有要求，以下面例子为例：</p>
<p class="w6s-image">
  <img :src="$withBase('/app/offline-files.png')" alt="离线资源" width="70%">
</p>
<p>正确的做法是，选中<code>mobile</code>文件夹进行压缩，而不是全选 mobile 内所有文件进行压缩。压缩包生成后，上传即可。</p>
<h2 id="启动地址" tabindex="-1"><a class="header-anchor" href="#启动地址" aria-hidden="true">#</a> 启动地址</h2>
<p>压缩包上传成功后，还需要设置应用的启动地址。</p>
<p>当应用上架后被首次打开，客户端会根据应用的设置，把离线资源包下载到本地，并进行解压。所以离线应用在首次打开都会比较慢，因为多了一个下载及解压资源的过程。为了能在解压后，找到对应的应用，客户端制定了一套 URL 规范，根据上一步生成的压缩包，启动地址应该是这样填写：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">local</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mobile<span class="token operator">/</span>index<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>URL 解析说明：</p>
<ul>
<li><code>local://</code> 特定协议，客户端会以离线应用的方式处理；</li>
<li><code>mobile</code> 压缩包解压后的一级目录，如果是多层级的，都可以拼上去；</li>
<li><code>index.html</code> 应用的入口文件。</li>
</ul>
<h2 id="前端-api-地址" tabindex="-1"><a class="header-anchor" href="#前端-api-地址" aria-hidden="true">#</a> 前端 API 地址</h2>
<p>因为离线应用是以<code>file://</code>协议打开，如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">file</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>offline<span class="token operator">-</span>app<span class="token operator">/</span>app_id<span class="token operator">/</span>version<span class="token operator">/</span>mobile<span class="token operator">/</span>index<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>所以，在离线应用中，Ajax 请求的 api 地址，切勿使用相对路径，请使用<strong>全路径</strong>。</p>
<h2 id="ios-wkwebview-的问题" tabindex="-1"><a class="header-anchor" href="#ios-wkwebview-的问题" aria-hidden="true">#</a> iOS WKWebView 的问题</h2>
<p>基于<code>WKWebView</code>的安全机制，离线应用以<code>file://</code>协议访问资源，而<code>Ajax请求</code>是走<code>http</code>的，这种情况下，会被认定为跨域。解决跨域的方式有很多，例如后台做<code>CORS</code>处理。</p>
<p>但是这里还存在一个问题，就是<code>cookie</code>。因为 cookie 本身也是有同源的限制，所以在跨域的情况下，cookie 无法被正常传递。所以，我们推荐使用其他的方式进行用户身份认证，例如使用<code>jwt(json web token)</code>。</p>
<h2 id="更新机制" tabindex="-1"><a class="header-anchor" href="#更新机制" aria-hidden="true">#</a> 更新机制</h2>
<p>离线应用的更新，就不会像以<code>http</code>打开的应用方便。</p>
<p>如果需要更新离线应用，需要在管理后台上架新的应用版本，然后上传新的离线资源包。当应用上架后，在客户端首次打开，客户端会检测到应用有更新，就会再次下载并解压离线资源包，完成后，应用将正常打开。</p>
<blockquote>
<p>上架新版本后，可以在客户端切换底部 tab 来触发同步更新。</p>
</blockquote>
</template>
