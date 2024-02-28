---
sidebar_position: 11
sidebar_label: "Certificate Properties"
title: Certificate Properties
---

The table below lists and explains all the certificate properties you come across while creating a CA, a Trust Anchor, or a certificate template. 

| Property            | Explanation                                                                                         |
| -----------------   | ----------------------------------------------------------------------------------------------------|
| Organization        | The legal name of the organization requesting the certificate.                                      |
| Organization Unit	  | Specifies the department or unit within the organization, responsible for the certificate.          |
| Locality            | The locality or city where the organization is located.                                             |
| State               | The state or province where the organization is located.                                            |
| Country		      | The two-letter country code of the organization's location according to [ISO 3166-1 standard](https://www.iso.org/obp/ui/#iso:pub:PUB500001:en).                                                                                      |
| Common Name         | The fully qualified domain name (FQDN) of the entity requesting the certificate. By default, it is the serial number of the device.                                                                                                |
| Serial Number       | A unique identifier assigned by the certificate authority (CA) to each certificate it issues. By default, it is the serial number of the device.                                                                                      |
| SAN DNS             | Specifies additional domain names that the certificate should be valid for.                         |
| SAN URI		      | Specifies additional types of identifiers, such as email addresses or IP addresses, that the certificate should be valid for.                                                                                                        |
| Include Device IP	  | Indicates whether to include IP Address as part of SAN DNS or SAN URI.                              |
| Certificate TTL 	  | It determines how long the certificate remains valid before it needs to be renewed.                 |
| Intermediate CA TTL | It determines how long the Intermediate CA certificate remains valid before it needs to be renewed. |
| Root CA TTL  		  | It determines how long the Root CA certificate remains valid before it needs to be renewed.         |
| Renew before 		  |  Indicates the period before the certificate's expiration date, when it should be renewed. Renewing a certificate before it expires helps ensure uninterrupted service.                                                           |
| Key Algorithm       | The cryptographic algorithm used for generating the public-private key pair, such as RSA or Elliptic Curve Cryptography (ECC).                                                                                                         |
| Signature Algorithm |  Specifies the algorithm used by the CA to sign the certificate..                                   |
| Key Usage		      | Specifies the cryptographic operations for which the public key in the certificate can be used.     |
| Extended Key Usage  |  Further refines the key usage by specifying particular purposes or applications for which the public key may be used.                                                                                                                |