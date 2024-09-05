---
sidebar_position: 2
sidebar_label: "Device Properties"
title: Device Properties
---

The device properties and their values usable while creating Data Hub and Template at KEYNOA:

| Property        | Usage                                                 |
|-----------------|-------------------------------------------------------|
| $(serial)       | The device serial number                              |
| $(guid)         | The device GUID                                       |
| $(model)        | The device device model                               |
| $(guid_enc)     | The Base62 encoded device GUID                        |
| $(urn)          | The uniform resource name                             |
| $(osName)       | The device OS name                                    |
| $(osArch)       | The device OS architecture                            |
| $(deviceIp)     | The device IP address                                 |
| $(productUri)   | The globally unique identifier for the product        |
| $(mac)          | The device MAC address                                |
| $(vendor)       | The name of the vendor of the device                  |
| $(hw_version)   | The hardware version (production data)                |
| $(application)  | The application which was assigned by the Attributor  |
| $(plant)        | The plant which was assigned by the Attributor        |
| $(localization) | The localization which was assigned by the Attributor |
| $(building)     | The building which was assigned by the Attributor     |

### How to use device properties?
Think of device properties as placeholders. 
When the user doesn't know the device property value at the time but still want to use it, eg. the device serial number,
the user can reference it via the property name, `$(serial)`. 

The device properties can be put in word(s). Let's assume the device serial number is `SERIAL_123`, then 
`pre-$(serial)-post` will be rendered to `pre-SERIAL_123-post`.
Multiple device properties can be used at once. Assume the device model is `MODEL_abc`, then `I am $(model)-$(serial)` will be
transformed into `I am MODEL_abc-SERIAL_123`.

Please be aware that the length of the word(s) after the device properties are rendered should not be too long, 
depending on where the word(s) is used. 
For example, the common name (CN) is `a long $(serial) --- 0123456789 0123456789 0123456789 0123456789`.
The length before the words expand into real value is 64 characters, which is still a valid CN length.
But after expanding, it turns into `a long SERIAL_123 --- 0123456789 0123456789 0123456789 0123456789`, 
which has a length of 65 characters and is no longer a valid CN.

### Where to use device properties?
Device properties can be used in the text input field of `Serial Number`, `Common Name`, `SAN DNS`, `SAN URI` 
in the Certificate Policy.

Certificate Policy can be edited in
- Create Certificate Authority
  ![Edit Certficate Policy when creating CA](/img/KEYNOA/reference-doc/Device-Properties/default-cert-template-create-CA.png)
- Edit Certificate Policy of a Certificate Authority
  ![Edit Certficate Policy when editing CA](/img/KEYNOA/reference-doc/Device-Properties/default-cert-template-edit-CA.png)
- Create MQTT Template
  ![Edit Certficate Policy when creating MQTT template](/img/KEYNOA/reference-doc/Device-Properties/cert-template-create-mqtt.png)
- Edit MQTT Template
  ![Edit Certficate Policy when editing MQTT template](/img/KEYNOA/reference-doc/Device-Properties/cert-template-edit-mqtt.png)
- Create OPC UA Template
  ![Edit Certficate Policy when creating OPC UA template](/img/KEYNOA/reference-doc/Device-Properties/cert-template-create-OPCUA.png)
- Edit OPC UA Template
  ![Edit Certficate Policy when editing OPC UA template](/img/KEYNOA/reference-doc/Device-Properties/cert-template-edit-OPCUA.png)


## How to access device properties?

Prior to creating a MQTT and/or an OPC UA Template on KEYNOA, it is essential to know the device properties. The following guide facilitates to access critical device details. 

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-properties.png)

Most of the properties are determined while creating the device specific Ownership Voucher. It is done at the manufacturing site. As part of device onboarding procedure, you will upload the voucher to KEYNOA. KEYNOA will help you visualize all critical device properties, very well before the device is fully provisioned.


### KEYNOA Dashboard

Access the device summary under `All Devices` on KEYNOA, as shown below. KEYNOA fetches device details from the Ownership Voucher and displays below details as part of device summary.

- `Device Model`
- `Serial No`
- `GUID`

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-summary.png)

Alternatively, when you click on the :gear: button of the device, a detailed device settings can be viewed as shown below. The same details as in summary, are displayed as highlighted below.

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-detailed-settings-1.png)


The device settings page also displays more details of the device, if they are configured while creating the voucher. The details, like

- `Plant`
- `Location`
- `Application`
 
![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-detailed-settings-2.png)

The device firmware however, can be accessed once the device is powered ON. Execute any one of the commands below on your RPi device to display its firmware version.

```
vcgencmd version
```
```
sudo vcgencmd version
```

You will see an output as shown below. 

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/firmware-version.png)







