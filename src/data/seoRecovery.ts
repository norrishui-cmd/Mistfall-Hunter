export type RecoveryLink = {
  title: string;
  desc: string;
  href: string;
};

export const recoveryFocusLinks: RecoveryLink[] = [
  { title: 'Release date', desc: 'Launch timing, platforms, Game Pass, and price status.', href: '/release-date' },
  { title: 'Steam charts tracker', desc: 'Player-count and Steam interest page for current trend demand.', href: '/steam-charts-player-count' },
  { title: 'Steam page guide', desc: 'Steam listing, install, demo, tags, and launch watch.', href: '/steam-page-guide' },
  { title: 'Gameplay overview', desc: 'PvPvE extraction loop, combat, loot risk, and first expectations.', href: '/gameplay-overview' },
  { title: 'Beginner guide', desc: 'Death penalty, extraction, first route, and early mistakes.', href: '/beginner-guide' },
  { title: 'Classes', desc: 'Known classes, beginner picks, solo notes, and role comparison.', href: '/classes' },
  { title: 'Best beginner class', desc: 'Starter class decision page for launch-week players.', href: '/best-class-for-beginners' },
  { title: 'Crossplay status', desc: 'PC, Xbox, PS5, squad, and matchmaking questions.', href: '/crossplay-status' },
  { title: 'Price status', desc: 'Price, edition, free-to-play, and Game Pass intent.', href: '/price-status' },
  { title: 'Server status', desc: 'Launch-week server, login, maintenance, and queue watch.', href: '/server-status' },
  { title: 'Interactive map', desc: 'Map hub for routes, bosses, loot, and extraction points.', href: '/map' },
  { title: 'Builds', desc: 'Build, affix, class role, and launch meta hub.', href: '/builds' },
];

export const softNoindexSlugs = new Set<string>([
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
