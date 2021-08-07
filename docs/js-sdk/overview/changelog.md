# 更新日志

### 20210807-v1.0.0

* `feat`Loading 增加锁定屏幕配置
* `feat`增加 openWebView 接口参数

### 20210701-v1.0.0-beta.19

* `feat`增加通用的页面事件监听方法，`w6s.event.bindMessageChannel`
### 20210630-v1.0.0-beta.17

* `refactor`选择图片和拍照增加自动上传开关配置
### 20210625-v1.0.0-beta.15

* `feat`增加键盘信息获取和监听变化接口，`w6s.szient.getKeyboardInfo`及`w6s.szient.watchKeyboardChanged`

### 20210624-v1.0.0-beta.14

* `feat`增加埋点接口，`w6s.szient.buryingPoint`

### 20210618-v1.0.0-beta.10

* `feat`增加 Dialog 原生弹框模块，支持 Loading、Toast、ActionSheet 和 Modal 确认框

### 20210617-v1.0.0-beta.7

* `refactor`调整原生 AJAX 的 service 参数

### 20210616-v1.0.0-beta.6

* `refactor`增加了接口返回登录信息的字段
* `refactor`修改了监听状态变化的接口，并提供取消监听的方法，`w6s.szient.watchStatusChanged`及`w6s.szient.unwatchStatusChanged`
* `feat`新增`检查流程完整性`接口，`w6s.szient.checkBizIntegrity`
* `feat`新增`确定完整性完成`接口，`w6s.szient.okBizIntegrity`
### 20210615-v1.0.0-beta.5

* `feat`新增接口检测功能，`w6s.checkApi`
* `feat`新增原生 AJAX 接口能力，`w6s.request`及`w6s.authRequest`

