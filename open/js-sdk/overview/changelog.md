# 更新日志

### 20210107-v1.1.0-beta.8

* `fix`优化部分接口的 TypeScript 类型定义

### 20210105-v1.1.0-beta.6

* `fix`修复初始化无法以 http 方式注入 Cordova.js 的问题
* `feat`增加 vue 插件模式支持，可以直接使用 Vue.use(w6s, initOptions) 初始化

### 20201230-v1.1.0-beta.5

* `fix`修复安卓设备下重复注入 Cordova.js 导致接口返回异常的问题
* `fix`优化 Cordova.js 本地注入路径