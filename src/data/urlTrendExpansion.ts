import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

// Strips a leading "mistfall hunter " from a raw trend phrase (most briefs'
// `trend` field already starts with the brand name) and title-cases the
// rest, so the default title template doesn't duplicate the brand name.
function capitalizeTrend(trend: string): string {
  const stripped = trend.replace(/^mistfall hunter\s+/i, '');
  return stripped.replace(/\b\w/g, (c) => c.toUpperCase());
}

type TrendBrief = {
  slug: string;
  group: PriorityLink['group'];
  template: NonNullable<SeoPage['template']>;
  trend: string;
  growth: string;
  intent: string;
  answer: string;
  update: string;
  // Optional clean, reader-facing title/H1. Without this, the default
  // template below concatenates "Mistfall Hunter " + brief.trend, and
  // brief.trend already starts with "mistfall hunter" for most entries —
  // producing a duplicated brand name plus an exposed internal growth
  // percentage and "Trend Guide" label (e.g. "Mistfall Hunter mistfall
  // hunter gameplay: +70% Trend Guide"). That shipped live on 5 pages
  // (gameplay-overview, steam-charts-player-count, steam-page-guide,
  // crossplay-status, price-status) before being caught on 2026-07-24 via
  // real GSC performance data — set title/h1 for any brief before promoting
  // it.
  title?: string;
  h1?: string;
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
  { title: 'Builds', desc: 'Upgrade planning and gear direction by role.', href: '/builds' },
];

const briefs: TrendBrief[] = [
  { slug: 'steam-charts-player-count', group: 'news', template: 'faq', trend: 'mistfall hunter steam charts', growth: '+160%', intent: 'players checking whether launch interest is rising on Steam', answer: 'Track Steam charts carefully, but separate demo interest, wishlists, concurrent players, and launch-day population.', update: 'After launch, add verified SteamDB or Steam chart snapshots, peak concurrent players, and daily trend notes.', title: 'Mistfall Hunter Steam Charts & Player Count Tracker', h1: 'Steam Charts & Player Count' },
  { slug: 'steamdb-player-count', group: 'news', template: 'faq', title: "Mistfall Hunter SteamDB & Player Count", h1: "Mistfall Hunter SteamDB & Player Count", trend: 'mistfall hunter steamdb', growth: 'steam charts adjacent', intent: 'players looking for SteamDB-style concurrent player data', answer: 'SteamDB-style player-count tools only capture Steam\'s own concurrent players — they miss Xbox, Xbox Game Pass, and PS5 players entirely. Treat any single number you see as a partial, Steam-only signal, not the game\'s total population.', update: 'Add live Steam app data after launch when public tracking is stable.' },
  { slug: 'concurrent-players-tracker', group: 'news', template: 'faq', title: "Mistfall Hunter Concurrent Players Tracker", h1: "Mistfall Hunter Concurrent Players Tracker", trend: 'mistfall hunter concurrent players', growth: 'steam charts adjacent', intent: 'players searching peak players and launch population', answer: 'Any concurrent-player number you see for Mistfall Hunter is Steam-only. Xbox, Game Pass, and PS5 players are not counted in Steam\'s charts, so the real cross-platform population is higher than the Steam figure alone.', update: 'Add launch-day peaks, first weekend peaks, and post-patch changes after release.' },
  { slug: 'player-count-launch-week', group: 'news', template: 'faq', title: "Mistfall Hunter Launch Week Player Count", h1: "Mistfall Hunter Launch Week Player Count", trend: 'mistfall hunter player count launch week', growth: 'steam charts adjacent', intent: 'players tracking first-week popularity', answer: 'Launch-week player counts are affected by queues, regional rollout timing, and how many players are on Xbox, PS5, or Game Pass instead of Steam — a lower Steam number during off-peak hours doesn\'t necessarily mean low overall interest.', update: 'Refresh daily during launch week with public numbers and notes.' },
  { slug: 'steam-charts-explained', group: 'news', template: 'faq', title: "Mistfall Hunter Steam Charts Explained", h1: "Mistfall Hunter Steam Charts Explained", trend: 'mistfall hunter steam charts explained', growth: 'steam charts adjacent', intent: 'players trying to understand what Steam charts mean', answer: 'Steam charts track Steam\'s own concurrent-player activity over time. They\'re a useful trend signal for momentum, but they say nothing about Xbox, PS5, or Game Pass players, so they are not a full population count.', update: 'Add examples once launch numbers exist.' },

  { slug: 'gameplay-overview', group: 'guides', template: 'guide', trend: 'mistfall hunter gameplay', growth: '+70%', intent: 'players who saw rising gameplay searches and want the core loop fast', answer: 'Mistfall Hunter gameplay is best explained as dark fantasy PvPvE extraction: enter, fight, loot, secure extraction, and leave before greed wins.', update: 'Add launch gameplay clips, route examples, and class-specific footage after release.', title: 'Mistfall Hunter Gameplay: Core Loop, Combat & Extraction Explained', h1: 'Mistfall Hunter Gameplay Explained' },
  { slug: 'gameplay-loop-explained', group: 'guides', template: 'guide', title: "Mistfall Hunter Gameplay Loop Explained", h1: "Mistfall Hunter Gameplay Loop Explained", trend: 'mistfall hunter gameplay loop', growth: 'gameplay adjacent', intent: 'players asking what you actually do in a run', answer: 'Each run comes down to the same core decisions: what to fight, what to loot, when a fight is safe, and whether to push for more or head for the Soul of Return before another hunter gets there first.', update: 'Add step-by-step launch-run screenshots after release.' },
  { slug: 'gameplay-trailer-breakdown', group: 'news', template: 'guide', title: "Mistfall Hunter Gameplay Trailer Breakdown", h1: "Mistfall Hunter Gameplay Trailer Breakdown", trend: 'mistfall hunter gameplay trailer', growth: 'gameplay adjacent', intent: 'players searching trailer details before launch', answer: 'Official trailers confirm six classes, PvPvE combat against both monsters and rival hunters, an extraction-based loot loop, and Mist Lord boss encounters. Anything not actually shown on screen is still pending official confirmation, not a hidden mechanic.', update: 'Update when new launch trailers or official videos are released.' },
  { slug: 'first-30-minutes-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter: Your First 30 Minutes", h1: "Mistfall Hunter: your first 30 minutes", trend: 'mistfall hunter first gameplay', growth: 'gameplay adjacent', intent: 'players preparing for their first session', answer: 'Spend your first thirty minutes learning your class\'s basic combat feel, finding a nearby exit, and completing one full extraction with cheap gear — that matters more than chasing a boss fight before you know the controls.', update: 'Add exact tutorial and first-run notes after launch.' },
  { slug: 'combat-gameplay-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter Combat Gameplay Guide", h1: "Mistfall Hunter combat gameplay guide", trend: 'mistfall hunter combat gameplay', growth: 'gameplay adjacent', intent: 'players evaluating combat before launch', answer: 'Combat centers on stamina management, aiming without a hard lock-on, blocking and dodging, and your class\'s specific tools. The players who last longest track stamina like a second health bar, not just their own health.', update: 'Add verified timing windows and class clips after launch.' },
  { slug: 'pvp-gameplay-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter PvP Gameplay Guide", h1: "Mistfall Hunter PvP gameplay guide", trend: 'mistfall hunter pvp gameplay', growth: 'gameplay adjacent', intent: 'players asking how PvP works inside extraction runs', answer: 'PvP isn\'t only dueling — sound, route control, and extraction timing decide most fights before a hit even lands. The safest wins come from catching a distracted hunter, not challenging a full-health one head-on.', update: 'Add live PvP examples and common kill zones after launch.' },
  { slug: 'pve-gameplay-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter PvE Gameplay Guide", h1: "Mistfall Hunter PvE gameplay guide", trend: 'mistfall hunter pve gameplay', growth: 'gameplay adjacent', intent: 'players asking about monsters and bosses', answer: 'PvE threats cost you time, noise, and resources even when you win. Every fight against a monster should be weighed against whether the reward is worth the attention it draws from other hunters.', update: 'Add enemy names, boss notes, and drop sources after launch.' },
  { slug: 'solo-gameplay-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter Solo Gameplay Guide", h1: "Mistfall Hunter solo gameplay guide", trend: 'mistfall hunter solo gameplay', growth: 'gameplay adjacent', intent: 'solo players checking whether the game works without a squad', answer: 'Solo play rewards short, quiet routes and classes with an escape tool. You can\'t split attention with teammates, so route discipline and early exits matter more than raw class power.', update: 'Add live solo route examples after launch.' },
  { slug: 'co-op-gameplay-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter Co-op Gameplay Guide", h1: "Mistfall Hunter co-op gameplay guide", trend: 'mistfall hunter co op gameplay', growth: 'gameplay adjacent', intent: 'players checking squad gameplay', answer: 'Co-op runs work best when the squad splits jobs explicitly — one hunter on pressure, one on support, one watching angles — rather than everyone fighting the same target at once.', update: 'Add party-size, revive, and squad route notes after launch.' },

  { slug: 'mistfall-hunters-spelling', group: 'news', template: 'faq', title: "Mistfall Hunter or Mistfall Hunters? Correct Spelling", h1: "Mistfall Hunter or Mistfall Hunters?", trend: 'mistfall hunters', growth: '+50%', intent: 'players searching the plural or alternate spelling', answer: 'The official title is Mistfall Hunter, singular — Bellring Games\' own site, Steam, and Xbox listings all use the singular form. "Mistfall Hunters" is simply a common way people search for the same game.', update: 'Keep as a spelling-router page and add official naming notes if needed.' },
  { slug: 'mistfall-hunter-vs-mistfall-hunters', group: 'news', template: 'faq', title: "Mistfall Hunter vs Mistfall Hunters: Same Game", h1: "Mistfall Hunter vs Mistfall Hunters", trend: 'mistfall hunter vs mistfall hunters', growth: 'alternate spelling', intent: 'players unsure about the correct title', answer: 'There is no separate game called Mistfall Hunters — it\'s the same title, Mistfall Hunter, just written differently in search. Use the singular form when looking for official pages, storefronts, or news.', update: 'Update if official branding changes.' },
  { slug: 'mistfall-hunter-name-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Name & Spelling Guide", h1: "Mistfall Hunter name and spelling guide", trend: 'mistfall hunter name guide', growth: 'alternate spelling', intent: 'players searching typos and title variants', answer: 'If you\'ve seen the name written as Mistfall Hunters, Mist Fall Hunter, or similar, they all point to the same game. The official name on Steam, Xbox, and Bellring\'s own site is Mistfall Hunter.', update: 'Add common typo variants from Search Console.' },

  { slug: 'release-date-july-30', group: 'news', template: 'faq', trend: 'mistfall hunter release date', growth: '+40%', intent: 'players searching the exact launch date before the end of July', answer: 'Use this page for the exact July launch query, time-zone conversion, platform access, and last-week checklist.', update: 'After launch, convert to launch archive with patch and server notes.' },
  { slug: 'release-time-time-zones', group: 'news', template: 'faq', title: "Mistfall Hunter Release Time in Your Time Zone", h1: "Mistfall Hunter release time by time zone", trend: 'mistfall hunter release time', growth: 'release date adjacent', intent: 'players converting launch time to local time', answer: 'Mistfall Hunter launches July 29, 2026, 6:00 PM PT, which converts to July 30, 2026, 01:00 UTC — the same instant. In Central European Time that\'s roughly 3:00 AM on July 30; in Japan Standard Time it\'s roughly 11:00 AM on July 30. Check your local storefront for the exact countdown.', update: 'Add final official time-zone table and countdown status.' },
  { slug: 'launch-day-checklist', group: 'news', template: 'guide', title: "Mistfall Hunter Launch Day Checklist", h1: "Mistfall Hunter launch day checklist", trend: 'mistfall hunter launch day', growth: 'release date adjacent', intent: 'players preparing for launch day', answer: 'Before launch day: confirm your platform account is linked, wishlist or follow the store page, decide on Standard vs Deluxe, and pick a class you\'re comfortable learning rather than one you\'ve only seen in trailers. There is no pre-download, so the game only becomes playable at the official launch moment.', update: 'Update daily through launch week.' },
  { slug: 'launch-week-roadmap', group: 'news', template: 'faq', title: "Mistfall Hunter Launch Week Roadmap", h1: "Mistfall Hunter launch week roadmap", trend: 'mistfall hunter launch week', growth: 'release date adjacent', intent: 'players looking for first-week updates', answer: 'Launch week is the window to watch for day-one patches, server stability reports, and the first real balance discussions once players have live data instead of beta impressions. This page tracks those as they are officially confirmed.', update: 'Refresh with official patch notes and server notices.' },
  { slug: 'pre-launch-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter Pre-Launch Guide", h1: "Mistfall Hunter pre-launch guide", trend: 'mistfall hunter before launch', growth: 'release date adjacent', intent: 'players asking what to learn before release', answer: 'Before launch, the most useful prep is learning the extraction loop, comparing class roles, and confirming your platform and price — not memorizing tier lists based on beta data that may not carry over to the launch build.', update: 'Replace pre-launch advice with live beginner routing after release.' },

  { slug: 'steam-page-guide', group: 'news', template: 'faq', trend: 'mistfall hunter steam', growth: '+30%', intent: 'players searching the Steam page and PC access', answer: 'The Steam page covers wishlist, demo, install, release timing, system requirements, and Steam Deck questions.', update: 'Add official Steam app details, file size, and reviews after release.', title: 'Mistfall Hunter on Steam: Wishlist, Demo & Store Page Guide', h1: 'Mistfall Hunter on Steam' },
  { slug: 'steam-release-time', group: 'news', template: 'faq', title: "Mistfall Hunter Steam Release Time", h1: "Mistfall Hunter Steam release time", trend: 'mistfall hunter steam release time', growth: 'steam adjacent', intent: 'Steam users checking unlock timing', answer: 'Steam\'s own listing shows July 29, 2026 for release. The exact unlock moment is 6:00 PM PT (July 30, 01:00 UTC) per the official announcement; Steam typically unlocks at the same instant everywhere, adjusted to each region\'s local clock.', update: 'Add final Steam unlock time when listed.' },
  { slug: 'steam-demo-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Steam Demo Guide", h1: "Mistfall Hunter Steam demo guide", trend: 'mistfall hunter steam demo', growth: 'steam adjacent', intent: 'players searching demo status after Steam Next Fest', answer: 'The Mistfall Hunter demo was available during the June 2026 Steam Next Fest, separate from the June 15–22 open beta. Demo progress does not carry into the full release; treat it as a taste of the combat and extraction loop, not the final build.', update: 'Refresh with current Steam demo availability.' },
  { slug: 'steam-reviews-tracker', group: 'news', template: 'faq', title: "Mistfall Hunter Steam Reviews Tracker", h1: "Mistfall Hunter Steam reviews tracker", trend: 'mistfall hunter steam reviews', growth: 'steam adjacent', intent: 'players checking early reception', answer: 'Mistfall Hunter doesn\'t have Steam user reviews yet since it hasn\'t launched. This page will track review trends and common praise or complaints once real players can rate it after July 29.', update: 'Add review score, common praise, and common issues after launch.' },
  { slug: 'steam-wishlist-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Steam Wishlist Guide", h1: "Mistfall Hunter Steam wishlist guide", trend: 'mistfall hunter wishlist', growth: 'steam adjacent', intent: 'players looking for Steam pre-launch actions', answer: 'Wishlisting Mistfall Hunter on Steam (or following it on Xbox or PlayStation) gets you a notification the moment it unlocks. There\'s no confirmed wishlist-specific reward beyond that; the practical benefit is simply not missing the exact launch moment.', update: 'Convert to launch install guide once the game releases.' },

  { slug: 'crossplay-status', group: 'news', template: 'faq', trend: 'mistfall hunter crossplay', growth: '+7%', intent: 'players checking whether PC, Xbox, and PS5 can play together', answer: 'Crossplay across PC, Xbox, and PS5 has no final confirmed answer yet; this page tracks status and updates once official wording lands.', update: 'Add confirmed crossplay, cross-progression, and party rules when announced.', title: 'Mistfall Hunter Crossplay Status: PC, Xbox & PS5', h1: 'Mistfall Hunter Crossplay Status' },
  { slug: 'cross-platform-party-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Cross-Platform Party Guide", h1: "Mistfall Hunter cross-platform party guide", trend: 'mistfall hunter cross platform party', growth: 'crossplay adjacent', intent: 'friends planning mixed-platform squads', answer: 'During the June 2026 open beta, Bellring Games confirmed full cross-play for players on the same server, letting PC, Xbox, and PS5 testers party up together. Whether that carries over unchanged to launch hasn\'t been separately confirmed — check the crossplay status page for the latest.', update: 'Add official party and account-linking details when verified.' },
  { slug: 'cross-progression-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Cross-Progression Guide", h1: "Mistfall Hunter cross-progression guide", trend: 'mistfall hunter cross progression', growth: 'crossplay adjacent', intent: 'players asking if progress carries across platforms', answer: 'Cross-progression — carrying the same account and unlocks between platforms — has not been officially confirmed either way. The open beta confirmed cross-play (playing together), which is a related but separate feature from cross-progression (shared save data).', update: 'Add official account and save-transfer details if announced.' },
  { slug: 'pc-xbox-crossplay-guide', group: 'news', template: 'faq', title: "Mistfall Hunter PC & Xbox Crossplay Guide", h1: "Mistfall Hunter PC and Xbox crossplay", trend: 'mistfall hunter pc xbox crossplay', growth: 'crossplay adjacent', intent: 'PC and Xbox players checking party compatibility', answer: 'PC and Xbox players could party together during the June 2026 open beta, per Bellring Games\' official confirmation. Console online multiplayer on Xbox needs Game Pass Core or Ultimate; final launch crossplay rules haven\'t been separately confirmed.', update: 'Verify with official platform support after launch.' },
  { slug: 'ps5-crossplay-guide', group: 'news', template: 'faq', title: "Mistfall Hunter PS5 Crossplay Guide", h1: "Mistfall Hunter PS5 crossplay guide", trend: 'mistfall hunter ps5 crossplay', growth: 'crossplay adjacent', intent: 'PS5 players checking mixed-platform play', answer: 'PS5 was included in the same cross-play confirmation as PC and Xbox during the June 2026 open beta. Whether that carries over unchanged at launch should still be checked against official day-one information.', update: 'Add PlayStation store and official support wording when available.' },

  { slug: 'price-status', group: 'news', template: 'faq', trend: 'mistfall hunter price', growth: '+2%', intent: 'players checking launch price and access options', answer: 'Standard Edition is $24.99, Deluxe is $39.99 with a $15 upgrade, plus a 10% launch discount. Day one on Xbox Game Pass, not on PS Plus.', update: 'Refresh with official store price at launch.', title: 'Mistfall Hunter Price: Standard, Deluxe & Game Pass Status', h1: 'Mistfall Hunter Price & Access' },
  { slug: 'steam-price-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Steam Price Guide", h1: "Mistfall Hunter Steam price guide", trend: 'mistfall hunter steam price', growth: 'price adjacent', intent: 'Steam users checking cost', answer: 'On Steam, Standard Edition is $24.99 and Deluxe Edition is $39.99, with a $15 upgrade path. A 10% launch discount applies from the moment the game unlocks through August 12, 2026.', update: 'Add exact regional Steam price after launch.' },
  { slug: 'xbox-price-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Xbox Price Guide", h1: "Mistfall Hunter Xbox price guide", trend: 'mistfall hunter xbox price', growth: 'price adjacent', intent: 'Xbox players checking purchase or subscription access', answer: 'Xbox pricing matches Steam: $24.99 Standard, $39.99 Deluxe. It\'s also day one on Xbox Game Pass for Xbox and PC, so Game Pass subscribers can play without buying it separately.', update: 'Add final Xbox store price and Game Pass wording.' },
  { slug: 'ps5-price-guide', group: 'news', template: 'faq', title: "Mistfall Hunter PS5 Price Guide", h1: "Mistfall Hunter PS5 price guide", trend: 'mistfall hunter ps5 price', growth: 'price adjacent', intent: 'PS5 players checking purchase cost', answer: 'PS5 pricing follows the same $24.99 Standard / $39.99 Deluxe structure confirmed across platforms. Unlike Xbox, it is not included with PS Plus at launch, so PS5 players need to buy it directly.', update: 'Add final PS5 store price after listing updates.' },
  { slug: 'game-pass-or-buy-guide', group: 'news', template: 'faq', title: "Mistfall Hunter: Game Pass or Buy?", h1: "Mistfall Hunter: Game Pass or buy?", trend: 'mistfall hunter game pass or buy', growth: 'price adjacent', intent: 'players deciding between subscription and purchase', answer: 'If you\'re on Xbox or PC, Game Pass gets you Mistfall Hunter day one at no extra cost beyond the subscription. Buying outright makes more sense if you want to keep playing after a Game Pass subscription might lapse, or if you\'re on PS5, where Game Pass access doesn\'t apply.', update: 'Add exact subscription and purchase options after launch.' },

  { slug: 'classes-overview-2026', group: 'guides', template: 'guide', title: "Mistfall Hunter Classes Overview (2026)", h1: "Mistfall Hunter classes overview", trend: 'mistfall hunter classes', growth: '+2%', intent: 'players searching all classes before launch', answer: 'Mistfall Hunter launches with six classes: Mercenary (melee bruiser), Sorcerer (ranged arcane), Blackarrow (ranged precision), Shadowstrix (stealth and burst), Seer (support), and Withered Knight (heavy melee with parries). Each has multiple weapon stances rather than one fixed kit.', update: 'Update with live skill trees and balance changes.' },
  { slug: 'classes-ranked-for-launch', group: 'guides', template: 'guide', title: "Mistfall Hunter Classes Ranked for Launch", h1: "Mistfall Hunter classes ranked for launch", trend: 'mistfall hunter classes ranked', growth: 'classes adjacent', intent: 'players looking for a launch ranking', answer: 'Without live balance data, the safest launch ranking criterion is role clarity and beginner forgiveness rather than raw damage. See the best-class-for-beginners guide for a role-by-role breakdown; expect real tier lists to shift once launch data comes in.', update: 'Replace with tested tier list after launch.' },
  { slug: 'classes-for-solo-players', group: 'guides', template: 'guide', title: "Best Mistfall Hunter Classes for Solo Players", h1: "Best classes for solo players", trend: 'mistfall hunter classes solo', growth: 'classes adjacent', intent: 'solo players choosing a main', answer: 'Solo players get the most value from classes with an escape tool or range advantage — being able to disengage a bad fight matters more alone than in a squad, where a teammate can cover you.', update: 'Add live solo-route performance after launch.' },
  { slug: 'classes-for-squads', group: 'guides', template: 'guide', title: "Best Mistfall Hunter Classes for Squads", h1: "Best classes for squads", trend: 'mistfall hunter classes squad', growth: 'classes adjacent', intent: 'teams choosing roles', answer: 'In a squad, classes can specialize harder since teammates cover weaknesses. A mix of frontline pressure, ranged control, and support tends to outperform three copies of the same role.', update: 'Add live comp examples after launch.' },
  { slug: 'classes-for-beginners-2026', group: 'guides', template: 'guide', title: "Best Mistfall Hunter Classes for Beginners (2026)", h1: "Best classes for beginners", trend: 'mistfall hunter classes beginner', growth: 'classes adjacent', intent: 'new players choosing a first class', answer: 'New players do best with a class that punishes mistakes gently — clear defensive tools and a simple win condition beat a high-ceiling kit you haven\'t learned yet. See the beginner-class guide for specific picks by role.', update: 'Update once skill trees and starter kits are verified.' },

  { slug: 'xbox-launch-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Xbox Launch Guide", h1: "Mistfall Hunter Xbox launch guide", trend: 'mistfall hunter xbox', growth: '-3%', intent: 'Xbox players checking launch access despite slight trend dip', answer: 'On Xbox, Mistfall Hunter is day one on Xbox Game Pass for Xbox Series X|S and PC, with cross-play confirmed during the June 2026 beta. Console online multiplayer needs Game Pass Core or Ultimate, which can be sold separately from base Game Pass tiers in some regions.', update: 'Add final Xbox store, file size, and launch patch notes.' },
  { slug: 'xbox-series-x-settings', group: 'tools', template: 'tool', title: "Mistfall Hunter Xbox Series X Settings Guide", h1: "Mistfall Hunter Xbox Series X settings", trend: 'mistfall hunter xbox series x settings', growth: 'xbox adjacent', intent: 'Xbox Series X players checking best settings', answer: 'Detailed Xbox Series X performance settings weren\'t published before launch. Once available, check for a performance-mode toggle, camera sensitivity, and visibility options first — those affect PvP reaction time the most.', update: 'Add exact console mode names after launch.' },
  { slug: 'xbox-series-s-settings', group: 'tools', template: 'tool', title: "Mistfall Hunter Xbox Series S Settings Guide", h1: "Mistfall Hunter Xbox Series S settings", trend: 'mistfall hunter xbox series s settings', growth: 'xbox adjacent', intent: 'Xbox Series S players checking performance', answer: 'Series S has less GPU headroom than Series X, so resolution and effects settings may need separate tuning once the game is live. Treat Series X settings as a starting point, not a direct match.', update: 'Add tested Series S settings after launch.' },
  { slug: 'xbox-play-anywhere-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Xbox Play Anywhere Guide", h1: "Mistfall Hunter Xbox Play Anywhere", trend: 'mistfall hunter xbox play anywhere', growth: 'xbox adjacent', intent: 'players checking Xbox ecosystem access', answer: 'Xbox Play Anywhere support hasn\'t been separately confirmed for Mistfall Hunter as of this writing. Check the Xbox store listing directly at launch for the official capabilities list.', update: 'Add official Xbox store support wording when available.' },
  { slug: 'xbox-cloud-guide', group: 'news', template: 'faq', title: "Mistfall Hunter Xbox Cloud Gaming Guide", h1: "Mistfall Hunter Xbox Cloud Gaming", trend: 'mistfall hunter xbox cloud', growth: 'xbox adjacent', intent: 'players checking cloud availability', answer: 'Xbox Cloud Gaming availability depends on a separate listing decision from Bellring Games and Microsoft, not just general Game Pass inclusion. There\'s no official confirmation either way yet.', update: 'Add official cloud status if listed.' },

  { slug: 'mound-omen-of-cthulhu-comparison', group: 'guides', template: 'guide', title: "Mistfall Hunter vs The Mound: Omen of Cthulhu", h1: "Mistfall Hunter vs The Mound: Omen of Cthulhu", trend: 'the mound omen of cthulhu', growth: '+120%', intent: 'adjacent dark-horror trend search from players interested in grim fantasy and Lovecraftian tone', answer: 'Mistfall Hunter isn\'t connected to The Mound or Lovecraft\'s Cthulhu mythos — it\'s an original dark fantasy setting called Weavereach, with its own corrupted-god lore centered on the Gyldenmist. If you\'re drawn to grim, monster-heavy horror-adjacent worlds, the tone is a similar fit even without shared canon.', update: 'Keep comparison factual and remove if Search Console shows poor relevance.' },
  { slug: 'lovecraftian-dark-fantasy-games', group: 'guides', template: 'guide', title: "Mistfall Hunter and Lovecraftian Dark Fantasy Games", h1: "Mistfall Hunter and Lovecraftian dark fantasy", trend: 'lovecraftian dark fantasy games', growth: 'cthulhu adjacent', intent: 'players looking for dark fantasy, monsters, and eerie world tone', answer: 'Mistfall Hunter isn\'t a Cthulhu Mythos game, but its dark fantasy tone — corrupted gods, a world-consuming mist, and monstrous enemies — appeals to some of the same players who enjoy Lovecraftian horror settings.', update: 'Add a careful similar-games list after launch.' },
  { slug: 'cthulhu-fans-mistfall-hunter-guide', group: 'guides', template: 'guide', title: "Mistfall Hunter: A Guide for Cthulhu Mythos Fans", h1: "Mistfall Hunter for Cthulhu Mythos fans", trend: 'cthulhu fans mistfall hunter', growth: 'cthulhu adjacent', intent: 'players from cosmic-horror searches checking if Mistfall Hunter fits', answer: 'If you\'re coming from cosmic horror, Mistfall Hunter won\'t give you Cthulhu specifically, but it does deliver dread-heavy atmosphere and monster pressure in its own original mythology — the Gyldenmist and the shattered world of Weavereach.', update: 'Update with live environment and enemy screenshots after launch.' },
  { slug: 'dark-fantasy-extraction-games-2026', group: 'guides', template: 'guide', title: "Best Dark Fantasy Extraction Games 2026: Mistfall Hunter", h1: "Dark fantasy extraction games in 2026", trend: 'dark fantasy extraction games 2026', growth: 'cthulhu adjacent', intent: 'players searching the broader dark fantasy extraction niche', answer: 'Mistfall Hunter sits in the dark fantasy extraction niche alongside other PvPvE loot-and-escape games, distinguished by its Souls-like combat pacing and original lore rather than a licensed or Lovecraftian setting.', update: 'Add live reception and comparison notes after launch.' },
  { slug: 'horror-fans-guide-to-mistfall-hunter', group: 'guides', template: 'guide', title: "A Horror Fan's Guide to Mistfall Hunter", h1: "Mistfall Hunter for horror fans", trend: 'horror fans guide to mistfall hunter', growth: 'cthulhu adjacent', intent: 'horror and dark fantasy players evaluating the game', answer: 'Horror fans should expect atmosphere and monster-driven dread rather than a jump-scare horror game — the tension in Mistfall Hunter comes from extraction stakes and PvP risk as much as from its dark setting.', update: 'Add screenshot examples and tone notes after launch.' },
];

function cardsFor(brief: TrendBrief) {
  if (brief.trend.includes('class')) return classCards;
  if (brief.trend.includes('cross') || brief.trend.includes('price') || brief.trend.includes('xbox')) return platformCards;
  return trendCards;
}

function createPage(brief: TrendBrief): SeoPage {
  const cleanTitle = brief.title ?? `Mistfall Hunter ${capitalizeTrend(brief.trend)}`;
  const cleanH1 = brief.h1 ?? capitalizeTrend(brief.trend);
  return {
    slug: brief.slug,
    group: brief.group,
    template: brief.template,
    title: cleanTitle,
    description: brief.answer.length > 155
      ? `${brief.answer.slice(0, 155).replace(/\s+\S*$/, '')}\u2026`
      : brief.answer,
    eyebrow: 'Launch watch',
    h1: cleanH1,
    lead: brief.answer,
    intent: {
      primary: cleanH1,
      secondary: [brief.trend, `${brief.trend} guide`, `${brief.trend} 2026`],
      freshness: brief.update,
    },
    checklist: [
      `Search intent: ${brief.intent}`,
      `Direct answer: ${brief.answer}`,
      'Updated with official or live launch data as it becomes available.',
      'See the release, Steam, gameplay, class, or platform hubs for related detail.',
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
    sources: [
      { href: 'https://www.mistfallhunter.com/', label: 'Mistfall Hunter official site' },
      { href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/', label: 'Mistfall Hunter on Steam' },
    ],
    confidence: 'reported',
  };
}

function localizeDraft(page: SeoPage): SeoPage {
  return {
    ...page,
    draft: true,
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
