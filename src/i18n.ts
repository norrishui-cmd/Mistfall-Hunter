// Shared chrome strings + i18n helpers.
// Page bodies are written directly in each page file in the right language;
// this file only holds nav / header / footer strings used everywhere.

export const languages = {
  en: 'English',
  zh: '中文',
  de: 'Deutsch',
  ja: '日本語',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'site.name': 'Mistfall Hunter Wiki and Hub',
    'site.tagline': 'Unofficial guide & database',
    'nav.home': 'Home',
    'nav.release': 'Release',
    'nav.news': 'News',
    'nav.guides': 'Guides',
    'nav.maps': 'Maps',
    'nav.builds': 'Builds',
    'nav.data': 'Game Data',
    'nav.bosses': 'Bosses',
    'nav.tools': 'Tools',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.soon': 'Soon',
    'nav.search': 'Search',
    'search.placeholder': 'Search the wiki...',
    'search.close': 'Close search',
    'search.hint': 'Search classes, builds, maps, bosses, FAQ and more.',
    'footer.disclaimer':
      'Unofficial fan-made resource. Not affiliated with, endorsed by, or sponsored by Bellring Games. All game names, assets, and trademarks belong to their respective owners.',
    'footer.sources': 'Sources',
    'footer.updates': 'Updates',
    'footer.sitemap': 'Sitemap',
  },
  zh: {
    'site.name': 'Mistfall Hunter Wiki 攻略站',
    'site.tagline': '非官方攻略与数据库',
    'nav.home': '首页',
    'nav.release': '发售',
    'nav.news': '新闻',
    'nav.guides': '攻略',
    'nav.maps': '地图',
    'nav.builds': '配装',
    'nav.data': '游戏数据',
    'nav.bosses': 'Boss',
    'nav.tools': '工具',
    'nav.faq': 'FAQ',
    'nav.about': '关于',
    'nav.soon': '即将上线',
    'nav.search': '搜索',
    'search.placeholder': '搜索全站内容...',
    'search.close': '关闭搜索',
    'search.hint': '搜索职业、配装、地图、Boss、FAQ 等内容。',
    'footer.disclaimer':
      '非官方玩家资源，与 Bellring Games 无隶属、背书或赞助关系。游戏名称、素材与商标归各自所有者所有。',
    'footer.sources': '来源',
    'footer.updates': '更新',
    'footer.sitemap': '站点地图',
  },
  de: {
    'site.name': 'Mistfall Hunter Wiki & Guides',
    'site.tagline': 'Inoffizieller Guide und Datenbank',
    'nav.home': 'Start', 'nav.release': 'Release', 'nav.news': 'News', 'nav.guides': 'Guides',
    'nav.maps': 'Karten', 'nav.builds': 'Builds', 'nav.data': 'Spieldaten', 'nav.bosses': 'Bosse', 'nav.tools': 'Tools',
    'nav.faq': 'FAQ', 'nav.about': 'Über uns', 'nav.soon': 'Demnächst',
    'nav.search': 'Suche', 'search.placeholder': 'Wiki durchsuchen...', 'search.close': 'Suche schließen', 'search.hint': 'Klassen, Builds, Karten, Bosse, FAQ und mehr durchsuchen.',
    'footer.disclaimer': 'Inoffizielle Fan-Ressource. Keine Verbindung zu oder Unterstützung durch Bellring Games. Alle Spielnamen, Inhalte und Marken gehören ihren jeweiligen Eigentümern.',
    'footer.sources': 'Quellen', 'footer.updates': 'Updates', 'footer.sitemap': 'Sitemap',
  },
  ja: {
    'site.name': 'Mistfall Hunter 攻略Wiki',
    'site.tagline': '非公式攻略・データベース',
    'nav.home': 'ホーム', 'nav.release': '発売情報', 'nav.news': 'ニュース', 'nav.guides': '攻略',
    'nav.maps': 'マップ', 'nav.builds': 'ビルド', 'nav.data': 'ゲームデータ', 'nav.bosses': 'ボス', 'nav.tools': 'ツール',
    'nav.faq': 'FAQ', 'nav.about': 'サイト情報', 'nav.soon': '近日公開',
    'nav.search': '検索', 'search.placeholder': 'サイト内を検索...', 'search.close': '検索を閉じる', 'search.hint': 'クラス、ビルド、マップ、ボス、FAQなどを検索できます。',
    'footer.disclaimer': 'ファンによる非公式情報サイトです。Bellring Games との提携・公認・後援関係はありません。ゲーム名、素材、商標は各権利者に帰属します。',
    'footer.sources': '情報源', 'footer.updates': '更新履歴', 'footer.sitemap': 'サイトマップ',
  },
} as const;

export type Lang = keyof typeof ui;

// Paths that exist in all 4 languages (en/zh/de/ja) rather than just en/zh.
// Single source of truth for both the header's language switcher and
// BaseHead's hreflang alternate tags — these used to be two separately
// hardcoded copies that drifted apart (2026-07-24: adding new de/ja pages
// without updating BaseHead's copy produced non-reciprocal hreflang tags,
// caught by seo-audit.mjs). Update this one set when a page gains de/ja
// coverage; both consumers pick it up automatically.
export const localizedCorePaths = new Set([
  '/', '/release-date', '/beginner-guide', '/classes', '/builds', '/guides',
  '/performance', '/about', '/weapons', '/bosses', '/loot', '/soul-of-return',
  '/sources', '/updates', '/game-data',
]);

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'zh' || seg === 'de' || seg === 'ja') return seg;
  return 'en';
}

export function useTranslations(lang: Lang) {
  const dict = ui[lang] as Record<string, string>;
  const fallback = ui[defaultLang] as Record<string, string>;
  return function t(key: string): string {
    return dict[key] ?? fallback[key] ?? key;
  };
}

export function localizePath(path: string = '/', lang: Lang = defaultLang): string {
  const withoutLocale = path.replace(/^\/(?:zh|de|ja)(?=\/|$)/, '') || '/';
  const clean = withoutLocale === '/' ? '' : withoutLocale;
  if (lang === defaultLang) return clean || '/';
  return `/${lang}${clean || '/'}`;
}
