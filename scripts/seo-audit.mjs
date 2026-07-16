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
  const h1Count = allMatches(html, /<h1\b/gi).length;
  const jsonLd = allMatches(html, /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi).map((m) => m[1]);
  return { file, html, pathname, title, description, canonical, robots, h1Count, jsonLd };
});

const byPath = new Map(pages.map((page) => [normalizePathname(page.pathname), page]));
const indexablePages = pages.filter((page) => !/noindex/i.test(page.robots));
const noindexPages = pages.filter((page) => /noindex/i.test(page.robots));

for (const page of pages) {
  if (!page.title) fail(`${page.pathname}: missing title`);
  if (!page.description) fail(`${page.pathname}: missing meta description`);
  if (!page.canonical) fail(`${page.pathname}: missing canonical`);
  if (page.h1Count !== 1) fail(`${page.pathname}: expected one H1, found ${page.h1Count}`);
  if (page.title.length > 70) warn(`${page.pathname}: long title (${page.title.length})`);
  if (page.description.length > 170) warn(`${page.pathname}: long description (${page.description.length})`);
  if (page.html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length < 180) warn(`${page.pathname}: unusually short content`);
  if (/(to confirm|unconfirmed|watch for updates|check at launch|exact values are unknown)/i.test(page.html) && !/noindex/i.test(page.robots)) {
    warn(`${page.pathname}: indexable page contains uncertainty-heavy language`);
  }
  for (const raw of page.jsonLd) {
    try {
      JSON.parse(raw);
    } catch (error) {
      fail(`${page.pathname}: malformed JSON-LD (${error.message})`);
    }
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
    }
  }
  for (const match of allMatches(page.html, /<link\s+rel=["']alternate["'][^>]*>/gi)) {
    const href = attr(match[0], 'href');
    const hreflang = attr(match[0], 'hreflang');
    if (!href || hreflang === 'x-default') continue;
    const targetPath = normalizePathname(new URL(href, site).pathname);
    if (!byPath.has(targetPath)) fail(`${page.pathname}: hreflang target missing ${href}`);
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
