# 网络

## 当前连接Wifi信息
<!-- OK -->
获取当前连接 Wifi 信息, 包括 bssid、名字等。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.network.getWifiInfo({
  success: function(res) {},
  fail: function(err) {},
});
```

**返回数据**

| 参数 | 说明 |
| - | - | 
| bssid | wifi 接入点标识  |
| name | wifi 名称  |

::: warning 提示
同一个路由设备，`bssid`可能会有多个不同的值。
:::

## 原生 AJAX

通过原生能力发送接口请求。

::: tip 接口跨域问题
再较多情况下，前端接口请求跨域是一个比较头疼的问题，因为浏览器出于安全考虑，会拦截掉不同域的接口请求。然而，使用原生的 Ajax 能力，就不会存在该问题，它的传参和返回，跟前端的 Ajax 基本一致。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | `v4.11.6+`  | `v4.11.6+` |


```js
const requestParams = {
  url: 'https://api.com/v1',
  method: 'POST',
  timeout: 5 * 1000,
  header: {},
  data: {},
};

w6s.request(requestParams)
  .then((response: any) => {
    // 接口成功
  })
  .catch((err) => {
    // 接口异常
  })
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url |  String | 接口地址 |
| method |  String | 非必须，GET/HEAD/POST/PUT/DELETE 中的一种，默认GET。 |
| timeout |  Number | 非必须，超时时间，单位为毫秒，默认值 30000 毫秒  |
| header |  Object | 非必须，请求的 header |
| data |  Object | 非必须，请求的参数 |

::: tip 关于 data 参数
如果是 GET 请求配置了 data 参数，接口并不会自动转换到连接上，需要手动进行参数拼接。而 POST 类型下，data 直接传 js 的对象即可，无需转换成 json 字符串。
:::