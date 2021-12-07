export const data = {
  "key": "v-6be4efb0",
  "path": "/qa.html",
  "title": "常见问题",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "轻应用",
      "slug": "轻应用",
      "children": [
        {
          "level": 3,
          "title": "考勤定位偏差大",
          "slug": "考勤定位偏差大",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "JS-SDK",
      "slug": "js-sdk",
      "children": [
        {
          "level": 3,
          "title": "回调使用 alert 输出结果没反应",
          "slug": "回调使用-alert-输出结果没反应",
          "children": []
        },
        {
          "level": 3,
          "title": "可以多次注入 cordovajs 吗？",
          "slug": "可以多次注入-cordovajs-吗",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qa.md",
  "git": {
    "updatedTime": 1615623356000,
    "contributors": [
      {
        "name": "hejianxian",
        "email": "531601727@qq.com",
        "commits": 2
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
