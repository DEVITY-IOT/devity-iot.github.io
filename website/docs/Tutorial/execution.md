---
sidebar_position: 3
---

# Execution

In this part you will compelte the onboarding process and run the example usecase of an MQTT client.
For this process you will need three seperate terminals.
Under normal circumstances these terminals are not neccessary because the processes would be run by a daemon like systemd.

## Initial onboarding

First you will need to complete the initial setup of the device.
Run the following commands to do so:  
```
cd initial
./linux-client
```
This completes the initial onboarding.

## Configuration management

Next you activate the configuration management.

```
cd ../conf_management
./bin/conf_man
```

Now you have successfully setup the certification management.

## Certificate Management

To complete the onboarding process, get the certificaes for the MQTT client 

```
cd ../cert_management
./cert_man
```

This completes the onboarding process.

## MQTT client

Now that you have completed the onboarding process you can run the MQTT client.
```
cd ../mqtt_client
./mqtt_client "Hello, World!"
```
You can supply a string as a command line argument to the MQTT client to change the message it sends.

On the website **(create react page that displays the MQTT output)** you can now see the message you provided to the MQTT client.
The MQTT client establishes the connection via certificate based TLS.
That way without the onboarding process authentication would not be possible.
