<template>
  <div class="w6s-home">
    <header class="w6s-home__header">
      <div>
        <h1>WorkPlus 开发文档</h1>
        <p>在这里你可以找到应用开发、客户端定制等指南和 API 说明，让你业务系统快速移动化、数字化。</p>
      </div>
    </header>
    <div class="w6s-home__container">
      <div class="w6s-home__guide">
        <h1 class="guide-title">
          应用开发
        </h1>
        <div class="guide-list">
          <a class="guide-item" v-for="app in apps" :href="app.link">
            <div class="guide-item__logo" :style="{'background-image': `url('${app.image}')`}"></div>
            <div class="guide-item__title">{{app.title}}</div>
            <div class="guide-item__extra">
              {{app.content}}
            </div>
          </a>
        </div>
      </div>
      <div class="w6s-home__guide">
        <h1 class="guide-title">
          客户端定制
        </h1>
        <div class="guide-list">
          <a class="guide-item" v-for="client in clients" :href="client.link">
            <div class="guide-item__logo" :style="{'background-image': `url('${client.image}')`}"></div>
            <div class="guide-item__title">{{client.title}}</div>
            <div class="guide-item__extra">
              {{client.content}}
            </div>
          </a>
        </div>
      </div>

      <div class="w6s-home__guide">
        <h1 class="guide-title">
          工具与资源
        </h1>
        <div class="resource-list">
          <a class="resource-item" v-for="ot in others" :href="ot.link" target="_blank" rel="noreferrer">
            <div class="resource-item__logo">
              <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c14dd7f8b21a7e82624330ef4bf6c667_EuN0Ivjcnu.png" alt="飞书开发者工具">
            </div>
            <div class="resource-item__content">
              <div class="resource-item__title">{{ot.title}}</div>
              <div class="resource-item__subtitle">
                <p>{{ot.content}}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeFeature',
  data() {
    return {
      apps: [{
        title: '单点登录',
        link: '/light-app/sso.html',
        image: '/home/app-sso.png',
        content: '通过 WorkPlus 开放接口，可以以应用身份对用户进行 Ticket 校验，实现单点登录。'
      }, {
        title: 'JS-SDK',
        link: '/js-sdk/',
        image: '/home/app-dev.png',
        content: 'WorkPlus 移动端 WebView 提供强大的原生能力，通过 JS-SDK 可以轻松在 H5 应用中调用原生能力，例如拍照、二维码识别等。'
      }, {
        title: '消息推送',
        link: '/light-app/message.html',
        image: '/home/app-create.png',
        content: '通过平台能力，可以对某个应用的使用者推送不同类型的消息，它的表现跟 IM 聊天类似，会产生一个应用会话，并且可以打开阅读所有消息。'
      }, ],
      clients: [{
        title: '主题定制',
        link: '/design-specification/theme.html',
        image: '/home/app-create.png',
        content: '除基本的明亮及暗黑模式外，WorkPlus 平台支持更多的主题定制及切换，满足不同的企业文化及应用场景。'
      }, {
        title: '工作台',
        link: '/light-app/workbench.html',
        image: '/home/app-sso.png',
        content: '可根据不同人员的需求来定义工作台卡片，通过卡片组合的方式来打造个性化的工作台，真正实现“千人千面”。'
      }, {
        title: '轻应用主题',
        link: '/design-specification/theme.html#使用主题',
        image: '/home/app-dev.png',
        content: '除客户端的主题可以定制外，轻应用也可以通过引入客户端本地主题样式文件，实现全局样式一致。'
      }],
      others: [{
        title: '项目脚手架',
        link: '/dev-tools/scaffold.html',
        content: 'WorkPlus 前端团队提供基于 Vue3.0 的项目开发脚手架，深度集成平台能力，助你快速开发。'
      }, {
        title: '应用调试',
        link: '/dev-tools/debug.html',
        content: '可以通过简单设置开启安卓客户端的真机调试，也可启动全局 VConsole 插件，快速调试定位问题。'
      }, {
        title: '设计规范',
        link: '/design-specification/basic-principles.html',
        content: '基于多年企业服务实践，大量企业场景，我们拟定了一份设计规范，以指导设计或开发出体验自然，视觉友好一致的应用程序。'
      }, {
        title: '同步程序',
        link: '/light-app/sync.html',
        content: '支持 LDAP、API、Excel 导入等方式，通过定时任务读取企业组织人员数据及状态，并全量或增量地导入到 WorkPlus 平台中。'
      }],
    }
  }
}
</script>

<style lang="scss">
.w6s-home__header {
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  padding: 130px 0 62px;
  background: #f5f6f7;
  > div {
    max-width: 1200px;
    margin: 0 auto;
  }
  h1 {
    position: relative;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    color: #1f2329;
  }
  p {
    osition: relative;
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    color: #646a73;
  }
}

.w6s-home__container {
  max-width: 1200px;
  margin: 0 auto;
}

.guide-title {
  font-size: 30px;
  line-height: 38px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 24px;
  color: #373c43;
}
.guide-list {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .guide-item {
    position: relative;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(33.3333% - 24px);
    height: 355px;
    margin: 0 36px 36px 0;
    border-radius: 10px;
    border: 1px solid #eff0f1;
    color: #1f2329;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
    &__logo {
      position: relative;
      height: 200px;
      color: #ffffff;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center top;
    }
    &__title {
      padding: 20px 20px 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #1f2329;
    }
    &__extra {
      color: #51565d;
      margin-right: 8px;
      flex: 0 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0 20px 20px;
      font-size: 15px;
      line-height: 24px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0px 10px 20px rgb(114 147 198 / 15%);
      border-color: var(--c-brand);
    }
  }
}

.resource-list {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  .resource-item {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    -ms-flex-preferred-size: calc(50% - 18px);
    flex-basis: calc(50% - 18px);
    height: 140px;
    margin: 0 36px 36px 0;
    border: solid 1px transparent;
    border-radius: 10px;
    overflow: hidden;
    color: #1f2329;
    box-sizing: border-box;
    &__logo {
      position: relative;
      flex: 0 0 118px;
      text-align: center;
      img {
        width: 70px;
        height: 70px;
        border-radius: 4px;
        max-width: 100%;
      }
    }
    &__content {
      padding: 24px 24px 24px 0;
      overflow: hidden;
      box-sizing: border-box;
    }
    &__title {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 12px;
    }
    &__subtitle {
      position: relative;
      font-size: 15px;
      line-height: 26px;
      color: #646a73;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0px 10px 20px rgb(114 147 198 / 15%);
      border-color: var(--c-brand);
    }
  }
}
</style>