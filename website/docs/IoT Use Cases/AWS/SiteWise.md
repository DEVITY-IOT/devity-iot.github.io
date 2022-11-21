---
sidebar_position: 3
---

# AWS Setup


## Initial Situation
You are in charge of 

## AWS SiteWise

AWS IoT SiteWise is another service provided by AWS that enables you to visualuzie and analyse your data.
The following steps are for professional users.
Alternitively DEVITY can provide you with a complete solution.
With AWS IoT SiteWise you can visualize the data collected by AWS IoT Core.
Follow these steps to create a SiteWise Portal:

Important: Check that the correct region is selected before you start

## Create asset model
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

## Create device fleet asset model
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

## Create AWS IoT Core rule to send data to SiteWise 
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