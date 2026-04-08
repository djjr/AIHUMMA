# A Workflow for AI-Assisted Curriculum Exploration

*How we built a learning outcome taxonomy, mapped it against an existing course catalog, and created tools for seeing where a proposed program fits — and where it needs to fill gaps.*

---

## The Starting Problem

Designing a new graduate program always involves two questions at once: what do we want graduates to be able to do, and how much of that is already available in the institution's existing curriculum? These questions are usually answered informally — through faculty knowledge, catalog browsing, and accumulated institutional memory. The result is curriculum design that is hard to defend rigorously, hard to revise systematically, and hard to communicate to outside stakeholders.

The workflow described here is an attempt to answer both questions more explicitly, using a combination of structured data, a learning outcome taxonomy, and lightweight interactive tools. It was developed for AIHUMMA, a proposed graduate program in AI governance and policy at Johns Hopkins, but the approach generalizes to any setting where a new program needs to position itself within an existing curriculum.

---

## Phase 1: Inventory the Existing Landscape

The first step was building a structured database of existing AI-related courses across JHU's schools and departments. This meant going beyond the catalog PDF — collecting not just titles and descriptions but enough metadata to support filtering and analysis: school, department, course level, format, and keywords derived from descriptions and syllabi.

The result was a database of 65 courses, stored as a structured JavaScript file and browsable through a custom course explorer. The explorer supports tag-based filtering, so you can ask questions like "which courses touch ethics *and* governance?" or "which engineering courses are accessible to non-engineers?" — questions that a catalog PDF cannot answer.

A key design decision was tagging courses with *outcome codes* as well as topic keywords. This meant the same course explorer that lets you browse by subject also lets you see which learning outcomes each course addresses — and which outcomes it doesn't.

---

## Phase 2: Build a Learning Outcome Taxonomy

The taxonomy is the conceptual core of the workflow. We developed 47 outcome codes organized into 8 clusters — Technical Literacy, Critical and Contextual Humanities, Ethics and Values, Governance and Policy, Research Methods, Communication and Writing, Human-AI Interaction, and Societal Domains — and then grouped those clusters into 4 meta-clusters: Comprehension, Normative Judgment, Productive Capacity, and Domain Application.

Each code was annotated along several dimensions beyond its label and description:

- **Type**: Knowledge (K), Skill (S), or Disposition (D) — reflecting whether the outcome is transmissible through reading and lecture, requires practice and feedback to develop, or requires extended socialization and reflection to internalize. This distinction matters enormously for course design and assessment.
- **Bloom level**: the cognitive level at which the outcome is targeted (understand, analyze, evaluate, create)
- **Network role**: whether the outcome is foundational (many things build on it), integrative (it requires many other outcomes as prerequisites), or middle-layer
- **JHU coverage**: how many of the 65 existing courses address it
- **AIHUMMA ownership**: whether the proposed program must build this competency or can rely on electives to provide it

The taxonomy was encoded as structured data — a JavaScript file that serves as the single source of authority for everything downstream. The goal was to avoid the common failure mode of having the same information in multiple places that gradually drift apart.

---

## Phase 3: Map the Coverage Gaps

With the taxonomy in place, we tagged each of the 65 existing courses against the outcome codes, then looked at the distribution. The results were stark. Some outcomes — technical literacy basics, ethics survey content, certain governance topics — were covered by 15 to 24 courses each. Others were near-absent: the ability to distinguish procedural from structural ethics critique appeared in only 1 course. Qualitative research methods for AI governance appeared in 1. Policy genre writing appeared in 7.

This coverage analysis directly shaped the program design. The outcomes where JHU was thin became the outcomes AIHUMMA was obligated to build. The outcomes where JHU was strong became candidates for elective delegation — areas where the program could say "we expect you to take one course from this existing set" rather than building something new.

The result was a curriculum mapping document that assigns primary, secondary, and signature outcome codes to each of the 12 proposed AIHUMMA courses, with explicit rationale for each assignment and a full coverage matrix.

---

## Phase 4: Build Tools for Seeing

The analytical work produces documents that are useful for the designers but hard to share with colleagues, advisors, or external reviewers. The final phase was building a small set of interactive tools to make the analysis visible and navigable.

A **force-directed network visualization** renders the 47 outcome codes as nodes — sized by JHU coverage, colored by meta-cluster, with gold rings marking outcomes AIHUMMA must own — connected by directed edges showing prerequisite and enables relationships. The network makes immediately visible which outcomes are foundational bottlenecks and which are integrative capstones. It is a tool for deliberation as much as for analysis.

A **course database** with outcome filtering lets users browse the 65 existing courses and filter by any combination of topic tag and outcome code. Clicking an outcome chip filters to all courses that address that outcome. Hovering over a code shows a brief definition.

An **Obsidian-style hover preview** runs throughout the entire site: hovering over any wiki-linked outcome code in any narrative document shows a panel with the outcome's full definition, type, Bloom level, and coverage statistics — so readers never have to remember what EV-05 means mid-paragraph.

---

## What the Workflow Produces

At the end of this process, you have four things that most curriculum design efforts lack:

**A defensible taxonomy.** Not a vague list of learning goals, but a structured set of codes with explicit type annotations, prerequisite relationships, and coverage data. The taxonomy can be argued over, revised, and extended in a controlled way.

**A gap analysis grounded in evidence.** Rather than "we think there's a gap in ethics," you have "EV-05 appears in 1 of 65 courses, and here are the 64 courses that don't cover it."

**A curriculum map that shows its reasoning.** Each proposed course carries explicit outcome assignments with written rationale, not just a title and a description. The assignments can be challenged, revised, or recombined.

**Tools that support ongoing deliberation.** The network visualization, the course explorer, and the hover preview are not one-time deliverables — they update automatically when the underlying data changes, and they make the analysis accessible to colleagues who were not in the room when the decisions were made.

---

## Phase 5: Course Development Stubs

With the analytical scaffolding in place, the next step was moving from program design to course development. Each of the 12 proposed AIHUMMA courses needed a working file — a place to accumulate course-level thinking that is linked to but distinct from the curriculum mapping document.

We created a stub file in `Course Notes/` for each course, named by code and title (e.g., `F3 Ethics, Values, and AI: From Philosophy to Policy.md`). Each stub opens with a backlink to `[[AIHUMMA Curriculum Idea]]`, followed by the course description drawn from that document. The stubs for F1 and F2 had already been started and were left in place; stubs for the remaining ten courses — F3, F4, A1–A3, B1–B3, and P1–P3 — were created from the curriculum idea descriptions.

Each course title heading in `AIHUMMA Curriculum Idea.md` was simultaneously converted to a wiki link pointing to its stub, so the curriculum idea document now serves as a navigable index into the course development layer. The stubs are intentionally minimal: a description and nothing else. They are placeholders for pedagogy, readings, assignments, and sequencing decisions that come later.

---

## A Note on the Role of AI

This workflow was developed collaboratively with an AI assistant. The human partner provided domain expertise, judgment about which outcomes mattered, and decisions about program design. The AI partner handled the substantial data-processing work — building the course database, writing the generation and scanning scripts, constructing the interactive tools — and acted as a thinking partner for structural decisions.

The workflow is not faster because AI wrote the code. It is more rigorous because AI made it practical to work at a level of structure and explicitness that would otherwise require a dedicated research team. A taxonomy with 47 codes, 46 edges, and 65 tagged courses would have taken weeks to build manually. Built collaboratively, it took hours — and the time saved went into thinking harder about what the codes should mean.

---

*Related documents: [[aihumma-curriculum-mapping|Curriculum Mapping]], [[AIHUMMA Taxonomy Network|Taxonomy Network Visualization]], [[Existing Courses|Existing Courses Database]]*
