# 单点登录

::: tip 阅读本文，你将了解：
* 前端如何获取用户信息；
* 单点登录的完整流程。
:::

## 什么是单点登录

第三方应用在接入 BeeWorks 平台时，往往需要集成 BeeWorks 的用户系统、应用通知等能力，而在使用这些能力之前，通常会对用户的合法性进行校验，此时就需要做“单点登录”验证。

目前 BeeWorks 实现单点登录的机制如下：

1. 客户端打开第三方应用时，第三方应用可以通过`js-sdk`或从`url`上获得临时 Ticket；
2. 第三方应用后端服务通过[应用参数获取应用 Token](/api/getStart.md)；
3. 第三方应用后端服务根据客户端提交的 Ticket 参数，[验证用户 Ticket](/api/auth.md) 的合法性；


如果需要取得应用访问者的详细信息，前端可以提交`user_id`、`org_id`、`domain_id`等用户关键信息，后端即可通过开放接口获取该用户在平台上的详细信息。

::: warning 提示
“单点登录”的目的是为了验证用户的合法性，跟第三方应用是否能调用平台接口能力无关。第三方应用通过应用“key/secret”取得“应用Token”后，即可调用平台接口，例如推送应用消息、获取应用的使用范围等。
:::

## 单点登录流程

![单点登录流程解析](/app/sso.png)

## 获取客户端用户信息

客户端作为“单点登录”的发起端，通常需要传递一些关键用户信息到对应应用的后端服务。而不同的端，获取用户信息的方式会不太一样。

### 移动端

移动端通常会通过`js-sdk`接口进行获取，例如使用`w6s.auth.getUserTicket`及`w6s.contact.getCurrentUserInfo`方法来获取临时 Ticket 及当前登录的用户信息。

另一种方式，就是通过截取应用启动地址上的参数，具体设置请查看[应用启动地址](/light-app/create.md#启动地址)。

### PC 客户端

PC 客户端目前主要的方式就是截取应用启动地址上的参数，每个应用被打开时，客户端会获取临时 Ticket 及用户信息并拼接在应用启动地址上，如下：

```js
http://test-app.beeworks.cn?ticket=ticket&user_id=xxx&domain_id=xx
```

参数包括以下属性:

* `ticket` 临时 Ticket
* `username` 用户名
* `user_id` 用户的 userId
* `domain_id` 用户当前所在的域
* `org_id` 用户当前所在的组织
* `nickname` 用户的昵称，注意转码
* `random` 随机数，一般为时间戳

::: warning 应用启动地址
应用的启动地址，请尽可能遵照标准来设置。例如常见的单页面应用会使用`#hash`的方式做前端路由，但是`井号`在链接访问上是没有意义的，我们建议链接的属性，应该是先`search(query)`再`hash`，如：

```html
https://www.beeworks.cn?key1=val1&key2=val2#hash
```
:::
