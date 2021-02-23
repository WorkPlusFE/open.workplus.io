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

> API地址，域ID 等信息，需咨询产品相关负责人获取，一般会存在多个环境，如测试环境、UAT环境等，请注意区分。

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

::: warning 关于 userAgent
首次打开时，开发工具会重写页面的 userAgent，会带上`workplus`等标式，但若此时切换到手机模拟器调试（如上图），userAgent 将会被刷新。如果需要通过 userAgent 来判断是否在 WorkPlus App 上访问，在开发阶段，建议通过 NODE_ENV 环境变量或其他方式来控制。
:::

### 页面导航

在`H5模拟器`模式下开发，如果应用是一个无顶部导航栏的 H5应用，可能页面无法进行上下页等操作，开发工具在该模式下，会提供一个模拟的简版导航条，如下图：


<p style="text-align: left">
  <img :src="$withBase('/devtools/h5-navigation.png')" alt="navigation" width="500">
</p>

导航条会固定在左上角（如上图，默认带点透明，鼠标移上去后会去掉透明度），点击最右边的按钮，可以收起导航条。

所有按钮功能说明如下：

* "<i class="el-icon-back"></i>" 页面返回（若有历史记录的情况下）；
* "<i class="el-icon-right"></i>" 前往上一页（若有历史记录的情况下）；
* "<i class="el-icon-refresh"></i>" 刷新当前页面；
* "<i class="el-icon-setting"></i>" 开启或关闭开发调试工具；
* "<i class="el-icon-s-fold"></i>" 收起导航条；
* "<i class="el-icon-s-unfold"></i>" 展开导航条。

::: tip 页面刷新导致认证失败？
如果应用需要通过 Ticket 做单点登录，那使用页面刷新功能时，需要注意的是：链接上的 Ticket 不会再次生成，已消费的 Ticket 将不能再使用。

建议适当的情况下，存储用户登录状态到本地，或使用 JS-SDK 的获取 Ticket 接口。
:::

### 应用设置

`高科前端开发工具`支持切换主题和语言，同时提供一些使用说明和文档入口，后续会扩展更多的设置功能。

<p style="text-align: left">
  <img :src="$withBase('/devtools/devtools-setting.png')" alt="5debug-qrcode" width="220">
</p>

## 方法列表

在`H5模拟器`的打开方式下，通过接入 JS-SDK，可以使用以下方法：

| 功能模块 |  支持方法 |
| - | - |
| 认证 | [获取 Ticket](/js-sdk/auth.html#获取临时-ticket) |
| 用户 | [获取登录用户详情](/js-sdk/user.html#获取登录用户详情) <br/> [获取用户的雇员信息](/js-sdk/user.html#获取用户的雇员信息) |
| 联系人 | [单选联系人](/js-sdk/contact.html#单选联系人) <br/> [多选联系人](/js-sdk/contact.html#多选联系人) <br/> [多选当前组织的雇员列表](/js-sdk/contact.html#多选当前组织的雇员列表) <br/>[打开通用选择人员界面](/js-sdk/contact.html#打开通用选择人员界面)  | 
| 图片 | [选择照片](/js-sdk/image.html#选择照片) <br/> [图片预览](/js-sdk/image.html#图片预览) | 
| 网络 | [获取当前连接 Wifi 信息](/js-sdk/network.html#当前连接wifi信息) |
| 地理位置 | [获取定位信息](/js-sdk/location.html#获取定位信息) |
| 设备 | [获取 IP 地址](/js-sdk/device.html#获取-ip-地址) </br> [获取设备信息](/js-sdk/device.html#获取设备信息) <br/> [获取 App 信息](/js-sdk/device.html#获取-app-信息)|
| | |

::: tip 方法未被支持怎么办？
工具仅对常用方法进行模拟支持，未被支持的方法，如果被调用，将不会得到任何相应或异常。若有需要，可以通过 JS-SDK 的接口模拟功能进行使用。
:::

## 工具下载

整理中，敬请期待！

<!-- 最新版本`v1.0.0-beta.1`，请点击下方链接进行下载：

* [下载 MacOS 版本](https://open.workplus.io/static/dev-tools/mac/)
* [下载 Windows 版本](https://open.workplus.io/static/dev-tools/win/)

[查看更新日志](https://github.com/WorkPlusFE/dev-tools/blob/master/CHANGELOG.md) -->
