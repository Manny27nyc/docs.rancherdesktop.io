"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4175],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var i=n(10412);const a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",l=a?"macOS":r?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},47543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var i=n(83117),a=(n(67294),n(3905));n(93687);const r={title:"Increasing Open File Limit"},o=void 0,l={unversionedId:"how-to-guides/increasing-open-file-limit",id:"how-to-guides/increasing-open-file-limit",title:"Increasing Open File Limit",description:"You may wish to increase the open file limit as Rancher Desktop's default ulimit setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes.",source:"@site/docs/how-to-guides/increasing-open-file-limit.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/increasing-open-file-limit",permalink:"/next/how-to-guides/increasing-open-file-limit",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/increasing-open-file-limit.md",tags:[],version:"current",frontMatter:{title:"Increasing Open File Limit"},sidebar:"tutorialSidebar",previous:{title:"Provisioning Scripts",permalink:"/next/how-to-guides/provisioning-scripts"},next:{title:"Running When Offline",permalink:"/next/how-to-guides/running-air-gapped"}},s={},p=[{value:"macOS &amp; Linux Steps",id:"macos--linux-steps",level:2},{value:"Windows Steps",id:"windows-steps",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=c("Tabs"),d=c("TabItem"),m={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/increasing-open-file-limit"})),(0,a.kt)("p",null,"You may wish to increase the open file limit as Rancher Desktop's default ",(0,a.kt)("inlineCode",{parentName:"p"},"ulimit")," setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes."),(0,a.kt)("h2",{id:"macos--linux-steps"},"macOS & Linux Steps"),(0,a.kt)("p",null,"First, use lima override.yaml to write the provisioning scripts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," file at below path")),(0,a.kt)(u,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(d,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"))),(0,a.kt)(d,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.local/share/rancher-desktop/lima/_config/override.yaml\n")))),(0,a.kt)("p",null,"You can then use the script below to increase the ",(0,a.kt)("inlineCode",{parentName:"p"},"ulimit")," for containers inside your created ",(0,a.kt)("inlineCode",{parentName:"p"},"override.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n")),(0,a.kt)("p",null,"If using the Elastic platform, please use the script below to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"vm.max_map_count")," parameter as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n    sysctl -w vm.max_map_count=262144\n")),(0,a.kt)("p",null,"Lastly, please stop and restart Rancher Desktop in order for the updated limits to take effect."),(0,a.kt)("h2",{id:"windows-steps"},"Windows Steps"),(0,a.kt)("p",null,"First, be sure that you have run Rancher Desktop at least once in order for the configurations to initialize."),(0,a.kt)("p",null,"You can then create a provisioning script, say ",(0,a.kt)("inlineCode",{parentName:"p"},"map_count.start"),", at ",(0,a.kt)("inlineCode",{parentName:"p"},"%AppData%\\rancher-desktop\\provisioning")," with the below code to update the open file limit by increasing the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_map_count")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/sh\n\nsysctl -w vm.max_map_count=262144\n")),(0,a.kt)("p",null,"Lastly, please stop and restart Rancher Desktop for these changes to take effect."))}f.isMDXComponent=!0}}]);