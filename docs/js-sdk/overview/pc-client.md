# PC 客户端

JS-SDK 部分接口支持在 WorkPlus PC 客户端内执行。

当轻应用或者 H5 页面在 PC 客户端内运行时，可以通过 JS-SDK 方法调用客户端能力，例如发起聊天、创建群聊和预览图片等。

:::tip 版本要求
旗舰版需要大于`v5.1.2`版本；SE专业版暂不支持（开发中）。

具体支持情况请咨询相关负责人。
:::

### 可用接口

接口无特殊说明的，均支持在全平台（Windows、MacOS、Linux 及信创系统）的 PC 客户端上运行。

可以通过`w6s.platform.isPC`来判断应用当前是否在 WorkPlus PC 内执行。

#### 认证
  - [获取临时 Ticket](/js-sdk/auth.html#获取临时-ticket)

#### 用户
  - [获取登录用户详情](/js-sdk/user.html#获取登录用户详情)

#### 图片
  - [图片预览](/js-sdk/image.html#图片预览)

#### 联系人
  - [单选联系人](/js-sdk/contact.html#单选联系人)

#### 聊天
  - [打开用户聊天页面](/js-sdk/session.html#打开用户聊天页面)
  - [打开群组聊天页面](/js-sdk/session.html#打开群组聊天页面)
  - [创建群组](/js-sdk/session.html#创建群组)

#### 设备
  - [获取设备信息](/js-sdk/device.html#获取设备信息)

### 在线例子

例子地址：https://open.workplus.io/pc-sdk-demo/ 

可使用上述地址创建内部 PC 平台轻应用，并使用符合版本要求的 WorkPlus PC 客户端进行访问，即可体验相关接口功能。



