"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7752],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3117),a=n(7294),o=n(4334),i=n(2389),s=n(7392),c=n(7094),l=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:f,groupId:m,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,c.U)(),[O,E]=(0,a.useState)(y),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&g.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,n=D.indexOf(t),r=g[n].value;r!==O&&(T(t),E(r),null!=m&&w(m,String(r)))},N=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>D.push(e),onKeyDown:N,onClick:x},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},9240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));n(5488),n(5162);const o={sidebar_label:"Diagnostics",title:"Diagnostics"},i=void 0,s={unversionedId:"references/features/diagnostics",id:"references/features/diagnostics",title:"Diagnostics",description:"Note: Rancher Desktop doesn't send the diagnostics data to any remote server for processing or storing.",source:"@site/docs/references/features/diagnostics.md",sourceDirName:"references/features",slug:"/references/features/diagnostics",permalink:"/next/references/features/diagnostics",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/references/features/diagnostics.md",tags:[],version:"current",frontMatter:{sidebar_label:"Diagnostics",title:"Diagnostics"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/next/references/features/troubleshooting"},next:{title:"Application",permalink:"/next/references/preferences/application"}},c={},l=[],u={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Rancher Desktop ",(0,a.kt)("em",{parentName:"p"},"doesn't")," send the diagnostics data to any remote server for processing or storing."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Diagnostics")," feature runs several checks in the background to detect common problems such as missing minimum requirements, misconfigurations, etc., in your environment to help you self-troubleshoot and fix Rancher Desktop application issues."),(0,a.kt)("p",null,"The diagnostics checks are run every time when the application launches. If there are any problems identified then the count of failed checks is shown next to the ",(0,a.kt)("em",{parentName:"p"},"Diagnostics")," menu text in the left navigation bar, indicating that something needs your attention. The ",(0,a.kt)("em",{parentName:"p"},"Diagnostics")," tab displays the results of the diagnostics tests, highlighting areas that need attention, and guides you to resolve problems."),(0,a.kt)("p",null,"On this tab you can mute/unmute individual checks if you have a non-standard setup and know that these checks don't apply to your situation. You can also rerun the diagnostics anytime to verify that changes you have made to your environment have rectified the problem."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3931).Z,width:"1150",height:"737"})))}p.isMDXComponent=!0},3931:function(e,t,n){t.Z=n.p+"assets/images/diagnostics-checks-table-971df7ee385bade2b8489134d79e2984.png"}}]);