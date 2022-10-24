---
sidebar_position: 2
---

# Execution


## Initial Situation
TODO: rewritte for temperature
You are the IoT representative of the facility team of a watch manufacturer. 
Intelligent light sensors monitor the light to create optimal production conditions for the precision mechanics. 
The connected IoT sensors therefore continuously transmit the current light intensity (every minute) in order to adjust the light intensity if necessary. 

Since only maintenance tasks are carried out at night, the transmission interval of the light intensity can be downgraded (every 15 minutes). 
This should happen completely automatically.



## Provision the IoT Sensor with KEYNOA

First you start by configurating the device with the KEYNOA cloud.

- In the KEYNOA UI create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

- Select the IoT-Central data hub.
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub.png)

- Log in with your Microsoft account.
![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login.png)

- Grant access to the to the application.
![KEYNOA](/img/KEYNOA/IoT-Central/Microsoft-login-2.png)

- Select the proper IoT Central hub. Click on the correct IoT hub on the right.
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details.png)

- Select the correct CA and provide an identifier name. Click on "Create Configuration".
![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details-2.png)

- Create the MQTT Template that assigns your device to the Data Hub.
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

- Your device is now ready to be onboarded. Continue with the setup in IoT Central.

## Create Device Template
In order to access attributes and models in Azure IoT Central, device templates are used, which can be assigned to a device group. 
This makes the administration scalable, as devices only need to be added to a group.

- To demonstrate this process, we will first create a new device template. To do this, navigate to the "Device Templates" section and click on "New".
![DevityHub](/img/az/1.png)
- Select the custom template with the type "IoT Device".
![DevityHub](/img/az/2.png)
- Name the template and tick the gateway checkbox. Continue to the next page.
![DevityHub](/img/az/3.png)
- Confirm the review with a click on "Create".
![DevityHub](/img/az/4.png)

- Next, we need to let the template know what attributes, properties, commands the IoT devices have. This is what models are used for. We will now create our own model. Click on "Custom model" for this.
![DevityHub](/img/az/5.png)

- Navigate to the Cloud Properties section. First enter the property Sending interval. Click on the arrow pointing downwards to the far right to open the "Schema" area. Enter the data for the schema here as well. Save your entries by clicking on "Save".
![DevityHub](/img/az/6.png)

- In order to use the template, Azure requires a relationship to an existing template. To do this, navigate to the "Relations" area, enter a name for the relation and select "Digital Distribution Gateway" as the target. Save your entries with "Save".
- Click on "Publish" to be able to use the template in the entire IoT Central.
![DevityHub](/img/az/7.png)
- Confirm the review screen with a click on "Publish" again.
![DevityHub](/img/az/8.png)

## Assign Device to Device Template

- To link our IoT sensor to the template we created, navigate to the Devices section and click the name of the IoT sensor to go to the Details page. Select "Manage Templates" and "Assign Template" in the drop-down that appears. Select the template we just created and click "Assign".
![DevityHub](/img/az/23.png)



## Create Device Group
- Next we can create a new device group. To do this, navigate to the "Device Groups" section and click on "New". Give the group a name and select the template we created. To test the filter click on "Run query". You should now see the IoT sensor we just assigned to the template.
![DevityHub](/img/az/9.png)





## Create a job to increase the sending interval
- With this preliminary work, jobs can now be created very easily. To do this, navigate to the "Jobs" section and click on "New".
![DevityHub](/img/az/10.png)


- Name the job and specify the device group on which the job should be executed.
![DevityHub](/img/az/11.png)

- Scroll down to Job Properties. Select "Cloud Property" as the job type. Select the Sending_Interval as the property and set the new value to 15. Click "Next".
![DevityHub](/img/az/12.png)
	
- For the moment, we do not need to set anything in the Delivery Options. Click on "Next".
![DevityHub](/img/az/13.png)

- Enable the schedule. Set the recurrence to daily. Enter 6 o'clock in the evening as the time. Click "Next".
![DevityHub](/img/az/14.png)

- After reviewing your job configuration you can click on "Schedule".
![DevityHub](/img/az/15.png)
	
## Create a Dashboard to test the job
- To be able to observe the result of the job, we need a representation of the Sending_interval. For this purpose, we create a dashboard that fulfils this task.
- Navigate to the "Dashboard" section and click on "Create dashboard". If an old dashboard exists, you can also delete or edit it.
![DevityHub](/img/az/16.png)

- Name the Dashboard an select the Dashboard type "Personal". Click on "Create".
![DevityHub](/img/az/17.png)

- To add a widget, click on "Edit dashboard" first.
![DevityHub](/img/az/18.png)

- An overview for a new tile opens on the left-hand side. First switch to the tab "Start with devices". Select the device group and your IoT sensor.
![DevityHub](/img/az/19.png)

- Scroll down to the Cloud Property field and select the Sending_interval. Click on "Add tile" to create the tile. IMPORTANT: Save your entries by clicking on "Save", otherwise the dashboard will be reset.
![DevityHub](/img/az/20.png)

- The rudimentary dashboard now looks like this. Your IoT sensor may already be sending data, in which case you already have a Sending_Interval value.
![DevityHub](/img/az/21.png)

- If the job is triggered when the entered time is reached, the sending_interval should be adjusted. Hint: Change the time in your job so that you do not have to wait until 6PM for the test.
![DevityHub](/img/az/22.png)

## Reset the Sending Interval
- For practice: Now create another job that resets the Sending_interval to one minute the next morning. You can do this.
	
