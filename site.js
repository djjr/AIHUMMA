// ── Page manifest ────────────────────────────────────────────────────────────

const NAV = [
  {
    section: 'Project',
    pages: [
      { label: 'Home',                slug: 'HOME' },
      { label: 'All Pages',           slug: 'All Pages' },
    ]
  },
  {
    section: 'AIHUMMA',
    pages: [
      { label: 'Competitive Landscape', slug: 'AIHUMMA Competitive Landscape' },
      { label: 'Curriculum Idea 01',    slug: 'AIHUMMA Curriculum Idea 01' },
      { label: 'Curriculum Mapping',    slug: 'aihumma-curriculum-mapping' },
      { label: 'Taxonomy Network',      slug: 'AIHUMMA Taxonomy Network' },
      { label: 'Existing Courses',      slug: 'Existing JHU Courses' },
    ]
  },
  {
    section: 'Analysis',
    pages: [
      { label: 'Outcomes Inventory',    slug: 'course-outcomes-inventory' },
      { label: 'Coverage Matrix',       slug: 'outcomes-coverage-matrix' },
    ]
  },
  {
    section: 'Background',
    pages: [
      { label: 'Notes on Human-Centered AI', slug: 'Notes on Human Centered AI' },
    ]
  },
  {
    section: 'Programs',
    pages: [
      { label: 'Stanford HCAI',    slug: 'Stanford Human Centered Generative AI' },
      { label: 'Lindenwood Certificate', slug: 'Lindenwood University Certificate in Human Centered AI' },
      { label: 'UW Certificate',   slug: 'UW Certificate in Human Centered AI' },
      { label: 'SJSU HCAI',        slug: 'SJSU Human Centered AI' },
    ]
  },
  {
    section: 'Resources',
    pages: [
      { label: 'References', slug: 'Miscellaneous References' },
    ]
  },
];

// Flat list for lookup
const ALL_PAGES = NAV.flatMap(s => s.pages);

// ── Routing ───────────────────────────────────────────────────────────────────

function getSlug() {
  const raw = window.location.hash.slice(1);
  return raw ? decodeURIComponent(raw) : 'HOME';
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function buildNav(currentSlug) {
  const nav = document.getElementById('nav');
  nav.innerHTML =
    `<div class="site-version">v0.1 &nbsp;·&nbsp; Spring 2026</div>` +
    NAV.map(section => `
    <div class="nav-section">${section.section}</div>
    ${section.pages.map(p => `
      <a href="#${encodeURIComponent(p.slug)}"
         class="nav-link${p.slug === currentSlug ? ' active' : ''}">
        ${p.label}
      </a>
    `).join('')}
  `).join('');
}

// ── Markdown pre-processing ───────────────────────────────────────────────────

function preprocess(md) {
  // Strip Obsidian frontmatter tags like #AIHUMMA at line start
  // (leave them as-is; they'll just appear as text — harmless)

  // Dataview blocks → friendly note
  md = md.replace(/```dataview[\s\S]*?```/g,
    '<span class="dataview-note">Dataview query (not rendered in web view)</span>');

  // [[Wiki Link|Alias]] → [Alias](#Wiki Link)
  md = md.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, target, alias) =>
    `[${alias}](#${encodeURIComponent(target)})`
  );

  // [[Wiki Link]] → [Wiki Link](#Wiki Link)
  md = md.replace(/\[\[([^\]]+)\]\]/g, (_, name) =>
    `[${name}](#${encodeURIComponent(name)})`
  );

  return md;
}

// ── Page loader ───────────────────────────────────────────────────────────────

async function loadPage(slug) {
  buildNav(slug);

  const main = document.getElementById('content');
  main.innerHTML = '<p class="loading">Loading…</p>';

  // Update document title
  const page = ALL_PAGES.find(p => p.slug === slug);
  document.title = page ? `${page.label} — AIHUMMA` : 'AIHUMMA';

  const filename = slug + '.md';

  try {
    const resp = await fetch(encodeURIComponent(filename));
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const raw = await resp.text();
    const processed = preprocess(raw);
    main.innerHTML = marked.parse(processed);
  } catch (err) {
    main.innerHTML = `<p class="error">Could not load <strong>${filename}</strong>: ${err.message}</p>`;
  }

  window.scrollTo(0, 0);
}

// ── Page preview (Obsidian-style hover) ──────────────────────────────────────
//
// Strategy: event delegation on the two long-lived containers (#nav, #content)
// so we don't have to re-wire listeners every time a page re-renders.
// A 280 ms delay before fetching prevents flicker on casual mouse-overs.
// Fetched markdown is cached so subsequent hovers are instant.

const previewCache = new Map();   // slug → rendered HTML string
let   hoverTimer   = null;
let   previewActive = false;      // true while mouse is inside the panel itself

// Create the panel once and wire its own enter/leave to keep it alive while
// the user is reading it (i.e. don't hide it the moment the cursor leaves a link).
const previewEl = (() => {
  const el = document.createElement('div');
  el.id = 'page-preview';
  document.body.appendChild(el);
  el.addEventListener('mouseenter', () => {
    previewActive = true;
    clearTimeout(hoverTimer);
  });
  el.addEventListener('mouseleave', () => {
    previewActive = false;
    scheduleHide();
  });
  return el;
})();

// Hide after a short grace period (lets mouse move from link → panel without flash).
function scheduleHide() {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    if (!previewActive) previewEl.style.display = 'none';
  }, 150);
}

// Place the panel near the cursor, but flip left or up if we'd overflow the viewport.
function positionPreview(x, y) {
  const PAD = 14;
  const W   = 360;   // must match CSS width
  const H   = 380;   // must match CSS max-height
  let left  = x + PAD;
  let top   = y + PAD;
  if (left + W > window.innerWidth  - PAD) left = x - W - PAD;
  if (top  + H > window.innerHeight - PAD) top  = y - H - PAD;
  if (left < PAD) left = PAD;
  if (top  < PAD) top  = PAD;
  previewEl.style.left = left + 'px';
  previewEl.style.top  = top  + 'px';
}

// After the delay: fetch (or use cache), truncate, render, show.
function showPreviewForSlug(slug, pageLabel, x, y) {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(async () => {
    positionPreview(x, y);

    if (previewCache.has(slug)) {
      previewEl.innerHTML  = previewCache.get(slug);
      previewEl.style.display = 'block';
      return;
    }

    // Show a lightweight loading state while we fetch
    previewEl.innerHTML = `<div class="preview-title">${pageLabel}</div>` +
                          '<p class="loading">Loading…</p>';
    previewEl.style.display = 'block';

    try {
      const resp = await fetch(encodeURIComponent(slug + '.md'));
      if (!resp.ok) throw new Error('not found');
      const raw = await resp.text();

      // Take first ~55 non-blank lines — enough for a meaningful glance,
      // fast to parse, and stops before huge tables / matrices.
      const snippet = raw.split('\n').slice(0, 55).join('\n');
      const html    = `<div class="preview-title">${pageLabel}</div>` +
                      marked.parse(preprocess(snippet));
      previewCache.set(slug, html);
      previewEl.innerHTML     = html;
      previewEl.style.display = 'block';
    } catch (_) {
      previewEl.style.display = 'none';
    }
  }, 280);
}

// Attach delegated listeners to one container.  Called once per container on
// DOMContentLoaded; works for all dynamically-rendered child links thereafter.
function attachPreviewDelegation(containerEl) {
  if (!containerEl) return;

  containerEl.addEventListener('mouseover', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const slug = decodeURIComponent(anchor.getAttribute('href').slice(1));
    const page = ALL_PAGES.find(p => p.slug === slug);
    if (!page) return;
    if (slug === getSlug()) return;   // no preview for the page already showing
    showPreviewForSlug(slug, page.label, e.clientX, e.clientY);
  });

  containerEl.addEventListener('mouseout', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    // If the cursor is moving into the panel, let the panel's own listeners take over
    if (e.relatedTarget && (e.relatedTarget === previewEl || previewEl.contains(e.relatedTarget))) return;
    scheduleHide();
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────

window.addEventListener('hashchange', () => loadPage(getSlug()));
document.addEventListener('DOMContentLoaded', () => {
  loadPage(getSlug());
  attachPreviewDelegation(document.getElementById('nav'));
  attachPreviewDelegation(document.getElementById('content'));
});
