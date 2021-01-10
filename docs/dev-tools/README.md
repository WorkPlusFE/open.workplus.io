# 高科前端开发工具

<br/>

<img :src="$withBase('/devtools/screenshot.png')" alt="5debug-qrcode" width="100%">

<br/>

## 概述

`高科前端开发工具`，是为了提高基于 WorkPlus 移动平台开发应用的开发及联调效率。工具专注于开发过程中真实环境数据及接口的模拟，通过创建角色及应用入口，可以快速切换环境，大大提升开发效率。

:::tip 相比微信小程序开发工具
`微信小程序开发工具`是一套完整的应用开发调试工具，包含项目创建、开发调试及应用发布，但必须得使用小程序专用的开发框架，以及遵守小程序各种严格的规范。

而`高科前端开发工具`，为的是解决开发过程中调试效率不高的问题，通过提供真实的环境数据及接口模拟，从而达到提高开发效率的效果。对于项目所使用的技术栈，构建工具等，没有任何要求。
:::

## 快速开始

`高科前端开发工具`主要包括两个核心模块：**角色**及**应用入口**。同时提供一些简单的设置功能及文档入口。

### 角色

角色的定义为：**一个环境中的某个具体的组织下的一个用户**。

所以，在添加角色时，需要提供真实环境的配置，例如 API地址，域ID 等，以及在该环境下，可用的一个账号，验证服务通过后，选择其中一个组织，即可保存成角色，如下图。

<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-role-create.png')" alt="5debug-qrcode" width="220">
</p>

角色创建后，即可在创建应用入口时，关联起来。

### 应用入口

应用入口的定义为：**以一个角色的身份去访问一个 URL 地址**。

所以，在添加应用入口时，需要启动地址及选择一个角色，如下图。

<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-app-create.png')" alt="5debug-qrcode" width="220">
</p>

输入完毕后，可以直接点击“保存并打开”按钮，直接打开应用；或者点击“添加应用”后，在应用列表点击打开。

### 启动方式

当前应用支持两种打开方式，即`外部浏览器打开`及`H5模拟器`。

**外部浏览器打开：**

`外部浏览器打开`打开是模拟在 PC客户端 打开应用的场景，多用于类似管理后台的单点登录，当应用打开时，url 会拼上一些关键的用户信息，如 ticket、user_id 等。

默认参数包括：

* `ticket` 用户 Ticket
* `username` 用户名
* `user_id` 用户 ID
* `org_id` 组织 ID
* `domain_id` 域 ID
* `random` 随机数

应用打开后，得到的 url 大概如下：

```html
http://app-test.link?ticket={{用户_Ticket}}&username={{用户名}}&user_id={{用户_ID}}&org_id={{组织_ID}}&domain_id={{域_ID}}&random={{随机数}}
```

**H5模拟器：**

`H5模拟器`会打开一个独立的窗口，而在该窗口的 js 进程中，会动态注入部分模拟移动端 Cordova 接口的方法。

<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-mobile.png')" alt="5debug-qrcode" width="500">
</p>

在`H5模拟器`模式中，可以直接使用部分在移动端才可以使用的接口，例如获取用户信息，获取用户 Ticket等。在不侵入应用本身的同时，提供跟移动端一致的接口调用体验。

同时，此模式下启动应用，并不会在 URL 上拼接参数，但支持通过占位符的方式获取部分参数，具体可以查看[启动地址](./light-app/启动地址)。

### 应用设置

`微信小程序开发工具`支持切换主题和语言，同时提供一些使用说明和文档入口，后续会扩展更多的设置功能。

<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-setting.png')" alt="5debug-qrcode" width="220">
</p>

## 方法列表

整理中，敬请期待！

## 常见问题

整理中，敬请期待！
## 下载

整理中，敬请期待！