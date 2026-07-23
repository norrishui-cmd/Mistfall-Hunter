// Provides per-URL lastmod dates for the sitemap.
//
// game-data pages have a real, reliable per-item ISO date already (see
// gameData.ts's `updated` field, sourced from the official announcement
// each entry cites) — use it directly.
//
// Every other page type in this codebase (seoPages.ts, tabNews.ts, etc.)
// only has freeform prose "updated" text, not a machine-readable date, so
// there's no honest per-page date to report for those yet. Rather than
// leave lastmod out entirely (worse: a stale/fake date), those fall back to
// SITE_LAST_CONTENT_PASS below — bump this constant whenever a content or
// copy pass touches a meaningful slice of the site (this file's git history
// is the log). This is deliberately a manual, honest signal rather than
// "today's build time" on every deploy, which would make lastmod
// meaningless noise by launch week when the site rebuilds constantly.
import { gameData } from './gameData.ts';

// Bump this when a broad content/copy pass lands (not on every commit).
export const SITE_LAST_CONTENT_PASS = '2026-07-23';

const gameDataLastmod = new Map(gameData.map((item) => [item.slug, item.updated]));

export function getLastmod(pathname) {
  const gameDataMatch = pathname.match(/^\/(?:zh\/|de\/|ja\/)?game-data\/([^/]+)\/?$/);
  if (gameDataMatch) {
    const date = gameDataLastmod.get(gameDataMatch[1]);
    if (date) return date;
  }
  return SITE_LAST_CONTENT_PASS;
}
