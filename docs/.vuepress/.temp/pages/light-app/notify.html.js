export const data = {
  "key": "v-1d6e9832",
  "path": "/light-app/notify.html",
  "title": "应用红点",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "显示规则",
      "slug": "显示规则",
      "children": []
    },
    {
      "level": 2,
      "title": "API 调用规则",
      "slug": "api-调用规则",
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
