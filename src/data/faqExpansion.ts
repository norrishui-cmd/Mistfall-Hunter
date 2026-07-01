import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

const globalFaqEn = [
  { q: 'When does Mistfall Hunter launch?', a: 'Current public listings point to a late July 2026 launch, with this site using July 30, 2026 at 01:00 UTC as the main launch anchor until storefronts settle every regional date.' },
  { q: 'What platforms is Mistfall Hunter on?', a: 'Mistfall Hunter is planned for PC, PlayStation 5, and Xbox Series X|S. PC access is expected through Steam and the Xbox app / Microsoft Store.' },
  { q: 'Is Mistfall Hunter on Game Pass?', a: 'Yes. Xbox coverage and store messaging list Mistfall Hunter for Xbox Game Pass and Xbox Play Anywhere, so Xbox and PC subscription access is one of the main launch paths.' },
  { q: 'Is Mistfall Hunter PvP or PvE?', a: 'It is PvPvE: you fight AI monsters and bosses while also sharing the map with rival players or teams who can contest your loot and extraction.' },
  { q: 'Can you play Mistfall Hunter solo?', a: 'Yes. Solo play is supported, but the game also supports grouped play. Solo players should prioritize extraction timing, stealth, and lower-risk routes.' },
  { q: 'What happens if you die?', a: 'Mistfall Hunter follows extraction rules: dying before extraction means losing the gear and loot you were carrying in that run.' },
  { q: 'How do you extract?', a: 'Preview coverage describes a shrine and bell creature style loop: activate or locate the extraction objective, hunt the bell creature / Returner target, then use the opened path to leave with loot.' },
  { q: 'What maps are known?', a: 'Preview builds mention Hallowgrove and Brandrgarde, including chaos variants. This site keeps map pages flexible so confirmed live-game zones can be added after launch.' },
  { q: 'What classes are known?', a: 'Known classes include Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer, and Withered Knight, each leaning into a different combat role.' },
  { q: 'Does beta progress carry over?', a: 'Treat the demo and beta as test progress unless the developer explicitly says otherwise. This site currently assumes progression wipes, while cosmetic participation rewards may be handled separately.' },
];

const globalFaqZh = [
  { q: 'Mistfall Hunter 什么时候发售？', a: '目前公开信息指向 2026 年 7 月下旬发售，本站暂以 2026 年 7 月 30 日 01:00 UTC 作为主要时间锚点，直到各地区商店日期完全统一。' },
  { q: 'Mistfall Hunter 有哪些平台？', a: '计划登陆 PC、PlayStation 5 和 Xbox Series X|S。PC 预计可通过 Steam 与 Xbox App / Microsoft Store 游玩。' },
  { q: 'Mistfall Hunter 会进 Game Pass 吗？', a: '会。Xbox 相关报道和商店信息显示它与 Xbox Game Pass、Xbox Play Anywhere 相关，因此订阅游玩是发售时的重要入口。' },
  { q: 'Mistfall Hunter 是 PvP 还是 PvE？', a: '它是 PvPvE：地图里既有 AI 怪物和 Boss，也有会争夺战利品与撤离机会的敌对玩家或小队。' },
  { q: '可以单人玩吗？', a: '可以。游戏支持单人，也支持组队。单人玩家更需要重视撤离时机、潜行和低风险路线。' },
  { q: '死亡会发生什么？', a: '它遵循撤离游戏规则：如果你在成功撤离前死亡，会失去本局携带和搜刮到的装备与战利品。' },
  { q: '怎么撤离？', a: '试玩报道描述了类似 shrine 与 bell creature 的撤离循环：触发或寻找撤离目标，猎杀铃铛生物 / Returner 目标，再通过开启的路径离开。' },
  { q: '已知有哪些地图？', a: '试玩版本提到 Hallowgrove 与 Brandrgarde，并有 chaos 变体。本站地图页会等正式版确认后继续补充。' },
  { q: '已知有哪些职业？', a: '已知职业包括 Mercenary、Sorcerer、Blackarrow、Shadowstrix、Seer 和 Withered Knight，每个职业对应不同战斗定位。' },
  { q: '测试进度会继承吗？', a: '除非开发商明确说明，否则应把 demo / beta 当作测试进度。本站目前按进度删档处理，外观类参与奖励单独观察。' },
];

export const enFaqPages: SeoPage[] = [
  {
    slug: 'faq',
    group: 'about',
    title: 'Mistfall Hunter FAQ: Release, Platforms, Game Pass, Classes & Extraction',
    description: 'Mistfall Hunter FAQ covering release date, platforms, Game Pass, PvPvE, solo play, death penalty, extraction, maps, classes, beta progress, and price.',
    eyebrow: 'FAQ',
    h1: 'Mistfall Hunter FAQ',
    lead: 'Fast answers to the questions players search before launch, built from official store signals and high-signal preview coverage.',
    sections: [
      { heading: 'How to use this FAQ', body: ['This page answers broad launch questions first, then links into deeper guides for release, platforms, classes, extraction, performance, maps, and builds. Pre-launch details are marked carefully when they still need final confirmation.'] },
    ],
    cards: [
      { title: 'Release date', desc: 'Launch date, time zones, platforms, and pricing status.', href: '/release-date' },
      { title: 'Platforms', desc: 'Steam, Xbox, PS5, Game Pass, and crossplay tracking.', href: '/platforms' },
      { title: 'Beginner guide', desc: 'How the extraction loop works before your first run.', href: '/beginner-guide' },
    ],
    faqs: globalFaqEn,
  },
  {
    slug: 'crossplay',
    group: 'news',
    title: 'Mistfall Hunter Crossplay & Cross-Progression: What Is Confirmed?',
    description: 'Mistfall Hunter crossplay and cross-progression tracker for PC, Steam, Xbox, Game Pass, and PS5 players.',
    eyebrow: 'Crossplay tracker',
    h1: 'Mistfall Hunter crossplay',
    lead: 'Crossplay matters for an extraction game, but it should be treated as a launch-watch item until final rules are published.',
    updated: 'Pre-launch tracker: exact crossplay and cross-progression rules still need final confirmation.',
    sections: [
      { heading: 'What is likely', body: ['Because Mistfall Hunter is planned for PC, Xbox Series X|S, and PS5, players naturally expect cross-platform matchmaking. Xbox Play Anywhere points toward account continuity inside the Xbox ecosystem, but that is not the same as universal cross-progression.'] },
      { heading: 'What to verify before launch', body: ['Check whether Steam can match with Xbox app players, whether PS5 is included in the same pool, whether console players can opt out, and whether account progress travels between stores.'], bullets: ['Steam to Xbox app matchmaking', 'Xbox to PS5 matchmaking', 'Crossplay opt-out options', 'Cross-progression by account', 'Input-based matchmaking'] },
    ],
    faqs: [
      { q: 'Does Mistfall Hunter have crossplay?', a: 'Not fully confirmed yet. The game is multiplatform, but final crossplay rules should be verified near launch.' },
      { q: 'Will Steam and Xbox app players share progress?', a: 'Xbox Play Anywhere helps Xbox ecosystem continuity, but Steam-to-Xbox cross-progression needs separate confirmation.' },
      { q: 'Can console players opt out of PC matchmaking?', a: 'That option has not been confirmed. This is a key setting to check when launch menus are available.' },
    ],
  },
  {
    slug: 'preload',
    group: 'news',
    title: 'Mistfall Hunter Preload, Download Size & Launch Prep',
    description: 'Mistfall Hunter preload tracker covering download timing, file size, Steam, Xbox app, Game Pass, PS5, and launch-day preparation.',
    eyebrow: 'Preload tracker',
    h1: 'Mistfall Hunter preload and download size',
    lead: 'Preload and file-size details are usually finalized close to launch, so this page tracks what to check and how to prepare before servers open.',
    sections: [
      { heading: 'Preload status', body: ['Final preload timing and download size are not locked in this guide yet. Steam, Xbox app, Game Pass, and PS5 can each publish preload details at different times.'] },
      { heading: 'Launch prep checklist', body: ['Wishlist or add the game to your library, keep enough SSD space free, update GPU drivers, and read the beginner guide before rushing into the first crowded extraction lobbies.'], bullets: ['Free SSD space', 'Update GPU drivers', 'Check Game Pass install button', 'Watch Steam news posts', 'Read the extraction guide'] },
    ],
    faqs: [
      { q: 'Can I preload Mistfall Hunter?', a: 'Preload has not been finalized in this guide. Check your storefront close to launch.' },
      { q: 'How big is Mistfall Hunter?', a: 'Final download size still needs storefront confirmation.' },
      { q: 'Should I install on SSD?', a: 'Yes. For a modern action RPG with dense maps, an SSD is the safest recommendation.' },
    ],
  },
  {
    slug: 'beta-rewards',
    group: 'news',
    title: 'Mistfall Hunter Beta Rewards, Demo Progress & Wipe Info',
    description: 'Mistfall Hunter beta rewards guide covering Steam Next Fest demo progress, wipes, cosmetic rewards, and what carries into launch.',
    eyebrow: 'Beta rewards',
    h1: 'Mistfall Hunter beta rewards and progress',
    lead: 'Demo and beta progress should be treated as temporary unless Bellring confirms otherwise. Cosmetic participation rewards are the item to watch.',
    sections: [
      { heading: 'Progress carryover', body: ['Steam Next Fest style demos are normally test environments, and extraction games in particular tend to wipe progression between beta and launch. This site treats gameplay progress as non-transferable unless officially confirmed.'] },
      { heading: 'Reward types to watch', body: ['If beta rewards carry over, expect cosmetic-only items such as avatar frames, emotes, titles, or launch participation badges rather than gameplay power.'], bullets: ['Avatar frame', 'Emote', 'Title', 'Profile badge', 'Launch participation cosmetic'] },
    ],
    faqs: [
      { q: 'Does demo progress carry over?', a: 'Assume no unless Bellring announces otherwise.' },
      { q: 'Will beta rewards affect gameplay?', a: 'They should be treated as cosmetic unless official notes say otherwise.' },
      { q: 'Do I need the same account?', a: 'If rewards exist, using the same platform account is usually required.' },
    ],
  },
  {
    slug: 'party-size',
    group: 'guides',
    title: 'Mistfall Hunter Party Size: Solo, Duo, Trio & Team Play',
    description: 'Mistfall Hunter party size guide covering solo play, grouped extraction, team roles, support value, and how squads should prepare.',
    eyebrow: 'Team play',
    h1: 'Mistfall Hunter party size',
    lead: 'Mistfall Hunter can be approached solo or with a group. The bigger your team, the more your class roles and communication matter.',
    sections: [
      { heading: 'Solo vs squad', body: ['Solo play rewards stealth and restraint. Group play lets you split roles across frontline, ranged pressure, burst, and support, making bosses and contested extraction fights safer.'] },
      { heading: 'Strong team foundations', body: ['A simple team plan is frontline plus damage plus support or ranged control. Seer rises sharply in value when teammates can protect and respond to support calls.'], bullets: ['Frontline to hold space', 'Ranged pressure to punish', 'Support to stabilize fights', 'Shared extraction route', 'Clear callouts before looting'] },
    ],
    faqs: [
      { q: 'Can I play Mistfall Hunter solo?', a: 'Yes, but solo players should avoid long noisy fights and secure extraction early.' },
      { q: 'Is Seer good in a squad?', a: 'Yes. Seer is much stronger when teammates coordinate around healing, shields, and control.' },
      { q: 'Should beginners group up?', a: 'Grouping helps, but beginners should still learn low-risk solo routes to understand extraction pressure.' },
    ],
  },
  {
    slug: 'death-penalty',
    group: 'guides',
    title: 'Mistfall Hunter Death Penalty: What You Lose When You Die',
    description: 'Mistfall Hunter death penalty guide explaining loot loss, extraction risk, gear banking, safe runs, and why leaving early is often correct.',
    eyebrow: 'Death penalty',
    h1: 'What happens when you die in Mistfall Hunter?',
    lead: 'Death is the pressure that makes extraction work. If you die before leaving, your run can turn from profit to loss in seconds.',
    sections: [
      { heading: 'What you lose', body: ['Preview coverage describes the expected extraction rule: die before extraction and you lose the loot and gear you were carrying in that run. Only successfully extracted items are banked.'] },
      { heading: 'How to reduce losses', body: ['Carry only what you can afford to lose, use early runs to learn routes, and leave after meaningful upgrades instead of trying to squeeze every chest and boss from a map.'], bullets: ['Run cheap kits while learning', 'Bank upgrades early', 'Avoid greed after a big drop', 'Know your nearest exit', 'Do not loot before listening'] },
    ],
    faqs: [
      { q: 'Do you lose everything on death?', a: 'You should expect to lose what you carried into the run and what you found before extracting.' },
      { q: 'Is leaving early bad?', a: 'No. In extraction games, leaving with modest profit is often the correct play.' },
    ],
  },
  {
    slug: 'hallowgrove',
    group: 'database',
    title: 'Mistfall Hunter Hallowgrove Map Guide',
    description: 'Mistfall Hunter Hallowgrove map guide covering known beta map context, route planning, loot risk, boss pressure, and extraction priorities.',
    eyebrow: 'Map guide',
    h1: 'Hallowgrove map guide',
    lead: 'Hallowgrove is one of the known preview maps and a natural early route-learning target for launch players.',
    sections: [
      { heading: 'Why Hallowgrove matters', body: ['Preview coverage names Hallowgrove as a playable area, making it one of the safest map keywords to build around before launch. Treat exact marker positions as provisional until live mapping begins.'] },
      { heading: 'Route priorities', body: ['Start by learning safe movement, likely extraction lanes, boss-adjacent danger, and where player traffic naturally converges. The map guide should become more precise after launch data is verified.'], bullets: ['Scout exits first', 'Avoid noisy boss pulls early', 'Track player traffic', 'Bank first upgrades', 'Update markers after launch'] },
    ],
    faqs: [
      { q: 'Is Hallowgrove confirmed?', a: 'Hallowgrove appears in preview coverage as a known playable map.' },
      { q: 'Are marker locations final?', a: 'No. Treat pre-launch markers as illustrative until live-game mapping verifies them.' },
    ],
  },
  {
    slug: 'brandrgarde',
    group: 'database',
    title: 'Mistfall Hunter Brandrgarde Map Guide',
    description: 'Mistfall Hunter Brandrgarde map guide covering known preview-map information, chaos variants, extraction routes, and launch tracking.',
    eyebrow: 'Map guide',
    h1: 'Brandrgarde map guide',
    lead: 'Brandrgarde is named in preview coverage alongside Hallowgrove, with chaos variants making it a valuable future map URL.',
    sections: [
      { heading: 'Known status', body: ['Preview coverage mentions Brandrgarde as part of the current build route context. Exact spelling and final in-game localization should be checked at launch, but the topic is worth preparing now.'] },
      { heading: 'Chaos variants', body: ['Chaos variants suggest higher-risk versions of known spaces. These should be tracked separately once enemy density, loot quality, and extraction pressure are verified.'], bullets: ['Normal route notes', 'Chaos variant notes', 'Boss pressure', 'Loot value', 'Extraction options'] },
    ],
    faqs: [
      { q: 'Is Brandrgarde a map?', a: 'Preview coverage references Brandrgarde in the build context. Final in-game naming should be verified at launch.' },
      { q: 'What are chaos variants?', a: 'They appear to be higher-risk variants of known maps, but final rules need live confirmation.' },
    ],
  },
  {
    slug: 'controller',
    group: 'tools',
    title: 'Mistfall Hunter Controller Guide: Xbox, PS5 & PC Settings',
    description: 'Mistfall Hunter controller guide covering Xbox, PS5, PC gamepad play, sensitivity, melee blocking, ranged aiming, and settings to check.',
    eyebrow: 'Controller',
    h1: 'Mistfall Hunter controller guide',
    lead: 'Mistfall Hunter has deliberate third-person action combat, so controller settings matter for both melee timing and ranged pressure.',
    sections: [
      { heading: 'Controller strengths', body: ['Melee movement, blocking, dodging, and ability timing should feel natural on a controller. Mercenary and Withered Knight style play especially benefit from comfortable defensive inputs.'] },
      { heading: 'Settings to tune', body: ['Ranged classes need careful camera and aim sensitivity. If aim assist exists at launch, Blackarrow players should test it before PvP.'], bullets: ['Camera sensitivity', 'Aim sensitivity', 'Vibration', 'Button remapping', 'Aim assist options'] },
    ],
    faqs: [
      { q: 'Can I play Mistfall Hunter with a controller?', a: 'Yes, console versions make controller support expected, and PC players should check gamepad settings at launch.' },
      { q: 'Is controller good for ranged classes?', a: 'It can be, but Blackarrow and other ranged builds depend heavily on sensitivity tuning.' },
    ],
  },
];

export const zhFaqPages: SeoPage[] = enFaqPages.map((page) => ({
  ...page,
  title: page.slug === 'faq' ? 'Mistfall Hunter 常见问题：发售、平台、Game Pass、职业与撤离' : `Mistfall Hunter ${page.h1}`,
  description: page.description,
  h1: page.slug === 'faq' ? 'Mistfall Hunter 常见问题' : page.h1,
  lead: page.slug === 'faq' ? '发售前玩家最常搜索的问题：平台、Game Pass、职业、地图、撤离、死亡惩罚与测试进度。' : page.lead,
  cards: page.cards?.map((card) => ({ ...card, href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}` })),
  faqs: page.slug === 'faq' ? globalFaqZh : page.faqs,
}));

export const enFaqLinks: PriorityLink[] = enFaqPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhFaqLinks: PriorityLink[] = zhFaqPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
