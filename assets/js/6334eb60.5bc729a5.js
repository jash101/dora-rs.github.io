"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[744],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>_});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,_=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(_,i(i({ref:n},l),{},{components:t})):r.createElement(_,i({ref:n},l))}));function _(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},i="MiDaS Operator",s={unversionedId:"nodes_operators/midas_op",id:"nodes_operators/midas_op",title:"MiDaS Operator",description:"\x3c!---",source:"@site/docs/nodes_operators/midas_op.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/midas_op",permalink:"/docs/nodes_operators/midas_op",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/midas_op.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"FOT Operator",permalink:"/docs/nodes_operators/fot_op"},next:{title:"MiDaS",permalink:"/docs/nodes_operators/midas_operator"}},p={},d=[{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>.on_event(...)</code>",id:"on_event",level:3},{value:"<code>.on_input(...)</code>",id:"on_input",level:3}],l={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"midas-operator"},"MiDaS Operator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"None\n")),(0,o.kt)("h3",{id:"__init__"},(0,o.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(self):\n        if MIDAS_PATH is None:\n            # With internet\n            self.model = torch.hub.load(\n                "intel-isl/MiDaS",\n                MODEL_TYPE,\n            )\n            midas_transforms = torch.hub.load("intel-isl/MiDaS", "transforms")\n        else:\n            # Without internet\n            self.model = torch.hub.load(\n                repo_or_dir=MIDAS_PATH,\n                model=MODEL_NAME,\n                weights=MIDAS_WEIGHT_PATH,\n                source="local",\n            )\n            midas_transforms = torch.hub.load(\n                repo_or_dir=MIDAS_PATH, model="transforms", source="local"\n            )\n        if MODEL_TYPE == "DPT_Large" or MODEL_TYPE == "DPT_Hybrid":\n            self.transform = midas_transforms.dpt_transform\n        else:\n            self.transform = midas_transforms.small_transform\n        self.model.to(torch.device(DEVICE))\n        self.model.eval()\n\n\n'))),(0,o.kt)("h3",{id:"on_event"},(0,o.kt)("inlineCode",{parentName:"h3"},".on_event(...)")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n\n'))),(0,o.kt)("h3",{id:"on_input"},(0,o.kt)("inlineCode",{parentName:"h3"},".on_input(...)")),(0,o.kt)("p",null,"Handle image\nArgs:\ndora_input",'["id"]',"  (str): Id of the input declared in the yaml configuration\ndora_input",'["data"]'," (bytes): Bytes message of the input\nsend_output (Callable[","[str, bytes]","]): Function enabling sending output back to dora."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_input(\n        self,\n        dora_input: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        """Handle image\n        Args:\n            dora_input["id"]  (str): Id of the input declared in the yaml configuration\n            dora_input["data"] (bytes): Bytes message of the input\n            send_output (Callable[[str, bytes]]): Function enabling sending output back to dora.\n        """\n        if dora_input["id"] == "image":\n            # Convert bytes to numpy array\n            frame = np.frombuffer(\n                dora_input["data"],\n                np.uint8,\n            ).reshape((IMAGE_HEIGHT, IMAGE_WIDTH, 4))\n\n            with torch.no_grad():\n                image = frame[:, :, :3]\n                img = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)\n                input_batch = self.transform(img).to(DEVICE)\n                prediction = self.model(input_batch)\n                prediction = torch.nn.functional.interpolate(\n                    prediction.unsqueeze(1),\n                    size=img.shape[:2],\n                    mode="bicubic",\n                    align_corners=False,\n                ).squeeze()\n                depth_output = prediction.cpu().numpy()\n                depth_min = depth_output.min()\n                depth_max = depth_output.max()\n                normalized_depth = (\n                    255 * (depth_output - depth_min) / (depth_max - depth_min)\n                )\n                normalized_depth *= 3\n                depth_frame = (\n                    np.repeat(np.expand_dims(normalized_depth, 2), 3, axis=2)\n                    / 3\n                )\n                depth_frame = cv2.applyColorMap(\n                    np.uint8(depth_frame), cv2.COLORMAP_INFERNO\n                )\n                height, width = depth_frame.shape[:2]\n                depth_frame_4 = np.dstack(\n                    [depth_frame, np.ones((height, width), dtype="uint8") * 255]\n                )\n\n                send_output(\n                    "depth_frame",\n                    depth_frame_4.tobytes(),\n                    dora_input["metadata"],\n                )\n        return DoraStatus.CONTINUE\n\n\n'))))}c.isMDXComponent=!0}}]);