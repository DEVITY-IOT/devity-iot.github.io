---
sidebar_position: 1
---
The following prerequisites are needed to start the tutorial series:
- You received the JanzTec device.
- You prepared a 24 V power supply for the device.
- You prepared an ethernet cable with to connect the device to the internet. The network should provide DHCP and DNS.  

- KEYNOA Eval Kit device is ready for operation and has access to the internet (see device details (//link einfügen)).
- Access to KEYNOA Cloud (see [instructions](#access-to-keynoa) ).
- Access to Thingsboard, Azure, and AWS (see [instructions](#access-to-thingsboard-azure-and-aws)).
- You have received a device voucher.

## Access to KEYNOA
You will get the access to your own KEYNOA Tenant via email. Please use the link to set a new password and login to KEYNOA.

## Access to Thingsboard, Azure, and AWS
DEVITY has prepared accounts for Thingsboard, Azure, and AWS to make the start as easy as possible for you. Your access to will be provided by the KEYNOA Credential Manager in your KEYNOA Cloud.
1. Just click on the lock icon in the header. 

![Prerequisite](/img/Prerequisite/Credential-Manager-1.png)

2. The KEYNOA Credential Manager will show you all information needed.
Please use the following links to get to the login website of the respective cloud:
- [Thingsboard Login](https://thingsboard.cloud/login)
- [Azure IoT Central Login](https://apps.azureiotcentral.com/home)
- [AWS IoT Core Login](https://aws.amazon.com/de/iot-core/)

![Prerequisite](/img/Prerequisite/Credential-Manager-2.png)

## Device Voucher
You will receive the device voucher via e-mail from DEVITY. With this voucher you can register the device to the KEYNOA enrollment service and start configuring the device. Please store the file securely and do not share it with anyone. 

## Reset device

For resetting the device we provide a script on the device. This is useful when you want to test out different data platforms with the same device. To reset the device connect the device to a keyboard and a monitor. Open the terminal with Ctrl/Strg+Alt+F1 and type in 
    
    ./reset.sh

After that the device reboots and the new onboarding process starts.

