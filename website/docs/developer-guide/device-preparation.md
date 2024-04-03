---
sidebar_position: 1
sidebar_label: "Device Preparation"
title: Device Preparation
---

A device must undergo preparation at the manufacturing site prior to being shipped to the owner. This process, referred to as **Device Initialization** in the FIDO device onboarding standard, ensures readiness for use.

## Producer Service

The Producer Service runs the Device Initialization (DI) Protocol, at the manufacturing site. The protocol's purpose is to integrate ownership and manufacturing credentials into the newly manufactured device. Alternatively, the Producer Service can also be integrated into the infrastructure of integrators.

## KEYNOA Engine

The KEYNOA Engine is a device software, enabling you to effortlessly establish encrypted connections through protocols like MQTT or OPC UA. Furthermore, it facilitates device management, certificate management, and integration with third-party systems through access to the KEYNOA zero-touch onboarding services.

The KEYNOA Engine is not tied to any hardware and can be used directly on the field device without changing or disclosing existing functionalities. This enables the use of the preferred architecture (e.g. Armv6, Armv7, x86).

## KEYNOA 

KEYNOA is a software to securely connect devices to any cloud or on-premises data platform on massive scale in industrial use cases. It is responsible for transferring device identities, configuring and onboarding groups of devices and managing devices during the life cycle. It consists of a web application, backend software, enrollment service, middleware, and API.

## Rendezvous Server

A rendezvous server serves as a mediator for the initial communication between the device and the owner (KEYNOA).

## Ownership Voucher

A voucher is a structured digital document that links the device (manufacturer) with the owner. It contains the GUID, make, model, and more information about the device. The owner receives the voucher only once per device. This voucher information is used by KEYNOA to authenticate the device before onboarding it.  

## How to Prepare the Device
![KEYNOA](/img/KEYNOA/Developer-Guide.png)

1. Follow the steps below to install the KEYNA Engine SDK on the device. 
    - Select your host systems architecture (x86 in this case)
    - Select the version
    - Select whether or not a TPM is accessible on the device, or leave empty if not required
```
ARCH=x86 
VERSION=1.0.1
TPM=-tpm
```

```
curl --header "PRIVATE-TOKEN: <your_access_token>" https://git.guuthe.de/api/v4/projects/92/packages/generic/client-sdk-"${ARCH}""${TPM}"/"${VERSION}"/client-sdk."${VERSION}".tar.gz
```
```
mkdir client-sdk
```
```
tar xfz client-sdk."${VERSION}".tar.gz --directory client-sdk
```
2. Prepare to generate device identity: Create a key pair for the device. The DI stores the key pair as device credentials in the device and creates the ownership voucher to complement these credentials. It stores the OVHeader field of the ownership voucher and a hash of the device certificate chain in the device. When the owner of the device changes over the supply chain, the voucher chain keeps building up as shown below.

![KEYNOA](/img/KEYNOA/ownership-voucher-chain.png)

3. Prepare the KEYNOA Engine SDK and run DI: Preparing the client SDK involves defining the device parameters like, Model, Serial Number, Manufacturer, Location, etc. These parameters are later used to uniquely identify the device, while onboarding.
Please [contact our team](https://devity.eu/contact/) for assistence with preparing the client SDK and to run the DI. 

4. The operator at manufacturer site creates an ownership voucher based on the credentials in the DI. Please [contact our team](https://devity.eu/contact/) for assistence with creating the ownership voucher.

5. The ownership voucher is transferred to the device owner.

6. The owner uploads the voucher to KEYNOA. KEYNOA now has all the information of the device, such as, its GUID, Model, Serial Number, Manufacturer etc.

7. KEYNOA identifies itself to the Rendezvous Server. It then indicates its intention and proves it is capable of taking control of the device, based on the device’s current GUID. The Rendezvous Server has an entry in a table that associates, for a specified interval of time, the Device GUID with the KEYNOA IP. It establishes the mapping of GUID to the Owner IP address.

8. The device has rendezvous information stored in it, before shipping it to its owner. When the device is powered on, it identifies itself to the Rendezvous Server with its GUID. The Rendezvous Server points the device to the KEYNOA IP address, based on its mapping of GUID to the Owner IP address. 

9. Device contacts its owner, and authenticates itself. Upon establishing the trust, the owner performs **Ownership Transfer** by replacing all the device credentials with its own, except for the device’s attestation key. The owner then onboards the device completely. 

<!-- It is possible to create a new CA that is specific to your security requirements. You can create
- A [KEYNOA CA](#keynoa-ca) local to KEYNOA.
- An Intermediate CA signed by your  [Enterprise CA](#enterprise-ca).
- Or, employ one recommended by DEVITY as the default option.

A maximum of five new CAs can be    created.

:::info 
Choose an appropriate (KEYNOA or Enterprise) CA while creating a Data Hub. When this Data Hub is selected while creating a Template, all **Policy Configuration** parameters (Step 3 of [Create Template](/tutorial/Thingsboard%20-%20Rule%20Engine/KEYNOA#create-template)) are automatically filled, inline with **Certificate Policy** parameters configured in Data Hub.. 
::: -->

To know more details, please [contact our team here](https://devity.eu/contact/).
