import type { Lang } from '../i18n';

export type SourceRef = {
  title: string;
  publisher: string;
  url: string;
  type: 'official' | 'store' | 'preview' | 'database';
  note: string;
};

export type HubLink = {
  title: string;
  desc: string;
  href: string;
  cluster: 'core' | 'release' | 'guides' | 'maps' | 'builds' | 'bosses' | 'tools';
};

export const lastUpdated = '2026-07-17';

export const sources: SourceRef[] = [
  {
    title: 'Mistfall Hunter official site',
    publisher: 'Bellring Games',
    url: 'https://www.mistfallhunter.com/',
    type: 'official',
    note: 'Primary source for official game positioning, terminology, media, and future announcements.',
  },
  {
    title: 'Mistfall Hunter on Steam',
    publisher: 'Steam',
    url: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/',
    type: 'store',
    note: 'Storefront reference for PC availability, tags, screenshots, and release messaging.',
  },
  {
    title: 'Mistfall Hunter Xbox listing',
    publisher: 'Xbox',
    url: 'https://www.xbox.com/en-US/games/store/mistfall-hunter/9p8x6tvw9zw8',
    type: 'store',
    note: 'Storefront reference for Xbox, Game Pass, platform, and availability signals.',
  },
  {
    title: 'Mistfall Hunter preview',
    publisher: 'PC Gamer',
    url: 'https://www.pcgamer.com/games/rpg/mistfall-hunters-demo-might-finally-convince-me-a-souls-sicko-to-give-extraction-games-a-proper-go-even-if-its-more-modern-god-of-war-than-nightreign/',
    type: 'preview',
    note: 'Preview coverage used for demo impressions and pre-launch gameplay context.',
  },
  {
    title: 'Mistfall Hunter Steam Next Fest preview',
    publisher: 'GamesRadar+',
    url: 'https://www.gamesradar.com/games/action-rpg/steam-next-fests-top-demo-mistfall-hunter-is-basically-dark-souls-but-pvp-extraction/',
    type: 'preview',
    note: 'Preview coverage used for map, extraction, and class-context cross-checking.',
  },
  {
    title: 'ID@Xbox showcase coverage',
    publisher: 'Windows Central',
    url: 'https://www.windowscentral.com/gaming/xbox/everything-announced-for-xbox-and-pc-at-the-id-xbox-and-ign-april-2026-showcase',
    type: 'preview',
    note: 'Platform and Game Pass context from Xbox-focused coverage.',
  },
];

const enHubLinks: HubLink[] = [
  { title: 'Release date', desc: 'Launch timing, platforms, price, and Game Pass status.', href: '/release-date', cluster: 'release' },
  { title: 'Steam charts tracker', desc: 'Player-count search tracker, Steam interest signals, and launch-week interpretation.', href: '/steam-charts-player-count', cluster: 'release' },
  { title: 'Steam page guide', desc: 'Steam listing, tags, wishlist intent, and store-page checks before launch.', href: '/steam-page-guide', cluster: 'release' },
  { title: 'Gameplay overview', desc: 'PvPvE extraction loop, combat expectations, class choice, and loot-risk basics.', href: '/gameplay-overview', cluster: 'guides' },
  { title: 'Crossplay status', desc: 'PC, Xbox, and PlayStation crossplay questions with confirmed and unconfirmed notes separated.', href: '/crossplay-status', cluster: 'release' },
  { title: 'Price status', desc: 'Price, edition, Game Pass, and platform purchase watchpoints before launch.', href: '/price-status', cluster: 'release' },
  { title: 'News hub', desc: 'Pre-launch tracker, beta notes, and official update watchlist.', href: '/news', cluster: 'release' },
  { title: 'FAQ', desc: 'Fast answers for launch, platforms, classes, extraction, maps, and beta progress.', href: '/faq', cluster: 'core' },
  { title: 'Beginner guide', desc: 'Core loop, death penalty, Soul of Return, and first-run priorities.', href: '/beginner-guide', cluster: 'guides' },
  { title: 'Classes', desc: 'Class roles and tier-list context for solo, PvP, and beginner players.', href: '/classes', cluster: 'guides' },
  { title: 'Best builds', desc: 'Role-based build hub for pre-launch planning and live updates.', href: '/best-builds', cluster: 'builds' },
  { title: 'Builds hub', desc: 'Class build directions and affix tracking.', href: '/builds', cluster: 'builds' },
  { title: 'Interactive map', desc: 'Map filters for extraction, bosses, loot, and landmarks.', href: '/map', cluster: 'maps' },
  { title: 'Extraction map', desc: 'Exit planning, safe routes, and Soul of Return routing.', href: '/extraction-map', cluster: 'maps' },
  { title: 'Boss locations', desc: 'Mist Lord location tracking, boss-route risk, and PvP pressure.', href: '/boss-locations', cluster: 'bosses' },
  { title: 'Bosses & PvE', desc: 'Mist Lords, Corrupted enemies, boss prep, and reward routing.', href: '/bosses', cluster: 'bosses' },
  { title: 'Performance', desc: 'Stutter, crash, low-FPS, and settings checklist.', href: '/performance', cluster: 'tools' },
  { title: 'Server status', desc: 'Launch-week status hub for login issues, downtime, and maintenance checks.', href: '/server-status', cluster: 'tools' },
  { title: 'Known issues tracker', desc: 'Structured bug and workaround tracker for crashes, stutter, connection, and launch issues.', href: '/known-issues-tracker', cluster: 'tools' },
  { title: 'Sources', desc: 'Official, store, and preview references used by this site.', href: '/sources', cluster: 'core' },
  { title: 'Updates', desc: 'Editorial update log and launch-day verification plan.', href: '/updates', cluster: 'core' },
  { title: 'HTML sitemap', desc: 'Human-readable discovery page for Google and visitors.', href: '/sitemap', cluster: 'core' },
];

const zhHubLinks: HubLink[] = enHubLinks.map((link) => ({
  ...link,
  href: link.href === '/' ? '/zh/' : `/zh${link.href}`,
}));

export function getHubLinks(lang: Lang): HubLink[] {
  return lang === 'zh' ? zhHubLinks : enHubLinks;
}

export function getSourceLabels(lang: Lang) {
  return lang === 'zh'
    ? {
        updated: '最后更新',
        quality: '内容可信度',
        confirmed: '已确认',
        preview: '预览观察',
        verify: '待验证',
        sources: '主要来源',
      }
    : {
        updated: 'Last updated',
        quality: 'Editorial quality',
        confirmed: 'Confirmed',
        preview: 'Preview-based',
        verify: 'To verify',
        sources: 'Primary sources',
      };
}
