export const themeData = {
  "version": "1.2.0",
  "logo": "/logo.png",
  "nav": [
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
  "sidebar": "auto",
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
