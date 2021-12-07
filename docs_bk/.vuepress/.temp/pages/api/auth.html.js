export const data = {
  "key": "v-5169fc23",
  "path": "/api/auth.html",
  "title": "单点登录",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "验证用户 Ticket",
      "slug": "验证用户-ticket",
      "children": []
    }
  ],
  "filePathRelative": "api/auth.md",
  "git": {
    "updatedTime": 1610292662000,
    "contributors": [
      {
        "name": "hejianxian",
        "email": "531601727@qq.com",
        "commits": 1
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
