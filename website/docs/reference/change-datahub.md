---
sidebar_position: 4
sidebar_label: "Change Data Hub"
title: Change Data Hub
---

It is possible to change the Data Hub on a fully provisioned device. This means, you can now send the device telemetry data to a new cloud, without resetting the device. 

For example, the device is first configured to send telemetry data to Thingsboard cloud. You want the device to switch to AWS cloud, while the device continues to be operational. Create a new Data Hub for AWS cloud, and change the device configurations to switch to the AWS. 

## How to Change Data Hub?
To change the Data Hub, follow the steps below. 

1. Create a new Data Hub for the required cloud service.

    <!-- Create a [Thingsboard](docs/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA.md) Data Hub by following these steps.

    Create an [Azure](docs/tutorial/Azure%20-%20Telemetric%20Rules/KEYNOA.md) Data Hub by following these steps.

    Create an [AWS](docs/tutorial/AWS/KEYNOA.md) Data Hub by following these steps. -->

    Create a [Thingsboard](docs/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA.md), or an [Azure](docs/tutorial/Azure%20-%20Telemetric%20Rules/KEYNOA.md), or an [AWS](docs/tutorial/AWS/KEYNOA.md) Data Hub by following their respective steps.

<!-- ![KEYNOA](/img/KEYNOA/Thingsboard/DatahubProvisionKey.png)

![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details-2.png)

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png) -->

2. Login to KEYNOA. Choose the device for which the Data Hub needs to be changed. Click on the device settings.

![KEYNOA](/img/KEYNOA/change-datahub-device-settings.png)


3. Select the newly created Data Hub and save the settings. Wait for a minimum of 2 minutes.

![KEYNOA](/img/KEYNOA/change-datahub-select-new.png)

4. You will be prompted with a note when the change is successfully implemented.

![KEYNOA](/img/KEYNOA/change-datahub-click.png)

5. The Data Hub is changed on the fly. The device will start sending telemetry data to the new IoT cloud automatically. This enables you to move the device from one IoT cloud service to another seamlessly.


:::info
Data Hub hot swap is supported from  0.7.0 release onwards. 

Please refer **[Update KEYNOA.engine](docs/reference/update-keynoa.engine.md)** for more information.
:::