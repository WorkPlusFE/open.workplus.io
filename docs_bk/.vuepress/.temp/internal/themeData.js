export const themeData = {
  "version": "1.2.0",
  "logo": "/logo.png",
  "searchPlaceholder": "搜索文档",
  "algolia": {
    "apiKey": "1e1e188d5cc1f18ca6648322f3716333",
    "indexName": "workplus"
  },
  "nav": [
    {
      "text": "快速开始",
      "link": "/light-app/"
    },
    {
      "text": "服务端 API",
      "link": "/api/"
    },
    {
      "text": "前端 JS-SDK",
      "link": "/js-sdk/"
    },
    {
      "text": "设计规范",
      "link": "/design-specification/"
    },
    {
      "text": "开发及调试",
      "link": "/dev-tools/"
    },
    {
      "text": "常见问题",
      "link": "/qa"
    },
    {
      "text": "更多",
      "items": [
        {
          "text": "官方网站",
          "link": "https://workplus.io/"
        },
        {
          "text": "WorkPlus Lite",
          "link": "https://lite.workplus.io/"
        },
        {
          "text": "Cordova 文档",
          "link": "https://open.workplus.io/cordova/"
        }
      ]
    }
  ],
  "sidebar": {
    "/light-app/": [
      {
        "title": "轻应用",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "",
          "offline"
        ]
      },
      {
        "title": "平台接入",
        "collapsable": false,
        "sidebarDepth": 3,
        "children": [
          "noun",
          "sso",
          "theme",
          "message",
          "notify",
          "workbench"
        ]
      }
    ],
    "/js-sdk/": [
      {
        "title": "JS-SDK",
        "collapsable": false,
        "sidebarDepth": 1,
        "children": [
          "/js-sdk/",
          "/js-sdk/overview/usage",
          "/js-sdk/overview/urlScheme",
          "/js-sdk/overview/demo",
          "/js-sdk/overview/origin",
          "/js-sdk/overview/changelog"
        ]
      },
      {
        "title": "方法列表",
        "collapsable": false,
        "sidebarDepth": 1,
        "children": [
          "auth",
          "user",
          "image",
          "file",
          "contact",
          "webview",
          "header",
          "session",
          "device",
          "app",
          "network",
          "location",
          "email",
          "pay",
          "eventListener",
          "shared"
        ]
      }
    ],
    "/api/": [
      {
        "title": "API 文档",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "",
          "getStart",
          "callback",
          "response",
          "errorCode"
        ]
      },
      {
        "title": "接口列表",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "auth",
          "users",
          {
            "title": "组织架构",
            "collapsable": false,
            "sidebarDepth": 2,
            "path": "/api/organizations/employee",
            "children": [
              "/api/organizations/employee",
              "/api/organizations/org"
            ]
          },
          {
            "title": "媒体",
            "collapsable": false,
            "sidebarDepth": 2,
            "path": "/api/medias/query",
            "children": [
              "/api/medias/query",
              "/api/medias/vfs",
              "/api/medias/translator"
            ]
          },
          {
            "title": "应用",
            "collapsable": false,
            "sidebarDepth": 2,
            "path": "/api/app/mbox",
            "children": [
              "/api/app/mbox",
              "/api/app/scope",
              "/api/app/template"
            ]
          }
        ]
      }
    ],
    "/design-specification/": [
      {
        "title": "设计规范",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "",
          "basic-principles",
          {
            "title": "视觉规范",
            "collapsable": false,
            "sidebarDepth": 2,
            "path": "/design-specification/visual-norms/style",
            "children": [
              "/design-specification/visual-norms/style",
              "/design-specification/visual-norms/component",
              "/design-specification/visual-norms/layout",
              "/design-specification/visual-norms/response"
            ]
          },
          "resource-size",
          "download",
          "case"
        ]
      }
    ],
    "/dev-tools/": [
      {
        "title": "开发工具",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          ""
        ]
      },
      {
        "title": "轻应用调试",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "debug",
          "vconsole"
        ]
      }
    ]
  },
  "docsRepo": "WorkPlusFE/open.workplus.io",
  "docsDir": "docs",
  "docsBranch": "master",
  "editLinks": false,
  "editLinkText": "帮助我们完善此文档",
  "lastUpdated": "上次编辑于",
  "smoothScroll": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
