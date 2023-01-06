---
sidebar_position: 1
sidebar_label: "Device Status"
title: Device Status
---

This page explains the possible device status which is shown in device list:

| Status            | Explanation                                                       |
| ----------------- | ----------------------------------------------------------------- |
| new               | A new voucher was uploaded and is beeing processed.         |
| waiting           | KEYNOA is now ready to connect with the device and is waiting for it to connect. |
| active			| The device has connected to KEYNOA and has been successfully onboarded. |
| error				| An error occured while processing the voucher or onboarding the device. |

In a successful run, the device goes through the states in the following order:
1. new
2. waiting
3. active