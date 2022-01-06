<template><h1 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h1>
<div class="custom-container warning"><p class="custom-container-title">关于文件本地路径</p>
<p>文件相关的接口，若需传入本地文件路径，都需要去掉<code>file://</code>开头。</p>
<p>例如，通常我们获取到的本地图片路径为：<code>file:///var/mobile/xxxx/test.xlsx</code>，需去掉<code>file://</code>，变成<code>/var/mobile/xxxx/test.xlsx</code>。</p>
</div>
<h2 id="选择文件" tabindex="-1"><a class="header-anchor" href="#选择文件" aria-hidden="true">#</a> 选择文件</h2>
<p>打开 WorkPlus 文件选择管理器，支持单选或多选，并自动上传文件到后台媒体中心，返回对应 mediaId。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">chooseFiles</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  multiple<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  fileKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'已选文件本地地址'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  fileLimit<span class="token operator">:</span> <span class="token punctuation">{</span>
    maxSelectCount<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    singleSelectSize<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    totalSelectSize<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>multiple</td>
<td>Boolean</td>
<td>是否为多选</td>
</tr>
<tr>
<td>fileKeys</td>
<td>Array[String]</td>
<td>已选文件本地地址数组，用于复选</td>
</tr>
<tr>
<td>fileLimit.maxSelectCount</td>
<td>Number</td>
<td>非必须，多选时数量的限制，默认为 9</td>
</tr>
<tr>
<td>fileLimit.singleSelectSize</td>
<td>Number</td>
<td>非必须，单个文件选择大小限制(byte),-1表示不限制，默认为 -1</td>
</tr>
<tr>
<td>fileLimit.totalSelectSize</td>
<td>Number</td>
<td>非必须，所有文件选择大小限制(byte),-1表示不限制，默认为 -1</td>
</tr>
</tbody>
</table>
<p><strong>返回数据</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>filePath</td>
<td>文件在本机的路径</td>
</tr>
<tr>
<td>mediaId</td>
<td>该文件在媒体中心的 mediaId</td>
</tr>
<tr>
<td>name</td>
<td>文件名字</td>
</tr>
</tbody>
</table>
<h2 id="打开文件详情" tabindex="-1"><a class="header-anchor" href="#打开文件详情" aria-hidden="true">#</a> 打开文件详情</h2>
<p>通过指定 mediaId, fileName 等参数, 打开文件详情界面。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有回调</span>
w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">openFileDetail</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  filePath<span class="token operator">:</span> <span class="token string">'文件地址'</span><span class="token punctuation">,</span>
  fileName<span class="token operator">:</span> <span class="token string">'demo'</span><span class="token punctuation">,</span>
  fileSize<span class="token operator">:</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
  mediaId<span class="token operator">:</span> <span class="token string">'demo-mediaId'</span><span class="token punctuation">,</span>
  isImage<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>filePath</td>
<td>String</td>
<td>可选参数，文件路径, 若传入该参数, 则优先以该路径为主; 支持本地以及http url 地址</td>
</tr>
<tr>
<td>fileName</td>
<td>String</td>
<td>文件名</td>
</tr>
<tr>
<td>fileSize</td>
<td>Number</td>
<td>非必须，文件大小，单位 byte</td>
</tr>
<tr>
<td>mediaId</td>
<td>String</td>
<td>可选参数，传入媒体id，详见<code>filePath</code>参数说明</td>
</tr>
<tr>
<td>isImage</td>
<td>Boolean</td>
<td>必须，指定文件是否是图片, 若为 true, 客户端则强制打开图片预览界面, false 则通过 fileName后缀来判断文件类型, 非图片则使用文件详情界面</td>
</tr>
</tbody>
</table>
<h2 id="本地打开文件" tabindex="-1"><a class="header-anchor" href="#本地打开文件" aria-hidden="true">#</a> 本地打开文件</h2>
<p>原生打开文件，pdf、excel、word 及 ppt 等。</p>
<div class="custom-container tip"><p class="custom-container-title">与"打开文件详情"的区别</p>
<p>该方法是直接通过系统的方式去打开本地文件，而<code>打开文件详情</code>则是打开一个 WorkPlus 的文件预览页面，该页面具备下载或预览的功能。</p>
</div>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有回调</span>
w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">'文件地址'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>path</td>
<td>String</td>
<td>文件访问地址</td>
</tr>
</tbody>
</table>
<h2 id="判断文件是否存在" tabindex="-1"><a class="header-anchor" href="#判断文件是否存在" aria-hidden="true">#</a> 判断文件是否存在</h2>
<p>判断指定路径的文件是否存在。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">isFileExist</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">'文件地址'</span><span class="token punctuation">,</span>
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
<td>path</td>
<td>String</td>
<td>文件访问地址</td>
</tr>
</tbody>
</table>
<p><strong>返回数据</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>exist</td>
<td>Boolean, 表示文件是否存在</td>
</tr>
</tbody>
</table>
<h2 id="文件下载" tabindex="-1"><a class="header-anchor" href="#文件下载" aria-hidden="true">#</a> 文件下载</h2>
<p>下载文件到本地，可以在 WorkPlus 文件选择器中看到。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  source<span class="token operator">:</span> <span class="token string">'https://demo.com/xx.file'</span><span class="token punctuation">,</span>
  target<span class="token operator">:</span> <span class="token string">'file:///var/mobile/xx/files/xxx.file'</span><span class="token punctuation">,</span>
  trustAllHosts<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token punctuation">{</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<td>source</td>
<td>string</td>
<td>文件的下载地址，需做 encodeURI 处理</td>
</tr>
<tr>
<td>target</td>
<td>string</td>
<td>文件下载后存放在本级的地址</td>
</tr>
<tr>
<td>trustAllHosts</td>
<td>boolean</td>
<td>可选参数，默认为false。 如果设置为true，则它接受所有安全证书。 这很有用，因为Android拒绝自签名安全证书。 不建议用于生产。</td>
</tr>
<tr>
<td>options</td>
<td>object</td>
<td>通常用于设置头部信息</td>
</tr>
</tbody>
</table>
<p>具体接口参数说明，请查看<a href="https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-file-transfer/index.html#download" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。</p>
<p><strong>返回数据</strong></p>
<p>下载成功后，将会执行<code>success</code>回调方法，并返回一个<code>FileEntry</code>对象。若失败，将触发<code>fail</code>回调方法，返回一个<code>FileTransferError</code>错误对象。</p>
<div class="custom-container tip"><p class="custom-container-title">关于 target 参数</p>
<p>通常情况下，我们无法得知设备本地存储文件的具体位置，可以通过<RouterLink to="/js-sdk/file.html#%E8%8E%B7%E5%8F%96%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E8%B7%AF%E5%BE%84">获取文件目录路径</RouterLink>获取。</p>
</div>
<h2 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h2>
<p>上传本地文件到服务器，通常用于选择图片或者文件后上传到第三方服务器。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  fileURL<span class="token operator">:</span> <span class="token string">'文件本地地址'</span><span class="token punctuation">,</span>
  server<span class="token operator">:</span> <span class="token string">'上传媒体的服务器地址'</span><span class="token punctuation">,</span>
  trustAllHosts<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 上传成功回调</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 上传失败回调</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">progress</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">loaded<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// loaded：已经上传的，tottal：文件总大小</span>
    <span class="token comment">// 可在此处处理文件上传的进度计算</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>参数说明</strong></p>
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
<td>fileURL</td>
<td>string</td>
<td>文件在设备中的本地地址</td>
</tr>
<tr>
<td>server</td>
<td>string</td>
<td>上传文件的服务器地址</td>
</tr>
<tr>
<td>trustAllHosts</td>
<td>boolean</td>
<td>可选参数，默认为false。 如果设置为true，则它接受所有安全证书。 这很有用，因为Android拒绝自签名安全证书。 不建议用于生产。</td>
</tr>
</tbody>
</table>
<p>具体接口参数说明，请查看<a href="https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-file-transfer/index.html#upload" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。</p>
<h2 id="获取文件目录路径" tabindex="-1"><a class="header-anchor" href="#获取文件目录路径" aria-hidden="true">#</a> 获取文件目录路径</h2>
<p>获取设备的文件存在目录，包括下载文件夹及网盘（如果有）及用户自定义目录。</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">getFilePath</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  system<span class="token operator">:</span> <span class="token string">'file'</span><span class="token punctuation">,</span>
  custom<span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span>
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
<td>system</td>
<td>string</td>
<td>表示 WorkPlus 定义的路径，目前支持<code>file</code>, <code>dropbox</code>类型, 分别获取下载文件目录, 跟网盘目录</td>
</tr>
<tr>
<td>custom</td>
<td>string</td>
<td>轻应用自定义的用户目录，如传入参数<code>&quot;custom&quot; : &quot;abc&quot;</code>, app 将创建<code>sdcard_root/app_file/username/abc</code>的文件目录, 并返回路径给调用者</td>
</tr>
</tbody>
</table>
<p>注意，以上参数<code>system</code>优先级较高, 即两个类型同时传入时, 以<code>system</code>为准。</p>
</template>
