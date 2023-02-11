---
sidebar_position: 2
---

# KEYNOA Setup
In this step you will start by configurating the KEYNOA such that your device will be onboarded to your Thingsboard account.

## Before you start

Before you start, make sure that you fulfill all [prerequisites](/Eval%20Kit/Prerequsites).

If you already used the device before make sure to [reset the device](/Eval%20Kit/Prerequsites#reset-device) and [remove any MQTT templates](/Eval%20Kit/Prerequsites#remove-mqtt-templates) from the list.

In the following steps the device configuration is applied to KEYNOA and not to the device.
Hence, the **device is powered off** until KEYNOA is ready.
The device will be turned on in the end of this guide.

:::caution
For a specific application like MQTT only a single template can be applied.
If multiple MQTT Templates exist the newer template will be ignored. Hence your new template referring to a new data hub will not be used because another template is already applied.
:::


## Create Data Hub
1. In the KEYNOA UI create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the AWS data hub.
![KEYNOA](/img/KEYNOA/AWS/Data-Hub.png)
 
3. Fill in the details and click on "Confirm".

- Access Key ID: copy from KEYNOA Credential Manager
- Access Secret Key: copy from KEYNOA Credential Manager
- Region: select `eu-central-1` from the dropdown

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details.png)

4. Fill in the details and click on "Register CA".

- Template Body: `default`
- RoleARN: copy from KEYNOA Credential Manager
- Topic: `/company/facility/42/dty-eval-kit/$(serial)`
- Certificate Authority: select `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown
- Connector Name: `AWS connector`

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png)

## Create Template
1. In the KEYNOA UI create the MQTT Template.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/IoT-Central/MQTT-template-1.png)

3. Fill in the device details. Click on "Next".

- Device Property: `Device Model`
- your-device-model-number: `sy-epc-rpi30`

This property will be matched against the information the device provides about itself during the onboarding process. When it matches the template will be selected to configure the device.
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)

4. Fill in the details. CLick on "Save". You have now created the setup for your device to be onboarded.

- Identifier Name: `AWS MQTT template`

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)


5. KEYNOA and aws are now fully configured and your device is now ready to be onboarded.
:::info
Power up your device and connect it to the internet via an ethernet cable.
:::

6. Wait until your device status in KEYNOA switches to **active** by pressing the little refresh button in the to right.
After a successful onboarding, the device status in KEYNOA switches to **active**.
:::info
The onboarding including the boot process should not take longer than 2 minutes.
:::

![KEYNOA](/img/KEYNOA/devices_list_refresh.png)

The voucher enables KEYNOA to connect securely to the device and therefor to provision your device automatically.

7. Your device is now provisioned to AWs IoT Core. Continue with the setup of IoT Central.

:::info
Checkout the Things section of your AWS IoT Core to see the new device.
:::
