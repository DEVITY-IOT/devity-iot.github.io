// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Device onboarding',
  tagline: 'Tutorial',
  url: 'https://pages.git.guuthe.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DEVITY-IOT', // Usually your GitHub org/user name.
  projectName: 'devity-iot.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
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
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Device onboarding',
          },
          {
            href: 'https://devity.eu',
            label: 'Website',
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
              {
                label: 'Device onboarding tutorial',
                to: '/docs/',
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DEVITY device onboarding, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
