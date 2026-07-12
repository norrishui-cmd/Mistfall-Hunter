import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

type DeepBrief = {
  slug: string;
  group: PriorityLink['group'];
  template: NonNullable<SeoPage['template']>;
  keyword: string;
  intent: string;
  angle: string;
  verify: string;
};

const cards = {
  launch: [
    { title: 'Release date', desc: 'Launch timing, platforms, and access status.', href: '/release-date' },
    { title: 'Steam page guide', desc: 'Steam launch, demo, wishlist, and reviews.', href: '/steam-page-guide' },
    { title: 'Xbox launch guide', desc: 'Xbox, Game Pass, and console prep.', href: '/xbox-launch-guide' },
  ],
  gameplay: [
    { title: 'Gameplay overview', desc: 'Core extraction loop, combat, and loot.', href: '/gameplay-overview' },
    { title: 'Beginner guide', desc: 'First runs, extraction habits, and mistakes.', href: '/beginner-guide' },
    { title: 'Bell extraction guide', desc: 'Bell creature, shrine, and exit safety.', href: '/bell-extraction-guide' },
  ],
  class: [
    { title: 'Classes', desc: 'Confirmed roles and beginner fit.', href: '/classes' },
    { title: 'Class skill trees', desc: 'Upgrade planning by role.', href: '/class-skill-trees' },
    { title: 'Best class for beginners', desc: 'Safe first picks before launch.', href: '/best-class-for-beginners' },
  ],
  map: [
    { title: 'Interactive map', desc: 'Routes, exits, bosses, and landmarks.', href: '/map' },
    { title: 'Hallowgrove map guide', desc: 'Route learning and loot loops.', href: '/hallowgrove-map-guide' },
    { title: 'Brandrgarde map guide', desc: 'Boss routes and PvP risk.', href: '/brandrgarde-map-guide' },
  ],
};

const briefs: DeepBrief[] = [
  { slug: 'download-guide', group: 'news', template: 'faq', keyword: 'download guide', intent: 'players searching where and how to download at launch', angle: 'Steam, Xbox app, Game Pass, PS5 store, preload status, and install checks', verify: 'Add exact store buttons, file size, and preload windows after listings update.' },
  { slug: 'install-guide', group: 'news', template: 'faq', keyword: 'install guide', intent: 'players preparing PC and console installs', angle: 'storage, platform store access, drivers, and first-launch settings', verify: 'Add final install size and platform-specific steps after launch.' },
  { slug: 'preload-time-guide', group: 'news', template: 'faq', keyword: 'preload time guide', intent: 'players searching whether preload is available', angle: 'Steam, Xbox, Game Pass, PS5 preload checks without inventing times', verify: 'Replace pending wording with official preload times when available.' },
  { slug: 'file-size-pc-xbox-ps5', group: 'news', template: 'faq', keyword: 'file size PC Xbox PS5', intent: 'players checking storage before release', angle: 'platform-specific storage planning and patch-size caveats', verify: 'Add exact sizes by platform once store pages publish them.' },
  { slug: 'early-access-guide', group: 'news', template: 'faq', keyword: 'early access guide', intent: 'players asking whether early access exists', angle: 'editions, demo access, beta status, and official launch timing', verify: 'Update if official editions or early access windows are announced.' },
  { slug: 'open-beta-ended-guide', group: 'news', template: 'faq', keyword: 'open beta ended guide', intent: 'players searching what happened after demo or beta', angle: 'progress wipe, lessons learned, reward carryover, and launch prep', verify: 'Add official beta reward wording and post-beta patch notes.' },
  { slug: 'demo-progress-carry-over', group: 'news', template: 'faq', keyword: 'demo progress carry over', intent: 'players asking whether beta/demo progress remains', angle: 'wipe expectations, cosmetic rewards, and account requirements', verify: 'Use official reward language only; do not promise carryover.' },
  { slug: 'game-pass-day-one-guide', group: 'news', template: 'faq', keyword: 'Game Pass day one guide', intent: 'players checking subscription access', angle: 'Xbox, PC Game Pass, Xbox app, and store availability', verify: 'Add final Game Pass labels and install steps at launch.' },
  { slug: 'xbox-play-anywhere-status', group: 'news', template: 'faq', keyword: 'Xbox Play Anywhere status', intent: 'players searching Xbox ecosystem support', angle: 'Xbox on PC, console, cloud, and ownership caveats', verify: 'Confirm exact Xbox Play Anywhere support from official store text.' },
  { slug: 'cloud-gaming-status', group: 'news', template: 'faq', keyword: 'cloud gaming status', intent: 'players checking Xbox Cloud Gaming access', angle: 'cloud availability, latency, controller setup, and subscription labels', verify: 'Add official cloud availability if listed.' },

  { slug: 'how-to-play-guide', group: 'guides', template: 'guide', keyword: 'how to play', intent: 'new players searching basic gameplay instructions', angle: 'choose class, enter Gyldenmist, loot, survive PvE/PvP, extract', verify: 'Add exact tutorial steps and screenshots after launch.' },
  { slug: 'first-run-walkthrough', group: 'guides', template: 'guide', keyword: 'first run walkthrough', intent: 'players wanting a step-by-step first extraction', angle: 'cheap kit, route goal, bell extraction, loot stop rule, exit timing', verify: 'Add launch-build screenshots for the tutorial and first map.' },
  { slug: 'tutorial-guide', group: 'guides', template: 'guide', keyword: 'tutorial guide', intent: 'players stuck in opening tutorial', angle: 'basic movement, combat, loot, death recovery, and extraction tutorial logic', verify: 'Add exact tutorial objectives after launch.' },
  { slug: 'what-to-do-first', group: 'guides', template: 'guide', keyword: 'what to do first', intent: 'players starting on launch day', angle: 'settings, class test, safe route, Soul of Return, and first extraction', verify: 'Update with live new-player flow.' },
  { slug: 'how-to-extract', group: 'guides', template: 'guide', keyword: 'how to extract', intent: 'players searching the core objective', angle: 'bell creature, Soul of Return, shrine, exit timing, and ambush safety', verify: 'Add exact extraction timers and interaction names after launch.' },
  { slug: 'how-to-get-soul-of-return', group: 'guides', template: 'guide', keyword: 'how to get Soul of Return', intent: 'players searching extraction key mechanics', angle: 'Returner Woodling, objective priority, route safety, and when to leave', verify: 'Add exact spawn behavior and route examples.' },
  { slug: 'how-to-ring-bell', group: 'guides', template: 'guide', keyword: 'how to ring bell', intent: 'players confused about bell extraction', angle: 'tracking, slaying, ringing, and defending extraction timing', verify: 'Add live bell creature screenshots and audio behavior.' },
  { slug: 'how-to-survive-gyldenmist', group: 'guides', template: 'guide', keyword: 'how to survive Gyldenmist', intent: 'players searching corruption/time pressure', angle: 'time limit, route discipline, extraction timing, and greed control', verify: 'Add exact timer/corruption values after launch.' },
  { slug: 'death-recovery-guide', group: 'guides', template: 'guide', keyword: 'death recovery guide', intent: 'players asking what happens after death', angle: 'spirit recovery, loot risk, second chances, and when to reset', verify: 'Verify death rules and recovery windows in launch build.' },
  { slug: 'inventory-management-guide', group: 'guides', template: 'guide', keyword: 'inventory management guide', intent: 'players trying to choose what to carry out', angle: 'loot priority, resources, affixes, weight/value logic, and stop rules', verify: 'Add live item examples and stack rules.' },

  { slug: 'mercenary-vs-withered-knight', group: 'guides', template: 'build', keyword: 'Mercenary vs Withered Knight', intent: 'melee players comparing frontline options', angle: 'defense, pressure, stamina, solo safety, and PvP commitment', verify: 'Update with live skill values and matchup notes.' },
  { slug: 'blackarrow-vs-shadowstrix', group: 'guides', template: 'build', keyword: 'Blackarrow vs Shadowstrix', intent: 'solo players comparing range and stealth', angle: 'scouting, ambush, route safety, and fight reset tools', verify: 'Add live class matchup notes after launch.' },
  { slug: 'sorcerer-vs-seer', group: 'guides', template: 'build', keyword: 'Sorcerer vs Seer', intent: 'magic players comparing damage and support', angle: 'PvE clear, support value, solo viability, and squad utility', verify: 'Add exact cooldown and scaling data.' },
  { slug: 'best-duo-classes', group: 'guides', template: 'build', keyword: 'best duo classes', intent: 'two-player teams searching comps', angle: 'frontline plus support, range plus stealth, boss safety, and extraction cover', verify: 'Add launch duo examples and route screenshots.' },
  { slug: 'best-trio-classes', group: 'guides', template: 'build', keyword: 'best trio classes', intent: 'three-player teams searching comps', angle: 'frontline, ranged pressure, support, and post-fight looting roles', verify: 'Verify team-size rules and live comp strength.' },
  { slug: 'best-class-for-steam-deck', group: 'guides', template: 'build', keyword: 'best class for Steam Deck', intent: 'handheld players choosing simple controls', angle: 'controller comfort, camera demand, ranged aim, and forgiving melee options', verify: 'Update after Steam Deck compatibility testing.' },
  { slug: 'best-class-for-controller', group: 'guides', template: 'build', keyword: 'best class for controller', intent: 'console/controller players choosing a main', angle: 'aim burden, camera control, dodge/block comfort, and support inputs', verify: 'Add tested controller recommendations after launch.' },
  { slug: 'best-class-for-keyboard-mouse', group: 'guides', template: 'build', keyword: 'best class for keyboard mouse', intent: 'PC players choosing by input style', angle: 'aim precision, camera speed, hotkeys, and class ability comfort', verify: 'Add launch keybind and sensitivity notes.' },
  { slug: 'skill-tree-reset-guide', group: 'guides', template: 'build', keyword: 'skill tree reset guide', intent: 'players asking if respec exists', angle: 'upgrade planning, respec uncertainty, and safe early investment', verify: 'Confirm whether respec exists after launch.' },
  { slug: 'best-starter-skill-upgrades', group: 'guides', template: 'build', keyword: 'best starter skill upgrades', intent: 'new players choosing first upgrades', angle: 'survival, route consistency, cooldown comfort, and class role clarity', verify: 'Add exact node names and costs after launch.' },

  { slug: 'hallowgrove-beginner-route', group: 'database', template: 'map', keyword: 'Hallowgrove beginner route', intent: 'new players searching first map routes', angle: 'perimeter learning, safe loot, exit-first planning, and no boss greed', verify: 'Add route screenshots and markers after launch.' },
  { slug: 'hallowgrove-exits-guide', group: 'database', template: 'map', keyword: 'Hallowgrove exits guide', intent: 'players searching map exits', angle: 'exit approach safety, ambush angles, and route resets', verify: 'Add exact exit markers and conditions.' },
  { slug: 'hallowgrove-boss-locations', group: 'database', template: 'boss', keyword: 'Hallowgrove boss locations', intent: 'players searching boss points', angle: 'boss approach routes, third-party danger, and reward extraction', verify: 'Add verified boss pins after launch.' },
  { slug: 'hallowgrove-loot-locations', group: 'database', template: 'map', keyword: 'Hallowgrove loot locations', intent: 'players searching loot points', angle: 'safe resource loops, chest priorities, and bank rules', verify: 'Add confirmed loot markers after launch.' },
  { slug: 'brandrgarde-beginner-route', group: 'database', template: 'map', keyword: 'Brandrgarde beginner route', intent: 'players entering the harder map carefully', angle: 'short objectives, reset lanes, PvP avoidance, and early exits', verify: 'Add live route screenshots.' },
  { slug: 'brandrgarde-exits-guide', group: 'database', template: 'map', keyword: 'Brandrgarde exits guide', intent: 'players searching exit points', angle: 'exit-first route planning and final-fight risk', verify: 'Add exact exit markers after launch.' },
  { slug: 'brandrgarde-boss-locations', group: 'database', template: 'boss', keyword: 'Brandrgarde boss locations', intent: 'players searching boss spawns', angle: 'Mist Lord risk, squad prep, and post-boss extraction', verify: 'Add verified boss pins and rewards.' },
  { slug: 'brandrgarde-loot-locations', group: 'database', template: 'map', keyword: 'Brandrgarde loot locations', intent: 'players searching high-value loot', angle: 'risk/reward stops, PvP traffic, and extraction timing', verify: 'Add confirmed loot markers.' },
  { slug: 'chaos-variant-rewards', group: 'database', template: 'guide', keyword: 'chaos variant rewards', intent: 'players asking if chaos variants are worth it', angle: 'variant risk, reward expectation, and scouting with cheap kits', verify: 'Add exact modifiers and rewards after launch.' },
  { slug: 'map-difficulty-ranking', group: 'database', template: 'map', keyword: 'map difficulty ranking', intent: 'players choosing which map to run', angle: 'beginner safety, PvP traffic, boss pressure, and loot value', verify: 'Update with live route data and player feedback.' },

  { slug: 'gyldenblood-uses', group: 'database', template: 'guide', keyword: 'Gyldenblood uses', intent: 'players asking what Gyldenblood is for', angle: 'progression currency, banking priority, and source tracking', verify: 'Add exact uses and costs after launch.' },
  { slug: 'gyldenblood-best-farm', group: 'database', template: 'map', keyword: 'Gyldenblood best farm', intent: 'players searching best farming route', angle: 'source verification, route safety, and extraction priority', verify: 'Do not publish fake drop rates; add real sources after launch.' },
  { slug: 'rare-ingredients-guide', group: 'database', template: 'guide', keyword: 'rare ingredients guide', intent: 'players searching crafting/progression resources', angle: 'banking unknown resources and avoiding greed deaths', verify: 'Add confirmed ingredient names and uses.' },
  { slug: 'chest-locations-guide', group: 'database', template: 'map', keyword: 'chest locations guide', intent: 'players searching locked chest points', angle: 'boss-guarded rewards, route risk, and looting order', verify: 'Add exact chest locations after launch.' },
  { slug: 'locked-chests-guide', group: 'database', template: 'guide', keyword: 'locked chests guide', intent: 'players asking how to open high-value chests', angle: 'strong enemy gates, reward timing, and extraction safety', verify: 'Verify unlock conditions and reward tables.' },
  { slug: 'currency-guide', group: 'database', template: 'guide', keyword: 'currency guide', intent: 'players searching progression economy', angle: 'Gyldenblood, resources, vendor value, and spending priorities', verify: 'Add official currency names and sinks.' },
  { slug: 'loot-tier-list', group: 'database', template: 'guide', keyword: 'loot tier list', intent: 'players searching what loot is best', angle: 'pre-launch value logic instead of fake item rankings', verify: 'Replace with tested item tiers after launch.' },
  { slug: 'best-items-to-keep', group: 'database', template: 'guide', keyword: 'best items to keep', intent: 'players managing stash', angle: 'class upgrades, rare resources, affixes, and progression items', verify: 'Add real item names and examples.' },
  { slug: 'what-to-sell-guide', group: 'database', template: 'guide', keyword: 'what to sell guide', intent: 'players deciding vendor or stash', angle: 'duplicate gear, low-fit affixes, and progression uncertainty', verify: 'Add vendor values after launch.' },
  { slug: 'what-to-bank-first', group: 'database', template: 'guide', keyword: 'what to bank first', intent: 'players extracting early loot', angle: 'first upgrades, unknown resources, and safe stash habits', verify: 'Add launch item examples.' },

  { slug: 'server-regions-guide', group: 'tools', template: 'faq', keyword: 'server regions guide', intent: 'players searching region and ping support', angle: 'region selection, matchmaking, latency, and launch queues', verify: 'Add official server regions if published.' },
  { slug: 'ping-lag-fix-guide', group: 'tools', template: 'tool', keyword: 'ping lag fix guide', intent: 'players troubleshooting network lag', angle: 'server status, region, Wi-Fi, VPN, and platform services', verify: 'Add known network issues after launch.' },
  { slug: 'matchmaking-not-working', group: 'tools', template: 'faq', keyword: 'matchmaking not working', intent: 'players stuck before a run', angle: 'server load, queue, region, party, and platform checks', verify: 'Add exact error messages after launch.' },
  { slug: 'cannot-login-guide', group: 'tools', template: 'faq', keyword: 'cannot login guide', intent: 'players blocked at login', angle: 'server outage, platform auth, account status, and restart checks', verify: 'Add official login incident notes.' },
  { slug: 'black-screen-fix', group: 'tools', template: 'tool', keyword: 'black screen fix', intent: 'players troubleshooting launch display issues', angle: 'drivers, window mode, overlays, config, and verification', verify: 'Add exact fixes if launch issue appears.' },
  { slug: 'controller-not-working', group: 'tools', template: 'tool', keyword: 'controller not working', intent: 'players troubleshooting gamepad input', angle: 'Steam Input, Xbox controller, PS5 controller, remapping, and focus issues', verify: 'Add exact input menu details after launch.' },
  { slug: 'steam-deck-not-working', group: 'tools', template: 'tool', keyword: 'Steam Deck not working', intent: 'handheld players troubleshooting compatibility', angle: 'Proton, anti-cheat, controller layout, and performance', verify: 'Add verified Deck status after launch.' },
  { slug: 'best-launch-settings', group: 'tools', template: 'tool', keyword: 'best launch settings', intent: 'players optimizing before first run', angle: 'FPS, visibility, camera, controller, audio, and network checks', verify: 'Add screenshots of setting menus after launch.' },
  { slug: 'audio-settings-guide', group: 'tools', template: 'tool', keyword: 'audio settings guide', intent: 'players optimizing sound cues', angle: 'footsteps, combat noise, extraction signals, and music balance', verify: 'Add exact setting names after launch.' },
  { slug: 'hud-settings-guide', group: 'tools', template: 'tool', keyword: 'HUD settings guide', intent: 'players optimizing UI readability', angle: 'loot readability, map awareness, health, cooldowns, and extraction information', verify: 'Add UI setting screenshots after launch.' },

  { slug: 'mistfall-hunter-review-roundup', group: 'news', template: 'faq', keyword: 'review roundup', intent: 'players checking review consensus', angle: 'launch reception, Steam reviews, critic impressions, performance, and server issues', verify: 'Add real reviews after embargo or launch.' },
  { slug: 'is-mistfall-hunter-worth-it', group: 'news', template: 'faq', keyword: 'is Mistfall Hunter worth it', intent: 'purchase decision search', angle: 'price, Game Pass, solo viability, performance, and preferred genre fit', verify: 'Update after live reviews and player feedback.' },
  { slug: 'should-i-play-mistfall-hunter', group: 'news', template: 'faq', keyword: 'should I play Mistfall Hunter', intent: 'genre fit decision search', angle: 'soulslike combat, extraction loss, PvP pressure, and dark fantasy appeal', verify: 'Add launch pros/cons with evidence.' },
  { slug: 'mistfall-hunter-for-solo-players', group: 'guides', template: 'guide', keyword: 'for solo players', intent: 'solo viability purchase search', angle: 'solo classes, route rules, low-risk goals, and extraction timing', verify: 'Add live solo experience after launch.' },
  { slug: 'mistfall-hunter-for-casual-players', group: 'guides', template: 'guide', keyword: 'for casual players', intent: 'casual audience fit search', angle: 'gear loss, run length, class learning, and cheap-kit habits', verify: 'Add launch queue and progression impressions.' },
  { slug: 'mistfall-hunter-for-dark-souls-players', group: 'guides', template: 'guide', keyword: 'for Dark Souls players', intent: 'Souls audience fit search', angle: 'stamina, blocking, weapon arts, boss danger, and extraction difference', verify: 'Add launch combat comparisons and examples.' },
  { slug: 'mistfall-hunter-for-tarkov-players', group: 'guides', template: 'guide', keyword: 'for Tarkov players', intent: 'extraction shooter audience search', angle: 'loot loss, map knowledge, third parties, and fantasy melee differences', verify: 'Add live economy and route notes.' },
  { slug: 'mistfall-hunter-for-dark-and-darker-players', group: 'guides', template: 'guide', keyword: 'for Dark and Darker players', intent: 'fantasy extraction audience search', angle: 'class roles, loot risk, PvPvE routes, and third-person combat', verify: 'Add fair comparison after launch.' },
  { slug: 'mistfall-hunter-for-nightreign-players', group: 'guides', template: 'guide', keyword: 'for Nightreign players', intent: 'Elden Ring Nightreign audience search', angle: 'co-op action RPG expectations versus PvP extraction stakes', verify: 'Keep comparison factual and update after launch.' },
  { slug: 'mistfall-hunter-alternatives', group: 'guides', template: 'guide', keyword: 'alternatives', intent: 'similar games search', angle: 'fantasy extraction, PvPvE, soulslike combat, and co-op action games', verify: 'Add current alternatives and keep descriptions accurate.' },
];

function chooseCards(brief: DeepBrief) {
  if (brief.template === 'map' || brief.template === 'boss') return cards.map;
  if (brief.template === 'build') return cards.class;
  if (brief.group === 'news' || brief.group === 'tools') return cards.launch;
  return cards.gameplay;
}

function createPage(brief: DeepBrief): SeoPage {
  return {
    slug: brief.slug,
    group: brief.group,
    template: brief.template,
    title: `Mistfall Hunter ${brief.keyword}: Launch Guide and Answers`,
    description: `Mistfall Hunter ${brief.keyword} page for ${brief.intent}, covering ${brief.angle}, with verification notes for launch-week updates.`,
    eyebrow: 'Deep long-tail',
    h1: `Mistfall Hunter ${brief.keyword}`,
    lead: `This page targets a specific launch-window search: ${brief.intent}. It gives a practical answer now and is structured for fast updates once live data is available.`,
    intent: {
      primary: `Mistfall Hunter ${brief.keyword}`,
      secondary: [brief.keyword, `${brief.keyword} guide`, `${brief.keyword} Mistfall Hunter`],
      freshness: brief.verify,
    },
    checklist: [
      `Search intent: ${brief.intent}`,
      `Main angle: ${brief.angle}`,
      'Keep the answer useful without inventing exact live data',
      'Add screenshots, prices, map markers, or values after launch',
      'Connect the page to release, gameplay, map, or class hubs',
    ],
    steps: [
      { title: 'Answer directly', body: `For this query, focus on ${brief.angle}.` },
      { title: 'Apply extraction context', body: 'Every Mistfall Hunter answer should connect back to run risk, loot value, PvE/PvP pressure, and successful extraction.' },
      { title: 'Update after launch', body: brief.verify },
    ],
    tables: [{
      title: `${brief.keyword} update plan`,
      headers: ['Need', 'Current page answer', 'Launch update'],
      rows: [
        ['Search intent', brief.intent, 'Compare with Search Console impressions'],
        ['Useful guidance', brief.angle, 'Add real examples and screenshots'],
        ['Accuracy guardrail', 'No invented values or hidden mechanics', brief.verify],
        ['Internal links', 'Release, class, map, gameplay, and tool hubs', 'Add contextual links from high-traffic pages'],
      ],
    }],
    sections: [
      { heading: 'Why this query matters', body: [`Players searching "${brief.keyword}" are usually close to a decision: install, buy, choose a class, plan a route, or fix a launch issue.`] },
      { heading: 'Best current answer', body: [`The page should focus on ${brief.angle}. This is specific enough to be useful without pretending launch data is already final.`] },
      { heading: 'Verification notes', body: [brief.verify] },
    ],
    cards: chooseCards(brief),
    relatedSearches: [`Mistfall Hunter ${brief.keyword}`, `${brief.keyword} guide`, `${brief.keyword} launch`],
    faqs: [
      { q: `What should I know about ${brief.keyword}?`, a: `Focus on ${brief.angle}.` },
      { q: 'Is this based on final launch data?', a: 'Not entirely. It is a launch-window page built to be updated with official or live data as soon as it is available.' },
      { q: 'What needs to be updated next?', a: brief.verify },
    ],
  };
}

function localizeDraft(page: SeoPage): SeoPage {
  return {
    ...page,
    title: `${page.title} | Chinese Draft`,
    description: `${page.description} Chinese draft URL reserved for localization and verified launch data.`,
    eyebrow: 'ZH Deep long-tail',
    h1: `${page.h1} Chinese guide`,
    lead: `${page.lead} This Chinese URL is a deployment-safe draft for later localization.`,
    cards: page.cards?.map((card) => ({ ...card, href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}` })),
    intent: page.intent ? { ...page.intent, primary: `${page.intent.primary} Chinese`, freshness: 'Localize with verified Chinese search wording and launch data.' } : undefined,
    sections: [
      { heading: 'Chinese draft status', body: ['This page reserves the same deep long-tail topic for the Chinese path. Localize after launch data or Search Console impressions confirm demand.'] },
      ...(page.sections ?? []),
    ],
    relatedSearches: page.relatedSearches?.map((query) => `${query} Chinese`),
  };
}

export const enDeepLongTailPages: SeoPage[] = briefs.map(createPage);
export const zhDeepLongTailPages: SeoPage[] = enDeepLongTailPages.map(localizeDraft);

export const enDeepLongTailLinks: PriorityLink[] = enDeepLongTailPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhDeepLongTailLinks: PriorityLink[] = zhDeepLongTailPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
