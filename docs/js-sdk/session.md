# 聊天

## 打开用户聊天页面

传入`userId`、`domianId`，打开到 WorkPlus 与该用户的聊天页面。

**使用说明**

| 客户端   | Android | iOS  | PC 客户端 |
| -------- | ------- | ---- | ---- |
| 支持情况 | 支持  | 支持 | 支持 |


```js
w6s.session.showUserChatViewByUser({
  userId: '用户的userId',
  domainId: '用户的domainId',
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| userId |  String | 用户的 userId |
| domainId |  String | 用户的 domainId |
| newWindow |  Boolean | 是否在新窗口打开； 仅 PC 客户端支持，默认为 true。 |



## 打开群组聊天页面

通过`群组id`打开该群组的聊天页面。

**使用说明**

| 客户端   | Android | iOS  | PC 客户端 |
| -------- | ------- | ---- | ---- |
| 支持情况 | 支持  | 支持 | 支持 |


```js
w6s.session.openDiscussionById({
  discussionId: '0629aadxx3fb0bd6',
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| discussionId |  String | 群组的id |
| newWindow |  Boolean | 是否在新窗口打开； 仅 PC 客户端支持，默认为 true。 |


## 创建群组

通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息。

**使用说明**

| 客户端   | Android | iOS  | PC 客户端 |
| -------- | ------- | ---- | ----- |
| 支持情况 | 支持  | 支持 | 支持 |


```js
// 移动端
w6s.session.createDiscussionChat();

// PC 客户端
w6s.session.createDiscussionChat({ newWindow: true });
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| newWindow |  Boolean | 是否在新窗口打开； 仅 PC 客户端支持，默认为 true。 |

## 打开群组选人界面

根据`群组id`, 打开群组成员界面, 并进行选择。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


```js
w6s.session.selectDiscussionMembers({
  discussionId: '7e41cf3691344b28a9dd2035bac47',
  membersSelected: [{...}, {...}],
  success: function(res) {},
  fail: function(err) {},
});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| discussionId |  String | 群组 id |
| membersSelected |  Array | 已选的群成员数据 |

**返回数据**

| 参数 | 说明|
| - | - |
| members | 返回群成员数据 |


