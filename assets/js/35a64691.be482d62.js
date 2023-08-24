"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[62],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return r?i.createElement(h,a(a({ref:t},p),{},{components:r})):i.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},a="Tutorial",l={unversionedId:"tutorial/tutorial",id:"tutorial/tutorial",title:"Tutorial",description:"Goal",source:"@site/docs/tutorial/tutorial.md",sourceDirName:"tutorial",slug:"/tutorial/",permalink:"/tutorial/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cloud Subscription Limits",permalink:"/Eval Kit/subscription limits"},next:{title:"Prerequisites",permalink:"/tutorial/Prerequsites"}},u={},s=[{value:"Goal",id:"goal",level:2},{value:"Overview",id:"overview",level:2},{value:"Approach",id:"approach",level:2},{value:"Time approximations",id:"time-approximations",level:2},{value:"Further questions",id:"further-questions",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial"},"Tutorial"),(0,n.kt)("h2",{id:"goal"},"Goal"),(0,n.kt)("p",null,"In this tutorial series, you will learn about three top-notch IoT use cases with the KEYNOA Test Kit. The use cases will mainly show the cloud flexibility and easy onboarding with KEYNOA.\nWe will have achieved our goal when you have experienced for yourself that there is no vendor lock with KEYNOA.   "),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This tutorial series presents three use cases in detail. Each use case deals with a different cloud provider.\nThis results in the three tutorials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Thingsboard - Rule Engine"),(0,n.kt)("li",{parentName:"ul"},"Azure IoT Hub - Telemetric Rules"),(0,n.kt)("li",{parentName:"ul"},"AWS - Data Visualization")),(0,n.kt)("p",null,"You can find more details about the use cases and the requirements in the respective tutorials."),(0,n.kt)("h2",{id:"approach"},"Approach"),(0,n.kt)("p",null,"We recommend the sequence shown, as this will introduce you to complex use cases via an increasing level of difficulty."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Beginner: Thingsboard - Rule Engine "),(0,n.kt)("li",{parentName:"ul"},"Advanced: Azure IoT Hub - Telemetric Rules"),(0,n.kt)("li",{parentName:"ul"},"Professional: AWS - Data Visualization")),(0,n.kt)("p",null,"In the end, you'll realise how simple cloud technologies and IoT with KEYNOA can be. Have fun with the first tutorial!"),(0,n.kt)("h2",{id:"time-approximations"},"Time approximations"),(0,n.kt)("p",null,"Considering you are new to KEYNOA and the cloud platforms, we have estimated the approximate time you might spend on-boarding your device(s) using KEYNOA and the cloud platforms for your needs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Setup KEYNOA with your device(s) : ~30mins to 1Hr"),(0,n.kt)("li",{parentName:"ul"},"Thingsboard : ~1 - 1.5Hrs"),(0,n.kt)("li",{parentName:"ul"},"Azure IoT Hub : ~1 - 1.5Hrs"),(0,n.kt)("li",{parentName:"ul"},"AWS : 30mins to 1Hr")),(0,n.kt)("h2",{id:"further-questions"},"Further questions"),(0,n.kt)("p",null,"In case of any questions with this tutorial or general questions contact us (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@devity.eu"},"support@devity.eu"),")."))}d.isMDXComponent=!0}}]);