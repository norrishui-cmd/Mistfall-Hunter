export const SITE_URL = 'https://mistfallhunter.me';

export const INDEXABLE_STATIC_PATHS = new Set([
  '/',
  '/release-date/',
  '/beginner-guide/',
  '/classes/',
  '/builds/',
  '/build-planner/',
  '/map/',
  '/performance/',
  '/sources/',
  '/updates/',
  '/sitemap/',
  '/zh/',
  '/zh/release-date/',
  '/zh/beginner-guide/',
  '/zh/classes/',
  '/zh/builds/',
  '/zh/build-planner/',
  '/zh/map/',
  '/zh/performance/',
  '/zh/sources/',
  '/zh/updates/',
  '/zh/sitemap/',
  '/de/',
  '/de/release-date/',
  '/de/beginner-guide/',
  '/de/classes/',
  '/de/builds/',
  '/de/guides/',
  '/de/performance/',
  '/de/about/',
  '/ja/',
  '/ja/release-date/',
  '/ja/beginner-guide/',
  '/ja/classes/',
  '/ja/builds/',
  '/ja/guides/',
  '/ja/performance/',
  '/ja/about/',
]);

export const INDEXABLE_SLUGS = new Set([
  // Small, evidence-first pre-launch index. Other URLs remain available to
  // readers but wait for live data or sources before being promoted to Google.
  'news',
  'guides',
  'tools',
  'about',
  'weapons',
  'bosses',
  'loot',
  'soul-of-return',

  'steam-charts-player-count', 'steam-page-guide', 'gameplay-overview',
  'best-class-for-beginners', 'crossplay-status', 'price-status',
  'server-status', 'best-builds', 'extraction-map', 'boss-locations',
  'known-issues-tracker',
]);

export const NOINDEX_REVIEW_NOTES = {
  faq: 'Kept accessible, but not promoted sitewide until it has stronger unique value than focused FAQ pages.',
  'ps5-performance': 'Performance details need live console verification.',
  'steam-deck': 'Steam Deck compatibility depends on Proton and anti-cheat behavior after launch.',
  preload: 'Preload timing is not confirmed.',
  editions: 'Edition and package details are not fully confirmed.',
  'hallowgrove-chaos': 'Route and loot details need verified live markers.',
  'brandrgarde-chaos': 'Route and loot details need verified live markers.',
  'loot-locations': 'Specific loot locations need verified live map data.',
  'boss-rewards': 'Reward tables need verified live drops.',
  'extraction-route-planner': 'Route planner needs verified extraction data.',
  'solo-extraction-routes': 'Solo routes need verified launch data.',
};

export function normalizeSeoPath(path = '/') {
  let raw = String(path || '/').trim();
  if (!raw) raw = '/';
  if (raw.startsWith(SITE_URL)) raw = new URL(raw).pathname;
  if (!raw.startsWith('/')) raw = `/${raw}`;
  raw = raw.replace(/\/{2,}/g, '/');
  if (raw !== '/' && !raw.endsWith('/')) raw = `${raw}/`;
  return raw;
}

export function slugFromPath(path = '/') {
  const normalized = normalizeSeoPath(path);
  const withoutLocale = normalized.replace(/^\/(?:zh|de|ja)(?=\/)/, '');
  const trimmed = withoutLocale.replace(/^\/|\/$/g, '');
  return trimmed || '';
}

export function isLocalizedPath(path = '/') {
  return /^\/(?:zh|de|ja)\//.test(normalizeSeoPath(path));
}

export function isIndexableSlug(slug) {
  return INDEXABLE_SLUGS.has(String(slug || '').replace(/^\/|\/$/g, ''));
}

export function isIndexablePath(path = '/') {
  const normalized = normalizeSeoPath(path);
  if (INDEXABLE_STATIC_PATHS.has(normalized)) return true;
  const slug = slugFromPath(normalized);
  return Boolean(slug) && isIndexableSlug(slug);
}

export function localizedSeoPath(path = '/', lang = 'en') {
  const normalized = normalizeSeoPath(path);
  const english = normalized.startsWith('/zh/') ? normalizeSeoPath(normalized.slice(3) || '/') : normalized;
  if (lang === 'zh') return english === '/' ? '/zh/' : normalizeSeoPath(`/zh${english}`);
  return english;
}

export function getIndexablePaths() {
  const paths = new Set(INDEXABLE_STATIC_PATHS);
  for (const slug of INDEXABLE_SLUGS) {
    paths.add(normalizeSeoPath(`/${slug}/`));
    paths.add(normalizeSeoPath(`/zh/${slug}/`));
  }
  return [...paths].sort();
}

export function isIndexableUrl(url) {
  const parsed = new URL(url, SITE_URL);
  return isIndexablePath(parsed.pathname);
}
