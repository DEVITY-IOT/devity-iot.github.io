"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},a="Execution",c={unversionedId:"Device Onboarding/execution",id:"Device Onboarding/execution",title:"Execution",description:"In this part you will complete the onboarding process and run the example use case of an MQTT client.",source:"@site/docs/Device Onboarding/execution.md",sourceDirName:"Device Onboarding",slug:"/Device Onboarding/execution",permalink:"/Device Onboarding/execution",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/Device Onboarding/configuration"},next:{title:"CA creation",permalink:"/Features/CA"}},l={},s=[{value:"Initial onboarding",id:"initial-onboarding",level:2},{value:"Certificate Management",id:"certificate-management",level:2},{value:"Configuration management",id:"configuration-management",level:2},{value:"MQTT client",id:"mqtt-client",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"execution"},"Execution"),(0,o.kt)("p",null,"In this part you will complete the onboarding process and run the example use case of an MQTT client.\nFor this process you will need three seperate terminals.\nUnder normal circumstances these terminals are not neccessary because the processes would be run by a daemon like systemd."),(0,o.kt)("h2",{id:"initial-onboarding"},"Initial onboarding"),(0,o.kt)("p",null,"First you will need to complete the initial setup of the device.\nThis will get the certificates and configuration data from our services that our other tools will use to authenticate.\nFor this a secure channel is used that was setup during preprovisioning.\nThe data is only used by our tools and not by the MQTT client.\nIts configuration and certificats will be obtained in the next two steps.\nRun the following commands to do so:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./linux-client\n")),(0,o.kt)("p",null,"The output should end like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@ DEVITY Onboard Complete    @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n")),(0,o.kt)("p",null,"This completes the initial onboarding."),(0,o.kt)("h2",{id:"certificate-management"},"Certificate Management"),(0,o.kt)("p",null,"The certificate manager is used to generate and update certificates of programs.\nThe onboarder provides initial certificates and configurations for the certificate manager.\nNow the certificate manager generates the certificate for the MQTT client:\nRun the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./cert-man/cert-man\n")),(0,o.kt)("p",null,"The output should end like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\nconfd: Success\nmqtt: Success\nInit_cert: Success\n")),(0,o.kt)("p",null,"Now you have generated the certificates for the MQTT client."),(0,o.kt)("h2",{id:"configuration-management"},"Configuration management"),(0,o.kt)("p",null,"The configuration manager is used to continously provide updated configurations for programs.\nDuring this tutorial it will create the configuration for the MQTT client.\nRun the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./conf-man/bin/confd -config-file=conf-man/confd.conf\n\n")),(0,o.kt)("p",null,"The output should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INFO Backend set to etcdv3\nINFO Starting confd\nINFO Backend source(s) set to ...\nINFO ./mqtt-client/mqtt.ini has md5sum ... should be ...\nINFO Target config ./mqtt-client/mqtt.ini out of sync\nINFO Target config ./mqtt-client/mqtt.ini has been updated\n")),(0,o.kt)("p",null,"Now you have generated the configuration for the MQTT client.\nAlso this compeltes the onboarding process and the operation of the device can continue as normal."),(0,o.kt)("h2",{id:"mqtt-client"},"MQTT client"),(0,o.kt)("p",null,"Now that you have completed the onboarding process you can run the MQTT client."),(0,o.kt)("p",null,"To confirm that the connection was successfull you can use a MQTT subscribtion.\nWe recommend to use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/eclipse/paho.mqtt.c"},"Paho MQTT client"))," CLI interface.\nAlthough you can use any MQTT subscriber to your liking.\nFor authentication use this ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{target:"_blank",href:n(4616).Z},"certificate"))," with your subscriber."),(0,o.kt)("p",null,"With the subscriber setup you can start the MQTT client publisher:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./mqtt-client/mqtt-client mqtt-client/mqtt.ini --simulator\n")),(0,o.kt)("p",null,"You can supply a string as a command line argument to the MQTT client to change the message it sends."),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Connecting\nwaiting for connection\nSubscribing to topic ... for client ... using QoS ...\nSubscribe succeeded\nStarting transmission\nSend {temperature:..., timestamp:...} on topic ... for client with ClientID: ...\nMessage with token value ... delivery confirmed\nSend {temperature:..., timestamp:...} on topic ... for client with ClientID: ...\nMessage with token value ... delivery confirmed\nSend {temperature:..., timestamp:...} on topic ... for client with ClientID: ...\nMessage with token value ... delivery confirmed\n...\n")),(0,o.kt)("p",null,"On the subscribtion you can now see the message you provided to the MQTT client.\nThe MQTT client establishes the connection via certificate based TLS.\nThat way without the onboarding process authentication would not be possible."))}p.isMDXComponent=!0},4616:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/demo.crt-db346d691d7acc4dc2625db19f9e3f52.pem"}}]);