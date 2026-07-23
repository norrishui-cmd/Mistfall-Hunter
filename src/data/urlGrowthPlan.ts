import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

const mapCards = [
  { title: 'Interactive map', desc: 'Use filters for extraction, bosses, loot, and landmarks.', href: '/map' },
  { title: 'Extraction guide', desc: 'Learn when to leave and how Soul of Return changes a run.', href: '/soul-of-return' },
  { title: 'Bosses', desc: 'Prepare for Mist Lords and contested PvE zones.', href: '/bosses' },
];

const buildCards = [
  { title: 'Builds hub', desc: 'Starter build directions and affix planning.', href: '/builds' },
  { title: 'Classes', desc: 'Compare all classes for solo, PvP, and beginner play.', href: '/classes' },
  { title: 'Loot guide', desc: 'Understand gear value, affixes, and banking priorities.', href: '/loot' },
];

const bossCards = [
  { title: 'Bosses & PvE', desc: 'Mist Lords, Corroded enemies, and reward routing.', href: '/bosses' },
  { title: 'Loot & affixes', desc: 'Gear value and banking priorities near boss fights.', href: '/loot' },
  { title: 'Map', desc: 'Plan exits before pulling high-value PvE targets.', href: '/map' },
];

export const enGrowthPages: SeoPage[] = [
  {
    slug: 'hallowgrove-chaos',
    group: 'database',
    title: 'Mistfall Hunter Hallowgrove Chaos Map Guide',
    description: 'Hallowgrove Chaos guide for Mistfall Hunter covering high-risk routes, extraction planning, boss pressure, loot priority, and launch tracking.',
    eyebrow: 'Map guide',
    h1: 'Hallowgrove Chaos map guide',
    lead: 'Hallowgrove Chaos is a natural long-tail map target for players searching higher-risk route advice once map variants are confirmed.',
    sections: [
      { heading: 'Search intent', body: ['Players looking for Hallowgrove Chaos usually want a route, not lore. This page is built to become the landing page for danger zones, extraction exits, boss pressure, and loot notes as soon as live markers are verified.'] },
      { heading: 'Pre-launch route plan', body: ['Treat chaos variants as higher-commitment runs. Secure extraction knowledge first, avoid long noisy clears until you know traffic patterns, and only push deeper after banking a few safe upgrades.'], bullets: ['Scout exits', 'Avoid blind boss pulls', 'Listen before looting', 'Bank early upgrades', 'Update route notes after launch'] },
      { heading: 'Google target', body: ['The page targets queries around Hallowgrove Chaos map, Hallowgrove Chaos guide, extraction routes, and high-risk loot locations.'] },
    ],
    cards: mapCards,
    faqs: [
      { q: 'Is Hallowgrove Chaos confirmed?', a: 'Preview coverage points to chaos-style variants, but final map naming and markers should be verified at launch.' },
      { q: 'Should beginners run chaos variants?', a: 'Beginners should learn normal routes first, then move into chaos routes with cheap kits.' },
    ],
  },
  {
    slug: 'brandrgarde-chaos',
    group: 'database',
    title: 'Mistfall Hunter Brandrgarde Chaos Map Guide',
    description: 'Brandrgarde Chaos guide for Mistfall Hunter covering route risk, extraction timing, PvP pressure, boss routing, and loot tracking.',
    eyebrow: 'Map guide',
    h1: 'Brandrgarde Chaos map guide',
    lead: 'Brandrgarde Chaos gives the site a focused map-variant URL for players searching harder routes, boss lanes, and contested loot zones.',
    sections: [
      { heading: 'Why this URL matters', body: ['Map-variant searches become valuable after launch because players look for the exact zone name plus route, loot, boss, or extraction terms. This page prepares that landing page now.'] },
      { heading: 'Route priorities', body: ['Learn the normal Brandrgarde flow before chasing chaos rewards. Higher-risk variants should be entered with a clear extraction plan and a strict leave condition.'], bullets: ['Enter with a cheap kit first', 'Mark likely PvP lanes', 'Clear only required enemies', 'Leave after one major objective', 'Record confirmed markers'] },
      { heading: 'Google target', body: ['The page targets Brandrgarde Chaos, Brandrgarde map, chaos route, boss route, and extraction path searches.'] },
    ],
    cards: mapCards,
    faqs: [
      { q: 'What is Brandrgarde Chaos?', a: 'It is treated here as a higher-risk Brandrgarde variant until final launch map rules are confirmed.' },
      { q: 'Are the routes final?', a: 'No. Exact route notes should be updated after launch verification.' },
    ],
  },
  {
    slug: 'extraction-map',
    group: 'tools',
    title: 'Mistfall Hunter Extraction Map: Exits, Soul of Return & Safe Routes',
    description: 'Mistfall Hunter extraction map guide covering exits, Soul of Return routing, safe paths, third-party risk, and when to leave.',
    eyebrow: 'Map tool',
    h1: 'Mistfall Hunter extraction map',
    lead: 'Extraction searches are some of the highest-intent queries for any extraction game. This page focuses on exits, routes, and leaving alive.',
    sections: [
      { heading: 'What this page should answer', body: ['Players landing here need to know where to go, what condition opens the way out, and how much risk they are taking by staying. The interactive map should eventually feed exact extraction markers into this page.'] },
      { heading: 'Safe-route rules', body: ['Secure Soul of Return early, avoid starting a boss without checking exits, and keep enough stamina and healing for the final disengage.'], bullets: ['Find the exit first', 'Secure extraction condition early', 'Avoid noisy fights near exits', 'Leave after a valuable drop', 'Never loot without listening'] },
      { heading: 'Google target', body: ['The page targets extraction map, exit locations, Soul of Return routes, and safe extraction path searches.'] },
    ],
    cards: mapCards,
    faqs: [
      { q: 'Where are the extraction points?', a: 'The interactive map should track exact points once live markers are verified.' },
      { q: 'What is the safest extraction route?', a: 'The safest route is the one you scout before looting, with enough stamina and healing reserved for escape.' },
    ],
  },
  {
    slug: 'boss-locations',
    group: 'database',
    title: 'Mistfall Hunter Boss Locations Map',
    description: 'Mistfall Hunter boss locations map guide for Mist Lords, high-value PvE targets, route planning, and PvP danger around boss zones.',
    eyebrow: 'Boss map',
    h1: 'Mistfall Hunter boss locations',
    lead: 'Boss-location searches combine map intent with loot intent, which makes this a strong URL for both wiki users and Google discovery.',
    sections: [
      { heading: 'How to use boss locations', body: ['Do not treat boss pins as simple loot markers. A boss location also marks sound, time, third-party risk, and a possible extraction trap after the fight.'] },
      { heading: 'Boss-route checklist', body: ['Check the nearest exit, scout player traffic, clear only essential enemies, and decide before the pull whether you will leave if another team arrives.'], bullets: ['Nearest extraction', 'Escape cover', 'PvP approach lanes', 'Loot time after kill', 'Backup route'] },
      { heading: 'Google target', body: ['The page targets Mistfall Hunter boss locations, Mist Lord map, boss map, and PvE route searches.'] },
    ],
    cards: bossCards,
    faqs: [
      { q: 'Are boss locations fixed?', a: 'Exact spawn rules should be confirmed after launch. This page is structured to track fixed and rotating locations.' },
      { q: 'Should solo players fight bosses?', a: 'Only with a clean exit plan and a low-risk kit while learning.' },
    ],
  },
  {
    slug: 'loot-locations',
    group: 'database',
    title: 'Mistfall Hunter Loot Locations & High-Value Routes',
    description: 'Mistfall Hunter loot locations guide covering high-value routes, extraction value, safe farming, map markers, and what to bank first.',
    eyebrow: 'Loot map',
    h1: 'Mistfall Hunter loot locations',
    lead: 'Loot-location pages answer the most practical player question: where can I get value and still leave alive?',
    sections: [
      { heading: 'Loot is only value after extraction', body: ['A high-value room is not useful if it traps you between a boss, a squad, and a bad exit. This page will track loot locations together with risk level and extraction distance.'] },
      { heading: 'Route priority', body: ['Start with safer resource routes, then graduate into contested boss-adjacent loot once you know player traffic and map sounds.'], bullets: ['Low-risk resource path', 'Class upgrade targets', 'Boss-adjacent loot', 'Extraction distance', 'Repeatable farming loop'] },
      { heading: 'Google target', body: ['The page targets loot locations, high-value loot, farming routes, and safe loot route searches.'] },
    ],
    cards: mapCards,
    faqs: [
      { q: 'Where is the best loot?', a: 'The best loot is usually higher risk. Exact locations should be verified after launch.' },
      { q: 'What should beginners farm?', a: 'Beginners should farm safe upgrades and resources before chasing contested high-value zones.' },
    ],
  },
  {
    slug: 'best-builds',
    group: 'guides',
    title: 'Mistfall Hunter Best Builds: Class Builds, Affixes & Roles',
    description: 'Mistfall Hunter best builds hub covering Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer, Withered Knight, affixes, and role planning.',
    eyebrow: 'Build hub',
    h1: 'Mistfall Hunter best builds',
    lead: 'Best-build searches are volatile before launch, so this page frames builds by role and affix direction instead of pretending exact numbers are final.',
    sections: [
      { heading: 'How builds should be judged', body: ['A build is good when it helps you extract, not only when it wins a damage test. Judge builds by role clarity, survival tools, resource cost, and how well they handle PvP interruptions.'] },
      { heading: 'Pre-launch build buckets', body: ['The safest buckets are beginner tank, solo stealth, ranged pressure, spell burst, support, and heavy melee. Exact best-in-slot gear should wait for launch values.'], bullets: ['Beginner tank', 'Solo stealth', 'Ranged pressure', 'Spell burst', 'Support utility', 'Heavy melee pressure'] },
      { heading: 'Google target', body: ['The page targets best builds, class builds, build tier list, and affix guide searches.'] },
    ],
    cards: buildCards,
    faqs: [
      { q: 'What is the best build?', a: 'Before launch, the best answer is role-based: choose the build that matches solo, squad, PvP, or boss farming goals.' },
      { q: 'Are exact affixes final?', a: 'No. Exact affix values should be verified after launch.' },
    ],
  },
  {
    slug: 'mercenary-build',
    group: 'guides',
    title: 'Mistfall Hunter Mercenary Build: Tank, Block & Beginner Setup',
    description: 'Mistfall Hunter Mercenary build guide for tank play, sword and shield, block timing, parries, hammer pressure, affixes, and beginner gear.',
    eyebrow: 'Build guide',
    h1: 'Mercenary build guide',
    lead: 'Mercenary builds should make mistakes survivable while teaching block timing, stamina discipline, and controlled counterattacks.',
    sections: [
      { heading: 'Build goal', body: ['The beginner Mercenary build should prioritize survival, stable stamina, and simple punish windows. Damage matters, but only after the build can survive bad first contact.'] },
      { heading: 'Affix direction', body: ['Look for defensive value, stamina comfort, recovery, and controlled burst after blocks or stuns. Avoid all-in damage while learning.'], bullets: ['Armor or mitigation', 'Stamina recovery', 'Block value', 'Cooldown comfort', 'Punish damage'] },
      { heading: 'Google target', body: ['The page targets Mercenary build, tank build, beginner build, block build, and sword shield build searches.'] },
    ],
    cards: buildCards,
    faqs: [
      { q: 'Is Mercenary good for beginners?', a: 'Yes. It is one of the safest first classes because defensive tools reduce mistake cost.' },
      { q: 'Should Mercenary build damage?', a: 'Build enough damage to finish fights, but survival and stamina should come first while learning.' },
    ],
  },
  {
    slug: 'sorcerer-build',
    group: 'guides',
    title: 'Mistfall Hunter Sorcerer Build: Spell Burst, Range & PvE Clear',
    description: 'Mistfall Hunter Sorcerer build guide covering spell burst, ranged spacing, PvE clear, cooldowns, fragile defense, and affix priorities.',
    eyebrow: 'Build guide',
    h1: 'Sorcerer build guide',
    lead: 'Sorcerer builds are about creating lethal distance: burst hard, clear fast, and never let a melee hunter make the fight honest.',
    sections: [
      { heading: 'Build goal', body: ['Sorcerer wants range, burst timing, and enough escape comfort to survive when the first spell chain fails. Pure damage is tempting but fragile.'] },
      { heading: 'Affix direction', body: ['Prioritize spell damage, cooldown flow, resource comfort, and defensive escape value. PvP Sorcerer also needs tools that punish gap closers.'], bullets: ['Spell damage', 'Cooldown recovery', 'Resource sustain', 'Cast safety', 'Escape value'] },
      { heading: 'Google target', body: ['The page targets Sorcerer build, mage build, spell build, burst build, and PvE clear build searches.'] },
    ],
    cards: buildCards,
    faqs: [
      { q: 'Is Sorcerer beginner friendly?', a: 'It has high damage but low forgiveness. Beginners should learn spacing before chasing burst builds.' },
      { q: 'What should Sorcerer prioritize?', a: 'Range control, cooldowns, and enough defense to reset after pressure.' },
    ],
  },
  {
    slug: 'blackarrow-build',
    group: 'guides',
    title: 'Mistfall Hunter Blackarrow Build: Bow, Range & Solo Pressure',
    description: 'Mistfall Hunter Blackarrow build guide for bow pressure, ranged PvP, solo scouting, kiting, stamina, and affix planning.',
    eyebrow: 'Build guide',
    h1: 'Blackarrow build guide',
    lead: 'Blackarrow builds win by seeing the fight early, controlling distance, and forcing enemies to spend resources before they reach you.',
    sections: [
      { heading: 'Build goal', body: ['A good Blackarrow build keeps pressure at range while preserving enough mobility to escape bad melee contact. It should feel patient, not frantic.'] },
      { heading: 'Affix direction', body: ['Look for ranged pressure, mobility comfort, stamina economy, and tools that punish predictable approaches.'], bullets: ['Ranged damage', 'Movement comfort', 'Stamina economy', 'Slow or control value', 'Safe finishing power'] },
      { heading: 'Google target', body: ['The page targets Blackarrow build, bow build, ranged build, solo ranged build, and PvP bow build searches.'] },
    ],
    cards: buildCards,
    faqs: [
      { q: 'Is Blackarrow good solo?', a: 'Yes, if you use range for scouting and avoid getting trapped in melee.' },
      { q: 'Does Blackarrow need aim settings?', a: 'Yes. Controller and mouse sensitivity tuning matter a lot for ranged classes.' },
    ],
  },
  {
    slug: 'shadowstrix-build',
    group: 'guides',
    title: 'Mistfall Hunter Shadowstrix Build: Stealth, Burst & Solo PvP',
    description: 'Mistfall Hunter Shadowstrix build guide covering stealth openers, burst damage, solo PvP, reset tools, affixes, and extraction timing.',
    eyebrow: 'Build guide',
    h1: 'Shadowstrix build guide',
    lead: 'Shadowstrix builds should help you pick fights, burst isolated targets, and reset before the enemy turns the fight into a long trade.',
    sections: [
      { heading: 'Build goal', body: ['The build should maximize choice. Stealth is valuable because it lets you skip bad fights and start good ones on your timing.'] },
      { heading: 'Affix direction', body: ['Prioritize burst windows, mobility, cooldown recovery, and escape tools. Do not overbuild for long brawls if the class wins by resetting.'], bullets: ['Burst damage', 'Cooldown recovery', 'Stealth uptime', 'Mobility', 'Escape value'] },
      { heading: 'Google target', body: ['The page targets Shadowstrix build, stealth build, assassin build, solo PvP build, and burst build searches.'] },
    ],
    cards: buildCards,
    faqs: [
      { q: 'Is Shadowstrix the best solo class?', a: 'It is one of the strongest solo candidates because stealth gives control over engagements.' },
      { q: 'Should Shadowstrix take fair fights?', a: 'Usually no. Open with advantage, then reset if the burst fails.' },
    ],
  },
  {
    slug: 'seer-build',
    group: 'guides',
    title: 'Mistfall Hunter Seer Build: Healing, Shielding & Support',
    description: 'Mistfall Hunter Seer build guide for healing, shields, support utility, squad play, boss safety, control, and affix priorities.',
    eyebrow: 'Build guide',
    h1: 'Seer build guide',
    lead: 'Seer builds are strongest when they make a squad harder to kill, harder to chase, and safer during boss fights.',
    sections: [
      { heading: 'Build goal', body: ['A Seer build should keep the support alive first, then stabilize teammates. Dead supports do not heal, shield, or reset fights.'] },
      { heading: 'Affix direction', body: ['Look for healing strength, shield value, cooldown comfort, survivability, and control tools that create exits.'], bullets: ['Healing value', 'Shield strength', 'Cooldown recovery', 'Self-survival', 'Control utility'] },
      { heading: 'Google target', body: ['The page targets Seer build, healer build, support build, squad build, and boss support build searches.'] },
    ],
    cards: buildCards,
    faqs: [
      { q: 'Is Seer good solo?', a: 'Seer is playable solo but much stronger in coordinated groups.' },
      { q: 'What should Seer build first?', a: 'Survivability and cooldown comfort before greedy support stats.' },
    ],
  },
  {
    slug: 'withered-knight-build',
    group: 'guides',
    title: 'Mistfall Hunter Withered Knight Build: Heavy Melee & Pressure',
    description: 'Mistfall Hunter Withered Knight build guide covering heavy melee pressure, trades, boss damage, PvP commitment, stamina, and affix planning.',
    eyebrow: 'Build guide',
    h1: 'Withered Knight build guide',
    lead: 'Withered Knight builds should turn commitment into pressure without trapping you in fights you can no longer leave.',
    sections: [
      { heading: 'Build goal', body: ['Heavy melee pressure is powerful when it forces enemies to panic, but dangerous when it overcommits. The build should balance damage with stamina and escape discipline.'] },
      { heading: 'Affix direction', body: ['Prioritize sustained melee pressure, survival, stamina comfort, and recovery after trades. Boss-focused versions should value consistent damage over risky burst.'], bullets: ['Melee damage', 'Trade survival', 'Stamina comfort', 'Recovery tools', 'Boss uptime'] },
      { heading: 'Google target', body: ['The page targets Withered Knight build, heavy melee build, boss build, tank damage build, and PvP melee build searches.'] },
    ],
    cards: buildCards,
    faqs: [
      { q: 'Is Withered Knight beginner friendly?', a: 'It may be less forgiving than Mercenary because heavy commitment punishes bad engages.' },
      { q: 'What does Withered Knight need?', a: 'Stamina, survival, and enough damage to make heavy pressure worth the risk.' },
    ],
  },
  {
    slug: 'mist-lords',
    group: 'database',
    title: 'Mistfall Hunter Mist Lords Guide: Boss Prep, Rewards & Routes',
    description: 'Mistfall Hunter Mist Lords guide covering boss preparation, reward routing, PvP pressure, extraction planning, and squad roles.',
    eyebrow: 'Boss guide',
    h1: 'Mist Lords guide',
    lead: 'Mist Lords are high-value PvE anchors, but in an extraction game they also function as loud invitations for other hunters.',
    sections: [
      { heading: 'Before the pull', body: ['Check exits, clear only required enemies, listen for players, and set a leave condition. The pull is not the beginning of the plan; it is the moment the plan becomes expensive.'] },
      { heading: 'Reward logic', body: ['Mist Lords should be worth better loot, but the reward only counts if your team extracts. Boss value must be judged against time, healing, noise, and third-party risk.'], bullets: ['Exit distance', 'Healing left', 'PvP noise', 'Loot time', 'Route home'] },
      { heading: 'Google target', body: ['The page targets Mist Lords, Mist Lord guide, boss rewards, boss route, and boss prep searches.'] },
    ],
    cards: bossCards,
    faqs: [
      { q: 'Are Mist Lords worth fighting?', a: 'They can be, but only when you have extraction control and enough supplies to survive a third party.' },
      { q: 'Should squads assign roles?', a: 'Yes. Frontline, damage, and support roles make boss fights safer.' },
    ],
  },
  {
    slug: 'corrupted-enemies',
    group: 'database',
    title: 'Mistfall Hunter Corrupted Enemies Guide',
    description: 'Mistfall Hunter Corrupted enemies guide covering PvE threats, resource drain, sound risk, route planning, and how to avoid bad fights.',
    eyebrow: 'PvE guide',
    h1: 'Corrupted enemies guide',
    lead: 'Corrupted enemies are not just filler. They drain healing, reveal your position, and make later PvP worse.',
    sections: [
      { heading: 'Why small enemies matter', body: ['Every unnecessary PvE fight costs time, sound, stamina, and health. In an extraction game, that cost becomes visible when another player arrives while you are half-ready.'] },
      { heading: 'Clear rules', body: ['Clear enemies that block your route, threaten extraction, or make a boss pull unsafe. Skip enemies that only feed noise and delay.'], bullets: ['Clear chokepoints', 'Skip unnecessary packs', 'Save cooldowns', 'Listen after fights', 'Heal before looting'] },
      { heading: 'Google target', body: ['The page targets Corrupted enemies, PvE enemies, monster guide, enemy types, and route safety searches.'] },
    ],
    cards: bossCards,
    faqs: [
      { q: 'Should I clear every enemy?', a: 'No. Clear what blocks your route or objective and skip the rest when possible.' },
      { q: 'Why are Corrupted enemies dangerous?', a: 'They drain resources and create sound that can pull enemy players toward you.' },
    ],
  },
  {
    slug: 'boss-rewards',
    group: 'database',
    title: 'Mistfall Hunter Boss Rewards, Loot Value & Extraction Risk',
    description: 'Mistfall Hunter boss rewards guide covering loot value, risk, extraction timing, third-party danger, and when to leave after a boss kill.',
    eyebrow: 'Boss rewards',
    h1: 'Boss rewards and extraction risk',
    lead: 'The highest-value boss reward is the one you actually bank. Boss loot creates a second fight: the escape.',
    sections: [
      { heading: 'Reward value', body: ['Boss rewards should be judged by both drop quality and extraction difficulty. A drop surrounded by enemy players is not profit yet.'] },
      { heading: 'After the kill', body: ['Do not tunnel on the chest. Listen first, heal, assign one player to watch, then loot quickly and leave if the route is open.'], bullets: ['Listen before looting', 'Heal first', 'Watch approaches', 'Split loot quickly', 'Leave before greed grows'] },
      { heading: 'Google target', body: ['The page targets boss rewards, boss loot, Mist Lord drops, high-value loot, and extraction risk searches.'] },
    ],
    cards: bossCards,
    faqs: [
      { q: 'Do bosses drop the best loot?', a: 'They are expected to be high-value targets, but exact drop tables need launch verification.' },
      { q: 'When should I leave after a boss?', a: 'Leave when you have meaningful loot, low supplies, or signs of nearby players.' },
    ],
  },
];

const growthEnhancements: Record<string, Partial<SeoPage>> = {
  'hallowgrove-chaos': {
    template: 'map',
    intent: {
      primary: 'Hallowgrove Chaos route planning',
      secondary: ['Hallowgrove Chaos map', 'chaos extraction route', 'high-risk loot route'],
      freshness: 'Update marker positions, boss lanes, and extraction notes after launch data is verified.',
    },
    checklist: ['Confirm normal Hallowgrove exits first', 'Mark likely PvP approach lanes', 'Track boss-adjacent loot risk', 'Record safe reset points', 'Separate preview notes from live markers'],
    steps: [
      { title: 'Scout exits', body: 'Start each route by identifying the closest way out before chasing loot or bosses.' },
      { title: 'Check traffic', body: 'Chaos variants should be treated as high-sound, high-contact spaces until player flow is known.' },
      { title: 'Bank a win', body: 'Leave after one meaningful objective while learning instead of chaining every point of interest.' },
    ],
    tables: [{ title: 'Hallowgrove Chaos route framework', headers: ['Route layer', 'What to track', 'Why it matters'], rows: [['Extraction', 'Exit options and Soul of Return timing', 'Defines whether the run can be safely banked'], ['Boss lane', 'Mist Lord path and nearby cover', 'Bosses attract PvP and stretch supplies'], ['Loot pocket', 'High-value rooms and escape distance', 'Good loot is only useful if it can leave']] }],
    relatedSearches: ['Mistfall Hunter Hallowgrove Chaos map', 'Hallowgrove Chaos extraction route', 'Hallowgrove Chaos boss route'],
  },
  'brandrgarde-chaos': {
    template: 'map',
    intent: {
      primary: 'Brandrgarde Chaos map routes',
      secondary: ['Brandrgarde map', 'Brandrgarde Chaos guide', 'chaos boss route'],
      freshness: 'Verify final spelling, route names, and chaos variant rules when live map data is available.',
    },
    checklist: ['Confirm final in-game map spelling', 'Separate normal and chaos routes', 'Track contested chokepoints', 'Add extraction distance notes', 'Update loot risk after launch'],
    steps: [
      { title: 'Learn normal flow', body: 'Use the normal Brandrgarde path as the baseline before creating chaos route advice.' },
      { title: 'Map pressure points', body: 'Mark places where boss sound, loot density, and player lanes overlap.' },
      { title: 'Define exit triggers', body: 'Set clear leave conditions for low supplies, nearby PvP, or a major drop.' },
    ],
    tables: [{ title: 'Brandrgarde Chaos planning table', headers: ['Area type', 'Risk', 'Content angle'], rows: [['Chokepoint', 'High', 'Movement, scouting, and ambush avoidance'], ['Boss approach', 'Very high', 'Preparation, third-party risk, escape path'], ['Outer route', 'Medium', 'Safe farming and early extraction']] }],
    relatedSearches: ['Mistfall Hunter Brandrgarde map', 'Brandrgarde Chaos guide', 'Brandrgarde extraction route'],
  },
  'extraction-map': {
    template: 'tool',
    intent: {
      primary: 'Extraction routes and exits',
      secondary: ['Mistfall Hunter exits', 'Soul of Return route', 'safe extraction path'],
      freshness: 'Refresh after every map update because extraction locations and conditions are core evergreen data.',
    },
    checklist: ['Find the exit before looting', 'Secure Soul of Return early', 'Keep stamina for final disengage', 'Avoid loud fights near exits', 'Leave after valuable upgrades'],
    steps: [
      { title: 'Locate the exit', body: 'Start by understanding the way out, then choose loot or boss objectives around that route.' },
      { title: 'Secure the condition', body: 'Treat Soul of Return or any live extraction key as a required run milestone.' },
      { title: 'Exit with discipline', body: 'A modest extracted haul beats a perfect bag lost one fight later.' },
    ],
    tables: [{ title: 'Extraction decision matrix', headers: ['Situation', 'Recommended action', 'Reason'], rows: [['Good drop, no Soul of Return', 'Prioritize extraction condition', 'Loot has no value until banked'], ['Low healing, nearby PvP', 'Leave or reset', 'The final fight is usually the most expensive'], ['Boss alive, exit known', 'Pull only with supplies', 'Boss sound attracts other hunters']] }],
    relatedSearches: ['Mistfall Hunter extraction map', 'Mistfall Hunter exit locations', 'Soul of Return route'],
  },
  'boss-locations': {
    template: 'boss',
    intent: {
      primary: 'Boss locations and route risk',
      secondary: ['Mist Lord locations', 'boss map', 'PvE boss route'],
      freshness: 'Add live spawn rules, fixed locations, rotating locations, and map screenshots after launch.',
    },
    checklist: ['Check nearby extraction first', 'Scout approach lanes', 'Save healing for after the kill', 'Assign a watcher before looting', 'Update each confirmed boss marker'],
    steps: [
      { title: 'Confirm spawn logic', body: 'Track whether each boss is fixed, rotating, event-based, or variant-specific.' },
      { title: 'Route the escape', body: 'A boss location note should always include the safest route away from the arena.' },
      { title: 'Layer PvP risk', body: 'Boss pins need nearby player-traffic notes because boss sound changes the whole zone.' },
    ],
    tables: [{ title: 'Boss location data model', headers: ['Field', 'Use', 'Launch update'], rows: [['Boss name', 'Identifies the target', 'Fill from confirmed live names'], ['Map zone', 'Connects boss to route pages', 'Verify with screenshots'], ['Risk rating', 'Helps players decide whether to pull', 'Update with PvP traffic']] }],
    relatedSearches: ['Mistfall Hunter boss locations', 'Mist Lord map', 'Mistfall Hunter boss map'],
  },
  'loot-locations': {
    template: 'map',
    intent: {
      primary: 'Loot locations and safe farming routes',
      secondary: ['high value loot', 'loot route', 'safe farming'],
      freshness: 'Update loot tables, value tiers, and repeatable routes once live drops are confirmed.',
    },
    checklist: ['Separate safe loot from contested loot', 'Track extraction distance', 'Mark class-relevant upgrades', 'Avoid claiming exact drops before launch', 'Add value tiers after testing'],
    steps: [
      { title: 'Start safe', body: 'Build early loot routes around low-risk upgrades and reliable extraction timing.' },
      { title: 'Add contested pockets', body: 'High-value zones should include warning notes about bosses, sound, and PvP flow.' },
      { title: 'Assign value tiers', body: 'After launch, classify loot by upgrade value, trade value, and build relevance.' },
    ],
    tables: [{ title: 'Loot route quality signals', headers: ['Signal', 'Good route', 'Bad route'], rows: [['Extraction distance', 'Short and known', 'Long or blocked'], ['PvP pressure', 'Predictable lanes', 'Multiple unknown entries'], ['Loot value', 'Relevant upgrades', 'Random low-value clutter']] }],
    relatedSearches: ['Mistfall Hunter loot locations', 'Mistfall Hunter high value loot', 'Mistfall Hunter farming route'],
  },
  'best-builds': {
    template: 'build',
    intent: {
      primary: 'Best builds by role',
      secondary: ['class builds', 'build tier list', 'affix priorities'],
      freshness: 'Re-rank builds after launch patches, affix value confirmation, and class balance changes.',
    },
    checklist: ['Separate solo, squad, PvP, and boss builds', 'Avoid final tier claims before live data', 'Link every class build page', 'Track affix values after launch', 'Add update notes after patches'],
    steps: [
      { title: 'Pick a role', body: 'Builds should start with the job: survive solo, pressure PvP, clear PvE, or support a squad.' },
      { title: 'Choose affixes', body: 'Affixes should reinforce the role instead of chasing generic damage on every class.' },
      { title: 'Test extraction value', body: 'A build is only good if it helps players leave with loot, not just win a duel.' },
    ],
    tables: [{ title: 'Build role overview', headers: ['Role', 'Best fit', 'Core value'], rows: [['Beginner tank', 'Mercenary', 'Forgiveness and stamina learning'], ['Solo stealth', 'Shadowstrix', 'Fight selection and reset control'], ['Support', 'Seer', 'Team survival and boss safety'], ['Ranged pressure', 'Blackarrow or Sorcerer', 'Damage before contact']] }],
    relatedSearches: ['Mistfall Hunter best builds', 'Mistfall Hunter class builds', 'Mistfall Hunter build tier list'],
  },
  'mercenary-build': {
    template: 'build',
    intent: { primary: 'Mercenary tank build', secondary: ['Mercenary beginner build', 'block build', 'sword shield build'], freshness: 'Update after live shield values, parry timing, and defensive affixes are confirmed.' },
    checklist: ['Prioritize survival first', 'Track stamina comfort', 'Test block and parry windows', 'Add hammer variant later', 'Compare solo and squad use'],
    steps: [{ title: 'Build defense', body: 'Start with mitigation and stamina so mistakes do not end the run.' }, { title: 'Add punish damage', body: 'Once survival is stable, add damage that triggers after blocks, stuns, or safe openings.' }, { title: 'Practice disengage', body: 'A tank build still needs a way to leave bad fights.' }],
    tables: [{ title: 'Mercenary build priorities', headers: ['Priority', 'Stat direction', 'Why'], rows: [['1', 'Mitigation', 'Lowers beginner mistake cost'], ['2', 'Stamina recovery', 'Keeps block and dodge available'], ['3', 'Punish damage', 'Turns defense into progress']] }],
    relatedSearches: ['Mistfall Hunter Mercenary build', 'Mercenary tank build', 'Mercenary beginner guide'],
  },
  'sorcerer-build': {
    template: 'build',
    intent: { primary: 'Sorcerer spell burst build', secondary: ['mage build', 'spell damage build', 'PvE clear build'], freshness: 'Update after spell coefficients, cooldowns, and mobility tools are verified.' },
    checklist: ['Preserve range advantage', 'Track cooldown flow', 'Do not overbuild pure damage', 'Add PvE and PvP variants', 'Include escape notes'],
    steps: [{ title: 'Secure distance', body: 'The build fails if enemies can force melee range for free.' }, { title: 'Stack burst windows', body: 'Damage should arrive in controlled windows rather than random casts.' }, { title: 'Plan the reset', body: 'Keep one resource or cooldown for the moment a burst fails.' }],
    tables: [{ title: 'Sorcerer build variants', headers: ['Variant', 'Strength', 'Risk'], rows: [['PvE clear', 'Fast monster cleanup', 'Can attract players with sound'], ['PvP burst', 'Deletes mistakes quickly', 'Fragile if pressured'], ['Safe caster', 'More reset options', 'Lower peak damage']] }],
    relatedSearches: ['Mistfall Hunter Sorcerer build', 'Sorcerer spell build', 'Mistfall Hunter mage build'],
  },
  'blackarrow-build': {
    template: 'build',
    intent: { primary: 'Blackarrow bow and ranged build', secondary: ['bow build', 'ranged PvP build', 'solo ranged build'], freshness: 'Update after aim assist, ranged affixes, and stamina tuning are confirmed.' },
    checklist: ['Tune sensitivity', 'Preserve kite space', 'Track stamina economy', 'Add controller notes', 'Separate solo and squad pressure'],
    steps: [{ title: 'Open with information', body: 'Blackarrow should see the fight before the fight sees them.' }, { title: 'Spend enemy resources', body: 'Use range to force dodges, blocks, and bad approaches.' }, { title: 'Leave melee range', body: 'The build needs an answer for gap closers.' }],
    tables: [{ title: 'Blackarrow route fit', headers: ['Use case', 'Build emphasis', 'Notes'], rows: [['Solo scouting', 'Mobility and vision', 'Avoid melee traps'], ['Squad pressure', 'Sustained ranged damage', 'Needs frontline cover'], ['Extraction defense', 'Angles and slows', 'Watch flanks']] }],
    relatedSearches: ['Mistfall Hunter Blackarrow build', 'Mistfall Hunter bow build', 'Blackarrow solo build'],
  },
  'shadowstrix-build': {
    template: 'build',
    intent: { primary: 'Shadowstrix stealth burst build', secondary: ['assassin build', 'solo PvP build', 'stealth build'], freshness: 'Update after stealth duration, burst affixes, and reset cooldowns are confirmed.' },
    checklist: ['Target isolated enemies', 'Preserve escape cooldown', 'Avoid tanky fair fights', 'Track stealth uptime', 'Add solo route links'],
    steps: [{ title: 'Choose the fight', body: 'Stealth is strongest when it lets you skip bad targets.' }, { title: 'Burst cleanly', body: 'Commit when the opener creates real kill pressure.' }, { title: 'Reset fast', body: 'Leave if cooldowns are gone and the target survives.' }],
    tables: [{ title: 'Shadowstrix decision table', headers: ['Target state', 'Action', 'Reason'], rows: [['Isolated and hurt', 'Engage', 'Best burst value'], ['Grouped and alert', 'Avoid', 'Low reset safety'], ['Tank at full health', 'Scout or skip', 'Bad fair fight']] }],
    relatedSearches: ['Mistfall Hunter Shadowstrix build', 'Shadowstrix stealth build', 'Shadowstrix solo PvP'],
  },
  'seer-build': {
    template: 'build',
    intent: { primary: 'Seer healer and support build', secondary: ['support build', 'healer build', 'squad build'], freshness: 'Update after healing values, shield scaling, and support cooldowns are confirmed.' },
    checklist: ['Keep Seer alive first', 'Track healing and shield value', 'Add boss-support variant', 'Write squad positioning notes', 'Avoid overselling solo damage'],
    steps: [{ title: 'Stay alive', body: 'Support value ends when the support dies first.' }, { title: 'Stabilize fights', body: 'Use healing and shields to reset bad trades.' }, { title: 'Create exits', body: 'Control tools should help the squad leave, not only engage.' }],
    tables: [{ title: 'Seer support priorities', headers: ['Priority', 'Why it matters', 'Best context'], rows: [['Survivability', 'Keeps support online', 'All modes'], ['Cooldown recovery', 'More emergency tools', 'Squads'], ['Healing or shields', 'Extends boss and PvP fights', 'Team play']] }],
    relatedSearches: ['Mistfall Hunter Seer build', 'Seer healer build', 'Mistfall Hunter support build'],
  },
  'withered-knight-build': {
    template: 'build',
    intent: { primary: 'Withered Knight heavy melee build', secondary: ['heavy melee build', 'boss build', 'PvP melee build'], freshness: 'Update after heavy weapon frames, boss uptime, and stamina values are confirmed.' },
    checklist: ['Balance pressure with escape options', 'Track stamina cost', 'Separate boss and PvP variants', 'Avoid overcommitting in solo routes', 'Add confirmed weapon data later'],
    steps: [{ title: 'Create pressure', body: 'Heavy melee should force defensive reactions and bad movement.' }, { title: 'Survive the trade', body: 'Commitment needs enough mitigation and recovery to be worth it.' }, { title: 'Know when to stop', body: 'A heavy build loses value if it cannot leave after winning space.' }],
    tables: [{ title: 'Withered Knight build risks', headers: ['Risk', 'Fix', 'Why'], rows: [['Overcommitment', 'Stamina and escape tools', 'Prevents trapped fights'], ['Slow boss uptime', 'Consistent damage', 'Rewards long windows'], ['Ranged pressure', 'Cover and timing', 'Avoids free poke damage']] }],
    relatedSearches: ['Mistfall Hunter Withered Knight build', 'Withered Knight heavy melee', 'Withered Knight boss build'],
  },
  'mist-lords': {
    template: 'boss',
    intent: { primary: 'Mist Lord boss preparation', secondary: ['Mist Lord guide', 'boss rewards', 'boss route'], freshness: 'Update after boss names, mechanics, rewards, and spawn locations are confirmed.' },
    checklist: ['Check extraction before pull', 'Clear only needed enemies', 'Save supplies for after the kill', 'Assign roles in squads', 'Record rewards after launch'],
    steps: [{ title: 'Prepare the route', body: 'Boss prep starts with the path out, not the first attack.' }, { title: 'Control the arena', body: 'Clear only what blocks movement or creates unsafe pressure.' }, { title: 'Secure the reward', body: 'Heal, listen, loot quickly, and leave before another team arrives.' }],
    tables: [{ title: 'Mist Lord prep sheet', headers: ['Prep item', 'Solo', 'Squad'], rows: [['Exit route', 'Mandatory', 'Shared callout'], ['Healing', 'Conservative', 'Assigned support timing'], ['PvP watch', 'Avoid if noisy', 'One player watches approaches']] }],
    relatedSearches: ['Mistfall Hunter Mist Lords', 'Mist Lord boss guide', 'Mistfall Hunter boss rewards'],
  },
  'corrupted-enemies': {
    template: 'boss',
    intent: { primary: 'Corrupted enemy threat guide', secondary: ['PvE enemy guide', 'monster types', 'route safety'], freshness: 'Update after enemy names, attack patterns, and spawn density are verified.' },
    checklist: ['Skip unnecessary packs', 'Clear chokepoints', 'Save cooldowns for players', 'Listen after fights', 'Track enemy types after launch'],
    steps: [{ title: 'Decide to clear or skip', body: 'Only fight enemies that block the route, threaten extraction, or make a boss pull unsafe.' }, { title: 'Control sound', body: 'Long PvE fights can call other players into the area.' }, { title: 'Recover before looting', body: 'Heal and listen before opening a chest after a loud fight.' }],
    tables: [{ title: 'Enemy clear rules', headers: ['Enemy position', 'Action', 'Reason'], rows: [['Blocking route', 'Clear', 'Prevents bad retreat'], ['Far from objective', 'Skip', 'Saves time and sound'], ['Near extraction', 'Clear carefully', 'Protects final exit']] }],
    relatedSearches: ['Mistfall Hunter Corrupted enemies', 'Mistfall Hunter PvE enemies', 'Mistfall Hunter monster guide'],
  },
  'boss-rewards': {
    template: 'boss',
    intent: { primary: 'Boss rewards and extraction value', secondary: ['boss loot', 'Mist Lord drops', 'high value loot'], freshness: 'Update after confirmed drop tables, reward tiers, and loot-value changes.' },
    checklist: ['Listen before looting', 'Heal before opening rewards', 'Assign a watcher', 'Compare reward to extraction risk', 'Update confirmed drops later'],
    steps: [{ title: 'Win the fight', body: 'Do not spend every resource if the escape is still ahead.' }, { title: 'Secure the room', body: 'The area after a boss kill is one of the easiest places to be ambushed.' }, { title: 'Extract the value', body: 'Boss loot only becomes profit when it reaches storage.' }],
    tables: [{ title: 'Boss reward risk model', headers: ['Reward state', 'Risk', 'Recommended action'], rows: [['Major drop found', 'High', 'Leave unless supplies are strong'], ['Low supplies', 'Very high', 'Extract immediately'], ['Nearby PvP heard', 'Critical', 'Reset or abandon loot greed']] }],
    relatedSearches: ['Mistfall Hunter boss rewards', 'Mist Lord drops', 'Mistfall Hunter boss loot'],
  },
};

for (const page of enGrowthPages) {
  Object.assign(page, growthEnhancements[page.slug]);
}

const zhCopy: Record<string, { title: string; description: string; eyebrow: string; h1: string; lead: string }> = {
  'hallowgrove-chaos': { title: 'Mistfall Hunter Hallowgrove Chaos 地图攻略', description: 'Hallowgrove Chaos 地图攻略，覆盖高风险路线、撤离规划、Boss 压力、战利品优先级与上线后标记追踪。', eyebrow: '地图攻略', h1: 'Hallowgrove Chaos 地图攻略', lead: '这个页面面向搜索 Hallowgrove Chaos 路线、撤离点、Boss 区域和高风险战利品的玩家。' },
  'brandrgarde-chaos': { title: 'Mistfall Hunter Brandrgarde Chaos 地图攻略', description: 'Brandrgarde Chaos 地图攻略，覆盖路线风险、撤离时机、PvP 压力、Boss 路线和战利品追踪。', eyebrow: '地图攻略', h1: 'Brandrgarde Chaos 地图攻略', lead: 'Brandrgarde Chaos 是适合提前建立的地图变体 URL，方便上线后补充准确点位。' },
  'extraction-map': { title: 'Mistfall Hunter 撤离地图：出口、Soul of Return 与安全路线', description: 'Mistfall Hunter 撤离地图攻略，覆盖出口、Soul of Return 路线、安全路径、劝架风险与撤离时机。', eyebrow: '地图工具', h1: 'Mistfall Hunter 撤离地图', lead: '撤离相关搜索是撤离游戏里最有价值的搜索意图之一，这个页面专注解决如何活着离开。' },
  'boss-locations': { title: 'Mistfall Hunter Boss 位置地图', description: 'Mistfall Hunter Boss 位置地图，覆盖 Mist Lord、高价值 PvE 目标、路线规划与 Boss 区域 PvP 风险。', eyebrow: 'Boss 地图', h1: 'Mistfall Hunter Boss 位置', lead: 'Boss 位置页同时承接地图搜索和战利品搜索，是 wiki 站非常重要的长尾 URL。' },
  'loot-locations': { title: 'Mistfall Hunter 战利品位置与高价值路线', description: 'Mistfall Hunter 战利品位置攻略，覆盖高价值路线、撤离价值、安全刷取、地图标记和优先带走内容。', eyebrow: '战利品地图', h1: 'Mistfall Hunter 战利品位置', lead: '战利品位置页回答玩家最实际的问题：哪里有价值，而且我能不能安全带出去。' },
  'best-builds': { title: 'Mistfall Hunter 最佳配装：职业构筑、词缀与定位', description: 'Mistfall Hunter 最佳配装中心，覆盖 Mercenary、Sorcerer、Blackarrow、Shadowstrix、Seer、Withered Knight、词缀与定位。', eyebrow: '配装中心', h1: 'Mistfall Hunter 最佳配装', lead: '发售前的最佳配装应按角色定位与词缀方向组织，而不是假装数值已经完全确定。' },
  'mercenary-build': { title: 'Mistfall Hunter Mercenary 配装：坦克、格挡与新手构筑', description: 'Mercenary 配装攻略，覆盖坦克玩法、剑盾、格挡、招架、重锤压制、词缀和新手装备。', eyebrow: '配装攻略', h1: 'Mercenary 配装攻略', lead: 'Mercenary 配装适合降低失误成本，同时练习格挡、耐力和反击窗口。' },
  'sorcerer-build': { title: 'Mistfall Hunter Sorcerer 配装：法术爆发、距离与 PvE 清怪', description: 'Sorcerer 配装攻略，覆盖法术爆发、远程站位、PvE 清怪、冷却、脆弱防御和词缀优先级。', eyebrow: '配装攻略', h1: 'Sorcerer 配装攻略', lead: 'Sorcerer 配装的核心是创造致命距离，打出爆发，并避免被近战贴脸。' },
  'blackarrow-build': { title: 'Mistfall Hunter Blackarrow 配装：弓箭、远程与单人压制', description: 'Blackarrow 配装攻略，覆盖弓箭压制、远程 PvP、单人侦查、风筝、耐力和词缀规划。', eyebrow: '配装攻略', h1: 'Blackarrow 配装攻略', lead: 'Blackarrow 配装依赖提前发现战斗、控制距离，并迫使敌人在接近前消耗资源。' },
  'shadowstrix-build': { title: 'Mistfall Hunter Shadowstrix 配装：潜行、爆发与单人 PvP', description: 'Shadowstrix 配装攻略，覆盖潜行起手、爆发、单人 PvP、重置工具、词缀和撤离时机。', eyebrow: '配装攻略', h1: 'Shadowstrix 配装攻略', lead: 'Shadowstrix 配装应该帮助你选择战斗、击杀落单目标，并在战斗变成消耗战前重置。' },
  'seer-build': { title: 'Mistfall Hunter Seer 配装：治疗、护盾与支援', description: 'Seer 配装攻略，覆盖治疗、护盾、支援能力、小队玩法、Boss 安全、控制和词缀优先级。', eyebrow: '配装攻略', h1: 'Seer 配装攻略', lead: 'Seer 配装的价值在于让小队更难被击杀、更容易撤出坏战斗，并让 Boss 战更稳定。' },
  'withered-knight-build': { title: 'Mistfall Hunter Withered Knight 配装：重型近战与压制', description: 'Withered Knight 配装攻略，覆盖重型近战压制、换血、Boss 输出、PvP 承诺、耐力和词缀规划。', eyebrow: '配装攻略', h1: 'Withered Knight 配装攻略', lead: 'Withered Knight 配装要把重型承诺转化为压力，同时避免陷入无法撤离的坏战斗。' },
  'mist-lords': { title: 'Mistfall Hunter Mist Lord 攻略：Boss 准备、奖励与路线', description: 'Mist Lord 攻略，覆盖 Boss 准备、奖励路线、PvP 压力、撤离规划和小队分工。', eyebrow: 'Boss 攻略', h1: 'Mist Lord 攻略', lead: 'Mist Lord 是高价值 PvE 目标，但在撤离游戏里，它们也会用声音邀请其他玩家靠近。' },
  'corrupted-enemies': { title: 'Mistfall Hunter 腐化敌人攻略', description: 'Mistfall Hunter 腐化敌人攻略，覆盖 PvE 威胁、资源消耗、声音风险、路线规划和如何避免坏战斗。', eyebrow: 'PvE 攻略', h1: '腐化敌人攻略', lead: '腐化敌人不是填充怪，它们会消耗补给、暴露位置，并让之后的 PvP 更危险。' },
  'boss-rewards': { title: 'Mistfall Hunter Boss 奖励、战利品价值与撤离风险', description: 'Mistfall Hunter Boss 奖励攻略，覆盖战利品价值、风险、撤离时机、劝架危险和击杀 Boss 后何时离开。', eyebrow: 'Boss 奖励', h1: 'Boss 奖励与撤离风险', lead: '最高价值的 Boss 奖励，是你真正带回仓库的那一份。Boss 掉落之后，真正的第二场战斗才开始。' },
};

function zhModules(page: SeoPage, copy: { h1: string; lead: string }): Partial<SeoPage> {
  if (page.template === 'map' || page.template === 'tool') {
    return {
      intent: {
        primary: copy.h1,
        secondary: ['地图路线', '撤离点', 'Boss 区域', '战利品位置'],
        freshness: '正式上线后补充实测点位、路线截图、撤离条件和风险等级。',
      },
      checklist: ['确认正式版地图名称', '区分预览信息和实测点位', '补充撤离路线', '标记 PvP 高风险区域', '连接 Boss 与战利品页面'],
      steps: [
        { title: '先记录出口', body: '地图页优先解决玩家怎么离开，而不是只罗列兴趣点。' },
        { title: '再补风险层', body: '把 Boss、战利品和玩家交通线叠加到同一页面里，帮助玩家做取舍。' },
        { title: '最后补实测', body: '正式版上线后，用截图、点位和路线替换预览占位说明。' },
      ],
      tables: [{ title: '地图页资料结构', headers: ['模块', '内容', '用途'], rows: [['撤离', '出口与 Soul of Return 路线', '帮助玩家安全离开'], ['Boss', '高价值 PvE 区域', '判断是否值得开战'], ['战利品', '资源和高价值点', '规划收益路线']] }],
      relatedSearches: [`${copy.h1} 路线`, `${copy.h1} 撤离点`, `${copy.h1} 战利品位置`],
    };
  }

  if (page.template === 'build') {
    return {
      intent: {
        primary: copy.h1,
        secondary: ['职业配装', '词缀优先级', '单人构筑', 'Boss 构筑'],
        freshness: '正式版上线后根据技能数值、词缀、补丁和平衡改动更新。',
      },
      checklist: ['区分单人、组队、PvP 和 Boss 版本', '避免写死未确认数值', '补充词缀优先级', '连接职业总览', '上线后加入实测构筑'],
      steps: [
        { title: '先定角色定位', body: '配装页要先说明这套构筑解决什么问题，而不是直接堆装备名。' },
        { title: '再选词缀方向', body: '词缀要服务于定位，例如生存、爆发、支援、续航或撤离能力。' },
        { title: '最后验证撤离价值', body: '能把收益带出地图的构筑，才是真正适合攻略站推荐的构筑。' },
      ],
      tables: [{ title: '配装页资料结构', headers: ['模块', '说明', '上线后补充'], rows: [['定位', '说明构筑用途', '单人/组队/PvP/Boss'], ['词缀', '列出优先方向', '实测数值和稀有度'], ['风险', '说明构筑弱点', '对局和地图适配']] }],
      relatedSearches: [`${copy.h1} 词缀`, `${copy.h1} 单人`, `${copy.h1} Boss`],
    };
  }

  return {
    intent: {
      primary: copy.h1,
      secondary: ['Boss 攻略', 'PvE 路线', '奖励', '撤离风险'],
      freshness: '正式版上线后补充 Boss 名称、机制、掉落、刷新点和路线截图。',
    },
    checklist: ['确认 Boss 名称和刷新规则', '补充机制和招式', '记录奖励与掉落', '标记劝架风险', '写清击杀后撤离路线'],
    steps: [
      { title: '开战前规划撤离', body: 'Boss 战不是从输出开始，而是从确认出口和补给开始。' },
      { title: '战斗中控制资源', body: '保留治疗、耐力和关键冷却，避免打完 Boss 后被其他玩家收掉。' },
      { title: '击杀后快速决策', body: '先听声音、再分配战利品，发现玩家靠近时优先撤离。' },
    ],
    tables: [{ title: 'Boss 页资料结构', headers: ['模块', '内容', '目的'], rows: [['机制', '技能和危险窗口', '降低死亡率'], ['奖励', '掉落和收益等级', '判断是否值得打'], ['撤离', '击杀后的路线', '避免被劝架']] }],
    relatedSearches: [`${copy.h1} 奖励`, `${copy.h1} 位置`, `${copy.h1} 攻略`],
  };
}

export const zhGrowthPages: SeoPage[] = enGrowthPages.map((page) => {
  const copy = zhCopy[page.slug];
  return {
    ...page,
    ...copy,
    ...zhModules(page, copy),
    cards: page.cards?.map((card) => ({
      ...card,
      href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}`,
    })),
    sections: [
      { heading: '页面目标', body: [copy.lead] },
      { heading: '内容规划', body: ['本页用于承接中文搜索长尾词，并在正式上线后补充实测地图点位、掉落、路线和配装数值。当前内容会明确区分已确认信息、预览观察和待验证项目。'], bullets: ['上线后补充实测数据', '保留撤离风险提示', '连接相关攻略页面', '避免写死未确认数值'] },
      { heading: 'Google 目标', body: ['该 URL 面向具体游戏名加地图、Boss、配装、战利品或撤离关键词，帮助搜索引擎理解页面主题。'] },
    ],
    faqs: [
      { q: '这个页面现在可以被收录吗？', a: '可以。页面有独立标题、描述、正文、FAQ、canonical 和 sitemap 路径，适合作为后续内容增长入口。' },
      { q: '内容会在发售后更新吗？', a: '会。正式版上线后应补充实测点位、数值、掉落和路线。' },
    ],
  };
});

export const enGrowthLinks: PriorityLink[] = enGrowthPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhGrowthLinks: PriorityLink[] = zhGrowthPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
