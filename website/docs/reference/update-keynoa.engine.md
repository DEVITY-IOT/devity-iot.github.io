---
sidebar_position: 10
sidebar_label: "Update KEYNOA.engine"
title: Update KEYNOA.engine
---

## Update KEYNOA.engine from 0.6.6 to 0.7.0

KEYNOA Release 0.7.0 requires an update of KEYNOA.engine to 0.7.0.

The update works for already provisioned devices as well as for unprovisioned devices.

:::caution
The trust store under /etc/keynoa-engine/truststore gets deleted on migration.
If you have added own files in there, they will be lost.
:::

### Update KEYNOA EvalKit Device from JanzTec

```sh
sudo apt update
sudo apt upgrade
```

#### To update only keynoa engine

```sh
sudo apt update
sudo apt install --only-upgrade keynoa-engine
```

### Update KEYNOA EvalKit Container


:::caution
This will reset the provisioning state and remove all data from the container.
:::

Just rebuild the docker container and follow the docker guide again.
```sh
docker compose up -d --build
```
