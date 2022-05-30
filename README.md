# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Local Development

```
$ npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

We are using GitHub pages for hosting, GitHub actions are used to build the website and push to the `gh-pages` branch from where it is deployed.

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
