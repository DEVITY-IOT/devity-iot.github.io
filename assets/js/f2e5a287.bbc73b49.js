"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[382],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return a?i.createElement(m,s(s({ref:t},c),{},{components:a})):i.createElement(m,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:2},s="Execution",o={unversionedId:"IoT Use Cases/Thingsboard - Rule Engine/execution",id:"IoT Use Cases/Thingsboard - Rule Engine/execution",title:"Execution",description:"Initial Situation",source:"@site/docs/IoT Use Cases/Thingsboard - Rule Engine/execution.md",sourceDirName:"IoT Use Cases/Thingsboard - Rule Engine",slug:"/IoT Use Cases/Thingsboard - Rule Engine/execution",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/execution",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites and information",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/prerequisites"},next:{title:"Next Steps",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/next steps"}},l={},d=[{value:"Initial Situation",id:"initial-situation",level:2},{value:"Provision the IoT Sensor with KEYNOA",id:"provision-the-iot-sensor-with-keynoa",level:2},{value:"Create Data Hub",id:"create-data-hub",level:3},{value:"Create Template",id:"create-template",level:3},{value:"Upload Voucher",id:"upload-voucher",level:3},{value:"Thingsboard setup",id:"thingsboard-setup",level:2},{value:"Adapt the Rule Chain",id:"adapt-the-rule-chain",level:3},{value:"Build a Dashboard",id:"build-a-dashboard",level:3},{value:"Temperature Display",id:"temperature-display",level:4},{value:"Temperature Graph",id:"temperature-graph",level:4},{value:"Alarms Table",id:"alarms-table",level:4},{value:"Check the incoming alarms",id:"check-the-incoming-alarms",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"execution"},"Execution"),(0,n.kt)("h2",{id:"initial-situation"},"Initial Situation"),(0,n.kt)("p",null,"You are the IoT manager of a brewing and beverage factory.\nSince the products should only be stored at certain temperatures, it is essential for the entire operation to detect failures of the cooling systems in a timely manner.\nTo do this, they use connected IoT sensors at all storage points. "),(0,n.kt)("p",null,"In order to detect failures directly, you now use the Thingsboard Rule Chain.\nThe aim of this tutorial is to define a rule that immediately detects failures of the cooling system. "),(0,n.kt)("h2",{id:"provision-the-iot-sensor-with-keynoa"},"Provision the IoT Sensor with KEYNOA"),(0,n.kt)("p",null,"First you start by configurating the device with the KEYNOA cloud."),(0,n.kt)("h3",{id:"create-data-hub"},"Create Data Hub"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the KEYNOA UI create the Data Hub you want your device to connect to.\n",(0,n.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the Thingsboard data hub.\n",(0,n.kt)("img",{alt:"KEYNOA",src:a(249).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Fill in the details of your Thingsboard instance. The provision key and secret can be found in the Thingsboard device profile you want your device to be assigned to. Click on "Create".\n',(0,n.kt)("img",{alt:"KEYNOA",src:a(5566).Z,width:"1808",height:"952"})))),(0,n.kt)("h3",{id:"create-template"},"Create Template"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create the MQTT template that assigns your device to the Data Hub.\n",(0,n.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Select your Data Hub. Click on "Next".\n',(0,n.kt)("img",{alt:"KEYNOA",src:a(4303).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Fill in the device details you want your device to match against. Click on "Next".\n',(0,n.kt)("img",{alt:"KEYNOA",src:a(9673).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Give the template an identifier. Click on "Save".\n',(0,n.kt)("img",{alt:"KEYNOA",src:a(1596).Z,width:"1808",height:"952"})))),(0,n.kt)("h3",{id:"upload-voucher"},"Upload Voucher"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You have now created the setup for your device to be onboarded. Now upload the voucher you received to KEYNOA.\n",(0,n.kt)("img",{alt:"KEYNOA",src:a(6563).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the voucher via the file selector.\n",(0,n.kt)("img",{alt:"KEYNOA",src:a(1227).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'After that go to the devives tab and wait until the TO0 Status of your device says "completed".\n',(0,n.kt)("img",{alt:"KEYNOA",src:a(3541).Z,width:"1808",height:"952"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Your device is now ready to be onboarded. Continue with the setup in Thingsboard."))),(0,n.kt)("h2",{id:"thingsboard-setup"},"Thingsboard setup"),(0,n.kt)("h3",{id:"adapt-the-rule-chain"},"Adapt the Rule Chain"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In Thingsboard UI go to Rule Chains section and open Root Rule Chain.\n",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(9082).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Familiarise yourself with the rule chain. Focus only on the red area. Incoming messages are distributed via the switch. If a message contains telemetry data, it is stored. We now want to check the stored data.\n",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(9201).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Create a new script via drag and drop. Enter a name and adapt the function as shown. Click on "Add".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(7380).Z,width:"2736",height:"1538"})),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"return msg.temperature < 35;\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Connect the "Save Timeseries" module with our script. You can connect the modules by dragging and dropping. Select the label "Success" and click on "Add".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(8714).Z,width:"1077",height:"217"}),(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(4191).Z,width:"1217",height:"835"})," ",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(2545).Z,width:"1136",height:"231"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Create a "Create Alarm" block that triggers the alarm. Enter a name. The default code does not need to be changed.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(1972).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Create a "Clear Alarm" block that resolves the alarm. Enter a name. The default code does not need to be changed.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(6523).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Connect the new alarm modules to the Temperature Check. To do this, create two connections via drag and drop, as you have already done. Make sure that the conditions "False" and "True" are set as shown in the screenshot.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(2978).Z,width:"986",height:"502"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Very Important:"),' Click on the "Apply Changes" Button at the bottom right to save all changes.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(9005).Z,width:"2736",height:"1538"})))),(0,n.kt)("h3",{id:"build-a-dashboard"},"Build a Dashboard"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'After customising the rule chain, we build a dashboard to visualise the alarms. Navigate to the section "Dashboard groups" and "All". At the top right you will find the "+" to create a new dashboard. Enter name and description.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(6296).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open the newly created dashboard.\n",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(6957).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on the Edit icon at the bottom right to add a new widget.\n",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(5991).Z,width:"2736",height:"1538"})))),(0,n.kt)("h4",{id:"temperature-display"},"Temperature Display"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The first thing we want to do is create a temperature display. Select the widget type "Cards" for this.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(6333).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose Simple Card.\n",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(7113).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Thingsboard uses aliases as data source. Therefore, for the first widget we need to create an alias. To do this, click on "Create a new one!".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(9770).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter the alias information shown in the screenshot below.\n",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(645).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Now you can choose the newly created alias as data source. Choose "temperature" as attribute. Click "Add".\nCongratulations, you have created your first widget.\nHint: If you can\'t find the attribute temperature, the test device hasn\'t sent data yet.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(7).Z,width:"2736",height:"1538"})))),(0,n.kt)("h4",{id:"temperature-graph"},"Temperature Graph"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The second widget should display a graph showing the temperature curve. To do this, select "Add new widget" again via the button at the bottom right. Then select the widget type "Timeseires Line Chart".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(743).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Insert the data shown below and click "Add".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(1018).Z,width:"2736",height:"1538"})))),(0,n.kt)("h4",{id:"alarms-table"},"Alarms Table"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The third widget should now show the incoming alarms. Therefore, add a new widget, this time with the type "Alarm Widgets".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(5964).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Choose "Alarms table".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(2935).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Enter the two fields marked below. Select the "Active" and "Cleared" state as well as your Entity alias.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(9737).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can adjust the sizes of the widget acording to your preferences. ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Very Important:")),' Do not forget to click "Apply Changes" at the bottom right. Otherwise your Dashboard won\'t be saved.\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(6854).Z,width:"2736",height:"1538"})))),(0,n.kt)("h3",{id:"check-the-incoming-alarms"},"Check the incoming alarms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the temperature rises above 35\xb0, a new entry should occur in the Alarm table. The rule we defined before triggers the action that creates a new alarm.\n",(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(6869).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'If the temperature falls below 35\xb0, the state of the alarm will change to "cleared".\n',(0,n.kt)("img",{alt:"Temperature Validation Node",src:a(9311).Z,width:"2736",height:"1538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can adapt the Dashboard according to your wishes. Insert widgets and explore the Thingsboard functionalities."))))}p.isMDXComponent=!0},9532:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Dashboard-c2e8c4c5ba0afe888dfda73056e645b8.png"},9673:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/MQTT-template-2-e031a34f1ca2a8e1f9b2218f3850dbff.png"},1596:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/MQTT-template-3-3aafb0ec0a2760f633c9d66214e57898.png"},3541:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/TO0-1e1e537d194e9ce2851181ca6d68d0c3.png"},5566:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Data-Hub-details-0e946c24cc7208d24e3fa6691e4ff237.png"},249:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Data-Hub-a952291ad7c585d9568334cf05282f2e.png"},4303:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/MQTT-template-1-39ca86eab3b776e58bf33ad841a877e8.png"},1227:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-voucher-2-0c8d273f92f45da97d3037735b8b6275.png"},6563:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-voucher-84d5502df17d608921ea8bc905303572.png"},9082:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1-ab70be480c8e8315c5cc753bd5f53cef.png"},9005:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/10-d83def88a7009ddd8b2b99bace52527f.png"},6296:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/11-314dcde1b4f08d767e34e0e0c716885f.png"},6957:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/12-d26a0a4f5b7930086728988d3e5d3c76.png"},5991:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/13-bdcd413f3ec526e6c188389e15b8ea36.png"},6333:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/14-9d6c4367e614b735024556d61cab39e3.png"},7113:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/15-02ab5c45ba3aafc40ca39abb1c49c517.png"},9770:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/16-6098688d41de46eda1151d6877ab76b5.png"},645:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/17-cde721dbbe2d56611c074d3acb9f96f2.png"},7:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/18-d2a260a7e6f8f63708b94eddc350aa74.png"},743:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/19-202f7658e19a2a5a18ed410df1df330e.png"},9201:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/2-bcfb498e7da50623bdeb0e2a0a31b5e6.png"},1018:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/20-51c90f1adfc095f7237ca59bd51db01c.png"},5964:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/21-7acde3ad0283ec847cece8806dbc8fc7.png"},2935:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/22-1c6a199e5b3766a98b28efc6e55c3016.png"},9737:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/23-2b35122985c720e9ed9d04d98d1d4521.png"},6854:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/24-4a9066d11e868d969d7ff6a525459b0c.png"},6869:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/25-5278107e934f93f9b49cf6370d939beb.png"},9311:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/26-f2556883c0f98e90fdcfab1d00d957d3.png"},7380:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/3-3f47cd6cca519a643e034fab288e38cd.png"},8714:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/4-3c162f8934d61ddec7de2d96132c7fa3.png"},4191:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/5-3fd70c617947eb67b7ee0fbfbcc1dbd5.png"},2545:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/6-d80c1c9370163114df28b74a3a8b5af6.png"},1972:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/7-3928afbafa971ff48e98ea6efb523d13.png"},6523:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/8-2718573a7403259ce7cbb98b025d1c04.png"},2978:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/9-dea2531eed2184ab195769e1a9372b4c.png"}}]);