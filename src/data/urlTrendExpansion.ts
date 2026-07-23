import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

type TrendBrief = {
  slug: string;
  group: PriorityLink['group'];
  template: NonNullable<SeoPage['template']>;
  trend: string;
  growth: string;
  intent: string;
  answer: string;
  update: string;
};

const trendCards = [
  { title: 'Release date', desc: 'Launch timing, platforms, Game Pass, and pricing status.', href: '/release-date' },
  { title: 'Steam page guide', desc: 'Steam page, demo lessons, install prep, and first runs.', href: '/steam-page-guide' },
  { title: 'Gameplay guide', desc: 'Combat, extraction, loot, PvP, and class basics.', href: '/gameplay-overview' },
];

const platformCards = [
  { title: 'Price & access status', desc: 'Free-to-play status, store labels, and Game Pass access.', href: '/price-status' },
  { title: 'Crossplay status', desc: 'PC, Xbox, PS5, party, and account questions.', href: '/crossplay-status' },
  { title: 'Release date', desc: 'Launch timing, platforms, and price status.', href: '/release-date' },
];

const classCards = [
  { title: 'Classes', desc: 'All confirmed classes and their roles.', href: '/classes' },
  { title: 'Best class for beginners', desc: 'Safe first picks by learning curve.', href: '/best-class-for-beginners' },
  { title: 'Class skill trees', desc: 'Upgrade planning by role and route.', href: '/class-skill-trees' },
];

const briefs: TrendBrief[] = [
  { slug: 'steam-charts-player-count', group: 'news', template: 'faq', trend: 'mistfall hunter steam charts', growth: '+160%', intent: 'players checking whether launch interest is rising on Steam', answer: 'Track Steam charts carefully, but separate demo interest, wishlists, concurrent players, and launch-day population.', update: 'After launch, add verified SteamDB or Steam chart snapshots, peak concurrent players, and daily trend notes.' },
  { slug: 'steamdb-player-count', group: 'news', template: 'faq', trend: 'mistfall hunter steamdb', growth: 'steam charts adjacent', intent: 'players looking for SteamDB-style concurrent player data', answer: 'Use SteamDB-like player-count pages only for public concurrency signals, not as a full measure of cross-platform population.', update: 'Add live Steam app data after launch when public tracking is stable.' },
  { slug: 'concurrent-players-tracker', group: 'news', template: 'faq', trend: 'mistfall hunter concurrent players', growth: 'steam charts adjacent', intent: 'players searching peak players and launch population', answer: 'Concurrent player pages should explain platform limits: Steam numbers do not include Xbox, Game Pass, or PS5 players.', update: 'Add launch-day peaks, first weekend peaks, and post-patch changes after release.' },
  { slug: 'player-count-launch-week', group: 'news', template: 'faq', trend: 'mistfall hunter player count launch week', growth: 'steam charts adjacent', intent: 'players tracking first-week popularity', answer: 'Launch-week player count should be interpreted with queue, region, Game Pass, and console access context.', update: 'Refresh daily during launch week with public numbers and notes.' },
  { slug: 'steam-charts-explained', group: 'news', template: 'faq', trend: 'mistfall hunter steam charts explained', growth: 'steam charts adjacent', intent: 'players trying to understand what Steam charts mean', answer: 'Steam charts show Steam activity only. They are useful for momentum but not a complete population report.', update: 'Add examples once launch numbers exist.' },

  { slug: 'gameplay-overview', group: 'guides', template: 'guide', trend: 'mistfall hunter gameplay', growth: '+70%', intent: 'players who saw rising gameplay searches and want the core loop fast', answer: 'Mistfall Hunter gameplay is best explained as dark fantasy PvPvE extraction: enter, fight, loot, secure extraction, and leave before greed wins.', update: 'Add launch gameplay clips, route examples, and class-specific footage after release.' },
  { slug: 'gameplay-loop-explained', group: 'guides', template: 'guide', trend: 'mistfall hunter gameplay loop', growth: 'gameplay adjacent', intent: 'players asking what you actually do in a run', answer: 'A run should be understood as objective choice, risk reading, loot selection, PvE pressure, PvP contact, and extraction timing.', update: 'Add step-by-step launch-run screenshots after release.' },
  { slug: 'gameplay-trailer-breakdown', group: 'news', template: 'guide', trend: 'mistfall hunter gameplay trailer', growth: 'gameplay adjacent', intent: 'players searching trailer details before launch', answer: 'Trailer pages should break down confirmed systems without inventing hidden mechanics: classes, combat, extraction, bosses, and map tone.', update: 'Update when new launch trailers or official videos are released.' },
  { slug: 'first-30-minutes-guide', group: 'guides', template: 'guide', trend: 'mistfall hunter first gameplay', growth: 'gameplay adjacent', intent: 'players preparing for their first session', answer: 'The first 30 minutes should focus on class feel, exits, stamina, cheap gear, and one successful extraction rather than boss rushing.', update: 'Add exact tutorial and first-run notes after launch.' },
  { slug: 'combat-gameplay-guide', group: 'guides', template: 'guide', trend: 'mistfall hunter combat gameplay', growth: 'gameplay adjacent', intent: 'players evaluating combat before launch', answer: 'Combat guidance should cover spacing, stamina, no lock-on camera control, blocking, dodging, class abilities, and third-party pressure.', update: 'Add verified timing windows and class clips after launch.' },
  { slug: 'pvp-gameplay-guide', group: 'guides', template: 'guide', trend: 'mistfall hunter pvp gameplay', growth: 'gameplay adjacent', intent: 'players asking how PvP works inside extraction runs', answer: 'PvP is not only dueling. Sound, route control, looting safety, and extraction timing decide whether a fight was worth taking.', update: 'Add live PvP examples and common kill zones after launch.' },
  { slug: 'pve-gameplay-guide', group: 'guides', template: 'guide', trend: 'mistfall hunter pve gameplay', growth: 'gameplay adjacent', intent: 'players asking about monsters and bosses', answer: 'PvE gameplay should be planned around time, noise, resources, and whether the reward can be extracted safely.', update: 'Add enemy names, boss notes, and drop sources after launch.' },
  { slug: 'solo-gameplay-guide', group: 'guides', template: 'guide', trend: 'mistfall hunter solo gameplay', growth: 'gameplay adjacent', intent: 'solo players checking whether the game works without a squad', answer: 'Solo gameplay favors short routes, quiet movement, early exits, and classes that can scout or reset contact.', update: 'Add live solo route examples after launch.' },
  { slug: 'co-op-gameplay-guide', group: 'guides', template: 'guide', trend: 'mistfall hunter co op gameplay', growth: 'gameplay adjacent', intent: 'players checking squad gameplay', answer: 'Co-op gameplay is strongest when the team assigns jobs: pressure, support, angle watch, looting, and extraction cover.', update: 'Add party-size, revive, and squad route notes after launch.' },

  { slug: 'mistfall-hunters-spelling', group: 'news', template: 'faq', trend: 'mistfall hunters', growth: '+50%', intent: 'players searching the plural or alternate spelling', answer: 'The official title is Mistfall Hunter, but many players search Mistfall Hunters. This page routes them to the correct game, release, and guides.', update: 'Keep as a spelling-router page and add official naming notes if needed.' },
  { slug: 'mistfall-hunter-vs-mistfall-hunters', group: 'news', template: 'faq', trend: 'mistfall hunter vs mistfall hunters', growth: 'alternate spelling', intent: 'players unsure about the correct title', answer: 'Use Mistfall Hunter for the game title. Mistfall Hunters is a common plural search variant.', update: 'Update if official branding changes.' },
  { slug: 'mistfall-hunter-name-guide', group: 'news', template: 'faq', trend: 'mistfall hunter name guide', growth: 'alternate spelling', intent: 'players searching typos and title variants', answer: 'This page captures spelling variants and sends users to release date, Steam, gameplay, and class pages.', update: 'Add common typo variants from Search Console.' },

  { slug: 'release-date-july-30', group: 'news', template: 'faq', trend: 'mistfall hunter release date', growth: '+40%', intent: 'players searching the exact launch date before the end of July', answer: 'Use this page for the exact July launch query, time-zone conversion, platform access, and last-week checklist.', update: 'After launch, convert to launch archive with patch and server notes.' },
  { slug: 'release-time-time-zones', group: 'news', template: 'faq', trend: 'mistfall hunter release time', growth: 'release date adjacent', intent: 'players converting launch time to local time', answer: 'A release-time page should show UTC, US, Europe, and Asia time-zone guidance once the official time is confirmed.', update: 'Add final official time-zone table and countdown status.' },
  { slug: 'launch-day-checklist', group: 'news', template: 'guide', trend: 'mistfall hunter launch day', growth: 'release date adjacent', intent: 'players preparing for launch day', answer: 'Launch prep should include install access, account login, settings, class choice, cheap first kit, and server-status checks.', update: 'Update daily through launch week.' },
  { slug: 'launch-week-roadmap', group: 'news', template: 'faq', trend: 'mistfall hunter launch week', growth: 'release date adjacent', intent: 'players looking for first-week updates', answer: 'Launch-week pages should track known issues, patches, server stability, class changes, and player count signals.', update: 'Refresh with official patch notes and server notices.' },
  { slug: 'pre-launch-guide', group: 'guides', template: 'guide', trend: 'mistfall hunter before launch', growth: 'release date adjacent', intent: 'players asking what to learn before release', answer: 'Before launch, learn extraction logic, class roles, Steam/Game Pass access, and performance settings instead of memorizing unverified meta.', update: 'Replace pre-launch advice with live beginner routing after release.' },

  { slug: 'steam-page-guide', group: 'news', template: 'faq', trend: 'mistfall hunter steam', growth: '+30%', intent: 'players searching the Steam page and PC access', answer: 'Steam pages should answer wishlist, demo, install, release timing, system requirements, and Steam Deck questions.', update: 'Add official Steam app details, file size, and reviews after release.' },
  { slug: 'steam-release-time', group: 'news', template: 'faq', trend: 'mistfall hunter steam release time', growth: 'steam adjacent', intent: 'Steam users checking unlock timing', answer: 'Steam release timing should be separated from console and Game Pass availability if store unlocks differ.', update: 'Add final Steam unlock time when listed.' },
  { slug: 'steam-demo-guide', group: 'news', template: 'faq', trend: 'mistfall hunter steam demo', growth: 'steam adjacent', intent: 'players searching demo status after Steam Next Fest', answer: 'Demo pages should explain availability, lessons learned, progress wipe expectations, and what carries into launch.', update: 'Refresh with current Steam demo availability.' },
  { slug: 'steam-reviews-tracker', group: 'news', template: 'faq', trend: 'mistfall hunter steam reviews', growth: 'steam adjacent', intent: 'players checking early reception', answer: 'Review tracker pages should wait for real launch reviews and summarize themes without cherry-picking.', update: 'Add review score, common praise, and common issues after launch.' },
  { slug: 'steam-wishlist-guide', group: 'news', template: 'faq', trend: 'mistfall hunter wishlist', growth: 'steam adjacent', intent: 'players looking for Steam pre-launch actions', answer: 'Wishlist guidance should point players to official store pages, demo notes, and launch reminders.', update: 'Convert to launch install guide once the game releases.' },

  { slug: 'crossplay-status', group: 'news', template: 'faq', trend: 'mistfall hunter crossplay', growth: '+7%', intent: 'players checking whether PC, Xbox, and PS5 can play together', answer: 'Crossplay should be treated as a confirmation-needed topic until official platform-party wording is available.', update: 'Add confirmed crossplay, cross-progression, and party rules when announced.' },
  { slug: 'cross-platform-party-guide', group: 'news', template: 'faq', trend: 'mistfall hunter cross platform party', growth: 'crossplay adjacent', intent: 'friends planning mixed-platform squads', answer: 'This page should separate crossplay, cross-progression, Xbox Play Anywhere, Game Pass, and platform matchmaking.', update: 'Add official party and account-linking details when verified.' },
  { slug: 'cross-progression-guide', group: 'news', template: 'faq', trend: 'mistfall hunter cross progression', growth: 'crossplay adjacent', intent: 'players asking if progress carries across platforms', answer: 'Cross-progression should not be assumed. The page should explain what is confirmed and what remains unknown.', update: 'Add official account and save-transfer details if announced.' },
  { slug: 'pc-xbox-crossplay-guide', group: 'news', template: 'faq', trend: 'mistfall hunter pc xbox crossplay', growth: 'crossplay adjacent', intent: 'PC and Xbox players checking party compatibility', answer: 'PC-Xbox access may involve Steam, Xbox app, Game Pass, and platform services, so the page should avoid one-size-fits-all claims.', update: 'Verify with official platform support after launch.' },
  { slug: 'ps5-crossplay-guide', group: 'news', template: 'faq', trend: 'mistfall hunter ps5 crossplay', growth: 'crossplay adjacent', intent: 'PS5 players checking mixed-platform play', answer: 'PS5 crossplay needs explicit official confirmation before being promoted as supported.', update: 'Add PlayStation store and official support wording when available.' },

  { slug: 'price-status', group: 'news', template: 'faq', trend: 'mistfall hunter price', growth: '+2%', intent: 'players checking launch price and access options', answer: 'Price pages should separate Steam purchase price, Game Pass access, console store labels, and any free-to-play wording.', update: 'Refresh with official store price at launch.' },
  { slug: 'steam-price-guide', group: 'news', template: 'faq', trend: 'mistfall hunter steam price', growth: 'price adjacent', intent: 'Steam users checking cost', answer: 'Steam price should be pulled from the store when final. Until then, mark pricing as pending rather than guessing.', update: 'Add exact regional Steam price after launch.' },
  { slug: 'xbox-price-guide', group: 'news', template: 'faq', trend: 'mistfall hunter xbox price', growth: 'price adjacent', intent: 'Xbox players checking purchase or subscription access', answer: 'Xbox price guidance should explain store purchase, Game Pass access, and possible edition differences separately.', update: 'Add final Xbox store price and Game Pass wording.' },
  { slug: 'ps5-price-guide', group: 'news', template: 'faq', trend: 'mistfall hunter ps5 price', growth: 'price adjacent', intent: 'PS5 players checking purchase cost', answer: 'PS5 price should be verified from PlayStation store listings rather than inferred from other platforms.', update: 'Add final PS5 store price after listing updates.' },
  { slug: 'game-pass-or-buy-guide', group: 'news', template: 'faq', trend: 'mistfall hunter game pass or buy', growth: 'price adjacent', intent: 'players deciding between subscription and purchase', answer: 'This page should compare access convenience, platform preference, ownership, and launch availability without making price assumptions.', update: 'Add exact subscription and purchase options after launch.' },

  { slug: 'classes-overview-2026', group: 'guides', template: 'guide', trend: 'mistfall hunter classes', growth: '+2%', intent: 'players searching all classes before launch', answer: 'Class overview should summarize roles, beginner fit, solo value, PvP pressure, and squad utility without final meta claims.', update: 'Update with live skill trees and balance changes.' },
  { slug: 'classes-ranked-for-launch', group: 'guides', template: 'guide', trend: 'mistfall hunter classes ranked', growth: 'classes adjacent', intent: 'players looking for a launch ranking', answer: 'Launch rankings should be cautious: rank by role clarity and beginner safety before final win-rate data exists.', update: 'Replace with tested tier list after launch.' },
  { slug: 'classes-for-solo-players', group: 'guides', template: 'guide', trend: 'mistfall hunter classes solo', growth: 'classes adjacent', intent: 'solo players choosing a main', answer: 'Solo class choice should prioritize escape, scouting, sustain, range, and route independence.', update: 'Add live solo-route performance after launch.' },
  { slug: 'classes-for-squads', group: 'guides', template: 'guide', trend: 'mistfall hunter classes squad', growth: 'classes adjacent', intent: 'teams choosing roles', answer: 'Squad class choice should combine frontline pressure, ranged control, support, burst, and extraction cover.', update: 'Add live comp examples after launch.' },
  { slug: 'classes-for-beginners-2026', group: 'guides', template: 'guide', trend: 'mistfall hunter classes beginner', growth: 'classes adjacent', intent: 'new players choosing a first class', answer: 'Beginner class advice should favor mistake forgiveness and clear roles over peak damage.', update: 'Update once skill trees and starter kits are verified.' },

  { slug: 'xbox-launch-guide', group: 'news', template: 'faq', trend: 'mistfall hunter xbox', growth: '-3%', intent: 'Xbox players checking launch access despite slight trend dip', answer: 'Xbox pages should focus on store access, Game Pass, controller settings, performance expectations, and server status.', update: 'Add final Xbox store, file size, and launch patch notes.' },
  { slug: 'xbox-series-x-settings', group: 'tools', template: 'tool', trend: 'mistfall hunter xbox series x settings', growth: 'xbox adjacent', intent: 'Xbox Series X players checking best settings', answer: 'Settings pages should prioritize performance mode, camera control, controller sensitivity, and visibility.', update: 'Add exact console mode names after launch.' },
  { slug: 'xbox-series-s-settings', group: 'tools', template: 'tool', trend: 'mistfall hunter xbox series s settings', growth: 'xbox adjacent', intent: 'Xbox Series S players checking performance', answer: 'Series S guidance should be verified separately because performance and resolution options may differ.', update: 'Add tested Series S settings after launch.' },
  { slug: 'xbox-play-anywhere-guide', group: 'news', template: 'faq', trend: 'mistfall hunter xbox play anywhere', growth: 'xbox adjacent', intent: 'players checking Xbox ecosystem access', answer: 'Xbox Play Anywhere should not be assumed unless official store text confirms it.', update: 'Add official Xbox store support wording when available.' },
  { slug: 'xbox-cloud-guide', group: 'news', template: 'faq', trend: 'mistfall hunter xbox cloud', growth: 'xbox adjacent', intent: 'players checking cloud availability', answer: 'Cloud availability depends on Xbox listing and subscription support, not just Game Pass branding.', update: 'Add official cloud status if listed.' },

  { slug: 'mound-omen-of-cthulhu-comparison', group: 'guides', template: 'guide', trend: 'the mound omen of cthulhu', growth: '+120%', intent: 'adjacent dark-horror trend search from players interested in grim fantasy and Lovecraftian tone', answer: 'Use this as an audience bridge: explain that Mistfall Hunter is not The Mound, but may interest players searching dark, eerie, monster-heavy fantasy.', update: 'Keep comparison factual and remove if Search Console shows poor relevance.' },
  { slug: 'lovecraftian-dark-fantasy-games', group: 'guides', template: 'guide', trend: 'lovecraftian dark fantasy games', growth: 'cthulhu adjacent', intent: 'players looking for dark fantasy, monsters, and eerie world tone', answer: 'Mistfall Hunter can be framed as dark fantasy extraction, not as a confirmed Lovecraft adaptation.', update: 'Add a careful similar-games list after launch.' },
  { slug: 'cthulhu-fans-mistfall-hunter-guide', group: 'guides', template: 'guide', trend: 'cthulhu fans mistfall hunter', growth: 'cthulhu adjacent', intent: 'players from cosmic-horror searches checking if Mistfall Hunter fits', answer: 'The honest bridge is atmosphere and monster pressure, not direct Cthulhu canon.', update: 'Update with live environment and enemy screenshots after launch.' },
  { slug: 'dark-fantasy-extraction-games-2026', group: 'guides', template: 'guide', trend: 'dark fantasy extraction games 2026', growth: 'cthulhu adjacent', intent: 'players searching the broader dark fantasy extraction niche', answer: 'This page should position Mistfall Hunter within fantasy extraction without pretending it covers every horror subgenre.', update: 'Add live reception and comparison notes after launch.' },
  { slug: 'horror-fans-guide-to-mistfall-hunter', group: 'guides', template: 'guide', trend: 'horror fans guide to mistfall hunter', growth: 'cthulhu adjacent', intent: 'horror and dark fantasy players evaluating the game', answer: 'Horror fans should expect extraction pressure, monster spaces, and PvP dread rather than a pure story horror game.', update: 'Add screenshot examples and tone notes after launch.' },
];

function cardsFor(brief: TrendBrief) {
  if (brief.trend.includes('class')) return classCards;
  if (brief.trend.includes('cross') || brief.trend.includes('price') || brief.trend.includes('xbox')) return platformCards;
  return trendCards;
}

function createPage(brief: TrendBrief): SeoPage {
  return {
    slug: brief.slug,
    group: brief.group,
    template: brief.template,
    title: `Mistfall Hunter ${brief.trend}: ${brief.growth} Trend Guide`,
    description: `Mistfall Hunter ${brief.trend} guide based on the latest rising search trend (${brief.growth}), with launch-week answers, verification notes, and related routes.`,
    eyebrow: 'Trend URL',
    h1: `Mistfall Hunter ${brief.trend}`,
    lead: `Google Trends shows this query moving recently (${brief.growth}). This page is built to answer the search intent quickly while leaving room for verified launch-week data.`,
    intent: {
      primary: `Mistfall Hunter ${brief.trend}`,
      secondary: [brief.trend, `${brief.trend} guide`, `${brief.trend} 2026`],
      freshness: brief.update,
    },
    checklist: [
      `Trend signal: ${brief.growth}`,
      `Search intent: ${brief.intent}`,
      `Direct answer: ${brief.answer}`,
      'Update with official or live launch data before making exact claims',
      'Link users into release, Steam, gameplay, class, or platform hubs',
    ],
    steps: [
      { title: 'Answer the trend query first', body: brief.answer },
      { title: 'Add launch context', body: 'Because the game releases at the end of July, the page should prioritize release timing, platform access, first-run prep, and live verification.' },
      { title: 'Refresh after release', body: brief.update },
    ],
    tables: [{
      title: `${brief.trend} launch-week content plan`,
      headers: ['Content block', 'What to include', 'Quality guardrail'],
      rows: [
        ['Trend answer', brief.answer, 'Keep the answer specific to the query'],
        ['Launch status', 'Release, platform, Steam, Xbox, or class context', 'Avoid stale pre-launch wording after release'],
        ['Verification', brief.update, 'Do not invent charts, prices, crossplay, or class data'],
        ['Internal links', 'Release, Steam, gameplay, class, and platform hubs', 'Prevent orphan trend pages'],
      ],
    }],
    sections: [
      { heading: 'Why this trend matters', body: [`The query "${brief.trend}" is rising in the last-week trend set. That means players are moving from broad awareness toward specific pre-launch questions.`] },
      { heading: 'Best current answer', body: [brief.answer] },
      { heading: 'What needs live data', body: [brief.update] },
    ],
    cards: cardsFor(brief),
    relatedSearches: [`Mistfall Hunter ${brief.trend}`, `${brief.trend} Mistfall Hunter`, `${brief.trend} launch guide`],
    faqs: [
      { q: `Why create a page for ${brief.trend}?`, a: `Because it is a rising trend query (${brief.growth}) and has a clear user intent: ${brief.intent}.` },
      { q: 'Is the information final?', a: 'No. This is a pre-launch trend page designed to be updated with verified launch-week data.' },
      { q: 'What should be checked after launch?', a: brief.update },
    ],
  };
}

function localizeDraft(page: SeoPage): SeoPage {
  return {
    ...page,
    title: `${page.title} | Chinese Draft`,
    description: `${page.description} Chinese trend draft reserved for localization and live launch data.`,
    eyebrow: 'ZH Trend URL',
    h1: `${page.h1} Chinese guide`,
    lead: `${page.lead} This Chinese trend page is kept deployment-safe and can be localized after Search Console data appears.`,
    cards: page.cards?.map((card) => ({ ...card, href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}` })),
    intent: page.intent ? { ...page.intent, primary: `${page.intent.primary} Chinese`, freshness: 'Localize with Chinese search wording and verified launch data.' } : undefined,
    sections: [
      { heading: 'Chinese trend draft status', body: ['This page reserves the same rising trend query for the Chinese path while keeping the current deployment stable. Localize after launch or after Search Console confirms impressions.'] },
      ...(page.sections ?? []),
    ],
    relatedSearches: page.relatedSearches?.map((query) => `${query} Chinese`),
  };
}

export const enTrendExpansionPages: SeoPage[] = briefs.map(createPage);
export const zhTrendExpansionPages: SeoPage[] = enTrendExpansionPages.map(localizeDraft);

export const enTrendExpansionLinks: PriorityLink[] = enTrendExpansionPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhTrendExpansionLinks: PriorityLink[] = zhTrendExpansionPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
