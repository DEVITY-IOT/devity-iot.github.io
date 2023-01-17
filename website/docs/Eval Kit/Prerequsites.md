---
sidebar_position: 1
sidebar_label: "Prerequisites"
title: Prerequisites
---
The following prerequisites are needed to start the tutorial series:

## Prerequisites

- You have the EvalKit Device (Janz Tec emPC-A/RPI3+ with pre-installed KEYNOA SDK) ready for operation.
    - You have prepared a 24 V power supply for the device.
    - You have prepared an ethernet cable to connect the device to the internet. The network should provide DHCP and DNS service.
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
The voucher enables KEYNOA to connect securely to the device and therefor to provision your device automatically.
See the next section how to upload the voucher to your KEYNOA tenant.

:::info
To find out more about the device status go to the [Device Status](/Miscellaneous/device-status#device-status) section.
::: 

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
DEVITY has prepared accounts for Thingsboard, Azure, and AWS to make the start as easy as possible for you. Your access to will be provided by the KEYNOA Credential Manager in your KEYNOA Cloud.
1. Just click on the lock icon in the header. 

![Prerequisite](/img/Prerequisite/Credential-Manager-1.png)

2. The KEYNOA Credential Manager will show you all information needed.
The Credential Manager also provide a link to the login of the respective cloud:

:::info
Since the applications are created just for you and your Eval Kit, we cannot provide general login links here.
:::

![Prerequisite](/img/Prerequisite/Credential-Manager-2.png)

## Reset device

For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Ctrl/Strg+Alt+F1 and type in 
    
    ./reset.sh

After that the device reboots and the new onboarding process starts.
Make sure to power down the device before it boots up again to prevent that the device will be onboarded to the old configuration again.

:::caution
After the reboot, the onboarding starts immediately.
Make sure to setup KEYNOA right especially the templates before restarting the device.
:::

## MQTT Templates

TODO:

## Remove MQTT Templates
You can delete a template with the 