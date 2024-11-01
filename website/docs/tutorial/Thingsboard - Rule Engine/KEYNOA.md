---
sidebar_position: 2
---

# KEYNOA Setup
In this step, you will configure KEYNOA to onboard your device and connect it to your ThingsBoard account.

## Before you start

Before you beginn, ensure that you fulfill all [prerequisites](/tutorial/Prerequsites).

If you have used the device previously, make sure to 
- [Reset the device](/reference/reset-device).
- [Remove any MQTT templates](/reference/mqtt-template#2-remove-mqtt-template) from the list.

In the following steps the device configuration is applied to KEYNOA and not directly to the device.
Therefore, the **device is powered off** until KEYNOA is ready.
The device will be turned on in the end of this guide.

:::caution
For a specific application like MQTT, only a single template can be applied.
If multiple MQTT Templates exist, the newer template will be ignored. Hence, your new template referring to a new data hub will not be used if another template is already applied.
:::


## Create Data Hub

Refer to the [Data Hub](/reference/data-hub) to understand why it is necassary to create one. Follow these steps to create a new Data Hub on KEYNOA.

1. In KEYNOA, "Create" the Data Hub to which you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png) 


2. Select the ThingsBoard Data Hub.
![KEYNOA](/img/KEYNOA/Thingsboard/SelectDataHub.png)

3. Fill in the details of your ThingsBoard instance as shown below and click on "Create".

- Connector Name: `your_thingsboard` (choose a name)
- ThingsBoard Provider: Select `Custom Provider` from the dropdown to define your own ThingsBoard instance.
- MQTT Broker URL: Copy the following URL `ssl://thingsboard.devity.eu:8883` and paste it in the respective field.
- Topic: Use the default `v1/devices/me/telemetry`
- Provision Key: To get the Provisioning Key you need to continue the tutorial and execute step 4 (4a and 4b).
- Provision Secret: To get the Provisioning Secret you need to continue the tutorial and execute step 4 (4a and 4b).
- Certificate Authority: Select `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown or follow step 5 to create a new CA.
- Trust Anchor: Select the `KEYNOA CLOUD ROOT v1` which issues the TLS server certificate for `thingsboard.devity.eu:8883` Data Hub. To add a new Trust Anchor, follow step 6.

![KEYNOA](/img/KEYNOA/Thingsboard/DatahubProvisionKey.png)

4. Log in to [ThingsBoard](https://thingsboard.devity.eu/login) with the credentials you find in KEYNOA (just click on the lock icon in the header of KEYNOA). The Provision Key and Secret can be found in ThingsBoard in an already existing device profile (see step 4a). Otherwise you first need to create a device profile (see 4b). 
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

5. To add a new "Certificate Authority" click on "Add Certificate". To know why you may want to add a new Certificate Authority, [click here.](/reference/certificate-authority)

![KEYNOA](/img/KEYNOA/Thingsboard/AddCert.png)

You can also add a new CA from "Create" button on top right corner.

![KEYNOA](/img/KEYNOA/Thingsboard/Thingsboard_AddNewCA)

5a-1. Choose your level of expertise to create a new CA.

![KEYNOA](/img/KEYNOA/Thingsboard/LevelOfExperience.png)

5a-2. Choose "CA Type" `KEYNOA CA` and provide a "CA Name". CA name could be any text to identify the correct CA.

![KEYNOA](/img/KEYNOA/Thingsboard/ChooseCAName.png)

5a-3. Basic details of CA are automatically loaded. The fields can be modified to suit the CA. 

![KEYNOA](/img/KEYNOA/Thingsboard/CABasicDetails.png)

Know more about the [Certificate Properties here.](/reference/certificate-properties)

5a-4. The values in "Issuer Details" determine the device's certificate content when a device is provisioned later.
Select MQTT in the dropdown `Load default values for` to load the default issuer configuration for an MQTT use case.
Fields are autofilled with relevant values, but can be modified.
The content `$(serial)`in the field `Serial Number` and `Common Name` states that the Common Name field in the certificate will contain the serial number of the respective device.
Click on "Submit" to create a new CA.

![KEYNOA](/img/KEYNOA/Thingsboard/IssuerDetails.png)

5a-5. Click "Close" to finish creating a new CA.

![KEYNOA](/img/KEYNOA/Thingsboard/CACreated.png)

5a-6. The newly created CA is listed under `Certificate Authorities`. This can be now used to create the Data Hub. Now the Data Hub can be created by choosing the newly created CA.

![KEYNOA](/img/KEYNOA/Thingsboard/NewCAListed.png)

6. To add a new "Trust Anchor", click on "Create" and choose "Trust Anchor". To know why you may want to add a new Trust Anchor, [click here.](/reference/trust-anchor)

![KEYNOA](/img/KEYNOA/Thingsboard/CreateNewTrustAnchor.png)

6a-1. Upload the Trust Anchor certificate by clicking on "Choose File".

![KEYNOA](/img/KEYNOA/Thingsboard/AddTrustAnchor.png)

6a-2. Once upload is successfull, it is listed under "Trust Anchor" side menu. This can be selected to create the Data Hub.

![KEYNOA](/img/KEYNOA/Thingsboard/TrustAnchorUploadProgress.png)


## Create Template

Refer [Template](/reference/mqtt-template) to know more about it and why it is required to be created. Follow the steps to create a new Template on KEYNOA.

:::info
If you have not uploaded your voucher yet and therefore the list of all devices is empty, then [upload the voucher](/tutorial/Prerequsites#upload-voucher) now.
:::
:::caution
If MQTT templates already exist, please delete them by clicking on the burger menu in "Action" column and selecting "Delete". 

Follow [this link](/reference/mqtt-template#2-remove-mqtt-template) for instructions.
:::

1. Create the MQTT template that assigns your device to the Data Hub. Use the "Create" button and click on "MQTT template". 

![KEYNOA](/img/KEYNOA/MQTTCreateTemplate.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/MQTT1SelectDataHub.png)

3. Fill in the 'Policy Configurations' necessary for generating the MQTT application certificate. These configurations\* are automatically populated based on the input values provided during the creation of the CA. You may also modify them. 

\*Hover over the `i` circles for more information about each configuration. Alternatively, [Click here](/reference/certificate-properties) to know more about each configuration.

![KEYNOA](/img/KEYNOA/MQTT2PolicyConfigurations.png)

4. Use the device details as shown below and click on "Next".
- Choose Device Property: `Device Model`
- Type in the following Device Model for your Janz Tec Eval Kit Device: `sy-epc-rpi30`

These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.
![KEYNOA](/img/KEYNOA/MQTT3FilterDevices.png)

5. Give the template an Identifier Name and click on "Save".
- Identifier Name: `Thingsboard MQTT template`
![KEYNOA](/img/KEYNOA/MQTT4TemplateID.png)

6. You have now created the setup instruction for your device.
KEYNOA and ThingsBoard are now set up and your device is now ready for the onboarding process.
![KEYNOA](/img/KEYNOA/MQTTTemplateCreated.png)
:::info
Connect your device to the internet via an ethernet cable and power it up.
:::

7. The onboarding is completed, when the device status in KEYNOA switches to **provisioned**. You can refresh the table by clicking the refresh button in the top right corner.
:::info
The onboarding including the boot process should not take longer than two minutes.
:::
![KEYNOA](/img/KEYNOA/devices_list_refresh.png)

8. Your device is now provisioned to ThingsBoard. Continue with the setup of ThingsBoard.
:::info
Check the devices section of your ThingsBoard to see the new device.
:::
:::caution
Incorrect configurations may result in device provisioning failure. Please verify the status of the device, including the "Failed Provisioning Reason" and the "Last Provisioning Time" to follow up on the process.
:::