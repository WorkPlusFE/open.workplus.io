# 主题定制

::: warning 版本要求 
该功能需要升级 BeeWorks 到`v4.10.0`或更高版本。
:::

## 概述

BeeWorks 主题是基于设计规范落地实践的技术方案，支撑 BeeWorks 应用在不同企业文化场景，提供Android、iOS、PC、HTML 全链路生态支持，轻松构建企业专属的应用程序。

::: tip 提示
更进一步，我们支持基于主题的千变万化、节日主题、暗黑模式、千人千面、灰度发布等特性。
:::


## 创建主题

移动端通过`主题包`的形似，来构建或者变换主题，主题包包含色值、字体、icon 等展示元素信息。存在以下概念：

- **默认主题**

打包构建时，支持加入`主题包`，使移动端应用默认就打开显示。

- **远程主题**

通过远程服务器动态下发的`主题包`，具有范围以及时效性。

### 管理后台操作

登录管理后台，在`客户端管理`点击`主题换肤`：

![list-theme](/theme/list-theme.png)

打开页面后点击`添加主题`，即可进入创建主题界面：

![new-theme](/theme/new-theme.png)

### 主题包结构

主题包以`.zip`压缩包的形式存在，具体结构以及定义如下：

```bash
theme
├── img _(**Optional**)_
│   └──  w6s_skin_img_icon_*.png/jpg
├── theme.json
├── dark_theme.json _(**Optional**)_
├── font\_\*\_regular.ttf _(**Optional**)_
├── font\_\*\_bold.ttf _(**Optional**)_
├── native_iconfont.ttf _(**Optional**)_
├── native_iconfont.json _(**Optional**)_
├── web_iconfont.ttf _(**Optional**)_
├── web_iconfont.json  _(**Optional**)_
├── w6s_skin_theme.css
├── w6s_skin_dark_theme.css _(**Optional**)_
└── w6s_skin_common_theme.css _(**Optional**)_
```

- `img` 

用以存放主题的图片资源，命名格式为：w6s_skin_img_icon_*.png/jpg；

- `theme.json` 

主题包配置入口文件，用以定义主题名、版本、包含的色彩参数、字体及 iconfont 资源映射，详细介绍请查看 [theme.json 定义](#theme-json)；

- `dark_theme.json` 

主题包暗黑模式的配置文件；

- `font_*_regular.ttf` 

字体文件，常规类型；

- `font_*_bold.ttf` 

字体文件，粗体类型；

- `native_iconfont.ttf` 

原生使用的 iconfont 文件；

- `native_iconfont.json` 

原生使用的 iconfont 定义 json，包括 font_class、unicode 等；

- `web_iconfont.ttf` 

web 端使用的 iconfont 文件；

- `web_iconfont.json`

web 端使用的 iconfont 定义 json，包括 font_class、unicode 等；

- `w6s_skin_theme.css` 

H5 本地对接引入的 CSS 文件；

- `w6s_skin_dark_theme.css` 

**w6s_skin_theme.css** 暗黑模式对应的 CSS 文件；

- `w6s_skin_common_theme.css` 

**w6s_skin_theme.css**，**w6s_skin_dark_theme.css** 公共依赖的 CSS 文件。

::: tip 提示
以上涉及 iconfont 的数据，可通过工具或者[www.iconfont.cn](https://www.iconfont.cn/) 生成。
:::


### theme.json

```json
{
  "color": {  //按照"设计规范"色彩约定
    "primary": "#444444",
    "secondary": "#92A2BD",
    "accent0": "#FF9100",
    "accent1": "#C7C7C7",
    "primary_text": "#444444",
    "secondary_text": "#A3A3A3",
    "tertiary_text": "#666666",
    "common_text0": "#FFFFFF",
    "main_background": "#F2F3F4",
    "title_background": "#FFFFFF",
    "tabbar_background": "#FFFFFF",
    "nav_shadow": "#DDDDDD",
    "surface_background0_normal": "#FFFFFF",
    "surface_background0_pressed": "#F2F3F4",
    "surface_background1_normal": "#FFFFFF",
    "surface_background1_pressed": "#E4E5E6",
    "surface_background2_normal": "#F4F4F4",
    "common_background0": "#FFFFFF",
    "common_background1": "#EEEFEA",
    "common_divider0": "#D9D9D9",
    "icf_primary": "#444444",
    "status_bar_content": "dark",
    "button_background": "#444444",
    "popup_background": "#FFFFFF",
    "toast_background": "#000000",
    "tabbar_item_unselected": "#444444",
    "tabbar_item_selected": "#444444",
    "tabbar_item_text_unselected": "#A3A3A3",
    "tabbar_item_text_selected": "#444444",
    "particular": {
      "search_background": "#F4F4F4",
      "page_control_selected": "#444444",
      "page_control_unselected": "#C7C7C7",
      "watermark_text": "99E1E1E1"
    }
  },
  "font": {  //全局字体规范，覆盖全局文本控件
    "regular": {
      "resource": "BMWGroup_Cond_Regular.ttf",
      "name": "BMWGroupCondensed-Regular"
    },
    "bold": {
      "resource": "BMWGroup_Cond_Bold.ttf",
      "name": "BMWGroupCondensed-Bold"
    }
  },
  "iconfont": { //iconfont文件映射
    "native": {
      "resource": "native_iconfont.ttf",
      "definition": "native_iconfont.json"
    },
    "web": {
      "resource": "web_iconfont.ttf",
      "definition": "web_iconfont.json"

    }
  },
  "dark": { //是否支持开启暗黑模式
    "enable": true
  },
  "theme": "workplus", //主题名字
  "version": 123,  //主题版本号
  "timestamp": -1 
}
```

详细说明：

| 参数 | 说明| 备注 |
| - | ---- |  -- |
| color  | 按照设计规范色彩约定 | 必填 |
| font  | 全局字体规范，覆盖全局文本控件 |  选填 |
| iconfont  | iconfont文件映射, 我们推荐主题包按约定引入iconfont，以达到更好的展示效果跟灵活变换，具体参考[详细说明]| 选填 | 
| dark  | 暗黑模式配置，决定是否支持开启。若开启，则会显示`深色模式`设置项，操作路径：<br/>`关于->通用->深色模式`。当该配置项打开后，会优先使用当前使用的主题包里的 `dark_theme.json`，若主题包不存在该文件，则会依次降级匹配对应的`dark_theme.json` | 选填 |
| theme  | 主题包名称，例如: `新春版` | 必填 |
| version  | 主题包版本号，每次更新时必须+1，否则会无法生效 | 必填 |

::: tip 提示
iconfont 以及暗黑模式开启后，对应资源不存在时都会有对应的降级处理，也即按照优先级依次寻找对应需要的资源文件，优先级顺序如下：

`远程定制主题包 > 远程默认主题包 -> 构建时默认主题包`

一般情况下，默认主题包的`dark_theme.json`满足多数场景。
:::


### iconfont

iconfont 可译为图标字体，顾名思义就是用字体文件取代图片文件来展示图标、特殊字体等元素的一种方法。简单来说，iconfont 就是把多个图标文件打包为 ttf 字体文件，注册到系统中，app 可以像使用字体一样使用图标。

其原理可以简单理解为通过 ttf 字体文件维护一个 unicode 码与图形的映射关系。当使用 iconfont 为项目助力的时候，配置多个图标不再需要去下载数个 png 文件，仅需要维护一套 ttf 字体文件即可。iconfont 不仅具有矢量性、可自由变化大小的特点，而且支持任意改变颜色。从项目角度来看，由于无需针对不同手机分辨率内置多张图片，可以一定程度减小包体积，而且方便UI同学对图标进行统一管理，为无用 icon 和相似 icon 检测做基础。

BeeWorks 在 UI 一致性建设的过程中，已经陆续完成了 200+ 个 iconfont 的替换，去除了许多冗余的 icon。通过主题的介入，基于WorkPlus 平台建设的轻应用，我们也支持使用同一套 iconfont，达到全面 UI 一致的目标。

我们通过 [iconfont.cn](https://www.iconfont.cn/) 维护管理的部分 icon，如下：

![display-iconfont](/theme/display-iconfont.jpg)

## 使用主题

### 快速开始

BeeWorks 支持简单快捷的方式，让轻应用前端快速对接当前 BeeWorks 正在使用的主题，仅需要应用主题对应的 CSS 文件即可，CSS 文件里包含了`字体`、`色值`、`iconfont`等主题信息，当前支持`本地`以及`在线`的引入方式。

`本地`引入规则如下：

```js
<link rel="stylesheet" href="reslocal://open.beeworks.cn/w6s_skin_theme.css">
```

BeeWorks 移动端识别到规则后，会对应返回当前主题包内的 CSS 资源给到前端，无需任何网络交互。

::: warning 注意
目前`本地`方式在http部署的轻应用使用时，根据部署情况，在iOS 里可能会存在跨域问题，需要开发者关注处理，离线应用就不存在该问题。
<br/>
`在线`方式待后续提供，暂时需要开发者自行维护。
:::

### w6s\_skin\_theme.css

引入后，前端css包含如下内容👇

#### 色值

```css
:root {
  --primary: #333333;
  --secondary: #007AFF;
  --accent0: #FF3B30;
  --accent1: #333333;
  --primary-text: #333333;
  --secondary-text: #666666;
  --tertiary-text: #333333;
  --common-text0: #FFFFFF;
  --main-background: #F5F5F5;
  --title-background: #FFFFFF;
  --tabbar-background: #FFFFFF;
  --nav-shadow: #DDDDDD;
  --surface-background0-normal: #FFFFFF;
  --surface-background0-pressed: #E4E5E6;
  --surface-background1-normal: #FFFFFF;
  --surface-background1-pressed: #E4E5E6;
  --surface-background2-normal: #F5F5F5;
  --common-background0: #FFFFFF;
  --common-background1: #F5F5F5;
  --common-divider0: #0C000000;
  --icf-primary: #333333;
  --button-background: #007AFF;
  --popup-background: #FFFFFF;
  --toast-background: #333333;
  --tabbar-item-unselected: #333333;
  --tabbar-item-selected: #007AFF;
  --tabbar-item-text-unselected: #333333;
  --tabbar-item-text-selected: #F12525;
  --search-background: #F5F5F5;
  --page-control-selected: #007AFF;
  --page-control-unselected: #F5F5F5;
}
```

CSS 变量对应的值具体以当前使用主题为准，以上仅提供参考，具体定义严格遵守 [设计规范-视觉规范](/design-specification/visual-norms/style.md)。

#### 字体

``` css
@font-face {
  font-family: "hcbm";
  src: url('data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAG7UABIAAAAA2Aw...QwAAAA==') format('woff2');
  src: url('hcbm_Regular.ttf') format('truetype');
  font-weight: normal;
}
```

#### iconfont
``` css 
.skin_icf {
  font-family: "skin_icf" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon_skin_icf_friendship_friend:before {
  content: "\e6c9";
}

.icon_skin_icf_friendship_star:before {
  content: "\e6ca";
}

.icon_skin_icf_session_remind:before {
  content: "\e6c8";
}

.icon_skin_icf_common_mac:before {
  content: "\e6bf";
}

...
```

### 暗黑模式

前端引入 CSS 后，相关色值 CSS 变量就自然支持暗黑模式了。BeeWorks 会在进入暗黑模式后，对应把色值变量无感知修改掉。

例如: 

<div style="display: flex">
  <div style="display: flex; ">
      <div style="background:#F5F5F5;width: 30px; height: 30px; "></div>
      <div style="line-height:30px; padding-left:10px">  --main-background: #F5F5F5 &nbsp;&nbsp;&nbsp; 替换为 &nbsp;&nbsp;&nbsp;</div>
  </div>
  
  <div style="display: flex; ">
    <div style="background:#000000;width: 30px; height: 30px;"></div>
    <div style="line-height:30px; padding-left:10px">  --main-background: #000000</div>
  </div>
</div>


<br/><br/>
对于不需要暗黑模式的轻应用，可以增加`dark=disabled`来禁止掉，如下：


```js
<link rel="stylesheet" href="reslocal://open.beeworks.cn/w6s_skin_theme.css?dark=disabled">
```


支持参数:

| 参数 | 说明| 备注|
| - | - | - |
| dark=auto  | 自动匹配上当前使用的皮肤，也即如果当前用着暗黑模式，那就直接返回暗黑对应的w6s_skin_theme.css，否则，就正常的 w6s\_skin\_theme.css | 默认为auto |
| dark=disabled  | 禁止使用暗黑模式，直接返回 w6s\_skin\_theme.css | |
| dark=forced表示  | 强制使用暗黑模式，直接返回 w6s\_skin\_dark\_theme.css |  |


### 更多支持

更多特性正在开发中，敬请期待！

<!-- 如支持通过`@media (prefers-color-scheme: dark) `语法支持暗黑，让轻应用哪怕脱离了WorkPlus 平台，也能继续支持暗黑模式。 -->


