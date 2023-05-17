"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[393],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),h=o,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,l={unversionedId:"api/cli",id:"api/cli",title:"cli",description:"\x3c!---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/zh-CN/docs/api/cli",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"<code>up</code>",id:"up",level:2},{value:"<code>new</code>",id:"new",level:2},{value:"<code>start</code>",id:"start",level:2},{value:"<code>list</code>",id:"list",level:2},{value:"<code>logs</code>",id:"logs",level:2},{value:"<code>check</code>",id:"check",level:2},{value:"<code>stop</code>",id:"stop",level:2},{value:"<code>destroy</code>",id:"destroy",level:2},{value:"<code>graph</code>",id:"graph",level:2},{value:"<code>--version</code>",id:"--version",level:2}],s={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dora-rs cli client\n\nUsage: dora-cli <COMMAND>\n\nCommands:\n  check    Check if the coordinator and the daemon is running\n  graph    Generate a visualization of the given graph using mermaid.js. Use --open to open\n               browser\n  build    Run build commands provided in the given dataflow\n  new      Generate a new project, node or operator. Choose the language between Rust, Python, C\n               or C++\n  up       Spawn a coordinator and a daemon\n  destroy  Destroy running coordinator and daemon. If some dataflows are still running, they\n               will be stopped first\n  start    Start the given dataflow path. Attach a name to the running dataflow by using --name\n  stop     Stop the given dataflow UUID. If no id is provided, you will be able to choose\n               between the running dataflows\n  list     List running dataflows\n  logs     Show logs of a given dataflow and node\n  help     Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help     Print help\n  -V, --version  Print version\n")),(0,o.kt)("h2",{id:"up"},(0,o.kt)("inlineCode",{parentName:"h2"},"up")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Spawn a coordinator and a daemon\n\nUsage: dora-cli up [OPTIONS]\n\nOptions:\n      --config <CONFIG>                      \n      --coordinator-path <COORDINATOR_PATH>  \n      --daemon-path <DAEMON_PATH>            \n  -h, --help                                 Print help\n")),(0,o.kt)("h2",{id:"new"},(0,o.kt)("inlineCode",{parentName:"h2"},"new")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Generate a new project, node or operator. Choose the language between Rust, Python, C or C++\n\nUsage: dora-cli new [OPTIONS] <NAME> [PATH]\n\nArguments:\n  <NAME>  \n  [PATH]  \n\nOptions:\n      --kind <KIND>  [default: dataflow] [possible values: dataflow, operator, custom-node]\n      --lang <LANG>  [default: rust] [possible values: rust, python, c, cxx]\n  -h, --help         Print help\n")),(0,o.kt)("h2",{id:"start"},(0,o.kt)("inlineCode",{parentName:"h2"},"start")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Start the given dataflow path. Attach a name to the running dataflow by using --name\n\nUsage: dora-cli start [OPTIONS] <DATAFLOW>\n\nArguments:\n  <DATAFLOW>  \n\nOptions:\n      --name <NAME>  \n      --attach       \n      --hot-reload   \n  -h, --help         Print help\n")),(0,o.kt)("h2",{id:"list"},(0,o.kt)("inlineCode",{parentName:"h2"},"list")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"List running dataflows\n\nUsage: dora-cli list\n\nOptions:\n  -h, --help  Print help\n")),(0,o.kt)("h2",{id:"logs"},(0,o.kt)("inlineCode",{parentName:"h2"},"logs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Show logs of a given dataflow and node\n\nUsage: dora-cli logs <DATAFLOW> <NODE>\n\nArguments:\n  <DATAFLOW>  \n  <NODE>      \n\nOptions:\n  -h, --help  Print help\n")),(0,o.kt)("h2",{id:"check"},(0,o.kt)("inlineCode",{parentName:"h2"},"check")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Check if the coordinator and the daemon is running\n\nUsage: dora-cli check [OPTIONS]\n\nOptions:\n      --dataflow <DATAFLOW>  \n  -h, --help                 Print help\n")),(0,o.kt)("h2",{id:"stop"},(0,o.kt)("inlineCode",{parentName:"h2"},"stop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Stop the given dataflow UUID. If no id is provided, you will be able to choose between the running\ndataflows\n\nUsage: dora-cli stop [OPTIONS] [UUID]\n\nArguments:\n  [UUID]  \n\nOptions:\n      --name <NAME>  \n  -h, --help         Print help\n")),(0,o.kt)("h2",{id:"destroy"},(0,o.kt)("inlineCode",{parentName:"h2"},"destroy")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Destroy running coordinator and daemon. If some dataflows are still running, they will be stopped\nfirst\n\nUsage: dora-cli destroy [OPTIONS]\n\nOptions:\n      --config <CONFIG>  \n  -h, --help             Print help\n")),(0,o.kt)("h2",{id:"graph"},(0,o.kt)("inlineCode",{parentName:"h2"},"graph")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Generate a visualization of the given graph using mermaid.js. Use --open to open browser\n\nUsage: dora-cli graph [OPTIONS] <DATAFLOW>\n\nArguments:\n  <DATAFLOW>  \n\nOptions:\n      --mermaid  \n      --open     \n  -h, --help     Print help\n")),(0,o.kt)("h2",{id:"--version"},(0,o.kt)("inlineCode",{parentName:"h2"},"--version")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Returns the current version of dora\n")),(0,o.kt)("p",null,"This command will show the current version of cora."))}u.isMDXComponent=!0}}]);