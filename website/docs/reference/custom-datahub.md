---
sidebar_position: 5
sidebar_label: "Custom Data Hub"
title: Custom Data Hub
---

A Custom Data Hub works similarly to the standard Data Hub but allows the device to connect to your designated cloud, rather than well-known public clouds like AWS or Azure. This custom setup includes a unique MQTT Broker URL and a dedicated Trust Anchor for secure communication.

The MQTT application on the device will receive an application certificate to authenticate with your designated Data Hub. Once authenticated, the device is enabled to send MQTT data securely to the Data Hub.

To set up a Custom Data Hub, follow these steps.

1. Choose the 'Custom Data Hub' option while creating a new Data Hub.

![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/1-Start-CustomeDH-Create.png)

2. Fill in the details of your cloud. 
    - `Connector Name`: Name of the Custom Data Hub to identify it later.
    - `Broker URL`: Unique URL for the device to connect to.
    - `Topic`: Topic to which the device is going to publish data.
    - `Certificate Authority`: CA from whom the MQTT application certificate will get issued.
    - `Trust Anchor`: Trust Anchor which issues TLS Certificate to the cloud application.


![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/2-Fill-Details.png)

3. Once the Custom Data Hub is created successfully, it is shown in the drop-down menu while creating the Template in KEYNOA. Choose the newly created Data Hub such that the Template successfully links it to the device.

![KEYNOA](/img/KEYNOA/reference-doc/Data-hub/3-Listed-in-Template.png)






