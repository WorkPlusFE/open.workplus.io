# 安装

`JS-SDK`支持`script`标签及以`模块`的形式引入；初始化时，可以设置日志输出、数据模拟等配置。

## 引入及使用

**基于`npm`包的方式引入：**

1、使用`npm`或`yarn`安装模块：

```sh
npm install @w6s/sdk --save

# 使用 yarn 
yarn add @w6s/sdk
```

2、安装成功后，使用`es module`或`commonjs`模块规范引入，支持全量及按模块引入：

```js
// 全量引入
import * as w6s from '@w6s/sdk';

// 按模块引入
import auth from '@w6s/sdk/auth';
```

3、引入模块后，可以通过调用初始化方法`init`来修改默认配置：

```js
w6s.init({ debug: true, auth: false });
```

所有配置项，请看下方[配置说明](./usage.html#配置)。


4、SDK 就绪后，将可调用各模块方法，所有接口均支持`promise`及`callback`的调用方式：

```js
// Promise
w6s.auth.getUserTicket().then(res => {
  console.log(res.user_ticket); 
}).catch();

// CallBack
w6s.auth.getUserTicket({
  success(res) {
    console.log(res.user_ticket); 
  },
  fail(err) {},
});
```

二、`script`标签引入：

```html
<!-- 文档上的 sdk 地址更新可能会滞后 -->
<!-- 具体请以 https://www.npmjs.com/package/@w6s/sdk 地址上的最新版本为准 -->
<!-- 可以通过替换版本号(sdk.{版本号}.js），访问对应的版本 -->
<script src="https://open.workplus.io/static/js-sdk/sdk.2.0.0-beta.12.js"></script>
```

引入后，会在全局暴露`w6s`对象，初始化后，将可调用各模块接口。

::: warning 关于 JS-SDK 资源
基于 WorkPlus 部分客户网络环境的特殊性，推荐自行部署js-sdk的相关资源，以供自家平台轻应用访问。
:::

## JS-API 鉴权

为了保证 JS-SDK 的调用者是可信任的，同时对当前页面可用的 API 进行安全限制，防止恶意网页通过 JS-API 随意获取用户私密信息，对用户财产造成损失。因此在部分 JS-API 在被调用前，需要通过接口进行鉴权，只有鉴权成功的情况下，JS-API 的调用才会正常生效。

更多 JS-API 鉴权的信息，请查看[鉴权流程](/js-sdk/overview/auth.md)。

## 配合 Vue 使用

**一、`npm` 模式：**

基于 @vue/cli 创建的项目，可以通过`Vue.use(w6s, initOptions)`的方式初始化 sdk。

```js
import Vue from 'vue';
import * as w6s from '@w6s/sdk';

// 初始化 sdk，同时会在 Vue 原型链上挂载 $w6s 对象
Vue.use(w6s, {
  debug: true,
  timeout: 10 * 1000,
});
```

接下来，可以在 Vue 组件内，直接访问`this.$w6s`对象，以调用 sdk 方法。

```js
export default {
  mounted() {
    this.$w6s.header.setTitle('JS-SDK VueJS Demo');
  },
}
```

**二、`script` 标签模式：**

除此之外，sdk 还支持以 script 标签引入的方式，结合 vue 进行使用，如下：

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
<!-- 以实际sdk访问地址为准 -->
<script src="./sdk.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    mounted() {
      // 必须主动调用初始化方法
      this.$w6s.init();
      this.$w6s.device.getDeviceInfo()
        .then((res) => {});
    },
  });
</script>
```

## 配置

可以通过`w6s.init`方法进行初始化参数设置，具体可设置参数如下：

```js
w6s.init({
  // 是否开启调试模式
  debug: true,

  // 是否开启鉴权模式
  auth: false,
  
  // 接口超时时间，单位毫秒
  timeout: 5000,

  // 是否开启接口数据模拟功能
  mock: false,

  // Mock 数据 
  mockData: {},
});
```

#### 参数说明：

**debug**

默认为 false。开启后，将会在控制台打印调用接口的相关信息。

**auth**

默认为 false。开启后，初始化逻辑会有所不同，同时鉴权能力需要客户端及后端参与，一旦开启，所有接口均需要成功鉴权后才可使用（除鉴权接口本身）。

**timeout**
 
接口调用超时设置，毫秒数，默认为 5 秒。

部分接口不受该参数影响，例如选择照片。任何有原生页面弹出或没有回调的方法，timeout 将不生效。

**mock**

开启 js-sdk 接口的数据模拟功能，该开关可通过**process<i>.</i>env<i>.</i>NODE_ENV**环境变量来控制。

**mockData**

接口的模拟数据定义，格式如下：

```js
w6s.init({
  // 启用 Mock 服务
  mock: true                      
  mockData: {     
    // 服务类名                
    auth: {         
      // 具体执行方法的回调              
      getUserTicket() {           
        return { user_ticket: 'testmock' };
      }
    }
  }
});

w6s.auth.getUserTicket().then(res => {
  console.log(res.user_ticket);   // testmock
});
```

## 错误信息

js-sdk 在调用失败会触发 error 函数，错误信息可在返回的 error 参数中参看，下面为示例:

```js
w6s.error(function(error){
  alert('sdk error: ' + JSON.stringify(error));
});
```
