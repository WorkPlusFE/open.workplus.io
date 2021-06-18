# 弹窗

::: tip 版本要求
该功能需要 WorkPlus APP 版本在 **v4.12.0** 及以上。
:::

## 确认框

弹出原生的确认框，可以通过控制按钮实现 Alert 和 Confirm 两种形态的弹出框。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="dialog.showModal">

```js
w6s.dialog.showModal({
  title: "标题",
  content: "内容",
  show_cancel: true,
  cancel_text: "取消",
  confirm_text: "确认"
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>


**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| title |  String | 必须，弹框的标题 |
| content |  String | 弹框的内容 |
| show_cancel |  Boolean | 是否显示“取消”按钮，默认显示 |
| cancel_text |  String | “取消”按钮的文本，默认使用系统按钮文本 |
| confirm_text |  String | “确认”按钮的文本，默认使用系统按钮文本 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| cancel | 如果为 true，表示点击了“取消”按钮  |
| confirm | 如果为 true，表示点击了“确认”按钮  |

## ActionSheet

从底部弹出原生的 ActionSheet，可以自定义各按钮的文本，但”取消“按钮是固定的。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="dialog.showActionSheet">

```js
w6s.dialog.showActionSheet({
  item_list: ['选项A', '选项B', '选项C']
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>


**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| item_list |  Array | 必须的，选项的字符串数组 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| tap_index | 点击了第几项（从0开始） |


## 轻提示

弹出原生的轻提示弹框 Toast，可以自定义文本及显示时长，默认`3秒`后隐藏。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="dialog.showToast">

```js
w6s.dialog.showToast({
  title: '这是一个toast',
  duration: 5000, // 毫秒数
});
```
</CodeWrapper>


**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| title |  String | 必须的，标题 |
| duration |  Number | 非必须，显示的时长，默认 3000 毫秒 |


## Loading

弹出原生的 Loading，可以添加文本，但需要手动关闭。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper :qrcode="false">

```js
// 显示 Loading
w6s.dialog.showLoading({
  title: '加载中...',
});

// 隐藏 Loading
w6s.dialog.hideLoading();
```
</CodeWrapper>


**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| title |  String | 非必须，标题 |
