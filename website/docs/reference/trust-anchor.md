---
sidebar_position: 8
sidebar_label: "Trust Anchor"
title: Trust Anchor
---

A Trust Anchor, often represented by a Root CA, is responsible for issuing valid TLS certificates to a cloud. Prominently, a Trust Anchor is considered to be a distinct certificate that symbolizes the highest level of trust within a PKI system.

## Role of Trust Anchor in KEYNOA

A device must host an application to run an appropriate messaging protocol, like MQTT or OPC UA. This application needs to connect **securely** to a cloud to exchange data. An example where the device securely connects to the Thingsboard cloud is depicted in Figure 1 below.

The security aspect is ensured by exchanging valid certificates by both parties. When the device receives the cloud application certificate, it needs to validate the certificate for its reliability and authenticity. The device can validate only when it has the Trust Anchor certificate installed beforehand. 

The Data Hub ensures that the Trust Anchor certificate is shared with the device before it tries to establish a secure channel with its counterpart. 

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/Trust-Anchor-concept.png)

1. KEYNOA CA issues a valid certificate to the device application running the messaging protocol.
2. Thingsboard Trust Anchor issues a valid certificate to the application running in cloud, which receives data from device. 
To establish a secure channel between the device and the cloud, both should be able to validate each other's certificates. 
3. KEYNOA shares the  KEYNOA CA certificate with the cloud.
4. KEYNOA shares the Thingboard Trust Anchor certificate with the device.
5. Both device and the cloud share their application certificate with each other. The device can now validate cloud application certificate using the Trust Anchor certificate it already have. Similarly, the cloud can validate the device application certificate using the KEYNOA CA certificate. 
6. A secure channel is established. The device  begins to transmit data to the cloud over secure channel.  



## Add a Trust Anchor

To add a new Trust Anchor to KEYNOA, follow the steps below.   

1. Click on 'Create' and select 'Trust Anchor' to start adding a new Trust Anchor.

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/1-Start-Creating-TA.png)

2. The Trust Anchor certificate (or, a chain of certifiates) should be available to be uploaded before you begin with this step. Choose an appropriate Trust Anchor certificate (usually a .pem file) and click on 'Upload'.

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/2-Choose-Upload-TA.png)

3. When the certificate (or, a chain of certificates) is successfully uploaded, a message (as highlighted in green in the picture below) is displayed. This indicates that the Trust Anchor is now available while creating the Data Hub and/or Template. 

:::note
If you wish to upload a chain of certificates, a single chain can serve as the Trust Anchor.
:::

![KEYNOA](/img/KEYNOA/reference-doc/Trust-anchor/3-Upload-Successful.png)

:::info
Trust Anchor for Azure IoT Central and AWS clouds are pre-configured in KEYNOA, and hence, tit is not required to follow the above steps.
:::

