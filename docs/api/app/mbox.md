# 应用消息

## 消息推送

```js
POST /v1/apps/mbox?access_token={access_token}&source_type={source_type}&for_all={for_all}
```
**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**Url请求参数：**

|字段|类型|是否必填| 说明                                                                                                                                                                                  |
|:----|:----|:----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|access_token|String|Y| 访问令牌                                                                                                                                                                                |
|direct|Boolean|N| direct = true时，消息直推推送，用于推送少量人员(400人以内)；只支持client_ids、usernames的推送；不支持范围scopes推送，不支持消息撤回<br/>direct = false时，消息队列推送，用于推送大范围人员；支持client_ids、usernames, scopes的推送；支持范围scopes推送，支持[消息撤回](#消息撤回) <br/>默认值: false |
|for_all|Boolean|N| 是否全员推送<br/>client_ids、usernames、scopes三者均为空,for_all=true时,才全员推消息；<br/>否则以范围参数为准[client_ids、usernames、scopes]<br/>默认值: false                                                         |


**请求参数：**

| 字段                          | 类型                 | 是否必填 | 说明                                                                                                                   |
|-----------------------------|--------------------|------|----------------------------------------------------------------------------------------------------------------------|
| source_type                 | String             | N    | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV                                                                                  |
| type                        | String             | Y    | 消息类型, text/iamge/file/video/article/template/rich_text                                                               |
| client_ids                  | List&lt;String&gt; | N    | 消息推送的用户标识                                                                                                            |
| scopes                      | List&lt;String&gt; | N    | 发送范围,组织路径,例如/122/234/                                                                                                |
| usernames                   | List&lt;String&gt; | N    | 用户账号列表                                                                                                               |
| platforms                   | List               | N    | 枚举,ANDROID/IOS/PC,默认值为IOS和ANDROID                                                                                    |
| body                        | Map                | Y    | 推送消息体                                                                                                                |
| body.at_all                 | boolean            | N    | 是否AT所有人员                                                                                                             |
| body.content                | String             | N    | 发送内容,具体根据消息类型决定                                                                                                      |
| body.is_gif                 | int                | N    | 是否gif图片,1代表是                                                                                                         |
| body.size                   | int                | N    | 大小                                                                                                                   |
| body.width                  | int                | N    | 图片宽度                                                                                                                 |
| body.height                 | int                | N    | 图片高度                                                                                                                 |
| body.media_id               | String             | N    | 发送的媒体ID                                                                                                              |
| body.path                   | String             | N    | 发送的媒体ID                                                                                                              |
| body.file_status            | int                | N    | 文件状态,0为正常                                                                                                            |
| body.name                   | String             | N    | 名称                                                                                                                   |
| body.articles.summary       | String             | N    | 文章摘要                                                                                                                 |
| body.articles.cover_url     | String             | N    | 封面URL 或 封面媒体Id                                                                                                       |
| body.articles.cover_enabled | boolean            | N    | 是否显示封面,true/false                                                                                                    |
| body.articles.create_time   | long               | N    | 创建时间                                                                                                                 |
| body.articles.title         | String             | N    | 文章标题                                                                                                                 |
| body.articles.url           | String             | N    | 图文详情内容,有些获取url内容,为空时,图文详情显示content内容                                                                                 |
| body.template_id            | String             | N    | 模板ID,模板消息必填                                                                                                          |
| body.data                   | Json               | N    | 模板数据,模板消息必填,value为变量值,color为颜色,font_size为字号大小.<br/>详情见下面模板消息示例                                                       |
| body.emphasis_keyword       | String             | N    | 高亮属性,保留字段                                                                                                            |
| body.top_color              | String             | N    | 顶部颜色                                                                                                                 |
| body.top_avatar             | String             | N    | 顶部图标                                                                                                                 |
| body.top_title              | String             | N    | 顶部标题                                                                                                                 |
| body.data.text_style        | String             | N    | normal(正常)bold(粗体)                                                                                                   |
| actions                     | Json               | N    | 消息按钮<br/>第一层数据代表的多少行按钮[目前最多5个]，<br/>第二层数据代表一行有多少个按钮[目前最多5个]<br/><br/>参考[按钮actions](/api/bot/response.html#按钮actions) 
| action_acl                  | Json               | N    | 按钮访问控制，参考[按钮访问控制action_acl](/api/bot/response.html#按钮访问控制action-acl)                                                 

**请求示例：**

```js
/v1/apps/mbox?access_token=b646339e2f4f4234af6bae5f72db9879
```

**文本示例：**

<details>
<summary>点击查看文本示例</summary>

| 字段           | 类型     | 必填 | 说明               |
|:-------------|:-------|:---|:-----------------|
| type         | String | Y  | 消息类型，文本消息值: text |
| body         | Map    | Y  | 推送消息体            |
| body.content | String | Y  | 消息内容             |

```json
{
  "type": "TEXT", 
  "body": {
    "at_all": false, 
    "content": "测试文本消息"
  }, 
  "client_ids": [
    "c24b6a94cfb14b79af12a1399edc9e31"
  ],
  "usernames": [
    "username1"
  ],
  "platforms": [
    "ANDROID","IOS","PC"
  ]
}
```

**文本消息显示效果：**

![text-message.png](/app/text-message.png)

**Curl示例：**

~~~
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
    "type": "text",
    "body":
    {
        "content": "测试文本消息"
    },
    "usernames":
    [
        "username1","username2"
    ]
}' \
 'https://替换成你的域名/v1/apps/mbox?access_token={替换成你的access_token}'
~~~
</details>

**图片示例：**

<details>
<summary>点击查看图片示例</summary>

| 字段            | 类型     | 必填 | 说明                 |
|:--------------|:-------|:---|:-------------------|
| type          | String | Y  | 消息类型, 文本消息值: image |
| body          | Map    | Y  | 推送消息体              |
| body.is_gif   | int    | N  | 是否gif图片,1代表是       |
| body.media_id | String | Y  | 发送的媒体ID            |
| body.size     | Int    | N  | 图片大小,默认值： 0        |
| body.height   | Int    | N  | 图片高度,默认值： 0        |
| body.width    | Int    | N  | 图片宽度,默认值： 0        |

```json
{
  "type": "IMAGE", 
  "body": {
    "is_gif": 0, 
    "size": 1852, 
    "width": 280, 
    "media_id": "Z3JvdXAxL00wMC8wMC80OC9yQkFCR1ZkaFI5Q0FjNmp2QUFBSFBIRkhXSkk1NDEuanBn", 
    "content": "图片内容,base64编码", 
    "height": 280
  }, 
  "client_ids": [
    "c24b6a94cfb14b79af12a1399edc9e31"
  ],
  "usernames": [
    "username1"
  ],
  "platforms": [
    "ANDROID","IOS","PC"
  ]
}
```

**图片消息显示效果：**

![image-message.png](/app/image-message.png)

**Curl示例：**
~~~
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "type": "IMAGE", 
  "body": {
    "is_gif": 0, 
    "size": 1852, 
    "width": 280, 
    "media_id": "Z3JvdXAxL00wMC8wMC80OC9yQkFCR1ZkaFI5Q0FjNmp2QUFBSFBIRkhXSkk1NDEuanBn", 
    "content": "图片内容,base64编码", 
    "height": 280
  }, 
  "usernames": [
    "username1","username2"
  ],
  "platforms": [
    "ANDROID","IOS","PC"
  ]
}' \
 'https://替换成你的域名/v1/apps/mbox?access_token={替换成你的access_token}'
~~~

</details>

**文件示例：**

<details>
<summary>点击查看文件示例</summary>

| 字段            | 类型     | 必填 | 说明               |
|:--------------|:-------|:---|:-----------------|
| type          | String | Y  | 消息类型,文本消息值: file |
| body          | Map    | Y  | 推送消息体            |
| body.name     | String | N  | 文件名              |
| body.media_id | String | Y  | 发送的媒体ID          |
| body.size     | Int    | N  | 图片大小,默认值： 0      |

```json
{
  "type": "FILE", 
  "body": {
    "size": 71416, 
    "name": "IMG_0778.GIF", 
    "media_id": "Z3JvdXAxL00wMC8wMC80Ny9yQkFCR1ZkaEdBZUFYRkxmQUFFVy1JYmNRbTgwNjkuZ2lm", 
  }, 
  "client_ids": [
    "c24b6a94cfb14b79af12a1399edc9e31"
  ],
  "platforms": [
    "ANDROID","IOS","PC"
  ]
}
```
</details>

**视频示例：**

<details>
<summary>点击查看视频示例</summary>

| 字段            | 类型     | 必填 | 说明                |
|:--------------|:-------|:---|:------------------|
| type          | String | Y  | 消息类型,视频消息值: video |
| body          | Map    | Y  | 推送消息体             |
| body.name     | String | N  | 视频文件名             |
| body.media_id | String | Y  | 视频的媒体ID           |
| body.size     | Int    | Y  | 视频大小,默认值： 0       |
| body.duration | Long   | Y  | 视频时间长，单位秒,默认值： 0  |
| body.content  | String | N  | 视频封面图转base64格式    |
| body.width    | Int    | N  | 视频长度,默认值： 0       |
| body.height   | Int    | N  | 视频宽度,默认值： 0       |

```json
{
  "type": "video",
  "body": {
    "content": "视频封面图二进制转base64格式,控制封面图大小在20KB以内",
    "height": "200",
    "width": "360",
    "media_id": "019c41539a7572baac03a1cd70dced9b",
    "size": 497226
  },
  "client_ids": [
    "c24b6a94cfb14b79af12a1399edc9e31"
  ],
  "platforms": [
    "ANDROID",
    "IOS",
    "PC"
  ]
}
```
</details>

**图文示例：**

<details>
<summary>点击查看图文示例</summary>


| 字段                          | 类型          | 必填 | 说明                                            |
|:----------------------------|:------------|:---|:----------------------------------------------|
| type                        | String      | Y  | 消息类型, 文本消息值: article                          |
| body                        | Map         | Y  | 推送消息体                                         |
| body.articles               | StringArray | Y  | articles数组为1时：代表单图文</br>articles数组为大于1时：代表多图文 |
| body.articles.summary       | String      | N  | 发送的媒体ID                                       |
| body.articles.cover_url     | String      | N  | 图文封面URL 或 封面媒体Id                              |
| body.articles.cover_enabled | Boolean     | N  | 是否显示封面,true/false                             |
| body.articles.title         | String      | Y  | 文章标题                                          |
| body.articles.url           | String      | Y  | 图文详情跳转链接                                      |

```json
{
  "type": "article",
  "body":
  {
    "articles":
    [
      {
        "summary": "防汛关键期来临——新技术+“老把式”，提升监测预警能力",
        "cover_enabled": false,
        "cover_url": "https://inews.gtimg.com/news_bt/OStKexVGk5VtT7QWWMjPT19ZIDIb8RdIL5EoftBx2N7XoAA/641",
        "create_time": 1465205632846,
        "author": "凯里",
        "title": "防汛关键期来临——新技术+“老把式”，提升监测预警能力",
        "url": "https://news.qq.com/rain/a/20250716A09MG100"
      },
      {
        "summary": "水利部：今年防汛关键期 黄河、海河等流域可能发生较大洪水",
        "cover_enabled": false,
        "cover_url": "https://inews.gtimg.com/om_bt/OHBplHUS5Th8LO1zbNqthZdvLoF2h7_-H0YsERdvO0bosAA/0",
        "create_time": 1465205632846,
        "author": "凯里",
        "title": "水利部：今年防汛关键期 黄河、海河等流域可能发生较大洪水",
        "url": "https://news.qq.com/rain/a/20250716A06TH500"
      }
    ]
  },
  "usernames":
  [
    "524064"
  ],
  "platforms":
  [
    "ANDROID",
    "IOS",
    "PC"
  ]
}
```
</details>

**模板消息--根据模板ID：**

<details>
<summary>点击查看模板消息示例</summary>

| 字段               | 类型     | 必填 | 说明                                                             |
|:-----------------|:-------|:---|:---------------------------------------------------------------|
| type             | String | Y  | 消息类型 ,文本消息值: image                                             |
| body             | Map    | Y  | 推送消息体                                                          |
| body.template_id | String | Y  | 模板消息ID                                                         |
| body.top_color   | String | N  | 顶部颜色                                                           |
| body.top_avatar  | String | N  | 顶部图标                                                           |
| body.top_title   | String | N  | 顶部标题                                                           |
| body.data        | Json   | N  | 模板数据,模板消息必填,value为变量值,color为颜色,font_size为字号大小.<br/>详情见下面模板消息示例 |

```json
{
  "type": "TEMPLATE", 
  "body": {
    "template_id": "152891af-1bec-4a18-8201-a58e08a7afad", 
    "top_color": "#00ff00",
    "top_avatar": "Z3JvdXAxL00wMC8wMC80MC9yQkFCR1ZkWDQ0ZUFRY21LQUFBZXVHZDBHS0U4MTkuanBn",
    "top_title": "流程大师",
    "data": [
      {
        "key": "keyword1", 
        "value": "339208499", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "normal"
      }, 
      {
        "key": "keyword2", 
        "value": "2016年01月05日", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "normal"
      }, 
      {
        "key": "keyword3", 
        "value": "830138013810", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "normal"
      }, 
      {
        "key": "keyword4", 
        "value": "8310380131", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "bold"
      }
    ],
    "emphasis_keyword": "keyword1.DATA"
  }, 
  "client_ids": [
    "a86e83a26be44eb59806901cc8be5d5c"
  ], 
  "platforms": [
    "ANDROID"
  ]
}
```

**模板消息设置：**

![template-template.png](/app/template-template.png)

**模版消息显示效果：**
![template-message.png](/app/template-message.png)

**Curl示例：**

~~~
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
    "type": "TEMPLATE",
    "body":
    {
        "template_id": "0196ec87c52376598999e17768c59e17",
        "top_color": "#ffff00",
        "top_avatar": "01971626be367cb3b57ac2313b07eb43",
        "top_title": "流程大师",
        "data":
        [
            {
                "key": "sn",
                "value": "339208499",
                "color": "#00ff00",
                "font_size": "14",
                "text_style": "normal"
            },
            {
                "key": "type",
                "value": "缴存业务",
                "color": "#00ff00",
                "font_size": "14",
                "text_style": "normal"
            },
            {
                "key": "data",
                "value": "2016年01月05日",
                "color": "#00ff00",
                "font_size": "12",
                "text_style": "normal"
            },
            {
                "key": "url",
                "value": "https://www.baidu.com",
                "color": "#00ff00",
                "font_size": "12",
                "text_style": "bold"
            }
        ]
    },
    "usernames": [
    "username1","username2"
  ],
  "platforms": [
    "ANDROID","IOS","PC"
  ]
}' \
 'https://替换成你的域名/v1/apps/mbox?access_token={替换成你的access_token}'
~~~
</details>

**富文本消息示例：**

<details>
<summary>点击查看富文本消息示例</summary>

| 字段 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| type | String | Y | 消息类型，富文本消息值：`RICH_TEXT` |
| body | Map | Y | 推送消息体 |
| body.content | String | Y | 富文本对象序列化后的 JSON 字符串，包含 `title` 和 `content` |

**body.content 格式：**

`body.content` 的类型为 String。先按下面的结构编辑富文本对象，再将整个对象序列化为 JSON 字符串，放入 `body.content`；发送 HTTP 请求时，再将完整请求体序列化为 JSON。

下面展示的是 `body.content` 字符串解析后的内容，便于修改：

```json
{
  "title": "这是富文本的标题",
  "content": [
    [
      {"tag": "text", "style": {"lineThrough": true, "bold": true, "italic": true, "color": "default"}, "text": "这是第一段文字\n"},
      {"user_id": "1fee2dd7a3ba457db5beb78b12ba10cf", "name": "张三", "tag": "at"},
      {"tag": "text", "text": " ", "style": {"lineThrough": false, "bold": false, "italic": false, "color": "default"}},
      {"user_id": "all", "name": "全部人员", "tag": "at"},
      {"style": {"lineThrough": false, "bold": false, "italic": false, "color": "default"}, "text": " \n", "tag": "text"},
      {"text": "百度一下", "tag": "a", "href": "https://www.baidu.com"},
      {"style": {"lineThrough": false, "bold": false, "italic": false, "color": "default"}, "text": " \n", "tag": "text"},
      {"style": {"lineThrough": false, "bold": false, "italic": false, "color": "blue"}, "text": "这是第二段文字蓝色的\n", "tag": "text"},
      {"style": {"lineThrough": false, "bold": false, "italic": false, "color": "red"}, "tag": "text", "text": "这是第三段文字红色的\n"},
      {"style": {"lineThrough": false, "bold": false, "italic": false, "color": "grey"}, "text": "这是第四段文字灰色的", "tag": "text"}
    ],
    [
      {"thumbnail_id": "c42b6543bc164f709bbbb066640bcf9b", "original_media_id": "3505e93f2831473ab9daf4c95e9fc951", "is_gif": false, "height": 1920, "width": 888, "size": 223563, "tag": "img", "media_id": "d42040947d644a1fbcecd2c3edd08bc6"}
    ]
  ]
}
```

**字段说明：**

以下字段均位于 `body.content` 字符串解析后的对象中。

| 字段 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| title | String | N | 富文本标题，替换为实际标题 |
| content | List&lt;List&lt;Map&gt;&gt; | Y | 二维数组，外层每个数组表示一个段落，内层按顺序存放该段落的元素 |
| tag | String | Y | 元素类型，本示例使用 `text`（文字）、`at`（@人员）、`a`（链接）、`img`（图片） |

**body.content 怎么修改：**

| 修改内容 | 对应字段 | 说明 |
|:---|:---|:---|
| 标题 | title | 修改为实际标题，例如“项目进度通知” |
| 文字 | text 元素的 text | 修改文字内容；换行可在对象中使用 `\n`，序列化后会自动转义 |
| 字体样式 | text 元素的 style | `bold` 为粗体，`italic` 为斜体，`lineThrough` 为删除线，`underline` 为下划线，值均为 Boolean；`style` 可省略 |
| 文字颜色 | text 元素的 style.color | 支持 `default`、`blue`、`red`、`grey`；`default` 根据客户端主题显示默认颜色 |
| @指定人员 | at 元素的 user_id、name | 分别填写实际用户 ID 和显示名称；`user_id` 与外层 `usernames` 的用户账号含义不同 |
| @全部人员 | at 元素的 user_id、name | `user_id` 填写 `all`，`name` 可填写“全部人员” |
| 超链接 | a 元素的 text、href | 分别填写链接显示文字和目标地址 |
| 图片 | img 元素的 media_id、width、height | 分别填写实际图片媒体 ID、宽度和高度，宽高单位为像素；图片须独占一个段落 |
| 图片补充信息 | img 元素的 thumbnail_id、original_media_id、is_gif、size | 缩略图和原图媒体 ID 按实际情况填写；`is_gif` 为 Boolean；`size` 为原图大小，单位字节，填写原图 ID 时须提供 |
| 新增或删除段落 | content 外层数组 | 添加或删除段落数组，段落内的元素按数组顺序展示 |
| 接收人 | 请求体的 usernames | 修改为实际接收账号；富文本中的 @元素不用于指定消息接收范围 |

**序列化示例：**

下面以修改标题和文字为例。包含 @人员、链接或图片时，同样先编辑上面的富文本对象，再序列化。

```javascript
const richText = {
  title: "项目进度通知",
  content: [
    [
      { tag: "text", text: "第一行内容\n第二行内容", style: { bold: true, color: "blue" } }
    ]
  ]
};

const request = {
  type: "RICH_TEXT",
  body: {
    content: JSON.stringify(richText)
  },
  usernames: ["ryan001"],
  platforms: ["ANDROID", "IOS", "PC"]
};

// 将结果作为 HTTP 请求体发送，Content-Type 为 application/json。
const requestBody = JSON.stringify(request);
```

使用 JSON 序列化工具会自动处理双引号、反斜杠和换行。完整请求中的 `\"` 是字符串内双引号的 JSON 转义，`\\n` 对应富文本中的换行；修改内容后重新序列化即可，无需手动拼接转义字符。

**完整请求示例：**

```json
{
  "type": "RICH_TEXT",
  "body": {
    "content": "{\"title\":\"这是富文本的标题\",\"content\":[[{\"tag\":\"text\",\"style\":{\"lineThrough\":true,\"bold\":true,\"italic\":true,\"color\":\"default\"},\"text\":\"这是第一段文字\\n\"},{\"user_id\":\"1fee2dd7a3ba457db5beb78b12ba10cf\",\"name\":\"张三\",\"tag\":\"at\"},{\"tag\":\"text\",\"text\":\" \",\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"default\"}},{\"user_id\":\"all\",\"name\":\"全部人员\",\"tag\":\"at\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"default\"},\"text\":\" \\n\",\"tag\":\"text\"},{\"text\":\"百度一下\",\"tag\":\"a\",\"href\":\"https://www.baidu.com\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"default\"},\"text\":\" \\n\",\"tag\":\"text\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"blue\"},\"text\":\"这是第二段文字蓝色的\\n\",\"tag\":\"text\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"red\"},\"tag\":\"text\",\"text\":\"这是第三段文字红色的\\n\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"grey\"},\"text\":\"这是第四段文字灰色的\",\"tag\":\"text\"}],[{\"thumbnail_id\":\"c42b6543bc164f709bbbb066640bcf9b\",\"original_media_id\":\"3505e93f2831473ab9daf4c95e9fc951\",\"is_gif\":false,\"height\":1920,\"width\":888,\"size\":223563,\"tag\":\"img\",\"media_id\":\"d42040947d644a1fbcecd2c3edd08bc6\"}]]}"
  },
  "usernames": [
    "ryan001"
  ],
  "platforms": [
    "ANDROID",
    "IOS",
    "PC"
  ]
}
```

更多元素类型及参数请参考[富文本消息](/api/app/richText.html)。

</details>

**返回数据：**

| 字段| 类型                 | 说明                       |
|---|--------------------|--------------------------|
| plan_id | String             | 推送计划ID，`direct=false`时用于消息撤回 |
| id | String             | 推送计划ID                   |
| app_id | String             | 推送应用ID                   |
| plan_time | Long               | 推送时间                     |
| recipients | List&lt;String&gt; | 消息推送的用户标识                |
| include_usernames | List&lt;String&gt; | 消息推送的用户名                 |
| exclude_usernames | List&lt;String&gt; | 消息未推送的用户名(用户不存在或不在使用范围)  |
| include_client_ids | List&lt;String&gt; | 消息推送的用户标识                |
| exclude_client_ids | List&lt;String&gt; | 消息未推送的用户标识(用户不存在或不在使用范围) |

**返回示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result":
  {
    "recipients":
    [
      "a673e99a034646dd9ee458fa1c08b87f"
    ],
    "plan_time": 1753493160759,
    "include_usernames":
    [
      "kf13"
    ],
    "id": "0198445643377e99a5c4d95e7044d61a",
    "exclude_client_ids":
    [],
    "app_id": "2777878f6bff481882d221df5b57139dA7Zork2YLw6DoYpn",
    "conversation_id": "5afc0ccbffca95eec7c1b128a0492d5bf8cf0e9d7c95ad94c80695c3d40d909de0db8b0fb4a0c8009bfc88a2968c7ff6407861a09b35e329acdabb8000162b06",
    "org_id": "b276533349664385b31181fa3455ef8c",
    "create_time": 1753493160759,
    "domain_id": "workplus",
    "include_client_ids":
    [],
    "plan_id": "0198445643377e99a5c4d95e7044d61a",
    "exclude_usernames":
    []
  }
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|
| 202012 |没有对应的雇员|没有对应的雇员|


**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|

## 消息撤回

```js
POST /v1/apps/mbox-recall
```

**说明：**

- **只有发送消息时设置 `direct=false`（消息队列推送）才支持撤回，`direct=true` 的直推消息不支持撤回。** `direct` 是消息推送接口的参数，调用撤回接口时无需再传。
- 使用消息推送接口返回的 `plan_id`（或同一次队列推送返回的 `id`）作为撤回参数。发送接口没有创建推送计划、返回 `dummy` 时，不支持撤回。
- 一次撤回整个推送计划，不支持指定部分接收人。
- 撤回为异步处理，接口返回成功表示已发起撤回，不表示所有客户端已完成消息移除。

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
|---|---|---|---|
| plan_id | String | Y | 需要撤回的推送计划ID，使用消息推送接口返回的 `plan_id` 或 `id` |

**请求示例：**

```json
{
  "plan_id": "0198445643377e99a5c4d95e7044d61a"
}
```

**Curl示例：**

~~~
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
    "plan_id": "0198445643377e99a5c4d95e7044d61a"
}' \
 'https://替换成你的域名/v1/apps/mbox-recall'
~~~

**返回数据：**

| 字段 | 类型 | 说明 |
|---|---|---|
| plan_id | String | 本次发起撤回的推送计划ID |

**返回示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "plan_id": "0198445643377e99a5c4d95e7044d61a"
  }
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 204302 |Message plan not found.|推送计划不存在，例如计划ID错误、计划已清理，或消息未创建推送计划|
| 204304 |Message plan cancelled.|推送计划已经取消，重复撤回时可能返回此错误|

业务错误可能仍使用HTTP 200返回，请同时检查返回数据中的 `status`，`status=0` 才表示本次请求成功。
