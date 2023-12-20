---
sidebar_label: "Data Hub"
title: Data Hub
---

A DataHub enables you to select the cloud service, like Thingsboard or Azure or AWS, for your device’s telemetry data transmission. It gathers critical MQTT-related details, including:

- MQTT Broker URL
- MQTT Topic
- Certificate Authority
- Trust Anchor

The **MQTT Broker URL** is the one which the device needs to connect to publish the telemetry data. Without the URL, the device  has no where to send the data. Once the URL information is entered in the Data Hub, KEYNOA makes sure to send this information to the device along with all other details.

![mqtt-template-example](/img/KEYNOA/MQTT_Broker_concept.png)

As well, device needs to know for which **MQTT Topic** the data needs to published. Data Hub collects topic information from you.

By selecting the **Certificate Authority**, you can choose which CA can issue an MQTT certificate to the Device. This certificate will be used to securely connect to the cloud platform before start sending the telemetry data.

While creating the Data Hub, you have a chance to upload the **Trust Anchor** certificate.

To delve deeper into understanding the CA and Trust Anchor, please refer to [Certificate Authority] and [Trust Anchor] for detailed information.