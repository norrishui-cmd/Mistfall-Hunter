// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for Mistfall Hunter launch facts.
//
// Every page that states the release date/time, price, discount window,
// platform list, Game Pass/PS Plus status, or preload status should import
// from here instead of hardcoding its own copy of these facts. Before this
// file existed, the launch time was duplicated across 4 files (release-date
// pages, faq100.ts, tabNews.ts) with an inconsistent, INCORRECT timezone
// (UTC-7 instead of UTC) — see the correction note below. One wrong copy
// silently diverging from the rest is exactly the failure mode this file
// exists to prevent.
//
// SOURCE: Official July 17, 2026 launch announcement (Bellring Games /
// Skystone Games), cross-checked against the Steam store listing and
// contemporaneous press coverage (RPGamer, Insider Gaming, Saving Content,
// Static Multimedia) on 2026-07-23.
//
// CORRECTION LOG:
// 2026-07-23 — Previous copy across the site said "July 30, 2026 at 01:00
// UTC-7" and framed July 29 as a mere regional storefront quirk. That was
// backwards and the timezone was wrong. The actual confirmed launch moment
// is July 29, 2026, 6:00 PM PT, which converts to July 30, 2026, 01:00 UTC
// (same instant — PT is UTC-7 in July under daylight time, so 18:00 PT + 7h
// = 01:00 UTC the next calendar day). July 29 is the primary date used by
// Steam's own store listing and virtually all first-party/press coverage;
// July 30 only appears as the UTC calendar date of that same moment and as
// the (separately confirmed) start of the launch discount window. Every
// page should lead with July 29 and use the PT/UTC pair to explain the
// apparent July 29 vs July 30 discrepancy, not present July 30 as the
// primary date.
// ---------------------------------------------------------------------------

export const launchFacts = {
  en: {
    /** Primary date to lead with everywhere — matches Steam's listed date and press coverage. */
    dateShort: 'July 29, 2026',
    /** Full launch-moment line: local time first, UTC in parentheses for the "why do stores differ" explanation. */
    dateTimeLine: 'July 29, 2026, 6:00 PM PT (July 30, 2026, 01:00 UTC)',
    platformsLine: 'PC (Steam), PlayStation 5, and Xbox Series X|S',
    priceStandard: '$24.99',
    priceDeluxe: '$39.99',
    discountLine: 'A 10% launch discount runs on all platforms from launch (July 30, 2026, 01:00 UTC) through August 12, 2026, 17:00 UTC.',
    gamePassLine: 'Day one on Xbox Game Pass for Xbox and PC.',
    psPlusLine: 'Not included with PS Plus at launch.',
    preloadLine: 'There is no pre-download. The game only becomes playable at the official launch moment.',
    whyDatesDifferLine:
      'Steam\u2019s store listing and most press coverage show July 29 because the official launch moment (6:00 PM PT) falls on July 29 in US time zones. That same instant is July 30, 01:00 UTC, which is why some regions and the discount-window timestamp reference July 30.',
  },
  zh: {
    dateShort: '2026 年 7 月 29 日',
    dateTimeLine: '2026 年 7 月 29 日 18:00（太平洋时间，PT）/ 2026 年 7 月 30 日 01:00（UTC）',
    platformsLine: 'PC（Steam）、PlayStation 5 与 Xbox Series X|S',
    priceStandard: '24.99 美元',
    priceDeluxe: '39.99 美元',
    discountLine: '全平台首发 9 折优惠从上线时刻（2026 年 7 月 30 日 01:00 UTC）持续到 2026 年 8 月 12 日 17:00（UTC）。',
    gamePassLine: '首发即登陆 Xbox Game Pass（Xbox 与 PC）。',
    psPlusLine: '首发不进入 PS Plus。',
    preloadLine: '没有预下载；正式上线时刻到达前无法提前安装或进入游戏。',
    whyDatesDifferLine:
      'Steam 商店页面与大多数媒体报道显示 7 月 29 日，是因为官方上线时刻（太平洋时间 18:00）在美洲时区仍是 7 月 29 日；同一时刻换算成 UTC 是 7 月 30 日 01:00，这也是部分地区显示、以及折扣窗口时间戳采用 7 月 30 日的原因。',
  },
} as const;

export type LaunchFactsLang = keyof typeof launchFacts;
