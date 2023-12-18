---
sidebar_position: 2
---

# KEYNOA Setup
In this step, you will configure KEYNOA to connect your device to your Azure account.

## Before you start

Before you start, make sure that you fulfill all [prerequisites](/tutorial/Prerequsites).

If you already used the device before, make sure to [reset the device](/reference/reset-device) and [remove any MQTT templates](/reference/mqtt-template#remove-mqtt-template) from the list.

In the following steps, the device configuration is applied to KEYNOA and not to the device.
Hence, the **device is powered off** until KEYNOA is ready.
The device will be turned on in the end of this guide.

:::caution
For a specific application like MQTT, only a single template can be applied.
If multiple MQTT Templates exist, the newer template will be ignored. Hence, your new template referring to a new data hub will not be used because another template is already applied.
:::

## Create Data Hub
1. In KEYNOA, create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the Azure IoT Central Data Hub.
![KEYNOA](/img/KEYNOA/IoT-Central/Azure_SelectCloudService.png)

3. Log in with your Microsoft account or with the credentials you find in the KEYNOA "Credentials" section (just click on the lock icon in the header of KEYNOA). This account needs admin privileges in both the Azure portal as well as the IoT Hub (see step 4).
:::caution
When you log in the first time, you will be asked to change your password.
In addition, Azure requires to set up two factor authentication to secure the account.
This is a common and reasonable security practice.
To do so, we recommend to install the [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app) App on your smartphone. [Here](https://support.microsoft.com/de-de/account-billing/einrichten-einer-authentator-app-als-%C3%BCberpr%C3%BCfungsmethode-in-zwei-schritten-2db39828-15e1-4614-b825-6e2b524e7c95) you can learn how to use the Microsoft Authenticator. 
:::

:::info
Please note that Microsoft Azure uses Single-Sign-On (SSO) functionalities. Signing in or out may impacts other running applications in your browser.
:::

![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login.png)

4. Grant access to the to the application.
![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login-2.png)

5. Select the proper IoT Central data hub. Click on the correct IoT hub on the right.
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details.png)

6. Fill in the details:

- IoT Central Name: this should reflect your chosen Hub `devity-hub`
- Enrollment Group Name: `KEYNOA-EvalKit-001`
- IoT Location: `westeuropa`
- Device Template: `Eval Kit`
- Certificate Authority: select: `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown. Add a new CA by following step 8.
- Connector Name: `IoT Central connector`

![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details-2.png)

7. You need to have admin access to the IoT Central Hub to perform this action: Click on "Create Configuration".

8. To add a new CA, click "Create" and then "Certificate Authority".

![KEYNOA](/img/KEYNOA/IoT-Central/Azure_AddNewCA.png)

8a-1. Choose your level of expertise to create a new CA.

![KEYNOA](/img/KEYNOA/Thingsboard/LevelOfExperience.png)

8a-2. Choose "CA Type" `Internal CA` and provide a "CA Name". CA name could be any text to identify the correct CA.

![KEYNOA](/img/KEYNOA/Thingsboard/ChooseCAName.png)

8a-3. Basic details of CA are automatically loaded. The fields can be modified to suit the CA. 

![KEYNOA](/img/KEYNOA/Thingsboard/CABasicDetails.png)

8a-4. The values in "Issuer Details" determine the device's certificate content when a device is provisioned later.
Select MQTT in the dropdown `Load default values for` to load the default issuer configuration for an MQTT use case.
Fields are autofilled with relevant values, but can be modified.
The content `$(serial)`in the fields `Serial Number` and `Common Name` states that the Common Name field in the certificate will contain the serial number of the respective device.
Click on "Submit" to create a new CA.

![KEYNOA](/img/KEYNOA/Thingsboard/IssuerDetails.png)

8a-5. Click "Close" to finish creating a new CA.

![KEYNOA](/img/KEYNOA/Thingsboard/CACreated.png)

8a-6. The newly created CA is listed under `Certificate Authorities`. This can be now used to create the Data Hub. Now the Data Hub can be created by choosing the newly created CA.

![KEYNOA](/img/KEYNOA/Thingsboard/NewCAListed.png)

## Create Template
:::info
If you have not uploaded your voucher yet and therefore the list of all devices is empty, then [upload the voucher](/tutorial/Prerequsites#upload-voucher).
:::
:::caution
If there are already MQTT templates, make sure they do not match your device. If you are unsure how to do this, you can also remove them:
You can delete a template by clicking the burger menu in the right of the template's row and select ("Delete").
:::
1. Create the MQTT Template that assigns your device to the Data Hub.
![KEYNOA](/img/KEYNOA/MQTTCreateTemplate.png)

2. Select your Data Hub ("IoT Central connector"). Click on "Next".
![KEYNOA](/img/KEYNOA/IoT-Central/IoTCentral_CreateTemplate.png)

3. Populate the "Policy Configurations" which will be used to create MQTT application certificate. 
The Policy Configurations are autofilled from the values we put in while creating the CA.

\*Hover over the `i` circles for more information about each configuration. 

![KEYNOA](/img/KEYNOA/IoT-Central/IoTCentral_2PolicyConfigs.png)

4. Fill in the device details.

- Device Property: `Device Model`
- your-device-model-number: `sy-epc-rpi30`

These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.

:::info
For more information about the template concept see the [MQTT Templates Section](/reference/mqtt-template)
:::

![KEYNOA](/img/KEYNOA/IoT-Central/IoTCentral_3FilterDevices.png)


5. Give the template an identifier and click on "Save".

- Identifier Name: `Azure IoT MQTT template`

![KEYNOA](/img/KEYNOA/IoT-Central/IoTCentral_NameIdentifier.png)

6. You have now created the setup instruction for your device.
KEYNOA and IoT Central are now fully configured and your device is now ready to be onboarded.

:::info
Power up your device and connect it to the internet via an ethernet cable.
:::

7. Wait until your device status in KEYNOA switches to **provisioned** by pressing the little refresh button in the top right.
After a successful onboarding, the device status in KEYNOA switches to **provisioned**.
:::info
The onboarding including the boot process should not take longer than 2 minutes.
:::

![KEYNOA](/img/KEYNOA/devices_list_refresh.png)

8. Your device is now provisioned with KEYNOA. Continue with the setup of IoT Central.

:::info
Checkout the devices section of your IoT Central to see the new device.
:::
