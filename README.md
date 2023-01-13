# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Local Development

```
$ cd website
$ npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

We are using GitHub pages for hosting, GitHub actions are used to build the website and push to the `gh-pages` branch from where it is deployed.

## Package demo tar

Follow these steps to update/create the download packages with completed DI.
```
Download packages from Gitlab package registry
Rename/create folders acording to setup page
Move all projects into a demo-kit folder
Run prepare_device.sh in client-sdk folder with correct settings (model, serial, ...)
Delete prepare_device.sh
Run onboarder
Bundle up everything in a tar file
Upload voucher
```

### Initial Setup after cloning and creating a new branch
Install Node.js according to https://docusaurus.io/docs/installation
Go to the website folder in the root directory of your Git project and run this in your command line:

```
npm i
```

as second step run:

```
npm run start
```

Now a window should open with a local development server on localhost
