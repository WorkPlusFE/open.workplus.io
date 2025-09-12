# 被动回调

BeeWorks 会有以下操作或行为触发时，回调业务方机器人后台配置的回调 URL:

1. 在群聊@机器人并发送消息；
2. 在聊天会话里发送机器人指令；
3. 用户点击机器人消息上的按钮（非链接按钮）；
4. 群聊会话中添加或移除机器人。

## 签名及加密

为了让业务方确认调用来自 BeeWorks，BeeWorks 以 POST 方式回调业务方 URL 会带上消息签名，业务方需要验证此参数的正确性后再进行业务操作。

回调URL如下：

```Text
POST: 业务方回调URL?signature={signature}&timestamp={timestamp}&nonce={nonce}&encrypted={encrypted}
```

回调URL参数说明：

| 名称 | 是否有值 | 说明 |
| - | - | - |
| signature | 是 | 签名,明文模式下,用data计算签名,密文情况用encrypt计算 |
| timestamp | 是 | 时间戳，用于签名 |
| nonce | 是 | 随机数，用于签名 |
| encrypted | 是 | 回调消息是否加密；true: 加密，false: 未加密 |

回调消息体说明：

- 明文格式：

| 名称 | 类型 | 是否有值 | 说明 |
| - | - | - | - |
| by | string | 是 | command = 指令，action = 按钮 |
| data | string | 是 | 明文请求消息体 |

- 密文格式：

| 名称 | 类型 | 是否有值 | 说明 |
| - | - | - | - |
| by | string | 是 | command = 指令，action = 按钮 |
| encrypt | string | 是 | 密文请求消息体 |


### 签名详解

``` Text
msg_signature=sha1(sort(token、timestamp、nonce、echoStr))
```

1. sort 的含义是将参数值按照字母字典排序，然后从小到大拼接成一个字符串 sha1 处理结果要编码为可见字符，再格式化成16进制，全部小写；
2. echoStr: 明文模式下取值明文回调的data字段，密文模式下取值明文回调的encrypt字段；
3. 比较 msg_signature 和回调 url 上的 signature 是否相等，相等则表示验证通过。

### 消息加密详解

拼接明文字符串：

``` Text
rand_msg = random(16B) + msg_len(4B) + msg + receiveid
```

* 明文字符串由16个字节的随机字符串、4个字节的 msg 长度、明文 msg 和 receiveid 拼接组成。其中 msg_len 为 msg 的字节数，网络字节序；
* receiveId 是业务方在 BeeWorks 上对应的应用ID；

![bot-secret](/bot/bot-secret.png)

* 加密明文消息

```Text
encrypt = Base64_Encode(AES_Encrypt(rand_msg))
```

将明文字符串AES[AES/CBC/NoPadding]加密后，再进行 Base64 编码，即获得密文 encrypt。

### 消息解密详解

* 对密文BASE64解码

```Text
aes_msg=Base64_Decode(msg_encrypt)
```

* 对密文AES[AES/CBC/NoPadding]解密

```Text
rand_msg=AES_Decrypt(aes_msg)
```

- 去掉 rand_msg 头部的16个随机字节和4个字节的 msg_len，截取 msg_len 长度的部分即为 msg，剩下的为尾部的 receiveid；
- 验证解密后的 receiveid、msg_len。

### 示例代码

签名及加密示例代码:

[下载 Java 示例代码](https://codeload.github.com/workweixin/weworkapi_java/zip/master)


## 消息、指令、按钮回调

用户在聊天会话中：@机器人发送消息，或发送机器人指令，或点击机器人消息上的按钮时，触发的回调。

### 明文回调说明

格式如下：

```Json
{
  "by": "command / action / im", 
  "data" : ""
}
```

| 名称 | 类型 | 是否有值 | 说明 |
| - | - | - | - |
| by | string | 是 | command：客户端发送业务指令 <br/>action：客户端点击消息按钮 <br/>im：客户端发送消息 |
| data | string | 是 | 明文请求消息体，详情查看下方 [明文data说明](#明文data说明) |


#### 明文data说明

data 是 JOSN 格式的字符串，data 格式化成 JOSN 后，格式如下：

```Json
{
  "domian_id":"域id",
  "owner_id":"组织code或域id", #组织机器人: 组织code; 域机器人: 域id
  "client_id": "操作者id",
  "message_id": "消息id",
  "conversation_id": "会话id",
  "ack_id": "回调消息的消息id", #如果业务方响应接口，可用于业务方查询消息的状态
  "lang":"zh-CN", #客户端语言
  "platform":"ios", #客户端平台
  "platforms":["ios", "android", "pc"], #消息平台
  "action":"action", #指令
  "values" : {
    "key" : "value"
  }, #用户操作后回调提交的数据
  "message": {
    "明文消息" #参考消息说明
  }
}
```

#### 明文data字段说明

| 字段 | 类型 | 是否有值 | 说明 |
| - | - | - | - |
| domian_id | String | Y | 域id
| owner_id | String | Y | 组织机器人: 组织code <br/> 域机器人: 域id
| client_id | String | Y | 操作人id
| conversation_id | String | Y | 会话id
| message_id | String | Y | 消息id
| ack_id | String | Y | 回调消息的消息id，<br/>如果业务方响应接口，可用于业务方查询消息的状态
| platform | Strring | Y | 客户端平台 
| platforms | Array | Y | 消息发送平台
| lang | String | Y | 客户端语言
| action | String | Y | 客户端指令<br/>取值：按钮的action或客户端指令值
| values | Map | N | 客户端回传的其它数据
| message | Json | Y |消息体，参考[message字段说明](#message字段说明)

#### message字段说明

|字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| to_user_name | String | Y | 消息接收对象
| from_user_name | String | Y | 消息发送对象
| create_time | String | Y | 回调消息时间
| msg_type | String | Y | 消息类型,text/image/voice/video/file/location/link/event
| msg_body | Json | Y | 参考[msg_body示例](#msg_body示例)
| content | String | N | 文本消息内容
| media_id | String | N | 媒体类消息的媒体ID
| event | String | N | 事件类型,SUBSCRIBE, SCAN, LOCATION, CLICK, VIEW
| event_key | String | N | 事件标识


#### msg_body示例

文本消息：

```Json
{
  "msg_time": 1657853904532,
  "from_domain": "workplus",
  "from_user": "61e9fea875a24bfeb0fe2838e488d20f",
  "msg_type": "text",
  "msg_body":
  {
    "content": "123456"
  },
  "to_user_name": "测试回调APP",
  "create_time": 1657853904532,
  "to_user": "89bfb884fbd835790edc78033096204a3caa123a",
  "to_domain": "workplus",
  "from_user_name": "开发人员",
  "content": "123456"
}
```

语音消息：

```Json
{
  "msg_time": 1657854149450,
  "from_domain": "workplus",
  "from_user": "61e9fea875a24bfeb0fe2838e488d20f",
  "msg_type": "voice",
  "media_domain": "workplus",
  "msg_body":
  {
    "duration": 2,
    "media_id": "2894603e9e61422e8ea1ba26dc415b55",
    "media_domain": "workplus"
  },
  "to_user_name": "测试回调APP",
  "from_user_name": "开发人员",
  "media_id": "2894603e9e61422e8ea1ba26dc415b55",
  "create_time": 1657854149450,
  "to_domain": "workplus",
  "to_user": "89bfb884fbd835790edc78033096204a3caa123a",
  "duration": 2
}
```

文件消息：

```Json
{
  "size": 691882,
  "from_domain": "workplus",
  "from_user": "61e9fea875a24bfeb0fe2838e488d20f",
  "msg_type": "file",
  "media_domain": "workplus",
  "msg_body":
  {
    "name": "IMG_1933.HEIC",
    "size": 691882,
    "media_id": "eca2a97ac2a547e8bc61884ead91fd8c",
    "media_domain": "workplus"
  },
  "to_user_name": "测试回调APP",
  "from_user_name": "开发人员",
  "media_id": "eca2a97ac2a547e8bc61884ead91fd8c",
  "create_time": 1657854209226,
  "to_user": "89bfb884fbd835790edc78033096204a3caa123a",
  "to_domain": "workplus",
  "name": "IMG_1933.HEIC",
  "msg_time": 1657854209226
}
```

图片消息：

```Json
{
  "msg_time": 1657854250227,
  "from_domain": "workplus",
  "from_user": "61e9fea875a24bfeb0fe2838e488d20f",
  "msg_type": "image",
  "height": 1280,
  "media_domain": "workplus",
  "msg_body":
  {
    "is_gif": false,
    "height": 1280,
    "media_domain": "workplus",
    "media_id": "f2627421b3e54f64a2b973aa55270c90",
    "width": 959,
    "size": 116755,
    "thumbnail_id": "d18c73017c944152b35fd3ad4288cab2"
  },
  "to_user_name": "测试回调APP",
  "from_user_name": "开发人员",
  "media_id": "f2627421b3e54f64a2b973aa55270c90",
  "width": 959,
  "create_time": 1657854250227,
  "to_user": "89bfb884fbd835790edc78033096204a3caa123a",
  "to_domain": "workplus",
  "is_gif": false,
  "size": 116755,
  "thumbnail_id": "d18c73017c944152b35fd3ad4288cab2"
}
```

视频消息：

```json
{
  "msg_time": 1657854325463,
  "size": 563948,
  "from_domain": "workplus",
  "from_user": "61e9fea875a24bfeb0fe2838e488d20f",
  "msg_type": "video",
  "height": 0,
  "media_domain": "workplus",
  "msg_body":
  {
    "duration": 2,
    "size": 563948,
    "height": 0,
    "media_domain": "workplus",
    "content": "base64",
    "media_id": "4028ec49c54142d8a18f35bea3196c2d",
    "width": 0
  },
  "to_user_name": "测试回调APP",
  "media_id": "4028ec49c54142d8a18f35bea3196c2d",
  "width": 0,
  "create_time": 1657854325463,
  "to_domain": "workplus",
  "to_user": "89bfb884fbd835790edc78033096204a3caa123a",
  "duration": 2,
  "from_user_name": "开发人员",
  "content": "base64"    
}
```

### 密文回调说明

格式如下：

```Json
{
  "by": "command / action / im ", 
  "encrypt" : ""
}
```

密文消息解密后，请参考[明文回调说明](#明文回调说明)

## 订阅回调

### 明文订阅回调说明

格式如下：

```Json
{
  "by": "conversation_subscribe / conversation_unsubscribe",  #订阅，取消订阅
  "data" : ""
}
```

| 名称 | 类型 | 是否有值 | 说明
| - | - | - | -
| by | string | 是 | conversation_subscribe： 会话订阅机器人<br/>conversation_unsubscribe：会话取消订阅机器人
| data | string | 是 | 明文请求消息体 


#### 明文data说明

data 是 JSON 格式的字符串，data 格式化成 JOSN 后如下所示：

```Json
{
  "domian_id":"域id",
  "owner_id":"组织code或域id", #组织机器人: 组织code; 域机器人: 域id
  "subscribe_id": "订阅id",
  "conversation_id": "会话id",
  "conversation_type": "DISCUSSION",
  "conversation_name": "会话名称"
}
```

#### 明文data字段说明

| 字段 | 类型 | 是否有值 | 说明 |
| - | - | - | - |
| domian_id | String | Y | 域id
| owner_id | String | Y |组织机器人：组织code<br/> 域机器人：域id
| subscribe_id | String | Y | 订阅id<br/>业务方响应订阅回调订阅消息接口时回传此参数
| conversation_id | String | Y | 会话id
| conversation_type | String | Y | 会话类型 <br/>单聊: USER <br/>群聊: DISCUSSION
| conversation_name | Strring | Y | 会话名称


### 密文订阅回调说明

格式如下：

```Json
{
  "by": "conversation_subscribe / conversation_unsubscribe",  #订阅，取消订阅
  "encrypt" : ""
}
```

密文消息解密后，请参考[明文订阅回调说明](#明文订阅回调说明)
