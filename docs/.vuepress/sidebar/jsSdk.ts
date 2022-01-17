import type { SidebarConfigArray } from '@vuepress/theme-default';

export const jsSDK: SidebarConfigArray = [
  {
    text: 'JS-SDK',
    children: [
      '/js-sdk/overview/usage',
      '/js-sdk/overview/auth',
      '/js-sdk/overview/demo',
      '/js-sdk/overview/origin',
      '/js-sdk/overview/changelog',
    ]
  },
  {
    text: '方法列表',
    children: [
      '/js-sdk/auth',
      '/js-sdk/user',
      '/js-sdk/image',
      '/js-sdk/file',
      '/js-sdk/contact',
      '/js-sdk/webview',
      '/js-sdk/header',
      '/js-sdk/session',
      '/js-sdk/device',
      '/js-sdk/app',
      '/js-sdk/network',
      '/js-sdk/location',
      '/js-sdk/email',
      '/js-sdk/pay',
      '/js-sdk/eventListener',
      '/js-sdk/shared',
    ]
  }
];
