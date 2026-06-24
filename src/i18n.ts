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
    'site.name': 'Mistfall Hunter Hub',
    'site.tagline': 'Unofficial guide & database',
    'nav.home': 'Home',
    'nav.release': 'Release date',
    'nav.beginner': 'Beginner guide',
    'nav.classes': 'Classes',
    'nav.map': 'Maps',
    'nav.builds': 'Builds',
    'nav.soon': 'Soon',
    'footer.disclaimer':
      'Unofficial fan-made resource. Not affiliated with, endorsed by, or sponsored by Bellring Games. All game names, assets, and trademarks belong to their respective owners.',
  },
  zh: {
    'site.name': 'Mistfall Hunter 攻略站',
    'site.tagline': '非官方攻略 & 数据库',
    'nav.home': '首页',
    'nav.release': '发售日期',
    'nav.beginner': '新手指南',
    'nav.classes': '职业',
    'nav.map': '地图',
    'nav.builds': '配装',
    'nav.soon': '即将上线',
    'footer.disclaimer':
      '非官方粉丝资源，与 Bellring Games 无任何隶属、背书或赞助关系。游戏名称、素材与商标归各自所有者所有。',
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

/**
 * Build a localized URL from a canonical English path.
 * localizePath('/release-date', 'zh') -> '/zh/release-date'
 * localizePath('/', 'zh')             -> '/zh/'
 * localizePath('/release-date', 'en') -> '/release-date'
 */
export function localizePath(path: string = '/', lang: Lang = defaultLang): string {
  const clean = path === '/' ? '' : path;
  if (lang === defaultLang) return clean || '/';
  return `/zh${clean || '/'}`;
}
