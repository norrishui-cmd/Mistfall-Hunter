// Quality-gate audit runner.
//
// USAGE NOTE (read this before running):
// Astro/Vite resolve extensionless relative imports fine ("./seoPages"), but
// plain `node --experimental-strip-types` cannot — it needs an explicit
// extension on every relative specifier. Since seoPages.ts and its
// dependents (urlExpansion.ts, faqExpansion.ts, urlGrowthPlan.ts,
// urlLongTailPlan.ts, urlLongTailCluster2.ts, launchExpansion.ts,
// qualityGate.ts) all use extensionless imports (correct for Astro, not
// runnable as-is under bare node), this script must be run against a
// SCRATCH COPY of src/data/ with relative imports rewritten to add ".ts":
//
//   rm -rf /tmp/data_exec && cp -r src/data /tmp/data_exec && cd /tmp/data_exec
//   python3 -c "
//   import re, glob
//   for f in glob.glob('*.ts'):
//       t = open(f, encoding='utf-8').read()
//       t2 = re.sub(r\"(from\s+')(\.[^']+)(')\",
//                    lambda m: m.group(1)+m.group(2)+('.ts' if not m.group(2).endswith('.ts') else '')+m.group(3),
//                    t)
//       if t2 != t: open(f, 'w', encoding='utf-8').write(t2)
//   "
//   node --experimental-strip-types /tmp/data_exec/../audit-quality-gate.mjs /tmp/data_exec
//
// (or simpler: copy THIS file's logic inline into a one-off `node -e` call,
// which is how it was actually run for the report delivered alongside this
// script — see the chat transcript for the exact one-liner used.)
//
// This is intentionally a script Claude runs each session, not something
// wired into `npm run build` — a bug in an auto-run gate script could take
// the whole Vercel deployment down, which is a worse failure mode than a
// stale audit. Revisit this if/when the project adds real CI.

import { getSeoPages } from './seoPages.ts';
import { auditAll, auditRejected, CORE_HUB_SLUGS } from './qualityGate.ts';

function report(lang) {
  const pages = getSeoPages(lang);
  const results = auditAll(pages);
  const passed = results.filter((r) => r.passed);
  const rejected = results.filter((r) => !r.passed);
  const rejectedLeaf = rejected.filter((r) => !r.isHub);

  console.log(`\n=== ${lang.toUpperCase()}: ${pages.length} total pages ===`);
  console.log(`  passed: ${passed.length}  |  rejected: ${rejected.length} (of which hub-exempt: ${rejected.filter(r=>r.isHub).length})`);

  if (rejectedLeaf.length) {
    console.log(`\n  Rejected long-tail pages, by failing check:`);
    const byCheck = {};
    for (const r of rejectedLeaf) {
      for (const [check, ok] of Object.entries(r)) {
        if (check === 'slug' || check === 'isHub' || check === 'passed') continue;
        if (ok === false) {
          byCheck[check] = byCheck[check] || [];
          byCheck[check].push(r.slug);
        }
      }
    }
    for (const [check, slugs] of Object.entries(byCheck)) {
      console.log(`    ${check}: ${slugs.length} pages -> ${slugs.slice(0, 12).join(', ')}${slugs.length > 12 ? ', ...' : ''}`);
    }
  }
  return { pages: pages.length, passed: passed.length, rejected: rejected.length };
}

const en = report('en');
const zh = report('zh');
console.log(`\n=== SUMMARY: EN ${en.passed}/${en.pages} pass | ZH ${zh.passed}/${zh.pages} pass ===`);
