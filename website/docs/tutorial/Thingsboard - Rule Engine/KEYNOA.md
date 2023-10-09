---
sidebar_position: 2
---

# KEYNOA Setup
In this step, you will configure KEYNOA to connect your device to your ThingsBoard account.

## Before you start

Before you start, make sure that you fulfill all [prerequisites](/tutorial/Prerequsites).

If you already used the device before make sure to [reset the device](/reference/reset-device) and [remove any MQTT templates](/reference/mqtt-template#remove-mqtt-template) from the list.

In the following steps the device configuration is applied to KEYNOA and not to the device.
Hence, the **device is powered off** until KEYNOA is ready.
The device will be turned on in the end of this guide.

:::caution
For a specific application like MQTT only a single template can be applied.
If multiple MQTT Templates exist, the newer template will be ignored. Hence your new template referring to a new data hub will not be used because another template is already applied.
:::


## Create Data Hub
1. In the KEYNOA Cloud "Create" the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png) 

2. Select the ThingsBoard Data Hub.
![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub.png)

3. Fill in the details of your ThingsBoard instance as shown below and click on "Create".

- Connector Name: `your_thingsboard` (choose a name)
- ThingsBoard Provider: Select `Custom Provider` from the dropdown to define your own ThingsBoard instance.
- MQTT Broker URL: Copy the following URL `ssl://thingsboard.devity.eu:8883` and paste it in the respective field.
- Topic: Use the default `v1/devices/me/telemetry`
- Provision Key: To get the Provisioning Key you need to continue the tutorial and execute step 4.
- Provision Secret: To get the Provisioning Secret you need to continue the tutorial and execute steps 4.
- Certificate Authority: Select `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown.

![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub-details.png)

4. Log in to the [ThingsBoard](https://thingsboard.devity.eu/login) with the credentials you find in KEYNOA (just click on the lock icon in the header of KEYNOA). The Provision Key and Secret can be found in ThingsBoard in an already existing device profile (see step 4a). Otherwise you first need to create a device profile (see 4b) 
<!--- ![KEYNOA](/img/KEYNOA/Thingsboard/Device-Credentials.png) --->
![KEYNOA](/img/KEYNOA/Thingsboard/Keynoa_Credential_manager.png)

4a. Select "Device Profiles" on the left menu, which displays the available device profile(s). Click on the device of interest from the displayed device(s). "Device Provisioning" shows the `Provision device key` and `Provision device secret`. Use these values in Step-3 to create a ThingsBoard Data Hub.

![KEYNOA](/img/KEYNOA/Thingsboard/Device-Credentials.png)

4b-1. If your device profile does not exist, you should create one. Click on "Device profiles" on the left menu and select "Create new device profile".
![KEYNOA](/img/KEYNOA/Thingsboard/Device-profiles.png)

4b-2. Fill in the details, then click on "Next: Transport configuration".

- Name: `Eval-Kit device profile`
- Rule chain: `Root Rule Chain`
- Next two options can be left unchanged.

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-add.png)

4b-3. Select the Transport type and click on "Next: Alarm rules". Leave default values for "MQTT device topic filters".
- Transport type: `MQTT`

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-transport.png)

4b-4. Configuring "Alarm rules" can be skipped. Click on "Next: Device provisioning".

![KEYNOA](/img/KEYNOA/Thingsboard/Add-alarm-rule.png)

4b-5. Set the Provision strategy. The credentials `Provision device key` and `Provision device secret` shown here are used in Step-3 to create a new ThingsBoard Data Hub. Click on "Add". Use these values in Step 3 to create a ThingsBoard Data Hub.

- Provision strategy: `Allow to create new devices`

![KEYNOA](/img/KEYNOA/Thingsboard/Device-provisioning.png)

## Create Template
:::info
If you have not uploaded your voucher yet and therefore the list of all devices is empty, then [upload the voucher](/tutorial/Prerequsites#upload-voucher) now.
:::
:::caution
If MQTT templates already exist, please delete them by clicking on the burger menu in column "Action" and selecting "Delete".
:::

1. Create the MQTT template that assigns your device to the Data Hub.
Use the "Create" button and click on "MQTT template".
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/Thingsboard/MQTT-template-1.png)

3. Use the same device details as shown below and click on "Next".

- Choose Device Property: `Device Model`
- Type in the following Device Model for your Janz Tec Eval Kit Device: `sy-epc-rpi30`

These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.

:::info
For more information about the template concept see the [MQTT Templates Section](/reference/mqtt-template)
:::
 
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)


4. Give the template an Identifier Name and click on "Save".

- Identifier Name: `Thingsboard MQTT template`

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

5. You have now created the setup instruction for your device.
KEYNOA and ThingsBoard are now set up and your device is now ready for the onboarding process.

:::info
Connect your device to the internet via an ethernet cable and power it up.
:::

6. The onboarding is completed, when the device status in KEYNOA switches to **provisioned**. You can refresh the table by clicking the refresh button in the top right corner.

:::info
The onboarding including the boot process should not take longer than two minutes.
:::

![KEYNOA](/img/KEYNOA/devices_list_refresh.png)

7. Your device is now provisioned to ThingsBoard. Continue with the setup of ThingsBoard.

:::info
Check the devices section of your ThingsBoard to see the new device.
:::
