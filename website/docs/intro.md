---
sidebar_position: 1
sidebar_label: "KEYNOA"
title: KEYNOA
slug: /
---

## Overview
KEYNOA is a software to securely connect devices to any cloud or on-premises data platform on massive scale in industrial use cases. 

It consists of two components: KEYONA Engine and KEYNOA.
- KEYNOA Engine is a software client (SDK) for devices. It is responsible for issuing a unique identity to every device. It also queries KEYNOA instances to initiate an automatic provisioning process.
- KEYNOA is responsible for transferring device identities, configuring and onboarding groups of devices and managing devices during the life cycle. It consists of a web application, backend software, enrollment service, middleware, and API.

KEYNOA empowers you to:

- Centrally, configure and manage all devices before physical installation everywhere in the world. You can decide very late - just until the physical installation - which operation purpose the devices should have.
- Onboard devices to various on-premises data platforms, IoT clouds such as AWS, Azure, ThingsBoard, Cumulocity, and SCADA systems on scale.
- Use secure enrollment protocols to install applications and services to device fleets.
- Create end-to-end encrypted, authenticated und trustworthy communication channels.
- Generate unique provable identities and store private keys in safe vaults (internal/ external hardware or cloud key management systems).
- Identifiy, authenticate and autorize devices with unique identities as required in IEC 62443, NIS 2, and Cyber Resiliance Act. 
- Use our untrusted installer approach for trustworthy installations since nstaller no longer need – nor do they have access to – any sensitive infrastructure/access control information to add a device to a network.
- Let the installation be carried out by people of any level of experience quickly and efficiently since it is highly automated.
- Operate project specific and scalable Certificate Authorities to issue short-lived, easy to revoke certificates (x.509).
- Rotate and revoke keys and credentials – at scale, across fleets.
- Protect devices and data from unauthorized access with a build in user and access management system.
- Roll out updates with new functionality or security patches.

You will find more information about KEYNOA on our [website](https://devity.eu/how-it-works/). 

## KEYNOA - How it works!

<!-- 
Note: 
This section has been written in tandem with the information at https://devity.eu/how-it-works/, so that there is consistency in information. 
-->

The illustration below gives a gist of how zero-touch secure onboarding of your IoT device(s) is carried out by the KEYNOA Engine and KEYNOA together. 

![KEYNOA](/img/KEYNOA/Overview.png)

1. IoT Device Manufacturer produces device with unique identity, and sends the device to its owner.
2. The Manufacturer creates a proof of ownership (Ownership Voucher), and transfers it to the owner using KENYOA.  
3. The owner uploads the voucher to KEYNOA, and creates required configurations, like,
    - Data Hub,
    - Template,
    - Certificate Authority (optional),
    - Trust Anchor (optional)
4. A person who does not have to be trustworthy installs and starts the device.
5. The device reports its identity to KEYNOA.
6. KEYNOA authenticates the device and authorizes the exchange of information over a secure channel.
7. The device downloads secrets and files from KEYNOA over the secure channel. It then performs automatic, zero-touch configurations according to the specifications mentioned above. Within seconds, your device is securely provisioned, and automatically monitored. 

The device is now ready to send telemetry data to its cloud counterpart securely over a secure channel.


This documentation guides you step-by-step through the whole process from device preparation to cloud connection until data visulization. You can start the tutorials with our KEYNOA Eval Kit [here](https://devity-iot.github.io/tutorial/).

## KEYNOA Eval Kit 

The KEYNOA Eval Kit is desgined for users that want to get a first idea on how to use IoT clouds to process data. It gives you the opportunity to get a feeling of how easy it is to onboard a device to three different clouds and building your own IoT use cases from scratch by sending real-time data. You will learn how to use AWS, Azure and ThingsBoard clouds to visualize data and defining rules for your own IoT application. Moreover, you gain an impression of how you can use KEYNOA to build your own scalable IoT product or provide your customers the flexible and secure connection technology they need. You can also setup your own MQTT Broker and receieve or send data to devices.

The KEYNOA Eval Kit consists of an Industrial Embedded Controller (based on Raspberry Pi 3+) from our partner [Janz Tec](https://www.janztec.com/en/) with a pre-installed KEYNOA Engine. [Here](https://www.janztec.com/sicherheit-im-maschinenbau/) you can order a Eval Kit. 

<!-- 
### How to get a KEYNOA Eval Kit?
If you haven not tried KEYNOA yet, you can order a device from our partner JanzTec and test KEYNOA for 4 weeks [here](https://www.janztec.com/sicherheit-im-maschinenbau/).
-->

### Haven't tried KEYNOA yet?
[Order](https://www.janztec.com/sicherheit-im-maschinenbau/) a device from our partner JanzTec and test KEYNOA for 4 weeks!

## About DEVITY

Making IT security easy for every user of the Industrial IoT - that's what drives us.

We want industrial companies to be able to use the latest technologies without having to worry about cyberattacks and complicated or expensive installation costs. Based on the team members' research we started to work on KEYNOA in 2019. As experts and enthusiast in cyber security, cryptography, and IoT technologies, we developed KEYNOA always in line with newest standards, regulations, and principles. 

To learn more about DEVITY please visit our [website](https://devity.eu). To be always up-to-date follow us on [LinkedIn](https://de.linkedin.com/company/devity) or subscribe to our newsletter.

## Support

We just launched this documentation site recently. Updates will come fast and furious.

In the meantime we are here to help you to set up your own IoT use case. If you need help, please reach out to us via e-mail (support@devity.eu) and our team will help you.
