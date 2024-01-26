---
# sidebar_position: 5
sidebar_label: "Trust Anchor"
title: Trust Anchor
---

A Trust Anchor, often represented by a Root CA, is responsible for issuing valid TLS certificates to cloud applications. Prominently, a Trust Anchor is considered to be a distinct certificate that symbolizes the highest level of trust within a PKI system.

## Role of Trust Anchor in KEYNOA Cloud

An IoT device must host an application to run an appropriate messaging protocol, like MQTT or OPCUA. This application needs to connect **securely** to a cloud service to exchange the data. An example where the IoT device securely connects to the Thingsboard Cloud Service is depicted in Figure 1.

The security aspect is ensured by exchanging valid certificates by both parties. When the IoT device receives the cloud service application certificate, it needs to validate the certificate for its reliability and authenticity. The device can validate only when it has the Trust Anchor certificate installed beforehand. The Data Hub ensures that the Trust Anchor certificate is shared with the IoT device before it tries to establish a secure channel with its counterpart. 

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/Trust-Anchor-concept.png)

## Create a Trust Anchor

To create a new Trust Anchor, follow the steps below.   

1. Click on 'Create' and select 'Trust Anchor' to start creating a new Trust Anchor.

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/1-Start-Creating-TA.png)

2. The Trust Anchor Certificate should be saved on your computer disk before you begin with this step. Choose an appropriate Trust Anchor Certificate from your disk (usually a .pem file) and click on 'Upload'.

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/2-Choose-Upload-TA.png)

3. When the certificate is successfully uploaded, a message is displayed. This indicates that the Trust Anchor is now available while creating the Data Hub and/or Template. 

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/3-Upload-Successful.png)

:::info
Trust Anchor details for the Azure IoT Central and AWS cloud services is pre-configured in the KEYNOA, and it is automatically accessed while creating the respective Data hub. 
:::