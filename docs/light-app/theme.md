# 主题

WorkPlus 主题是基于[设计规范](/design-specification)落地实践的技术方案，支撑WorkPlus 应用在不同企业文化场景，提供Android、iOS、PC、html 全链路生态支持，轻松构建企业专属的应用程序。

::: tip
更进一步，我们支持基于主题的千变万化，节日主题，暗黑模式，千人千面，灰度发布等特性。
:::


## Android / iOS

移动端通过`主题包`的形似，来构建或者变换主题，主题包包含色值、字体、icon等展示元素信息。存在以下概念：

- **默认主题**

打包构建时，支持加入`主题包`，使移动端应用默认就打开显示。

- **远程主题**

通过远程服务器动态下发的`主题包`，具有以及范围以及时效性。

### 创建主题

登录管理后台，在`客户端管理`点击`主题换肤`，打开页面后点击`添加主题`即可进入创建主题界面。

<p style="text-align: left">
  <img :src="$withBase('/theme/list-theme.png')" alt="list-theme" width="80%">
</p>

<p style="text-align: left">
  <img :src="$withBase('/theme/new-theme.png')" alt="new-theme" width="80%">
</p>



### 主题包

#### 目录结构

#### icon

#### 字体

#### css 资源