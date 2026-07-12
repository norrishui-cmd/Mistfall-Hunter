import type { PriorityLink } from './priorityLinks';
import type { SeoPage } from './seoPages';

type LaunchAnswerSpec = {
  slug: string;
  query: string;
  short: string;
  status: string;
  decision: string;
  watch: string[];
  links: { title: string; desc: string; href: string }[];
  group: PriorityLink['group'];
};

const specs: LaunchAnswerSpec[] = [
  {
    slug: 'can-you-play-mistfall-hunter-solo',
    query: 'Can you play Mistfall Hunter solo?',
    short: 'Solo play is part of the expected PvPvE extraction loop, but solo players need lower-risk routing and earlier extraction decisions.',
    status: 'Solo and squad play are both important search intents before launch. Exact solo balance will need live verification once servers open.',
    decision: 'If you plan to play alone, focus on escape tools, information, stamina discipline, and routes that do not force long boss fights.',
    watch: ['Solo matchmaking rules', 'Class win rates after launch', 'Boss tuning for solo players', 'Extraction pressure around high-value routes'],
    links: [
      { title: 'Best class for solo', desc: 'Class choices for players without a squad.', href: '/best-class-for-solo' },
      { title: 'How to extract', desc: 'How to leave with loot before a bad fight starts.', href: '/how-to-extract' },
      { title: 'Beginner guide', desc: 'Core loop and first-run priorities.', href: '/beginner-guide' },
    ],
    group: 'guides',
  },
  {
    slug: 'is-mistfall-hunter-free-to-play',
    query: 'Is Mistfall Hunter free to play?',
    short: 'Pricing has been one of the biggest pre-launch questions. Players should separate store availability from final price confirmation.',
    status: 'Before launch, the safest answer is to track official store pages and avoid assuming a final monetization model until it is confirmed.',
    decision: 'If you are waiting to buy or install, watch Steam, Xbox, PlayStation, and Game Pass messaging in the final launch window.',
    watch: ['Final Steam price', 'Xbox and PC Game Pass wording', 'PlayStation store listing', 'Any founder pack or edition details'],
    links: [
      { title: 'Price status', desc: 'Dedicated price and edition watch page.', href: '/price-status' },
      { title: 'Release date', desc: 'Launch timing and platform status.', href: '/release-date' },
      { title: 'Game Pass guide', desc: 'What to check for Xbox and PC Game Pass.', href: '/game-pass-day-one-guide' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-game-pass-explained',
    query: 'Is Mistfall Hunter on Game Pass?',
    short: 'Game Pass intent is strongest for Xbox and PC players who want to know whether they can play on day one.',
    status: 'Store and platform messaging should be checked close to launch because subscription labels can change by region and platform.',
    decision: 'Use this page to decide whether to wishlist, install through Game Pass, or wait for final launch confirmation.',
    watch: ['Xbox store availability', 'PC Game Pass availability', 'Regional subscription differences', 'Pre-install or preload status'],
    links: [
      { title: 'Xbox launch guide', desc: 'Console launch and Game Pass watchpoints.', href: '/xbox-launch-guide' },
      { title: 'Release date', desc: 'Global launch timing.', href: '/release-date' },
      { title: 'Price status', desc: 'Price and edition tracking.', href: '/price-status' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-beta-rewards-carry-over',
    query: 'Do Mistfall Hunter beta rewards carry over?',
    short: 'Beta progression should be treated differently from beta participation rewards.',
    status: 'The practical pre-launch position is that progress does not carry over, while listed cosmetic participation rewards may remain tied to the same account.',
    decision: 'Do not grind beta progression as if it were permanent. Use beta knowledge for route learning, class testing, and launch preparation.',
    watch: ['Official reward eligibility', 'Account-linking requirements', 'Final carry-over wording', 'Launch inventory state'],
    links: [
      { title: 'Beta rewards guide', desc: 'Known beta reward and wipe notes.', href: '/beta-rewards-carry-over' },
      { title: 'Launch preparation', desc: 'What to learn before release.', href: '/news-launch-week-preparation' },
      { title: 'Beginner guide', desc: 'Use beta knowledge for first runs.', href: '/beginner-guide' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-system-requirements-explained',
    query: 'What are the Mistfall Hunter system requirements?',
    short: 'System requirement searches rise sharply before launch because players want to know whether stutter is hardware, settings, or server related.',
    status: 'Final PC requirement details should be verified against official store listings and launch notes.',
    decision: 'Before launch, prepare with clean drivers, storage space, stable overlays, and conservative settings rather than chasing unverified specs.',
    watch: ['Minimum and recommended specs', 'GPU driver notes', 'Shader compilation behavior', 'Known stutter issues after launch'],
    links: [
      { title: 'Performance guide', desc: 'Stutter, crash, and low-FPS checklist.', href: '/performance' },
      { title: 'Best settings', desc: 'Settings direction for stable launch play.', href: '/best-settings-for-fps' },
      { title: 'Known issues tracker', desc: 'Launch bug and workaround tracking.', href: '/known-issues-tracker' },
    ],
    group: 'tools',
  },
  {
    slug: 'mistfall-hunter-pvpve-explained',
    query: 'What does PvPvE mean in Mistfall Hunter?',
    short: 'PvPvE means enemy players and hostile monsters both shape the same extraction run.',
    status: 'The confirmed positioning is a third-person dark fantasy PvPvE extraction action RPG with class kits, bosses, loot, and rival hunters.',
    decision: 'New players should not treat PvE and PvP as separate modes. Every boss fight, loot room, and extraction route can become a player fight.',
    watch: ['Player density by map', 'Boss-route third-party pressure', 'Squad matchmaking rules', 'PvP reward incentives'],
    links: [
      { title: 'Gameplay overview', desc: 'Core PvPvE loop explained.', href: '/gameplay-overview' },
      { title: 'Bosses and PvE', desc: 'Why PvE fights create PvP risk.', href: '/bosses' },
      { title: 'Extraction map', desc: 'Route planning around player pressure.', href: '/extraction-map' },
    ],
    group: 'guides',
  },
  {
    slug: 'mistfall-hunter-steam-deck-status',
    query: 'Does Mistfall Hunter work on Steam Deck?',
    short: 'Steam Deck compatibility is a high-intent question for PC handheld players, but it needs launch verification.',
    status: 'Treat Steam Deck support as unconfirmed until the Steam listing, player reports, or official notes verify it.',
    decision: 'If you plan to play handheld, wait for launch-week reports on performance, controls, anti-cheat behavior, and text readability.',
    watch: ['Steam Deck compatibility label', 'Anti-cheat behavior', 'Controller prompts', 'Performance at low settings'],
    links: [
      { title: 'Steam page guide', desc: 'Steam listing and launch checks.', href: '/steam-page-guide' },
      { title: 'Controller support', desc: 'Gamepad and input questions.', href: '/controller-support' },
      { title: 'Performance guide', desc: 'Settings and stability checks.', href: '/performance' },
    ],
    group: 'tools',
  },
  {
    slug: 'mistfall-hunter-controller-support',
    query: 'Does Mistfall Hunter support controller?',
    short: 'Controller support matters for console players and PC players who prefer gamepad combat.',
    status: 'Console releases strongly imply controller-focused play, while PC controller details should be verified through store notes and launch testing.',
    decision: 'Players should check input prompts, rebinding, camera sensitivity, lock-on behavior, and inventory navigation at launch.',
    watch: ['Steam controller support label', 'Console performance modes', 'Rebinding options', 'Inventory usability on gamepad'],
    links: [
      { title: 'PS5 launch guide', desc: 'Controller-first launch watchpoints.', href: '/ps5-launch-guide' },
      { title: 'Xbox launch guide', desc: 'Console and Game Pass checklist.', href: '/xbox-launch-guide' },
      { title: 'Gameplay overview', desc: 'Combat and extraction basics.', href: '/gameplay-overview' },
    ],
    group: 'tools',
  },
  {
    slug: 'mistfall-hunter-preload-status',
    query: 'Can you preload Mistfall Hunter?',
    short: 'Preload intent usually appears in the final two weeks before release when players want to be ready at server opening.',
    status: 'Preload availability can differ by platform and region, so it should be checked on Steam, Xbox, PlayStation, and Game Pass close to launch.',
    decision: 'Even if preload is not available, players can prepare accounts, wishlist the game, follow official pages, and free storage space.',
    watch: ['Steam preload button', 'Xbox install availability', 'PlayStation preload timer', 'Game Pass pre-install status'],
    links: [
      { title: 'Release date', desc: 'Launch time and platform status.', href: '/release-date' },
      { title: 'Steam guide', desc: 'Steam store and install checks.', href: '/steam-page-guide' },
      { title: 'Launch prep', desc: 'What to do before release day.', href: '/news-launch-week-preparation' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-server-regions',
    query: 'What server regions does Mistfall Hunter have?',
    short: 'Server-region searches matter because extraction games are sensitive to latency, matchmaking pools, and launch queues.',
    status: 'Final region and server details should be verified from official launch notes or in-game server selection once available.',
    decision: 'Players should monitor login issues, ping, region locks, and maintenance windows during launch week.',
    watch: ['Region selection', 'Ping and matchmaking behavior', 'Launch queues', 'Maintenance window announcements'],
    links: [
      { title: 'Server status', desc: 'Launch-week status and outage tracker.', href: '/server-status' },
      { title: 'Known issues', desc: 'Connection bugs and workarounds.', href: '/known-issues-tracker' },
      { title: 'Crossplay status', desc: 'Platform matchmaking questions.', href: '/crossplay-status' },
    ],
    group: 'tools',
  },
  {
    slug: 'mistfall-hunter-wipe-explained',
    query: 'Does Mistfall Hunter wipe progress?',
    short: 'Wipe questions come from extraction players who want to know whether gear, stash, or beta progress resets.',
    status: 'Beta progress should be treated as wiped. Post-launch seasonal wipe rules need official confirmation if the game uses them.',
    decision: 'Do not assume launch progression will follow beta behavior. Track official wipe language separately from beta carry-over notes.',
    watch: ['Beta progress reset', 'Seasonal structure', 'Stash reset rules', 'Cosmetic reward persistence'],
    links: [
      { title: 'Beta rewards carry-over', desc: 'Progress versus cosmetic reward notes.', href: '/mistfall-hunter-beta-rewards-carry-over' },
      { title: 'Loot guide', desc: 'How gear and inventory decisions work.', href: '/loot' },
      { title: 'FAQ', desc: 'Fast launch answers.', href: '/faq' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-how-many-classes',
    query: 'How many classes are in Mistfall Hunter?',
    short: 'The known class roster centers on six playable roles with different combat and squad responsibilities.',
    status: 'Class balance will change with live data, but class identity and role planning are useful before launch.',
    decision: 'Pick a class based on role and risk tolerance first, then refine around weapons, affixes, and squad needs after launch.',
    watch: ['Launch class balance', 'Talent values', 'Weapon restrictions', 'Solo and squad win rates'],
    links: [
      { title: 'Classes', desc: 'All known class roles.', href: '/classes' },
      { title: 'Best beginner class', desc: 'Lower-risk class choices.', href: '/best-class-for-beginners' },
      { title: 'Builds', desc: 'Class build direction and affixes.', href: '/builds' },
    ],
    group: 'guides',
  },
  {
    slug: 'mistfall-hunter-squad-size',
    query: 'What is the Mistfall Hunter squad size?',
    short: 'Squad-size searches are important because team size changes class value, route risk, and extraction decisions.',
    status: 'Exact matchmaking and party-size rules should be verified at launch through in-game menus and official notes.',
    decision: 'Until then, plan around flexible roles: one stable frontliner, one damage or control pick, and one support or information tool if your squad allows it.',
    watch: ['Party size limit', 'Solo queue options', 'Matchmaking pools', 'Crossplay squad rules'],
    links: [
      { title: 'Squad build guide', desc: 'Team-oriented class planning.', href: '/squad-builds' },
      { title: 'Classes', desc: 'Role overview for every class.', href: '/classes' },
      { title: 'Crossplay status', desc: 'Platform party questions.', href: '/crossplay-status' },
    ],
    group: 'guides',
  },
  {
    slug: 'mistfall-hunter-cross-save-status',
    query: 'Does Mistfall Hunter have cross-save?',
    short: 'Cross-save is different from crossplay: it asks whether account progress follows you between platforms.',
    status: 'Treat cross-save as unconfirmed until account-linking, platform store notes, or official launch details say otherwise.',
    decision: 'If you may switch platforms, avoid making purchase or progression assumptions until cross-save details are verified.',
    watch: ['Account-linking system', 'Steam to console progress', 'Game Pass and Xbox identity', 'Cosmetic entitlement rules'],
    links: [
      { title: 'Crossplay status', desc: 'Platform matchmaking and party status.', href: '/crossplay-status' },
      { title: 'Xbox guide', desc: 'Xbox and Game Pass platform notes.', href: '/xbox-launch-guide' },
      { title: 'PS5 guide', desc: 'PlayStation platform watchpoints.', href: '/ps5-launch-guide' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-offline-mode',
    query: 'Can you play Mistfall Hunter offline?',
    short: 'Offline-mode searches usually come from players who want a pure PvE or single-player version of an online extraction game.',
    status: 'Mistfall Hunter is positioned around PvPvE extraction, so players should expect online systems unless official notes confirm otherwise.',
    decision: 'If you want offline play, watch for official mode wording. Do not assume solo means offline.',
    watch: ['Online requirement', 'Solo queue versus offline mode', 'Server maintenance impact', 'PvE-only mode announcements'],
    links: [
      { title: 'Solo guide', desc: 'Solo play planning without assuming offline mode.', href: '/can-you-play-mistfall-hunter-solo' },
      { title: 'Gameplay overview', desc: 'PvPvE extraction loop explained.', href: '/gameplay-overview' },
      { title: 'Server status', desc: 'Online status and maintenance tracker.', href: '/server-status' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-early-access-status',
    query: 'Does Mistfall Hunter have early access?',
    short: 'Early access can mean a paid head start, an early-access development label, or a platform preview period, so the intent needs a precise answer.',
    status: 'Use official store wording near launch. Do not confuse beta access, demo access, and paid early access.',
    decision: 'Players should check whether any edition includes head start access before buying and whether that access applies to their platform.',
    watch: ['Edition benefits', 'Head start wording', 'Beta versus launch access', 'Regional unlock timing'],
    links: [
      { title: 'Release date', desc: 'Launch timing and unlock status.', href: '/release-date' },
      { title: 'Price status', desc: 'Edition and monetization watch.', href: '/price-status' },
      { title: 'Preload status', desc: 'Install timing before launch.', href: '/mistfall-hunter-preload-status' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-demo-status',
    query: 'Is there a Mistfall Hunter demo?',
    short: 'Demo searches rose around Steam Next Fest attention and will keep mattering for players who missed the test window.',
    status: 'Demo availability can change after events, so check the Steam page and official channels before assuming the demo is still live.',
    decision: 'If the demo is unavailable, use gameplay pages, class guides, and launch prep content to decide whether the game fits you.',
    watch: ['Steam demo button', 'Next Fest event status', 'Beta access windows', 'Post-launch trial options'],
    links: [
      { title: 'Steam page guide', desc: 'How to check demo and store status.', href: '/steam-page-guide' },
      { title: 'Gameplay overview', desc: 'What the demo taught players to expect.', href: '/gameplay-overview' },
      { title: 'News demo surge', desc: 'Demo attention and search trend brief.', href: '/news-steam-next-fest-demo-surge' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-editions-explained',
    query: 'What editions does Mistfall Hunter have?',
    short: 'Edition searches appear when players want to compare base access, cosmetics, currency, and possible head-start benefits.',
    status: 'Final edition details should be verified through official store pages. Avoid relying on speculative price lists.',
    decision: 'Before buying, compare what affects gameplay, what is cosmetic, what is platform-specific, and whether Game Pass changes your decision.',
    watch: ['Base edition', 'Founder or deluxe packs', 'Cosmetic bundles', 'Currency or monetization language'],
    links: [
      { title: 'Price status', desc: 'Price and edition tracker.', href: '/price-status' },
      { title: 'Game Pass', desc: 'Subscription availability questions.', href: '/mistfall-hunter-game-pass-explained' },
      { title: 'Release date', desc: 'Platform launch status.', href: '/release-date' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-anti-cheat',
    query: 'What anti-cheat does Mistfall Hunter use?',
    short: 'Anti-cheat matters for competitive extraction games because it affects trust, Steam Deck support, and PC compatibility.',
    status: 'The exact anti-cheat implementation should be verified from official notes, launch files, or store disclosures.',
    decision: 'Players should watch for launch-week reports on false positives, compatibility, Steam Deck behavior, and cheating response.',
    watch: ['Anti-cheat vendor', 'Steam Deck compatibility', 'Kernel-level disclosure', 'Report tools and ban policy'],
    links: [
      { title: 'Known issues tracker', desc: 'Launch bugs and compatibility notes.', href: '/known-issues-tracker' },
      { title: 'Steam Deck status', desc: 'Handheld compatibility watch.', href: '/mistfall-hunter-steam-deck-status' },
      { title: 'Server status', desc: 'Online stability and login tracking.', href: '/server-status' },
    ],
    group: 'tools',
  },
  {
    slug: 'mistfall-hunter-patch-notes-tracker',
    query: 'Where are the Mistfall Hunter patch notes?',
    short: 'Patch-note searches become valuable immediately after launch because class balance, crashes, server fixes, and loot changes move fast.',
    status: 'This page tracks what to check and how patch notes should be interpreted once official updates begin.',
    decision: 'Read patch notes through the lens of your class, map route, performance issue, and economy plan rather than as generic news.',
    watch: ['Launch patch notes', 'Hotfix cadence', 'Class balance changes', 'Performance and server fixes'],
    links: [
      { title: 'News hub', desc: 'Main update tracker.', href: '/news' },
      { title: 'Known issues', desc: 'Bugs and workaround tracker.', href: '/known-issues-tracker' },
      { title: 'Classes', desc: 'Class balance context.', href: '/classes' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-is-it-like-dark-and-darker',
    query: 'Is Mistfall Hunter like Dark and Darker?',
    short: 'Players compare it with extraction games and dark fantasy PvP because both involve risk, loot, and hostile players.',
    status: 'Mistfall Hunter has its own third-person action RPG combat identity, so comparisons are useful only for explaining risk and extraction structure.',
    decision: 'Use comparisons to set expectations, not to assume identical pacing, class balance, map design, or economy rules.',
    watch: ['Combat pacing', 'Class utility', 'Map density', 'Loot economy', 'PvP incentives'],
    links: [
      { title: 'Alternatives', desc: 'Comparison page for similar games.', href: '/mistfall-hunter-alternatives' },
      { title: 'PvPvE explained', desc: 'How players and monsters share the run.', href: '/mistfall-hunter-pvpve-explained' },
      { title: 'Gameplay overview', desc: 'Mistfall Hunter core loop.', href: '/gameplay-overview' },
    ],
    group: 'guides',
  },
  {
    slug: 'mistfall-hunter-is-it-like-elden-ring',
    query: 'Is Mistfall Hunter like Elden Ring?',
    short: 'Soulslike comparisons usually refer to melee commitment, dodge timing, punishment windows, and dark fantasy tone.',
    status: 'Mistfall Hunter may appeal to Soulslike players, but it is structured as an extraction game rather than a single-player open-world RPG.',
    decision: 'If you enjoy precise combat but dislike losing loot to PvP, read extraction pages before deciding whether the risk loop fits you.',
    watch: ['Dodge and stamina tuning', 'Boss difficulty', 'PvP pressure', 'Death penalty severity'],
    links: [
      { title: 'Gameplay overview', desc: 'Combat and extraction structure.', href: '/gameplay-overview' },
      { title: 'How extraction works', desc: 'Why dying changes the stakes.', href: '/beginner-guide' },
      { title: 'Bosses', desc: 'PvE threat and boss routing.', href: '/bosses' },
    ],
    group: 'guides',
  },
  {
    slug: 'mistfall-hunter-best-platform',
    query: 'What is the best platform for Mistfall Hunter?',
    short: 'The best platform depends on your friends, subscription access, performance expectations, and control preference.',
    status: 'PC, Xbox Series X|S, and PlayStation 5 are the main platform targets to track before launch.',
    decision: 'Choose PC for settings flexibility, Xbox if Game Pass access matters, and PlayStation if your squad is there and crossplay is not confirmed for your needs.',
    watch: ['Crossplay status', 'Game Pass availability', 'Console performance modes', 'Steam player population'],
    links: [
      { title: 'Crossplay status', desc: 'Platform party and matchmaking status.', href: '/crossplay-status' },
      { title: 'Xbox guide', desc: 'Xbox and Game Pass launch watch.', href: '/xbox-launch-guide' },
      { title: 'PS5 guide', desc: 'PlayStation launch watch.', href: '/ps5-launch-guide' },
    ],
    group: 'news',
  },
  {
    slug: 'mistfall-hunter-what-to-do-first',
    query: 'What should I do first in Mistfall Hunter?',
    short: 'The first objective is not to become rich. It is to learn extraction, survive mistakes, and build a repeatable low-risk route.',
    status: 'Launch meta will change, but first-run priorities are stable for extraction games: information, survival, and banking wins.',
    decision: 'Pick a forgiving class, avoid boss greed, secure extraction early, and leave once the run has taught you something useful.',
    watch: ['Tutorial flow', 'Starter gear value', 'First map density', 'New-player matchmaking behavior'],
    links: [
      { title: 'Beginner guide', desc: 'First-run priorities in detail.', href: '/beginner-guide' },
      { title: 'How to extract', desc: 'Leave safely before greed takes over.', href: '/how-to-extract' },
      { title: 'Best beginner class', desc: 'Lower-risk class picks.', href: '/best-class-for-beginners' },
    ],
    group: 'guides',
  },
];

export const enLaunchAnswerPages: SeoPage[] = specs.map((spec) => ({
  slug: spec.slug,
  group: spec.group,
  template: 'faq',
  title: `${spec.query} - Mistfall Hunter Launch Answer`,
  description: `${spec.query} Clear pre-launch answer, confirmed status, what to verify, and related Mistfall Hunter guides.`,
  eyebrow: 'Launch answer',
  h1: spec.query,
  lead: spec.short,
  updated: spec.status,
  intent: {
    primary: spec.query,
    secondary: spec.watch,
    freshness: 'Updated for the July 30, 2026 launch window. Exact live values will be checked again at release.',
  },
  sections: [
    {
      heading: 'Short answer',
      body: [spec.short, spec.status],
    },
    {
      heading: 'What it means for players',
      body: [spec.decision],
      bullets: spec.watch,
    },
    {
      heading: 'What to verify at launch',
      body: ['This page separates current pre-launch guidance from items that need live confirmation. Check official store pages, launch notes, and in-game menus before making final purchase, platform, or build decisions.'],
    },
  ],
  cards: spec.links,
  checklist: spec.watch,
  relatedSearches: [spec.query, `Mistfall Hunter ${spec.slug.replace(/-/g, ' ')}`, 'Mistfall Hunter release date', 'Mistfall Hunter gameplay'],
  faqs: [
    { q: spec.query, a: spec.short },
    { q: 'What should I check before launch?', a: spec.watch.join(', ') + '.' },
    { q: 'Where should I go next?', a: `Start with ${spec.links[0]?.title ?? 'the main guide'} for the most relevant follow-up.` },
  ],
}));

export const enLaunchAnswerLinks: PriorityLink[] = enLaunchAnswerPages.map((page) => ({
  title: page.h1,
  desc: page.lead,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhLaunchAnswerPages: SeoPage[] = enLaunchAnswerPages.map((page) => ({
  ...page,
  slug: page.slug,
  title: `${page.h1} - Mistfall Hunter FAQ`,
  description: page.description,
}));

export const zhLaunchAnswerLinks: PriorityLink[] = enLaunchAnswerLinks.map((link) => ({
  ...link,
  href: `/zh${link.href}`,
}));
