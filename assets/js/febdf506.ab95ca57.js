"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8336:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={sidebar_position:8},c="Images",s={unversionedId:"images",id:"images",title:"Images",description:"Rancher Desktop provides the ability to build, push, and pull images via the",source:"@site/docs/images.md",sourceDirName:".",slug:"/images",permalink:"/docs.rancherdesktop.io/docs/images",editUrl:"https://github.com/rancher-sandbox/rancher-desktop-docs/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/images.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Preferences",permalink:"/docs.rancherdesktop.io/docs/preferences"},next:{title:"FAQ",permalink:"/docs.rancherdesktop.io/docs/faq"}},u=[{value:"Using NERDCTL",id:"using-nerdctl",children:[],level:2},{value:"Building Images",id:"building-images",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"images"},"Images"),(0,a.kt)("p",null,"Rancher Desktop provides the ability to build, push, and pull images via the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"NERDCTL")," project."),(0,a.kt)("p",null,"Note, ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," is put into the path automatically.  This occurs during the\ninstaller on Windows, and upon first run on macOS."),(0,a.kt)("h2",{id:"using-nerdctl"},"Using NERDCTL"),(0,a.kt)("p",null,"You can learn about all of the command options by running ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl -h"),". This will\ndisplay the help documentation. The command requires Rancher Desktop to be running\nfor it to work."),(0,a.kt)("p",null,"The initial set of images are stored in the same containerd that Kubernetes uses,\nand are part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace. You can also switch to a namespace called\n",(0,a.kt)("inlineCode",{parentName:"p"},"default")," if you wish to build or pull images into a different namespace. Currently\nthe only way to create other namespaces is to build or pull an image with the\n",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," CLI, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace <NAMESPACE_NAME>")," option."),(0,a.kt)("h2",{id:"building-images"},"Building Images"),(0,a.kt)("p",null,"Building images has a similar feel to existing tools. For example, consider\nrunning ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," from a directory with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"\u276f nerdctl build .\n[+] Building 0.1s (4/4) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 31B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load build context\n => => transferring context: 33B\n => CACHED [1/1] ADD anvil-app /\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," has tags for tagging at the same time as building and other options you've\ncome to expect."),(0,a.kt)("p",null,"If you want to tag an existing image you've built you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl tag"),"\ncommand."))}d.isMDXComponent=!0}}]);