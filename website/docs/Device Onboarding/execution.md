---
sidebar_position: 4
---

# Execution

In this part you will complete the onboarding process and run the example use case of an MQTT client.
For this process you will need three seperate terminals.
Under normal circumstances these terminals are not neccessary because the processes would be run by a daemon like systemd.

## Initial onboarding

First you will need to complete the initial setup of the device.
This will get the certificates and configuration data from our services that our other tools will use to authenticate.
For this a secure channel is used that was setup during preprovisioning.
The data is only used by our tools and not by the MQTT client.
Its configuration and certificats will be obtained in the next two steps.
Run the following commands to do so:  
```
./linux-client
```

The output should end like this:

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ DEVITY Onboard Complete    @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```

This completes the initial onboarding.

## Certificate Management

The certificate manager is used to generate and update certificates of programs.
The onboarder provides initial certificates and configurations for the certificate manager.
Now the certificate manager generates the certificate for the MQTT client:
Run the following command:
```
./cert-man/cert-man
```

The output should end like this:

```
...
confd: Success
mqtt: Success
Init_cert: Success
```

Now you have generated the certificates for the MQTT client.

## Configuration management

The configuration manager is used to continously provide updated configurations for programs.
During this tutorial it will create the configuration for the MQTT client.
Run the following command:
```
./conf-man/bin/confd -config-file=conf-man/confd.conf

```

The output should look like:

```
INFO Backend set to etcdv3
INFO Starting confd
INFO Backend source(s) set to ...
INFO ./mqtt-client/mqtt.ini has md5sum ... should be ...
INFO Target config ./mqtt-client/mqtt.ini out of sync
INFO Target config ./mqtt-client/mqtt.ini has been updated
```

Now you have generated the configuration for the MQTT client.
Also this compeltes the onboarding process and the operation of the device can continue as normal.

## MQTT client

Now that you have completed the onboarding process you can run the MQTT client.

To confirm that the connection was successfull you can use a MQTT subscribtion.
We recommend to use the **[Paho MQTT client](https://github.com/eclipse/paho.mqtt.c)** CLI interface.
Although you can use any MQTT subscriber to your liking.
For authentication use this **[certificate](./assets/demo.crt.pem)** with your subscriber.

With the subscriber setup you can start the MQTT client publisher:
```
./mqtt-client/mqtt-client mqtt-client/mqtt.ini --simulator
```
You can supply a string as a command line argument to the MQTT client to change the message it sends.

The output should look similar to this:
```
Connecting
waiting for connection
Subscribing to topic ... for client ... using QoS ...
Subscribe succeeded
Starting transmission
Send {temperature:..., timestamp:...} on topic ... for client with ClientID: ...
Message with token value ... delivery confirmed
Send {temperature:..., timestamp:...} on topic ... for client with ClientID: ...
Message with token value ... delivery confirmed
Send {temperature:..., timestamp:...} on topic ... for client with ClientID: ...
Message with token value ... delivery confirmed
...
```

On the subscribtion you can now see the message you provided to the MQTT client.
The MQTT client establishes the connection via certificate based TLS.
That way without the onboarding process authentication would not be possible.