const lightAppBar = [
  {
    title: '轻应用',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '',
      'offline',
      // 'isv',
    ]
  }, {
    title: '平台接入',
    collapsable: false,
    sidebarDepth: 3,
    children: [
      'noun',
      'sso',
      'theme',
      'message',
      'notify',
      'workbench',
    ]
  }
];

module.exports = { lightAppBar };