---
sidebar_position: 2
---

# Execution


## Initial Situation
You are in charge of 

## Provision the IoT Sensor with KEYNOA

First you start by configurating the device with the KEYNOA cloud.
### Create Data Hub
1. In the KEYNOA Cloud create the Data Hub you want your device to connect to.
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
### Create Template
1. In the KEYNOA UI create the MQTT Template.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/IoT-Central/MQTT-template-1.png)

3. Fill in the device details. Click on "Next".

    Device Property ("Device Model")
    your-device-model-number ("eval-kit")

This property will be matched against the information the device provides about itself during the onboarding process. When it matches the template will be selected to configure the device.

4. Fill in the details. CLick on "Save".


    Identifier Name ("AWS MQTT template")

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

### Upload Voucher
1. You have now created the setup for your device to be onboarded. Now upload the voucher you received to KEYNOA.
![KEYNOA](/img/KEYNOA/upload-voucher.png)

2. Select the voucher via the file selector.
![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

3. After that go to the devives tab and wait until the TO0 Status of your device says completed.
![KEYNOA](/img/KEYNOA/TO0.png)

Your device is now ready to be onboarded. And you can see newly created thing in AWS IoT Core.

## AWS SiteWise

AWS IoT SiteWise is another service provided by AWS that enables you to visualuzie and analyse your data.
The following steps are for professional users.
Alternitively DEVITY can provide you with a complete solution.
With AWS IoT SiteWise you can visualize the data collected by AWS IoT Core.
Follow these steps to create a SiteWise Portal:

Important: Check that the correct region is selected before you start

### Create asset model
1. In AWS SiteWise console choose "Models". Click on "Create model".
![Models](/img/AWS/SiteWise-Models.png)

2. Fill out the Model details with:


    Name ("Eval Kit Device Model")
    Measurement definition (Name: "Temperature", Unit: "Celcius", leave Data type as "DOUBLE")

![Models](/img/AWS/SiteWise-Models-create-1.png)


    Metric definitions (Name: "Average Temperature", Formula: "avg(Temperature)", Time interval: "5 minutes")

![Models](/img/AWS/SiteWise-Models-create-2.png)

3. Click on "Create Model" at the bottom of the page.

### Create and configure asset from asset model
1. In AWS SiteWise console choose "Assets". Click on "Create asset".
![Assets](/img/AWS/SiteWise-Assets.png)

2. Fill out the details


    Model: choose the one you just created ("Eval Kit Device Model")
    Name ("Eval Kit Device 1")

![Assets](/img/AWS/SiteWise-Assets-create.png)

3. Click on "Create Asset" on the bottom.

4. Select the asset and choose edit. Fill in Measurement:


    Temperature C ("/company/facility/42/dty-eval-kit/device-serial-number/temperature")
    Unit ("Clecius")

![Assets](/img/AWS/SiteWise-edit-device.png)

5. Click on "Save asset" on the bottom

### Create device fleet asset model
1. In AWS SiteWise console choose "Models". Click on "Create model".
![Models](/img/AWS/SiteWise-Models.png)

2. FIll out the details:


    Name ("Eval Kit Device Fleet Model")

![Models](/img/AWS/SiteWise-Models-create-3.png)


    Metric definitions (Name: "Average Temperature", Formula: "avg(Device | Average Temperature)", Time interval: "5 minutes")
    Hierarchy definitions ("Hierarchy name: "Device", Hierachy model: "Eval Kit Device Model" )

![Models](/img/AWS/SiteWise-Models-create-4.png)

3. Click on "Create Model" at the bottom of the page.

### Create and configure device fleet asset from device fleet asset model
1. In AWS SiteWise console choose "Assets". Click on "Create asset".
![Assets](/img/AWS/SiteWise-Assets.png)

2. Fill out the details:


    Model: choose the one you just created ("Eval Kit Device Fleet Model")
    Name ("Eval Kit Device Fleet 1")

![Assets](/img/AWS/SiteWise-Assets-create.png)

3. Click on "Create Asset" on the bottom.

4. Select the asset and choose edit. Add associated asset.


    Hierarchy ("Device")
    Asset ("Eval Kit Device 1")

![Assets](/img/AWS/SiteWise-edit-fleet.png)

5. Click on "Save asset" on the bottom.

### Create AWS IoT Core rule to send data to SiteWise 
1. In AWS IoT Core console choose "Message Routing/Rules". Click on "Create Rule".
![Rules](/img/AWS/Core-Rules.png)

2. Fill out the details


    Name ("Eval Kit Forwarding Rule")
    Optinal: Enter a description

![Rules](/img/AWS/Core-Rules-create-1.png)

3. Click on "Next". Change the SQL query to match the Eval Kits publish topic.


    SELECT * FROM '/company/facility/+/dty-eval-kit/+'

The "+" placeholders allow all traffic on matching topics to be forwared to SiteWise
4. Click on "Next".
![Rules](/img/AWS/Core-Rules-create-2.png)

5. Fill in the details:


    As the action to performe choose "Send a message data to asset properties in AWS IoT SiteWise"
    Select "By property alias"
    Property alias ("${topic()}/temperature")
    Time in secounds ("${floor(timestamp() / 1E3)}")
    Offset in nanos ("${(timestamp() % 1E3) * 1E6}")
    Data type ("DOUBLE")
    Value ("${temperature}")

![Rules](/img/AWS/Core-Rules-create-3.png)

6. Select the IAM role to be used, if you dont have one create it. It need a policy attached that allows this:


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

![Rules](/img/AWS/Core-Rules-create-4.png)

7. Click on "Next". Check that the details are correctly filled and click on "Create Role"
## AWS SiteWise Portal

### Create Portal
1. In AWS SiteWise console choose "Portals". Click on "Create Portal".
![Portal](/img/AWS/SiteWise-Portal.png)

2. Fill in the details:


    Portal name ("Eval Kit Portal")

![Portal](/img/AWS/SiteWise-Portal-create-1.png)


    Email ("your.account@mail-company.de")

3. Click on "Create".
![Portal](/img/AWS/SiteWise-Portal-create-2.png)

4. Either disable alarm notifications or choose an appropiate sender Email
![Portal](/img/AWS/SiteWise-Portal-create-3.png)

5. Either add existing user as administrators or create new users for that purpose. For the later click on "Create user".
![Portal](/img/AWS/SiteWise-Portal-members.png)

6. Fill out all details in the form.
![Portal](/img/AWS/SiteWise-Portal-members-create.png)

7. Click on "Next". Repeat the process for viewers.
### Sign into the portal
1. In AWS SiteWise console choose "Portals". Copy the link of your portal and open it.
2. Check your email and check for an invitation with the subjectline.


    Invitation to join AWS IAM Identity Center (successor to AWS Single Sign-On)

3. In that email choose "Accept Invitation". Set a password for your IAM Identity Center user.
4. Enter Username and Password on the portal page. Click on "Sign in".
### Look at Asset data
1. In the Portal choose "Assets". If you boot the Eval Kit now data points will start to appear here.
![Portal](/img/AWS/SiteWise-Portal-Assets.png)

2. Now you can create some more visualizations. Click on "Add asset to project".
### Create Project
1. Select "Eval Kit Device Fleet". Click on "Next".
![Portal](/img/AWS/SiteWise-Portal-Project-create.png)

2. Fill in the details:


    Project name ("Eval Kit Project")
    Project description ("My Eval Kit Project")

3. Click on "Add asset to project".
![Portal](/img/AWS/SiteWise-Portal-Project-create-2.png)

4. Click on "Add owners".
![Portal](/img/AWS/SiteWise-Portal-Project-edit.png)

5. Move the owner user accounts over. Click on "Save".
![Portal](/img/AWS/SiteWise-Portal-Project-members.png)

6. Repeat the process for "Add viewers".
### Create Dashboard
1. Click on "Create Dashboard". Place the Properties on the dashboard via drag and drop.
2. Rename the dashboard ("Eval Kit Dashboard")
![Portal](/img/AWS/SiteWise-Portal-Dashboard.png)

3. Now you have created your data visualization