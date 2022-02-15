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

The output shoudl look like:


This completes the initial onboarding.

## Certificate Management

To complete the onboarding process, get the certificaes for the MQTT client 

```
cd ../cert_management
./cert_man
```

This completes the onboarding process.

## Configuration management

Next you activate the configuration management.

```
cd ../conf_management
./bin/conf_man
```

Now you have successfully setup the certification management.

## MQTT client

Now that you have completed the onboarding process you can run the MQTT client.

To confirm the connection was successfull you can use a MQTT subscribtion.
We recommend to use the **[Paho MQTT client](github.com/eclipse/paho.mqtt.c)**.
Although you can use any MQTT subscriber to your liking.
For authentication use this **[certificate](./assets/demo.crt.pem)** with your subscriber.

With the subscriber setup you can start the MQTT client publisher:
```
cd ../mqtt_client
./demo-client "Hello from DEVITY"
```
You can supply a string as a command line argument to the MQTT client to change the message it sends.

The output should look similar to this:
```
Got message: Hello from DEVITY
Connecting
Starting transmission
Waiting for up to 1 seconds for publication of Hello from DEVITY
on topic demo_messages for client with ClientID: ...
Message with delivery token 0 delivered
Disconnecting
```

On the subscribtion you can now see the message you provided to the MQTT client.
The MQTT client establishes the connection via certificate based TLS.
That way without the onboarding process authentication would not be possible.