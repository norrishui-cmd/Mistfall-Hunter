// ---------------------------------------------------------------------------
// Mistfall Hunter interactive map data.
//
// HOW TO UPDATE LATER:
//  - Coordinates are percentages of the map image box: x/y from 0 (top-left)
//    to 100 (bottom-right). They are image-agnostic, so swapping the background
//    image in /public/maps/ keeps markers roughly in place (just re-tune x/y).
//  - To add a marker: copy a { } block in the right map's `markers` array.
//  - To add a map: copy a whole GameMap block and drop a new image in
//    /public/maps/. Both language pages read this file automatically.
//
// NOTE: marker positions below are EARLY / ILLUSTRATIVE. Real, verified
// locations get filled in as the community maps each zone after launch.
// ---------------------------------------------------------------------------

export type MarkerType = 'extract' | 'boss' | 'loot' | 'landmark';

export interface Marker {
  id: string;
  type: MarkerType;
  x: number; // 0-100 (% of map width)
  y: number; // 0-100 (% of map height)
  en: { name: string; note?: string };
  zh: { name: string; note?: string };
}

export interface GameMap {
  id: string;
  image: string;
  en: { name: string; intro: string };
  zh: { name: string; intro: string };
  markers: Marker[];
}

export interface Category {
  type: MarkerType;
  color: string;
  icon: string; // SVG path, drawn stroked in a 24x24 viewBox
  en: string;
  zh: string;
}

export const CATEGORIES: Category[] = [
  { type: 'extract', color: '#7ec98f', icon: 'M9 6l6 6-6 6', en: 'Extraction', zh: '撤离点' },
  { type: 'boss', color: '#cf6a61', icon: 'M12 4l9 16H3z', en: 'Boss · Mist Lord', zh: 'Boss · Mist Lord' },
  { type: 'loot', color: '#f2d27a', icon: 'M12 3l9 9-9 9-9-9z', en: 'High-value loot', zh: '高价值搜刮' },
  { type: 'landmark', color: '#86b0ab', icon: 'M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z', en: 'Landmark', zh: '地标' },
];

export const MAPS: GameMap[] = [
  {
    id: 'solemn-needles',
    image: '/maps/solemn-needles.svg',
    en: {
      name: 'Solemn Needles',
      intro:
        'A spire-broken waste where the mist hangs between towering needles of stone. Long sightlines reward ranged classes and punish careless crossings.',
    },
    zh: {
      name: 'Solemn Needles',
      intro:
        '一片被尖塔割裂的荒原，浓雾悬在高耸的石针之间。开阔的视线利好远程职业，也惩罚莽撞的穿行。',
    },
    markers: [
      {
        id: 'sn-woodling',
        type: 'extract', x: 19, y: 68,
        en: { name: 'Returner Woodling range', note: 'Hunt it for the Soul of Return — exact spawn shifts each run.' },
        zh: { name: 'Returner Woodling 出没区', note: '猎杀它拿 Soul of Return——具体刷新点每趟都不同。' },
      },
      {
        id: 'sn-exit-e',
        type: 'extract', x: 83, y: 74,
        en: { name: 'Eastern exit', note: 'One of several ways out once you hold the Soul of Return.' },
        zh: { name: '东侧出口', note: '拿到 Soul of Return 后的多个出口之一。' },
      },
      {
        id: 'sn-boss',
        type: 'boss', x: 68, y: 30,
        en: { name: 'Mist Lord arena', note: 'A Mist Lord guards top-tier loot here. Bring a squad.' },
        zh: { name: 'Mist Lord 战场', note: '一名 Mist Lord 守着顶级战利品，建议组队。' },
      },
      {
        id: 'sn-cache',
        type: 'loot', x: 49, y: 54,
        en: { name: 'Central cache cluster', note: 'Dense loot and a known PvP hotspot.' },
        zh: { name: '中央搜刮群', note: '战利品密集，也是公认的 PvP 热点。' },
      },
      {
        id: 'sn-outer',
        type: 'loot', x: 24, y: 41,
        en: { name: 'Outer scavenge', note: 'Quieter, lower-tier loot — good for learning runs.' },
        zh: { name: '外围搜刮', note: '更安静、档次较低——适合练手的run。' },
      },
      {
        id: 'sn-spires',
        type: 'landmark', x: 38, y: 26,
        en: { name: 'The Needles', note: 'Towering spires; open sightlines favour ranged fights.' },
        zh: { name: '尖针群', note: '高耸石针；开阔视线利好远程交战。' },
      },
    ],
  },
  {
    id: 'hallowgrove',
    image: '/maps/hallowgrove.svg',
    en: {
      name: 'Hallowgrove',
      intro:
        'A bleached, half-dead forest. Thick cover means close fights and ambushes — bring something that wins at melee range, or the patience to avoid them.',
    },
    zh: {
      name: 'Hallowgrove',
      intro:
        '一座枯白、半死的森林。茂密的遮蔽意味着近距离遭遇和伏击——带上近战能赢的配置，或者带上避战的耐心。',
    },
    markers: [
      {
        id: 'hg-woodling',
        type: 'extract', x: 26, y: 64,
        en: { name: 'Returner Woodling range', note: 'Roams the treeline; kill it for the Soul of Return.' },
        zh: { name: 'Returner Woodling 出没区', note: '在林线一带游荡；击杀它拿 Soul of Return。' },
      },
      {
        id: 'hg-exit-n',
        type: 'extract', x: 16, y: 33,
        en: { name: 'Northern exit', note: 'A way out toward the treeline ridge.' },
        zh: { name: '北侧出口', note: '通往林脊一侧的出口。' },
      },
      {
        id: 'hg-boss',
        type: 'boss', x: 58, y: 42,
        en: { name: 'Mist Lord arena', note: 'A Mist Lord holds the heart of the grove.' },
        zh: { name: 'Mist Lord 战场', note: '一名 Mist Lord 镇守林心。' },
      },
      {
        id: 'hg-clearing',
        type: 'loot', x: 47, y: 29,
        en: { name: 'Bleached clearing', note: 'High-value drops out in the open — risky to grab.' },
        zh: { name: '枯白空地', note: '高价值掉落散在开阔地——拿取有风险。' },
      },
      {
        id: 'hg-canopy',
        type: 'loot', x: 79, y: 30,
        en: { name: 'Canopy cache', note: 'Tucked-away loot; watch your angles.' },
        zh: { name: '林冠搜刮点', note: '藏匿的战利品；留意视角与背后。' },
      },
      {
        id: 'hg-hollow',
        type: 'landmark', x: 71, y: 66,
        en: { name: 'The Hollow', note: 'Dense cover — ambush country.' },
        zh: { name: '空洞林', note: '遮蔽密集——伏击高发区。' },
      },
    ],
  },
];
