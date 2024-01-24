---
sidebar_position: 8
sidebar_label: "Certificate Authority"
title: Certificate Authority
---

A Certificate Authority (CA) attests the identity of an entity, and binds it to cryptographic keys by issuing a valid digital certificate. The entity can make use of its certificate to prove its identity to other entities. This enables an authenticated and secure connection between the two parties.

## Why a CA is Necessary?

Every IoT device powered by the KEYNOA client SDK can host multiple applications.
An application needs to connect **securely** to a service to exchange the data. A service can be an IoT Cloud Like Azure or a SCADA System.
    
The security aspect is ensured by the PKI certificates.
It is thus crucial that the device applications use certificates that are issued by a reliable, and trustworthy Certificate Authority.
These certificates are enrolled within the onboarding phase and are managed along the lifecycle of the device by KEYNOA.
Since these certificates are used by the application to authenticate, we call them App(lication) Certificates.

![KEYNOA](/img/KEYNOA/reference-doc/CA-1.png)

It is possible to create a new CA specific to your security requirements. You could create a 
- [Internal CA](#internal-ca) local to KEYNOA cloud.
- An Intermediate CA signed by your  [External CA](#external-ca)
- Or, employ one recommended by DEVITY as the default option.

A maximum of five new CAs can be created.

## Internal CA

This CA is local to KEYNOA. It behaves like any other CA, by validating the identities of the device applications, and issueing them valid certificates. You can have full control over the CA policies and certificates. Follow the steps below to create a KEYNOA CA.

1. Click on 'Create' button and select 'Certificate Authority' to begin.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/1-KEYNOA-CA-Start-Create-CA.png)

<!-- 2. Choose your expertise level as 'Beginner' or 'Expert'. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/2-KEYNOA-CA-Expertise-Level.png) -->

2. Choose 'Internal CA'. Give a unique CA name to identify it later. Click 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/3-KEYNOA-CA-Choose-CA-Type.png)

3. Internal CA properties can be set here. The 'Root  CA TTL' and 'Intermediate CA TTL' determine the validity time of the CA, which can be adapted to the use case. The chosen 'Algorithm' determines the cryptographic algorithm of the key pair used to sign the application certificates. Click 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/4-KEYNOA-CA-Set-CA-Properties.png)

4. 'Certificate Policies' template is used to set the fields of application certificate in a generic manner. 

    The CA will issue a certificate with these fields. The 'Common Name' and 'Serial Number' are suggested to set to `$(serial)` - the serial number of the device. Find more device properties in the [documentation](/reference/device-properties).
    
    Set the field values for 'Key Usage', 'Extended Key Usage', 'Key Algorithm', 'Signature Algorithm' based on the security requirements. Click 'Submit'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/5-KEYNOA-CA-Set-Cert-Policies.png)

5. The Internal CA is created successfully. It can be downloaded for any other purpose. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/6-KEYNOA-CA-KEYNOA-CA-Finish.png)

6. The newly created Internal CA is now listed as a valid 'Certificate Authority'. Click on the hamburg menu, to manage this CA. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/7-KEYNOA-CA-New-CA-Listed.png)

7. The newly created CA will show up in the "Certificate Authority" drop-down menu, while creating the Data Hub. If it is selected, this CA issues the application certificate for the MQTT application.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/8-KEYNOA-CA-Use-New-CA-Data-Hub.png)

8. The newly created CA will also show up in the 'Certificate Authority' drop-down menu, while creating the OPCUA Template. If it is selected, this CA issues the application certificate for the OPC UA application.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/9-KEYNOA-CA-Use-New-CA-Template.png)


<!-- [Go to Top](#why-a-ca-is-necessary) -->

## External CA

An external CA operates independently from the KEYNOA cloud environment. This external CA may be a Private CA exclusive to a particular organization. To facilitate the issuance of application certificates by this CA, the process involves establishing an Intermediate CA, which is signed by the External CA.

Subsequently, the recently generated Intermediate CA is set up as a local CA within the KEYNOA cloud. 

<!-- To create an Intermediate CA, follow the steps below.  -->
![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/External-CA-concept.png)








