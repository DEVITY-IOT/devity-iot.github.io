"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||n;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:3,sidebar_label:"Data Hub",title:"Data Hub"},o=void 0,s={unversionedId:"reference/data-hub",id:"reference/data-hub",title:"Data Hub",description:"A Data Hub is an information aggregator, related to the messaging protocol, that facilitates device connectivity to the cloud.",source:"@site/docs/reference/data-hub.md",sourceDirName:"reference",slug:"/reference/data-hub",permalink:"/reference/data-hub",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Data Hub",title:"Data Hub"},sidebar:"tutorialSidebar",previous:{title:"Device Properties",permalink:"/reference/device-properties"},next:{title:"Change Data Hub",permalink:"/reference/change-datahub"}},c={},l=[{value:"What is MQTT?",id:"what-is-mqtt",level:3},{value:"MQTT Broker URL",id:"mqtt-broker-url",level:3},{value:"MQTT Topic",id:"mqtt-topic",level:3},{value:"Certificate Authority",id:"certificate-authority",level:3},{value:"Trust Anchor",id:"trust-anchor",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Data Hub")," is an information aggregator, related to the messaging protocol, that facilitates device connectivity to the cloud.\nIt must be configured when the device sends telemetry data via MQTT and allows you to select a cloud provider, such as ThingsBoard, Azure, or AWS. Once configured, the device\u2019s telemetry data is sent to the chosen cloud platform."),(0,i.kt)("p",null,"The Data Hub collects essential MQTT configuration details, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MQTT Broker URL"),(0,i.kt)("li",{parentName:"ul"},"MQTT Topic"),(0,i.kt)("li",{parentName:"ul"},"Certificate Authority"),(0,i.kt)("li",{parentName:"ul"},"Trust Anchor")),(0,i.kt)("h3",{id:"what-is-mqtt"},"What is MQTT?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MQTT")," (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe messaging protocol widely used for communication between IoT (Internet of Things) devices. Its efficiency and low bandwidth usage make it ideal for devices that transmit small amounts of data over unreliable networks, such as sensors, mobile devices, and embedded systems."),(0,i.kt)("p",null,"In MQTT, devices (known as clients) can either publish data to or subscribe to specific topics managed by an MQTT broker. The broker serves as a middleman, handling data published by clients and directing it to subscribers who need that information. This model allows for real-time, event-driven data exchange without requiring a direct connection between publishers and subscribers, which improves scalability and reduces network demand."),(0,i.kt)("p",null,"The chosen cloud platform subscribes to data from a specific topic. The MQTT broker then sends this data to all subscribed parties as soon as it becomes available from the device, as illustrated in the diagram below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"what-is-mqtt",src:r(9719).Z,width:"2404",height:"1435"})),(0,i.kt)("h3",{id:"mqtt-broker-url"},"MQTT Broker URL"),(0,i.kt)("p",null,"The device should know the MQTT Broker URL to connect to the Broker securely. Once the device successfully connects to the broker, it publishes the telemetry data. Once the URL information is entered in the Data Hub, KEYNOA makes sure to send this information to the device along with all other details like MQTT Topic, CA, Trust Anchor, etc. "),(0,i.kt)("h3",{id:"mqtt-topic"},"MQTT Topic"),(0,i.kt)("p",null,"In the MQTT publish-subscribe model, the device sends telemetry data for specific topics, while subscribers can subscribe to those topics to receive the data. A topic consists of one or more levels, separated by a forward slash."),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"v1/device1/building9/floor2/room1/temperature"),". "),(0,i.kt)("p",{parentName:"admonition"},"This topic is created to share the temperature in ",(0,i.kt)("inlineCode",{parentName:"p"},"room1")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"floor2")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"building9")," measured by the ",(0,i.kt)("inlineCode",{parentName:"p"},"device1"),".")),(0,i.kt)("p",null,"The Data Hub collects the topic for which the device is going to publish the telemetry data.   "),(0,i.kt)("h3",{id:"certificate-authority"},"Certificate Authority"),(0,i.kt)("p",null,"By selecting the ",(0,i.kt)("strong",{parentName:"p"},"Certificate Authority"),", you can choose which CA can issue a certificate to the MQTT application running on the device. This application certificate will then be used to securely connect to the cloud before starting to send the telemetry data. You can learn more about Certificate Authorities ",(0,i.kt)("a",{parentName:"p",href:"https://devity-iot.github.io/reference/certificate-authority"},"here"),"."),(0,i.kt)("h3",{id:"trust-anchor"},"Trust Anchor"),(0,i.kt)("p",null,"Using a ",(0,i.kt)("strong",{parentName:"p"},"Trust Anchor"),", typically through a private Certificate Authority (CA), gives you direct control over securing and managing resources in-house. For example, with an AWS Private CA, you can securely manage servers, applications, and other resources. However, to fully enable device compatibility with your private CA, you must provide devices with the necessary CA details."),(0,i.kt)("p",null,"When creating a Data Hub, adding a Trust Anchor certificate allows the device to recognize and authenticate your private CA. This certificate is crucial as it authenticates cloud certificates, establishing a secure communication between your device and the cloud environment."),(0,i.kt)("p",null,"Switching your device across cloud platforms? This is fully supported! Follow our guidelines ",(0,i.kt)("a",{parentName:"p",href:"/reference/change-datahub"},"here")," to explore this process."),(0,i.kt)("p",null,"You can deepen your understanding of Trust Anchors ",(0,i.kt)("a",{parentName:"p",href:"https://devity-iot.github.io/reference/data-hub"},"here"),"."),(0,i.kt)("p",null,"If you want to deep dive into MQTT, we recommend to read through the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.pdf"},"OASIS Standard")))}p.isMDXComponent=!0},9719:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/What_is_MQTT_new-57360280472700f5ab6a78f9138c0b9f.png"}}]);