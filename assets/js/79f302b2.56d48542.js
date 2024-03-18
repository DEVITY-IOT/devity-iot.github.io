"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[988],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:2},r="KEYNOA Setup",l={unversionedId:"tutorial/AWS/KEYNOA",id:"tutorial/AWS/KEYNOA",title:"KEYNOA Setup",description:"In this step, you will configure KEYNOA to connect your device to your AWS account.",source:"@site/docs/tutorial/AWS/KEYNOA.md",sourceDirName:"tutorial/AWS",slug:"/tutorial/AWS/KEYNOA",permalink:"/tutorial/AWS/KEYNOA",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About AWS IoT",permalink:"/tutorial/AWS/prerequsites"},next:{title:"AWS Setup",permalink:"/tutorial/AWS/SiteWise"}},c={},s=[{value:"Before you start",id:"before-you-start",level:2},{value:"Create Data Hub",id:"create-data-hub",level:2},{value:"Create Template",id:"create-template",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keynoa-setup"},"KEYNOA Setup"),(0,i.kt)("p",null,"In this step, you will configure KEYNOA to connect your device to your AWS account."),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"Before you start, make sure that you fulfill all ",(0,i.kt)("a",{parentName:"p",href:"/tutorial/Prerequsites"},"prerequisites"),"."),(0,i.kt)("p",null,"If you already used the device before, make sure to ",(0,i.kt)("a",{parentName:"p",href:"/reference/reset-device"},"reset the device")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/mqtt-template#remove-mqtt-template"},"remove any MQTT templates")," from the list."),(0,i.kt)("p",null,"In the following steps, the device configuration is applied to KEYNOA and not to the device.\nHence, the ",(0,i.kt)("strong",{parentName:"p"},"device is powered off")," until KEYNOA is ready.\nThe device will be turned on in the end of this guide."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For a specific application like MQTT, only a single template can be applied.\nIf multiple MQTT Templates exist, the newer template will be ignored. Hence, your new template referring to a new data hub will not be used because another template is already applied.")),(0,i.kt)("h2",{id:"create-data-hub"},"Create Data Hub"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In KEYNOA, create the Data Hub you want your device to connect to.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1836",height:"931"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the AWS Data Hub.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(811).Z,width:"1843",height:"1010"}),"\n")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill in the Access Key ID and the Access Secret Key. You can find this information in KEYNOA by clicking on the lock icon in the header and scrolling to the section "AWS". Proceed by clicking on "Confirm".'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Access Key ID: copy from KEYNOA "Credentials" section\n(click on the lock icon in the KEYNOA header and scroll to the section "AWS")'),(0,i.kt)("li",{parentName:"ul"},'Access Secret Key: copy from KEYNOA "Credentials" section.'),(0,i.kt)("li",{parentName:"ul"},"Region: select ",(0,i.kt)("inlineCode",{parentName:"li"},"eu-central-1")," from the dropdown")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3538).Z,width:"1918",height:"1089"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Fill in the details (copy and paste) and click on "Register CA".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Template Body: ",(0,i.kt)("inlineCode",{parentName:"li"},"default")),(0,i.kt)("li",{parentName:"ul"},'RoleARN: copy from KEYNOA "Credentials" section.'),(0,i.kt)("li",{parentName:"ul"},"Topic: ",(0,i.kt)("inlineCode",{parentName:"li"},"/company/facility/42/dty-eval-kit/$(serial)")),(0,i.kt)("li",{parentName:"ul"},"Certificate Authority: select ",(0,i.kt)("inlineCode",{parentName:"li"},"KEYNOA-CLOUD INT CA2 MQTT v1")," from the dropdown. Or, add a new CA by following step 5."),(0,i.kt)("li",{parentName:"ul"},"Connector Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS connector"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(1692).Z,width:"1920",height:"1090"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Click on "Add Certificate".')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(8243).Z,width:"1843",height:"1007"})),(0,i.kt)("p",null,'You can also add a new CA from "Create" button on top right corner.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(8207).Z,width:"1844",height:"1011"})),(0,i.kt)("p",null,"5a-1. Choose your level of expertise to create a new CA."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5964).Z,width:"1845",height:"1012"})),(0,i.kt)("p",null,'5a-2. Choose "CA Type" ',(0,i.kt)("inlineCode",{parentName:"p"},"KEYNOA CA"),' and provide a "CA Name". CA name could be any text to identify the correct CA.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(6870).Z,width:"1848",height:"1009"})),(0,i.kt)("p",null,"5a-3. Basic details of CA are automatically loaded. The fields can be modified to suit the CA. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5317).Z,width:"1849",height:"1013"})),(0,i.kt)("p",null,"  Know more about the ",(0,i.kt)("a",{parentName:"p",href:"/reference/certificate-properties"},"Certificate Properties here.")),(0,i.kt)("p",null,'5a-4. The values in "Issuer Details" determine the device\'s certificate content when a device is provisioned later.\nSelect MQTT in the dropdown ',(0,i.kt)("inlineCode",{parentName:"p"},"Load default values for")," to load the default issuer configuration for an MQTT use case.\nFields are autofilled with relevant values, but can be modified.\nThe content ",(0,i.kt)("inlineCode",{parentName:"p"},"$(serial)"),"in the field ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Common Name"),' states that the Common Name field in the certificate will contain the serial number of the respective device.\nClick on "Submit" to create a new CA.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5917).Z,width:"1847",height:"1010"})),(0,i.kt)("p",null,'5a-5. Click "Close" to finish creating a new CA.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(2727).Z,width:"1848",height:"1024"})),(0,i.kt)("p",null,"5a-6. The newly created CA is listed under ",(0,i.kt)("inlineCode",{parentName:"p"},"Certificate Authorities"),". This can be now used to create the Data Hub. Now the Data Hub can be created by choosing the newly created CA."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5623).Z,width:"1844",height:"1017"})),(0,i.kt)("h2",{id:"create-template"},"Create Template"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you have not uploaded your voucher yet and therefore the list of all devices is empty, then ",(0,i.kt)("a",{parentName:"p",href:"/tutorial/Prerequsites#upload-voucher"},"upload the voucher")," now.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'If MQTT templates already exist, please delete them by clicking on the burger menu in column "Action" and selecting "Delete".')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the MQTT Template in KEYNOA.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(2454).Z,width:"1827",height:"919"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select your Data Hub. Click on "Next".\n',(0,i.kt)("img",{alt:"KEYNOA",src:a(8467).Z,width:"1844",height:"1013"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Populate the "Policy Configurations" which will be used to create MQTT application certificate.\nThe Policy Configurations are autofilled from the values we put in while creating the CA.'))),(0,i.kt)("p",null,"*","Hover over the ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," circles for more information about each configuration. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(8404).Z,width:"1845",height:"1011"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Use the same device details as shown below and click on "Next".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose Device Property: ",(0,i.kt)("inlineCode",{parentName:"li"},"Device Model")),(0,i.kt)("li",{parentName:"ul"},"Type in the following Device Model for your Janz Tec Eval Kit Device: ",(0,i.kt)("inlineCode",{parentName:"li"},"sy-epc-rpi30"))),(0,i.kt)("p",null,"These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information about the template concept see the ",(0,i.kt)("a",{parentName:"p",href:"/reference/mqtt-template"},"MQTT Templates Section"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(2957).Z,width:"1842",height:"1012"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Give the template an Identifier Name and click on "Save".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identifier Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS MQTT template"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3568).Z,width:"1845",height:"1017"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"KEYNOA and AWS are now set up and your device is now ready for the onboarding process.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Connect your device to the internet via an ethernet cable and power it up.")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"The onboarding is completed, when the device status in KEYNOA switches to ",(0,i.kt)("strong",{parentName:"li"},"provisioned"),". You can refresh the table by clicking the refresh button in the top right corner.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The onboarding including the boot process should not take longer than two minutes.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3508).Z,width:"3835",height:"1954"})),(0,i.kt)("p",null,"The voucher enables KEYNOA to connect securely to the device and therefore to provision your device automatically."),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Your device is now provisioned to AWS IoT Core. Continue with the setup of AWS IoT Core.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Checkout the Things section of your AWS IoT Core to see the new device.")))}u.isMDXComponent=!0},8243:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AWS_3AddCertificate-61b5e8ce37f90348d225e68e69cbf389.png"},811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AWS_ChooseCloudService-9db0c5c571b3236e7f2991efddfd768d.png"},2957:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AWS_FilterDevices-195b4d3ce5601cf5bb9a382a0c9d9a8d.png"},1692:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-details-2-f9180e3922ee08d6288a97fa17030391.png"},3538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-details-1b0bf94dc676edb8bdb5c6b59225aaa4.png"},8467:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT_TemplateCreation1-e6abaf6fa905188ab7647edc44ae17dd.png"},9532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dashboard-8b32d05c90b46c3c71a18aff5c228127.png"},8404:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT2PolicyConfigurations-bc365100948653286582d6ce67f8592d.png"},3568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTT4TemplateID-4c8407e500574ae606991419364f4353.png"},2454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTTCreateTemplate-0bfb7d63665a5b7b8fba6ff03b6c84fe.png"},5317:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CABasicDetails-d802fed68d12a137cd4f5ece648a5b87.png"},2727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CACreated-d4e5d6e853ca1acd3edef613d99cc0cd.png"},6870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ChooseCAName-a5c038ff48baa1223177334ac191e4bd.png"},5917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IssuerDetails-92b00d1cc744642326ee3f76403a8260.png"},5964:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LevelOfExperience-970164bc5d5fef9ec70d424aa096e448.png"},5623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NewCAListed-2a6ed8fb7d0561c57665966bdd4dab33.png"},8207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Thingsboard_AddNewCA-25f6ad3d5e2cb3d402b069491bfb9d9c.bin"},3508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devices_list_refresh-f52ee84123e2670c73e42d1713bff51c.png"}}]);