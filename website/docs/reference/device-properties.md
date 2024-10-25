---
sidebar_position: 2
sidebar_label: "Device Properties"
title: Device Properties
---

The device properties and their values are usable while creating a Data Hub and/ or a Template with KEYNOA:

| Property Template  | Usage                                                 |
|--------------------|-------------------------------------------------------|
| $(serial)          | The device serial number                              |
| $(guid)            | The device GUID                                       |
| $(model)           | The device model                               |
| $(guid_enc)        | The Base62 encoded device GUID                        |
| $(urn)             | The uniform resource name                             |
| $(osName)          | The device OS name                                    |
| $(osArch)          | The device OS architecture                            |
| $(deviceIp)        | The device IP address                                 |
| $(opcUaServerPort) | The port exposed by the OPC UA server on the device   |
| $(productUri)      | The globally unique identifier for the product        |
| $(mac)             | The device MAC address                                |
| $(vendor)          | The name of the vendor of the device                  |
| $(hw_version)      | The hardware version (production data)                |
| $(application)     | The application which was assigned by the Attributor  |
| $(plant)           | The plant which was assigned by the Attributor        |
| $(localization)    | The localization which was assigned by the Attributor |
| $(building)        | The building which was assigned by the Attributor     |

### How to use device properties?
Think of device properties as placeholders. 
When the user doesn't know the device property value at the time but still want to use it, eg. the device serial number,
the user can reference it via the property name, `$(serial)`. 

The device properties can be put in word(s). Let's assume the device serial number is `SERIAL_123`, then 
`pre-$(serial)-post` will be rendered to `pre-SERIAL_123-post`.
Multiple device properties can be used at once. Assume the device model is `MODEL_abc`, then `I am $(model)-$(serial)` will be
transformed into `I am MODEL_abc-SERIAL_123`.

Please be aware that the length of the word(s) after the device properties are rendered should not be too long, 
depending on where the word(s) is (are) used. 
For example, the common name (CN) is `a long $(serial) --- 0123456789 0123456789 0123456789 0123456789`.
The length before the words expand into real value is 64 characters, which is still a valid CN length.
But after expanding, it turns into `a long SERIAL_123 --- 0123456789 0123456789 0123456789 0123456789`, 
which has a length of 65 characters and is no longer a valid CN.

### Where to use device properties?
Users can match application templates only with devices satisfying certain device properties. 
See more information in [To Select Device Properties](/reference/mqtt-template.md#to-select-device-properties).

Device property templates, e.g. `$(serial)`,
can be used in the text input field of `Serial Number`, `Common Name`, `SAN DNS`, `SAN URI` in the Certificate Policy. 

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

Device property templates can also be used in ThingsBoard Data Hub and custom Data Hub, which will in turn be used to render MQTT application configuration.


## How to access device properties?

Prior to creating a MQTT and/or an OPC UA Template on KEYNOA, it is essential to know the device properties. The following guide facilitates to access critical device details. 

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-properties.png)

Most of the properties are determined while creating the device specific Ownership Voucher. It is done at the manufacturing site. As part of device onboarding procedure, you will upload the voucher to KEYNOA. KEYNOA will help you visualize all critical device properties very well before the device is fully provisioned.


### KEYNOA Dashboard

Access the device summary under `All Devices` on KEYNOA, as shown below. KEYNOA fetches device details from the Ownership Voucher and displays below details as part of device summary, such as:

- `Device Model`
- `Serial No`
- `GUID`

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-summary.png)

Furthermore, you can access a more detailes about the device settings by clicking the ⚙️ button for the device in the last column of the table. This will display the same information as in the summary, with additional details highlighted below.

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-detailed-settings-1.png)


The device settings page also displays more details of the device, if they are configured while creating the voucher or using the attributor, such as:

- `Plant`
- `Location`
- `Application`
 
![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-detailed-settings-2.png)

The device firmware however, can be accessed once the device is powered onN. Execute any of the commands below on your device to display its firmware version.

```
vcgencmd version
```
```
sudo vcgencmd version
```

You will see an output as shown below. 

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/firmware-version.png)







