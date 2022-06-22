---
sidebar_position: 1
slug: /
---

# Introduction

## Goal

This tutorial will guide you through the DEVITY device onboarding process.
It will work on Linux machines compatible with x86, armv7, or aarch64 architecture.
We will assume your workstation to be the device you want to onboard.
Alternatively you can use a Raspberry Pi or similar devices to your convenience.
During the tutorial you will download executables that will run within your userspace.
After the onboarding is complete you can run a MQTT client.
It connects to a MQTT broker we make available.
Then it authenticates via certificates that are generated during the onboarding process.

## Overview

Device onboarding process describes the process of configurating and putting secrets onto a device.
These are then used to interact with IoT platforms and send data securely.
Current state of the art is that the onboarding process of devices is done manually by a technician.
The DEVITY onboarding process is seperated into three main steps.
- Preprovisioning
- Shipment of the device and configuration of the device
- Installation in the shopfloor

The preprovisioning step is done during the manufacturing process of the device.
It consists of generating the device identity and placing the DEVITY software on the device.
Additionally, the device is registrated at our services.
After that, the device can be sold and shiped to the customer.
During shipment the customer can use our webapp to configure the device to his likings.
When it arrives and gets "unboxed" and started up for the first time our software conntects to our services.
Then it receives the previsiosly estabiled configuration data.
With that the DEVITY device onboarding process is complete.

## Approach

Here we assume that the device has already been preprovisioned during the manufacturing process.
This includes device identity generation and registration of the device with our services.
During the onboarding process the device will connect to these services to recieve its configuration.  

To run the onboarding process you will be guided through these three simple steps.
- Setup
    - Download and place our preprovisioned software package on our device
- Configuration
    - Configure the device to run the example program
- Execution
    - Complete the DEVITY onboarding process and run an example MQTT client

Now start with the onboarding process.

## Further questions

In case of any questions with this tutorial or general questions contact us (info@devity.eu).
