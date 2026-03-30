import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

export default defineConfig({
  server: { port: 4019 },
  site: 'https://inheritr.halisonworks.com',

  integrations: [
    sitemap(),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-light',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'nb',
    locales: ['en', 'nb'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
