"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[929],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2},o="KEYNOA Setup",l={unversionedId:"tutorial/Azure - Telemetric Rules/KEYNOA",id:"tutorial/Azure - Telemetric Rules/KEYNOA",title:"KEYNOA Setup",description:"In this step, you will configure KEYNOA to connect your device to your Azure account.",source:"@site/docs/tutorial/Azure - Telemetric Rules/KEYNOA.md",sourceDirName:"tutorial/Azure - Telemetric Rules",slug:"/tutorial/Azure - Telemetric Rules/KEYNOA",permalink:"/tutorial/Azure - Telemetric Rules/KEYNOA",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About Azure IoT Central",permalink:"/tutorial/Azure - Telemetric Rules/prerequisites"},next:{title:"IoT Central Setup",permalink:"/tutorial/Azure - Telemetric Rules/IoT Central"}},s={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Create Data Hub",id:"create-data-hub",level:2},{value:"Create Template",id:"create-template",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keynoa-setup"},"KEYNOA Setup"),(0,i.kt)("p",null,"In this step, you will configure KEYNOA to connect your device to your Azure account."),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"Before you start, make sure that you fulfill all ",(0,i.kt)("a",{parentName:"p",href:"/tutorial/Prerequsites"},"prerequisites"),"."),(0,i.kt)("p",null,"If you already used the device before, make sure to "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/reset-device"},"Reset the device")," and "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/mqtt-template#2-remove-mqtt-template"},"Remove any MQTT templates")," from the list.")),(0,i.kt)("p",null,"In the following steps, the device configuration is applied to KEYNOA and not to the device.\nHence, the ",(0,i.kt)("strong",{parentName:"p"},"device is powered off")," until KEYNOA is ready.\nThe device will be turned on in the end of this guide."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For a specific application like MQTT, only a single template can be applied.\nIf multiple MQTT Templates exist, the newer template will be ignored. Hence, your new template referring to a new data hub will not be used because another template is already applied.")),(0,i.kt)("h2",{id:"create-data-hub"},"Create Data Hub"),(0,i.kt)("p",null,"Refer ",(0,i.kt)("a",{parentName:"p",href:"/reference/data-hub"},"Data Hub")," to know more about it and why it is required to be created. Follow the steps to create a new Data Hub on KEYNOA."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In KEYNOA, create the Data Hub you want your device to connect to.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(9532).Z,width:"1836",height:"931"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the Azure IoT Central Data Hub.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(6971).Z,width:"1844",height:"1014"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Log in with your Microsoft account or with the credentials you find in the KEYNOA "Credentials" section (just click on the lock icon in the header of KEYNOA). This account needs admin privileges in both the Azure portal as well as the IoT Hub (see step 4).'),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When you log in the first time, you will be asked to change your password.\nIn addition, Azure requires to set up two factor authentication to secure the account.\nThis is a common and reasonable security practice.\nTo do so, we recommend to installing the ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/security/mobile-authenticator-app"},"Microsoft Authenticator")," App on your smartphone. ",(0,i.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/account-billing/einrichten-einer-authentator-app-als-%C3%BCberpr%C3%BCfungsmethode-in-zwei-schritten-2db39828-15e1-4614-b825-6e2b524e7c95"},"Here")," you can learn how to use the Microsoft Authenticator. ")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that Microsoft Azure uses Single-Sign-On (SSO) functionalities. Signing in or out may impacts other running applications in your browser.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(4185).Z,width:"1896",height:"1089"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Grant access to the to the application.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(4572).Z,width:"1915",height:"1089"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the proper IoT Central data hub. Click on the correct IoT hub on the right.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(5956).Z,width:"1919",height:"1090"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the details:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IoT Central Name: this should reflect your chosen Hub ",(0,i.kt)("inlineCode",{parentName:"li"},"devity-hub")),(0,i.kt)("li",{parentName:"ul"},"Enrollment Group Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"KEYNOA-EvalKit-001")),(0,i.kt)("li",{parentName:"ul"},"IoT Location: ",(0,i.kt)("inlineCode",{parentName:"li"},"westeuropa")),(0,i.kt)("li",{parentName:"ul"},"Device Template: ",(0,i.kt)("inlineCode",{parentName:"li"},"Eval Kit")),(0,i.kt)("li",{parentName:"ul"},"Certificate Authority: select: ",(0,i.kt)("inlineCode",{parentName:"li"},"KEYNOA-CLOUD INT CA2 MQTT v1")," from the dropdown. Add a new CA by following step 8."),(0,i.kt)("li",{parentName:"ul"},"Connector Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"IoT Central connector"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(6914).Z,width:"1919",height:"1090"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'You need to have admin access to the IoT Central Hub to perform this action: Click on "Create Configuration".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'To add a new "Certificate Authority" click on "Add Certificate". To know why you may want to add a new Certificate Authority, ',(0,i.kt)("a",{parentName:"p",href:"/reference/certificate-authority"},"click here.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3951).Z,width:"1844",height:"1011"})),(0,i.kt)("p",null,'You can also add a new CA from "Create" button on top right corner.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(8207).Z,width:"1844",height:"1011"})),(0,i.kt)("p",null,"8a-1. Choose your level of expertise to create a new CA."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5964).Z,width:"1845",height:"1012"})),(0,i.kt)("p",null,'8a-2. Choose "CA Type" ',(0,i.kt)("inlineCode",{parentName:"p"},"KEYNOA CA"),' and provide a "CA Name". CA name could be any text to identify the correct CA.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(6870).Z,width:"1848",height:"1009"})),(0,i.kt)("p",null,"8a-3. Basic details of CA are automatically loaded. The fields can be modified to suit the CA. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5317).Z,width:"1849",height:"1013"})),(0,i.kt)("p",null,"Know more about the ",(0,i.kt)("a",{parentName:"p",href:"/reference/certificate-properties"},"Certificate Properties here.")),(0,i.kt)("p",null,'8a-4. The values in "Issuer Details" determine the device\'s certificate content when a device is provisioned later.\nSelect MQTT in the dropdown ',(0,i.kt)("inlineCode",{parentName:"p"},"Load default values for")," to load the default issuer configuration for an MQTT use case.\nFields are autofilled with relevant values, but can be modified.\nThe content ",(0,i.kt)("inlineCode",{parentName:"p"},"$(serial)"),"in the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Common Name"),' states that the Common Name field in the certificate will contain the serial number of the respective device.\nClick on "Submit" to create a new CA.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5917).Z,width:"1847",height:"1010"})),(0,i.kt)("p",null,'8a-5. Click "Close" to finish creating a new CA.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(2727).Z,width:"1848",height:"1024"})),(0,i.kt)("p",null,"8a-6. The newly created CA is listed under ",(0,i.kt)("inlineCode",{parentName:"p"},"Certificate Authorities"),". This can be now used to create the Data Hub. Now the Data Hub can be created by choosing the newly created CA."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(5623).Z,width:"1844",height:"1017"})),(0,i.kt)("h2",{id:"create-template"},"Create Template"),(0,i.kt)("p",null,"Refer ",(0,i.kt)("a",{parentName:"p",href:"/reference/mqtt-template"},"Template")," to know more about it and why it is required to be created. Follow the steps to create a new Template on KEYNOA."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you have not uploaded your voucher yet and therefore the list of all devices is empty, then ",(0,i.kt)("a",{parentName:"p",href:"/tutorial/Prerequsites#upload-voucher"},"upload the voucher"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'If there are already MQTT templates, make sure they do not match your device. If you are unsure how to do this, you can also remove them:\nby clicking on the burger menu in "Action" column and selecting "Delete". '),(0,i.kt)("p",{parentName:"admonition"},"Follow ",(0,i.kt)("a",{parentName:"p",href:"/reference/mqtt-template#2-remove-mqtt-template"},"this link")," for instructions.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Create the MQTT template that assigns your device to the Data Hub. Use the "Create" button and click on "MQTT template". ')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(2454).Z,width:"1827",height:"919"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select your Data Hub ("IoT Central connector"). Click on "Next".\n',(0,i.kt)("img",{alt:"KEYNOA",src:a(7107).Z,width:"1846",height:"1013"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the 'Policy Configurations' necessary for generating the MQTT application certificate. These configurations","*"," are automatically populated based on the input values provided during the creation of the CA. You may also modify them. "))),(0,i.kt)("p",null,"*","Hover over the ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," circles for more information about each configuration. Alternatively, ",(0,i.kt)("a",{parentName:"p",href:"/reference/certificate-properties"},"click here")," to know more about each configuration. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3203).Z,width:"1846",height:"1010"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Fill in the device details.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Device Property: ",(0,i.kt)("inlineCode",{parentName:"li"},"Device Model")),(0,i.kt)("li",{parentName:"ul"},"your-device-model-number: ",(0,i.kt)("inlineCode",{parentName:"li"},"sy-epc-rpi30"))),(0,i.kt)("p",null,"These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.\n",(0,i.kt)("img",{alt:"KEYNOA",src:a(4314).Z,width:"1844",height:"1009"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Give the template an identifier and click on "Save".')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identifier Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Azure IoT MQTT template"),(0,i.kt)("img",{alt:"KEYNOA",src:a(4067).Z,width:"1844",height:"1008"}))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You have now created the setup instruction for your device.\nKEYNOA and IoT Central are now fully configured and your device is now ready to be onboarded."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Power up your device and connect it to the internet via an ethernet cable."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait until your device status in KEYNOA switches to ",(0,i.kt)("strong",{parentName:"p"},"provisioned")," by pressing the little refresh button in the top right.\nAfter a successful onboarding, the device status in KEYNOA switches to ",(0,i.kt)("strong",{parentName:"p"},"provisioned"),"."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The onboarding including the boot process should not take longer than 2 minutes.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KEYNOA",src:a(3508).Z,width:"3835",height:"1954"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Your device is now provisioned with KEYNOA. Continue with the setup of IoT Central.",(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Checkout the devices section of your IoT Central to see the new device.")),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'Incorrect configurations may result in device provisioning failure. Please verify the status of the device, including the "Failed Provisioning Reason" and the "Last Provisioning Time" to follow up on the process.')))))}d.isMDXComponent=!0},9532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dashboard-8b32d05c90b46c3c71a18aff5c228127.png"},3951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AddNewCA-25f6ad3d5e2cb3d402b069491bfb9d9c.png"},6971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_SelectCloudService-af46703e9c363178307c1a3a59542bf6.png"},6914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-details-2-a9fb29a23238980c78bc5559e992454a.png"},5956:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Data-Hub-details-40851bd48c520e6b46f7cf10dab5c471.png"},3203:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IoTCentral_2PolicyConfigs-6fed6cda5b3377604d3c81336c0f2ee8.png"},4314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IoTCentral_3FilterDevices-9db6dbc58ec7da7c1513321e4311f106.png"},7107:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IoTCentral_CreateTemplate-3b39edf0499cb279f21ff495b98a7661.png"},4067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IoTCentral_NameIdentifier-54f8b28edd2eec85cd97f1b3bfc68655.png"},4572:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Microsoft-login-2-a1f3b5f546eae191954d5a509033f2ca.png"},4185:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Microsoft-login-c3aedbf27ea75f8201e1fb20da756c51.png"},2454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MQTTCreateTemplate-0bfb7d63665a5b7b8fba6ff03b6c84fe.png"},5317:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CABasicDetails-d802fed68d12a137cd4f5ece648a5b87.png"},2727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CACreated-d4e5d6e853ca1acd3edef613d99cc0cd.png"},6870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ChooseCAName-a5c038ff48baa1223177334ac191e4bd.png"},5917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/IssuerDetails-92b00d1cc744642326ee3f76403a8260.png"},5964:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LevelOfExperience-970164bc5d5fef9ec70d424aa096e448.png"},5623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NewCAListed-2a6ed8fb7d0561c57665966bdd4dab33.png"},8207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Thingsboard_AddNewCA-25f6ad3d5e2cb3d402b069491bfb9d9c.bin"},3508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devices_list_refresh-f52ee84123e2670c73e42d1713bff51c.png"}}]);