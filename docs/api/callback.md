# 开发者接口回调

## 消息回调

```js
POST http://XXXXXX?signature={signature}&timestamp={timestamp}&nonce={nonce}&signature256={sign}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type | application/json |

**请求参数：**

| 字段	             | 类型	     | 是否必填	 | 说明                                                   |
|-----------------|---------|-------|------------------------------------------------------|
| http://XXXXXX	  | String  | 	Y	   | 回调地址                                                 |
| signature	      | String	 | Y	    | sha1签名,明文模式下,用message计算签名,其余情况用encrypt计算             |
| signature256	   | String	 | N	    | sha256签名,明文模式下,用message计算签名,其余情况用encrypt计算           |
| timestamp	      | String	 | Y	    | 时间戳                                                  |
| nonce	          | String	 | Y	    | 随机数                                                  |
| encrypt	        | String	 | Y	    | 密文,安全模式及兼容模式下,返回该字段                                  |
| message	        | String	 | Y	    | 明文,明文模式及兼容模式下,返回该字段                                  |
| to_user_name	   | String	 | Y	    | 消息接收对象                                               |
| from_user_name	 | String	 | Y 	   | 消息发送对象                                               |
| create_time	    | String	 | Y	    | 回调消息时间                                               |
| msg_type	       | String  | 	Y	   | 消息类型,text/image/voice/video/file/location/link/event |
| content	        | String	 | N	    | 文本消息内容                                               |
| media_id	       | String	 | N	    | 媒体类消息的媒体ID                                           |
| event	          | String  | N	    | 事件类型,SUBSCRIBE, SCAN, LOCATION, CLICK, VIEW          |
| event_key	      | String	 | N	    | 事件标识                                                 |

**请求示例：**

```json
{
  "encrypt": "YN4w4Kudkm-6p1y8AATO6V",
  "message": "38-9izmiUlNo37wPV8dPQV"
}
```

**响应数据：**

Map 的 JSON，推荐返回格式如下:

```json
// application/json
{
  "status": 0, 
  "message": "Everything is ok."
}
```

**加密说明：**

**Sha1签名**
* 计算签名：signature=sha1(sort(token、timestamp、nonce、echoStr))。sort的含义是将参数按照字母字典排序，然后从小到大拼接成一个字符串, echoStr:明文模式下,等于message,其余为encrypt;
* encrypt = Base64_Encode( AES_Encrypt[random(16B) + msg_len(4B) + msg + $appKey] )，是对明文消息msg加密处理后的Base64编码。 其中random为16字节的随机字符串；msg_len为4字节的msg长度，网络字节序；msg为消息体明文；$appKey为APP的标识

**Sha256签名**
* 计算签名：signature=sha256(sort(token、timestamp、nonce、echoStr))。sort的含义是将参数按照字母字典排序，然后从小到大拼接成一个字符串, echoStr:明文模式下,等于message,其余为encrypt;
* encrypt = Base64_Encode( AES_Encrypt[random(16B) + msg_len(4B) + msg + $appKey] )，是对明文消息msg加密处理后的Base64编码。 其中random为16字节的随机字符串；msg_len为4字节的msg长度，网络字节序；msg为消息体明文；$appKey为APP的标识


**解密说明：**

* 对密文BASE64解码：aes_msg=Base64_Decode(encrypt)
* 使用AESKey做AES解密：rand_msg=AES_Decrypt(aes_msg)
* 验证解密后$appKey、msg_len
* 去掉rand_msg头部的16个随机字节，4个字节的msg_len,和尾部的$appKey即为最终的消息体原文msg

**回调消息示例（明文格式化结果）**

文本消息：

```json
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

```json
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

```json
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

```json
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