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
1. In the KEYNOA Cloud create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the Azure IoT Central data hub.
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub.png)

3. Log in with your Microsoft account or with the credentials you find in the KEYNOA credential manager (just click on the lock icon in the header of KEYNOA Cloud). This account needs admin privileges in both the azure portal as well as the IoT Hub (see step 4).
:::caution
When you log in the first time you will are asked to change your password.
In addition Azure requires to set up two factor authentication to secure the account.
This is a common and reasonable security measurement.
To do so, we recommend to install the [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app) App on your smartphone. 
:::

![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login.png)

4. Grant access to the to the application.
![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login-2.png)

5. Select the proper IoT Central data hub. Click on the correct IoT hub on the right.
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details.png)

6. Fill in the details:

- IoT Central Name: this should reflect your chosen Hub `devity-hub`
- Enrollment Group Name: check that this enrollment group does not already exist `KEYNOA-EvalKit-001`
- IoT Location: `westeuropa`
- Device Template: `Eval Kit`
- Certificate Authority: select: `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown
- Connector Name: `IoT Central connector`

![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details-2.png)

7. You need to have admin access to the IoT Central Hub to perform this action: Click on "Create Configuration".

## Create Template
:::info
If you have not uploaded your voucher yet and therefore the list of all devices is empty, then [upload the voucher](/tutorial/Prerequsites#upload-voucher).
:::
:::caution
If there are already MQTT templates, make sure they do not match your device. If you are unsure how to do this, you can also remove them:
You can delete a template by clicking the burger menu in the right of the template's row and select ("Delete").
:::
1. Create the MQTT Template that assigns your device to the Data Hub.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub ("IoT Central connector"). Click on "Next".
![KEYNOA](/img/KEYNOA/IoT-Central/MQTT-template-1.png)

3. Fill in the device details.

- Device Property: `Device Model`
- your-device-model-number: `sy-epc-rpi30`

These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.

:::info
For more information about the template concept see the [MQTT Templates Section](/Eval%20Kit/Prerequsites#mqtt-templates)
:::

4. Click on "Next".
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)


5. Give the template an identifier and click on "Save".

- Identifier Name: `Azure IoT MQTT template`

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

6. You have now created the setup instruction for your device to be onboarded.
KEYNOA and IoT Central are now fully configured and your device is now ready to be onboarded.

:::info
Power up your device and connect it to the internet via an ethernet cable.
:::

7. Wait until your device status in KEYNOA switches to **active** by pressing the little refresh button in the top right.
After a successful onboarding, the device status in KEYNOA switches to **active**.
:::info
The onboarding including the boot process should not take longer than 2 minutes.
:::

![KEYNOA](/img/KEYNOA/devices_list_refresh.png)

8. Your device is now provisioned with KEYNOA. Continue with the setup of IoT Central.

:::info
Checkout the devices section of your IoT Central to see the new device.
:::
