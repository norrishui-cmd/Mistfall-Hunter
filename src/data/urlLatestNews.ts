import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

type NewsBrief = {
  slug: string;
  headline: string;
  trend: string;
  sourceContext: string;
  angle: string;
  update: string;
};

const newsCards = [
  { title: 'Release date', desc: 'Launch timing, platforms, and access status.', href: '/release-date' },
  { title: 'Steam launch guide', desc: 'Steam page, demo lessons, reviews, and install prep.', href: '/steam-launch-guide' },
  { title: 'Gameplay overview', desc: 'Combat, extraction, PvE, PvP, and loot explained.', href: '/gameplay-overview' },
];

const briefs: NewsBrief[] = [
  { slug: 'news-steam-next-fest-demo-surge', headline: 'Steam Next Fest demo interest gives Mistfall Hunter a strong launch runway', trend: 'Steam Next Fest demo', sourceContext: 'Public previews and Steam-facing coverage highlighted Mistfall Hunter as a notable pre-launch demo, with players using the demo period to test combat, extraction, and class feel.', angle: 'The news angle is not just demo availability; it is that demo interest can become launch-day search demand for gameplay, classes, performance, and server status.', update: 'After launch, add whether demo players converted into Steam reviews and player-count momentum.' },
  { slug: 'news-steam-charts-search-spike', headline: 'Mistfall Hunter Steam charts searches rise before launch', trend: 'steam charts', sourceContext: 'Google Trends screenshots show "mistfall hunter steam charts" rising sharply in the last week, which means players are already looking for population signals.', angle: 'Steam chart pages should explain wishlists, demo activity, concurrent players, and the limits of Steam-only data before launch numbers exist.', update: 'After launch, add verified Steam peak concurrency and first-week trend notes.' },
  { slug: 'news-release-date-countdown', headline: 'Mistfall Hunter release date searches accelerate as launch approaches', trend: 'release date', sourceContext: 'The game is in its final pre-launch window, and release-date queries are rising as players check exact timing and platform access.', angle: 'This news page should convert broad release searches into useful launch prep: time zones, platform links, preloads, and first-run planning.', update: 'Turn this page into a launch archive after release, with patch and server notes.' },
  { slug: 'news-steam-page-watch', headline: 'Steam searches become a key pre-launch traffic lane for Mistfall Hunter', trend: 'Steam', sourceContext: 'Steam is one of the main discovery surfaces for Mistfall Hunter, especially after demo and wishlist activity.', angle: 'Steam news should focus on store access, wishlist behavior, demo lessons, reviews, system requirements, and Steam Deck watch items.', update: 'Add final Steam unlock state, reviews, and file size after launch.' },
  { slug: 'news-gameplay-search-surge', headline: 'Gameplay searches show players want the Mistfall Hunter loop explained fast', trend: 'gameplay', sourceContext: 'Recent trend data shows "mistfall hunter gameplay" rising, which is typical when players move from awareness into purchase or install research.', angle: 'The best answer is a concise gameplay loop: enter the Gyldenmist, fight PvE and PvP, secure value, and extract before greed wins.', update: 'Add live gameplay clips, map screenshots, and class examples after release.' },
  { slug: 'news-mistfall-hunters-spelling', headline: 'Mistfall Hunters plural searches need a clear title correction page', trend: 'mistfall hunters', sourceContext: 'Trend data shows players also search the plural form "mistfall hunters" even though the title is Mistfall Hunter.', angle: 'A spelling news page can catch typo traffic and route users to release, Steam, gameplay, and class pages without misleading them.', update: 'Add Search Console typo variants after impressions appear.' },
  { slug: 'news-crossplay-question-rising', headline: 'Crossplay becomes a rising Mistfall Hunter launch question', trend: 'crossplay', sourceContext: 'With PC, Xbox, and PS5 interest, crossplay searches naturally rise as friends plan squads before launch.', angle: 'Crossplay coverage should be cautious: separate PC, Steam, Xbox app, Xbox console, PS5, cross-progression, and party support.', update: 'Add official crossplay and account-linking details when confirmed.' },
  { slug: 'news-price-search-watch', headline: 'Mistfall Hunter price searches show players are comparing store access and Game Pass', trend: 'price', sourceContext: 'Price is a rising pre-launch query because players want to know whether to buy, subscribe through Game Pass, or wait for store details.', angle: 'Price news should avoid guessing and instead track platform store labels, regional prices, editions, and subscription access.', update: 'Add final Steam, Xbox, and PS5 price data after store pages finalize.' },
  { slug: 'news-classes-search-watch', headline: 'Class searches rise as Mistfall Hunter players prepare first mains', trend: 'classes', sourceContext: 'Class searches are appearing alongside gameplay and release queries, which suggests players are preparing first-run choices.', angle: 'Class news should focus on role clarity rather than final meta: beginner safety, solo value, PvP pressure, PvE clear, and squad utility.', update: 'Add live skill tree data and balance changes after launch.' },
  { slug: 'news-xbox-launch-watch', headline: 'Xbox searches remain important for Mistfall Hunter launch discovery', trend: 'Xbox', sourceContext: 'Xbox and Game Pass visibility make Xbox launch coverage important even when a weekly trend line fluctuates.', angle: 'Xbox news should answer Game Pass, Xbox app, console install, controller settings, cloud status, and server launch questions.', update: 'Add final Xbox store details, file size, and launch patch notes.' },

  { slug: 'news-game-pass-access-watch', headline: 'Game Pass access could shape Mistfall Hunter launch-week traffic', trend: 'Game Pass', sourceContext: 'Game Pass-related queries are high-intent because they come from players who may install immediately if access is available.', angle: 'This page should separate PC Game Pass, Xbox console access, cloud availability, and store ownership.', update: 'Add exact subscription labels and install steps when the launch listing is live.' },
  { slug: 'news-ps5-launch-watch', headline: 'PS5 launch interest creates demand for console-specific Mistfall Hunter answers', trend: 'PS5', sourceContext: 'PS5 users need different launch answers than Steam users: store availability, controller feel, performance modes, and online access.', angle: 'PS5 news should not recycle PC-only advice. It should track console settings, store timing, and performance expectations.', update: 'Add PlayStation store details and tested settings after launch.' },
  { slug: 'news-steam-deck-watch', headline: 'Steam Deck compatibility becomes a high-value Mistfall Hunter watch topic', trend: 'Steam Deck', sourceContext: 'Steam Deck questions often rise around PC action games, especially when players want handheld access at launch.', angle: 'Compatibility should be verified through store status, Proton behavior, controls, anti-cheat, and actual performance.', update: 'Add verified Steam Deck results after launch testing.' },
  { slug: 'news-system-requirements-watch', headline: 'System requirement searches are expected to climb before Mistfall Hunter launch', trend: 'system requirements', sourceContext: 'As launch nears, PC players move from wishlist interest to whether their hardware can run the game.', angle: 'A system requirements news page should avoid fake specs and prepare a place for minimum, recommended, storage, and settings data.', update: 'Add official PC requirements and settings recommendations when published.' },
  { slug: 'news-server-status-launch-week', headline: 'Server status pages should be ready before Mistfall Hunter launch week', trend: 'server status', sourceContext: 'Extraction games often create launch-week searches around queues, login errors, matchmaking, and server load.', angle: 'The news page should teach players to distinguish server incidents from local performance or platform-service problems.', update: 'Add live incidents, maintenance windows, and official notices during launch week.' },
  { slug: 'news-known-issues-prelaunch', headline: 'Known issue tracking will matter as Mistfall Hunter moves from demo to launch', trend: 'known issues', sourceContext: 'Demo and launch windows usually produce searches for crashes, stutter, queues, controller problems, and install issues.', angle: 'Known-issue coverage should group problems by server, platform, performance, input, and account access.', update: 'Add verified fixes and official patch references after launch.' },
  { slug: 'news-controller-settings-console', headline: 'Controller settings searches should rise with Xbox and PS5 launch interest', trend: 'controller settings', sourceContext: 'Console and controller players need camera, aim, dodge, block, and quick-access comfort before high-risk extraction runs.', angle: 'Controller news should route players to class-specific settings rather than one universal sensitivity number.', update: 'Add exact menu values after launch testing.' },
  { slug: 'news-solo-player-interest', headline: 'Solo player questions are becoming a key Mistfall Hunter pre-launch topic', trend: 'solo play', sourceContext: 'Solo viability is a common question for extraction games because risk, route control, and class choice change without teammates.', angle: 'Solo news should emphasize short routes, quiet looting, early extraction, and classes with reset or scouting tools.', update: 'Add live solo routes and class performance after launch.' },
  { slug: 'news-squad-comps-launch-watch', headline: 'Squad comp searches will grow as players form launch-week teams', trend: 'squad comps', sourceContext: 'Mistfall Hunter class roles create natural searches around duos, trios, support picks, and frontline/ranged balance.', angle: 'Squad coverage should explain roles: pressure, support, ranged control, looting watch, and extraction cover.', update: 'Add tested duo and trio examples after launch.' },
  { slug: 'news-boss-route-interest', headline: 'Boss route searches are likely to spike once Mistfall Hunter maps go live', trend: 'boss routes', sourceContext: 'Bosses are high-value PvE anchors in extraction games, so players will search locations, rewards, and safe routes quickly.', angle: 'Boss news should avoid unverified pins and focus on preparation, third-party pressure, and reward extraction.', update: 'Add exact boss locations, moves, and drops after launch.' },

  { slug: 'news-hallowgrove-map-interest', headline: 'Hallowgrove map searches should become early launch traffic', trend: 'Hallowgrove', sourceContext: 'Named map searches turn into route, exit, loot, and boss queries as soon as players begin repeated runs.', angle: 'Hallowgrove coverage should begin with safe route learning, then add exits, loot loops, boss risk, and chaos variants.', update: 'Add verified screenshots and markers after launch.' },
  { slug: 'news-brandrgarde-map-interest', headline: 'Brandrgarde needs dedicated route coverage before live map data arrives', trend: 'Brandrgarde', sourceContext: 'Brandrgarde is a named map topic that can support boss, loot, chaos, and extraction searches.', angle: 'Brandrgarde news should frame the map as a higher-risk route-planning topic until exact live markers are known.', update: 'Add live exits, boss pins, and reward notes after launch.' },
  { slug: 'news-chaos-variant-interest', headline: 'Chaos variant searches create a new Mistfall Hunter map-content lane', trend: 'chaos variants', sourceContext: 'Variant systems create specific searches around what changed, whether rewards improve, and whether solo players should enter.', angle: 'The page should explain variant risk without inventing modifiers or rewards before launch verification.', update: 'Add exact variant rules, screenshots, and rewards after launch.' },
  { slug: 'news-gyldenblood-resource-interest', headline: 'Gyldenblood searches can become a launch-week resource hub', trend: 'Gyldenblood', sourceContext: 'Resource names become high-value searches once players extract unknown items and ask whether to keep or sell them.', angle: 'Gyldenblood coverage should teach banking priority and source tracking without fake drop rates.', update: 'Add confirmed uses, costs, and farming routes after launch.' },
  { slug: 'news-bell-extraction-mechanic', headline: 'Bell extraction questions deserve a dedicated Mistfall Hunter news explainer', trend: 'bell extraction', sourceContext: 'Extraction mechanics are among the first things new players search because they decide whether loot survives the run.', angle: 'This page should connect bell creature, shrine, Soul of Return, timing, sound, and ambush risk.', update: 'Add exact interaction steps and timer behavior after launch.' },
  { slug: 'news-soul-of-return-explainer', headline: 'Soul of Return remains one of Mistfall Hunter most important mechanic searches', trend: 'Soul of Return', sourceContext: 'Soul of Return is a named extraction-related concept that can anchor beginner, route, and FAQ pages.', angle: 'The news page should explain why securing extraction conditions early changes the whole run.', update: 'Add exact item behavior and route screenshots after launch.' },
  { slug: 'news-loot-affix-prep', headline: 'Loot and affix searches will grow when players start banking gear', trend: 'loot affixes', sourceContext: 'Extraction players quickly search what to keep, sell, and risk once inventories fill with gear and resources.', angle: 'Loot news should avoid final tier lists before launch and instead teach class fit, survival value, and extraction value.', update: 'Add verified affix names, item examples, and economy notes after launch.' },
  { slug: 'news-dark-souls-comparison', headline: 'Dark Souls comparison searches can introduce action RPG players to Mistfall Hunter', trend: 'Dark Souls comparison', sourceContext: 'Previews and player discussion often compare deliberate combat and stamina pressure to Soulslike expectations.', angle: 'The comparison should be careful: Mistfall Hunter is an extraction ARPG, not a single-player Souls clone.', update: 'Add launch combat examples and controller notes after release.' },
  { slug: 'news-dark-and-darker-audience', headline: 'Dark and Darker players are a natural Mistfall Hunter search audience', trend: 'Dark and Darker audience', sourceContext: 'Fantasy extraction players often compare class roles, loot risk, PvPvE routes, and team composition across games.', angle: 'This news page should explain overlap without claiming identical systems or balance.', update: 'Add fair feature comparison after launch.' },
  { slug: 'news-tarkov-extraction-audience', headline: 'Extraction shooter players are searching for how Mistfall Hunter differs', trend: 'Tarkov audience', sourceContext: 'Tarkov-style players understand loot risk and map knowledge, but Mistfall Hunter shifts those habits into melee, magic, and class combat.', angle: 'The page should translate extraction concepts without importing shooter-only advice.', update: 'Add live economy, route, and gear-loss details after launch.' },
];

function createPage(brief: NewsBrief): SeoPage {
  return {
    slug: brief.slug,
    group: 'news',
    template: 'faq',
    title: `${brief.headline} | Mistfall Hunter News`,
    description: `${brief.headline}. A site-written Mistfall Hunter news brief covering ${brief.trend}, why it matters before launch, and what to update next.`,
    eyebrow: 'Latest news',
    h1: brief.headline,
    lead: brief.angle,
    updated: 'Compiled July 12, 2026 from public launch-window information and rising search demand.',
    intent: {
      primary: `Mistfall Hunter ${brief.trend}`,
      secondary: [`${brief.trend} news`, `${brief.trend} guide`, 'Mistfall Hunter launch news'],
      freshness: brief.update,
    },
    checklist: [
      `News topic: ${brief.trend}`,
      `Reported context: ${brief.sourceContext}`,
      `Editorial angle: ${brief.angle}`,
      'Keep players on the site with related internal guides',
      `Next update: ${brief.update}`,
    ],
    steps: [
      { title: 'What happened', body: brief.sourceContext },
      { title: 'Why it matters', body: brief.angle },
      { title: 'What changes after launch', body: brief.update },
    ],
    tables: [{
      title: `${brief.trend} news tracker`,
      headers: ['Signal', 'Current meaning', 'Next update'],
      rows: [
        ['Search demand', `Players are looking for ${brief.trend} answers before launch`, 'Watch Search Console impressions'],
        ['Player need', brief.angle, 'Add screenshots, numbers, or official wording'],
        ['Accuracy guardrail', 'Do not invent data before it is public or verified', brief.update],
      ],
    }],
    sections: [
      { heading: 'News summary', body: [brief.sourceContext] },
      { heading: 'Site analysis', body: [brief.angle] },
      { heading: 'What players should do now', body: ['Use this page as the starting point, then open the related internal guide pages for release timing, platform setup, gameplay basics, class choice, or troubleshooting.'] },
      { heading: 'Update plan', body: [brief.update] },
    ],
    cards: newsCards,
    relatedSearches: [`Mistfall Hunter ${brief.trend}`, `${brief.trend} Mistfall Hunter news`, `${brief.trend} launch update`],
    faqs: [
      { q: 'Is this a standalone news page?', a: 'Yes. It is a site-written news brief with its own URL, summary, analysis, tracker table, FAQ, and internal links.' },
      { q: 'Does this page rely on unverified numbers?', a: 'No. It avoids fake prices, player counts, drop rates, crossplay claims, and map pins until those details are public or tested.' },
      { q: 'What will be updated next?', a: brief.update },
    ],
  };
}

function localizeDraft(page: SeoPage): SeoPage {
  return {
    ...page,
    title: `${page.title} | Chinese Draft`,
    description: `${page.description} Chinese news draft reserved for localization and launch updates.`,
    eyebrow: 'ZH Latest news',
    h1: `${page.h1} Chinese news`,
    lead: `${page.lead} This Chinese news URL is a deployment-safe draft for later localization.`,
    cards: page.cards?.map((card) => ({ ...card, href: card.href.startsWith('/zh/') ? card.href : `/zh${card.href}` })),
    intent: page.intent ? { ...page.intent, primary: `${page.intent.primary} Chinese`, freshness: 'Localize with Chinese search wording and verified launch data.' } : undefined,
    sections: [
      { heading: 'Chinese news draft status', body: ['This page reserves the same news topic for the Chinese path. Localize after launch data or Search Console impressions confirm demand.'] },
      ...(page.sections ?? []),
    ],
    relatedSearches: page.relatedSearches?.map((query) => `${query} Chinese`),
  };
}

export const enLatestNewsPages: SeoPage[] = briefs.map(createPage);
export const zhLatestNewsPages: SeoPage[] = enLatestNewsPages.map(localizeDraft);

export const enLatestNewsLinks: PriorityLink[] = enLatestNewsPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhLatestNewsLinks: PriorityLink[] = zhLatestNewsPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
