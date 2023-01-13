---
sidebar_position: 1
sidebar_label: "Device Status"
title: Device Status
---

This page explains the possible device status which is shown in device list.

## Device Status

This status gives information about the lifecycle of a device with respect to KEYNOA.
First there is only a ("new") voucher known to KEYNOA. After uploading the voucher KEYNOA needs some time to prepare for the device.
Then KEYNOA is ("waiting") for the device to connect.
When the device onbording protocol was executed the device is either ("actively") connected to KEYNOA or in an ("error") state.

| Status            | Explanation                                                       |
| ----------------- | ----------------------------------------------------------------- |
| new               | A new voucher was uploaded and is beeing processed.         |
| waiting           | KEYNOA is now ready to connect with the device and is waiting for it to connect. |
| active			| The device has connected to KEYNOA and has been successfully onboarded. |
| error				| An error occured while processing the voucher or onboarding the device. |

In a successful run, the device passes the device status in the following order:
1. new
2. waiting
3. active

## To0 Status
A user with the role developer in addition sees the column ("To0 Status").
While KEYNOA is preparing for the first request of a device, the To0 protocol is executed.


| Status            | Explanation                                                       |
| ----------------- | ----------------------------------------------------------------- |
| waiting			| After receiving a voucher the creation of a receiving endpoint for a device is scheduled. |
| started           | The creation of the receiving endpoint started .         |
| completed         | The endpoint is setup  |
| error				| An error occured while processing the voucher or seting up the receiving endpoint. |

In a successful run, the device passes the To0 states in the following order:
1. waiting
2. started
3. completed
