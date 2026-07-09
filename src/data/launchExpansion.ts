import type { SeoPage } from './seoPages';
import type { PriorityLink } from './priorityLinks';

// ---------------------------------------------------------------------------
// Launch-window expansion batch 鈥?new long-tail pages added ~3 weeks before
// launch (July 30, 2026). Sourced from the official Steam/Xbox listings and
// multiple independent press outlets (see the delivery notes for this batch).
//
// INDEXABLE at add-time: community, pay-to-win, age-rating, anti-cheat (stable
// pre-launch facts sourced from official storefronts). NOT indexable yet:
// editions and other pages that still need launch verification.
// ---------------------------------------------------------------------------

export const enLaunchPages: SeoPage[] = [
  {
    slug: 'community',
    group: 'about',
    title: 'Mistfall Hunter Official Channels: Discord, X & More',
    description: "Where Bellring Games actually posts Mistfall Hunter updates 鈥?official Discord, X, YouTube, and the regional channels listed on the Steam store page.",
    eyebrow: 'Community & official channels',
    h1: 'Mistfall Hunter official channels',
    lead: "Skip the impersonator accounts. Here's where the developer actually posts, and how to tell official from unofficial.",
    sections: [
      { heading: 'Official channels', body: ["Bellring Games posts major updates through Discord and X first, with YouTube handling trailers and a standalone official site covering store links and policy pages. The Steam store listing itself names Discord, X, YouTube, and 鈥?notably 鈥?QQ, Bilibili, and Douyin as official channels, which lines up with the game's real presence in the Chinese market."] },
      { heading: 'Telling official from fan-run', body: ["The safest check is the Steam store page: its channel icons link straight to the accounts Bellring actually runs. Player-run Discords, subreddits, and wikis (this site included) are useful for guides and discussion, but treat them as community resources rather than official sources for patch notes or pricing."] },
    ],
    cards: [
      { title: 'Official Discord', desc: 'Patch notes, playtest news, and community events.', href: 'https://discord.com/invite/mistfallhunter' },
      { title: 'Official X / Twitter', desc: 'Short updates and trailer drops.', href: 'https://x.com/mistfallhunter' },
      { title: 'Official YouTube', desc: 'Trailers and announcement videos.', href: 'https://www.youtube.com/@MistfallHunter' },
      { title: 'Official website', desc: 'Store links and policy information.', href: 'https://mistfallhunter.com/' },
    ],
    faqs: [
      { q: 'What is the official Mistfall Hunter Discord?', a: "Bellring Games runs the official Discord linked from the game's Steam store page 鈥?that's where patch notes and event details post first." },
      { q: 'Is there an official subreddit?', a: "Community discussion happens on Reddit and other player-run spaces, but Bellring's own channels are Discord, X, YouTube, and the official website 鈥?treat anything else as unofficial." },
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
      { heading: 'What is still unconfirmed', body: ['"No stat boosts" does not automatically explain the whole shop. Final pricing, edition contents, in-app purchase categories, and any season-style structure should remain unconfirmed until they appear in official storefronts or launch materials. Treat the no-P2W promise separately from the still-open business-model details.'], bullets: ['Final base price is still not announced', 'Edition contents are not fully confirmed', 'In-app purchase categories need storefront confirmation', 'No gameplay-affecting purchases should be judged from official wording and live store contents'] },
    ],
    cards: [
      { title: 'Editions tracker', desc: 'What we know about Deluxe vs Standard so far.', href: '/editions' },
      { title: 'Is it free to play?', desc: 'Price and Game Pass status tracker.', href: '/free-to-play' },
      { title: 'Beta rewards', desc: 'What beta cosmetics carry into launch.', href: '/beta-rewards' },
    ],
    faqs: [
      { q: 'Has Bellring confirmed no pay-to-win?', a: 'Yes 鈥?the official Steam listing and beta marketing both state there are no pay-to-win mechanics and no paid stat boosts.' },
      { q: 'So what will actually cost money?', a: 'Not fully confirmed. Separate final base price, Game Pass access, in-app purchases, and pay-to-win claims until official storefronts or launch materials spell them out.' },
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
      { heading: 'What is listed', body: ['Storefront tracking lists Mistfall Hunter as ESRB Mature, and the official Steam listing carries content descriptors for graphic violence, gore, and use of alcohol. That lines up with the tone of the game itself 鈥?a dark fantasy world with corrupted monsters, melee combat, and a lore built around dead gods and a corrupting mist.'] },
      { heading: 'What that means in practice', body: ["Expect stylized but frequent violence, some blood and gore on kills, and dark thematic material 鈥?death, corruption, loss 鈥?rather than anything sexual. There's no confirmed PEGI breakdown yet, but the ESRB Mature listing and Steam's own descriptors are consistent enough to treat as a reliable read on tone."] },
    ],
    cards: [
      { title: 'What is Mistfall Hunter?', desc: 'Genre, setting, and core loop explained.', href: '/about' },
      { title: 'System requirements', desc: 'What your PC needs to run it.', href: '/system-requirements' },
    ],
    faqs: [
      { q: 'What age rating is Mistfall Hunter?', a: 'Storefront tracking lists it as ESRB Mature, with content descriptors for graphic violence, gore, and alcohol use.' },
      { q: 'Is there sexual content?', a: "Nothing indicated in official descriptors 鈥?the mature content flagged is violence and gore, not sexual content." },
    ],
  },
  {
    slug: 'editions',
    group: 'news',
    title: 'Mistfall Hunter Editions: Standard vs Deluxe, What We Know',
    description: 'Mistfall Hunter appears to ship with Standard and Deluxe editions based on open beta reward context. Pricing and exact contents are not yet confirmed.',
    eyebrow: 'Editions tracker',
    h1: 'Mistfall Hunter editions',
    lead: 'Edition tiers appear to exist, but the details that actually matter 鈥?price and contents 鈥?are not locked in yet.',
    updated: 'Pre-launch tracker: edition names surfaced through a beta event, not a full editions announcement. Treat contents and pricing as unconfirmed.',
    sections: [
      { heading: 'What points to editions existing', body: ["During the open beta's Golden Cipher event, some of the listed prizes were described as Deluxe and Standard edition Steam keys 鈥?which tells us tiered editions are planned, without telling us what separates them or what either one costs."] },
      { heading: 'What to verify before buying', body: ["Check what's actually included in a Deluxe tier 鈥?cosmetics, in-game currency, a soundtrack, and early access are all common patterns 鈥?against the price difference, and confirm whether Standard edition owners can upgrade later rather than assuming you have to decide at launch."], bullets: ['Exact price of each edition', 'What Deluxe includes beyond Standard', 'Whether upgrading later is possible', 'Whether editions differ by platform'] },
    ],
    cards: [
      { title: 'Is it free to play?', desc: 'Price and Game Pass status tracker.', href: '/free-to-play' },
      { title: 'Pay-to-win check', desc: "What Bellring has confirmed about monetization.", href: '/pay-to-win' },
    ],
    faqs: [
      { q: 'Is there a Deluxe edition of Mistfall Hunter?', a: "Beta event materials referenced Deluxe and Standard edition Steam keys, which suggests tiered editions, but a full editions announcement with pricing hasn't landed yet." },
      { q: 'Should I wait before buying a specific edition?', a: "Given contents and pricing aren't confirmed, it's reasonable to wait for the official editions announcement before choosing." },
    ],
  },
  {
    slug: 'anti-cheat',
    group: 'news',
    title: 'Mistfall Hunter Anti-Cheat: Bellring Anti-Cheat & Kernel-Level Notice',
    description: 'Mistfall Hunter anti-cheat tracker covering the current Steam listing: Uses Kernel Level Anti-Cheat and Bellring Anti-Cheat.',
    eyebrow: 'Anti-cheat tracker',
    h1: 'Mistfall Hunter anti-cheat',
    lead: 'The current Steam listing names Bellring Anti-Cheat and labels it as kernel-level anti-cheat. Here is what is confirmed and what still needs launch-day verification.',
    verifiedAt: '2026-07-10',
    sources: [
      {
        title: 'Mistfall Hunter on Steam',
        publisher: 'Steam',
        url: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/',
        sourceType: 'store',
        supports: ['Lists Uses Kernel Level Anti-Cheat', 'Names Bellring Anti-Cheat'],
      },
    ],
    evidenceStatus: {
      confirmed: ['The Steam listing identifies Uses Kernel Level Anti-Cheat.', 'The named system on Steam is Bellring Anti-Cheat.'],
      unverified: ['Launch-day install prompts, driver behavior, reporting tools, and platform-specific differences still need hands-on verification.'],
    },
    sections: [
      { heading: 'What Steam currently confirms', body: ['The Steam store page currently lists Mistfall Hunter as using kernel-level anti-cheat and names the system as Bellring Anti-Cheat. That is a storefront fact, not a hands-on privacy or security review.'] },
      { heading: 'What still needs verification', body: ["The listing does not by itself explain install prompts, driver lifecycle, reporting tools, or whether requirements differ by platform. If kernel-level anti-cheat is a concern for you, review the Steam listing and launch-day prompts before installing."], bullets: ['Steam anti-cheat notice', 'Launch-day installer prompts', 'PC versus console requirements', 'How reporting suspected cheaters works'] },
    ],
    cards: [
      { title: 'Crossplay tracker', desc: 'What is confirmed about cross-platform play.', href: '/crossplay' },
      { title: 'System requirements', desc: 'What your PC needs to run it.', href: '/system-requirements' },
    ],
    faqs: [
      { q: 'What anti-cheat does Mistfall Hunter use?', a: 'The current Steam listing names Bellring Anti-Cheat and labels it as kernel-level anti-cheat.' },
      { q: 'Why does this matter more for an extraction game?', a: 'Because death means losing everything you were carrying, cheating has a bigger payoff here than in most PvE-only games 鈥?which is exactly why a credible anti-cheat solution matters.' },
    ],
  },
];

export const zhLaunchPages: SeoPage[] = [
  {
    slug: 'community',
    group: 'about',
    title: 'Mistfall Hunter 瀹樻柟娓犻亾锛欴iscord銆乆 涓庢洿澶?,
    description: 'Bellring Games 鐪熸鍙戝竷 Mistfall Hunter 鏇存柊鐨勫湴鏂光€斺€斿畼鏂?Discord銆乆銆乊ouTube锛屼互鍙?Steam 鍟嗗簵椤甸潰鍒楀嚭鐨勫湴鍖烘笭閬撱€?,
    eyebrow: '绀惧尯涓庡畼鏂规笭閬?,
    h1: 'Mistfall Hunter 瀹樻柟娓犻亾',
    lead: '鍒浠垮啋璐﹀彿楠椾簡銆傝繖閲屾槸寮€鍙戝晢鐪熸鍙戝竷鍐呭鐨勫湴鏂癸紝浠ュ強鎬庝箞鍒嗚鲸瀹樻柟鍜岄潪瀹樻柟銆?,
    sections: [
      { heading: '瀹樻柟娓犻亾', body: ['Bellring Games 鐨勯噸瑕佹洿鏂伴鍙戝湪 Discord 鍜?X锛孻ouTube 璐熻矗棰勫憡鐗囷紝瀹樼綉鍒欐壙杞藉晢搴楅摼鎺ュ拰鏉℃淇℃伅銆係team 鍟嗗簵椤甸潰鏈韩鍒楀嚭鐨勫畼鏂规笭閬撳寘鎷?Discord銆乆銆乊ouTube锛岃繕鏈夆€斺€斿€煎緱娉ㄦ剰鐨勨€斺€擰Q銆丅绔欎笌鎶栭煶锛岃繖鍜屾父鎴忓湪涓浗甯傚満鐨勭湡瀹炲竷灞€鏄惢鍚堢殑銆?] },
      { heading: '鎬庝箞鍒嗚鲸瀹樻柟鍜岀矇涓濊繍钀?, body: ['鏈€淇濋櫓鐨勫姙娉曟槸鐪?Steam 鍟嗗簵椤甸潰锛氫笂闈㈢殑娓犻亾鍥炬爣鐩存帴閾炬帴鍒?Bellring 鐪熸杩愯惀鐨勮处鍙枫€傜帺瀹惰嚜寤虹殑 Discord銆佸瓙鐗堝潡鍜?wiki锛堝寘鎷湰绔欙級瀵规敾鐣ュ拰璁ㄨ寰堟湁鐢紝浣嗚鎶婂畠浠綋浣滅ぞ鍖鸿祫婧愶紝鑰屼笉鏄ˉ涓佽鏄庢垨瀹氫环鐨勫畼鏂逛俊婧愩€?] },
    ],
    cards: [
      { title: '瀹樻柟 Discord', desc: '琛ヤ竵璇存槑銆佹祴璇曟秷鎭笌绀惧尯娲诲姩銆?, href: 'https://discord.com/invite/mistfallhunter' },
      { title: '瀹樻柟 X / Twitter', desc: '绠€鐭洿鏂颁笌棰勫憡鐗囥€?, href: 'https://x.com/mistfallhunter' },
      { title: '瀹樻柟 YouTube', desc: '棰勫憡鐗囦笌瀹樺瑙嗛銆?, href: 'https://www.youtube.com/@MistfallHunter' },
      { title: '瀹樻柟缃戠珯', desc: '鍟嗗簵閾炬帴涓庢潯娆句俊鎭€?, href: 'https://mistfallhunter.com/' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 鐨勫畼鏂?Discord 鏄摢涓紵', a: 'Bellring Games 杩愯惀鐨勫畼鏂?Discord 閾炬帴鍦ㄦ父鎴?Steam 鍟嗗簵椤甸潰涓娾€斺€旇ˉ涓佽鏄庡拰娲诲姩璇︽儏閮戒細鍏堝彂鍦ㄩ偅閲屻€? },
      { q: '鏈夊畼鏂?subreddit 鍚楋紵', a: 'Reddit 鍜屽叾浠栫帺瀹惰嚜寤虹┖闂撮噷鏈夌ぞ鍖鸿璁猴紝浣?Bellring 鑷繁鐨勬笭閬撴槸 Discord銆乆銆乊ouTube 鍜屽畼缃戔€斺€斿叾浣欑殑璇峰綋浣滈潪瀹樻柟澶勭悊銆? },
    ],
  },
  {
    slug: 'pay-to-win',
    group: 'news',
    title: 'Mistfall Hunter 鏄暟鍊间粯璐规父鎴忓悧锛烞ellring 瀹樻柟鎬庝箞璇?,
    description: 'Bellring Games 澶氭琛ㄧず Mistfall Hunter 娌℃湁鏁板€间粯璐规満鍒躲€佷笉鍗栧睘鎬у姞鎴愩€傝繖閲岃娓呮杩欏彞璇濆埌搴曠‘璁や簡浠€涔堛€佽繕娌＄‘璁や粈涔堛€?,
    eyebrow: '姘噾鏈哄埗',
    h1: 'Mistfall Hunter 鏄暟鍊间粯璐规父鎴忓悧锛?,
    lead: 'Bellring 鑷繁鐨勫浼犲湪杩欎竴鐐逛笂璇村緱寰堢洿鎺ワ細涓嶆暟鍊间粯璐广€佷笉鍗栧睘鎬у姞鎴愩€傝繖閲岃娓呮鍝簺宸茬‘璁ゃ€佸摢浜涜繕瑕佽瀵熴€?,
    sections: [
      { heading: 'Bellring 璇翠簡浠€涔?, body: ['瀹樻柟 Steam 鍟嗗簵椤甸潰鍜屽叕寮€娴嬭瘯鏈熺殑瀹ｄ紶鍙ｅ緞涓€鑷达細娌℃湁鏁板€间粯璐规満鍒躲€佷笉鍑哄敭灞炴€у姞鎴愶紝鑳滆礋鍙栧喅浜庢妧鏈拰鍑嗗锛岃€屼笉鏄姳閽卞灏戙€傝繖涓娉曞湪瀹樻柟鍟嗗簵鏂囨鍜屽獟浣撻€氱閲屽弽澶嶅嚭鐜帮紝涓嶆槸涓€娆℃€х殑钀ラ攢璇濇湳銆?] },
      { heading: '杩樻病纭鐨勯儴鍒?, body: ['"涓嶅崠灞炴€у姞鎴?涓嶄唬琛ㄥ晢鍩庨噷浼氬崠浠€涔堥兘娓呮浜嗐€備粠娴嬭瘯鏈熺殑澶村儚妗嗐€佸Э鍔垮拰琛ㄦ儏鏉ョ湅锛屽瑙傜被鍐呭鍑犱箮鏄偗瀹氫細鍗栫殑锛涙祴璇曟湡鐨?Golden Cipher 娲诲姩涔熻鏄庤豹鍗庣増鍜屾爣鍑嗙増杩欑被鐗堟湰鍒嗙骇鏄瓨鍦ㄧ殑銆備絾杩欎簺閮戒笉鑳界‘璁ゆ渶缁堝畾浠枫€佹槸鍚︽湁鎴樹护鎴栬禌瀛ｉ€氳璇侊紝涔熶笉鑳界‘璁や究鍒╃被閬撳叿浼氭€庝箞鍗栥€?涓嶆暟鍊间粯璐?杩欎竴鏉″彲浠ユ斁蹇冿紝鍟嗗煄鍏朵綑閮ㄥ垎璇风瓑鍙戝敭鍚庡啀鐪嬨€?], bullets: ['鐩墠纭鐨勬ā寮忔槸绾瑙傚鍔?, '璞崕鐗堜笌鏍囧噯鐗堣繖绫荤増鏈瓨鍦紙鏉ヨ嚜娴嬭瘯鏈熸椿鍔ㄤ俊鎭級', '灏氭湭纭鏄惁鏈夋垬浠?璧涘閫氳璇?, '鏈€缁堜环鏍间粛鏈叕甯?] },
    ],
    cards: [
      { title: '鐗堟湰杩借釜', desc: '鐩墠宸茬煡鐨勮豹鍗庣増涓庢爣鍑嗙増淇℃伅銆?, href: '/zh/editions' },
      { title: '鏄惁鍏嶈垂锛?, desc: '浠锋牸涓?Game Pass 鐘舵€佽拷韪€?, href: '/zh/free-to-play' },
      { title: '娴嬭瘯濂栧姳', desc: '鍝簺娴嬭瘯澶栬浼氬甫杩涙寮忕増銆?, href: '/zh/beta-rewards' },
    ],
    faqs: [
      { q: 'Bellring 纭杩囦笉鏁板€间粯璐瑰悧锛?, a: '纭杩団€斺€斿畼鏂?Steam 椤甸潰鍜屾祴璇曟湡瀹ｄ紶閮借〃绀烘病鏈夋暟鍊间粯璐规満鍒躲€佷笉鍗栧睘鎬у姞鎴愩€? },
      { q: '閭ｅ晢鍩庨噷鍒板簳浼氬崠浠€涔堬紵', a: '杩樻病瀹屽叏纭銆備粠娴嬭瘯濂栧姳鐨勬ā寮忕湅锛屽瑙傜被鍐呭澶ф鐜囦細鍗栵紱鐗堟湰鍒嗙骇銆佹槸鍚︽湁鎴樹护绛夎繕娌℃湁瀹氳銆? },
    ],
  },
  {
    slug: 'age-rating',
    group: 'about',
    title: 'Mistfall Hunter 骞撮緞鍒嗙骇涓庡唴瀹规彁绀?,
    description: 'Mistfall Hunter 鍦ㄥ晢搴楀垎绾ц拷韪腑琚爣涓?ESRB Mature锛堟垚浜虹骇锛夛紝瀹樻柟鍐呭鎻忚堪鍖呭惈琛€鑵ユ毚鍔涗笌閰掔簿浣跨敤銆?,
    eyebrow: '骞撮緞鍒嗙骇',
    h1: 'Mistfall Hunter 骞撮緞鍒嗙骇涓庡唴瀹?,
    lead: '鎯崇‘璁よ繖娓告垙閫備笉閫傚悎鏈垚骞寸帺瀹讹紵杩欓噷鏄洰鍓嶅垪鍑虹殑瀹為檯淇℃伅銆?,
    sections: [
      { heading: '鐩墠鍒楀嚭鐨勪俊鎭?, body: ['鍟嗗簵鍒嗙骇杩借釜鎶?Mistfall Hunter 鏍囦负 ESRB Mature锛堟垚浜虹骇锛夛紝瀹樻柟 Steam 椤甸潰涔熸爣娉ㄤ簡琛€鑵ユ毚鍔涖€佽娑叉晥鏋滀笌閰掔簿浣跨敤鐨勫唴瀹规弿杩般€傝繖鍜屾父鎴忔湰韬殑鍩鸿皟鏄浉绗︾殑鈥斺€斾竴涓绁炲凡姝汇€佹祿闆捐厫铓€涓€鍒囩殑鏆楅粦濂囧够涓栫晫锛屽厖婊¤繎鎴樻垬鏂椾笌琚厫鍖栫殑鎬墿銆?] },
      { heading: '杩欏叿浣撴剰鍛崇潃浠€涔?, body: ['鍙互棰勬湡椋庢牸鍖栦絾杈冧负棰戠箒鐨勬毚鍔涘満鏅€佸嚮鏉€鏃剁殑琛€娑叉晥鏋滐紝浠ュ強鍋忛粦鏆楃殑涓婚鍐呭鈥斺€旀浜°€佽厫鍖栥€佸け鍘烩€斺€旇€屼笉鏄换浣曟€х浉鍏冲唴瀹广€傜洰鍓嶈繕娌℃湁纭鐨?PEGI 鍒嗙骇缁嗚妭锛屼絾 ESRB Mature 鐨勬爣娉ㄥ拰 Steam 鑷韩鐨勫唴瀹规弿杩板凡缁忚冻澶熶綔涓哄熀璋冪殑鍙潬鍙傝€冦€?] },
    ],
    cards: [
      { title: 'Mistfall Hunter 鏄粈涔堟父鎴忥紵', desc: '绫诲瀷銆佷笘鐣岃涓庢牳蹇冨惊鐜瑙ｃ€?, href: '/zh/about' },
      { title: '閰嶇疆瑕佹眰', desc: '浣犵殑鐢佃剳闇€瑕佷粈涔堥厤缃€?, href: '/zh/system-requirements' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 鏄粈涔堝勾榫勫垎绾э紵', a: '鍟嗗簵鍒嗙骇杩借釜鎶婂畠鏍囦负 ESRB Mature锛堟垚浜虹骇锛夛紝鍐呭鎻忚堪鍖呭惈琛€鑵ユ毚鍔涗笌閰掔簿浣跨敤銆? },
      { q: '鏈夋€х浉鍏冲唴瀹瑰悧锛?, a: '瀹樻柟鍐呭鎻忚堪閲屾病鏈夋爣娉ㄨ繖椤光€斺€旀爣娉ㄧ殑鎴愪汉鍐呭鏄毚鍔涗笌琛€鑵ワ紝涓嶆槸鎬х浉鍏冲唴瀹广€? },
    ],
  },
  {
    slug: 'editions',
    group: 'news',
    title: 'Mistfall Hunter 鐗堟湰锛氭爣鍑嗙増涓庤豹鍗庣増锛岀洰鍓嶅凡鐭ヤ俊鎭?,
    description: '鏍规嵁鍏祴鏈熸椿鍔ㄧ殑淇℃伅锛孧istfall Hunter 浼间箮浼氭帹鍑烘爣鍑嗙増鍜岃豹鍗庣増銆傚叿浣撳畾浠蜂笌鍐呭灏氭湭纭銆?,
    eyebrow: '鐗堟湰杩借釜',
    h1: 'Mistfall Hunter 鐗堟湰',
    lead: '鐗堟湰鍒嗙骇鐪嬭捣鏉ユ槸瀛樺湪鐨勶紝浣嗙湡姝ｉ噸瑕佺殑淇℃伅鈥斺€斾环鏍煎拰鍐呭鈥斺€旇繕娌℃湁瀹氳銆?,
    updated: '鍙戝敭鍓嶈拷韪細鐗堟湰鍚嶇О鏄粠娴嬭瘯鏈熸椿鍔ㄤ腑閫忛湶鐨勶紝鑰岄潪瀹屾暣鐨勭増鏈叕鍛娿€傝鎶婂叿浣撳唴瀹逛笌瀹氫环褰撲綔鏈‘璁や俊鎭€?,
    sections: [
      { heading: '涓轰粈涔堝垽鏂増鏈垎绾у瓨鍦?, body: ['鍦ㄥ叕娴嬬殑 Golden Cipher 娲诲姩涓紝閮ㄥ垎鍒楀嚭鐨勫鍔辫鎻忚堪涓鸿豹鍗庣増鍜屾爣鍑嗙増鐨?Steam 婵€娲诲瘑閽モ€斺€旇繖璇存槑鐗堟湰鍒嗙骇鏄湁璁″垝鐨勶紝浣嗗苟娌℃湁璇存槑涓よ€呯殑鍖哄埆鎴栧悇鑷殑浠锋牸銆?] },
      { heading: '璐拱鍓嶉渶瑕佹牳瀹炵殑淇℃伅', body: ['璐拱鍓嶅缓璁厛纭璞崕鐗堝叿浣撳寘鍚粈涔堚€斺€斿瑙傘€佹父鎴忓唴璐у竵銆佸師澹板甫銆佹彁鍓嶄綋楠岄兘鏄父瑙佸仛娉曗€斺€斿啀鍜屽樊浠峰仛瀵规瘮锛涗篃寤鸿纭鏍囧噯鐗堟槸鍚﹀彲浠ュ悗缁崌绾э紝鑰屼笉鏄粯璁ゅ彂鍞綋澶╁氨蹇呴』鍋氬嚭閫夋嫨銆?], bullets: ['鍚勭増鏈殑鍏蜂綋浠锋牸', '璞崕鐗堢浉姣旀爣鍑嗙増澶氫簡浠€涔?, '鏄惁鍙互鍚庣画鍗囩骇', '涓嶅悓骞冲彴鐨勭増鏈槸鍚︽湁宸紓'] },
    ],
    cards: [
      { title: '鏄惁鍏嶈垂锛?, desc: '浠锋牸涓?Game Pass 鐘舵€佽拷韪€?, href: '/zh/free-to-play' },
      { title: '鏄惁鏁板€间粯璐?, desc: 'Bellring 瀹樻柟瀵规蔼閲戞満鍒剁殑纭銆?, href: '/zh/pay-to-win' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 鏈夎豹鍗庣増鍚楋紵', a: '娴嬭瘯鏈熸椿鍔ㄦ潗鏂欐彁鍒拌繃璞崕鐗堜笌鏍囧噯鐗堢殑 Steam 婵€娲诲瘑閽ワ紝璇存槑鐗堟湰鍒嗙骇澶ф鐜囧瓨鍦紝浣嗗畬鏁寸殑鐗堟湰鍏憡鍜屽畾浠疯繕娌″叕甯冦€? },
      { q: '瑕佷笉瑕佸厛鍒€ョ潃涔版煇涓増鏈紵', a: '閴翠簬鍐呭鍜屽畾浠烽兘杩樻病纭锛岀瓑瀹樻柟姝ｅ紡鍏竷鐗堟湰淇℃伅鍚庡啀閫夋嫨鏄悎鐞嗙殑鍋氭硶銆? },
    ],
  },
  {
    slug: 'anti-cheat',
    group: 'news',
    title: 'Mistfall Hunter 反作弊：Bellring Anti-Cheat 与内核级提示',
    description: 'Mistfall Hunter 反作弊信息追踪：当前 Steam 页面列出 Uses Kernel Level Anti-Cheat，并点名 Bellring Anti-Cheat。',
    eyebrow: '反作弊追踪',
    h1: 'Mistfall Hunter 反作弊',
    lead: '当前 Steam 商店页面已经列出 Bellring Anti-Cheat，并标注 Uses Kernel Level Anti-Cheat。这里区分已确认信息和仍需发售后核验的细节。',
    verifiedAt: '2026-07-10',
    sources: [
      {
        title: 'Mistfall Hunter on Steam',
        publisher: 'Steam',
        url: 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/',
        sourceType: 'store',
        supports: ['列出 Uses Kernel Level Anti-Cheat', '点名 Bellring Anti-Cheat'],
      },
    ],
    evidenceStatus: {
      confirmed: ['Steam 商店页面列出 Uses Kernel Level Anti-Cheat。', 'Steam 页面点名 Bellring Anti-Cheat。'],
      unverified: ['安装提示、驱动行为、举报工具和不同平台要求仍需发售后实测。'],
    },
    sections: [
      { heading: 'Steam 当前确认的信息', body: ['Steam 商店页面当前标注 Mistfall Hunter 使用内核级反作弊，并点名系统为 Bellring Anti-Cheat。这是商店页面列出的事实，不等于本站已经完成隐私或安全评测。'] },
      { heading: '仍需发售后核验', body: ['该页面本身没有说明安装提示、驱动生命周期、举报工具或不同平台是否存在差异。如果你介意内核级反作弊，请在安装前查看 Steam 页面和发售日安装提示。'], bullets: ['Steam 反作弊提示', '发售日安装提示', 'PC 与主机平台要求', '可疑作弊者举报方式'] },
    ],
    cards: [
      { title: '璺ㄥ钩鍙拌仈鏈鸿拷韪?, desc: '鐩墠宸茬‘璁ょ殑璺ㄥ钩鍙颁俊鎭€?, href: '/zh/crossplay' },
      { title: '閰嶇疆瑕佹眰', desc: '浣犵殑鐢佃剳闇€瑕佷粈涔堥厤缃€?, href: '/zh/system-requirements' },
    ],
    faqs: [
      { q: 'Mistfall Hunter 使用什么反作弊系统？', a: '当前 Steam 商店页面点名 Bellring Anti-Cheat，并标注 Uses Kernel Level Anti-Cheat。' },
      { q: '涓轰粈涔堣繖瀵规挙绂荤被娓告垙鏍煎閲嶈锛?, a: '鍥犱负姝讳骸鎰忓懗鐫€澶卞幓鏈眬鎼哄甫鐨勪竴鍒囷紝浣滃紛鍦ㄨ繖閲岀殑"鏀剁泭"姣斿ぇ澶氭暟绾?PvE 娓告垙鏇村ぇ鈥斺€旇繖姝ｆ槸鍙潬鍙嶄綔寮婃柟妗堥噸瑕佺殑鍘熷洜銆? },
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


