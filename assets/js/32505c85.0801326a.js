"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[4440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={},i="Getting started",p={unversionedId:"guides/getting-started/first-dataflow",id:"guides/getting-started/first-dataflow",title:"Getting started",description:"1. Install dora binaries from GitHub releases",source:"@site/docs/guides/getting-started/first-dataflow.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/first-dataflow",permalink:"/docs/guides/getting-started/first-dataflow",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/getting-started/first-dataflow.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Uninstalling",permalink:"/docs/guides/Installation/uninstalling"},next:{title:"Webcam Plot",permalink:"/docs/guides/getting-started/webcam_plot"}},l={},d=[],s={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," binaries from GitHub releases")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new dataflow"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora new abc_project --lang python\ncd abc_project\n")),(0,r.kt)("p",{parentName:"li"},"This creates the following ",(0,r.kt)("inlineCode",{parentName:"p"},"abc_project")," directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 dataflow.yml\n\u251c\u2500\u2500 node_1\n\u2502   \u2514\u2500\u2500 node_1.py\n\u251c\u2500\u2500 op_1\n\u2502   \u2514\u2500\u2500 op_1.py\n\u2514\u2500\u2500 op_2\n    \u2514\u2500\u2500 op_2.py\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start ",(0,r.kt)("inlineCode",{parentName:"p"},"dora-coordinator")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"dora-deamon")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora up\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start your dataflow"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora start dataflow.yml\n# Output: c95d118b-cded-4531-a0e4-cd85b7c3916c\n")),(0,r.kt)("p",{parentName:"li"},"The output is the unique ID of the dataflow instance, which can be used to control it through the ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," CLI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see in your ",(0,r.kt)("inlineCode",{parentName:"p"},"dora-coordinator")," window operators receiving ticks."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Received input tick, with data: b''\nReceived input tick, with data: b''\nReceived input tick, with data: b''\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop your dataflow"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora stop c95d118b-cded-4531-a0e4-cd85b7c3916c\n")),(0,r.kt)("p",{parentName:"li"},"(Pass the ID returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"dora start")," here.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can then add or modify operators or nodes. For adding nodes easily, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," CLI again:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"dora new --kind operator --lang rust <name>")," to create a new Rust operator named ",(0,r.kt)("inlineCode",{parentName:"p"},"<name>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"dora new --kind custom-node --lang rust <name>")," to create a new custom node named ",(0,r.kt)("inlineCode",{parentName:"p"},"<name>"),"."),(0,r.kt)("p",{parentName:"li"},"You need to add the created operators/nodes to your dataflow YAML file."))))))}u.isMDXComponent=!0}}]);