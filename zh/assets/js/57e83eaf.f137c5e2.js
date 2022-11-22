"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2389],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?t.createElement(m,l(l({ref:n},s),{},{components:r})):t.createElement(m,l({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(7294),a=r(4334),o="tabItem_Ymn6";function l(e){let{children:n,hidden:r,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},n)}},5488:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(3117),a=r(7294),o=r(4334),l=r(2389),i=r(7392),c=r(7094),u=r(2466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var n;const{lazy:r,block:l,defaultValue:f,values:d,groupId:m,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:n,label:r,attributes:t}}=e;return{value:n,label:r,attributes:t}})),y=(0,i.l)(h,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===f?f:f??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:O}=(0,c.U)(),[w,E]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&h.some((n=>n.value===e))&&E(e)}const T=e=>{const n=e.currentTarget,r=N.indexOf(n),t=h[r].value;t!==w&&(P(n),E(t),null!=m&&O(m,String(t)))},j=e=>{var n;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;r=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;r=N[n]??N[N.length-1];break}}null==(n=r)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:n,label:r,attributes:l}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:j,onClick:T},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===n})}),r??n)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,l.Z)();return a.createElement(f,(0,t.Z)({key:String(n)},e))}},3757:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var t=r(3117),a=(r(7294),r(3905));r(5488),r(5162);const o={title:"\u529f\u80fd"},l=void 0,i={unversionedId:"references/preferences/container-engine",id:"references/preferences/container-engine",title:"\u529f\u80fd",description:"Preferences",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/references/preferences/container-engine.md",sourceDirName:"references/preferences",slug:"/references/preferences/container-engine",permalink:"/zh/next/references/preferences/container-engine",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/references/preferences/container-engine.md",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd",permalink:"/zh/next/references/preferences/wsl"},next:{title:"\u529f\u80fd",permalink:"/zh/next/references/preferences/kubernetes"}},c={},u=[{value:"Preferences",id:"preferences",level:2},{value:"Container Runtime",id:"container-runtime",level:3}],s={toc:u};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"preferences"},"Preferences"),(0,a.kt)("p",null,"\u6b64\u9875\u9762\u5141\u8bb8\u4f60\u4fee\u6539 Rancher Desktop \u5b9e\u4f8b\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8981\u8bbf\u95ee ",(0,a.kt)("strong",{parentName:"li"},"Preferences"),"\uff0c\u8bf7\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ","\u2699"," \u56fe\u6807\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5de6\u4fa7\u7684\u9009\u9879\u5361\u6765\u8bbf\u95ee\u4e0d\u540c\u7c7b\u522b\u7684 Rancher Desktop \u9996\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e\u9700\u8981\u66f4\u65b0\u9996\u9009\u9879\u3002\u4e0b\u65b9\u6982\u8ff0\u4e86\u53ef\u7528\u7684\u9996\u9009\u9879\u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8981\u5e94\u7528\u66f4\u65b0\uff0c\u8bf7\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Apply"),"\u3002")),(0,a.kt)("h3",{id:"container-runtime"},"Container Runtime"),(0,a.kt)("p",null,"\u4e3a Rancher Desktop \u8bbe\u7f6e",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9 ",(0,a.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," \u4e3a\u5bb9\u5668\u63d0\u4f9b\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 nerdctl \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," \u6765\u542f\u7528 D\u200b\u200bocker API \u548c Docker CLI\u3002\u4e00\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002"),(0,a.kt)("p",null,"\u5207\u6362\u5230\u4e0d\u540c\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u73b0\u6709\u5bb9\u5668\u8fd0\u884c\u65f6\u6784\u5efa\u6216\u62c9\u53d6\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u955c\u50cf\u5728\u5207\u6362\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4e0d\u53ef\u7528\u3002")))}p.isMDXComponent=!0}}]);