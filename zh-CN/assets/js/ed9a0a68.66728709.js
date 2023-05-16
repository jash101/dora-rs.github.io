"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[33],{3905:(n,t,e)=>{e.d(t,{Zo:()=>f,kt:()=>_});var a=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},s=Object.keys(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=a.createContext({}),p=function(n){var t=a.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):r(r({},t),n)),e},f=function(n){var t=p(n.components);return a.createElement(l.Provider,{value:t},n.children)},d="mdxType",c={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,s=n.originalType,l=n.parentName,f=i(n,["components","mdxType","originalType","parentName"]),d=p(e),u=o,_=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return e?a.createElement(_,r(r({ref:t},f),{},{components:e})):a.createElement(_,r({ref:t},f))}));function _(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var s=e.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=n,i[d]="string"==typeof n?n:o,r[1]=i;for(var p=2;p<s;p++)r[p]=e[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},5626:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=e(7462),o=(e(7294),e(3905));const s={},r="FOT Operator",i={unversionedId:"nodes_operators/fot_op",id:"nodes_operators/fot_op",title:"FOT Operator",description:"\x3c!---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/nodes_operators/fot_op.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/fot_op",permalink:"/zh-CN/docs/nodes_operators/fot_op",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"search",permalink:"/zh-CN/docs/nodes_operators/search"},next:{title:"MiDaS Operator",permalink:"/zh-CN/docs/nodes_operators/midas_op"}},l={},p=[{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>.on_event(...)</code>",id:"on_event",level:3},{value:"<code>.on_input(...)</code>",id:"on_input",level:3}],f={toc:p},d="wrapper";function c(n){let{components:t,...e}=n;return(0,o.kt)(d,(0,a.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fot-operator"},"FOT Operator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Send the frenet optimal trajectory `waypoints` given some initial conditions in\n    cartesian space.\n    Args:\n        initial_conditions (dict): dict containing the following items\n            ps (float): previous longitudinal position\n            target_speed (float): target speed [m/s]\n            pos (np.ndarray([float, float])): initial position in global coord\n            vel (np.ndarray([float, float])): initial velocity [m/s]\n            wp (np.ndarray([float, float])): list of global waypoints\n            obs (np.ndarray([float, float, float, float])): list of obstacles\n                as: [lower left x, lower left y, upper right x, upper right y]\n        hyperparameters (dict): a dict of optional hyperparameters\n            max_speed (float): maximum speed [m/s]\n            max_accel (float): maximum acceleration [m/s^2]\n            max_curvature (float): maximum curvature [1/m]\n            max_road_width_l (float): maximum road width to the left [m]\n            max_road_width_r (float): maximum road width to the right [m]\n            d_road_w (float): road width sampling discretization [m]\n            dt (float): time sampling discretization [s]\n            maxt (float): max prediction horizon [s]\n            mint (float): min prediction horizon [s]\n            d_t_s (float): target speed sampling discretization [m/s]\n            n_s_sample (float): sampling number of target speed\n            obstacle_clearance (float): obstacle radius [m]\n            kd (float): positional deviation cost\n            kv (float): velocity cost\n            ka (float): acceleration cost\n            kj (float): jerk cost\n            kt (float): time cost\n            ko (float): dist to obstacle cost\n            klat (float): lateral cost\n            klon (float): longitudinal cost\n    Returns:\n        result_x (np.ndarray(float)): x positions of fot, if it exists\n        result_y (np.ndarray(float)): y positions of fot, if it exists\n        speeds (np.ndarray(float)): speeds of fot, if it exists\n        ix (np.ndarray(float)): spline x of fot, if it exists\n        iy (np.ndarray(float)): spline y of fot, if it exists\n        iyaw (np.ndarray(float)): spline yaws of fot, if it exists\n        d (np.ndarray(float)): lateral offset of fot, if it exists\n        s (np.ndarray(float)): longitudinal offset of fot, if it exists\n        speeds_x (np.ndarray(float)): x speeds of fot, if it exists\n        speeds_y (np.ndarray(float)): y speeds of fot, if it exists\n        params (dict): next frenet coordinates, if they exist\n        costs (dict): costs of best frenet path, if it exists\n        success (bool): whether a fot was found or not\n\n")),(0,o.kt)("h3",{id:"__init__"},(0,o.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(self):\n        self.obstacles = np.array([])\n        self.lanes = np.array([])\n        self.position = []\n        self.speed = []\n        self.last_position = []\n        self.waypoints = []\n        self.gps_waypoints = np.array([])\n        self.last_obstacles = np.array([])\n        self.obstacle_metadata = {}\n        self.gps_metadata = {}\n        self.metadata = {}\n        self.orientation = None\n        self.outputs = []\n        self.hyperparameters = {\n            "max_speed": 25.0,\n            "max_accel": 45.0,\n            "max_curvature": 55.0,\n            "max_road_width_l": 0.1,\n            "max_road_width_r": 0.1,\n            "d_road_w": 0.5,\n            "dt": 0.5,\n            "maxt": 5.0,\n            "mint": 2.0,\n            "d_t_s": 5,\n            "n_s_sample": 2.0,\n            "obstacle_clearance": 0.1,\n            "kd": 1.0,\n            "kv": 0.1,\n            "ka": 0.1,\n            "kj": 0.1,\n            "kt": 0.1,\n            "ko": 0.1,\n            "klat": 1.0,\n            "klon": 1.0,\n            "num_threads": 0,  # set 0 to avoid using threaded algorithm\n        }\n        self.conds = {\n            "s0": 0,\n            "target_speed": TARGET_SPEED,\n        }  # paste output from debug log\n\n\n'))),(0,o.kt)("h3",{id:"on_event"},(0,o.kt)("inlineCode",{parentName:"h3"},".on_event(...)")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n\n'))),(0,o.kt)("h3",{id:"on_input"},(0,o.kt)("inlineCode",{parentName:"h3"},".on_input(...)")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_input(\n        self,\n        dora_input: dict,\n        send_output: Callable[[str, bytes], None],\n    ):\n\n        if dora_input["id"] == "position":\n            self.last_position = self.position\n            self.position = np.array(dora_input["value"]).view(np.float32)\n            if len(self.last_position) == 0:\n                self.last_position = self.position\n            return DoraStatus.CONTINUE\n\n        elif dora_input["id"] == "speed":\n            self.speed = np.array(dora_input["value"]).view(np.float32)\n            return DoraStatus.CONTINUE\n\n        elif dora_input["id"] == "obstacles":\n            obstacles = (\n                np.array(dora_input["value"]).view(np.float32).reshape((-1, 5))\n            )\n            if len(self.last_obstacles) > 0:\n                self.obstacles = np.concatenate(\n                    [self.last_obstacles, obstacles]\n                )\n            else:\n                self.obstacles = obstacles\n\n        elif dora_input["id"] == "global_lanes":\n            lanes = (\n                np.array(dora_input["value"])\n                .view(np.float32)\n                .reshape((-1, 60, 3))\n            )\n            self.lanes = lanes\n            return DoraStatus.CONTINUE\n\n        elif "gps_waypoints" == dora_input["id"]:\n            waypoints = np.array(dora_input["value"]).view(np.float32)\n            waypoints = waypoints.reshape((-1, 3))[:, :2]\n            self.gps_waypoints = waypoints\n            return DoraStatus.CONTINUE\n\n        if len(self.gps_waypoints) == 0:\n            print("No waypoints")\n            send_output(\n                "waypoints",\n                self.gps_waypoints.tobytes(),\n                dora_input["metadata"],\n            )\n            return DoraStatus.CONTINUE\n\n        elif len(self.position) == 0 or len(self.speed) == 0:\n            return DoraStatus.CONTINUE\n\n        [x, y, z, rx, ry, rz, rw] = self.position\n        [_, _, yaw] = R.from_quat([rx, ry, rz, rw]).as_euler(\n            "xyz", degrees=False\n        )\n\n        gps_obstacles = get_obstacle_list(\n            self.position, self.obstacles, self.gps_waypoints\n        )\n\n        if len(self.lanes) > 0:\n            lanes = get_lane_list(self.position, self.lanes, self.gps_waypoints)\n            obstacles = np.concatenate([gps_obstacles, lanes])\n        else:\n            obstacles = gps_obstacles\n        initial_conditions = {\n            "ps": 0,\n            "target_speed": self.conds["target_speed"],\n            "pos": self.position[:2],\n            "vel": (np.clip(LA.norm(self.speed), 0.5, 40))\n            * np.array([np.cos(yaw), np.sin(yaw)]),\n            "wp": self.gps_waypoints,\n            "obs": obstacles,\n        }\n\n        (\n            result_x,\n            result_y,\n            speeds,\n            ix,\n            iy,\n            iyaw,\n            d,\n            s,\n            speeds_x,\n            speeds_y,\n            misc,\n            costs,\n            success,\n        ) = fot_wrapper.run_fot(initial_conditions, self.hyperparameters)\n\n        if not success:\n            initial_conditions["wp"] = initial_conditions["wp"][:5]\n            print(f"fot failed. stopping with {initial_conditions}.")\n            target_distance = LA.norm(\n                self.gps_waypoints[-1] - self.position[:2]\n            )\n            print(f"Distance to target: {target_distance}")\n            for obstacle in self.obstacles:\n                print(\n                    f"obstacles:{obstacle}, label: {LABELS[int(obstacle[-1])]}"\n                )\n\n            send_output(\n                "waypoints",\n                pa.array(np.array([x, y, 0.0], np.float32).view(np.uint8)),\n                dora_input["metadata"],\n            )\n            return DoraStatus.CONTINUE\n\n        self.waypoints = np.concatenate([result_x, result_y]).reshape((2, -1)).T\n\n        self.outputs = np.ascontiguousarray(\n            np.concatenate([result_x, result_y, speeds])\n            .reshape((3, -1))\n            .T.astype(np.float32)\n        )\n        send_output(\n            "waypoints",\n            pa.array(self.outputs.ravel().view(np.uint8)),\n            dora_input["metadata"],\n        )\n        return DoraStatus.CONTINUE\n\n\n'))))}c.isMDXComponent=!0}}]);