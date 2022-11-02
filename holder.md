### Create Device Template
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
- During the onboarding process the 


### Create Device Group
- Next we can create a new device group. To do this, navigate to the "Device Groups" section and click on "New". Give the group a name and select the template we created. To test the filter click on "Run query". You should now see the IoT sensor we just assigned to the template.
![DevityHub](/img/az/9.png)
