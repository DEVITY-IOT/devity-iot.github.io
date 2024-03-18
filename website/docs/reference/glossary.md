---
sidebar_position: 12
sidebar_label: "Glossary"
title: Glossary
---

This page provides an overview of key terms used throughout this tutorial.

| Term                  | Explanation                                                                                    |
| -----------------     | ---------------------------------------------------------------------------------------------- |
| KEYNOA                | Middleware and backend software for certificate management, configuration management and zero-touch onboarding. It can be on cloud or on-premise.          |
| KEYNOA Engine         | The Client SDK installed on the device, to communicate to KEYNOA.                              |
| Cloud				    | Any cloud (service) with the capability to receive data from the device, over MQTT or OPC UA. For example - AWS, Azure, or Thingsboard.    |
| Data Hub		        | A KEYNOA component designed to choose the cloud or data platform, and to collect a messenger (like MQTT) information. It will be sent to the device during onboarding.                                                                                 |
| Template              | A KEYNOA component, which chooses the device(s) to link to a specific Data Hub.                 |
| Certificate Authority | A KEYNOA component, which issues valid certificates to the applications running on the device. |
| Trust Anchor		    | An External CA, which issues valid certificates to applications operating in cloud, such as applications running on AWS, Azure, or Thingsboard.  |
| Ownership (Voucher)	| A unique proof of ownership generated by the manufacturer for each device..                    |
| Identity              | A unique device identity, also known as a UID (Unique Identifier).                             |
| (X.509) Certificate    | A digital document that verifies the identity of an application running on the device.         |
| MQTT		            | A messaging protocol, used to transfer device data to cloud over internet.                     |
| OPC UA				| A machine-to-machine communication protocol for industrial automation.                         |