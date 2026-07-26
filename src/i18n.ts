// Shared chrome strings + i18n helpers.
// Page bodies are written directly in each page file in the right language;
// this file only holds nav / header / footer strings used everywhere.

export const languages = {
  en: 'English',
  zh: '中文',
  de: 'Deutsch',
  ja: '日本語',
  'zh-hant': '繁體中文',
  es: 'Español',
  ru: 'Русский',
  ko: '한국어',
  fr: 'Français',
  'pt-br': 'Português (Brasil)',
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
    'nav.community': 'Community',
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
    'nav.community': 'Community',
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
    'nav.community': 'コミュニティ',
    'nav.search': '検索', 'search.placeholder': 'サイト内を検索...', 'search.close': '検索を閉じる', 'search.hint': 'クラス、ビルド、マップ、ボス、FAQなどを検索できます。',
    'footer.disclaimer': 'ファンによる非公式情報サイトです。Bellring Games との提携・公認・後援関係はありません。ゲーム名、素材、商標は各権利者に帰属します。',
    'footer.sources': '情報源', 'footer.updates': '更新履歴', 'footer.sitemap': 'サイトマップ',
  },
  'zh-hant': {
    'site.name': 'Mistfall Hunter Wiki 攻略站', 'site.tagline': '非官方攻略與資料庫',
    'nav.home': '首頁', 'nav.release': '發售', 'nav.news': '新聞', 'nav.guides': '攻略', 'nav.maps': '地圖', 'nav.builds': '配裝', 'nav.data': '遊戲資料', 'nav.bosses': 'Boss', 'nav.tools': '工具', 'nav.faq': 'FAQ', 'nav.about': '關於', 'nav.soon': '即將推出',
    'nav.search': '搜尋', 'search.placeholder': '搜尋全站內容...', 'search.close': '關閉搜尋', 'search.hint': '搜尋職業、配裝、地圖、Boss 與 FAQ。',
    'footer.disclaimer': '非官方玩家資源，與 Bellring Games 無隸屬、背書或贊助關係。遊戲名稱、素材與商標歸各自所有者。',
    'footer.sources': '來源', 'footer.updates': '更新', 'footer.sitemap': '網站地圖',
  },
  es: {
    'site.name': 'Mistfall Hunter Wiki y Guías', 'site.tagline': 'Guía y base de datos no oficial',
    'nav.home': 'Inicio', 'nav.release': 'Lanzamiento', 'nav.news': 'Noticias', 'nav.guides': 'Guías', 'nav.maps': 'Mapas', 'nav.builds': 'Builds', 'nav.data': 'Datos', 'nav.bosses': 'Jefes', 'nav.tools': 'Herramientas', 'nav.faq': 'FAQ', 'nav.about': 'Acerca de', 'nav.soon': 'Próximamente',
    'nav.search': 'Buscar', 'search.placeholder': 'Buscar en la wiki...', 'search.close': 'Cerrar búsqueda', 'search.hint': 'Busca clases, builds, mapas, jefes y FAQ.',
    'footer.disclaimer': 'Recurso no oficial creado por fans. Sin afiliación, respaldo ni patrocinio de Bellring Games. Los nombres, recursos y marcas pertenecen a sus propietarios.',
    'footer.sources': 'Fuentes', 'footer.updates': 'Actualizaciones', 'footer.sitemap': 'Mapa del sitio',
  },
  ru: {
    'site.name': 'Mistfall Hunter Вики и гайды', 'site.tagline': 'Неофициальные гайды и база данных',
    'nav.home': 'Главная', 'nav.release': 'Релиз', 'nav.news': 'Новости', 'nav.guides': 'Гайды', 'nav.maps': 'Карты', 'nav.builds': 'Билды', 'nav.data': 'Данные', 'nav.bosses': 'Боссы', 'nav.tools': 'Инструменты', 'nav.faq': 'FAQ', 'nav.about': 'О сайте', 'nav.soon': 'Скоро',
    'nav.search': 'Поиск', 'search.placeholder': 'Поиск по вики...', 'search.close': 'Закрыть поиск', 'search.hint': 'Классы, билды, карты, боссы и FAQ.',
    'footer.disclaimer': 'Неофициальный фанатский ресурс, не связанный с Bellring Games. Названия, материалы и товарные знаки принадлежат их владельцам.',
    'footer.sources': 'Источники', 'footer.updates': 'Обновления', 'footer.sitemap': 'Карта сайта',
  },
  ko: {
    'site.name': 'Mistfall Hunter 공략 위키', 'site.tagline': '비공식 가이드 및 데이터베이스',
    'nav.home': '홈', 'nav.release': '출시 정보', 'nav.news': '뉴스', 'nav.guides': '가이드', 'nav.maps': '지도', 'nav.builds': '빌드', 'nav.data': '게임 데이터', 'nav.bosses': '보스', 'nav.tools': '도구', 'nav.faq': 'FAQ', 'nav.about': '사이트 소개', 'nav.soon': '준비 중',
    'nav.search': '검색', 'search.placeholder': '위키 검색...', 'search.close': '검색 닫기', 'search.hint': '클래스, 빌드, 지도, 보스, FAQ를 검색하세요.',
    'footer.disclaimer': '팬이 만든 비공식 자료이며 Bellring Games와 제휴·승인·후원 관계가 없습니다. 게임명, 자료 및 상표의 권리는 각 소유자에게 있습니다.',
    'footer.sources': '출처', 'footer.updates': '업데이트', 'footer.sitemap': '사이트맵',
  },
  fr: {
    'site.name': 'Mistfall Hunter Wiki et Guides', 'site.tagline': 'Guide et base de données non officiels',
    'nav.home': 'Accueil', 'nav.release': 'Sortie', 'nav.news': 'Actualités', 'nav.guides': 'Guides', 'nav.maps': 'Cartes', 'nav.builds': 'Builds', 'nav.data': 'Données', 'nav.bosses': 'Boss', 'nav.tools': 'Outils', 'nav.faq': 'FAQ', 'nav.about': 'À propos', 'nav.soon': 'Bientôt',
    'nav.search': 'Rechercher', 'search.placeholder': 'Rechercher dans le wiki...', 'search.close': 'Fermer la recherche', 'search.hint': 'Recherchez classes, builds, cartes, boss et FAQ.',
    'footer.disclaimer': 'Ressource non officielle créée par des fans, sans affiliation, approbation ni parrainage de Bellring Games. Les noms, contenus et marques appartiennent à leurs propriétaires.',
    'footer.sources': 'Sources', 'footer.updates': 'Mises à jour', 'footer.sitemap': 'Plan du site',
  },
  'pt-br': {
    'site.name': 'Mistfall Hunter Wiki e Guias', 'site.tagline': 'Guia e banco de dados não oficial',
    'nav.home': 'Início', 'nav.release': 'Lançamento', 'nav.news': 'Notícias', 'nav.guides': 'Guias', 'nav.maps': 'Mapas', 'nav.builds': 'Builds', 'nav.data': 'Dados', 'nav.bosses': 'Chefes', 'nav.tools': 'Ferramentas', 'nav.faq': 'FAQ', 'nav.about': 'Sobre', 'nav.soon': 'Em breve',
    'nav.search': 'Buscar', 'search.placeholder': 'Buscar na wiki...', 'search.close': 'Fechar busca', 'search.hint': 'Busque classes, builds, mapas, chefes e FAQ.',
    'footer.disclaimer': 'Recurso não oficial feito por fãs, sem afiliação, endosso ou patrocínio da Bellring Games. Nomes, recursos e marcas pertencem aos seus proprietários.',
    'footer.sources': 'Fontes', 'footer.updates': 'Atualizações', 'footer.sitemap': 'Mapa do site',
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
  '/faq',
  '/server-status', '/known-issues-tracker', '/error-code-guide',
  '/queue-times-guide', '/patch-notes-tracker', '/pvp-guide',
  '/community-questions',
]);

export const firstEditionPaths = new Set([
  '/', '/release-date', '/beginner-guide', '/classes', '/builds', '/guides', '/performance', '/about',
]);

export const secondEditionGameDataPaths = new Set([
  '/game-data',
  '/game-data/withered-knight', '/game-data/mercenary', '/game-data/shadowstrix',
  '/game-data/holy-weapons', '/game-data/equipment-vouchers',
  '/game-data/brandrgarde-cataclysm', '/game-data/pve-soul-revival',
  '/game-data/hallowgrove', '/game-data/cursed-moonwane',
  '/game-data/beta-regions-languages-controller',
]);

export const allLanguages = Object.keys(languages) as Lang[];

export function languagesForPath(path: string): Lang[] {
  if (path === '/community-questions' || /^\/community-questions\/[^/]+$/.test(path)) return ['en', 'de', 'ja'];
  if (firstEditionPaths.has(path) || secondEditionGameDataPaths.has(path)) return allLanguages;
  if (path === '/news' || /^\/news\/[^/]+$/.test(path)) return ['en', 'zh', 'de', 'ja'];
  if (localizedCorePaths.has(path) || /^\/game-data\/[^/]+$/.test(path)) return ['en', 'zh', 'de', 'ja'];
  return ['en', 'zh'];
}

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in languages && seg !== 'en') return seg as Lang;
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
  const withoutLocale = path.replace(/^\/(?:zh|de|ja|zh-hant|es|ru|ko|fr|pt-br)(?=\/|$)/, '') || '/';
  const clean = withoutLocale === '/' ? '' : withoutLocale;
  if (lang === defaultLang) return clean || '/';
  return `/${lang}${clean || '/'}`;
}
