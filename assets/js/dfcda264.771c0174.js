"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[98],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"/faq",sidebar_position:5,sidebar_label:"Troubleshoot",title:"Troubleshoot"},i=void 0,l={unversionedId:"faq/faq",id:"faq/faq",title:"Troubleshoot",description:"The device does not connect to the intended data hub.",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq",permalink:"/faq",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/faq",sidebar_position:5,sidebar_label:"Troubleshoot",title:"Troubleshoot"},sidebar:"tutorialSidebar",previous:{title:"Device Properties",permalink:"/Miscellaneous/properties"}},c={},s=[{value:"The device does not connect to the intended data hub.",id:"the-device-does-not-connect-to-the-intended-data-hub",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-device-does-not-connect-to-the-intended-data-hub"},"The device does not connect to the intended data hub."),(0,o.kt)("p",null,"For a specific application like MQTT only a single template can be applied.\nIf multiple MQTT Templates exist the newer template will be ignored. Hence your new template referring to a new data hub will not be used because another template is already applied.\nMake sure to have only a single template in the list or make sure the only a single templates apply to your device."))}p.isMDXComponent=!0}}]);