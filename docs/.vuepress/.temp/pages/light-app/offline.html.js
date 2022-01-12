export const data = {
  "key": "v-0937c014",
  "path": "/light-app/offline.html",
  "title": "离线应用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "压缩包的规范",
      "slug": "压缩包的规范",
      "children": []
    },
    {
      "level": 2,
      "title": "启动地址",
      "slug": "启动地址",
      "children": []
    },
    {
      "level": 2,
      "title": "前端 API 地址",
      "slug": "前端-api-地址",
      "children": []
    },
    {
      "level": 2,
      "title": "iOS WKWebView 的问题",
      "slug": "ios-wkwebview-的问题",
      "children": []
    },
    {
      "level": 2,
      "title": "更新机制",
      "slug": "更新机制",
      "children": []
    }
  ]
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
