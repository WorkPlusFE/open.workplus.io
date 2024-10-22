import { defineConfig } from 'vitepress';
import markdownItImsize from 'markdown-it-imsize';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WorkPlus Open Website",
  description: "WorkPlus Open Website!",
  lang: 'zh-Hans',
  locales: {
    root: {
      label: 'zh-CN',
      title: 'WorkPlus 开放平台',
      description: 'WorkPlus，企业移动管理平台服务商，专注于为中大型企业提供一站式移动办公新体验。目前已服务的国内外大型企业超过100家，终端用户数量突破500000，为企业提供了移动管理平台，移动门户，移动办公OA，移动审批，会议管理，通知公告，业务系统集成以及企业中台，安全可控等一体化解决方案，支持手机端和pc端，真正实现了企业管理与移动办公的高效性。',
      head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }],
        ['meta', { name: 'keywords', content: '移动管理平台,移动门户,移动OA,移动办公,移动审批,移动应用门户,移动应用管理,移动APP管理,移动安全管理,在线协同办公,手机OA,手机审批,手机工作流,手机BPM,企业级app管理,企业门户,OA自动化,办公自动化,企业移动平台,移动云平台,MAS,MCM,MAM,MEM,MDM' }],
        ['meta', { itemprop: 'name', content: 'WorkPlus - 企业移动办公管理平台,移动门户,移动办公OA,企业办公沟通,智慧办公解决方案专家' }],
        ['script', { type: 'text/javascript' }, `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2822606,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `]
      ],
    },
  },
  themeConfig: {
    logo: '/logo.jpg',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: "关闭"
                }
              }
            }
          }
        }
      }
    },
    footer: {
      message: `<div class="footer__links" style="padding-bottom: 8px">
        <a class="footer__link-item" target="_blank" href="https://www.workplus.io">公司官网</a>
        <span class="footer__link-separator"> · </span>
        <a class="footer__link-item" target="_blank" href="https://lite.workplus.io">WorkPlus Lite</a>
        <span class="footer__link-separator"> · </span>
        <a class="footer__link-item" target="_blank" href="https://openkunlun.io/">KunLun 中间件平台</a>
      </div>`,
      copyright: `<a class="footer_copyright" href="https://beian.miit.gov.cn" target="_blank" rel="nofollow" title="深圳恒拓高科信息技术有限公司 版权所有">©2015-${new Date().getFullYear()} 深圳恒拓高科信息技术有限公司 版权所有 | 粤ICP备15040561号</a>`
    },
    nav: [
    {
      text: '快速开始',
      link: '/light-app/create',
      activeMatch: '/light-app/'
    }, {
      text: '开放接口',
      link: '/api/getStart',
      activeMatch: '/api/'
    }, {
      text: 'JS-SDK',
      link: '/js-sdk/overview/usage',
      activeMatch: '/js-sdk/'
    }, {
      text: '开发调试',
      link: '/dev-tools/debug',
      activeMatch: '/dev-tools/'
    }, {
      text: '样式定制',
      link: '/design-specification/theme',
      activeMatch: '/design-specification/'
    }, {
      text: '常见问题',
      link: '/qa/app',
      activeMatch: '/qa/'
    }, {
      text: '了解更多',
      items: [
        { text: 'WorkPlus 官网', link: 'https://www.workplus.io/' },
        { text: 'WorkPlus Lite（开源版）', link: 'https://lite.workplus.io/' },
        { text: 'KunLun 中间件平台', link: 'https://openkunlun.io/' },
        { text: 'Cordova 原始文档', link: 'https://open.workplus.io/cordova/' },
      ]
    }],

    sidebar: {
      '/light-app/': { base: '/light-app/', items: sidebarLightApp() },
      '/api/': { base: '/api/', items: sidebarApi() },
      '/js-sdk/': { base: '/js-sdk/', items: sidebarJSSDK() },
      '/dev-tools/': { base: '/dev-tools/', items: sidebarDevtools() },
      '/design-specification/': { base: '/design-specification/', items: sidebarDesign() },
      '/qa/': { base: '/qa/', items: sidebarQA() }
    },

    // 页面小元素i18n
    outline: {
      label: '页面导航',
      level: 'deep'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
  markdown: {
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      md.use(markdownItImsize, { autofill: true })
    }
  }
})

function sidebarLightApp() {
  return [
    {
      text: '应用创建',
      items: [
        { text: '添加内部应用', link: 'create' },
        { text: '添加机器人', link: 'createBot' },
        { text: '添加 ISV 应用', link: 'isv' },
        { text: '上架原生应用', link: 'nativeApp' },
        { text: '离线应用', link: 'offline' },
      ]
    },
    {
      text: '平台接入',
      items: [
        { text: '名词解析', link: 'noun' },
        { text: '账号同步', link: 'sync'},
        { text: '单点登录', link: 'sso' },
        { text: '跳转协议', link: 'urlScheme' },
        { text: '应用消息通知', link: 'message' },
        { text: '应用红点数字', link: 'notify' },
        { text: '机器人', link: 'bot' },
        { text: '工作台', link: 'workbench' },
      ]
    },
  ];
}

function sidebarApi() {
  return [
    {
      text: '开发准备',
      items: [
        { text: 'Token 申请', link: 'getStart' },
        { text: '开发者接口回调', link: 'callback' },
        { text: '全局返回值', link: 'response' },
        { text: '全局错误码', link: 'errorCode' },
      ]
    },
    {
      text: '接口列表',
      items: [
        { text: '账号同步', link: 'sync' },
        { text: 'Ticket 验证', link: 'auth' },
        { text: '用户', link: 'users' },
        { text: '组织架构', base: '/api/organizations/', items: [
          { text: '雇员', link: 'employee' },
          { text: '组织', link: 'org' },
        ] },
        { text: '媒体', base: '/api/medias/', items: [
          { text: '媒体查询', link: 'query' },
          { text: '媒体操作', link: 'vfs' },
          { text: '媒体转换', link: 'translator' },
        ]},
        { text: '应用', base: '/api/app/', items: [
          { text: '应用消息', link: 'mbox' },
          { text: '富文本消息', link: 'richText' },
          { text: '应用范围', link: 'scope' },
          { text: '模板消息', link: 'template' },
        ]},
        { text: '机器人', base: '/api/bot/', items: [
          { text: '接口Token', link: 'token' },
          { text: '被动回调', link: 'callback' },
          { text: '响应消息', link: 'response' },
        ]},
        { text: '日程', link: 'schedule' },
        { text: '流程大师', base: '/api/bpm/', items: [
          { text: '开放接口', link: 'openApi' },
          { text: '事件订阅', link: 'subscription' },
        ]},
      ]
    }
  ];
}

function sidebarJSSDK() {
  return [
    {
      text: 'JS-SDK',
      items: [
        { text: '安装', link: 'overview/usage' },
        { text: '鉴权流程', link: 'overview/auth' },
        { text: '例子及资源', link: 'overview/demo' },
        { text: '自定义方法', link: 'overview/origin' },
        { text: 'PC 客户端 ', link: 'overview/pc-client' }
      ]
    },
    {
      text: '接口列表',
      items: [
        { text: '认证', link: 'auth' },
        { text: '用户', link: 'user' },
        { text: '图片', link: 'image' },
        { text: '文件', link: 'file' },
        { text: '联系人', link: 'contact' },
        { text: '网页', link: 'webview' },
        { text: '网页头部', link: 'header' },
        { text: '弹框', link: 'dialog' },
        { text: '视频', link: 'video' },
        { text: '聊天', link: 'session' },
        { text: '设备', link: 'device' },
        { text: '应用', link: 'app' },
        { text: '网络', link: 'network' },
        { text: '地理位置', link: 'location' },
        { text: '邮箱', link: 'email' },
        { text: '支付', link: 'pay' },
        { text: '页面事件绑定', link: 'eventListener' },
        { text: '存储', link: 'storage' },
        { text: '通用', link: 'shared' },
      ]
    },
  ];
}

function sidebarDesign() {
  return [
    {
      text: '样式定制',
      items: [
        { text: '主题定制', link: 'theme' },
        { text: '设计规范', link: 'visual-norms/style' },
        { text: '资源尺寸', link: 'resource-size' },
      ]
    }
  ];
}

function sidebarDevtools() {
  return [
    {
      text: '轻应用调试',
      items: [
        { text: '安卓真机调试', link: 'debug' },
        { text: 'vConsole', link: 'vconsole' },
      ]
    },
    {
      text: '项目创建',
      items: [
        { text: '项目脚手架', link: 'scaffold' },
      ]
    }
  ];
}

function sidebarQA() {
  return [
    {
      text: '常见问题',
      items: [
        { text: 'WorkPlus APP', link: 'app' },
        { text: '轻应用', link: 'light-app' },
        { text: 'JS-SDK', link: 'js-sdk' }
      ]
    }
  ];
}