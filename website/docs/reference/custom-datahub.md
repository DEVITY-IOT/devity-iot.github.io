---
sidebar_position: 5
sidebar_label: "Custom DataHub"
title: Custom DataHub
---

A Custom Data Hub functions similarly to the familiar Data Hub you have seen before. Rather than connecting to a well-known cloud, like AWS or Azure, it allows you to connect the device to your (private or)designated cloud, which comes with its dedicated MQTT Broker URL and Trust Anchor.

The MQTT application on the device will receive an application certificate, which it will utilize to authenticate with the designated cloud. Following this authentication, the IoT device gains the capability to send MQTT data to the cloud.

To create a Custome Data Hub, follow the steps.

1. Choose the 'Custom Data Hub' option while creating a new Data Hub.

![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/1-Start-CustomeDH-Create.png)

2. Fill in the details of your cloud. 
    - `Connector Name`: Name of the Custom Data Hub to identify it later.
    - `Broker URL`: Unique URL for the IoT device to connect to.
    - `Topic`: Topic to which the Device is going to publish data.
    - `Certificate Authority`: CA from whom the MQTT application certificate will get issued.
    - `Trust Anchor`: Trust Anchor which issues TLS Certificate to the cloud application.


![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/2-Fill-Details.png)

3. Once the Custom Data Hub is created successfully, it is shown in the drop-down menu while creating the Template in KEYNOA. Choose the newly created Data Hub such that the Template successfully links it to the Device.

![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/3-Listed-in-Template.png)






