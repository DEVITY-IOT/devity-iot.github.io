---
sidebar_position: 2
sidebar_label: "Device Properties"
title: Device Properties
---

The device orperties and their values usable while creating Data Hub and Template at KEYNOA:

| Property          | Usage                                                             |
| ----------------- | ----------------------------------------------------------------- |
| $(serial)         | The device serial number                                          |
| $(guid)           | The device GUID                                                   |
| $(model)          | The device device model                                           |
| $(guid_enc)       | The Base62 encoded device GUID                                    |
| $(vendor)         | The name of the vendor of the device                              |
| $(hw_version)     | The hardware version (production data)                            |
| $(application)    | The application which was assigned by the Attributor              |
| $(plant)          | The plant which was assigned by the Attributor                    |
| $(localization)   | The localization which was assigned by the Attributor             |
| $(building)       | The building which was assigned by the Attributor                 |

## How to access the device properties?

Prior to creating a MQTT and/or an OPC UA Template on KEYNOA, it is essential to know the device properties. The following guide facilitates to access critical device details. 

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-properties.png)

Most of the properties are determined while creating the device specific Ownership Voucher. It is done at the manufacturing site. As part of device onboarding procedure, you will upload the voucher to KEYNOA. KEYNOA will help you visualize all critical device properties, very well before the device is fully provisioned.


### KEYNOA Dashboard

Access the device summary under `All Devices` on KEYNOA, as shown below. The summary fetches device details from the Ownership Voucher and displays the below details: 
- `Device Model`
- `Serial No`
- `GUID`

![KEYNOA](/img/KEYNOA/reference-doc/Device-Properties/device-summary.png)

Alternatively, when you click on the :gear: button of the device, a detailed device settings can be viewed as shown below. The same details are displayed as highlighted below.

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







