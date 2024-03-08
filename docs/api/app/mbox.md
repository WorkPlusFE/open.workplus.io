# 应用消息

## 消息推送

```js
POST /v1/apps/mbox?access_token={access_token}&source_type={source_type}&for_all={for_all}
```
**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| source_type | String | N | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV |
| type | String | Y | 消息类型,default/text/iamge/file/article/template |
| for_all | Boolean | N | 是否全员推送,client_ids、usernames、scopes三者均为空,且for_all=true时,才全员推消息,否则均不生效 |
| client_ids | List&lt;String&gt; | N | 消息推送的用户标识 |
| scopes | List&lt;String&gt; | N | 发送范围,组织路径,例如/122/234/ |
| usernames | List&lt;String&gt; | N | 用户账号列表 |
| platforms | List | N | 枚举,ANDROID/IOS/PC,默认值为IOS和ANDROID |
| body |Map|Y|推送消息体|
| body.at_all | boolean | N | 是否AT所有人员 |
| body.content | String | N | 发送内容,具体根据消息类型决定 |
| body.is_gif | int | N | 是否gif图片,1代表是 |
| body.size | int | N | 大小 |
| body.width | int | N | 图片宽度 |
| body.height | int | N | 图片高度 |
| body.media_id | String | N | 发送的媒体ID |
| body.path | String | N | 发送的媒体ID |
| body.file_status | int | N | 文件状态,0为正常 |
| body.name | String | N | 名称 |
| body.articles.summary | String | N | 文章摘要 |
| body.articles.cover_url | String | N | 封面URL 或 封面媒体Id |
| body.articles.cover_enabled | boolean | N | 是否显示封面,true/false |
| body.articles.create_time | long | N | 创建时间 |
| body.articles.title | String | N | 文章标题 |
| body.articles.url | String | N | 图文详情内容,有些获取url内容,为空时,图文详情显示content内容 |
| body.template_id | String | N | 模板ID,模板消息必填 |
| body.data | String | N | 模板数据,模板消息必填,value为变量值,color为颜色,font_size为字号大小 |
| body.emphasis_keyword | String | N | 高亮属性,保留字段 |
| body.top_color | String | N | 顶部颜色 |
| body.top_avatar | String | N | 顶部图标 |
| body.top_title | String | N | 顶部标题 |
| body.data.text_style | String | N | normal(正常)bold(粗体) |

**请求示例：**

```js
/v1/apps/mbox?access_token=b646339e2f4f4234af6bae5f72db9879
```

**文本示例：**

<details>
<summary>点击查看文本示例</summary>

```json
{
  "type": "TEXT", 
  "body": {
    "at_all": false, 
    "content": "2"
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

**图片示例：**

<details>
<summary>点击查看图片示例</summary>

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
  "platforms": [
    "ANDROID","IOS","PC"
  ]
}
```
</details>

**文件示例：**

<details>
<summary>点击查看文件示例</summary>

```json
{
  "type": "FILE", 
  "body": {
    "file_status": 0, //文件状态,0代表正常
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

**图文示例：**

<details>
<summary>点击查看图文示例</summary>

```json
{
  "type": "ARTICLE", 
  "body": {
    "articles": [
      {
        "summary": "", 
        "show_cover": false, 
        "cover_url": "Z3JvdXAxL00wMC8wMC8zQi9yQkFCR1ZkVlFwYUFicjJ3QUFQa2NkSHlFM280MDMuanBn", 
        "create_time": 1465205632846, 
        "author": "凯里",  
        "title": "云南丽江", 
        "content": "<p>这个文章被删除了</p>", 
        "url": ""
      }
    ]
  }, 
  "platforms": [
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
</details>

**富文本消息示例：**

请前往[富文本消息](/api/app/richText.html)页面查看详细说明。

**返回数据：**

| 字段| 类型 |说明|
|---|---|---|
| id | String | 推送计划ID |
| material_id | String | 推送的素材ID |
| app_id | String | 推送者ID |
| expects | int | 目标推送数 |
| fails | int | 推送失败数 |
| oks | int | 成功推送数 |
| scopes | List&lt;String&gt; | 发送范围,组织路径,例如/122/234/ |
| client_ids | List&lt;String&gt; | 消息推送的对象标记 |

**返回示例：**

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "domain_id": "atwork", 
    "org_id": "a918d8a6-67e9-4e76-8503-baa73d3c6fd2", 
    "id": "f3b9250c-96d4-414b-be7f-308f2fdeca99", 
    "app_id": "92bc3faa-12bd-4afc-9962-01f2410f0bee", 
    "material_id": "52dec89a-04a0-4127-99b5-a3d136c638a4", 
    "expects": 0, 
    "fails": 0, 
    "oks": 0, 
    "create_time": 1485053077748, 
    "refresh_time": 0, 
    "expect_time": 1485054877748, 
    "scopes": [ ], 
    "client_ids": [
      "/232/301/c24b6a94cfb14b79af12a1399edc9e31"
    ]
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