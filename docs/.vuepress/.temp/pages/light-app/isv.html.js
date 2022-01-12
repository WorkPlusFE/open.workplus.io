export const data = {
  "key": "v-7b4ac60b",
  "path": "/light-app/isv.html",
  "title": "ISV 应用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么是 ISV 应用",
      "slug": "什么是-isv-应用",
      "children": []
    },
    {
      "level": 2,
      "title": "开发要点",
      "slug": "开发要点",
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
