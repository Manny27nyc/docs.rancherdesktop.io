"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2539],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const o={title:"Working with Images"},i=void 0,l={unversionedId:"tutorials/working-with-images",id:"tutorials/working-with-images",title:"Working with Images",description:"Rancher Desktop provides the ability to build, push, and pull images via the",source:"@site/docs/tutorials/working-with-images.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-images",permalink:"/next/tutorials/working-with-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/tutorials/working-with-images.md",tags:[],version:"current",frontMatter:{title:"Working with Images"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/next/ui/preferences/kubernetes"},next:{title:"Working with Containers",permalink:"/next/tutorials/working-with-containers"}},s={},p=[{value:"General Usage",id:"general-usage",level:2},{value:"Listing Images",id:"listing-images",level:2},{value:"Building Images",id:"building-images",level:2},{value:"Building Local Images",id:"building-local-images",level:3},{value:"Tagging Images",id:"tagging-images",level:2},{value:"Removing Images",id:"removing-images",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("Tabs"),d=c("TabItem"),m={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/tutorials/working-with-images"})),(0,r.kt)("p",null,"Rancher Desktop provides the ability to build, push, and pull images via the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"NERDCTL")," project and the Docker CLI."),(0,r.kt)("p",null,"Note, both ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," are put into the path automatically. This occurs during the installer on Windows, and upon first run on macOS and Linux."),(0,r.kt)("h2",{id:"general-usage"},"General Usage"),(0,r.kt)("p",null,"Using either tool requires Rancher Desktop to be running with the appropriate container runtime. For ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the containerd runtime. For ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", use the Moby runtime."),(0,r.kt)("p",null,"You can learn about all of the command options and display the help documentation by running:"),(0,r.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl -h\n")),(0,r.kt)("p",null,"Unlike Docker, containerd features its own namespaces. By default, nerdctl images are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace. If you want your images available for use by Kubernetes, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--namespace k8s.io")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-n k8s.io")," CLI argument. You can also switch to a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," or any other name using the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--namespace <NAMESPACE_NAME>"),".  Note that nerdctl namespaces are separate and independent from Kubernetes and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," namespaces.")),(0,r.kt)(d,{value:"docker",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker --help\n")))),(0,r.kt)("h2",{id:"listing-images"},"Listing Images"),(0,r.kt)("p",null,"To see the images currently available, run the following command:"),(0,r.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl images\n"))),(0,r.kt)(d,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker images\n")))),(0,r.kt)("h2",{id:"building-images"},"Building Images"),(0,r.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Building images has a similar feel to existing tools. For example, consider\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," from a directory with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build .\n[+] Building 0.1s (4/4) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 31B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load build context\n => => transferring context: 33B\n => CACHED [1/1] ADD anvil-app /\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -t TAG .\n")),(0,r.kt)("p",null,"To build an image for use with Kubernetes, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -n k8s.io .\n"))),(0,r.kt)(d,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"Consider running ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," from a directory with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is\nusing a scratch image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker build .\nSending build context to Docker daemon  13.93MB\nStep 1/5 : FROM some-repo/some-image\n ---\x3e e57ace221dff\n...\n ---\x3e fd984c4cbf97\nSuccessfully built fd984c4cbf97\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker")," has options for tagging at the same time as building and other options you've\ncome to expect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker build -t TAG .\n")))),(0,r.kt)("h3",{id:"building-local-images"},"Building Local Images"),(0,r.kt)("p",null,"In order to demonstrate the steps to build local images and run apps, a sample nodejs app is provided within the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git"},"Rancher Desktop docs repository"),". To get started, clone the repository and cd into ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/express-sample")," in a terminal."),(0,r.kt)("p",null,"Run the following command to build image from Dockerfile:"),(0,r.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t expressapp:v1.0 .\n"))),(0,r.kt)(d,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t expressapp:v1.0 .\n")))),(0,r.kt)("p",null,"Run the following command to run container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl run --image expressapp:v1.0 expressapp\nkubectl port-forward pods/expressapp 3000:3000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," When adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," tag, be sure to also specify the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"imagePullPolicy: Never\n")),(0,r.kt)("h2",{id:"tagging-images"},"Tagging Images"),(0,r.kt)("p",null,"If you want to tag an existing image you've built you can use the following\ncommand:"),(0,r.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n"))),(0,r.kt)(d,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n")))),(0,r.kt)("h2",{id:"removing-images"},"Removing Images"),(0,r.kt)("p",null,"To remove an image, run the following command:"),(0,r.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl rmi IMAGE\n"))),(0,r.kt)(d,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker rmi IMAGE\n")))))}g.isMDXComponent=!0}}]);