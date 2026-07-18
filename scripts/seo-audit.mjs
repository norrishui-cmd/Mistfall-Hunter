import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const site = 'https://mistfallhunter.me';

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']+)["']`, 'i'));
  return match?.[1] ?? '';
}

function textOf(html, tag) {
  const match = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match?.[1]?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() ?? '';
}

function allMatches(html, re) {
  return [...html.matchAll(re)];
}

function normalizePathname(pathname) {
  let clean = pathname || '/';
  if (!clean.startsWith('/')) clean = `/${clean}`;
  clean = clean.replace(/\/{2,}/g, '/');
  if (clean !== '/' && !path.extname(clean) && !clean.endsWith('/')) clean += '/';
  return clean;
}

function htmlPathForUrl(url) {
  const parsed = new URL(url, site);
  const pathname = normalizePathname(parsed.pathname);
  if (pathname === '/') return path.join(dist, 'index.html');
  return path.join(dist, pathname, 'index.html');
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const pages = htmlFiles.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file).replaceAll(path.sep, '/');
  const pathname = rel === 'index.html' ? '/' : `/${rel.replace(/\/?index\.html$/, '/')}`;
  const title = textOf(html, 'title');
  const description = attr(html.match(/<meta\s+name=["']description["'][^>]*>/i)?.[0] ?? '', 'content');
  const canonical = attr(html.match(/<link\s+rel=["']canonical["'][^>]*>/i)?.[0] ?? '', 'href');
  const robots = attr(html.match(/<meta\s+name=["']robots["'][^>]*>/i)?.[0] ?? '', 'content');
  const htmlLang = attr(html.match(/<html\s+[^>]*lang=["'][^"']+["'][^>]*>/i)?.[0] ?? '', 'lang');
  const h1Count = allMatches(html, /<h1\b/gi).length;
  const jsonLd = allMatches(html, /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi).map((m) => m[1]);
  return { file, html, pathname, title, description, canonical, robots, htmlLang, h1Count, jsonLd };
});

const byPath = new Map(pages.map((page) => [normalizePathname(page.pathname), page]));
const indexablePages = pages.filter((page) => !/noindex/i.test(page.robots));
const noindexPages = pages.filter((page) => /noindex/i.test(page.robots));
const officialSourceHosts = new Set(['store.steampowered.com', 'www.xbox.com']);

function parsedSchemas(page) {
  return page.jsonLd.flatMap((raw) => {
    try {
      return [JSON.parse(raw)];
    } catch {
      return [];
    }
  });
}

for (const page of pages) {
  const isNoindex = /noindex/i.test(page.robots);
  if (!page.title) fail(`${page.pathname}: missing title`);
  if (!page.description) fail(`${page.pathname}: missing meta description`);
  if (!page.canonical) fail(`${page.pathname}: missing canonical`);
  if (page.h1Count !== 1) fail(`${page.pathname}: expected one H1, found ${page.h1Count}`);
  // Keep the warning queue focused on URLs currently competing in search.
  // Noindex drafts still receive the hard structural checks above.
  const visibleText = page.html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const contentUnits = /^(?:zh|ja)/i.test(page.htmlLang)
    ? visibleText.replace(/\s/g, '').length / 2
    : visibleText.split(/\s+/).filter(Boolean).length;
  if (!isNoindex && page.title.length > 70) warn(`${page.pathname}: long title (${page.title.length})`);
  if (!isNoindex && page.description.length > 170) warn(`${page.pathname}: long description (${page.description.length})`);
  if (!isNoindex && contentUnits < 180) warn(`${page.pathname}: unusually short content`);
  if (!isNoindex && /(to confirm|unconfirmed|watch for updates|check at launch|exact values are unknown)/i.test(page.html)) {
    warn(`${page.pathname}: indexable page contains uncertainty-heavy language`);
  }
  if (!isNoindex && /(July 30(?:, 2026)?|7\s*月\s*30\s*日|2026-07-30)/i.test(page.html)) {
    fail(`${page.pathname}: stale July 30 release date conflicts with official storefront listings`);
  }
  for (const raw of page.jsonLd) {
    try {
      JSON.parse(raw);
    } catch (error) {
      fail(`${page.pathname}: malformed JSON-LD (${error.message})`);
    }
  }
}

// Indexable editorial pages must make their evidence machine-readable as well
// as visible to readers. This catches a common regression where a template is
// changed and Article JSON-LD silently loses its citations.
let citedEditorialPages = 0;
for (const page of indexablePages) {
  const articles = parsedSchemas(page).filter((schema) => ['Article', 'TechArticle'].includes(schema['@type']));
  if (!articles.length) continue;
  for (const article of articles) {
    const citations = Array.isArray(article.citation) ? article.citation : [];
    if (!citations.length) {
      fail(`${page.pathname}: Article JSON-LD is missing citations`);
      continue;
    }
    const hasOfficialCitation = citations.some((citation) => {
      try {
        return officialSourceHosts.has(new URL(citation).hostname);
      } catch {
        return false;
      }
    });
    if (!hasOfficialCitation) fail(`${page.pathname}: Article JSON-LD lacks an official store citation`);
    else citedEditorialPages += 1;
  }
}

// Release information is especially sensitive. Its two localized landing
// pages must retain direct links to the official storefront records.
for (const pathname of ['/release-date/', '/zh/release-date/', '/de/release-date/', '/ja/release-date/']) {
  const page = byPath.get(pathname);
  if (!page) {
    fail(`${pathname}: release page is missing`);
    continue;
  }
  for (const sourceUrl of [
    'https://store.steampowered.com/app/3282300/Mistfall_Hunter/',
    'https://www.xbox.com/en-US/games/store/mistfall-hunter/9p8x6tvw9zw8',
  ]) {
    if (!page.html.includes(sourceUrl)) fail(`${pathname}: missing official release source ${sourceUrl}`);
  }
}

for (const field of ['title', 'description']) {
  const seen = new Map();
  // Duplicate metadata matters when two URLs compete in Google's index. The
  // parked, noindex launch drafts are intentionally excluded until promoted.
  for (const page of indexablePages) {
    const value = page[field];
    if (!value) continue;
    const list = seen.get(value) ?? [];
    list.push(page.pathname);
    seen.set(value, list);
  }
  for (const [value, list] of seen) {
    if (list.length > 1) fail(`duplicate ${field}: ${value} -> ${list.join(', ')}`);
  }
}

const sitemapFiles = walk(dist).filter((file) => /sitemap.*\.xml$/.test(path.basename(file)));
const sitemapUrls = new Set();
for (const file of sitemapFiles) {
  const xml = fs.readFileSync(file, 'utf8');
  for (const match of allMatches(xml, /<loc>(.*?)<\/loc>/g)) {
    if (match[1].endsWith('.xml')) continue;
    sitemapUrls.add(match[1]);
  }
}

for (const url of sitemapUrls) {
  const htmlFile = htmlPathForUrl(url);
  if (!fs.existsSync(htmlFile)) {
    fail(`sitemap URL has no HTML: ${url}`);
    continue;
  }
  const page = byPath.get(normalizePathname(new URL(url).pathname));
  if (!page) continue;
  if (/noindex/i.test(page.robots)) fail(`sitemap URL is noindex: ${url}`);
  if (page.canonical !== url) fail(`canonical/sitemap mismatch: ${url} canonical=${page.canonical}`);
}

for (const page of indexablePages) {
  for (const match of allMatches(page.html, /<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    const parsed = new URL(href, site);
    if (parsed.origin !== site) continue;
    const targetPath = normalizePathname(parsed.pathname);
    if (!byPath.has(targetPath) && !fs.existsSync(path.join(dist, targetPath.replace(/^\//, '')))) {
      fail(`${page.pathname}: broken internal link ${href}`);
      continue;
    }
    const target = byPath.get(targetPath);
    if (target && /noindex/i.test(target.robots)) {
      // A contextually useful link to a parked draft is allowed, but it must
      // stay visible in the report so a future promotion decision is deliberate.
      warn(`${page.pathname}: indexable page links to noindex ${href}`);
    }
  }
  for (const match of allMatches(page.html, /<link\s+rel=["']alternate["'][^>]*>/gi)) {
    const href = attr(match[0], 'href');
    const hreflang = attr(match[0], 'hreflang');
    if (!href || hreflang === 'x-default') continue;
    const targetPath = normalizePathname(new URL(href, site).pathname);
    const targetPage = byPath.get(targetPath);
    if (!targetPage) {
      fail(`${page.pathname}: hreflang target missing ${href}`);
      continue;
    }
    const reciprocalHrefs = allMatches(targetPage.html, /<link\s+rel=["']alternate["'][^>]*>/gi).map((tag) => attr(tag[0], 'href'));
    if (!reciprocalHrefs.includes(page.canonical)) fail(`${page.pathname}: hreflang target is not reciprocal ${href}`);
  }
}

for (const sitemapPath of ['/sitemap/', '/zh/sitemap/']) {
  const page = byPath.get(sitemapPath);
  if (!page) continue;
  for (const match of allMatches(page.html, /<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const parsed = new URL(match[1], site);
    if (parsed.origin !== site) continue;
    const target = byPath.get(normalizePathname(parsed.pathname));
    if (target && /noindex/i.test(target.robots)) fail(`${sitemapPath}: HTML sitemap links to noindex ${parsed.pathname}`);
  }
}

const contextualLinks = new Map(indexablePages.map((page) => [normalizePathname(page.pathname), 0]));
for (const page of pages) {
  for (const match of allMatches(page.html, /<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const parsed = new URL(match[1], site);
    if (parsed.origin !== site) continue;
    const target = normalizePathname(parsed.pathname);
    if (contextualLinks.has(target) && target !== normalizePathname(page.pathname)) {
      contextualLinks.set(target, contextualLinks.get(target) + 1);
    }
  }
}
for (const [pathname, count] of contextualLinks) {
  if (pathname !== '/' && count === 0) fail(`orphan indexable page: ${pathname}`);
  if (count < 2) warn(`${pathname}: very few contextual internal links (${count})`);
}

const duplicateTitles = indexablePages.length - new Set(indexablePages.map((p) => p.title).filter(Boolean)).size;
const duplicateDescriptions = indexablePages.length - new Set(indexablePages.map((p) => p.description).filter(Boolean)).size;
const brokenInternalLinks = errors.filter((error) => error.includes('broken internal link')).length;
const canonicalMismatches = errors.filter((error) => error.includes('canonical/sitemap mismatch')).length;
const sitemapNoindex = errors.filter((error) => error.includes('sitemap URL is noindex')).length;

console.log(`Pages: ${pages.length}`);
console.log(`Indexable: ${indexablePages.length}`);
console.log(`Noindex: ${noindexPages.length}`);
console.log(`Sitemap URLs: ${sitemapUrls.size}`);
console.log(`Broken internal links: ${brokenInternalLinks}`);
console.log(`Duplicate titles: ${duplicateTitles}`);
console.log(`Duplicate descriptions: ${duplicateDescriptions}`);
console.log(`Canonical mismatches: ${canonicalMismatches}`);
console.log(`Sitemap/noindex conflicts: ${sitemapNoindex}`);
console.log(`Cited editorial pages: ${citedEditorialPages}`);

if (warnings.length) {
  console.warn('\nWarnings:');
  for (const message of warnings) console.warn(`- ${message}`);
}

if (errors.length) {
  console.error('\nErrors:');
  for (const message of errors) console.error(`- ${message}`);
  process.exit(1);
}

console.log('\nSEO audit passed.');
