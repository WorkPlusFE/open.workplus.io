---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "BeeWorks 开发文档"
  tagline: '在这里你可以找到应用开发、能力对接等指南和 API 说明，助力您的业务系统快速移动化、数字化。'
  actions:
    - theme: brand
      text: 快速开始
      link: /light-app/create
    - theme: alt
      text: 开放接口
      link: /api/getStart
    - theme: alt
      text: JS-SDK
      link: /js-sdk/overview/usage

features:
  - title: 单点登录
    icon: 
      src: /features/sso.svg
    details: 通过 BeeWorks 开放接口，可以以应用身份对用户进行 Ticket 校验，实现单点登录。
    link: /light-app/sso
  - title: JS-SDK
    icon: 
      src: /features/js-sdk.svg
    details: BeeWorks 移动端 WebView 提供强大的原生能力，通过 JS-SDK 可以轻松在 H5 应用中调用原生能力，例如拍照、二维码识别等。
    link: /js-sdk/overview/usage
  - title: 消息推送
    icon: 
      src: /features/notify.svg
    details: 通过平台能力，可以对某个应用的使用者推送不同类型的消息，它的表现跟 IM 聊天类似，会产生一个应用会话，并且可以打开阅读所有消息。
    link: /light-app/message
  - title: 机器人
    icon: 
      src: /features/robot.svg
    details: 通过机器人来实现互动对话能力，支持设置消息按钮和动态更新消息内容。
    link: /light-app/bot
  - title: 应用调试
    icon: 
      src: /features/dev.svg
    details: 可以通过简单设置开启安卓客户端的真机调试，也可启动全局 VConsole 插件，快速调试定位问题。
    link: /dev-tools/debug
  - title: 工作台
    icon: 
      src: /features/workbench.svg
    details: 可根据不同人员的需求来定义工作台卡片，通过卡片组合的方式来打造个性化的工作台，真正实现“千人千面”。
    link: /light-app/workbench
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.footer__link-item,
.footer_copyright {
  text-decoration-line: none !important;
}

.footer__link-item:hover,
.footer_copyright:hover {
  color: var(--vp-c-brand-1) !important;
  text-decoration-line: underline !important;
}
</style>