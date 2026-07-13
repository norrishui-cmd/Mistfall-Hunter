import type { PriorityLink } from './priorityLinks';
import type { SeoPage } from './seoPages';

type EvergreenSpec = {
  slug: string;
  h1: string;
  desc: string;
  group: PriorityLink['group'];
  template: SeoPage['template'];
  principle: string;
  checks: string[];
  next: { title: string; desc: string; href: string }[];
};

const specs: EvergreenSpec[] = [
  {
    slug: 'mistfall-hunter-economy-guide',
    h1: 'Mistfall Hunter economy guide',
    desc: 'Mistfall Hunter economy guide for loot value, resources, stash decisions, crafting pressure, and how to avoid wasting early progression.',
    group: 'guides',
    template: 'guide',
    principle: 'The economy in an extraction RPG is shaped by what survives the run. A rare item that never leaves the mist has no long-term value, so economy decisions should start with extraction safety.',
    checks: ['Bank rare resources early', 'Avoid spending before recipes are verified', 'Keep backup kits', 'Track patch economy changes', 'Separate PvP gear from learning gear'],
    next: [
      { title: 'Loot guide', desc: 'Gear, affixes, and extraction value.', href: '/loot' },
      { title: 'Stash management', desc: 'Keep useful gear without clutter.', href: '/mistfall-hunter-stash-management' },
      { title: 'Crafting guide', desc: 'Resource spending and recipe watch.', href: '/mistfall-hunter-crafting-guide' },
    ],
  },
  {
    slug: 'mistfall-hunter-progression-guide',
    h1: 'Mistfall Hunter progression guide',
    desc: 'Mistfall Hunter progression guide for early upgrades, account growth, class learning, resource saving, and post-launch verification.',
    group: 'guides',
    template: 'guide',
    principle: 'Progression should be treated as a sequence of safe, repeatable improvements rather than one perfect run. The first goal is learning how to keep what you find.',
    checks: ['Learn extraction before farming', 'Upgrade the class you actually play', 'Save rare materials', 'Track wipe and season rules', 'Review deaths for route mistakes'],
    next: [
      { title: 'Beginner guide', desc: 'Core loop and first priorities.', href: '/beginner-guide' },
      { title: 'What to keep', desc: 'Loot and resource decisions.', href: '/mistfall-hunter-what-to-keep' },
      { title: 'Wipe explained', desc: 'Progress reset and season questions.', href: '/mistfall-hunter-wipe-explained' },
    ],
  },
  {
    slug: 'mistfall-hunter-death-penalty-explained',
    h1: 'Mistfall Hunter death penalty explained',
    desc: 'Mistfall Hunter death penalty guide explaining loot loss, extraction risk, gear decisions, and how death should change your route planning.',
    group: 'guides',
    template: 'guide',
    principle: 'The death penalty is the emotional center of extraction games. It makes every extra fight, boss pull, and late loot room a real decision.',
    checks: ['Know what is at risk before fighting', 'Extract after meaningful upgrades', 'Use cheaper kits while learning', 'Avoid boss greed when overloaded', 'Treat survival as progression'],
    next: [
      { title: 'Beginner guide', desc: 'Death, loot, and extraction basics.', href: '/beginner-guide' },
      { title: 'Fastest way to extract', desc: 'Leave before the run turns bad.', href: '/mistfall-hunter-fastest-way-to-extract' },
      { title: 'Solo extraction tips', desc: 'Risk control for solo players.', href: '/mistfall-hunter-solo-extraction-tips' },
    ],
  },
  {
    slug: 'mistfall-hunter-gear-score-explained',
    h1: 'Mistfall Hunter gear score explained',
    desc: 'Mistfall Hunter gear score explainer for power evaluation, matchmaking questions, build value, affixes, and launch verification.',
    group: 'guides',
    template: 'guide',
    principle: 'If gear score or similar power signals are present at launch, they should be read as context, not as a complete build answer. Affixes, role fit, and player decisions still matter.',
    checks: ['Verify whether gear score exists in live UI', 'Compare role fit before raw number', 'Keep useful affixes', 'Watch matchmaking implications', 'Update after official stat details'],
    next: [
      { title: 'Affix priority', desc: 'Which gear modifiers matter.', href: '/mistfall-hunter-affix-priority' },
      { title: 'Loot guide', desc: 'How to evaluate gear.', href: '/loot' },
      { title: 'Builds', desc: 'Class build direction.', href: '/builds' },
    ],
  },
  {
    slug: 'mistfall-hunter-rare-resources',
    h1: 'Mistfall Hunter rare resources',
    desc: 'Mistfall Hunter rare resources guide for what to save, when to extract, crafting pressure, upgrade planning, and post-launch confirmation.',
    group: 'guides',
    template: 'guide',
    principle: 'Rare resources are usually more valuable as future options than as immediate experiments. Until live recipes settle, preserving flexibility is a strong default.',
    checks: ['Extract after rare resource drops', 'Do not spend before recipe value is clear', 'Track patch changes', 'Save resources for your main class', 'Avoid carrying rare items through extra fights'],
    next: [
      { title: 'Gyldenblood uses', desc: 'Resource-specific tracker.', href: '/gyldenblood-uses' },
      { title: 'Crafting guide', desc: 'How to spend resources safely.', href: '/mistfall-hunter-crafting-guide' },
      { title: 'What to keep', desc: 'Inventory priority guide.', href: '/mistfall-hunter-what-to-keep' },
    ],
  },
  {
    slug: 'mistfall-hunter-farming-routes',
    h1: 'Mistfall Hunter farming routes',
    desc: 'Mistfall Hunter farming routes guide for safe repeatable loops, resource runs, loot value, extraction timing, and avoiding high-risk greed.',
    group: 'guides',
    template: 'map',
    principle: 'A farming route should be judged by extracted value per successful run, not by the biggest possible haul on a perfect run.',
    checks: ['Use short repeatable loops', 'Know the nearest exit', 'Avoid boss routes when farming basics', 'Track player traffic', 'Extract once the route has paid off'],
    next: [
      { title: 'Safe extraction routes', desc: 'Low-risk exit planning.', href: '/mistfall-hunter-safe-extraction-routes' },
      { title: 'High-value loot routes', desc: 'Riskier loot planning.', href: '/mistfall-hunter-high-value-loot-routes' },
      { title: 'Map hub', desc: 'Route and zone tools.', href: '/map' },
    ],
  },
  {
    slug: 'mistfall-hunter-low-risk-runs',
    h1: 'Mistfall Hunter low-risk runs',
    desc: 'Mistfall Hunter low-risk run guide for learning maps, building stash depth, extracting early, and reducing avoidable deaths.',
    group: 'guides',
    template: 'guide',
    principle: 'Low-risk runs are not cowardly. They build map knowledge, stash stability, and confidence for later high-value routes.',
    checks: ['Bring replaceable gear', 'Take short routes', 'Avoid boss noise', 'Extract after useful finds', 'Review each death for a route lesson'],
    next: [
      { title: 'Beginner map path', desc: 'First routes for new players.', href: '/mistfall-hunter-beginner-map-path' },
      { title: 'How to survive first run', desc: 'First-session survival.', href: '/mistfall-hunter-how-to-survive-first-run' },
      { title: 'Stash management', desc: 'Turn safe runs into progress.', href: '/mistfall-hunter-stash-management' },
    ],
  },
  {
    slug: 'mistfall-hunter-high-risk-runs',
    h1: 'Mistfall Hunter high-risk runs',
    desc: 'Mistfall Hunter high-risk run guide for boss routes, rare loot, PvP pressure, squad planning, and knowing when the reward is worth it.',
    group: 'guides',
    template: 'guide',
    principle: 'High-risk runs should have a reason. If you cannot name the reward, escape plan, and failure point before entering, the route is probably just greed.',
    checks: ['Define the target before entering', 'Bring gear you can afford to lose', 'Plan a fallback exit', 'Set a leave condition', 'Avoid stacking boss greed with rare resource greed'],
    next: [
      { title: 'Boss route planner', desc: 'Plan dangerous PvE routes.', href: '/mistfall-hunter-boss-route-planner' },
      { title: 'Boss loot priority', desc: 'Loot and leave after bosses.', href: '/mistfall-hunter-boss-loot-priority' },
      { title: 'PvP after bosses', desc: 'Handle third-party pressure.', href: '/mistfall-hunter-pvp-after-boss' },
    ],
  },
  {
    slug: 'mistfall-hunter-extraction-mistakes',
    h1: 'Mistfall Hunter extraction mistakes',
    desc: 'Mistfall Hunter extraction mistakes guide covering late greed, poor route planning, stamina waste, boss overstay, and bad loot decisions.',
    group: 'guides',
    template: 'guide',
    principle: 'Most lost runs are not one mistake. They are a chain: stay too long, take one extra fight, run out of stamina, then reach extraction too late.',
    checks: ['Leave after meaningful loot', 'Keep stamina for the exit', 'Do not sort inventory in the open', 'Avoid starting bosses late', 'Know a backup route'],
    next: [
      { title: 'How to extract', desc: 'Core extraction guide.', href: '/how-to-extract' },
      { title: 'Fastest way to extract', desc: 'Short extraction decisions.', href: '/mistfall-hunter-fastest-way-to-extract' },
      { title: 'Safe extraction routes', desc: 'Route planning help.', href: '/mistfall-hunter-safe-extraction-routes' },
    ],
  },
  {
    slug: 'mistfall-hunter-run-review-checklist',
    h1: 'Mistfall Hunter run review checklist',
    desc: 'Mistfall Hunter run review checklist for learning from deaths, route choices, PvP decisions, loot greed, and extraction timing.',
    group: 'tools',
    template: 'tool',
    principle: 'A short review after each run improves faster than blaming balance. The question is what decision made the death likely before the final hit landed.',
    checks: ['Where did the route become unsafe?', 'Was the fight necessary?', 'Did loot greed delay extraction?', 'Were cooldowns saved for escape?', 'What should change next run?'],
    next: [
      { title: 'Extraction mistakes', desc: 'Common ways runs fall apart.', href: '/mistfall-hunter-extraction-mistakes' },
      { title: 'Low-risk runs', desc: 'Build repeatable learning loops.', href: '/mistfall-hunter-low-risk-runs' },
      { title: 'PvP guide', desc: 'Fight selection and pressure.', href: '/pvp-guide' },
    ],
  },
  {
    slug: 'mistfall-hunter-meta-tracker',
    h1: 'Mistfall Hunter meta tracker',
    desc: 'Mistfall Hunter meta tracker for classes, builds, weapons, affixes, boss routes, patch changes, and what still needs live verification.',
    group: 'news',
    template: 'guide',
    principle: 'The meta should be treated as a living snapshot. Early launch impressions are useful, but patches and player discovery can change the best decisions quickly.',
    checks: ['Track patch notes', 'Separate solo and squad meta', 'Watch PvP and PvE separately', 'Update build pages after changes', 'Label unverified assumptions'],
    next: [
      { title: 'Patch balance watch', desc: 'Balance changes after launch.', href: '/mistfall-hunter-patch-balance-watch' },
      { title: 'Classes', desc: 'Class tier context.', href: '/classes' },
      { title: 'Builds', desc: 'Build hub for updates.', href: '/builds' },
    ],
  },
  {
    slug: 'mistfall-hunter-solo-meta',
    h1: 'Mistfall Hunter solo meta',
    desc: 'Mistfall Hunter solo meta guide for class choices, escape tools, route discipline, PvP avoidance, and live post-launch updates.',
    group: 'guides',
    template: 'guide',
    principle: 'Solo meta is less about maximum team damage and more about information, disengage tools, reliable extraction, and avoiding fights that cannot be reset.',
    checks: ['Value escape and sustain', 'Avoid long boss pulls alone', 'Use short routes', 'Extract after rare finds', 'Track solo balance after patches'],
    next: [
      { title: 'Best solo class', desc: 'Solo class recommendations.', href: '/best-class-for-solo' },
      { title: 'Solo extraction tips', desc: 'Route discipline for solo players.', href: '/mistfall-hunter-solo-extraction-tips' },
      { title: 'Shadowstrix solo build', desc: 'Stealth solo example.', href: '/mistfall-hunter-shadowstrix-solo-build' },
    ],
  },
  {
    slug: 'mistfall-hunter-squad-meta',
    h1: 'Mistfall Hunter squad meta',
    desc: 'Mistfall Hunter squad meta guide for team roles, support value, boss routes, PvP pressure, and patch-sensitive composition planning.',
    group: 'guides',
    template: 'guide',
    principle: 'Squad meta rewards complementary roles. The strongest team is rarely three players trying to solve the same problem.',
    checks: ['Bring frontline or peel', 'Add ranged pressure or burst', 'Keep support value for long fights', 'Assign loot and callout roles', 'Update after balance patches'],
    next: [
      { title: 'Squad composition', desc: 'Role planning for teams.', href: '/mistfall-hunter-squad-composition' },
      { title: 'Seer support build', desc: 'Support role example.', href: '/mistfall-hunter-seer-support-build' },
      { title: 'Duo guide', desc: 'Two-player team planning.', href: '/mistfall-hunter-duo-guide' },
    ],
  },
  {
    slug: 'mistfall-hunter-support-classes',
    h1: 'Mistfall Hunter support classes',
    desc: 'Mistfall Hunter support class guide for healing, control, team positioning, extraction saves, and launch meta verification.',
    group: 'guides',
    template: 'guide',
    principle: 'Support is strongest when it changes outcomes: saving a teammate, stabilizing a boss fight, or buying enough time to extract.',
    checks: ['Stay close enough to help', 'Do not loot first after fights', 'Save tools for disengage', 'Pair with a durable teammate', 'Track support scaling after patches'],
    next: [
      { title: 'Seer support build', desc: 'Support build planning.', href: '/mistfall-hunter-seer-support-build' },
      { title: 'Squad composition', desc: 'How support fits teams.', href: '/mistfall-hunter-squad-composition' },
      { title: 'Classes', desc: 'Class role overview.', href: '/classes' },
    ],
  },
  {
    slug: 'mistfall-hunter-tank-builds',
    h1: 'Mistfall Hunter tank builds',
    desc: 'Mistfall Hunter tank build guide for frontline play, blocking, peel, boss safety, squad routes, and survivability affixes.',
    group: 'guides',
    template: 'build',
    principle: 'A tank build should create space and survive bad moments. It is not useful if it cannot protect loot, teammates, or the path to extraction.',
    checks: ['Prioritize survivability affixes', 'Keep stamina for block and disengage', 'Peel for support players', 'Avoid chasing too far', 'Use durable gear on high-value routes'],
    next: [
      { title: 'Mercenary beginner build', desc: 'Durable starter direction.', href: '/mistfall-hunter-mercenary-beginner-build' },
      { title: 'Squad composition', desc: 'Frontline role planning.', href: '/mistfall-hunter-squad-composition' },
      { title: 'Boss route planner', desc: 'Tank value in boss routes.', href: '/mistfall-hunter-boss-route-planner' },
    ],
  },
  {
    slug: 'mistfall-hunter-ranged-builds',
    h1: 'Mistfall Hunter ranged builds',
    desc: 'Mistfall Hunter ranged build guide for spacing, sightlines, PvP pressure, boss safety, and extraction-route control.',
    group: 'guides',
    template: 'build',
    principle: 'Ranged builds win by controlling space and decisions. The goal is not always a kill; it can be forcing an enemy to abandon the route.',
    checks: ['Hold useful sightlines', 'Avoid tight interiors without escape', 'Pressure extraction paths', 'Save mobility for melee dives', 'Pair with frontline or control'],
    next: [
      { title: 'Blackarrow PvP build', desc: 'Ranged PvP example.', href: '/mistfall-hunter-blackarrow-pvp-build' },
      { title: 'Weapons', desc: 'Weapon role guide.', href: '/weapons' },
      { title: 'PvP guide', desc: 'Fight selection and pressure.', href: '/pvp-guide' },
    ],
  },
  {
    slug: 'mistfall-hunter-magic-builds',
    h1: 'Mistfall Hunter magic builds',
    desc: 'Mistfall Hunter magic build guide for spell pressure, cooldown planning, ranged burst, control, and launch balance verification.',
    group: 'guides',
    template: 'build',
    principle: 'Magic builds need timing and spacing. Burst means little if every cooldown is spent before the real escape or PvP interruption begins.',
    checks: ['Track cooldown windows', 'Keep distance from hard engage', 'Build around control or burst identity', 'Save tools for disengage', 'Update after spell tuning patches'],
    next: [
      { title: 'Builds', desc: 'Build and affix hub.', href: '/builds' },
      { title: 'Weapons and combat', desc: 'Combat role basics.', href: '/weapons' },
      { title: 'Affix priority', desc: 'Choose modifiers by role.', href: '/mistfall-hunter-affix-priority' },
    ],
  },
  {
    slug: 'mistfall-hunter-healer-builds',
    h1: 'Mistfall Hunter healer builds',
    desc: 'Mistfall Hunter healer build guide for sustain, squad recovery, boss routes, PvP resets, and support-focused extraction play.',
    group: 'guides',
    template: 'build',
    principle: 'Healing is most valuable when it turns a failed extraction into a recovery window. The build should support decisions, not encourage endless overstay.',
    checks: ['Save healing for escapes', 'Stay positioned behind pressure', 'Do not use sustain to justify greed', 'Pair with durable teammates', 'Track healing balance after patches'],
    next: [
      { title: 'Seer support build', desc: 'Support build foundation.', href: '/mistfall-hunter-seer-support-build' },
      { title: 'Support classes', desc: 'Support role guide.', href: '/mistfall-hunter-support-classes' },
      { title: 'Squad meta', desc: 'Team role updates.', href: '/mistfall-hunter-squad-meta' },
    ],
  },
  {
    slug: 'mistfall-hunter-boss-difficulty',
    h1: 'Mistfall Hunter boss difficulty',
    desc: 'Mistfall Hunter boss difficulty guide for Mist Lords, route risk, solo and squad prep, reward pressure, and patch-sensitive tuning.',
    group: 'guides',
    template: 'boss',
    principle: 'Boss difficulty is not only mechanics. It is the total risk of the route: PvE damage, time spent, player attention, and extraction after the kill.',
    checks: ['Scout before pulling', 'Know escape options', 'Save resources for post-boss PvP', 'Avoid solo boss greed early', 'Recheck tuning after patches'],
    next: [
      { title: 'Bosses', desc: 'Boss and PvE fundamentals.', href: '/bosses' },
      { title: 'Boss route planner', desc: 'Plan boss fights around risk.', href: '/mistfall-hunter-boss-route-planner' },
      { title: 'Boss loot priority', desc: 'Loot safely after kills.', href: '/mistfall-hunter-boss-loot-priority' },
    ],
  },
  {
    slug: 'mistfall-hunter-enemy-types',
    h1: 'Mistfall Hunter enemy types',
    desc: 'Mistfall Hunter enemy types guide for Corroded enemies, bosses, PvE pressure, sound traps, route safety, and live database updates.',
    group: 'database',
    template: 'guide',
    principle: 'Enemy types matter because they shape route cost. Even weak enemies can be dangerous if they delay extraction or reveal your position.',
    checks: ['Learn which enemies create noise', 'Avoid unnecessary PvE when carrying value', 'Save resources for bosses', 'Track live enemy names and drops', 'Update routes after spawn changes'],
    next: [
      { title: 'Bosses and PvE', desc: 'PvE threat overview.', href: '/bosses' },
      { title: 'Beginner map path', desc: 'Low-risk route learning.', href: '/mistfall-hunter-beginner-map-path' },
      { title: 'Loot guide', desc: 'Drops and value decisions.', href: '/loot' },
    ],
  },
  {
    slug: 'mistfall-hunter-map-progression',
    h1: 'Mistfall Hunter map progression',
    desc: 'Mistfall Hunter map progression guide for learning zones, moving from safe routes to boss routes, and planning post-launch map updates.',
    group: 'guides',
    template: 'map',
    principle: 'Map progression should move from recognition to control: first learn landmarks, then exits, then boss routes, then high-risk rotations.',
    checks: ['Learn landmarks first', 'Memorize exits', 'Practice low-risk loops', 'Add boss routes later', 'Track new map updates after launch'],
    next: [
      { title: 'Map hub', desc: 'Interactive map and zone pages.', href: '/map' },
      { title: 'Beginner map path', desc: 'First route planning.', href: '/mistfall-hunter-beginner-map-path' },
      { title: 'High-value loot routes', desc: 'Advanced route planning.', href: '/mistfall-hunter-high-value-loot-routes' },
    ],
  },
  {
    slug: 'mistfall-hunter-daily-checklist',
    h1: 'Mistfall Hunter daily checklist',
    desc: 'Mistfall Hunter daily checklist for quick session prep, server checks, build updates, stash review, route choice, and patch awareness.',
    group: 'tools',
    template: 'tool',
    principle: 'A daily checklist keeps sessions focused. Check the things that can change before risking your best gear.',
    checks: ['Check server and patch status', 'Review current build notes', 'Clean stash space', 'Choose a route goal', 'Stop after avoidable tilt deaths'],
    next: [
      { title: 'Server status', desc: 'Check online health first.', href: '/server-status' },
      { title: 'Patch notes tracker', desc: 'See what changed.', href: '/mistfall-hunter-patch-notes-tracker' },
      { title: 'Run review checklist', desc: 'Improve between runs.', href: '/mistfall-hunter-run-review-checklist' },
    ],
  },
  {
    slug: 'mistfall-hunter-weekly-reset',
    h1: 'Mistfall Hunter weekly reset',
    desc: 'Mistfall Hunter weekly reset tracker for time-gated systems, rewards, economy changes, maintenance windows, and post-launch verification.',
    group: 'news',
    template: 'guide',
    principle: 'Weekly reset pages should not invent systems before they are confirmed. Their job is to track whether resets exist and what they affect.',
    checks: ['Verify if weekly resets exist', 'Track maintenance timing', 'Watch reward or vendor changes', 'Separate season resets from weekly resets', 'Update after official confirmation'],
    next: [
      { title: 'Maintenance schedule', desc: 'Downtime and reset watch.', href: '/mistfall-hunter-maintenance-schedule' },
      { title: 'Roadmap', desc: 'Long-term update tracking.', href: '/mistfall-hunter-roadmap' },
      { title: 'Season One', desc: 'Season structure watch.', href: '/mistfall-hunter-season-one' },
    ],
  },
  {
    slug: 'mistfall-hunter-update-history',
    h1: 'Mistfall Hunter update history',
    desc: 'Mistfall Hunter update history for patches, hotfixes, balance changes, server fixes, guide revisions, and important post-launch changes.',
    group: 'news',
    template: 'guide',
    principle: 'Update history helps users and search engines understand which guides are fresh. Every major patch should connect to affected class, build, map, and troubleshooting pages.',
    checks: ['Record patch dates', 'Summarize player impact', 'Link to affected guides', 'Separate hotfixes from major patches', 'Keep old assumptions visible until updated'],
    next: [
      { title: 'Updates', desc: 'Editorial update log.', href: '/updates' },
      { title: 'Patch notes tracker', desc: 'Patch tracking hub.', href: '/mistfall-hunter-patch-notes-tracker' },
      { title: 'Post-launch updates', desc: 'Ongoing update coverage.', href: '/mistfall-hunter-post-launch-updates' },
    ],
  },
  {
    slug: 'mistfall-hunter-glossary',
    h1: 'Mistfall Hunter glossary',
    desc: 'Mistfall Hunter glossary for Gyldenmist, Gyldhunter, Soul of Return, extraction terms, class roles, affixes, bosses, and launch terminology.',
    group: 'database',
    template: 'guide',
    principle: 'A glossary improves internal consistency and helps new players understand guide language without leaving the site.',
    checks: ['Define confirmed terms first', 'Label beta or preview terms clearly', 'Link terms to deeper guides', 'Update after launch UI wording', 'Avoid inventing official terminology'],
    next: [
      { title: 'About Mistfall Hunter', desc: 'Game overview and premise.', href: '/about' },
      { title: 'Soul of Return', desc: 'Key extraction term explained.', href: '/soul-of-return' },
      { title: 'Sources', desc: 'Where terminology comes from.', href: '/sources' },
    ],
  },
];

export const enPostLaunchEvergreenPages: SeoPage[] = specs.map((spec) => ({
  slug: spec.slug,
  group: spec.group,
  template: spec.template,
  title: `${spec.h1} - Mistfall Hunter Wiki`,
  description: spec.desc,
  eyebrow: 'Evergreen guide',
  h1: spec.h1,
  lead: spec.desc,
  updated: 'Prepared for launch and post-launch updates. Live values, terminology, and balance details should be checked after release.',
  intent: {
    primary: spec.h1,
    secondary: spec.checks,
    freshness: 'Evergreen topic with launch-sensitive details. This page is designed to be updated after patches and live verification.',
  },
  sections: [
    {
      heading: 'Core principle',
      body: [spec.principle],
    },
    {
      heading: 'What to check',
      body: ['Use these checks to make the page actionable without pretending unverified launch values are final.'],
      bullets: spec.checks,
    },
    {
      heading: 'How this stays useful after launch',
      body: ['The page is structured around decisions that remain useful after release, while values, names, and patch-sensitive details can be updated as live information becomes available.'],
    },
  ],
  cards: spec.next,
  checklist: spec.checks,
  relatedSearches: [spec.h1, `${spec.h1} guide`, 'Mistfall Hunter wiki', 'Mistfall Hunter tips'],
  faqs: [
    { q: spec.h1, a: spec.desc },
    { q: 'Is this based on final launch data?', a: 'It is a launch-ready guide structure. Exact live values and names should be verified after release.' },
    { q: 'Where should I go next?', a: spec.next[0] ? `Start with ${spec.next[0].title}.` : 'Start with the main guide hub.' },
  ],
}));

export const enPostLaunchEvergreenLinks: PriorityLink[] = enPostLaunchEvergreenPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhPostLaunchEvergreenPages: SeoPage[] = enPostLaunchEvergreenPages.map((page) => ({
  ...page,
  title: `${page.h1} - Mistfall Hunter Wiki`,
  description: page.description,
}));

export const zhPostLaunchEvergreenLinks: PriorityLink[] = enPostLaunchEvergreenLinks.map((link) => ({
  ...link,
  href: `/zh${link.href}`,
}));
