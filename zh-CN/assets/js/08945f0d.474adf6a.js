"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[949],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4192:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={},i="Dataflow Specification",l={unversionedId:"api/dataflow-config",id:"api/dataflow-config",title:"Dataflow Specification",description:"Dataflows are specified through a YAML file. This section presents our current draft for the file format. It only includes basic functionality for now, we will extend it later when we introduce more advanced features.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/dataflow-config.md",sourceDirName:"api",slug:"/api/dataflow-config",permalink:"/zh-CN/docs/api/dataflow-config",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Dataflow",id:"dataflow",level:2},{value:"Inputs and Outputs",id:"inputs-and-outputs",level:3},{value:"Nodes",id:"nodes",level:2},{value:"Custom Nodes",id:"custom-nodes",level:3},{value:"Operators",id:"operators",level:2},{value:"Example",id:"example",level:2},{value:"TODO: Integration with ROS 1/2",id:"todo-integration-with-ros-12",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dataflow-specification"},"Dataflow Specification"),(0,a.kt)("p",null,"Dataflows are specified through a YAML file. This section presents our current draft for the file format. It only includes basic functionality for now, we will extend it later when we introduce more advanced features."),(0,a.kt)("h2",{id:"dataflow"},"Dataflow"),(0,a.kt)("p",null,"Dataflows are specified through the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n    - id: foo\n      # ... (see below)\n    - id: bar\n      # ... (see below)\n")),(0,a.kt)("h3",{id:"inputs-and-outputs"},"Inputs and Outputs"),(0,a.kt)("p",null,"Each operator or custom node has a separate namespace for its outputs. To refer to outputs, the \\<operator",">","/\\<output",">"," syntax is used. This way, there are no name conflicts between operators."),(0,a.kt)("p",null,"Input operands are specified using the \\<name",">",": \\<operator",">","/\\<output",">"," syntax, where \\<data",">"," is the internal name that should be used for the operand. The main advantage of this name mapping is that the same operator executable can be reused multiple times on different input."),(0,a.kt)("h2",{id:"nodes"},"Nodes"),(0,a.kt)("p",null,"Nodes are defined using the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - id: some-unique-id\n    # For nodes with multiple operators\n    operators:\n      - id: operator-1\n        # ... (see below)\n      - id: operator-2\n        # ... (see below)\n\n\n\n  - id: some-unique-id-2\n    custom:\n      source: path/to/timestamp\n      env:\n        - ENVIRONMENT_VARIABLE_1: true\n      working-directory: some/path\n\n      inputs:\n        input_1: operator_2/output_4\n        input_2: custom_node_2/output_4\n      outputs:\n        - output_1\n\n  # Unique operator\n  - id: some-unique-id-3\n    operator:\n        # ... (see below)\n")),(0,a.kt)("p",null,"Nodes must provide either a ",(0,a.kt)("inlineCode",{parentName:"p"},"operators")," field, or a ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," field, but not both. Nodes with an ",(0,a.kt)("inlineCode",{parentName:"p"},"operators")," field run a dora runtime process, which runs and manages the specified operators. Nodes with a ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," field, run a custom executable."),(0,a.kt)("h3",{id:"custom-nodes"},"Custom Nodes"),(0,a.kt)("p",null,"Custom nodes specify the executable name and arguments like a normal shell operation through the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," field. Through the optional ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," field, it is possible to set environment variables for the process. The optional ",(0,a.kt)("inlineCode",{parentName:"p"},"working-directory")," field allows to overwrite the directory in which the program is started."),(0,a.kt)("p",null,"To integrate with the rest of the dora dataflow, custom nodes must specify their inputs and outputs, similar to operators. They can reference outputs of both operators, and other custom nodes."),(0,a.kt)("h2",{id:"operators"},"Operators"),(0,a.kt)("p",null,"Operators are defined through the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: unique-operator-id\n  name: Human-Readable Operator Name\n  description: An optional description of the operators\'s purpose.\n\n  inputs:\n    input_1: source_operator_2/output_1\n    input_2: custom_node_1/output_1\n  outputs:\n    - output_1\n\n  ## ONE OF:\n  shared_library: "path/to/shared_lib" # file extension and `lib` prefix are added automatically\n  python: "path/to/python_file.py"\n  wasm: "path/to/wasm_file.wasm"\n')),(0,a.kt)("p",null,"Operators must list all their inputs and outputs. Inputs can be linked to arbitrary outputs of other operators or custom nodes."),(0,a.kt)("p",null,"There are multiple ways to implement an operator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as a C-compatible shared library"),(0,a.kt)("li",{parentName:"ul"},"as a Python object"),(0,a.kt)("li",{parentName:"ul"},"as a WebAssembly (WASM) module")),(0,a.kt)("p",null,"Each operator must specify exactly one implementation. The implementation must follow a specific format that is specified by dora."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"{{#include ../../examples/rust-dataflow/dataflow.yml}}\n")),(0,a.kt)("h2",{id:"todo-integration-with-ros-12"},"TODO: Integration with ROS 1/2"),(0,a.kt)("p",null,"To integrate dora-rs operators with ROS1 or ROS2 operators, we plan to provide special ",(0,a.kt)("em",{parentName:"p"},"bridge operators"),". These operators act as a sink in one dataflow framework and push all messages to a different dataflow framework, where they act as source."),(0,a.kt)("p",null,"For example, we plan to provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"to_ros_2")," operator, which takes a single ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," input, which is then published to a specified ROS 2 dataflow."))}c.isMDXComponent=!0}}]);