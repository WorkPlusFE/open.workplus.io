
const jsSDKBar = [
    {
    title: 'JS-SDK',
    collapsable: false,
    sidebarDepth: 1,
    children: [
        '/js-sdk/',
        '/js-sdk/overview/usage',
        // '/js-sdk/overview/auth',
        '/js-sdk/overview/urlScheme',
        '/js-sdk/overview/demo',
        '/js-sdk/overview/origin',
        '/js-sdk/overview/changelog',
    ]
    },
    {
    title: '方法列表',
    collapsable: false,
    sidebarDepth: 1,
    children: [
        'auth',
        'user',
        'image',
        'file',
        'contact',
        'webview',
        'header',
        'session',
        'device',
        'app',
        'network',
        'location',
        'email',
        'pay',
        'eventListener',
        // 'notification',
        'shared',
        // 'storage',
    ]
    }
];

module.exports = { jsSDKBar };
