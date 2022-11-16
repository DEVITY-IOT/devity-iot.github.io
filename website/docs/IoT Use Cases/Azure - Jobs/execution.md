---
sidebar_position: 2
---

# Execution


## Initial Situation
You are the IoT representative of the facility team of a pharmaceutical manufacturer. The facility has a power plant that is operated with waste heat. Intelligent temperature sensors monitor the temperature to create optimal production conditions for the pharmaceuticals. 
The connected IoT sensors therefore continuously transmit the current temperature (every minute) in order to adjust the plant temperature if necessary. 

Since only maintenance tasks are carried out at night, the transmission interval of the temperature can be downgraded (every 15 minutes). 
This should happen completely automatically.



## Provision the IoT device with KEYNOA

First you start by configurating the device with the KEYNOA cloud.
### Create Data Hub
1. In the KEYNOA Cloud create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the Azure IoT Central data hub.
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub.png)

3. Log in with your Microsoft account or with the credentials you find in the KEYNOA credential manager (just click on the lock icon in the header of KEYNOA Cloud). This account needs admin priviledges in both the azure portal as well as the IoT Hub (see step 4).
![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login.png)

4. Grant access to the to the application.
![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login-2.png)

5. Select the proper IoT Central data hub. Click on the correct IoT hub on the right.
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details.png)

6. Fill in the details:


    IoT Central Name (this should reflect your chosen Hub "devity-hub")
    Enrollment Group Name (check that this enrollment group does not already exist "KEYNOA-EvalKit-001")
    IoT Location ("westeuropa")
    Certificate Authority (select "KEYNOA-CLOUD INT CA2 MQTT v1" from the dropdown)
    Connector Name ("IoT Central connector")

![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details-2.png)

7. You need to have admin access to the IoT Central Hub to perform this action: Click on "Create Configuration".
### Create Template
1. Create the MQTT Template that assigns your device to the Data Hub.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub ("IoT Central connector"). Click on "Next".
![KEYNOA](/img/KEYNOA/IoT-Central/MQTT-template-1.png)

3. Fill in the device details.

    Device Property ("Device Model")
    your-device-model-number ("eval-kit")

These properties will be matched against the information the device provides about itself during the onboarding process. If it matches the template, the template will be selected to configure the device.

4. Click on "Next".
![KEYNOA](/img/KEYNOA/MQTT-template-2.png)

5. Give the template an identifier name. Click on "Save".


    Identifier Name ("Azure IoT MQTT template")

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

### Upload Voucher
1. You have now created the setup for your device to be onboarded. Now upload your received voucher to KEYNOA.
![KEYNOA](/img/KEYNOA/upload-voucher.png)

2. Select the voucher via the file selector.
![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

3. After that, go to the devives tab and wait until the TO0 Status of your device says completed.
![KEYNOA](/img/KEYNOA/TO0.png)

4. Your device is now provisioned with KEYNOA. Continue with the setup of IoT Central.

## Azure IoT Central setup
During the onboarding process the device will be assigned to the device Group Eval Kit Gateways.
### Create a job to increase the sending interval
1. Jobs can now be created very easily. To do this, navigate to the "Jobs" section and click on "New".
![DevityHub](/img/az/10.png)

2. Name the job and specify the device group on which the job should be executed.
![DevityHub](/img/az/11.png)

3. Scroll down to Job Properties. Select "Cloud Property" as the job type. Select the Sending_Interval as the property and set the new value to 15. Click "Next".
![DevityHub](/img/az/12.png)

4. For the moment, we do not need to set anything in the Delivery Options. Click on "Next".
![DevityHub](/img/az/13.png)

5. Enable the schedule. Set the recurrence to daily. Enter 6 o'clock in the evening as the time. Click "Next".
![DevityHub](/img/az/14.png)

6. After reviewing your job configuration you can click on "Schedule".
![DevityHub](/img/az/15.png)
	
### Create a Dashboard to test the job
1. To be able to observe the result of the job, we need a representation of the Sending_interval. For this purpose, we create a dashboard that fulfils this task. Navigate to the "Dashboard" section and click on "Create dashboard". If an old dashboard exists, you can also delete or edit it.
![DevityHub](/img/az/16.png)

2. Name the Dashboard an select the Dashboard type "Personal". Click on "Create".
![DevityHub](/img/az/17.png)

3. To add a widget, click on "Edit dashboard" first.
![DevityHub](/img/az/18.png)

4. An overview for a new tile opens on the left-hand side. First switch to the tab "Start with devices". Select the device group and your IoT sensor.
![DevityHub](/img/az/19.png)

5. Scroll down to the Cloud Property field and select the Sending_interval. Click on "Add tile" to create the tile. IMPORTANT: Save your entries by clicking on "Save", otherwise the dashboard will be reset.
![DevityHub](/img/az/20.png)

6. The rudimentary dashboard now looks like this. Your IoT sensor may already be sending data, in which case you already have a Sending_Interval value.
![DevityHub](/img/az/21.png)

7. If the job is triggered when the entered time is reached, the sending_interval should be adjusted. Hint: Change the time in your job so that you do not have to wait until 6PM for the test.
![DevityHub](/img/az/22.png)


### Success! You now automatically get notifications for your facility.

### Reset the Sending Interval
For practice: Now create another job that resets the Sending_interval to one minute the next morning. You can do this.
