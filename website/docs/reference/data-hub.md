---
sidebar_position: 3
sidebar_label: "Data Hub"
title: Data Hub
---

A **Data Hub** is an information collector (related to messaging protocol), which helps the device to connect to the cloud. It is required to be configured when the device needs to send telemetry data using MQTT. It enables you to select the cloud, like ThingsBoard, Azure, or AWS. The device’s telemetry data will then be transmitted to the chosen cloud. It gathers required MQTT-related details, including:

- MQTT Broker URL
- MQTT Topic
- Certificate Authority
- Trust Anchor

### What is MQTT? 

**MQTT** is a standard messaging protocol for devices. It is preferred since it is extremely lightweight protocol, which needs minimal network bandwidth and energy for communicating the telemetry data. 

It is a publish-subscribe protocol, where the device publishes its data to an MQTT broker. The cloud will subscribe to the data for a specific topic. MQTT Broker will send the data to interested parties as and when it is available from the device, as shown in the below diagram.

![what-is-mqtt](/img/KEYNOA/MQTT.png)

### MQTT Broker URL

The device should know the MQTT Broker URL to connect to the Broker securely. Once the device successfully connects to the broker, it publishes the telemetry data. Once the URL information is entered in the Data Hub, KEYNOA makes sure to send this information to the device along with all other details like MQTT Topic, CA, Trust Anchor, etc. 

### MQTT Topic

In the MQTT publish-subscribe model, the device sends telemetry data for specific topics, while subscribers can subscribe to those topics to receive the data. A topic consists of one or more levels, separated by a forward slash.

:::note Example
For example, `v1/device1/building9/floor2/room1/temperature`. 

This topic is created to share the temperature in `room1` of `floor2` in `building9` measured by the `device1`.
:::

The Data Hub collects the topic for which the device is going to publish the telemetry data.   

### Certificate Authority

By selecting the **Certificate Authority**, you can choose which CA can issue a certificate to the MQTT application running on the device. This application certificate will then be used to securely connect to the cloud before starting to send the telemetry data.

### Trust Anchor

Having a Trust Anchor (private CA) allows you to protect and manage the resources in-house. For instance, utilizing an AWS private CA offers protection for resources such as servers and applications. However, it is crucial to share CA details with the device.

When creating a Data Hub, providing a **Trust Anchor** certificate enables the device to access the specifics of your private CA. This certificate serves the purpose of authenticating cloud certificates, establishing a secure connection between the device and the cloud.

You want to switch your device between clouds? It is possible! Check how it works [here.](docs/reference/change-datahub.md)

To dive deeper into understanding the concepts of CA and Trust Anchor, please refer to [Certificate Authority] and [Trust Anchor] for detailed information.

[Deep Dive MQTT](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.pdf)
