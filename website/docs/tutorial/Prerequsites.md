---
sidebar_position: 1
sidebar_label: "Prerequisites"
title: Prerequisites
---

To start one of the tutorial Use Cases you need to fulfill the following prerequisites:

- You have the EvalKit Device (Janz Tec emPC-A/RPI3+ with pre-installed KEYNOA SDK) ready for operation.
    - You have prepared a 24 V power supply for the device.
    - You have prepared an Ethernet cable to connect the device to the internet. The network should provide DHCP and DNS service.
- You have access to your KEYNOA Cloud tenant (see [Access to KEYNOA](#access-to-keynoa) section).
    - You can access your tenant at [some-tenant.keynoa.cloud](#)
- You have received a device voucher.
- You have uploaded the device voucher to KEYNOA Cloud (see [Upload Voucher](#upload-voucher) section)
- You have made sure that in your KEYNOA Cloud tenant there are **no** MQTT templates defined. See [Remove MQTT Templates](/Reference/mqtt-template#remove-mqtt-template) on how to remove MQTT templates.
- You have access to Thingsboard, Azure, and AWS. See [Access to Thingsboard, Azure, and AWS](#access-to-thingsboard-azure-and-aws) section to to find out about how to access the Services.

### Access to KEYNOA
You will get the access to your own KEYNOA Tenant via email. Please use the link from the e-mail to create a new password for your KEYNOA account.

### Device Voucher
You will receive the device voucher via e-mail from DEVITY.
This file proves that your are the authorized owner of the device you received.
The voucher enables KEYNOA to connect securely to the device and therefore to provision your device automatically.
See the next section how to upload the voucher to your KEYNOA tenant.

### Upload Voucher
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
To find out more about the device status go to the [Device Status](/reference/device-status#device-status) section.
:::


### Access to Thingsboard, Azure, and AWS
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


