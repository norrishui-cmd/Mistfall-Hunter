// ---------------------------------------------------------------------------
// Mistfall Hunter builds & affixes data.
//
// HONESTY NOTE: the game launches July 29, 2026 and there is no settled meta
// yet. These are ARCHETYPE STARTER DIRECTIONS grounded in each class's known
// mechanics/paths — not finalized builds with confirmed numbers. Priorities are
// general stat directions, not specific affix values. Replace with verified
// builds (skills, talents, runes, exact affixes) as the meta forms.
//
// HOW TO UPDATE: add/edit entries in BUILDS. To add a build, copy a { } block
// and set `cls` to a CLASS_LIST id. Both language pages read this file.
// ---------------------------------------------------------------------------

export interface ClassRef {
  id: string;
  name: string;
}

export const CLASS_LIST: ClassRef[] = [
  { id: 'sorcerer', name: 'Sorcerer' },
  { id: 'shadowstrix', name: 'Shadowstrix' },
  { id: 'mercenary', name: 'Mercenary' },
  { id: 'blackarrow', name: 'Blackarrow' },
  { id: 'seer', name: 'Seer' },
  { id: 'withered-knight', name: 'Withered Knight' },
];

export interface Build {
  id: string;
  cls: string; // CLASS_LIST id
  title: string;
  tags: string[]; // canonical (English) keys; ZH page maps via TAG_ZH
  en: { summary: string; core: string; priorities: string[] };
  zh: { summary: string; core: string; priorities: string[] };
}

export const TAG_ZH: Record<string, string> = {
  Beginner: '新手',
  Solo: '单人',
  PvP: 'PvP',
  PvE: 'PvE',
  Group: '组队',
};

export const BUILDS: Build[] = [
  {
    id: 'sorc-elemental',
    cls: 'sorcerer',
    title: 'Elemental Control',
    tags: ['PvE', 'Group'],
    en: {
      summary: 'Spread fire, thunder, and ice reactions to clear packs and lock down fights from range.',
      core: 'Lean on the Elemental path; chain reactions for area damage and crowd control, and blink out the moment anyone closes.',
      priorities: ['Cooldown reduction', 'Area / reaction damage', 'Just enough survivability to take one hit'],
    },
    zh: {
      summary: '铺开火、雷、冰的元素反应，清群并从远处锁住战局。',
      core: '主走 Elemental 路线；用连锁反应打范围与控制，一旦有人贴近立刻闪走。',
      priorities: ['冷却缩减', '范围 / 反应伤害', '够吃一下的最低生存力'],
    },
  },
  {
    id: 'sorc-stardust',
    cls: 'sorcerer',
    title: 'Stardust Burst',
    tags: ['PvP', 'Solo'],
    en: {
      summary: 'Instant-cast burst that deletes a single target before they reach you.',
      core: 'Take the Stardust path for snap burst; open from max range, commit a combo, and disengage with your blink.',
      priorities: ['Burst / crit', 'Cooldown on your escape', 'Positioning over raw defense'],
    },
    zh: {
      summary: '瞬发爆发，在对手贴到你之前就把单体秒掉。',
      core: '走 Stardust 路线吃瞬发爆发；从最大距离开手、打完一套连招，用闪现脱离。',
      priorities: ['爆发 / 暴击', '位移技能的冷却', '站位优先于纯防御'],
    },
  },
  {
    id: 'strix-ambush',
    cls: 'shadowstrix',
    title: 'Shadow Ambush',
    tags: ['Solo', 'PvP'],
    en: {
      summary: 'Open from stealth, burst a target down, then vanish and reset.',
      core: 'Pick your fights: land the stealth opener, blow your burst window, and re-stealth rather than trading in the open.',
      priorities: ['Opener / burst damage', 'Stealth and reset cooldowns', 'Mobility to choose engagements'],
    },
    zh: {
      summary: '从隐身开手、爆发秒掉目标，然后消失重置。',
      core: '挑着打：打中隐身起手、倾泻爆发窗口，再隐身，而不是在明面对拼。',
      priorities: ['起手 / 爆发伤害', '隐身与重置的冷却', '用机动性选择接战'],
    },
  },
  {
    id: 'merc-block',
    cls: 'mercenary',
    title: 'Block & Punish',
    tags: ['Beginner', 'Solo', 'Group'],
    en: {
      summary: 'The safest way to learn the game — turtle up, punish whiffs, and out-sustain mistakes.',
      core: 'Sword & shield: block and parry to bait attacks, then punish. Roll the red (unblockable) hits instead of blocking them.',
      priorities: ['Survivability / armor', 'Stamina sustain', 'Steady single-target damage'],
    },
    zh: {
      summary: '最稳的入门方式——稳住防御、惩罚挥空、靠续航扛过失误。',
      core: '单手剑盾：用格挡和招架诱招再反打。红光（不可格挡）要翻滚，别去硬挡。',
      priorities: ['生存 / 护甲', '耐力续航', '稳定的单体伤害'],
    },
  },
  {
    id: 'merc-hammer',
    cls: 'mercenary',
    title: 'Hammer Stagger',
    tags: ['Group', 'PvP'],
    en: {
      summary: 'Trade the shield for a two-hander and bully fights with stuns and stagger.',
      core: 'Pressure with heavy swings, stack stagger, and chain stuns to open targets up for your team.',
      priorities: ['Impact / stagger', 'Stamina for big swings', 'Enough armor to stay in melee'],
    },
    zh: {
      summary: '把盾换成双手武器，用击晕和硬直压着打。',
      core: '用重击施压、叠硬直、连控，为队伍把目标打出破绽。',
      priorities: ['冲击 / 硬直', '支撑重击的耐力', '够留在近战的护甲'],
    },
  },
  {
    id: 'arrow-marksman',
    cls: 'blackarrow',
    title: 'Marksman (Archer)',
    tags: ['PvE', 'Solo'],
    en: {
      summary: 'Charged shots and arrow detonations for big damage from safety.',
      core: 'Take the Archer path; weave charged shots, keep distance, and kite anything that tries to close.',
      priorities: ['Ranged / charged-shot damage', 'Crit', 'Mobility to hold spacing'],
    },
    zh: {
      summary: '蓄力箭与箭矢引爆，从安全距离打出高伤。',
      core: '走 Archer 路线；穿插蓄力箭、保持距离，放风筝任何想贴近的目标。',
      priorities: ['远程 / 蓄力箭伤害', '暴击', '保持间距的机动性'],
    },
  },
  {
    id: 'arrow-hunter',
    cls: 'blackarrow',
    title: 'Hunter (Status)',
    tags: ['PvP', 'Group'],
    en: {
      summary: 'Bleed, paralysis, and debuffs that wear targets down and set up your team.',
      core: 'Take the Hunter path; stack status effects and control, trading raw burst for sustained pressure.',
      priorities: ['Status / debuff effect', 'Utility and uptime', 'Mobility'],
    },
    zh: {
      summary: '流血、麻痹与减益，慢慢磨垮目标并为队伍铺路。',
      core: '走 Hunter 路线；叠状态与控制，用持续压制换掉纯爆发。',
      priorities: ['状态 / 减益强度', '功能性与覆盖率', '机动性'],
    },
  },
  {
    id: 'seer-reverent',
    cls: 'seer',
    title: 'Reverent Shield',
    tags: ['Group'],
    en: {
      summary: 'Keep a squad alive with shields and utility — a trio-only support pick.',
      core: 'Take the Reverent (shield) path; pre-shield engages, peel for carries, and chain crowd control. Skip this solo.',
      priorities: ['Shield / defensive power', 'Cooldown reduction', 'Team-utility effects'],
    },
    zh: {
      summary: '用护盾和功能性让小队活下来——只适合三人队的辅助。',
      core: '走 Reverent（护盾）路线；接战前预盾、为核心拉扯、连控。单人请别选。',
      priorities: ['护盾 / 防御强度', '冷却缩减', '团队功能性效果'],
    },
  },
  {
    id: 'wk-wither',
    cls: 'withered-knight',
    title: 'Wither Duelist',
    tags: ['PvP', 'Solo'],
    en: {
      summary: 'Stack Wither, detonate for huge damage, and grapple targets back in to finish them.',
      core: 'Apply Wither stacks in melee, hook fleeing targets, parry the counters, then detonate for the execute window.',
      priorities: ['Burst around Wither detonation', 'Survivability to stay in melee', 'Stamina for combos'],
    },
    zh: {
      summary: '叠 Wither、引爆打出高伤，再用抓钩把目标拽回来收掉。',
      core: '近战叠 Wither 层数、勾回想逃的目标、招架反打，然后引爆进入处决窗口。',
      priorities: ['围绕 Wither 引爆的爆发', '留在近战的生存力', '支撑连招的耐力'],
    },
  },
];

// Affix names seen during the beta. Full effects are being confirmed —
// this lists what we're tracking, not asserting exact numbers yet.
export const AFFIXES: string[] = ['Valor', 'Stoic', 'Seamless', 'Aegis', 'Fervor'];
