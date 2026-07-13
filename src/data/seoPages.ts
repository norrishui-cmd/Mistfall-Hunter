import type { Lang } from '../i18n';
import type { PriorityLink } from './priorityLinks';
import { enExpansionPages, zhExpansionPages } from './urlExpansion';
import { enFaqPages, zhFaqPages } from './faqExpansion';
import { enGrowthPages, zhGrowthPages } from './urlGrowthPlan';
import { enLongTailPages, zhLongTailPages } from './urlLongTailPlan';
import { enCluster2Pages, zhCluster2Pages } from './urlLongTailCluster2';
import { enRapidExpansionPages, zhRapidExpansionPages } from './urlRapidExpansion';
import { enRapidExpansion2Pages, zhRapidExpansion2Pages } from './urlRapidExpansion2';
import { enTrendExpansionPages, zhTrendExpansionPages } from './urlTrendExpansion';
import { enDeepLongTailPages, zhDeepLongTailPages } from './urlDeepLongTail';
import { enFaqLongTailPages, zhFaqLongTailPages } from './urlFaqLongTail';
import { enLatestNewsPages, zhLatestNewsPages } from './urlLatestNews';
import { enLaunchAnswerPages, zhLaunchAnswerPages } from './urlLaunchAnswerPages';
import { enLaunchWeekClusterPages, zhLaunchWeekClusterPages } from './urlLaunchWeekClusters';
import { enLaunchDayIntentPages, zhLaunchDayIntentPages } from './urlLaunchDayIntents';

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
};

export const enPages: SeoPage[] = [
  {
    slug: 'news',
    group: 'news',
    title: 'Mistfall Hunter News: Launch, Beta, Patches & Updates',
    description: 'Mistfall Hunter news hub covering the July 30, 2026 launch, beta recap, patch tracking, platform updates, and official announcements.',
    eyebrow: 'News hub',
    h1: 'Mistfall Hunter news, launch tracker & updates',
    lead: 'A clean hub for the updates players actually search for: release timing, beta takeaways, patch watch, platform status, and what is still unconfirmed before launch.',
    updated: 'Tracking pre-launch information for July 30, 2026.',
    sections: [
      {
        heading: 'What is confirmed',
        body: [
          'Mistfall Hunter is scheduled for a global launch on July 30, 2026 at 01:00 UTC. It is planned for PC, Xbox Series X|S, and PlayStation 5, with day-one Xbox Game Pass availability listed for Xbox and PC.',
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
      { q: 'When is Mistfall Hunter coming out?', a: 'July 30, 2026 at 01:00 UTC is the announced global launch anchor.' },
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
    description: 'Mistfall Hunter tools hub for the interactive map, build planner roadmap, FPS/stutter checklist, and extraction run planning utilities.',
    eyebrow: 'Tools',
    h1: 'Mistfall Hunter tools',
    lead: 'Practical utilities for planning a run: map filters, build direction, performance fixes, and pre-launch trackers that turn scattered info into quick decisions.',
    sections: [
      {
        heading: 'Available now',
        body: ['The interactive map and performance checklist are the strongest utility pages today. The build library works as a pre-launch planner and will become more exact as live talents, runes, and affix values are verified.'],
      },
      {
        heading: 'Tool roadmap',
        body: ['The next natural tools are a build planner, affix checklist, extraction route planner, and launch countdown. The data structure added to this site makes those easier to wire into dedicated URLs later.'],
        bullets: ['Build planner by class', 'Affix checklist', 'Loot value tracker', 'Extraction route notes', 'Launch and patch tracker'],
      },
    ],
    cards: [
      { title: 'Interactive map', desc: 'Filter extraction points, bosses, loot, and landmarks.', href: '/map' },
      { title: 'Builds & affixes', desc: 'Class build directions and affix list.', href: '/builds' },
      { title: 'Performance fixes', desc: 'Stutter, low FPS, crashes, and settings.', href: '/performance' },
    ],
  },
  {
    slug: 'about',
    group: 'about',
    title: 'What Is Mistfall Hunter? Game Overview, Platforms & Site Info',
    description: 'About Mistfall Hunter: game overview, story premise, extraction loop, platforms, classes, PvPvE structure, and what this unofficial guide site covers.',
    eyebrow: 'About',
    h1: 'What is Mistfall Hunter?',
    lead: 'Mistfall Hunter is a dark fantasy PvPvE extraction action RPG about entering a cursed golden mist, fighting for loot, and escaping before another hunter takes it all.',
    sections: [
      {
        heading: 'Game overview',
        body: ['You play as a Gyldhunter venturing into the Gyldenmist, a corrupting golden fog that reshaped the world of Weavereach. A run mixes PvE threats, boss hunting, loot decisions, and PvP pressure from rival players.'],
      },
      {
        heading: 'What this site covers',
        body: ['This is an unofficial guide and database focused on search-friendly answers: release information, beginner help, maps, class comparisons, build directions, performance fixes, and evergreen explanations of core systems.'],
      },
      {
        heading: 'Editorial approach',
        body: ['Pre-launch pages separate confirmed information from beta observations and reasonable guidance. If a value, drop table, or exact mechanic is not confirmed, the page says so rather than pretending the meta is solved.'],
      },
    ],
    facts: [
      { k: 'Developer', v: 'Bellring Games' },
      { k: 'Genre', v: 'Dark fantasy PvPvE extraction ARPG' },
      { k: 'Platforms', v: 'PC, Xbox Series X|S, PlayStation 5' },
      { k: 'Launch', v: 'July 30, 2026 at 01:00 UTC' },
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
    description: 'Mistfall Hunter 新闻中心，覆盖 2026 年 7 月 30 日发售、测试回顾、补丁追踪、平台信息与官方动态。',
    eyebrow: '新闻中心',
    h1: 'Mistfall Hunter 新闻、发售追踪与更新',
    lead: '这里集中整理玩家最常搜索的信息：发售时间、测试结论、补丁观察、平台状态，以及发售前仍未确认的内容。',
    updated: '持续追踪 2026 年 7 月 30 日发售前信息。',
    sections: [
      { heading: '已确认信息', body: ['Mistfall Hunter 计划在 2026 年 7 月 30 日 01:00 UTC 全球上线，平台包括 PC、Xbox Series X|S 与 PlayStation 5，并列入 Xbox 与 PC Game Pass 首发阵容。', '游戏由 Bellring Games 开发，是一款暗黑奇幻第三人称 PvPvE 撤离动作 RPG。玩家进入 Gyldenmist，与怪物和敌对猎人争夺战利品，并在死亡清空背包前撤离。'] },
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
    description: 'Mistfall Hunter 工具中心：互动地图、构筑规划路线、FPS/卡顿排查清单与撤离跑图工具。',
    eyebrow: '工具中心',
    h1: 'Mistfall Hunter 工具',
    lead: '用更快的方式规划一局：地图筛选、构筑方向、性能排查，以及把零散信息变成行动决策的发售前追踪工具。',
    sections: [
      { heading: '当前可用', body: ['目前最实用的是互动地图与性能排查清单。构筑库作为发售前规划工具使用，等正式版天赋、符文与词缀数值确认后会继续细化。'] },
      { heading: '工具路线', body: ['接下来适合延展的工具包括构筑规划器、词缀清单、战利品价值表、撤离路线规划与发售倒计时。本站新增的数据结构能让这些工具更容易独立成 URL。'], bullets: ['按职业构筑规划', '词缀清单', '战利品价值追踪', '撤离路线笔记', '发售与补丁追踪'] },
    ],
    cards: [
      { title: '互动地图', desc: '筛选撤离点、Boss、战利品与地标。', href: '/zh/map' },
      { title: '配装与词缀', desc: '职业构筑方向与词缀列表。', href: '/zh/builds' },
      { title: '性能优化', desc: '卡顿、低帧、崩溃与设置。', href: '/zh/performance' },
    ],
  },
  {
    slug: 'about',
    group: 'about',
    title: 'Mistfall Hunter 是什么？游戏介绍、平台与本站说明',
    description: 'Mistfall Hunter 游戏介绍：世界观、撤离循环、平台、职业、PvPvE 结构，以及本站攻略内容说明。',
    eyebrow: '关于',
    h1: 'Mistfall Hunter 是什么？',
    lead: 'Mistfall Hunter 是一款暗黑奇幻 PvPvE 撤离动作 RPG：进入被诅咒的金色迷雾，争夺战利品，并在其他猎人夺走一切前撤离。',
    sections: [
      { heading: '游戏概览', body: ['玩家扮演 Gyldhunter，进入腐化世界 Weavereach 中的 Gyldenmist。每一局都包含 PvE 威胁、Boss 战、战利品取舍，以及敌对玩家带来的 PvP 压力。'] },
      { heading: '本站覆盖内容', body: ['本站是非官方攻略与数据库，重点提供适合搜索的答案：发售信息、新手帮助、地图、职业对比、构筑方向、性能优化，以及核心系统的长期说明。'] },
      { heading: '内容原则', body: ['发售前页面会区分已确认信息、测试观察与合理建议。如果数值、掉落表或具体机制尚未确认，页面会明确标注，而不是假装 meta 已经固定。'] },
    ],
    facts: [
      { k: '开发商', v: 'Bellring Games' },
      { k: '类型', v: '暗黑奇幻 PvPvE 撤离 ARPG' },
      { k: '平台', v: 'PC、Xbox Series X|S、PlayStation 5' },
      { k: '发售', v: '2026 年 7 月 30 日 01:00 UTC' },
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
    ? [...zhPages, ...zhExpansionPages, ...zhFaqPages, ...zhGrowthPages, ...zhLongTailPages, ...zhCluster2Pages, ...zhRapidExpansionPages, ...zhRapidExpansion2Pages, ...zhTrendExpansionPages, ...zhDeepLongTailPages, ...zhFaqLongTailPages, ...zhLatestNewsPages, ...zhLaunchAnswerPages, ...zhLaunchWeekClusterPages, ...zhLaunchDayIntentPages]
    : [...enPages, ...enExpansionPages, ...enFaqPages, ...enGrowthPages, ...enLongTailPages, ...enCluster2Pages, ...enRapidExpansionPages, ...enRapidExpansion2Pages, ...enTrendExpansionPages, ...enDeepLongTailPages, ...enFaqLongTailPages, ...enLatestNewsPages, ...enLaunchAnswerPages, ...enLaunchWeekClusterPages, ...enLaunchDayIntentPages];
}

export function getSeoPage(lang: Lang, slug: string): SeoPage | undefined {
  return getSeoPages(lang).find((page) => page.slug === slug);
}

export function isIndexable(pageOrSlug?: SeoPage | string): boolean {
  if (!pageOrSlug) return true;
  return true;
}
