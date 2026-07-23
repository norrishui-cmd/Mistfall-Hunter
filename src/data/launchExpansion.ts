import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

// ---------------------------------------------------------------------------
// Launch-window expansion batch — new long-tail pages added ~3 weeks before
// launch (July 29, 2026). Sourced from the official Steam/Xbox listings and
// multiple independent press outlets (see the delivery notes for this batch).
//
// INDEXABLE at add-time: community, pay-to-win, age-rating (stable pre-launch
// facts sourced from official storefronts). NOT indexable yet: editions,
// anti-cheat (specifics are genuinely unconfirmed — see seoPages.ts
// INDEXABLE_SLUGS for the live gating list).
// ---------------------------------------------------------------------------

export const enLaunchPages: SeoPage[] = [
  {
    slug: 'community',
    group: 'about',
    title: 'Mistfall Hunter Official Channels: Discord, X & More',
    description: "Where Bellring Games actually posts Mistfall Hunter updates — official Discord, X, YouTube, and the regional channels listed on the Steam store page.",
    eyebrow: 'Community & official channels',
    h1: 'Mistfall Hunter official channels',
    lead: "Skip the impersonator accounts. Here's where the developer actually posts, and how to tell official from unofficial.",
    sections: [
      { heading: 'Official channels', body: ["Bellring Games posts major updates through Discord and X first, with YouTube handling trailers and a standalone official site covering store links and policy pages. The Steam store listing itself names Discord, X, YouTube, and — notably — QQ, Bilibili, and Douyin as official channels, which lines up with the game's real presence in the Chinese market."] },
      { heading: 'Telling official from fan-run', body: ["The safest check is the Steam store page: its channel icons link straight to the accounts Bellring actually runs. Player-run Discords, subreddits, and wikis (this site included) are useful for guides and discussion, but treat them as community resources rather than official sources for patch notes or pricing."] },
    ],
    cards: [
      { title: 'Official Discord', desc: 'Patch notes, playtest news, and community events.', href: 'https://discord.com/invite/mistfallhunter' },
      { title: 'Official X / Twitter', desc: 'Short updates and trailer drops.', href: 'https://x.com/mistfallhunter' },
      { title: 'Official YouTube', desc: 'Trailers and announcement videos.', href: 'https://www.youtube.com/@MistfallHunter' },
      { title: 'Official website', desc: 'Store links and policy information.', href: 'https://mistfallhunter.com/' },
    ],
    faqs: [
      { q: 'What is the official Mistfall Hunter Discord?', a: "Bellring Games runs the official Discord linked from the game's Steam store page — that's where patch notes and event details post first." },
      { q: 'Is there an official subreddit?', a: "Community discussion happens on Reddit and other player-run spaces, but Bellring's own channels are Discord, X, YouTube, and the official website — treat anything else as unofficial." },
    ],
    confidence: 'confirmed',
    sources: [
      { label: 'Official Steam store page (lists all official channels)', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
      { label: 'Official website', href: 'https://mistfallhunter.com/' },
    ],
  },
  {
    slug: 'pay-to-win',
    group: 'news',
    title: 'Is Mistfall Hunter Pay-to-Win? What Bellring Has Confirmed',
    description: "Bellring Games has repeatedly stated Mistfall Hunter has no pay-to-win mechanics and no paid stat boosts. Here's exactly what that does and doesn't tell you.",
    eyebrow: 'Monetization',
    h1: 'Is Mistfall Hunter pay-to-win?',
    lead: "Bellring's own marketing is unusually direct on this point: no pay-to-win, no paid stat boosts. Here's what's confirmed and what still needs watching.",
    sections: [
      { heading: 'What Bellring has said', body: ['Both the official Steam listing and the open beta\'s own marketing repeat the same line: there are no pay-to-win mechanics and no paid stat boosts, and victory is meant to come down to skill and preparation rather than spending. That framing has shown up consistently across the game\'s own store copy and press materials, not just a one-off marketing line.'] },
      { heading: 'What is still pending confirmation', body: ['"No stat boosts" doesn\'t automatically tell you what IS for sale. Cosmetics are near-certain given the beta\'s avatar frames, poses, and emotes, and the beta\'s Golden Cipher event also pointed to Deluxe and Standard edition tiers existing. None of that confirms final pricing, whether there\'s a battle pass, or how convenience items will be sold. Treat the no-P2W promise as solid and the rest of the shop as still pending confirmation until launch.'], bullets: ['Cosmetic-only rewards are the confirmed pattern so far', 'Deluxe and Standard editions exist in some form (beta event context)', 'No confirmed battle pass or season pass structure yet', 'Final price is still not announced'] },
    ],
    cards: [
      { title: 'Release date & price', desc: 'Standard vs Deluxe pricing and launch discount.', href: '/release-date' },
      { title: 'Price & access status', desc: 'Free-to-play status and Game Pass access tracker.', href: '/price-status' },
      { title: 'Beta rewards', desc: 'What beta cosmetics carry into launch.', href: '/game-data/beta-rewards' },
    ],
    faqs: [
      { q: 'Has Bellring confirmed no pay-to-win?', a: 'Yes — the official Steam listing and beta marketing both state there are no pay-to-win mechanics and no paid stat boosts.' },
      { q: 'So what will actually cost money?', a: "Not fully confirmed. Cosmetics look like the safe bet based on beta reward patterns; anything beyond that (editions, a possible battle pass) isn't locked in yet." },
    ],
    confidence: 'confirmed',
    sources: [
      { label: 'Official Steam store page', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
    ],
  },
  {
    slug: 'age-rating',
    group: 'about',
    title: 'Mistfall Hunter Age Rating & Content Warnings',
    description: 'Mistfall Hunter is rated Mature by ESRB tracking sites, with official content descriptors for graphic violence, gore, and alcohol use.',
    eyebrow: 'Age rating',
    h1: 'Mistfall Hunter age rating and content',
    lead: "If you're checking whether this is appropriate for a younger player, here's what's actually listed.",
    sections: [
      { heading: 'What is listed', body: ['Storefront tracking lists Mistfall Hunter as ESRB Mature, and the official Steam listing carries content descriptors for graphic violence, gore, and use of alcohol. That lines up with the tone of the game itself — a dark fantasy world with corrupted monsters, melee combat, and a lore built around dead gods and a corrupting mist.'] },
      { heading: 'What that means in practice', body: ["Expect stylized but frequent violence, some blood and gore on kills, and dark thematic material — death, corruption, loss — rather than anything sexual. There's no confirmed PEGI breakdown yet, but the ESRB Mature listing and Steam's own descriptors are consistent enough to treat as a reliable read on tone."] },
    ],
    cards: [
      { title: 'What is Mistfall Hunter?', desc: 'Genre, setting, and core loop explained.', href: '/about' },
      { title: 'System requirements', desc: 'What your PC needs to run it.', href: '/system-requirements' },
    ],
    faqs: [
      { q: 'What age rating is Mistfall Hunter?', a: 'Storefront tracking lists it as ESRB Mature, with content descriptors for graphic violence, gore, and alcohol use.' },
      { q: 'Is there sexual content?', a: "Nothing indicated in official descriptors — the mature content flagged is violence and gore, not sexual content." },
    ],
    confidence: 'reported',
    sources: [
      { label: 'Official Steam store page (content descriptors)', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
    ],
  },
  {
    slug: 'editions',
    group: 'news',
    title: 'Mistfall Hunter Editions: Standard vs Deluxe, What We Know',
    description: 'Mistfall Hunter appears to ship with Standard and Deluxe editions based on open beta reward context. Pricing and exact contents are not yet confirmed.',
    eyebrow: 'Editions tracker',
    h1: 'Mistfall Hunter editions',
    lead: 'Edition tiers appear to exist, but the details that actually matter — price and contents — are not locked in yet.',
    updated: 'Pre-launch tracker: edition names surfaced through a beta event, not a full editions announcement. Treat contents and pricing as unconfirmed.',
    sections: [
      { heading: 'What points to editions existing', body: ["During the open beta's Golden Cipher event, some of the listed prizes were described as Deluxe and Standard edition Steam keys — which tells us tiered editions are planned, without telling us what separates them or what either one costs."] },
      { heading: 'What to verify before buying', body: ["Check what's actually included in a Deluxe tier — cosmetics, in-game currency, a soundtrack, and early access are all common patterns — against the price difference, and confirm whether Standard edition owners can upgrade later rather than assuming you have to decide at launch."], bullets: ['Exact price of each edition', 'What Deluxe includes beyond Standard', 'Whether upgrading later is possible', 'Whether editions differ by platform'] },
    ],
    cards: [
      { title: 'Is it free to play?', desc: 'Price and Game Pass status tracker.', href: '/free-to-play' },
      { title: 'Pay-to-win check', desc: "What Bellring has confirmed about monetization.", href: '/pay-to-win' },
    ],
    faqs: [
      { q: 'Is there a Deluxe edition of Mistfall Hunter?', a: "Beta event materials referenced Deluxe and Standard edition Steam keys, which suggests tiered editions, but a full editions announcement with pricing hasn't landed yet." },
      { q: 'Should I wait before buying a specific edition?', a: "Given contents and pricing aren't confirmed, it's reasonable to wait for the official editions announcement before choosing." },
    ],
    confidence: 'reported',
    sources: [
      { label: 'Steam Community hub (beta event announcements)', href: 'https://steamcommunity.com/app/3282300' },
    ],
  },
  {
    slug: 'anti-cheat',
    group: 'news',
    title: 'Mistfall Hunter Anti-Cheat: What to Watch For at Launch',
    description: 'Mistfall Hunter has not announced a specific anti-cheat system yet. Here is why it matters for this game and what to check before launch.',
    eyebrow: 'Anti-cheat tracker',
    h1: 'Mistfall Hunter anti-cheat',
    lead: "No specific anti-cheat system has been named yet. Here's why it's worth watching for a game built around permanent loot loss.",
    sections: [
      { heading: 'Why this matters more than usual', body: ['Extraction games create an unusually strong incentive to cheat, since dying costs you everything you were carrying — that raises the stakes of any exploit, aimbot, or ESP tool far more than in a typical PvE game. No specific anti-cheat solution, kernel-level or otherwise, has been named in official materials so far.'] },
      { heading: 'What to check before launch', body: ["Watch official channels for an anti-cheat announcement close to launch, since some solutions require a kernel-level driver that some players choose to avoid. If you have concerns about kernel-level anti-cheat software, that's worth confirming before you install, not after."], bullets: ['Whether an anti-cheat system is named at all', 'Whether it runs at kernel level', 'Platform-specific requirements (PC vs console)', 'How reporting suspected cheaters will work'] },
    ],
    cards: [
      { title: 'Crossplay tracker', desc: 'What is confirmed about cross-platform play.', href: '/crossplay' },
      { title: 'System requirements', desc: 'What your PC needs to run it.', href: '/system-requirements' },
    ],
    faqs: [
      { q: 'What anti-cheat does Mistfall Hunter use?', a: "Not announced yet. No specific system has been named in official materials as of this tracker's last update." },
      { q: 'Why does this matter more for an extraction game?', a: 'Because death means losing everything you were carrying, cheating has a bigger payoff here than in most PvE-only games — which is exactly why a credible anti-cheat solution matters.' },
    ],
    confidence: 'unconfirmed',
    sources: [
      { label: 'Official Steam store page (checked — no anti-cheat system named)', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
      { label: 'Official Discord (checked — no announcement found)', href: 'https://discord.com/invite/mistfallhunter' },
    ],
  },
];

export const zhLaunchPages: SeoPage[] = [
  {
    slug: 'community',
    group: 'about',
    title: 'Mistfall Hunter 官方渠道：Discord、X 与更多',
    description: 'Bellring Games 真正发布 Mistfall Hunter 更新的地方——官方 Discord、X、YouTube，以及 Steam 商店页面列出的地区渠道。',
    eyebrow: '社区与官方渠道',
    h1: 'Mistfall Hunter 官方渠道',
    lead: '别被仿冒账号骗了。这里是开发商真正发布内容的地方，以及怎么分辨官方和非官方。',
    sections: [
      { heading: '官方渠道', body: ['Bellring Games 的重要更新首发在 Discord 和 X，YouTube 负责预告片，官网则承载商店链接和条款信息。Steam 商店页面本身列出的官方渠道包括 Discord、X、YouTube，还有——值得注意的——QQ、B站与抖音，这和游戏在中国市场的真实布局是吻合的。'] },
      { heading: '怎么分辨官方和粉丝运营', body: ['最保险的办法是看 Steam 商店页面：上面的渠道图标直接链接到 Bellring 真正运营的账号。玩家自建的 Discord、子版块和 wiki（包括本站）对攻略和讨论很有用，但请把它们当作社区资源，而不是补丁说明或定价的官方信源。'] },
    ],
    cards: [
      { title: '官方 Discord', desc: '补丁说明、测试消息与社区活动。', href: 'https://discord.com/invite/mistfallhunter' },
      { title: '官方 X / Twitter', desc: '简短更新与预告片。', href: 'https://x.com/mistfallhunter' },
      { title: '官方 YouTube', desc: '预告片与官宣视频。', href: 'https://www.youtube.com/@MistfallHunter' },
      { title: '官方网站', desc: '商店链接与条款信息。', href: 'https://mistfallhunter.com/' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 的官方 Discord 是哪个？', a: 'Bellring Games 运营的官方 Discord 链接在游戏 Steam 商店页面上——补丁说明和活动详情都会先发在那里。' },
      { q: '有官方 subreddit 吗？', a: 'Reddit 和其他玩家自建空间里有社区讨论，但 Bellring 自己的渠道是 Discord、X、YouTube 和官网——其余的请当作非官方处理。' },
    ],
    confidence: 'confirmed',
    sources: [
      { label: '官方 Steam 商店页面（列出全部官方渠道）', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
      { label: '官方网站', href: 'https://mistfallhunter.com/' },
    ],
  },
  {
    slug: 'pay-to-win',
    group: 'news',
    title: 'Mistfall Hunter 是数值付费游戏吗？Bellring 官方怎么说',
    description: 'Bellring Games 多次表示 Mistfall Hunter 没有数值付费机制、不卖属性加成。这里讲清楚这句话到底确认了什么、还没确认什么。',
    eyebrow: '氪金机制',
    h1: 'Mistfall Hunter 是数值付费游戏吗？',
    lead: 'Bellring 自己的宣传在这一点上说得很直接：不数值付费、不卖属性加成。这里讲清楚哪些已确认、哪些还要观察。',
    sections: [
      { heading: 'Bellring 说了什么', body: ['官方 Steam 商店页面和公开测试期的宣传口径一致：没有数值付费机制、不出售属性加成，胜负取决于技术和准备，而不是花钱多少。这个说法在官方商店文案和媒体通稿里反复出现，不是一次性的营销话术。'] },
      { heading: '还没确认的部分', body: ['"不卖属性加成"不代表商城里会卖什么都清楚了。从测试期的头像框、姿势和表情来看，外观类内容几乎是肯定会卖的；测试期的 Golden Cipher 活动也说明豪华版和标准版这类版本分级是存在的。但这些都不能确认最终定价、是否有战令或赛季通行证，也不能确认便利类道具会怎么卖。"不数值付费"这一条可以放心，商城其余部分请等发售后再看。'], bullets: ['目前确认的模式是纯外观奖励', '豪华版与标准版这类版本存在（来自测试期活动信息）', '尚未确认是否有战令/赛季通行证', '最终价格仍未公布'] },
    ],
    cards: [
      { title: '发售日期与价格', desc: '标准版与豪华版定价、首发折扣。', href: '/zh/release-date' },
      { title: '新闻与更新', desc: '发售动态与官方公告追踪。', href: '/zh/news' },
      { title: '测试奖励', desc: '哪些测试外观会带进正式版。', href: '/zh/game-data/beta-rewards' },
    ],
    faqs: [
      { q: 'Bellring 确认过不数值付费吗？', a: '确认过——官方 Steam 页面和测试期宣传都表示没有数值付费机制、不卖属性加成。' },
      { q: '那商城里到底会卖什么？', a: '还没完全确认。从测试奖励的模式看，外观类内容大概率会卖；版本分级、是否有战令等还没有定论。' },
    ],
    confidence: 'confirmed',
    sources: [
      { label: '官方 Steam 商店页面', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
    ],
  },
  {
    slug: 'age-rating',
    group: 'about',
    title: 'Mistfall Hunter 年龄分级与内容提示',
    description: 'Mistfall Hunter 在商店分级追踪中被标为 ESRB Mature（成人级），官方内容描述包含血腥暴力与酒精使用。',
    eyebrow: '年龄分级',
    h1: 'Mistfall Hunter 年龄分级与内容',
    lead: '想确认这游戏适不适合未成年玩家？这里是目前列出的实际信息。',
    sections: [
      { heading: '目前列出的信息', body: ['商店分级追踪把 Mistfall Hunter 标为 ESRB Mature（成人级），官方 Steam 页面也标注了血腥暴力、血液效果与酒精使用的内容描述。这和游戏本身的基调是相符的——一个诸神已死、浓雾腐蚀一切的暗黑奇幻世界，充满近战战斗与被腐化的怪物。'] },
      { heading: '这具体意味着什么', body: ['可以预期风格化但较为频繁的暴力场景、击杀时的血液效果，以及偏黑暗的主题内容——死亡、腐化、失去——而不是任何性相关内容。目前还没有确认的 PEGI 分级细节，但 ESRB Mature 的标注和 Steam 自身的内容描述已经足够作为基调的可靠参考。'] },
    ],
    cards: [
      { title: 'Mistfall Hunter 是什么游戏？', desc: '类型、世界观与核心循环讲解。', href: '/zh/about' },
      { title: '配置要求', desc: '你的电脑需要什么配置。', href: '/zh/system-requirements' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 是什么年龄分级？', a: '商店分级追踪把它标为 ESRB Mature（成人级），内容描述包含血腥暴力与酒精使用。' },
      { q: '有性相关内容吗？', a: '官方内容描述里没有标注这项——标注的成人内容是暴力与血腥，不是性相关内容。' },
    ],
    confidence: 'reported',
    sources: [
      { label: '官方 Steam 商店页面（内容描述）', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
    ],
  },
  {
    slug: 'editions',
    group: 'news',
    title: 'Mistfall Hunter 版本：标准版与豪华版，目前已知信息',
    description: '根据公测期活动的信息，Mistfall Hunter 似乎会推出标准版和豪华版。具体定价与内容尚未确认。',
    eyebrow: '版本追踪',
    h1: 'Mistfall Hunter 版本',
    lead: '版本分级看起来是存在的，但真正重要的信息——价格和内容——还没有定论。',
    updated: '发售前追踪：版本名称是从测试期活动中透露的，而非完整的版本公告。请把具体内容与定价当作未确认信息。',
    sections: [
      { heading: '为什么判断版本分级存在', body: ['在公测的 Golden Cipher 活动中，部分列出的奖励被描述为豪华版和标准版的 Steam 激活密钥——这说明版本分级是有计划的，但并没有说明两者的区别或各自的价格。'] },
      { heading: '购买前需要核实的信息', body: ['购买前建议先确认豪华版具体包含什么——外观、游戏内货币、原声带、提前体验都是常见做法——再和差价做对比；也建议确认标准版是否可以后续升级，而不是默认发售当天就必须做出选择。'], bullets: ['各版本的具体价格', '豪华版相比标准版多了什么', '是否可以后续升级', '不同平台的版本是否有差异'] },
    ],
    cards: [
      { title: '是否免费？', desc: '价格与 Game Pass 状态追踪。', href: '/zh/free-to-play' },
      { title: '是否数值付费', desc: 'Bellring 官方对氪金机制的确认。', href: '/zh/pay-to-win' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 有豪华版吗？', a: '测试期活动材料提到过豪华版与标准版的 Steam 激活密钥，说明版本分级大概率存在，但完整的版本公告和定价还没公布。' },
      { q: '要不要先别急着买某个版本？', a: '鉴于内容和定价都还没确认，等官方正式公布版本信息后再选择是合理的做法。' },
    ],
    confidence: 'reported',
    sources: [
      { label: 'Steam Community 社区中心（测试期活动公告）', href: 'https://steamcommunity.com/app/3282300' },
    ],
  },
  {
    slug: 'anti-cheat',
    group: 'news',
    title: 'Mistfall Hunter 反作弊：发售前该关注什么',
    description: 'Mistfall Hunter 目前尚未公布具体的反作弊系统。这里说明这件事为什么对这款游戏格外重要，以及发售前该关注什么。',
    eyebrow: '反作弊追踪',
    h1: 'Mistfall Hunter 反作弊',
    lead: '目前还没有公布具体的反作弊系统名称。对于一款"死亡就掉光所有东西"的游戏来说，这件事特别值得关注。',
    sections: [
      { heading: '为什么这一点格外重要', body: ['撤离类游戏对作弊的激励比一般 PvE 游戏强得多，因为死亡会让你失去本局携带的一切——这让外挂、透视这类作弊工具的"收益"被放大了不少。目前官方材料里还没有点名任何具体的反作弊方案，无论是否内核级。'] },
      { heading: '发售前该关注的信息', body: ['建议在临近发售时关注官方渠道是否公布反作弊方案，因为有些方案会用到内核级驱动，部分玩家会因此有顾虑。如果你对内核级反作弊软件有顾虑，最好在安装前就确认清楚，而不是装完才发现。'], bullets: ['是否会点名具体的反作弊系统', '是否为内核级', '平台差异（PC 与主机）', '举报可疑作弊者的方式'] },
    ],
    cards: [
      { title: '跨平台联机追踪', desc: '目前已确认的跨平台信息。', href: '/zh/crossplay' },
      { title: '配置要求', desc: '你的电脑需要什么配置。', href: '/zh/system-requirements' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 用什么反作弊系统？', a: '还没公布。截至本追踪页最后更新，官方材料里没有点名任何具体系统。' },
      { q: '为什么这对撤离类游戏格外重要？', a: '因为死亡意味着失去本局携带的一切，作弊在这里的"收益"比大多数纯 PvE 游戏更大——这正是可靠反作弊方案重要的原因。' },
    ],
    confidence: 'unconfirmed',
    sources: [
      { label: '官方 Steam 商店页面（已核查——未点名反作弊系统）', href: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/' },
      { label: '官方 Discord（已核查——未见相关公告）', href: 'https://discord.com/invite/mistfallhunter' },
    ],
  },
];

export const enLaunchLinks: PriorityLink[] = enLaunchPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/${page.slug}`,
  group: page.group,
}));

export const zhLaunchLinks: PriorityLink[] = zhLaunchPages.map((page) => ({
  title: page.h1,
  desc: page.description,
  href: `/zh/${page.slug}`,
  group: page.group,
}));
