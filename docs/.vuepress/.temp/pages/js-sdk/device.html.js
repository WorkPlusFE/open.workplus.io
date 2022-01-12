export const data = {
  "key": "v-390c1c23",
  "path": "/js-sdk/device.html",
  "title": "设备",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取 IP 地址",
      "slug": "获取-ip-地址",
      "children": []
    },
    {
      "level": 2,
      "title": "获取设备信息",
      "slug": "获取设备信息",
      "children": []
    },
    {
      "level": 2,
      "title": "获取运动数据",
      "slug": "获取运动数据",
      "children": []
    },
    {
      "level": 2,
      "title": "获取 App 信息",
      "slug": "获取-app-信息",
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
