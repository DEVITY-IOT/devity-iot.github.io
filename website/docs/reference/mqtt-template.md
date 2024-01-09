---
sidebar_position: 5
sidebar_label: "MQTT Template"
title: MQTT Template
---


A Template links a DataHub to a device.
The Data Hub specifies how the MQTT Client on the device needs to be configured to connect to the respective MQTT broker.
The Template consists of multiple selectors for a specific property.
These selectors will be matched against the information the device provides about itself during the onboarding process. 
If all properties match the specified selectors, the device is assign to the data hub.

:::note Example
As an *Example* we assume that we only want the device from DEVITY's Eval kit to connect to our Evaluation IoT Central.

So we only want to connect device whose model type is `sy-epc-rpi30` (the device model of the EvalKit).
To specify this in KEYNOA, we create an MQTT template and select the Data Hub which is linked to our Evaluation IoT Central.
Then we select `Device Model` as a selector property and input `sy-epc-rpi30` in the box to the right.
:::

![mqtt-template-example](/img/KEYNOA/mqtt-template-concept.png)

### Wildcard character `*`
If we want all device models to connect to a Data Hub, we can use the wildcard symbol `*`.
Hence, we set the device property `Device Model` to be `*` and the selected data hub will be applied to all our devices.

To match devices of a group of device models we can also define somethings like `sy-epc-rpi*`.
Here we replaced 30 with the wildcard character `*`.
This would match then not only the current RaspberryPi 3 based EvalKit but also the new RaspberryPi 4 devices.

![remove-mqtt-template](/img/KEYNOA/MQTT-template-device-model.png)

## Remove MQTT Template
You can delete a template by clicking the burger menu in the right of the template's row and select ("Delete").


![remove-mqtt-template](/img/KEYNOA/MQTT-template-delete.png)