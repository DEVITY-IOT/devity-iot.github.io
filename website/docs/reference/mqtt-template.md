---
sidebar_position: 6
sidebar_label: "Template"
title: Template
---

A template is created to serve three main purposes.

1. To link the Data Hub to a device.
2. To update certificate template configurations, specifically for MQTT or OPC UA application certificates.  
3. To select device properties.

The device has the option to use either MQTT or OPC UA as its communication protocol. Depending on whether the device requires configuration to connect to an MQTT client or an OPC UA server, a corresponding template - an MQTT template or an OPC UA template - needs to be created. 

### 1. To Link the Data Hub to a Device

A [Data Hub](docs/reference/data-hub.md) defines the configuration requirements for the device's MQTT Client to connect to its designated MQTT broker. Beyond just MQTT details, the Data Hub also outlines CA and Trust Anchor information. When an **MQTT Template** associates a Data Hub with a Device, all MQTT settings, CA, and Trust Anchor specifics are applied to configure the device.

The CA and Trust Anchor-related specifics are updated directly while creating an **OPC UA Template**. The device is configured using this template information to connect to the OPC UA server securely.

### 2. To Update Certificate Template

While creating the template, you can specify the application certificate configurations to be used while issuing an MQTT or OPC UA application certificate. This facilitates control over defining the desired level of security when the device applications communicate with their external entities. For instance, by choosing a strong Key Algorithm and Signature Algorithm, you can set the level of security. 

![KEYNOA](/img/KEYNOA/MQTT2PolicyConfigurations.png)

### 3. To Select Device Properties

Device properties can be used to group the device(s) having matching properties. The template then links this group of devices to either the Data Hub or particular configurations.

The Template consists of multiple selectors to define the device properties, such as Device Serial Number, GUID, Device Model, etc. These selectors will be matched against the information the device provides about itself during the onboarding process. If all properties match the specified selectors, the template links the device to its corresponding information: the Data Hub (for MQTT settings), CA, and Trust Anchor specifics.

:::note Example
As an *example*, we assume that we want the Eval Kit device to connect to our Evaluation IoT Central.

Hence, we connect devices whose model type is `sy-epc-rpi30` (the device model of the Eval Kit).
To specify this in KEYNOA, we create an MQTT template and select the Data Hub, which is linked to our Evaluation IoT Central.
Then, we select `Device Model` as a selector property and input `sy-epc-rpi30` in the box to the right.
:::

![mqtt-template-example](/img/KEYNOA/mqtt-template-concept.png)

### Manage Templates
#### 1. Wildcard character `*`
If we want all device models to connect to a Data Hub, we can use the wildcard symbol `*`.
Hence, we set the device property `Device Model` to be `*` and the selected Data Hub will be applied to all our devices.

To match devices in a group of device models, we can also define `sy-epc-rpi*`.
Here, we replaced 30 with the wildcard character `*`.
This would match not only the current Raspberry Pi 3-based EvalKit, but also the new Raspberry Pi 4 devices.

![remove-mqtt-template](/img/KEYNOA/MQTT-template-device-model.png)

#### 2. Remove MQTT Template
You can delete a template by clicking the burger menu in the right of the template's row and select ("Delete").


![remove-mqtt-template](/img/KEYNOA/MQTT-template-delete.png)