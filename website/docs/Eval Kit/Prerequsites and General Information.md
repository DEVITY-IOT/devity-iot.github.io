---
sidebar_position: 1
---
The following prerequisites are needed to start the tutorial series:
- KEYNOA Eval Kit device is ready for operation and has access to the internet (see device details (//link einfügen)).
- Access to KEYNOA Cloud (see instructions (//link einfügen)).
- Access to Thingsboard, Azure, and AWS (see instructions (//link einfügen)).
- You have received the device voucher.

## Subscription Limits 
Please note that there is a subscription limit for Azure IoT Central and AWS IoT Core. We provide you with a 5€ limited subscrition for free, where access to the device will be cut if the limit is exceeded. Do not worry to much about that here is an example calculation (see below) that show letting the Eval Kit run for the full month with default settings, of one message every 10 seconds, does not come close to that limit.

### Thingsboard
For the Eval Kit you have unlimited data usage in Thingsboard. [Here](https://thingsboard.io/pricing/) you can learn more about the pricing models of Thingsboard.

### Azure
    You have 1 device that is free with the subscribtion sending one message every 10 seconds.
    Total number of messages            259200
    Number of free messages             60000
    Number of paid messages             199200
    Message cost rate                   0,016€/1000 messages
    Message cost to IoT Hub             3,1872€

    For a total cost of 3,1872€.

The pricing models for Azure can be found [here](https://azure.microsoft.com/de-de/pricing/details/iot-central/).

### AWS
    For one device connected 24/7 to AWS SiteWise Portal with default settings of one message every 10 seconds:
    Total number of messages            259200
    Connection cost to AWS Core         0,3 cent
    Message cost to AWS Core            25 cent
    Rule cost in AWS Core               38 cent
    Action cost in AWS Core             38 cent
    Message cost to AWS SiteWise        31 cent
    Data process cost in AWS SiteWise   15 cent
    Data storage cost in AWS SiteWise   neglectable
    
    For a total cost of 1,47€.

The pricing model for AWS can be found [here](https://aws.amazon.com/iot-core/pricing/).

## Access to KEYNOA
You will get the access to your own KEYNOA Tenant via email. Please use the link to set a new password and login to KEYNOA.

## Access to Thingsboard, Azure, and AWS
DEVITY has prepared accounts for Thingsboard, Azure, and AWS to make the start as easy as possible for you. Your access to will be provided by the KEYNOA Credential Manager in your KEYNOA Cloud.
1. Just click on the lock icon in the header. 

![Prerequisite](/img/Prerequisite/Credential-Manager-1.png)

2. The KEYNOA Credential Manager will show you all information needed.
Please use the following links to get to the login website of the respective cloud:
- [Thingsboard Login](https://thingsboard.cloud/login)
- [Azure IoT Central Login](https://apps.azureiotcentral.com/home)
- [AWS IoT Core Login](https://aws.amazon.com/de/iot-core/)

![Prerequisite](/img/Prerequisite/Credential-Manager-2.png)

## Device Voucher
You will receive the device voucher via e-mail from DEVITY. With this voucher you can register the device to the KEYNOA enrollment service and start configuring the device. Please store the file securely and do not share it with anyone. 

## Reset device

For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Strg+Alt+F1 and type in 
    
    ./reset.sh

After that the device reboots and the new onboarding process starts.

