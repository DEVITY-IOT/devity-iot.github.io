---
sidebar_position: 2
---

# KEYNOA Setup

First, you start by configuring the device with the KEYNOA cloud. Do not power on the device before you have completed the configuration process.

## Create Data Hub
1. In the KEYNOA Cloud create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png) 

2. Select the Thingsboard data hub.
![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub.png)

3. Fill in the details of your Thingsboard instance:


    Connector Name ("Thingsboard Cloud")
    Thingsboard Provider (select "Thingsboard Cloud Platform" from the dropdown)
    MQTT Broker URL (leave the default "ssl://mqtt.thingsboard.cloud:8883")
    Topic ("v1/devices/me/telemetry")
    Provision Key (see step 4)
    Provision Secret (see step 4)
    Certificate Authority (select "KEYNOA-CLOUD INT CA2 MQTT v1" from the dropdown)

![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub-details.png)

4. Log in to the [Thingsboard Cloud](https://thingsboard.cloud/login) with the credentials you find in the KEYNOA credential manager (just click on the lock icon in the header of KEYNOA Cloud). The provision key and secret can be found in the Thingsboard device profile you want your device to be assigned to.
![KEYNOA](/img/KEYNOA/Thingsboard/Device-Credentials.png)

5. If you do not have a device profile yet, create one. Click on "Device profiles" and select "Create new device profile".
![KEYNOA](/img/KEYNOA/Thingsboard/Device-profiles.png)

6. Fill in the details, then click on "Next: Transport configuration".


    Name ("Eval-Kit device profile")
    Rule chain ("Root Rule Chain")

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-add.png)

7. Select the Transport type and click on "Next: Alarm rules".


    Transport type ("MQTT")

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-transport.png)

8. Click on "Next: Device provisioning". Select the device provisioning type, here the device credentials are also displayed. Click on "Add".


    Provisioning strategy ("Allow to create new devices")

![KEYNOA](/img/KEYNOA/Thingsboard/Device-profile-provisioning.png)

9. Click on "Create".
## Create Template
1. Create the MQTT template that assigns your device to the Data Hub.
Use the Create button and click on "MQTT template".
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/Thingsboard/MQTT-template-1.png)

3. Fill in the device details:


    Device Property ("Device Model")
    your-device-model-number ("eval-kit")

These properties will be matched against the information the device provides about itself during the onboarding process. If it matches the template, the template will be selected to configure the device. Click on "Next".

![KEYNOA](/img/KEYNOA/MQTT-template-2.png)


4. Give the template an identifier.


    Identifier Name ("Thingsboard MQTT template")

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

5. Click on "Save".
## Upload Voucher
1. You have now created the setup for your device to be onboarded. Now upload the received voucher to KEYNOA.
![KEYNOA](/img/KEYNOA/upload-voucher.png)

2. Select the voucher via the file selector.
![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

3. After that go to the devives tab and wait until the TO0 Status of your device says "completed".
![KEYNOA](/img/KEYNOA/TO0.png)

4. Your device is now ready to be onboarded. Power on the device to complete the onboaridng process. After that continue with the setup in Thingsboard.
