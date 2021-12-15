import type { SidebarConfigArray } from '@vuepress/theme-default';

export const lightApp: SidebarConfigArray = [
  {
    text: '应用创建',
    children: [
      '/light-app/create',
      '/light-app/isv',
      '/light-app/nativeApp',
      '/light-app/offline',
    ]
  }, {
    text: '平台接入',
    children: [
      '/light-app/noun',
      '/light-app/sso',
      '/light-app/message',
      '/light-app/notify',
      '/light-app/workbench'
    ]
  }
];