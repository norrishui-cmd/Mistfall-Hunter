// Shared chrome strings + i18n helpers.
// Page bodies are written directly in each page file in the right language;
// this file only holds nav / header / footer strings used everywhere.

export const languages = {
  en: 'English',
  zh: '中文',
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
    'nav.tools': 'Tools',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.soon': 'Soon',
    'footer.disclaimer':
      'Unofficial fan-made resource. Not affiliated with, endorsed by, or sponsored by Bellring Games. All game names, assets, and trademarks belong to their respective owners.',
  },
  zh: {
    'site.name': 'Mistfall Hunter Wiki 攻略站',
    'site.tagline': '非官方攻略与数据库',
    'nav.home': '首页',
    'nav.release': '发售',
    'nav.news': '新闻',
    'nav.guides': '攻略',
    'nav.tools': '工具',
    'nav.faq': 'FAQ',
    'nav.about': '关于',
    'nav.soon': '即将上线',
    'footer.disclaimer':
      '非官方玩家资源，与 Bellring Games 无隶属、背书或赞助关系。游戏名称、素材与商标归各自所有者所有。',
  },
} as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'zh') return 'zh';
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
  const clean = path === '/' ? '' : path;
  if (lang === defaultLang) return clean || '/';
  return `/zh${clean || '/'}`;
}
