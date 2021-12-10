import type { SidebarConfigArray } from '@vuepress/theme-default';

export const theme: SidebarConfigArray = [
  {
    text: '应用主题',
    children: ['/design-specification/theme']
  },
  {
    text: '设计规范',
    children: [
      '/design-specification/introduce',
      '/design-specification/basic-principles',
      {
        text: '视觉规范',
        children: [
          '/design-specification/visual-norms/style',
          '/design-specification/visual-norms/component',
          '/design-specification/visual-norms/layout',
          '/design-specification/visual-norms/response',
        ]
      },
      '/design-specification/resource-size',
      '/design-specification/download',
      '/design-specification/case',
    ]
  },
];
