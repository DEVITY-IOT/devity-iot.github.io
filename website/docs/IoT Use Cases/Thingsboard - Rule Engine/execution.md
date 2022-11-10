---
sidebar_position: 2
---

# Execution


## Initial Situation

You are the IoT manager of a brewing and beverage factory. 
Since the products should only be stored at certain temperatures, it is essential for the entire operation to detect failures of the cooling systems in a timely manner. 
To do this, they use connected IoT sensors at all storage points. 

In order to detect failures directly, you now use the Thingsboard Rule Chain. 
The aim of this tutorial is to define a rule that immediately detects failures of the cooling system. 


## Provision the IoT Sensor with KEYNOA

First you start by configurating the device with the KEYNOA cloud.
### Create Data Hub
1. In the KEYNOA UI create the Data Hub you want your device to connect to.
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select the Thingsboard data hub.
![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub.png)

3. Fill in the details of your Thingsboard instance:


    Connector Name ("Thingsboard Cloud")
    Thingsboard Provider (select "Thingsboard Cloud Platform" from the dropdown)
    MQTT Broker URL (leave the default "ssl://mqtt.thingsboard.cloud:8883")
    Topic ("v1/devices/me/telemetry")
    Provision Key
    Provision Secret
    Certificate Authority (select "KEYNOA-CLOUD INT CA2 MQTT v1" from the dropdown)

![KEYNOA](/img/KEYNOA/Thingsboard/Data-Hub-details.png)

4. The provision key and secret can be found in the Thingsboard device profile you want your device to be assigned to.
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
### Create Template
1. Create the MQTT template that assigns your device to the Data Hub.
Use the Create button and click on "MQTT template".
![KEYNOA](/img/KEYNOA/Dashboard.png)

2. Select your Data Hub. Click on "Next".
![KEYNOA](/img/KEYNOA/Thingsboard/MQTT-template-1.png)

3. Fill in the device details:


    Device Property ("Device Model")
    your-device-model-number ("eval-kit")

![KEYNOA](/img/KEYNOA/MQTT-template-2.png)

4. This property will be matched against the information the device provides about itself during the onboarding process. When it matches the template will be selected to configure the device. Click on "Next".
5. Give the template an identifier.


    Identifier Name ("Thingsboard MQTT template")

![KEYNOA](/img/KEYNOA/MQTT-template-3.png)

6. Click on "Save".
### Upload Voucher
1. You have now created the setup for your device to be onboarded. Now upload the voucher you received to KEYNOA.
![KEYNOA](/img/KEYNOA/upload-voucher.png)

2. Select the voucher via the file selector.
![KEYNOA](/img/KEYNOA/upload-voucher-2.png)

3. After that go to the devives tab and wait until the TO0 Status of your device says "completed".
![KEYNOA](/img/KEYNOA/TO0.png)

4. Your device is now ready to be onboarded. Power on the device to complete the onboaridng process. After that continue with the setup in Thingsboard.

## Thingsboard setup
### Adapt the Rule Chain
1. In Thingsboard UI go to Rule Chains section and open Root Rule Chain.
![Temperature Validation Node](/img/tb/1.png)

2. Familiarise yourself with the rule chain. Focus only on the red area. Incoming messages are distributed via the switch. If a message contains telemetry data, it is stored. We now want to check the stored data.
![Temperature Validation Node](/img/tb/2.png)

3. Create a new script via drag and drop. Enter a name and adapt the function as shown. Click on "Add".
![Temperature Validation Node](/img/tb/3.png)


	return msg.temperature < 35;
	
4. Connect the "Save Timeseries" module with our script. You can connect the modules by dragging and dropping. Select the label "Success" and click on "Add".
![Temperature Validation Node](/img/tb/4.png)

![Temperature Validation Node](/img/tb/5.png)

![Temperature Validation Node](/img/tb/6.png)

5. Create a "Create Alarm" block that triggers the alarm. Enter a name. The default code does not need to be changed.
![Temperature Validation Node](/img/tb/7.png)

6. Create a "Clear Alarm" block that resolves the alarm. Enter a name. The default code does not need to be changed.
![Temperature Validation Node](/img/tb/8.png)

7. Connect the new alarm modules to the Temperature Check. To do this, create two connections via drag and drop, as you have already done. Make sure that the conditions "False" and "True" are set as shown in the screenshot.
![Temperature Validation Node](/img/tb/9.png)

8. **Very Important:** Click on the "Apply Changes" Button at the bottom right to save all changes.
![Temperature Validation Node](/img/tb/10.png)

### Build a Dashboard

1. After customising the rule chain, we build a dashboard to visualise the alarms. Navigate to the section "Dashboard groups" and "All". At the top right you will find the "+" to create a new dashboard. Enter name and description.
![Temperature Validation Node](/img/tb/11.png)

2. Open the newly created dashboard.
![Temperature Validation Node](/img/tb/12.png)

3. Click on the Edit icon at the bottom right to add a new widget.
![Temperature Validation Node](/img/tb/13.png)


#### Temperature Display
1. The first thing we want to do is create a temperature display. Select the widget type "Cards" for this.
![Temperature Validation Node](/img/tb/14.png)

2. Choose Simple Card.
![Temperature Validation Node](/img/tb/15.png)

3. Thingsboard uses aliases as data source. Therefore, for the first widget we need to create an alias. To do this, click on "Create a new one!".
![Temperature Validation Node](/img/tb/16.png)

4. Enter the alias information shown in the screenshot below.
![Temperature Validation Node](/img/tb/17.png)

5. Now you can choose the newly created alias as data source. Choose "temperature" as attribute. Click "Add". 
Congratulations, you have created your first widget.
Hint: If you can't find the attribute temperature, the test device hasn't sent data yet. 
![Temperature Validation Node](/img/tb/18.png)

#### Temperature Graph
1. The second widget should display a graph showing the temperature curve. To do this, select "Add new widget" again via the button at the bottom right. Then select the widget type "Timeseires Line Chart".
![Temperature Validation Node](/img/tb/19.png)

2. Insert the data shown below and click "Add".
![Temperature Validation Node](/img/tb/20.png)

#### Alarms Table
1. The third widget should now show the incoming alarms. Therefore, add a new widget, this time with the type "Alarm Widgets".
![Temperature Validation Node](/img/tb/21.png)

2. Choose "Alarms table".
![Temperature Validation Node](/img/tb/22.png)

3. Enter the two fields marked below. Select the "Active" and "Cleared" state as well as your Entity alias.
![Temperature Validation Node](/img/tb/23.png)

4. You can adjust the sizes of the widget acording to your preferences. ***Very Important:*** Do not forget to click "Apply Changes" at the bottom right. Otherwise your Dashboard won't be saved.
![Temperature Validation Node](/img/tb/24.png)

### Check the incoming alarms
1. If the temperature rises above 35°, a new entry should occur in the Alarm table. The rule we defined before triggers the action that creates a new alarm.
![Temperature Validation Node](/img/tb/25.png)

2. If the temperature falls below 35°, the state of the alarm will change to "cleared".
![Temperature Validation Node](/img/tb/26.png)

3. You can adapt the Dashboard according to your wishes. Insert widgets and explore the Thingsboard functionalities. 