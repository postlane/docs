// SPDX-License-Identifier: CC-BY-4.0
import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Postlane',
  tagline: 'Ship code. Tell the world.',
  url: 'https://docs.postlane.dev',
  baseUrl: '/',
  organizationName: 'postlane',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/postlane/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Postlane Docs',
      items: [
        {
          href: 'https://postlane.dev',
          label: 'postlane.dev',
          position: 'right',
        },
        {
          href: 'https://github.com/postlane/docs',
          label: 'GitHub',
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
            { label: 'Installation', to: '/installation' },
            { label: 'Quick Start', to: '/quick-start' },
            { label: 'Scheduling', to: '/scheduling' },
            { label: 'Analytics', to: '/analytics' },
          ],
        },
        {
          title: 'Links',
          items: [
            { label: 'postlane.dev', href: 'https://postlane.dev' },
            { label: 'Pricing', href: 'https://postlane.dev/pricing' },
            { label: 'GitHub', href: 'https://github.com/postlane' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Postlane.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'toml', 'rust', 'json'],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
