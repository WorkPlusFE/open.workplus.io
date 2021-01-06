# 前端工程化实践之团队代码规范

> [李文耀](https://github.com/lwy1010) / 2020-12-31

代码规范是软件工程领域经久不衰的话题，由于不同的开发人员有着不同的代码规范与风格的喜好，这在日常的团队协作开发项目中很暴露出一些问题：

- 代码的阅读性和维护性较差，比如有些代码两个空格缩进的，有些有却是四个；有些代码一行很长，需要左右拖动查看；单双引号混用；动态 require 导入模块等等...

- code review 效率不高，比如 review 提交的代码时，由代码风格导致的改动可能远多于实际代码功能的改动；协作成员无法直观地从 commit 历史中得到某次代码改动的概要信息等等...

- 新人在上手项目前要熟悉一些所谓的代码规范指南等等...

也许你有了解一些主流的代码规范指南或者将其应用到日常编码开发中了，但这些仅停留在字面上的或个人编辑器上的规范和风格显然远远不够，毕竟每个开发人员的水平、开发环境和自觉性参差不齐，所以一个前端团队理想的代码规范体系应该至少具备以下特性：

- 团队有统一的代码规范和风格（可以自定义或使用主流的规范和风格，统一就行了）

- 整个规范和风格统一的过程应该是自动化的（项目开发关注的应该是业务代码本身，代码规范作为辅助功能不应该增加开发者开发项目时的心智负担）

发现问题和确定好目标后就可以着手解决问题了，接下来就以 Vue.js 项目为例，一起看看借助已有的工具去统一前端项目代码的规范和风格的思路。

### 初始化项目 ESLint 配置

首先通过我们熟悉的`npx @vue/cli create hello-vue`命令来自定义初始化一个项目(Vue-Vouter + Vuex + Sass)：

<img :src="$withBase('/vue-cli-setup.png')" alt="vue项目自定义初始化">

在**Pick a linter/formatter config** 选项中，我们选择了 ESLint+Airbnb 的 JavaScript 代码规范，这里对两者进行说明一下[ESLint](https://eslint.org/docs/user-guide/getting-started) 是一个 JavaScript 代码质量检查和修复的工具，它提供一系列的[规则](https://eslint.org/docs/rules/)来约束 JavaScript 代码的规范。而 [Airbnb JavaScript 规范](https://github.com/airbnb/javascript)则是由 Airbnb 开源出来的一个 JavaScript 代码规范的 ESLint 规则集，这样我们就无需手动为项目配置 Eslint 规则项了，打开刚初始化的 Vue 项目下的.eslintrc.js 文件，你会发现：

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  // 这里扩展了vue官方和airbnb规范的规则集
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  // 你也可以在这里定义自己的eslint规则
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
```

刚才有说到 Eslint 是一个 JS 代码检查和修复的工具，那么怎么在编写代码是获得它的错误提示和修复的功能呢？以 VSCode 编辑器为例，安装 ESLint 插件并在编辑器设置 settings.json 添加以下配置：

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
```

这样在编写代码时就可以获得 ESLint 的错误提示和保存时根据规则来自动修复代码的功能了。

### StyleLint 配置

与 ESLint 类似，StyleLint 可以检查和修复 CSS/SCSS 等样式的代码，通过 [StyleLint](https://stylelint.io/) 提供的规则可以规范 CSS 代码的样式嵌套层级等等，同理，借助[stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines#readme)规范可以避免我们手动为项目配置 Sass 代码的规范。你可以通过下面的命令来为你的项目安装 StyleLint 和 stylelint-config-sass-guidelines 规范：

```bash
npm install -D stylelint stylelint-config-sass-guidelines
```

接下来在项目根目录创建一个名为.stylelintrc.json 的配置文件，内容如下：

```json
{
  "extends": "stylelint-config-sass-guidelines",
  "rules": {}
}
```

跟 ESLint 的操作类似，为编辑器安装 StyleLint 插件并在编辑器设置 settings.json 中添加下面的配置以获得 StyleLint 的错误提示和保存时根据规则来自动修复代码的功能：

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true
}
```

### Prettier 配置

ESlint 和 StyleLint 两者更专注代码质量规范的检查，而对于代码的格式风格的统一，我们可以选择[Prettier](https://prettier.io/docs/en/index.html)来实现，Prettier 可以很好地格式化 Vue、Javascript、SASS,JSX 等等格式的代码，你可以通过下面的命令来为你的项目安装 Prettier：

```bash
npm install -D --save-exact prettier
```

同理，Prettier 格式化功能也是可配置的，更多可供自定义的配置项可参考[Prettier Options](https://prettier.io/docs/en/options.html)。现在在项目根目录创建一个名为.prettierrc.json 的配置文件，内容如下：

```json
{
  "singleQuote": true
}
```

跟 EsLint 和 StyleLint 的操作类似，为编辑器安装 Prettier 插件并在编辑器设置 settings.json 添加下面的配置以获得保存时自动格式化代码的功能：

```json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

#### 处理 Prettier 与 Eslint、StyleLint 的冲突

通过 Eslint 和 StyleLint 的规则可以约束一些基本的代码风格，但这可能与 Prettier 格式化的结果互相冲突，所以要稍作配置以确保代码风格发生冲突时，Prettier 的格式化结果的优先级最高(代码风格的问题由 Prettier 统一)：

```bash
# 处理prettier与eslint的冲突
npm install -D eslint eslint-config-prettier
# 处理prettier与stylelint的冲突
npm install -D stylelint-config-prettier
# 将prettier作为eslint规则运行并将差异作为错误提示
npm install -D eslint-plugin-prettier
```

接下来更新你项目下.eslintrc.js 文件中 extends 字段的内容：

```js
extends: [
  'plugin:vue/vue3-essential',
  '@vue/airbnb',
  'plugin:prettier/recommended',
],
```

### 配合 Husky 与 Lint-staged 使用

经过上面的步骤中，我们很好地为项目配置 ESLint,StyleLint 和 Prettier，再配合编辑器对应的插件，在开发项目代码时效率和规范就提高一个级别，但我们似乎忽略了一个问题——如果某个协作成员所使用的编辑器没有配置好对应的插件呢？他会在毫不知情的情况下将不统一规范和风格的代码提交到代码仓库上！这显然让整个项目代码规范和风格的统一效果大打折扣，所以我们还得在提交代码时，使用 ESLint,StyleLint 和 Prettier 去修复和格式化一下本次提交的代码。[husky](https://github.com/typicode/husky#readme) 跟 [lint-staged](https://github.com/okonet/lint-staged#readme) 能很好地解决这个问题，Husky 可以为 Git 提供一些钩子(你可以类比为 Vue 的钩子函数)，而 Lint-staged 则可以对本次提交的代码执行一些操作，你可以通过下面的命令来安装它们：

```bash
npm install -D husky

npm install -D lint-staged
```

接下来在项目的 package.json 添加以下配置：

```json
"lint-staged": {
  "*.{ts,tsx,js,vue}": "eslint --fix",
  "*.{vue,css,scss}": "stylelint --fix",
  "*.{ts,tsx,js,vue,scss,md}": "prettier --write"
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
  }
},
```

上面的配置不难理解，在代码提交前(pre-commit)，执行 lint-staged 的下的操作(使用 ESLint,StyleLint,Prettier 修复或格式化 .js,.vue,.scss 等等格式的代码或文件，从而避免不符合规范和风格的代码提交到仓库上。

### 规范 Git commit 信息

到目前为止，项目代码的规范和风格已经统一了，而且这个统一的过程是自动化的，可以说相当的优雅了(手动狗头)，但还能做得更好吗？先看看[Vue.js](vue-git-commit-log)等一些仓库的 Git 提交的历史记录：

<img :src="$withBase('/vue-git-commit-log.png')" alt="vue-git-commit-log">

发现了什么了吗？它几乎所有的 commit 提交信息都类似于 xxx:yyyyyyyyyyy 的格式，而且你很容易从 commit 的历史记录中了解到某次 commit 中代码改动的概要，在团队协作开发的今天，这个细节上的规范统一也可以很好地提高协作的效率，你可以在[Angular Commit Style](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)或搜索 Git commit 规范来了解到对应的信息，这篇文章中我们会借助 [CommitLint](https://commitlint.js.org/#/) + [@commitlint/config-conventional]() 规范来统一约束项目的提交信息，是的，聪明的你应该想到接下来的操作跟 StyleLint + stylelint-config-sass-guidelines 的配置操作是类似的，通过下面的命令来安装 CommitLint + @commitlint/config-conventional:

```bash
# 安装
npm install --save-dev @commitlint/{cli,config-conventional}
# 通过命令的方式来为项目写入commitLint的配置文件
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

然后在更新根项目下 package.json 文件中的 husky 字段：

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

这样在提交代码时如果提交信息不符合 Angular Commit Style 的规范就不能提交到仓库，从而起到约束和统一 commit 信息的效果。

### 总结

以上通过一系列的工具配置，现在项目在开发到代码提交整个过程的都是规范统一且自动化的，这很好的解决了文章开头提及到的那些问题。类似的， React 项目或 Vue+TypeScript 的配置思路都跟上面大同小异，想更好地了解和使用那些工具，记得抽空过一遍对应的文档呀(毕竟上面使用到的东西只是那些工具的“冰山一角”)。同时整个配置的过程我已经整合成了一个 Vue 项目的基础模板—[vue-base-template](https://github.com/lwy1010/vue-base-template)，在配置过程中遇到问题的话可以参考一下或基于该模板进行项目开发。
