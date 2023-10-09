---
sidebar_position: 2
---

# KEYNOA Setup
In this step you will start by configurating the KEYNOA such that your device will be onboarded to your Thingsboard account.

## Before you start

Before you start, make sure that you fulfill all [prerequisites](/tutorial/Prerequsites).

If you already used the device before make sure to [reset the device](/reference/reset-device) and [remove any MQTT templates](/reference/mqtt-template#remove-mqtt-template) from the list.

In the following steps the device configuration is applied to KEYNOA and not to the device.
Hence, the **device is powered off** until KEYNOA is ready.
The device will be turned on in the end of this guide.

:::caution
For a specific application like MQTT only a single template can be applied.
If multiple MQTT Templates exist the newer template will be ignored. Hence your new template referring to a new data hub will not be used because another template is already applied.
:::


## Create Data Hub
1. In KEYNOA create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the AWS Data Hub.
![KEYNOA](/img/KEYNOA/AWS/Data-Hub.png)
 
3. Fill in the Access Key ID and the Access Secret Key. You can find this information in KEYNOA by clicking on the lock icon in the header and scrolling to the section "AWS". Proceed by clicking on "Confirm".

- Access Key ID: copy from KEYNOA "Credentials" section
- Access Secret Key: copy from KEYNOA "Credentials" section
- Region: select `eu-central-1` from the dropdown

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details.png)

4. Fill in the details (copy and paste) and click on "Register CA".

- Template Body: `default`
- RoleARN: copy from KEYNOA "Credentials" section (click on the lock icon in the KEYNOA header and scroll to the section "AWS")
- Topic: `/company/facility/42/dty-eval-kit/$(serial)`
- Certificate Authority: select `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown
- Connector Name: `AWS connector`

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png)

## Create Template
:::info
If you have not uploaded your voucher yet and therefore the list of all devices is empty, then [upload the voucher](/tutorial/Prerequsites#upload-voucher) now.
:::
:::caution
If MQTT templates already exist, please delete them by clicking on the burger menu in column "Action" and selecting "Delete".
:::
1. Create the MQTT Template in KEYNOA.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/AWS/MQTT-template-1.png)

3. Use the same device details as shown below and click on "Next".

- Choose Device Property: `Device Model`
- Type in the following Device Model for your Janz Tec Eval Kit Device: `sy-epc-rpi30`

These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.

:::info
For more information about the template concept see the [MQTT Templates Section](/reference/mqtt-template)
:::

4. Click on "Next".
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)


5. Give the template an Identifier Name and click on "Save".

- Identifier Name: `AWS MQTT template`

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

6. KEYNOA and ThingsBoard are now set up and your device is now ready for the onboarding process.

:::info
Connect your device to the internet via an ethernet cable and power it up.
:::

7. The onboarding is completed, when the device status in KEYNOA switches to **provisioned**. You can refresh the table by clicking the refresh button in the top right corner.

:::info
The onboarding including the boot process should not take longer than two minutes.
:::

![KEYNOA](/img/KEYNOA/devices_list_refresh.png)

The voucher enables KEYNOA to connect securely to the device and therefore to provision your device automatically.

8. Your device is now provisioned to AWS IoT Core. Continue with the setup of AWS IoT Core.

:::info
Checkout the Things section of your AWS IoT Core to see the new device.
:::
