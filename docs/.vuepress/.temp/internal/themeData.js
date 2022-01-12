export const themeData = {
  "logo": "/logo.png",
  "locales": {
    "/": {
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言",
      "selectLanguageAriaLabel": "选择语言",
      "navbar": [
        {
          "text": "首页",
          "link": "/"
        },
        {
          "text": "快速开始",
          "children": [
            {
              "text": "应用创建",
              "children": [
                "/light-app/create",
                "/light-app/isv",
                "/light-app/nativeApp",
                "/light-app/offline"
              ]
            },
            {
              "text": "平台接入",
              "children": [
                "/light-app/noun",
                "/light-app/sync",
                "/light-app/sso",
                "/light-app/message",
                "/light-app/notify",
                "/light-app/workbench"
              ]
            }
          ]
        },
        {
          "text": "服务端接口",
          "children": [
            {
              "text": "开发准备",
              "children": [
                "/api/getStart",
                "/api/callback",
                "/api/response",
                "/api/errorCode"
              ]
            },
            {
              "text": "接口列表",
              "children": [
                "/api/sync",
                "/api/auth",
                "/api/users",
                {
                  "text": "组织架构",
                  "link": "/api/organizations/employee"
                },
                {
                  "text": "媒体",
                  "link": "/api/medias/query"
                },
                {
                  "text": "应用",
                  "link": "/api/app/mbox"
                }
              ]
            }
          ]
        },
        {
          "text": "前端 JS-SDK",
          "children": [
            {
              "text": "开发准备",
              "children": [
                "/js-sdk/overview/usage",
                "/js-sdk/overview/auth",
                "/js-sdk/overview/urlScheme",
                "/js-sdk/overview/origin",
                "/js-sdk/overview/changelog"
              ]
            },
            {
              "text": "接口列表",
              "children": [
                "/js-sdk/auth",
                "/js-sdk/user",
                "/js-sdk/image",
                "/js-sdk/file",
                "/js-sdk/contact",
                "/js-sdk/webview",
                "/js-sdk/header",
                "/js-sdk/session",
                "/js-sdk/device",
                "/js-sdk/app",
                "/js-sdk/network",
                "/js-sdk/location",
                "/js-sdk/email",
                "/js-sdk/pay",
                "/js-sdk/eventListener",
                "/js-sdk/shared"
              ]
            }
          ]
        },
        {
          "text": "样式定制",
          "children": [
            {
              "text": "APP 主题",
              "children": [
                "/design-specification/theme"
              ]
            },
            {
              "text": "设计规范",
              "children": [
                "/design-specification/basic-principles",
                "/design-specification/visual-norms/style"
              ]
            },
            {
              "text": "设计资源",
              "children": [
                "/design-specification/resource-size"
              ]
            }
          ]
        },
        {
          "text": "开发调试",
          "children": [
            {
              "text": "项目创建",
              "children": [
                "/dev-tools/scaffold"
              ]
            },
            {
              "text": "轻应用调试",
              "children": [
                "/dev-tools/debug",
                "/dev-tools/vconsole"
              ]
            },
            {
              "text": "开发工具",
              "children": [
                "/dev-tools/app"
              ]
            }
          ]
        },
        {
          "text": "常见问题",
          "children": [
            "/qa/light-app",
            "/qa/js-sdk"
          ]
        },
        {
          "text": "了解更多",
          "children": [
            {
              "text": "WorkPlus 官网",
              "link": "https://workplus.io/"
            },
            {
              "text": "WorkPlus Lite（开源版）",
              "link": "https://lite.workplus.io/"
            },
            {
              "text": "昆仑中间件平台",
              "link": "https://kunlun.workplus.io/"
            },
            {
              "text": "Cordova 原始文档",
              "link": "https://open.workplus.io/cordova/"
            }
          ]
        }
      ],
      "sidebar": {
        "/light-app/": [
          {
            "text": "应用创建",
            "children": [
              "/light-app/create",
              "/light-app/isv",
              "/light-app/nativeApp",
              "/light-app/offline"
            ]
          },
          {
            "text": "平台接入",
            "children": [
              "/light-app/noun",
              "/light-app/sync",
              "/light-app/sso",
              "/light-app/message",
              "/light-app/notify",
              "/light-app/workbench"
            ]
          }
        ],
        "/js-sdk/": [
          {
            "text": "JS-SDK",
            "children": [
              "/js-sdk/overview/usage",
              "/js-sdk/overview/auth",
              "/js-sdk/overview/urlScheme",
              "/js-sdk/overview/demo",
              "/js-sdk/overview/origin",
              "/js-sdk/overview/changelog"
            ]
          },
          {
            "text": "方法列表",
            "children": [
              "/js-sdk/auth",
              "/js-sdk/user",
              "/js-sdk/image",
              "/js-sdk/file",
              "/js-sdk/contact",
              "/js-sdk/webview",
              "/js-sdk/header",
              "/js-sdk/session",
              "/js-sdk/device",
              "/js-sdk/app",
              "/js-sdk/network",
              "/js-sdk/location",
              "/js-sdk/email",
              "/js-sdk/pay",
              "/js-sdk/eventListener",
              "/js-sdk/shared"
            ]
          }
        ],
        "/api/": [
          {
            "text": "开发准备",
            "children": [
              "/api/getStart",
              "/api/callback",
              "/api/response",
              "/api/errorCode"
            ]
          },
          {
            "text": "接口列表",
            "children": [
              "/api/sync",
              "/api/auth",
              "/api/users",
              {
                "text": "组织架构",
                "children": [
                  "/api/organizations/employee",
                  "/api/organizations/org"
                ]
              },
              {
                "text": "媒体",
                "children": [
                  "/api/medias/query",
                  "/api/medias/vfs",
                  "/api/medias/translator"
                ]
              },
              {
                "text": "应用",
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
            "text": "应用主题",
            "children": [
              "/design-specification/theme"
            ]
          },
          {
            "text": "设计规范",
            "children": [
              "/design-specification/basic-principles",
              "/design-specification/visual-norms/style"
            ]
          },
          {
            "text": "设计资源",
            "children": [
              "/design-specification/resource-size"
            ]
          }
        ],
        "/dev-tools/": [
          {
            "text": "项目创建",
            "children": [
              "/dev-tools/scaffold"
            ]
          },
          {
            "text": "轻应用调试",
            "children": [
              "/dev-tools/debug",
              "/dev-tools/vconsole"
            ]
          },
          {
            "text": "开发工具",
            "children": [
              "/dev-tools/app"
            ]
          }
        ],
        "/qa/": [
          {
            "text": "轻应用",
            "children": [
              "/qa/light-app"
            ]
          },
          {
            "text": "JS-SDK",
            "children": [
              "/qa/js-sdk"
            ]
          }
        ]
      }
    }
  },
  "sidebarDepth": 2,
  "docsRepo": "WorkPlusFE/open.workplus.io",
  "docsDir": "docs",
  "docsBranch": "master",
  "editLink": false,
  "editLinkText": "帮助我们完善此文档",
  "lastUpdated": true,
  "lastUpdatedText": "上次编辑于",
  "contributors": false,
  "smoothScroll": false,
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
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
