/**
 * AIHUMMA Taxonomy Network
 * ========================
 * Encodes the full meta-structure of the 49-code AIHUMMA outcome taxonomy
 * for network visualization and curriculum analysis.
 *
 * DATA STRUCTURES:
 *   window.TAXONOMY_META_CLUSTERS  — the four top-level groupings
 *   window.TAXONOMY_NODES          — all 48 outcome codes as graph nodes
 *   window.TAXONOMY_EDGES          — directed prerequisite/enables edges
 *   window.AIHUMMA_COURSES         — 12 proposed AIHUMMA courses with tagged outcomes
 *
 * NODE PROPERTIES EXPLAINED:
 *   meta_cluster   — which of the four functional groupings this code belongs to
 *   cluster        — the 8 original taxonomy clusters (TL, CH, EV, etc.)
 *   type           — K (Knowledge), S (Skill), or D (Disposition)
 *                    K = propositional, transmissible through reading/lecture
 *                    S = procedural, requires practice and feedback to develop
 *                    D = epistemic habit/stance, requires socialization over time
 *   specificity    — "general" (transferable beyond AI) vs "ai_specific"
 *   network_role   — "foundational" (high out-degree, prerequisite for many),
 *                    "middle" (both receives and enables),
 *                    "integrative" (high in-degree, requires many prior outcomes)
 *   jhu_coverage   — how many of the 65 JHU AI courses address this outcome
 *   aihumma_owns   — whether AIHUMMA must build this (true) or can rely on electives (false)
 *
 * EDGE DIRECTION:
 *   source → target means "source is a prerequisite for / enables target"
 *   A student who has developed source is ready to develop target.
 */

window.TAXONOMY_META_CLUSTERS = [
  {
    id: "comprehension",
    label: "Comprehension",
    description: "Understanding what AI systems are, how they work, what claims are being made about them, and how they fit into intellectual and cultural history. The descriptive/analytical half of the program.",
    clusters: ["TL", "CH"],
    color: "#4A90D9",
    textColor: "#ffffff"
  },
  {
    id: "normative_judgment",
    label: "Normative Judgment",
    description: "Evaluating AI against ethical frameworks, policy criteria, and governance principles. Asking 'what should we do?' — including critiquing how that question itself gets framed and who gets to answer it.",
    clusters: ["EV", "GP"],
    color: "#E67E22",
    textColor: "#ffffff"
  },
  {
    id: "productive_capacity",
    label: "Productive Capacity",
    description: "Making things: research, arguments, policy documents, programs, communications. The craft layer — turning comprehension and judgment into outputs that influence the world.",
    clusters: ["RM", "CW", "HI"],
    color: "#27AE60",
    textColor: "#ffffff"
  },
  {
    id: "domain_application",
    label: "Domain Application",
    description: "Applying the above to specific sectors and societal contexts. A matrix dimension rather than a sequential stage — domain knowledge scaffolds and is scaffolded by the other three clusters.",
    clusters: ["SD"],
    color: "#8E44AD",
    textColor: "#ffffff"
  }
];

window.TAXONOMY_NODES = [

  // ─── TL: Technical Literacy ──────────────────────────────────────────────

  {
    id: "TL-01",
    cluster: "TL",
    meta_cluster: "comprehension",
    label: "Explain core ML model types conceptually",
    description: "Explain the core types of machine learning models (supervised, unsupervised, reinforcement learning, generative) at a conceptual level sufficient for governance analysis.",
    type: "K",
    specificity: "ai_specific",
    network_role: "foundational",
    jhu_coverage: 24,
    aihumma_owns: false,
    bloom_level: "understand"
  },
  {
    id: "TL-02",
    cluster: "TL",
    meta_cluster: "comprehension",
    label: "Interpret AI technical docs as arguments",
    description: "Interpret technical AI documentation (model cards, capability evaluations, safety frameworks, system cards) as constructed arguments rather than neutral facts — identifying claims, assumptions, and what is left unmeasured.",
    type: "S",
    specificity: "ai_specific",
    network_role: "integrative",
    jhu_coverage: 11,
    aihumma_owns: true,
    bloom_level: "analyze"
  },
  {
    id: "TL-03",
    cluster: "TL",
    meta_cluster: "comprehension",
    label: "Implement ML workflows in Python",
    description: "Implement basic machine learning workflows using Python and standard libraries, including data preprocessing, model training, and evaluation.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 17,
    aihumma_owns: false,
    bloom_level: "apply"
  },
  {
    id: "TL-04",
    cluster: "TL",
    meta_cluster: "comprehension",
    label: "Explain LLM architecture and training",
    description: "Explain the architecture and training process of large language models — including pre-training, fine-tuning, RLHF, and alignment techniques — at a level sufficient to understand capability and limitation claims.",
    type: "K",
    specificity: "ai_specific",
    network_role: "foundational",
    jhu_coverage: 17,
    aihumma_owns: false,
    bloom_level: "understand"
  },
  {
    id: "TL-05",
    cluster: "TL",
    meta_cluster: "comprehension",
    label: "Apply mathematical foundations to ML",
    description: "Apply core mathematical concepts (linear algebra, probability, calculus) underlying machine learning to understand model behavior and limitations.",
    type: "S",
    specificity: "general",
    network_role: "foundational",
    jhu_coverage: 12,
    aihumma_owns: false,
    bloom_level: "apply"
  },
  {
    id: "TL-06",
    cluster: "TL",
    meta_cluster: "comprehension",
    label: "Distinguish AI paradigms and capabilities",
    description: "Distinguish between AI paradigms (rule-based, narrow/task-specific, large-scale foundation models, agentic systems) and accurately characterize what each can and cannot do.",
    type: "K",
    specificity: "ai_specific",
    network_role: "foundational",
    jhu_coverage: 17,
    aihumma_owns: false,
    bloom_level: "understand"
  },
  {
    id: "TL-07",
    cluster: "TL",
    meta_cluster: "comprehension",
    label: "Evaluate AI system performance and failure modes",
    description: "Evaluate AI system performance metrics, benchmark results, and failure modes — recognizing what evaluation frameworks measure and where they are silent.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 16,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },

  // ─── CH: Critical & Humanistic Analysis ──────────────────────────────────

  {
    id: "CH-01",
    cluster: "CH",
    meta_cluster: "comprehension",
    label: "Situate AI in intellectual/political history",
    description: "Situate contemporary AI in its intellectual and political history — connecting current debates to earlier moments in computing, cybernetics, cognitive science, and the political economy of technology.",
    type: "K",
    specificity: "ai_specific",
    network_role: "foundational",
    jhu_coverage: 11,
    aihumma_owns: true,
    bloom_level: "analyze"
  },
  {
    id: "CH-02",
    cluster: "CH",
    meta_cluster: "comprehension",
    label: "Analyze AI discourse as rhetorical construct",
    description: "Analyze how AI is discussed in public, policy, and technical domains as a rhetorical construction — identifying framings, metaphors, implied audiences, and what arguments are foreclosed by dominant framings.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 21,
    aihumma_owns: true,
    bloom_level: "analyze"
  },
  {
    id: "CH-03",
    cluster: "CH",
    meta_cluster: "comprehension",
    label: "Apply humanistic methods to AI phenomena",
    description: "Apply humanistic research methods — ethnography, discourse analysis, close reading, oral history, archival research — to AI phenomena, organizations, and artifacts.",
    type: "S",
    specificity: "general",
    network_role: "integrative",
    jhu_coverage: 4,
    aihumma_owns: true,
    bloom_level: "apply"
  },
  {
    id: "CH-04",
    cluster: "CH",
    meta_cluster: "comprehension",
    label: "Critique AI in cultural forms",
    description: "Critically analyze AI as it appears in cultural forms — film, theatre, fiction, games, art — interpreting how these representations encode assumptions about intelligence, agency, and human-machine relations.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 16,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "CH-05",
    cluster: "CH",
    meta_cluster: "comprehension",
    label: "Evaluate claims about AI consciousness/intelligence",
    description: "Evaluate philosophical claims about AI consciousness, sentience, understanding, and general intelligence — drawing on philosophy of mind, cognitive science, and critical AI studies.",
    type: "S",
    specificity: "ai_specific",
    network_role: "foundational",
    jhu_coverage: 45,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "CH-06",
    cluster: "CH",
    meta_cluster: "comprehension",
    label: "Analyze AI through critical social lenses",
    description: "Analyze AI systems, their development, and their deployment through feminist, postcolonial, and critical race theory lenses — examining how power, identity, and structural inequality shape both the technology and its impacts.",
    type: "S",
    specificity: "general",
    network_role: "integrative",
    jhu_coverage: 6,
    aihumma_owns: true,
    bloom_level: "analyze"
  },

  // ─── EV: Ethics & Values ─────────────────────────────────────────────────

  {
    id: "EV-01",
    cluster: "EV",
    meta_cluster: "normative_judgment",
    label: "Apply ethical frameworks to AI decisions",
    description: "Apply major ethical frameworks (consequentialist, deontological, virtue ethics, care ethics, contractualism) to AI development and deployment decisions, identifying what each framework recommends and why.",
    type: "K",
    specificity: "general",
    network_role: "foundational",
    jhu_coverage: 24,
    aihumma_owns: false,
    bloom_level: "apply"
  },
  {
    id: "EV-02",
    cluster: "EV",
    meta_cluster: "normative_judgment",
    label: "Identify and analyze algorithmic bias",
    description: "Identify sources of algorithmic bias and discrimination, analyze cases where AI systems have produced disparate or harmful outcomes, and evaluate proposed technical and institutional remedies.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 12,
    aihumma_owns: false,
    bloom_level: "analyze"
  },
  {
    id: "EV-03",
    cluster: "EV",
    meta_cluster: "normative_judgment",
    label: "Evaluate responsible AI instruments",
    description: "Evaluate responsible AI instruments — model cards, impact assessments, red-teaming protocols, constitutional AI principles, AI principles statements — analyzing what governance theories they embody and what they leave unaddressed.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 10,
    aihumma_owns: true,
    bloom_level: "evaluate"
  },
  {
    id: "EV-04",
    cluster: "EV",
    meta_cluster: "normative_judgment",
    label: "Analyze ethics in high-stakes domains",
    description: "Analyze ethical dimensions of AI deployment in high-stakes domains (healthcare, criminal justice, hiring, national security) — applying domain-specific ethical norms alongside general AI ethics frameworks.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 12,
    aihumma_owns: false,
    bloom_level: "analyze"
  },
  {
    id: "EV-05",
    cluster: "EV",
    meta_cluster: "normative_judgment",
    label: "Distinguish procedural vs. structural ethics critique",
    description: "Distinguish procedural ethics (checklists, impact assessments, diversity audits) from structural critique (the system is itself the problem; ethics discourse is being used to forestall regulation) — and deploy both modes analytically.",
    type: "D",
    specificity: "general",
    network_role: "integrative",
    jhu_coverage: 1,
    aihumma_owns: true,
    bloom_level: "evaluate"
  },
  {
    id: "EV-06",
    cluster: "EV",
    meta_cluster: "normative_judgment",
    label: "Assess privacy/consent/data rights implications",
    description: "Assess privacy, consent, and data rights implications of AI systems — applying legal frameworks (GDPR, CCPA), philosophical theories of informational privacy, and emerging data governance models.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 5,
    aihumma_owns: true,
    bloom_level: "evaluate"
  },

  // ─── GP: Governance & Policy ──────────────────────────────────────────────

  {
    id: "GP-01",
    cluster: "GP",
    meta_cluster: "normative_judgment",
    label: "Compare AI regulatory frameworks",
    description: "Compare AI regulatory frameworks across major jurisdictions (EU AI Act, US EO and voluntary frameworks, UK approach, China's generative AI regulations, emerging Global South frameworks) — analyzing institutional design choices and political economy drivers.",
    type: "K",
    specificity: "ai_specific",
    network_role: "foundational",
    jhu_coverage: 15,
    aihumma_owns: false,
    bloom_level: "analyze"
  },
  {
    id: "GP-02",
    cluster: "GP",
    meta_cluster: "normative_judgment",
    label: "Apply institutional design to AI governance",
    description: "Apply institutional design principles (accountability structures, oversight mechanisms, enforcement architecture, principal-agent dynamics) to the problem of governing AI systems and AI development organizations.",
    type: "S",
    specificity: "general",
    network_role: "middle",
    jhu_coverage: 5,
    aihumma_owns: true,
    bloom_level: "apply"
  },
  {
    id: "GP-03",
    cluster: "GP",
    meta_cluster: "normative_judgment",
    label: "Use historical tech governance analogies",
    description: "Use historical technology governance cases (nuclear, pharmaceutical, aviation, finance, biosafety) as analytical lenses for AI governance — identifying which analogies hold, where they break down, and what is genuinely novel.",
    type: "S",
    specificity: "general",
    network_role: "integrative",
    jhu_coverage: 2,
    aihumma_owns: true,
    bloom_level: "analyze"
  },
  {
    id: "GP-04",
    cluster: "GP",
    meta_cluster: "normative_judgment",
    label: "Evaluate AI in public sector/national security",
    description: "Evaluate AI deployment in public sector and national security contexts — including military AI, intelligence applications, government service delivery, and the distinctive accountability challenges of state AI use.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 5,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "GP-05",
    cluster: "GP",
    meta_cluster: "normative_judgment",
    label: "Assess technical AI safety from governance standpoint",
    description: "Assess technical AI safety concepts (alignment, interpretability, RLHF, evals, red-teaming, frontier model thresholds) from a governance and policy standpoint — translating between safety research and regulatory/institutional design.",
    type: "S",
    specificity: "ai_specific",
    network_role: "integrative",
    jhu_coverage: 3,
    aihumma_owns: true,
    bloom_level: "evaluate"
  },
  {
    id: "GP-06",
    cluster: "GP",
    meta_cluster: "normative_judgment",
    label: "Analyze international AI competition/cooperation",
    description: "Analyze international AI competition and cooperation dynamics — including US-China strategic competition, multilateral governance institutions, export controls, and the prospects for international AI safety agreements.",
    type: "K",
    specificity: "ai_specific",
    network_role: "integrative",
    jhu_coverage: 2,
    aihumma_owns: true,
    bloom_level: "analyze"
  },

  // ─── RM: Research & Analytical Methods ───────────────────────────────────

  {
    id: "RM-01",
    cluster: "RM",
    meta_cluster: "productive_capacity",
    label: "Design/conduct qualitative research",
    description: "Design and conduct qualitative research relevant to AI governance — including elite interviewing, document analysis, process tracing, and case study methods — producing findings that are analytically rigorous and policy-relevant.",
    type: "S",
    specificity: "general",
    network_role: "foundational",
    jhu_coverage: 1,
    aihumma_owns: true,
    bloom_level: "create"
  },
  {
    id: "RM-02",
    cluster: "RM",
    meta_cluster: "productive_capacity",
    label: "Design/conduct computational/quantitative research",
    description: "Design and conduct computational or quantitative research, including statistical analysis, dataset construction, and empirical evaluation — or critically evaluate such research produced by others.",
    type: "S",
    specificity: "general",
    network_role: "foundational",
    jhu_coverage: 13,
    aihumma_owns: false,
    bloom_level: "create"
  },
  {
    id: "RM-03",
    cluster: "RM",
    meta_cluster: "productive_capacity",
    label: "Critically evaluate academic/policy research",
    description: "Critically evaluate academic papers and policy research — assessing methodological rigor, identifying limitations and assumptions, distinguishing strong from weak evidence, and situating findings in broader debates.",
    type: "S",
    specificity: "general",
    network_role: "foundational",
    jhu_coverage: 10,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "RM-04",
    cluster: "RM",
    meta_cluster: "productive_capacity",
    label: "Synthesize evidence into well-supported arguments",
    description: "Synthesize evidence from multiple sources (academic, policy, technical, journalistic) into coherent, well-supported arguments suitable for policy audiences — constructing claims that are defensible, appropriately hedged, and actionable.",
    type: "S",
    specificity: "general",
    network_role: "integrative",
    jhu_coverage: 9,
    aihumma_owns: true,
    bloom_level: "create"
  },
  {
    id: "RM-05",
    cluster: "RM",
    meta_cluster: "productive_capacity",
    label: "Use AI as research instrument critically",
    description: "Use generative AI tools as research instruments with critical awareness — leveraging their capabilities for literature synthesis, drafting, and analysis while recognizing their failure modes and maintaining epistemic independence.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 3,
    aihumma_owns: true,
    bloom_level: "apply"
  },

  // ─── CW: Communication & Writing ─────────────────────────────────────────

  {
    id: "CW-01",
    cluster: "CW",
    meta_cluster: "productive_capacity",
    label: "Produce policy genre writing for decision-makers",
    description: "Produce policy genre writing — memos, white papers, executive summaries, testimony, briefing documents — calibrated for decision-making audiences who are busy, consequential, and non-specialist.",
    type: "S",
    specificity: "general",
    network_role: "integrative",
    jhu_coverage: 7,
    aihumma_owns: true,
    bloom_level: "create"
  },
  {
    id: "CW-02",
    cluster: "CW",
    meta_cluster: "productive_capacity",
    label: "Write data-driven narratives for general audiences",
    description: "Write data-driven narratives for general audiences — integrating quantitative evidence, case material, and argument into compelling, accessible journalism or public-facing analysis.",
    type: "S",
    specificity: "general",
    network_role: "middle",
    jhu_coverage: 1,
    aihumma_owns: true,
    bloom_level: "create"
  },
  {
    id: "CW-03",
    cluster: "CW",
    meta_cluster: "productive_capacity",
    label: "Translate technical AI concepts for lay audiences",
    description: "Translate technical AI concepts, research findings, and governance debates into accessible language for non-specialist audiences — including elected officials, journalists, civil society organizations, and the general public.",
    type: "S",
    specificity: "ai_specific",
    network_role: "integrative",
    jhu_coverage: 5,
    aihumma_owns: true,
    bloom_level: "create"
  },
  {
    id: "CW-04",
    cluster: "CW",
    meta_cluster: "productive_capacity",
    label: "Produce persuasive arguments across genres",
    description: "Produce persuasive arguments calibrated to different genres and audiences — op-eds, think pieces, grant narratives, funding proposals — adapting the same core argument to different rhetorical situations.",
    type: "S",
    specificity: "general",
    network_role: "middle",
    jhu_coverage: 1,
    aihumma_owns: true,
    bloom_level: "create"
  },
  {
    id: "CW-05",
    cluster: "CW",
    meta_cluster: "productive_capacity",
    label: "Use GenAI to enhance writing/communication workflows",
    description: "Use generative AI tools to enhance research and communication workflows — drafting, synthesis, editing, translation — while maintaining authorial voice, intellectual independence, and appropriate attribution.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 0,
    aihumma_owns: true,
    bloom_level: "apply"
  },
  {
    id: "CW-06",
    cluster: "CW",
    meta_cluster: "productive_capacity",
    label: "Direct and evaluate AI-assisted writing for policy quality",
    description: "Apply expert judgment to AI-assisted writing workflows — directing tools with policy genre knowledge and domain expertise, evaluating output against professional standards, recognizing plausible-but-wrong analysis, and maintaining author accountability for what goes out under your name. The higher-order skill that makes the difference between using AI tools and using them well in high-stakes policy contexts.",
    type: "S",
    specificity: "ai_specific",
    network_role: "integrative",
    jhu_coverage: 0,
    aihumma_owns: true,
    bloom_level: "evaluate"
  },

  // ─── HI: Human-AI Interaction & Design ───────────────────────────────────

  {
    id: "HI-01",
    cluster: "HI",
    meta_cluster: "productive_capacity",
    label: "Apply human-centered design to AI systems",
    description: "Apply human-centered design principles and methods (user research, participatory design, iterative prototyping) to AI system design — centering the needs, values, and vulnerabilities of end users.",
    type: "S",
    specificity: "general",
    network_role: "foundational",
    jhu_coverage: 13,
    aihumma_owns: false,
    bloom_level: "apply"
  },
  {
    id: "HI-02",
    cluster: "HI",
    meta_cluster: "productive_capacity",
    label: "Design for AI explainability and user trust",
    description: "Design AI systems and interfaces for explainability and appropriate user trust — including interpretability techniques, uncertainty communication, and calibrating user reliance on AI outputs.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 7,
    aihumma_owns: false,
    bloom_level: "apply"
  },
  {
    id: "HI-03",
    cluster: "HI",
    meta_cluster: "productive_capacity",
    label: "Analyze augmentation vs. replacement dynamics",
    description: "Analyze augmentation versus replacement dynamics in human-AI interaction — distinguishing contexts where AI enhances human capability from those where it displaces human judgment, and evaluating the governance implications of each.",
    type: "S",
    specificity: "ai_specific",
    network_role: "integrative",
    jhu_coverage: 1,
    aihumma_owns: true,
    bloom_level: "analyze"
  },
  {
    id: "HI-04",
    cluster: "HI",
    meta_cluster: "productive_capacity",
    label: "Evaluate human-AI teaming structures",
    description: "Evaluate human-AI teaming structures — examining how humans and AI systems collaborate in professional contexts, what role allocation produces good outcomes, and how accountability is maintained in hybrid decision-making.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 2,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "HI-05",
    cluster: "HI",
    meta_cluster: "productive_capacity",
    label: "Assess emerging human-AI modalities",
    description: "Assess emerging human-AI interaction modalities — including agentic AI systems, brain-computer interfaces, embodied AI, and multi-agent environments — analyzing their implications for human agency, oversight, and governance.",
    type: "K",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 3,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },

  // ─── SD: Societal & Domain Applications ──────────────────────────────────

  {
    id: "SD-01",
    cluster: "SD",
    meta_cluster: "domain_application",
    label: "Evaluate AI applications in healthcare",
    description: "Evaluate AI applications in healthcare and public health — including clinical decision support, drug discovery, population health surveillance, and the regulatory and equity challenges of medical AI deployment.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 10,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "SD-02",
    cluster: "SD",
    meta_cluster: "domain_application",
    label: "Analyze AI in national security contexts",
    description: "Analyze AI applications in national security — autonomous weapons, intelligence analysis, cyber operations, military logistics — and the legal, strategic, and ethical frameworks for governing lethal AI systems.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 8,
    aihumma_owns: false,
    bloom_level: "analyze"
  },
  {
    id: "SD-03",
    cluster: "SD",
    meta_cluster: "domain_application",
    label: "Assess AI impact on labor/inequality",
    description: "Assess AI's impact on labor markets, economic inequality, and migration — analyzing automation dynamics, distributional effects, and policy responses including social insurance, retraining, and labor market regulation.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 5,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "SD-04",
    cluster: "SD",
    meta_cluster: "domain_application",
    label: "Examine AI in democracy and political discourse",
    description: "Examine AI's impact on democratic processes and political discourse — including disinformation, political advertising, electoral integrity, and the governance of AI-generated political content.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 7,
    aihumma_owns: false,
    bloom_level: "analyze"
  },
  {
    id: "SD-05",
    cluster: "SD",
    meta_cluster: "domain_application",
    label: "Apply AI in creative domains",
    description: "Apply and critically evaluate AI in creative domains — including generative art, music, writing, performance, and the cultural industries — analyzing questions of authorship, creativity, labor displacement, and cultural value.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 6,
    aihumma_owns: false,
    bloom_level: "apply"
  },
  {
    id: "SD-06",
    cluster: "SD",
    meta_cluster: "domain_application",
    label: "Evaluate AI in educational settings",
    description: "Evaluate AI applications in educational settings — including adaptive learning, AI tutors, automated grading, and the pedagogical and equity implications of AI-mediated education.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 4,
    aihumma_owns: false,
    bloom_level: "evaluate"
  },
  {
    id: "SD-07",
    cluster: "SD",
    meta_cluster: "domain_application",
    label: "Analyze AI in business and marketing",
    description: "Analyze AI applications in business strategy, operations, and marketing — including personalization, demand forecasting, process automation, and the competitive dynamics of AI adoption.",
    type: "S",
    specificity: "ai_specific",
    network_role: "middle",
    jhu_coverage: 11,
    aihumma_owns: false,
    bloom_level: "analyze"
  }

]; // end TAXONOMY_NODES


/**
 * TAXONOMY EDGES
 * ==============
 * Directed prerequisite / enables relationships.
 * source → target: developing source outcome positions a student to develop target.
 *
 * Edge types:
 *   "prerequisite" — source is logically prior; target is hard to develop without source
 *   "scaffolds"    — source makes target easier/richer but is not strictly required
 *   "integrates"   — target draws on source as one of several inputs
 *
 * Strength: 1 (weak) to 3 (strong)
 */
window.TAXONOMY_EDGES = [

  // Within TL
  { source: "TL-06", target: "TL-01", type: "prerequisite", strength: 3,
    rationale: "Understanding paradigm differences precedes understanding specific model types" },
  { source: "TL-06", target: "TL-04", type: "prerequisite", strength: 3,
    rationale: "LLM architecture is one paradigm; knowing the paradigm landscape contextualizes it" },
  { source: "TL-01", target: "TL-03", type: "scaffolds", strength: 2,
    rationale: "Conceptual model knowledge supports implementation, though hands-on coding has its own logic" },
  { source: "TL-01", target: "TL-05", type: "scaffolds", strength: 2,
    rationale: "Mathematical foundations make more sense when anchored to specific model architectures" },
  { source: "TL-01", target: "TL-07", type: "prerequisite", strength: 2,
    rationale: "Evaluating performance requires understanding what the model is trying to do" },
  { source: "TL-04", target: "TL-07", type: "scaffolds", strength: 2,
    rationale: "Understanding LLM training enables understanding LLM-specific failure modes" },
  { source: "TL-07", target: "TL-02", type: "prerequisite", strength: 3,
    rationale: "Reading capability evaluations as arguments requires understanding what evaluations measure" },

  // Within CH
  { source: "CH-01", target: "CH-02", type: "scaffolds", strength: 2,
    rationale: "Historical situating enriches rhetorical analysis of current AI discourse" },
  { source: "CH-02", target: "CH-06", type: "integrates", strength: 2,
    rationale: "Critical race/feminist analysis extends discourse analysis to structural power questions" },
  { source: "CH-05", target: "CH-04", type: "scaffolds", strength: 1,
    rationale: "Philosophical literacy on AI consciousness enriches reading of cultural representations" },

  // Within EV
  { source: "EV-01", target: "EV-02", type: "prerequisite", strength: 2,
    rationale: "Analyzing bias requires a normative framework to say what the bias is against" },
  { source: "EV-01", target: "EV-03", type: "prerequisite", strength: 3,
    rationale: "Evaluating responsible AI instruments requires understanding the frameworks they claim to embody" },
  { source: "EV-01", target: "EV-04", type: "prerequisite", strength: 2,
    rationale: "Domain-specific ethics applications presuppose command of the frameworks" },
  { source: "EV-01", target: "EV-05", type: "prerequisite", strength: 3,
    rationale: "The procedural/structural distinction only makes sense against a background in ethical frameworks" },
  { source: "EV-03", target: "EV-05", type: "prerequisite", strength: 3,
    rationale: "Critiquing ethics instruments as procedural requires first being able to evaluate what they do" },
  { source: "EV-01", target: "EV-06", type: "scaffolds", strength: 2,
    rationale: "Privacy ethics draws on rights-based and autonomy frameworks" },

  // Within GP
  { source: "GP-01", target: "GP-02", type: "scaffolds", strength: 2,
    rationale: "Comparative frameworks provide cases from which institutional design lessons can be drawn" },
  { source: "GP-01", target: "GP-03", type: "prerequisite", strength: 2,
    rationale: "Using historical analogies requires knowing both the AI regulatory landscape and the analogous regime" },
  { source: "GP-01", target: "GP-04", type: "scaffolds", strength: 2,
    rationale: "Public sector AI governance applies the general regulatory landscape to specific state contexts" },
  { source: "GP-01", target: "GP-06", type: "prerequisite", strength: 2,
    rationale: "International competition analysis builds on understanding what each jurisdiction has chosen domestically" },
  { source: "GP-02", target: "GP-05", type: "integrates", strength: 2,
    rationale: "Governing frontier AI requires institutional design thinking applied to safety evaluation" },

  // Within RM
  { source: "RM-03", target: "RM-04", type: "prerequisite", strength: 3,
    rationale: "Synthesizing evidence into arguments requires being able to evaluate the evidence" },
  { source: "RM-01", target: "RM-04", type: "integrates", strength: 2,
    rationale: "Qualitative data from fieldwork feeds synthesis arguments" },
  { source: "RM-02", target: "RM-04", type: "integrates", strength: 2,
    rationale: "Quantitative evidence feeds synthesis arguments" },
  { source: "RM-03", target: "RM-05", type: "prerequisite", strength: 2,
    rationale: "Using AI as a research tool critically requires first being able to evaluate research quality" },

  // Within CW
  { source: "RM-04", target: "CW-01", type: "prerequisite", strength: 3,
    rationale: "Policy writing requires the ability to synthesize evidence into defensible claims" },
  { source: "RM-04", target: "CW-02", type: "prerequisite", strength: 2,
    rationale: "Data-driven narrative requires evidence synthesis" },
  { source: "CW-01", target: "CW-03", type: "scaffolds", strength: 2,
    rationale: "Translating for lay audiences is a variation on policy genre calibration" },
  { source: "CW-01", target: "CW-04", type: "scaffolds", strength: 2,
    rationale: "Persuasive genre writing builds on policy memo skill" },
  { source: "CW-05", target: "CW-06", type: "prerequisite", strength: 2,
    rationale: "Tool fluency is prerequisite to expert direction and evaluation of AI-assisted output" },
  { source: "CW-01", target: "CW-06", type: "prerequisite", strength: 3,
    rationale: "Policy genre knowledge is prerequisite to evaluating whether AI output meets those standards" },

  // Cross-cluster: TL → other clusters
  { source: "TL-02", target: "GP-05", type: "prerequisite", strength: 3,
    rationale: "Governing frontier AI safety requires reading technical safety documents as arguments — the F1 signature skill" },
  { source: "TL-02", target: "CW-03", type: "prerequisite", strength: 2,
    rationale: "Translating technical content for lay audiences requires first being able to read it critically yourself" },
  { source: "TL-02", target: "CW-06", type: "scaffolds", strength: 2,
    rationale: "Reading AI documents as arguments scaffolds evaluating AI-generated analysis on technical topics" },
  { source: "TL-06", target: "GP-01", type: "scaffolds", strength: 2,
    rationale: "Comparing regulatory frameworks is enriched by understanding what AI capabilities each regime is trying to address" },
  { source: "TL-07", target: "EV-02", type: "scaffolds", strength: 2,
    rationale: "Analyzing algorithmic bias benefits from understanding how AI performance is measured" },
  { source: "TL-07", target: "GP-05", type: "prerequisite", strength: 2,
    rationale: "Governing AI safety requires understanding AI evaluation" },

  // Cross-cluster: CH → other clusters
  { source: "CH-01", target: "GP-03", type: "prerequisite", strength: 3,
    rationale: "Historical governance analogies require historical thinking about technology and power" },
  { source: "CH-02", target: "EV-05", type: "integrates", strength: 2,
    rationale: "Recognizing ethics washing requires the rhetorical analysis skills to see how ethics language functions" },
  { source: "CH-06", target: "EV-05", type: "integrates", strength: 2,
    rationale: "Structural critique of AI ethics draws directly on critical race/feminist analysis" },
  { source: "CH-03", target: "RM-01", type: "prerequisite", strength: 2,
    rationale: "Qualitative research methods for AI governance (RM-01) is an application of humanistic methods (CH-03)" },

  // Cross-cluster: EV → GP
  { source: "EV-01", target: "GP-02", type: "integrates", strength: 2,
    rationale: "Institutional design for AI governance requires ethical frameworks to specify what is being governed toward" },
  { source: "EV-05", target: "GP-05", type: "integrates", strength: 2,
    rationale: "Governing frontier AI safety requires being able to distinguish procedural from structural approaches to alignment" },

  // Cross-cluster: GP → CW
  { source: "GP-01", target: "CW-01", type: "integrates", strength: 2,
    rationale: "Policy memos about AI governance draw on comparative regulatory knowledge" },

  // Cross-cluster: RM → CW
  { source: "RM-01", target: "CW-01", type: "integrates", strength: 2,
    rationale: "Field research findings feed policy documents" },
  { source: "RM-04", target: "CW-04", type: "prerequisite", strength: 2,
    rationale: "Persuasive writing requires evidence synthesis" },

  // SD scaffolding into other clusters (domain knowledge enriches analysis)
  { source: "SD-01", target: "EV-04", type: "scaffolds", strength: 2,
    rationale: "Healthcare domain knowledge enriches analysis of high-stakes AI ethics" },
  { source: "SD-02", target: "GP-04", type: "scaffolds", strength: 2,
    rationale: "National security domain knowledge scaffolds public sector AI governance analysis" },
  { source: "SD-04", target: "GP-06", type: "scaffolds", strength: 1,
    rationale: "Understanding AI in democratic discourse contextualizes international competition analysis" }

]; // end TAXONOMY_EDGES


/**
 * AIHUMMA COURSE MAPPINGS
 * =======================
 * The 12 proposed AIHUMMA courses tagged with outcome codes.
 * Each course specifies:
 *   primary_codes   — outcomes that are central assessment targets
 *   secondary_codes — outcomes that are addressed but not the core focus
 *   signature_code  — the single most distinctive outcome this course owns
 *   gap_analysis    — whether this course fills a JHU gap or overlaps with existing electives
 */
window.AIHUMMA_COURSES = [

  // ─── Foundation Layer ───────────────────────────────────────────────────

  {
    id: "F1",
    title: "How AI Systems Work (For People Who Don't Build Them)",
    layer: "foundation",
    credits: 3,
    semester: 1,
    primary_codes: ["TL-02", "TL-01", "TL-04", "TL-06", "TL-07"],
    secondary_codes: ["CH-02", "RM-03", "GP-05"],
    signature_code: "TL-02",
    gap_level: "fills_gap",
    gap_note: "TL-02 has only 11 courses in JHU catalog, none approaching it as a *policy reading skill*. This is the F1 differentiator.",
    overlap_with_electives: ["TL-01", "TL-04", "TL-06"],
    description_note: "Unique pedagogy: technical concepts learned through governance artifacts (model cards, capability evaluations, RSPs) rather than textbooks. The implicit lesson is that reading these documents critically is itself a skill."
  },
  {
    id: "F2",
    title: "Institutions, Governance, and the Regulation of Risky Technologies",
    layer: "foundation",
    credits: 3,
    semester: 1,
    primary_codes: ["GP-01", "GP-02", "GP-03"],
    secondary_codes: ["CH-01", "EV-01", "GP-04", "SD-02"],
    signature_code: "GP-03",
    gap_level: "fills_gap",
    gap_note: "GP-03 appears in only 2 JHU courses. GP-02 (institutional design) in only 5. F2 owns historical governance analogies almost exclusively across JHU.",
    overlap_with_electives: ["GP-01", "GP-04"],
    description_note: "Uses nuclear/pharma/aviation/finance/biosafety as analytical lenses. Students arrive at GovAI already knowing the language of the IAEA inspection regime and 737 MAX accountability failure."
  },
  {
    id: "F3",
    title: "Ethics, Values, and AI: From Philosophy to Policy",
    layer: "foundation",
    credits: 3,
    semester: "1 or 2",
    primary_codes: ["EV-01", "EV-03", "EV-05"],
    secondary_codes: ["EV-02", "EV-04", "EV-06", "CH-06", "GP-02"],
    signature_code: "EV-05",
    gap_level: "fills_gap",
    gap_note: "EV-05 (distinguishing substantive from procedural ethics) has only 1 course across the full catalog — the sharpest gap in the taxonomy. F3 must own it; no other required course builds to this skill.",
    overlap_with_electives: ["EV-01", "EV-02", "EV-04"],
    description_note: "Course arc: landscape (what counts as an AI ethics problem) → philosophical frameworks → machine agency and moral accountability → pragmatic implementation and governance critique. Part 4 uses privacy/consent/data rights regimes (EV-06) as case studies in ethics-as-governance before asking which implementations are substantive."
  },
  {
    id: "F4",
    title: "Writing for Policy: Genre, Audience, and Argument",
    layer: "foundation",
    credits: 3,
    semester: 2,
    primary_codes: ["CW-01", "CW-03", "CW-04", "CW-06"],
    secondary_codes: ["CW-02", "CW-05", "RM-04", "TL-02"],
    signature_code: "CW-01",
    gap_level: "fills_gap",
    gap_note: "CW-01 at only 7 courses; CW-02 and CW-04 at 1 each; CW-05 and CW-06 entirely absent. CW cluster is the most uniformly sparse in the catalog. F4 is non-redundant with anything that exists.",
    overlap_with_electives: [],
    description_note: "Workshop-based genre training: policy memo, executive summary, white paper, Congressional testimony, op-ed, grant proposals. Final assignment converts F1 capability translation into three formats."
  },

  // ─── Track A: Policy and Governance Research ─────────────────────────────

  {
    id: "A1",
    title: "Comparative AI Regulation",
    layer: "track_a",
    credits: 3,
    primary_codes: ["GP-01", "GP-06"],
    secondary_codes: ["GP-04", "CH-02", "EV-03", "SD-04"],
    signature_code: "GP-06",
    gap_level: "fills_gap",
    gap_note: "GP-06 (international competition/cooperation) appears in only 2 JHU courses. GP-01 has moderate coverage (15 courses) but A1 takes a deeper institutional analysis approach than survey courses.",
    overlap_with_electives: ["GP-01"],
    description_note: "Deep dive into EU AI Act, UK, US EO, China regulations, Global South. Not doctrinal comparison — comparative *institutional* analysis of why different political economies produced different regulatory forms."
  },
  {
    id: "A2",
    title: "Research Methods for AI Governance",
    layer: "track_a",
    credits: 3,
    primary_codes: ["RM-01", "RM-04", "CH-03"],
    secondary_codes: ["RM-02", "RM-03", "RM-05", "CW-01"],
    signature_code: "RM-01",
    gap_level: "fills_gap",
    gap_note: "RM-01 (qualitative research) has only 1 course in JHU catalog. CH-03 (humanistic methods applied to AI) has only 4. A2 fills an almost empty methodological niche for policy-relevant qualitative work.",
    overlap_with_electives: ["RM-02", "RM-03"],
    description_note: "The craft of research GovAI and CSET actually publish: elite interviewing, document analysis, process tracing. Miles Brundage's career arc as a case study in producing policy-relevant research."
  },
  {
    id: "A3",
    title: "Seminar: Frontier AI Risk and Governance",
    layer: "track_a",
    credits: 3,
    primary_codes: ["GP-05", "TL-02", "EV-05"],
    secondary_codes: ["TL-07", "TL-04", "GP-02", "GP-06", "CH-05", "CH-06", "RM-03"],
    signature_code: "GP-05",
    gap_level: "fills_gap",
    gap_note: "GP-05 (technical AI safety from governance standpoint) in only 3 courses. A3 is the most intellectually demanding course in the program and the one most directly aimed at GovAI/METR/Redwood research roles.",
    overlap_with_electives: ["TL-07", "CH-05"],
    description_note: "Reads both the longtermist literature (Ord, Bostrom, Christiano, Davidson) AND the critics (Gebru, Marcus, Crawford). Students must form defensible views and engage with both communities."
  },

  // ─── Track B: Operations, Programs, and Communications ──────────────────

  {
    id: "B1",
    title: "Program Design and Convening",
    layer: "track_b",
    credits: 3,
    primary_codes: ["RM-04", "CW-04"],
    secondary_codes: ["EV-03", "HI-01", "SD-03", "GP-02"],
    signature_code: "RM-04",
    gap_level: "partial_gap",
    gap_note: "No JHU course teaches fellowship design or workshop convening as intellectual craft. RM-04 and CW-04 are the closest taxonomy codes but B1 is more operational than the taxonomy fully captures.",
    overlap_with_electives: [],
    description_note: "Program design as intellectual craft: fellowships, workshops, field-building initiatives. Draws on org sociology, adult learning theory, and history of institutions like Asilomar and Santa Fe Institute."
  },
  {
    id: "B2",
    title: "Strategic Communications for AI Governance",
    layer: "track_b",
    credits: 3,
    primary_codes: ["CW-03", "CW-04", "CW-01"],
    secondary_codes: ["CH-02", "RM-03", "CW-05", "CW-06", "GP-01"],
    signature_code: "CW-03",
    gap_level: "fills_gap",
    gap_note: "CW-03 and CW-04 nearly absent from JHU catalog. Strategic (not corporate) communications for policy translation — the specific skill of building organizational narrative in the AI governance space.",
    overlap_with_electives: [],
    description_note: "Studies real cases: how CAIS has positioned itself, how GovAI builds its public profile, how AI Now uses media as part of advocacy. Includes a communications audit and strategic plan for a fictional AI governance nonprofit."
  },
  {
    id: "B3",
    title: "Fundraising, Operations, and Field-Building",
    layer: "track_b",
    credits: 3,
    primary_codes: ["CW-04", "CW-01"],
    secondary_codes: ["GP-02", "EV-03", "RM-04"],
    signature_code: "CW-04",
    gap_level: "fills_gap",
    gap_note: "Grant writing and operations for mission-driven orgs taught nowhere in the JHU AI catalog. Trains for CAIS Operations Associate and PAI program staff roles that nobody else is specifically targeting.",
    overlap_with_electives: [],
    description_note: "The 'unsexy course that makes everything else possible.' Open Philanthropy, SFF, Longview, MacArthur, Hewlett. How to write a grant proposal. How to design operations infrastructure for a small mission-driven org."
  },

  // ─── Practicum and Capstone ───────────────────────────────────────────────

  {
    id: "P1",
    title: "Field Practicum",
    layer: "practicum",
    credits: 3,
    primary_codes: ["CW-01", "RM-04"],
    secondary_codes: ["RM-01", "RM-05", "CW-03"],
    signature_code: "CW-01",
    gap_level: "fills_gap",
    gap_note: "Applied practice in a partner org (GovAI, CAIS, AI Now, city-level AI body). Outcome codes are track-dependent — A-track students emphasize RM-01/RM-04; B-track students emphasize CW-01/CW-03.",
    overlap_with_electives: [],
    description_note: "8-week engagement with a partner organization working on a real project. GovEx's existing government relationships are an asset for city and federal AI body placements."
  },
  {
    id: "P2",
    title: "Capstone Seminar",
    layer: "practicum",
    credits: 3,
    primary_codes: ["RM-04", "CW-01"],
    secondary_codes: ["RM-03", "CW-03", "CW-04"],
    signature_code: "RM-04",
    gap_level: "fills_gap",
    gap_note: "Weekly practitioner guests who respond to work-in-progress creates direct network effect. Not replicated anywhere in JHU AI curriculum.",
    overlap_with_electives: [],
    description_note: "Faculty-mentored development of capstone project with peer critique. Every session includes a practitioner from a target org — creating real intellectual exchanges that may lead to hiring."
  },
  {
    id: "P3",
    title: "Capstone Project",
    layer: "practicum",
    credits: 3,
    primary_codes: ["RM-04", "CW-01", "CW-04"],
    secondary_codes: ["RM-01", "CW-03", "GP-05", "EV-05"],
    signature_code: "CW-01",
    gap_level: "fills_gap",
    gap_note: "Substantive deliverable chosen by student: GovAI-quality white paper, program design document, fellowship application portfolio, or strategic communications plan.",
    overlap_with_electives: [],
    description_note: "Four formats: policy research report (15-25 pages), program design document, fellowship application portfolio, or strategic communications plan with sample outputs."
  }

]; // end AIHUMMA_COURSES
