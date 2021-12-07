export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "heroImage": "/home.png",
    "heroText": "WorkPlus 开放平台",
    "tagline": "助力业务系统快速移动化",
    "actions": [
      {
        "text": "Get Started",
        "link": "/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "Introduction",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Simplicity First",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Vue-Powered",
        "details": "Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue."
      },
      {
        "title": "Performant",
        "details": "VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
      },
      {
        "title": "Themes",
        "details": "Providing a default theme out of the box. You can also choose a community theme or create your own one."
      },
      {
        "title": "Plugins",
        "details": "Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site."
      },
      {
        "title": "Bundlers",
        "details": "Both Webpack and Vite are supported. Choose the one you like!"
      }
    ],
    "footer": "©2015-2021 深圳恒拓高科信息技术有限公司 版权所有  |  粤ICP备15040561号"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "As Easy as 1, 2, 3",
      "slug": "as-easy-as-1-2-3",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1616055357000,
    "contributors": [
      {
        "name": "hejianxian",
        "email": "531601727@qq.com",
        "commits": 3
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
