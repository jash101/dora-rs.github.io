"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l="\u65e5\u5fd7",i={unversionedId:"guides/Debugging/logs",id:"guides/Debugging/logs",title:"\u65e5\u5fd7",description:"\u8bbf\u95ee\u65e5\u5fd7\u60a8\u9700\u8981\u4f7f\u7528\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/Debugging/logs.md",sourceDirName:"guides/Debugging",slug:"/guides/Debugging/logs",permalink:"/zh-CN/docs/guides/Debugging/logs",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"\u70ed\u52a0\u8f7d",permalink:"/zh-CN/docs/guides/Development/hot-reload"},next:{title:"Metrics",permalink:"/zh-CN/docs/guides/Debugging/metrics"}},u={},s=[],c={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,o.kt)("p",null,"\u8bbf\u95ee\u65e5\u5fd7\u60a8\u9700\u8981\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dora logs [DATAFLOW] <NODE>\n")),(0,o.kt)("p",null,"The dataflow ID is optional."),(0,o.kt)("p",null,"An example command is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dora logs webcam\n")),(0,o.kt)("p",null,"\u4f7f\u6211\u4eec\u80fd\u5728\u672c\u5730\u6216\u4ece\u8fdc\u7a0b\u673a\u5668\u4e0a\u68c0\u7d22\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u6ca1\u6709\u4f7f\u7528\u4efb\u4f55\u540e\u7aef\u8fdb\u884c\u65e5\u5fd7\u5f52\u6863\uff01 \u6211\u4eec\u6b63\u5728\u5bc6\u5207\u5173\u6ce8 opentelemetry\uff0c\u4ee5\u4fbf\u5c06\u6765\u6240\u6709\u6570\u636e\u90fd\u80fd\u4ee5\u901a\u7528\u683c\u5f0f\u8bb0\u5f55\u548c\u5b58\u6863\uff0c\u4f9b\u8bb8\u591a\u540e\u7aef\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"We are planning to improve the integration of logs with opentelemetry-logs and so this feature is still a bit experimental."),(0,o.kt)("p",null,"If you want to have a realtime feed of your logs, you can also use experimentally the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"watch -n 0.1 tail -n 20 /tmp/<DATAFLOW_ID>-<NODE_ID>.txt\n")))}g.isMDXComponent=!0}}]);