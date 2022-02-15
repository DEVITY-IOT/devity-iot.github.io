---
sidebar_position: 2
---

# Configuration

In this part you will configure the specifications that will be put onto the device.

Visit the **[configuration page](https://develop.ava.devity.eu)**.

**From here we need to include screenshots with guidence throught the process. This is currently under construction until 0.4.0 is rolled out.** 

Start the configuration process by creating a need Cloud template.
It is used to tell the MQTT client the cloud endpoint it is connecting to.
Click on the "CREATE" button in the top right corner and select "Cloud Template".
Click on "Custom MQTT Broker" on the right.
Fill with the following settings:

- Connector name: your_connector_name
- Broker URL: ssl://demo.mqtt.devity.eu
- Topic: demo_messages
- Timeout: 10000
- Certificate authority: demo_CA

Submit with "CREATE".

After the cloud template is create you can use it to specify that your device recieves that configuration.
To do so, create a MQTT template by  clicking on the "CREATE" button again and select "MQTT Template".
Select "Cloud Endpoint" to be "your_connector_name".
Click "NEXT" and fill in these two device properties:
- Device Model: devity_demo
- Device Serial No: Take from download file name

Now proceed to the Execution to finish the onboarding process.