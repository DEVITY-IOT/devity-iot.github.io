---
sidebar_position: 3
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
cd onboarding
./onboarder
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
cd cert-man
./cert-man
```

The output should end like this:

```
mqtt: Success
Init_cert: Success
```

Now you have generated the certificates for the MQTT client.

## Configuration management

The configuration manager is used to continously provide updated configurations for programs.
During this tutorial it will create the configuration for the MQTT client.
Run the following command:
```
cd conf-man
source confd.conf
./conf-man /home/pi/dty/conf-man/conf-man \
    -backend=etcdv3 \
    -client-ca-keys=${CLIENT_CA_KEYS} \
    -client-cert=${CLIENT_CERT} \
    -client-key=${CLIENT_KEY} \
    -confdir=${CONFD_DIR} \
    -node=${NODE}
```

The output should look like:

```
Put confd output here
```

Now you have generated the configuration for the MQTT client.
Also this compeltes the onboarding process and the operation of the device can continue as normal.

## MQTT client

Now that you have completed the onboarding process you can run the MQTT client.

To confirm that the connection was successfull you can use a MQTT subscribtion.
We recommend to use the **[Paho MQTT client](github.com/eclipse/paho.mqtt.c)** CLI interface.
Although you can use any MQTT subscriber to your liking.
For authentication use this **[certificate](./assets/demo.crt.pem)** with your subscriber.

With the subscriber setup you can start the MQTT client publisher:
```
cd ../mqtt-client
./demo-client config.ini --simulator
```
You can supply a string as a command line argument to the MQTT client to change the message it sends.

The output should look similar to this:
```
Connecting
Starting transmission
Waiting for up to 1 seconds for publication of {temperature:...}
on topic demo_messages for client with ClientID: ...
Message with delivery token 0 delivered
Waiting for up to 1 seconds for publication of {temperature:...}
on topic demo_messages for client with ClientID: ...
Message with delivery token 1 delivered
...
```

On the subscribtion you can now see the message you provided to the MQTT client.
The MQTT client establishes the connection via certificate based TLS.
That way without the onboarding process authentication would not be possible.