// ---------------------------------------------------------------------------
// Launch-timing helper: lets shared copy automatically flip from
// pre-launch to post-launch wording without a manual edit on launch night.
//
// This is a STATIC site (Astro build), so "now" here means "at build time" —
// there is no client-side clock check. That means the pre/post-launch copy
// only flips on the NEXT deploy after the launch instant passes. In
// practice that's fine and is exactly the intended behavior: trigger a
// rebuild/redeploy right at or shortly after launch (July 29, 2026, 6:00 PM
// PT / July 30, 2026, 01:00 UTC — see launchFacts.ts) and every page using
// this helper updates at once, instead of a manual find-and-replace across
// dozens of files on launch night.
//
// WHERE THIS IS WIRED UP (as of 2026-07-23): CoreQualityPanel.astro's
// "needs launch verification" heading. Most of the site's individual
// hand-written pages still hardcode "before/after launch" phrasing inline
// (see the ~68 indexable pages flagged in the launch-readiness audit) —
// this helper does not retroactively fix those. Wiring more shared
// components into this helper, one at a time, is the way to widen coverage
// without hand-editing every page — start with the components used across
// the most pages (see grep -rl "CoreQualityPanel\|QualitySignals" src/pages
// for the current usage list).
// ---------------------------------------------------------------------------

// July 29, 2026, 6:00 PM PT == July 30, 2026, 01:00 UTC. Keep in sync with
// launchFacts.ts if the official date ever changes.
export const LAUNCH_INSTANT_UTC = new Date('2026-07-30T01:00:00Z');

export function hasLaunched(now: Date = new Date()): boolean {
  return now.getTime() >= LAUNCH_INSTANT_UTC.getTime();
}

/** Pick between pre-launch and post-launch copy for the same slot. */
export function sinceLaunch<T>(pre: T, post: T, now?: Date): T {
  return hasLaunched(now) ? post : pre;
}
