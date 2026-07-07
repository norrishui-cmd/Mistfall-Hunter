import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

const guideCards = [
  { title: 'Beginner guide', desc: 'Core extraction loop, death penalty, and first-run priorities.', href: '/beginner-guide' },
  { title: 'Soul of Return', desc: 'How extraction objectives shape every run.', href: '/soul-of-return' },
  { title: 'Interactive map', desc: 'Plan exits, bosses, loot, and landmarks.', href: '/map' },
];

const buildCards = [
  { title: 'Best builds', desc: 'Role-based build hub for classes and affixes.', href: '/best-builds' },
  { title: 'Classes', desc: 'Compare class roles for solo, PvP, and beginners.', href: '/classes' },
  { title: 'Loot & affixes', desc: 'Gear value, affixes, and banking priorities.', href: '/loot' },
];

const platformCards = [
  { title: 'Release date', desc: 'Launch timing, platforms, and price status.', href: '/release-date' },
  { title: 'Platforms', desc: 'PC, Steam, Xbox, Game Pass, and PS5 tracking.', href: '/platforms' },
  { title: 'Performance', desc: 'Stutter, FPS, crashes, and settings checklist.', href: '/performance' },
];

export const enLongTailPages: SeoPage[] = [
  {
    slug: 'extraction-route-planner',
    group: 'tools',
    template: 'tool',
    title: 'Mistfall Hunter Extraction Route Planner: Safe Runs, Exits & Loot',
    description: 'Mistfall Hunter extraction route planner for safe runs, exit timing, Soul of Return routing, loot priority, boss risk, and third-party avoidance.',
    eyebrow: 'Route planner',
    h1: 'Extraction route planner',
    lead: 'A good route is a decision system: enter with a goal, secure the way out, take one meaningful win, and leave before the run turns expensive.',
    intent: {
      primary: 'Mistfall Hunter extraction route planner',
      secondary: ['safe extraction route', 'run planner', 'Soul of Return route'],
      freshness: 'Update with live map markers, route screenshots, and extraction conditions after launch.',
    },
    checklist: ['Choose one primary objective', 'Identify the nearest exit', 'Secure Soul of Return early', 'Avoid loud optional fights', 'Leave after a major upgrade'],
    steps: [
      { title: 'Pick the run type', body: 'Decide whether the run is for learning, resources, class upgrades, boss practice, or PvP pressure.' },
      { title: 'Draw the exit first', body: 'Every route should start with the path home, then add loot and boss stops around that path.' },
      { title: 'Set a stop rule', body: 'Stop rules prevent greed: leave after a rare drop, low healing, nearby PvP, or a completed objective.' },
    ],
    tables: [{
      title: 'Route planner matrix',
      headers: ['Run type', 'Best target', 'Leave condition'],
      rows: [
        ['Learning run', 'Map lanes and exits', 'After confirming one safe route'],
        ['Loot run', 'Low-risk resources', 'After one useful upgrade'],
        ['Boss run', 'One PvE objective', 'After the kill or first third-party sign'],
        ['PvP run', 'Traffic lanes', 'After resources drop below reset level'],
      ],
    }],
    sections: [
      { heading: 'Why routes beat improvising', body: ['Extraction games punish wandering. A route gives you a purpose, a time limit, and a reason to leave before another hunter turns your profit into their loot.'] },
      { heading: 'Pre-launch use', body: ['Before exact markers are confirmed, use this page as a mental model. After launch, it should become a practical route planner connected to the interactive map.'] },
    ],
    cards: guideCards,
    relatedSearches: ['Mistfall Hunter route planner', 'Mistfall Hunter safe extraction route', 'Mistfall Hunter run planner'],
    faqs: [
      { q: 'What is the safest route?', a: 'The safest route is the one with a known exit, a clear objective, and a stop rule before supplies run low.' },
      { q: 'Should every run include a boss?', a: 'No. Bosses are high-value but loud and expensive; learning and resource runs should often skip them.' },
    ],
  },
  {
    slug: 'solo-extraction-routes',
    group: 'guides',
    template: 'map',
    title: 'Mistfall Hunter Solo Extraction Routes: Safe Paths for Solo Players',
    description: 'Mistfall Hunter solo extraction routes guide covering safe paths, stealth movement, low-risk loot, Soul of Return timing, and when solo players should leave.',
    eyebrow: 'Solo routes',
    h1: 'Solo extraction routes',
    lead: 'Solo routes should be quiet, short, and honest about risk. Your advantage is choice, not brute force.',
    intent: {
      primary: 'Mistfall Hunter solo extraction routes',
      secondary: ['solo safe route', 'solo extraction guide', 'solo loot route'],
      freshness: 'Update with real route screenshots and map-specific exit notes after launch.',
    },
    checklist: ['Avoid long noisy fights', 'Do not chase squads', 'Secure extraction early', 'Use cheap kits while learning', 'Bank small wins repeatedly'],
    steps: [
      { title: 'Enter light', body: 'Use a kit you can afford to lose while learning traffic and exit timing.' },
      { title: 'Listen first', body: 'Solo players should let sound decide whether to loot, rotate, or leave.' },
      { title: 'Leave early', body: 'A solo player carrying one meaningful upgrade is already in a good position to extract.' },
    ],
    tables: [{
      title: 'Solo route priorities',
      headers: ['Priority', 'Why it matters', 'Good signal'],
      rows: [
        ['Exit knowledge', 'No teammate can rescue a bad retreat', 'Known path home'],
        ['Low sound', 'Noise invites groups', 'Short fights or skipped packs'],
        ['Small profit', 'Consistency beats hero runs', 'One useful upgrade banked'],
      ],
    }],
    sections: [
      { heading: 'Solo route mindset', body: ['Solo play is about controlling exposure. Skip objectives that trap you in sound, avoid boss routes before you know exits, and treat extraction as the win condition.'] },
      { heading: 'Classes that fit solo routes', body: ['Shadowstrix and Blackarrow naturally support solo routing through stealth, scouting, and range. Mercenary can work as a safer learning pick if you accept slower movement and fewer aggressive routes.'] },
    ],
    cards: guideCards,
    relatedSearches: ['Mistfall Hunter solo routes', 'Mistfall Hunter solo extraction', 'Mistfall Hunter safe solo route'],
    faqs: [
      { q: 'Can solo players extract consistently?', a: 'Yes, if they prioritize low-noise paths, early extraction, and realistic loot goals.' },
      { q: 'Should solo players fight bosses?', a: 'Only after learning the map and with a clear exit plan.' },
    ],
  },
  {
    slug: 'best-solo-class',
    group: 'guides',
    template: 'guide',
    title: 'Mistfall Hunter Best Solo Class: Shadowstrix, Blackarrow, Mercenary & More',
    description: 'Mistfall Hunter best solo class guide comparing Shadowstrix, Blackarrow, Mercenary, Sorcerer, Seer, and Withered Knight for solo extraction.',
    eyebrow: 'Solo class guide',
    h1: 'Best solo class',
    lead: 'The best solo class is the one that lets you choose fights, reset bad contact, and leave with profit.',
    intent: {
      primary: 'Mistfall Hunter best solo class',
      secondary: ['solo class tier list', 'best class for solo', 'solo beginner class'],
      freshness: 'Re-rank after launch balance, live skill values, and solo-route data are verified.',
    },
    checklist: ['Value escape tools', 'Prefer fight selection', 'Avoid support-only solo plans', 'Separate beginner from expert picks', 'Update after balance patches'],
    steps: [
      { title: 'Choose control', body: 'Solo classes need the ability to decide when a fight starts or ends.' },
      { title: 'Respect mistakes', body: 'Beginner solo players should choose forgiveness over peak damage.' },
      { title: 'Match the route', body: 'A stealth class fits scouting, a ranged class fits poke, and a tank fits slower safer learning.' },
    ],
    tables: [{
      title: 'Solo class comparison',
      headers: ['Class', 'Solo value', 'Main risk'],
      rows: [
        ['Shadowstrix', 'Best fight selection and reset potential', 'Weak if forced into long fair fights'],
        ['Blackarrow', 'Strong scouting and ranged pressure', 'Needs spacing and aim comfort'],
        ['Mercenary', 'Forgiving for beginners', 'Slower and easier to avoid'],
        ['Sorcerer', 'High burst and PvE clear', 'Fragile under pressure'],
        ['Seer', 'Better in squads than solo', 'Lower solo kill pressure'],
        ['Withered Knight', 'Strong pressure if committed well', 'Risky overcommitment'],
      ],
    }],
    sections: [
      { heading: 'Short answer', body: ['Shadowstrix is the safest early pick for players who want maximum solo agency. Blackarrow is strong if you prefer scouting and range. Mercenary is the practical beginner pick for learning without collapsing after one bad trade.'] },
      { heading: 'Why solo rankings differ from squad rankings', body: ['A class can be excellent in a squad because teammates cover its weakness. Solo classes need self-sufficient scouting, escape, and mistake recovery.'] },
    ],
    cards: buildCards,
    relatedSearches: ['Mistfall Hunter best solo class', 'Mistfall Hunter solo tier list', 'Mistfall Hunter beginner class'],
    faqs: [
      { q: 'What is the best solo class?', a: 'Pre-launch, Shadowstrix looks like the strongest solo candidate because stealth controls engagements.' },
      { q: 'What is the safest beginner solo class?', a: 'Mercenary is likely the safest learning class because defensive tools reduce mistake cost.' },
    ],
  },
  {
    slug: 'beginner-mistakes',
    group: 'guides',
    template: 'guide',
    title: 'Mistfall Hunter Beginner Mistakes: What New Players Should Avoid',
    description: 'Mistfall Hunter beginner mistakes guide covering greed, bad extraction timing, stamina errors, boss tunnel vision, noisy fights, and poor loot decisions.',
    eyebrow: 'Beginner guide',
    h1: 'Beginner mistakes to avoid',
    lead: 'Most beginner deaths are not caused by one hard enemy. They come from stacking small bad decisions until extraction is no longer possible.',
    intent: {
      primary: 'Mistfall Hunter beginner mistakes',
      secondary: ['new player tips', 'beginner guide', 'what not to do'],
      freshness: 'Update after launch with actual death patterns, route traps, and community-reported mistakes.',
    },
    checklist: ['Do not overstay', 'Do not start bosses without exits', 'Do not empty stamina before retreating', 'Do not loot before listening', 'Do not bring gear you cannot afford to lose'],
    steps: [
      { title: 'Stop chasing perfect runs', body: 'A partial win that extracts is better than a perfect route that dies at the end.' },
      { title: 'Respect stamina', body: 'Stamina is your escape budget. Spending it all on offense makes every mistake fatal.' },
      { title: 'Treat sound as information', body: 'Every long fight tells other players where you are and what condition you may be in.' },
    ],
    tables: [{
      title: 'Mistake recovery table',
      headers: ['Mistake', 'Why it hurts', 'Better habit'],
      rows: [
        ['Overstaying', 'Turns profit into risk', 'Leave after one meaningful win'],
        ['Boss tunnel vision', 'Invites third parties', 'Check exits before pull'],
        ['Looting instantly', 'Ignores nearby players', 'Listen and heal first'],
        ['No stamina reserve', 'Kills escape options', 'Save stamina for disengage'],
      ],
    }],
    sections: [
      { heading: 'The real beginner test', body: ['The beginner test is not whether you can win one fight. It is whether you can recognize when the next fight is no longer worth the bag.'] },
      { heading: 'Build better habits early', body: ['Use cheap kits, learn exits, bank small wins, and avoid treating every sound as an invitation. Those habits scale into harder maps and better gear.'] },
    ],
    cards: guideCards,
    relatedSearches: ['Mistfall Hunter beginner mistakes', 'Mistfall Hunter new player tips', 'Mistfall Hunter what to avoid'],
    faqs: [
      { q: 'What is the biggest beginner mistake?', a: 'Overstaying after finding useful loot is usually the most expensive mistake.' },
      { q: 'Should beginners avoid PvP?', a: 'They should avoid unnecessary PvP until they understand exits, stamina, and class limits.' },
    ],
  },
  {
    slug: 'pvp-extraction-tips',
    group: 'guides',
    template: 'guide',
    title: 'Mistfall Hunter PvP Extraction Tips: Win Fights and Leave Alive',
    description: 'Mistfall Hunter PvP extraction tips for third parties, extraction duels, stamina, sound, class pressure, looting safety, and disengage timing.',
    eyebrow: 'PvP guide',
    h1: 'PvP extraction tips',
    lead: 'PvP is not only about winning the fight. It is about surviving the next thirty seconds with the loot still in your bag.',
    intent: {
      primary: 'Mistfall Hunter PvP extraction tips',
      secondary: ['PvP guide', 'extraction duels', 'third party tips'],
      freshness: 'Update after live weapon tuning, class matchups, and extraction-point traffic are verified.',
    },
    checklist: ['Fight from advantage', 'Keep stamina for disengage', 'Do not loot immediately', 'Watch extraction approaches', 'Reset after expensive trades'],
    steps: [
      { title: 'Take unfair fights', body: 'Position, surprise, sound, and numbers matter more than honorable dueling.' },
      { title: 'Win the reset', body: 'After a kill, heal and listen before opening bags or boss rewards.' },
      { title: 'Leave before the crowd arrives', body: 'Long PvP creates a signal that other players can follow.' },
    ],
    tables: [{
      title: 'PvP decision matrix',
      headers: ['Situation', 'Action', 'Reason'],
      rows: [
        ['You hear a long fight', 'Wait or rotate', 'The winner will be weak but alert'],
        ['You win near extraction', 'Heal, listen, leave', 'More players may be arriving'],
        ['You spend all cooldowns', 'Reset', 'A second fight becomes dangerous'],
      ],
    }],
    sections: [
      { heading: 'Third parties are the default', body: ['In extraction games, a fair fight can become a three-team fight without warning. Assume any loud fight is being heard by someone else.'] },
      { heading: 'Extraction-point duels', body: ['Players near extraction are stressed, greedy, and often hurt. Approach slowly, listen first, and do not assume the first target is alone.'] },
    ],
    cards: guideCards,
    relatedSearches: ['Mistfall Hunter PvP tips', 'Mistfall Hunter extraction PvP', 'Mistfall Hunter third party guide'],
    faqs: [
      { q: 'Should I loot immediately after a kill?', a: 'No. Heal, listen, and check approaches before looting.' },
      { q: 'How do I avoid third parties?', a: 'Keep fights short, rotate after loud combat, and avoid overstaying near boss or extraction points.' },
    ],
  },
  {
    slug: 'squad-comps',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Squad Comps: Best Team Roles for Trio Extraction',
    description: 'Mistfall Hunter squad comps guide covering frontline, ranged pressure, burst, support, Seer value, boss safety, and trio extraction roles.',
    eyebrow: 'Team guide',
    h1: 'Squad comps and team roles',
    lead: 'A strong squad is not three damage players moving together. It is a plan for space, pressure, support, and extraction.',
    intent: {
      primary: 'Mistfall Hunter squad comps',
      secondary: ['best team comp', 'trio comp', 'Seer support comp'],
      freshness: 'Update after class balance, live skill values, and group-size rules are confirmed.',
    },
    checklist: ['Bring a frontline or space holder', 'Add ranged or burst pressure', 'Consider Seer for support', 'Assign a looting watcher', 'Share an exit plan before bosses'],
    steps: [
      { title: 'Assign space', body: 'One player should hold angles, block pressure, or create room during extraction and boss fights.' },
      { title: 'Assign damage', body: 'Damage roles should punish overextension without dragging the team into every noise source.' },
      { title: 'Assign recovery', body: 'Support, healing, shields, or control tools help a squad leave after bad trades.' },
    ],
    tables: [{
      title: 'Pre-launch squad templates',
      headers: ['Comp', 'Strength', 'Risk'],
      rows: [
        ['Mercenary + Blackarrow + Seer', 'Stable, safe, strong boss control', 'Lower burst if enemies disengage'],
        ['Shadowstrix + Sorcerer + Mercenary', 'High pick pressure', 'Needs clean communication'],
        ['Withered Knight + Seer + Blackarrow', 'Strong sustained fights', 'Can overcommit in chase scenarios'],
      ],
    }],
    sections: [
      { heading: 'Why roles matter', body: ['Squads win because they can split jobs. One player can watch approaches, one can loot, and one can cover a reset. Solo players cannot do that.'] },
      { heading: 'Best support logic', body: ['Seer becomes much more valuable when teammates protect the support and call for healing or control before a fight collapses.'] },
    ],
    cards: buildCards,
    relatedSearches: ['Mistfall Hunter squad comps', 'Mistfall Hunter best team comp', 'Mistfall Hunter trio guide'],
    faqs: [
      { q: 'What is a good squad comp?', a: 'A safe template is frontline plus ranged pressure plus support.' },
      { q: 'Is Seer required?', a: 'No, but Seer can make bosses and long PvP fights safer in coordinated groups.' },
    ],
  },
  {
    slug: 'affix-priority',
    group: 'guides',
    template: 'build',
    title: 'Mistfall Hunter Affix Priority Guide: What Stats to Keep',
    description: 'Mistfall Hunter affix priority guide explaining build-defining stats, survival, cooldowns, damage, support value, and what gear to keep before launch.',
    eyebrow: 'Affix guide',
    h1: 'Affix priority guide',
    lead: 'Affixes turn gear from random loot into a build. The trick is knowing which stats support the job your class is trying to do.',
    intent: {
      primary: 'Mistfall Hunter affix priority',
      secondary: ['best affixes', 'what gear to keep', 'build stats'],
      freshness: 'Update with exact affix names, ranges, and best-in-slot priorities after launch.',
    },
    checklist: ['Separate role stats from generic stats', 'Keep survival while learning', 'Track cooldown and stamina value', 'Avoid fake best-in-slot before launch', 'Update with live ranges'],
    steps: [
      { title: 'Define the role', body: 'A solo stealth build and a squad support build should not chase the same affixes.' },
      { title: 'Protect the run', body: 'Survival, stamina, recovery, or escape value can be better than raw damage in extraction context.' },
      { title: 'Upgrade carefully', body: 'Bank gear that supports your class plan, even if it is not the highest theoretical value.' },
    ],
    tables: [{
      title: 'Affix priority by role',
      headers: ['Role', 'Priority direction', 'Why'],
      rows: [
        ['Solo', 'Escape, stamina, burst window', 'Controls fight selection'],
        ['Boss', 'Sustained damage, recovery, mitigation', 'Improves long fight safety'],
        ['Support', 'Cooldown, healing, survival', 'Keeps team tools available'],
        ['PvP burst', 'Damage window, mobility, reset', 'Punishes mistakes quickly'],
      ],
    }],
    sections: [
      { heading: 'Pre-launch caution', body: ['Exact affix values are not final in this guide. Use the priority model now, then update the page with real names, ranges, and breakpoints after launch.'] },
      { heading: 'What to keep', body: ['Keep gear that makes your current build safer, faster, or more consistent. In extraction games, a reliable stat can be worth more than a flashy number.'] },
    ],
    cards: buildCards,
    relatedSearches: ['Mistfall Hunter affix priority', 'Mistfall Hunter best affixes', 'Mistfall Hunter gear stats'],
    faqs: [
      { q: 'What affixes are best?', a: 'Before launch, prioritize affixes by role: survival for learning, cooldowns for support, burst for assassins, and sustained value for bosses.' },
      { q: 'Should I keep all rare gear?', a: 'No. Keep rare gear that matches your class plan or gives practical extraction value.' },
    ],
  },
  {
    slug: 'pve-farming-route',
    group: 'database',
    template: 'map',
    title: 'Mistfall Hunter PvE Farming Route: Safe Loot, Resources & Boss Risk',
    description: 'Mistfall Hunter PvE farming route guide for safe loot, resources, Corrupted enemies, boss-adjacent risk, extraction timing, and repeatable runs.',
    eyebrow: 'PvE route',
    h1: 'PvE farming route',
    lead: 'A good PvE farming route is not the route with the most enemies. It is the route with the best ratio of value, sound, supplies, and exit access.',
    intent: {
      primary: 'Mistfall Hunter PvE farming route',
      secondary: ['safe farming route', 'resource route', 'PvE loot route'],
      freshness: 'Update with live resource locations, enemy density, and farming loops after launch.',
    },
    checklist: ['Avoid unnecessary packs', 'Track resource nodes', 'Keep exit distance short', 'Skip boss routes on low supplies', 'Bank repeatable value'],
    steps: [
      { title: 'Choose low-noise value', body: 'Resource routes should avoid loud fights that pull other players.' },
      { title: 'Clear only blockers', body: 'Fight enemies that block exits, routes, or objectives; skip enemies that only waste time.' },
      { title: 'Repeat safely', body: 'A reliable route can fund harder boss or PvP attempts later.' },
    ],
    tables: [{
      title: 'PvE farming route signals',
      headers: ['Signal', 'Good', 'Bad'],
      rows: [
        ['Enemy density', 'Controllable and skippable', 'Constant forced fights'],
        ['Loot type', 'Useful resources and upgrades', 'Low-value clutter'],
        ['Exit access', 'Short and known', 'Long and contested'],
      ],
    }],
    sections: [
      { heading: 'Why PvE routes matter', body: ['Not every run needs a boss or PvP fight. Safe PvE routes help new players build storage, learn map flow, and reduce the cost of experimenting with classes.'] },
      { heading: 'Boss-adjacent risk', body: ['Loot near bosses may be better, but it also sits near louder fights and more player traffic. Treat it as a separate route tier.'] },
    ],
    cards: guideCards,
    relatedSearches: ['Mistfall Hunter PvE farming route', 'Mistfall Hunter resource route', 'Mistfall Hunter safe farming'],
    faqs: [
      { q: 'What is the best farming route?', a: 'The best route is repeatable, close to extraction, and does not require long loud fights.' },
      { q: 'Should farming routes include bosses?', a: 'Only when supplies, exit access, and player traffic make the boss worth the risk.' },
    ],
  },
  {
    slug: 'controller-settings',
    group: 'tools',
    template: 'tool',
    title: 'Mistfall Hunter Controller Settings: Aim, Sensitivity & Combat Setup',
    description: 'Mistfall Hunter controller settings guide covering Xbox, PS5, PC gamepad setup, sensitivity, aim assist, melee blocking, ranged aiming, and comfort settings.',
    eyebrow: 'Controller settings',
    h1: 'Controller settings',
    lead: 'Controller comfort matters because extraction combat punishes late dodges, missed blocks, and panic camera movement.',
    intent: {
      primary: 'Mistfall Hunter controller settings',
      secondary: ['best controller settings', 'Xbox controller', 'PS5 controller'],
      freshness: 'Update after launch with exact in-game menu names, aim assist options, and recommended ranges.',
    },
    checklist: ['Tune camera sensitivity first', 'Test aim sensitivity on ranged classes', 'Check vibration comfort', 'Remap panic inputs if possible', 'Prefer performance mode on console'],
    steps: [
      { title: 'Set camera comfort', body: 'Your camera should turn fast enough for PvP but not so fast that melee spacing becomes sloppy.' },
      { title: 'Test class needs', body: 'Mercenary cares about block and dodge comfort; Blackarrow cares about aim and tracking.' },
      { title: 'Adjust after fights', body: 'Change one setting at a time after real combat instead of guessing from menus.' },
    ],
    tables: [{
      title: 'Controller tuning priorities',
      headers: ['Class style', 'Setting focus', 'Reason'],
      rows: [
        ['Melee', 'Camera, dodge, block inputs', 'Timing and spacing'],
        ['Ranged', 'Aim sensitivity, assist options', 'Tracking and precision'],
        ['Support', 'Targeting, quick access inputs', 'Emergency reaction speed'],
      ],
    }],
    sections: [
      { heading: 'Pre-launch note', body: ['Exact setting names and ranges should be verified in the launch build. This page provides the tuning order so players know what to test first.'] },
      { heading: 'Console priority', body: ['If console versions offer performance and quality modes, extraction players should usually start with smoother frame pacing before visual extras.'] },
    ],
    cards: platformCards,
    relatedSearches: ['Mistfall Hunter controller settings', 'Mistfall Hunter best controller settings', 'Mistfall Hunter PS5 controller'],
    faqs: [
      { q: 'Can you play Mistfall Hunter with a controller?', a: 'Console versions make controller support expected, and PC players should check gamepad options at launch.' },
      { q: 'What setting should I change first?', a: 'Start with camera sensitivity, then tune aim sensitivity for ranged classes.' },
    ],
  },
  {
    slug: 'game-pass-pc',
    group: 'news',
    template: 'faq',
    title: 'Mistfall Hunter PC Game Pass Guide: Install, Access & Launch Prep',
    description: 'Mistfall Hunter PC Game Pass guide covering Xbox app access, install prep, Game Pass availability, preload watch, settings, and launch-day checklist.',
    eyebrow: 'PC Game Pass',
    h1: 'PC Game Pass guide',
    lead: 'PC Game Pass can be the easiest way to try Mistfall Hunter at launch, but players should still prepare installs, settings, and account access early.',
    intent: {
      primary: 'Mistfall Hunter PC Game Pass',
      secondary: ['Game Pass PC install', 'Xbox app', 'Game Pass launch'],
      freshness: 'Update when the Xbox app page confirms preload, install button, file size, and exact subscription requirements.',
    },
    checklist: ['Check Xbox app listing', 'Confirm subscription access', 'Free SSD space', 'Update GPU drivers', 'Read beginner guide before first run'],
    steps: [
      { title: 'Confirm access', body: 'Check whether the game appears in your PC Game Pass or Game Pass Ultimate library near launch.' },
      { title: 'Prepare the install', body: 'Keep SSD space ready and watch for preload or install timing in the Xbox app.' },
      { title: 'Tune before queueing', body: 'Run through performance settings before entering serious extraction lobbies.' },
    ],
    tables: [{
      title: 'PC Game Pass launch checklist',
      headers: ['Item', 'Why', 'When'],
      rows: [
        ['Subscription', 'Required for access', 'Before launch'],
        ['Xbox app install', 'Main PC Game Pass path', 'When preload opens'],
        ['Performance settings', 'Protects first serious run', 'Before first match'],
      ],
    }],
    sections: [
      { heading: 'Why PC Game Pass matters', body: ['A day-one subscription path can bring a large launch audience. That also means early lobbies may be crowded with new players learning routes at the same time.'] },
      { heading: 'What still needs confirmation', body: ['Preload timing, file size, exact subscription labels, and launch-region behavior should be checked close to release.'] },
    ],
    cards: platformCards,
    relatedSearches: ['Mistfall Hunter PC Game Pass', 'Mistfall Hunter Xbox app', 'Mistfall Hunter Game Pass install'],
    faqs: [
      { q: 'Is Mistfall Hunter on PC Game Pass?', a: 'It is listed for Game Pass access, but players should confirm exact PC availability in the Xbox app near launch.' },
      { q: 'Can I preload through the Xbox app?', a: 'Preload timing needs storefront confirmation close to launch.' },
    ],
  },
  {
    slug: 'ps5-performance',
    group: 'news',
    template: 'tool',
    title: 'Mistfall Hunter PS5 Performance: FPS Modes, Controller & Launch Settings',
    description: 'Mistfall Hunter PS5 performance guide covering FPS modes, controller setup, online access, launch settings, stutter watch, and console patch notes.',
    eyebrow: 'PS5 performance',
    h1: 'PS5 performance guide',
    lead: 'Console players should watch performance modes, frame pacing, and controller feel before committing expensive gear to launch-week runs.',
    intent: {
      primary: 'Mistfall Hunter PS5 performance',
      secondary: ['PS5 FPS mode', 'PS5 settings', 'console performance'],
      freshness: 'Update after PS5 store details, file size, performance mode labels, and launch patch notes are confirmed.',
    },
    checklist: ['Check performance mode first', 'Tune controller sensitivity', 'Watch launch patch notes', 'Confirm online requirements', 'Avoid high-risk runs until stable'],
    steps: [
      { title: 'Pick frame stability', body: 'Extraction combat usually benefits more from smooth frame pacing than extra visual detail.' },
      { title: 'Tune controller comfort', body: 'Adjust camera and aim before entering PvP-heavy routes.' },
      { title: 'Test cheap kits', body: 'Use low-risk runs to test performance and input feel before bringing valuable gear.' },
    ],
    tables: [{
      title: 'PS5 launch checks',
      headers: ['Check', 'Why it matters', 'Action'],
      rows: [
        ['Performance mode', 'Frame stability affects combat timing', 'Prefer smoother mode first'],
        ['Controller sensitivity', 'Impacts ranged and melee response', 'Tune before PvP'],
        ['Patch notes', 'May fix crashes or stutter', 'Review before launch runs'],
      ],
    }],
    sections: [
      { heading: 'What to expect', body: ['PS5 is part of the announced platform set, but exact performance mode labels and launch behavior should be confirmed through store pages and patch notes.'] },
      { heading: 'First-day advice', body: ['Avoid risking your best gear until you know whether the launch build is stable on your console and preferred settings.'] },
    ],
    cards: platformCards,
    relatedSearches: ['Mistfall Hunter PS5 performance', 'Mistfall Hunter PS5 FPS', 'Mistfall Hunter PS5 settings'],
    faqs: [
      { q: 'Will Mistfall Hunter have a PS5 performance mode?', a: 'Performance mode labels need launch confirmation; if available, start with the smoother option.' },
      { q: 'Should PS5 players use controller defaults?', a: 'Defaults are fine for testing, but ranged classes should tune camera and aim sensitivity.' },
    ],
  },
  {
    slug: 'steam-deck',
    group: 'tools',
    template: 'tool',
    title: 'Mistfall Hunter Steam Deck: Compatibility, Settings & What to Check',
    description: 'Mistfall Hunter Steam Deck compatibility tracker covering verification status, controller layout, performance expectations, online play, and settings to check.',
    eyebrow: 'Steam Deck tracker',
    h1: 'Steam Deck compatibility tracker',
    lead: 'Steam Deck support should be treated as unconfirmed until Valve/storefront compatibility and live performance are verified.',
    intent: {
      primary: 'Mistfall Hunter Steam Deck',
      secondary: ['Steam Deck compatibility', 'Steam Deck settings', 'handheld performance'],
      freshness: 'Update after Steam Deck verification, Proton behavior, anti-cheat compatibility, and live performance testing are available.',
    },
    checklist: ['Check Steam Deck verification status', 'Watch anti-cheat compatibility', 'Test controller layout', 'Lower heavy visual settings', 'Avoid assuming stable PvP performance before launch'],
    steps: [
      { title: 'Verify compatibility', body: 'Do not assume Steam Deck support until the store or live testing confirms it.' },
      { title: 'Test performance cheaply', body: 'If it launches, use low-risk routes to test frame pacing before serious runs.' },
      { title: 'Tune controls', body: 'Controller layout, camera sensitivity, and aim comfort matter more on handheld screens.' },
    ],
    tables: [{
      title: 'Steam Deck watchlist',
      headers: ['Item', 'Status now', 'Why'],
      rows: [
        ['Verification', 'To confirm', 'Determines expected compatibility'],
        ['Anti-cheat', 'To confirm', 'Can affect online launch'],
        ['Frame pacing', 'To test', 'Critical for PvP and dodging'],
      ],
    }],
    sections: [
      { heading: 'Why this page exists', body: ['Steam Deck queries appear quickly for PC action games, but compatibility can depend on performance, input support, and online systems. This page is a tracker, not a promise.'] },
      { heading: 'Settings to test first', body: ['If the game runs, lower shadows, view distance, effects, and fog before reducing readability. Use a frame cap if it improves consistency.'] },
    ],
    cards: platformCards,
    relatedSearches: ['Mistfall Hunter Steam Deck', 'Mistfall Hunter Steam Deck compatibility', 'Mistfall Hunter handheld settings'],
    faqs: [
      { q: 'Is Mistfall Hunter Steam Deck verified?', a: 'Steam Deck verification should be checked near launch; this page treats it as unconfirmed until then.' },
      { q: 'Will online play work on Steam Deck?', a: 'That depends on final compatibility, Proton behavior, and any anti-cheat requirements.' },
    ],
  },
  {
    slug: 'server-status',
    group: 'tools',
    template: 'faq',
    title: 'Mistfall Hunter Server Status, Maintenance & Connection Issues',
    description: 'Mistfall Hunter server status tracker covering launch maintenance, connection errors, queue issues, disconnects, region problems, and where to check updates.',
    eyebrow: 'Server tracker',
    h1: 'Server status and connection issues',
    lead: 'Launch-week extraction games can be chaotic. A server-status page gives players a clean place to check what is known before blaming their build or settings.',
    intent: {
      primary: 'Mistfall Hunter server status',
      secondary: ['servers down', 'maintenance', 'connection errors'],
      freshness: 'Update when official server status channels, maintenance notices, and launch issues are published.',
    },
    checklist: ['Check official channels first', 'Confirm platform service status', 'Avoid repeated risky reconnect attempts', 'Record error messages', 'Separate server problems from PC performance issues'],
    steps: [
      { title: 'Check official notes', body: 'Maintenance and outage messages should come before local troubleshooting.' },
      { title: 'Check platform status', body: 'Steam, Xbox, PlayStation, and Game Pass access can fail separately from game servers.' },
      { title: 'Troubleshoot locally last', body: 'Restart, verify files, and check network only after broader outages are ruled out.' },
    ],
    tables: [{
      title: 'Connection issue triage',
      headers: ['Symptom', 'Likely area', 'First check'],
      rows: [
        ['Login queue', 'Server load', 'Official updates'],
        ['Store install issue', 'Platform service', 'Steam/Xbox/PSN status'],
        ['Crash during run', 'Client stability', 'Performance page'],
        ['Disconnects only on one network', 'Local network', 'Router and firewall'],
      ],
    }],
    sections: [
      { heading: 'Pre-launch status', body: ['Official server-status channels may not be fully active before launch. This page should be updated once Bellring or platform stores publish maintenance information.'] },
      { heading: 'Why connection pages rank', body: ['During launch windows, players search server and error terms rapidly. A clean tracker helps them find practical next steps and keeps those queries inside the site.'] },
    ],
    cards: platformCards,
    relatedSearches: ['Mistfall Hunter server status', 'Mistfall Hunter servers down', 'Mistfall Hunter connection error'],
    faqs: [
      { q: 'Are Mistfall Hunter servers down?', a: 'Check official channels and platform status first; this page should be updated with known incidents after launch.' },
      { q: 'Is a disconnect a performance issue?', a: 'Not always. Disconnects may be server, platform, network, or client stability problems.' },
    ],
  },
];

const zhCopy: Record<string, { title: string; description: string; eyebrow: string; h1: string; lead: string }> = {
  'extraction-route-planner': { title: 'Mistfall Hunter 撤离路线规划器：安全路线、出口与战利品', description: 'Mistfall Hunter 撤离路线规划，覆盖安全跑图、出口时机、Soul of Return、战利品优先级、Boss 风险和劝架规避。', eyebrow: '路线规划', h1: '撤离路线规划器', lead: '好的路线不是随机逛图，而是带着目标进入、先确认出口、拿到一次有效收益，然后及时撤离。' },
  'solo-extraction-routes': { title: 'Mistfall Hunter 单人撤离路线：独狼玩家安全跑图指南', description: 'Mistfall Hunter 单人撤离路线攻略，覆盖安全路径、潜行移动、低风险战利品、Soul of Return 时机和撤离判断。', eyebrow: '单人路线', h1: '单人撤离路线', lead: '单人路线应该安静、短、并诚实面对风险。你的优势是选择权，而不是硬拼。' },
  'best-solo-class': { title: 'Mistfall Hunter 最佳单人职业：Shadowstrix、Blackarrow、Mercenary 对比', description: 'Mistfall Hunter 最佳单人职业攻略，对比 Shadowstrix、Blackarrow、Mercenary、Sorcerer、Seer 和 Withered Knight。', eyebrow: '单人职业', h1: '最佳单人职业', lead: '最好的单人职业，是能让你选择战斗、重置坏接触，并带着收益离开的职业。' },
  'beginner-mistakes': { title: 'Mistfall Hunter 新手常见错误：开局不要这样玩', description: 'Mistfall Hunter 新手错误指南，覆盖贪心、撤离过晚、耐力失误、Boss 上头、噪音战斗和战利品取舍。', eyebrow: '新手指南', h1: '新手常见错误', lead: '多数新手死亡不是因为某一个怪太强，而是小错误一路叠加，最后失去撤离机会。' },
  'pvp-extraction-tips': { title: 'Mistfall Hunter PvP 撤离技巧：赢下战斗并活着离开', description: 'Mistfall Hunter PvP 撤离技巧，覆盖劝架、撤离点决斗、耐力、声音、职业压制、舔包安全和脱战时机。', eyebrow: 'PvP 攻略', h1: 'PvP 撤离技巧', lead: 'PvP 不只是赢下眼前战斗，而是赢完后还能带着战利品活过接下来的三十秒。' },
  'squad-comps': { title: 'Mistfall Hunter 小队阵容：三人队职业分工与组合', description: 'Mistfall Hunter 小队阵容攻略，覆盖前排、远程压制、爆发、支援、Seer 价值、Boss 安全和三人撤离分工。', eyebrow: '小队攻略', h1: '小队阵容与分工', lead: '强的小队不是三个输出一起走，而是有空间、压制、支援和撤离计划。' },
  'affix-priority': { title: 'Mistfall Hunter 词缀优先级：哪些属性值得保留', description: 'Mistfall Hunter 词缀优先级指南，解释构筑关键属性、生存、冷却、伤害、支援价值和发售前装备保留原则。', eyebrow: '词缀指南', h1: '词缀优先级', lead: '词缀会把随机装备变成真正的构筑，关键是知道哪些属性服务于你的职业定位。' },
  'pve-farming-route': { title: 'Mistfall Hunter PvE 刷资源路线：安全战利品、资源与 Boss 风险', description: 'Mistfall Hunter PvE 刷资源路线，覆盖安全战利品、资源、腐化敌人、Boss 周边风险、撤离时机和可重复路线。', eyebrow: 'PvE 路线', h1: 'PvE 刷资源路线', lead: '好的 PvE 路线不是怪最多的路线，而是收益、噪音、补给和出口距离比例最好的路线。' },
  'controller-settings': { title: 'Mistfall Hunter 手柄设置：瞄准、灵敏度与战斗按键', description: 'Mistfall Hunter 手柄设置指南，覆盖 Xbox、PS5、PC 手柄、灵敏度、辅助瞄准、近战格挡、远程瞄准和舒适设置。', eyebrow: '手柄设置', h1: '手柄设置', lead: '手柄舒适度会影响闪避、格挡、瞄准和镜头控制，撤离战斗里这些都可能决定生死。' },
  'game-pass-pc': { title: 'Mistfall Hunter PC Game Pass 指南：安装、访问与发售准备', description: 'Mistfall Hunter PC Game Pass 指南，覆盖 Xbox App 访问、安装准备、订阅状态、预载观察、设置和发售日清单。', eyebrow: 'PC Game Pass', h1: 'PC Game Pass 指南', lead: 'PC Game Pass 可能是发售日尝试 Mistfall Hunter 的便捷入口，但仍需要提前准备安装、设置和账号访问。' },
  'ps5-performance': { title: 'Mistfall Hunter PS5 性能指南：帧率模式、手柄与发售设置', description: 'Mistfall Hunter PS5 性能指南，覆盖帧率模式、手柄设置、在线要求、发售设置、卡顿观察和主机补丁。', eyebrow: 'PS5 性能', h1: 'PS5 性能指南', lead: '主机玩家在投入高价值装备前，应该先确认性能模式、帧时间和手柄手感。' },
  'steam-deck': { title: 'Mistfall Hunter Steam Deck：兼容性、设置与待确认事项', description: 'Mistfall Hunter Steam Deck 兼容性追踪，覆盖验证状态、手柄布局、性能预期、在线游玩和需要检查的设置。', eyebrow: 'Steam Deck', h1: 'Steam Deck 兼容性追踪', lead: 'Steam Deck 支持应视为待确认，直到商店兼容性和实测性能明确。' },
  'server-status': { title: 'Mistfall Hunter 服务器状态、维护与连接问题', description: 'Mistfall Hunter 服务器状态追踪，覆盖发售维护、连接错误、排队、掉线、地区问题和更新查看位置。', eyebrow: '服务器追踪', h1: '服务器状态与连接问题', lead: '发售周的撤离游戏往往很混乱，服务器状态页能帮助玩家先确认问题来源，再排查本地设置。' },
};

function localizedCards(cards?: SeoPage['cards']) {
  return cards?.map((card) => ({
    ...card,
    href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}`,
  }));
}

// Real, hand-translated content for the slugs that are currently INDEXABLE
// (see INDEXABLE_SLUGS in seoPages.ts). These are live-eligible pages, so
// unlike the rest of this file's generic placeholder derivation, they get a
// full Chinese translation of the actual checklist/steps/table/FAQ content
// instead of boilerplate meta-commentary about the page itself.
const zhRealContent: Record<
  string,
  {
    sections: SeoPage['sections'];
    checklist?: string[];
    steps?: SeoPage['steps'];
    tables?: SeoPage['tables'];
    faqs?: SeoPage['faqs'];
  }
> = {
  'controller-settings': {
    sections: [
      { heading: '发售前说明', body: ['具体设置项名称和数值范围要等正式版才能核实。这个页面先给出调试顺序，方便你知道该先测什么。'] },
      { heading: '主机优先级', body: ['如果主机版提供性能模式和画质模式，撤离玩法通常应该优先选更流畅的帧率，而不是画面细节。'] },
    ],
    checklist: ['先调摄像机灵敏度', '给远程职业测试瞄准灵敏度', '检查震动是否舒适', '尽量重新映射紧急按键', '主机优先选性能模式'],
    steps: [
      { title: '调整摄像机手感', body: '摄像机转动要够快以应对 PvP，但也不能快到近战走位变得凌乱。' },
      { title: '按职业测试需求', body: 'Mercenary 更看重格挡和闪避手感；Blackarrow 更看重瞄准和跟枪。' },
      { title: '实战后再微调', body: '打完真实战斗后一次只改一项设置，而不是对着菜单瞎猜。' },
    ],
    tables: [{
      title: '手柄调试优先级',
      headers: ['职业风格', '设置重点', '原因'],
      rows: [
        ['近战', '摄像机、闪避、格挡输入', '时机与走位'],
        ['远程', '瞄准灵敏度、辅助瞄准选项', '跟枪与精度'],
        ['辅助', '索敌、快捷输入', '紧急反应速度'],
      ],
    }],
    faqs: [
      { q: 'Mistfall Hunter 能用手柄玩吗？', a: '主机版本默认支持手柄，PC 玩家发售时也应检查手柄选项。' },
      { q: '应该先改哪个设置？', a: '先调摄像机灵敏度，再给远程职业调瞄准灵敏度。' },
    ],
  },
  'game-pass-pc': {
    sections: [
      { heading: '为什么 PC Game Pass 值得关注', body: ['首发订阅入口可能带来大量新玩家，这也意味着早期房间里会有很多同样在摸索路线的新人。'] },
      { heading: '还需要确认的信息', body: ['预载时间、安装包大小、具体订阅名称和各地区上线表现，都建议临近发售时再次核实。'] },
    ],
    checklist: ['查看 Xbox App 上架信息', '确认订阅可访问', '预留 SSD 空间', '更新显卡驱动', '开局前先看新手指南'],
    steps: [
      { title: '确认可访问性', body: '临近发售时检查游戏是否出现在你的 PC Game Pass 或 Game Pass Ultimate 库里。' },
      { title: '准备安装', body: '预留好 SSD 空间，留意 Xbox App 里的预载或安装时间。' },
      { title: '排队前先调设置', body: '在进入正式撤离对局前，先过一遍性能设置。' },
    ],
    tables: [{
      title: 'PC Game Pass 发售清单',
      headers: ['项目', '原因', '时机'],
      rows: [
        ['订阅', '访问游戏的前提', '发售前'],
        ['安装 Xbox App', 'PC Game Pass 主要入口', '预载开放时'],
        ['性能设置', '保护你的第一局正式对局', '首局前'],
      ],
    }],
    faqs: [
      { q: 'Mistfall Hunter 在 PC Game Pass 上吗？', a: '官方信息显示会支持 Game Pass 访问，但具体 PC 可用性建议临近发售时在 Xbox App 里确认。' },
      { q: '能通过 Xbox App 预载吗？', a: '预载时间仍需临近发售时由商店确认。' },
    ],
  },
  'ps5-performance': {
    sections: [
      { heading: '预期情况', body: ['PS5 属于已公布的平台之一，但具体性能模式名称和发售表现，建议以商店页面和补丁说明为准再确认。'] },
      { heading: '第一天建议', body: ['在确认发售版本在你的主机和设置下运行稳定之前，先别把最好的装备拿去冒险。'] },
    ],
    checklist: ['先确认性能模式', '调整手柄灵敏度', '关注发售补丁说明', '确认联机条件', '稳定前先别打高风险局'],
    steps: [
      { title: '优先选帧率稳定', body: '撤离战斗通常更依赖流畅的帧节奏，而不是额外的画面细节。' },
      { title: '调整手柄手感', body: '在进入 PvP 密集路线前先调好摄像机和瞄准。' },
      { title: '先用低价值配装测试', body: '带贵重装备之前，先用低风险的局测试性能和手感。' },
    ],
    tables: [{
      title: 'PS5 发售检查项',
      headers: ['检查项', '为什么重要', '建议动作'],
      rows: [
        ['性能模式', '帧率稳定性影响战斗时机', '优先选更流畅的模式'],
        ['手柄灵敏度', '影响远程和近战的反应', 'PvP 前先调好'],
        ['补丁说明', '可能修复崩溃或卡顿', '开局前先看一遍'],
      ],
    }],
    faqs: [
      { q: 'Mistfall Hunter 会有 PS5 性能模式吗？', a: '具体性能模式名称需要发售时确认；如果有，建议优先选更流畅的选项。' },
      { q: 'PS5 玩家该用默认手柄设置吗？', a: '测试阶段用默认设置没问题，但远程职业建议调整摄像机和瞄准灵敏度。' },
    ],
  },
  'steam-deck': {
    sections: [
      { heading: '为什么做这个页面', body: ['PC 动作游戏很快就会有 Steam Deck 相关搜索，但兼容性取决于性能、输入支持和联机系统。这个页面是追踪器，不是承诺。'] },
      { heading: '建议先测试的设置', body: ['如果游戏能运行，建议先降低阴影、视距、特效和雾效，而不是先牺牲可读性；如果能提升稳定性，可以加个帧数上限。'] },
    ],
    checklist: ['查看 Steam Deck 验证状态', '关注反作弊兼容性', '测试手柄按键布局', '先降低较重的画质设置', '发售前不要假设 PvP 表现稳定'],
    steps: [
      { title: '先确认兼容性', body: '在商店或实测确认之前，不要假设 Steam Deck 一定支持。' },
      { title: '低成本测试性能', body: '如果能运行，先用低风险路线测试帧节奏，再考虑正式对局。' },
      { title: '调整操作方式', body: '在掌机小屏幕上，按键布局、摄像机灵敏度和瞄准手感更加重要。' },
    ],
    tables: [{
      title: 'Steam Deck 观察清单',
      headers: ['项目', '当前状态', '原因'],
      rows: [
        ['官方验证', '待确认', '决定预期兼容程度'],
        ['反作弊', '待确认', '可能影响联机功能'],
        ['帧节奏', '待测试', '对 PvP 和闪避至关重要'],
      ],
    }],
    faqs: [
      { q: 'Mistfall Hunter 有 Steam Deck 官方认证吗？', a: '建议临近发售时查看认证状态；本页在此之前按未确认处理。' },
      { q: 'Steam Deck 上能联机吗？', a: '取决于最终兼容性、Proton 表现和反作弊要求。' },
    ],
  },
  'server-status': {
    sections: [
      { heading: '发售前状态', body: ['官方服务器状态渠道在发售前可能还没完全启用。等 Bellring 或各平台商店公布维护信息后，这个页面会同步更新。'] },
      { heading: '为什么这类页面有搜索价值', body: ['发售期间玩家会密集搜索服务器和报错相关的词。一个整洁的追踪页能帮他们找到实际可行的下一步，也能把这些搜索留在站内。'] },
    ],
    checklist: ['先查看官方渠道', '确认平台服务状态', '别反复尝试有风险的重连', '记录具体报错信息', '把服务器问题和 PC 性能问题分开看'],
    steps: [
      { title: '先看官方说明', body: '维护和故障公告应该排在本地排查之前。' },
      { title: '检查平台状态', body: 'Steam、Xbox、PlayStation 和 Game Pass 的访问问题可能和游戏服务器本身无关。' },
      { title: '最后再本地排查', body: '先排除大范围故障，再重启、校验文件、检查网络。' },
    ],
    tables: [{
      title: '连接问题排查',
      headers: ['症状', '可能原因', '优先检查'],
      rows: [
        ['登录排队', '服务器负载', '官方更新'],
        ['商店安装问题', '平台服务', 'Steam/Xbox/PSN 状态'],
        ['对局中崩溃', '客户端稳定性', '性能页面'],
        ['只有一个网络掉线', '本地网络', '路由器与防火墙'],
      ],
    }],
    faqs: [
      { q: 'Mistfall Hunter 服务器是不是宕机了？', a: '先查看官方渠道和平台状态；发售后这个页面会同步已知故障信息。' },
      { q: '掉线一定是性能问题吗？', a: '不一定。掉线可能来自服务器、平台、网络或客户端稳定性等多个环节。' },
    ],
  },
};

export const zhLongTailPages: SeoPage[] = enLongTailPages.map((page) => {
  const copy = zhCopy[page.slug];
  const real = zhRealContent[page.slug];
  if (real) {
    return {
      ...page,
      ...copy,
      cards: localizedCards(page.cards),
      sections: real.sections,
      intent: {
        primary: copy.h1,
        secondary: page.intent?.secondary ?? ['攻略', '路线', '设置'],
        freshness: '正式版上线后用实测数据、截图和补丁信息更新。',
      },
      checklist: real.checklist ?? page.checklist,
      steps: real.steps ?? page.steps,
      tables: real.tables ?? page.tables,
      relatedSearches: [`${copy.h1} 攻略`, `${copy.h1} 设置`, `${copy.h1} 路线`],
      faqs: real.faqs ?? page.faqs,
    };
  }
  return {
    ...page,
    ...copy,
    cards: localizedCards(page.cards),
    sections: [
      { heading: '页面目标', body: [copy.lead] },
      { heading: '内容策略', body: ['这个长尾页用于承接明确搜索意图，并通过清单、步骤、表格、FAQ 和相关页面链接避免薄内容。正式版上线后，应补充实测路线、数值、截图或掉落。'] },
      { heading: '更新重点', body: ['当前以发售前规划和预览信息为主；上线后需要用实测内容替换待确认项。'], bullets: ['补充实测截图', '验证数值和菜单名称', '更新地图点位', '加入玩家常见问题'] },
    ],
    intent: {
      primary: copy.h1,
      secondary: page.intent?.secondary ?? ['攻略', '路线', '设置'],
      freshness: '正式版上线后用实测数据、截图和补丁信息更新。',
    },
    checklist: page.checklist,
    steps: page.steps,
    tables: page.tables,
    relatedSearches: [`${copy.h1} 攻略`, `${copy.h1} 设置`, `${copy.h1} 路线`],
    faqs: [
      { q: '这个页面现在适合收录吗？', a: '适合。页面有独立标题、描述、正文、清单、表格、FAQ 和内部链接，并明确标注待上线后验证的内容。' },
      { q: '正式版上线后还会更新吗？', a: '会。地图、数值、掉落、设置名称和职业强度都需要根据实测内容更新。' },
    ],
  };
});

export const enLongTailLinks: PriorityLink[] = enLongTailPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhLongTailLinks: PriorityLink[] = zhLongTailPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
