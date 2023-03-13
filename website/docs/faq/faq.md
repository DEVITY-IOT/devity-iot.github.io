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