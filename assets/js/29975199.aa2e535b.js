"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a="Next Steps",s={unversionedId:"tutorial/Thingsboard - Rule Engine/next steps",id:"tutorial/Thingsboard - Rule Engine/next steps",title:"Next Steps",description:"Monitor the entire factory",source:"@site/docs/tutorial/Thingsboard - Rule Engine/next steps.md",sourceDirName:"tutorial/Thingsboard - Rule Engine",slug:"/tutorial/Thingsboard - Rule Engine/next steps",permalink:"/tutorial/Thingsboard - Rule Engine/next steps",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ThingsBoard Setup",permalink:"/tutorial/Thingsboard - Rule Engine/Thingsboard"},next:{title:"About Azure IoT Central",permalink:"/tutorial/Azure - Telemetric Rules/prerequisites"}},l={},c=[{value:"Monitor the entire factory",id:"monitor-the-entire-factory",level:2},{value:"Trigger actions based on defined conditions",id:"trigger-actions-based-on-defined-conditions",level:2},{value:"Sending emails on complex events and using metadata",id:"sending-emails-on-complex-events-and-using-metadata",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"next-steps"},"Next Steps"),(0,i.kt)("h2",{id:"monitor-the-entire-factory"},"Monitor the entire factory"),(0,i.kt)("p",null,"KEYNOA creates device profiles, which in turn respond to the ThingsBoard Rule Engine.\nThis enables a scalable provisioning of thousands of IoT devices.\nEach device is tagged with attributes during setup and KEYNOA does the rest.\nThis way, every square metre of a warehouse can be controlled with temperature rules. "),(0,i.kt)("h2",{id:"trigger-actions-based-on-defined-conditions"},"Trigger actions based on defined conditions"),(0,i.kt)("p",null,"IoT devices are much more versatile than just temperature and telemetry data.\nFor example, existing level indicators of storage slots can be connected with the KEYNOA Eval Kit.\nIf sensor data is processed in the cloud, the ThingsBoard Rule Engine can be used to perform certain actions when the level falls below a defined minimum.\nFor instance, a warning can be sent to the responsible department or a new order can be placed automatically."),(0,i.kt)("h2",{id:"sending-emails-on-complex-events-and-using-metadata"},"Sending emails on complex events and using metadata"),(0,i.kt)("p",null,"IoT devices can monitor a wide range of complex events in conjunction with the ThingsBoard Rule Engine.\nThe actions that are performed when an event is triggered are equally versatile.\nHowever, if you simply want to reach people, a standard method provided by ThingsBoard is to send an email including the event properties.\nIn this way, an IoT monitoring process can be easily integrated into the organisation's existing workflow."))}p.isMDXComponent=!0}}]);