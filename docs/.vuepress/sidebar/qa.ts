import type { SidebarConfigArray } from '@vuepress/theme-default';

export const qa: SidebarConfigArray = [
  {
    text: 'WorkPlus APP',
    children: [
      '/qa/app',
    ]
  },
  {
    text: '轻应用',
    children: [
      '/qa/light-app',
    ]
  },
  {
    text: 'JS-SDK',
    children: [
      '/qa/js-sdk',
    ]
  },
];
