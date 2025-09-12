# 响应消息

业务方机器人在收到 BeeWorks 回调后，可以根据回调的类型或内容，以及业务需求执行不同的消息接口进行响应。最终实现与用户之间的消息对话式互动。

## 消息接口

大致的可响应消息的场景有以下：

1. [发送新消息](#发送新消息)：有新内容需要通知用户，发送新的机器人消息到聊天会话；
2. [回复消息](#回复消息)：回复用户在聊天会话中发送的机器人指令或@机器人的消息；
3. [更新消息](#更新消息)：响应用户操作，更新历史机器人消息的内容或按钮状态；
4. [响应订阅回调](#响应订阅回调)：机器人加入或离开群聊时，发送加入或离开的描述消息。

下面将介绍各场景对应的接口。

### 发送新消息

如下图，假如该用户有“新的待办”，机器人可以主动向其推送一条待办消息。

![bot-new-message](/bot/bot-new-message.png =260x)

接口说明：

```Text
POST: /v1/bots/messages?access_token={access_token}
```

提交参数请参考[消息示例](#消息示例)。

### 回复消息

如下图所示：消息就引用了客户端发送的"/我的待阅"这条消息。

![bot-reply-message](/bot/bot-reply-message.png =260x)

接口说明：

```Text
POST: /v1/bots/messages/{message_id}/reply?access_token={access_token}
```

客户端收到后，会以新消息展示，并引用 message_id 所对应的消息；此接口只能回复30天内的消息(message_id 对应的消息)。

参数说明：

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| message_id | String | Y | 取回调时传给第三方业务系统的消息id

提交参数请参考[消息示例](#消息示例)。

### 更新消息

机器人消息更新：指用户操作消息按钮后，BeeWorks 向业务方提交用户操作数据的交互。业务方可以根据收到用户提交的信息，请求更新消息内容，及时对用户的交互行为进行反馈。

假如有一个可交互的消息示例如下：

![bot-update-1](/bot/bot-update-1.png =200x)

用户点击 [同意] 按钮后，客户端会把当前消息更新，如下图所示：

![bot-update-2](/bot/bot-update-2.png =200x)

接口说明：

```Text
POST: /v1/bots/messages/{message_id}?access_token={access_token}
```

只能更新发送方是当前机器人的30天内的消息，接口成功后客户端会更新 message_id 指定的消息。

参数说明：

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| message_id | String | Y | 取回调时传给第三方业务系统的消息id

提交参数请参考[消息示例](#消息示例)。

### 响应订阅回调

业务方在 BeeWorks 平台订阅事件后，平台会在事件发生时（例如:机器人入群）向业务方回调 URL 推送消息，开发者可以根据事件回传消息。

事件订阅支持：**机器人进群**、**机器人被移出群聊**；

![bot-in-out](/bot/bot-in-out.png =260x)

如上图两条消息，分别代表机器人入群、退群后业务方响应的消息。

业务方可以用如下接口响应订阅回调：

接口说明：

```Text
POST: /v1/bots/subscribe-message?access_token={access_token}
```

> 请在收到 BeeWorks 订阅回调后，120秒内响应。

提交参数请参考[消息示例](#消息示例)。


## 消息示例

下面的 Json 是机器人推送的一条带按钮的富文件消息，格式如下：

```Json
{
  "conversation_id": "849e9766b94e00ce8736ff561edba9a297a09a1a3e36ff0e0814c0eb7de35f946eb3765aeaa8e55366afdacf4e51a6e592fd944acf48f61404e9e9ac45b7927d",
  "subscribe_id": "订阅id",
  "type": "rich_text",
  "user_ids":
  [
    "87c67a711e5843bbbd53ba3266fc2fba",
    "4fd9a6919b59407eb34b391c05a0e0fa",
    "e5aeec56d8814d7e91ac8f447925b3df",
    "b2668ab78bdc4cf59f9d11ea9cd1362c"
  ],
  "usernames":
  [
    "username1",
    "username2"
  ],
  "body":
  {
    "content": "{\"content\":[[{\"width\":420,\"media_id\":\"http://172.16.1.23/rich/images/notify.png\",\"tag\":\"img\",\"height\":280}],[{\"style\":{\"color\":\"black\",\"bold\":true},\"tag\":\"text\",\"text\":\"黄赐飞\"},{\"tag\":\"text\",\"text\":\"的\"},{\"style\":{\"color\":\"black\",\"bold\":true},\"tag\":\"text\",\"text\":\"《测试机器人》\"},{\"tag\":\"text\",\"text\":\"待办，已处理成功\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"发起时间\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"2024-01-12 17:42:32\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"单行输入框\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"给一个默认值吧\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"多行输入框\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框非子表单的多行输入框\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"数字\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"5\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"金额\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"20 元\"}],[{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"日期\"},{\"style\":{\"color\":\"grey\"},\"tag\":\"text\",\"text\":\"：\"},{\"tag\":\"text\",\"text\":\"2024-01-12\"}]],\"title\":\"审批完成\"}",
    "summary": "审批完成",
    "format": "rich_text"
  },
  "actions":
  [
    [
      {
        "name": "查看详情",
        "values":
        {},
        "url":
        {
          "pc": "http://172.16.1.23/pc/#!/detail?id=270092&taskId=&type=Normal&referer=robot&ticket={{ticket}}&userId={{userId}}&orgCode={{orgCode}}&domainId={{domainId}}",
          "android": "http://172.16.1.23/mobile/detail.html?id=270092&taskId=&type=Normal&operationType=Approved&referer=robot",
          "ios": "http://172.16.1.23/mobile/detail.html?id=270092&taskId=&type=Normal&operationType=Approved&referer=robot"
      },
        "type": "button"
      },
      {
        "name": "列表",
        "values":
        {},
        "url":
        {
          "pc": "http://172.16.1.23/pc/#!/IM?&imType=Approved&ticket={{ticket}}&userId={{userId}}&orgCode={{orgCode}}&domainId={{domainId}}",
          "android": "http://172.16.1.23/mobile/index_IM.html?&imType=Approved",
          "ios": "http://172.16.1.23/mobile/index_IM.html?&imType=Approved"
        },
        "type": "button"
      }
    ]
  ],
  "action_acl":
  {
    "visible":
    [
      "b2668ab78bdc4cf59f9d11ea9cd1362c"
    ],
    "invisible":
    [
      "87c67a711e5843bbbd53ba3266fc2fba",
      "4fd9a6919b59407eb34b391c05a0e0fa",
      "e5aeec56d8814d7e91ac8f447925b3df"
    ],
    "allows":
    [
      "b2668ab78bdc4cf59f9d11ea9cd1362c"
    ],
    "denies":
    [
      "87c67a711e5843bbbd53ba3266fc2fba",
      "4fd9a6919b59407eb34b391c05a0e0fa",
      "e5aeec56d8814d7e91ac8f447925b3df"
    ],
    "deny_alert": "你不能操作别人的消息"
  }
}
```

客户端收到后展示效果见下图：

![bot-response](/bot/bot-response.png =260x)

### 参数说明

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| conversation_id | String | Y | 会话是指用户与用户、用户与群组、用户与应用(机器人)的对话交流过程；<br/> 每个会话都有唯一的会话 ID[conversation_id]，BeeWorks 回调  Url 时，会把会话 ID 传给业务方。
| subscribe_id | String | N | 订阅id，当调用[订阅接口](#响应订阅回调)时必填；<br/>BeeWorks 回调 Url 时，会把会话 ID 传给业务方。
| type | String | Y | 消息类型：text/image/voice/video/file/template/rich_text
| body | String | Y | 消息体，参考[body参数说明](#body参数说明)
| usernames | Array | N | 如果有值，则会发给会话的指定成员，<br/> - 群聊：会发给指定群成员<br/> - 单聊：可以发给单聊任何一方<br/><br/>如果没值，则发给会话所有人
| user_ids | Array | N | 如果有值，则会发给会话的指定成员，<br/> - 群聊：会发给指定群成员<br/> - 单聊：可以发给单聊任何一方<br/><br/>如果没值，则发给会话所有人
| actions | Json | N | 消息按钮<br/>第一层数据代表的多少行按钮[目前最多5个]，<br/>第二层数据代表一行有多少个按钮[目前最多5个]<br/><br/>参考[按钮actions](#按钮actions)
| action_acl | Json | N | 按钮访问控制，参考[按钮访问控制action_acl](#按钮访问控制action_acl)


#### body参数说明

文本消息: [type=text]

```Json
{
  "content": "123456" #文本消息内容
}
```

语音消息：[type=voice]

```Json
{
  "duration": 2, #语音时长
  "media_id": "2894603e9e61422e8ea1ba26dc415b55", #语音媒体ID
  "media_domain": "workplus" #域ID
}
```

文件消息：[type=file]

```Json
{
  "name": "IMG_1933.HEIC", #文件名
  "size": 691882, #文件大小[字节]
  "media_id": "eca2a97ac2a547e8bc61884ead91fd8c", #文件媒体ID
  "media_domain": "workplus" #域ID
}
```

图片消息：[type=image]

```Json
{
  "is_gif": false, #是滞GIF格式
  "height": 1280, #图文高
  "media_domain": "workplus", #域ID
  "media_id": "f2627421b3e54f64a2b973aa55270c90", #图片媒体ID
  "width": 959, #图片宽
  "size": 116755, #图片大小[字节]
  "thumbnail_id": "d18c73017c944152b35fd3ad4288cab2" #缩略图媒体ID
}
```

视频消息：[type=video]

```Json
{
  "duration": 2, #视频时长
  "size": 563948, #视频大小[字节]
  "height": 0, #视频高
  "media_domain": "workplus", #域ID
  "media_id": "4028ec49c54142d8a18f35bea3196c2d", #视频媒体ID
  "width": 0 #视频宽
}
```

富文本消息：[type=rich_text]

```Json
{
  "content": "{\"content\":[[{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"default\"},\"text\":\"这是富文本内容😊\",\"tag\":\"text\"}]],\"title\":\"这是富文本\"}",
  "summary": "这是富文本内容😊",
  "format": "rich_text"
}
```

### 按钮actions

最多支持5x5的按钮(即一行5个按钮，共5行)

```Json
{
  "actions": [ # 第一层数据代表的多少行按钮[目前最多5个]，第二层数据代表一行有多少个按钮[目前最多5个]
    [
      {
        "name": "name", #必填
        "en_name": "en_name", 
        "tw_name": "tw_name", 
        "action":"action" #非必填，如果有值会透传给机器人应用
        "values": {
          "key" : "value"
        },  #非必填，如果有值会透传给机器人应用
        "url" : { #非必填
          "url":"",
          "android":"",
          "ios":"",
          "pc":""
        }, #跳转url          
        "icon": "", #图标
        "style" :"", #样式，保留字段
        "type" : "button" #暂时为固定值button
      }
    ]，
    [
      {
        "name": "name", #必填
        "en_name": "en_name", 
        "tw_name": "tw_name", 
        "action":"action" #非必填，如果有值会透传给机器人应用
        "values": {
          "key" : "value"
        },  #非必填，如果有值会透传给机器人应用
        "url" : { #非必填
          "url":"",
          "android":"",
          "ios":"",
          "pc":""
        }, #跳转url          
        "icon": "", #图标
        "style" :"", #样式，保留字段
        "type" : "button" #暂时为固定值button
      }
    ]
  ]
}
```

#### action参数说明

|字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| name | String | Y | 按钮中文名
| en_name | String | N | 按钮英文名
| tw_Name | String | N | 按钮繁体名
| action | String | N | 按钮指令，如果有值，客户端在点击按钮后，后台会将此值透传给第三方业务系统
| values | Map | N | 如果有值，客户端在点击按钮后，后台会将此值透传给第三方业务系统
| url | Map | N | 如果有值，客户端在点击按钮后, 会直接跳转到 url，action 和 url 都有值时，优先响应 url<br/><br/>更多说明请查阅[url参数说明](#url参数说明)
| icon | String | N | 按钮图标，支持完整图标链接地址及媒体Id（需提前上传）
| style | String | N | 按钮样式，保留字段，暂时无须提交
| type | String | N | 按钮类型，保留字段，暂时无须提交

#### url参数说明

为了让链接配置更加灵活，可以给对应平台设置特定的链接地址。

| 字段 | 类型 | 是否必填 | 说明 | 
| - | - | - | - |
| android | String | N | 安卓 URL
| ios | String | N | IOS URL
| pc | String | N | PC URL
| url | String | N | 通用URL, 客户端在无对应平台的 URL 值时会读取此参数


### 按钮访问控制action_acl

用于控制按钮的可见性和可操作性，支持`用户id[user_id]`和`用户名[username]`两种。

此外，优先响应黑名单，再响应白名单，黑名单或白名单为空代都表不限制。

```Json
{
  "action_acl": { #非必填
    "visible": ["a","b"], #显示白名单，谁能看见菜单
    "invisible": ["a","b"], #显示黑名单，谁不能看见菜单
    "allows": ["a","b"], #操作白名单，谁能操作菜单
    "denies": ["a","b"], #操作黑名单，谁不能操作菜单
    "deny_alert": "你没有权限操作"
  }
}
```

#### action_acl参数说明

| 字段 | 类型 | 是否必填 | 说明
| - | - | - | -
| visible | Array | N | 显示白名单，谁能看见菜单，支持用户名[username] 或 用户id[user_id]
| invisible | Array | N | 显示黑名单，谁不能看见菜单，支持用户名[username] 或 用户id[user_id]
| allows | Array | N | 操作白名单，谁能操作菜单，支持用户名[username] 或 用户id[user_id]
| denies | Array | N | 操作黑名单，谁不能操作菜单，支持用户名[username] 或 用户id[user_id]
| deny_alert | String | N | 无权限操作提示语，用于用户没有权限操作时，自定义提示语


