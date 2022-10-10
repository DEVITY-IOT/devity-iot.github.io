---
sidebar_position: 2
---

# Execution


## Initial Situation


## Provision the IoT Sensor with KEYNOA

First you start by configurating the device with the KEYNOA cloud.

- In the KEYNOA UI create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

- Select the AWS data hub.
![KEYNOA](/img/KEYNOA/AWS/Data-Hub.png)
 
- Fill in the Key ID and the secret key. Click on "Confirm".
![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details.png)

- Select the correct CA to register at AWS and provide a identifier name. Click on "Regiser CA".
![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png)

- Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/IoT-Central/MQTT-template-1.png)

- Fill in the device details you want your device to match against. Click on "Next".
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)

- Give the template an identifier. Click on "Save".
![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

- You have now created the setup for your device to be onboarded. Now upload the voucher you received to KEYNOA.
![KEYNOA](/img/KEYNOA/upload-voucher.png)

- Select the voucher via the file selector.
![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

- After that go to the devives tab and wait until the TO0 Status of your device says completed.
![KEYNOA](/img/KEYNOA/TO0.png)

- Your device is now ready to be onboarded. Continue with the setup in AWS.