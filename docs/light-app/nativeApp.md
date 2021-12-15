# 上架原生应用

::: tip 阅读本文，你将了解：
* 如何上架原生应用，包括安卓和 iOS；
* 如何设置原生应用跳转参数；
:::

选择添加“内部应用”后，在“应用类型”中选择“原生应用”，即可进行原生应用的上架操作。原生应用目前需要区分`安卓`和`iOS`两个平台，对应的操作方式也不尽相同。此外，例如红点提醒，版本更新和使用权限等，跟轻应用都是一致的。

## 基本设置

### 安卓

<p class="w6s-image">
  <img :src="$withBase('/app/native-app.png')" alt="上架原生应用" width="600">
</p>

如上图，选择“安卓”平台后，直接上传 APK 安装包即可。上传完毕后会⾃动填⼊相应安装包的包名地址到“启动地址”处，然后填写其他必要信息后，就完成了最简单的安卓应用上架。

此外，安卓支持通过“跳转协议”来作为“启动地址”，例如用`taobao://`来打开淘宝 APP，但该种方式需要当前设备必须安装了此协议的应用，否则会提示失败。

### iOS

<p class="w6s-image">
  <img :src="$withBase('/app/native-ios.png')" alt="上架原生应用（iOS）" width="600">
</p>

如上图，相比“安卓”平台，下载方式会有所不同：

1. `应用 plist 下载地址`：使⽤企业证书打包应用并部署到特定服务器，并提供⼀个包含下载 app 地
址的`plist ⽂件(manifest.plist)`的网络地址；
2. `应用商店下载地址`：直接获取app在AppStore的下载地址，例如 `https://itunes.apple.com/cn/app/qq/id4563423?mt=12`。
3. `系统应用`：跟安卓平台一样，选择打开系统的应用，详见下方[系统应用](#系统应用)说明。

### 系统应用

<p class="w6s-image">
  <img :src="$withBase('/app/native-system.png')" alt="上架原生应用（system）" width="600">
</p>

目前平台内置的系统应用包括：`日历`、`邮箱`及`官方邮箱`。其中，`官方邮箱`为 WorkPlus 平台内置的邮箱功能。

## 应用参数

第三⽅原⽣应⽤可以通过在应⽤管理界⾯中添加参数名和参数值，⽤于校验应⽤来源以及调⽤的合法性，同时，WorkPlus 平台还提供⼀次性 Ticket ⽤于实现 WorkPlus 平台与第三⽅原⽣应⽤间的单点登录。

应⽤参数设置是以`Key-Value`⽅式存在，通过设置 Key 关键字相对获取到 Value 相应数值。

例如⽤户可以输⼊ from 作为 Key 值，workplus-app 作为 Value 值填⼊参数设置中。如果从Workplus的应⽤中⼼点击打开第三⽅应⽤，就可以通过相应的 key 值获取到 value 值。

::: warning 提醒
当前原生应用仅支持设置固定的参数和值，不支持通过链接占位符的方式来添加参数。

另外，Workplus 还会传递了⼀些平台参数如下：

- KEY_TICKET：⽤于平台与第三⽅接⼊的认证；
- KEY_FROM_PLATFORM：⽤于区别 Android 和 iOS 平台；
- KEY_DEVICE_ID：当前设备 ID；
- KEY_TENANT_ID：当前 WorkPlus 平台租户ID 也叫 域ID；
- KEY_API_HOST：当前 WorkPlus 平台访问后台 RestAPI 地址。
:::

## 获取参数

**Android 原⽣应⽤：**

在 Launcher Activity的onCreate() ⽅法中，通过 String string = getIntent().getStringExtra("xxx") 获取相关参数值。

如上述，如果⽤户在管理后台参数值中输⼊ from 作为 Key 值，workplus-app 作为 Value 值填⼊参数设置中，通过以下代码：

```java
String myValue = getIntent().getStringExtra("from");
```

获取的 myValue 的值则为：workplus-app。

**iOS 原⽣应⽤：**

在 AppDelegate 类的`(BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url`⽅法中这样提取tenant_id，事例代码如下：

```Objective-C
//url结构
//[Scheme]&ticket=[ticket]&tenantId=[tenantId]
//[Scheme]:后台添加版本时输⼊的跳转协议
//[ticket]: ticket的值
//[tenantId]: tenant_id
//获取url⾥⾯的参数部分

NSString *text = [[url query]
stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding];

//然后按url参数的⽅式去解析，先找“&”
NSArray *arr = [text componentsSeparatedByString:@"&"];
//然后查找以ticket开头的字段
for (int i = 0; i < arr.count; i ++) {
  NSString* str = [arr objectAtIndex:i];
  if ([str hasPrefix:@"tenantId"]) {
    //然后再按“＝”拆分
    NSArray *array = [str componentsSeparatedByString:@"="];
    NSString *tenantId = [array objectAtIndex:1];
    NSLog(@"%@", tenantId);
  }
}
```

## 打开表现

在移动端中，打开 WorkPlus 应⽤中⼼，点击第三⽅应⽤图标后:

- 若应⽤尚未在该手机上安装，则会提示⽤户下载并安装应⽤；
- 若应⽤已安装，则会根据后台设置的跳转协议打开相关应⽤，并将后台设置的参数值传递过去(如果已设置的情况下)，同时会附带传送 WorkPlus 平台的⼀次性 Ticket 值。

::: tip 对于 iOS
如果应⽤尚未安装到⼿机，在 WorkPlus 应⽤中⼼点击相应的应⽤时，如果在管理后台已设置了 plist 下载地址，则会提示相关下载提示，如果管理后台设置了 AppStore 下载地址，则会进⼊ AppStore 进⾏下载。
:::