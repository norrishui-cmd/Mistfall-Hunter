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
  '/faq/',
  '/game-data/',
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
  '/zh/faq/',
  '/zh/game-data/',
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
  '/de/game-data/',
  '/ja/',
  '/ja/release-date/',
  '/ja/beginner-guide/',
  '/ja/classes/',
  '/ja/builds/',
  '/ja/guides/',
  '/ja/performance/',
  '/ja/about/',
  '/ja/game-data/',
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

export const INDEXABLE_TAB_NEWS_SLUGS = new Set([
  'release-date-july-29-confirmed','pc-and-xbox-platforms-confirmed','xbox-play-anywhere-access-update','ten-supported-languages-announced','pc-system-requirements-published',
  'official-gameplay-loop-explained','solo-and-three-player-squads-confirmed','six-classes-two-weapon-stances','returner-woodling-extraction-role','pvpve-survival-priorities',
  'build-system-talents-affixes-skills','weapon-stance-build-planning','gem-affix-priority-framework','solo-vs-squad-build-differences','launch-meta-verification-policy',
  'bellring-anti-cheat-disclosure','xbox-pc-cross-platform-features','online-coop-two-to-three-players','online-match-player-count-listing','official-no-pay-to-win-position',
  'bellring-games-and-skystone-publishing','dark-fantasy-pvpve-world-overview','xbox-visual-and-audio-features','steam-hdr-family-sharing-features','deluxe-package-cosmetics-fate-coins',
]);

export const INDEXABLE_GAME_DATA_SLUGS = new Set([
  'withered-knight','mercenary','shadowstrix','sorcerer','blackarrow','seer',
  'holy-weapons','keys-and-treasure-chambers','legendary-class-sets','equipment-vouchers','friend-equipment-return',
  'brandrgarde-cataclysm','season-one-soul-hunt','fate-chart','ancestor-tree','pve-soul-revival',
  'open-beta-ended','beta-rewards','beta-regions-languages-controller','beta-new-content',
]);

export const NOINDEX_REVIEW_NOTES = {
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

// These slugs are on the language-agnostic INDEXABLE_SLUGS whitelist because
// the English page is real, launch-ready content. Their /zh/ counterpart is
// currently a machine-generated "Chinese Draft" placeholder (see
// localizeDraft() in the url*.ts data files) that reserves the URL with
// English filler text. Keep those specific locale paths out of the sitemap
// until real Chinese copy replaces the draft — see src/data/seoPages.ts's
// `draft` flag and isIndexable(), which this list must stay in sync with.
export const ZH_DRAFT_SLUGS = new Set([
  'best-class-for-beginners',
  'crossplay-status',
  'gameplay-overview',
  'known-issues-tracker',
  'price-status',
  'steam-charts-player-count',
  'steam-page-guide',
]);

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
  const newsMatch = normalized.match(/^\/(?:zh\/)?news\/([^/]+)\/$/);
  if (newsMatch) return INDEXABLE_TAB_NEWS_SLUGS.has(newsMatch[1]);
  const dataMatch = normalized.match(/^\/(?:(?:zh|de|ja)\/)?game-data\/([^/]+)\/$/);
  if (dataMatch) return INDEXABLE_GAME_DATA_SLUGS.has(dataMatch[1]);
  const slug = slugFromPath(normalized);
  if (isLocalizedPath(normalized) && normalized.startsWith('/zh/') && ZH_DRAFT_SLUGS.has(slug)) return false;
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
    if (!ZH_DRAFT_SLUGS.has(slug)) paths.add(normalizeSeoPath(`/zh/${slug}/`));
  }
  for (const slug of INDEXABLE_TAB_NEWS_SLUGS) {
    paths.add(normalizeSeoPath(`/news/${slug}/`));
    paths.add(normalizeSeoPath(`/zh/news/${slug}/`));
  }
  for (const slug of INDEXABLE_GAME_DATA_SLUGS) {
    paths.add(normalizeSeoPath(`/game-data/${slug}/`));
    paths.add(normalizeSeoPath(`/zh/game-data/${slug}/`));
    paths.add(normalizeSeoPath(`/de/game-data/${slug}/`));
    paths.add(normalizeSeoPath(`/ja/game-data/${slug}/`));
  }
  return [...paths].sort();
}

export function isIndexableUrl(url) {
  const parsed = new URL(url, SITE_URL);
  return isIndexablePath(parsed.pathname);
}
