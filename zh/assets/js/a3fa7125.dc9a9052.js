"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9220],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46243:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=t(83117),o=(t(67294),t(3905));const i={sidebar_label:"\u4ee3\u7406",title:"\u4ee3\u7406"},a=void 0,c={unversionedId:"ui/preferences/wsl/proxy",id:"version-1.9/ui/preferences/wsl/proxy",title:"\u4ee3\u7406",description:"WSL Proxy",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/ui/preferences/wsl/proxy.md",sourceDirName:"ui/preferences/wsl",slug:"/ui/preferences/wsl/proxy",permalink:"/zh/1.9/ui/preferences/wsl/proxy",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/wsl/proxy.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"\u4ee3\u7406",title:"\u4ee3\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc",permalink:"/zh/1.9/ui/preferences/wsl/network"},next:{title:"\u901a\u7528",permalink:"/zh/1.9/ui/preferences/container-engine/general"}},p={},l=[{value:"WSL Proxy",id:"wsl-proxy",level:3},{value:"Proxy address",id:"proxy-address",level:3},{value:"Authentication information",id:"authentication-information",level:3}],s={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Windows_wsl_tabProxy.png",alt:null})),(0,o.kt)("h3",{id:"wsl-proxy"},"WSL Proxy"),(0,o.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u8bbe\u7f6e\u3002")),(0,o.kt)("p",null,"Rancher Desktop \u73b0\u5728\u5141\u8bb8\u4e3a Windows \u7528\u6237\u63d0\u4f9b\u672c\u5730\u3001\u4f01\u4e1a\u6216 VPN \u4ee3\u7406\u670d\u52a1\u5668\u652f\u6301\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy")," \u9009\u9879\u5361\u542f\u7528\u6216\u7981\u7528\u8be5\u5b9e\u73b0\uff0c\u4ece\u800c\u6355\u83b7\u7f51\u7edc\u6d41\u91cf\u5e76\u5c06\u5176\u8f6c\u53d1\u5230 HTTP \u4ee3\u7406\u3002\u8f93\u5165\u6240\u6709\u4fe1\u606f\u540e\uff0c\u5355\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Apply")," \u6309\u94ae\u6765\u4f7f\u66f4\u6539\u7acb\u5373\u751f\u6548\u3002"),(0,o.kt)("h3",{id:"proxy-address"},"Proxy address"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy address")," \u5b57\u6bb5\u4e2d\u8f93\u5165\u4ee3\u7406 IP \u5730\u5740\u548c\u7aef\u53e3\u53f7\u3002"),(0,o.kt)("h3",{id:"authentication-information"},"Authentication information"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u4ee3\u7406\u9700\u8981\u8eab\u4efd\u8ba4\u8bc1\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication information")," \u5b57\u6bb5\u4e2d\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"))}u.isMDXComponent=!0}}]);