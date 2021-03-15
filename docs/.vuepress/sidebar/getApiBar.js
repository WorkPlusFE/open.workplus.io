const apiSideBar = [
  {
    title: 'API 文档',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '',
      'getStart',
      'callback',
      'response',
      'errorCode',
    ]
  }, {
    title: '接口列表',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'auth',
      'users',
      {
        title: '组织架构',
        collapsable: false,
        sidebarDepth: 2,
        path: '/api/organizations/employee',
        children: [
          '/api/organizations/employee',
          '/api/organizations/org',
        ]
      },
      {
        title: '媒体',
        collapsable: false,
        sidebarDepth: 2,
        path: '/api/medias/query',
        children: [
          '/api/medias/query',
          '/api/medias/vfs',
          '/api/medias/translator',
        ]
      },
      {
        title: '应用',
        collapsable: false,
        sidebarDepth: 2,
        path: '/api/app/mbox',
        children: [
          '/api/app/mbox',
          '/api/app/scope',
          '/api/app/template',
        ]
      },
    ]
  }
];

module.exports = { apiSideBar };
