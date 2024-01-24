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

## Role of CA in KEYNOA Cloud

CA in KEYNOA cloud is responsible to issue App Certificates to all KEYNOA Client applications on the device as shown in the figure below. 

![KEYNOA](/img/KEYNOA/reference-doc/CA-1.png)

It is possible to create a new CA specific to your security requirements. You could create
- An [Internal CA](#internal-ca) local to KEYNOA cloud.
- An Intermediate CA signed by your  [External CA](#external-ca)
- Or, employ one recommended by DEVITY as the default option.

A maximum of five new CAs can be created.

## Role of DataHub and Template

Alternatively, for the device to recognize certificates issued by CA, it is necessary for the device to know and accept these CAs. The only way of conveying CA information to the device is via a DataHub and/or a Template. Therefore, careful consideration is essential in selecting the appropriate CA when configuring the DataHub and Template.

After choosing the suitable CA, the details entered into DataHub and Template are transmitted to the device.

:::info 
Choose appropriate Internal or External CA while creating a DataHub. When this DataHub is selected while creating a Template, all Certificate Policy Configurations (Step 3 of [Create Template](/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA#create-template)) are auto populated. 
:::

## Internal CA

This CA is local to KEYNOA cloud. It verifies the identities of device applications and issues them valid certificates. You have complete control over the CA policies and certificates, when you create a new Internal CA. Follow the steps to [Create an Internal CA](#create-an-internal-ca). 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/Internal-CA.png)

## External CA

An external CA operates independently from the KEYNOA cloud environment. This could be a Private CA exclusive to a particular Enterprise. To facilitate the issuance of application certificates by this external CA, it is required to create an Intermediate CA. The newly created intermediate CA is signed by the External CA. Subsequently, the Intermediate CA is set up as a local CA within the KEYNOA cloud. Follow the steps to create an [External CA](#create-an-external-ca) signed Intermediate CA.

<!-- To create an Intermediate CA, follow the steps below.  -->
![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/External-CA-concept.png)

## Create an Internal CA

Follow the steps below to create an Internal CA.

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

A suitable application, MQTT or OPCUA, could also be chosen from the drop down menu. Along with 'Key Usage' and 'Extended Key Usage' fileds, other fields will be auto populated. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/4-Choose-Application.png)


5. The Internal CA is created successfully. It can be downloaded for any other purpose. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/6-KEYNOA-CA-KEYNOA-CA-Finish.png)

6. The newly created Internal CA is now listed as a valid 'Certificate Authority'. Click on the hamburger menu, to manage this CA. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/7-KEYNOA-CA-New-CA-Listed.png)

7. The newly created CA will show up in the "Certificate Authority" drop-down menu, while creating the Data Hub. If it is selected, this CA issues the application certificate for the MQTT application.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/8-KEYNOA-CA-Use-New-CA-Data-Hub.png)

8. The newly created CA will also show up in the 'Certificate Authority' drop-down menu, while creating the OPCUA Template. If it is selected, this CA issues the application certificate for the OPC UA application.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/9-KEYNOA-CA-Use-New-CA-Template.png)


<!-- [Go to Top](#why-a-ca-is-necessary) -->

## Create an External CA

Follow the steps below to create an Intermediate CA, signed by an External Root CA.

1. Choose 'External CA'. Give a unique CA name to identify it later. Click 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/1-create-Ext-CA.png)


2. A certificate template for applications, either MQTT or OPCUA, is configured here. The fileds are auto-populated with suggested values. However, each field can be modified with values suitable for your required security level. Configure all the fields and click 'Submit'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/3-Cert-Template.png)

3. A Certificate Signing Request (CSR) is generated in the background. 

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/4-Send-CSR.png)

4. Click on the 'Download Generated CSR' to download the CSR file. This is the request to be sent to the External Root CA. Click on 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/5-Download-CSR.png)

5. Send the downloaded CSR to the External Root CA, to request an Intermediate CA certificate. Save this CA certificate on your disk and keep it ready to be uploaded in the next prompt. 

    :::info
    Step 5 is executed outside of KEYNOA cloud environment. 
    :::

6. Browse the Intermediate Certificate you saved on your disk in previous step. Upload it, and click on 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/6-Upload-Int-CA-Cert.png)

7. The Intermediate CA, signed by the External Root CA, has been successfully uploaded to the KEYNOA cloud. This implies that the application certificates issued by the Intermediate CA are trusted by the External Root CA. Consequently, all device App Certificates are (indirectly) issued by the External Root CA.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/7-Upload-Successful.png)

8. The newly created Intermediate CA will be listed as CAs. 

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/8-IntCA-Listed.png)

9. This will show up in the 'Certificate Authority' drop-down menu, while creating an OPCUA Template or a MQTT DataHub.




