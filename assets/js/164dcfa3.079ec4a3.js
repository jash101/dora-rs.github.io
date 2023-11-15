"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[7495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={},l="Webcam Plot",i={unversionedId:"guides/getting-started/webcam_plot",id:"guides/getting-started/webcam_plot",title:"Webcam Plot",description:"This example will launch a webcam plot stream.",source:"@site/docs/guides/getting-started/webcam_plot.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/webcam_plot",permalink:"/docs/guides/getting-started/webcam_plot",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/getting-started/webcam_plot.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Getting started",permalink:"/docs/guides/getting-started/first-dataflow"},next:{title:"Yolov5",permalink:"/docs/guides/getting-started/yolov5"}},p={},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webcam-plot"},"Webcam Plot"),(0,n.kt)("p",null,"This example will launch a webcam plot stream."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure to have a webcam and cv2 install via: ",(0,n.kt)("inlineCode",{parentName:"p"},"pip install numpy opencv-python pyarrow"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download two pre-implemted operators from our repository"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/dora-rs/dora/v0.3.0/examples/python-operator-dataflow/webcam.py\nwget https://raw.githubusercontent.com/dora-rs/dora/v0.3.0/examples/python-operator-dataflow/plot.py\nwget https://raw.githubusercontent.com/dora-rs/dora/v0.3.0/examples/python-operator-dataflow/utils.py\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"dataflow.yml")," file or replace the existing file with the following nodes:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - id: webcam\n    operator:\n      python: webcam.py\n      inputs:\n        tick: dora/timer/millis/100\n      outputs:\n        - image\n  - id: plot\n    operator:\n      python: plot.py\n      inputs:\n        image: webcam/image\n")),(0,n.kt)("p",{parentName:"li"},"In this example, the webcam takes a tick input of frequency of 100 millis. It outputs the webcam image and dora forward it to a plot operator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start attached to the dataflow as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dora start dataflow.yml --attach --hot-reload --name webcam\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--attach"),": enables you to wait for the dataflow to finish\nbefore returning."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--hot-reload"),": enables you to modify Python Operator while the\ndataflow is running."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--name"),": enables you to name a dataflow that might be simpler to use than the UUID.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should see a small webcam window open up!"))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/webcam.png",width:"800"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"To stop your dataflow, you can use ",(0,n.kt)("kbd",null,"ctrl"),"+",(0,n.kt)("kbd",null,"c"))))}u.isMDXComponent=!0}}]);