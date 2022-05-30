---
sidebar_position: 2
---

# Execution


## Initial Situation

You are the IoT manager of a milk and dairy products factory. 
As certain products have to always be cooled, it is essential for the entire operation to detect failures of the cooling systems in a timely manner. 
To do this, they use connected IoT sensors at all storage points. 

In order to detect failures directly, you now use the Thingsboard Rule Chain. 
The aim of this tutorial is to define a rule that immediately detects failures of a cooling system. 


## Provision the IoT Sensor with KEYNOA

```
Hier muss der Onboarding Prozess beschrieben werden
Cloud Configuration, Template erstellen, Gerät attributiesieren
```

## Create a Rule Chain

- Adding temperature validation node.
In Thingsboard UI go to Rule Chains section and open Root Rule Chain.

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


	curl -v -X POST -d '{"temperature":99}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
	*you need to replace $ACCESS_TOKEN with actual device token

![Script Config](/img/tb/empty-telemetry.png)

- Lets post temperature = 24. We will see that telemetry was saved successfully.


	curl -v -X POST -d '{"temperature":24}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"


- For windows users: Do not use Windows Powershell , use the default command line instead. Otherwise, the request with the telemetry data will not be send to Thingsboard


![Script Config](/img/tb/saved-ok.png)