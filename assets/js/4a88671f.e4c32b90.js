"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[6822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=o,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l="Logs",i={unversionedId:"guides/Debugging/logs",id:"guides/Debugging/logs",title:"Logs",description:"To access logs you need to use:",source:"@site/docs/guides/Debugging/logs.md",sourceDirName:"guides/Debugging",slug:"/guides/Debugging/logs",permalink:"/docs/guides/Debugging/logs",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/Debugging/logs.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Hot Reloading",permalink:"/docs/guides/Development/hot-reload"},next:{title:"Metrics",permalink:"/docs/guides/Debugging/metrics"}},s={},u=[],c={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logs"},"Logs"),(0,o.kt)("p",null,"To access logs you need to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dora logs [DATAFLOW] <NODE>\n")),(0,o.kt)("p",null,"The dataflow ID is optional."),(0,o.kt)("p",null,"An example command is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dora logs webcam\n")),(0,o.kt)("p",null,"This enables us to retrieve logs locally or from a remote machine."),(0,o.kt)("p",null,"We're not using any backend for archiving logs yet! We're closely watching opentelemetry so that in the futures, all data would be logged and archived on a universal format that can be used by many backend."),(0,o.kt)("p",null,"We are planning to improve the integration of logs with opentelemetry-logs and so this feature is still a bit experimental."),(0,o.kt)("p",null,"If you want to have a realtime feed of your logs, you can also use experimentally the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"watch -n 0.1 tail -n 20 /tmp/<DATAFLOW_ID>-<NODE_ID>.txt\n")))}p.isMDXComponent=!0}}]);