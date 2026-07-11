import type { SeoPage } from './seoPages';

// ---------------------------------------------------------------------------
// Automated SEO quality gate.
//
// Ported from the Moonlight Peaks content-quality methodology and adapted to
// this site's real data model and real content. Core principle carried over
// unchanged: evidence drives new pages, not a URL-count target. Every
// candidate page must pass ALL checks in passesQualityGate() before it goes
// live / gets added to INDEXABLE_SLUGS.
//
// WHY THIS ISN'T A LITERAL COPY OF THE ORIGINAL PSEUDOCODE
// (measured against this site's actual 76-page corpus on 2026-07-08 —
// see the audit report delivered alongside this file for the real numbers):
//
// - No "path depth >= 3" check. This site uses flat single-segment slugs
//   (/community, not /guides/monetization/community), so path depth is
//   meaningless here. Replaced with CORE_HUB_SLUGS: the site's intentionally
//   broad index pages are exempt from long-tail strictness; every other
//   page must clear the full gate.
// - Section-count floor is 2, not 3. Measured distribution: 42 of 76 live
//   pages have exactly 2 sections (death-penalty, party-size, and most other
//   solid pages included) and only 37 have 3+. The site's real, working
//   convention is "2 tight sections," not a defect — forcing a 3rd section
//   to clear an imported threshold would itself be padding-for-the-sake-of-
//   a-number, which is exactly the anti-pattern this methodology exists to
//   prevent.
// - Text-size threshold is LANGUAGE-AWARE. Chinese carries roughly 2.3x more
//   meaning per character than English on this site's own content (EN
//   median ~1058 chars, ZH median ~452 chars, for the same set of pages).
//   One English-calibrated number would either wave through thin Chinese
//   pages or unfairly reject solid ones. EN threshold: 900 (this transfers
//   almost exactly from the original methodology — it lands right at this
//   site's real EN p10). ZH threshold: 400 (proportionally equivalent
//   strictness, sitting between this site's real ZH p10=354 and p25=402).
// - hasConcreteAnswer is bilingual AND length-aware. The original pattern
//   would flag any answer merely CONTAINING hedge words like "not yet" —
//   but real answers on this site often combine a real fact with an honest
//   hedge in the same sentence ("Confirmed free-to-play on Xbox; PC pricing
//   not yet announced"). Flagging those would punish exactly the honest,
//   evidence-based writing this system is supposed to reward. The check
//   here only rejects answers that are BOTH cop-out-shaped AND short — i.e.
//   answers that are effectively nothing but "check back later."
// - "every section must be substantial" (the original's gift-page example)
//   is opt-in via `page.strictSections`, since this site has no fixed URL
//   suffix like "/gifts" to key off. Set it on any future catalog-style page
//   where each entry IS the whole answer (e.g. one-entry-per-boss).
// - `sources` and `confidence` are new SeoPage fields this system adds (see
//   seoPages.ts). They're optional so the 76 pages written before this
//   system don't retroactively break the build; the audit reports missing
//   sources as a named, honest gap rather than silently exempting it.
// - The per-section and total-body substance floors inside
//   sectionsSubstanceOk are ALSO language-aware, for the same reason as the
//   page-level threshold above. This one was caught by actually running the
//   gate, not by foresight: the first audit run flagged 47 of 76 live ZH
//   pages as failing "section substance" using an unscaled 90-char floor,
//   while the EN side only flagged 1. Inspecting the flagged ZH sections
//   showed complete, substantial writing (e.g. death-penalty's "会失去什么"
//   section, 55 characters, fully answers the question) — not thin content.
//   Fixed by scaling both inner floors down by the same ~2.3x ratio.
// ---------------------------------------------------------------------------

export type Confidence = 'confirmed' | 'reported' | 'datamined' | 'unconfirmed';

// Slugs that are intentionally broad hub/index pages: they link elsewhere
// rather than making their own specific claims, so the long-tail specificity
// checks (section/FAQ/card count, text size, sources) don't apply to them.
// 'faq' is included alongside the 8 structural hubs because it was
// deliberately rebuilt as a pure directory (see faqExpansion.ts) — its job
// is to route to other pages' answers, not hold its own.
export const CORE_HUB_SLUGS = new Set<string>([
  'news', 'guides', 'tools', 'about', 'weapons', 'bosses', 'loot', 'soul-of-return', 'faq',
]);

const SELF_DOMAIN = /mistfallhunter\.me/i;

// Genuine leftover draft/placeholder markers — deliberately narrow. This
// must NOT catch honest hedge language like "not yet confirmed" or
// "尚未确认"; that is the whole point of the confidence system, not a defect
// to flag. This only catches literal leftover dev artifacts.
const DRAFT_MARKER_PATTERN =
  /\b(TODO|FIXME|TBD|XXX|PLACEHOLDER)\b|lorem ipsum|\{\{[^}]*\}\}|\$\{[^}]*\}|待补充|待填写|占位内容/i;

// Bare cop-out openers, in both site languages. Only used together with a
// short-answer-length check below — see hasConcreteAnswer for why.
const NO_ANSWER_OPENER_EN =
  /^(not|no)\s+(yet\s+)?(confirmed|published|available|announced|disclosed|locked in)\b/i;
const NO_ANSWER_OPENER_ZH = /^(尚未|还没有?|暂无|暂未|有待官方)(确认|公布|公开|数据|说明)/;

function textSize(page: SeoPage): number {
  let s = (page.title ?? '') + (page.description ?? '') + (page.lead ?? '');
  for (const sec of page.sections ?? []) {
    s += sec.heading ?? '';
    s += (sec.body ?? []).join('');
    s += (sec.bullets ?? []).join('');
  }
  for (const f of page.faqs ?? []) s += (f.q ?? '') + (f.a ?? '');
  return s.length;
}

// Cheap, good-enough heuristic: this site never mixes languages within one
// page's title, so a single CJK check is enough to pick the right threshold.
function isChinesePage(page: SeoPage): boolean {
  return /[\u4e00-\u9fff]/.test(page.title ?? '');
}

function textSizeThreshold(page: SeoPage): number {
  return isChinesePage(page) ? 400 : 900;
}

// Per-section and total-body substance floors, scaled the same way as
// textSizeThreshold and for the same reason. CONFIRMED AS A REAL BUG, not a
// hypothetical: an unscaled 90-char floor flagged death-penalty's ZH
// sections (55 and 62 chars — complete, substantial sentences, just dense)
// as "not substantial," while the equivalent EN sections cleared it easily.
// Root cause: Chinese conveys the same content in fewer characters, so a
// flat character floor calibrated against English content is proportionally
// a HIGHER bar for Chinese, not a lower one — the opposite of what seems
// intuitive. Scaled down by the same ~2.3x ratio used for textSizeThreshold.
function sectionBodyFloor(page: SeoPage): number {
  return isChinesePage(page) ? 40 : 90;
}

function sectionsTotalFloor(page: SeoPage): number {
  return isChinesePage(page) ? 80 : 180;
}

function sectionsSubstanceOk(page: SeoPage): boolean {
  const sections = page.sections ?? [];
  if (sections.length === 0) return false;
  const bodyFloor = sectionBodyFloor(page);
  if (page.strictSections) {
    // Catalog-style page: every entry must independently carry weight.
    return sections.every((s) => (s.heading ?? '').length >= 4 && (s.body ?? []).join('').length >= bodyFloor);
  }
  // Narrative-guide page (the normal case on this site): don't punish a
  // shorter supporting section as long as the page overall has real depth
  // and at least one section actually says something.
  const totalBody = sections.reduce((sum, s) => sum + (s.body ?? []).join('').length, 0);
  const hasOneSubstantialSection = sections.some((s) => (s.body ?? []).join('').length >= bodyFloor);
  return (
    sections.every((s) => (s.heading ?? '').length >= 4) &&
    hasOneSubstantialSection &&
    totalBody >= sectionsTotalFloor(page)
  );
}

function hasConcreteAnswer(page: SeoPage): boolean {
  const faqs = page.faqs ?? [];
  if (faqs.length === 0) return false;
  const answer = (faqs[0].a ?? '').trim();
  if (answer.length === 0) return false;
  const opensWithCopOut = NO_ANSWER_OPENER_EN.test(answer) || NO_ANSWER_OPENER_ZH.test(answer);
  // Only reject if the answer ALSO has nothing much beyond the cop-out
  // opener. A longer answer that starts with an honest hedge but goes on to
  // give real information ("Not yet priced, but the Xbox listing shows
  // Free-to-Play...") is exactly the kind of evidence-based writing this
  // system should reward, not punish.
  return !(opensWithCopOut && answer.length < 60);
}

function hasSafePublicSources(page: SeoPage): boolean {
  const sources = page.sources ?? [];
  if (sources.length < 2) return false;
  return sources.every((s) => !!s.href && !SELF_DOMAIN.test(s.href));
}

function hasUnsafeDraftMarker(page: SeoPage): boolean {
  return DRAFT_MARKER_PATTERN.test(JSON.stringify(page));
}

export function passesQualityGate(page: SeoPage): boolean {
  if (CORE_HUB_SLUGS.has(page.slug)) {
    // Hub pages are intentionally broad indexes that route elsewhere; they
    // still must not be literal leftover placeholders, but are exempt from
    // long-tail specificity requirements.
    return !hasUnsafeDraftMarker(page);
  }
  return (
    (page.sections ?? []).length >= 2 &&
    sectionsSubstanceOk(page) &&
    (page.faqs ?? []).length >= 2 &&
    (page.cards ?? []).length >= 3 &&
    textSize(page) >= textSizeThreshold(page) &&
    hasSafePublicSources(page) &&
    hasConcreteAnswer(page) &&
    !hasUnsafeDraftMarker(page)
  );
}

// ---------------------------------------------------------------------------
// Audit exports — expose WHY a page passes or fails, check by check, so gaps
// get reviewed and fixed rather than the gate being a black box. Run this
// against the live corpus periodically (see scripts/audit-quality-gate.mjs).
// ---------------------------------------------------------------------------

export interface GateCheckResult {
  slug: string;
  isHub: boolean;
  passed: boolean;
  sectionsCountOk: boolean;
  sectionsSubstanceOk: boolean;
  faqsCountOk: boolean;
  cardsCountOk: boolean;
  textSizeOk: boolean;
  textSize: number;
  textSizeThreshold: number;
  sourcesOk: boolean;
  sourcesCount: number;
  hasConfidenceTag: boolean;
  concreteAnswerOk: boolean;
  noDraftMarkerOk: boolean;
}

export function auditGateChecks(page: SeoPage): GateCheckResult {
  return {
    slug: page.slug,
    isHub: CORE_HUB_SLUGS.has(page.slug),
    passed: passesQualityGate(page),
    sectionsCountOk: (page.sections ?? []).length >= 2,
    sectionsSubstanceOk: sectionsSubstanceOk(page),
    faqsCountOk: (page.faqs ?? []).length >= 2,
    cardsCountOk: (page.cards ?? []).length >= 3,
    textSizeOk: textSize(page) >= textSizeThreshold(page),
    textSize: textSize(page),
    textSizeThreshold: textSizeThreshold(page),
    sourcesOk: hasSafePublicSources(page),
    sourcesCount: (page.sources ?? []).length,
    hasConfidenceTag: !!page.confidence,
    concreteAnswerOk: hasConcreteAnswer(page),
    noDraftMarkerOk: !hasUnsafeDraftMarker(page),
  };
}

export function auditAll(pages: SeoPage[]): GateCheckResult[] {
  return pages.map(auditGateChecks);
}

export function auditRejected(pages: SeoPage[]): GateCheckResult[] {
  return auditAll(pages).filter((r) => !r.passed);
}

// ---------------------------------------------------------------------------
// Standard workflow for a "top up content" task (unchanged from the source
// methodology — this is process, not code, so it stays as a comment):
//
// 1. Search for real data targeting the SPECIFIC gap, not a broad query.
// 2. Cross-verify: >=2 independent sources for any specific detail; be
//    suspicious of oddly-precise numbers with no second source, of
//    anything contradicting an already-verified core name/mechanic, of
//    templated naming patterns repeated across many "different" items, and
//    of sites that pair a guide with cheat/tool sales. Once a domain is
//    caught fabricating once, stop trusting specific data from it.
// 3. Tag every claim's confidence: confirmed / reported / datamined /
//    unconfirmed. If the only honest content for a page is "not known yet,"
//    don't publish that page — that's a reason to wait, not to pad.
// 4. Write the content. Prefer reframing already-confirmed facts into a new
//    angle (FAQ, comparison table, section) over needing fresh data for
//    every single page.
// 5. Run the quality gate audit; check for real newly-passing pages.
// 6. Verify: syntax/type check, import resolution, no broken links.
// 7. Report honestly — including "found nothing new this round" and "X was
//    excluded because Y looked fabricated." Not just the wins.
// ---------------------------------------------------------------------------
