# 应用消息通知

::: tip 阅读本文，你将了解：
* 应用消息的所有类型；
* 应用消息支持的行为。
:::


## 什么是应用消息通知

![应用消息通知](/app/message.png =360x)

“应用消息”是偏向于`IM`方面的能力。通过平台能力，可以对某个应用的使用者推送不同类型的消息，它的表现跟`IM 聊天`类似，会产生一个应用会话，并且可以打开阅读所有消息。 

通过接入应用消息功能，可以让轻应用具备通知提醒、流程反馈及推广的能力。

::: warning “应用消息”与“应用红点数字”
“应用消息”与“应用红点数字”是两个完全独立的功能。推送应用消息后，并不会在应用图标右上角生成提醒，两者之间没有必然的关系，这需要开发者自行处理，例如推送一条代办消息的同时，生成一个红点数字提醒。
:::

## 消息类型

当前共支持 5 种消息类型，包括`文本`、`图片`、`文件`及`图文`和`模版消息`。

**文本：**

仅包含文本内容，适用于无动作的状态反馈。

**图片：**

推送一张图片，常用于介绍活动内容。

**文件：**

推送一份文件。

**图文：**

推送一份带图片及标题描述的消息，类似于服务号的图文消息，点击后打开一个链接。

**模版消息：**

推送一份模版消息，每个应用上架后，都可在应用设置栏目进行模版消息的自定义编辑，具体请查看[消息模版](/light-app/create.html#消息模版)。

## 消息行为 

**打开应用：**

通常在推送文本消息时，我们希望用户在会话列表点击消息时，可直接进入应用，可以通过在消息体中设置`@target_url`实现该功能。

```js
const options = {
  ...,
  body: {
    ...,
    "@target_url": targetUrl,
  }
};
```

**全屏打开：**

是否全屏打开，取决于应用本身是否为全屏应用。若推送消息的应用为全屏应用，可以通过在消息体中设置`display_mode`实现该功能。

```js
const options = {
  ...,
  body_type: 'ARTICLE', 
  body: {
    ...,
    articles:[{
      ...,
      display_mode: 'FULL_SCREEN'
    }, { 
      ...,
      display_mode: 'FULL_SCREEN'
    }]
  }
};
```

::: warning 仅支持图文消息
仅在推送图文消息（即 body_type: 'ARTICLE'）时支持，并且`display_mode`需要独立设置到`article`里。
:::

**打开会话：**

在会话列表点击应用消息，默认打开该应用的会话页面，通常消息类型较多的情况下，优先选择该模式。

## 消息推送

消息推送的实现一般分两步：

1. 获取应用的使用权限范围（包含管理员及超级管理员）；
2. 根据业务场景给指定的人员推送特定的消息。

具体的 API 使用方法，请查看[API文档-应用](/api/app/mbox.md)。