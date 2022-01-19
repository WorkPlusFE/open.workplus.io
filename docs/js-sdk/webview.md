# 网页

## 打开一个网页

传入地址，新窗口打开网页。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.openWebView({
  url: 'http://网页地址',
  title: 'Test',
  useAndroidWebview: true,
  useSystemWebview: true,
  displayMode: 'FULL_SCREEN'
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url | String | 要打开的网址 url |
| title | String | 显示的标题 |
| useAndroidWebview | Boolean | 是否使用 android 原生 webview 打开, 否则使用 workplus 订制的 webview |
| useSystemWebview | Boolean | 等同于 useAndroidWebview，只是该参数能用于ios以及android平台 |
| displayMode | String | 全屏打开 webview(即不包含原生标题栏)，默认非全屏 |

## 退出

关闭整个 WebView。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.exit();
```

## 弹出分享对话框

弹出分享对话框，跳转分享。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.share({
  url: 'https://www.workplus.io'
  title: 'WorkPlus'
  coverMediaId: '分享图标mediaId',
  coverUrl: '分享图标 url', 
  scope: 0 
  summary : '这是一段摘要',
  directly: 'w6s_contact',
  directSession: {
    id: 'id',
    type: 'discussion',
  },
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url | String | 要分享的网页地址 |
| title | String | 分享后显示的标题 |
| coverMediaId | String | 分享后显示的图标，媒体id |
| coverUrl | String | 分享后显示的图标，网络地址，与 coverMediaId 二选一即可 |
| scope | Number | 用于显示范围，0 只显示内部分享的操作，包括"发送给"，"分享到圈子"；1则显示全部 |
| summary | String | 分享的内容摘要，一般会放到分享后的描述位置 |
| directly | String | 可选值：w6s_contact、w6s_current_session，具体说明请看下方描述 |
| directSession.id | String | 会话的id |
| directSession.type | String | 会话的类型 |


::: tip directly 参数
直接执行分享操作支持: `w6s_contact`对应“分享弹出窗”的“发送给”，为App内部的联系人等列表；`w6s_current_session`表示直接分享给指定会话，无任何弹出窗或者选择界面。当`directly`存在值时，`scope`参数无意义，请忽略, 默认`directly`为空，也即该接口会显示”分享弹出框“。
:::

## 控制屏幕旋转

根据参数控制屏幕横屏显示或者竖屏显示。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.changeOrientation({
  landscape: true,
  lock: true,
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| landscape | Boolean | 表示横屏或者竖屏，非必须 |
| lock | Boolean | 表示锁定当前横屏或者竖屏的状态, false 表示 app 随用户系统设置来控制旋转，默认是 false |

> lock 参数在低于 4.9.1 版本的 APP 下可能无效。

## 添加水印

给页面添加水印。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.addWaterMask({
  textColor: '#000000',
  orgId: 'xxxid',
  alpha: 1.0,
  verticalPadding: 40,
  fontSize: 16,
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| textColor | String | 字体颜色 |
| orgId | String | 组织id，传值则以这个组织下的雇员名显示内容，可不传，默认当前组织 |
| alpha | Number | 水印文字透明度 0-1.0之间，可不传， 默认1.0 |
| verticalPadding | Number | 水印文字上下的垂直高度（密度），可不传，默认40 |
| fontSize | Number | 字体大小，可不传，默认16 |

## 移除水印

给页面移除水印。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.removeWaterMask();
```

## 注册摇一摇监听

注册摇一摇监听。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.registerShakeListener();
```

前端需要实现`onWorkplusShake()`方法, 在该处执行自己的业务, 摇一摇后将在该方法回调。

::: warning onWorkplusShake
该方法必须为全局方法，并且方法名不可以转换。
:::


## 注销摇一摇监听

注销摇一摇监听。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.unregisterShakeListener();
```

## 微信分享(会话/朋友圈)

根据接口直接调起微信分享页面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.wxShare({
  appId: 'wx63f4a539bf345965',
  title: '这是一个标题',
  type : 'webpage',
  description: '这是概要',
  thumb: 'base64://xxxxx==',
  scene: 0,
  data: { 'url': 'https://workplus.io' }
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| appId | String | 微信的`AppId` |
| title | String | 分享的标题 |
| type | String | 分享的消息类型，webpage(网页链接), image(图片) |
| description | String | 描述 |
| thumb | String | 缩略图数据，为 base64 |
| scene | Number | 0 为聊天界面 1为朋友圈 |
| data | Object | {'url': 'www.workplus.io'} or {'image': 'base64://AAAAAA=='} |

`data`参数的值，请注意:

* type 为`webpage`时，url 字段为分享的链接；
* type 为`image`时，image 为分享的图片链接或者是 base64。

## 下拉刷新

页面下拉刷新功能，需要由一系列的接口组合而成，并且该功能是针对当前 WebView 起效。在开发轻应用时要特别注意，特别是单页面应用，在页面切换时，需要考虑是否清空下拉刷新功能。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | `v4.11.6+`  | `v4.11.6+` |

### 开启

当页面需要下拉刷新功能时，先通过下方接口，启动“下拉刷新”能力。

```js
sdk.webview.configPullRefresh({
  enable: true,
  mode: 'default',
  success: () => {},
  fail: () => {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| enable | Boolean | 下拉刷新功能的开关 |
| mode | String | 下拉的模式，目前仅支持 “default” 的默认类型 |

### 监听下拉

用户下拉屏幕的动作，需要通过下面的方法进行监听。例如一下新闻列表页面，用户下拉页面头部后，该接口的回调就会被触发，此时开发者可以通过调用接口更新新闻列表，成功后手动结束刷新。

```js
sdk.webview.onPullRefresh({
  success: () => {
    console.log('加载中...);
    setTimeout(() => {
      // 调用下方“完成刷新”接口
    }, 3000);
  },
  fail: () => {
    console.log('fail');
  },
});
```

### 完成刷新

调用该接口后，刷新动作会马上完成，动画会停止并收起。

```js
sdk.webview.endPullRefresh();
```

### 停止

当页面不需要刷新功能时，需要调用下方接口进行停止。如果需要再次开启，请调用上方的“开启”接口。

```js
sdk.webview.configPullRefresh({ enable: false, mode: 'default' });
```

