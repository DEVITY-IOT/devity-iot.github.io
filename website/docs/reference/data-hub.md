---
sidebar_position: 3
sidebar_label: "Data Hub"
title: Data Hub
---

A **Data Hub** is an information aggregator, related to the messaging protocol, that facilitates device connectivity to the cloud.
It must be configured when the device sends telemetry data via MQTT and allows you to select a cloud provider, such as ThingsBoard, Azure, or AWS. Once configured, the device’s telemetry data is sent to the chosen cloud platform.

The Data Hub collects essential MQTT configuration details, including:

- MQTT Broker URL
- MQTT Topic
- Certificate Authority
- Trust Anchor

### What is MQTT? 
 
**MQTT** (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe messaging protocol widely used for communication between IoT (Internet of Things) devices. Its efficiency and low bandwidth usage make it ideal for devices that transmit small amounts of data over unreliable networks, such as sensors, mobile devices, and embedded systems.

In MQTT, devices (known as clients) can either publish data to or subscribe to specific topics managed by an MQTT broker. The broker serves as a middleman, handling data published by clients and directing it to subscribers who need that information. This model allows for real-time, event-driven data exchange without requiring a direct connection between publishers and subscribers, which improves scalability and reduces network demand.

The chosen cloud platform subscribes to data from a specific topic. The MQTT broker then sends this data to all subscribed parties as soon as it becomes available from the device, as illustrated in the diagram below.

![what-is-mqtt](/img/KEYNOA/What_is_MQTT_new)


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

By selecting the **Certificate Authority**, you can choose which CA can issue a certificate to the MQTT application running on the device. This application certificate will then be used to securely connect to the cloud before starting to send the telemetry data. You can learn more about Certificate Authorities [here](https://devity-iot.github.io/reference/certificate-authority).



### Trust Anchor

Using a **Trust Anchor**, typically through a private Certificate Authority (CA), gives you direct control over securing and managing resources in-house. For example, with an AWS Private CA, you can securely manage servers, applications, and other resources. However, to fully enable device compatibility with your private CA, you must provide devices with the necessary CA details.

When creating a Data Hub, adding a Trust Anchor certificate allows the device to recognize and authenticate your private CA. This certificate is crucial as it authenticates cloud certificates, establishing a secure communication between your device and the cloud environment.

Switching your device across cloud platforms? This is fully supported! Follow our guidelines [here](docs/reference/change-datahub.md) to explore this process.

You can deepen your understanding of Trust Anchors [here](https://devity-iot.github.io/reference/data-hub).

If you want to deep dive into MQTT, we recommend to read through the [OASIS Standard](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.pdf)
