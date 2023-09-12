"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[585],{2442:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>oe,contentTitle:()=>ee,default:()=>ne,frontMatter:()=>Q,metadata:()=>te,toc:()=>ae});var a=o(7462),r=o(7294),s=o(3905),n=o(6010),c=o(412),i=o(5999),l=o(6550),d=o(8824),m=o(9960);const u={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};function p(e){const{svgClass:t,colorAttr:o,children:s,color:c="inherit",size:i="medium",viewBox:l="0 0 24 24",...d}=e;return r.createElement("svg",(0,a.Z)({viewBox:l,color:o,"aria-hidden":!0,className:(0,n.Z)(u.svgIcon,u[c],u[i],t)},d),s)}function h(e){return r.createElement(p,e,r.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}function g(e,t){const o=[...e];return o.sort(((e,o)=>t(e)>t(o)?1:t(o)>t(e)?-1:0)),o}const b=JSON.parse('[{"title":"Yolov5 Operator","description":"Yolov5 object detection operator","preview":"/img/agilets.png","website":"yolov5_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/yolov5_op.py","tags":["object_detection","python"]},{"title":"Plot Operator","description":"Plot operator based on cv2","preview":"/img/agilets.png","website":"plot_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/plot.py","tags":["python"]},{"title":"PID Operator","description":"PID controller","preview":"/img/agilets.png","website":"pid_control_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/pid_control_op.py","tags":["python","control"]},{"title":"Obstacle Location Operator","description":"Obstacle location based on LIDAR and 2D bounding boxes","preview":"/img/agilets.png","website":"obstacle_location_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/obstacle_location_op.py","tags":["python"]},{"title":"FOT Operator","description":"Waypoint generation based on current position and frenet optimal trajectory planner.","preview":"/img/agilets.png","website":"obstacle_location_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/fot_op.py","tags":["python"]},{"title":"YOLOP Operator","description":"YOLOP lane and drivable area detection","preview":"/img/agilets.png","website":"yolop_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/yolop_op.py","tags":["object_detection","python"]},{"title":"MiDaS Operator","description":"MiDaS depth estimation","preview":"/img/agilets.png","website":"midas_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/midas_op.py","tags":["depth_estimation","python"]},{"title":"Webcam Operator","description":"Webcam Operator","preview":"/img/agilets.png","website":"webcam_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/webcam_op.py","tags":["python"]},{"title":"Strong Sort Operator","description":"Strong Sort Operator","preview":"/img/agilets.png","website":"strong_sort_op","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/strong_sort_op.py","tags":["object_detection","python"]}]');var f=o.t(b,2);const w={object_detection:{label:(0,i.I)({id:"showcase.tag.oject-detection.tag",message:"object detection"}),description:(0,i.I)({message:"Open-Source Docusaurus sites can be useful for inspiration!",id:"showcase.tag.oject-detection.description"}),color:"#39ca30"},python:{label:(0,i.I)({id:"showcase.tag.python.tag",message:"Python"}),description:(0,i.I)({message:"Docusaurus sites associated to a commercial product!",id:"showcase.tag.python.description"}),color:"#dfd545"},control:{label:(0,i.I)({id:"showcase.tag.control.tag",message:"Control"}),description:(0,i.I)({message:"Beautiful Docusaurus sites, polished and standing out from the initial template!",id:"showcase.tag.control.description"}),color:"#a44fb7"},depth_estimation:{label:(0,i.I)({id:"showcase.tag.depth-estimation.tag",message:"Depth Esimation"}),description:(0,i.I)({message:"Translated Docusaurus sites using the internationalization support with more than 1 locale.",id:"showcase.tag.depth-estimation.description"}),color:"#127f82"}},E=Object.keys(w),v=f;const _=function(){let e=v.default;return e=g(e,(e=>e.title.toLowerCase())),e=g(e,(e=>!e.tags.includes("favorite"))),e}();var y=o(2503);const C="checkboxLabel_nyuG",L="tags";function N(e){return new URLSearchParams(e).getAll(L)}function k(e,t){let{id:o,icon:s,label:n,tag:c,...i}=e;const d=(0,l.TH)(),m=(0,l.k6)(),[u,p]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=N(d.search);p(e.includes(c))}),[c,d]);const h=(0,r.useCallback)((()=>{const e=function(e,t){const o=e.indexOf(t);if(-1===o)return e.concat(t);const a=[...e];return a.splice(o,1),a}(N(d.search),c),t=function(e,t){const o=new URLSearchParams(e);return o.delete(L),t.forEach((e=>o.append(L,e))),o.toString()}(d.search,e);m.push({...d,search:t,state:W()})}),[c,d,m]);return r.createElement(r.Fragment,null,r.createElement("input",(0,a.Z)({type:"checkbox",id:o,className:"screen-reader-only",onKeyDown:e=>{"Enter"===e.key&&h()},onFocus:e=>{e.relatedTarget&&e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("focus"))},onBlur:e=>{e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("blur"))},onChange:h,checked:u},i)),r.createElement("label",{ref:t,htmlFor:o,className:C},n,s))}const I=r.forwardRef(k),x={checkboxLabel:"checkboxLabel_C_EF"},S="operator";function O(e){return new URLSearchParams(e).get(S)??"OR"}function F(){const e="showcase_filter_toggle",t=(0,l.TH)(),o=(0,l.k6)(),[a,s]=(0,r.useState)(!1);(0,r.useEffect)((()=>{s("AND"===O(t.search))}),[t]);const c=(0,r.useCallback)((()=>{s((e=>!e));const e=new URLSearchParams(t.search);e.delete(S),a||e.append(S,"AND"),o.push({...t,search:e.toString(),state:W()})}),[a,t,o]);return r.createElement("div",null,r.createElement("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:c,onKeyDown:e=>{"Enter"===e.key&&c()},checked:a}),r.createElement("label",{htmlFor:e,className:(0,n.Z)(x.checkboxLabel,"shadow--md")},r.createElement("span",{className:x.checkboxLabelOr},"OR"),r.createElement("span",{className:x.checkboxLabelAnd},"AND")))}var Z=o(3935),T=o(5237);const D={tooltip:"tooltip_u6Wa",tooltipArrow:"tooltipArrow_gH7I"};function P(e){let{children:t,id:o,anchorEl:s,text:n}=e;const[c,i]=(0,r.useState)(!1),[l,d]=(0,r.useState)(null),[m,u]=(0,r.useState)(null),[p,h]=(0,r.useState)(null),[g,b]=(0,r.useState)(null),{styles:f,attributes:w}=(0,T.D)(l,m,{modifiers:[{name:"arrow",options:{element:p}},{name:"offset",options:{offset:[0,8]}}]}),E=(0,r.useRef)(null),v=`${o}_tooltip`;return(0,r.useEffect)((()=>{b(s?"string"==typeof s?document.querySelector(s):s:document.body)}),[g,s]),(0,r.useEffect)((()=>{const e=["mouseenter","focus"],t=["mouseleave","blur"],o=()=>{""!==n&&(l?.removeAttribute("title"),E.current=window.setTimeout((()=>{i(!0)}),400))},a=()=>{clearInterval(E.current),i(!1)};return l&&(e.forEach((e=>{l.addEventListener(e,o)})),t.forEach((e=>{l.addEventListener(e,a)}))),()=>{l&&(e.forEach((e=>{l.removeEventListener(e,o)})),t.forEach((e=>{l.removeEventListener(e,a)})))}}),[l,n]),r.createElement(r.Fragment,null,r.cloneElement(t,{ref:d,"aria-describedby":c?v:void 0}),g?Z.createPortal(c&&r.createElement("div",(0,a.Z)({id:v,role:"tooltip",ref:u,className:D.tooltip,style:f.popper},w.popper),n,r.createElement("span",{ref:h,className:D.tooltipArrow,style:f.arrow})),g):g)}const R={showcaseCardImage:"showcaseCardImage_ilpR",showcaseCardHeader:"showcaseCardHeader_OEf6",showcaseCardTitle:"showcaseCardTitle_N5BJ",svgIconFavorite:"svgIconFavorite_ndny",showcaseCardSrcBtn:"showcaseCardSrcBtn_cNFV",showcaseCardBody:"showcaseCardBody_o6UT",cardFooter:"cardFooter_Z6cQ",tag:"tag_JW46",textLabel:"textLabel_zE2j",colorLabel:"colorLabel_K1aW"},B=r.forwardRef(((e,t)=>{let{label:o,color:a,description:s}=e;return r.createElement("li",{ref:t,className:R.tag,title:s},r.createElement("span",{className:R.textLabel},o.toLowerCase()),r.createElement("span",{className:R.colorLabel,style:{backgroundColor:a}}))}));function U(e){let{tags:t}=e;const o=g(t.map((e=>({tag:e,...w[e]}))),(e=>E.indexOf(e.tag)));return r.createElement(r.Fragment,null,o.map(((e,t)=>{const o=`showcase_card_tag_${e.tag}`;return r.createElement(P,{key:t,text:e.description,anchorEl:"#__docusaurus",id:o},r.createElement(B,(0,a.Z)({key:t},e)))})))}function H(e){let{user:t}=e;!function(e){e.preview}(t);const o=(a=t.source,new URL(a).pathname.split("/").at(-1)).replace(".py","");var a;return r.createElement("li",{key:t.title,className:"card shadow--md"},r.createElement("div",{className:"card__body"},r.createElement("div",{className:(0,n.Z)(R.showcaseCardHeader)},r.createElement(y.Z,{as:"h4",className:R.showcaseCardTitle},r.createElement(m.Z,{href:o,className:R.showcaseCardLink},t.title)),t.tags.includes("favorite")&&r.createElement(h,{svgClass:R.svgIconFavorite,size:"small"}),t.source&&r.createElement(m.Z,{href:t.source,className:(0,n.Z)("button button--secondary button--sm",R.showcaseCardSrcBtn)},r.createElement(i.Z,{id:"showcase.card.sourceLink"},"source"))),r.createElement("p",{className:R.showcaseCardBody},t.description)),r.createElement("ul",{className:(0,n.Z)("card__footer",R.cardFooter)},r.createElement(U,{tags:t.tags})))}const A=r.memo(H),j={filterCheckbox:"filterCheckbox_q3sb",checkboxList:"checkboxList_OUH8",checkboxListItem:"checkboxListItem_P6Ma",searchContainer:"searchContainer_e2L2",showcaseList:"showcaseList_lJcJ",showcaseFavorite:"showcaseFavorite_iniO",showcaseFavoriteHeader:"showcaseFavoriteHeader_bJ1Y",svgIconFavoriteXs:"svgIconFavoriteXs_BcXG",svgIconFavorite:"svgIconFavorite_wQHr"},M=((0,i.I)({message:"dora-rs nodes and operators"}),(0,i.I)({message:"List of operators already implemented by the community"})),z="https://discord.com/channels/1146393916472561734/1148336336294662196";function W(){if(c.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:document.activeElement?.id}}const Y="name";function J(e){return new URLSearchParams(e).get(Y)}function X(){const e=(0,l.TH)(),[t,o]=(0,r.useState)("OR"),[a,s]=(0,r.useState)([]),[n,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{s(N(e.search)),o(O(e.search)),c(J(e.search)),function(e){const{scrollTopPosition:t,focusedElementId:o}=e??{scrollTopPosition:0,focusedElementId:void 0};document.getElementById(o)?.focus(),window.scrollTo({top:t})}(e.state)}),[e]),(0,r.useMemo)((()=>function(e,t,o,a){return a&&(e=e.filter((e=>e.title.toLowerCase().includes(a.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&("AND"===o?t.every((t=>e.tags.includes(t))):t.some((t=>e.tags.includes(t))))))}(_,a,t,n)),[a,t,n])}function K(){return r.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},r.createElement("p",null,M),r.createElement(m.Z,{className:"button button--primary",to:z},r.createElement(i.Z,{id:"showcase.header.button"},"\ud83d\ude4f Please add your Operators or Nodes")))}function q(){const e=X(),t=function(){const{selectMessage:e}=(0,d.c)();return t=>e(t,(0,i.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 site|{sitesCount} sites"},{sitesCount:t}))}();return r.createElement("section",{className:"container margin-top--l margin-bottom--lg"},r.createElement("div",{className:(0,n.Z)("margin-bottom--sm",j.filterCheckbox)},r.createElement("div",null,r.createElement(y.Z,{as:"h2"},r.createElement(i.Z,{id:"showcase.filters.title"},"Filters")),r.createElement("span",null,t(e.length))),r.createElement(F,null)),r.createElement("ul",{className:(0,n.Z)("clean-list",j.checkboxList)},E.map(((e,t)=>{const{label:o,description:a,color:s}=w[e],n=`showcase_checkbox_id_${e}`;return r.createElement("li",{key:t,className:j.checkboxListItem},r.createElement(P,{id:n,text:a,anchorEl:"#__docusaurus"},r.createElement(I,{tag:e,id:n,label:o,icon:"favorite"===e?r.createElement(h,{svgClass:j.svgIconFavoriteXs}):r.createElement("span",{style:{backgroundColor:s,width:10,height:10,borderRadius:"50%",marginLeft:8}})})))}))))}_.filter((e=>e.tags.includes("favorite"))),_.filter((e=>!e.tags.includes("favorite")));function G(){const e=(0,l.k6)(),t=(0,l.TH)(),[o,a]=(0,r.useState)(null);return(0,r.useEffect)((()=>{a(J(t.search))}),[t]),r.createElement("div",{className:j.searchContainer},r.createElement("input",{id:"searchbar",placeholder:(0,i.I)({message:"Search for site name...",id:"showcase.searchBar.placeholder"}),value:o??void 0,onInput:o=>{a(o.currentTarget.value);const r=new URLSearchParams(t.search);r.delete(Y),o.currentTarget.value&&r.set(Y,o.currentTarget.value),e.push({...t,search:r.toString(),state:W()}),setTimeout((()=>{document.getElementById("searchbar")?.focus()}),0)}}))}function V(){const e=X();return 0===e.length?r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container padding-vert--md text--center"},r.createElement(y.Z,{as:"h2"},r.createElement(i.Z,{id:"showcase.usersList.noResult"},"No result")),r.createElement(G,null))):r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container"},r.createElement("div",{className:(0,n.Z)("margin-bottom--md",j.showcaseFavoriteHeader)},r.createElement(G,null)),r.createElement("ul",{className:(0,n.Z)("clean-list",j.showcaseList)},e.map((e=>r.createElement(A,{key:e.title,user:e}))))))}function $(){return r.createElement("div",null,r.createElement(K,null),r.createElement(q,null),r.createElement(V,null))}const Q={sidebar_position:1},ee="Search",te={unversionedId:"nodes_operators/search",id:"nodes_operators/search",title:"Search",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/nodes_operators/search.mdx",sourceDirName:"nodes_operators",slug:"/nodes_operators/search",permalink:"/zh-CN/docs/nodes_operators/search",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"nodes_operators",next:{title:"FOT operator",permalink:"/zh-CN/docs/nodes_operators/fot_op"}},oe={},ae=[],re={toc:ae},se="wrapper";function ne(e){let{components:t,...o}=e;return(0,s.kt)(se,(0,a.Z)({},re,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"search"},"Search"),(0,s.kt)($,{mdxType:"Showcase"}))}ne.isMDXComponent=!0}}]);