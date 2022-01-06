<template><h1 id="上架原生应用" tabindex="-1"><a class="header-anchor" href="#上架原生应用" aria-hidden="true">#</a> 上架原生应用</h1>
<div class="custom-container tip"><p class="custom-container-title">阅读本文，你将了解：</p>
<ul>
<li>如何上架原生应用，包括安卓和 iOS；</li>
<li>如何设置原生应用跳转参数；</li>
</ul>
</div>
<p>选择添加“内部应用”后，在“应用类型”中选择“原生应用”，即可进行原生应用的上架操作。原生应用目前需要区分<code>安卓</code>和<code>iOS</code>两个平台，对应的操作方式也不尽相同。此外，例如红点提醒，版本更新和使用权限等，跟轻应用都是一致的。</p>
<h2 id="基本设置" tabindex="-1"><a class="header-anchor" href="#基本设置" aria-hidden="true">#</a> 基本设置</h2>
<h3 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h3>
<p class="w6s-image">
  <img :src="$withBase('/app/native-app.png')" alt="上架原生应用" width="600">
</p>
<p>如上图，选择“安卓”平台后，直接上传 APK 安装包即可。上传完毕后会⾃动填⼊相应安装包的包名地址到“启动地址”处，然后填写其他必要信息后，就完成了最简单的安卓应用上架。</p>
<p>此外，安卓支持通过“跳转协议”来作为“启动地址”，例如用<code>taobao://</code>来打开淘宝 APP，但该种方式需要当前设备必须安装了此协议的应用，否则会提示失败。</p>
<h3 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h3>
<p class="w6s-image">
  <img :src="$withBase('/app/native-ios.png')" alt="上架原生应用（iOS）" width="600">
</p>
<p>如上图，相比“安卓”平台，下载方式会有所不同：</p>
<ol>
<li><code>应用 plist 下载地址</code>：使⽤企业证书打包应用并部署到特定服务器，并提供⼀个包含下载 app 地
址的<code>plist ⽂件(manifest.plist)</code>的网络地址；</li>
<li><code>应用商店下载地址</code>：直接获取app在AppStore的下载地址，例如 <code>https://itunes.apple.com/cn/app/qq/id4563423?mt=12</code>。</li>
<li><code>系统应用</code>：跟安卓平台一样，选择打开系统的应用，详见下方<a href="#%E7%B3%BB%E7%BB%9F%E5%BA%94%E7%94%A8">系统应用</a>说明。</li>
</ol>
<h3 id="系统应用" tabindex="-1"><a class="header-anchor" href="#系统应用" aria-hidden="true">#</a> 系统应用</h3>
<p class="w6s-image">
  <img :src="$withBase('/app/native-system.png')" alt="上架原生应用（system）" width="600">
</p>
<p>目前平台内置的系统应用包括：<code>日历</code>、<code>邮箱</code>及<code>官方邮箱</code>。其中，<code>官方邮箱</code>为 WorkPlus 平台内置的邮箱功能。</p>
<h2 id="应用参数" tabindex="-1"><a class="header-anchor" href="#应用参数" aria-hidden="true">#</a> 应用参数</h2>
<p>第三⽅原⽣应⽤可以通过在应⽤管理界⾯中添加参数名和参数值，⽤于校验应⽤来源以及调⽤的合法性，同时，WorkPlus 平台还提供⼀次性 Ticket ⽤于实现 WorkPlus 平台与第三⽅原⽣应⽤间的单点登录。</p>
<p>应⽤参数设置是以<code>Key-Value</code>⽅式存在，通过设置 Key 关键字相对获取到 Value 相应数值。</p>
<p>例如⽤户可以输⼊ from 作为 Key 值，workplus-app 作为 Value 值填⼊参数设置中。如果从Workplus的应⽤中⼼点击打开第三⽅应⽤，就可以通过相应的 key 值获取到 value 值。</p>
<div class="custom-container warning"><p class="custom-container-title">提醒</p>
<p>当前原生应用仅支持设置固定的参数和值，不支持通过链接占位符的方式来添加参数。</p>
<p>另外，Workplus 还会传递了⼀些平台参数如下：</p>
<ul>
<li>KEY_TICKET：⽤于平台与第三⽅接⼊的认证；</li>
<li>KEY_FROM_PLATFORM：⽤于区别 Android 和 iOS 平台；</li>
<li>KEY_DEVICE_ID：当前设备 ID；</li>
<li>KEY_TENANT_ID：当前 WorkPlus 平台租户ID 也叫 域ID；</li>
<li>KEY_API_HOST：当前 WorkPlus 平台访问后台 RestAPI 地址。</li>
</ul>
</div>
<h2 id="获取参数" tabindex="-1"><a class="header-anchor" href="#获取参数" aria-hidden="true">#</a> 获取参数</h2>
<p><strong>Android 原⽣应⽤：</strong></p>
<p>在 Launcher Activity的onCreate() ⽅法中，通过 String string = getIntent().getStringExtra(&quot;xxx&quot;) 获取相关参数值。</p>
<p>如上述，如果⽤户在管理后台参数值中输⼊ from 作为 Key 值，workplus-app 作为 Value 值填⼊参数设置中，通过以下代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> myValue <span class="token operator">=</span> <span class="token function">getIntent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getStringExtra</span><span class="token punctuation">(</span><span class="token string">"from"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>获取的 myValue 的值则为：workplus-app。</p>
<p><strong>iOS 原⽣应⽤：</strong></p>
<p>在 AppDelegate 类的<code>(BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url</code>⽅法中这样提取tenant_id，事例代码如下：</p>
<div class="language-Objective ext-Objective line-numbers-mode"><pre v-pre class="language-Objective"><code>//url结构
//[Scheme]&amp;ticket=[ticket]&amp;tenantId=[tenantId]
//[Scheme]:后台添加版本时输⼊的跳转协议
//[ticket]: ticket的值
//[tenantId]: tenant_id
//获取url⾥⾯的参数部分

NSString *text = [[url query]
stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding];

//然后按url参数的⽅式去解析，先找“&amp;”
NSArray *arr = [text componentsSeparatedByString:@&quot;&amp;&quot;];
//然后查找以ticket开头的字段
for (int i = 0; i &lt; arr.count; i ++) {
  NSString* str = [arr objectAtIndex:i];
  if ([str hasPrefix:@&quot;tenantId&quot;]) {
    //然后再按“＝”拆分
    NSArray *array = [str componentsSeparatedByString:@&quot;=&quot;];
    NSString *tenantId = [array objectAtIndex:1];
    NSLog(@&quot;%@&quot;, tenantId);
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="打开表现" tabindex="-1"><a class="header-anchor" href="#打开表现" aria-hidden="true">#</a> 打开表现</h2>
<p>在移动端中，打开 WorkPlus 应⽤中⼼，点击第三⽅应⽤图标后:</p>
<ul>
<li>若应⽤尚未在该手机上安装，则会提示⽤户下载并安装应⽤；</li>
<li>若应⽤已安装，则会根据后台设置的跳转协议打开相关应⽤，并将后台设置的参数值传递过去(如果已设置的情况下)，同时会附带传送 WorkPlus 平台的⼀次性 Ticket 值。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">对于 iOS</p>
<p>如果应⽤尚未安装到⼿机，在 WorkPlus 应⽤中⼼点击相应的应⽤时，如果在管理后台已设置了 plist 下载地址，则会提示相关下载提示，如果管理后台设置了 AppStore 下载地址，则会进⼊ AppStore 进⾏下载。</p>
</div>
</template>
