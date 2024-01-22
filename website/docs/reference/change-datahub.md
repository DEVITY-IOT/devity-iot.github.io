---
sidebar_position: 4
sidebar_label: "Change Data Hub"
title: Change Data Hub
---

It is possible to hot swap the Data hub on a fully provisioned device. To do so, follow the below steps. 

1. Create a new Data Hub for required cloud service.

    <!-- Create a [Thingsboard](docs/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA.md) Data Hub by following these steps.

    Create an [Azure](docs/tutorial/Azure%20-%20Telemetric%20Rules/KEYNOA.md) Data Hub by following these steps.

    Create an [AWS](docs/tutorial/AWS/KEYNOA.md) Data Hub by following these steps. -->

    Create a [Thingsboard](docs/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA.md), or an [Azure](docs/tutorial/Azure%20-%20Telemetric%20Rules/KEYNOA.md), or an [AWS](docs/tutorial/AWS/KEYNOA.md) Data Hub by following their respective steps.

<!-- ![KEYNOA](/img/KEYNOA/Thingsboard/DatahubProvisionKey.png)

![KEYNOA](/img/KEYNOA/IoT-Central/Data-Hub-details-2.png)

![KEYNOA](/img/KEYNOA/AWS/Data-Hub-details-2.png) -->

2. Login to KEYNOA cloud. Choose the device for which the Data Hub needs to be changed. Click on the device settings.

![KEYNOA](/img/KEYNOA/change-datahub-device-settings.png)


3. Select the newly created Data Hub and save the settings. Wait for a minimum of 2 minutes.

![KEYNOA](/img/KEYNOA/change-datahub-select-new.png)

4. You will be prompted with a note when the change is successfully implemented.

![KEYNOA](/img/KEYNOA/change-datahub-click.png)

5. The Data Hub is changed on the fly. The device will start sending telemetry data to the new cloud service automatically. This enables you to move the device from one cloud service to another seamlessly.


:::info
Data hub hot swap is supported from  0.7.0 release onwards. 

Please refer [Update KEYNOA.engine](/website/docs/reference/update-keynoa.engine.md) for more information.
:::