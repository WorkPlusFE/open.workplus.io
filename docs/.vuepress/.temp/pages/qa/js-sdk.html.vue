<template><h1 id="js-sdk" tabindex="-1"><a class="header-anchor" href="#js-sdk" aria-hidden="true">#</a> JS-SDK</h1>
<h2 id="回调使用-alert-输出结果没反应" tabindex="-1"><a class="header-anchor" href="#回调使用-alert-输出结果没反应" aria-hidden="true">#</a> 回调使用 alert 输出结果没反应</h2>
<p>部分接口是会弹出原生选择界面，例如选择组织架构人员。选择人员后，在点击确认时，会关闭这个页面，此时回调方法马上执行 alert，由于 UiWebView 的 bug，会导致 CPU 飙高，出现页面卡死的情况。</p>
<p>而 WkWebView 不存在该问题。</p>
<p>所以，尽可能不要使用 alert 来检验接口返回值，可以使用 <RouterLink to="/light-app/vconsole.html">VConsole</RouterLink> 等调试工具。</p>
<h2 id="可以多次注入-cordovajs-吗" tabindex="-1"><a class="header-anchor" href="#可以多次注入-cordovajs-吗" aria-hidden="true">#</a> 可以多次注入 cordovajs 吗？</h2>
<p>不可以。</p>
<p>如果你是使用原始 Cordova API，请确保一个 webview 只注入一次。如果使用 js-sdk，则无需考虑该问题，因为 sdk 内部会自动处理。</p>
</template>
