---
sidebar_position: 1
sidebar_label: "Prerequisites"
title: Prerequisites
---

Please use the following check list to make sure to fullfill all prerequisites for starting the Eval Kit. 

- You have the Eval Kit Device (Janz Tec emPC-A/RPI3+ with pre-installed KEYNOA Engine) ready for operation.
    - You have a 24V power supply compatible with the device ready. Do not attach the power yet.
    - You have prepared an ethernet cable to connect to the device for the internet connection. The network should provide DHCP and DNS service. Connect the cable to the device.
- You have access to your KEYNOA tenant (see [Access to KEYNOA](#access-to-keynoa) section).
- You have received a device ownership voucher via e-mail (see [Device Voucher](#device-voucher) section).
- You have uploaded the device ownership voucher to KEYNOA (see [Upload Voucher](#upload-voucher) section)
- You have checked that in your KEYNOA tenant there are **no** MQTT templates defined. See [Remove MQTT Templates](/Reference/mqtt-template#remove-mqtt-template) on how to remove MQTT templates.
- You have access to ThingsBoard, Azure, and AWS. See [Access to ThingsBoard, Azure, and AWS](#access-to-thingsboard-azure-and-aws) section to find out about how to access these clouds.

### Access to KEYNOA
You will get the access to your own KEYNOA tenant via email from DEVITY. Please use the link from the e-mail to create a new password for your KEYNOA account.

:::info
Your e-mail address is your user name.
:::

### Device Voucher
You will receive the device voucher via e-mail from DEVITY.
This file proves that your are the authorized owner of the device you received.
The voucher enables KEYNOA to connect securely to the device and therefore to provision your device automatically.
See the next section to learn how to upload the voucher to your KEYNOA tenant.

### Upload Voucher
With a voucher you can register a device in KEYNOA.
1. Login to KEYNOA tenant. To upload a voucher just click on "upload voucher" on the top menu bar.

![KEYNOA](/img/KEYNOA/upload-voucher.png)

2. Select the voucher via the file selector and click upload.

![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

Afterwards you will see a success message telling you that the voucher was uploaded and a new device was assigned to your tenant.

:::info
The serial number of the device is not part of the voucher to protect your privacy.
:::

![KEYNOA](/img/KEYNOA/upload-voucher-3.png)

3. Finally, go to the tab "Devices" and wait until the Device Status **waiting** is displayed.

:::caution
The processing of a new voucher in KEYNOA should not take longer than 5 minutes!
:::

:::info
To find out more about the device status go to the [Device Status](/reference/device-status#device-status) section.
:::


### Access to ThingsBoard, Azure, and AWS
DEVITY has prepared accounts for ThingsBoard, Azure, and AWS to make the start as easy as possible for you.
Your access will be provided in your KEYNOA account.
If the access to one of the clouds gets lost, please do not hesitate to reach out to us. We provide you a new password.
[support@devity.eu](mailto:support@devity.eu)

1. Find your credentials by clicking on the lock icon in the header.

![Prerequisite](/img/Prerequisite/Credential-Manager-1.png)

2. All needed information will appear.
KEYNOA also provides a link to the login of the respective cloud:

:::caution
The passwords are intended as one-time passwords and should be changed after the first use.
We recommend to store the new passwords in a password manager like [Bitwarden](https://bitwarden.com), [1Password](https://1password.com) or [KeyPassXC](https://keepassxc.org/).
:::

:::info
Since the clouds and their respective services are for the purposes of the Eval Kit, we cannot provide general login links here.
:::

![Prerequisite](/img/Prerequisite/Credential-Manager-2.png)

3. Next, based on your cloud service selection - Thingsboard or Azur or AWS, go to the respective Tutorial page.  


