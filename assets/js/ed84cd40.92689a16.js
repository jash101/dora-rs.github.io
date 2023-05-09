"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,p(p({ref:t},c),{},{components:n})):o.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},p="GPS operator",i={unversionedId:"nodes_operators/gps_operator",id:"nodes_operators/gps_operator",title:"GPS operator",description:"The GPS Operator take a map a current position and wished waypoints",source:"@site/docs/nodes_operators/gps_operator.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/gps_operator",permalink:"/docs/nodes_operators/gps_operator",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/gps_operator.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"FOT operator",permalink:"/docs/nodes_operators/fot_operator"},next:{title:"MiDaS",permalink:"/docs/nodes_operators/midas_operator"}},s={},l=[{value:"Graph Description",id:"graph-description",level:2},{value:"Graph visualisation",id:"graph-visualisation",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gps-operator"},"GPS operator"),(0,r.kt)("p",null,"The GPS Operator take a map a current position and wished waypoints\nand compute the best route to go to the wished waypoint."),(0,r.kt)("p",null,"It does by using ",(0,r.kt)("inlineCode",{parentName:"p"},"carla.GlobalRoutePlanner"),". This modules takes an\n",(0,r.kt)("inlineCode",{parentName:"p"},"opendrive")," map as an input and can compute most efficient route between\ntwo points."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The caching of result such that we don't compute it every single time. The computation of route is really costly.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Used cached waypoints but start at closest point.\nif len(self.waypoints) != 0:\n    (index, _) = closest_vertex(\n        self.waypoints,\n        np.array([self.position[:2]]),\n    )\n\n    self.waypoints = self.waypoints[\n        index : index + NUM_WAYPOINTS_AHEAD\n    ]\n    self.target_speeds = self.target_speeds[\n        index : index + NUM_WAYPOINTS_AHEAD\n    ]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The computation of the gps waypoints happens here:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Compute the waypoints\nwaypoints = self.hd_map.compute_waypoints(\n    [\n        x,\n        y,\n        self._goal_location[2],\n    ],\n    self._goal_location,\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sometimes the computation might put the position on the wrong side of the road.\nI have put a failsafe mecanism, but that might have other consequences. You can try to revisit this part.\nTo increase the precision of the map, you can change the parameters in ",(0,r.kt)("inlineCode",{parentName:"p"},"_hd_map.py"),":"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"       self._grp = GlobalRoutePlanner(\n           self._map, 1.0\n       )  # Distance between waypoints\n"))),(0,r.kt)("h2",{id:"graph-description"},"Graph Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: carla_gps_op\n    operator:\n      python: ../../carla/carla_gps_op.py\n      outputs:\n        - gps_waypoints\n      inputs:\n        opendrive: agent/opendrive\n        objective_waypoints: agent/objective_waypoints\n        position: agent/position\n")),(0,r.kt)("h2",{id:"graph-visualisation"},"Graph visualisation"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"        flowchart TB\n  agent\nsubgraph fot_op\n  fot_op/op[op]\nend\nsubgraph carla_gps_op\n  carla_gps_op/op[op]\nend\n  agent -- objective_waypoints --\x3e carla_gps_op/op\n  agent -- opendrive --\x3e carla_gps_op/op\n  agent -- position --\x3e carla_gps_op/op\n  carla_gps_op/op -- gps_waypoints --\x3e fot_op/op"})))}d.isMDXComponent=!0}}]);