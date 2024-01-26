---
sidebar_position: 8
sidebar_label: "Custom DataHub"
title: Custom DataHub
---

A Custom Data Hub functions similarly to the familiar Data Hub you have seen before. Instead of relying on a well-known cloud service, like AWS or Azure, it allows you to link the IoT device to your designated cloud service. Subsequently, the IoT device can transmit MQTT data to this private cloud service, featuring its own MQTT Broker URL and Trust Anchor.

To create a Custome Data Hub, follow the steps.

1. Choose the 'Custom Data Hub' option while creating a new Data hub.

![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/1-Start-CustomeDH-Create.png)

2. Fill in the details of your cloud service. 
    - `Connector Name`: Name of the Custom Data Hub to identify it later.
    - `Broker URL`: Unique URL for the IoT device to connect to.
    - `Topic`: Topic to which the Device is going to publish data.
    - `Certificate Authority`: CA from whom the MQTT App Certificate will get issued.
    - `Trust Anchor`: Trust Anchor which issues TLS Certificate to the cloud service application.


![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/2-Fill-Details.png)

3. Once the Custom Data Hub is created successfully, it is shown in the drop-down menu while creating the Template in KEYNOA. Choose the newly created Data Hub such that the Template successfully links it to the IoT Device.

![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/3-Listed-in-Template.png)






