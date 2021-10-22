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

**返回数据**

| 参数 | 说明 |
| - | - |
| user_id | app 用户 id |
| username | app 用户账号 |
| domain_id | app 域标记 |
| user_type | 用户类型，取值范围：user/crop |
| login_type | 登录类型，取值范围：face(人脸登录)/captcha(验证码登录) |
| biz | 业务属性，用来做特殊定制的场景，例如深i企业务数据 |
| extension_id | 业务用户 id 标记，在深i企里为企业中心 uid |
| name | 用户名称 |
| role_level | 用户在办事企业的可信等级，取值范围：null, L1, L2, L3, L4 |
| current_org_name | 用户办事企业名称 |
| current_org_code | 办事企业统一社会信用代码 |
| user_state | 用户状态，取值范围：enable(已审核), disabled(被禁用), auditing(审核中) |

**状态码说明**

| 参数 | 说明 |
| - | - |
| 0 | 已登录，正常返回数据 |
| -1 | 未登录 |





## 检查登录流程

若未登录则尝试进行登录操作，已登录则返回人的信息。区别于 [查询当前登录状态](#查询当前登录状态) ，该接口在未登录的时候，会主动触发登录流程，引导用户进行登录授权。

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

**返回数据**

参考以上接口[查询当前登录状态](#查询当前登录状态)

**状态码说明**

| 参数 | 说明 |
| :- | - |
| 0 | 已登录 |
| -1 | 未登录 |
| -2 | 取消登录 |







## 观察状态变化

前端在首页等场景, 在 WorkPlus 支持游客模式使用时, 当需要感知到登录/登出变化, 可通过该接口进行监听。


**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
// 绑定监听事件
w6s.szient.watchStatusChanged(function(res) {
  // 登录或登出会触发回调
});
```

**返回数据**

| 参数 | 说明 |
| - | - | 
| event | 事件类型，分别为 LOGIN、LOGOUT 和 BIZ_INTEGRITY |
| data | 若登录，会返回登录的用户信息，可参考`查询当前登录状态`的接口返回 |

你可以通过`unwatchStatusChanged`方法取消状态的监听：

```js
// 取消事件监听
w6s.szient.unwatchStatusChanged();
```





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



**返回数据**

| 参数 | 类型 | 说明|
| - | - | - |
| data | Object/ArrayBuffer |  返回的结果 |
| header | Object |  请求响应返回的的 Header |
| statusCode | Number |  HTTP 的状态码 |





## 检查流程完整性

检查当前用户是否具备业务流程的完整性，默认情况下，业务流程完整性是指当前用户需要具备以下调整：

1. 已登录
2. 已关联企业
3. 有当前办事企业
4. 拥有经办人或者以上角色权限

若以上条件其中一个不具备，调用该接口会触发相关流程引导用户进行操作。



**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.checkBizIntegrity({
  success: function(res) {},
  fail: function(err) {},
});
```


**状态码说明**

| 参数 | 说明                               |
| :--- | ---------------------------------- |
| 0    | 检查完整性成功                     |
| -1   | 检查完整性失败                     |
| -2   | 取消流程                           |
| -4   | 没有办事企业                       |
| -5   | 未登录                             |
| -6   | 权限被禁用                         |
| -7   | 雇员信息为空                       |
| -8   | 当前不具备角色权限，已提交权限申请 |





## 确定完整性完成(暂支持设置当前办事企业)

在触发[检查流程完整性](#检查流程完整性) 进行操作时使用， 例如关联企业（选择办事企业）流程的操作的通知。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.okBizIntegrity({
  status: 'success',
  biz: 'my-permissions', //见下面参数说明
  success: function(res) {},
  fail: function(err) {},
});
```


**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| status |  String | success 成功， fail 失败， cancel 取消 |
| biz |  String | 业务字段，以页面名为准，如申请权限为my-permissions |





## 行为埋点

通过原生接口，进行前端页面埋点，与移动端保持为一个整体。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.buryingPoint({
  channel: 'tgp',
  event_code: 'c_event',
  params: {
    c_event_name: 'c_event_name_1',
    c_event_id: 'c_event_id_1',
  },
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| channel |  String | 可不传，默认为客户端默认配置的 |
| event_code | String | 必须的，定义的`event_code`，如`c_event`、`pageview`、`share` |
| params | Object | 针对`event_code`定义的参数键值对，如 c_event 下有定义：c_event_name 与 c_event_id 两个参数，具体请查看下方 params 的可用参数说明 |


::: tip params 可用参数说明

当前共 3 个`event_code`，不同的`event_code`对应的`params`传参不一样，居图如下：

1. `c_event`点击类事件
    - c_event_name： 事件名称
    - c_event_id： 事件id
2. `pageview`页面浏览事件
    - page_name： 页面名称
    - page_interval： 页面停留时长(毫秒数)
3. `share`分享事件
    - page_name： 页面名称

注意，参数的值需要与运营中心的埋点定义文档一一对应，另`page_interval`需要自行计算，以毫秒数为单位。
:::

## 键盘高度监听

返回当前键盘的高度，持续监听。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
// 绑定监听事件
w6s.szient.watchKeyboardChanged(function(res) {
  // 键盘变化时触发返回
});
```

**返回数据**

| 参数 | 说明 |
| - | - | 
| height | 键盘高度，发生变化就会回调，前端需要持续监听。0 为键盘未打开 |


## 获取键盘信息

暂时只提供返回键盘高度信息，后续扩展其它需要的返回值。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
// 绑定监听事件
w6s.szient.getKeyboardInfo({
  success: function(res) {},
  fail: function(err) {},
});
```

**返回数据**

| 参数 | 说明 |
| - | - | 
| height | 键盘高度，发生变化就会回调，前端需要持续监听。0 为键盘未打开 |

## 调用小程序

该接口用来调用小程序，获取小程序返回信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.webview.launchMiniProgram({
  user_name: 'gh_xa11', // 小程序id      
  path: 'pages/xx', // 小程序具体路径          
  miniprogram_type: 0 , //0 正式版，1 开发版，2 体验版
  success: function(res) {},
  fail: function(err) {},
});
```







## 分享消息到通讯录

发送需要分享的消息到指定会话。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.shareMessage({
  //可为空
  conversation: [{ 
    id: '', //分享对象id
    domain_id: '',//分享对象domainId
    type: 'USER' //USER：单聊，DISCUSSION：群聊
  }],
  // 不同消息传的数据不一样，请留意
  message: {
    //文本：TEXT 传参示例
    type: 'TEXT',
    body:{
      content: '' //文本消息分享的内容
    }
    
    //图片：IMAGE 传参示例
    type: 'IMAGE',
    body:{
      data: '' //图片资源，具体使用规则见备注
    }
    
    // 链接：LINK 传参示例 
    type: 'LINK',
    body:{
      article:{ //分享链接时不可为空
        title: '', //标题，不可为空
        url: '', //跳转链接，不可为空
        summary: '', //摘要，可空
        cover: '' //封面url，可空
      }
    }
  },
  success: function(res) {},
  fail: function(err) {},
});
```


#### `IMAGE`类型的`data`传值说明：

| 传值   | 说明 | 
| -------- | ------- | 
| http://***,https://*** | 资源文件 url  | 
| base64://*** | 资源文件 base64  | 
| mediaId://*** | 资源文件 mediaId  | 
| file://*** | 本地资源文件路径  | 









## 获取当前用户更多数据

在 [查询当前登录状态](#查询当前登录状态) 的基础上，增加更多数据的返回，包括敏感数据等。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.szient.getLoginStatusMore({
  privacy_data: [],//非必填
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| privacy_data |  array | 非必填；表示需要指定获取的隐私数据，若不传，则不会返回相关数据。现支持：'mobile', 'id_card', 'face_auth_param'。数据经过加密处理，具体处理方式参照文档详细说明。 |



**返回数据:**

除了开发者传参关注的字段，其他字段参考以上接口[查询当前登录状态](#查询当前登录状态)


> 隐私数据经过加密处理：AES(aesKey, rawData)
>
> AES算法为 AES-128-ECB
>
> aesKey 为 user_id, device_id, domain_id 按ASCII 码从小到大的自然排序拼接后进行md5处理



**处理样例**:

```
user_id = "f2622e27c98c41eebd415ab9396ac1e0"

device_id = "ZJG0ODJIYTG3NTNLZJAXNA=="

domain_id = "szient"

rawData = "13481005172"

encryptedData = "Okvx0kBT7OHMDRjeD16QfQ=="
```

