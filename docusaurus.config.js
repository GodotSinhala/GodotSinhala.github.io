// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Godot සිංහල',
  tagline: 'Godot වලින් Game හදමු.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://godot-sinhala.miusoftgames.com/',
  baseUrl: '/',

  organizationName: 'miusoftgames',
  projectName: 'Godot සිංහල',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'si'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      stylesheets: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
          type: 'text/css',
        },
      ],
      // Default OG image when sharing any page (1200x630px recommended)
      image: 'img/social-card.png',

      // Site-wide meta tags
      metadata: [
        {
          name: 'keywords',
          content: 'godot, godot engine, godot tutorials, learn godot, game development, godot 4, indie game dev, godot beginners',
        },
        { name: 'author', content: 'Godot සිංහල' },

        // Open Graph
        { property: 'og:site_name', content: 'Godot සිංහල' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
      ],

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Godot සිංහල',
        logo: {
          alt: 'Godot සිංහල Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://www.youtube.com/@KasunMiu',
            label: 'YouTube',
            position: 'right',
          },
        ],
      },

      footer: {
        copyright: `© ${new Date().getFullYear()} Godot සිංහල by KasunMiu - Made with 💙`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;