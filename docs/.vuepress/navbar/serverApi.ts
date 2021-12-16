export const serverApi = { 
  text: '服务端接口', 
  children: [
    {
      text: '开发准备',
      children: [
        '/api/getStart',
        '/api/callback',
        '/api/response',
        '/api/errorCode',
      ]
    },
    {
      text: '接口列表',
      children: [
        '/api/auth',
        '/api/sync',
        '/api/users',
        { text: '组织架构', link: '/api/organizations/employee'},
        { text: '媒体', link: '/api/medias/query'},
        { text: '应用', link: '/api/app/mbox'},
      ]
    }
  ]
};