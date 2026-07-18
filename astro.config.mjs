import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { isIndexableUrl } from './src/data/seoRegistry.mjs';

// Used for canonical URLs, hreflang tags, and the XML sitemap.
const SITE = 'https://mistfallhunter.me';

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'de', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => isIndexableUrl(page),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
          de: 'de-DE',
          ja: 'ja-JP',
        },
      },
    }),
  ],
});
