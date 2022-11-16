---
sidebar_position: 3
---

# IoT Central Setup


## Initial Situation
You are the IoT representative of the facility team of a pharmaceutical manufacturer. The facility has a power plant that is operated with waste heat. Intelligent temperature sensors monitor the temperature to create optimal production conditions for the pharmaceuticals. 
The connected IoT sensors therefore continuously transmit the current temperature (every minute) in order to adjust the plant temperature if necessary. 

Since only maintenance tasks are carried out at night, the transmission interval of the temperature can be downgraded (every 15 minutes). 
This should happen completely automatically.

During the onboarding process the device will be assigned to the device Group Eval Kit Gateways.

## Create a job to increase the sending interval
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
	
## Create a Dashboard to test the job
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

Success! You now automatically get notifications for your facility.

## Reset the Sending Interval
For practice: Now create another job that resets the Sending_interval to one minute the next morning. You can do this.
