import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

type ExpansionBrief = {
  slug: string;
  group: PriorityLink['group'];
  template: NonNullable<SeoPage['template']>;
  keyword: string;
  intent: string;
  focus: string;
  caution: string;
  update: string;
};

const baseCards = [
  { title: 'Beginner guide', desc: 'Core extraction loop and early-route habits.', href: '/beginner-guide' },
  { title: 'Best builds', desc: 'Class builds, affixes, and role planning.', href: '/best-builds' },
  { title: 'Interactive map', desc: 'Map routes, exits, bosses, and loot planning.', href: '/map' },
];

const buildCards = [
  { title: 'Class skill trees', desc: 'Plan upgrades by role and route.', href: '/class-skill-trees' },
  { title: 'Affix priority', desc: 'Which gear rolls are worth banking.', href: '/affix-priority' },
  { title: 'Squad comps', desc: 'Team roles for PvPvE extraction.', href: '/squad-comps' },
];

const techCards = [
  { title: 'Performance fixes', desc: 'FPS, stutter, crashes, and settings.', href: '/performance' },
  { title: 'Server status', desc: 'Maintenance and connection issue tracker.', href: '/server-status' },
  { title: 'Known issues tracker', desc: 'Crashes, queues, install issues, and bugs.', href: '/known-issues-tracker' },
];

const briefs: ExpansionBrief[] = [
  { slug: 'dark-and-darker-vs-mistfall-hunter', group: 'guides', template: 'guide', keyword: 'Dark and Darker vs Mistfall Hunter', intent: 'comparison search from extraction players', focus: 'fantasy extraction differences, camera feel, class roles, loot risk, and PvP pressure', caution: 'avoid claiming one game is better before live balance is stable', update: 'refresh after launch with live queue, class, and monetization differences' },
  { slug: 'dungeonborne-vs-mistfall-hunter', group: 'guides', template: 'guide', keyword: 'Dungeonborne vs Mistfall Hunter', intent: 'comparison search from fantasy extraction players', focus: 'third-person combat, map pressure, gear loss, classes, and team play', caution: 'avoid unsupported player-count or monetization claims', update: 'add launch hands-on comparison after Mistfall Hunter release' },
  { slug: 'elden-ring-nightreign-vs-mistfall-hunter', group: 'guides', template: 'guide', keyword: 'Elden Ring Nightreign vs Mistfall Hunter', intent: 'soulslike comparison search', focus: 'extraction loop versus run-based boss survival, PvP stakes, and build planning', caution: 'do not overstate similarity beyond broad action-RPG and risk-reward structure', update: 'revise after Mistfall Hunter launch and current Nightreign state' },
  { slug: 'escape-from-tarkov-vs-mistfall-hunter', group: 'guides', template: 'guide', keyword: 'Escape from Tarkov vs Mistfall Hunter', intent: 'extraction genre comparison search', focus: 'fantasy melee extraction versus tactical shooter extraction', caution: 'avoid borrowing shooter-specific advice that does not fit melee ARPG combat', update: 'add live loot-loss and economy details after launch' },
  { slug: 'hunt-showdown-vs-mistfall-hunter', group: 'guides', template: 'guide', keyword: 'Hunt Showdown vs Mistfall Hunter', intent: 'PvPvE comparison search', focus: 'boss pressure, sound cues, extraction timing, and ambush behavior', caution: 'avoid assuming identical bounty or extraction rules', update: 'update with verified boss and bell extraction mechanics' },
  { slug: 'dark-souls-fans-guide', group: 'guides', template: 'guide', keyword: 'Mistfall Hunter guide for Dark Souls fans', intent: 'soulslike audience onboarding', focus: 'stamina, spacing, no lock-on, death risk, and extraction greed control', caution: 'do not treat it like a pure single-player soulslike', update: 'add launch combat tuning notes and controller settings' },
  { slug: 'extraction-shooter-players-guide', group: 'guides', template: 'guide', keyword: 'Mistfall Hunter guide for extraction shooter players', intent: 'genre transition search', focus: 'translating extraction habits into melee, magic, classes, and third-person PvP', caution: 'avoid shooter assumptions about sightlines, ammo, and recoil', update: 'add post-launch economy and route examples' },
  { slug: 'soulslike-extraction-guide', group: 'guides', template: 'guide', keyword: 'soulslike extraction guide', intent: 'broad genre explainer search', focus: 'how deliberate combat changes extraction risk and route planning', caution: 'avoid generic soulslike advice without extraction context', update: 'add specific Mistfall Hunter examples after launch' },
  { slug: 'is-mistfall-hunter-like-dark-souls', group: 'guides', template: 'faq', keyword: 'is Mistfall Hunter like Dark Souls', intent: 'pre-purchase comparison question', focus: 'similarities in deliberate combat and differences in extraction structure', caution: 'avoid calling it a Dark Souls clone', update: 'refresh after release reviews and player impressions' },
  { slug: 'is-mistfall-hunter-like-dark-and-darker', group: 'guides', template: 'faq', keyword: 'is Mistfall Hunter like Dark and Darker', intent: 'fantasy extraction comparison question', focus: 'shared fantasy extraction appeal and different camera/combat feel', caution: 'avoid claiming identical systems before launch', update: 'add live feature comparison after launch' },

  { slug: 'best-graphics-settings', group: 'tools', template: 'tool', keyword: 'best graphics settings', intent: 'performance optimization search', focus: 'stable frame pacing, visibility, shadows, effects, and fog readability', caution: 'avoid settings that make enemies and exits harder to read', update: 'add exact setting names and benchmark screenshots after launch' },
  { slug: 'best-visibility-settings', group: 'tools', template: 'tool', keyword: 'best visibility settings', intent: 'PvP readability search', focus: 'seeing enemies, loot, exits, and boss threats without over-darkening the image', caution: 'avoid sacrificing frame pacing for cinematic settings', update: 'add platform-specific menus after launch' },
  { slug: 'stutter-fix-guide', group: 'tools', template: 'tool', keyword: 'stutter fix guide', intent: 'PC troubleshooting search', focus: 'drivers, frame caps, shader behavior, overlays, and settings triage', caution: 'separate server hitching from local performance problems', update: 'add known issue notes and patch references after launch' },
  { slug: 'crash-fix-guide', group: 'tools', template: 'tool', keyword: 'crash fix guide', intent: 'technical issue search', focus: 'verify files, drivers, overlays, permissions, and crash reproduction notes', caution: 'avoid deleting saves or config files without backup guidance', update: 'add exact crash messages and official fixes after launch' },
  { slug: 'low-fps-fix-guide', group: 'tools', template: 'tool', keyword: 'low FPS fix guide', intent: 'performance troubleshooting search', focus: 'GPU load, CPU bottlenecks, frame cap, effects, shadows, and resolution scaling', caution: 'avoid reducing readability so far that PvP awareness gets worse', update: 'add benchmark tiers after launch' },
  { slug: 'best-controller-sensitivity', group: 'tools', template: 'tool', keyword: 'best controller sensitivity', intent: 'input settings search', focus: 'camera turn speed, aim control, melee tracking, and class-specific comfort', caution: 'avoid one universal number for every class', update: 'add exact menu values after launch' },
  { slug: 'best-keyboard-mouse-settings', group: 'tools', template: 'tool', keyword: 'best keyboard and mouse settings', intent: 'PC input search', focus: 'camera precision, keybind comfort, quick access, dodge, block, and weapon swap', caution: 'avoid copying controller advice directly to mouse input', update: 'add keybind screenshots after launch' },
  { slug: 'ultrawide-support-guide', group: 'tools', template: 'faq', keyword: 'ultrawide support guide', intent: 'display compatibility search', focus: 'aspect ratio, UI scaling, visibility, and performance cost', caution: 'do not claim support until launch build is checked', update: 'verify ultrawide behavior after launch' },
  { slug: 'cloud-gaming-guide', group: 'news', template: 'faq', keyword: 'cloud gaming guide', intent: 'Xbox cloud access search', focus: 'streaming availability, latency, controller comfort, and launch access checks', caution: 'do not claim cloud access without storefront confirmation', update: 'update when Xbox listing confirms availability' },
  { slug: 'family-sharing-guide', group: 'news', template: 'faq', keyword: 'family sharing guide', intent: 'Steam or platform access question', focus: 'account access, shared libraries, online restrictions, and launch store rules', caution: 'do not assume family sharing works for online games', update: 'verify platform rules after launch' },

  { slug: 'best-route-for-beginners', group: 'guides', template: 'map', keyword: 'best route for beginners', intent: 'first-run route search', focus: 'short route, early extraction, low-noise loot, and cheap kit practice', caution: 'avoid boss routes while learning exits', update: 'add screenshots for Hallowgrove and Brandrgarde after launch' },
  { slug: 'safe-loot-route-guide', group: 'guides', template: 'map', keyword: 'safe loot route guide', intent: 'low-risk farming search', focus: 'repeatable resource loops, stop rules, and exit-first planning', caution: 'avoid turning a loot run into a boss run by accident', update: 'add verified loot markers after launch' },
  { slug: 'high-risk-high-reward-route', group: 'guides', template: 'map', keyword: 'high risk high reward route', intent: 'advanced route search', focus: 'boss-adjacent loot, PvP traffic, reward timing, and squad readiness', caution: 'do not recommend high-risk routes for brand-new players', update: 'add live route examples after launch' },
  { slug: 'duo-route-guide', group: 'guides', template: 'map', keyword: 'duo route guide', intent: 'two-player route search', focus: 'split responsibilities, support timing, cover during looting, and extraction calls', caution: 'avoid splitting far enough to lose trades', update: 'verify party-size rules and map lanes after launch' },
  { slug: 'trio-route-guide', group: 'guides', template: 'map', keyword: 'trio route guide', intent: 'squad route search', focus: 'frontline, ranged pressure, support coverage, and post-fight resets', caution: 'avoid three players looting while nobody watches angles', update: 'add live squad route screenshots after launch' },
  { slug: 'rat-route-guide', group: 'guides', template: 'map', keyword: 'rat route guide', intent: 'stealth loot route search', focus: 'quiet movement, low-noise resources, avoidance, and early extraction', caution: 'avoid using stealth routes as an excuse to overstay', update: 'add confirmed low-traffic lanes after launch' },
  { slug: 'boss-rush-route-guide', group: 'database', template: 'boss', keyword: 'boss rush route guide', intent: 'PvE objective search', focus: 'one boss objective, route safety, reward timing, and third-party defense', caution: 'avoid boss rushing without enough supplies or exit knowledge', update: 'add boss spawn and reward notes after launch' },
  { slug: 'extraction-camping-counter-guide', group: 'guides', template: 'guide', keyword: 'extraction camping counter guide', intent: 'PvP problem search', focus: 'approach angles, listening, baiting, route swaps, and timing', caution: 'avoid sprinting straight into final extraction', update: 'add map-specific extraction danger zones after launch' },
  { slug: 'ambush-guide', group: 'guides', template: 'guide', keyword: 'ambush guide', intent: 'PvP tactics search', focus: 'sound discipline, angle choice, cooldown readiness, and fast looting', caution: 'avoid ambushes that pull too far from extraction', update: 'add class-specific ambush examples after launch' },
  { slug: 'escape-after-kill-guide', group: 'guides', template: 'guide', keyword: 'escape after kill guide', intent: 'post-fight safety search', focus: 'heal, listen, loot quickly, reset, and leave before third parties arrive', caution: 'avoid looting immediately with no cover or cooldowns', update: 'add live PvP route examples after launch' },

  { slug: 'best-affixes-for-solo', group: 'guides', template: 'build', keyword: 'best affixes for solo', intent: 'solo gear search', focus: 'survival, mobility, sustain, burst windows, and extraction consistency', caution: 'avoid pure damage rolls that do not help reset fights', update: 'add verified affix names and ranges after launch' },
  { slug: 'best-affixes-for-pvp', group: 'guides', template: 'build', keyword: 'best affixes for PvP', intent: 'PvP gear search', focus: 'burst, stamina, cooldown comfort, mobility, and defensive breakpoints', caution: 'avoid ranking stats before live tuning is verified', update: 'add matchup-specific affix notes after launch' },
  { slug: 'best-affixes-for-pve', group: 'guides', template: 'build', keyword: 'best affixes for PvE', intent: 'PvE gear search', focus: 'sustained damage, recovery, boss uptime, and resource safety', caution: 'avoid PvE greed that leaves no escape plan', update: 'add boss-specific stat priorities after launch' },
  { slug: 'best-affixes-for-bosses', group: 'guides', template: 'build', keyword: 'best affixes for bosses', intent: 'boss build gear search', focus: 'safe damage uptime, sustain, stamina, and post-boss extraction', caution: 'avoid gear that wins the boss but loses the extraction fight', update: 'add confirmed boss scaling after launch' },
  { slug: 'gear-rarity-guide', group: 'database', template: 'guide', keyword: 'gear rarity guide', intent: 'item system search', focus: 'rarity, affix quality, class fit, and extraction value', caution: 'do not invent final rarity tiers without verification', update: 'add live item tier examples after launch' },
  { slug: 'weapon-tier-list', group: 'database', template: 'guide', keyword: 'weapon tier list', intent: 'weapon ranking search', focus: 'role fit, safety, damage windows, class synergy, and route pressure', caution: 'avoid final tier claims before launch balance', update: 'replace draft tiers with tested rankings after launch' },
  { slug: 'armor-guide', group: 'database', template: 'guide', keyword: 'armor guide', intent: 'defense gear search', focus: 'survivability, mobility tradeoffs, class roles, and extraction value', caution: 'avoid assuming heavier is always better', update: 'add armor names and stats after launch' },
  { slug: 'consumables-guide', group: 'database', template: 'guide', keyword: 'consumables guide', intent: 'item utility search', focus: 'healing, sustain, route length, boss prep, and emergency recovery', caution: 'do not list exact items until verified', update: 'add item names, stack sizes, and sources after launch' },
  { slug: 'crafting-guide', group: 'database', template: 'guide', keyword: 'crafting guide', intent: 'progression system search', focus: 'resource banking, upgrade planning, recipe verification, and loot priority', caution: 'avoid fake recipes or source tables', update: 'add real crafting recipes after launch' },
  { slug: 'vendor-guide', group: 'database', template: 'guide', keyword: 'vendor guide', intent: 'economy system search', focus: 'buying, selling, banking, and progression value', caution: 'do not claim vendor inventory before launch data exists', update: 'add vendor names and stock after launch' },

  { slug: 'returner-woodling-guide', group: 'guides', template: 'guide', keyword: 'Returner Woodling guide', intent: 'extraction objective search', focus: 'finding the objective, securing Soul of Return, and leaving safely', caution: 'avoid treating the objective as harmless if it creates sound or traffic', update: 'add exact spawn and behavior details after launch' },
  { slug: 'soul-of-return-farming', group: 'guides', template: 'guide', keyword: 'Soul of Return farming', intent: 'extraction key search', focus: 'route timing, objective safety, and when to prioritize extraction over loot', caution: 'avoid farming the objective after the bag is already valuable', update: 'add live spawn rules and route screenshots after launch' },
  { slug: 'gyldenblood-farming-route', group: 'database', template: 'map', keyword: 'Gyldenblood farming route', intent: 'resource farming search', focus: 'safe resource routes, banking priority, and verified source tracking', caution: 'avoid fake drop sources and invented rates', update: 'add confirmed sources and route screenshots after launch' },
  { slug: 'corroded-enemies-guide', group: 'database', template: 'guide', keyword: 'Corroded enemies guide', intent: 'PvE enemy search', focus: 'enemy pressure, sound risk, resource drain, and route choices', caution: 'avoid spending too long on low-value PvE fights', update: 'add enemy names, attacks, and drops after launch' },
  { slug: 'mist-lord-guide', group: 'database', template: 'boss', keyword: 'Mist Lord guide', intent: 'boss search', focus: 'boss prep, route safety, reward timing, and PvP pressure', caution: 'avoid boss pulls with no retreat or support plan', update: 'add exact boss names, moves, and rewards after launch' },
  { slug: 'boss-rewards-guide', group: 'database', template: 'boss', keyword: 'boss rewards guide', intent: 'reward search', focus: 'reward value, third-party risk, looting order, and extraction timing', caution: 'do not publish reward tables before verified drops', update: 'add confirmed drop tables after launch' },
  { slug: 'boss-mechanics-guide', group: 'database', template: 'boss', keyword: 'boss mechanics guide', intent: 'boss fight search', focus: 'attack reading, stamina budgeting, adds, and reset windows', caution: 'avoid listing exact mechanics before live testing', update: 'add boss-by-boss mechanics after launch' },
  { slug: 'pve-enemy-drops-guide', group: 'database', template: 'guide', keyword: 'PvE enemy drops guide', intent: 'drop source search', focus: 'drop tracking, route risk, enemy density, and source verification', caution: 'avoid invented drop rates', update: 'add enemy-specific drop sources after launch' },
  { slug: 'rare-loot-guide', group: 'database', template: 'guide', keyword: 'rare loot guide', intent: 'high-value item search', focus: 'identify rare loot, reduce greed, and extract before risk spikes', caution: 'avoid staying after rare loot when the route is already won', update: 'add confirmed rare items and sources after launch' },
  { slug: 'loot-priority-list', group: 'database', template: 'guide', keyword: 'loot priority list', intent: 'inventory decision search', focus: 'class fit, progression value, resource value, and route safety', caution: 'avoid universal lists before economy is verified', update: 'add live item priority table after launch' },

  { slug: 'release-time-countdown', group: 'news', template: 'faq', keyword: 'release time countdown', intent: 'launch timing search', focus: 'time zones, platform availability, and launch checks', caution: 'avoid stale countdown text after launch', update: 'convert to launch archive and patch tracker after release' },
  { slug: 'is-mistfall-hunter-free', group: 'news', template: 'faq', keyword: 'is Mistfall Hunter free', intent: 'price search', focus: 'store labels, Game Pass access, and final pricing status', caution: 'do not claim free-to-play without official store wording', update: 'refresh when stores finalize pricing' },
  { slug: 'mistfall-hunter-system-requirements', group: 'news', template: 'faq', keyword: 'system requirements', intent: 'PC specs search', focus: 'minimum specs, recommended specs, storage, and performance expectations', caution: 'do not invent specs before official listing', update: 'add official PC requirements when published' },
  { slug: 'mistfall-hunter-file-size', group: 'news', template: 'faq', keyword: 'file size', intent: 'install prep search', focus: 'storage planning, preload, platform differences, and patch size', caution: 'do not invent file size before store confirmation', update: 'add exact size by platform after listings update' },
  { slug: 'mistfall-hunter-preorder-guide', group: 'news', template: 'faq', keyword: 'preorder guide', intent: 'purchase prep search', focus: 'store pages, editions, rewards, and access timing', caution: 'do not invent editions or bonuses', update: 'add official purchase options when confirmed' },
  { slug: 'mistfall-hunter-editions-guide', group: 'news', template: 'faq', keyword: 'editions guide', intent: 'edition comparison search', focus: 'standard, deluxe, rewards, and platform store differences if announced', caution: 'do not list editions before official confirmation', update: 'replace with real edition table after store pages confirm' },
  { slug: 'mistfall-hunter-beta-rewards', group: 'news', template: 'faq', keyword: 'beta rewards', intent: 'carryover reward search', focus: 'participation rewards, wipe expectations, and account requirements', caution: 'avoid promising carryover without official wording', update: 'add exact reward names if confirmed' },
  { slug: 'mistfall-hunter-demo-ended', group: 'news', template: 'faq', keyword: 'demo ended', intent: 'demo availability search', focus: 'whether demo access remains, what players learned, and what to do before launch', caution: 'avoid telling players the demo is active without checking current store status', update: 'refresh with live Steam availability' },
  { slug: 'mistfall-hunter-roadmap', group: 'news', template: 'faq', keyword: 'roadmap', intent: 'future update search', focus: 'official roadmap, patches, seasons, maps, classes, and content updates', caution: 'do not invent a roadmap before official posts', update: 'add official roadmap items after announcement' },
  { slug: 'mistfall-hunter-discord-guide', group: 'news', template: 'faq', keyword: 'Discord guide', intent: 'community channel search', focus: 'where to watch announcements, server issues, patch notes, and community reports', caution: 'avoid linking unofficial communities as official unless verified', update: 'add official community links after verification' },
];

function cardsFor(brief: ExpansionBrief) {
  if (brief.group === 'tools' || brief.group === 'news') return techCards;
  if (brief.template === 'build') return buildCards;
  return baseCards;
}

function createPage(brief: ExpansionBrief): SeoPage {
  return {
    slug: brief.slug,
    group: brief.group,
    template: brief.template,
    title: `Mistfall Hunter ${brief.keyword}: Guide, Answers & Update Tracker`,
    description: `Mistfall Hunter ${brief.keyword} page for ${brief.intent}, focused on ${brief.focus}, with clear verification notes to avoid thin or misleading content.`,
    eyebrow: brief.template === 'faq' ? 'Answer hub' : brief.template === 'tool' ? 'Tool guide' : brief.template === 'map' ? 'Route guide' : brief.template === 'boss' ? 'Boss guide' : 'SEO guide',
    h1: `Mistfall Hunter ${brief.keyword}`,
    lead: `This page targets ${brief.intent}. It gives a useful answer now, marks what still needs verification, and leaves a clear structure for richer launch-build screenshots, tables, and examples.`,
    intent: {
      primary: `Mistfall Hunter ${brief.keyword}`,
      secondary: [brief.keyword, `${brief.keyword} guide`, `${brief.keyword} tips`],
      freshness: brief.update,
    },
    checklist: [
      `Answer the search intent: ${brief.intent}`,
      `Focus the page on ${brief.focus}`,
      `Avoid the main quality risk: ${brief.caution}`,
      'Add real screenshots, values, or source notes after launch',
      'Link back into maps, builds, tools, and beginner content',
    ],
    steps: [
      { title: 'Start with the user problem', body: `A visitor searching this term wants ${brief.intent}, so the page should lead with a direct answer rather than a generic game overview.` },
      { title: 'Apply extraction logic', body: `For Mistfall Hunter, the practical layer is always risk, route, class role, loot value, and the ability to extract safely.` },
      { title: 'Upgrade after verification', body: `When official or live data is available, add exact screenshots, numbers, markers, menus, or source links instead of broad wording.` },
    ],
    tables: [{
      title: `${brief.keyword} content plan`,
      headers: ['Page block', 'What it should answer', 'Quality guardrail'],
      rows: [
        ['Direct answer', brief.intent, 'Keep it above the fold'],
        ['Practical advice', brief.focus, 'Tie advice to extraction decisions'],
        ['Risk warning', brief.caution, 'Do not overclaim unknown details'],
        ['Update target', brief.update, 'Refresh after official or live data'],
      ],
    }],
    sections: [
      { heading: 'Why this URL is useful', body: [`${brief.keyword} is a focused long-tail query. It can catch players who are not searching broad terms like "guide" yet, but still need a concrete answer before choosing a class, route, platform, or setting.`] },
      { heading: 'Recommended answer', body: [`The page should center on ${brief.focus}. For an extraction ARPG, useful content is not only what is strongest; it is what lets the player survive the route and keep the reward.`] },
      { heading: 'Verification policy', body: [`The page should not overclaim unconfirmed mechanics. The main caution is: ${brief.caution}.`] },
    ],
    cards: cardsFor(brief),
    relatedSearches: [`Mistfall Hunter ${brief.keyword}`, `${brief.keyword} Mistfall Hunter guide`, `${brief.keyword} Mistfall Hunter tips`],
    faqs: [
      { q: `What is the short answer for ${brief.keyword}?`, a: `Focus on ${brief.focus}, then update the page with exact launch-build data when available.` },
      { q: 'Is this page safe for SEO indexing?', a: 'Yes. It has a unique search intent, structured answer, checklist, steps, table, FAQ, and internal links instead of a single thin paragraph.' },
      { q: 'What should be added after launch?', a: brief.update },
    ],
  };
}

function localizeDraft(page: SeoPage): SeoPage {
  return {
    ...page,
    title: `${page.title} | Chinese Draft`,
    description: `${page.description} Chinese draft route reserved for localization and live data.`,
    eyebrow: `ZH ${page.eyebrow}`,
    h1: `${page.h1} Chinese guide`,
    lead: `${page.lead} This Chinese URL is kept deployment-safe and can be localized with verified data in a later pass.`,
    cards: page.cards?.map((card) => ({ ...card, href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}` })),
    intent: page.intent ? { ...page.intent, primary: `${page.intent.primary} Chinese`, freshness: 'Localize with verified Chinese search wording, screenshots, and launch data.' } : undefined,
    sections: [
      { heading: 'Chinese draft status', body: ['This URL reserves the same long-tail topic for the Chinese site while keeping deployment risk low. Replace with native Chinese copy after the route proves useful or after launch data is verified.'] },
      ...(page.sections ?? []),
    ],
    relatedSearches: page.relatedSearches?.map((query) => `${query} Chinese`),
  };
}

export const enRapidExpansion2Pages: SeoPage[] = briefs.map(createPage);
export const zhRapidExpansion2Pages: SeoPage[] = enRapidExpansion2Pages.map(localizeDraft);

export const enRapidExpansion2Links: PriorityLink[] = enRapidExpansion2Pages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhRapidExpansion2Links: PriorityLink[] = zhRapidExpansion2Pages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
