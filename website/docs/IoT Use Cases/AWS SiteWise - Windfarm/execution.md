---
sidebar_position: 2
---

# Execution


## Initial Situation
You are in charge of 

## Provision the IoT Sensor with KEYNOA

First you start by configurating the device with the KEYNOA cloud.

- In the KEYNOA UI create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

- Select the AWS data hub.
![KEYNOA](/img/KEYNOA/AWS/Data-Hub.png)
 
- Fill in the Key ID and the secret key. Click on "Confirm".
![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details.png)

- Fill in the RoleARN. Select the correct CA to register at AWS and provide a identifier name. Click on "Regiser CA".
![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png)

- In the KEYNOA UI create the MQTT Template.
![KEYNOA](/img/KEYNOA/Dashboard.png)

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

- Your device is now ready to be onboarded. And you can see newly created thing in AWS IoT Core.

## AWS SiteWise

AWS IoT SiteWise is another service provided by AWS that enables you to visualuzie and analyse your data.
The following steps are for professional users.
Alternitively DEVITY can provide you with a complete solution.
With AWS IoT SiteWise you can visualize the data collected by AWS IoT Core.
Follow these steps to create a SiteWise Portal:

### Create asset model
- In AWS SiteWise console choose Models
- Click on "Create model"
![Models](/img/AWS/SiteWise-Models.png)
- Fill out the Model details with 
    - Name ("Eval Kit Model")
    - Measurement definition (Name: "Temperature", Unit: "Celcius", leave Data type as "DOUBLE")
![Models](/img/AWS/SiteWise-Models-create-1.png)
    - Metric definitions (Name: "Average Temperature", Formula: "avg(Temperature)", Time interval: "5 minutes")
![Models](/img/AWS/SiteWise-Models-create-2.png)
- Click on "Create Model" at the bottom of the page

### Create and configure asset from asset model
- In AWS SiteWise console choose Assets
- Click on "Create asset"
![Assets](/img/AWS/SiteWise-Assets.png)
- Fill out the details
    - Model: chose the one you just created ("Eval Kit Model")
    - Name ("Eval Kit 1")
- Click on "Create Asset" on the bottom
![Assets](/img/AWS/SiteWise-Assets-create.png)
- Select the asset and chose edit
- Fill in Measurement
    - Temperature C ("/company/facility/42/dty-eval-kit/device-serial-number/temperature")
    - Unit ("Clecius")
![Assets](/img/AWS/SiteWise-edit-device.png)
- Click on "Save asset" on the bottom

### Create device fleet asset model
- In AWS SiteWise console choose Models
- Click on "Create model"
![Models](/img/AWS/SiteWise-Models.png)
- FIll out the details
    - Name ("Eval Kit Device Fleet")
![Models](/img/AWS/SiteWise-Models-create-3.png)
    - Metric definitions (Name: ")
![Models](/img/AWS/SiteWise-Models-create-4.png)

### Create and configure device fleet asset from device fleet asset model
![Assets](/img/AWS/SiteWise-Assets.png)

![Assets](/img/AWS/SiteWise-Assets-create.png)

![Assets](/img/AWS/SiteWise-edit-fleet.png)

### Create AWS IoT Core rule to send data to SiteWise 
![Rules](/img/AWS/Core-Rules.png)

![Rules](/img/AWS/Core-Rules-create-1.png)

![Rules](/img/AWS/Core-Rules-create-2.png)

![Rules](/img/AWS/Core-Rules-create-3.png)

![Rules](/img/AWS/Core-Rules-create-4.png)

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "iotsitewise:BatchPutAssetPropertyValue",
            "Resource": "*"
        }
    ]
}

## AWS SiteWise Portal

### Create Portal
![Portal](/img/AWS/SiteWise-Portal.png)

![Portal](/img/AWS/SiteWise-Portal-create-1.png)

![Portal](/img/AWS/SiteWise-Portal-create-2.png)

![Portal](/img/AWS/SiteWise-Portal-create-3.png)

![Portal](/img/AWS/SiteWise-Portal-members.png)

![Portal](/img/AWS/SiteWise-Portal-members-create.png)

### Sign into the portal

### Look at Asset
![Portal](/img/AWS/SiteWise-Portal-Assets.png)

### Create Project
![Portal](/img/AWS/SiteWise-Portal-Project-create.png)

![Portal](/img/AWS/SiteWise-Portal-Project-create-2.png)

![Portal](/img/AWS/SiteWise-Portal-Project-edit.png)

### Create Dashboard
![Portal](/img/AWS/SiteWise-Portal-Dashboard.png)
