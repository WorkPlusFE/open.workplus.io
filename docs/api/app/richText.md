# 富文本消息

::: tip 注意
- 富文本可以在一条消息中同时支持文字、At、图片、超链接、列表和引用块等元素；
- 一个富文本可分多个段落（由多个[]组成），每个段落可由多个元素组成，每个元素由tag和相应的字段描述组成；
- 图片元素必须是独立的一个段落。

**新增的有序列表、无序列表及引用块特性，需要客户端版本为5.0以上，具体请咨询相关项目负责人。**
::: 


## 消息示例

<details>
<summary>点击查看示例</summary>

```JSON
{
    "title": "Demo标题",
    "content": [
        [
            {
                "text": "一行文字",
                "tag": "text",
                "style": {
                    "bold": false,
                    "lineThrough": false,
                    "italic": false,
                    "underline": false,
                    "color": "default"
                }
            },
            {
                "user_id": "39723e99b4664d17a838ac81a3fd4b5c",
                "name": "开发105(kf105)",
                "tag": "at"
            },
            {
                "text": " ",
                "tag": "text",
                "style": {
                    "bold": false,
                    "lineThrough": false,
                    "italic": false,
                    "underline": false,
                    "color": "default"
                }
            },
            {
                "text": "😃",
                "tag": "text"
            }
        ],
        [
            {
                "text": "被设置字体样式的段落",
                "tag": "text",
                "style": {
                    "bold": true,
                    "lineThrough": true,
                    "italic": true,
                    "underline": true,
                    "color": "red"
                }
            }
        ],
        [
            {
                "tag": "img",
                "thumbnail_id": "084877322e31473690e26c55240a1167",
                "media_id": "084877322e31473690e26c55240a1167",
                "is_gif": false,
                "width": 225,
                "height": 225,
                "size": 5842
            }
        ],
        [
            {
                "text": "这是链接",
                "tag": "a",
                "href": "demo.com"
            }
        ],
        [
            {
                "tag": "bulletList",
                "list": [
                    [
                        [
                            {
                                "text": "无序列表item1",
                                "tag": "text",
                                "style": {
                                    "bold": false,
                                    "lineThrough": false,
                                    "italic": false,
                                    "underline": false,
                                    "color": "default"
                                }
                            }
                        ]
                    ],
                    [
                        [
                            {
                                "text": "无序列表item2",
                                "tag": "text",
                                "style": {
                                    "bold": false,
                                    "lineThrough": false,
                                    "italic": false,
                                    "underline": false,
                                    "color": "default"
                                }
                            }
                        ]
                    ]
                ],
                "marker": "dot"
            }
        ],
        [
            {
                "tag": "orderedList",
                "list": [
                    [
                        [
                            {
                                "text": "有序列表item1",
                                "tag": "text",
                                "style": {
                                    "bold": false,
                                    "lineThrough": false,
                                    "italic": false,
                                    "underline": false,
                                    "color": "default"
                                }
                            }
                        ]
                    ],
                    [
                        [
                            {
                                "text": "有序列表item2",
                                "tag": "text",
                                "style": {
                                    "bold": false,
                                    "lineThrough": false,
                                    "italic": false,
                                    "underline": false,
                                    "color": "default"
                                }
                            }
                        ]
                    ]
                ],
                "start": 1
            }
        ],
        [
            {
                "tag": "blockquote",
                "quote": [
                    [
                        [
                            {
                                "text": "引用块，可以嵌套除“引用块”外所有的节点元素",
                                "tag": "text",
                                "style": {
                                    "bold": false,
                                    "lineThrough": false,
                                    "italic": false,
                                    "underline": false,
                                    "color": "default"
                                }
                            }
                        ]
                    ],
                    [
                        [
                            {
                                "user_id": "39723e99b4664d17a838ac81a3fd4b5c",
                                "name": "开发105(kf105)",
                                "tag": "at"
                            },
                            {
                                "text": " ",
                                "tag": "text",
                                "style": {
                                    "bold": false,
                                    "lineThrough": false,
                                    "italic": false,
                                    "underline": false,
                                    "color": "default"
                                }
                            }
                        ]
                    ],
                    [
                        [
                            {
                                "tag": "bulletList",
                                "list": [
                                    [
                                        [
                                            {
                                                "text": "列表",
                                                "tag": "text",
                                                "style": {
                                                    "bold": false,
                                                    "lineThrough": false,
                                                    "italic": false,
                                                    "underline": false,
                                                    "color": "default"
                                                }
                                            }
                                        ]
                                    ],
                                    [
                                        [
                                            {
                                                "text": "列表",
                                                "tag": "text",
                                                "style": {
                                                    "bold": false,
                                                    "lineThrough": false,
                                                    "italic": false,
                                                    "underline": false,
                                                    "color": "default"
                                                }
                                            }
                                        ]
                                    ]
                                ],
                                "marker": "dot"
                            }
                        ]
                    ],
                    [
                        [
                            {
                                "tag": "orderedList",
                                "list": [
                                    [
                                        [
                                            {
                                                "text": "列表",
                                                "tag": "text",
                                                "style": {
                                                    "bold": false,
                                                    "lineThrough": false,
                                                    "italic": false,
                                                    "underline": false,
                                                    "color": "default"
                                                }
                                            }
                                        ]
                                    ],
                                    [
                                        [
                                            {
                                                "text": "列表",
                                                "tag": "text",
                                                "style": {
                                                    "bold": false,
                                                    "lineThrough": false,
                                                    "italic": false,
                                                    "underline": false,
                                                    "color": "default"
                                                }
                                            }
                                        ]
                                    ]
                                ],
                                "start": 1
                            }
                        ]
                    ],
                    [
                        [
                            {
                                "tag": "img",
                                "thumbnail_id": "1ee22d0e710e4adcaffdb41ed20dcbc0",
                                "media_id": "1ee22d0e710e4adcaffdb41ed20dcbc0",
                                "is_gif": false,
                                "width": 225,
                                "height": 225,
                                "size": 5842
                            }
                        ]
                    ]
                ]
            }
        ],
        [
            {
                "tag": "text",
                "text": "",
                "style": {

                }
            }
        ],
        [
            {
                "tag": "text",
                "text": "",
                "style": {

                }
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
| underline | bool | 否 | 下划线 |
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
| href   | string   | 是   | 链接的地址，例如: https://www.beeworks.cn, 也可以是一些 App 内部的路由地址 |

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

- **bulletList(无序列表)：**

| 参数名            | 字段类型 | 必须                     | 说明                 |
| ----------------- | -------- | ------------------------ | -------------------- |
| list | array | 是 | 无序列表每行内容集合 |

无序列表仅支持输入非块级元素，并且层级只能为一层。

数据示例如下：

<details>
<summary>点击查看示例</summary>

```json
{
    "tag": "bulletList",
    "list": [
        [
            [
                {
                    "text": "无序列表item1 - ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "user_id": "39723e99b4664d17a838ac81a3fd4b5c",
                    "name": "开发105(kf105)",
                    "tag": "at"
                },
                {
                    "text": " ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "text": "😃",
                    "tag": "text"
                }
            ]
        ],
        [
            [
                {
                    "text": "无序列表item2 - ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "text": "字体样式",
                    "tag": "text",
                    "style": {
                        "bold": true,
                        "lineThrough": false,
                        "italic": false,
                        "underline": true,
                        "color": "red"
                    }
                }
            ]
        ],
        [
            [
                {
                    "text": "无序列表item3 - ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "text": "链接",
                    "tag": "a",
                    "href": "demo.com"
                }
            ]
        ]
    ]
}
```
</details>

消息效果如下图：

![app-rich-text.png](/app/bulletListDemo.png =300x)


- **orderedList(有序列表)：**

| 参数名            | 字段类型 | 必须                     | 说明                 |
| ----------------- | -------- | ------------------------ | -------------------- |
| list | array | 是 | 有序列表每行内容集合 |
| start | number | 是 | 有序列表首行序号，往下每行递增加一 |

数据示例如下：

<details>
<summary>点击查看示例</summary>

```json
{
    "tag": "orderedList",
    "list": [
        [
            [
                {
                    "text": "无序列表item1 - ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "user_id": "39723e99b4664d17a838ac81a3fd4b5c",
                    "name": "开发105(kf105)",
                    "tag": "at"
                },
                {
                    "text": " ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "text": "😃",
                    "tag": "text"
                }
            ]
        ],
        [
            [
                {
                    "text": "无序列表item2 - ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "text": "字体样式",
                    "tag": "text",
                    "style": {
                        "bold": true,
                        "lineThrough": false,
                        "italic": false,
                        "underline": true,
                        "color": "red"
                    }
                }
            ]
        ],
        [
            [
                {
                    "text": "无序列表item3 - ",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "text": "链接",
                    "tag": "a",
                    "href": "demo.com"
                }
            ]
        ]
    ],
    "start": 1
}
```
</details>

消息效果如下图：

![app-rich-text.png](/app/orderedListDemo.png =300x)

- **blockquote(引用块)：**

引用块不支持嵌套，可放入除“引用块”及“图片”外任何其他元素节点。

| 参数名            | 字段类型 | 必须                     | 说明                 |
| ----------------- | -------- | ------------------------ | -------------------- |
| quote | array | 是 | 引用的内容 |

数据示例如下：

<details>
<summary>点击查看示例</summary>

```json
{
    "tag": "blockquote",
    "quote": [
        [
            [
                {
                    "tag": "orderedList",
                    "list": [
                        [
                            [
                                {
                                    "text": "无序列表item1 - ",
                                    "tag": "text",
                                    "style": {
                                        "bold": false,
                                        "lineThrough": false,
                                        "italic": false,
                                        "underline": false,
                                        "color": "default"
                                    }
                                },
                                {
                                    "user_id": "39723e99b4664d17a838ac81a3fd4b5c",
                                    "name": "开发105(kf105)",
                                    "tag": "at"
                                },
                                {
                                    "text": " ",
                                    "tag": "text",
                                    "style": {
                                        "bold": false,
                                        "lineThrough": false,
                                        "italic": false,
                                        "underline": false,
                                        "color": "default"
                                    }
                                }
                            ]
                        ],
                        [
                            [
                                {
                                    "text": "无序列表item2 - ",
                                    "tag": "text",
                                    "style": {
                                        "bold": false,
                                        "lineThrough": false,
                                        "italic": false,
                                        "underline": false,
                                        "color": "default"
                                    }
                                },
                                {
                                    "text": "字体样式",
                                    "tag": "text",
                                    "style": {
                                        "bold": true,
                                        "lineThrough": false,
                                        "italic": false,
                                        "underline": true,
                                        "color": "default"
                                    }
                                }
                            ]
                        ],
                        [
                            [
                                {
                                    "text": "无序列表item3 - ",
                                    "tag": "text",
                                    "style": {
                                        "bold": false,
                                        "lineThrough": false,
                                        "italic": false,
                                        "underline": false,
                                        "color": "default"
                                    }
                                },
                                {
                                    "text": "链接",
                                    "tag": "a",
                                    "href": "demo.com"
                                }
                            ]
                        ]
                    ],
                    "start": 1
                }
            ]
        ],
        [
            [
                {
                    "text": "文字，",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "default"
                    }
                },
                {
                    "text": "颜色文字，",
                    "tag": "text",
                    "style": {
                        "bold": false,
                        "lineThrough": false,
                        "italic": false,
                        "underline": false,
                        "color": "red"
                    }
                },
                {
                    "text": "字体样式",
                    "tag": "text",
                    "style": {
                        "bold": true,
                        "lineThrough": true,
                        "italic": false,
                        "underline": true,
                        "color": "default"
                    }
                }
            ]
        ]
    ]
}
```
</details>

消息效果如下图：

![app-rich-text.png](/app/blockquoteDemo.png =300x)


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