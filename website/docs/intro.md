---
sidebar_position: 1
slug: /
---

# Introduction

## Status

This tutorial will guide you through the DEVITY device onboarding process.
It will work on Linux machines compatible with x86 or armv7 architecture.
We will assume your workstation to be the device you want to onboard.
Alternatively you can use a Raspberry Pi or similar devices to your convenience.
During the tutorial you will download executables that will run within your userspace.
After the onboarding is complete you can run a MQTT client.
It connects to a MQTT broker we make available.
Then it authenticates via certificates that are generated during the onboarding process.

## Approach

Here we assume that the device has already been preprovisioned during the manufacturing process.
This includes device identity generation and registration of the device with our services.
During the onboarding process the device will connect to these services to recieve its configuration.  

To run the onboarding process you will be guided through these three simple steps.
- Setup
    - Download and place our software on your device
- Configuration
    - Configure the device to your needs
- Execution
    - Complete the DEVITY onboarding process and run an example MQTT client

Now start with the onboarding process.

## Further questions

In case of any questions with this tutorial or general questions contact us (info@devity.eu).
