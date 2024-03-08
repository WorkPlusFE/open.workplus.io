# 富文本消息

::: tip 注意
- 富文本可以在一条消息中同时支持文字、At、图片、超链接等元素；
- 一个富文本可分多个段落（由多个[]组成），每个段落可由多个元素组成，每个元素由tag和相应的字段描述组成；
- 图片元素必须是独立的一个段落。
::: 

## 消息示例

<details>
<summary>点击查看示例</summary>

```JSON
{
  "title": "这是富文本的标题",
  "content": [
    [
      {
        "tag": "text",
        "style": {
          "lineThrough": true,
          "bold": true,
          "italic": true,
          "color": "default"
        },
        "text": "这是第一段文字\n"
      },
      {
        "user_id": "1fee2dd7a3ba457db5beb78b12ba10cf",
        "name": "张三",
        "tag": "at"
      },
      {
        "tag": "text",
        "text": " ",
        "style": {
          "lineThrough": false,
          "bold": false,
          "italic": false,
          "color": "default"
        }
      },
      {
        "user_id": "all",
        "name": "全部人员",
        "tag": "at"
      },
      {
        "style": {
          "lineThrough": false,
          "bold": false,
          "italic": false,
          "color": "default"
        },
        "text": " \n",
        "tag": "text"
      },
      {
        "text": "百度一下",
        "tag": "a",
        "href": "https://www.baidu.com"
      },
      {
        "style": {
          "lineThrough": false,
          "bold": false,
          "italic": false,
          "color": "blue"
        },
        "text": "这是第二段文字蓝色的\n",
        "tag": "text"
      },
      {
        "style": {
          "lineThrough": false,
          "bold": false,
          "italic": false,
          "color": "red"
        },
        "tag": "text",
        "text": "这是第三段文字红色的\n"
      },
      {
        "style": {
          "lineThrough": false,
          "bold": false,
          "italic": false,
          "color": "grey"
        },
        "text": "这是第四段文字灰色的",
        "tag": "text"
      }
    ],
    [
      {
        "thumbnail_id": "c42b6543bc164f709bbbb066640bcf9b",
        "original_media_id": "3505e93f2831473ab9daf4c95e9fc951",
        "is_gif": false,
        "height": 1920,
        "width": 888,
        "size": 223563,
        "tag": "img",
        "media_id": "d42040947d644a1fbcecd2c3edd08bc6"
      }
    ]
  ]
}
```

</details>

### 参数说明

| 参数名  | 字段类型 | 必须 | 说明                                                         |
| ------- | -------- | ---- | ------------------------------------------------------------ |
| title   | string   | 否   | 标题                                                         |
| content | array    | 是   | 富文本消息内容，由多个段落组成，每个段落为一个 node 列表。<br/>支持的 node 标签类型及对应参数，参见下文：[支持的标签和参数说明](#支持的标签和参数说明)。 |

### 支持的标签和参数说明

- **style（字体样式）：**

| 参数名      | 字段类型 | 必须 | 说明                                                         |
| ----------- | -------- | ---- | ------------------------------------------------------------ |
| lineThrough | bool     | 否   | 删除线                                                       |
| bold        | bool     | 否   | 粗体                                                         |
| italic      | bool     | 否   | 斜体                                                         |
| color       | string   | 否   | default: 默认值，会根据暗黑模式自动切换 <br/>red: 红色 <br/>blue: 蓝色 <br/>grey: 灰色 |

- **text(文本)：**

| 参数名 | 字段类型 | 必须 | 说明               |
| ------ | -------- | ---- | ------------------ |
| text   | string   | 是   | 文本内容           |
| style  | style    | 否   | 字体样式，字段见上 |

- **at(@人)：**

| 参数名  | 字段类型 | 必须 | 说明                 |
| ------- | -------- | ---- | -------------------- |
| user_id | string   | 是   | 用户的 user_id 或者 all |
| name    | string   | 是   | 用户名字或者全部人员 |

- **a(超链接)：**

| 参数名 | 字段类型 | 必须 | 说明                                                         |
| ------ | -------- | ---- | ------------------------------------------------------------ |
| text   | string   | 是   | 显示的文字                                                   |
| href   | string   | 是   | 链接的地址，例如: https://workplus.io, 也可以是一些 App 内部的路由地址 |

- **img(图片)：**

| 参数名            | 字段类型 | 必须                     | 说明                 |
| ----------------- | -------- | ------------------------ | -------------------- |
| thumbnail_id      | string   | 否                       | 缩略图id             |
| media_id          | string   | 是                       | 标准图id             |
| original_media_id | string   | 否                       | 原图id               |
| is_gif            | bool     | 否                       | 是否是gif            |
| width             | int      | 是                       | 宽                   |
| height            | int      | 是                       | 高                   |
| size              | int      | 否(如果原图有值，则必须) | 原图大小，大小为字节 |


### 请求体示例

```JSON
{
  "type": "RICH_TEXT", 
  "body": {
    "content": "{\"title\":\"这是富文本的标题\",\"content\":[[{\"tag\":\"text\",\"style\":{\"lineThrough\":true,\"bold\":true,\"italic\":true,\"color\":\"default\"},\"text\":\"这是第一段文字\\n\"},{\"user_id\":\"1fee2dd7a3ba457db5beb78b12ba10cf\",\"name\":\"张三\",\"tag\":\"at\"},{\"tag\":\"text\",\"text\":\" \",\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"default\"}},{\"user_id\":\"all\",\"name\":\"全部人员\",\"tag\":\"at\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"default\"},\"text\":\" \\n\",\"tag\":\"text\"},{\"text\":\"百度一下\",\"tag\":\"a\",\"href\":\"https://www.baidu.com\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"default\"},\"text\":\" \\n\",\"tag\":\"text\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"blue\"},\"text\":\"这是第二段文字蓝色的\\n\",\"tag\":\"text\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"red\"},\"tag\":\"text\",\"text\":\"这是第三段文字红色的\\n\"},{\"style\":{\"lineThrough\":false,\"bold\":false,\"italic\":false,\"color\":\"grey\"},\"text\":\"这是第四段文字灰色的\",\"tag\":\"text\"}],[{\"thumbnail_id\":\"c42b6543bc164f709bbbb066640bcf9b\",\"original_media_id\":\"3505e93f2831473ab9daf4c95e9fc951\",\"is_gif\":false,\"height\":1920,\"width\":888,\"size\":223563,\"tag\":\"img\",\"media_id\":\"d42040947d644a1fbcecd2c3edd08bc6\"}]]}"
  }, 
  "usernames": [
    "13800138000"
  ],
  "platforms": [
    "ANDROID","IOS","PC"
  ]
}
```

消息发送后的效果如下图：

![app-rich-text.png](/app/app-rich-text.png =200x)