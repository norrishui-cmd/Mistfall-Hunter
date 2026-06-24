import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ CHANGE THIS to your real domain before deploying.
// It is used for canonical URLs, hreflang tags, and the sitemap.
const SITE = 'https://mistfallhunter.me';

export default defineConfig({
  site: SITE,
  // English lives at the root (/, /release-date).
  // Chinese lives under /zh (/zh, /zh/release-date).
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
