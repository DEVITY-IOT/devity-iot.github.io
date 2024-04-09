"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"KEYNOA","href":"/","docId":"intro"},{"type":"link","label":"KEYNOA Ecosystem","href":"/keynoa-interfaces","docId":"keynoa-interfaces"},{"type":"category","label":"KEYNOA Evaluation Kit","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Eval Kit Device","href":"/Eval Kit/Eval Kit Device","docId":"Eval Kit/Eval Kit Device"},{"type":"link","label":"Cloud Subscription Limits","href":"/Eval Kit/subscription limits","docId":"Eval Kit/subscription limits"}],"href":"/keynoa-eval-kit"},{"type":"category","label":"Owner Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Prerequisites","href":"/tutorial/Prerequsites","docId":"tutorial/Prerequsites"},{"type":"category","label":"Thingsboard - Rule Engine","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"About ThingsBoard","href":"/tutorial/Thingsboard - Rule Engine/prerequisites","docId":"tutorial/Thingsboard - Rule Engine/prerequisites"},{"type":"link","label":"KEYNOA Setup","href":"/tutorial/Thingsboard - Rule Engine/KEYNOA","docId":"tutorial/Thingsboard - Rule Engine/KEYNOA"},{"type":"link","label":"ThingsBoard Setup","href":"/tutorial/Thingsboard - Rule Engine/Thingsboard","docId":"tutorial/Thingsboard - Rule Engine/Thingsboard"},{"type":"link","label":"Next Steps","href":"/tutorial/Thingsboard - Rule Engine/next steps","docId":"tutorial/Thingsboard - Rule Engine/next steps"}]},{"type":"category","label":"Azure - Telemetric Rules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"About Azure IoT Central","href":"/tutorial/Azure - Telemetric Rules/prerequisites","docId":"tutorial/Azure - Telemetric Rules/prerequisites"},{"type":"link","label":"KEYNOA Setup","href":"/tutorial/Azure - Telemetric Rules/KEYNOA","docId":"tutorial/Azure - Telemetric Rules/KEYNOA"},{"type":"link","label":"IoT Central Setup","href":"/tutorial/Azure - Telemetric Rules/IoT Central","docId":"tutorial/Azure - Telemetric Rules/IoT Central"},{"type":"link","label":"Next Steps","href":"/tutorial/Azure - Telemetric Rules/next steps","docId":"tutorial/Azure - Telemetric Rules/next steps"}]},{"type":"category","label":"AWS - Data Visualization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"About AWS IoT","href":"/tutorial/AWS/prerequsites","docId":"tutorial/AWS/prerequsites"},{"type":"link","label":"KEYNOA Setup","href":"/tutorial/AWS/KEYNOA","docId":"tutorial/AWS/KEYNOA"},{"type":"link","label":"AWS Setup","href":"/tutorial/AWS/SiteWise","docId":"tutorial/AWS/SiteWise"},{"type":"link","label":"Next Steps","href":"/tutorial/AWS/next steps","docId":"tutorial/AWS/next steps"}]}],"href":"/tutorial/"},{"type":"category","label":"Developer Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Device Preparation","href":"/developer-guide/device-preparation","docId":"developer-guide/device-preparation"}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Device Status","href":"/reference/device-status","docId":"reference/device-status"},{"type":"link","label":"Device Properties","href":"/reference/device-properties","docId":"reference/device-properties"},{"type":"link","label":"Data Hub","href":"/reference/data-hub","docId":"reference/data-hub"},{"type":"link","label":"Change Data Hub","href":"/reference/change-datahub","docId":"reference/change-datahub"},{"type":"link","label":"Custom DataHub","href":"/reference/custom-datahub","docId":"reference/custom-datahub"},{"type":"link","label":"Template","href":"/reference/mqtt-template","docId":"reference/mqtt-template"},{"type":"link","label":"Certificate Authority","href":"/reference/certificate-authority","docId":"reference/certificate-authority"},{"type":"link","label":"Trust Anchor","href":"/reference/trust-anchor","docId":"reference/trust-anchor"},{"type":"link","label":"Reset device","href":"/reference/reset-device","docId":"reference/reset-device"},{"type":"link","label":"Update KEYNOA.engine","href":"/reference/update-keynoa.engine","docId":"reference/update-keynoa.engine"},{"type":"link","label":"Certificate Properties","href":"/reference/certificate-properties","docId":"reference/certificate-properties"},{"type":"link","label":"Glossary","href":"/reference/glossary","docId":"reference/glossary"}]},{"type":"link","label":"FAQ","href":"/faq","docId":"faq/faq"}]},"docs":{"developer-guide/device-preparation":{"id":"developer-guide/device-preparation","title":"Device Preparation","description":"A device must undergo preparation at the manufacturing site prior to being shipped to the owner. This process, referred to as Device Initialization in the FIDO device onboarding standard, ensures readiness for use.","sidebar":"tutorialSidebar"},"Eval Kit/Eval Kit":{"id":"Eval Kit/Eval Kit","title":"Eval Kit","description":"The KEYNOA Eval Kit is a unique opportunity to boost your knowledge about how to build up flexible, scalable, and secure IoT use cases.","sidebar":"tutorialSidebar"},"Eval Kit/Eval Kit Device":{"id":"Eval Kit/Eval Kit Device","title":"Eval Kit Device","description":"In cooperation with our partner Janz Tec we developed a Eval Kit with a pre-installed KEYNOA SDK.","sidebar":"tutorialSidebar"},"Eval Kit/subscription limits":{"id":"Eval Kit/subscription limits","title":"Cloud Subscription Limits","description":"Subscription Limits","sidebar":"tutorialSidebar"},"faq/faq":{"id":"faq/faq","title":"FAQ","description":"The device does not connect to the intended data hub.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"KEYNOA","description":"Overview","sidebar":"tutorialSidebar"},"keynoa-interfaces":{"id":"keynoa-interfaces","title":"KEYNOA Ecosystem","description":"KEYNOA enables a device manufacturer, as well as the device owner to improve the functionality of the devices by centrally handling the configuration and using the latest industrial protocols securely.","sidebar":"tutorialSidebar"},"reference/certificate-authority":{"id":"reference/certificate-authority","title":"Certificate Authority","description":"A Certificate Authority (CA) attests the identity of an entity, and binds it to cryptographic keys by issuing a valid digital certificate. The entity can make use of its certificate to prove its identity to other entities. This enables an authenticated and secure connection between the two entities.","sidebar":"tutorialSidebar"},"reference/certificate-properties":{"id":"reference/certificate-properties","title":"Certificate Properties","description":"Certificate properties you come across while creating a CA, a Trust Anchor, or a certificate template are explained below.","sidebar":"tutorialSidebar"},"reference/change-datahub":{"id":"reference/change-datahub","title":"Change Data Hub","description":"It is possible to change the Data Hub on a fully provisioned device. This means, you can now send the device telemetry data to a new cloud, without resetting the device.","sidebar":"tutorialSidebar"},"reference/custom-datahub":{"id":"reference/custom-datahub","title":"Custom DataHub","description":"A Custom Data Hub functions similarly to the familiar Data Hub you have seen before. Rather than connecting to a well-known cloud, like AWS or Azure, it allows you to connect the device to your (private or)designated cloud, which comes with its dedicated MQTT Broker URL and Trust Anchor.","sidebar":"tutorialSidebar"},"reference/data-hub":{"id":"reference/data-hub","title":"Data Hub","description":"A Data Hub is an information collector (related to messaging protocol), which helps the device to connect to the cloud. It is required to be configured when the device needs to send telemetry data using MQTT. It enables you to select the cloud, like ThingsBoard, Azure, or AWS. The device\u2019s telemetry data will then be transmitted to the chosen cloud. It gathers required MQTT-related details, including:","sidebar":"tutorialSidebar"},"reference/device-properties":{"id":"reference/device-properties","title":"Device Properties","description":"The device properties and their values usable while creating Data Hub and Template at KEYNOA:","sidebar":"tutorialSidebar"},"reference/device-status":{"id":"reference/device-status","title":"Device Status","description":"This page explains the possible device status which is shown in device list.","sidebar":"tutorialSidebar"},"reference/glossary":{"id":"reference/glossary","title":"Glossary","description":"This page provides an overview of key terms used throughout this tutorial.","sidebar":"tutorialSidebar"},"reference/mqtt-template":{"id":"reference/mqtt-template","title":"Template","description":"A template is created to serve three main purposes.","sidebar":"tutorialSidebar"},"reference/reset-device":{"id":"reference/reset-device","title":"Reset device","description":"For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Ctrl/Strg+Alt+F1 and type in","sidebar":"tutorialSidebar"},"reference/trust-anchor":{"id":"reference/trust-anchor","title":"Trust Anchor","description":"A Trust Anchor, often represented by a Root CA, is responsible for issuing valid TLS certificates to a cloud. Prominently, a Trust Anchor is considered to be a distinct certificate that symbolizes the highest level of trust within a PKI system.","sidebar":"tutorialSidebar"},"reference/update-keynoa.engine":{"id":"reference/update-keynoa.engine","title":"Update KEYNOA.engine","description":"Update KEYNOA.engine from 0.6.6 to 0.7.0","sidebar":"tutorialSidebar"},"tutorial/AWS/KEYNOA":{"id":"tutorial/AWS/KEYNOA","title":"KEYNOA Setup","description":"In this step, you will configure KEYNOA to connect your device to your AWS account.","sidebar":"tutorialSidebar"},"tutorial/AWS/next steps":{"id":"tutorial/AWS/next steps","title":"Next Steps","description":"Bulk onboarding","sidebar":"tutorialSidebar"},"tutorial/AWS/prerequsites":{"id":"tutorial/AWS/prerequsites","title":"About AWS IoT","description":"What is AWS IoT","sidebar":"tutorialSidebar"},"tutorial/AWS/SiteWise":{"id":"tutorial/AWS/SiteWise","title":"AWS Setup","description":"Initial Situation","sidebar":"tutorialSidebar"},"tutorial/Azure - Telemetric Rules/IoT Central":{"id":"tutorial/Azure - Telemetric Rules/IoT Central","title":"IoT Central Setup","description":"Initial Situation","sidebar":"tutorialSidebar"},"tutorial/Azure - Telemetric Rules/KEYNOA":{"id":"tutorial/Azure - Telemetric Rules/KEYNOA","title":"KEYNOA Setup","description":"In this step, you will configure KEYNOA to connect your device to your Azure account.","sidebar":"tutorialSidebar"},"tutorial/Azure - Telemetric Rules/next steps":{"id":"tutorial/Azure - Telemetric Rules/next steps","title":"Next Steps","description":"Reset and level devices","sidebar":"tutorialSidebar"},"tutorial/Azure - Telemetric Rules/prerequisites":{"id":"tutorial/Azure - Telemetric Rules/prerequisites","title":"About Azure IoT Central","description":"What is Azure IoT Central","sidebar":"tutorialSidebar"},"tutorial/Prerequsites":{"id":"tutorial/Prerequsites","title":"Prerequisites","description":"Please use the following check list to make sure to fullfill all prerequisites for starting the Eval Kit.","sidebar":"tutorialSidebar"},"tutorial/Thingsboard - Rule Engine/KEYNOA":{"id":"tutorial/Thingsboard - Rule Engine/KEYNOA","title":"KEYNOA Setup","description":"In this step, you will configure KEYNOA to onboard your device and to connect to your ThingsBoard account.","sidebar":"tutorialSidebar"},"tutorial/Thingsboard - Rule Engine/next steps":{"id":"tutorial/Thingsboard - Rule Engine/next steps","title":"Next Steps","description":"Monitor the entire factory","sidebar":"tutorialSidebar"},"tutorial/Thingsboard - Rule Engine/prerequisites":{"id":"tutorial/Thingsboard - Rule Engine/prerequisites","title":"About ThingsBoard","description":"What is ThingsBoard","sidebar":"tutorialSidebar"},"tutorial/Thingsboard - Rule Engine/Thingsboard":{"id":"tutorial/Thingsboard - Rule Engine/Thingsboard","title":"ThingsBoard Setup","description":"Initial Situation","sidebar":"tutorialSidebar"},"tutorial/tutorial":{"id":"tutorial/tutorial","title":"Tutorial","description":"Goal","sidebar":"tutorialSidebar"}}}')}}]);