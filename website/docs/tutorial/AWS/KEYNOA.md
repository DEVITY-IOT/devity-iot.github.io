---
sidebar_position: 2
---

# KEYNOA Setup
In this step, you will configure KEYNOA to connect your device to your AWS account.

## Before you start

Before you start, make sure that you fulfill all [prerequisites](/tutorial/Prerequsites).

If you already used the device before, make sure to 
- [reset the device](/reference/reset-device) and 
- [remove any MQTT templates](/reference/mqtt-template#2-remove-mqtt-template) from the list.

In the following steps, the device configuration is applied to KEYNOA and not to the device.
Hence, the **device is powered off** until KEYNOA is ready.
The device will be turned on in the end of this guide.

:::caution
For a specific application like MQTT, only a single template can be applied.
If multiple MQTT Templates exist, the newer template will be ignored. Hence, your new template referring to a new data hub will not be used because another template is already applied.
:::


## Create Data Hub

Refer [Data Hub](/reference/data-hub) to know more about it and why it is required to be created. Follow the steps to create a new Data Hub on KEYNOA.

1. In KEYNOA, "Create" the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the AWS Data Hub.
![KEYNOA](/img/KEYNOA/AWS/AWS_ChooseCloudService.png)
 
3. Fill in the Access Key ID and the Access Secret Key. You can find this information in KEYNOA by clicking on the lock icon in the header and scrolling to the section "AWS". Proceed by clicking on "Confirm".

- Access Key ID: copy from KEYNOA "Credentials" section 
  (click on the lock icon in the KEYNOA header and scroll to the section "AWS")
- Access Secret Key: copy from KEYNOA "Credentials" section.
- Region: select `eu-central-1` from the dropdown

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details.png)

4. Fill in the details (copy and paste) and click on "Register CA".

- Template Body: `default`
- RoleARN: copy from KEYNOA "Credentials" section.
- Topic: `/company/facility/42/dty-eval-kit/$(serial)`
- Certificate Authority: select `KEYNOA-CLOUD INT CA2 MQTT v1` from the dropdown. Or, add a new CA by following step 5.
- Connector Name: `AWS connector`

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png)

5. To add a new "Certificate Authority" click on "Add Certificate". To know why you may want to add a new Certificate Authority, [click here.](/reference/certificate-authority)

![KEYNOA](/img/KEYNOA/AWS/AWS_3AddCertificate.png)

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

## Create Template

Refer [Template](/reference/mqtt-template) to know more about it and why it is required to be created. Follow the steps to create a new Template on KEYNOA.

:::info
If you have not uploaded your voucher yet and therefore the list of all devices is empty, then [upload the voucher](/tutorial/Prerequsites#upload-voucher) now.
:::
:::caution
If MQTT templates already exist, please delete them by clicking on the burger menu in column "Action" and selecting "Delete".

Follow [this link](/reference/mqtt-template#2-remove-mqtt-template) for instructions.
:::

1. Create the MQTT template that assigns your device to the Data Hub. Use the "Create" button and click on "MQTT template".

![KEYNOA](/img/KEYNOA/MQTTCreateTemplate.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/AWS/MQTT_TemplateCreation1.png)

3. Fill in the 'Policy Configurations' necessary for generating the MQTT application certificate. These configurations\* are automatically populated based on the input values provided during the creation of the CA. You may also modify them. 

\*Hover over the `i` circles for more information about each configuration. Alternatively, [Click here](/reference/certificate-properties) to know more about each configuration.

![KEYNOA](/img/KEYNOA/MQTT2PolicyConfigurations.png)

4. Use the same device details as shown below and click on "Next".

- Choose Device Property: `Device Model`
- Type in the following Device Model for your Janz Tec Eval Kit Device: `sy-epc-rpi30`

These properties will be matched against the information which the device provides about itself during the onboarding process. If it matches the template, the template will be used to configure the device.


![KEYNOA](/img/KEYNOA/AWS/AWS_FilterDevices.png)


5. Give the template an Identifier Name and click on "Save".

- Identifier Name: `AWS MQTT template`

![KEYNOA](/img/KEYNOA/MQTT4TemplateID.png)

6. KEYNOA and AWS are now set up and your device is now ready for the onboarding process.
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
:::caution
Incorrect configurations may result in device provisioning failure. Please verify the status of the device, including the "Failed Provisioning Reason" and the "Last Provisioning Time" to follow up on the process.
:::