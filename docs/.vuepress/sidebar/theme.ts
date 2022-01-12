import type { SidebarConfigArray } from '@vuepress/theme-default';

export const theme: SidebarConfigArray = [
  {
    text: '应用主题',
    children: ['/design-specification/theme']
  },
  {
    text: '设计规范',
    children: [
      '/design-specification/basic-principles',
      '/design-specification/visual-norms/style',
    ]
  },
  {
    text: '设计资源',
    children: [
      '/design-specification/resource-size',
    ]
  },
];
