---
sidebar_position: 2
sidebar_label: "KEYNOA Ecosystem"
title: KEYNOA Ecosystem
---

KEYNOA enables the device manufacturer, as well as the device owner to improve the functionality and protection of the devices by centrally defining the configuration and using the latest industrial protocols with modern encryption. 

KEYNOA implements a number of standard technologies, proprietary applications (components), and interfaces as shown in the below diagram, to realize automatic zero-touch onboarding and identity management. 

![KEYNOA](/img/KEYNOA/KEYNOA_Ecosystem_new.png)

# Components

### KEYNOA Engine

KEYNOA Engine is integrated into the device software/ firmware and can be obtained as a Linux package, binary, C-SDK or source code. It is responsible for issuing a unique identity to every device produced. It queries KEYNOA to initiate automatic provisioning.


### Producer Service
The Producer Service creates the proof of ownership (Ownership Voucher) and signs the device. The Producer Service is also responsible for the allocation to the respective customer using serial numbers and API to commissioning systems.
It is preferably located in the device manufacturer's production facility, but can also can be operated by integrators or operators.


### KEYNOA 

KEYNOA is available as SaaS or on-premise and used by manufacturers, OEMs, integrators or operators. It verifies the device identity and provides the device with information about which entities are trusted. After mutual authentication, a secure channel is established between the device and this trusted entities, through which the data required for onboarding automation is sent to the device. Afer first onboarding, KEYNOA serves as a tool for automatic identity and device management functionalities.

KEYNOA offers a variety of features for efficient and secure processes. 
- Zero-Touch Onboarding
- Configuration Management
- Certificate Management
- Ownership Management
- Policy Management
- User Identity and Access Management

### KEYNOA UI (SPA)

KEYNOA UI is the user interface hosted by DEVITY as a web application to define the operation purpose of each device (group). Once you have received the device identities such as Ownership Voucher, UID, etc. you can start configure the received devices. The configuration steps include creating a Template, a Data Hub, a Certificate Authority, and/ or a Trust Anchor. 

# Applications

In the following, you can find a list of the applications KEYNOA has been integrated as of now. The list is evolving to address the customer needs and to offer an even more sophisticated solution. Please reach out to us if you miss crucial functionalities.

### OpenSSH

A standard connectivity tool for remote login with the SSH protocol. 

It allows to encrypting all traffic to eliminate eavesdropping, connection hijacking, and other attacks. In addition, OpenSSH provides a large suite of secure tunneling capabilities, several authentication methods, and sophisticated configuration options. 

A most widely used tool is *Key management* with ssh-keysign, ssh-keygen.

### OPC UA Server from Unified Automation.

With OPC UA, KEYNOA supports multiple OPC UA Server Endpoints, each with its own certificate.

### open62541 OPC UA Server

KEYNOA supports an open-source implementation of an OPC UA server, based on the open62541 stack, providing a platform for industrial communication and interoperability.

### Paho MQTT Client

The MQTT (Message Queuing Telemetry Transport) client, enables the devices to communicate asynchronously over networks.

### ThinEdge

A lightweight computing solution designed for edge computing applications, where data processing occurs close to the data source, minimizing latency and bandwidth usage. This is best suitable for (IoT) devices with limited energy and bandwidth resources. 

### LDAP Client

A client application that interacts with LDAP (Lightweight Directory Access Protocol) servers to retrieve and manipulate directory information. It is implemented for User management.  

### API 

Several APIs (Application Programming Interface) are integrated with KEYNOA to manage and configure the Device, ThinEdge, Cloud, OPC UA, MQTT, etc. 

<!-- 
### SAP

SAP's enterprise resource planning (ERP) software enables every department to access and share common data to manage the users.
 -->

### MS AD

Microsoft Active Directory, a directory service that provides authentication and authorization services.

In addition, the TLS connections of any other applications can also be managed.

In order to implement the required security mechanisms on the device, a secure element can be created via an API (e.g. via TPM2.0 or cryptoauthlib).

# Interfaces

### Configuration Management

The configuration management service,
- defines device specific configurations, e.g., to configure MQTT topics based on the devices’ serial number and use case.
- modifies application configuration for many devices at once, e.g., to adapt to infrastructure changes.

### Certificate Management

The certificate management system ensures, 
- Creation of Certificate Authorities and Trust Anchors.
- PKI hierarchy.
- Automatic renewal of device certificates.
- Automatic distribution of CRLs.
- Periodic checks for certificate revocations.
- Maintenance and distribution of devices’ trust.
- Revocation of certificates, individual or all, from one device.
- Configuration of TLS for secure authentication and authorization.

### FIDO Device Onboarding

KEYNOA supports the FDO protocol to initially authenticate devices and thus implement a zero touch provisioning process.

### OPC Device Provisioning (via GDS)

KEYNOA supports the OPC UA protocol to initially authenticate devices.

### Zero Touch Provisioning Configuration

With intelligent rules as the foundation, easily determine the provisioning requirements for new devices. KEYNOA adheres to the API-first principle, seamlessly integrating as middleware alongside existing MES, SCADA, or cloud solutions. Zero-touch provisioning must be defined in advance, utilizing KEYNOA's corresponding APIs.

For all other use cases, DEVITY also offers a user interface (UI) in the form of a web-based single page application.

### External PKIs

Although KEYNOA includes a full-fledged certificate management system, it offers also the option to integrate external certificate management systems.

### Secret Manager

Secrets, such as passwords or tokens for devices, can also be managed in an external secret manager.

### Device Configurator

The device configurator interface makes it easier to set up devices in complex scenarios, e.g., in cases where the trust or network zones must be distinguished. The interface makes it possible to provide individual devices with additional (virtual) assigned characteristics.

The "Attributor” is a mobile application that allows devices to be assigned to specific trust spaces.

### Asset Management System

The interface to asset management systems allows automatic inventory of devices newly provisioned in the network.

### Existing User Management

For use in your own company, especially in on-premises operations, the company-wide user management can be connected to KEYNOA for access control.
 
### Claiming via ERP systems

The Prdoucer Service and KEYNOA offer a claiming interface with which the transfer of ownership rights can be linked to other processes (e.g. ordering, shipping, picking or sales processes).



