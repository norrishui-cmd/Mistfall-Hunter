import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Used for canonical URLs, hreflang tags, and the XML sitemap.
const SITE = 'https://mistfallhunter.me';
const SOFT_NOINDEX_SLUGS = new Set([
  'mistfall-hunter-download-size',
  'mistfall-hunter-day-one-patch',
  'mistfall-hunter-maintenance-schedule',
  'mistfall-hunter-queue-time',
  'mistfall-hunter-error-code-guide',
  'mistfall-hunter-best-settings-steam-deck',
  'mistfall-hunter-accessibility-options',
  'mistfall-hunter-ping-and-lag',
  'mistfall-hunter-region-lock',
  'mistfall-hunter-can-you-respec',
  'mistfall-hunter-crafting-guide',
  'mistfall-hunter-patch-balance-watch',
  'mistfall-hunter-roadmap',
  'mistfall-hunter-season-one',
  'mistfall-hunter-post-launch-updates',
  'mistfall-hunter-economy-guide',
  'mistfall-hunter-progression-guide',
  'mistfall-hunter-gear-score-explained',
  'mistfall-hunter-rare-resources',
  'mistfall-hunter-farming-routes',
  'mistfall-hunter-meta-tracker',
  'mistfall-hunter-solo-meta',
  'mistfall-hunter-squad-meta',
  'mistfall-hunter-support-classes',
  'mistfall-hunter-tank-builds',
  'mistfall-hunter-ranged-builds',
  'mistfall-hunter-magic-builds',
  'mistfall-hunter-healer-builds',
  'mistfall-hunter-boss-difficulty',
  'mistfall-hunter-enemy-types',
  'mistfall-hunter-map-progression',
  'mistfall-hunter-daily-checklist',
  'mistfall-hunter-weekly-reset',
  'mistfall-hunter-update-history',
]);

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
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '');
        const slug = pathname.replace(/^\/zh\//, '').replace(/^\//, '');
        return !SOFT_NOINDEX_SLUGS.has(slug);
      },
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
