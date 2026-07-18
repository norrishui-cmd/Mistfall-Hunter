import type { PriorityLink } from './priorityLinks';
import type { SeoPage } from './seoPages';

type ClusterSpec = {
  slug: string;
  h1: string;
  desc: string;
  angle: string;
  group: PriorityLink['group'];
  template: SeoPage['template'];
  checks: string[];
  next: { title: string; desc: string; href: string }[];
};

const platformSpecs: ClusterSpec[] = [
  {
    slug: 'mistfall-hunter-pc-vs-xbox-vs-ps5',
    h1: 'Mistfall Hunter PC vs Xbox vs PS5',
    desc: 'Compare Mistfall Hunter on PC, Xbox Series X|S, and PlayStation 5 for launch timing, controls, Game Pass, performance, and squad planning.',
    angle: 'Platform choice is not just about graphics. For an extraction game, it affects your friends list, input comfort, matchmaking expectations, subscription access, and how quickly performance fixes arrive.',
    group: 'news',
    template: 'guide',
    checks: ['Game Pass access', 'Crossplay status', 'Controller comfort', 'PC settings flexibility', 'Console performance mode'],
    next: [
      { title: 'Crossplay status', desc: 'Check platform party and matchmaking details.', href: '/crossplay-status' },
      { title: 'Xbox launch guide', desc: 'Xbox and Game Pass launch planning.', href: '/xbox-launch-guide' },
      { title: 'PS5 launch guide', desc: 'PlayStation launch watchpoints.', href: '/ps5-launch-guide' },
    ],
  },
  {
    slug: 'mistfall-hunter-pc-launch-checklist',
    h1: 'Mistfall Hunter PC launch checklist',
    desc: 'Prepare for Mistfall Hunter on PC with a launch checklist for Steam, storage, drivers, settings, controller support, and common performance issues.',
    angle: 'PC players can usually tune more than console players, but that also means more launch-day variables. Prepare the basics before blaming the game or your hardware.',
    group: 'tools',
    template: 'tool',
    checks: ['Update GPU drivers', 'Free storage space', 'Disable unstable overlays', 'Check Steam install status', 'Start with conservative graphics settings'],
    next: [
      { title: 'Performance guide', desc: 'Stutter, crash, and low-FPS fixes.', href: '/performance' },
      { title: 'Steam page guide', desc: 'Steam install and listing checks.', href: '/steam-page-guide' },
      { title: 'Known issues tracker', desc: 'Launch bugs and workarounds.', href: '/known-issues-tracker' },
    ],
  },
  {
    slug: 'mistfall-hunter-xbox-game-pass-install-guide',
    h1: 'Mistfall Hunter Xbox Game Pass install guide',
    desc: 'Mistfall Hunter Xbox and PC Game Pass install guide covering store checks, preload status, subscription access, and launch-day troubleshooting.',
    angle: 'Game Pass searches spike when players want to know whether the game is installable, playable, and included for their platform or region.',
    group: 'news',
    template: 'guide',
    checks: ['Confirm Game Pass label', 'Check Xbox store page', 'Watch preload status', 'Verify region availability', 'Restart store app if install does not appear'],
    next: [
      { title: 'Game Pass explained', desc: 'Subscription availability and caveats.', href: '/mistfall-hunter-game-pass-explained' },
      { title: 'Preload status', desc: 'Platform install timing.', href: '/mistfall-hunter-preload-status' },
      { title: 'Server status', desc: 'Launch-week login checks.', href: '/server-status' },
    ],
  },
  {
    slug: 'mistfall-hunter-playstation-store-guide',
    h1: 'Mistfall Hunter PlayStation Store guide',
    desc: 'Mistfall Hunter PlayStation Store guide for PS5 launch status, wishlisting, preload watch, controller expectations, and platform questions.',
    angle: 'PlayStation players mainly need clarity on store visibility, unlock timing, controller behavior, and whether their squad can join from other platforms.',
    group: 'news',
    template: 'guide',
    checks: ['PS5 store listing', 'Preload timer', 'Launch unlock time', 'Crossplay wording', 'Controller and performance options'],
    next: [
      { title: 'PS5 launch guide', desc: 'Main PlayStation launch page.', href: '/ps5-launch-guide' },
      { title: 'Controller support', desc: 'Gamepad and input details to verify.', href: '/mistfall-hunter-controller-support' },
      { title: 'Crossplay status', desc: 'Party and platform questions.', href: '/crossplay-status' },
    ],
  },
];

const troubleshootingSpecs: ClusterSpec[] = [
  {
    slug: 'mistfall-hunter-login-error',
    h1: 'Mistfall Hunter login error guide',
    desc: 'Mistfall Hunter login error guide for launch-week connection problems, server queues, platform services, and safe first troubleshooting steps.',
    angle: 'Login errors during a new online launch are not always local problems. Separate account, platform, network, and server-wide issues before changing too many settings.',
    group: 'tools',
    template: 'tool',
    checks: ['Check server status first', 'Restart the game client', 'Confirm platform service status', 'Avoid repeated account-link changes', 'Wait for official maintenance notes'],
    next: [
      { title: 'Server status', desc: 'Status and outage tracking.', href: '/server-status' },
      { title: 'Known issues tracker', desc: 'Launch bug collection.', href: '/known-issues-tracker' },
      { title: 'Patch notes tracker', desc: 'Hotfix and patch watch.', href: '/mistfall-hunter-patch-notes-tracker' },
    ],
  },
  {
    slug: 'mistfall-hunter-crash-on-startup',
    h1: 'Mistfall Hunter crash on startup',
    desc: 'Fix Mistfall Hunter crash on startup with a practical PC checklist for drivers, overlays, files, settings, and launch-week known issues.',
    angle: 'Startup crashes usually happen before you can tune in-game settings, so the first pass should focus on drivers, overlays, corrupted installs, and launch notes.',
    group: 'tools',
    template: 'tool',
    checks: ['Update GPU driver', 'Verify game files', 'Disable overlays', 'Reboot after install', 'Check known issues before reinstalling'],
    next: [
      { title: 'Performance guide', desc: 'Broader stutter and crash checklist.', href: '/performance' },
      { title: 'Known issues tracker', desc: 'Verified launch issues.', href: '/known-issues-tracker' },
      { title: 'System requirements', desc: 'Hardware and settings watch.', href: '/mistfall-hunter-system-requirements-explained' },
    ],
  },
  {
    slug: 'mistfall-hunter-stuck-on-loading-screen',
    h1: 'Mistfall Hunter stuck on loading screen',
    desc: 'Mistfall Hunter stuck on loading screen guide for launch-day server load, shader compilation, storage, connection, and platform checks.',
    angle: 'A loading-screen hang can be server-side, storage-related, or shader-related. The fix depends on where the freeze happens and whether other players report the same issue.',
    group: 'tools',
    template: 'tool',
    checks: ['Wait through first shader load', 'Check server status', 'Move install to SSD if possible', 'Verify files', 'Avoid force-closing during first setup'],
    next: [
      { title: 'Server status', desc: 'Check if the issue is widespread.', href: '/server-status' },
      { title: 'Performance guide', desc: 'Settings and stability help.', href: '/performance' },
      { title: 'Known issues tracker', desc: 'Loading bugs and workarounds.', href: '/known-issues-tracker' },
    ],
  },
  {
    slug: 'mistfall-hunter-matchmaking-not-working',
    h1: 'Mistfall Hunter matchmaking not working',
    desc: 'Mistfall Hunter matchmaking not working guide for queues, party errors, region issues, crossplay questions, and launch-week server pressure.',
    angle: 'Matchmaking issues can come from server load, region pools, party-size rules, or crossplay settings. Diagnose the broad condition before changing party plans.',
    group: 'tools',
    template: 'tool',
    checks: ['Check server status', 'Try solo queue', 'Confirm party size', 'Check crossplay settings', 'Watch region and maintenance updates'],
    next: [
      { title: 'Server regions', desc: 'Region and ping questions.', href: '/mistfall-hunter-server-regions' },
      { title: 'Squad size', desc: 'Party-size expectations.', href: '/mistfall-hunter-squad-size' },
      { title: 'Crossplay status', desc: 'Platform matchmaking notes.', href: '/crossplay-status' },
    ],
  },
];

const classSpecs: ClusterSpec[] = [
  {
    slug: 'mistfall-hunter-mercenary-beginner-build',
    h1: 'Mistfall Hunter Mercenary beginner build',
    desc: 'Mistfall Hunter Mercenary beginner build guide for defensive melee learning, stamina discipline, extraction safety, and early gear priorities.',
    angle: 'Mercenary is a natural learning pick if you want clearer defensive tools and simpler punish windows while you understand extraction pressure.',
    group: 'guides',
    template: 'build',
    checks: ['Prioritize survival affixes', 'Keep stamina for disengage', 'Learn block timing', 'Avoid greed after first good loot', 'Use shield comfort while learning routes'],
    next: [
      { title: 'Classes', desc: 'Compare every known class.', href: '/classes' },
      { title: 'Best beginner class', desc: 'Beginner class decision page.', href: '/best-class-for-beginners' },
      { title: 'Builds', desc: 'Build and affix hub.', href: '/builds' },
    ],
  },
  {
    slug: 'mistfall-hunter-shadowstrix-solo-build',
    h1: 'Mistfall Hunter Shadowstrix solo build',
    desc: 'Mistfall Hunter Shadowstrix solo build guide for stealth routes, burst windows, disengage decisions, and extraction risk control.',
    angle: 'Shadowstrix-style solo play should be about choosing fights, not proving you can win every fight. Stealth has value only if it helps you leave alive.',
    group: 'guides',
    template: 'build',
    checks: ['Avoid long boss fights alone', 'Use stealth to disengage', 'Prioritize burst and escape', 'Extract after high-value finds', 'Do not reveal yourself for low-value loot'],
    next: [
      { title: 'Best solo class', desc: 'Solo class comparison.', href: '/best-class-for-solo' },
      { title: 'How to extract', desc: 'Extraction decisions for solo runs.', href: '/how-to-extract' },
      { title: 'Solo play answer', desc: 'Can you play Mistfall Hunter solo?', href: '/can-you-play-mistfall-hunter-solo' },
    ],
  },
  {
    slug: 'mistfall-hunter-seer-support-build',
    h1: 'Mistfall Hunter Seer support build',
    desc: 'Mistfall Hunter Seer support build guide for squad healing, control, positioning, and support priorities during extraction runs.',
    angle: 'Support value is highest when it prevents a wipe, not when it tops a damage chart. A good Seer plan keeps the squad stable enough to extract.',
    group: 'guides',
    template: 'build',
    checks: ['Stay near escape routes', 'Save healing for disengage windows', 'Pair with a frontliner', 'Avoid looting first', 'Track teammate stamina and position'],
    next: [
      { title: 'Squad builds', desc: 'Team composition planning.', href: '/squad-builds' },
      { title: 'Classes', desc: 'Role overview.', href: '/classes' },
      { title: 'Boss routes', desc: 'Boss-risk and reward planning.', href: '/boss-locations' },
    ],
  },
  {
    slug: 'mistfall-hunter-blackarrow-pvp-build',
    h1: 'Mistfall Hunter Blackarrow PvP build',
    desc: 'Mistfall Hunter Blackarrow PvP build guide for ranged pressure, spacing, third-party opportunities, and extraction-route control.',
    angle: 'Ranged pressure is strongest when it controls decisions. Blackarrow players should make enemies spend stamina, lose angles, or abandon loot.',
    group: 'guides',
    template: 'build',
    checks: ['Hold sightlines near routes', 'Do not over-chase indoors', 'Keep distance from heavy melee', 'Pressure extraction paths', 'Leave if the fight becomes a collapse'],
    next: [
      { title: 'PvP guide', desc: 'Player-fight fundamentals.', href: '/pvp-guide' },
      { title: 'Weapons', desc: 'Combat and weapon-role notes.', href: '/weapons' },
      { title: 'Best builds', desc: 'Build direction hub.', href: '/best-builds' },
    ],
  },
];

const mapSpecs: ClusterSpec[] = [
  {
    slug: 'mistfall-hunter-safe-extraction-routes',
    h1: 'Mistfall Hunter safe extraction routes',
    desc: 'Mistfall Hunter safe extraction routes guide for low-risk exits, Soul of Return timing, PvP avoidance, and beginner map planning.',
    angle: 'A safe route is not a guaranteed route. It is a route that gives you options before another squad hears the fight or blocks the exit.',
    group: 'guides',
    template: 'map',
    checks: ['Secure Soul of Return early', 'Identify two possible exits', 'Avoid boss noise when carrying value', 'Keep stamina for final movement', 'Leave before the map funnels players together'],
    next: [
      { title: 'Extraction map', desc: 'Map-focused extraction planning.', href: '/extraction-map' },
      { title: 'Soul of Return', desc: 'How extraction access works.', href: '/soul-of-return' },
      { title: 'Beginner guide', desc: 'First-route planning.', href: '/beginner-guide' },
    ],
  },
  {
    slug: 'mistfall-hunter-high-value-loot-routes',
    h1: 'Mistfall Hunter high-value loot routes',
    desc: 'Mistfall Hunter high-value loot routes guide for balancing loot pressure, boss routes, PvP risk, and extraction timing.',
    angle: 'High-value routes are only good if you can extract. A route that gets you killed with rare loot is just a delivery service for another hunter.',
    group: 'guides',
    template: 'map',
    checks: ['Know the exit before looting', 'Avoid fighting over low-value scraps', 'Expect PvP near boss routes', 'Bank rare resources early', 'Rotate away from loud fights'],
    next: [
      { title: 'Loot guide', desc: 'What to keep and bank.', href: '/loot' },
      { title: 'Boss locations', desc: 'Boss-route pressure points.', href: '/boss-locations' },
      { title: 'Interactive map', desc: 'Map hub and filters.', href: '/map' },
    ],
  },
  {
    slug: 'mistfall-hunter-boss-route-planner',
    h1: 'Mistfall Hunter boss route planner',
    desc: 'Mistfall Hunter boss route planner for deciding when to fight Mist Lords, when to leave, and how to avoid being third-partied.',
    angle: 'Boss routes create predictable player movement. Plan the escape before the pull, because the hardest part of the boss may be the players arriving afterward.',
    group: 'guides',
    template: 'boss',
    checks: ['Scout before engaging', 'Clear only necessary enemies', 'Keep healing for post-boss pressure', 'Assign one player to listen', 'Leave if another squad arrives too early'],
    next: [
      { title: 'Bosses', desc: 'Boss and PvE fundamentals.', href: '/bosses' },
      { title: 'Boss locations', desc: 'Boss map planning.', href: '/boss-locations' },
      { title: 'Squad builds', desc: 'Team roles for boss routes.', href: '/squad-builds' },
    ],
  },
  {
    slug: 'mistfall-hunter-beginner-map-path',
    h1: 'Mistfall Hunter beginner map path',
    desc: 'Mistfall Hunter beginner map path guide for first routes, low-risk loot, early extraction, and avoiding unnecessary PvP.',
    angle: 'The best first route is boring in a useful way: learn landmarks, bank small wins, and survive long enough to understand how the map flows.',
    group: 'guides',
    template: 'map',
    checks: ['Start with short routes', 'Learn landmarks', 'Avoid boss routes at first', 'Extract after one useful upgrade', 'Review where danger came from'],
    next: [
      { title: 'Beginner guide', desc: 'First-run priorities.', href: '/beginner-guide' },
      { title: 'Map hub', desc: 'All map tools and pages.', href: '/map' },
      { title: 'How to extract', desc: 'Extraction basics.', href: '/how-to-extract' },
    ],
  },
];

const comparisonSpecs: ClusterSpec[] = [
  {
    slug: 'mistfall-hunter-vs-escape-from-tarkov',
    h1: 'Mistfall Hunter vs Escape from Tarkov',
    desc: 'Mistfall Hunter vs Escape from Tarkov comparison for extraction stakes, combat style, fantasy classes, loot risk, and player expectations.',
    angle: 'The shared idea is extraction risk, but the feel is different: Mistfall Hunter leans dark fantasy action RPG instead of tactical shooter simulation.',
    group: 'guides',
    template: 'guide',
    checks: ['Extraction loss', 'PvP pressure', 'Class abilities', 'Third-person action combat', 'Loot and stash expectations'],
    next: [
      { title: 'Alternatives', desc: 'Similar games and expectations.', href: '/mistfall-hunter-alternatives' },
      { title: 'PvPvE explained', desc: 'How PvE and PvP overlap.', href: '/mistfall-hunter-pvpve-explained' },
      { title: 'Gameplay overview', desc: 'Core loop summary.', href: '/gameplay-overview' },
    ],
  },
  {
    slug: 'mistfall-hunter-vs-dark-and-darker',
    h1: 'Mistfall Hunter vs Dark and Darker',
    desc: 'Mistfall Hunter vs Dark and Darker comparison for fantasy extraction, class roles, PvP pressure, dungeon pacing, and combat expectations.',
    angle: 'Both games attract fantasy extraction players, but Mistfall Hunter appears more third-person action RPG in presentation and combat flow.',
    group: 'guides',
    template: 'guide',
    checks: ['Fantasy extraction loop', 'Class identity', 'Boss risk', 'Loot loss', 'Melee and ranged pressure'],
    next: [
      { title: 'Is it like Dark and Darker?', desc: 'Focused comparison answer.', href: '/mistfall-hunter-is-it-like-dark-and-darker' },
      { title: 'Classes', desc: 'Known Mistfall Hunter roles.', href: '/classes' },
      { title: 'Bosses', desc: 'PvE and boss-risk overview.', href: '/bosses' },
    ],
  },
  {
    slug: 'mistfall-hunter-vs-elden-ring-nightreign',
    h1: 'Mistfall Hunter vs Elden Ring Nightreign',
    desc: 'Mistfall Hunter vs Elden Ring Nightreign comparison for Soulslike combat interest, co-op pressure, bosses, extraction stakes, and fantasy action.',
    angle: 'Players may compare the tone and combat commitment, but Mistfall Hunter is built around extraction decisions and loot risk rather than a pure boss-run structure.',
    group: 'guides',
    template: 'guide',
    checks: ['Boss difficulty', 'Stamina and dodging', 'Extraction loss', 'Class roles', 'Co-op and PvP pressure'],
    next: [
      { title: 'Is it like Elden Ring?', desc: 'Soulslike expectation answer.', href: '/mistfall-hunter-is-it-like-elden-ring' },
      { title: 'Combat guide', desc: 'Weapons and stamina notes.', href: '/weapons' },
      { title: 'Boss guide', desc: 'Boss-route planning.', href: '/bosses' },
    ],
  },
  {
    slug: 'mistfall-hunter-for-soulslike-players',
    h1: 'Mistfall Hunter for Soulslike players',
    desc: 'Mistfall Hunter guide for Soulslike players covering combat timing, stamina, boss risk, PvP pressure, loot loss, and extraction mindset.',
    angle: 'Soulslike habits help with timing and patience, but extraction games punish greed differently. Surviving with loot matters more than winning a duel beautifully.',
    group: 'guides',
    template: 'guide',
    checks: ['Respect stamina', 'Do not overstay after good loot', 'Treat PvP as part of the route', 'Learn exits before bosses', 'Choose forgiving classes first'],
    next: [
      { title: 'Beginner guide', desc: 'Extraction mindset for new players.', href: '/beginner-guide' },
      { title: 'Best beginner class', desc: 'Lower-risk starting roles.', href: '/best-class-for-beginners' },
      { title: 'How to extract', desc: 'Leave before the run turns bad.', href: '/how-to-extract' },
    ],
  },
];

const specs = [...platformSpecs, ...troubleshootingSpecs, ...classSpecs, ...mapSpecs, ...comparisonSpecs];

export const enLaunchWeekClusterPages: SeoPage[] = specs.map((spec) => ({
  slug: spec.slug,
  group: spec.group,
  template: spec.template,
  title: `${spec.h1} - Mistfall Hunter Launch Guide`,
  description: spec.desc,
  eyebrow: 'Launch week guide',
  h1: spec.h1,
  lead: spec.desc,
  updated: 'Prepared for the July 29, 2026 launch window. Live values and platform behavior should be rechecked at release.',
  intent: {
    primary: spec.h1,
    secondary: spec.checks,
    freshness: 'Launch-week topic with high freshness sensitivity. Recheck official notes, store listings, and in-game behavior after release.',
  },
  sections: [
    {
      heading: 'Why this topic matters',
      body: [spec.angle],
    },
    {
      heading: 'Launch-week checklist',
      body: ['Use this checklist before making a purchase, choosing a platform, committing to a class, or risking a full loot run.'],
      bullets: spec.checks,
    },
    {
      heading: 'How to use this page',
      body: ['This guide is written for fast pre-launch decisions. It separates stable extraction-game principles from details that need live confirmation once Mistfall Hunter is playable.'],
    },
  ],
  cards: spec.next,
  checklist: spec.checks,
  relatedSearches: [spec.h1, `${spec.h1} guide`, 'Mistfall Hunter launch', 'Mistfall Hunter gameplay'],
  faqs: [
    { q: `Is ${spec.h1} important before launch?`, a: 'Yes. It affects purchase decisions, platform choice, class planning, or launch-week troubleshooting.' },
    { q: 'What should be verified after release?', a: spec.checks.join(', ') + '.' },
    { q: 'Is this page based on confirmed live meta?', a: 'No. It is launch-window guidance and will need live verification when the game releases.' },
  ],
}));

export const enLaunchWeekClusterLinks: PriorityLink[] = enLaunchWeekClusterPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhLaunchWeekClusterPages: SeoPage[] = enLaunchWeekClusterPages.map((page) => ({
  ...page,
  title: `${page.h1} - Mistfall Hunter Guide`,
  description: page.description,
}));

export const zhLaunchWeekClusterLinks: PriorityLink[] = enLaunchWeekClusterLinks.map((link) => ({
  ...link,
  href: `/zh${link.href}`,
}));
