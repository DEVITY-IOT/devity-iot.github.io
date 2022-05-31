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

```
Hier muss der Onboarding Prozess beschrieben werden
Cloud Configuration, Template erstellen, Gerät attributiesieren
```

## Adapt the Rule Chain

- In Thingsboard UI go to Rule Chains section and open Root Rule Chain.
![Temperature Validation Node](/img/tb/1.png)

- Familiarise yourself with the rule chain. Focus only on the red area. Incoming messages are distributed via the switch. If a message contains telemetry data, it is stored. We now want to check the stored data
![Temperature Validation Node](/img/tb/2.png)

- Create a new script via drag and drop. Enter a name and adapt the function as shown. Click on "Add".
![Temperature Validation Node](/img/tb/3.png)

	return msg.temperature < 35;
	
- Connect the "Save Timeseries" module with our script. You can connect the modules by dragging and dropping. Select the label "Success" and click on "Add"
![Temperature Validation Node](/img/tb/4.png)![Temperature Validation Node](/img/tb/5.png) ![Temperature Validation Node](/img/tb/6.png)

- Create a "Create Alarm" block that triggers the alarm. Enter a name. The default code does not need to be changed
![Temperature Validation Node](/img/tb/7.png)

- Create a "Clear Alarm" block that resolves the alarm. Enter a name. The default code does not need to be changed
![Temperature Validation Node](/img/tb/8.png)

- Connect the new alarm modules to the Temperature Check. To do this, create two connections via drag and drop, as you have already done. Make sure that the conditions "False" and "True" are set as shown in the screenshot.
![Temperature Validation Node](/img/tb/9.png)

- **Very Important:** Click on the "Apply Changes" Button at the bottom right to save all changes.
![Temperature Validation Node](/img/tb/10.png)

## Build a Dashboard

- After customising the rule chain, we build a dashboard to visualise the alarms. Navigate to the section "Dashboard groups" and "All". At the top right you will find the "+" to create a new dashboard. Enter name and description
![Temperature Validation Node](/img/tb/11.png)

- Open the newly created dashboard
![Temperature Validation Node](/img/tb/12.png)

- Click on the Edit icon at the bottom right to add a new widget
![Temperature Validation Node](/img/tb/13.png)

### Temperature Display
- The first thing we want to do is create a temperature display. Select the widget type "Cards" for this.
![Temperature Validation Node](/img/tb/14.png)

- Choose Simple Card
![Temperature Validation Node](/img/tb/15.png)

- Thingsboard uses aliases as data source. Therefore, for the first widget we need to create an alias. To do this, click on "Create a new one!"
![Temperature Validation Node](/img/tb/16.png)

- Enter the alias information shown in the screenshot below
![Temperature Validation Node](/img/tb/17.png)

- Now you can choose the newly created alias as data source. Choose "temperature" as attribute. Click "Add". 
Congratulations, you have created your first widget.
Hint: If you can't find the attribute temperature, the test device hasn't sent data yet. 
![Temperature Validation Node](/img/tb/18.png)

### Temperature Graph

![Temperature Validation Node](/img/tb/19.png)
![Temperature Validation Node](/img/tb/20.png)
![Temperature Validation Node](/img/tb/21.png)
![Temperature Validation Node](/img/tb/22.png)
![Temperature Validation Node](/img/tb/23.png)
![Temperature Validation Node](/img/tb/24.png)
![Temperature Validation Node](/img/tb/25.png)
![Temperature Validation Node](/img/tb/26.png)











![Temperature Validation Node](/img/tb/initial-root-chain.png)

- Drag and Drop Script Filter rule node to the chain. Node configuration window will be opened. We will use this script for data validation:

		return typeof msg.temperature === 'undefined' 
			|| (msg.temperature >= -40 && msg.temperature <= 80);

![Script Config](/img/tb/script-config.png)

- If temperature property not defined or temperature is valid - script will return True, otherwise it will return False. If script returns True incoming message will be routed to the next nodes that are connected with True relation.

- Now we want that all telemetry requests pass through this validation script. We need to remove the existing Post Telemetry relation between Message Type Switch node and Save Telemetry node:

![Script Config](/img/tb/remove-relation.png)


- In our newer Thingsboard version, the element "SaveTS" will be named "Save Timeseries"

- And connect Message Type Switch node with Script Filter node using Post Telemetry relation:

![Script Config](/img/tb/relation-window.png)

![Script Config](/img/tb/connect-script.png)

- Next, we need to connect Script Filter node with Save Telemetry node using True relation. So all valid telemetry will be saved:

![Script Config](/img/tb/script-to-save.png)

- Also, we will connect Script Filter node with Log Other node using False relation. So that all not valid telemetry will be logged in the system log:

![Script Config](/img/tb/false-log.png)

- Press Save button to apply changes.

## Validate results

```
Dieser Abschnitt muss angepasst werden, je nachdem was wir für Daten senden. 
Die Testmethode muss auf jedenfall geändert werden
```

- For validating results we will need to create Device and submit telemetry to the Thingsboard. So go to Devices section and create new Device:

![Script Config](/img/tb/create-device.png)

- For posting device telemetry we will use Rest API. To do this this we will need to copy device access token from the device Thermostat Home.

![Script Config](/img/tb/copy-access-token.png)

- Lets post temperature = 99. We will see that telemetry was not added in Device Latest Telemetry section:


	curl -v -X POST -d "{\"temperature\": 99}" https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
	*you need to replace $ACCESS_TOKEN with actual device token

![Script Config](/img/tb/empty-telemetry.png)

- Lets post temperature = 24. We will see that telemetry was saved successfully.


	curl -v -X POST -d "{\"temperature\": 24}" https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"


- For windows users: Do not use Windows Powershell , use the default command line instead. Otherwise, the request with the telemetry data will not be send to Thingsboard


![Script Config](/img/tb/saved-ok.png)