"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[63],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4,sidebar_label:"Change Data Hub",title:"Change Data Hub"},i=void 0,c={unversionedId:"reference/change-datahub",id:"reference/change-datahub",title:"Change Data Hub",description:"It is possible to change the Data Hub on a fully provisioned device. This means, you can now send the device telemetry data to a new cloud, without resetting the device.",source:"@site/docs/reference/change-datahub.md",sourceDirName:"reference",slug:"/reference/change-datahub",permalink:"/reference/change-datahub",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Change Data Hub",title:"Change Data Hub"},sidebar:"tutorialSidebar",previous:{title:"Data Hub",permalink:"/reference/data-hub"},next:{title:"Custom DataHub",permalink:"/reference/custom-datahub"}},l={},s=[{value:"How to Change Data Hub?",id:"how-to-change-data-hub",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is possible to change the Data Hub on a fully provisioned device. This means, you can now send the device telemetry data to a new cloud, without resetting the device. "),(0,r.kt)("p",null,"For example, the device is first configured to send telemetry data to ThingsBoard cloud. You want the device to switch to AWS cloud, while the device continues to be operational. Create a new Data Hub for AWS cloud, and change the device configurations to switch to AWS. "),(0,r.kt)("h2",{id:"how-to-change-data-hub"},"How to Change Data Hub?"),(0,r.kt)("p",null,"To change the Data Hub, follow the steps below. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new Data Hub for the required cloud service."),(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA"},"Thingsboard"),", or an ",(0,r.kt)("a",{parentName:"p",href:"/tutorial/Azure%20-%20Telemetric%20Rules/KEYNOA"},"Azure"),", or an ",(0,r.kt)("a",{parentName:"p",href:"/tutorial/AWS/KEYNOA"},"AWS")," Data Hub by following their respective steps."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Login to KEYNOA. Choose the device for which the Data Hub needs to be changed. Click on the device settings.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KEYNOA",src:a(9231).Z,width:"1915",height:"991"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select the newly created Data Hub and save the settings. Wait for a minimum of 2 minutes.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KEYNOA",src:a(3702).Z,width:"1908",height:"987"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"You will be prompted with a note when the change is successfully implemented.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KEYNOA",src:a(831).Z,width:"1898",height:"990"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"The Data Hub is changed on the fly. The device will start sending telemetry data to the new IoT cloud automatically. This enables you to move the device from one IoT cloud service to another seamlessly.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Data Hub hot swap is supported from  0.7.0 release onwards. "),(0,r.kt)("p",{parentName:"admonition"},"Please refer ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/reference/update-keynoa.engine"},"Update KEYNOA.engine"))," for more information.")))}p.isMDXComponent=!0},831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change-datahub-click-70201abfd9c291640dffc31edf857c2c.png"},9231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change-datahub-device-settings-15731062b1e81ceb5e80648221b2a182.png"},3702:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change-datahub-select-new-4595adc34e8a211930f4eaf223f41cd8.png"}}]);