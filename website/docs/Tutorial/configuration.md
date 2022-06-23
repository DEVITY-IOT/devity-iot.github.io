---
sidebar_position: 2
---

# Configuration

In this part you will configure the specifications that will be put onto the device.

Visit the **[configuration page](https://develop.carl.devity.eu)**.

**From here we need to include screenshots with guidence throught the process. This is currently under construction until 0.5.0 is rolled out.** 

## Generate Templates

### Cloud Template


Start the configuration process by creating a new Cloud template.
It is used to tell the MQTT client the cloud endpoint it is connecting to.
Click on the "CREATE" button in the top right corner and select "Cloud Configuration".
![Cloud Template](./assets/CloudTemplate.png)
Click on "Thingsboard" in the middle.
Fill with the following settings:

- Connector name: my new connector
- Thingsboard
- Broker URL: ssl://demo.mqtt.devity.eu
- Topic: demo_messages
- Timeout: 10000
- Certificate authority: demo CA

Submit with "CREATE".

### MQTT Template

After the cloud template is create you can use it to specify that your device recieves that configuration.
To do so, create a MQTT template by  clicking on the "CREATE" button again and select "MQTT Template".
![MQTT Template](./assets/MQTTTemplate.png)
Select "Cloud Endpoint" to be "my new connector".
Click "NEXT" and fill in these two device properties:
- Device Model: eval-kit

![MQTT Template](./assets/DeviceModel.png)

After this give the template a name and click on "Finish".

Now proceed to the Execution to finish the onboarding process.