// ---------------------------------------------------------------------------
// Mistfall Hunter Build Planner data.
//
// HONESTY NOTE: the game launches July 30, 2026 and the meta is not settled.
// Class names, paths, and affix NAMES here are from the beta / official
// material. We do NOT assert exact skill, talent, or affix numbers — the affix
// grouping below is our best read of the names and is provisional until 1.0.
// The planner is a planning + sharing tool, not a claim about the final meta.
//
// HOW TO UPDATE: edit CLASSES / GOALS / AFFIXES. Both language pages and the
// shared planner script read this file. Affix ids must stay stable (they are
// used in shareable build URLs).
// ---------------------------------------------------------------------------

export interface ClassPath {
  id: string;
  name: string;
  en: { note: string };
  zh: { note: string };
}

export interface PlannerClass {
  id: string;
  name: string;
  role: string;
  en: { note: string };
  zh: { note: string };
  paths: ClassPath[];
}

export interface Goal {
  id: string;
  en: { label: string };
  zh: { label: string };
}

export interface AffixGroup {
  id: string;
  en: string;
  zh: string;
}

export interface Affix {
  id: string;
  name: string;
  group: string; // AffixGroup id
}

export const CLASSES: PlannerClass[] = [
  {
    id: 'mercenary',
    name: 'Mercenary',
    role: 'Fighter',
    en: { note: 'Frontline bruiser with the highest survivability — the safest class to learn on.' },
    zh: { note: '生存最强的前排——最适合入门的职业。' },
    paths: [
      {
        id: 'sns', name: 'Sword & Shield',
        en: { note: 'Block and parry to bait attacks, then punish. Roll the unblockable (red) hits.' },
        zh: { note: '用格挡与招架诱招再反打；红光（不可格挡）要翻滚。' },
      },
      {
        id: 'hammer', name: 'Hammer',
        en: { note: 'Two-handed pressure — stack stagger and chain stuns to open targets up.' },
        zh: { note: '双手重击施压——叠硬直、连控打出破绽。' },
      },
    ],
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    role: 'Mage',
    en: { note: 'Ranged spellcaster with strong burst and area damage; fragile up close.' },
    zh: { note: '远程法师，爆发与范围强，近身脆。' },
    paths: [
      {
        id: 'elemental', name: 'Elemental',
        en: { note: 'Chain fire, ice, and lightning reactions for area damage and control.' },
        zh: { note: '连锁火/冰/雷反应，打范围与控制。' },
      },
      {
        id: 'stardust', name: 'Stardust',
        en: { note: 'Snap burst to delete a single target from range.' },
        zh: { note: '瞬发爆发，远距离秒单体。' },
      },
    ],
  },
  {
    id: 'blackarrow',
    name: 'Blackarrow',
    role: 'Archer',
    en: { note: 'Precision bow — kite, stagger, and punish from range.' },
    zh: { note: '精准弓——放风筝、造成硬直、远程惩罚。' },
    paths: [
      {
        id: 'archer', name: 'Archer',
        en: { note: 'Charged shots and detonations for ranged burst and boss damage.' },
        zh: { note: '蓄力箭与引爆，远程爆发与 Boss 伤害。' },
      },
      {
        id: 'hunter', name: 'Hunter',
        en: { note: 'Traps, status, and scouting — sustained control over raw burst.' },
        zh: { note: '陷阱、状态与侦察——以持续控制换爆发。' },
      },
    ],
  },
  {
    id: 'shadowstrix',
    name: 'Shadowstrix',
    role: 'Rogue',
    en: { note: 'Dual-blade assassin — mobility, misdirection, and lethal openers.' },
    zh: { note: '双刃刺客——机动、误导与致命起手。' },
    paths: [
      {
        id: 'ambush', name: 'Stealth Ambush',
        en: { note: 'Open from stealth, burst a target down, then vanish and reset.' },
        zh: { note: '隐身起手、爆发秒目标，然后消失重置。' },
      },
    ],
  },
  {
    id: 'seer',
    name: 'Seer',
    role: 'Support',
    en: { note: 'Support mystic — strongest in a coordinated trio, weak solo.' },
    zh: { note: '辅助——三人队最强，单人偏弱。' },
    paths: [
      {
        id: 'reverent', name: 'Reverent',
        en: { note: 'Healing totems, shields, and Death Ward — keep the squad alive.' },
        zh: { note: '治疗图腾、护盾与 Death Ward——让小队活下来。' },
      },
      {
        id: 'blasphemer', name: 'Blasphemer',
        en: { note: 'Damage-over-time and zoning pressure.' },
        zh: { note: '持续伤害与区域压制。' },
      },
    ],
  },
  {
    id: 'withered-knight',
    name: 'Withered Knight',
    role: 'Knight',
    en: { note: 'Heavy greatsword with parries and Wither detonation combos (newest class).' },
    zh: { note: '重型大剑，招架与 Wither 引爆连招（最新职业）。' },
    paths: [
      {
        id: 'wither', name: 'Greatsword (Wither)',
        en: { note: 'Stack Wither, grapple targets in, parry the counters, then detonate to execute.' },
        zh: { note: '叠 Wither、勾回目标、招架反打，再引爆处决。' },
      },
    ],
  },
];

export const GOALS: Goal[] = [
  { id: 'solo', en: { label: 'Solo' }, zh: { label: '单人' } },
  { id: 'pvp', en: { label: 'PvP' }, zh: { label: 'PvP' } },
  { id: 'pve', en: { label: 'PvE / Bosses' }, zh: { label: 'PvE / Boss' } },
  { id: 'squad', en: { label: 'Squad (trio)' }, zh: { label: '组队（三人）' } },
];

export const AFFIX_GROUPS: AffixGroup[] = [
  { id: 'offense', en: 'Offense', zh: '输出' },
  { id: 'defense', en: 'Defense', zh: '防御' },
  { id: 'sustain', en: 'Sustain', zh: '续航' },
  { id: 'utility', en: 'Utility', zh: '功能' },
  { id: 'economy', en: 'Economy', zh: '资源' },
];

// Affix names seen in the beta. Grouping is our provisional read of the names;
// exact effects/values are being confirmed for 1.0.
export const AFFIXES: Affix[] = [
  { id: 'valor', name: 'Valor', group: 'offense' },
  { id: 'fervor', name: 'Fervor', group: 'offense' },
  { id: 'wrath', name: 'Wrath', group: 'offense' },
  { id: 'burst', name: 'Burst', group: 'offense' },
  { id: 'smiting', name: 'Smiting', group: 'offense' },
  { id: 'sky-piercer', name: 'Sky Piercer', group: 'offense' },
  { id: 'ranged', name: 'Ranged', group: 'offense' },
  { id: 'strife', name: 'Strife', group: 'offense' },

  { id: 'stoic', name: 'Stoic', group: 'defense' },
  { id: 'aegis', name: 'Aegis', group: 'defense' },
  { id: 'resilience', name: 'Resilience', group: 'defense' },
  { id: 'unyielding', name: 'Unyielding', group: 'defense' },
  { id: 'bulwark', name: 'Bulwark', group: 'defense' },
  { id: 'spirit-shield', name: 'Spirit Shield', group: 'defense' },
  { id: 'distant-ward', name: 'Distant Ward', group: 'defense' },

  { id: 'vitality', name: 'Vitality', group: 'sustain' },
  { id: 'blessing', name: 'Blessing', group: 'sustain' },
  { id: 'fervid', name: 'Fervid', group: 'sustain' },

  { id: 'seamless', name: 'Seamless', group: 'utility' },
  { id: 'seeker', name: 'Seeker', group: 'utility' },
  { id: 'elusive', name: 'Elusive', group: 'utility' },
  { id: 'swift', name: 'Swift', group: 'utility' },
  { id: 'eloquence', name: 'Eloquence', group: 'utility' },
  { id: 'curse', name: 'Curse', group: 'utility' },
  { id: 'ethereal', name: 'Ethereal', group: 'utility' },
  { id: 'sleight-of-hand', name: 'Sleight of Hand', group: 'utility' },

  { id: 'wealth', name: 'Wealth', group: 'economy' },
  { id: 'creation', name: 'Creation', group: 'economy' },
  { id: 'brotherhood', name: 'Brotherhood', group: 'economy' },
];
