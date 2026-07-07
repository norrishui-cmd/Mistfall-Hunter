// Build Planner behaviour — shared by the EN and ZH pages.
// Language-agnostic: all visible text comes from the DOM (data-label/data-note
// on options, static words in the summary markup, data-none/data-copied on the
// summary container). This only manages selection state, the summary, and the
// shareable URL.

const state: { cls: string | null; path: string | null; goal: string | null; affixes: Set<string> } = {
  cls: null,
  path: null,
  goal: null,
  affixes: new Set<string>(),
};

const classEls = () => [...document.querySelectorAll<HTMLElement>('.pl-class')];
const pathEls = () => [...document.querySelectorAll<HTMLElement>('.pl-path')];
const goalEls = () => [...document.querySelectorAll<HTMLElement>('.pl-goal')];
const affixEls = () => [...document.querySelectorAll<HTMLElement>('.pl-affix')];

function setText(sel: string, text: string): void {
  const el = document.querySelector(sel);
  if (el) el.textContent = text;
}

function setClass(cls: string, keepPath?: string | null): void {
  state.cls = cls;
  classEls().forEach((b) => b.classList.toggle('is-active', b.dataset.cls === cls));
  const visible = pathEls().filter((p) => p.dataset.cls === cls);
  pathEls().forEach((p) => {
    const match = p.dataset.cls === cls;
    p.hidden = !match;
    if (!match) p.classList.remove('is-active');
  });
  let chosen = keepPath ? visible.find((p) => p.dataset.path === keepPath) : undefined;
  if (!chosen) chosen = visible.find((p) => p.classList.contains('is-active')) || visible[0];
  visible.forEach((p) => p.classList.toggle('is-active', p === chosen));
  state.path = chosen ? chosen.dataset.path ?? null : null;
}

function setPath(path: string): void {
  pathEls()
    .filter((p) => p.dataset.cls === state.cls)
    .forEach((p) => p.classList.toggle('is-active', p.dataset.path === path));
  state.path = path;
}

function setGoal(goal: string | null): void {
  state.goal = goal;
  goalEls().forEach((b) => b.classList.toggle('is-active', goal !== null && b.dataset.goal === goal));
}

function toggleAffix(id: string): void {
  if (state.affixes.has(id)) state.affixes.delete(id);
  else state.affixes.add(id);
  affixEls().forEach((b) => b.classList.toggle('is-on', state.affixes.has(b.dataset.affix ?? '')));
}

function updateHash(): void {
  const parts: string[] = [];
  if (state.cls) parts.push('c=' + state.cls);
  if (state.path) parts.push('p=' + state.path);
  if (state.goal) parts.push('g=' + state.goal);
  if (state.affixes.size) parts.push('a=' + [...state.affixes].join(','));
  const base = location.pathname + location.search;
  history.replaceState(null, '', parts.length ? base + '#' + parts.join('&') : base);
}

function render(): void {
  const summary = document.getElementById('pl-summary');
  if (!summary) return;
  const none = summary.dataset.none || '—';
  const clsEl = classEls().find((b) => b.dataset.cls === state.cls);
  const pathEl = pathEls().find((p) => p.dataset.cls === state.cls && p.dataset.path === state.path);
  const goalEl = goalEls().find((b) => b.dataset.goal === state.goal);
  setText('#pl-sum-class', clsEl?.dataset.label || none);
  setText('#pl-sum-path', pathEl?.dataset.label || none);
  setText('#pl-sum-note', clsEl?.dataset.note || '');
  setText('#pl-sum-focus', pathEl?.dataset.note || '');
  setText('#pl-sum-goal', goalEl?.dataset.label || none);
  const chosen = affixEls()
    .filter((b) => state.affixes.has(b.dataset.affix ?? ''))
    .map((b) => b.dataset.label || '');
  setText('#pl-sum-count', String(chosen.length));
  setText('#pl-sum-affixlist', chosen.length ? chosen.join(', ') : none);
  updateHash();
}

function parseHash() {
  const h = location.hash.replace(/^#/, '');
  if (!h) return null;
  const q = new URLSearchParams(h);
  return {
    c: q.get('c'),
    p: q.get('p'),
    g: q.get('g'),
    a: (q.get('a') || '').split(',').filter(Boolean),
  };
}

function init(): void {
  const first = classEls()[0];
  if (!first) return;
  const parsed = parseHash();
  const validClass = parsed && classEls().some((b) => b.dataset.cls === parsed.c) ? (parsed.c as string) : (first.dataset.cls as string);
  setClass(validClass, parsed?.p);
  if (parsed?.g && goalEls().some((b) => b.dataset.goal === parsed.g)) setGoal(parsed.g);
  else setGoal(null);
  state.affixes = new Set((parsed?.a || []).filter((id) => affixEls().some((b) => b.dataset.affix === id)));
  affixEls().forEach((b) => b.classList.toggle('is-on', state.affixes.has(b.dataset.affix ?? '')));

  classEls().forEach((b) => b.addEventListener('click', () => { setClass(b.dataset.cls as string); render(); }));
  pathEls().forEach((b) => b.addEventListener('click', () => { if (!b.hidden) { setPath(b.dataset.path as string); render(); } }));
  goalEls().forEach((b) => b.addEventListener('click', () => { setGoal(state.goal === b.dataset.goal ? null : (b.dataset.goal as string)); render(); }));
  affixEls().forEach((b) => b.addEventListener('click', () => { toggleAffix(b.dataset.affix as string); render(); }));

  document.getElementById('pl-reset')?.addEventListener('click', () => {
    setGoal(null);
    state.affixes.clear();
    affixEls().forEach((b) => b.classList.remove('is-on'));
    setClass(classEls()[0].dataset.cls as string);
    render();
  });

  document.getElementById('pl-copy')?.addEventListener('click', (e) => {
    const btn = e.currentTarget as HTMLElement;
    const summary = document.getElementById('pl-summary');
    const orig = btn.textContent || '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(location.href).then(() => {
        btn.textContent = summary?.dataset.copied || 'Copied';
        setTimeout(() => { btn.textContent = orig; }, 1500);
      }).catch(() => {});
    }
  });

  render();
}

init();
