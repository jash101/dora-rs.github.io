"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={},i="MiDaS",l={unversionedId:"nodes_operators/midas_operator",id:"nodes_operators/midas_operator",title:"MiDaS",description:"MiDaS models for computing relative depth from a single image.",source:"@site/docs/nodes_operators/midas_operator.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/midas_operator",permalink:"/docs/nodes_operators/midas_operator",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/midas_operator.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"MiDaS Operator",permalink:"/docs/nodes_operators/midas_op"},next:{title:"Obstacle Location Operator",permalink:"/docs/nodes_operators/obstacle_location_op"}},s={},p=[{value:"Installation:",id:"installation",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"midas"},"MiDaS"),(0,o.kt)("p",null,"MiDaS models for computing relative depth from a single image."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MiDaS computes relative inverse depth from a single image. The repository provides multiple models that cover different use cases ranging from a small, high-speed model to a very large model that provide the highest accuracy. The models have been trained on 10 distinct datasets using multi-objective optimization to ensure high quality on a wide range of inputs.")),(0,o.kt)("h3",{id:"installation"},"Installation:"),(0,o.kt)("p",null,"To install midas offline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $DORA_DEP_HOME/dependencies/\ngit clone git@github.com:isl-org/MiDaS.git\ncd MiDaS/weights\n# If you don't want to add manual download, the program will also automatically download the model file\nwget https://github.com/isl-org/MiDaS/releases/download/v2_1/midas_v21_small_256.pt\ncp midas_v21_small_256.pt $HOME/.cache/torch/hub/checkpoints/\n")),(0,o.kt)("p",null,"Add the following dataflow configuration "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  - id: midas_op\n    operator:\n      outputs:\n        - depth_frame\n      inputs:\n        image: webcam/image\n      python: ../../operators/midas_op.py\n    env:\n      PYTORCH_DEVICE: "cuda"\n      MIDAS_PATH: $DORA_DEP_HOME/dependencies/MiDaS/\n      MIDAS_WEIGHT_PATH: $DORA_DEP_HOME/dependencies/MiDaS/weights/midas_v21_small_256.pt\n      MODEL_TYPE: "MiDaS_small"\n      MODEL_NAME: "MiDaS_small"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},'model_type = "DPT_Large"     # MiDaS v3 - Large     (highest accuracy, slowest inference speed)'),(0,o.kt)("li",{parentName:"ul"},'model_type = "DPT_Hybrid"   # MiDaS v3 - Hybrid    (medium accuracy, medium inference speed)'),(0,o.kt)("li",{parentName:"ul"},'model_type = "MiDaS_small"  # MiDaS v2.1 - Small   (lowest accuracy, highest inference speed)'))))}m.isMDXComponent=!0}}]);