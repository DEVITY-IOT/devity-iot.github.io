---
sidebar_label: "Device Status"
title: Device Status
---

This page explains the possible device status which is shown in device list.

## Device Status

This status gives information about the life cycle of a device with respect to KEYNOA.
First there is only a ("new") voucher known to KEYNOA. After uploading the voucher KEYNOA needs some time to prepare for the device.
Then KEYNOA is ("waiting") for the device to connect.
When the device onbording protocol was executed the device is either ("provisioned") to KEYNOA successfully or it is in an ("error") state.

| Status            | Explanation                                                       |
| ----------------- | ----------------------------------------------------------------- |
| new               | A new voucher was uploaded and is being processed.         |
| waiting           | KEYNOA is now ready to connect with the device and is waiting for it to connect. |
| provisioned		| The device has connected to KEYNOA and has been successfully provisioned. |
| error				| An error occurred while processing the voucher or onboarding the device. |

In a successful run, the device passes the device statuses in the following order:
1. new
2. waiting
3. provisioned

<!---
## To0 Status
A user with the role developer in addition sees the column ("To0 Status").
While KEYNOA is preparing for the first request of a device, the To0 protocol is executed.
After a voucher is uploaded the device needs to be registered internally


| Status            | Explanation                                                       |
| ----------------- | ----------------------------------------------------------------- |
| waiting			| Waiting to be picked up by the scheduler. |
| started           | The creation of the receiving endpoint started.         |
| completed         | The endpoint is setup.  |
| error				| An error occurred while processing the voucher or setting up the receiving endpoint. |

In a successful run, the device passes the To0 statuses in the following order:
1. waiting
2. started
3. completed
-->
