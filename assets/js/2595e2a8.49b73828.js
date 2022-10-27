"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=i.createContext({}),c=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,h=m["".concat(o,".").concat(u)]||m[u]||p[u]||r;return a?i.createElement(h,s(s({ref:t},d),{},{components:a})):i.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:l,s[1]=n;for(var c=2;c<r;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var i=a(7462),l=(a(7294),a(3905));const r={sidebar_position:2},s="Execution",n={unversionedId:"IoT Use Cases/AWS SiteWise - Windfarm/execution",id:"IoT Use Cases/AWS SiteWise - Windfarm/execution",title:"Execution",description:"Initial Situation",source:"@site/docs/IoT Use Cases/AWS SiteWise - Windfarm/execution.md",sourceDirName:"IoT Use Cases/AWS SiteWise - Windfarm",slug:"/IoT Use Cases/AWS SiteWise - Windfarm/execution",permalink:"/IoT Use Cases/AWS SiteWise - Windfarm/execution",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites and information",permalink:"/IoT Use Cases/AWS SiteWise - Windfarm/prerequsites"},next:{title:"Next Steps",permalink:"/IoT Use Cases/AWS SiteWise - Windfarm/next steps"}},o={},c=[{value:"Initial Situation",id:"initial-situation",level:2},{value:"Provision the IoT Sensor with KEYNOA",id:"provision-the-iot-sensor-with-keynoa",level:2},{value:"Create Data Hub",id:"create-data-hub",level:3},{value:"Create Template",id:"create-template",level:3},{value:"Upload Voucher",id:"upload-voucher",level:3},{value:"AWS SiteWise",id:"aws-sitewise",level:2},{value:"Create asset model",id:"create-asset-model",level:3},{value:"Create and configure asset from asset model",id:"create-and-configure-asset-from-asset-model",level:3},{value:"Create device fleet asset model",id:"create-device-fleet-asset-model",level:3},{value:"Create and configure device fleet asset from device fleet asset model",id:"create-and-configure-device-fleet-asset-from-device-fleet-asset-model",level:3},{value:"Create AWS IoT Core rule to send data to SiteWise",id:"create-aws-iot-core-rule-to-send-data-to-sitewise",level:3},{value:"AWS SiteWise Portal",id:"aws-sitewise-portal",level:2},{value:"Create Portal",id:"create-portal",level:3},{value:"Sign into the portal",id:"sign-into-the-portal",level:3},{value:"Look at Asset data",id:"look-at-asset-data",level:3},{value:"Create Project",id:"create-project",level:3},{value:"Create Dashboard",id:"create-dashboard",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"execution"},"Execution"),(0,l.kt)("h2",{id:"initial-situation"},"Initial Situation"),(0,l.kt)("p",null,"You are in charge of "),(0,l.kt)("h2",{id:"provision-the-iot-sensor-with-keynoa"},"Provision the IoT Sensor with KEYNOA"),(0,l.kt)("p",null,"First you start by configurating the device with the KEYNOA cloud."),(0,l.kt)("h3",{id:"create-data-hub"},"Create Data Hub"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the KEYNOA UI create the Data Hub you want your device to connect to.\n",(0,l.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select the AWS data hub.\n",(0,l.kt)("img",{alt:"KEYNOA",src:a(9723).Z,width:"1808",height:"952"}),"\n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Fill in the Key ID and the secret key. Click on "Confirm".\n',(0,l.kt)("img",{alt:"KEYNOA",src:a(3538).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Fill in the RoleARN. Select the correct CA to register at AWS and provide a identifier name. Click on "Regiser CA".\n',(0,l.kt)("img",{alt:"KEYNOA",src:a(1692).Z,width:"1808",height:"952"})))),(0,l.kt)("h3",{id:"create-template"},"Create Template"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the KEYNOA UI create the MQTT Template.\n",(0,l.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Select your Data Hub. Click on "Next".\n',(0,l.kt)("img",{alt:"KEYNOA",src:a(1635).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fill in the device details"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Device Property ("Device Model")'),(0,l.kt)("li",{parentName:"ul"},'your-device-model-number ("eval-kit")'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This property will be matched against the information the device provides about itself during the onboarding process. When it matches the template will be selected to configure the device.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Click on "Next".\n',(0,l.kt)("img",{alt:"KEYNOA",src:a(9673).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Give the template an identifier. Click on "Save".\n',(0,l.kt)("img",{alt:"KEYNOA",src:a(1596).Z,width:"1808",height:"952"})))),(0,l.kt)("h3",{id:"upload-voucher"},"Upload Voucher"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You have now created the setup for your device to be onboarded. Now upload the voucher you received to KEYNOA.\n",(0,l.kt)("img",{alt:"KEYNOA",src:a(6563).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select the voucher via the file selector.\n",(0,l.kt)("img",{alt:"KEYNOA",src:a(1227).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"After that go to the devives tab and wait until the TO0 Status of your device says completed.\n",(0,l.kt)("img",{alt:"KEYNOA",src:a(3541).Z,width:"1808",height:"952"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Your device is now ready to be onboarded. And you can see newly created thing in AWS IoT Core."))),(0,l.kt)("h2",{id:"aws-sitewise"},"AWS SiteWise"),(0,l.kt)("p",null,"AWS IoT SiteWise is another service provided by AWS that enables you to visualuzie and analyse your data.\nThe following steps are for professional users.\nAlternitively DEVITY can provide you with a complete solution.\nWith AWS IoT SiteWise you can visualize the data collected by AWS IoT Core.\nFollow these steps to create a SiteWise Portal:"),(0,l.kt)("p",null,"Important: Check that the correct region is selected before you start"),(0,l.kt)("h3",{id:"create-asset-model"},"Create asset model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In AWS SiteWise console choose "Models"'),(0,l.kt)("li",{parentName:"ul"},'Click on "Create model"\n',(0,l.kt)("img",{alt:"Models",src:a(3634).Z,width:"1806",height:"908"})),(0,l.kt)("li",{parentName:"ul"},"Fill out the Model details with ",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Name ("Eval Kit Device Model")\n- Measurement definition (Name: "Temperature", Unit: "Celcius", leave Data type as "DOUBLE")\n')),(0,l.kt)("img",{alt:"Models",src:a(5513).Z,width:"1791",height:"906"}),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Metric definitions (Name: "Average Temperature", Formula: "avg(Temperature)", Time interval: "5 minutes")\n')),(0,l.kt)("img",{alt:"Models",src:a(1535).Z,width:"1790",height:"909"})),(0,l.kt)("li",{parentName:"ul"},'Click on "Create Model" at the bottom of the page')),(0,l.kt)("h3",{id:"create-and-configure-asset-from-asset-model"},"Create and configure asset from asset model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In AWS SiteWise console choose "Assets"'),(0,l.kt)("li",{parentName:"ul"},'Click on "Create asset"\n',(0,l.kt)("img",{alt:"Assets",src:a(2732).Z,width:"1807",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Fill out the details",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Model: choose the one you just created ("Eval Kit Device Model")'),(0,l.kt)("li",{parentName:"ul"},'Name ("Eval Kit Device 1")'))),(0,l.kt)("li",{parentName:"ul"},'Click on "Create Asset" on the bottom\n',(0,l.kt)("img",{alt:"Assets",src:a(3357).Z,width:"1791",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Select the asset and choose edit"),(0,l.kt)("li",{parentName:"ul"},"Fill in Measurement",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Temperature C ("/company/facility/42/dty-eval-kit/device-serial-number/temperature")\n- Unit ("Clecius")\n')),(0,l.kt)("img",{alt:"Assets",src:a(4144).Z,width:"1792",height:"907"})),(0,l.kt)("li",{parentName:"ul"},'Click on "Save asset" on the bottom')),(0,l.kt)("h3",{id:"create-device-fleet-asset-model"},"Create device fleet asset model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In AWS SiteWise console choose "Models"'),(0,l.kt)("li",{parentName:"ul"},'Click on "Create model"\n',(0,l.kt)("img",{alt:"Models",src:a(3634).Z,width:"1806",height:"908"})),(0,l.kt)("li",{parentName:"ul"},"FIll out the details",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Name ("Eval Kit Device Fleet Model")\n')),(0,l.kt)("img",{alt:"Models",src:a(9536).Z,width:"1791",height:"911"}),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Metric definitions (Name: "Average Temperature", Formula: "avg(Device | Average Temperature)", Time interval: "5 minutes")\n- Hierarchy definitions ("Hierarchy name: "Device", Hierachy model: "Eval Kit Device Model" )\n')),(0,l.kt)("img",{alt:"Models",src:a(6673).Z,width:"1791",height:"911"})),(0,l.kt)("li",{parentName:"ul"},'Click on "Create Model" at the bottom of the page')),(0,l.kt)("h3",{id:"create-and-configure-device-fleet-asset-from-device-fleet-asset-model"},"Create and configure device fleet asset from device fleet asset model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In AWS SiteWise console choose "Assets"'),(0,l.kt)("li",{parentName:"ul"},'Click on "Create asset"\n',(0,l.kt)("img",{alt:"Assets",src:a(2732).Z,width:"1807",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Fill out the details",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Model: choose the one you just created ("Eval Kit Device Fleet Model")'),(0,l.kt)("li",{parentName:"ul"},'Name ("Eval Kit Device Fleet 1")'))),(0,l.kt)("li",{parentName:"ul"},'Click on "Create Asset" on the bottom\n',(0,l.kt)("img",{alt:"Assets",src:a(3357).Z,width:"1791",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Select the asset and choose edit"),(0,l.kt)("li",{parentName:"ul"},"Add associated asset",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Hierarchy ("Device")\n- Asset ("Eval Kit Device 1")\n')),(0,l.kt)("img",{alt:"Assets",src:a(649).Z,width:"1791",height:"908"})),(0,l.kt)("li",{parentName:"ul"},'Click on "Save asset" on the bottom')),(0,l.kt)("h3",{id:"create-aws-iot-core-rule-to-send-data-to-sitewise"},"Create AWS IoT Core rule to send data to SiteWise"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In AWS IoT Core console choose "Message Routing/Rules"'),(0,l.kt)("li",{parentName:"ul"},'Click on "Create Rule"\n',(0,l.kt)("img",{alt:"Rules",src:a(34).Z,width:"1806",height:"907"})),(0,l.kt)("li",{parentName:"ul"},"Fill out the details",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Name ("Eval Kit Forwarding Rule")'),(0,l.kt)("li",{parentName:"ul"},"Optinal: Enter a description"))),(0,l.kt)("li",{parentName:"ul"},'Click on "Next"\n',(0,l.kt)("img",{alt:"Rules",src:a(3921).Z,width:"1805",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Change the SQL query to match the Eval Kits publish topic",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SELECT * FROM '/company/facility/+/dty-eval-kit/+'"))),(0,l.kt)("li",{parentName:"ul"},'The "+" placeholders allow all traffic on matching topics to be forwared to SiteWise'),(0,l.kt)("li",{parentName:"ul"},'Click on "Next"\n',(0,l.kt)("img",{alt:"Rules",src:a(740).Z,width:"1792",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Fill in the details",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- As the action to performe choose "Send a message data to asset properties in AWS IoT SiteWise"\n- Select "By property alias"\n- Property alias ("${topic()}/temperature")\n- Time in secounds ("${floor(timestamp() / 1E3)}")\n- Offset in nanos ("${(timestamp() % 1E3) * 1E6}")\n- Data type ("DOUBLE")\n- Value ("${temperature}")\n')),(0,l.kt)("img",{alt:"Rules",src:a(9191).Z,width:"1791",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Select the IAM role to be used, if you dont have one create it. It need a policy attached that allows this",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- \n{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "iotsitewise:BatchPutAssetPropertyValue",\n            "Resource": "*"\n        }\n    ]\n}"\n')),(0,l.kt)("img",{alt:"Rules",src:a(9295).Z,width:"1792",height:"909"})),(0,l.kt)("li",{parentName:"ul"},'Click on "Next"'),(0,l.kt)("li",{parentName:"ul"},'Check that the details are correctly filled and click on "Create Role"')),(0,l.kt)("h2",{id:"aws-sitewise-portal"},"AWS SiteWise Portal"),(0,l.kt)("h3",{id:"create-portal"},"Create Portal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In AWS SiteWise console choose "Portals"'),(0,l.kt)("li",{parentName:"ul"},'Click on "Create Portal"\n',(0,l.kt)("img",{alt:"Portal",src:a(6684).Z,width:"1807",height:"911"})),(0,l.kt)("li",{parentName:"ul"},"Fill in the details",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Portal name ("Eval Kit Portal")\n')),(0,l.kt)("img",{alt:"Portal",src:a(5049).Z,width:"1791",height:"911"}),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- Email ("your.account@mail-company.de")\n'))),(0,l.kt)("li",{parentName:"ul"},'Click on "Create"\n',(0,l.kt)("img",{alt:"Portal",src:a(8879).Z,width:"1792",height:"910"})),(0,l.kt)("li",{parentName:"ul"},"Either disable alarm notifications or choose an appropiate sender Email\n",(0,l.kt)("img",{alt:"Portal",src:a(122).Z,width:"1790",height:"912"})),(0,l.kt)("li",{parentName:"ul"},"Either add existing user as administrators or create new users for that purpose"),(0,l.kt)("li",{parentName:"ul"},'For the later click on "Create user"\n',(0,l.kt)("img",{alt:"Portal",src:a(394).Z,width:"1807",height:"909"})),(0,l.kt)("li",{parentName:"ul"},"Fill out all details in the form")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Portal",src:a(9743).Z,width:"603",height:"341"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Click on "Next"'),(0,l.kt)("li",{parentName:"ul"},"Repeat the process for viewers")),(0,l.kt)("h3",{id:"sign-into-the-portal"},"Sign into the portal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In AWS SiteWise console choose "Portals"'),(0,l.kt)("li",{parentName:"ul"},"Copy the link of your portal and open it"),(0,l.kt)("li",{parentName:"ul"},"Check your email and check for an invitation with the subjectline",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Invitation to join AWS IAM Identity Center (successor to AWS Single Sign-On)"))),(0,l.kt)("li",{parentName:"ul"},'In that email choose "Accept Invitation"'),(0,l.kt)("li",{parentName:"ul"},"Set a password for your IAM Identity Center user"),(0,l.kt)("li",{parentName:"ul"},"Enter Username and Password on the portal page"),(0,l.kt)("li",{parentName:"ul"},'Click on "Sign in"')),(0,l.kt)("h3",{id:"look-at-asset-data"},"Look at Asset data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'In the Portal choose "Assets"'),(0,l.kt)("li",{parentName:"ul"},"If you boot the Eval Kit now data points will start to appear here.\n",(0,l.kt)("img",{alt:"Portal",src:a(5226).Z,width:"1808",height:"952"})),(0,l.kt)("li",{parentName:"ul"},"Now you can create some more visualizations"),(0,l.kt)("li",{parentName:"ul"},'Click on "Add asset to project"')),(0,l.kt)("h3",{id:"create-project"},"Create Project"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select "Eval Kit Device Fleet"'),(0,l.kt)("li",{parentName:"ul"},'Click on "Next"\n',(0,l.kt)("img",{alt:"Portal",src:a(3013).Z,width:"821",height:"542"})),(0,l.kt)("li",{parentName:"ul"},"Fill in the details",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Project name ("Eval Kit Project")'),(0,l.kt)("li",{parentName:"ul"},'Project description ("My Eval Kit Project")'))),(0,l.kt)("li",{parentName:"ul"},'Click on "Add asset to project"\n',(0,l.kt)("img",{alt:"Portal",src:a(2716).Z,width:"821",height:"367"})),(0,l.kt)("li",{parentName:"ul"},'Click on "Add owners"\n',(0,l.kt)("img",{alt:"Portal",src:a(5086).Z,width:"1808",height:"952"})),(0,l.kt)("li",{parentName:"ul"},"Move the owner user accounts over"),(0,l.kt)("li",{parentName:"ul"},'Click on "Save"\n',(0,l.kt)("img",{alt:"Portal",src:a(9862).Z,width:"1610",height:"732"})),(0,l.kt)("li",{parentName:"ul"},'Repeat the process for "Add viewers"')),(0,l.kt)("h3",{id:"create-dashboard"},"Create Dashboard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Click on "Create Dashboard"'),(0,l.kt)("li",{parentName:"ul"},"Place the Properties on the dashboard via drag and drop"),(0,l.kt)("li",{parentName:"ul"},'Rename the dashboard ("Eval Kit Dashboard")\n',(0,l.kt)("img",{alt:"Portal",src:a(2786).Z,width:"1808",height:"952"})),(0,l.kt)("li",{parentName:"ul"},"Now you have created your data visualization")))}p.isMDXComponent=!0},3921:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Core-Rules-create-1-8ce49b88c7be21cb0c2653f45b26c7aa.png"},740:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Core-Rules-create-2-1d704f4c09e2887e73acf68e4fc6ca45.png"},9191:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Core-Rules-create-3-e5962f8e01265507fc90c7cc13c673da.png"},9295:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Core-Rules-create-4-f2d1e2765d6043eac75be8599d25dd23.png"},34:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Core-Rules-4b10be655a9a985c543570e4f50c78c5.png"},3357:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Assets-create-503d89a6867697572f668b52762384aa.png"},2732:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Assets-4654285970b9c210d8abc302ff307617.png"},5513:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Models-create-1-9f64bb7924bf974ee787a3a2ebccd13e.png"},1535:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Models-create-2-8a547cb3d012d961ee43b4b020bfe780.png"},9536:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Models-create-3-75f1aaa8c8fb0d526657b482c06efd88.png"},6673:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Models-create-4-60fff9bc212bcfbbafab833f86faf6ce.png"},3634:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Models-2b4595663679fafb9ca920e84ebdcd45.png"},5226:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-Assets-bf7d76a95c70b2862111805dd3b00fc7.png"},2786:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-Dashboard-84c1d00cc813ad8706e9c99a6823bd82.png"},2716:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-Project-create-2-3c3920e00d9568c1aa1b3898410d49d7.png"},3013:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-Project-create-cfa0033c0b5a9db7bc9c540fbfd27f5d.png"},5086:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-Project-edit-59b939c482d15c26cd9c037a31da4c66.png"},9862:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-Project-members-2eb5b19bf40bfc8976303b038d335d10.png"},5049:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-create-1-203b8c84cfa52bd37497c104df3c1da2.png"},8879:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-create-2-d2643d921ca0bba734e7881f1d45e591.png"},122:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-create-3-eec856d87983acdc39fbe524703d65f8.png"},9743:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-members-create-a47ff42df0b52756d2e1e5324c0970b3.png"},394:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-members-d97d9d00f70926cffa28b5206bfa0adb.png"},6684:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-Portal-47364ad6b1be0dbe7557984978912db5.png"},4144:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-edit-device-a2a0476659cb139ca91dd4f644a9035c.png"},649:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SiteWise-edit-fleet-a60e0fdcda7cf81900b818ac07de2cd7.png"},1692:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Data-Hub-details-2-f812220199441dadc70f07261321b41c.png"},3538:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Data-Hub-details-6be0bdc4bf39f01afce1bc29c7ba8685.png"},9723:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Data-Hub-fad2f06fb1ab7d164d1a5db5646a82cb.png"},9532:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Dashboard-c2e8c4c5ba0afe888dfda73056e645b8.png"},1635:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/MQTT-template-1-8f9620d6dba72e221aa95781f2cc4b71.png"},9673:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/MQTT-template-2-e031a34f1ca2a8e1f9b2218f3850dbff.png"},1596:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/MQTT-template-3-3aafb0ec0a2760f633c9d66214e57898.png"},3541:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/TO0-1e1e537d194e9ce2851181ca6d68d0c3.png"},1227:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-voucher-2-0c8d273f92f45da97d3037735b8b6275.png"},6563:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-voucher-84d5502df17d608921ea8bc905303572.png"}}]);