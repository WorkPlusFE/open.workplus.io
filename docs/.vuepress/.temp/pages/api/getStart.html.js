export const data = {
  "key": "v-8b34aec2",
  "path": "/api/getStart.html",
  "title": "接入流程",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取 AppKey 及 AppSecret",
      "slug": "获取-appkey-及-appsecret",
      "children": []
    },
    {
      "level": 2,
      "title": "获取 AccessToken",
      "slug": "获取-accesstoken",
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
