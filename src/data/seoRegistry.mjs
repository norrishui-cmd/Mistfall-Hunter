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
]);

export const INDEXABLE_SLUGS = new Set([
  // Core hubs with useful pre-launch answers.
  'news',
  'guides',
  'tools',
  'about',
  'weapons',
  'bosses',
  'loot',
  'soul-of-return',

  // Verified platform/release and evergreen explanation pages.
  'platforms',
  'game-pass',
  'game-pass-pc',
  'ps5',
  'steam',
  'steam-next-fest-demo',
  'system-requirements',
  'free-to-play',
  'controller-settings',
  'pvp-or-pve',
  'community',
  'pay-to-win',
  'age-rating',
  'anti-cheat',
  'glossary',
  'language-support',
  'similar-games',
]);

export const NOINDEX_REVIEW_NOTES = {
  faq: 'Kept accessible, but not promoted sitewide until it has stronger unique value than focused FAQ pages.',
  'best-builds': 'Pre-launch build hub is useful for players, but exact values and meta are not verified.',
  'ps5-performance': 'Performance details need live console verification.',
  'steam-deck': 'Steam Deck compatibility depends on Proton and anti-cheat behavior after launch.',
  'server-status': 'Server status page needs live operational data before indexing.',
  preload: 'Preload timing is not confirmed.',
  editions: 'Edition and package details are not fully confirmed.',
  'hallowgrove-chaos': 'Route and loot details need verified live markers.',
  'brandrgarde-chaos': 'Route and loot details need verified live markers.',
  'boss-locations': 'Specific boss locations need verified live map data.',
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
  const withoutLocale = normalized.startsWith('/zh/') ? normalized.slice(3) : normalized;
  const trimmed = withoutLocale.replace(/^\/|\/$/g, '');
  return trimmed || '';
}

export function isLocalizedPath(path = '/') {
  return normalizeSeoPath(path).startsWith('/zh/');
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
