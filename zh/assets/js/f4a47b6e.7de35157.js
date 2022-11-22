"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8637],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=i(r),b=a,d=f["".concat(s,".").concat(b)]||f[b]||p[b]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(3117),a=r(7294),l=r(4334),o=r(2389),u=r(7392),s=r(7094),i=r(2466),c="tabList__CuJ",p="tabItem_LNqP";function f(e){var t;const{lazy:r,block:o,defaultValue:f,values:b,groupId:d,className:m}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=b??k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,u.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===f?f:f??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[E,O]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=d){const e=g[d];null!=e&&e!==E&&v.some((t=>t.value===e))&&O(e)}const K=e=>{const t=e.currentTarget,r=w.indexOf(t),n=v[r].value;n!==E&&(T(t),O(n),null!=d&&N(d,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"Enter":K(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]??w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},m)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:P,onClick:K},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),r??t)}))),r?(0,a.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,o.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}},4473:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return i}});var n=r(3117),a=(r(7294),r(3905));r(5488),r(5162);const l={title:"\u529f\u80fd"},o=void 0,u={unversionedId:"references/preferences/kubernetes",id:"references/preferences/kubernetes",title:"\u529f\u80fd",description:"Preferences",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/references/preferences/kubernetes.md",sourceDirName:"references/preferences",slug:"/references/preferences/kubernetes",permalink:"/zh/next/references/preferences/kubernetes",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/references/preferences/kubernetes.md",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd",permalink:"/zh/next/references/preferences/container-engine"},next:{title:"Dependency Versions",permalink:"/zh/next/references/dependency-versions"}},s={},i=[{value:"Preferences",id:"preferences",level:2},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Enable Kubernetes",id:"enable-kubernetes",level:4},{value:"Kubernetes Version",id:"kubernetes-version",level:4},{value:"Kubernetes Port",id:"kubernetes-port",level:4},{value:"Enable Traefik",id:"enable-traefik",level:4}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"preferences"},"Preferences"),(0,a.kt)("p",null,"\u6b64\u9875\u9762\u5141\u8bb8\u4f60\u4fee\u6539 Rancher Desktop \u5b9e\u4f8b\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8981\u8bbf\u95ee ",(0,a.kt)("strong",{parentName:"li"},"Preferences"),"\uff0c\u8bf7\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ","\u2699"," \u56fe\u6807\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5de6\u4fa7\u7684\u9009\u9879\u5361\u6765\u8bbf\u95ee\u4e0d\u540c\u7c7b\u522b\u7684 Rancher Desktop \u9996\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e\u9700\u8981\u66f4\u65b0\u9996\u9009\u9879\u3002\u4e0b\u65b9\u6982\u8ff0\u4e86\u53ef\u7528\u7684\u9996\u9009\u9879\u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8981\u5e94\u7528\u66f4\u65b0\uff0c\u8bf7\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Apply"),"\u3002")),(0,a.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("h4",{id:"enable-kubernetes"},"Enable Kubernetes"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Kubernetes\u3002\u7981\u7528 Kubernetes \u540e\uff0c\u4f60\u53ef\u4ee5\u53ea\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerd")," \u6765\u51cf\u5c11\u8d44\u6e90\u6d88\u8017\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKubernetes \u662f\u542f\u7528\u7684\u3002"),(0,a.kt)("p",null,"\u8981\u542f\u7528/\u7981\u7528 Kubernetes\uff0c\u53ea\u9700\u9009\u4e2d/\u53d6\u6d88\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," \u590d\u9009\u6846\u3002\u542f\u7528/\u7981\u7528 Kubernetes \u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u91cd\u65b0\u542f\u52a8\u3002\u7981\u7528 Kubernetes \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\uff0c\u91cd\u65b0\u542f\u7528 Kubernetes \u65f6\uff0c\u4f60\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,a.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"\u8be5\u9009\u9879\u663e\u793a\u4e86 Rancher Desktop \u5b9e\u4f8b\u53ef\u4ee5\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u5347\u7ea7\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u8fdb\u884c\u68c0\u67e5\uff0c\u770b\u76ee\u6807 Kubernetes \u7248\u672c\u662f\u5426\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u4f1a\u4e0b\u8f7d\u5bf9\u5e94\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,a.kt)("p",null,"\u964d\u7ea7\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,a.kt)("p",null,"\u8981\u5207\u6362\u7248\u672c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes version")," \u4e0b\u62c9\u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u8f6c\u6362\u7684\u7248\u672c\u3002")),(0,a.kt)("h4",{id:"kubernetes-port"},"Kubernetes Port"),(0,a.kt)("p",null,"\u8bbe\u7f6e Kubernetes \u66b4\u9732\u7684\u7aef\u53e3\u3002\u5982\u679c\u6709\u591a\u4e2a K3s \u5b9e\u4f8b\u6b63\u5728\u8fd0\u884c\uff0c\u4f7f\u7528\u6b64\u8bbe\u7f6e\u53ef\u4ee5\u907f\u514d\u7aef\u53e3\u51b2\u7a81\u3002"),(0,a.kt)("h4",{id:"enable-traefik"},"Enable Traefik"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Traefik\u3002\u7981\u7528 Traefik \u540e\uff0c\u4f60\u53ef\u4ee5\u91ca\u653e\u7aef\u53e3 80 \u548c 443\uff0c\u4ee5\u4fbf\u5c06\u5176\u7528\u4e8e\u5907\u7528 ingress \u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTraefik \u662f\u542f\u7528\u7684\u3002"),(0,a.kt)("p",null,"\u7981\u7528 Traefik \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\u3002"))}p.isMDXComponent=!0}}]);