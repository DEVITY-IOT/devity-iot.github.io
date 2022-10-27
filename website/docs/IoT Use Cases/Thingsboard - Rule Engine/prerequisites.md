---
sidebar_position: 1
---

# Prerequisites and information

## Prerequisites

- You have received the DEVITY Eval Kit including the DEVITY Gateway hardware.
- You have received the access to Thingsboard.

## What is the Thingsboard Rule Engine

The Rule Engine is an easy to use framework for building event-based workflows. There are 3 main components:

- Message - any incoming event. It can be an incoming data point from devices, device life-cycle event, REST API event, RPC request, etc.
- Rule Node - a function that is executed on an incoming message. There are many different Node types that can filter, transform or execute some action on incoming Messages.
- Rule Chain - nodes are connected with each other with relations, so the outbound message from rule node is sent to next connected rule nodes.

Thingsboard Rule Engine is a highly customizable framework for complex event processing. Here are some common use cases that one can configure via Thingsboard Rule Chains:

- Data validation and modification for incoming telemetry or attributes before saving to the database.
- Copy telemetry or attributes from devices to related assets so you can aggregate telemetry. For example data from multiple devices can be aggregated in related asset.
- Create/Update/Clear alarms based on defined conditions.
- Trigger actions based on device life-cycle events. For example, create alerts if a device is Online/Offline.
- Load additional data required for processing. For example, load temperature threshold value for a device that is defined in device’s customer or tenant attribute.
- Trigger REST API calls to external systems.
- Send emails when complex event occurs and use attributes of other entities inside email template.
- Take into account user preferences during event processing.
- Make RPC calls based on defined condition.
- Integrate with external pipelines like Kafka, Spark, AWS services, etc.

Proceed with the execution to start the tutorial.