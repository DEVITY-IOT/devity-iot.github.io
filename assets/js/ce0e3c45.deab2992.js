"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[260],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1658:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:2,sidebar_label:"KEYNOA Ecosystem",title:"KEYNOA Ecosystem"},o=void 0,s={unversionedId:"keynoa-interfaces",id:"keynoa-interfaces",title:"KEYNOA Ecosystem",description:"KEYNOA enables a device manufacturer, as well as the device owner to improve the functionality of the devices by centrally handling the configuration and using the latest industrial protocols securely.",source:"@site/docs/keynoa-interfaces.md",sourceDirName:".",slug:"/keynoa-interfaces",permalink:"/keynoa-interfaces",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"KEYNOA Ecosystem",title:"KEYNOA Ecosystem"},sidebar:"tutorialSidebar",previous:{title:"KEYNOA",permalink:"/"},next:{title:"Eval Kit",permalink:"/keynoa-eval-kit"}},l={},c=[{value:"KEYNOA Engine",id:"keynoa-engine",level:3},{value:"Producer Service",id:"producer-service",level:3},{value:"KEYNOA",id:"keynoa",level:3},{value:"KEYNOA UI (SPA)",id:"keynoa-ui-spa",level:3},{value:"OpenSSH",id:"openssh",level:3},{value:"OPC UA Server from Unified Automation.",id:"opc-ua-server-from-unified-automation",level:3},{value:"open62541 OPC UA Server",id:"open62541-opc-ua-server",level:3},{value:"Paho MQTT Client",id:"paho-mqtt-client",level:3},{value:"ThinEdge",id:"thinedge",level:3},{value:"LDAP Client",id:"ldap-client",level:3},{value:"API",id:"api",level:3},{value:"MS AD",id:"ms-ad",level:3},{value:"Configuration Management",id:"configuration-management",level:3},{value:"Certificate Management",id:"certificate-management",level:3},{value:"FIDO Device Onboarding",id:"fido-device-onboarding",level:3},{value:"OPC Device Provisioning (via GDS)",id:"opc-device-provisioning-via-gds",level:3},{value:"Zero Touch Provisioning Configuration",id:"zero-touch-provisioning-configuration",level:3},{value:"External PKIs",id:"external-pkis",level:3},{value:"Secret Manager",id:"secret-manager",level:3},{value:"Device Configurator",id:"device-configurator",level:3},{value:"Asset Management System",id:"asset-management-system",level:3},{value:"Existing User Management",id:"existing-user-management",level:3},{value:"Claiming via ERP systems",id:"claiming-via-erp-systems",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KEYNOA enables a device manufacturer, as well as the device owner to improve the functionality of the devices by centrally handling the configuration and using the latest industrial protocols securely. "),(0,a.kt)("p",null,"KEYNOA implements a number of standard applications, proprietry applications (components), and interfaces as shown in the below diagram, to realize the zero-touch onboarding. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"KEYNOA",src:i(5468).Z,width:"861",height:"611"})),(0,a.kt)("h1",{id:"components"},"Components"),(0,a.kt)("h3",{id:"keynoa-engine"},"KEYNOA Engine"),(0,a.kt)("p",null,"KEYNOA.engine is integrated into the device software/firmware and can be obtained as a Linux package, binary, C-SDK or source code. It is responsible for issuing a unique identity to every device produced. It queries KEYNOA to initiate automatic provisioning."),(0,a.kt)("h3",{id:"producer-service"},"Producer Service"),(0,a.kt)("p",null,"The Producer Service creates the proof of ownership for the device and signs the device. It is responsible for the allocation to the respective customer using serial numbers and API to commissioning systems.\nIt is preferably located at the device manufacturer's production facility, but can alternatively also operated by integrators or operators."),(0,a.kt)("h3",{id:"keynoa"},"KEYNOA"),(0,a.kt)("p",null,"KEYNOA is available as SaaS or on-premise and used by manufacturers, OEMs, integrators or operators. KEYNOA verifies the device identity and provides the device with information about which entities are trusted. After mutual authentication, a secure channel is established between the device and this server, through which the data required for onboarding automation is sent to the device."),(0,a.kt)("p",null,"KEYNOA offers a variety of features for efficient and secure processes. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zero-Touch Onboarding"),(0,a.kt)("li",{parentName:"ul"},"Secure Cloud Connectivity"),(0,a.kt)("li",{parentName:"ul"},"Configuration Management"),(0,a.kt)("li",{parentName:"ul"},"Certificate Management"),(0,a.kt)("li",{parentName:"ul"},"User Identity and Access Management"),(0,a.kt)("li",{parentName:"ul"},"Over-the-Air Updates")),(0,a.kt)("h3",{id:"keynoa-ui-spa"},"KEYNOA UI (SPA)"),(0,a.kt)("p",null,"KEYNOA UI is the user interface hosted by DEVITY as web application to define the operation purpose of each device group. Once you have received the device identities such as Ownership Voucher, UID, etc. you can start configure the buyed devices. The configuration steps include creating a Template, a Data Hub, a Certificate Authority, or a Trust Anchor. "),(0,a.kt)("h1",{id:"applications"},"Applications"),(0,a.kt)("p",null,"Following are the list of applications, KEYNOA has been integrated as of now. The list is evolving to address the customer needs and to offer an even more sophisticated solution. Please reach out to us if you miss crucial functionalities."),(0,a.kt)("h3",{id:"openssh"},"OpenSSH"),(0,a.kt)("p",null,"A standard connectivity tool for remote login with the SSH protocol. "),(0,a.kt)("p",null,"It allows to encrypts all traffic to eliminate eavesdropping, connection hijacking, and other attacks. In addition, OpenSSH provides a large suite of secure tunneling capabilities, several authentication methods, and sophisticated configuration options. "),(0,a.kt)("p",null,"A most widely used tool is ",(0,a.kt)("em",{parentName:"p"},"Key management")," with ssh-keysign, ssh-keygen."),(0,a.kt)("h3",{id:"opc-ua-server-from-unified-automation"},"OPC UA Server from Unified Automation."),(0,a.kt)("p",null,"With OPC UA, KEYNOA supports multiple OPC UA Server Endpoints, each with its own certificate."),(0,a.kt)("h3",{id:"open62541-opc-ua-server"},"open62541 OPC UA Server"),(0,a.kt)("p",null,"KEYNOA supports an open-source implementation of an OPC UA server, based on the open62541 stack, providing a platform for industrial communication and interoperability."),(0,a.kt)("h3",{id:"paho-mqtt-client"},"Paho MQTT Client"),(0,a.kt)("p",null,"The MQTT (Message Queuing Telemetry Transport) client, enables the devices to communicate asynchronously over networks."),(0,a.kt)("h3",{id:"thinedge"},"ThinEdge"),(0,a.kt)("p",null,"A lightweight computing solution designed for edge computing applications, where data processing occurs close to the data source, minimizing latency and bandwidth usage. This is best suitable for (IoT) devices with limited energy and bandwidth resources. "),(0,a.kt)("h3",{id:"ldap-client"},"LDAP Client"),(0,a.kt)("p",null,"A client application that interacts with LDAP (Lightweight Directory Access Protocol) servers to retrieve and manipulate directory information. It is implemented for User management.  "),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("p",null,"Several APIs (Application Programming Interface) are integrated with KEYNOA to manage and configure the Device, ThinEdge, Cloud, OPC UA, MQTT, etc. "),(0,a.kt)("h3",{id:"ms-ad"},"MS AD"),(0,a.kt)("p",null,"Microsoft Active Directory, a directory service that provides authentication and authorization services."),(0,a.kt)("p",null,"In addition, the TLS connections of any other applications can also be managed."),(0,a.kt)("p",null,"In order to implement the required security mechanisms on the device, a secure element can be created via an API (e.g. via TPM2.0 or cryptoauthlib)."),(0,a.kt)("h1",{id:"interfaces"},"Interfaces"),(0,a.kt)("h3",{id:"configuration-management"},"Configuration Management"),(0,a.kt)("p",null,"The configuration management service,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"defines device specific configurations, e.g., to configure MQTT topics based on the devices\u2019 serial number and usecase."),(0,a.kt)("li",{parentName:"ul"},"modifies application configuration for many devices at once, e.g., to adapt to infrastructure changes.")),(0,a.kt)("h3",{id:"certificate-management"},"Certificate Management"),(0,a.kt)("p",null,"The certificate management system ensures, "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to automatically renew device certificates."),(0,a.kt)("li",{parentName:"ul"},"to automatically distribute CRLs."),(0,a.kt)("li",{parentName:"ul"},"to periodically check for certificate revocations."),(0,a.kt)("li",{parentName:"ul"},"to maintain and distribute devices\u2019 trust."),(0,a.kt)("li",{parentName:"ul"},"to revoke certificates, individual or all, from one device.")),(0,a.kt)("p",null,"TLS also can be configured for secure authentication and authorization."),(0,a.kt)("h3",{id:"fido-device-onboarding"},"FIDO Device Onboarding"),(0,a.kt)("p",null,"KEYNOA supports the FDO protocol to initially authenticate devices and thus implement a zero touch provisioning process."),(0,a.kt)("h3",{id:"opc-device-provisioning-via-gds"},"OPC Device Provisioning (via GDS)"),(0,a.kt)("p",null,"KEYNOA supports the OPC UA protocol to initially authenticate devices."),(0,a.kt)("h3",{id:"zero-touch-provisioning-configuration"},"Zero Touch Provisioning Configuration"),(0,a.kt)("p",null,"Zero-touch provisioning must be defined in advance, utilizing KEYNOA's corresponding APIs. With intelligent rules as the foundation, easily determine the provisioning requirements for new devices. KEYNOA adheres to the API-first principle, seamlessly integrating as middleware alongside existing MES, SCADA, or cloud solutions"),(0,a.kt)("p",null,"For all other use cases, DEVITY also offers a user interface (UI) in the form of a web-based single page application."),(0,a.kt)("h3",{id:"external-pkis"},"External PKIs"),(0,a.kt)("p",null,"Although KEYNOA includes a full-fledged certificate management system, there is the possibility of integrating an external certificate management system."),(0,a.kt)("h3",{id:"secret-manager"},"Secret Manager"),(0,a.kt)("p",null,"Secrets, such as passwords or tokens for devices, can also be managed in an external secret manager."),(0,a.kt)("h3",{id:"device-configurator"},"Device Configurator"),(0,a.kt)("p",null,"The device configurator interface makes it easier to set up devices in complex scenarios, e.g. in cases where the trust or network zones must be distinguished. The interface makes it possible to provide individual devices with additional (virtual) assigned characteristics."),(0,a.kt)("p",null,'The "Attributor\u201d is a mobile application that allows devices to be assigned to specific trust spaces.'),(0,a.kt)("h3",{id:"asset-management-system"},"Asset Management System"),(0,a.kt)("p",null,"The interface to asset management systems allows automatic inventory of devices newly provisioned in the network."),(0,a.kt)("h3",{id:"existing-user-management"},"Existing User Management"),(0,a.kt)("p",null,"For use in your own company, especially in on-premises operations, the company-wide User Management can be connected to KEYNOA for access control."),(0,a.kt)("h3",{id:"claiming-via-erp-systems"},"Claiming via ERP systems"),(0,a.kt)("p",null,"The Prdoucer Service and KEYNOA offer a claiming interface with which the transfer of ownership rights can be linked to other processes (e.g. ordering, shipping, picking or sales processes)."))}p.isMDXComponent=!0},5468:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/KEYNOA-Interfaces-c3a6081541ff29fe619dc176501bcbbe.png"}}]);