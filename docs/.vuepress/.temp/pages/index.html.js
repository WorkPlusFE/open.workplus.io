export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "WorkPlus 开放平台",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "WorkPlus 开放平台",
    "heroImage": "/home.png",
    "heroText": "WorkPlus 开放平台",
    "tagline": "助力业务系统快速移动化",
    "footer": "©2015-2021 深圳恒拓高科信息技术有限公司 版权所有  |  粤ICP备15040561号"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "快速开始",
      "slug": "快速开始",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1640582772000
  },
  "filePathRelative": "README.md"
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
