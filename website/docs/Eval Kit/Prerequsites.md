---
sidebar_position: 1
sidebar_label: "Prerequisites"
title: Prerequisites
---
The following prerequisites are needed to start the tutorial series:

## Prerequisites

- You have the EvalKit Device (Janz Tec emPC-A/RPI3+ with pre-installed KEYNOA SDK) ready for operation.
    - You have prepared a 24 V power supply for the device.
    - You have prepared an Ethernet cable to connect the device to the internet. The network should provide DHCP and DNS service.
- You have access to your KEYNOA Cloud tenant (see [Access to KEYNOA](#access-to-keynoa) section).
- In your KEYNOA Cloud tenant there are NO MQTT templates defined (see [Remove MQTT Templates](#remove-mqtt-templates)).
- You have access to Thingsboard, Azure, and AWS (see [Access to Thingsboard, Azure, and AWS](#access-to-thingsboard-azure-and-aws) section).
- You have received a device voucher.
- You have uploaded the device voucher to KEYNOA Cloud (see [Upload Voucher](#upload-voucher) section)

## Access to KEYNOA
You will get the access to your own KEYNOA Tenant via email. Please use the link from the e-mail to set a new password and login to KEYNOA.

## Device Voucher
You will receive the device voucher via e-mail from DEVITY.
This file proves that your are the authorized owner of the device you received.
The voucher enables KEYNOA to connect securely to the device and therefore to provision your device automatically.
See the next section how to upload the voucher to your KEYNOA tenant.

## Upload Voucher
With a voucher you can register a device in the KEYNOA enrollment service.
1. To upload a voucher just click on "upload voucher" in the header.

![KEYNOA](/img/KEYNOA/upload-voucher.png)

2. Select the voucher via the file selector and click upload.

![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

Afterwards you will see a success message telling you that the voucher was uploaded and a new device was assigned to your tenant.

:::info
The device's serial number is not part of the vouchers due to privacy concerns.
:::

![KEYNOA](/img/KEYNOA/upload-voucher-3.png)

3. Finally, go to the devices tab and wait until the Device Status of your device says **waiting**.

:::caution
The processing of new voucher in KEYNOA should not take longer than 5 minutes!
:::

:::info
To find out more about the device status go to the [Device Status](/Miscellaneous/device-status#device-status) section.
:::


## Access to Thingsboard, Azure, and AWS
DEVITY has prepared accounts for Thingsboard, Azure, and AWS to make the start as easy as possible for you.
Your access to the respective applications will be provided by the KEYNOA Credential Manager in your KEYNOA Cloud.
If the access to one of the clouds gets lost, please do not hesitate to reach out to us. We provide you a new password.
[support@devity.eu](mailto:support@devity.eu)

1. Find the KEYNOA Credential Manager by clicking on the lock icon in the header.

![Prerequisite](/img/Prerequisite/Credential-Manager-1.png)

2. The KEYNOA Credential Manager will show you all information needed.
The Credential Manager also provides a link to the login of the respective cloud:

:::caution
The passwords in the Credential Manager are intended as one-time passwords and should be changed after the first use.
We recommend to store the new passwords in a password manager like [Bitwarden](https://bitwarden.com), [1Password](https://1password.com) or [KeyPassXC](https://keepassxc.org/).
:::

:::info
Since the applications are created just for you and your Eval Kit, we cannot provide general login links here.
:::

![Prerequisite](/img/Prerequisite/Credential-Manager-2.png)


## Reset device

For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Ctrl/Strg+Alt+F1 and type in 
    
    ./reset.sh

:::note
This reset is not reflected in the KEYNOA Device Status bar.
:::

After that the device reboots and the new onboarding process starts.
Make sure to power down the device before it boots up again to prevent that the device will be onboarded to the old configuration again.

:::caution
After the reboot, the onboarding starts immediately.
Make sure to setup KEYNOA right especially the templates before restarting the device.
:::

## MQTT Templates

An MQTT Template links a DataHub to a device.
The Data Hub specifies how the MQTT Client on the device needs to be configured to connect to the respective MQTT broker.
The MQTT Template consists of multiple selectors for a specific property.
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

## Remove MQTT Templates
You can delete a template by clicking the burger menu in the right of the template's row and select ("Delete").


![remove-mqtt-template](/img/KEYNOA/MQTT-template-delete.png)