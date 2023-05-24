---
sidebar_label: "Reset device"
title: Reset device
---

## Reset device

For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Ctrl/Strg+Alt+F1 and type in 
    
    ./reset.sh

:::note
This reset is not reflected in the KEYNOA Device Status bar.
:::

After that the device reboots and the new onboarding process starts.
Make sure to power down the device before it boots up again to prevent that the device will be onboarded to the old configuration again.

:::caution
After the reboot, the onboarding starts immediately.
Make sure to setup KEYNOA right especially the templates before restarting the device.

When onboarding to Thingsboard again with the same device make sure that the device in Thingsboard is deleted as well.
:::