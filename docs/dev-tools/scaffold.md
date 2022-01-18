# 项目脚手架


WorkPlus 提供`@w6s/cli`工具，用于快速创建项目初始架构。

## 安装 cli

通过以下命令进行安装：

```bash
yarn global add @w6s/cli
# or
npm install -g @w6s/cli
```

安装成功后，在 shell 中键入`w6s`，即可查看所有功能说明。

## w6s init

当前`w6s-cli`内置两个项目模版，分别是`admin`和`H5`，如其名，admin 为管理后台类型的前端项目模版，而 H5 就是轻应用的前端项目模版。

假设当前在文件目录A， 执行以下命令：

```bash
w6s init project1
```

此时，会要求使用者选择项目模版，通过`上下方向键`选择需要的模版即可。

选择模版后，cli 会自动在 A 目录下创建 project1 文件夹，并把所选的项目模版生成到 project1 文件夹内，在这之前会有一些人机交互，使用者需要输入一些简单的项目信息：

```bash
? 请输入项目名称 project1
? 请输入项目描述 project1
? 请输入项目创建者 hejx
```

项目创建完毕后，会询问是否自动安装依赖及启动服务，然后输入`yes/no`即可。cli 会自动判断你的电脑上所安装的`Node.js包管理器`，优先会使用`Yarn`进行依赖的安装。

如果没有选择自动安装依赖及启动服务，需要进入 project1 文件夹，执行以下命令：

```bash
# 进入目录
cd project1

# 安装依赖
yarn

# 安装成功后，启动服务
yarn serve # yarn dev 同样可用
```

## 技术栈

核心技术栈：

* [vue@2.6.11](https://vuejs.org/)
* vue-router@3.1.6
* vuex@3.1.3"
* vue-i18n@8.17.5
* typescript@3.8.3
* axios@0.19.2
* vue-class-component@7.2.3
* vue-property-decorator@8.4.1
* vuex-module-decorators@0.17.0

UI库：

* `admin` [element-ui@2.9.2](https://element.eleme.cn/#/zh-CN)
* `H5` [vant@2.8.1](https://youzan.github.io/vant-weapp/#/intro)

样式：

* [Sass@1.32.8](https://github.com/sass/dart-sass)

::: tip 关于 Dart Sass
从`w6s-cli@2.3.0`版本开始，`node-sass`被移除，转而使用性能更好、安装对环境依赖更少的`dart-sass`。

相关知识点，请查看下方链接：

* [Wht Dart?](https://sass-lang.com/blog/announcing-dart-sass#why-dart)
* [Node Sass to Dart Sass](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/sass.html#node-sass-to-dart-sass)
:::

其他：

* core-js@3.6.5
* @sentry
  * browser@5.15.5
  * integrations@5.15.5
* @w6s
  * sdk
## 目录说明

以`H5`模版为例，当前项目文件结构如下：

```bash
.
├── README.md
├── babel.config.js            --- babel 配置文件
├── commitlint.config.js       --- commitlint 配置文件
├── mock                       --- 模拟 api，mock 服务
│   └── index.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── sentry.config.js           --- sentry 配置
├── src
│   ├── App.vue
│   ├── api                    --- api 目录
│   │   └── user.ts
│   ├── assets                 --- 放置静态资源
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── i18n.ts                --- 国际化配置入口
│   ├── locales                --- 国际化文件存放位置
│   │   └── zh-CN.json
│   ├── main.ts
│   ├── router                 --- 路由配置
│   │   └── index.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store                  --- vuex 配置
│   │   ├── index.ts
│   │   └── modules
│   │       └── Counter.ts
│   ├── styles
│   │   └── index.scss
│   ├── typings
│   │   └── Common.ts
│   ├── utils
│   │   ├── cordova            --- cordova 相关，引入了 @w6s/codash
│   │   │   └── index.ts
│   │   ├── http               --- http 相关，封装了一些 api 请求方法
│   │   │   └── https.ts
│   │   └── sentry             --- sentry 模块的设置
│   │       └── index.ts
│   └── views                  --- 页面
│       ├── About.vue
│       └── Home.vue
├── stylelint.config.js        --- stylelint 配置
├── tsconfig.json              --- typescript 配置
├── w6s.config.js              --- w6s-cli-script 配置（详情请看 w6s.config.js 栏目）
├── .browserslistrc            --- babel 转换的目标浏览器版本配置文件
├── .editorconfig              --- ide 的一些默认配置，例如缩进为2个空格
├── .env                       --- 环境配置文件（生产配置）
├── .env.development           --- 环境配置文件（开发配置）
└── .eslintrc                  --- eslint 的配置文件
```

## scripts 命令说明

具体可用命令，请在项目的根目录查看`package.json`的`scripts`标签，以下做简单的作用描述：

* `dev` -- 启动服务，用于项目开发
* `serve` -- 同上
* `build` -- 对项目进行打包
* `lint` -- js 代码检测
* `lint:style` -- 样式检测
* `i18n:report` -- 检测 i18n 的配置是否有缺漏或者存在没被使用的属性
* `inspect` -- 打印出项目的 webpack 配置
* `svg` -- 通过`vue-svgicon`，把 svg 图标生成 vue 控件
