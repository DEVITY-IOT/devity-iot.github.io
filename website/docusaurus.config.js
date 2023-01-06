// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DEVITY Documentation',
  tagline: 'Docs',
  url: 'https://devity-iot.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DEVITY-IOT', // Usually your GitHub org/user name.
  projectName: 'devity-iot.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DEVITY',
        logo: {
          alt: 'DEVITY Logo',
          src: 'img/DEVITY_just Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://devity.eu',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'mailto:support@devity.eu',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
//              {
//                label: 'Device Onboarding',
//                to: '/Device Onboarding/',
//              },
              {
                label: 'IOT Use Cases',
                to: '/IoT Use Cases',
              },
            ],
          },
          {
            title: 'About us',
            items: [
              {
                label: 'Website',
                href: 'https://devity.eu',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DEVITY-IOT',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'mail: support@devity.eu',
                to: 'mailto:support@devity.eu',
              },
              {
                label: 'tel: 05251/60-4424',
                to: 'tel:+495251604424',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DEVITY`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
