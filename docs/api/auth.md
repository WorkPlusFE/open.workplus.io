# Ticket 验证

```js
GET /v1/tickets/{ticket}?access_token={access_token}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
|ticket |String|Y|用户ticket|
|access_token|String|Y|访问令牌|

**返回数据：**

| 字段        | 类型     | 说明             |
| --------- | ------ | -------------- |
| client_id | String | 该ticket所属的用户标识 |
| domain_id | String | 该ticket所属的域标识  |
| org_id    | String | 该ticket所属的组织标识 |
| device_id | String | 该ticket所属的设备标识 |

**成功返回值：**
```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "domain_id": "atwork", 
    "client_id": "a86e83a26bee5d5c", 
    "org_id": "85df0e64", 
    "device_id": "test10fdfd0111"
  }
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10015 |ticket expired.|ticket已过期.|
| 10016 |ticket not found.|ticket不存在.|