---
sidebar_position: 2
---

# KEYNOA Setup

First you start by configurating the device within KEYNOA.
If you already used the device before make sure to [reset the device](../../Eval%20Kit/Prerequsites%20and%20General%20Information#reset-device).
Also power down your device.

:::info
In the following steps the device configuration is applied to KEYNOA and not to the device. Hence, the device can stay powered off until everything is ready.
We will turn the device in the end of this guide.
:::

## Create Data Hub
1. In the KEYNOA UI create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the AWS data hub.
![KEYNOA](/img/KEYNOA/AWS/Data-Hub.png)
 
3. Fill in the details adn click on "Confirm".


    Access Key ID
    Access Secret Key
    Region (select "eu-central-1" from the dropdown)

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details.png)

4. Access Key and Secret can be created in the AWS IAM portal. Select your user with Administators group access.
![KEYNOA](/img/KEYNOA/AWS/User-Credentials.png)

5. Create a new Access Key pair
![KEYNOA](/img/KEYNOA/AWS/User-Credentials-2.png)

6. Fill in the details.


    Template Body ("default")
    RoleARN ("arn:aws:iam::****:role/JITPRole")
    Topic ("/company/facility/42/dty-eval-kit/${serial}")
    Certificate Authority (select "KEYNOA-CLOUD INT CA2 MQTT v1" from the dropdown)
    Connector Name ("AWS connector")

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png)

7. The RoleARN can be found in the AWS IAM portal.
![KEYNOA](/img/KEYNOA/AWS/JITPRole.png)

8. Click on "Register CA".
## Create Template
1. In the KEYNOA UI create the MQTT Template.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/IoT-Central/MQTT-template-1.png)

3. Fill in the device details. Click on "Next".


    Device Property ("Device Model")
    your-device-model-number ("sy-epc-rpi30")

This property will be matched against the information the device provides about itself during the onboarding process. When it matches the template will be selected to configure the device.
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)

4. Fill in the details. CLick on "Save".


    Identifier Name ("AWS MQTT template")

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

## Upload Voucher
1. You have now created the setup for your device to be onboarded. Now upload the voucher you received to KEYNOA.
![KEYNOA](/img/KEYNOA/upload-voucher.png)

2. Select the voucher via the file selector.
![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

3. Afterwards go to the devices tab and wait until the Device Status of your device says **waiting**.

:::info

The processing of new voucher in KEYNOA should not take longer than 5 minutes!

:::

![KEYNOA](/img/KEYNOA/TO0.png)

4. Your device is now ready to be onboarded.
Power up your device and connect it to the internet via an ethernet cable.

:::info
KEYNOA and aws are now fully configured and you can switch the device on.
:::

:::info
After a successful onboarding, the device status in KEYNOA switches to **active**.
This should not take longer than 2 minutes.
:::

:::info
Checkout the Things section of your AWS IoT Core to see the new device.
:::

