"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1,sidebar_label:"Prerequisites",title:"Prerequisites"},i=void 0,l={unversionedId:"Eval Kit/Prerequsites",id:"Eval Kit/Prerequsites",title:"Prerequisites",description:"The following prerequisites are needed to start the tutorial series:",source:"@site/docs/Eval Kit/Prerequsites.md",sourceDirName:"Eval Kit",slug:"/Eval Kit/Prerequsites",permalink:"/Eval Kit/Prerequsites",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Prerequisites",title:"Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"KEYNOA",permalink:"/"},next:{title:"KEYNOA Eval Kit",permalink:"/Eval Kit/KEYNOA Eval Kit"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Access to KEYNOA",id:"access-to-keynoa",level:2},{value:"Device Voucher",id:"device-voucher",level:2},{value:"Upload Voucher",id:"upload-voucher",level:2},{value:"Access to Thingsboard, Azure, and AWS",id:"access-to-thingsboard-azure-and-aws",level:2},{value:"Reset device",id:"reset-device",level:2},{value:"MQTT Templates",id:"mqtt-templates",level:2},{value:"Wildcard character <code>*</code>",id:"wildcard-character-",level:3},{value:"Remove MQTT Templates",id:"remove-mqtt-templates",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following prerequisites are needed to start the tutorial series:"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have the EvalKit Device (Janz Tec emPC-A/RPI3+ with pre-installed KEYNOA SDK) ready for operation.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You have prepared a 24 V power supply for the device."),(0,n.kt)("li",{parentName:"ul"},"You have prepared an Ethernet cable to connect the device to the internet. The network should provide DHCP and DNS service."))),(0,n.kt)("li",{parentName:"ul"},"You have access to your KEYNOA Cloud tenant (see ",(0,n.kt)("a",{parentName:"li",href:"#access-to-keynoa"},"Access to KEYNOA")," section)."),(0,n.kt)("li",{parentName:"ul"},"In your KEYNOA Cloud tenant there are NO MQTT templates defined (see ",(0,n.kt)("a",{parentName:"li",href:"#remove-mqtt-templates"},"Remove MQTT Templates"),")."),(0,n.kt)("li",{parentName:"ul"},"You have access to Thingsboard, Azure, and AWS (see ",(0,n.kt)("a",{parentName:"li",href:"#access-to-thingsboard-azure-and-aws"},"Access to Thingsboard, Azure, and AWS")," section)."),(0,n.kt)("li",{parentName:"ul"},"You have received a device voucher."),(0,n.kt)("li",{parentName:"ul"},"You have uploaded the device voucher to KEYNOA Cloud (see ",(0,n.kt)("a",{parentName:"li",href:"#upload-voucher"},"Upload Voucher")," section)")),(0,n.kt)("h2",{id:"access-to-keynoa"},"Access to KEYNOA"),(0,n.kt)("p",null,"You will get the access to your own KEYNOA Tenant via email. Please use the link from the e-mail to set a new password and login to KEYNOA."),(0,n.kt)("h2",{id:"device-voucher"},"Device Voucher"),(0,n.kt)("p",null,"You will receive the device voucher via e-mail from DEVITY.\nThis file proves that your are the authorized owner of the device you received.\nThe voucher enables KEYNOA to connect securely to the device and therefore to provision your device automatically.\nSee the next section how to upload the voucher to your KEYNOA tenant."),(0,n.kt)("h2",{id:"upload-voucher"},"Upload Voucher"),(0,n.kt)("p",null,"With a voucher you can register a device in the KEYNOA enrollment service."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'To upload a voucher just click on "upload voucher" in the header.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"KEYNOA",src:a(6563).Z,width:"1920",height:"1089"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Select the voucher via the file selector and click upload.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"KEYNOA",src:a(1227).Z,width:"1920",height:"1091"})),(0,n.kt)("p",null,"Afterwards you will see a success message telling you that the voucher was uploaded and a new device was assigned to your tenant."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The device's serial number is not part of the vouchers due to privacy concerns.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"KEYNOA",src:a(7905).Z,width:"1920",height:"1091"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Finally, go to the devices tab and wait until the Device Status of your device says ",(0,n.kt)("strong",{parentName:"li"},"waiting"),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The processing of new voucher in KEYNOA should not take longer than 5 minutes!")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To find out more about the device status go to the ",(0,n.kt)("a",{parentName:"p",href:"/Miscellaneous/device-status#device-status"},"Device Status")," section.")),(0,n.kt)("h2",{id:"access-to-thingsboard-azure-and-aws"},"Access to Thingsboard, Azure, and AWS"),(0,n.kt)("p",null,"DEVITY has prepared accounts for Thingsboard, Azure, and AWS to make the start as easy as possible for you. Your access to will be provided by the KEYNOA Credential Manager in your KEYNOA Cloud."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Just click on the lock icon in the header. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prerequisite",src:a(1716).Z,width:"1920",height:"1091"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"The KEYNOA Credential Manager will show you all information needed.\nThe Credential Manager also provide a link to the login of the respective cloud:")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Since the applications are created just for you and your Eval Kit, we cannot provide general login links here.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prerequisite",src:a(1594).Z,width:"1918",height:"1083"})),(0,n.kt)("h2",{id:"reset-device"},"Reset device"),(0,n.kt)("p",null,"For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Ctrl/Strg+Alt+F1 and type in "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./reset.sh\n")),(0,n.kt)("p",null,"After that the device reboots and the new onboarding process starts.\nMake sure to power down the device before it boots up again to prevent that the device will be onboarded to the old configuration again."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"After the reboot, the onboarding starts immediately.\nMake sure to setup KEYNOA right especially the templates before restarting the device.")),(0,n.kt)("h2",{id:"mqtt-templates"},"MQTT Templates"),(0,n.kt)("p",null,"An MQTT Template links a DataHub to a device.\nThe Data Hub specifies how the MQTT Client on the device needs to be configured to connect to the respective MQTT broker.\nThe MQTT Template consists of multiple selectors for a specific property.\nThese selectors will be matched against the information the device provides about itself during the onboarding process.\nIf all properties match the specified selectors, the device is assign to the data hub."),(0,n.kt)("admonition",{title:"Example",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As an ",(0,n.kt)("em",{parentName:"p"},"Example")," we assume that we only want the device from DEVITY's Eval kit to connect to our Evaluation IoT Central."),(0,n.kt)("p",{parentName:"admonition"},"So we only want to connect device whose model type is ",(0,n.kt)("inlineCode",{parentName:"p"},"sy-epc-rpi30")," (the device model of the EvalKit).\nTo specify this in KEYNOA, we create an MQTT template and select the Data Hub which is linked to our Evaluation IoT Central.\nThen we select ",(0,n.kt)("inlineCode",{parentName:"p"},"Device Model")," as a selector property and input ",(0,n.kt)("inlineCode",{parentName:"p"},"sy-epc-rpi30")," in the box to the right.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"mqtt-template-example",src:a(2290).Z,width:"1051",height:"381"})),(0,n.kt)("h3",{id:"wildcard-character-"},"Wildcard character ",(0,n.kt)("inlineCode",{parentName:"h3"},"*")),(0,n.kt)("p",null,"If we want all device models to connect to a Data Hub, we can use the wildcard symbol ",(0,n.kt)("inlineCode",{parentName:"p"},"*"),".\nHence, we set the device property ",(0,n.kt)("inlineCode",{parentName:"p"},"Device Model")," to be ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," and the selected data hub will be applied to all our devices."),(0,n.kt)("p",null,"To match devices of a group of device models we can also define somethings like ",(0,n.kt)("inlineCode",{parentName:"p"},"sy-epc-rpi*"),".\nHere we replaced 30 with the wildcard character ",(0,n.kt)("inlineCode",{parentName:"p"},"*"),".\nThis would match then not only the current RaspberryPi 3 based EvalKit but also the new RaspberryPi 4 devices."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"remove-mqtt-template",src:a(6521).Z,width:"1785",height:"456"})),(0,n.kt)("h2",{id:"remove-mqtt-templates"},"Remove MQTT Templates"),(0,n.kt)("p",null,'You can delete a template by clicking the burger menu in the right of the template\'s row and select ("Delete").'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"remove-mqtt-template",src:a(725).Z,width:"1785",height:"456"})))}p.isMDXComponent=!0},725:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MQTT-template-delete-5a24ef3a8aeb66f742c0788bef573a14.png"},6521:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MQTT-template-device-model-d25c024b135b1908ad5a2b32e57465b1.png"},2290:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mqtt-template-concept-0f9c8e3fe1cccbec10bc1105bb0d14a2.png"},1227:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upload-voucher-2-3c9a044ee9e86d806de09211fdc2b11b.png"},7905:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upload-voucher-3-0cee034e425743f33d7a92c94821bd2a.png"},6563:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upload-voucher-6827a94c77ea9c5d191738d04fcee746.png"},1716:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Credential-Manager-1-f8c3e5ec22a0d085344ee10905ea3ed2.png"},1594:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Credential-Manager-2-d977d56ebb91bf6befe09d56f412b148.png"}}]);