import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

// ---------------------------------------------------------------------------
// FAQ system.
//
// Each question that used to live only inside the mega /faq page now has its
// own independent, focused URL. The /faq page itself is an INDEX: a one-line
// answer per question plus a link into the full page. This avoids the same
// question's answer (and FAQPage structured data) existing on two URLs at
// once, which both dilutes ranking signal and risks duplicate-content flags.
//
// Mapping from the original 10 "global" questions to their now-independent
// page: release date -> /release-date, platforms -> /platforms,
// Game Pass -> /game-pass, PvP or PvE -> /pvp-or-pve (new), solo play ->
// /party-size, death penalty -> /death-penalty, extraction -> /beginner-guide,
// maps -> /known-maps (new), classes -> /classes, beta progress ->
// /beta-rewards. Everything below already existed except pvp-or-pve and
// known-maps, which fill the two real gaps.
// ---------------------------------------------------------------------------

export const enFaqPages: SeoPage[] = [
  {
    slug: 'faq',
    group: 'about',
    title: 'Mistfall Hunter FAQ Index: Release, Platforms, Game Pass, Classes & Extraction',
    description: 'Mistfall Hunter FAQ index — every question links to its own focused, regularly updated page covering release date, platforms, Game Pass, PvPvE, solo play, death penalty, extraction, maps, classes, and beta progress.',
    eyebrow: 'FAQ',
    h1: 'Mistfall Hunter FAQ',
    lead: 'The questions players search most before launch, organized as an index. Each one links to its own page that goes deeper and stays current — not a static answer buried on this page.',
    sections: [
      { heading: 'How to use this index', body: ['Each question below has a one-line quick answer, then a link into the full page, which has more detail and gets updated as launch information changes. That keeps any one question from going stale in two places at once.'] },
    ],
    cards: [
      { title: 'When does it launch?', desc: 'Current listings point to late July 2026; this site uses July 30, 2026 at 01:00 UTC as the main anchor.', href: '/release-date' },
      { title: 'What platforms is it on?', desc: 'Planned for PC, PS5, and Xbox Series X|S, with PC expected through Steam and the Xbox app.', href: '/platforms' },
      { title: 'Is it on Game Pass?', desc: 'Yes — Xbox coverage points to Xbox Game Pass and Xbox Play Anywhere support.', href: '/game-pass' },
      { title: 'Is it PvP or PvE?', desc: 'Both. AI monsters and bosses share every zone with rival hunters who can contest your loot.', href: '/pvp-or-pve' },
      { title: 'Can you play solo?', desc: 'Yes, solo and grouped play are both supported; solo favors timing and lower-risk routes.', href: '/party-size' },
      { title: 'What happens if you die?', desc: 'Dying before extraction means losing the gear and loot you were carrying that run.', href: '/death-penalty' },
      { title: 'How do you extract?', desc: 'Locate the extraction objective, hunt the Returner target for the Soul of Return, then leave through the opened path.', href: '/beginner-guide' },
      { title: 'What maps are known?', desc: "Preview coverage names Hallowgrove and Brandrgarde, each with a chaos variant; the final roster isn't confirmed.", href: '/known-maps' },
      { title: 'What classes are known?', desc: 'Six known classes: Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer, and Withered Knight.', href: '/classes' },
      { title: 'Does beta progress carry over?', desc: 'Treat it as temporary unless Bellring says otherwise; cosmetic rewards may be handled separately.', href: '/beta-rewards' },
    ],
  },
  {
    slug: 'pvp-or-pve',
    group: 'guides',
    title: 'Is Mistfall Hunter PvP or PvE? Game Mode Explained',
    description: 'Mistfall Hunter is PvPvE — every run mixes AI monsters and bosses with rival hunters who can contest your loot. Here is exactly what that means.',
    eyebrow: 'Game mode',
    h1: 'Is Mistfall Hunter PvP or PvE?',
    lead: "It's both at once: every zone has AI threats to fight and other hunters who can kill you for your loot. There is no mode toggle to pick just one.",
    sections: [
      { heading: "PvPvE means both, not a choice", body: ["Mistfall Hunter drops you into a mist-covered zone where Corroded monsters and Mist Lord bosses are the PvE side, while rival hunters or squads sharing your map are the PvP side. You can't opt into a PvE-only or PvP-only mode — every run carries both risks at once."] },
      { heading: 'What this means for how you play', body: ['Because encounters with other players are possible but not guaranteed, most of your risk management comes down to timing, noise, and route choice rather than picking a mode.'], bullets: ['Fighting a boss is loud and can draw other hunters toward you', 'Extracting early trades loot value for safety', 'Beta feedback named forced PvP as a common frustration among players who wanted a purely PvE experience', 'Solo players can reduce, but not remove, PvP risk by avoiding contested zones and boss fights'] },
    ],
    cards: [
      { title: 'Beginner guide', desc: 'Learn the extraction loop before your first run.', href: '/beginner-guide' },
      { title: 'Party size', desc: 'Solo vs squad tradeoffs for risk and role coverage.', href: '/party-size' },
      { title: 'Class tier list', desc: 'Pick a class suited to how much PvP risk you want.', href: '/classes' },
    ],
    faqs: [
      { q: 'Can I play Mistfall Hunter as pure PvE?', a: 'No PvE-only mode has been announced. Every zone is shared with other hunters, so PvP stays possible even if you avoid seeking it out.' },
      { q: 'Is PvP forced?', a: "You can't lock other players out of your zone, but you can lower exposure by choosing quieter routes, avoiding loud fights, and extracting early." },
    ],
  },
  {
    slug: 'known-maps',
    group: 'database',
    title: 'Mistfall Hunter Maps: Every Zone Named So Far',
    description: 'Every Mistfall Hunter map named in preview coverage so far — Hallowgrove, Brandrgarde, and their chaos variants — with links to the full guide and interactive map for each.',
    eyebrow: 'Maps',
    h1: 'What maps are in Mistfall Hunter?',
    lead: 'Preview coverage has named two zones so far, each with a higher-risk chaos variant. This page is the index; the interactive map and each zone guide go deeper.',
    sections: [
      { heading: 'Known zones', body: ['Preview builds and coverage have named two playable areas so far.'], bullets: ['Hallowgrove — a named preview map with its own guide and a chaos variant', 'Brandrgarde — named alongside Hallowgrove, also with a chaos variant', 'Chaos variants — higher-risk versions of known zones, per preview coverage'] },
      { heading: 'What is still unconfirmed', body: ["Exact marker positions, the full launch map count, and whether more zones ship alongside 1.0 aren't confirmed yet. Treat this as what preview builds have shown, not the final map roster."] },
    ],
    cards: [
      { title: 'Hallowgrove guide', desc: 'Route priorities and what is known so far.', href: '/hallowgrove' },
      { title: 'Brandrgarde guide', desc: 'Known status and chaos-variant notes.', href: '/brandrgarde' },
      { title: 'Interactive map', desc: 'Pan, zoom, and filter extraction points, bosses, and loot.', href: '/map' },
    ],
    faqs: [
      { q: 'How many maps does Mistfall Hunter have?', a: 'Preview coverage has named two so far — Hallowgrove and Brandrgarde — each with a chaos variant. The full launch map count is not confirmed.' },
      { q: 'What is a chaos variant?', a: 'A higher-risk version of a known map, based on preview coverage. Exact differences need live confirmation.' },
    ],
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
      { heading: 'Preload status', body: ['Final preload timing and download size for the 1.0 client are not locked in this guide yet. Steam, Xbox app, Game Pass, and PS5 can each publish preload details at different times. As a reference point, the June 2026 open beta client was reported at roughly 45GB — useful for gauging storage needs, though the launch build\'s final size may differ.'] },
      { heading: 'Launch prep checklist', body: ['Wishlist or add the game to your library, keep enough SSD space free, update GPU drivers, and read the beginner guide before rushing into the first crowded extraction lobbies.'], bullets: ['Free SSD space', 'Update GPU drivers', 'Check Game Pass install button', 'Watch Steam news posts', 'Read the extraction guide'] },
    ],
    faqs: [
      { q: 'Can I preload Mistfall Hunter?', a: 'Preload has not been finalized in this guide. Check your storefront close to launch.' },
      { q: 'How big is Mistfall Hunter?', a: 'The June 2026 open beta was reported at roughly 45GB. The 1.0 launch client\'s exact size still needs storefront confirmation, though beta size is a reasonable ballpark for storage planning.' },
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
    lead: 'Beta progress does not carry over, but Bellring has now confirmed two specific cosmetic rewards for beta participants at launch.',
    sections: [
      { heading: 'Progress carryover', body: ['Steam Next Fest style demos are normally test environments, and extraction games in particular tend to wipe progression between beta and launch. Bellring has confirmed the June 2026 open beta was a full data wipe: no gameplay progress carries into the 1.0 launch.'] },
      { heading: 'Confirmed launch rewards', body: ['Bellring confirmed via an official post that players who sign in with the same account used during the June 2026 beta will receive the Avatar Frame "Bell of Return" and the Pose "Finger Heart" via in-game mail at launch. Beyond these two specific items, treat further reward details as unconfirmed.'] },
      { heading: 'Other reward types to watch', body: ['Outside the two confirmed items above, any additional beta-linked rewards would likely follow the same cosmetic-only pattern seen elsewhere in the beta (badges, poses, currency bundles) rather than gameplay power.'], bullets: ['Avatar frame (confirmed: Bell of Return)', 'Pose / emote (confirmed: Finger Heart)', 'Additional cosmetics (unconfirmed)', 'Launch participation badge (unconfirmed)'] },
    ],
    faqs: [
      { q: 'Does demo progress carry over?', a: 'No — Bellring has confirmed the beta was a full data wipe. Only the two specific cosmetic rewards below carry over, not gameplay progress.' },
      { q: 'What beta rewards are confirmed?', a: 'Bellring has confirmed an Avatar Frame ("Bell of Return") and a Pose emote ("Finger Heart") for players who sign in with their beta account at launch.' },
      { q: 'Do I need the same account?', a: 'Yes — Bellring has confirmed you must sign in with the same account used during the beta to reclaim these rewards.' },
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
      { heading: 'Why Hallowgrove matters', body: ['Preview coverage names Hallowgrove as a playable area, making it one of the safest map keywords to build around before launch. Treat exact marker positions as provisional until live mapping begins.', 'Note: some press coverage of the beta spells this map "Hallowgrave" instead of "Hallowgrove." We\'re tracking both spellings until Bellring\'s own materials settle on one consistently.'] },
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

export const zhFaqPages: SeoPage[] = [
  {
    slug: 'faq',
    group: 'about',
    title: 'Mistfall Hunter 常见问题索引：发售、平台、Game Pass、职业与撤离',
    description: 'Mistfall Hunter 常见问题索引——每个问题都指向独立、持续更新的深度页面，覆盖发售日期、平台、Game Pass、PvPvE、单人玩法、死亡惩罚、撤离、地图、职业与测试进度。',
    eyebrow: '常见问题',
    h1: 'Mistfall Hunter 常见问题',
    lead: '把发售前玩家最常搜索的问题整理成一份索引。每个问题都对应一个会持续更新的独立页面，而不是塞在这一页里的静态答案。',
    sections: [
      { heading: '怎么使用这份索引', body: ['每个问题下面是一句话的快速答案，点击可以进入对应的深度页面——那里内容更完整，并会随发售信息持续更新。这样能避免同一个问题的答案在两个地方各自过时。'] },
    ],
    cards: [
      { title: '什么时候发售？', desc: '目前公开信息指向 2026 年 7 月下旬，本站以 7 月 30 日 01:00 UTC 作为主要时间锚点。', href: '/zh/release-date' },
      { title: '有哪些平台？', desc: '计划登陆 PC、PS5 与 Xbox Series X|S，PC 预计可通过 Steam 与 Xbox App 游玩。', href: '/zh/platforms' },
      { title: '会上 Game Pass 吗？', desc: '会。Xbox 相关信息显示支持 Xbox Game Pass 与 Xbox Play Anywhere。', href: '/zh/game-pass' },
      { title: '是 PvP 还是 PvE？', desc: '两者都是：地图里既有 AI 怪物与 Boss，也有会争夺战利品的敌对猎人。', href: '/zh/pvp-or-pve' },
      { title: '能单人玩吗？', desc: '可以，游戏同时支持单人与组队，单人打法更强调撤离时机与低风险路线。', href: '/zh/party-size' },
      { title: '死亡会怎样？', desc: '撤离前死亡会失去本局携带与搜刮到的装备和战利品。', href: '/zh/death-penalty' },
      { title: '怎么撤离？', desc: '核心流程是找到撤离目标、猎杀 Returner 目标拿到 Soul of Return，再从开启的路径离开。', href: '/zh/beginner-guide' },
      { title: '已知有哪些地图？', desc: '预览报道提到 Hallowgrove 与 Brandrgarde，并各有 chaos 变体，正式地图列表待发售确认。', href: '/zh/known-maps' },
      { title: '已知有哪些职业？', desc: '六个已知职业：Mercenary、Sorcerer、Blackarrow、Shadowstrix、Seer 与 Withered Knight。', href: '/zh/classes' },
      { title: '测试进度会保留吗？', desc: '除非官方另行说明，否则应把测试进度当作临时性的，外观类奖励可能会单独处理。', href: '/zh/beta-rewards' },
    ],
  },
  {
    slug: 'pvp-or-pve',
    group: 'guides',
    title: 'Mistfall Hunter 是 PvP 还是 PvE？游戏模式详解',
    description: 'Mistfall Hunter 是 PvPvE：每一局都同时有 AI 怪物、Boss，以及会争夺你战利品的敌对猎人。这里讲清楚这具体意味着什么。',
    eyebrow: '游戏模式',
    h1: 'Mistfall Hunter 是 PvP 还是 PvE？',
    lead: '两者同时存在：每个区域都有要打的 AI 威胁，也有可能为了战利品杀掉你的其他猎人。没有单独的模式开关可以只选一种。',
    sections: [
      { heading: 'PvPvE 意味着两者都有，而不是二选一', body: ['Mistfall Hunter 会把你丢进被浓雾笼罩的区域，被腐化的怪物和 Mist Lord Boss 是 PvE 的部分，而与你共享地图的敌对猎人或小队则是 PvP 的部分。你没法单独选择纯 PvE 或纯 PvP 模式——每一局都同时带着这两种风险。'] },
      { heading: '这对你的打法意味着什么', body: ['因为和其他玩家的遭遇是可能发生但并非必然，你的风险管理更多取决于时机、动静大小和路线选择，而不是选一个模式。'], bullets: ['打 Boss 动静大，容易把其他猎人引过来', '提前撤离是用战利品价值换安全', '测试期反馈里，强制 PvP 是许多想要纯 PvE 体验的玩家常见的不满', '单人玩家可以通过避开争夺区域和 Boss 战来降低（而非消除）PvP 风险'] },
    ],
    cards: [
      { title: '新手指南', desc: '在第一局之前先学会撤离循环。', href: '/zh/beginner-guide' },
      { title: '队伍人数', desc: '单人与组队在风险和职业分工上的取舍。', href: '/zh/party-size' },
      { title: '职业 Tier List', desc: '按你能接受的 PvP 风险程度选职业。', href: '/zh/classes' },
    ],
    faqs: [
      { q: '能纯 PvE 玩 Mistfall Hunter 吗？', a: '目前没有公布纯 PvE 模式。每个区域都和其他猎人共享，所以即使你不主动找 PvP，也仍然可能遇到。' },
      { q: 'PvP 是强制的吗？', a: '你没法把其他玩家挡在你的区域之外，但可以通过选择更安静的路线、避免大动静的战斗、尽早撤离来降低遭遇几率。' },
    ],
  },
  {
    slug: 'known-maps',
    group: 'database',
    title: 'Mistfall Hunter 地图列表：目前已知的全部区域',
    description: '目前预览报道中出现过的所有 Mistfall Hunter 地图——Hallowgrove、Brandrgarde 及其 chaos 变体——并附上各自的详细攻略与交互地图链接。',
    eyebrow: '地图',
    h1: 'Mistfall Hunter 有哪些地图？',
    lead: '预览报道目前点名了两个区域，各自都有一个风险更高的 chaos 变体。这个页面是索引，交互地图和各区域攻略会讲得更细。',
    sections: [
      { heading: '已知区域', body: ['预览版本和相关报道目前点名了两个可游玩区域。'], bullets: ['Hallowgrove——预览报道点名的地图，有独立攻略与 chaos 变体', 'Brandrgarde——与 Hallowgrove 一同被提及，同样有 chaos 变体', 'Chaos 变体——据预览报道，是已知区域的高风险版本'] },
      { heading: '仍未确认的内容', body: ['具体标记位置、正式版完整地图数量，以及 1.0 是否会追加新区域，目前都还没有确认。请把这份清单当作预览版本展示的内容，而不是最终地图名单。'] },
    ],
    cards: [
      { title: 'Hallowgrove 攻略', desc: '路线优先级与目前已知信息。', href: '/zh/hallowgrove' },
      { title: 'Brandrgarde 攻略', desc: '已知状态与 chaos 变体笔记。', href: '/zh/brandrgarde' },
      { title: '交互式地图', desc: '平移、缩放并按撤离点、Boss、战利品筛选。', href: '/zh/map' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 有多少张地图？', a: '预览报道目前点名了两张——Hallowgrove 与 Brandrgarde，各自带有 chaos 变体。正式版完整地图数量尚未确认。' },
      { q: '什么是 chaos 变体？', a: '据预览报道，是已知地图的高风险版本，具体差异需要正式版确认。' },
    ],
  },
  {
    slug: 'crossplay',
    group: 'news',
    title: 'Mistfall Hunter 跨平台联机与跨平台进度：目前确认了什么？',
    description: 'Mistfall Hunter 跨平台联机与跨平台进度追踪，覆盖 PC、Steam、Xbox、Game Pass 与 PS5 玩家关心的问题。',
    eyebrow: '跨平台追踪',
    h1: 'Mistfall Hunter 跨平台联机',
    lead: '对撤离类游戏来说跨平台联机很关键，但在官方公布最终规则之前，应该当作发售观察项来看待。',
    updated: '发售前追踪：具体的跨平台联机与跨平台进度规则仍需官方最终确认。',
    sections: [
      { heading: '目前比较可能的情况', body: ['由于 Mistfall Hunter 计划登陆 PC、Xbox Series X|S 与 PS5，玩家自然会期待跨平台匹配。Xbox Play Anywhere 意味着 Xbox 生态内的账号延续性，但这不等同于全平台的跨平台进度。'] },
      { heading: '发售前需要核实的事项', body: ['需要确认 Steam 是否能与 Xbox App 玩家匹配、PS5 是否在同一个匹配池内、主机玩家能否选择退出，以及账号进度是否能跨商店延续。'], bullets: ['Steam 与 Xbox App 匹配', 'Xbox 与 PS5 匹配', '跨平台联机退出选项', '按账号计的跨平台进度', '按输入方式的匹配机制'] },
    ],
    faqs: [
      { q: 'Mistfall Hunter 有跨平台联机吗？', a: '目前还没有完全确认。游戏是多平台的，但最终的跨平台规则应该在发售前后再核实。' },
      { q: 'Steam 和 Xbox App 玩家会共享进度吗？', a: 'Xbox Play Anywhere 有助于 Xbox 生态内的延续性，但 Steam 到 Xbox 的跨平台进度需要单独确认。' },
      { q: '主机玩家能选择不和 PC 玩家匹配吗？', a: '这个选项还没有确认。这是发售菜单开放后需要重点检查的一项设置。' },
    ],
  },
  {
    slug: 'preload',
    group: 'news',
    title: 'Mistfall Hunter 预载、下载大小与发售准备',
    description: 'Mistfall Hunter 预载追踪，覆盖下载时机、文件大小、Steam、Xbox App、Game Pass、PS5 与发售当天的准备事项。',
    eyebrow: '预载追踪',
    h1: 'Mistfall Hunter 预载与下载大小',
    lead: '预载和文件大小信息通常要临近发售才会最终确定，这个页面会持续追踪该检查什么、如何在服务器开放前做好准备。',
    sections: [
      { heading: '预载状态', body: ['1.0 正式版的最终预载时间和下载大小本页暂未锁定。Steam、Xbox App、Game Pass 和 PS5 各自公布预载信息的时间可能都不一样。作为参考，2026 年 6 月公测客户端大小约为 45GB，可用于估算所需空间，但正式版最终大小可能有所不同。'] },
      { heading: '发售准备清单', body: ['先把游戏加入愿望单或库，预留足够的 SSD 空间，更新显卡驱动，并在冲进拥挤的首日撤离房间之前先看一遍新手指南。'], bullets: ['预留 SSD 空间', '更新显卡驱动', '检查 Game Pass 的安装按钮', '关注 Steam 动态', '阅读撤离指南'] },
    ],
    faqs: [
      { q: 'Mistfall Hunter 能预载吗？', a: '本页暂未确认预载信息，请临近发售时查看你的商店平台。' },
      { q: 'Mistfall Hunter 有多大？', a: '2026 年 6 月公测客户端约为 45GB。1.0 正式版的确切大小仍需商店确认，但公测大小可以作为预留空间的参考。' },
      { q: '应该装在 SSD 上吗？', a: '是的。对于地图密集的现代动作 RPG 来说，SSD 是更稳妥的选择。' },
    ],
  },
  {
    slug: 'beta-rewards',
    group: 'news',
    title: 'Mistfall Hunter 测试奖励、Demo 进度与删档说明',
    description: 'Mistfall Hunter 测试奖励指南，覆盖 Steam Next Fest 试玩进度、删档情况、外观奖励，以及哪些内容会延续到正式版。',
    eyebrow: '测试奖励',
    h1: 'Mistfall Hunter 测试奖励与进度',
    lead: '测试进度不会延续，但 Bellring 现已确认两项测试参与者会在发售时获得的具体外观奖励。',
    sections: [
      { heading: '进度是否会延续', body: ['Steam Next Fest 风格的试玩通常是测试环境，撤离类游戏尤其容易在测试和正式版之间删档进度。Bellring 已确认 2026 年 6 月的公测是完整删档：游戏内进度不会延续到 1.0 正式版。'] },
      { heading: '已确认的发售奖励', body: ['Bellring 通过官方帖子确认，凡是用公测同一账号登录的玩家，发售时会通过游戏内邮件收到头像框"Bell of Return"与姿势"Finger Heart"。除了这两项具体内容，其余奖励细节仍应视为未确认。'] },
      { heading: '其他可能的奖励类型', body: ['除了上述两项已确认内容，其余与测试关联的奖励大概率会延续测试期已经出现的纯外观模式（徽章、姿势、货币礼包），而不会是影响数值的内容。'], bullets: ['头像框（已确认：Bell of Return）', '姿势/表情（已确认：Finger Heart）', '其他外观（未确认）', '首发参与徽章（未确认）'] },
    ],
    faqs: [
      { q: 'Demo 进度会延续吗？', a: '不会——Bellring 已确认公测是完整删档。只有下面这两项具体外观奖励会延续，游戏内进度不会。' },
      { q: '目前确认了哪些测试奖励？', a: 'Bellring 已确认，用测试期账号登录的玩家发售时会获得头像框"Bell of Return"和姿势表情"Finger Heart"。' },
      { q: '需要用同一个账号吗？', a: '是的——Bellring 已确认必须使用测试期同一账号登录才能领取这些奖励。' },
    ],
  },
  {
    slug: 'party-size',
    group: 'guides',
    title: 'Mistfall Hunter 队伍人数：单人、双人、三人与组队玩法',
    description: 'Mistfall Hunter 队伍人数指南，覆盖单人玩法、组队撤离、团队分工、辅助职业价值，以及小队该如何准备。',
    eyebrow: '组队玩法',
    h1: 'Mistfall Hunter 队伍人数',
    lead: 'Mistfall Hunter 既可以单人也可以组队。队伍越大，职业分工和沟通就越重要。',
    sections: [
      { heading: '单人 vs 组队', body: ['单人玩法更看重潜行和克制。组队则可以把前排、远程输出、爆发和辅助分给不同人，让 Boss 战和激烈的撤离争夺更安全。'] },
      { heading: '稳固的团队搭配', body: ['一个简单的团队思路是前排＋输出＋辅助或远程控制。当队友能配合并响应辅助指令时，Seer 的价值会明显提升。'], bullets: ['前排占位', '远程输出惩罚对手', '辅助稳住战局', '共享撤离路线', '搜刮前先沟通'] },
    ],
    faqs: [
      { q: 'Mistfall Hunter 能单人玩吗？', a: '可以，但单人玩家应避免拖长且动静大的战斗，尽早确保撤离。' },
      { q: 'Seer 在小队里强吗？', a: '强。当队友能配合治疗、护盾和控制指令时，Seer 会明显更强。' },
      { q: '新手应该组队吗？', a: '组队有帮助，但新手仍然应该学会低风险的单人路线，理解撤离的压力。' },
    ],
  },
  {
    slug: 'death-penalty',
    group: 'guides',
    title: 'Mistfall Hunter 死亡惩罚：死亡后会失去什么',
    description: 'Mistfall Hunter 死亡惩罚指南，解释战利品损失、撤离风险、装备保管、稳妥打法，以及为什么提前撤离往往是对的。',
    eyebrow: '死亡惩罚',
    h1: 'Mistfall Hunter 死亡后会发生什么？',
    lead: '死亡带来的压力正是撤离玩法的核心。如果你在撤离前死亡，一局游戏可能从满载而归瞬间变成血本无归。',
    sections: [
      { heading: '会失去什么', body: ['据试玩报道，预期的撤离规则是：撤离前死亡会失去本局携带和搜刮到的战利品与装备。只有成功撤离的物品才会真正入库。'] },
      { heading: '如何减少损失', body: ['只携带你能承受损失的装备，用早期的局来熟悉路线，在拿到有意义的收获后就选择离开，而不是想在一张图里榨干每个宝箱和 Boss。'], bullets: ['练手阶段用便宜配装', '尽早把收获入库', '捡到大件后别贪', '清楚最近的出口在哪', '搜刮前先听动静'] },
    ],
    faqs: [
      { q: '死亡是不是会失去所有东西？', a: '应该预期会失去本局携带的东西，以及撤离前搜刮到的战利品。' },
      { q: '提前离开是不是不好？', a: '不是。在撤离类游戏里，带着适度收益提前离开往往才是正确打法。' },
    ],
  },
  {
    slug: 'hallowgrove',
    group: 'database',
    title: 'Mistfall Hunter Hallowgrove 地图攻略',
    description: 'Mistfall Hunter Hallowgrove 地图攻略，覆盖已知的测试期地图信息、路线规划、搜刮风险、Boss 压力与撤离优先级。',
    eyebrow: '地图攻略',
    h1: 'Hallowgrove 地图攻略',
    lead: 'Hallowgrove 是已知的预览地图之一，也是发售后适合优先熟悉路线的目标区域。',
    sections: [
      { heading: '为什么 Hallowgrove 值得关注', body: ['预览报道中把 Hallowgrove 列为可游玩区域，这让它成为发售前比较稳妥的地图相关关键词。具体标记位置在正式版实测前，应视为示意性质。', '提示：部分公测相关报道把这张地图拼作"Hallowgrave"而非"Hallowgrove"。在 Bellring 官方材料统一拼法之前，本站会同时关注两种拼法。'] },
      { heading: '路线优先级', body: ['先从安全的移动路线、可能的撤离通道、Boss 附近的危险区域，以及玩家常聚集的位置入手。等正式版数据核实后，地图攻略会更加精确。'], bullets: ['先侦察出口', '早期避免招惹 Boss', '留意玩家动向', '尽早把首件升级入库', '发售后更新标记'] },
    ],
    faqs: [
      { q: 'Hallowgrove 确认存在吗？', a: 'Hallowgrove 在预览报道中作为已知可游玩地图出现过。' },
      { q: '标记位置是最终版吗？', a: '不是。发售前的标记应视为示意性质，等正式版地图数据核实后再更新。' },
    ],
  },
  {
    slug: 'brandrgarde',
    group: 'database',
    title: 'Mistfall Hunter Brandrgarde 地图攻略',
    description: 'Mistfall Hunter Brandrgarde 地图攻略，覆盖已知的预览版地图信息、chaos 变体、撤离路线与发售追踪。',
    eyebrow: '地图攻略',
    h1: 'Brandrgarde 地图攻略',
    lead: 'Brandrgarde 与 Hallowgrove 一同出现在预览报道中，还带有 chaos 变体，是一个值得提前准备的地图关键词。',
    sections: [
      { heading: '已知情况', body: ['预览报道把 Brandrgarde 列为当前测试版本的一部分。具体拼写和正式版本地化名称应在发售时核实，但现在提前准备这个话题是值得的。'] },
      { heading: 'Chaos 变体', body: ['Chaos 变体看起来是已知区域的高风险版本。等敌人密度、战利品质量和撤离压力被核实后，应该单独追踪这些内容。'], bullets: ['普通路线笔记', 'Chaos 变体笔记', 'Boss 压力', '战利品价值', '撤离选项'] },
    ],
    faqs: [
      { q: 'Brandrgarde 是一张地图吗？', a: '预览报道在测试版本背景下提到过 Brandrgarde。正式的游戏内命名应在发售时核实。' },
      { q: '什么是 chaos 变体？', a: '目前看起来是已知地图的高风险版本，但具体规则需要正式版确认。' },
    ],
  },
  {
    slug: 'controller',
    group: 'tools',
    title: 'Mistfall Hunter 手柄指南：Xbox、PS5 与 PC 设置',
    description: 'Mistfall Hunter 手柄指南，覆盖 Xbox、PS5、PC 手柄玩法、灵敏度、近战格挡、远程瞄准以及需要检查的设置。',
    eyebrow: '手柄',
    h1: 'Mistfall Hunter 手柄指南',
    lead: 'Mistfall Hunter 的第三人称动作战斗节奏明确，因此手柄设置对近战时机和远程压制都很重要。',
    sections: [
      { heading: '手柄的优势', body: ['近战的移动、格挡、闪避和技能时机在手柄上应该会比较自然。Mercenary 和 Withered Knight 这类打法尤其受益于手感舒适的防御输入。'] },
      { heading: '需要调整的设置', body: ['远程职业需要仔细调整镜头和瞄准灵敏度。如果发售时有辅助瞄准功能，Blackarrow 玩家应该在打 PvP 前先测试一下。'], bullets: ['摄像机灵敏度', '瞄准灵敏度', '震动', '按键重新映射', '辅助瞄准选项'] },
    ],
    faqs: [
      { q: 'Mistfall Hunter 能用手柄玩吗？', a: '可以，主机版本默认支持手柄，PC 玩家发售时也应检查手柄相关设置。' },
      { q: '远程职业适合用手柄吗？', a: '可以适合，但 Blackarrow 等远程配装很依赖灵敏度调试。' },
    ],
  },
];

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
