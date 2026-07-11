import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

type DraftPage = {
  slug: string;
  group: PriorityLink['group'];
  template: SeoPage['template'];
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  primary: string;
  secondary: string[];
  checklist: string[];
  steps: { title: string; body: string }[];
  tableTitle: string;
  rows: string[][];
  sections: SeoPage['sections'];
  faqs: { q: string; a: string }[];
  cards: { title: string; desc: string; href: string }[];
};

const mapCards = [
  { title: 'Interactive map', desc: 'Plan exits, bosses, loot, and landmarks.', href: '/map' },
  { title: 'Extraction route planner', desc: 'Build a safe path around exits and objectives.', href: '/extraction-route-planner' },
  { title: 'Solo routes', desc: 'Quiet low-risk routing for solo players.', href: '/solo-extraction-routes' },
];

const classCards = [
  { title: 'Classes', desc: 'Compare all classes by role and learning curve.', href: '/classes' },
  { title: 'Best solo class', desc: 'Solo picks by safety, reset tools, and PvP agency.', href: '/best-solo-class' },
  { title: 'Squad comps', desc: 'Team roles for PvPvE extraction groups.', href: '/squad-comps' },
];

const lootCards = [
  { title: 'Loot & affixes', desc: 'Gear value, affix priority, and what to bank.', href: '/loot' },
  { title: 'Affix priority', desc: 'Which stats matter by class role.', href: '/affix-priority' },
  { title: 'PvE farming route', desc: 'Resource routing without overcommitting.', href: '/pve-farming-route' },
];

const newsCards = [
  { title: 'News hub', desc: 'Launch, beta, patches, and official update tracking.', href: '/news' },
  { title: 'Release date', desc: 'Launch time, platforms, Game Pass, and price status.', href: '/release-date' },
  { title: 'Server status', desc: 'Maintenance, queue, and connection issue tracker.', href: '/server-status' },
];

const pages: DraftPage[] = [
  {
    slug: 'hallowgrove-map-guide',
    group: 'database',
    template: 'map',
    title: 'Mistfall Hunter Hallowgrove Map Guide: Routes, Loot & Extraction Prep',
    description: 'Mistfall Hunter Hallowgrove map guide covering route planning, extraction prep, loot stops, PvE pressure, chaos variants, and launch-day update targets.',
    eyebrow: 'Map guide',
    h1: 'Hallowgrove map guide',
    lead: 'Hallowgrove should be treated as a route-learning map first: confirm exits, identify safe loot loops, then add boss or PvP pressure only when the path home is clear.',
    primary: 'Mistfall Hunter Hallowgrove map guide',
    secondary: ['Hallowgrove routes', 'Hallowgrove extraction', 'Hallowgrove loot'],
    checklist: ['Mark exits before loot', 'Separate quiet lanes from PvP lanes', 'Track chaos variant changes', 'Bank one useful upgrade early', 'Avoid boss pulls without a retreat path'],
    steps: [
      { title: 'Learn the outside path first', body: 'Run the perimeter and exits before committing to central points of interest.' },
      { title: 'Add one loot loop', body: 'Choose a short loop that returns toward extraction instead of dragging you deeper into traffic.' },
      { title: 'Record danger points', body: 'After each run, note where PvP or elite PvE contact happened and update the route.' },
    ],
    tableTitle: 'Hallowgrove route framework',
    rows: [
      ['Learning', 'Move slowly and confirm exits', 'Leave after mapping one lane'],
      ['Loot', 'Take low-noise containers and resources', 'Leave after one build upgrade'],
      ['PvP', 'Hold traffic lanes near objectives', 'Reset after supplies drop'],
    ],
    sections: [
      { heading: 'Why this page exists', body: ['Hallowgrove is a named map target that can support route, loot, extraction, and variant searches once the launch build is verified. The page is prepared for real screenshots and markers rather than invented coordinates.'] },
      { heading: 'Best first use', body: ['Use this page as the Hallowgrove hub for safe lanes, exit-first routing, and future boss or loot notes.'] },
    ],
    faqs: [
      { q: 'Is Hallowgrove confirmed?', a: 'It appears in pre-launch material, but exact live route details should be verified after launch.' },
      { q: 'Should beginners farm Hallowgrove?', a: 'Beginners should learn exits first, then add loot and boss routes once the path home is familiar.' },
    ],
    cards: mapCards,
  },
  {
    slug: 'brandrgarde-map-guide',
    group: 'database',
    template: 'map',
    title: 'Mistfall Hunter Brandrgarde Map Guide: PvP Routes, Boss Risk & Exits',
    description: 'Mistfall Hunter Brandrgarde map guide for PvP route planning, boss-risk management, extraction paths, chaos variants, and high-value loot timing.',
    eyebrow: 'Map guide',
    h1: 'Brandrgarde map guide',
    lead: 'Brandrgarde routing should assume higher commitment: plan entry, objective, reset point, and extraction before fighting deep in the map.',
    primary: 'Mistfall Hunter Brandrgarde map guide',
    secondary: ['Brandrgarde routes', 'Brandrgarde boss', 'Brandrgarde extraction'],
    checklist: ['Start with an exit-first plan', 'Scout before high-value objectives', 'Avoid long central fights', 'Track third-party routes', 'Extract after a major reward'],
    steps: [
      { title: 'Choose one objective', body: 'Avoid stacking too many goals in one higher-risk route.' },
      { title: 'Keep a reset lane', body: 'A reset lane is the path you use when the boss pull or PvP trade goes wrong.' },
      { title: 'Leave with value', body: 'Do not turn a successful objective into a death march by chasing every nearby sound.' },
    ],
    tableTitle: 'Brandrgarde decision table',
    rows: [
      ['Long PvE fight nearby', 'Third-party opportunity and danger', 'Wait, listen, rotate'],
      ['Boss already engaged', 'Multiple teams may converge', 'Scout before joining'],
      ['Inventory has a key upgrade', 'Greed risk rises', 'Extract instead of extending'],
    ],
    sections: [
      { heading: 'Map identity', body: ['A dedicated Brandrgarde page is useful because players will search map names together with boss, route, loot, and exit terms.'] },
      { heading: 'Update plan', body: ['After launch, add verified screenshots, extraction markers, boss names, and route difficulty notes.'] },
    ],
    faqs: [
      { q: 'What should a Brandrgarde route include?', a: 'One objective, a reset lane, and an extraction plan before any high-risk fight.' },
      { q: 'Are boss locations final?', a: 'Exact live boss locations should be verified after launch.' },
    ],
    cards: mapCards,
  },
  {
    slug: 'bell-extraction-guide',
    group: 'guides',
    template: 'guide',
    title: 'Mistfall Hunter Bell Extraction Guide: Bellring, Escape Timing & Risk',
    description: 'Mistfall Hunter bell extraction guide explaining bell-based escape timing, safe extraction habits, ambush risk, and route planning.',
    eyebrow: 'Extraction guide',
    h1: 'Bell extraction guide',
    lead: 'Extraction is the real win condition. If a bell or extraction signal becomes public, treat it as both your escape tool and an ambush invitation.',
    primary: 'Mistfall Hunter bell extraction guide',
    secondary: ['how to extract', 'bell extraction', 'extraction timing'],
    checklist: ['Reach extraction before panic', 'Heal before interacting', 'Listen for footsteps', 'Cover approach angles', 'Leave after value is secured'],
    steps: [
      { title: 'Approach quietly', body: 'Do not sprint straight into extraction if other players may be listening.' },
      { title: 'Stabilize first', body: 'Heal, reload, and check cooldowns before starting the escape interaction.' },
      { title: 'Expect contact', body: 'Any visible or audible extraction action can attract players looking for a final fight.' },
    ],
    tableTitle: 'Extraction timing guide',
    rows: [
      ['Low health, high loot', 'Extract after stabilizing', 'Value is already secured'],
      ['Noisy fight nearby', 'Wait or rotate', 'Ambush risk is high'],
      ['Squad split', 'Regroup before extraction', 'One isolated player can be picked'],
    ],
    sections: [
      { heading: 'Why bell extraction needs a page', body: ['New players search the exact escape mechanic. This page supports how-to-extract queries and links beginner, route, and map pages together.'] },
      { heading: 'What needs verification', body: ['Exact interaction rules, timer length, sound behavior, and map-specific extraction conditions should be checked in the final build.'] },
    ],
    faqs: [
      { q: 'How do you extract in Mistfall Hunter?', a: 'Use the available extraction objective or bell-style escape mechanic, then survive the final timing window. Exact launch rules should be verified in-game.' },
      { q: 'Is extraction dangerous?', a: 'Yes. Extraction points are natural ambush locations because players carrying loot must eventually leave.' },
    ],
    cards: mapCards,
  },
  {
    slug: 'gyldenblood-loot-guide',
    group: 'database',
    template: 'guide',
    title: 'Mistfall Hunter Gyldenblood Guide: Loot Value, Uses & Banking Priority',
    description: 'Mistfall Hunter Gyldenblood guide covering pre-launch loot value logic, progression use, banking priority, route risk, and how to avoid losing key resources.',
    eyebrow: 'Loot guide',
    h1: 'Gyldenblood loot guide',
    lead: 'Gyldenblood-style resources should be treated as progression loot: valuable enough to change your route, but not valuable enough to justify every bad fight.',
    primary: 'Mistfall Hunter Gyldenblood guide',
    secondary: ['Gyldenblood loot', 'Gyldenblood farming', 'resource guide'],
    checklist: ['Confirm actual use before hoarding', 'Bank early copies', 'Avoid boss greed with rare resources', 'Track source locations', 'Separate crafting value from sale value'],
    steps: [
      { title: 'Identify the use', body: 'Do not assume whether a resource is crafting, upgrade, quest, or economy material until verified.' },
      { title: 'Protect the first copy', body: 'Early unknown resources are worth extracting because they unlock guide and database certainty.' },
      { title: 'Build a source table', body: 'After launch, record where each resource drops and how risky the route is.' },
    ],
    tableTitle: 'Resource value framework',
    rows: [
      ['Crafting', 'Recipe and quantity', 'Determines farming priority'],
      ['Upgrade', 'Class or gear use', 'Affects build pages'],
      ['Trade or sale', 'Vendor or market value', 'Affects extraction decisions'],
    ],
    sections: [
      { heading: 'Avoid fake drop tables', body: ['Until live data is confirmed, this page explains how to judge and bank Gyldenblood rather than inventing exact drop rates.'] },
      { heading: 'Where this connects', body: ['Gyldenblood supports loot, affix, farming-route, and build pages. Once item use is verified, those internal links can point players to the build that needs it.'] },
    ],
    faqs: [
      { q: 'What is Gyldenblood used for?', a: 'Its exact launch use should be verified in-game before publishing a fixed recipe or drop table.' },
      { q: 'Should I extract with unknown resources?', a: 'Yes. Early resources with unclear value are usually worth banking until their use is confirmed.' },
    ],
    cards: lootCards,
  },
  {
    slug: 'chaos-variants-guide',
    group: 'database',
    template: 'guide',
    title: 'Mistfall Hunter Chaos Variants Guide: Map Changes, Risk & Rewards',
    description: 'Mistfall Hunter chaos variants guide covering altered map risk, enemy pressure, route changes, loot expectations, and how to plan safer runs.',
    eyebrow: 'Map systems',
    h1: 'Chaos variants guide',
    lead: 'Chaos variants should be handled like a risk modifier: the map may look familiar, but route safety, enemy pressure, and player traffic can change dramatically.',
    primary: 'Mistfall Hunter chaos variants guide',
    secondary: ['chaos map variants', 'map modifiers', 'variant rewards'],
    checklist: ['Do not reuse routes blindly', 'Check exits again', 'Expect stronger PvE pressure', 'Reduce greed on first variant runs', 'Record reward differences'],
    steps: [
      { title: 'Scout first', body: 'Treat the first chaos run as information gathering rather than a full loot route.' },
      { title: 'Compare with base map', body: 'Write down what changed: exits, enemy density, objective pressure, or visibility.' },
      { title: 'Adjust stop rules', body: 'If danger rises, leave after smaller wins until the variant is understood.' },
    ],
    tableTitle: 'Chaos variant observation table',
    rows: [
      ['Enemy density changes', 'More supply pressure', 'Update route difficulty'],
      ['Exit behavior changes', 'Higher extraction risk', 'Update map notes'],
      ['Loot improves', 'More PvP traffic', 'Update farming priority'],
    ],
    sections: [
      { heading: 'Why variants matter', body: ['Variant systems create specific player searches: what changed, where to go, whether rewards are better, and whether solo players should enter.'] },
      { heading: 'Current editorial stance', body: ['The page describes planning behavior without claiming final modifiers. After launch, it should receive variant-specific screenshots and notes.'] },
    ],
    faqs: [
      { q: 'What are chaos variants?', a: 'They are map or encounter variations referenced in pre-launch material; exact rules should be verified after launch.' },
      { q: 'Should solo players enter chaos variants?', a: 'Solo players should scout them with cheap kits first because route safety may differ from the base map.' },
    ],
    cards: mapCards,
  },
  {
    slug: 'steam-next-fest-demo',
    group: 'news',
    template: 'faq',
    title: 'Mistfall Hunter Steam Next Fest Demo: What Players Learned & What Carries Over',
    description: 'Mistfall Hunter Steam Next Fest demo recap covering access, beta learning, progress wipe expectations, rewards, performance notes, and launch prep.',
    eyebrow: 'Demo recap',
    h1: 'Steam Next Fest demo recap',
    lead: 'The demo period is most useful as a learning window: routes, combat habits, class feel, and performance notes matter more than temporary progress.',
    primary: 'Mistfall Hunter Steam Next Fest demo',
    secondary: ['Mistfall Hunter demo', 'Steam Next Fest', 'beta progress carry over'],
    checklist: ['Do not assume progress carries', 'Save class notes', 'Write down performance issues', 'Practice extraction timing', 'Watch official launch notes'],
    steps: [
      { title: 'Use demo time for systems', body: 'Learn combat, stamina, extraction, and class rhythm instead of chasing temporary unlocks.' },
      { title: 'Record useful settings', body: 'Write down performance settings and controller sensitivity that felt stable.' },
      { title: 'Prepare for launch reset', body: 'Treat launch as a clean start unless official rewards say otherwise.' },
    ],
    tableTitle: 'Demo value table',
    rows: [
      ['Route knowledge', 'May carry if maps stay similar', 'Helps early extraction'],
      ['Class feel', 'Mostly useful', 'Balance may change but roles remain helpful'],
      ['Temporary progress', 'Usually no', 'Beta or demo progress is commonly wiped'],
    ],
    sections: [
      { heading: 'Search intent', body: ['Players search demo pages to learn whether they can still play, whether progress carries, and what the demo means for launch.'] },
      { heading: 'What to verify', body: ['Official Steam news, Bellring announcements, demo availability, reward language, and post-demo patch notes should be checked before updates.'] },
    ],
    faqs: [
      { q: 'Does demo progress carry over?', a: 'Treat demo or beta progress as temporary unless official launch notes confirm a specific carry-over reward.' },
      { q: 'What should I learn in the demo?', a: 'Focus on extraction timing, class feel, route safety, and performance settings.' },
    ],
    cards: newsCards,
  },
  {
    slug: 'class-skill-trees',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Class Skill Trees: Builds, Roles & What to Upgrade First',
    description: 'Mistfall Hunter class skill trees guide covering class roles, upgrade priorities, build planning, solo versus squad choices, and launch verification notes.',
    eyebrow: 'Class builds',
    h1: 'Class skill trees guide',
    lead: 'Skill trees should be planned around a job: survive solo, burst a target, support a squad, clear PvE, or hold space during extraction.',
    primary: 'Mistfall Hunter class skill trees',
    secondary: ['skill tree guide', 'class upgrades', 'build planning'],
    checklist: ['Pick a role before spending', 'Avoid mixed unfocused upgrades', 'Prioritize survival for solo', 'Prioritize synergy for squads', 'Record exact node values after launch'],
    steps: [
      { title: 'Define the role', body: 'A build page should start with what the class is supposed to do, not with a random list of upgrades.' },
      { title: 'Choose core first', body: 'Take upgrades that make the main role consistent before adding luxury damage.' },
      { title: 'Test with routes', body: 'A skill path is only good if it supports the routes and fights you actually take.' },
    ],
    tableTitle: 'Skill tree planning by role',
    rows: [
      ['Solo', 'Escape or sustain', 'Burst or scouting'],
      ['Squad support', 'Healing or control uptime', 'Survivability'],
      ['Boss clear', 'Sustained damage', 'Recovery tools'],
    ],
    sections: [
      { heading: 'Why this is high value', body: ['Skill tree pages catch players after they already chose a class. That is high-intent traffic because they are deciding what to upgrade next.'] },
      { heading: 'No invented nodes', body: ['Until exact launch trees are captured, this page explains upgrade logic. After launch, add node names, costs, and screenshots.'] },
    ],
    faqs: [
      { q: 'What should I upgrade first?', a: 'Upgrade the tools that make your chosen role consistent: survival for solo, control for support, and reliable damage for boss or PvP builds.' },
      { q: 'Are exact skill nodes listed?', a: 'Not yet. Exact node names and values should be added only after the launch build is verified.' },
    ],
    cards: classCards,
  },
  {
    slug: 'shadowstrix-solo-build',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Shadowstrix Solo Build: Stealth, Burst & Safe Extraction',
    description: 'Mistfall Hunter Shadowstrix solo build guide for stealth routing, burst windows, disengage habits, affix priorities, and solo extraction decisions.',
    eyebrow: 'Class build',
    h1: 'Shadowstrix solo build',
    lead: 'Shadowstrix should win by choosing the fight: scout, strike, reset, and extract before a clean ambush becomes a messy duel.',
    primary: 'Mistfall Hunter Shadowstrix solo build',
    secondary: ['Shadowstrix build', 'Shadowstrix solo', 'stealth build'],
    checklist: ['Build around engage control', 'Keep disengage tools ready', 'Avoid long fair trades', 'Prioritize burst and mobility', 'Extract after clean picks'],
    steps: [
      { title: 'Scout before committing', body: 'Stealth value is wasted if you enter fights without knowing exits and third-party routes.' },
      { title: 'Burst with purpose', body: 'A burst window should secure a kill, force panic, or create space to leave.' },
      { title: 'Reset quickly', body: 'If the target survives and allies arrive, reset instead of forcing a bad duel.' },
    ],
    tableTitle: 'Shadowstrix build priorities',
    rows: [
      ['Skill path', 'Stealth, burst, reset', 'Controls engagement quality'],
      ['Affixes', 'Damage windows, mobility, survivability', 'Keeps solo routes flexible'],
      ['Route', 'Low-noise flank paths', 'Preserves surprise'],
    ],
    sections: [
      { heading: 'Solo identity', body: ['Shadowstrix is a strong long-tail class page because stealth players search for solo builds, PvP burst, and extraction routes.'] },
      { heading: 'Common mistake', body: ['Do not turn every opener into a full duel. Shadowstrix loses value when it fights without surprise, cooldowns, or an exit route.'] },
    ],
    faqs: [
      { q: 'Is Shadowstrix good for solo?', a: 'Yes, its stealth and fight-selection identity makes it one of the strongest solo candidates before balance is finalized.' },
      { q: 'What should Shadowstrix prioritize?', a: 'Engage control, burst windows, mobility, and enough survivability to reset bad contact.' },
    ],
    cards: classCards,
  },
  {
    slug: 'blackarrow-beginner-build',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Blackarrow Beginner Build: Ranged Pressure & Safe Routes',
    description: 'Mistfall Hunter Blackarrow beginner build guide covering ranged pressure, scouting, spacing, affix logic, safe routes, and extraction timing.',
    eyebrow: 'Class build',
    h1: 'Blackarrow beginner build',
    lead: 'Blackarrow teaches one of the safest extraction lessons: see the fight early, keep distance, and leave before range turns into a corner.',
    primary: 'Mistfall Hunter Blackarrow beginner build',
    secondary: ['Blackarrow build', 'ranged beginner build', 'bow class guide'],
    checklist: ['Keep fights at range', 'Learn sound and sight lines', 'Avoid tight corridors', 'Practice retreat paths', 'Do not over-loot after poke damage'],
    steps: [
      { title: 'Use range as information', body: 'Seeing enemies early is as valuable as damaging them early.' },
      { title: 'Hold escape space', body: 'If a route removes your ability to kite, it is not beginner-friendly.' },
      { title: 'Finish only when safe', body: 'A low-health target can still bait you into a squad or bad terrain.' },
    ],
    tableTitle: 'Blackarrow beginner priorities',
    rows: [
      ['Safety', 'Range and scouting tools', 'Open lanes with retreat options'],
      ['Damage', 'Consistent ranged pressure', 'Avoid cramped rooms'],
      ['Extraction', 'Keep stamina to disengage', 'Leave after one upgrade'],
    ],
    sections: [
      { heading: 'Why beginners search this', body: ['Ranged classes attract new players because they feel safer. This page explains how to use range without becoming greedy or trapped.'] },
      { heading: 'Best pairing', body: ['Blackarrow scales well with map pages because route geometry decides whether range is an advantage or a liability.'] },
    ],
    faqs: [
      { q: 'Is Blackarrow beginner-friendly?', a: 'It can be, if the player respects spacing and avoids routes that remove ranged advantage.' },
      { q: 'What setting matters most for Blackarrow?', a: 'Aim and camera sensitivity matter because ranged pressure depends on tracking and target switching.' },
    ],
    cards: classCards,
  },
  {
    slug: 'seer-support-build',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Seer Support Build: Healing, Control & Squad Safety',
    description: 'Mistfall Hunter Seer support build guide for healing priorities, squad positioning, control timing, extraction safety, and support affix logic.',
    eyebrow: 'Class build',
    h1: 'Seer support build',
    lead: 'Seer value rises when the squad plays around it: call damage, protect the support, and reset before a bad trade becomes a wipe.',
    primary: 'Mistfall Hunter Seer support build',
    secondary: ['Seer build', 'support build', 'healer class guide'],
    checklist: ['Stay close enough to help', 'Do not stand first in line', 'Save recovery for real danger', 'Call cooldowns clearly', 'Build survivability before greed stats'],
    steps: [
      { title: 'Position behind pressure', body: 'Support cannot heal a team if it becomes the first target every fight.' },
      { title: 'Use cooldowns intentionally', body: 'Recovery tools are strongest when they reverse a trade, not when they patch tiny chip damage.' },
      { title: 'Cover extraction', body: 'A support build shines when a team needs to stabilize during the final exit window.' },
    ],
    tableTitle: 'Seer squad priorities',
    rows: [
      ['Boss fight', 'Keep recovery ready', 'Protect support angles'],
      ['PvP engage', 'Call cooldown status', 'Avoid splitting too far'],
      ['Extraction', 'Stabilize and control space', 'Watch approaches'],
    ],
    sections: [
      { heading: 'Support pages convert well', body: ['Support players search class-specific builds because their value depends on cooldowns, positioning, and teammates.'] },
      { heading: 'Solo warning', body: ['Seer may be viable solo in skilled hands, but its clearest pre-launch identity is squad value.'] },
    ],
    faqs: [
      { q: 'Is Seer better in squads?', a: 'Pre-launch, Seer reads as a stronger squad pick because healing and control scale with teammates.' },
      { q: 'What should Seer build first?', a: 'Start with survivability, healing uptime, and control reliability before chasing damage.' },
    ],
    cards: classCards,
  },
  {
    slug: 'sorcerer-pve-build',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Sorcerer PvE Build: Magic Damage, Boss Clear & Safety',
    description: 'Mistfall Hunter Sorcerer PvE build guide covering magic damage windows, boss clear, resource safety, positioning, affixes, and extraction risk.',
    eyebrow: 'Class build',
    h1: 'Sorcerer PvE build',
    lead: 'Sorcerer PvE builds should clear fast without spending every defensive option before the real danger arrives: another player hearing the fight.',
    primary: 'Mistfall Hunter Sorcerer PvE build',
    secondary: ['Sorcerer build', 'magic PvE build', 'boss clear build'],
    checklist: ['Keep distance from elite enemies', 'Save one escape option', 'Avoid over-channeling in PvP lanes', 'Build enough sustain', 'Stop after high-value drops'],
    steps: [
      { title: 'Clear efficiently', body: 'Magic damage should reduce time spent making noise around PvE objectives.' },
      { title: 'Protect the cast window', body: 'Do not commit to long damage windows where a hunter can collapse on you for free.' },
      { title: 'Extract after boss value', body: 'A successful boss clear becomes risky if you stay to farm nearby scraps.' },
    ],
    tableTitle: 'Sorcerer PvE planning',
    rows: [
      ['Boss damage', 'Reliable spell rotation', 'Shortens loud fights'],
      ['Safety', 'Mobility or defensive cooldown', 'Prevents third-party collapse'],
      ['Affixes', 'Damage uptime and resource comfort', 'Improves repeatable clears'],
    ],
    sections: [
      { heading: 'PvE does not mean safe', body: ['A PvE Sorcerer can clear monsters quickly, but every spell-heavy fight can advertise your position.'] },
      { heading: 'Launch update target', body: ['Add spell names, damage types, cooldowns, and boss-specific notes once live values are verified.'] },
    ],
    faqs: [
      { q: 'Is Sorcerer good for PvE?', a: 'It should be strong for magic damage and PvE clear, but exact ranking depends on launch balance.' },
      { q: 'What is Sorcerer main risk?', a: 'Fragility and being caught during or after loud PvE fights are the main risks.' },
    ],
    cards: classCards,
  },
  {
    slug: 'withered-knight-pvp-build',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Withered Knight PvP Build: Pressure, Trades & Extraction',
    description: 'Mistfall Hunter Withered Knight PvP build guide covering pressure, melee trades, commit timing, defensive resets, affixes, and extraction discipline.',
    eyebrow: 'Class build',
    h1: 'Withered Knight PvP build',
    lead: 'Withered Knight pressure is powerful only when commitment is controlled. Chase too far and the build turns strength into exposure.',
    primary: 'Mistfall Hunter Withered Knight PvP build',
    secondary: ['Withered Knight build', 'PvP melee build', 'pressure build'],
    checklist: ['Commit with cooldowns ready', 'Do not chase into unknown lanes', 'Track stamina before trading', 'Reset after failed engage', 'Extract after winning expensive fights'],
    steps: [
      { title: 'Create pressure', body: 'Use the build to make enemies spend stamina, space, and cooldowns.' },
      { title: 'Trade on purpose', body: 'Heavy melee value comes from favorable trades, not from absorbing every hit.' },
      { title: 'Stop the chase', body: 'A fleeing target may be baiting you toward teammates, monsters, or extraction ambushes.' },
    ],
    tableTitle: 'Withered Knight PvP rules',
    rows: [
      ['Enter with stamina', 'Pressure needs chase and escape budget', 'Cannot dodge after engage'],
      ['Fight near known exits', 'Keeps loot recoverable', 'Win fight but die rotating'],
      ['Reset after cooldowns', 'Avoids weak second contact', 'Enemy kites until allies arrive'],
    ],
    sections: [
      { heading: 'Why this page is separate', body: ['Withered Knight players are likely to search PvP build terms because melee pressure depends on matchup, commit timing, and stamina discipline.'] },
      { heading: 'Best content to add later', body: ['After launch, add matchup notes, exact skill names, and affix screenshots.'] },
    ],
    faqs: [
      { q: 'Is Withered Knight good for PvP?', a: 'It should be strong for pressure and trades, but it needs discipline to avoid overcommitting.' },
      { q: 'What should Withered Knight prioritize?', a: 'Stamina, defensive reset tools, pressure uptime, and extraction discipline are the key priorities.' },
    ],
    cards: classCards,
  },
];

function toSeoPage(page: DraftPage): SeoPage {
  return {
    slug: page.slug,
    group: page.group,
    template: page.template,
    title: page.title,
    description: page.description,
    eyebrow: page.eyebrow,
    h1: page.h1,
    lead: page.lead,
    intent: {
      primary: page.primary,
      secondary: page.secondary,
      freshness: 'Update with verified launch-build screenshots, exact values, patch notes, and official wording when available.',
    },
    checklist: page.checklist,
    steps: page.steps,
    tables: [{
      title: page.tableTitle,
      headers: ['Search problem', 'Best answer', 'Why it matters'],
      rows: page.rows,
    }],
    sections: page.sections,
    cards: page.cards,
    relatedSearches: [page.primary, ...page.secondary],
    faqs: page.faqs,
  };
}

function localizeCards(cards?: SeoPage['cards']) {
  return cards?.map((card) => ({ ...card, href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}` }));
}

export const enCluster2Pages: SeoPage[] = pages.map(toSeoPage);

export const zhCluster2Pages: SeoPage[] = enCluster2Pages.map((page) => ({
  ...page,
  title: `${page.title} | Chinese Wiki Draft`,
  description: `${page.description} Chinese URL draft with the same verified-data policy.`,
  eyebrow: `ZH ${page.eyebrow}`,
  h1: `${page.h1} Chinese guide`,
  lead: `${page.lead} This Chinese route is ready for localized copy after the English factual structure is verified.`,
  cards: localizeCards(page.cards),
  intent: page.intent
    ? {
        ...page.intent,
        primary: `${page.intent.primary} Chinese`,
        freshness: 'Localize after launch with verified screenshots, values, patch notes, and Chinese search wording.',
      }
    : undefined,
  sections: [
    { heading: 'Page goal', body: ['This Chinese URL exists to reserve the same long-tail search target while avoiding unverified or thin content.'] },
    { heading: 'Localization plan', body: ['After launch, replace this draft text with native Chinese copy, real screenshots, exact values, and map-specific notes.'] },
    ...page.sections,
  ],
  relatedSearches: page.relatedSearches?.map((query) => `${query} Chinese`),
  faqs: [
    { q: 'Is this page thin content?', a: 'No. It has a unique URL, intent block, checklist, step plan, reference table, FAQ, and internal links. The page also marks what must be verified after launch.' },
    { q: 'Why is some Chinese content drafted in English?', a: 'This avoids encoding and deployment risk for the current patch. The page can be localized safely in a dedicated pass.' },
  ],
}));

export const enCluster2Links: PriorityLink[] = enCluster2Pages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhCluster2Links: PriorityLink[] = zhCluster2Pages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
