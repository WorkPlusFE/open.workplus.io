# 添加内部应用

::: tip 阅读本文，你将了解：
* 如何在平台上发布应用及设置使用权限和入口等；
* 如何设置应用红点数字提醒、自定义头部等；

本文主要围绕上架`轻应用`来描述，其他类型应用在设置上也大同小异。
:::

登录管理后台，选择并进入对应的组织，然后点击`应用管理`菜单，从右上角的`添加`按钮，选择`内部应用`，即可进入创建内部应用的界面。

## 基本信息

如下图，带红星的字段表示必填，如果没有`应用分类`，点击`创建分类`进行创建即可。

![基本信息](/app/base1.png)

## 应用类型

当前支持上架的应用类型包括：`轻应用`、`服务号`及`原生应用`。
### 轻应用

H5 网页应用，也是 WorkPlus 移动平台上主要的应用类型，可通过 JS-SDK 调用原生能力，并支持多种自定义配置，是业务系统快速移动化的重要手段。

### 服务号

类似微信的“公众号”，属于应用的一种类型。创建该类型的应用，需要单独访问服务号“应用后台”进行配置，例如设置“关键字自动回复”，自定义“服务号菜单”等。

![服务号](/app/serverNo.png)

### 原生应用

在 WorkPlus 应用中心上架原生应用，大多设置跟轻应用类似，只是入口需要上传相应安装包或者指定某个系统级别应用。

更多说明，请查看[上架原生应用](/light-app/nativeApp.md)。

## 应用入口

如下图，创建应用时，需要直接填写“应用主入口”的信息，包括“名称”、“图标”和“启动地址”等。

![启动地址](/app/base2.png)

目前提供3个平台的设置，包括`苹果`、`安卓`及`PC客户端`，其中`苹果`和`安卓`的设置是一样，而`PC客户端`的相对少一些。以下是各字段的各端支持说明：

| 字段名 | 苹果 | 安卓 | PC 客户端 |
| - | - | - | - |
| 应用参数设置 | 支持 | 支持 | 支持 |
| 红点数字提醒源 | 支持 | 支持 | 支持 |
| 启动地址 | 支持 | 支持 | 支持 |
| 强制安装 | 支持 | 支持 | 支持 |
| 应用市场显示 | 支持 | 支持 | 支持 |
| 移动端离线资源包 | 支持 | 支持 | 不支持 |
| 离线包外部备用地址 | 支持 | 支持 | 不支持 |
| 显示风格 | 支持 | 支持 | 不支持 |
| 是否全屏 | 支持 | 支持 | 不支持 |
| 标题栏设置 | 支持 | 支持 | 不支持 |
| 进度条颜色 | 支持 | 支持 | 不支持 |
| 使用应用内嵌浏览器 | 不支持 | 不支持 | 支持 |

::: warning 提示
在较新版本，一些移动端独有的设置，统一归类到“移动端更多设置”上，可访问[移动端设置](/light-app/create.md#移动端设置)了解更多。
:::

### 红点数字提醒源

该设置，适用于需要做红点提示的应用，例如审批类的轻应用，支持显示`红点`、`数字`及`图标`，具体文档，请查看[应用红点](/light-app/notify.md)。

### 启动地址

顾名思义，就是轻应用的访问地址，通常都是`http(s)://`的访问方式。同时，入口支持传入参数占位符，当应用在客户端被打开时，客户端会自行填充参数。

```js
// 设置启动地址如下：
https://test-app.workplus.io?ticket={{ticket}}&language={{language}}

// 当应用启动时，ticket及language会根据当前用户信息及语言进行填充：
https://test-app.workplus.io?ticket=demo-ticket&language=en
```

支持的参数占位符包括以下属性：

| 字段名 | 说明 |
| - | - | 
| ticket | 用户ticket，常用于单点登录 | 
| user_id | 用户的 user_id | 
| org_id | 打开应用时，用户所在的组织id | 
| domain_id | 打开应用时，用户所在的域id |
| language | 应用的语言类型 |
| username | 用户的 username |  

::: tip 关于占位符
因为`PC客户端`默认使用下划线的命名方式设置参数的`key`值，具体原因可以查看[单点登录-获取用户信息](/light-app/sso.md#pc-客户端)，为了保持一致性，请统一使用下划线的`key`值，如：

::: v-pre
`?user_id={{user_id}}&domain_id={{domain_id}}`。

注意，是使用双花括号`{{ your key }}`包住需要的参数占位符。
:::

除了设置占位符来获取用户信息，通常为了避免缓存，上架新版本时，可以尝试在启动地址后加入版本信息参数，如下：

```js
https://test-app.workplus.io?v=1.2.0
```

::: tip 关于启动地址
首次创建应用，可以同时选择3个平台，安卓、苹果及 PC 客户端，但实际可以填写启动地址只有一处，那是因为创建应用实际也是创建快捷入口的一种，如果各端的访问地址不一样，需要创建应用后，再单独添加对应端的应用快捷入口。
:::

### 离线资源包

`离线资源包`设置是移动端特有，需要上传`zip`压缩包，并且需要设置相应的`启动地址`，具体说明，请查看[离线应用](/light-app/offline.md)。

## 移动端设置

点击“移动端更多设置”，即可展开该设置页面。相关设置主要提供移动端 WebView 头部自定义的能力。

![移动端设置](/app/mobile-more.png)

### 应用参数设置

注意，该参数设置，并非为常见的 URL 上的参数设置，而是作为应用实体的一个属性。通常用于应对特殊的情况，例如设置参数`vpn`为 1，即在启动应用之前，会开启 vpn。

::: tip 提示
该设置并非为通用设置，通常情况下，需要客户端进行定制。
:::

### 沉浸式

在一些门户级别，或者页面顶部有大图展示的应用，在“沉浸式”的模式下，表现力会更强。 

若想开启“沉浸式”头部，需要先勾选“全屏”设置。开启后，页面的可访问区域将会延伸到手机顶部，此时需要留意页面的安全区域问题。

> 系统版本低于 5.0 的安卓机型，不完全能支持“沉浸式”功能。

## 应用权限

应用权限设置，实际就是对应用角色的设置。如下图，共分为3个角色：

* 普通用户，即`使用范围`
* 管理员
* 超级管理员

通常开发轻应用，都需要设定`普通用户`及`管理员`的角色，通过平台提供的应用相关**API接口**，即可获取到应用对应的角色人员。

![使用范围](/app/base3.png)

## 创建应用入口

应用入口又名快捷入口，一个应用可以创建多个快捷入口，相关设置跟上面提到的`基本信息`及`启动地址`一致。

![创建应用入口](/app/base4.png)

## 消息模版

模版消息是一种特殊的消息类型，可以在管理后台进行可视化编辑，保存成功后，可以获得对应的`模板ID`。

![消息模版](/app/base5.png)

可以根据实际需求，设定不同的模版消息，具体使用方式，请查看[模板消息](/api/app/template.md)。

