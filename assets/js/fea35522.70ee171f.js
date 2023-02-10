"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3786],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3687:function(e,t,a){var n=a(412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4334),i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),r=a(7294),i=a(4334),l=a(2389),o=a(7392),u=a(7094),s=a(2466),c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:d,groupId:g,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[N,O]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&v.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==N&&(I(t),O(n),null!=g&&w(g,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:x},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},6185:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905)),i=a(5488),l=a(5162),o=a(3687);const u={sidebar_label:"Images",title:"Images"},s=void 0,c={unversionedId:"ui/images",id:"version-1.7/ui/images",title:"Images",description:"The Images tab, allows you to manage the images on your virtual machine.",source:"@site/versioned_docs/version-1.7/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/1.7/ui/images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/images.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"Images",title:"Images"},sidebar:"tutorialSidebar",previous:{title:"Port Forwarding",permalink:"/1.7/ui/port-forwarding"},next:{title:"Troubleshooting",permalink:"/1.7/ui/troubleshooting"}},m={},p=[{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}],d={toc:p};function g(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Images")," tab, allows you to manage the images on your virtual machine."),(0,r.kt)("p",null,"To manage your images using nerdctl instead, refer to the ",(0,r.kt)("a",{parentName:"p",href:"../tutorials/working-with-images"},"Images")," section."),(0,r.kt)(i.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6745).Z,width:"926",height:"593"}))),(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8119).Z,width:"2104",height:"1424"}))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1589).Z,width:"940",height:"626"})))),(0,r.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,r.kt)("p",null,"This feature uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," to scan your images for vulnerabilities and configuration issues."),(0,r.kt)("p",null,"To scan an image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the image list, find the image you want to scan."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"."),(0,r.kt)("li",{parentName:"ol"},"A summary of the vulnerabilities, sorted by the level of severity, are displayed."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},">")," to view the details of each vulnerability, including reference links to learn more about the particular vulnerability.")),(0,r.kt)("h3",{id:"adding-images"},"Adding Images"),(0,r.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,r.kt)("p",null,"Use this option to pull images from a registry to your virtual machine."),(0,r.kt)("p",null,"To pull an image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Pull")," tab."),(0,r.kt)("li",{parentName:"ol"},"Enter the name of the image to pull.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: By default, images are pulled from ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," which uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]")," format. To pull from other registries, include the hostname ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Pull"),".")),(0,r.kt)("h4",{id:"building-images"},"Building Images"),(0,r.kt)("p",null,"Use this option to build an image and add it to your virtual machine."),(0,r.kt)("p",null,"To build an image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Build")," tab."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the image being built. E.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Build"),"."),(0,r.kt)("li",{parentName:"ol"},"In the file browser, select the Dockerfile to build an image with.")))}g.isMDXComponent=!0},1589:function(e,t,a){t.Z=a.p+"assets/images/Linux_Images-3aac1654fed12bd9e031d6de1451fa3d.png"},6745:function(e,t,a){t.Z=a.p+"assets/images/Windows_Images-f137fba4d5015cdb7f5d708aa85c991f.png"},8119:function(e,t,a){t.Z=a.p+"assets/images/macOS_Images-68e52bb4441b93cfcf8b5c95a4f58baf.png"}}]);