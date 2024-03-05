---
sidebar_position: 2
sidebar_label: "KEYNOA Ecosystem"
title: KEYNOA Ecosystem
---

KEYNOA enables a device manufacturer, as well as the device owner to improve the functionality of the devices by centrally handling the configuration and using the latest industrial protocols securely. 

KEYNOA implements a number of standard applications, proprietry applications (components), and interfaces as shown in the below diagram, to realize the zero-touch onboarding. 

![KEYNOA](/img/KEYNOA/KEYNOA-Interfaces.png)

# Components

### Producer Service
The Producer Service is used in production by the device manufacturer. It helps generate and manage the cryptographic identities in the device. In other words, it creates a certificate establishing ownership of the device, and signs the device. The device identities are then transferred directly to the owner via the producer service, so that the IT administrator (at owner's site)  could configure the device before physical delivery to the owner.

### KEYNOA Engine

KEYNOA.engine is integrated into the device software/firmware and can be obtained as a Linux package, binary, C-SDK or source code. It is responsible for issuing a unique identity to every device produced. It queries KEYNOA to initiate automatic provisioning

### KEYNOA 

KEYNOA is available as SaaS or on-premise and used by manufacturers, OEMs, integrators or operators. KEYNOA verifies the device identity and provides the device with information about which entities are trusted. After mutual authentication, a secure channel is established between the device and this server, through which the data required for onboarding automation is sent to the device.

KEYNOA offers a variety of features for efficient and secure processes. 
-  Onboarding
- Cloud connection
- Fleet Management
- User management
- Updates
- IT security

### KEYNOA UI (SPA)

Also known as Devity Dashboard, allows you to configure the device, once you receive the device identities like the Ownership Voucher, UID, etc. The configurations include creating a Template, a Data Hub, a Certificate Authority, or a Trust Anchor. 

# Applications

Following are the list of applications, the KEYNOA has been integrated with at present. The list is evolving to address the customer needs and to offer a complete solution. 

### OpenSSH

A standard connectivity tool for remote login with the SSH protocol. 

It allows to encrypts all traffic to eliminate eavesdropping, connection hijacking, and other attacks. In addition, OpenSSH provides a large suite of secure tunneling capabilities, several authentication methods, and sophisticated configuration options. 

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
- defines device specific configurations, e.g., to configure MQTT topics based on the devices’ serial number and usecase.
- modifies application configuration for many devices at once, e.g., to adapt to infrastructure changes.

### Certificate Management

The certificate management system ensures, 
- to automatically renew device certificates.
- to automatically distribute CRLs.
- to periodically check for certificate revocations.
- to maintain and distribute devices’ trust.
- to revoke certificates, individual or all, from one device.

TLS also can be configured for secure authentication and authorization.

### FIDO Device Onboarding

KEYNOA supports the FDO protocol to initially authenticate devices and thus implement a zero touch provisioning process.

### OPC Device Provisioning (via GDS)

KEYNOA supports the OPC UA protocol to initially authenticate devices.

### Zero Touch Provisioning Configuration

Zero-touch provisioning must be defined in advance, utilizing KEYNOA's corresponding APIs. With intelligent rules as the foundation, easily determine the provisioning requirements for new devices. KEYNOA adheres to the API-first principle, seamlessly integrating as middleware alongside existing MES, SCADA, or cloud solutions

For all other use cases, DEVITY also offers a user interface (UI) in the form of a web-based single page application.

### External PKIs

Although KEYNOA includes a full-fledged certificate management system, there is the possibility of integrating an external Certificate management system.

### Secret Manager

Secrets, such as passwords or tokens for devices, can also be managed in an external secret manager.

### Device Configurator

The device configurator interface makes it easier to set up devices in complex scenarios, e.g. in case where the Trust or network zones must be distinguished. The interface makes it possible to provide individual devices with additional (virtual) Assign characteristics.

The "Attributor” is a mobile application that allows devices to be assigned to specific trust spaces.

### Asset Management System

The interface to asset management systems allows automatic inventory of devices newly provisioned in the network.

### Existing User Management

For use in your own company, especially in on-premises operations, the company-wide User management can be connected to KEYNOA for access control.
 
### Claiming via ERP systems

The Prdoucer service and KEYNOA offer a claiming interface with which the transfer of ownership rights can be linked to other processes (e.g. ordering, shipping, picking or sales processes).



