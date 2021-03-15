const themeSideBar = [
  {
    title: '设计规范',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '',
      'basic-principles',
      {
        title: '视觉规范',
        collapsable: false,
        sidebarDepth: 2,
        path: '/design-specification/visual-norms/style',
        children: [
          '/design-specification/visual-norms/style',
          '/design-specification/visual-norms/component',
          '/design-specification/visual-norms/layout',
          '/design-specification/visual-norms/response',
        ]
      },
      'resource-size',
      'download',
      'case',
      'visual-specification',
    ]
  }
];

module.exports = { themeSideBar };
