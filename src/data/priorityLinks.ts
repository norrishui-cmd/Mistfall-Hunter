import type { Lang } from '../i18n';
import { enExpansionLinks, zhExpansionLinks } from './urlExpansion';
import { enFaqLinks, zhFaqLinks } from './faqExpansion';
import { enGrowthLinks, zhGrowthLinks } from './urlGrowthPlan';

export type PriorityLink = {
  title: string;
  desc: string;
  href: string;
  group: 'news' | 'guides' | 'tools' | 'database' | 'about';
};

const enLinks: PriorityLink[] = [
  { title: 'Release date, platforms & price', desc: 'Launch timing, Game Pass, PS5, Steam, and pricing status.', href: '/release-date', group: 'news' },
  { title: 'News hub', desc: 'Launch tracker, beta recap, patch notes, and official update watchlist.', href: '/news', group: 'news' },
  { title: 'Beginner guide', desc: 'How extraction, death, loot, and the Soul of Return work.', href: '/beginner-guide', group: 'guides' },
  { title: 'All guides', desc: 'A structured guide library for new players, solo players, and squads.', href: '/guides', group: 'guides' },
  { title: 'Class tier list', desc: 'All six classes ranked for solo, PvP, and beginner play.', href: '/classes', group: 'guides' },
  { title: 'Builds & affixes', desc: 'Starter build directions and affix tracking for every class.', href: '/builds', group: 'guides' },
  { title: 'Interactive map', desc: 'Zone maps with extraction, boss, loot, and landmark filters.', href: '/map', group: 'tools' },
  { title: 'Tools hub', desc: 'Map, build planner roadmap, FPS checklist, and run planning utilities.', href: '/tools', group: 'tools' },
  { title: 'Performance fixes', desc: 'Stuttering, low FPS, crashes, and settings that actually help.', href: '/performance', group: 'tools' },
  { title: 'Weapons & combat', desc: 'Weapon roles, stamina, blocking, parries, ranged pressure, and magic.', href: '/weapons', group: 'database' },
  { title: 'Bosses & PvE', desc: 'Mist Lords, Corroded enemies, boss prep, and reward routing.', href: '/bosses', group: 'database' },
  { title: 'Loot & affixes', desc: 'Gear rolls, resources, extraction value, and what to bank first.', href: '/loot', group: 'database' },
  { title: 'Soul of Return', desc: 'How the Returner Woodling and extraction key shape every run.', href: '/soul-of-return', group: 'guides' },
  { title: 'About Mistfall Hunter', desc: 'Game overview, story premise, modes, platforms, and site policy.', href: '/about', group: 'about' },
];

const zhLinks: PriorityLink[] = [
  { title: '发售日、平台与价格', desc: '上线时间、Game Pass、PS5、Steam 与定价状态。', href: '/zh/release-date', group: 'news' },
  { title: '新闻中心', desc: '发售追踪、测试回顾、补丁记录与官方动态观察。', href: '/zh/news', group: 'news' },
  { title: '新手指南', desc: '撤离、死亡惩罚、战利品与 Soul of Return 机制。', href: '/zh/beginner-guide', group: 'guides' },
  { title: '攻略合集', desc: '面向新人、单人玩家与小队的结构化攻略库。', href: '/zh/guides', group: 'guides' },
  { title: '职业强度榜', desc: '六大职业在单人、PvP 与新手上手维度的排名。', href: '/zh/classes', group: 'guides' },
  { title: '配装与词缀', desc: '每个职业的起手构筑方向与词缀追踪。', href: '/zh/builds', group: 'guides' },
  { title: '互动地图', desc: '按撤离点、Boss、战利品与地标筛选区域地图。', href: '/zh/map', group: 'tools' },
  { title: '工具中心', desc: '地图、构筑规划、帧率排查与跑图工具入口。', href: '/zh/tools', group: 'tools' },
  { title: '性能优化', desc: '卡顿、低帧、崩溃与真正有用的设置建议。', href: '/zh/performance', group: 'tools' },
  { title: '武器与战斗', desc: '武器定位、耐力、格挡、招架、远程压制与法术。', href: '/zh/weapons', group: 'database' },
  { title: 'Boss 与 PvE', desc: 'Mist Lord、腐化怪物、Boss 准备与收益路线。', href: '/zh/bosses', group: 'database' },
  { title: '战利品与词缀', desc: '装备词条、资源、撤离价值与优先入库内容。', href: '/zh/loot', group: 'database' },
  { title: 'Soul of Return', desc: 'Returner Woodling 与撤离钥匙如何决定每一局。', href: '/zh/soul-of-return', group: 'guides' },
  { title: '关于 Mistfall Hunter', desc: '游戏概览、世界观、模式、平台与本站说明。', href: '/zh/about', group: 'about' },
];

export function getPriorityLinks(lang: Lang, groups?: PriorityLink['group'][]): PriorityLink[] {
  const links =
    lang === 'zh'
      ? [...zhLinks, ...zhExpansionLinks, ...zhFaqLinks, ...zhGrowthLinks]
      : [...enLinks, ...enExpansionLinks, ...enFaqLinks, ...enGrowthLinks];
  return groups ? links.filter((link) => groups.includes(link.group)) : links;
}
