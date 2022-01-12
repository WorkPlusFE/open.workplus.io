<template><h1 id="例子及资源" tabindex="-1"><a class="header-anchor" href="#例子及资源" aria-hidden="true">#</a> 例子及资源</h1>
<h2 id="在线-demo" tabindex="-1"><a class="header-anchor" href="#在线-demo" aria-hidden="true">#</a> 在线 demo</h2>
<p>请使用 WorkPlus 扫一扫，查看在线 Demo：</p>
<p class="w6s-image">
  <img :src="$withBase('/js-sdk/sdk-demo-qrcode.png')" alt="sdk demo" width="220px" />
</p>
<h2 id="演示代码" tabindex="-1"><a class="header-anchor" href="#演示代码" aria-hidden="true">#</a> 演示代码</h2>
<ul>
<li><a href="https://github.com/WorkPlusFE/js-sdk-demo/tree/master/normal" target="_blank" rel="noopener noreferrer">直接引入<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/WorkPlusFE/js-sdk-demo/tree/master/vue-base" target="_blank" rel="noopener noreferrer">vue script 标签引入<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/WorkPlusFE/js-sdk-demo/tree/master/vue" target="_blank" rel="noopener noreferrer">vue 技术栈<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/WorkPlusFE/js-sdk-demo/tree/master/react" target="_blank" rel="noopener noreferrer">react 技术栈<ExternalLinkIcon/></a></li>
</ul>
<h2 id="资源文件" tabindex="-1"><a class="header-anchor" href="#资源文件" aria-hidden="true">#</a> 资源文件</h2>
<p><strong>JS-SDK 输出文件：</strong></p>
<CodeWrapper :qrcode="false">
https://open.workplus.io/static/js-sdk/sdk.{{$themeConfig.version}}.js
</CodeWrapper>
<p><a href="https://github.com/WorkPlusFE/js-sdk/releases" target="_blank" rel="noopener noreferrer">JS-SDK GitHub 下载地址<ExternalLinkIcon/></a>。</p>
<div class="custom-container warning"><p class="custom-container-title">关于 JS-SDK 资源</p>
<p>如果网络环境比较特殊，建议自行部署 JS-SDK 的相关资源，以保障自家平台轻应用访问正常。</p>
</div>
<p><strong>CordovaJs 文件：</strong></p>
<ul>
<li>android.cordova.min.js</li>
</ul>
<CodeWrapper :qrcode="false">
https://open.workplus.io/static/android.cordova.min.js
</CodeWrapper>
<p><a href="https://open.workplus.io/static/android.cordova.min.js" download="android.cordova.min.js" target="_blank">下载 android.cordova.min.js</a></p>
<ul>
<li>ios.cordova.min.js</li>
</ul>
<CodeWrapper :qrcode="false">
https://open.workplus.io/static/ios.cordova.min.js
</CodeWrapper>
<p><a href="https://open.workplus.io/static/ios.cordova.min.js" download="ios.cordova.min.js" target="_blank">下载 ios.cordova.min.js</a></p>
</template>
