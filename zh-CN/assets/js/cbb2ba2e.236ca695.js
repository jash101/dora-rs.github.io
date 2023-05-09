"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[51],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={},l="Webcam Plot",i={unversionedId:"guides/webcam_plot",id:"guides/webcam_plot",title:"Webcam Plot",description:"This first tutorial enables to stream a video stream from a webcam from scratch.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/webcam_plot.md",sourceDirName:"guides",slug:"/guides/webcam_plot",permalink:"/zh-CN/docs/guides/webcam_plot",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Getting Started",permalink:"/zh-CN/docs/guides/getting-started"},next:{title:"Yolov5",permalink:"/zh-CN/docs/guides/yolov5"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webcam-plot"},"Webcam Plot"),(0,o.kt)("p",null,"This first tutorial enables to stream a video stream from a webcam from scratch."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork this project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Go to: https://github.com/dora-rs/dora-drives/fork\n#\n# Then clone your fork:\ngit clone git@github.com:<USERNAME>/dora-drives.git\n\n# Add dora as a remote source to be able to fetch updates.\ngit remote add dora git@github.com:dora-rs/dora-drives.git\n")),(0,o.kt)("p",null,"You will find the following folder structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 graphs # Example graph\n\u251c\u2500\u2500 operators # Exemple operators\n\u251c\u2500\u2500 carla # Carla nodes and operators that requires the CARLA API\n\u251c\u2500\u2500 ros # ROS based operators to bridge between ROS and dora\n\u251c\u2500\u2500 docs # This docs folder. You can replace the src file to keep your operator documented.\n\u251c\u2500\u2500 ... # utils folder\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"To be able to run dora, you will need to start ",(0,o.kt)("inlineCode",{parentName:"li"},"dora-coordinator")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"dora-daemon"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start the `dora-coordinator` and `dora-daemon`. \ndora up \n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To start a dataflow, you just need to pass a dataflow path.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate dora3.7\ndora start graphs/tutorials/webcam.yaml --attach --hot-reload --name webcam\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"--attach"),": enables you to wait for the dataflow to finish before returning."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"--hot-reload"),": enables you to modify Python Operator while the dataflow is running."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"--name"),": enables you to name a dataflow that might be simpler to use than the UUID.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You should see a small webcam open up! > Make sure to have a webcam and cv2 install via: ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install opencv-python"))),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/webcam.png",width:"800"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To stop your dataflow, you can use ",(0,o.kt)("kbd",null,"ctrl"),"+",(0,o.kt)("kbd",null,"c"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"That's it! You know the basic of dora!"))))}d.isMDXComponent=!0}}]);