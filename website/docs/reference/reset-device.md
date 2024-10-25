---
sidebar_position: 9
sidebar_label: "Reset device"
title: Reset device
---

For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Ctrl/Strg+Alt+F1 and type in 
    
    /etc/keynoa-engine/reset.sh

:::note
After the reset, the device reboots and the new onboarding process starts.

Make sure to power off the device before it boots up, to prevent that the device onboards to old configurations again.
:::

:::note
This reset is not reflected in the KEYNOA Device Status column.
:::

:::caution
After the reboot, the onboarding starts immediately.
Make sure to setup KEYNOA properly. Especially, you should check the templates before restarting the device.

When onboarding the same device to e.g. ThingsBoard again, make sure that the device in ThingsBoard is deleted as well.
:::