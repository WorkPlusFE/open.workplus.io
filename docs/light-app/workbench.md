# 工作台

::: tip 阅读本文，你将了解：
* 所有卡片的总类和表现形式；
* 如何开发定制的离线 H5 卡片；
* 如何实现工作台的应用红点。
:::

## 什么是工作台

![工作台](/app/workbench-2.webp =400x)

“工作台”是 WokrPlus 移动平台上的一个比较重要的 Tab 栏目，通过卡片组合的方式来打造个性化的工作台。可根据不同人员的需求来定义工作台卡片，然后将卡片搭建成不同的工作台配置进行下发，实现“千人千面”。同时，在移动端上可对工作台进行管理和定制，并且支持离线 H5 卡片，应用红点提醒等。

::: warning 需要更高级别的定制？
此文档描述的“工作台”为原生应用开发的页面，需要通过约定好的方式进行配置和管理。

如果需要一个高度定制的工作台，我们推荐使用 H5 的模式进行整个工作台的页面开发，WorkPlus 支持将 Tab 绑定到访问指定的 H5 页面，并且支持沉浸式头部、离线资源包等。
:::

## 卡片类型

工作台当前支持以下卡片类型，它们的数据来源为：

::: details 查看所有卡片类型

| 卡片类型      | 基础定义来源 | 业务数据来源 |
| ------------- | ------------ | ------------ |
| 搜索卡片      | 后台         | 无           |
| Banner卡片    | 后台         | 后台         |
| 快捷入口卡片1 | 后台         | 第三方业务   |
| 快捷入口卡片2 | 后台         | 第三方业务   |
| 常用应用卡片  | 后台         | 无           |
| 列表卡片1     | 后台         | 第三方业务   |
| 列表卡片2     | 后台         | 第三方业务   |
| 新闻卡片1     | 后台         | 第三方业务   |
| 新闻卡片2     | 后台         | 第三方业务   |
| 新闻卡片3     | 后台         | 第三方业务   |
| 新闻卡片4     | 后台         | 第三方业务   |
| 分类卡片      | 后台         | 第三方业务   |
| 自定义卡片    | 后台         | 无           |

:::

## 常用卡片说明

### 1、搜索卡片

![搜索卡片](/widget/SEARCH.png =400x)

搜索卡片无第三方业务数据。

* 搜索卡片的的所有数据来源于后台，无需调用客户系统的数据；
* 大小固定；
* 搜索卡片包含搜索功能及右边的扫一扫功能，不可定制其它功能。

### 2、Banner卡片

![Banner卡片](/widget/BANNER.png =400x)

Banner卡片无第三方业务数据。

* 无需调用业务数据接口；
* 大小固定；
* Banner卡片的广告定义也在后台中进行定义；

### 3、常用应用卡片

![常用应用卡片](/widget/SHORTCUT.png =400x)

常用应用卡片无第三方业务数据。

* 常用应用卡片的逻辑是对应用的相关编辑；
* 无需调用业务数据接口；
* 大小固定；

### 4、快捷方式入口卡片

![快捷方式入口卡片1](/widget/SHORTCUT_1.png =400x)

![快捷方式入口卡片2](/widget/SHORTCUT_2_1.png =400x)

该卡片有两种风格。

* 是否显示标题，内容个数，样式由后台 API 决定及返回；
* 快捷方式支持红点显示规则（参见[应用红点](/light-app/notify.md))；
* 调用业务系统数据，渲染 UI。

**业务数据返回参考：**

<details>
<summary>点击查看业务数据详情</summary>

```js
{
  "status": 0,
  "message": "everything is ok",
  "result": {
    //卡片内容定义
    "items":[
      {
        //显示类型，文本或数字
        "show_type": "number",
        //数字值
        "number": "123",
        //标题
        "title": "待办",
        //事件类型
        "event_type": "Url",
        //点击事件值 
        "event_value": "http://www.baidu.com/todo",
        //红点请求配置
        "tip_url": "http://data/com/tip"
      },
      {
        "show_type": "icon",
        "icon_type": "Url",
        "icon_value": "http://icon.com/a.png",
        "title": "待办",
        "event_type": "Url",
        "event_value": "http://www.workplus.io/todo"
      }
    ]
  }
}
```
</details>

**字段说明：**

`items`元素说明：

每个`item`代表快捷方式中的一个显示内容：

|    属性       | 描述      |
| ----------- |  -------- |
| show_type   |  Icon：图标，number: 数字     |
| number      |  仅 show_type 为 number 时有效    |
| title       |  标题内容    |
| icon_type   |  图标类型，仅在 show_type 为 icon 时有效，值为 `Url`、`MediaId`、`Inner`   |
| icon_value  |  图标值，仅在 show_type 为 icon 时有效 |
| event_type  |  点击事件  |
| event_value |  事件值    |
| tip_url     |  红点规则 URL，客户端会从此 URL 请求红点的逻辑 |

### 5、列表卡片

![列表卡片1](/widget/LIST_1.png =400x)

![列表卡片2](/widget/LIST_2.png =400x)

该卡片有两种风格。

- 是否显示标题，内容个数，样式由后台 API 决定及返回；
- 调用业务系统数据，渲染 UI；

**业务数据返回参考：**

<details>
<summary>点击查看业务数据详情</summary>

```js
{
	"status": 0,
	"message": "everything is ok",
	"result": {
		//列表元素定义
		"items": [{
			//标题
			"title": "细数麦当劳那些'奇特'的餐",
			//时间
			"date_time": "2018-01-12",
			//来源
			"source": "消息来源",
			//事件类型
			"event_type": "Url",
			//事件值
			"event_value": "http://www.baidu.com/todo",
			//图片类型(列表卡片2才支持)
			"icon_type": "Url",
			//图片链接(列表卡片2才支持)
			"icon_value": "http://icon.com/a.png"
		}]
	}
}
```
</details>

**字段说明：** 

`items`元素说明：

|   属性       | 描述       |
| ----------- | ---------- |
| title       | 列表主内容 |
| datetime    | 时间值     |
| source      | 来源       |
| event_type  | 事件类型   |
| event_value | 事件值     |
| icon_type   | 图标类型，仅在 show_type 为 icon 时有效(列表卡片2才支持)，值为 `Url`、`MediaId`、`Inner`   |
| icon_value  | 图标值，仅在 show_type 为 icon 时有效(列表卡片2才支持)          |

### 6、新闻卡片

![新闻卡片1](/widget/NEWS_1.png =400x)

::: details 查看其他三种
![新闻卡片2](/widget/NEWS_2.png =400x)

![新闻卡片3](/widget/NEWS_3.png =400x)

![新闻卡片4](/widget/NEWS_4.png =400x)
:::

该卡片有四种风格。

**业务数据返回参考：**

<details>
<summary>点击查看业务数据详情</summary>

```js
{
  "status": 0,
  "message": "everything is ok",
  "result":{
    "items":[
      {
        //新闻主标题
        "title": "细数麦当劳那些'奇特'的餐",
        //新闻副标题
        "sub_title": "作为一个老牌的快餐企业，制作流程的标准化，规范化并不是其成功的唯一秘决",
        //时间
        "date_time": "2018-01-12",
        //来源
        "source": "消息来源",
        //事件类型
        "event_type": "Url",
        //事件值
        "event_value": "http://www.baidu.com/todo",
        //图片类型
        "icon_type": "Url",
        //图片链接
        "icon_value": "http://icon.com/a.png",
      }
    ]
  }
}
```
</details>

**字段说明：** 

`items`元素说明：

| 属性     | 描述       |
| ------ | ----- |
| title       |  新闻主标题 |
| sub_title   |   新闻子标题 |
| date_time   |   新闻时间   |
| source      |   新闻来源   |
| event_type  | 事件类型，值为 `Url`、`System` |
| event_value |  点击事件值 |
| icon_type   | 图标类型，值为 `Url`、`MediaId`、`Inner` |
| icon_value  |    图标值   |

### 7、分类卡片

![分类卡片](/widget/CATEGORY_1.png =400x)

> 分类卡片适用于组合多个列表数据

* 分类卡片本身无业务数据，来源于后台数据；
* 每个分类的内容才调用业务数据；
* 分类的内容支持`列表卡片`和`新闻卡片`，其返回数据参考前文。

### 8、自定义卡片

> 自定义卡片内容主要通过`H5页面`进行展示。

* 自定义卡片的数据来源于后台；
* 本身无业务内容。

**URL 参数说明：**

自定义卡片在初始化时，会加载 H5页面，但卡片本身无法提前知道卡片内容的高度等信息，允许通过以`URL参数`的形式来告知客户端，如下:

```js
http://xxxx.html?custom_height=300&custom_scale=0.5&open_with_out=true
```

|     属性        | 类型                  | 描述       |
| --------------------  | ------------------- | -------------------     | 
| custom_height   | 浮点型     | 自定义卡片高度      |
| custom_scale  | 浮点型      | 自定义卡片高度相对宽的比例 (传 scale 优选选用，与 height 互斥)|
| open_with_out   |布尔值     | 是否打开新的页面跳转链接   |

除了上述属性，同样支持带入其他参数，详情查看[参数支持](/light-app/workbench.md#参数支持)。

::: warning 关于自定义卡片
毫无疑问，自定义卡片是最灵活的，因为一切都通过`H5页面`进行展示，一个卡片就是一个`WebView`；但也因为该原因，会产生一些问题及约束：

* 性能不如原生卡片；
* 网络不稳定时，可能会导致卡片无法正常展示，白屏等；
* 卡片高度可能会存在偏差，导致卡片内容展示不完整；
* 不支持使用`js-sdk`能力；
* 不支持离线资源。
:::

## 参数支持

对于工作台中的任意 URL，用户可配置参数支持，以下为支持的参数：

|   字段              | 描述            | 
| ----------------- | --------------- | 
| <span v-pre>{{userId}}</span>        | 当前登录`用户ID` |
| <span v-pre>{{username}}</span>       | 当前登录`用户名` |
| <span v-pre>{{username/name}}</span>  | 用户名/中文名   |
| <span v-pre>{{domainId}}</span>         | 域ID |
| <span v-pre>{{orgCode}}</span>         | 当前`组织code`，也是`orgId` |
| <span v-pre>{{ticket}}</span>         | 临时`ticket`值  | 
| <span v-pre>{{language}}</span>       | 当前应用的语言版本，如`en`、`zh-CN`  | 

如：

```js
http://data.com?username={{username}}
// 会被替换成：
http://data.com?usename=foo
```

### 国际化

国际化通过参数支持，由返回内容自行国际化，返回不同语言数据。

### 红点规则 

对于支持红点的卡片类型（当前为快捷卡片），相关红点配置请参考[应用红点](/light-app/notify.md)。

## 系统行为值

当工作台中的`event_type`定义为`System`时，其点击行为，将会是 WorkPlus 内置的一些行为：

| 值            | 系统行为 | 描述 |
| ------------- | -------- | ---- |
| CREATE_GROUP  | 创建群聊 | 打开创建群聊的页面 |
| QRCODE_SCAN   | 扫一扫   |  打开应用的扫一扫页面   |
| BING_MESSAGE  | 必应消息 | 打开必应消息页面  |
| VOICE_MEETING | 语音视频 | 打开音视频功能  |
