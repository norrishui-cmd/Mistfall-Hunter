// Interactive map behaviour — shared by the EN and ZH map pages.
// Language-agnostic: all visible text is rendered server-side; this only
// handles pan / zoom / filtering / showing marker details.

function escapeHtml(s: string): string {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function showInfo(marker: HTMLElement): void {
  const wrap = marker.closest('.mapwrap') as HTMLElement | null;
  const info = document.getElementById('mapinfo');
  if (!info) return;

  const type = marker.dataset.type || '';
  const name = marker.dataset.name || '';
  const note = marker.dataset.note || '';
  const label =
    wrap?.querySelector(`.legend-chip[data-type="${type}"] .chip-label`)?.textContent || type;

  info.style.setProperty('--mi-accent', getComputedStyle(marker).color);
  info.innerHTML =
    `<span class="mi-type">${escapeHtml(label)}</span>` +
    `<span class="mi-name">${escapeHtml(name)}</span>` +
    (note ? `<span class="mi-note">${escapeHtml(note)}</span>` : '');
  info.classList.add('has');
}

function initStage(stage: HTMLElement): void {
  const inner = stage.querySelector('.mapstage-inner') as HTMLElement | null;
  if (!inner) return;

  let scale = 1;
  let tx = 0;
  let ty = 0;
  let dragging = false;
  let sx = 0;
  let sy = 0;
  let stx = 0;
  let sty = 0;

  function apply(): void {
    const W = stage.clientWidth;
    const H = stage.clientHeight;
    const minX = W * (1 - scale);
    const minY = H * (1 - scale);
    tx = Math.min(0, Math.max(minX, tx));
    ty = Math.min(0, Math.max(minY, ty));
    inner.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }

  function zoomAt(cx: number, cy: number, next: number): void {
    const ns = Math.min(5, Math.max(1, next));
    const px = (cx - tx) / scale;
    const py = (cy - ty) / scale;
    scale = ns;
    tx = cx - px * scale;
    ty = cy - py * scale;
    apply();
  }

  stage.addEventListener('pointerdown', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('.marker') || t.closest('.mapzoom')) return;
    dragging = true;
    sx = e.clientX;
    sy = e.clientY;
    stx = tx;
    sty = ty;
    stage.setPointerCapture(e.pointerId);
    stage.classList.add('grabbing');
  });

  stage.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    tx = stx + (e.clientX - sx);
    ty = sty + (e.clientY - sy);
    apply();
  });

  function endDrag(): void {
    dragging = false;
    stage.classList.remove('grabbing');
  }
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);
  stage.addEventListener('pointerleave', endDrag);

  stage.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const r = stage.getBoundingClientRect();
      zoomAt(e.clientX - r.left, e.clientY - r.top, scale * (e.deltaY < 0 ? 1.2 : 1 / 1.2));
    },
    { passive: false }
  );

  stage.querySelectorAll<HTMLElement>('.mapzoom button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const act = btn.dataset.act;
      const W = stage.clientWidth;
      const H = stage.clientHeight;
      if (act === 'in') zoomAt(W / 2, H / 2, scale * 1.4);
      else if (act === 'out') zoomAt(W / 2, H / 2, scale / 1.4);
      else {
        scale = 1;
        tx = 0;
        ty = 0;
        apply();
      }
    });
  });

  stage.querySelectorAll<HTMLElement>('.marker').forEach((m) => {
    m.addEventListener('click', (e) => {
      e.stopPropagation();
      document
        .querySelectorAll('.marker.is-active')
        .forEach((x) => x.classList.remove('is-active'));
      m.classList.add('is-active');
      showInfo(m);
    });
  });

  window.addEventListener('resize', apply);
  apply();
}

// Tabs: switch which map panel is visible.
document.querySelectorAll<HTMLElement>('.maptabs button').forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    document
      .querySelectorAll('.maptabs button')
      .forEach((t) => t.classList.toggle('is-active', t === tab));
    document.querySelectorAll<HTMLElement>('.mapstage').forEach((s) => {
      s.hidden = s.dataset.map !== target;
    });
  });
});

// Category filters.
document.querySelectorAll<HTMLInputElement>('.legend-chip input').forEach((cb) => {
  cb.addEventListener('change', () => {
    document
      .querySelectorAll('.mapwrap')
      .forEach((w) => w.classList.toggle('hide-' + cb.value, !cb.checked));
  });
});

document.querySelectorAll<HTMLElement>('.mapstage').forEach((s) => initStage(s));
