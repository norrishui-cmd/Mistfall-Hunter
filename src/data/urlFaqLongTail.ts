import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

type FaqBrief = {
  slug: string;
  group: PriorityLink['group'];
  question: string;
  intent: string;
  answer: string;
  update: string;
};

const supportCards = [
  { title: 'Release date', desc: 'Launch timing, platforms, and access status.', href: '/release-date' },
  { title: 'Server status', desc: 'Maintenance, queues, and connection issues.', href: '/server-status' },
  { title: 'Known issues', desc: 'Crashes, stutter, login problems, and bug triage.', href: '/known-issues-tracker' },
];

const guideCards = [
  { title: 'Beginner guide', desc: 'First extraction, death risk, and core loop.', href: '/beginner-guide' },
  { title: 'Gameplay overview', desc: 'Combat, loot, PvP, PvE, and extraction.', href: '/gameplay-overview' },
  { title: 'How to extract', desc: 'Bell, shrine, Soul of Return, and exit safety.', href: '/how-to-extract' },
];

const classCards = [
  { title: 'Classes', desc: 'All confirmed class roles and beginner fit.', href: '/classes' },
  { title: 'Best class for beginners', desc: 'Safe first picks by learning curve.', href: '/best-class-for-beginners' },
  { title: 'Class skill trees', desc: 'Upgrade planning by role and route.', href: '/class-skill-trees' },
];

const briefs: FaqBrief[] = [
  { slug: 'faq-is-mistfall-hunter-out-yet', group: 'news', question: 'Is Mistfall Hunter out yet?', intent: 'release status search', answer: 'Mistfall Hunter is in the launch-window phase, so this FAQ should point players to the release-date page and live platform store checks.', update: 'Update immediately after launch with live availability by platform.' },
  { slug: 'faq-when-can-i-play', group: 'news', question: 'When can I play Mistfall Hunter?', intent: 'launch time search', answer: 'Players should check the official launch time, Steam unlock, Xbox/Game Pass availability, and regional store status before assuming access.', update: 'Add exact time-zone table when final launch timing is confirmed.' },
  { slug: 'faq-is-there-preload', group: 'news', question: 'Is there a Mistfall Hunter preload?', intent: 'preload search', answer: 'Preload should be treated as platform-specific and pending until Steam, Xbox, Game Pass, or PS5 store pages show an install option.', update: 'Add preload windows and file sizes once stores publish them.' },
  { slug: 'faq-how-big-is-download', group: 'news', question: 'How big is the Mistfall Hunter download?', intent: 'file size search', answer: 'Do not guess the file size. Use this FAQ to track PC, Xbox, Game Pass, and PS5 storage requirements when store listings update.', update: 'Add exact download and patch sizes after launch.' },
  { slug: 'faq-is-it-on-steam', group: 'news', question: 'Is Mistfall Hunter on Steam?', intent: 'Steam store search', answer: 'Yes, players are searching Steam access heavily. The page should route them to Steam launch, demo, wishlist, reviews, and install prep.', update: 'Add final Steam release status and review notes after launch.' },
  { slug: 'faq-is-it-on-game-pass', group: 'news', question: 'Is Mistfall Hunter on Game Pass?', intent: 'Game Pass search', answer: 'Game Pass access should be checked through the Xbox listing and Xbox app. Separate PC Game Pass, console Game Pass, and cloud availability.', update: 'Add exact subscription labels and install steps after launch.' },
  { slug: 'faq-is-it-on-ps5', group: 'news', question: 'Is Mistfall Hunter on PS5?', intent: 'PS5 platform search', answer: 'Mistfall Hunter has PS5 platform interest, but players should verify the PlayStation store page for launch timing, file size, and modes.', update: 'Add PS5 store and performance-mode details when confirmed.' },
  { slug: 'faq-is-it-on-xbox', group: 'news', question: 'Is Mistfall Hunter on Xbox?', intent: 'Xbox platform search', answer: 'Xbox users should check the Microsoft store, Game Pass availability, controller setup, and server status during launch week.', update: 'Add final Xbox store details and launch patch notes.' },
  { slug: 'faq-is-it-free-to-play', group: 'news', question: 'Is Mistfall Hunter free to play?', intent: 'price model search', answer: 'Do not assume free-to-play unless official store wording confirms it. Explain price, Game Pass, and store access separately.', update: 'Refresh with final price and monetization wording.' },
  { slug: 'faq-how-much-does-it-cost', group: 'news', question: 'How much does Mistfall Hunter cost?', intent: 'price search', answer: 'Price can vary by platform and region, so this FAQ should track Steam, Xbox, PS5, and subscription access without guessing.', update: 'Add regional store prices after launch.' },

  { slug: 'faq-does-mistfall-hunter-have-crossplay', group: 'news', question: 'Does Mistfall Hunter have crossplay?', intent: 'crossplay support search', answer: 'Crossplay should be treated as unconfirmed unless official PC, Xbox, and PS5 party support is explicitly listed.', update: 'Add confirmed crossplay and cross-progression rules when announced.' },
  { slug: 'faq-does-it-have-cross-progression', group: 'news', question: 'Does Mistfall Hunter have cross-progression?', intent: 'cross-progression search', answer: 'Cross-progression depends on account systems and platform rules. Do not assume progress moves between Steam, Xbox, and PS5.', update: 'Add official account-linking details if announced.' },
  { slug: 'faq-can-steam-play-with-xbox', group: 'news', question: 'Can Steam players play with Xbox players?', intent: 'Steam Xbox party search', answer: 'This needs official cross-platform matchmaking confirmation. Until then, explain the difference between Steam, Xbox app, and console access.', update: 'Update once live party rules are known.' },
  { slug: 'faq-can-ps5-play-with-pc', group: 'news', question: 'Can PS5 play with PC?', intent: 'PS5 PC crossplay search', answer: 'Do not promise PS5-PC crossplay until official platform support is confirmed. Route players to the crossplay status page.', update: 'Add PlayStation support wording after launch.' },
  { slug: 'faq-is-there-solo-mode', group: 'guides', question: 'Can you play Mistfall Hunter solo?', intent: 'solo mode search', answer: 'Solo play should be possible as a playstyle, but solo players need shorter routes, quiet looting, safe classes, and earlier extraction.', update: 'Add live solo queue and route evidence after launch.' },
  { slug: 'faq-is-there-coop', group: 'guides', question: 'Does Mistfall Hunter have co-op?', intent: 'co-op gameplay search', answer: 'Co-op guidance should focus on class roles, squad routing, support timing, and loot discipline rather than just party size.', update: 'Verify party size, revive rules, and matchmaking after launch.' },
  { slug: 'faq-is-it-pvp-or-pve', group: 'guides', question: 'Is Mistfall Hunter PvP or PvE?', intent: 'genre explanation search', answer: 'Mistfall Hunter is best understood as PvPvE extraction: monsters, bosses, rival players, loot risk, and extraction timing all matter.', update: 'Add live examples from boss routes and PvP encounters.' },
  { slug: 'faq-can-you-avoid-pvp', group: 'guides', question: 'Can you avoid PvP in Mistfall Hunter?', intent: 'PvP avoidance search', answer: 'You can reduce PvP exposure with quiet routes and early exits, but extraction games rarely let players remove PvP risk completely.', update: 'Add map-specific low-traffic route examples after launch.' },
  { slug: 'faq-is-there-permadeath', group: 'guides', question: 'Is there permadeath in Mistfall Hunter?', intent: 'death penalty search', answer: 'The important question is loot and gear risk. Explain what is lost, what may be recovered, and why extraction matters.', update: 'Verify death and recovery rules in the launch build.' },
  { slug: 'faq-what-happens-when-you-die', group: 'guides', question: 'What happens when you die in Mistfall Hunter?', intent: 'death outcome search', answer: 'Death should be explained through gear risk, loot loss, spirit recovery, and whether the run value was already banked.', update: 'Add exact death-screen and recovery details after launch.' },

  { slug: 'faq-how-do-you-extract', group: 'guides', question: 'How do you extract in Mistfall Hunter?', intent: 'core extraction search', answer: 'Extraction revolves around securing the required objective, surviving the route, and leaving before greed or ambushes end the run.', update: 'Add exact bell, shrine, and Soul of Return steps after launch.' },
  { slug: 'faq-what-is-soul-of-return', group: 'guides', question: 'What is Soul of Return?', intent: 'Soul of Return explainer search', answer: 'Soul of Return is treated as a key extraction concept. It should be explained as an objective that changes when and how you leave.', update: 'Add exact item behavior and map examples after launch.' },
  { slug: 'faq-what-is-returner-woodling', group: 'guides', question: 'What is the Returner Woodling?', intent: 'Returner Woodling search', answer: 'The Returner Woodling should be described as part of the extraction objective loop, not as a generic monster farm.', update: 'Add spawn behavior and route screenshots after launch.' },
  { slug: 'faq-what-is-bell-creature', group: 'guides', question: 'What is the bell creature?', intent: 'bell creature search', answer: 'The bell creature is relevant because it connects objective tracking to extraction timing and ambush risk.', update: 'Add exact behavior, sounds, and screenshots after launch.' },
  { slug: 'faq-how-do-shrines-work', group: 'guides', question: 'How do shrines work?', intent: 'shrine mechanic search', answer: 'Shrine guidance should explain activation, objective sequence, surrounding danger, and whether other players can contest the escape.', update: 'Verify shrine interaction and timers in the launch build.' },
  { slug: 'faq-what-is-gyldenmist', group: 'guides', question: 'What is the Gyldenmist?', intent: 'lore and mechanic search', answer: 'Gyldenmist should be framed as both world tone and run pressure: a dangerous space where timing, corruption, and extraction matter.', update: 'Add exact map and timer behavior after launch.' },
  { slug: 'faq-what-is-gyldenblood', group: 'database', question: 'What is Gyldenblood?', intent: 'resource explainer search', answer: 'Gyldenblood should be treated as a valuable progression resource until exact uses, sources, and costs are verified.', update: 'Add confirmed uses, costs, and farm routes after launch.' },
  { slug: 'faq-how-to-farm-gyldenblood', group: 'database', question: 'How do you farm Gyldenblood?', intent: 'resource farming search', answer: 'Do not publish fake drop routes. Explain source tracking, safe extraction, and banking early copies until live data exists.', update: 'Add verified farm routes and source tables after launch.' },
  { slug: 'faq-what-are-chaos-variants', group: 'database', question: 'What are chaos variants?', intent: 'map variant search', answer: 'Chaos variants should be explained as altered map or encounter conditions that may change route risk and reward value.', update: 'Add exact modifiers, screenshots, and rewards after launch.' },
  { slug: 'faq-are-chaos-variants-worth-it', group: 'database', question: 'Are chaos variants worth it?', intent: 'risk reward search', answer: 'Chaos variants are worth testing only when the player can survive the altered route and extract the added reward.', update: 'Add live reward comparisons after launch.' },

  { slug: 'faq-best-class-for-new-players', group: 'guides', question: 'What is the best class for new players?', intent: 'beginner class search', answer: 'Before final balance, the best beginner class is the one with clear survival tools, simple routing, and low mistake cost.', update: 'Update after launch with class-specific beginner data.' },
  { slug: 'faq-best-class-for-solo', group: 'guides', question: 'What is the best class for solo?', intent: 'solo class search', answer: 'Solo classes should be judged by scouting, reset tools, survivability, route independence, and ability to leave with loot.', update: 'Add live solo rankings and route examples.' },
  { slug: 'faq-best-class-for-pvp', group: 'guides', question: 'What is the best class for PvP?', intent: 'PvP class search', answer: 'PvP class value depends on fight control, burst windows, stamina, disengage tools, and how well the class survives third parties.', update: 'Update with launch matchups and balance changes.' },
  { slug: 'faq-best-class-for-pve', group: 'guides', question: 'What is the best class for PvE?', intent: 'PvE class search', answer: 'PvE class value is not only damage. Boss safety, sustain, route noise, and post-boss extraction all matter.', update: 'Add boss-specific class rankings after launch.' },
  { slug: 'faq-best-class-for-bosses', group: 'guides', question: 'What is the best class for bosses?', intent: 'boss class search', answer: 'Boss classes should be ranked by safe damage uptime, support value, survival tools, and ability to extract rewards.', update: 'Add live encounter rankings after launch.' },
  { slug: 'faq-can-you-respec', group: 'guides', question: 'Can you respec skill trees?', intent: 'respec search', answer: 'Do not assume respec exists until confirmed. Early skill planning should prioritize safe, role-defining upgrades.', update: 'Add exact respec rules, cost, and limits after launch.' },
  { slug: 'faq-how-skill-trees-work', group: 'guides', question: 'How do skill trees work?', intent: 'skill tree explainer search', answer: 'Skill trees should be explained by role: solo survival, PvP pressure, PvE clear, boss safety, and squad support.', update: 'Add exact node names, costs, and screenshots after launch.' },
  { slug: 'faq-best-affixes', group: 'guides', question: 'What are the best affixes?', intent: 'gear affix search', answer: 'Best affixes depend on class and route goal. Survival, stamina, cooldown comfort, damage windows, and support uptime all matter.', update: 'Add verified affix names and ranges after launch.' },
  { slug: 'faq-what-gear-to-keep', group: 'database', question: 'What gear should I keep?', intent: 'stash decision search', answer: 'Keep gear that fits your class role, improves safe extraction, or supports progression. Sell or risk low-fit duplicates later.', update: 'Add real item and stash examples after launch.' },
  { slug: 'faq-what-loot-to-sell', group: 'database', question: 'What loot should I sell?', intent: 'vendor decision search', answer: 'Do not sell unknown progression resources early. Sell low-fit duplicate gear only after uses and vendor values are verified.', update: 'Add vendor values and recipes after launch.' },

  { slug: 'faq-where-is-hallowgrove', group: 'database', question: 'Where is Hallowgrove?', intent: 'map name search', answer: 'Hallowgrove should route users to beginner-friendly map learning, exits, loot routes, boss risk, and chaos variant notes.', update: 'Add live map screenshots and markers.' },
  { slug: 'faq-where-is-brandrgarde', group: 'database', question: 'Where is Brandrgarde?', intent: 'map name search', answer: 'Brandrgarde should be positioned as a route-planning and risk-management map page until live markers are verified.', update: 'Add exact routes, exits, and boss points after launch.' },
  { slug: 'faq-where-are-exits', group: 'database', question: 'Where are the exits?', intent: 'map exit search', answer: 'Exit locations must be verified in the launch build. Until then, teach exit-first planning and route stop rules.', update: 'Add exact exit pins and extraction conditions.' },
  { slug: 'faq-where-are-bosses', group: 'database', question: 'Where are the bosses?', intent: 'boss location search', answer: 'Boss locations should not be guessed. Explain boss-route preparation and update with verified pins after launch.', update: 'Add exact boss locations, names, and rewards.' },
  { slug: 'faq-where-is-best-loot', group: 'database', question: 'Where is the best loot?', intent: 'loot location search', answer: 'Best loot is only best if it can be extracted. Teach risk/reward routing before exact loot tables are verified.', update: 'Add confirmed loot hotspots after launch.' },
  { slug: 'faq-are-bosses-worth-it', group: 'database', question: 'Are bosses worth it?', intent: 'boss risk reward search', answer: 'Bosses are worth it when the team has supplies, an exit plan, and enough control to survive third-party pressure.', update: 'Add live reward tables and boss difficulty notes.' },
  { slug: 'faq-can-you-farm-pve-only', group: 'database', question: 'Can you farm PvE only?', intent: 'PvE farming search', answer: 'You can focus on PvE routes, but PvP risk and extraction timing still shape whether the farm succeeds.', update: 'Add low-PvP route examples after launch.' },
  { slug: 'faq-what-are-corroded-enemies', group: 'database', question: 'What are Corroded enemies?', intent: 'enemy type search', answer: 'Corroded enemies should be explained as PvE threats that drain time, resources, and create sound risk.', update: 'Add enemy names, moves, and drops after launch.' },
  { slug: 'faq-what-are-mist-lords', group: 'database', question: 'What are Mist Lords?', intent: 'boss type search', answer: 'Mist Lords should be treated as high-value PvE anchors that also attract PvP pressure.', update: 'Add exact Mist Lord encounters and drops.' },
  { slug: 'faq-how-to-open-locked-chests', group: 'database', question: 'How do you open locked chests?', intent: 'locked chest search', answer: 'Locked chest rules should be verified. Until then, explain guarded rewards, route danger, and extraction priority.', update: 'Add unlock requirements and chest rewards after launch.' },

  { slug: 'faq-why-is-server-down', group: 'tools', question: 'Why are Mistfall Hunter servers down?', intent: 'server outage search', answer: 'Server outages may be maintenance, launch load, platform service issues, or local network problems. Check official channels first.', update: 'Add live incidents and maintenance windows after launch.' },
  { slug: 'faq-stuck-in-queue', group: 'tools', question: 'Why am I stuck in queue?', intent: 'queue issue search', answer: 'Queue issues are common at launch. Separate login queues, matchmaking queues, server regions, and party-size problems.', update: 'Add exact queue messages and known fixes.' },
  { slug: 'faq-login-error', group: 'tools', question: 'How do I fix login errors?', intent: 'login error search', answer: 'Check server status, platform authentication, account access, restart steps, and official incident notes before local fixes.', update: 'Add exact login error codes after launch.' },
  { slug: 'faq-connection-error', group: 'tools', question: 'How do I fix connection errors?', intent: 'connection error search', answer: 'Connection errors can be server-side, region-side, platform-side, or local network issues. Triage in that order.', update: 'Add real error messages and fixes.' },
  { slug: 'faq-game-crashes', group: 'tools', question: 'Why does Mistfall Hunter crash?', intent: 'crash troubleshooting search', answer: 'Crash triage should cover drivers, overlays, verify files, settings, launch patches, and whether the issue is widespread.', update: 'Add launch known issues and crash fixes.' },
  { slug: 'faq-stuttering-fix', group: 'tools', question: 'How do I fix stuttering?', intent: 'stutter troubleshooting search', answer: 'Stutter fixes should start with drivers, frame caps, overlays, settings, and shader/load behavior, while checking patch notes.', update: 'Add tested settings after launch.' },
  { slug: 'faq-low-fps-fix', group: 'tools', question: 'How do I fix low FPS?', intent: 'low FPS troubleshooting search', answer: 'Low FPS fixes should prioritize stable frame pacing, visibility, shadows, effects, resolution, and platform-specific limits.', update: 'Add benchmark-based settings after launch.' },
  { slug: 'faq-controller-not-detected', group: 'tools', question: 'Why is my controller not detected?', intent: 'controller troubleshooting search', answer: 'Controller issues may involve Steam Input, Xbox controller support, PS5 controller mapping, focus, or platform settings.', update: 'Add exact controller menu guidance after launch.' },
  { slug: 'faq-can-i-play-on-steam-deck', group: 'tools', question: 'Can I play Mistfall Hunter on Steam Deck?', intent: 'Steam Deck support search', answer: 'Steam Deck support must be verified through store status, Proton behavior, controls, anti-cheat, and performance testing.', update: 'Add verified Steam Deck results after launch.' },
  { slug: 'faq-best-settings-for-launch', group: 'tools', question: 'What are the best settings for launch?', intent: 'launch settings search', answer: 'Best launch settings should prioritize frame stability, visibility, audio cues, camera control, and input comfort.', update: 'Add exact settings screenshots after launch.' },
];

function cardsFor(page: FaqBrief) {
  if (page.group === 'tools' || page.group === 'news') return supportCards;
  if (page.group === 'database') return guideCards;
  if (/class|skill|affix|solo|pvp|pve|boss/i.test(page.slug)) return classCards;
  return guideCards;
}

function createPage(brief: FaqBrief): SeoPage {
  return {
    slug: brief.slug,
    group: brief.group,
    template: 'faq',
    title: `${brief.question} | Mistfall Hunter FAQ`,
    description: `Mistfall Hunter FAQ answering "${brief.question}" for ${brief.intent}, with launch-week context, practical next steps, and update notes.`,
    eyebrow: 'FAQ long-tail',
    h1: brief.question,
    lead: brief.answer,
    intent: {
      primary: `Mistfall Hunter ${brief.question}`,
      secondary: [brief.question, `${brief.question} Mistfall Hunter`, brief.intent],
      freshness: brief.update,
    },
    checklist: [
      `Question: ${brief.question}`,
      `Search intent: ${brief.intent}`,
      `Short answer: ${brief.answer}`,
      'Avoid unverified claims until launch data is available',
      'Link to the relevant hub for deeper reading',
    ],
    steps: [
      { title: 'Read the short answer', body: brief.answer },
      { title: 'Check the related hub', body: 'Use the linked release, gameplay, class, database, or troubleshooting hub for deeper context.' },
      { title: 'Update after launch', body: brief.update },
    ],
    tables: [{
      title: `${brief.question} answer plan`,
      headers: ['User need', 'Current answer', 'Launch update'],
      rows: [
        ['Fast answer', brief.answer, 'Keep the top answer current'],
        ['Accuracy', 'Mark uncertain details instead of guessing', brief.update],
        ['Next click', 'Send users to the most relevant hub', 'Add contextual links from high-traffic pages'],
      ],
    }],
    sections: [
      { heading: 'Short answer', body: [brief.answer] },
      { heading: 'Why players ask this', body: [`This query usually appears when players are close to installing, choosing a class, starting a route, fixing an issue, or deciding whether the game fits them.`] },
      { heading: 'What to verify', body: [brief.update] },
    ],
    cards: cardsFor(brief),
    relatedSearches: [`Mistfall Hunter ${brief.question}`, `${brief.question} guide`, `${brief.question} launch`],
    faqs: [
      { q: brief.question, a: brief.answer },
      { q: 'Is this answer final?', a: 'It is a launch-window answer. Exact values, store labels, settings, routes, and server details should be updated after launch verification.' },
      { q: 'Where should I go next?', a: 'Use the related cards on this page to open the deeper guide, platform tracker, class page, or troubleshooting hub.' },
    ],
  };
}

function localizeDraft(page: SeoPage): SeoPage {
  return {
    ...page,
    title: `${page.title} | Chinese Draft`,
    description: `${page.description} Chinese FAQ draft reserved for localization and launch data.`,
    eyebrow: 'ZH FAQ long-tail',
    h1: `${page.h1} Chinese FAQ`,
    lead: `${page.lead} This Chinese FAQ path is a deployment-safe draft for later localization.`,
    cards: page.cards?.map((card) => ({ ...card, href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}` })),
    intent: page.intent ? { ...page.intent, primary: `${page.intent.primary} Chinese`, freshness: 'Localize with verified Chinese search wording and launch data.' } : undefined,
    sections: [
      { heading: 'Chinese FAQ draft status', body: ['This page reserves the same FAQ long-tail topic for the Chinese path. Localize after launch data or Search Console impressions confirm demand.'] },
      ...(page.sections ?? []),
    ],
    relatedSearches: page.relatedSearches?.map((query) => `${query} Chinese`),
  };
}

export const enFaqLongTailPages: SeoPage[] = briefs.map(createPage);
export const zhFaqLongTailPages: SeoPage[] = enFaqLongTailPages.map(localizeDraft);

export const enFaqLongTailLinks: PriorityLink[] = enFaqLongTailPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhFaqLongTailLinks: PriorityLink[] = zhFaqLongTailPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
