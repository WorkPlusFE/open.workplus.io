import{o as s,c as i,b as e,F as l,i as c,n as _,t as o}from"./app.3c883d3f.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const d={name:"HomeFeature",data(){return{apps:[{title:"\u5355\u70B9\u767B\u5F55",link:"light-app/sso.html",image:"/home/1-sso.png",content:"\u901A\u8FC7 WorkPlus \u5F00\u653E\u63A5\u53E3\uFF0C\u53EF\u4EE5\u4EE5\u5E94\u7528\u8EAB\u4EFD\u5BF9\u7528\u6237\u8FDB\u884C Ticket \u6821\u9A8C\uFF0C\u5B9E\u73B0\u5355\u70B9\u767B\u5F55\u3002"},{title:"JS-SDK",link:"js-sdk/",image:"/home/1-js-sdk.png",content:"WorkPlus \u79FB\u52A8\u7AEF WebView \u63D0\u4F9B\u5F3A\u5927\u7684\u539F\u751F\u80FD\u529B\uFF0C\u901A\u8FC7 JS-SDK \u53EF\u4EE5\u8F7B\u677E\u5728 H5 \u5E94\u7528\u4E2D\u8C03\u7528\u539F\u751F\u80FD\u529B\uFF0C\u4F8B\u5982\u62CD\u7167\u3001\u4E8C\u7EF4\u7801\u8BC6\u522B\u7B49\u3002"},{title:"\u6D88\u606F\u63A8\u9001",link:"light-app/message.html",image:"/home/1-message.png",content:"\u901A\u8FC7\u5E73\u53F0\u80FD\u529B\uFF0C\u53EF\u4EE5\u5BF9\u67D0\u4E2A\u5E94\u7528\u7684\u4F7F\u7528\u8005\u63A8\u9001\u4E0D\u540C\u7C7B\u578B\u7684\u6D88\u606F\uFF0C\u5B83\u7684\u8868\u73B0\u8DDF IM \u804A\u5929\u7C7B\u4F3C\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5E94\u7528\u4F1A\u8BDD\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6253\u5F00\u9605\u8BFB\u6240\u6709\u6D88\u606F\u3002"}],clients:[{title:"\u4E3B\u9898\u5B9A\u5236",link:"design-specification/theme.html",image:"/home/2-theme.png",content:"\u9664\u57FA\u672C\u7684\u660E\u4EAE\u53CA\u6697\u9ED1\u6A21\u5F0F\u5916\uFF0CWorkPlus \u5E73\u53F0\u652F\u6301\u66F4\u591A\u7684\u4E3B\u9898\u5B9A\u5236\u53CA\u5207\u6362\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7684\u4F01\u4E1A\u6587\u5316\u53CA\u5E94\u7528\u573A\u666F\u3002"},{title:"\u5DE5\u4F5C\u53F0",link:"light-app/workbench.html",image:"/home/2-workbench.png",content:"\u53EF\u6839\u636E\u4E0D\u540C\u4EBA\u5458\u7684\u9700\u6C42\u6765\u5B9A\u4E49\u5DE5\u4F5C\u53F0\u5361\u7247\uFF0C\u901A\u8FC7\u5361\u7247\u7EC4\u5408\u7684\u65B9\u5F0F\u6765\u6253\u9020\u4E2A\u6027\u5316\u7684\u5DE5\u4F5C\u53F0\uFF0C\u771F\u6B63\u5B9E\u73B0\u201C\u5343\u4EBA\u5343\u9762\u201D\u3002"},{title:"\u8F7B\u5E94\u7528\u4E3B\u9898",link:"design-specification/theme.html#\u5FEB\u901F\u5F00\u59CB",image:"/home/2-app-theme.png",content:"\u9664\u5BA2\u6237\u7AEF\u7684\u4E3B\u9898\u53EF\u4EE5\u5B9A\u5236\u5916\uFF0C\u8F7B\u5E94\u7528\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5F15\u5165\u5BA2\u6237\u7AEF\u672C\u5730\u4E3B\u9898\u6837\u5F0F\u6587\u4EF6\uFF0C\u5B9E\u73B0\u5168\u5C40\u6837\u5F0F\u4E00\u81F4\u3002"}],others:[{title:"\u540C\u6B65\u7A0B\u5E8F",link:"light-app/sync.html",icon:"/home/3-sync.png",content:"\u652F\u6301 LDAP\u3001API\u3001Excel \u5BFC\u5165\u7B49\u65B9\u5F0F\uFF0C\u901A\u8FC7\u5B9A\u65F6\u4EFB\u52A1\u8BFB\u53D6\u4F01\u4E1A\u7EC4\u7EC7\u4EBA\u5458\u6570\u636E\u53CA\u72B6\u6001\uFF0C\u5E76\u5168\u91CF\u6216\u589E\u91CF\u5730\u5BFC\u5165\u5230 WorkPlus \u5E73\u53F0\u4E2D\u3002"},{title:"\u5E94\u7528\u8C03\u8BD5",link:"dev-tools/debug.html",icon:"/home/3-debug.png",content:"\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u8BBE\u7F6E\u5F00\u542F\u5B89\u5353\u5BA2\u6237\u7AEF\u7684\u771F\u673A\u8C03\u8BD5\uFF0C\u4E5F\u53EF\u542F\u52A8\u5168\u5C40 VConsole \u63D2\u4EF6\uFF0C\u5FEB\u901F\u8C03\u8BD5\u5B9A\u4F4D\u95EE\u9898\u3002"},{title:"\u9879\u76EE\u811A\u624B\u67B6",link:"dev-tools/scaffold.html",icon:"/home/3-project.png",content:"WorkPlus \u524D\u7AEF\u56E2\u961F\u63D0\u4F9B\u57FA\u4E8E Vue3.0 \u7684\u9879\u76EE\u5F00\u53D1\u811A\u624B\u67B6\uFF0C\u6DF1\u5EA6\u96C6\u6210\u5E73\u53F0\u80FD\u529B\uFF0C\u52A9\u4F60\u5FEB\u901F\u5F00\u53D1\u3002"},{title:"\u8BBE\u8BA1\u89C4\u8303",link:"design-specification/basic-principles.html",icon:"/home/3-design.png",content:"\u57FA\u4E8E\u591A\u5E74\u4F01\u4E1A\u670D\u52A1\u5B9E\u8DF5\uFF0C\u5927\u91CF\u4F01\u4E1A\u573A\u666F\uFF0C\u6211\u4EEC\u62DF\u5B9A\u4E86\u4E00\u4EFD\u8BBE\u8BA1\u89C4\u8303\uFF0C\u4EE5\u6307\u5BFC\u8BBE\u8BA1\u6216\u5F00\u53D1\u51FA\u4F53\u9A8C\u81EA\u7136\uFF0C\u89C6\u89C9\u53CB\u597D\u4E00\u81F4\u7684\u5E94\u7528\u7A0B\u5E8F\u3002"}]}}},r={class:"w6s-home"},h=e("header",{class:"w6s-home__header"},[e("div",null,[e("h1",null,"WorkPlus \u5F00\u53D1\u6587\u6863"),e("p",null,"\u5728\u8FD9\u91CC\u4F60\u53EF\u4EE5\u627E\u5230\u5E94\u7528\u5F00\u53D1\u3001\u5BA2\u6237\u7AEF\u5B9A\u5236\u7B49\u6307\u5357\u548C API \u8BF4\u660E\uFF0C\u8BA9\u60A8\u7684\u4E1A\u52A1\u7CFB\u7EDF\u5FEB\u901F\u79FB\u52A8\u5316\u3001\u6570\u5B57\u5316\u3002")])],-1),m={class:"w6s-home__container"},u={class:"w6s-home__guide"},g=e("h1",{class:"guide-title"}," \u5E94\u7528\u5F00\u53D1 ",-1),p={class:"guide-list"},k=["href"],v={class:"guide-item__title"},f={class:"guide-item__extra"},b={class:"w6s-home__guide"},w=e("h1",{class:"guide-title"}," \u5BA2\u6237\u7AEF\u5B9A\u5236 ",-1),P={class:"guide-list"},x=["href"],y={class:"guide-item__title"},W={class:"guide-item__extra"},S={class:"w6s-home__guide"},j=e("h1",{class:"guide-title"}," \u5DE5\u5177\u4E0E\u8D44\u6E90 ",-1),F={class:"resource-list"},D=["href"],H={class:"resource-item__logo"},V=["src","alt"],A={class:"resource-item__content"},B={class:"resource-item__title"},I={class:"resource-item__subtitle"};function $(E,J,K,L,n,z){return s(),i("div",r,[h,e("div",m,[e("div",u,[g,e("div",p,[(s(!0),i(l,null,c(n.apps,t=>(s(),i("a",{class:"guide-item",href:t.link},[e("div",{class:"guide-item__logo",style:_({"background-image":`url('${t.image}')`})},null,4),e("div",v,o(t.title),1),e("div",f,o(t.content),1)],8,k))),256))])]),e("div",b,[w,e("div",P,[(s(!0),i(l,null,c(n.clients,t=>(s(),i("a",{class:"guide-item",href:t.link},[e("div",{class:"guide-item__logo",style:_({"background-image":`url('${t.image}')`})},null,4),e("div",y,o(t.title),1),e("div",W,o(t.content),1)],8,x))),256))])]),e("div",S,[j,e("div",F,[(s(!0),i(l,null,c(n.others,t=>(s(),i("a",{class:"resource-item",href:t.link},[e("div",H,[e("img",{src:t.icon,alt:t.title},null,8,V)]),e("div",A,[e("div",B,o(t.title),1),e("div",I,[e("p",null,o(t.content),1)])])],8,D))),256))])])])])}var N=a(d,[["render",$]]);export{N as default};
