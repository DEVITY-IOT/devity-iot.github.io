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

2. Select the Thingsboard data hub.
![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub.png)

3. Fill in the details of your Thingsboard instance:

- Connector Name: `your_thingsboard`
- Thingsboard Provider: select `Custom Provider` from the dropdown
- MQTT Broker URL: leave the default `ssl://thingsboard.devity.eu:8883`
- Topic: `v1/devices/me/telemetry`
- Provision Key: see step 4
- Provision Secret: see step 4
- Certificate Authority: select `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown

![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub-details.png)

4. Log in to the [Thingsboard Cloud](https://thingsboard.cloud/login) with the credentials you find in the KEYNOA credential manager (just click on the lock icon in the header of KEYNOA Cloud). The provision key and secret can be found in the Thingsboard device profile you want your device to be assigned to.
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

8. Click on "Next: Device provisioning". Select the device provisioning type, here the device credentials are also displayed. Click on "Add".

- Provisioning strategy: `Allow to create new devices`

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-provisioning.png)

9. Click on "Create".

## Create Template
1. Create the MQTT template that assigns your device to the Data Hub.
Use the Create button and click on "MQTT template".
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/Thingsboard/MQTT-template-1.png)

3. Fill in the device details:

- Device Property: `Device Model`
- your-device-model-number: `sy-epc-rpi30`

These properties will be matched against the information the device provides about itself during the onboarding process. If it matches the template, the template will be selected to configure the device. Click on "Next".

![KEYNOA](/img/KEYNOA/MQTT-template-2.png)


4. Give the template an identifier.

- Identifier Name: `Thingsboard MQTT template`

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

5. Click on "Save". You have now created the setup for your device to be onboarded.

6. KEYNOA and Thingsboard are now fully configured and your device is now ready to be onboarded.
:::info
Power up your device and connect it to the internet via an ethernet cable.
:::

7. Wait until your device status in KEYNOA switches to **active** by pressing the little refresh button in the to right.
After a successful onboarding, the device status in KEYNOA switches to **active**.
:::info
The onboarding including the boot process should not take longer than 2 minutes.
:::

![KEYNOA](/img/KEYNOA/devices_list_refresh.png)

8. Your device is now provisioned to Thingsboard. Continue with the setup of Thingsboard.

:::info
Checkout the devices section of your Thingsboard to see the new device.
:::
