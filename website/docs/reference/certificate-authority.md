---
sidebar_position: 8
sidebar_label: "Certificate Authority"
title: Certificate Authority
---

A Certificate Authority (CA) validates the identity of an entity, and binds it to cryptographic keys by issuing a valid digital  certificate. The entity can make use of its certificate to securely connect to other entities. 

## Why You Need a CA?

Every IoT device powered by KEYNOA client SDK hosts multiple applications. These can be considered as entities. They play a crucial role in zero-touch secure onboarding of the device. The security aspect of onboarding is ensured through the use of PKI certificates. It is thus crucial that the device applications are issued certificates by a reliable, and trustworthy Certificate Authority. 

![KEYNOA](/img/KEYNOA/reference-doc/CA-1.png)

## How to Select a CA?

A valid CA can be chosen while creating either a Data Hub (for MQTT), or a Template (for OPCUA) in the KEYNOA cloud.


![KEYNOA](/img/KEYNOA/reference-doc/Select-CA_DataHub.png)

![KEYNOA](/img/KEYNOA/reference-doc/select-CA-template.png)

If there is no CA listed in the drop-down list, it is possible to create a new one. It is possible to define specific attribute values while creating the CA. During the CA creation process, you can specify attribute values, allowing you control over various parameters such as 'Organization,' 'Key Usage,' 'Key Algorithm,' 'TTL,' and more. 

This newly created CA will be visible in the drop-down menu when creating a Data Hub or Template. Select it to effectively issue application certificates.

![KEYNOA](/img/KEYNOA/reference-doc/CA-issuer_values.png)

## Internal CA

A private CA can also be called as an Internal CA. It operates within the organization's infrastructure. It behaves like any other CA, by validating the identities of the device applications, and issueing them valid certificates. You can have full control over the CA policies and certificates. This might incur lower costs and better privacy within internal system. 

![KEYNOA](/img/KEYNOA/reference-doc/internal-external-CA.png)

## External CA

An external CA is the one issuing certificates over internet, and recognized worldwide. It is thus not local to any organization. It simplifies the certificate management, and is widely trusted. 






