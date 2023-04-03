"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||n;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:3},o="AWS Setup",s={unversionedId:"tutorial/AWS/SiteWise",id:"tutorial/AWS/SiteWise",title:"AWS Setup",description:"Initial Situation",source:"@site/docs/tutorial/AWS/SiteWise.md",sourceDirName:"tutorial/AWS",slug:"/tutorial/AWS/SiteWise",permalink:"/tutorial/AWS/SiteWise",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"KEYNOA Setup",permalink:"/tutorial/AWS/KEYNOA"},next:{title:"Next Steps",permalink:"/tutorial/AWS/next steps"}},l={},c=[{value:"Initial Situation",id:"initial-situation",level:2},{value:"AWS SiteWise",id:"aws-sitewise",level:2},{value:"Create Dashboard",id:"create-dashboard",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-setup"},"AWS Setup"),(0,i.kt)("h2",{id:"initial-situation"},"Initial Situation"),(0,i.kt)("p",null,"In your research as a marine biologist, you have the task to investigate the influence of climate change on the development of different fish cultures. To do this, you have placed different types of fish in a total of 100 water tanks, which are now exposed to different conditions. The most important parameter for the development of the fish cultures is the temperature. Therefore, you need a solution to collect the temperature data and display it graphically over time. You also want to display the values on your cell phone in real time. "),(0,i.kt)("h2",{id:"aws-sitewise"},"AWS SiteWise"),(0,i.kt)("p",null,"AWS IoT SiteWise is another service provided by AWS that enables you to visualuzie and analyse your data.\nThe following steps are for professional users.\nAlternitively DEVITY can provide you with a complete solution.\nWith AWS IoT SiteWise you can visualize the data collected by AWS IoT Core.\nFollow these steps to create a SiteWise Portal Dashboard:"),(0,i.kt)("h2",{id:"create-dashboard"},"Create Dashboard"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'On the landing page of the portal start by clicking on "Create Dashboard".\n',(0,i.kt)("img",{alt:"SiteWise",src:r(9957).Z,width:"1808",height:"952"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the dashboard via drag and drop on the available properties. Also give the dashboard an appropiate name.\n",(0,i.kt)("img",{alt:"SiteWise",src:r(2406).Z,width:"1808",height:"952"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Once you are done with the layout out the dashboard, click on "Save Dashboard".\n',(0,i.kt)("img",{alt:"SiteWise",src:r(262).Z,width:"1808",height:"952"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you and your other users can see arriving telemetry of the device."))))}u.isMDXComponent=!0},262:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/complete-dashboard-088d8667b3fb005548b3c22b84657a31.png"},2406:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-dashboard-8bc6e03ccc3e981e7d1ee4af8f7aac80.png"},9957:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/landing-3a87a6bd6102fbc772534f067626312f.png"}}]);