---
sidebar_position: 3
---

# Thingsboard Setup


## Initial Situation

You are the IoT manager of a brewing and beverage factory. 
Since the products should only be stored at certain temperatures, it is essential for the entire operation to detect failures of the cooling systems in a timely manner. 
To do this, you want to use sensors and IoT gateway at all storage points. 

In order to detect failures directly, you now use the Thingsboard Rule Chain. 
The aim of this tutorial is to define a rule that immediately detects failures of the cooling system. 

## Adapt Rule Chain
1. In Thingsboard Cloud go to Rule Chains section and open Root Rule Chain.
![Temperature Validation Node](/img/tb/1.png)

2. Familiarise yourself with the rule chain. Focus only on the red area. Incoming messages are distributed via the switch. If a message contains telemetry data, it is stored. We now want to check the stored data.
![Temperature Validation Node](/img/tb/2.png)

3. Create a new script via drag and drop. Enter a name and adapt the function as shown. Click on "Add".
![Temperature Validation Node](/img/tb/3.png)


	return msg.temperature < 35;
	
4. Connect the "Save Timeseries" module with our script. You can connect the modules by dragging and dropping. Select the label `Success` and click on "Add".
![Temperature Validation Node](/img/tb/4.png)

![Temperature Validation Node](/img/tb/5.png)

![Temperature Validation Node](/img/tb/6.png)

5. Create a "Create Alarm" block that triggers the alarm. Enter a name. The default code does not need to be changed.
![Temperature Validation Node](/img/tb/7.png)

6. Create a "Clear Alarm" block that resolves the alarm. Enter a name. The default code does not need to be changed.
![Temperature Validation Node](/img/tb/8.png)

7. Connect the new alarm modules to the Temperature Check. To do this, create two connections via drag and drop, as you have already done. Make sure that the conditions `False` and `True` are set as shown in the screenshot.
![Temperature Validation Node](/img/tb/9.png)

8. **Very Important:** Click on the "Apply Changes" Button at the bottom right to save all changes.
![Temperature Validation Node](/img/tb/10.png)

## Add Shared Attribute

1. Go to "All" in "Device Groups" and click on your device. Select the "Attributes" tab and choose "Shared Attributes". To create a new shared attribute click "+".
![Add Attribute](/img/tb/shared-attribute.png)

2. Fill in the details as shown. Make sure that the Key value is "sending_interval".
![Add Attribute](/img/tb/add-attribute.png)

## Build Dashboard

1. After customising the rule chain, we build a dashboard to visualise the alarms. Navigate to the section "Dashboard groups" and "All". At the top right you will find the "+" to create a new dashboard. Enter name and description.
![Temperature Validation Node](/img/tb/11.png)

2. Open the newly created dashboard.
![Temperature Validation Node](/img/tb/12.png)

3. Click on the Edit icon at the bottom right to add a new widget.
![Temperature Validation Node](/img/tb/13.png)


### Temperature Display
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
Hint: If you can't find the attribute temperature, the device hasn't sent data yet. 
![Temperature Validation Node](/img/tb/18.png)

### Temperature Graph
1. The second widget should display a graph showing the temperature curve. To do this, select "Add new widget" again via the button at the bottom right. Then select the widget type "Timeseires Line Chart".
![Temperature Validation Node](/img/tb/19.png)

2. Insert the data shown below and click "Add".
![Temperature Validation Node](/img/tb/20.png)

### Alarms Table
1. The third widget should now show the incoming alarms. Therefore, add a new widget, this time with the type "Alarm widgets".
![Temperature Validation Node](/img/tb/21.png)

2. Choose "Alarms table".
![Temperature Validation Node](/img/tb/22.png)

3. Enter the two fields marked below. Select the "Active" and "Cleared" state as well as your Entity alias.
![Temperature Validation Node](/img/tb/23.png)

### Set Sending Interval

1. The fourth widget should enable you to adjust the sending interval of the device. Add a new widge with the type "Input widgets".
![Temperature Validation Node](/img/tb/24.png)

2. Choose "Update shared integer attribute".
![Temperature Validation Node](/img/tb/25.png)

3. Insert the details as shown and click on "Settings".
![Temperature Validation Node](/img/tb/26.png)

4. Adjust the titel as shown an click on "Add".
![Temperature Validation Node](/img/tb/27.png)

5. You can adjust the sizes of the widget acording to your preferences. 
***Very Important:*** Do not forget to click "Apply Changes" at the bottom right. Otherwise your Dashboard won't be saved.
![Apply Changes](/img/tb/28.png)

## Check incoming alarms
1. If the temperature rises above 35°, a new entry should occur in the Alarm table. The rule we defined before triggers the action that creates a new alarm.
![Temperature Validation Node](/img/tb/29.png)

2. If the temperature falls below 35°, the state of the alarm will change to "cleared".
![Temperature Validation Node](/img/tb/30.png)

3. You can adapt the Dashboard according to your wishes. Insert widgets and explore the Thingsboard functionalities. 

## Adjust Sending Interval
1. You can adjust the device sending interval by typing in the widget and confiming with the checkmark. Soon you can recognice that the interval between messages has changed.
![Adjust Sending Interval](/img/tb/set-sending-interval.png)

Success! You now have a digitalized brewing and beverage factory.