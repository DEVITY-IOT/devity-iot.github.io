---
sidebar_position: 4
sidebar_label: "Cloud Subscription Limits"
title: Cloud Subscription Limits
---

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
