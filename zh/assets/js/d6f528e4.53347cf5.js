"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7915],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var r=n(412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",i=a?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(3117),a=n(7294),l=n(4334),o=n(2466),i=n(6775),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),v(e)}),[s,v,l]),tabValues:l}}var b=n(2389),h="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function O(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},5714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),l=n(4866),o=n(5162);n(3687);const i={title:"\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236"},u=void 0,s={unversionedId:"how-to-guides/increasing-open-file-limit",id:"version-1.9-tech-preview/how-to-guides/increasing-open-file-limit",title:"\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236",description:"\u7531\u4e8e Rancher Desktop \u4e3a Pod \u8bbe\u7f6e\u7684\u9ed8\u8ba4 ulimit \u53ef\u80fd\u592a\u4f4e\uff0c\u56e0\u6b64\u4f60\u53ef\u80fd\u60f3\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u7684\u9650\u5236\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u548c Rancher Desktop \u5185\u90e8\u8fdb\u7a0b\u6765\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9-tech-preview/how-to-guides/increasing-open-file-limit.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/increasing-open-file-limit",permalink:"/zh/1.9-tech-preview/how-to-guides/increasing-open-file-limit",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9-tech-preview/how-to-guides/increasing-open-file-limit.md",tags:[],version:"1.9-tech-preview",frontMatter:{title:"\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u811a\u672c",permalink:"/zh/1.9-tech-preview/how-to-guides/provisioning-scripts"},next:{title:"\u79bb\u7ebf\u8fd0\u884c",permalink:"/zh/1.9-tech-preview/how-to-guides/running-air-gapped"}},c={},p=[{value:"macOS &amp; Linux \u6b65\u9aa4",id:"macos--linux-\u6b65\u9aa4",level:2},{value:"Windows \u6b65\u9aa4",id:"windows-\u6b65\u9aa4",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7531\u4e8e Rancher Desktop \u4e3a Pod \u8bbe\u7f6e\u7684\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"p"},"ulimit")," \u53ef\u80fd\u592a\u4f4e\uff0c\u56e0\u6b64\u4f60\u53ef\u80fd\u60f3\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u7684\u9650\u5236\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u548c Rancher Desktop \u5185\u90e8\u8fdb\u7a0b\u6765\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236\u3002"),(0,a.kt)("h2",{id:"macos--linux-\u6b65\u9aa4"},"macOS & Linux \u6b65\u9aa4"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528 lima override.yaml \u7f16\u5199\u914d\u7f6e\u811a\u672c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4ee5\u4e0b\u8def\u5f84\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," \u6587\u4ef6\u3002")),(0,a.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"))),(0,a.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.local/share/rancher-desktop/lima/_config/override.yaml\n")))),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528\u4e0b\u9762\u7684\u811a\u672c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"override.yaml")," \u6587\u4ef6\u4e2d\u7684\u5bb9\u5668\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"ulimit"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Elastic \u5e73\u53f0\uff0c\u8bf7\u4f7f\u7528\u4e0b\u9762\u7684\u811a\u672c\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"vm.max_map_count")," \u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n    sysctl -w vm.max_map_count=262144\n")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u505c\u6b62\u5e76\u91cd\u542f Rancher Desktop \u6765\u8ba9\u65b0\u7684\u9650\u5236\u751f\u6548\u3002"),(0,a.kt)("h2",{id:"windows-\u6b65\u9aa4"},"Windows \u6b65\u9aa4"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u786e\u4fdd Rancher Desktop \u81f3\u5c11\u8fd0\u884c\u8fc7\u4e00\u6b21\u6765\u521d\u59cb\u5316\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"%AppData%\\rancher-desktop\\provisioning")," \u4e2d\u521b\u5efa\u4e00\u4e2a\u914d\u7f6e\u811a\u672c\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"map_count.start"),"\uff0c\u8fd9\u6837\u80fd\u901a\u8fc7\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_map_count")," \u53c2\u6570\u7684\u503c\u6765\u66f4\u65b0\u6253\u5f00\u6587\u4ef6\u7684\u9650\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/sh\n\nsysctl -w vm.max_map_count=262144\n")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u505c\u6b62\u5e76\u91cd\u542f Rancher Desktop \u6765\u8ba9\u53d8\u66f4\u751f\u6548\u3002"))}m.isMDXComponent=!0}}]);