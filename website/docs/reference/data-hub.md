---
sidebar_label: "Data Hub"
title: Data Hub
---

A **Data Hub** is required to be configured when the device needs to send telemetry data using MQTT. It enables you to select the cloud service, like Thingsboard or Azure or AWS. Device’s telemetry data will then be transmitted to the chosen cloud service. It gathers critical MQTT-related details, including:

- MQTT Broker URL
- MQTT Topic
- Certificate Authority
- Trust Anchor

### What is MQTT? 

**MQTT** is a standard messaging protocol for the IoT devices. It is preferred for IoT since it is extremely lightweight protocol, which needs minimal network bandwidth and energy for communicating the telemetry data. 

It is a publish/subscribe protocol, where the device publishes its data to an MQTT broker. The cloud services will subscribe to the data for specific topic. MQTT Broker will send the data to interested parties as and when the data is available from device as shown in below diagram.

![what-is-mqtt](/img/KEYNOA/MQTT.png)

### MQTT Broker URL

Device should know the MQTT Broker URL to connect to the Broker securely. Once the device successfully connects to the broker, it publishes the telemetry data. Once the URL information is entered in the Data Hub, KEYNOA makes sure to send this information to the device along with all other details like MQTT Topic, CA, Trust Anchor, etc. 

### MQTT Topic

In the MQTT publish-subscribe model, the IoT device sends telemetry data for specific topics, while subscribers can subscribe to those topics to receive the data. A topic consists of one or more levels separated by a forward slash.

:::note Example
For example, `v1/device1/building9/floor2/room1/temperature`. 

This topic is created to share the temprature in `room1` of `floor2` in `building9` measured by the IoT `device1`.
:::

Data Hub collects the topic for which the device is going to send telemetry data.  

### Certificate Authority

By selecting the **Certificate Authority**, you can choose which CA can issue an MQTT certificate to the Device. This certificate will be used to securely connect to the cloud platform before start sending the telemetry data.

### Trust Anchor

It is possible to let the device trust a specific CA, which inturn trusts in-house cloud platform or a cloud platform specific to your business. While creating the Data Hub, you have a chance to upload the **Trust Anchor** certificate. This certificate will be used to establish a secure connection between the device and the cloud platform.

To delve deeper into understanding the CA and Trust Anchor, please refer to [Certificate Authority] and [Trust Anchor] for detailed information.

[Deep Dive MQTT](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.pdf)