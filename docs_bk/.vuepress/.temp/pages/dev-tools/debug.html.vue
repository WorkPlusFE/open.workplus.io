<template><h1 id="安卓真机调试" tabindex="-1"><a class="header-anchor" href="#安卓真机调试" aria-hidden="true">#</a> 安卓真机调试</h1>
<h2 id="材料准备" tabindex="-1"><a class="header-anchor" href="#材料准备" aria-hidden="true">#</a> 材料准备</h2>
<ul>
<li>Chrome浏览器（版本&gt;=59）</li>
<li>安卓移动设备（系统版本不低于6）</li>
<li>USB充电线一条（尽量使用手机原配线）</li>
</ul>
<h2 id="设备设置" tabindex="-1"><a class="header-anchor" href="#设备设置" aria-hidden="true">#</a> 设备设置</h2>
<ol>
<li>在安卓设备系统设置中，找到<code>开发者选项</code>设置页面，并打开<code>允许USB调试</code>开关；</li>
</ol>
<blockquote>
<p>不同厂商的安卓设备，打开<code>开发者选项</code>页面的方式可能不一样，可参考手机的操作手册或查询网络。</p>
</blockquote>
<ol start="2">
<li>在 APP 中打开<code>http://debugx5.qq.com</code>页面，或扫描下方二维码；</li>
</ol>
<p style="text-align: left">
  <img :src="$withBase('/debug/x5debug-qrcode.png')" alt="5debug-qrcode" width="180">
</p>
<ol start="3">
<li>在打开的页面中，选择<code>信息</code>分类（如下图-1）；</li>
<li>找到<code>TBS settings</code>，选中<code>是否打开 TBS 内核 Inspector 调试功能</code>；</li>
<li>选中后，应用会弹出警告提示，点击<code>确定</code>即可。</li>
</ol>
<p style="text-align: left">
  <img :src="$withBase('/debug/dev-x5.png')" alt="图1" width="250">
  <p style="text-align: left">
    <i>图-1</i>
  </p>
</p>
<h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试" aria-hidden="true">#</a> 调试</h2>
<ol>
<li>将安卓设备通过<code>USB充电线</code>连接到电脑，若弹出连接类型，请选择文件传输（不可选择充电模式），若弹出询问是否允许 USB 调试的提示时，请选择允许；</li>
<li>打开手机应用，访问任何一个轻应用（可以是本地调试的、离线模式的，或已经发布上线的http(s) 访问方式的）；</li>
<li>打开 Chrome 浏览器，在地址栏中输入<code>chrome://inspect/#devices</code>；</li>
<li>如果调试模式开启成功，可以在页面看到打开应用的相关信息；</li>
</ol>
<p style="text-align: left">
  <img :src="$withBase('/debug/dev-inspect.png')" alt="图2" width="400">
  <p style="text-align: left">
    <i>图-2</i>
  </p>
</p>
<ol start="5">
<li>点击应用信息下方的<code>inspect</code>，将会自动打开 Chrome 的调试页面，该页面首次打开较慢，如果出现白屏或者404错误的，请尝试切换到更好的网络或使用翻墙工具。</li>
</ol>
<p style="text-align: left">
  <img :src="$withBase('/debug/dev-debug.png')" alt="图3" width="400">
  <p style="text-align: left">
    <i>图-3</i>
  </p>
</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>首次打开该页面，出现白屏或者404的概率很高，条件允许的情况下，尽可能使用更(翻)好(墙)的网络！</p>
</div>
<h2 id="看不到应用信息" tabindex="-1"><a class="header-anchor" href="#看不到应用信息" aria-hidden="true">#</a> 看不到应用信息?</h2>
<p>若调试时，无法出现<code>图-2</code>的应用信息，请尝试以下方法：</p>
<ul>
<li>检查 USB 调试模式是否正常开启，某些手机会自动关闭；</li>
<li>再次打开<code>http://debugx5.qq.com</code>页面进行设置；</li>
<li>更换 USB 充电线或多尝试几次链接电脑；</li>
<li>更换手机。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<p><code>http://debugx5.qq.com</code>该访问地址必须使用<code>http</code>协议，切记！</p>
</div>
</template>
