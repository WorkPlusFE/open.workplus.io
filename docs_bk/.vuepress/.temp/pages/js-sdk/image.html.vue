<template><h1 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h1>
<h2 id="拍照" tabindex="-1"><a class="header-anchor" href="#拍照" aria-hidden="true">#</a> 拍照</h2>
<p>根据传入参数，决定是否对拍照后照片进行裁剪编辑, 同时会将图片上传到媒体中心并返回 mediaId。</p>
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
<CodeWrapper fn="image.takePicture">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">takePicture</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  editable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>editable</td>
<td>Boolean</td>
<td>是否进行裁剪，适用于设置头像</td>
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
<td>mediaId</td>
<td>上传媒体中心后返回的媒体id</td>
</tr>
<tr>
<td>imageURL</td>
<td>压缩后图像存在本地的地址</td>
</tr>
<tr>
<td>key</td>
<td>原图像存在本地的地址</td>
</tr>
<tr>
<td>imageInfo</td>
<td>图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）</td>
</tr>
</tbody>
</table>
<h2 id="选择照片" tabindex="-1"><a class="header-anchor" href="#选择照片" aria-hidden="true">#</a> 选择照片</h2>
<p>调用手机相册，支持图片多选及单选，支持编辑剪裁(仅限于单选)，并且支持图片复选，选择完后会自动上传到媒体中心并返回相应的 mediaId。</p>
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
<CodeWrapper fn="image.chooseImages">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">chooseImages</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  multiple<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  imageKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'file://图片本机地址'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  editable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  fileLimit<span class="token operator">:</span> <span class="token punctuation">{</span>
    maxSelectCount<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    singleSelectSize<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    totalSelectSize<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>是否为图片多选</td>
</tr>
<tr>
<td>imageKeys</td>
<td>Array[string]</td>
<td>非必须，图片在本机的地址，用于图片复选</td>
</tr>
<tr>
<td>editable</td>
<td>Boolean</td>
<td>是否可对图片进行裁剪，仅在单选<code>multiple: false</code>时有效，默认为 true</td>
</tr>
<tr>
<td>fileLimit.maxSelectCount</td>
<td>Number</td>
<td>非必须，多选时数量的限制，默认为 9</td>
</tr>
<tr>
<td>fileLimit.singleSelectSize</td>
<td>Number</td>
<td>非必须，单个文件选择大小限制(byte), -1表示不限制，默认为-1</td>
</tr>
<tr>
<td>fileLimit.totalSelectSize</td>
<td>Number</td>
<td>非必须，所有文件选择大小限制(byte), -1表示不限制，默认为-1</td>
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
<td>mediaId</td>
<td>上传媒体中心后返回的媒体id</td>
</tr>
<tr>
<td>imageURL</td>
<td>压缩后图像存在本地的地址</td>
</tr>
<tr>
<td>key</td>
<td>原图像存在本地的地址</td>
</tr>
<tr>
<td>imageInfo</td>
<td>图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）</td>
</tr>
</tbody>
</table>
<h2 id="清除缓存" tabindex="-1"><a class="header-anchor" href="#清除缓存" aria-hidden="true">#</a> 清除缓存</h2>
<p>拍照或选择照片后都会生成压缩图片，可调用该方法进行清除。</p>
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
<CodeWrapper fn="image.cleanCompressImage">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有返回</span>
w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">cleanCompressImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeWrapper>
<h2 id="图片预览" tabindex="-1"><a class="header-anchor" href="#图片预览" aria-hidden="true">#</a> 图片预览</h2>
<p>传入图片地址进行图片预览，支持传入 position 表示从第几张开始预览。</p>
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
<CodeWrapper fn="image.showImages">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有回调</span>
w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">showImages</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  urls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'https://media.io/demo.png'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  medias<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'媒体id'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  position<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>urls</td>
<td>Array[String]</td>
<td>图片的<code>http(s)://</code>访问地址，不支持本地图片</td>
</tr>
<tr>
<td>medias</td>
<td>Array[String]</td>
<td>图片的 mediaId</td>
</tr>
<tr>
<td>position</td>
<td>Number | String</td>
<td>非必须，表示从第几张图片开始预览，0 为第一张</td>
</tr>
</tbody>
</table>
<blockquote>
<p><code>urls</code>和<code>medias</code>参数，只能二选一，如果同时传入，优先读取<code>urls</code>。</p>
</blockquote>
<h2 id="图片保存" tabindex="-1"><a class="header-anchor" href="#图片保存" aria-hidden="true">#</a> 图片保存</h2>
<p>传入图片地址，保存到手机本地。</p>
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
<CodeWrapper custom-link="image/saveImages">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有回调</span>
w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">saveImages</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">'图片的 url 访问地址'</span><span class="token punctuation">,</span>
  mediaId<span class="token operator">:</span> <span class="token string">'图片mediaId'</span><span class="token punctuation">,</span>
  imageData<span class="token operator">:</span> <span class="token string">'base64数据'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>图片的 url 访问地址</td>
</tr>
<tr>
<td>mediaId</td>
<td>String</td>
<td>图片mediaId</td>
</tr>
<tr>
<td>imageData</td>
<td>String</td>
<td>base64数据</td>
</tr>
</tbody>
</table>
<blockquote>
<p>mediaId、url、imageData 都是选填参数, 请根据具体的业务场景, 进行选择，三者只能选其一。</p>
</blockquote>
<h2 id="长按图片弹出框" tabindex="-1"><a class="header-anchor" href="#长按图片弹出框" aria-hidden="true">#</a> 长按图片弹出框</h2>
<p>弹出框包括<code>识别二维码</code>，<code>保存图片</code>等选项。</p>
<div class="custom-container warning"><p class="custom-container-title">该功能的常用场景描述</p>
<p>例如需要识别页面图片上的二维码，通用的交互都是需要长按图片，然后会弹出一个<code>Action Sheet</code>提示框，然后用户进行选择操作。但这里的<code>长按</code>需要调用者自行实现，并且需要把被长按的图片转换成<code>base64</code>作为传参。</p>
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
<CodeWrapper custom-link="image/actionForLongPressImage">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有回调</span>
w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">actionForLongPressImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imageData<span class="token operator">:</span> <span class="token string">'base64数据'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>imageData</td>
<td>String</td>
<td>base64数据，详细描述请看下方说明</td>
</tr>
</tbody>
</table>
<p><strong>关于 imageData</strong></p>
<p>页面上显示的图片通常都以<code>http(s)://</code> 的方式加载，或者本身就是个 base64 字符串。而参数 imageData 的值，并非是一个 image 直接转换过来的 base64 字符串，例如:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>data:image/jpeg;base64,/9j/4AAQSkZJ....Rg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>此处需要的是<code>base64,</code>后的那一段，也就是<code>/9j/4AAQSkZJ....Rg</code>。</p>
<p>此外，sdk 中的<code>image.toBase64</code>方法并不能转换非本地的图片，如果需要转换以 <code>http(s)://</code> 协议访问的图片，请使用第三方模块，例如<a href="https://html2canvas.hertzen.com/" target="_blank" rel="noopener noreferrer">html2canvas<OutboundLink/></a>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> html2canvas <span class="token keyword">from</span> <span class="token string">'html2canvas'</span><span class="token punctuation">;</span>

<span class="token function">html2canvas</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">canvas<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> base64 <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">"image/jpeg"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> imageData  <span class="token operator">=</span> base64<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'base64,'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    sdk<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">actionForLongPressImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      imageData<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="转-base64" tabindex="-1"><a class="header-anchor" href="#转-base64" aria-hidden="true">#</a> 转 Base64</h2>
<p>将本地图片转换成 Base64字符串。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>通常我们通过拍照或者打开相册来获取图片，而图片的访问地址都是本地绝对路径，基于 Webview 的安全机制，本地路径放到 <code>&lt;img&gt;</code> src 里，并不能显示出来，此时可以通过该方法把图片转换成 Base64 来使用。</p>
<p>注意，该方法仅支持转换本地图片。</p>
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
<CodeWrapper custom-link="image/base64">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">toBase64</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  filePath<span class="token operator">:</span> <span class="token string">'file://图片本地地址'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>图片本地地址</td>
</tr>
</tbody>
</table>
<p><strong>返回数据</strong></p>
<p>| 参数 | 说明 |
| - | - | - |
| target._result | 在返回数据的 target 属性中，可以找到 key 值为 _result 的 base64 内容  |</p>
<h2 id="图片添加水印" tabindex="-1"><a class="header-anchor" href="#图片添加水印" aria-hidden="true">#</a> 图片添加水印</h2>
<p>调起手机相册进行拍照，生成水印图片并返回。</p>
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
<CodeWrapper custom-link="image/takePhotoAndAddWaterMark">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>w6s<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">takePhotoAndAddWaterMark</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  content<span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span>
  fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">'#FF5858'</span><span class="token punctuation">,</span>
  markDisable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  timeEnable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  locationEnable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeWrapper>
<p><strong>参数说明</strong></p>
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
<td>content</td>
<td>String</td>
<td>水印内容</td>
</tr>
<tr>
<td>fontSize</td>
<td>Number | String</td>
<td>水印字号大小</td>
</tr>
<tr>
<td>color</td>
<td>String</td>
<td>水印字体颜色，仅支持<a href="https://www.color-hex.com/" target="_blank" rel="noopener noreferrer">HEX<OutboundLink/></a>颜色码</td>
</tr>
<tr>
<td>markDisable</td>
<td>Boolean</td>
<td>非必须，屏蔽水印</td>
</tr>
<tr>
<td>timeEnable</td>
<td>Boolean</td>
<td>非必须，水印添加时间</td>
</tr>
<tr>
<td>locationEnable</td>
<td>Boolean</td>
<td>非必须，水印添加位置信息</td>
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
<td>mediaId</td>
<td>上传媒体中心后返回的媒体id</td>
</tr>
<tr>
<td>imageURL</td>
<td>压缩后图像存在本地的地址</td>
</tr>
<tr>
<td>key</td>
<td>原图像存在本地的地址</td>
</tr>
<tr>
<td>imageInfo</td>
<td>图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）</td>
</tr>
</tbody>
</table>
</template>
