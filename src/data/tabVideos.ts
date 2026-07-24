// One official YouTube video per main-nav tab cluster, shown on every
// long-tail detail page belonging to that tab (see VideoEmbed.astro and its
// use in [slug].astro). Video IDs are real official Bellring Games /
// publisher-released trailers and gameplay showcases found via web search
// on 2026-07-24 — not invented. If a video ever gets taken down or embed
// permissions change, replace the id here; nothing else needs to change.

export type TabVideoCluster = 'release' | 'guides' | 'builds' | 'faq' | 'about' | 'maps';

export type TabVideo = { id: string; title: string; titleZh: string };

export const tabVideos: Record<TabVideoCluster, TabVideo> = {
  release: { id: 'xUA9uornTwI', title: 'Mistfall Hunter \u2014 Official Release Date Trailer', titleZh: 'Mistfall Hunter \u2014 官方发售日期预告片' },
  guides: { id: '9QLz2FjR29E', title: 'Mistfall Hunter \u2014 Official Open Beta Gameplay Trailer', titleZh: 'Mistfall Hunter \u2014 官方公测实机演示' },
  builds: { id: 'u60eUi_b2Dk', title: 'Mistfall Hunter \u2014 Open Beta Gameplay Showcase (Classes & Map)', titleZh: 'Mistfall Hunter \u2014 公测职业与地图实机展示' },
  faq: { id: 'MujJRGfqetA', title: 'Mistfall Hunter \u2014 Official Teaser Trailer', titleZh: 'Mistfall Hunter \u2014 官方先导预告片' },
  about: { id: '_en7OCh4vUA', title: 'Mistfall Hunter \u2014 Official Cinematic Teaser Trailer', titleZh: 'Mistfall Hunter \u2014 官方电影级预告片' },
  maps: { id: 'feGzAitk9lo', title: 'Mistfall Hunter \u2014 Solemn Needles Reveal Trailer', titleZh: 'Mistfall Hunter \u2014 Solemn Needles 地图揭晓预告片' },
};
