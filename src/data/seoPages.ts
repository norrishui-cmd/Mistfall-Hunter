import type { Lang } from '../i18n';
import type { PriorityLink } from './priorityLinks';
import { enExpansionPages, zhExpansionPages } from './urlExpansion';
import { enFaqPages, zhFaqPages } from './faqExpansion';
import { enGrowthPages, zhGrowthPages } from './urlGrowthPlan';
import { enLongTailPages, zhLongTailPages } from './urlLongTailPlan';
import { enCluster2Pages, zhCluster2Pages } from './urlLongTailCluster2';
import { enCluster3Pages, zhCluster3Pages } from './urlLongTailCluster3';
import { enRapidExpansionPages, zhRapidExpansionPages } from './urlRapidExpansion';
import { enRapidExpansion2Pages, zhRapidExpansion2Pages } from './urlRapidExpansion2';
import { enTrendExpansionPages, zhTrendExpansionPages } from './urlTrendExpansion';
import { enDeepLongTailPages, zhDeepLongTailPages } from './urlDeepLongTail';
import { enFaqLongTailPages, zhFaqLongTailPages } from './urlFaqLongTail';
import { enLatestNewsPages, zhLatestNewsPages } from './urlLatestNews';
import { enLaunchAnswerPages, zhLaunchAnswerPages } from './urlLaunchAnswerPages';
import { enLaunchWeekClusterPages, zhLaunchWeekClusterPages } from './urlLaunchWeekClusters';
import { enLaunchDayIntentPages, zhLaunchDayIntentPages } from './urlLaunchDayIntents';
import { enPostLaunchEvergreenPages, zhPostLaunchEvergreenPages } from './urlPostLaunchEvergreen';
// enLaunchPages/zhLaunchPages (launchExpansion.ts — pay-to-win, age-rating,
// editions, anti-cheat, community) was written but never wired into
// getSeoPages() until 2026-07-24. Its URLs (e.g. /age-rating, /pay-to-win)
// were 404ing in production despite showing real impressions and even a
// #4 average position in GSC for /age-rating — Google had these indexed
// from whenever this file WAS connected, or from a stale crawl, and kept
// serving them into 404s. Caught while wiring a new page that linked to
// /pay-to-win and got a "broken internal link" failure from seo-audit.mjs.
import { enLaunchPages, zhLaunchPages } from './launchExpansion';
import { softNoindexSlugs } from './seoRecovery';
import { isIndexablePath } from './seoRegistry.mjs';

export type SeoSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type SeoTable = {
  title: string;
  headers: string[];
  rows: string[][];
};

export type SeoPage = {
  slug: string;
  group: PriorityLink['group'];
  template?: 'guide' | 'map' | 'build' | 'boss' | 'tool' | 'faq';
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  updated?: string;
  sections: SeoSection[];
  cards?: { title: string; desc: string; href: string }[];
  facts?: { k: string; v: string }[];
  intent?: { primary: string; secondary: string[]; freshness: string };
  checklist?: string[];
  steps?: { title: string; body: string }[];
  tables?: SeoTable[];
  relatedSearches?: string[];
  faqs?: { q: string; a: string }[];
  // Referenced by qualityGate.ts's passesQualityGate() but, until now, never
  // actually declared here or populated on any page — meaning the quality
  // gate silently failed every single non-hub page in the corpus regardless
  // of real content quality. See scripts/promotion-report.mjs.
  sources?: { href: string; label?: string }[];
  confidence?: 'confirmed' | 'reported' | 'datamined' | 'unconfirmed';
  strictSections?: boolean;
  // Set on machine-generated locale placeholders (see localizeDraft() in the
  // url*.ts files) that reserve a URL slot with English filler content and a
  // "Chinese Draft" label. These must never be indexable, regardless of
  // whether the slug is otherwise on the indexable whitelist.
  draft?: boolean;
};

export const enPages: SeoPage[] = [
  {
    slug: 'news',
    group: 'news',
    title: 'Mistfall Hunter News: Launch, Beta, Patches & Updates',
    description: 'Mistfall Hunter news hub covering the July 29, 2026 release listing, beta recap, patch tracking, platform updates, and official announcements.',
    eyebrow: 'News hub',
    h1: 'Mistfall Hunter news, launch tracker & updates',
    lead: 'A clean hub for the updates players actually search for: release timing, beta takeaways, patch watch, platform status, and which details are still pending official confirmation.',
    updated: 'Tracking official storefront information for the July 29, 2026 release listing.',
    sections: [
      {
        heading: 'What is confirmed',
        body: [
          'Official Steam and Xbox listings currently show July 29, 2026 for PC and Xbox Series X|S. Xbox lists day-one Game Pass availability for Xbox and PC; check regional storefronts for final unlock timing.',
          'The game is a dark fantasy third-person PvPvE extraction action RPG from Bellring Games. Players enter the Gyldenmist, fight monsters and rival hunters, loot what they can, and extract before death wipes the run.',
        ],
      },
      {
        heading: 'What we are watching next',
        body: ['The biggest open questions are final pricing, launch system requirements, server-region details, balance changes after beta feedback, and how monetization works if the game launches as free-to-play.'],
        bullets: ['Final price or free-to-play confirmation', 'Official PC requirements', 'Launch patch notes', 'Class balance tuning', 'Console performance modes'],
      },
      {
        heading: 'Beta recap',
        body: ['The open beta acted as a data-wipe test. Progress does not carry into launch, but beta players are expected to keep cosmetic participation rewards when signing in with the same account. Performance complaints, especially stutter and crashes, were common enough that stability is a major launch-watch item.'],
      },
    ],
    cards: [
      { title: 'Release date breakdown', desc: 'Launch time, platforms, Game Pass, PS5, Steam, and price status.', href: '/release-date' },
      { title: 'Performance watch', desc: 'Stutter, crashes, and what to change before patches land.', href: '/performance' },
      { title: 'Beginner prep', desc: 'Learn extraction before launch day chaos starts.', href: '/beginner-guide' },
    ],
    faqs: [
      { q: 'When is Mistfall Hunter coming out?', a: 'Official Steam and Xbox listings currently show July 29, 2026. Check your regional storefront for the final unlock time.' },
      { q: 'Will beta progress carry over?', a: 'No. The beta was a wipe test; only listed cosmetic participation rewards should carry over.' },
      { q: 'What news should players watch next?', a: 'Pricing, system requirements, launch patch notes, class balance, and server details are the main remaining items.' },
    ],
  },
  {
    slug: 'guides',
    group: 'guides',
    title: 'Mistfall Hunter Guides: Beginner, Classes, Builds & Extraction',
    description: 'All Mistfall Hunter guides in one place: beginner help, extraction, Soul of Return, classes, builds, loot, bosses, weapons, maps, and performance.',
    eyebrow: 'Guide library',
    h1: 'Mistfall Hunter guides',
    lead: 'A structured path through the game, from your first extraction to class choices, build direction, boss routing, and loot priorities.',
    sections: [
      {
        heading: 'Start with the extraction loop',
        body: ['The most important lesson is not damage, gear, or a tier list. It is knowing when to leave. Mistfall Hunter rewards players who bank modest wins, avoid bad fights, and secure a Soul of Return before the run turns ugly.'],
      },
      {
        heading: 'Pick the right guide for your problem',
        body: ['Use beginner content for the core loop, class pages for choosing a main, build pages for gearing direction, and database pages when you need a specific answer about weapons, bosses, or loot value.'],
      },
    ],
    cards: [
      { title: 'Beginner guide', desc: 'Core loop, death penalty, extraction, and first-run tips.', href: '/beginner-guide' },
      { title: 'Soul of Return', desc: 'How the Returner Woodling and extraction key work.', href: '/soul-of-return' },
      { title: 'Classes', desc: 'All six classes ranked and explained.', href: '/classes' },
      { title: 'Builds', desc: 'Starter loadout directions and affix tracking.', href: '/builds' },
      { title: 'Weapons', desc: 'Combat roles and weapon-choice principles.', href: '/weapons' },
      { title: 'Bosses', desc: 'Mist Lord prep, PvE threat reading, and reward routing.', href: '/bosses' },
    ],
  },
  {
    slug: 'tools',
    group: 'tools',
    title: 'Mistfall Hunter Tools: Map, Builds, FPS Checklist & Run Planner',
    description: 'Mistfall Hunter tools hub with an interactive build planner, map filters, FPS and stutter checklist, and extraction planning utilities.',
    eyebrow: 'Tools',
    h1: 'Mistfall Hunter tools',
    lead: 'Practical utilities for planning a run: map filters, build direction, performance fixes, and pre-launch trackers that turn scattered info into quick decisions.',
    sections: [
      {
        heading: 'Available now',
        body: ['The build planner, interactive map, and performance checklist are available now. Use the planner to select a class, path, goal, and priority affixes; its URL updates so the result can be saved or shared.'],
      },
      {
        heading: 'What each tool answers',
        body: ['Use the build planner for loadout direction, the map for route context, and the performance checklist for stutter, low FPS, or crashes. Exact live values remain clearly separated from beta-observed names.'],
        bullets: ['Build direction by class and path', 'Shareable affix priorities', 'Map and extraction context', 'Performance troubleshooting', 'Launch and patch verification'],
      },
    ],
    cards: [
      { title: 'Interactive map', desc: 'Filter extraction points, bosses, loot, and landmarks.', href: '/map' },
      { title: 'Build planner', desc: 'Choose a class, path, goal, and affixes; save or share the result.', href: '/build-planner' },
      { title: 'Builds & affixes', desc: 'Class build directions and affix list.', href: '/builds' },
      { title: 'Performance fixes', desc: 'Stutter, low FPS, crashes, and settings.', href: '/performance' },
    ],
  },
  {
    slug: 'about',
    group: 'about',
    title: 'About Mistfall Hunter Wiki and Hub: Who We Are & Editorial Policy',
    description: 'About this site: an independent, unofficial Mistfall Hunter guide and database, how we source and verify information, and what we cover.',
    eyebrow: 'About',
    h1: 'About this site',
    lead: 'Mistfall Hunter Wiki and Hub is an independent, unofficial guide project built to give players clear, honestly-sourced answers before and after launch \u2014 not to guess at numbers or repeat unverified claims.',
    sections: [
      {
        heading: 'What this site is',
        body: ['This is a fan-made guide and database for Mistfall Hunter. It is not affiliated with, endorsed by, or operated by Bellring Games or Skystone Games. Everything here is written and maintained independently, with official sources cited wherever a claim depends on them.'],
      },
      {
        heading: 'What we cover',
        body: ['Release information, beginner help, maps, class comparisons, build directions, boss and PvP guides, performance fixes, and evergreen explanations of core systems \u2014 organized so a specific question gets a specific, direct answer instead of a wall of unrelated text.'],
      },
      {
        heading: 'How we source and verify information',
        body: ['Every page separates confirmed facts from beta observations, community reports, and reasonable guidance \u2014 they are never presented with the same confidence. If a value, drop table, or exact mechanic is not officially confirmed, the page says so rather than pretending the meta is solved. See the sources page for the full list of official references this site treats as authoritative.'],
      },
      {
        heading: 'Corrections and updates',
        body: ['Pre-launch pages are explicitly labeled as such and get rewritten with live data once the game is out and testable. If something here turns out to be wrong, it gets corrected on the page directly rather than left to go stale \u2014 see the updates page for the current editorial log.'],
      },
    ],
    facts: [
      { k: 'Site type', v: 'Independent, unofficial fan guide' },
      { k: 'Affiliation', v: 'Not affiliated with Bellring Games or Skystone Games' },
      { k: 'Game developer', v: 'Bellring Games' },
      { k: 'Game publisher', v: 'Skystone Games' },
      { k: 'Game release date', v: 'July 29, 2026' },
    ],
  },
  {
    slug: 'weapons',
    group: 'database',
    title: 'Mistfall Hunter Weapons & Combat Guide',
    description: 'Mistfall Hunter weapons and combat guide covering melee, ranged, magic, stamina, blocking, parries, unblockable attacks, and weapon-role choices.',
    eyebrow: 'Combat database',
    h1: 'Mistfall Hunter weapons & combat',
    lead: 'Combat is about role clarity: know whether your kit wants to trade, kite, burst, support, or reset before the other hunter decides for you.',
    sections: [
      {
        heading: 'Weapon roles',
        body: ['Known class kits point toward clear weapon identities: Mercenary leans sword, shield, hammer, and punishment windows; Blackarrow plays ranged bow pressure; Shadowstrix uses daggers and stealth burst; Sorcerer fights with spell range; Seer supports with healing and control tools; Withered Knight pushes heavy melee aggression.'],
      },
      {
        heading: 'Stamina, blocking, and parries',
        body: ['Treat stamina as your second health bar. Blocking and parrying are powerful only when you leave enough stamina to disengage. Red or unblockable-style attacks should be dodged instead of absorbed.'],
      },
      {
        heading: 'How to choose a weapon plan',
        body: ['Beginners should pick forgiving tools that let them survive mistakes. Solo players need escape or range. Squads can specialize harder because teammates cover weaknesses.'],
        bullets: ['Beginner: defensive melee and simple punish windows', 'Solo: stealth, range, or disengage tools', 'Squad: support, control, or high burst', 'Boss focus: sustained safe damage and recovery'],
      },
    ],
  },
  {
    slug: 'bosses',
    group: 'database',
    title: 'Mistfall Hunter Bosses & PvE Guide: Mist Lords, Corroded & Rewards',
    description: 'Mistfall Hunter bosses and PvE guide for Mist Lords, Corroded enemies, boss prep, reward routing, extraction risk, and squad roles.',
    eyebrow: 'PvE database',
    h1: 'Mistfall Hunter bosses & PvE',
    lead: 'Bosses are not just loot piñatas. In an extraction game, every long PvE fight also broadcasts your position and invites other hunters to third-party you.',
    sections: [
      {
        heading: 'Mist Lords',
        body: ['Mist Lords are the high-value PvE anchors of a zone. Expect better rewards, tougher mechanics, and higher PvP pressure around them. Fight them only when you have an exit plan, enough supplies, and a reason to risk the gear you brought in.'],
      },
      {
        heading: 'The Corroded',
        body: ['The Corroded are the roaming mist-twisted enemies that drain time, health, and resources. They are also sound traps: fighting too long can pull enemy players toward you before the boss even starts.'],
      },
      {
        heading: 'Boss routing rules',
        body: ['A good boss route starts with scouting, not damage. Check nearby extraction options, listen for PvP, clear only what is needed, and decide in advance whether you will finish the boss or leave if another team arrives.'],
        bullets: ['Know your nearest extraction route', 'Keep stamina and healing for the escape', 'Do not tunnel on loot while other players are nearby', 'Bank smaller wins early while learning'],
      },
    ],
  },
  {
    slug: 'loot',
    group: 'database',
    title: 'Mistfall Hunter Loot, Gear & Affixes Guide',
    description: 'Mistfall Hunter loot guide covering gear, affixes, resources, banking priorities, extraction value, and how to decide what to carry out.',
    eyebrow: 'Loot database',
    h1: 'Mistfall Hunter loot, gear & affixes',
    lead: 'Loot only matters if it leaves the mist with you. The best inventory decision is often the one that gets banked, not the one with the biggest theoretical value.',
    sections: [
      {
        heading: 'How to think about loot value',
        body: ['Every item has two values: power if you use it and value if you extract it. New players should prioritize reliable upgrades, build-relevant affixes, and resources needed for progression over risky greed piles.'],
      },
      {
        heading: 'Affixes turn gear into builds',
        body: ['Affixes are the modifiers that push a class toward burst, survival, cooldown recovery, control, or support. The live values still need confirmation, so the build page tracks directions before exact best-in-slot lists.'],
      },
      {
        heading: 'What to bank first',
        body: ['Before the meta settles, use practical rules: keep gear that upgrades your current class, extract rare resources early, and avoid carrying extra weight if it makes you lose the fight or miss the exit.'],
        bullets: ['Class upgrades', 'Rare resources', 'Build-defining affixes', 'Quest or unlock items once confirmed', 'Backup kits for future low-risk runs'],
      },
    ],
  },
  {
    slug: 'soul-of-return',
    group: 'guides',
    title: 'Mistfall Hunter Soul of Return Guide: How Extraction Works',
    description: 'Mistfall Hunter Soul of Return guide explaining Returner Woodlings, extraction keys, exits, timing, and how to avoid losing a full run.',
    eyebrow: 'Extraction guide',
    h1: 'Soul of Return: how to get out alive',
    lead: 'The Soul of Return is the run-defining objective: without a way out, your best loot is just bait for someone else.',
    sections: [
      {
        heading: 'What the Soul of Return does',
        body: ['In the known extraction loop, you hunt a Returner Woodling to obtain the Soul of Return, the key item that opens or enables a path home. Getting it early changes the run from desperate searching into controlled decision-making.'],
      },
      {
        heading: 'When to secure it',
        body: ['New players should secure extraction earlier than they think. Once you have meaningful loot, a route out, and the Soul of Return, the question becomes whether another fight is worth risking the entire bag.'],
      },
      {
        heading: 'Common extraction mistakes',
        body: ['Most bad deaths happen when players overstay, forget nearby exits, chase one more fight, or let stamina run dry before the final escape. Extraction is a skill, not a formality.'],
        bullets: ['Do not wait until the bag is full to think about leaving', 'Find exits before starting a boss', 'Avoid loud fights near extraction when possible', 'Keep stamina for the last disengage'],
      },
    ],
    faqs: [
      { q: 'Can you extract without a Soul of Return?', a: 'The known loop centers on obtaining the Soul of Return from a Returner Woodling before leaving. If launch adds alternate exits, this guide will track them.' },
      { q: 'Should I get it early?', a: 'Yes for beginners. Early extraction access lets you leave after a good find instead of being forced into a bad final scramble.' },
    ],
  },
];

export const zhPages: SeoPage[] = [
  {
    slug: 'news',
    group: 'news',
    title: 'Mistfall Hunter 新闻：发售、测试、补丁与更新',
    description: 'Mistfall Hunter 新闻中心，覆盖官方商店显示的 2026 年 7 月 29 日发售、测试回顾、补丁追踪、平台信息与官方动态。',
    eyebrow: '新闻中心',
    h1: 'Mistfall Hunter 新闻、发售追踪与更新',
    lead: '这里集中整理玩家最常搜索的信息：发售时间、测试结论、补丁观察、平台状态，以及发售前仍未确认的内容。',
    updated: '持续追踪官方商店显示的 2026 年 7 月 29 日发售信息。',
    sections: [
      { heading: '已确认信息', body: ['官方 Steam 与 Xbox 商店目前显示发售日期为 2026 年 7 月 29 日，已确认平台为 PC 与 Xbox Series X|S；Xbox 页面列出 Xbox 和 PC 的首发 Game Pass，具体解锁时刻请以地区商店为准。', '游戏由 Bellring Games 开发，是一款暗黑奇幻第三人称 PvPvE 撤离动作 RPG。玩家进入 Gyldenmist，与怪物和敌对猎人争夺战利品，并在死亡清空背包前撤离。'] },
      { heading: '接下来重点观察', body: ['最重要的未定信息包括最终定价、PC 配置需求、服务器区域、测试反馈后的平衡改动，以及如果采用免费模式，商业化内容会如何呈现。'], bullets: ['最终价格或免费确认', '官方 PC 配置', '首日补丁说明', '职业平衡调整', '主机性能模式'] },
      { heading: '测试回顾', body: ['公开测试属于删档测试，进度不会继承到正式版；参与玩家预计保留头像框、表情等测试奖励。测试期间卡顿和崩溃反馈较多，因此稳定性是发售前最值得关注的事项之一。'] },
    ],
    cards: [
      { title: '发售信息', desc: '上线时间、平台、Game Pass、PS5、Steam 与价格状态。', href: '/zh/release-date' },
      { title: '性能观察', desc: '卡顿、崩溃与补丁前可调整的设置。', href: '/zh/performance' },
      { title: '新手准备', desc: '发售日之前先理解撤离循环。', href: '/zh/beginner-guide' },
    ],
  },
  {
    slug: 'guides',
    group: 'guides',
    title: 'Mistfall Hunter 攻略合集：新手、职业、配装与撤离',
    description: 'Mistfall Hunter 攻略合集：新手、撤离、Soul of Return、职业、配装、战利品、Boss、武器、地图与性能优化。',
    eyebrow: '攻略合集',
    h1: 'Mistfall Hunter 攻略合集',
    lead: '从第一次撤离，到职业选择、构筑方向、Boss 路线和战利品优先级，这里按问题组织所有攻略入口。',
    sections: [
      { heading: '先理解撤离循环', body: ['最重要的不是伤害、装备或强度榜，而是知道什么时候该走。能把中等收益安全带出迷雾，比多打一场不该打的架更有价值。'] },
      { heading: '按问题选择攻略', body: ['核心循环看新手指南，选职业看强度榜，配装看构筑页，需要具体系统答案时再查武器、Boss 或战利品页面。'] },
    ],
    cards: [
      { title: '新手指南', desc: '核心循环、死亡惩罚、撤离与第一局建议。', href: '/zh/beginner-guide' },
      { title: 'Soul of Return', desc: 'Returner Woodling 与撤离钥匙机制。', href: '/zh/soul-of-return' },
      { title: '职业', desc: '六大职业排名与玩法拆解。', href: '/zh/classes' },
      { title: '配装', desc: '起手构筑方向与词缀追踪。', href: '/zh/builds' },
      { title: '武器', desc: '战斗定位与武器选择原则。', href: '/zh/weapons' },
      { title: 'Boss', desc: 'Mist Lord 准备、PvE 威胁与收益路线。', href: '/zh/bosses' },
    ],
  },
  {
    slug: 'tools',
    group: 'tools',
    title: 'Mistfall Hunter 工具：地图、构筑、帧率排查与跑图规划',
    description: 'Mistfall Hunter 工具中心：互动配装规划器、地图筛选、FPS/卡顿排查清单与撤离跑图工具。',
    eyebrow: '工具中心',
    h1: 'Mistfall Hunter 工具',
    lead: '用更快的方式规划一局：地图筛选、构筑方向、性能排查，以及把零散信息变成行动决策的发售前追踪工具。',
    sections: [
      { heading: '当前可用', body: ['配装规划器、互动地图与性能排查清单均已可用。规划器可以选择职业、流派、目标和优先词缀，页面 URL 会同步更新，方便保存或分享。'] },
      { heading: '每个工具解决什么问题', body: ['配装规划器用于确定构筑方向，地图用于理解路线，性能清单用于排查卡顿、低帧与崩溃。测试期名称与正式版待确认数值会明确区分。'], bullets: ['按职业与流派规划构筑', '可分享的词缀优先级', '地图与撤离路线信息', '性能问题排查', '发售与补丁验证'] },
    ],
    cards: [
      { title: '互动地图', desc: '筛选撤离点、Boss、战利品与地标。', href: '/zh/map' },
      { title: '配装规划器', desc: '选择职业、流派、目标与词缀，并保存或分享结果。', href: '/zh/build-planner' },
      { title: '配装与词缀', desc: '职业构筑方向与词缀列表。', href: '/zh/builds' },
      { title: '性能优化', desc: '卡顿、低帧、崩溃与设置。', href: '/zh/performance' },
    ],
  },
  {
    slug: 'about',
    group: 'about',
    title: '关于 Mistfall Hunter Wiki：我们是谁与编辑政策',
    description: '关于本站：一个独立的非官方 Mistfall Hunter 攻略与数据库，我们如何核实信息来源，以及本站覆盖的内容范围。',
    eyebrow: '关于',
    h1: '关于本站',
    lead: 'Mistfall Hunter Wiki and Hub 是一个独立的非官方攻略项目，目标是在发售前后都给玩家清晰、有据可查的答案——而不是瞎猜数值或转发未经证实的说法。',
    sections: [
      { heading: '本站是什么', body: ['这是一个玩家自制的 Mistfall Hunter 攻略与数据库站点，与 Bellring Games 或 Skystone Games 没有任何关联、授权或合作关系。所有内容均独立撰写和维护，凡是依赖官方信息的说法都会标注来源。'] },
      { heading: '本站覆盖内容', body: ['发售信息、新手帮助、地图、职业对比、构筑方向、Boss 与 PvP 攻略、性能优化，以及核心系统的长期说明——按具体问题组织内容，力求给出直接答案，而不是一大段不相关的文字。'] },
      { heading: '我们如何核实信息来源', body: ['每个页面都会区分已确认事实、测试期观察、社区报告与合理建议——这几类信息绝不会用同样的置信度呈现。如果数值、掉落表或具体机制尚未官方确认，页面会明确标注，而不是假装 meta 已经固定。完整的官方信源列表见来源页面。'] },
      { heading: '更正与更新', body: ['发售前页面会被明确标注为"发售前"，并在游戏上线、可实测后用真实数据重写。如果发现内容有误，会直接在页面上更正，而不是放任其过时——最新的编辑记录见更新页面。'] },
    ],
    facts: [
      { k: '站点类型', v: '独立非官方玩家攻略站' },
      { k: '关联关系', v: '与 Bellring Games 或 Skystone Games 无关联' },
      { k: '游戏开发商', v: 'Bellring Games' },
      { k: '游戏发行商', v: 'Skystone Games' },
      { k: '游戏发售日期', v: '2026 年 7 月 29 日' },
    ],
  },
  {
    slug: 'weapons',
    group: 'database',
    title: 'Mistfall Hunter 武器与战斗指南',
    description: 'Mistfall Hunter 武器与战斗指南：近战、远程、法术、耐力、格挡、招架、不可格挡攻击与武器定位。',
    eyebrow: '战斗数据库',
    h1: 'Mistfall Hunter 武器与战斗',
    lead: '战斗首先是定位：在敌对猎人替你做决定之前，先弄清楚你的配置是换血、风筝、爆发、支援还是重置战斗。',
    sections: [
      { heading: '武器定位', body: ['已知职业套件有明显分工：Mercenary 偏向剑盾、重锤与反击窗口；Blackarrow 依赖弓箭远程压制；Shadowstrix 用匕首与潜行爆发；Sorcerer 以法术距离作战；Seer 提供治疗与控制；Withered Knight 则强调重型近战压迫。'] },
      { heading: '耐力、格挡与招架', body: ['把耐力当作第二条生命值。格挡和招架很强，但前提是你留有足够耐力脱离战斗。红色或不可格挡类攻击应优先闪避，而不是硬吃。'] },
      { heading: '如何选择武器计划', body: ['新手应选择容错高的工具，单人玩家需要逃脱或射程，小队则可以更专精，因为队友能覆盖弱点。'], bullets: ['新手：防御近战与简单反击窗口', '单人：潜行、远程或脱战工具', '小队：支援、控制或高爆发', 'Boss：稳定安全输出与恢复'] },
    ],
  },
  {
    slug: 'bosses',
    group: 'database',
    title: 'Mistfall Hunter Boss 与 PvE 指南：Mist Lord、腐化怪与奖励',
    description: 'Mistfall Hunter Boss 与 PvE 指南：Mist Lord、腐化敌人、Boss 准备、收益路线、撤离风险与小队分工。',
    eyebrow: 'PvE 数据库',
    h1: 'Mistfall Hunter Boss 与 PvE',
    lead: 'Boss 不只是战利品箱。在撤离游戏里，每一场长时间 PvE 战斗都会暴露位置，并吸引其他猎人来收割。',
    sections: [
      { heading: 'Mist Lord', body: ['Mist Lord 是区域里的高价值 PvE 目标。它们通常意味着更好奖励、更难机制和更高 PvP 压力。只有当你有撤离路线、补给和明确收益目标时，才值得冒险开 Boss。'] },
      { heading: '腐化敌人', body: ['腐化敌人会消耗时间、生命和资源，也会成为声音陷阱。清怪太久可能在 Boss 开始前就把敌对玩家引过来。'] },
      { heading: 'Boss 路线原则', body: ['好的 Boss 路线从侦查开始，而不是从输出开始。先确认附近撤离选项，留意 PvP 声音，只清必要敌人，并提前决定如果有队伍靠近是打完还是撤。'], bullets: ['知道最近撤离路线', '为逃跑保留耐力与治疗', '附近有玩家时不要盯着战利品发呆', '学习期优先把小收益带出去'] },
    ],
  },
  {
    slug: 'loot',
    group: 'database',
    title: 'Mistfall Hunter 战利品、装备与词缀指南',
    description: 'Mistfall Hunter 战利品指南：装备、词缀、资源、入库优先级、撤离价值与背包取舍。',
    eyebrow: '战利品数据库',
    h1: 'Mistfall Hunter 战利品、装备与词缀',
    lead: '只有带出迷雾的战利品才有意义。最好的背包决策，常常不是理论价值最高的，而是能安全入库的。',
    sections: [
      { heading: '如何判断战利品价值', body: ['每件物品都有两种价值：自己使用时的强度，以及成功撤离后的资源价值。新手应优先保留当前职业能用的升级、构筑相关词缀和推进资源，而不是贪更多未知收益。'] },
      { heading: '词缀让装备变成构筑', body: ['词缀会把职业推向爆发、生存、冷却恢复、控制或支援。正式版数值仍需确认，所以配装页面先追踪方向，等上线后再补最佳词条。'] },
      { heading: '优先带走什么', body: ['meta 稳定前，用简单原则判断：当前职业升级、稀有资源、关键词缀优先；如果额外重量会让你输掉战斗或错过撤离，就不要贪。'], bullets: ['职业升级', '稀有资源', '定义构筑的词缀', '确认后的任务或解锁物品', '未来低风险跑图用的备用装备'] },
    ],
  },
  {
    slug: 'soul-of-return',
    group: 'guides',
    title: 'Mistfall Hunter Soul of Return 指南：撤离机制说明',
    description: 'Mistfall Hunter Soul of Return 指南：Returner Woodling、撤离钥匙、出口、时机与如何避免满包暴毙。',
    eyebrow: '撤离指南',
    h1: 'Soul of Return：如何活着离开',
    lead: 'Soul of Return 是一局里最关键的目标：没有离开的办法，再好的战利品也只是给别人准备的诱饵。',
    sections: [
      { heading: 'Soul of Return 的作用', body: ['已知撤离循环中，玩家需要猎杀 Returner Woodling 获得 Soul of Return，这个关键物品用于开启或启用回归路径。越早拿到它，越能把一局从被动寻找变成主动决策。'] },
      { heading: '什么时候拿', body: ['新手应该比自己想象中更早处理撤离条件。当你已经拿到有意义的战利品、知道出口、并拥有 Soul of Return 后，就要判断下一场战斗是否值得赌上整包收益。'] },
      { heading: '常见撤离失误', body: ['大多数糟糕死亡都来自逗留太久、忘记附近出口、追最后一场架，或在最后逃跑前耗光耐力。撤离本身就是一门技术。'], bullets: ['不要等背包满了才想撤离', '开 Boss 前先找出口', '尽量避免在撤离点附近打持久战', '为最后一次脱战保留耐力'] },
    ],
    faqs: [
      { q: '没有 Soul of Return 能撤离吗？', a: '已知循环以从 Returner Woodling 获取 Soul of Return 为核心。如果正式版加入其他出口，这页会继续追踪。' },
      { q: '应该早点拿吗？', a: '新手建议早点拿。提前拥有撤离条件，能让你在拿到好东西后直接离开，而不是被迫进行混乱的最后搜索。' },
    ],
  },
];

export function getSeoPages(lang: Lang): SeoPage[] {
  return lang === 'zh'
    ? [...zhPages, ...zhExpansionPages, ...zhFaqPages.filter((page) => page.slug !== 'faq'), ...zhGrowthPages, ...zhLongTailPages, ...zhCluster2Pages, ...zhCluster3Pages, ...zhRapidExpansionPages, ...zhRapidExpansion2Pages, ...zhTrendExpansionPages, ...zhDeepLongTailPages, ...zhFaqLongTailPages, ...zhLatestNewsPages, ...zhLaunchAnswerPages, ...zhLaunchWeekClusterPages, ...zhLaunchDayIntentPages, ...zhPostLaunchEvergreenPages, ...zhLaunchPages]
    : [...enPages, ...enExpansionPages, ...enFaqPages.filter((page) => page.slug !== 'faq'), ...enGrowthPages, ...enLongTailPages, ...enCluster2Pages, ...enCluster3Pages, ...enRapidExpansionPages, ...enRapidExpansion2Pages, ...enTrendExpansionPages, ...enDeepLongTailPages, ...enFaqLongTailPages, ...enLatestNewsPages, ...enLaunchAnswerPages, ...enLaunchWeekClusterPages, ...enLaunchDayIntentPages, ...enPostLaunchEvergreenPages, ...enLaunchPages];
}

export function getSeoPage(lang: Lang, slug: string): SeoPage | undefined {
  return getSeoPages(lang).find((page) => page.slug === slug);
}

// Slug-only or bare-string indexability checks can't see per-locale `draft`
// flags (e.g. a Chinese "reserve the URL" placeholder built from an English
// page). Use this whenever you have an href like '/zh/crossplay-status' and
// want the check to resolve the *actual* localized page object first.
export function isIndexableHref(href: string): boolean {
  const clean = href.replace(/^\//, '');
  const zhMatch = clean.match(/^zh\/(.+)$/);
  const lang: Lang = zhMatch ? 'zh' : 'en';
  const slug = zhMatch ? zhMatch[1] : clean;
  const page = getSeoPage(lang, slug);
  return isIndexable(page ?? slug);
}

export function isIndexable(pageOrSlug?: SeoPage | string): boolean {
  if (!pageOrSlug) return true;
  if (typeof pageOrSlug !== 'string' && pageOrSlug.draft) return false;
  const slug = typeof pageOrSlug === 'string' ? pageOrSlug : pageOrSlug.slug;
  // This is a deliberately conservative pre-launch index. The project has a
  // much larger working corpus, but pages whose only honest answer is still
  // "wait for launch" dilute the topical signal of the confirmed guides.
  // Keep them published and internally reachable, but do not ask Google to
  // rank them until they have live facts, screenshots, or patch references.
  //
  // isIndexablePath (seoRegistry.mjs) is the single source of truth here —
  // it already covers both the static core pages (INDEXABLE_STATIC_PATHS)
  // and the long-tail slug whitelist (INDEXABLE_SLUGS). A second,
  // hand-maintained copy used to live inline in this function and silently
  // drifted out of sync with seoRegistry.mjs (2026-07-23) — a slug added to
  // one without the other produced a sitemap/noindex conflict. Edit
  // INDEXABLE_SLUGS or INDEXABLE_STATIC_PATHS in seoRegistry.mjs; this
  // function and the sitemap both read from that one place now.
  return isIndexablePath(`/${slug}/`) && !softNoindexSlugs.has(slug);
}
