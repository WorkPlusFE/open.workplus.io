const fs = require('fs');
const sdk = require('@w6s/sdk/package.json');
const pkg = require(process.cwd() + '/package.json');
const docDir = process.cwd() + '/docs';

const generateChildren = () => {
  const dirs = [];
  fs.readdirSync(docDir).forEach(path => {
    if (path.indexOf('.') !== 0) {
      const stat = fs.lstatSync(`${docDir}/${path}`);
      if (stat.isDirectory()) {
        dirs.push(`/${path}/`);
      }
    }
  });
  return dirs;
};

module.exports = {
  title: 'WorkPlus 开放平台',
  description: 'WorkPlus，企业移动管理平台服务商，专注于为中大型企业提供一站式移动办公新体验。目前已服务的国内外大型企业超过100家，终端用户数量突破500000，为企业提供了移动管理平台，移动门户，移动办公OA，移动审批，会议管理，通知公告，业务系统集成以及企业中台，安全可控等一体化解决方案，支持手机端和pc端，真正实现了企业管理与移动办公的高效性。',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'keywords', content: '移动管理平台,移动门户,移动OA,移动办公,移动审批,移动应用门户,移动应用管理,移动APP管理,移动安全管理,在线协同办公,手机OA,手机审批,手机工作流,手机BPM,企业级app管理,企业门户,OA自动化,办公自动化,企业移动平台,移动云平台,MAS,MCM,MAM,MEM,MDM' }],
    ['meta', { itemprop: 'name', content: 'WorkPlus - 企业移动办公管理平台,移动门户,移动办公OA,企业办公沟通,智慧办公解决方案专家' }]
  ],
  themeConfig: {
    version: sdk.version,
    logo: '/logo.png',
    nav: [
      {
        text: '更多',
        items: [
          { text: '官方网站', link: 'https://workplus.io/' },
          { text: 'WorkPlus Lite', link: 'https://lite.workplus.io/' },
          { text: 'Cordova 文档', link: 'https://open.workplus.io/cordova/' },
        ]
      },
    ],

    docsRepo: 'WorkPlusFE/open.workplus.io',
    docsDir: 'docs',
    docsBranch: 'master',

    editLinks: false,
    editLinkText: '帮助我们完善此文档',

    lastUpdated: '上次编辑于', 

    smoothScroll: false,
  },
  plugins: [
    [
      '@vuepress/plugin-palette',
      { preset: 'sass' },
    ],
    [
      '@vuepress/docsearch',
      {
        apiKey: '1e1e188d5cc1f18ca6648322f3716333',
        indexName: 'workplus',
        searchParameters: {
          facetFilters: ['tags:v2'],
        },
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
  ],
};