"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[301],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="MiDaS",l={unversionedId:"nodes_operators/midas_operator",id:"nodes_operators/midas_operator",title:"MiDaS",description:"MiDaS models for computing relative depth from a single image.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/nodes_operators/midas_operator.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/midas_operator",permalink:"/zh-CN/docs/nodes_operators/midas_operator",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"MiDaS Operator",permalink:"/zh-CN/docs/nodes_operators/midas_op"},next:{title:"Obstacle Location Operator",permalink:"/zh-CN/docs/nodes_operators/obstacle_location_op"}},s={},p=[{value:"Installation:",id:"installation",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"midas"},"MiDaS"),(0,a.kt)("p",null,"MiDaS models for computing relative depth from a single image."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"MiDaS computes relative inverse depth from a single image. The repository provides multiple models that cover different use cases ranging from a small, high-speed model to a very large model that provide the highest accuracy. The models have been trained on 10 distinct datasets using multi-objective optimization to ensure high quality on a wide range of inputs.")),(0,a.kt)("h3",{id:"installation"},"Installation:"),(0,a.kt)("p",null,"To install midas offline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $DORA_DEP_HOME/dependencies/\ngit clone git@github.com:isl-org/MiDaS.git\ncd MiDaS/weights\n# If you don't want to add manual download, the program will also automatically download the model file\nwget https://github.com/isl-org/MiDaS/releases/download/v2_1/midas_v21_small_256.pt\ncp midas_v21_small_256.pt $HOME/.cache/torch/hub/checkpoints/\n")),(0,a.kt)("p",null,"Add the following dataflow configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  - id: midas_op\n    operator:\n      outputs:\n        - depth_frame\n      inputs:\n        image: webcam/image\n      python: ../../operators/midas_op.py\n    env:\n      PYTORCH_DEVICE: "cuda"\n      MIDAS_PATH: $DORA_DEP_HOME/dependencies/MiDaS/\n      MIDAS_WEIGHT_PATH: $DORA_DEP_HOME/dependencies/MiDaS/weights/midas_v21_small_256.pt\n      MODEL_TYPE: "MiDaS_small"\n      MODEL_NAME: "MiDaS_small"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},'model_type = "DPT_Large"     # MiDaS v3 - Large     (highest accuracy, slowest inference speed)'),(0,a.kt)("li",{parentName:"ul"},'model_type = "DPT_Hybrid"   # MiDaS v3 - Hybrid    (medium accuracy, medium inference speed)'),(0,a.kt)("li",{parentName:"ul"},'model_type = "MiDaS_small"  # MiDaS v2.1 - Small   (lowest accuracy, highest inference speed)'))))}u.isMDXComponent=!0}}]);