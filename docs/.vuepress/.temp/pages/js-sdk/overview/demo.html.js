export const data = {
  "key": "v-5eca5040",
  "path": "/js-sdk/overview/demo.html",
  "title": "例子及资源",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "在线 demo",
      "slug": "在线-demo",
      "children": []
    },
    {
      "level": 2,
      "title": "演示代码",
      "slug": "演示代码",
      "children": []
    },
    {
      "level": 2,
      "title": "资源文件",
      "slug": "资源文件",
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
