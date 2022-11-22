"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9449],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),i=n(4334),l=n(2389),o=n(7392),c=n(7094),s=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:f,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,o.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,c.U)(),[T,O]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=g[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==T&&(E(t),O(r),null!=f&&N(f,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:P,onClick:C},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},2915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={title:"\u529f\u80fd"},c=void 0,s={unversionedId:"references/preferences/application",id:"references/preferences/application",title:"\u529f\u80fd",description:"Preferences",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/references/preferences/application.md",sourceDirName:"references/preferences",slug:"/references/preferences/application",permalink:"/zh/next/references/preferences/application",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/references/preferences/application.md",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"Diagnostics",permalink:"/zh/next/references/features/diagnostics"},next:{title:"\u529f\u80fd",permalink:"/zh/next/references/preferences/virtual-machine"}},u={},p=[{value:"Preferences",id:"preferences",level:2},{value:"Application",id:"application",level:3},{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Behavior",id:"behavior",level:4},{value:"Administrative Access",id:"administrative-access",level:5},{value:"Automatic Updates",id:"automatic-updates-1",level:5},{value:"Statistics",id:"statistics-1",level:5},{value:"Environment",id:"environment",level:4},{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path",level:5}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"preferences"},"Preferences"),(0,a.kt)("p",null,"\u6b64\u9875\u9762\u5141\u8bb8\u4f60\u4fee\u6539 Rancher Desktop \u5b9e\u4f8b\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8981\u8bbf\u95ee ",(0,a.kt)("strong",{parentName:"li"},"Preferences"),"\uff0c\u8bf7\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ","\u2699"," \u56fe\u6807\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5de6\u4fa7\u7684\u9009\u9879\u5361\u6765\u8bbf\u95ee\u4e0d\u540c\u7c7b\u522b\u7684 Rancher Desktop \u9996\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e\u9700\u8981\u66f4\u65b0\u9996\u9009\u9879\u3002\u4e0b\u65b9\u6982\u8ff0\u4e86\u53ef\u7528\u7684\u9996\u9009\u9879\u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8981\u5e94\u7528\u66f4\u65b0\uff0c\u8bf7\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Apply"),"\u3002")),(0,a.kt)("h3",{id:"application"},"Application"),(0,a.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("h4",{id:"automatic-updates"},"Automatic Updates"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,a.kt)("h4",{id:"statistics"},"Statistics"),(0,a.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002")),(0,a.kt)(l.Z,{value:"macOS & Linux",mdxType:"TabItem"},(0,a.kt)("h4",{id:"behavior"},"Behavior"),(0,a.kt)("h5",{id:"administrative-access"},"Administrative Access"),(0,a.kt)("p",null,"\u5141\u8bb8 Rancher Desktop \u5728\u542f\u52a8\u67d0\u4e9b\u64cd\u4f5c\u65f6\u83b7\u5f97\u7ba1\u7406\u8bbf\u95ee\u6743\u9650\uff08sudo \u6743\u9650\uff09\u3002\u8fd9\u80fd\u7528\u4e8e\u589e\u5f3a\u529f\u80fd\uff0c\u5305\u62ec\u6865\u63a5\u7f51\u7edc\u548c\u9ed8\u8ba4 docker socket \u652f\u6301\u3002\u66f4\u6539\u4f1a\u5728 Rancher Desktop \u4e0b\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u3002"),(0,a.kt)("h5",{id:"automatic-updates-1"},"Automatic Updates"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,a.kt)("h5",{id:"statistics-1"},"Statistics"),(0,a.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("h4",{id:"environment"},"Environment"),(0,a.kt)("h5",{id:"\u914d\u7f6e-path"},"\u914d\u7f6e PATH"),(0,a.kt)("p",null,"Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.rd/bin"),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin")," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," \u53d8\u91cf\u4e2d\u3002"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automatic"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Manual"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002")))))}m.isMDXComponent=!0}}]);