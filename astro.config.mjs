import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Used for canonical URLs, hreflang tags, and the XML sitemap.
const SITE = 'https://mistfallhunter.me';

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
        },
      },
    }),
  ],
});
