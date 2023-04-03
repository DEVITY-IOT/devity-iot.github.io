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
1. In the KEYNOA Cloud create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png) 

2. Select the Thingsboard data hub.
![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub.png)

3. Fill in the details of your Thingsboard instance:

- Connector Name: `your_thingsboard`
- Thingsboard Provider: select `Custom Provider` from the dropdown
- MQTT Broker URL: leave the default `ssl://thingsboard.devity.eu:8883`
- Topic: `v1/devices/me/telemetry`
- Provision Key: To get the Provisioning Key you need to continue the tutorial and execute steps 4-8.
- Provision Secret: To get the Provisioning Secret you need to continue the tutorial and execute steps 4-8.
- Certificate Authority: select `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown

![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub-details.png)

4. Log in to the [ThingsBoard](https://thingsboard.devity.eu/login) with the credentials you find in the KEYNOA credential manager (just click on the lock icon in the header of KEYNOA Cloud). The provision key and secret can be found in the Thingsboard device profile you want your device to be assigned to.
![KEYNOA](/img/KEYNOA/Thingsboard/Device-Credentials.png)

5. If you do not have a device profile yet, create one. Click on "Device profiles" and select "Create new device profile".
![KEYNOA](/img/KEYNOA/Thingsboard/Device-profiles.png)

6. Fill in the details, then click on "Next: Transport configuration".

- Name: `Eval-Kit device profile`
- Rule chain: `Root Rule Chain`

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-add.png)

7. Select the Transport type and click on "Next: Alarm rules".

- Transport type: `MQTT`

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-transport.png)

8. Configuring "Alarm rules" can be skipped. Click on "Next: Device provisioning". Select the device provisioning type. Here the device credentials are also displayed. Click on "Add".

- Provisioning strategy: `Allow to create new devices`

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-provisioning.png)

9. Click on "Create".

## Create Template
:::info
If you have not uploaded your voucher yet and therefore the list of all devices is empty, then [upload the voucher](/tutorial/Prerequsites#upload-voucher).
:::
:::caution
If there are already MQTT templates, make sure they do not match your device. If you are unsure how to do this, you can also remove them:
You can delete a template by clicking the burger menu in the right of the template's row and select ("Delete").
:::

1. Create the MQTT template that assigns your device to the Data Hub.
Use the Create button and click on "MQTT template".
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/Thingsboard/MQTT-template-1.png)

3. Fill in the device details:

- Device Property: `Device Model`
- your-device-model-number: `sy-epc-rpi30`

These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.

:::info
For more information about the template concept see the [MQTT Templates Section](/reference/mqtt-template)
:::

4. Click on "Next".
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)


5. Give the template an identifier and click on "Save".

- Identifier Name: `Thingsboard MQTT template`

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

8. Your device is now provisioned to Thingsboard. Continue with the setup of Thingsboard.

:::info
Checkout the devices section of your Thingsboard to see the new device.
:::
