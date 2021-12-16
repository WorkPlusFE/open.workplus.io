import type { SidebarConfigArray } from '@vuepress/theme-default';

export const apiSideBar: SidebarConfigArray = [
  {
    text: '开发准备',
    children: [
      '/api/getStart',
      '/api/callback',
      '/api/response',
      '/api/errorCode',
    ]
  }, {
    text: '接口列表',
    children: [
      '/api/sync',
      '/api/auth',
      '/api/users',
      {
        text: '组织架构',
        children: [
          '/api/organizations/employee',
          '/api/organizations/org',
        ]
      },
      {
        text: '媒体',
        children: [
          '/api/medias/query',
          '/api/medias/vfs',
          '/api/medias/translator',
        ]
      },
      {
        text: '应用',
        children: [
          '/api/app/mbox',
          '/api/app/scope',
          '/api/app/template',
        ]
      },
    ]
  }
];