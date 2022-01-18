# 存储

## 存数据

用于轻应用存储轻量、非结构化的数据。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | `v4.11.6+`  | `v4.11.6+` |


```js
w6s.storage.putData({
  app_id: '1testx11',
  key: 'key',
  value: 'value',
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| app_id | String | 应用的id或唯一值 |
| key | String | 存储的 key  |
| value | String | 存储的值，需要自行转换到字符串 |


## 取数据

获取移动端本地存储的轻量数据。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | `v4.11.6+`  | `v4.11.6+` |


```js
w6s.storage.getData({
  app_id: '唯一id',
  key: '存储的key',
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| app_id | String | 应用的id或唯一值 |
| key | String | 存储的 key  |

**返回数据**

| 参数 | 说明 |
| - | - | 
| app_id  | 唯一id |
| key | 存储的 key  |
| value | 存储的值，需要自行转换到字符串 |

