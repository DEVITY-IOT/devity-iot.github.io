"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[900],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2},o="KEYNOA Setup",l={unversionedId:"IoT Use Cases/Thingsboard - Rule Engine/KEYNOA",id:"IoT Use Cases/Thingsboard - Rule Engine/KEYNOA",title:"KEYNOA Setup",description:"In this step you will start by configurating the KEYNOA such that your device will be onboarded to your Thingsboard account.",source:"@site/docs/IoT Use Cases/Thingsboard - Rule Engine/KEYNOA.md",sourceDirName:"IoT Use Cases/Thingsboard - Rule Engine",slug:"/IoT Use Cases/Thingsboard - Rule Engine/KEYNOA",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/KEYNOA",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About Thingsboard",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/prerequisites"},next:{title:"Thingsboard Setup",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/Thingsboard"}},s={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"Create Data Hub",id:"create-data-hub",level:2},{value:"Create Template",id:"create-template",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keynoa-setup"},"KEYNOA Setup"),(0,i.kt)("p",null,"In this step you will start by configurating the KEYNOA such that your device will be onboarded to your Thingsboard account."),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"Before you start, make sure that you fulfill all ",(0,i.kt)("a",{parentName:"p",href:"/Eval%20Kit/Prerequsites"},"prerequisites"),"."),(0,i.kt)("p",null,"If you already used the device before make sure to ",(0,i.kt)("a",{parentName:"p",href:"/Eval%20Kit/Prerequsites#reset-device"},"reset the device")," and ",(0,i.kt)("a",{parentName:"p",href:"/Eval%20Kit/Prerequsites#remove-mqtt-templates"},"remove any MQTT templates")," from the list."),(0,i.kt)("p",null,"In the following steps the device configuration is applied to KEYNOA and not to the device.\nHence, the ",(0,i.kt)("strong",{parentName:"p"},"device is powered off")," until KEYNOA is ready.\nThe device will be turned on in the end of this guide."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For a specific application like MQTT only a single template can be applied.\nIf multiple MQTT Templates exist the newer template will be ignored. Hence your new template referring to a new data hub will not be used because another template is already applied.")),(0,i.kt)("h2",{id:"create-data-hub"},"Create Data Hub"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the KEYNOA Cloud create the Data Hub you want your device to connect to.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1920",height:"1090"})," ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the Thingsboard data hub.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(249).Z,width:"1920",height:"1089"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the details of your Thingsboard instance:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connector Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"your_thingsboard")),(0,i.kt)("li",{parentName:"ul"},"Thingsboard Provider: select ",(0,i.kt)("inlineCode",{parentName:"li"},"Custom Provider")," from the dropdown"),(0,i.kt)("li",{parentName:"ul"},"MQTT Broker URL: leave the default ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl://thingsboard.devity.eu:8883")),(0,i.kt)("li",{parentName:"ul"},"Topic: ",(0,i.kt)("inlineCode",{parentName:"li"},"v1/devices/me/telemetry")),(0,i.kt)("li",{parentName:"ul"},"Provision Key: see step 4"),(0,i.kt)("li",{parentName:"ul"},"Provision Secret: see step 4"),(0,i.kt)("li",{parentName:"ul"},"Certificate Authority: select ",(0,i.kt)("inlineCode",{parentName:"li"},"KEYNOA-CLOUD INT CA2 MQTT v1")," from the dropdown")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5566).Z,width:"1920",height:"1091"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to the ",(0,i.kt)("a",{parentName:"p",href:"https://thingsboard.devity.eu/login"},"ThingsBoard")," with the credentials you find in the KEYNOA credential manager (just click on the lock icon in the header of KEYNOA Cloud). The provision key and secret can be found in the Thingsboard device profile you want your device to be assigned to.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(8618).Z,width:"1808",height:"952"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'If you do not have a device profile yet, create one. Click on "Device profiles" and select "Create new device profile".\n',(0,i.kt)("img",{alt:"KEYNOA",src:a(8978).Z,width:"1808",height:"952"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill in the details, then click on "Next: Transport configuration".'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Eval-Kit device profile")),(0,i.kt)("li",{parentName:"ul"},"Rule chain: ",(0,i.kt)("inlineCode",{parentName:"li"},"Root Rule Chain"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(1637).Z,width:"807",height:"769"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},'Select the Transport type and click on "Next: Alarm rules".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transport type: ",(0,i.kt)("inlineCode",{parentName:"li"},"MQTT"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(7793).Z,width:"982",height:"772"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},'Click on "Next: Device provisioning". Select the device provisioning type, here the device credentials are also displayed. Click on "Add".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provisioning strategy: ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow to create new devices"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(519).Z,width:"982",height:"771"})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},'Click on "Create".')),(0,i.kt)("h2",{id:"create-template"},"Create Template"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Create the MQTT template that assigns your device to the Data Hub.\nUse the Create button and click on "MQTT template".\n',(0,i.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1920",height:"1090"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select your Data Hub. Click on "Next".\n',(0,i.kt)("img",{alt:"KEYNOA",src:a(4303).Z,width:"1920",height:"1088"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the device details:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Device Property: ",(0,i.kt)("inlineCode",{parentName:"li"},"Device Model")),(0,i.kt)("li",{parentName:"ul"},"your-device-model-number: ",(0,i.kt)("inlineCode",{parentName:"li"},"sy-epc-rpi30"))),(0,i.kt)("p",null,'These properties will be matched against the information the device provides about itself during the onboarding process. If it matches the template, the template will be selected to configure the device. Click on "Next".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(9673).Z,width:"1919",height:"1091"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Give the template an identifier.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identifier Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Thingsboard MQTT template"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(1596).Z,width:"1919",height:"1089"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "Save". You have now created the setup for your device to be onboarded.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"KEYNOA and Thingsboard are now fully configured and your device is now ready to be onboarded."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Power up your device and connect it to the internet via an ethernet cable."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait until your device status in KEYNOA switches to ",(0,i.kt)("strong",{parentName:"p"},"active")," by pressing the little refresh button in the to right.\nAfter a successful onboarding, the device status in KEYNOA switches to ",(0,i.kt)("strong",{parentName:"p"},"active"),"."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The onboarding including the boot process should not take longer than 2 minutes.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3508).Z,width:"3835",height:"1954"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Your device is now provisioned to Thingsboard. Continue with the setup of Thingsboard.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Checkout the devices section of your Thingsboard to see the new device.")))}d.isMDXComponent=!0},9532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dashboard-c2c2e2492e4a3b2f7e847928b134882b.png"},9673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT-template-2-a92479540976a79b821ca9e3c4ebfb72.png"},1596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT-template-3-f909ee929cc85684ad712bfb63984f3d.png"},5566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-details-a4a3f4a797cccfa5cd263deb81330e61.png"},249:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-517d23a25c59b38185d0c39dd4561118.png"},8618:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Device-Credentials-56331b88ac23bfca26bd41497863f91d.png"},1637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Device-profile-add-e407a35d0b6800f1bc35de44dccfa206.png"},519:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Device-profile-provisioning-ae88795e5d6d1823730189e57123a2b0.png"},7793:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Device-profile-transport-135ea38e6399c83fce2065b3dc9b4bfa.png"},8978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Device-profiles-b5627c6fd1f23f8ac47b7a72513a92fb.png"},4303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT-template-1-fd453cb690f6ffd6b50feec071464747.png"},3508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devices_list_refresh-f52ee84123e2670c73e42d1713bff51c.png"}}]);