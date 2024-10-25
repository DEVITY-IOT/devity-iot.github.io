---
sidebar_position: 4
sidebar_label: "Cloud Subscription Limits"
title: Cloud Subscription Limits
---

## Subscription Limits 
Please note that there is a subscription limit for Azure IoT Central and AWS IoT Core. We provide you a 5 € limited subscription for free, where access to the device will be cut if the limit is exceeded. Hence, do not let the device run unsupervised for an extendeed period of time. Please see below a sample calculation for the respective cloud.

### ThingsBoard
For the Eval Kit you have unlimited data usage in ThingsBoard. [Here](https://thingsboard.io/pricing/) you can learn more about the pricing models of ThingsBoard.

### Azure IoT Central
    You have 1 device that is free with the subscribtion sending one message every 10 seconds.
    Total number of messages            259200
    Number of free messages             60000
    Number of paid messages             199200
    Message cost rate                   0,016€/1000 messages
    Message cost to IoT Hub             3,1872€

    For a total cost of 3,1872€.

The pricing models for Azure IoT Central can be found [here](https://azure.microsoft.com/de-de/pricing/details/iot-central/).

### AWS IoT Core
    For one device connected 24/7 to AWS IoT Core with default settings of one message every 10 seconds:
    Total number of messages            259200
    Connection cost to AWS Core         0,3 cent
    Message cost to AWS Core            25 cent
    Rule cost in AWS Core               38 cent
    Action cost in AWS Core             38 cent
    Message cost to AWS SiteWise        31 cent
    Data process cost in AWS SiteWise   15 cent
    Data storage cost in AWS SiteWise   neglectable
    
    For a total cost of 1,47€.

The pricing model for AWS IoT Core can be found [here](https://aws.amazon.com/iot-core/pricing/).
