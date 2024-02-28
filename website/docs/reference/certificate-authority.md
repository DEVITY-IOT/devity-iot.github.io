---
sidebar_position: 7
sidebar_label: "Certificate Authority"
title: Certificate Authority
---

A Certificate Authority (CA) attests the identity of an entity, and binds it to cryptographic keys by issuing a valid digital certificate. The entity can make use of its certificate to prove its identity to other entities. This enables an authenticated and secure connection between the two parties.

## Why a CA is Necessary?

Every device powered by the KEYNOA Engine can host multiple applications.
An application needs to connect **securely** to a service to exchange information. A service can be an IoT Cloud Like Azure or a SCADA System.
    
The security is ensured by X.509 certificates.
Thus, it is crucial that the device applications use certificates that are issued by a reliable, and trustworthy Certificate Authority.
These certificates are enrolled within the onboarding phase and are managed along the life cycle of the device by KEYNOA.
Since these certificates are used by the application to authenticate, we call them App(lication) certificates.

## Role of CA in KEYNOA

A CA in KEYNOA is responsible to issue application certificates to all KEYNOA Engine applications on the device as shown in the figure below. 

![KEYNOA](/img/KEYNOA/reference-doc/CA-1.png)

It is possible to create a new CA specific to your security requirements. You could create
- A [KEYNOA CA](#keynoa-ca) local to KEYNOA.
- An Intermediate CA signed by your  [Enterprise CA](#enterprise-ca)
- Or, employ one recommended by DEVITY as the default option.

A maximum of five new CAs can be created.

## Role of Data Hub and Template

Alternatively, for the device to recognize certificates issued by CA, it is necessary for the device to know and accept these CAs. The only way of conveying CA information to the device is via a Data Hub and/or a Template. Therefore, careful consideration is essential in selecting the appropriate CA when configuring the Data Hub and Template.

After choosing the suitable CA, the details entered into Data Hub and Template are transmitted to the device.

:::info 
Choose an appropriate (KEYNOA or Enterprise) CA while creating a Data Hub. When this Data Hub is selected while creating a Template, all **Policy Configuration** parameters (Step 3 of [Create Template](/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA#create-template)) are automatically filled, inline with **Certificate Policy** parameters configured in Data Hub.. 
:::

## KEYNOA CA

This CA is local to KEYNOA. It verifies the identities of device applications and issues them valid certificates. You have complete control over the CA policies and certificates, when you create a new KEYNOA CA. Follow the steps to [Create a KEYNOA CA](#create-a-keynoa-ca). 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/Internal-CA.png)

## Enterprise CA

An Enterprise CA operates independently from the KEYNOA environment. This could be a Private CA exclusive to a particular enterprise. To facilitate the issuance of application certificates by this Enterprise CA, it is required to create an Intermediate CA. The newly created Intermediate CA is signed by the Enterprise CA. Subsequently, the Intermediate CA is set up as a local CA within the KEYNOA. Follow the steps to create an [Enterprise CA](#create-an-enterprise-ca) signed Intermediate CA.

<!-- To create an Intermediate CA, follow the steps below.  -->
![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/External-CA-concept.png)

## Create a KEYNOA CA

Follow the steps below to create an KEYNOA CA.

1. Click on 'Create' button and select 'Certificate Authority' to begin.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/1-KEYNOA-CA-Start-Create-CA.png)

<!-- 2. Choose your expertise level as 'Beginner' or 'Expert'. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/2-KEYNOA-CA-Expertise-Level.png) -->

2. Choose 'KEYNOA CA'. Give a unique CA name to identify it later. Click 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/3-KEYNOA-CA-Choose-CA-Type.png)

3. KEYNOA CA properties can be set here. The 'Root  CA TTL' and 'Intermediate CA TTL' determine the validity time of the CA, which can be adapted to the use case. The chosen 'Algorithm' determines the cryptographic algorithm of the key pair used to sign the application certificates. Click 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/4-KEYNOA-CA-Set-CA-Properties.png)

4. 'Certificate Policies' template is used to set the fields of application certificate in a generic manner. 

    The CA will issue a certificate with these fields. The 'Common Name' and 'Serial Number' are suggested to set to `$(serial)` - the serial number of the device. Find more device properties in the [documentation](/reference/device-properties).
    
    Set the field values for 'Key Usage', 'Extended Key Usage', 'Key Algorithm', 'Signature Algorithm' based on the security requirements. Click 'Submit'.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/5-KEYNOA-CA-Set-Cert-Policies.png)

A suitable application, MQTT or OPC UA, could also be chosen from the drop down menu. Along with 'Key Usage' and 'Extended Key Usage' fileds, other fields will be auto populated. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/4-Choose-Application.png)


5. The KEYNOA CA is created successfully. It can be downloaded for any other purpose. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/6-KEYNOA-CA-KEYNOA-CA-Finish.png)

6. The newly created KEYNOA CA is now listed as a valid 'Certificate Authority'. Click on the burger menu, to manage this CA. 

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/7-KEYNOA-CA-New-CA-Listed.png)

7. The newly created CA will show up in the "Certificate Authority" drop-down menu, while creating the Data Hub. If it is selected, this CA issues the application certificate for the MQTT application.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/8-KEYNOA-CA-Use-New-CA-Data-Hub.png)

8. The newly created CA will also show up in the 'Certificate Authority' drop-down menu, while creating the OPC UA Template. If it is selected, this CA issues the application certificate for the OPC UA application.

![KEYNOA](/img/KEYNOA/reference-doc/KEYNOA-CA/9-KEYNOA-CA-Use-New-CA-Template.png)


<!-- [Go to Top](#why-a-ca-is-necessary) -->

## Create an Enterprise CA

Follow the steps below to create an Intermediate CA, signed by an Enterprise Root CA.

1. Choose 'Enterprise CA'. Give a unique CA name to identify it later. Click 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/1-create-Ext-CA.png)


2. A certificate template for applications, either MQTT or OPC UA, is configured here. The fileds are auto-populated with suggested values. However, each field can be modified with values suitable for your required security level. Configure all the fields and click 'Submit'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/3-Cert-Template.png)

3. A Certificate Signing Request (CSR) is generated in the background. 

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/4-Send-CSR.png)

4. Click on the 'Download Generated CSR' to download the CSR file. This is the request to be sent to an Enterprise Root CA. Click on 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/5-Download-CSR.png)

5. Submit the downloaded Certificate Signing Request (CSR) to the Enterprise Root CA for obtaining an Intermediate CA certificate. Save this intermediate CA certificate on your disk and have it prepared for uploading in the upcoming prompt.

    :::info
    Step 5 is executed outside of KEYNOA environment. 
    :::

6. Browse the Intermediate CA Certificate you saved on your disk in previous step. Upload it, and then click on 'Next'.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/6-Upload-Int-CA-Cert.png)

7. The Intermediate CA, signed by the Enterprise Root CA, has been successfully uploaded to KEYNOA. This implies that the application certificates issued by the Intermediate CA are trusted by the Enterprise Root CA. Consequently, all device application certificates are (indirectly) issued by the Enterprise Root CA.

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/7-Upload-Successful.png)

8. The newly created Intermediate CA will be listed as Certificate Authority. 

![KEYNOA](/img/KEYNOA/reference-doc/Enterprise-CA/8-IntCA-Listed.png)

9. The newly created CA will also show up in the 'Certificate Authority' drop-down menu, while creating the OPC UA Template or the MQTT Data Hub. If it is selected, this CA issues the application certificate for either an OPC UA or an MQTT application respectively.




