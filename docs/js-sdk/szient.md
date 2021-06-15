# 深i企

## 查询当前登录状态

只返回登录信息，未登录时不进行登录操作 (wokrplus 支持游客模式时使用)。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.getLoginState({
  success: function(res) {},
  fail: function(err) {},
});
```

**成功返回**

| 参数 | 说明 |
| - | - | 
| biz | 具体的登录者信息 |

**异常返回**

| 参数 | 说明 |
| - | - | 
| code | -1，未登录 |
| message | 异常描述 |


## 检查登录流程

若未登录则尝试进行登录操作，已登录则返回人的信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.checkLogin({
  success: function(res) {},
  fail: function(err) {},
});
```

**成功返回**

| 参数 | 说明 |
| - | - | 
| biz | 具体的登录者信息 |

**异常返回**

| 参数 | 说明 |
| - | - | 
| code | -1，未登录 |
| message | 异常描述 |



## 观察登录状态变化

前端在首页等场景, 在 WorkPlus 支持游客模式使用时, 当需要感知到登录/登出变化, 可通过该接口进行监听。


**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.watchLoginStatusChanged(function(res) {
  // 登录或登出会触发回调
});
```

**成功返回**

| 参数 | 说明 |
| - | - | 
| event | 事件类型，分别为 LOGIN 和 LOGOUT |
| data | 若登录，会返回登录的用户信息，至少包含 user_id 属性 |

## 选择聊天消息

如投诉场景，前端需要选择聊天消息进行后续处理，此接口返回所选中的聊天id集合。

> 该接口会根据`session_id`打开对应会话窗口，并根据传参`delivery_ids`复选消息。当操作完成后，会返回最后选中的消息的id。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.selectMessages({
  delivery_ids: ['123', '456'],
  session_id: 'session-123',
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| delivery_ids |  Array | 已经选中的消息，再次来修改时需要带上这些消息id，客户端会提前选中这些消息 |
| session_id |  String | 会话的id |



## 查看合并消息

根据合并消息的 JSON 字符串查看合并消息，如投诉场景，投诉详情页面需要查看聊天证据。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.showMultipartMessage({
  multipart_message: 'JSON 字符串',
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| multipart_message |  String | 合并消息的 JSON 字符串数据 |



## 原生 AJAX 请求

模拟前端的 AJAX 能力，相比之下，更安全和可控，并且不存在跨域问题。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.request({
  url: '请求的url',
  data: {},
  header: { 'Content-Type': 'application/json' },
  timeout: 30000
  method: 'GET'
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url |  String | 必须，请求的 URL，完整路径 |
| data | Object | 请求的参数 |
| header | Object | 请求的 Header 参数扩展 |
| timeout | Number | 超时时间，单位为毫秒，默认值 30000 毫秒 |
| method | String | HTTP的请求方法，只支持GET/HEAD/POST/PUT/DELETE，默认 GET |

::: tip 带平台特定信息的请求
如果你开发的应用，是作为混合开发的 H5 部分，接口是直接调到 WorkPlus 后台，可以使用`w6s.authRequest`方法进行 AJAX 请求，该方法在`已鉴权`的情况下，会默认带上用户验证及平台信息等。

该方法的传参和返回，跟`w6s.request`一致。
:::

**返回说明**

| 参数 | 类型 | 说明|
| - | - | - |
| data | Object/ArrayBuffer |  返回的结果 |
| header | Object |  请求响应返回的的 Header |
| statusCode | Number |  HTTP 的状态码 |
