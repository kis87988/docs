(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var b=a(0),c=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,c=function(e,t){if(null==e)return{};var a,b,c={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),j=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},O=function(e){var t=j(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},o=c.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=j(a),o=b,d=O["".concat(p,".").concat(o)]||O[o]||m[o]||r;return a?c.a.createElement(d,n(n({ref:t},l),{},{components:a})):c.a.createElement(d,n({ref:t},l))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,p=new Array(r);p[0]=o;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n.mdxType="string"==typeof e?e:b,p[1]=n;for(var l=2;l<r;l++)p[l]=a[l];return c.a.createElement.apply(null,p)}return c.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},148:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return n})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(2),c=a(6),r=(a(0),a(131)),p={title:"Wechaty Puppet"},n={unversionedId:"puppet",id:"puppet",isDocsHomePage:!1,title:"Wechaty Puppet",description:"The term Puppet in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat\\(that's the reason we call it puppet\\).",source:"@site/docs/puppet.md",permalink:"/docs/puppet",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/website/docs/puppet.md",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1597209945,sidebar:"docs",previous:{title:"Multi-language Support",permalink:"/docs/multi-language"},next:{title:"Concepts",permalink:"/docs/concepts"}},i=[{value:"2. Wechaty Puppet List",id:"2-wechaty-puppet-list",children:[{value:"2.1. For Puppet User",id:"21-for-puppet-user",children:[]},{value:"2.2. For Puppet Builder",id:"22-for-puppet-builder",children:[]}]},{value:"3. Wechaty Puppet Compatibility",id:"3-wechaty-puppet-compatibility",children:[{value:"3.1 Puppet Contact API",id:"31-puppet-contact-api",children:[]},{value:"3.2 Puppet Message API",id:"32-puppet-message-api",children:[]},{value:"3.3 Puppet Room API",id:"33-puppet-room-api",children:[]}]},{value:"4. Learn More",id:"4-learn-more",children:[]}],l={rightToc:i};function j(e){var t=e.components,p=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},l,p,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The term ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet"}),"Puppet")," in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat","(","that's the reason we call it puppet",")","."),Object(r.b)("p",null,"The plugins are named ",Object(r.b)("inlineCode",{parentName:"p"},"PuppetXXX"),", like ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet-puppeteer"}),"PuppetPuppeteer")," is using the ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer"}),"google puppeteer")," to control the ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://wx.qq.com"}),"WeChat Web API")," via a chrome browser, ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/lijiarui/wechaty-puppet-padchat"}),"PuppetPadchat")," is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program. More detail you could go ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet/wiki"}),"Puppet in wiki"),"."),Object(r.b)("p",null,"For a deeper understanding of the Puppet in Wechaty, you can read its source code if you like at ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts"}),"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Puppet Structure",src:a(148).default})),Object(r.b)("h2",{id:"2-wechaty-puppet-list"},"2. Wechaty Puppet List"),Object(r.b)("h3",{id:"21-for-puppet-user"},"2.1. For Puppet User"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Wechaty Puppet"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Backend Protocol"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Npm Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Npm Version"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Stage"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet-puppeteer"}),"PuppetPuppeteer")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Web API via Browser Hooking"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet-puppeteer"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet-puppeteer.svg",alt:"PuppetPuppeteer"}))," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet-puppeteer?activeTab=versions"}),Object(r.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet-puppeteer/next.svg",alt:"npm (tag)"})))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Release-green.svg",alt:"Stage:Release"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/lijiarui/wechaty-puppet-padchat"}),"PuppetPadchat")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"iPad Protocol"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet-padchat"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet-padchat.svg",alt:"PuppetPadchat"})),"   ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet-padchat?activeTab=versions"}),Object(r.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet-padchat/next.svg",alt:"npm (tag)"})))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Release-green.svg",alt:"Stage:Release"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/botorange/wechaty-puppet-padpro"}),"PuppetPadpro")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"iPad Protocol"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Enhance wechaty-puppet-padchat, see more ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty/issues/1668"}),"issue1668")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet-padpro.svg",alt:"PuppetPadpro"})),"   ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet-padpro?activeTab=versions"}),Object(r.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet-padpro.svg",alt:"npm (tag)"})))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Release-green.svg",alt:"Stage:Release"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet-wechat4u"}),"PuppetWechat4u")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Web API via HTTP"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet-wechat4u"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet-wechat4u.svg",alt:"PuppetWechat4u"})),"   ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet-wechat4u?activeTab=versions"}),Object(r.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet-wechat4u/next.svg",alt:"npm (tag)"})))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Alpha-red.svg",alt:"Stage:Release"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/botorange/wechaty-puppet-iosbird"}),"PuppetIosbird")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"iPhone Hook"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet-iosbird"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet-iosbird.svg",alt:"PuppetIosbird"})),"   ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet-iosbird?activeTab=versions"}),Object(r.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet-iosbird.svg",alt:"npm (tag)"})))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Alpha-red.svg",alt:"Stage:Release"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"TBW"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Android Hook"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Android"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0.0.0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Plan-lightgrey.svg",alt:"Stage:Release"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"TBW"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Win32 Hook"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Win32"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0.0.0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Plan-lightgrey.svg",alt:"Stage:Release"})))))),Object(r.b)("h3",{id:"22-for-puppet-builder"},"2.2. For Puppet Builder"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Wechaty Puppet"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Backend Protocol"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Npm Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Npm Version"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Stage"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet"}),"Puppet")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Abstract Base Class"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet.svg",alt:"Puppet"})),"   ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet?activeTab=versions"}),Object(r.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet/next.svg",alt:"npm (tag)"})))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Release-green.svg",alt:"Stage:Release"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet-mock"}),"PuppetMock")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Mocking"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet-mock"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"PuppetMock"})),"   ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"}),Object(r.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"})))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Release-green.svg",alt:"Stage:Release"})))))),Object(r.b)("h2",{id:"3-wechaty-puppet-compatibility"},"3. Wechaty Puppet Compatibility"),Object(r.b)("h3",{id:"31-puppet-contact-api"},"3.1 Puppet Contact API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Contact API"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"wechat4u & puppeteer"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"padchat"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"Iosbird"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Permanent ContactPayload.id"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ContactPayload.friend"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"weixin","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("h3",{id:"32-puppet-message-api"},"3.2 Puppet Message API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Message API"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"wechat4u & puppeteer"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"padchat"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"Iosbird"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"messageSendContact","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"messageFile","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes for Image/Audio/Video No for other Attachments"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes for Image/Audio/Video/other Attachments/UrlLink")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"messageSendFile","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes for Image/Audio/Video No for other Attachments"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes for Image No for other Attachment")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"messageSendUrl","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No"))))),Object(r.b)("h3",{id:"33-puppet-room-api"},"3.3 Puppet Room API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Room API"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"wechat4u & puppeteer"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"padchat"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"Iosbird"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Permanent RoomPayload.id"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"roomQrcode","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"roomCreate","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"roomAdd","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"roomDel","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"roomQuit","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"roomAnnounce","(",")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"roomPayload.owner"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),Object(r.b)("del",{parentName:"td"},"No"))))),Object(r.b)("h2",{id:"4-learn-more"},"4. Learn More"),Object(r.b)("p",null,"Learn more about Wechaty Puppet at ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet/wiki"}),"https://github.com/wechaty/wechaty-puppet/wiki")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Repository: ",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty-puppet"}),"https://github.com/wechaty/wechaty-puppet")),Object(r.b)("li",{parentName:"ul"},"Documentation: ",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"}),"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html")),Object(r.b)("li",{parentName:"ul"},"Puppet Development Guide: ",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty-puppet/wiki/Development"}),"https://github.com/wechaty/wechaty-puppet/wiki/Development")),Object(r.b)("li",{parentName:"ul"},"Puppet Related Links: ",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"}),"https://github.com/wechaty/wechaty-puppet/wiki/Links"))))}j.isMDXComponent=!0}}]);