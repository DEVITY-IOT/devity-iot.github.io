"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Prerequisites and information",s={unversionedId:"IoT Use Cases/Thingsboard - Rule Engine/prerequisites",id:"IoT Use Cases/Thingsboard - Rule Engine/prerequisites",title:"Prerequisites and information",description:"Prerequisites",source:"@site/docs/IoT Use Cases/Thingsboard - Rule Engine/prerequisites.md",sourceDirName:"IoT Use Cases/Thingsboard - Rule Engine",slug:"/IoT Use Cases/Thingsboard - Rule Engine/prerequisites",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/prerequisites",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"IoT Use Cases - Tutorials",permalink:"/IoT Use Cases/"},next:{title:"Execution",permalink:"/IoT Use Cases/Thingsboard - Rule Engine/execution"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is the Thingsboard Rule Engine",id:"what-is-the-thingsboard-rule-engine",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites-and-information"},"Prerequisites and information"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have received the DEVITY Eval Kit including the DEVITY Gateway "),(0,i.kt)("li",{parentName:"ul"},"You have received the console access to Thingsboard")),(0,i.kt)("h2",{id:"what-is-the-thingsboard-rule-engine"},"What is the Thingsboard Rule Engine"),(0,i.kt)("p",null,"The Rule Engine is an easy to use framework for building event-based workflows. There are 3 main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Message - any incoming event. It can be an incoming data point from devices, device life-cycle event, REST API event, RPC request, etc."),(0,i.kt)("li",{parentName:"ul"},"Rule Node - a function that is executed on an incoming message. There are many different Node types that can filter, transform or execute some action on incoming Messages."),(0,i.kt)("li",{parentName:"ul"},"Rule Chain - nodes are connected with each other with relations, so the outbound message from rule node is sent to next connected rule nodes.")),(0,i.kt)("p",null,"Thingsboard Rule Engine is a highly customizable framework for complex event processing. Here are some common use cases that one can configure via Thingsboard Rule Chains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data validation and modification for incoming telemetry or attributes before saving to the database."),(0,i.kt)("li",{parentName:"ul"},"Copy telemetry or attributes from devices to related assets so you can aggregate telemetry. For example data from multiple devices can be aggregated in related asset."),(0,i.kt)("li",{parentName:"ul"},"Create/Update/Clear alarms based on defined conditions."),(0,i.kt)("li",{parentName:"ul"},"Trigger actions based on device life-cycle events. For example, create alerts if a device is Online/Offline."),(0,i.kt)("li",{parentName:"ul"},"Load additional data required for processing. For example, load temperature threshold value for a device that is defined in device\u2019s customer or tenant attribute."),(0,i.kt)("li",{parentName:"ul"},"Trigger REST API calls to external systems."),(0,i.kt)("li",{parentName:"ul"},"Send emails when complex event occurs and use attributes of other entities inside email template."),(0,i.kt)("li",{parentName:"ul"},"Take into account user preferences during event processing."),(0,i.kt)("li",{parentName:"ul"},"Make RPC calls based on defined condition."),(0,i.kt)("li",{parentName:"ul"},"Integrate with external pipelines like Kafka, Spark, AWS services, etc.")),(0,i.kt)("p",null,"Proceed with the execution to start the tutorial."))}d.isMDXComponent=!0}}]);