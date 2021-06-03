# 鉴权流程

为了保证 JS-SDK 的调用者是可信任的，同时对当前页面可用的 API 进行安全限制，防止恶意网页通过 JS-API 随意获取用户私密信息，对用户财产造成损失。因此在部分 JS-API 在被调用前，需要通过接口进行鉴权，只有鉴权成功的情况下，JS-API 的调用才会正常生效。

> 目前所有接口（除鉴权接口外）均需要鉴权后才可使用！

## 步骤一：获取 access_key

管理后台颁发和维护，请联系相关负责人获取。

## 步骤二：计算签名

在进行鉴权之前，需要设置以下签名所需的参数：

| 参数   | 类型 | 描述  |
| -------- | ------- | ---- |
| access_key | string  | 从管理后台获取的 key，参考步骤一 |
| nonce | string \| number  | 六位随机数 |
| timestamp | string \| number  | 时间戳（毫秒数） |

然后，需通过以上 3 个参数，计算出最终的签名`signature`。

**签名方法**：

- 1. 参数排序

按自然升序进行排序，可以直接使用 sort 方法进行处理：

```js
const sorted = [access_secret, nonce, timestamp].sort();
```
- 2. 参数拼接

完成第一步后，需要将 3 个参数连起来，可以利用 reduce 方法：

```js
const str = sorted.reduce((str, item) => str += item, '');
```

你也可以直接1、2两步一起处理，如下:

```js
const str = [access_secret, nonce, timestamp]
  .sort()
  .reduce((str, item) => str += item, '');
```

- 3. 对字符串进行 SHA-1 加密，并转成全小写字母

推荐使用[brix/crypto-js](https://github.com/brix/crypto-js)或[Caligatio/jsSHA](https://github.com/Caligatio/jsSHA)库进行加密处理。

以 crypto-js 库为例：

```js
// 引入模块
import sha1 from 'crypto-js/sha1';

const access_secret = 'access_secret';
const nonce = '123456';
const timestamp = `${Date.now()}`;

const str = [access_secret, nonce, timestamp]
  .sort()
  .reduce((str, item) => str += item, '');

// 最终还需要转成全小写
const signature = sha1(str).toString().toLowerCase();
```

完成签名计算后，即可调用鉴权接口。

:::warning timestamp 的时效性
提交的`timestamp`在 **300秒** 内有效，如果超出，则验证失败。
:::

## 步骤三：调用鉴权接口

```js
import * as w6s from '@w6s/sdk';

w6s.config({
  access_key: 'access_key',
  nonce: '123456',
  timestamp: 'timestamp',
  signature: 'signature',
})
.then((res) => {
  // 成功
})
.catch((err) => {
  // 失败
});
```

接口成功与否，会在对应的回调方法中返回，返回格式如下：

```json
{
  "code" : 0,
  "message": "授权成功"
}
```

状态码说明：

| 状态码  | 描述  |
| --- | --- |
| 0  | 鉴权成功, success 回调中返回 |
| -1 | 参数有误, 例如传入参数缺失等, 在 fail 回调中返回 |
| -2 | 鉴权失败, 在 fail 回调中返回 |

## 步骤四：调用 JS-API

完成鉴权后，便可以在`w6s.ready`里调用 JS-API 了。

```js
w6s.ready(() => {
  w6s.auth.getUserTicket({
    success: function(res) {},
    fail: function(err) {},
  });
});
```

`w6s.ready`的触发时机：

- 如果调用时，授权并未完成，则会在授权完成时触发；
- 如果调用时，授权已经完成，则会马上被触发；

基于以上机制，在应用初始化时，可以更好地管理代码的执行流程，例如：

```js
// 执行鉴权
w6s.config(...)

// 同时，监听 ready 回调
w6s.ready(() => {
  // 鉴权成功后，马上执行
  w6s.auth.getUserTicket();
});
```

::: warning 注意！
在开发调试过程中，需要经常刷新页面，在这种情况下，如果 SDK 已经授权成功，那`ready`回调会触发先于授权接口`config`回调，这样可能会导致代码运行先后上的不一致。

所以，建议不要在授权接口的回调中处理业务逻辑，应统一在`ready`回调中处理。
:::