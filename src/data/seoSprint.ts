export type SprintLink = {
  title: string;
  desc: string;
  href: string;
  cluster: 'launch' | 'news' | 'guide' | 'map' | 'tool';
};

export const launchWatchLinks: SprintLink[] = [
  {
    title: 'Mistfall Hunter release date',
    desc: 'Launch timing, platform status, and what to verify as July 30 approaches.',
    href: '/release-date',
    cluster: 'launch',
  },
  {
    title: 'Steam charts and player count',
    desc: 'How to read pre-launch interest, wishlist spikes, and post-launch player-count signals.',
    href: '/steam-charts-player-count',
    cluster: 'launch',
  },
  {
    title: 'Steam page guide',
    desc: 'Steam listing, tags, system expectations, and the fastest way to follow launch updates.',
    href: '/steam-page-guide',
    cluster: 'launch',
  },
  {
    title: 'Gameplay overview',
    desc: 'The PvPvE extraction loop, class choices, loot risk, and combat expectations.',
    href: '/gameplay-overview',
    cluster: 'guide',
  },
  {
    title: 'Classes guide',
    desc: 'All known class roles, beginner picks, solo notes, and launch-day testing priorities.',
    href: '/classes',
    cluster: 'guide',
  },
  {
    title: 'Best class for beginners',
    desc: 'Lower-risk class choices for first runs, extraction learning, and early mistakes.',
    href: '/best-class-for-beginners',
    cluster: 'guide',
  },
  {
    title: 'Crossplay status',
    desc: 'PC, Xbox, and PlayStation crossplay expectations with what is confirmed and what is not.',
    href: '/crossplay-status',
    cluster: 'launch',
  },
  {
    title: 'Price status',
    desc: 'Current price-watch page for Steam, Xbox, PlayStation, editions, and Game Pass questions.',
    href: '/price-status',
    cluster: 'launch',
  },
  {
    title: 'Xbox launch guide',
    desc: 'Xbox store signals, console expectations, Game Pass watchpoints, and launch checklist.',
    href: '/xbox-launch-guide',
    cluster: 'launch',
  },
  {
    title: 'PS5 launch guide',
    desc: 'PlayStation launch watch, controller expectations, and what to verify near release.',
    href: '/ps5-launch-guide',
    cluster: 'launch',
  },
  {
    title: 'How to extract',
    desc: 'Extraction route planning, Soul of Return context, and mistakes that lose the run.',
    href: '/how-to-extract',
    cluster: 'guide',
  },
  {
    title: 'Soul of Return',
    desc: 'A focused explainer for the extraction objective and why it matters during each run.',
    href: '/soul-of-return',
    cluster: 'guide',
  },
  {
    title: 'Hallowgrove map guide',
    desc: 'Known Hallowgrove route priorities, pressure points, and update notes for launch.',
    href: '/hallowgrove-map-guide',
    cluster: 'map',
  },
  {
    title: 'Brandrgarde map guide',
    desc: 'Known Brandrgarde route priorities, extraction planning, and boss-route watchpoints.',
    href: '/brandrgarde-map-guide',
    cluster: 'map',
  },
  {
    title: 'Gyldenblood uses',
    desc: 'Resource-focused guide for what Gyldenblood may affect and what to confirm at release.',
    href: '/gyldenblood-uses',
    cluster: 'guide',
  },
  {
    title: 'Server status',
    desc: 'Launch-week status hub for login issues, maintenance notes, and outage search demand.',
    href: '/server-status',
    cluster: 'tool',
  },
  {
    title: 'Known issues tracker',
    desc: 'A structured tracker for launch bugs, crashes, stutter, and verified workaround notes.',
    href: '/known-issues-tracker',
    cluster: 'tool',
  },
  {
    title: 'Mistfall Hunter alternatives',
    desc: 'A comparison page for players coming from extraction games, Soulslikes, and ARPGs.',
    href: '/mistfall-hunter-alternatives',
    cluster: 'guide',
  },
];

export const latestNewsLinks: SprintLink[] = [
  {
    title: 'Steam charts search spike',
    desc: 'Why player-count searches are rising before release and how to interpret the numbers.',
    href: '/news-steam-charts-search-spike',
    cluster: 'news',
  },
  {
    title: 'Steam Next Fest demo surge',
    desc: 'A brief on demo attention and what it suggests about launch-week search demand.',
    href: '/news-steam-next-fest-demo-surge',
    cluster: 'news',
  },
  {
    title: 'Release date countdown',
    desc: 'The launch countdown topic players are checking most often before July 30.',
    href: '/news-release-date-countdown',
    cluster: 'news',
  },
  {
    title: 'Gameplay search surge',
    desc: 'Why gameplay overview searches are growing and which pages should answer them first.',
    href: '/news-gameplay-search-surge',
    cluster: 'news',
  },
  {
    title: 'Crossplay question rising',
    desc: 'A short update on why PC and console players are searching crossplay answers now.',
    href: '/news-crossplay-question-rising',
    cluster: 'news',
  },
  {
    title: 'Price search watch',
    desc: 'Current pre-launch price intent and the questions players want answered quickly.',
    href: '/news-price-search-watch',
    cluster: 'news',
  },
  {
    title: 'Classes search watch',
    desc: 'Why class choice and beginner builds are becoming stronger launch-week topics.',
    href: '/news-classes-search-watch',
    cluster: 'news',
  },
  {
    title: 'Xbox launch watch',
    desc: 'Console-focused search demand around Xbox availability, Game Pass, and launch timing.',
    href: '/news-xbox-launch-watch',
    cluster: 'news',
  },
  {
    title: 'Gyldenblood interest',
    desc: 'A resource-topic brief for players tracking progression and crafting questions.',
    href: '/news-gyldenblood-resource-interest',
    cluster: 'news',
  },
  {
    title: 'Extraction mechanics trend',
    desc: 'A news-style explainer for rising searches about extraction, death penalties, and loot risk.',
    href: '/news-extraction-mechanics-trend',
    cluster: 'news',
  },
  {
    title: 'Boss guide interest',
    desc: 'Pre-launch demand around Mist Lord encounters, boss rewards, and route planning.',
    href: '/news-boss-guide-interest',
    cluster: 'news',
  },
  {
    title: 'Launch week preparation',
    desc: 'A concise briefing for what players should read before the servers open.',
    href: '/news-launch-week-preparation',
    cluster: 'news',
  },
];
