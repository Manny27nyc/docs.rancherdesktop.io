"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7601],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},i),{},{components:n})):r.createElement(m,l({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(3117),a=n(7294),o=n(4334),l=n(2466),s=n(6775),c=n(1980),u=n(7392),i=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=c??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=n(2389),g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=u[n].value;r!==s&&(p(t),c(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},8442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"Rancher on Rancher Desktop"},c=void 0,u={unversionedId:"how-to-guides/rancher-on-rancher-desktop",id:"version-1.8/how-to-guides/rancher-on-rancher-desktop",title:"Rancher on Rancher Desktop",description:"While Rancher and Rancher Desktop share the Rancher name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop.",source:"@site/versioned_docs/version-1.8/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/1.8/how-to-guides/rancher-on-rancher-desktop",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.8/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"1.8",frontMatter:{title:"Rancher on Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/1.8/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold and Rancher Desktop",permalink:"/1.8/how-to-guides/skaffold-and-rancher-desktop"}},i={},p=[],d={toc:p};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and ",(0,a.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop")," share the ",(0,a.kt)("em",{parentName:"p"},"Rancher")," name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop."),(0,a.kt)("p",null,"This guide outlines steps to install Rancher Dashboard on Rancher Desktop using ",(0,a.kt)("inlineCode",{parentName:"p"},"container runtime")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," (local environment):"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You may encounter issues if the supporting utilities (ex: helm), or your workload versions are incompatible with the Kubernetes version in your session. As a potential fix, you can switch to a compatible Kubernetes version via the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/getting-started/features/#kubernetes"},"Preferences > Kubernetes")," dialog. Supported Kubernetes platforms for Rancher are available on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-1/"},"support matrix page"),"."),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,a.kt)(l.Z,{value:"helm",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"1: Add Jetstack charts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,a.kt)("p",null,"2: Add latest Rancher charts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,a.kt)("p",null,"3: Create cert-manager namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cert-manager\n")),(0,a.kt)("p",null,"4: Install cert-manager services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.7.1 --set installCRDs=true\n")),(0,a.kt)("p",null,"5: Create cattle-system namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cattle-system\n")),(0,a.kt)("p",null,"6: Install Rancher application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n")))),(0,a.kt)("p",null,"The installation takes a few minutes to complete. After the installation, you can access the Rancher UI as follows: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installed through ",(0,a.kt)("inlineCode",{parentName:"li"},"container runtime"),": ",(0,a.kt)("a",{parentName:"li",href:"https://localhost:8443/"},"https://localhost:8443/")," "),(0,a.kt)("li",{parentName:"ul"},"Installed through ",(0,a.kt)("inlineCode",{parentName:"li"},"helm")," ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.rd.localhost/"},"https://rancher.rd.localhost/"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4563).Z,width:"1189",height:"875"})),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,a.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl ps\n")),(0,a.kt)("p",null,"2: Get the Bootstrap Password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,a.kt)("p",null,"3: Bootstrap Password example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,a.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,a.kt)("p",null,"2: Get the Bootstrap Password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,a.kt)("p",null,"3: Bootstrap Password example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n")))),(0,a.kt)("p",null,"Follow the wizard instructions and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Continue")," to land on the main Rancher UI page."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2326).Z,width:"1589",height:"979"})),(0,a.kt)("p",null,"From the Rancher UI, you can manage your local cluster, node, and more. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/"},"Rancher Docs"),"."))}h.isMDXComponent=!0},2326:function(e,t,n){t.Z=n.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},4563:function(e,t,n){t.Z=n.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"}}]);