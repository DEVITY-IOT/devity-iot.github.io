---
slug: /faq
sidebar_position: 1
sidebar_label: "FAQ"
title: FAQ
---

## The device does not connect to the intended data hub. 
For a specific application like MQTT only a single template can be applied.
If multiple MQTT Templates exist the newer template will be ignored. Hence your new template referring to a new data hub will not be used because another template is already applied.
Make sure to have only a single template in the list or make sure the only a single templates apply to your device.

## Need to change the data hub on an onboarded device
It is possible to hot swap the data hub on a fully provisioned device. Create a new data hub with new MQTT-related information. Access the device settings to change the data hub.

:::info
Data hub hot swap is supported from  0.7.0 release onwards. 
:::

## No access to Thingsboard, Azure, and AWS
The passwords in the Credential Manager are intended as one-time passwords and should be changed after the first use. We recommend to store the new passwords in a password manager like [Bitwarden](https://bitwarden.com), [1Password](https://1password.com) or [KeyPassXC](https://keepassxc.org/).

Sometime the initial one-time passwords also expire after some time.

If the new password is lost please do not hesitate to reach out to us via e-mail or password. We are glad to help you and to provide you a new password.
[support@devity.eu](mailto:support@devity.eu)
