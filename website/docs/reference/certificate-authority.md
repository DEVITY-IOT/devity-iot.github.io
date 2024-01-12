---
sidebar_position: 8
sidebar_label: "Certificate Authority"
title: Certificate Authority
---

A Certificate Authority (CA) validates the identity of an entity, and binds it to cryptographic keys by issuing a valid digital  certificate. The entity can make use of its certificate to securely connect to other entities. 

## Why a CA is Necessary?

Every IoT device powered by KEYNOA client SDK hosts multiple applications. These can be considered as entities. They play a crucial role in zero-touch secure onboarding of the device. The security aspect of onboarding is ensured by the PKI certificates. It is thus crucial that the device applications are issued certificates by a reliable, and trustworthy Certificate Authority. 

![KEYNOA](/img/KEYNOA/reference-doc/CA-1.png)

It is possible to create a new CA specific to your security requirements. You could create a 
- [Internal CA](#internal-ca) local to KEYNOA cloud.
- An Intermediate CA signed by your  [External CA](#external-ca)
- Or, employ one recommended by DEVITY as the default option.

A maximum of fibe new CAs can be created.

## Internal CA

This CA is local to KEYNOA. It behaves like any other CA, by validating the identities of the device applications, and issueing them valid certificates. You can have full control over the CA policies and certificates. Follow the steps below to create a KEYNOA CA.

1. Click on 'Create' button and select 'Certificate Authority' to begin.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/1-KEYNOA-CA-Start-Create-CA.png)

<!-- 2. Choose your expertise level as 'Beginner' or 'Expert'. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/2-KEYNOA-CA-Expertise-Level.png) -->

2. Choose 'Internal CA'. Give a unique CA name to identify it later. Click 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/3-KEYNOA-CA-Choose-CA-Type.png)

3. Internal CA properties can be set here. The 'Root  CA TTL', 'Intermediate CA TTL' based on the usecase. The chosen 'Algorithm' is used to generate the key pair used to sign the application certificates.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/4-KEYNOA-CA-Set-CA-Properties.png)

4. 'Certificate Policies' template is used to set the fields of application certificate. 

    The CA will issue a certificate with these fields. The 'Common Name' and 'Serial Number' are suggested to set to `$(serial)` - the serial number of the device. 
    
    Set the field values for 'Key Usage', 'Extended Key Usage', 'Key Algorithm', 'Signature Algorithm' based on the security requirements. Click 'Submit'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/5-KEYNOA-CA-Set-Cert-Policies.png)

5. The Internal CA is created successfully. It can be downloaded for any other purpose. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/6-KEYNOA-CA-KEYNOA-CA-Finish.png)

6. The newly created Internal CA is now listed as a valid 'Certificate Authority'. Click on the hamburg menu, to manage this CA. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/7-KEYNOA-CA-New-CA-Listed.png)

7. The newly created CA will show up in the 'Certificate Authority' drop-down menu, while creating the Data Hub. When chosen, this CA will issue MQTT application certificate.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/8-KEYNOA-CA-Use-New-CA-Data-Hub.png)

8. The newly created CA will show up in the 'Certificate Authority' drop-down menu, while creating the OPCUA Template. When chosen, this CA will issue OPCUA application certificate.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/9-KEYNOA-CA-Use-New-CA-Template.png)


<!-- [Go to Top](#why-a-ca-is-necessary) -->

## External CA

An external CA operates independently from the KEYNOA cloud environment. This external CA may be a Private CA exclusive to a particular organization. To facilitate the issuance of application certificates by this CA, the process involves establishing an Intermediate CA, which is signed by the External CA.

Subsequently, the recently generated Intermediate CA is set up as a local CA within the KEYNOA cloud. 

<!-- To create an Intermediate CA, follow the steps below.  -->
![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/External-CA-concept.png)








