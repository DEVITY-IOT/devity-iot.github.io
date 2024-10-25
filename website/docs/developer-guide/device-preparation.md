---
sidebar_position: 1
sidebar_label: "Device Preparation"
title: Device Preparation
---

Before a device is shipped to its owner, it must go through a preparation process at the manufacturing site. This process, called "Device Initialization" in the FIDO Device Onboarding standard, ensures that the device is ready for use.

## Producer Service

The Producer Service runs the Device Initialization (DI) Protocol, at the manufacturing site. The protocol's purpose is to integrate ownership and manufacturing credentials into the newly manufactured device. Alternatively, the Producer Service can also be integrated into the infrastructure of integrators.

## KEYNOA Engine

KEYNOA Engine is a device software (SDK), enabling you to effortlessly establish encrypted connections through protocols like MQTT or OPC UA. Furthermore, it facilitates device management, certificate management, and integration with third-party systems through access to the KEYNOA zero-touch onboarding services.

The KEYNOA Engine is not tied to any hardware and can be used directly on the field device without changing or disclosing existing functionalities. This enables the use of the preferred architecture (e.g. Armv6, Armv7, x86).

## KEYNOA 

KEYNOA is a software to securely connect devices to any cloud or on-premises data platform at massive scale in industrial use cases. It is responsible for transferring device identities, configuring and onboarding groups of devices as well as managing devices throughout the life cycle. It consists of a web application, backend software, enrollment service, middleware, and API.

## Rendezvous Server

A rendezvous server serves as a mediator for the initial communication between the device and the owner (KEYNOA).

## Ownership Voucher

A ownership voucher is a structured digital document that links the device (manufacturer) with the owner. It contains the device's GUID and model, and cryptographic information necessary to prove the identity of the device and the owner. The owner receives the voucher only once per device. This voucher information is used by KEYNOA to authenticate the device before onboarding it.  

## How to Prepare the Device
![KEYNOA](/img/KEYNOA/Developer-Guide.png)

1. Follow the steps below to install the KEYNOA Engine SDK on the device. 
    - Select your host systems' architecture (x86 in this case)
    - Select the version
    - Select whether or not a TPM is accessible on the device, or leave empty if not required
```
ARCH=x86 
VERSION=1.0.1
TPM=-tpm
```

```
curl --header "PRIVATE-TOKEN: <your_access_token>" https://git.devity.eu/api/v4/projects/92/packages/generic/client-sdk-"${ARCH}""${TPM}"/"${VERSION}"/client-sdk."${VERSION}".tar.gz
```
```
mkdir client-sdk
```
```
tar xfz client-sdk."${VERSION}".tar.gz --directory client-sdk
```
2. Prepare to generate device identity: Create a key pair for the device. The DI stores the key pair as device credentials in the device and creates the ownership voucher to complement these credentials. It stores the OVHeader field of the ownership voucher and a hash of the device certificate chain in the device. When the owner of the device changes over the supply chain, the voucher chain keeps building up as shown below.

![KEYNOA](/img/KEYNOA/ownership-voucher-chain.png)

3. Prepare the KEYNOA Engine SDK and run DI: Preparing the client SDK involves defining the device parameters such as, Model, Serial Number, Manufacturer, Location, etc. These parameters are later used to uniquely identify the device, while onboarding.
Please [contact our team](https://devity.eu/contact/) for assistance with preparing the client SDK and to run the DI. 

4. The operator at manufacturer site creates an ownership voucher based on the credentials in the DI. Please [contact our team](https://devity.eu/contact/) for assistance with creating the ownership voucher.

5. The ownership voucher is transferred to the device owner.

6. The owner uploads the voucher to KEYNOA. KEYNOA now has all the information about the device, such as, its GUID, Model, Serial Number, Manufacturer etc.

7. KEYNOA communicates its location (IP address or domain name) to the Rendezvous Server. It then declares its intent and demonstrates the capability to control the device, verified against the device’s current GUID. The Rendezvous Server has a table entry that temporarily associates the device’s GUID with KEYNOA’s location. This entry establishes a mapping between the GUID and the Owner’s location for the specified time interval.

8. The device has rendezvous information stored in it, before shipping it to its owner. When powered on, the device identifies itself to the Rendezvous Server using its GUID. The Rendezvous Server then directs the device to the KEYNOA IP address by mapping the device’s GUID to the owner’s IP address.

9. The device connects to its owner and completes authentication. Once trust is established, the owner initiates **Ownership Transfer** by replacing all the device credentials with its own, except for the device’s attestation key. Afterward, th owner fully onboards the device. 


<!-- It is possible to create a new CA that is specific to your security requirements. You can create
- A [KEYNOA CA](#keynoa-ca) local to KEYNOA.
- An Intermediate CA signed by your [Enterprise CA](#enterprise-ca).
- Or, employ one recommended by DEVITY as the default option.

A maximum of five new CAs can be created.

:::info 
Choose an appropriate (KEYNOA or Enterprise) CA while creating a Data Hub. When this Data Hub is selected while creating a Template, all **Policy Configuration** parameters (Step 3 of [Create Template](/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA#create-template)) are automatically filled, inline with **Certificate Policy** parameters configured in Data Hub.. 
::: -->

To know more details, please [contact our team here](https://devity.eu/contact/).
