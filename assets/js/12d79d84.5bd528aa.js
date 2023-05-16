"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[418],{3905:(n,e,t)=>{t.d(e,{Zo:()=>_,kt:()=>u});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=i.createContext({}),p=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},_=function(n){var e=p(n.components);return i.createElement(l.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,_=s(n,["components","mdxType","originalType","parentName"]),c=p(t),f=a,u=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return t?i.createElement(u,r(r({ref:e},_),{},{components:t})):i.createElement(u,r({ref:e},_))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,r=new Array(o);r[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[c]="string"==typeof n?n:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8795:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const o={},r="Plot Operator",s={unversionedId:"nodes_operators/plot",id:"nodes_operators/plot",title:"Plot Operator",description:"\x3c!---",source:"@site/docs/nodes_operators/plot.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/plot",permalink:"/docs/nodes_operators/plot",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/plot.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"PID Operator",permalink:"/docs/nodes_operators/pid_control_op"},next:{title:"Webcam Operator",permalink:"/docs/nodes_operators/webcam_op"}},l={},p=[{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>.on_event(...)</code>",id:"on_event",level:3},{value:"<code>.on_input(...)</code>",id:"on_input",level:3}],_={toc:p},c="wrapper";function d(n){let{components:e,...t}=n;return(0,a.kt)(c,(0,i.Z)({},_,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plot-operator"},"Plot Operator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n    Compute a `control` based on the position and the waypoints of the car.\n    \n")),(0,a.kt)("h3",{id:"__init__"},(0,a.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    def __init__(self):\n        self.waypoints = []\n        self.gps_waypoints = []\n        self.obstacles = []\n        self.raw_obstacles = []\n        self.obstacles_bbox = []\n        self.obstacles_id = []\n        self.lanes = []\n        self.global_lanes = []\n        self.drivable_area = []\n        self.last_timestamp = time.time()\n        self.position = []\n        self.last_position = []\n        self.camera_frame = []\n        self.traffic_sign_bbox = []\n        self.point_cloud = np.array([])\n        self.control = []\n        self.last_time = time.time()\n        self.current_speed = []\n\n\n"))),(0,a.kt)("h3",{id:"on_event"},(0,a.kt)("inlineCode",{parentName:"h3"},".on_event(...)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n\n'))),(0,a.kt)("h3",{id:"on_input"},(0,a.kt)("inlineCode",{parentName:"h3"},".on_input(...)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_input(\n        self,\n        dora_input: dict,\n        send_output: Callable[[str, bytes], None],\n    ):\n        if "waypoints" == dora_input["id"]:\n            waypoints = np.array(dora_input["value"]).view(np.float32)\n            waypoints = waypoints.reshape((-1, 3))\n            waypoints = waypoints[:, :2]\n            # Adding z axis for plot\n            waypoints = np.hstack(\n                (waypoints, -0.5 + np.zeros((waypoints.shape[0], 1)))\n            )\n            self.waypoints = waypoints\n\n        elif "gps_waypoints" == dora_input["id"]:\n            gps_waypoints = np.array(dora_input["value"]).view(np.float32)\n            gps_waypoints = gps_waypoints.reshape((-1, 3))\n            gps_waypoints = gps_waypoints[:, :2]\n            # Adding z axis for plot\n            gps_waypoints = np.hstack(\n                (gps_waypoints, -0.5 + np.zeros((gps_waypoints.shape[0], 1)))\n            )\n            self.gps_waypoints = gps_waypoints\n\n        elif "control" == dora_input["id"]:\n            self.control = np.array(dora_input["value"]).view(np.float16)\n\n        elif "obstacles_bbox" == dora_input["id"]:\n            self.obstacles_bbox = (\n                dora_input["value"].to_numpy().view(np.int32).reshape((-1, 6))\n            )\n\n        elif "traffic_sign_bbox" == dora_input["id"]:\n            self.traffic_sign_bbox = (\n                np.array(dora_input["value"]).view(np.int32).reshape((-1, 6))\n            )\n\n        elif "obstacles_id" == dora_input["id"]:\n            self.obstacles_id = (\n                np.array(dora_input["value"]).view(np.int32).reshape((-1, 7))\n            )\n\n        elif "obstacles" == dora_input["id"]:\n            obstacles = (\n                np.array(dora_input["value"])\n                .view(np.float32)\n                .reshape((-1, 5))[:, :3]\n            )\n            self.obstacles = obstacles\n\n        elif "lanes" == dora_input["id"]:\n            lanes = (\n                np.array(dora_input["value"])\n                .view(np.int32)\n                .reshape((-1, 30, 2))\n            )\n            self.lanes = lanes\n\n        elif "global_lanes" == dora_input["id"]:\n            global_lanes = (\n                np.array(dora_input["value"]).view(np.float32).reshape((-1, 3))\n            )\n            self.global_lanes = global_lanes\n\n        elif "drivable_area" == dora_input["id"]:\n            drivable_area = (\n                np.array(dora_input["value"]).view(np.int32).reshape((1, -1, 2))\n            )\n            self.drivable_area = drivable_area\n\n        elif "position" == dora_input["id"]:\n            # Add sensor transform\n\n            self.last_position = self.position\n            self.position = np.array(dora_input["value"]).view(np.float32)\n            if len(self.last_position) == 0:\n                return DoraStatus.CONTINUE\n\n            self.current_speed = (\n                self.position[:2] - self.last_position[:2]\n            ) * 20\n\n        elif "lidar_pc" == dora_input["id"]:\n            point_cloud = np.array(dora_input["value"]).view(np.float32)\n            point_cloud = point_cloud.reshape((-1, 3))\n            # To camera coordinate\n            # The latest coordinate space is the unreal space.\n            point_cloud = np.dot(\n                point_cloud,\n                VELODYNE_MATRIX,\n            )\n            point_cloud = point_cloud[np.where(point_cloud[:, 2] > 0.1)]\n            point_cloud = local_points_to_camera_view(\n                point_cloud, INTRINSIC_MATRIX\n            )\n\n            if len(point_cloud) != 0:\n                self.point_cloud = point_cloud.T\n\n        elif "image" == dora_input["id"]:\n            self.camera_frame = (\n                dora_input["value"]\n                .to_numpy()\n                .reshape((CAMERA_HEIGHT, CAMERA_WIDTH, 4))\n            )\n\n        if "image" != dora_input["id"] or isinstance(self.camera_frame, list):\n            return DoraStatus.CONTINUE\n\n        if len(self.position) != 0:\n            inv_extrinsic_matrix = np.linalg.inv(\n                get_extrinsic_matrix(get_projection_matrix(self.position))\n            )\n        else:\n            inv_extrinsic_matrix = None\n            # print("no position messages.")\n\n        resized_image = self.camera_frame[:, :, :3]\n        resized_image = np.ascontiguousarray(resized_image, np.uint8)\n\n        ## Drawing waypoints on frame\n        if inv_extrinsic_matrix is not None:\n            waypoints = location_to_camera_view(\n                self.waypoints, INTRINSIC_MATRIX, inv_extrinsic_matrix\n            ).T\n            waypoints = np.clip(waypoints, 0, 1_000_000)\n            for id, waypoint in enumerate(waypoints):\n                if np.isnan(waypoint).any():\n                    break\n\n                cv2.circle(\n                    resized_image,\n                    (int(waypoint[0]), int(waypoint[1])),\n                    3,\n                    (\n                        int(np.clip(255 - waypoint[2] * 100, 0, 255)),\n                        int(np.clip(waypoint[2], 0, 255)),\n                        255,\n                    ),\n                    -1,\n                )\n                if VERBOSE:\n                    [x, y, z] = self.waypoints[id]\n                    cv2.putText(\n                        resized_image,\n                        f"x: {x:.2f}, y: {y:.2f}",\n                        (int(waypoint[0]), int(waypoint[1])),\n                        font,\n                        0.5,\n                        (\n                            int(np.clip(255 - waypoint[2] * 100, 0, 255)),\n                            int(np.clip(waypoint[2], 0, 255)),\n                            255,\n                        ),\n                        2,\n                        1,\n                    )\n\n        ## Drawing gps waypoints on frame\n        if inv_extrinsic_matrix is not None:\n            gps_waypoints = location_to_camera_view(\n                self.gps_waypoints, INTRINSIC_MATRIX, inv_extrinsic_matrix\n            ).T\n\n            for waypoint in gps_waypoints:\n                if np.isnan(waypoint).any():\n                    break\n                cv2.circle(\n                    resized_image,\n                    (int(waypoint[0]), int(waypoint[1])),\n                    3,\n                    (\n                        int(np.clip(255 - waypoint[2] * 100, 0, 255)),\n                        int(np.clip(waypoint[2], 0, 255)),\n                        122,\n                    ),\n                    -1,\n                )\n\n        ## Drawing lanes on frame\n        if inv_extrinsic_matrix is not None:\n            lanes = location_to_camera_view(\n                self.global_lanes, INTRINSIC_MATRIX, inv_extrinsic_matrix\n            ).T\n\n            for lane_dot in lanes:\n                if np.isnan(lane_dot).any():\n                    break\n                cv2.circle(\n                    resized_image,\n                    (int(lane_dot[0]), int(lane_dot[1])),\n                    3,\n                    (\n                        100,\n                        100,\n                        100,\n                    ),\n                    -1,\n                )\n\n        ## Draw obstacle dot\n        if inv_extrinsic_matrix is not None:\n            obstacles = location_to_camera_view(\n                self.obstacles, INTRINSIC_MATRIX, inv_extrinsic_matrix\n            ).T\n\n            for id, obstacle in enumerate(obstacles):\n                [x, y, z] = obstacle\n                location = [x, y, z]\n                cv2.circle(\n                    resized_image,\n                    (int(location[0]), int(location[1])),\n                    3,\n                    (\n                        0,\n                        200,\n                        0,\n                    ),\n                    -1,\n                )\n\n                if VERBOSE:\n                    [x, y, z] = self.obstacles[id]\n                    cv2.putText(\n                        resized_image,\n                        f"x: {x:.2f}, y: {y:.2f}",\n                        (int(location[0]), int(location[1])),\n                        font,\n                        0.5,\n                        (0, 200, 0),\n                        2,\n                        1,\n                    )\n\n        for point in self.point_cloud:\n            cv2.circle(\n                resized_image,\n                (int(point[0]), int(point[1])),\n                3,\n                (\n                    0,\n                    int(max(255 - point[2] * 100, 0)),\n                    int(min(point[2] * 10, 255)),\n                ),\n                -1,\n            )\n\n        for obstacle_bb in self.obstacles_bbox:\n            [min_x, max_x, min_y, max_y, confidence, label] = obstacle_bb\n\n            start = (int(min_x), int(min_y))\n            end = (int(max_x), int(max_y))\n            cv2.rectangle(resized_image, start, end, (0, 255, 0), 2)\n            if VERBOSE:\n\n                cv2.putText(\n                    resized_image,\n                    LABELS[label] + f", {confidence}%",\n                    (int(min_x), int(max_y)),\n                    font,\n                    0.5,\n                    (0, 255, 0),\n                    2,\n                    1,\n                )\n\n        for obstacle_id in self.obstacles_id:\n            [\n                min_x,\n                max_x,\n                min_y,\n                max_y,\n                track_id,\n                confidence,\n                label,\n            ] = obstacle_id\n            start = (int(min_x), int(min_y))\n            end = (int(max_x), int(max_y))\n            # cv2.rectangle(resized_image, start, end, (0, 255, 0), 2)\n\n            cv2.putText(\n                resized_image,\n                f"#{track_id}",\n                (int(max_x), int(max_y + 20)),\n                font,\n                0.75,\n                (255, 140, 0),\n                2,\n                1,\n            )\n\n        # for lane in self.lanes:\n        # cv2.polylines(resized_image, [lane], False, (0, 0, 255), 3)\n\n        for contour in self.drivable_area:\n            if len(contour) != 0:\n                back = resized_image.copy()\n                cv2.drawContours(back, [contour], 0, (0, 255, 0), -1)\n\n                # blend with original image\n                alpha = 0.25\n                resized_image = cv2.addWeighted(\n                    resized_image, 1 - alpha, back, alpha, 0\n                )\n        if not isinstance(self.position, list):\n            [x, y, z, rx, ry, rz, rw] = self.position\n            [pitch, roll, yaw] = R.from_quat([rx, ry, rz, rw]).as_euler(\n                "xyz", degrees=True\n            )\n\n            cv2.putText(\n                resized_image,\n                f"""cur: x: {x:.2f}, y: {y:.2f}, pitch: {pitch:.2f}, roll: {roll:.2f}, yaw: {yaw:.2f}""",\n                (10, 30),\n                font,\n                fontScale,\n                fontColor,\n                thickness,\n                lineType,\n            )\n\n        if len(self.current_speed) != 0:\n            cv2.putText(\n                resized_image,\n                f"""vx: {self.current_speed[0]:.2f}, vy: {self.current_speed[1]:.2f}""",\n                (10, 50),\n                font,\n                fontScale,\n                fontColor,\n                thickness,\n                lineType,\n            )\n\n        if len(self.control) != 0:\n            cv2.putText(\n                resized_image,\n                f"""throttle: {self.control[0]:.2f}, brake: {self.control[2]:.2f}, steering: {np.degrees(self.control[1]):.2f} """,\n                (10, 70),\n                font,\n                fontScale,\n                fontColor,\n                thickness,\n                lineType,\n            )\n\n        # cv2.putText(\n        # resized_image,\n        # f"""latency: {(time.time() - self.last_time) * 1000:.2f} ms""",\n        # (10, 105),\n        # font,\n        # fontScale,\n        # fontColor,\n        # thickness,\n        # lineType,\n        # )\n        writer.write(resized_image)\n        resized_image = cv2.resize(resized_image, (800, 600))\n        if not NO_DISPLAY:\n            cv2.imshow("image", resized_image)\n            cv2.waitKey(1)\n        self.last_time = time.time()\n        ## send_output("plot_status", b"")\n        return DoraStatus.CONTINUE\n\n\n'))))}d.isMDXComponent=!0}}]);