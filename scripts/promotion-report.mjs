// Content-maturity "promotion" report — single command, no manual steps.
//
// WHAT THIS IS FOR
// This site deliberately keeps most programmatically-generated pages
// noindex until they have real evidence behind them (see NOINDEX_REVIEW_NOTES
// and ZH_DRAFT_SLUGS in seoRegistry.mjs, and passesQualityGate() in
// qualityGate.ts). As launch (July 29, 2026) approaches and more official
// data lands, some of those noindex pages will legitimately earn indexing.
// This script is the repeatable way to find out WHICH ones, instead of
// eyeballing 1000+ pages by hand.
//
// USAGE
//   node scripts/promotion-report.mjs
//
// This single command does everything the old audit-quality-gate.mjs
// required a manual "copy + rewrite imports + run" dance for. It:
//   1. Copies src/data into a temp dir.
//   2. Rewrites extensionless relative imports (fine for Astro/Vite, not for
//      plain node) to add an explicit .ts extension.
//   3. Runs the actual quality-gate + indexability cross-check against that
//      copy under `node --experimental-strip-types`.
//   4. Cleans up the temp dir and prints a report.
//
// WHAT THE REPORT MEANS
//   READY TO PROMOTE  — currently noindex, but passes every quality-gate
//                        check right now. These are real candidates. Before
//                        flipping them live: skim the page once for accuracy,
//                        then add the slug to INDEXABLE_SLUGS in
//                        seoRegistry.mjs (and remove it from ZH_DRAFT_SLUGS
//                        too, if it's a zh page that has real translated
//                        content now instead of the localizeDraft() filler).
//   REGRESSION RISK    — currently indexable, but would NOT pass the gate
//                        today (e.g. a source went stale, or the page was
//                        hand-written before the gate existed). Worth a
//                        look before launch traffic hits these.
//   NOT READY          — noindex and still fails the gate. Expected, no
//                        action — this is the gate doing its job.
//   LIVE AND CLEAN      — indexable and passes the gate. No action needed.
//
// This intentionally stays a script Claude/you run on demand each session,
// not something wired into `npm run build` — see the note in
// scripts/audit-quality-gate.mjs for why (a bug in an auto-run gate could
// take a Vercel deploy down, which is worse than a stale report).

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const srcData = path.join(repoRoot, 'src', 'data');

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'promotion-report-'));
const scratchData = path.join(tmpDir, 'data');

try {
  fs.cpSync(srcData, scratchData, { recursive: true });

  // Rewrite extensionless relative imports so plain node can resolve them.
  for (const name of fs.readdirSync(scratchData)) {
    if (!name.endsWith('.ts')) continue;
    const file = path.join(scratchData, name);
    const original = fs.readFileSync(file, 'utf8');
    const rewritten = original.replace(
      /(from\s+')(\.[^']+)(')/g,
      (_match, pre, spec, post) => `${pre}${spec.endsWith('.ts') ? spec : `${spec}.ts`}${post}`,
    );
    if (rewritten !== original) fs.writeFileSync(file, rewritten);
  }

  const driver = path.join(tmpDir, 'driver.mjs');
  fs.writeFileSync(
    driver,
    `
import { getSeoPages, isIndexable } from ${JSON.stringify(path.join(scratchData, 'seoPages.ts'))};
import { auditAll, CORE_HUB_SLUGS } from ${JSON.stringify(path.join(scratchData, 'qualityGate.ts'))};

function bucketFor(page, passed) {
  const live = isIndexable(page);
  if (live && passed) return 'liveClean';
  if (live && !passed) return 'regressionRisk';
  if (!live && passed) return 'readyToPromote';
  return 'notReady';
}

function report(lang) {
  const pages = getSeoPages(lang);
  const results = auditAll(pages);
  const buckets = { liveClean: [], regressionRisk: [], readyToPromote: [], notReady: [] };
  for (const r of results) {
    const page = pages.find((p) => p.slug === r.slug);
    buckets[bucketFor(page, r.passed)].push(r);
  }

  console.log(\`\\n=== \${lang.toUpperCase()}: \${pages.length} total pages (hubs excluded from long-tail counts: \${[...CORE_HUB_SLUGS].length}) ===\`);
  console.log(\`  live & clean:      \${buckets.liveClean.length}\`);
  console.log(\`  regression risk:   \${buckets.regressionRisk.length}\`);
  console.log(\`  ready to promote:  \${buckets.readyToPromote.length}\`);
  console.log(\`  not ready:         \${buckets.notReady.length}\`);

  if (buckets.readyToPromote.length) {
    console.log(\`\\n  READY TO PROMOTE (noindex today, passes the gate now):\`);
    for (const r of buckets.readyToPromote) console.log(\`    - \${r.slug}\`);
  }
  if (buckets.regressionRisk.length) {
    console.log(\`\\n  REGRESSION RISK (indexable today, would fail the gate now):\`);
    for (const r of buckets.regressionRisk) {
      const failing = Object.entries(r).filter(([k, v]) => v === false).map(([k]) => k);
      console.log(\`    - \${r.slug} (failing: \${failing.join(', ') || 'unknown'})\`);
    }
  }
  return buckets;
}

report('en');
report('zh');
`,
  );

  const output = execFileSync(process.execPath, ['--experimental-strip-types', driver], {
    cwd: repoRoot,
    encoding: 'utf8',
  });
  console.log(output);
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
