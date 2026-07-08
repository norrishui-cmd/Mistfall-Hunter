import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

// ---------------------------------------------------------------------------
// Long-tail batch 3.
//
// Fills confirmed gaps found during a site audit:
//  - Blackarrow and Withered Knight had build pages but no standalone class
//    overview (Sorcerer/Shadowstrix/Mercenary/Seer already had one) — matched
//    to that exact sibling pattern, same non-indexable gating (gameplay
//    balance content, waits for 1.0 like its siblings).
//  - Glossary, language support, and community links were gaps with zero
//    fabrication risk (definitions of already-established terms, and facts
//    sourced directly from the official Steam listing / official Discord) —
//    these are evergreen and safe to index now.
//  - A comparison page draws on sourced press/beta-player comparisons
//    (labelled as such, not presented as Claude's own ranking).
// ---------------------------------------------------------------------------

export const enCluster3Pages: SeoPage[] = [
  {
    slug: 'blackarrow',
    group: 'guides',
    title: 'Mistfall Hunter Blackarrow Guide: Builds, Strengths & Weaknesses',
    description: 'Mistfall Hunter Blackarrow guide covering role, strengths, weaknesses, beginner tips, kiting, and build direction for the Archer and Hunter paths.',
    eyebrow: 'Class guide',
    h1: 'Blackarrow guide',
    lead: 'Blackarrow is the precision-ranged pick: less raw burst than Sorcerer, but steadier pressure and stronger kiting tools.',
    sections: [
      { heading: 'Role', body: ['Blackarrow plays a bow-focused ranged role split between two paths: Archer, built around charged shots and detonations for burst and boss damage, and Hunter, built around traps, status effects, and scouting for sustained control.'] },
      { heading: 'Strengths and weaknesses', body: ['The class rewards spacing and patience — charged shots and status stacks punish anyone who stays in your sightline. The weakness is the same as any ranged class: get closed on before you can create distance, and your options shrink fast.'] },
      { heading: 'How to learn Blackarrow', body: ['Practice holding distance and using terrain before chasing damage. Archer players should learn charge timing; Hunter players should learn which status effects stack instead of overwrite.'], bullets: ['Hold max range early on', 'Use cover to reset angles', 'Learn your charge timing', "Don't fight in the open vs melee", 'Kite instead of trading'] },
    ],
  },
  {
    slug: 'withered-knight',
    group: 'guides',
    title: 'Mistfall Hunter Withered Knight Guide: Builds, Strengths & Weaknesses',
    description: 'Mistfall Hunter Withered Knight guide covering role, strengths, weaknesses, beginner tips, and build direction around the Wither mechanic and grapple.',
    eyebrow: 'Class guide',
    h1: 'Withered Knight guide',
    lead: 'The newest class: a heavy greatsword duelist built around stacking Wither for a detonation window, with a grapple that denies escapes.',
    sections: [
      { heading: 'Role', body: ['Withered Knight is a commitment-heavy melee class. It stacks a debuff called Wither in close combat, then detonates it for a burst window, while a grappling hook lets it drag fleeing targets back into range.'] },
      { heading: 'Strengths and weaknesses', body: ["The grapple is what separates it from other melee picks — it turns a losing chase into a finish. The tradeoff is that most of its power lives at melee range, so it's vulnerable to kiting and burst mages if it can't close the gap."] },
      { heading: 'How to learn Withered Knight', body: ['Learn parry timing before chasing Wither stacks — panicking through a counter loses more than it gains. Save the grapple to punish an escape attempt rather than opening with it, and track stamina across a full combo instead of just the first swing.'], bullets: ['Learn parry timing first', 'Build Wither patiently', 'Save the grapple for finishers', 'Watch stamina across combos', "Don't overextend without an escape"] },
    ],
  },
  {
    slug: 'glossary',
    group: 'about',
    title: 'Mistfall Hunter Glossary: Gyldenmist, Gyldhunter, Soul of Return & More',
    description: 'A plain-language glossary of Mistfall Hunter terms — Gyldenmist, Gyldhunter, Gyldenblood, Weavereach, Web of Fate, Returner Woodling, Soul of Return, and more.',
    eyebrow: 'Glossary',
    h1: 'Mistfall Hunter glossary',
    lead: "Quick definitions for the game's own vocabulary, so lore and mechanics terms make sense the first time you see them.",
    sections: [
      { heading: 'World and story terms', body: ['These describe the setting and premise.'], bullets: [
        'Weavereach — the world the story is set in, left in ruin after a war between gods.',
        "Gyldenmist — the corrupting golden fog that spread after the gods fell, twisting the land and its creatures.",
        'Web of Fate — the shattered cosmic order Gyldhunters are ultimately trying to help mend.',
        'Dew — the mysterious maiden who revives fallen warriors as Gyldhunters.',
        'Gyldhunter — what a revived, playable warrior is called in-world; effectively "you."',
      ] },
      { heading: 'Gameplay and loop terms', body: ['These describe systems you interact with directly.'], bullets: [
        'Gyldenblood (sometimes spelled Gyldenblod) — the corrupted resource harvested from the mist, core to progression.',
        'Corroded — the mutated monsters roaming Gyldenmist-covered zones.',
        'Returner Woodling — a rare creature you must hunt down to obtain a Soul of Return.',
        'Soul of Return — the item earned by defeating a Returner Woodling; without it, you cannot open a way home.',
        'Windrest — the hub/camp area Gyldhunters return to between runs; press coverage sometimes calls this simply "camp."',
        'Mist Lords — the boss-tier enemies found in mist zones.',
      ] },
    ],
    faqs: [
      { q: 'Is it Gyldenblood or Gyldenblod?', a: 'Both spellings show up across official and press material. This site defaults to "Gyldenblood" but treats either as the same resource.' },
      { q: 'Are Windrest and "camp" the same place?', a: 'They appear to refer to the same hub area — "Windrest" is the in-world name, while "camp" is a plainer description used in some press coverage.' },
    ],
  },
  {
    slug: 'language-support',
    group: 'news',
    title: 'Mistfall Hunter Language Support: Is It in Chinese? Full List',
    description: 'Mistfall Hunter language support tracker — confirmed interface and subtitle languages from the official Steam listing, including Simplified and Traditional Chinese, plus what has full voice acting.',
    eyebrow: 'Language support',
    h1: 'What languages does Mistfall Hunter support?',
    lead: "Yes — Simplified Chinese is on the official Steam language list, alongside roughly two dozen other interface languages. Here's the confirmed breakdown.",
    sections: [
      { heading: 'Confirmed interface and subtitle languages', body: ["The official Steam listing includes Simplified Chinese and Traditional Chinese alongside Japanese, Korean, Thai, several European languages, and more. This covers menus and subtitles — it's a broad list for a launch title."] },
      { heading: 'Voice acting is more limited', body: ['English is listed with full voice acting. Other supported languages, including both Chinese variants, currently appear to cover text and subtitles rather than a full dub — treat full voice-over in other languages as unconfirmed until stated otherwise.'] },
      { heading: 'What could still change', body: ['Storefront language lists can be revised close to launch, so treat this as the current confirmed set rather than a permanent guarantee. This page will be updated if the list changes.'] },
    ],
    faqs: [
      { q: 'Does Mistfall Hunter support Simplified Chinese?', a: 'Yes. Simplified Chinese is listed as a supported interface/subtitle language on the official Steam store page.' },
      { q: 'Is there full Chinese voice acting?', a: 'Not confirmed. English is listed with full voice acting; other languages currently appear to be text/subtitle only.' },
    ],
  },
  {
    slug: 'similar-games',
    group: 'guides',
    title: 'Mistfall Hunter: Similar Games & How It Compares',
    description: 'How Mistfall Hunter compares to other extraction and PvPvE games, based on sourced preview coverage and beta player reports rather than our own ranking.',
    eyebrow: 'Comparisons',
    h1: 'Games like Mistfall Hunter',
    lead: 'Mistfall Hunter sits in the PvPvE extraction genre alongside a small set of well-known names — here is how preview coverage and players describe the differences.',
    sections: [
      { heading: 'vs. Dark and Darker', body: ["This is the comparison that comes up most. Beta players and preview coverage describe Mistfall Hunter as third-person with faster, more fluid combat, versus Dark and Darker's slower, first-person dungeon-crawl feel. Both share the extract-with-loot-or-lose-it-all structure; the camera and pacing are the biggest reported differences."] },
      { heading: 'vs. Escape from Tarkov and Hunt: Showdown', body: ['Mistfall Hunter is melee-and-magic action combat rather than a firearms-based extraction shooter, which is the main structural difference from Tarkov and Hunt: Showdown. All three share the same core tension — loot, avoid or fight other players, and extract before you lose it — but Mistfall Hunter leans further into Souls-like combat than either of those titles.'] },
      { heading: 'How preview coverage frames it', body: ["One widely-cited framing describes it as landing somewhere between Elden Ring and Escape from Tarkov — Souls-like combat feel layered onto an extraction loot loop. Treat comparisons like this as descriptive shorthand from previews, not a claim that the games play identically."] },
    ],
    faqs: [
      { q: 'Is Mistfall Hunter like Dark and Darker?', a: 'Similar core loop (extract with loot or lose it), but Mistfall Hunter is third-person with reportedly faster combat, versus Dark and Darker\u2019s first-person pace.' },
      { q: 'Is it a shooter like Tarkov or Hunt: Showdown?', a: 'No — it\u2019s melee-and-magic action combat, not firearms-based. The extraction structure (loot, risk, extract or lose it) is the shared element.' },
    ],
  },
];

export const zhCluster3Pages: SeoPage[] = [
  {
    slug: 'blackarrow',
    group: 'guides',
    title: 'Mistfall Hunter Blackarrow 攻略：构筑方向、强项与弱点',
    description: 'Mistfall Hunter Blackarrow 攻略，覆盖定位、强项、弱点、新手要点，以及 Archer 与 Hunter 路线的构筑方向。',
    eyebrow: '职业攻略',
    h1: 'Blackarrow 攻略',
    lead: 'Blackarrow 是精准远程担当：论纯爆发不如 Sorcerer，但持续压制和拉扯能力更稳。',
    sections: [
      { heading: '定位', body: ['Blackarrow 是以弓为核心的远程职业，分两条路线：Archer 侧重蓄力箭与引爆，主打爆发和 Boss 输出；Hunter 侧重陷阱、状态与侦察，主打持续控制。'] },
      { heading: '强项与弱点', body: ['这个职业奖励站位与耐心——蓄力箭和叠加的状态效果会惩罚任何停留在你射线上的对手。弱点和所有远程职业一样：一旦被贴脸、来不及拉开距离，选择会迅速变少。'] },
      { heading: '怎么上手 Blackarrow', body: ['先练站位和利用地形，而不是一味追伤害。玩 Archer 要练蓄力的时机；玩 Hunter 要搞清楚哪些状态效果是叠加而不是覆盖。'], bullets: ['前期尽量保持最大射程', '用掩体重置角度', '练好自己的蓄力节奏', '别在空地和近战正面对拼', '放风筝而不是硬拼消耗'] },
    ],
  },
  {
    slug: 'withered-knight',
    group: 'guides',
    title: 'Mistfall Hunter Withered Knight 攻略：构筑方向、强项与弱点',
    description: 'Mistfall Hunter Withered Knight 攻略，覆盖定位、强项、弱点、新手要点，以及围绕 Wither 机制与抓钩的构筑方向。',
    eyebrow: '职业攻略',
    h1: 'Withered Knight 攻略',
    lead: '最新职业：主打大剑的重型近战，围绕叠加 Wither 打出引爆窗口，还带一个能封锁逃跑的抓钩。',
    sections: [
      { heading: '定位', body: ['Withered Knight 是一个高投入的近战职业。它在近战中叠加一种叫 Wither 的减益，然后引爆打出爆发窗口，同时抓钩能把想逃跑的目标拽回攻击范围。'] },
      { heading: '强项与弱点', body: ['抓钩是它和其他近战职业最大的区别——能把追不上的局面直接变成收人头。代价是它的大部分强度都建立在近战距离上，一旦贴不上身，就很怕被放风筝或被法系爆发点掉。'] },
      { heading: '怎么上手 Withered Knight', body: ['先练招架时机，再去追求叠 Wither 层数——慌乱之下强吃反击往往得不偿失。抓钩留着用来终结或封锁对手逃跑，而不是一上来就用；耐力要按整套连招规划，而不是只看第一下。'], bullets: ['先练好招架时机', '耐心叠 Wither', '抓钩留给收尾', '按整套连招规划耐力', '没有退路就别贸然深入'] },
    ],
  },
  {
    slug: 'glossary',
    group: 'about',
    title: 'Mistfall Hunter 术语表：Gyldenmist、Gyldhunter、Soul of Return 等',
    description: 'Mistfall Hunter 术语速查——Gyldenmist、Gyldhunter、Gyldenblood、Weavereach、Web of Fate、Returner Woodling、Soul of Return 等常见名词的简明解释。',
    eyebrow: '术语表',
    h1: 'Mistfall Hunter 术语表',
    lead: '游戏里那些专有名词的快速解释，让你第一次看到剧情或机制术语时就能看懂。',
    sections: [
      { heading: '世界观与剧情类术语', body: ['这些描述背景设定和游戏前提。'], bullets: [
        'Weavereach —— 故事发生的世界，在神祇之战后化为废墟。',
        'Gyldenmist —— 诸神陨落后蔓延开的腐蚀性金色浓雾，扭曲了大地与其中的生物。',
        'Web of Fate —— 已经破碎的命运秩序，Gyldhunter 最终要做的就是修补它。',
        'Dew —— 那位复活阵亡战士、让他们成为 Gyldhunter 的神秘少女。',
        'Gyldhunter —— 被复活的可操控战士在世界观里的称呼，基本上就是"你"。',
      ] },
      { heading: '玩法与循环类术语', body: ['这些描述你会直接接触到的系统。'], bullets: [
        'Gyldenblood（有时也拼作 Gyldenblod）—— 从浓雾中收割的腐化资源，是养成的核心。',
        'Corroded —— 游荡在被 Gyldenmist 覆盖区域里的变异怪物。',
        'Returner Woodling —— 一种需要猎杀才能拿到 Soul of Return 的稀有生物。',
        'Soul of Return —— 击败 Returner Woodling 后获得的道具；没有它就无法开启回家的路。',
        'Windrest —— Gyldhunter 每局之间返回的枢纽/营地区域；部分媒体报道里也直接简称为"camp"。',
        'Mist Lords —— 浓雾区域里的 Boss 级敌人。',
      ] },
    ],
    faqs: [
      { q: '是 Gyldenblood 还是 Gyldenblod？', a: '官方与媒体材料里两种拼法都出现过。本站默认使用 "Gyldenblood"，但两者指的是同一种资源。' },
      { q: 'Windrest 和 "camp" 是同一个地方吗？', a: '看起来是同一个枢纽区域——Windrest 是世界观里的名字，"camp" 是部分媒体报道里更直白的说法。' },
    ],
  },
  {
    slug: 'language-support',
    group: 'news',
    title: 'Mistfall Hunter 语言支持：有中文吗？完整列表',
    description: 'Mistfall Hunter 语言支持追踪——来自 Steam 官方页面确认的界面与字幕语言列表，含简体中文与繁体中文，以及哪些语言有完整配音。',
    eyebrow: '语言支持',
    h1: 'Mistfall Hunter 支持哪些语言？',
    lead: '有——简体中文在 Steam 官方语言列表里，同时还支持大约二十多种其他界面语言。以下是确认过的具体情况。',
    sections: [
      { heading: '已确认的界面与字幕语言', body: ['Steam 官方页面列出的语言包含简体中文与繁体中文，此外还有日语、韩语、泰语，以及多种欧洲语言等等。这覆盖了菜单和字幕——对一款首发作品来说列表相当齐全。'] },
      { heading: '配音支持更有限', body: ['英语标注为完整配音。包括简繁中文在内的其他语言，目前看起来只覆盖文本和字幕，而非完整配音——在官方另行说明之前，其他语言的完整配音应视为未确认。'] },
      { heading: '还可能发生变化', body: ['商店的语言列表在临近发售时可能会调整，所以这份内容应被当作"当前已确认版本"，而不是永久保证。列表如有变动，本页会同步更新。'] },
    ],
    faqs: [
      { q: 'Mistfall Hunter 支持简体中文吗？', a: '支持。简体中文在 Steam 官方商店页面被列为支持的界面/字幕语言。' },
      { q: '有完整的中文配音吗？', a: '尚未确认。英语标注为完整配音；其他语言目前看起来只有文本/字幕。' },
    ],
  },
  {
    slug: 'similar-games',
    group: 'guides',
    title: 'Mistfall Hunter：同类游戏与对比',
    description: 'Mistfall Hunter 与其他撤离类 / PvPvE 游戏的对比，基于有来源的预览报道与测试玩家反馈，而非本站自己的主观排名。',
    eyebrow: '同类对比',
    h1: '和 Mistfall Hunter 类似的游戏',
    lead: 'Mistfall Hunter 属于 PvPvE 撤离类这个不算大的赛道，以下是预览报道和玩家们描述的具体差异。',
    sections: [
      { heading: '对比 Dark and Darker', body: ['这是被提及最多的对比。测试玩家和预览报道把 Mistfall Hunter 描述为第三人称、战斗更流畅更快，相对地 Dark and Darker 是第一人称、节奏更偏地下城慢速探索。两者都共享"带着战利品撤离，否则失去一切"的结构；镜头视角和节奏是被提及最多的差异。'] },
      { heading: '对比 Escape from Tarkov 与 Hunt: Showdown', body: ['Mistfall Hunter 是近战+魔法的动作战斗，而不是枪械射击类撤离游戏，这是它和 Tarkov、Hunt: Showdown 最主要的结构差异。三者共享同一种核心张力——搜刮、与其他玩家对抗或避战、赶在失去一切之前撤离——但 Mistfall Hunter 在战斗上更偏 Souls-like，比这两款都更明显。'] },
      { heading: '预览报道怎么形容它', body: ['一种被广泛引用的说法，是把它形容成介于《艾尔登法环》和《逃离塔科夫》之间——Souls-like 的战斗手感，叠加在撤离搜刮的循环之上。这类对比应视为预览报道里的描述性说法，而不是说这些游戏玩起来完全一样。'] },
    ],
    faqs: [
      { q: 'Mistfall Hunter 像 Dark and Darker 吗？', a: '核心循环相似（带着战利品撤离，否则失去一切），但 Mistfall Hunter 是第三人称，据反馈战斗更快，而 Dark and Darker 是第一人称、节奏更慢。' },
      { q: '它是像 Tarkov 或 Hunt: Showdown 那样的射击游戏吗？', a: '不是——它是近战加魔法的动作战斗，不是枪械射击。共同点在于撤离结构（搜刮、冒险、撤离或失去一切）。' },
    ],
  },
];

export const enCluster3Links: PriorityLink[] = enCluster3Pages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhCluster3Links: PriorityLink[] = zhCluster3Pages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
