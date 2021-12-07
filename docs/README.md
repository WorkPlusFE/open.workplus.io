---
home: true
title: Home
heroImage: /home.png
heroText: WorkPlus 开放平台
tagline: 助力业务系统快速移动化
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
  - title: Themes
    details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
  - title: Plugins
    details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site. 
  - title: Bundlers
    details: Both Webpack and Vite are supported. Choose the one you like!
footer: ©2015-2021 深圳恒拓高科信息技术有限公司 版权所有  |  粤ICP备15040561号
---

### As Easy as 1, 2, 3

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
