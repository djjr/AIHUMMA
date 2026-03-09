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
      { label: 'Courses',               slug: 'AIHUMMA Courses' },
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
  nav.innerHTML = NAV.map(section => `
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

// ── Init ──────────────────────────────────────────────────────────────────────

window.addEventListener('hashchange', () => loadPage(getSlug()));
document.addEventListener('DOMContentLoaded', () => loadPage(getSlug()));
