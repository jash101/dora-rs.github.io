"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[7507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>O});var a=r(7462),n=r(7294),l=r(6010),o=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:r,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var f=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function O(e){const t=(0,f.Z)();return n.createElement(E,(0,a.Z)({key:String(t)},e))}},1437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),o=r(5162);const i={sidebar_position:1},u="\u8fdb\u884c\u5b89\u88c5",s={unversionedId:"guides/Installation/installing",id:"guides/Installation/installing",title:"\u8fdb\u884c\u5b89\u88c5",description:"Github Releases",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/Installation/installing.mdx",sourceDirName:"guides/Installation",slug:"/guides/Installation/installing",permalink:"/zh-CN/docs/guides/Installation/installing",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",previous:{title:"\u6307\u5357",permalink:"/zh-CN/docs/guides/"},next:{title:"\u8fdb\u884c\u66f4\u65b0",permalink:"/zh-CN/docs/guides/Installation/updating"}},c={},d=[{value:"Github Releases",id:"github-releases",level:2},{value:"Cargo \u4e0e \u63d0\u793a",id:"cargo-\u4e0e-\u63d0\u793a",level:2},{value:"\u6e90",id:"\u6e90",level:2},{value:"\u624b\u518c",id:"\u624b\u518c",level:2},{value:"\u89c6\u9891\u6559\u7a0b",id:"\u89c6\u9891\u6559\u7a0b",level:2}],p={toc:d},m="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u8fdb\u884c\u5b89\u88c5"},"\u8fdb\u884c\u5b89\u88c5"),(0,n.kt)("h2",{id:"github-releases"},"Github Releases"),(0,n.kt)("p",null,"\u4ece Github release \u5b89\u88c5 dora \u4e8c\u8fdb\u5236"),(0,n.kt)(l.Z,{groupId:"current-os",queryString:!0,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export DORA_VERSION=v0.3.2 # Check for the latest release\nexport ARCHITECTURE=$(uname -m)\nwget https://github.com/dora-rs/dora/releases/download/${DORA_VERSION}/dora-${DORA_VERSION}-${ARCHITECTURE}-Linux.zip\nunzip dora-${DORA_VERSION}-${ARCHITECTURE}-Linux.zip\npip install dora-rs==${DORA_VERSION}\nPATH=$PATH:$(pwd)\ndora --help\n"))),(0,n.kt)(o.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export DORA_VERSION=v0.3.2 # Check for the latest release\nexport ARCHITECTURE=$(uname -m)\nwget https://github.com/dora-rs/dora/releases/download/${DORA_VERSION}/dora-${DORA_VERSION}-${ARCHITECTURE}-macOS.zip\nunzip dora-${DORA_VERSION}-${ARCHITECTURE}-macOS.zip\npip install dora-rs==${DORA_VERSION}\nPATH=$PATH:$(pwd)\ndora --help\n"))),(0,n.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"set DORA_VERSION=v0.3.2 # Check for the latest release\nset ARCHITECTURE=x86_64\nwget https://github.com/dora-rs/dora/releases/download/%DORA_VERSION%/dora-%DORA_VERSION%-%ARCHITECTURE%-Windows.zip\nunzip dora-%DORA_VERSION%-%ARCHITECTURE%-Windows.zip\npip install dora-rs==%DORA_VERSION%\nset PATH=%PATH%:%cd%\ndora --help\n")))),(0,n.kt)("h2",{id:"cargo-\u4e0e-\u63d0\u793a"},"Cargo \u4e0e \u63d0\u793a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install dora-cli\npip install dora-rs\n\ndora --help\n")),(0,n.kt)("h2",{id:"\u6e90"},"\u6e90"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"## dora binary\ngit clone https://github.com/dora-rs/dora.git\ncd dora\ncargo build --release -p dora-cli\nPATH=$PATH:$(pwd)/target/release\n\n## Python API\nmaturin develop -m apis/python/node/Cargo.toml\n\ndora --help\n")),(0,n.kt)("h2",{id:"\u624b\u518c"},"\u624b\u518c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53bb\u81f3",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dora-rs/dora/releases"},"\u6211\u4eec\u7684 release \u9875\u9762")),(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4e0e\u60a8\u7684\u67b6\u6784\u548c\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5bf9\u5e94\u7684\u201czip\u201d\u548c\u201cwhl\u201d\u6587\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u538bzip\u6587\u4ef6\u5e76\u4e14\u5c06\u5176\u653e\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6\u5939\u4e2d\uff08\u4f8b\u5982\uff1a\u201c$HOME/bin\u201d\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 pip \u5b89\u88c5 python wheel \u4ee3\u7801\u5305\u3002 (\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"pip install \ndora_rs-0.2.3-cp37-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl"),")"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u60a8\u7684\u7ec8\u7aef\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"dora --help")," \u9a8c\u8bc1 dora \u5df2\u7ecf\u5b89\u88c5\u3002")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u89c6\u9891\u6559\u7a0b"},"\u89c6\u9891\u6559\u7a0b"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/47Bl-aGakgg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}b.isMDXComponent=!0}}]);