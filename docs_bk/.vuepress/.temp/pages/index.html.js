export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/home.png",
    "heroText": "WorkPlus 开放平台",
    "tagline": "助力业务系统快速移动化",
    "actionText": "快速开始 →",
    "actionLink": "/light-app/"
  },
  "excerpt": "",
  "headers": [],
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
