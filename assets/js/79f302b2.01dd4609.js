"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[988],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2},o="KEYNOA Setup",l={unversionedId:"tutorial/AWS/KEYNOA",id:"tutorial/AWS/KEYNOA",title:"KEYNOA Setup",description:"In this step you will start by configurating the KEYNOA such that your device will be onboarded to your Thingsboard account.",source:"@site/docs/tutorial/AWS/KEYNOA.md",sourceDirName:"tutorial/AWS",slug:"/tutorial/AWS/KEYNOA",permalink:"/tutorial/AWS/KEYNOA",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About AWS IoT",permalink:"/tutorial/AWS/prerequsites"},next:{title:"AWS Setup",permalink:"/tutorial/AWS/SiteWise"}},c={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"Create Data Hub",id:"create-data-hub",level:2},{value:"Create Template",id:"create-template",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keynoa-setup"},"KEYNOA Setup"),(0,i.kt)("p",null,"In this step you will start by configurating the KEYNOA such that your device will be onboarded to your Thingsboard account."),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"Before you start, make sure that you fulfill all ",(0,i.kt)("a",{parentName:"p",href:"/tutorial/Prerequsites"},"prerequisites"),"."),(0,i.kt)("p",null,"If you already used the device before make sure to ",(0,i.kt)("a",{parentName:"p",href:"/reference/reset-device"},"reset the device")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/mqtt-template#remove-mqtt-template"},"remove any MQTT templates")," from the list."),(0,i.kt)("p",null,"In the following steps the device configuration is applied to KEYNOA and not to the device.\nHence, the ",(0,i.kt)("strong",{parentName:"p"},"device is powered off")," until KEYNOA is ready.\nThe device will be turned on in the end of this guide."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For a specific application like MQTT only a single template can be applied.\nIf multiple MQTT Templates exist the newer template will be ignored. Hence your new template referring to a new data hub will not be used because another template is already applied.")),(0,i.kt)("h2",{id:"create-data-hub"},"Create Data Hub"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In KEYNOA create the Data Hub you want your device to connect to.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1845",height:"1009"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the AWS Data Hub.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(9723).Z,width:"1920",height:"1084"}),"\n")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill in the Access Key ID and the Access Secret Key. You can find this information in KEYNOA by clicking on the lock icon in the header and scrolling to the section "AWS". Proceed by clicking on "Confirm".'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Access Key ID: copy from KEYNOA "Credentials" section'),(0,i.kt)("li",{parentName:"ul"},'Access Secret Key: copy from KEYNOA "Credentials" section'),(0,i.kt)("li",{parentName:"ul"},"Region: select ",(0,i.kt)("inlineCode",{parentName:"li"},"eu-central-1")," from the dropdown")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3538).Z,width:"1918",height:"1089"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Fill in the details (copy and paste) and click on "Register CA".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Template Body: ",(0,i.kt)("inlineCode",{parentName:"li"},"default")),(0,i.kt)("li",{parentName:"ul"},'RoleARN: copy from KEYNOA "Credentials" section (click on the lock icon in the KEYNOA header and scroll to the section "AWS")'),(0,i.kt)("li",{parentName:"ul"},"Topic: ",(0,i.kt)("inlineCode",{parentName:"li"},"/company/facility/42/dty-eval-kit/$(serial)")),(0,i.kt)("li",{parentName:"ul"},"Certificate Authority: select ",(0,i.kt)("inlineCode",{parentName:"li"},"KEYNOA-CLOUD INT CA2 MQTT v1")," from the dropdown"),(0,i.kt)("li",{parentName:"ul"},"Connector Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS connector"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(1692).Z,width:"1920",height:"1090"})),(0,i.kt)("h2",{id:"create-template"},"Create Template"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you have not uploaded your voucher yet and therefore the list of all devices is empty, then ",(0,i.kt)("a",{parentName:"p",href:"/tutorial/Prerequsites#upload-voucher"},"upload the voucher")," now.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'If MQTT templates already exist, please delete them by clicking on the burger menu in column "Action" and selecting "Delete".')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the MQTT Template in KEYNOA.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1845",height:"1009"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select your Data Hub. Click on "Next".\n',(0,i.kt)("img",{alt:"KEYNOA",src:a(613).Z,width:"1849",height:"1071"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Use the same device details as shown below and click on "Next".'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose Device Property: ",(0,i.kt)("inlineCode",{parentName:"li"},"Device Model")),(0,i.kt)("li",{parentName:"ul"},"Type in the following Device Model for your Janz Tec Eval Kit Device: ",(0,i.kt)("inlineCode",{parentName:"li"},"sy-epc-rpi30"))),(0,i.kt)("p",null,"These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information about the template concept see the ",(0,i.kt)("a",{parentName:"p",href:"/reference/mqtt-template"},"MQTT Templates Section"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Click on "Next".\n',(0,i.kt)("img",{alt:"KEYNOA",src:a(9673).Z,width:"1848",height:"1004"}))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Give the template an Identifier Name and click on "Save".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identifier Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS MQTT template"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(1596).Z,width:"1919",height:"1089"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"KEYNOA and ThingsBoard are now set up and your device is now ready for the onboarding process.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Connect your device to the internet via an ethernet cable and power it up.")),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"The onboarding is completed, when the device status in KEYNOA switches to ",(0,i.kt)("strong",{parentName:"li"},"provisioned"),". You can refresh the table by clicking the refresh button in the top right corner.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The onboarding including the boot process should not take longer than two minutes.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3508).Z,width:"3835",height:"1954"})),(0,i.kt)("p",null,"The voucher enables KEYNOA to connect securely to the device and therefore to provision your device automatically."),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Your device is now provisioned to AWS IoT Core. Continue with the setup of AWS IoT Core.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Checkout the Things section of your AWS IoT Core to see the new device.")))}d.isMDXComponent=!0},1692:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-details-2-f9180e3922ee08d6288a97fa17030391.png"},3538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-details-1b0bf94dc676edb8bdb5c6b59225aaa4.png"},9723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-e75e29fbab8ea898942634d9a87c84f4.png"},613:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT-template-1-89754b64f80cfd176d4a6c1a24861402.png"},9532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dashboard-b10b0069157a446d18bc3a516dfa9372.png"},9673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT-template-2-b01a0b077ec4c77dcfb2d2b5aaf9c82b.png"},1596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT-template-3-3e7221d572c00260a55be5d1f9a4afa3.png"},3508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devices_list_refresh-f52ee84123e2670c73e42d1713bff51c.png"}}]);