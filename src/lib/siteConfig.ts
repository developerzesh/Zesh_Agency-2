// ── Brand Identity ────────────────────────────────────────
export const siteConfig = {
  name: 'Zesh Agency',
  tagline: 'Strategic Growth Consultancy',
  headline: 'Growth, marketed.',
  description: 'We scale brands through high-converting web engineering, search engine optimization (SEO), and generative search presence (AEO & GEO).',
  email: 'hello@zesh.agency',
  careersEmail: 'careers@zesh.agency',
  year: 2026,
  social: ['Twitter', 'LinkedIn', 'Dribbble'],
} as const;

// ── Offices ───────────────────────────────────────────────
export const offices = [
  { city: 'New York', type: 'HQ', email: 'ny@zesh.agency' },
  { city: 'London', type: 'Studio', email: 'ldn@zesh.agency' },
  { city: 'Tokyo', type: 'Studio', email: 'tky@zesh.agency' },
] as const;

// ── Navigation ────────────────────────────────────────────
export const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Insights', path: '/insights' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
] as const;

// ── Hero Section ──────────────────────────────────────────
export const heroContent = {
  badge: 'Trusted by brands backed by META and Shark Tank',
  headline: 'Empowering businesses with search optimization, generative discovery, and modern growth systems.',
  description: 'We are a strategic growth consultancy. We scale brands through high-converting web engineering, search engine optimization (SEO), and generative search presence (AEO & GEO). No vanity metrics. Just clear, predictable pipeline growth.',
  primaryCTA: { label: 'Book a Discovery Call', path: '/contact' },
  secondaryCTA: { label: 'View Case Studies', path: '/case-studies' },
  microcopy: 'Trusted by billion-dollar enterprises and powered by top-tier expertise.',
} as const;

// ── Trust Bar ─────────────────────────────────────────────
export const trustLabel = 'Retained by leading brands.';

export const trustClients = [
  'SaaS Platforms', 'Enterprise Tech', 'Luxury Real Estate', 'Medical Clinics',
  'Fortune 500', 'Healthcare Networks', 'Architecture Firms', 'Professional Services',
] as const;

export const trustLogos = [
  { name: 'SaaS Platforms', mark: 'SP' },
  { name: 'Enterprise Tech', mark: 'ET' },
  { name: 'Luxury Real Estate', mark: 'LR' },
  { name: 'Medical Clinics', mark: 'MC' },
  { name: 'Fortune 500', mark: 'F5' },
  { name: 'Healthcare Networks', mark: 'HN' },
  { name: 'Architecture Firms', mark: 'AF' },
  { name: 'Professional Services', mark: 'PS' },
] as const;

// ── Stats ─────────────────────────────────────────────────
export const stats = [
  { value: '80%', label: 'Keywords in top 5 in 3 months' },
  { value: '350%', label: 'Highest ROAS delivered' },
  { value: '10x', label: 'Revenue increase in 6 months' },
] as const;

// ── Values ────────────────────────────────────────────────
export const values = [
  { title: 'Direct Communication', description: 'We do not use corporate euphemisms or hide behind marketing fluff. We tell you exactly what is failing, why it\'s failing, and how we are correcting it.' },
  { title: 'Senior Execution Only', description: 'Your systems are designed, coded, and optimized under direct founder oversight. Our founders personally strategize and supervise every step.' },
  { title: 'Revenue Alignment', description: 'Pageviews mean nothing if your sales demo pipeline is empty. Every keyword we target and page we build is chosen because it connects to an active buyer.' },
  { title: 'Operational Respect', description: 'We believe great work happens when talented operators are given the quiet focus to solve complex problems. We meet weekly, execute quickly, and respect your team\'s focus.' },
] as const;

// ── Why Choose Us ─────────────────────────────────────────
export const reasons = [
  {
    number: '01', title: 'Strategic Transparency',
    description: 'We don\'t hide performance data behind marketing jargon. You get direct access to real-time dashboards showing pipeline value, client acquisition cost (CAC), and exact ranking distribution.'
  },
  {
    number: '02', title: 'Founder Oversight',
    description: 'Your systems are designed, coded, and optimized under direct founder oversight. Our founders personally strategize and supervise every step to ensure absolute technical and strategic alignment.'
  },
  {
    number: '03', title: 'Retainer Flexibility',
    description: 'No 1-year or 6-month retainer traps — our relationships are built on continuous value and trust. If we aren\'t moving the needle, we adjust the roadmap dynamically.'
  },
] as const;

export const aboutStats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '40+', label: 'Clients Worldwide' },
  { value: '12', label: 'Industry Awards' },
  { value: '98%', label: 'Client Retention' },
] as const;

// ── Solutions ─────────────────────────────────────────────
export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  outcomes: string[];
  roadmap: RoadmapPhase[];
}

export const solutions: Solution[] = [
  {
    slug: 'seo', title: 'Search Engine Optimization', shortTitle: 'SEO',
    tagline: 'Technical structures that outrank competitors.',
    description: 'Modern SEO is a technical battle. Search engines favor lightning-fast page loading speeds, semantic content depth, and strict structural hierarchy. We build programmatic frameworks that make indexing effortless for crawlers.',
    features: ['Technical SEO Architecture', 'Intent-First Content Clusters', 'Programmatic Hub Development', 'Competitor Search Theft', 'Core Web Vitals Engineering', 'Search Console Refinement'],
    outcomes: ['+312% average organic traffic growth', 'Top-3 placement for core intent terms', 'Elimination of dependency on paid keyword auctions'],
    roadmap: [
      { phase: '01', title: 'Code Architecture Correction', description: 'Re-coding file structures, correcting core web vitals, and eliminating server bottlenecks.' },
      { phase: '02', title: 'Programmatic Hub Deployment', description: 'Deployment of intent-first programmatic landing hubs and high-value search assets.' },
      { phase: '03', title: 'Indexation & Refinement', description: 'Indexation scans verification, analytics tag testing, and search console refinement.' },
    ],
  },
  {
    slug: 'aeo', title: 'Answer Engine Optimization', shortTitle: 'AEO',
    tagline: 'Securing citations inside conversational AI models.',
    description: 'Conversational models evaluate semantic trust networks. To win AEO, your brand must exist in high-authority reference databases, possess clean JSON-LD schemas, and maintain active, verified reviews that LLM scrapers scan.',
    features: ['LLM Reference Mapping', 'Conversational Prompt Auditing', 'Semantic Schema Declarations', 'Citation Tracking', 'Entity Relationship Mapping', 'Knowledge Graph Optimization'],
    outcomes: ['Direct citations in Siri, Claude, and ChatGPT', 'High-trust inbound requests', 'AI citation share increase'],
    roadmap: [
      { phase: '01', title: 'Citation Audit', description: 'Base recommendation audit across major LLM models and citation maps analysis.' },
      { phase: '02', title: 'Schema Engineering', description: 'Custom JSON-LD schema engineering and entity relationship graph declaration.' },
      { phase: '03', title: 'Sync & Track', description: 'Database nodes synchronization and live citation share tracking.' },
    ],
  },
  {
    slug: 'geo', title: 'Generative Engine Optimization', shortTitle: 'GEO',
    tagline: 'Aligning your brand with synthetic search queries.',
    description: 'Generative search engines compile multiple database queries to write real-time business summaries. We optimize your website structures so your domain is cited as the primary authority in AI-generated answers.',
    features: ['Retrieval-Augmented Graph Syncing', 'Perplexity Context Targeting', 'Real-Time AI Indexing Syncs', 'SGE Citation Audits', 'Context-Aware Optimization', 'AI Index Audit Monitoring'],
    outcomes: ['Verified citations in Google Gemini and Perplexity', 'Driving highly educated prospects to your pipeline', 'AI recommendation presence'],
    roadmap: [
      { phase: '01', title: 'Citation Audit', description: 'SGE citation audits and AI search indexing scan profiles mapping.' },
      { phase: '02', title: 'RAG Optimization', description: 'Coding retrieval-augmented generation (RAG) structural optimizations.' },
      { phase: '03', title: 'Monitor & Cover', description: 'Live context-aware recommendation monitoring and content coverage loops.' },
    ],
  },
  {
    slug: 'web-dev', title: 'Growth Engineering & Website Development', shortTitle: 'Web Dev',
    tagline: 'Zero-bloat static engines built for speed and conversions.',
    description: 'Most websites are weighed down by heavy WordPress plugins and unoptimized code structures. We build on modern static stacks using lightweight vanilla HTML, CSS, and clean Javascript — designed for crawler indexing and user experience.',
    features: ['Headless Static Development', 'Frictionless Intake Funnels', 'Core Web Vitals Engineering', 'Conversion Pipeline Engineering', 'API CRM Integration', 'PageSpeed Optimization'],
    outcomes: ['Average load speeds under 0.5s', 'Conversion rate increases up to 40%', 'Zero code dependency on heavy third-party plugins'],
    roadmap: [
      { phase: '01', title: 'Speed & UX Audit', description: 'Speed bottleneck analysis, intake form UX wireframes, and responsive schema mapping.' },
      { phase: '02', title: 'Headless Build', description: 'Headless frontend code engineering using modern CSS/JS libraries.' },
      { phase: '03', title: 'Integration & Validation', description: 'API CRM connections, database field mappings, and PageSpeed validation.' },
    ],
  },
  {
    slug: 'local-seo', title: 'Local SEO Dominance', shortTitle: 'Local SEO',
    tagline: 'Dominate local search maps and local organic intent.',
    description: 'Local search dominance requires precise geo-targeting. We construct localized schema graphs, optimize Google Business Profile assets, and deploy dynamic regional pages that load instantly for local prospects.',
    features: ['Google Map Pack Optimization', 'Programmatic Location Hubs', 'Local Review Acquisition Systems', 'Directory Synchronization', 'Regional Citation Building', 'Multi-Location Schema'],
    outcomes: ['#1 in target geo-coordinates', 'Significant increases in local calls', 'Clean local index coverage'],
    roadmap: [
      { phase: '01', title: 'Location Audit', description: 'Location coordinate maps analysis and Google Business Profile listing audits.' },
      { phase: '02', title: 'Hub Deployment', description: 'Programmatic local page deployment and regional directory synchronization.' },
      { phase: '03', title: 'Funnel Automation', description: 'Review funnel automation, map pack position monitoring, and local lead routing.' },
    ],
  },
  {
    slug: 'lead-gen', title: 'Scalable Lead Generation', shortTitle: 'Lead Gen',
    tagline: 'Predictable pipelines from high-intent inbound search.',
    description: 'High-converting lead gen combines intuitive UI layout with real-time database enrichment. We design multi-step intake forms that qualify buyers before scheduling calls, reducing sales friction.',
    features: ['Automated Intake Flows', 'HubSpot & CRM Syncing', 'Data Enrichment Tools', 'Intent Scoring', 'Dynamic Lead Routing', 'Attribution Dashboards'],
    outcomes: ['Reductions in unqualified meeting bookings', 'Higher conversion rates on intake pages', 'Automated pipeline attribution'],
    roadmap: [
      { phase: '01', title: 'CRM Audit', description: 'CRM intake workflow audits and funnel qualification mapping.' },
      { phase: '02', title: 'Form Engineering', description: 'Dynamic multi-step qualification form engineering and enrichment API sync.' },
      { phase: '03', title: 'Scoring & Test', description: 'Dynamic lead scoring calibration, CRM sync testing, and attribution dashboards.' },
    ],
  },
  {
    slug: 'social-media', title: 'Social Media Management & Distribution', shortTitle: 'Social',
    tagline: 'Elevate executive authority where B2B buyers read.',
    description: 'High-value B2B buyers trust experienced operators. We write strategic case study insights and distribute them on LinkedIn and Twitter to position your executives as authoritative consultancies.',
    features: ['Executive Ghostwriting', 'Case Study Redistribution', 'Thought-Leadership Architecture', 'Intent-Driven Writing', 'Founder-Led Campaigns', 'Distribution Pipelines'],
    outcomes: ['Significant increases in profile views', 'Organic network growth', 'Qualified DMs from enterprise decision-makers'],
    roadmap: [
      { phase: '01', title: 'Voice Audit', description: 'Founder voice audits, content themes selection, and target profile planning.' },
      { phase: '02', title: 'Content Creation', description: 'Thought leadership article creation and case-study redistribution campaigns.' },
      { phase: '03', title: 'Publish & Grow', description: 'Automated publishing, follower growth audits, and direct-inquiry funnel sync.' },
    ],
  },
  {
    slug: 'consultation', title: 'High-Trust Consultation', shortTitle: 'Consulting',
    tagline: 'Principal-led workshops to unlock hidden revenue.',
    description: 'Most agencies pitch templates. We run database-backed analysis sessions where our founders examine your conversion funnels, code base bottlenecks, and design custom execution roadmaps.',
    features: ['Competitor Search Audits', 'Conversion Funnel Analysis', 'Technical Site Audits', 'ROI Modeling', 'Growth Blueprint Mapping', 'Principal-Led Strategy'],
    outcomes: ['Complete strategic clarity on visibility gaps', 'Detailed roadmaps to fix conversion drops', 'Immediate code optimization blueprints'],
    roadmap: [
      { phase: '01', title: 'Diagnostics', description: 'Growth metrics diagnostics, competitor search spend scans, and site auditing.' },
      { phase: '02', title: 'Workshop', description: 'Principal-led workshops, roadblock diagnostics, and custom blueprint mapping.' },
      { phase: '03', title: 'Oversight', description: 'Implementation oversight, monthly health checks, and strategic roadmap adjustments.' },
    ],
  },
];

// ── Industries ────────────────────────────────────────────
export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  challenges: string[];
  opportunities: string[];
  roadmap: RoadmapPhase[];
  results: string[];
}

export const industries: Industry[] = [
  {
    slug: 'b2b-saas', title: 'B2B SaaS', shortTitle: 'SaaS',
    tagline: 'Scale trial-to-paid and sales demo pipeline growth.',
    description: 'Intercept comparison traffic by building programmatic alternatives. We align search intent with high-converting comparison grids and LLM optimization.',
    challenges: ['Aggregator directory dominance capturing primary keywords', 'Unqualified lead volumes from generic search templates', 'LLM citation gaps for products without structured entity schemas'],
    opportunities: ['Own high-intent comparison terms like "[Competitor] alternatives"', 'Host comparison modules directly on your domain', 'Capture active software buyers at the exact point of decision'],
    roadmap: [
      { phase: '01', title: 'Keyword Mapping', description: 'Competitor keyword indexing mapping and trial conversion audits.' },
      { phase: '02', title: 'Alternative Pages', description: 'Programmatic alternative pages deployment and JSON-LD schema declaration.' },
      { phase: '03', title: 'Pipeline Routing', description: 'Demo qualifying funnel setup and search console pipeline routing.' },
    ],
    results: ['+312% Organic Search traffic', '$1.2M Attributed sales pipeline growth', '#1 for 42 core comparison terms'],
  },
  {
    slug: 'professional-services', title: 'B2B Professional Services', shortTitle: 'Services',
    tagline: 'Establish premium regional and national authority.',
    description: 'Convert sophisticated corporate evaluators before they speak with sales. We build search assets and structured profiles that establish your firm\'s credibility at every stage of discovery.',
    challenges: ['Word of mouth limits preventing predictable growth', 'Competitor visibility saturation from generic thought-leadership', 'Long buying journeys requiring consistent high-authority touchpoints'],
    opportunities: ['Capture clients querying complex regulatory changes', 'Host authoritative analyses to establish trust', 'Move prospects toward booking advisory calls'],
    roadmap: [
      { phase: '01', title: 'Research & Mapping', description: 'Client buying behavior research and expertise entity mapping.' },
      { phase: '02', title: 'Authority Content', description: 'Case studies optimization and transactional long-tail target hubs.' },
      { phase: '03', title: 'Integration', description: 'CRM intake integration and national directory citation expansion.' },
    ],
    results: ['+180% Inbound meeting requests', '#1 for regional and national consulting queries', '-35% sales cycle length'],
  },
  {
    slug: 'healthcare', title: 'Healthcare & Medical', shortTitle: 'Health',
    tagline: 'Acquire patients under strict clinical search guidelines.',
    description: 'Patients trust authoritative medical providers. We build clinical search systems optimized under Google\'s E-E-A-T guidelines to rank your facilities first.',
    challenges: ['Strict YMYL algorithm filters deindexing sites without verifiable authorship', 'Local maps optimization errors from inconsistent clinic addresses', 'Patient trust obstacles from confusing medical explanations'],
    opportunities: ['Dominate patient queries for specialized medical procedures', 'Deploy structured provider schemas and clinical maps profiles', 'Establish facilities as trusted local authorities'],
    roadmap: [
      { phase: '01', title: 'Credentials Audit', description: 'Physician E-E-A-T credentials indexing and YMYL content audit.' },
      { phase: '02', title: 'Local Rollout', description: 'Local clinic page programmatic rollouts and maps listings cleanup.' },
      { phase: '03', title: 'Review Funnels', description: 'Patient review funnels implementation and medical search maps tracking.' },
    ],
    results: ['+280% organic medical bookings', '8/10 core keywords in Top-3 within 90 days', '+150% localized map views'],
  },
  {
    slug: 'tech-ai', title: 'Tech & AI Systems', shortTitle: 'Tech AI',
    tagline: 'Secure generative engine citations in ChatGPT and Gemini.',
    description: 'Technical decision-makers avoid marketing brochures. We structure database networks and schema layouts so your technical product is recommended inside AI search platforms.',
    challenges: ['Generative recommendation gaps for products lacking structured definitions', 'Rapid keyword shifting as developer terminology evolves weekly', 'Low-trust content templates written without deep developer insight'],
    opportunities: ['Target developers querying technical comparisons', 'Optimize documentation hubs and schema maps', 'Secure citations across AI search interfaces'],
    roadmap: [
      { phase: '01', title: 'Doc Audit', description: 'Developer documentation speed audits and semantic schema graph scans.' },
      { phase: '02', title: 'API Structuring', description: 'Code-level API reference tables database configuration and indexation.' },
      { phase: '03', title: 'Citation Validation', description: 'AEO share-of-voice scans and generative citation validation loops.' },
    ],
    results: ['42% citation mindshare in ChatGPT and Perplexity', '+185% developer signups', 'Sub-0.4s documentation load speed'],
  },
  {
    slug: 'premium-b2c', title: 'Premium B2C & Brands', shortTitle: 'B2C',
    tagline: 'Scale high-ticket consumer acquisitions and luxury search footprints.',
    description: 'Bypassing rising paid ad costs. We align lifestyle intent and brand values with direct-to-purchase optimization, ensuring high-net-worth buyers find your brand first.',
    challenges: ['Meta and ad cost inflation diminishing returns', 'Diluted brand positioning from generic keyword stuffing', 'Visual search gaps for luxury buyers using image exploration'],
    opportunities: ['Target high-net-worth buyers seeking bespoke products', 'Optimize image tags and product schemas', 'Capture luxury buyers directly through visual search'],
    roadmap: [
      { phase: '01', title: 'Channel Audit', description: 'Acquisition channels performance audits and visual search asset analysis.' },
      { phase: '02', title: 'Visual Optimization', description: 'Image metadata tagging, mobile page speed optimization, and schema mapping.' },
      { phase: '03', title: 'Conversion Tuning', description: 'Checkout conversion rate optimization and shopping indexation sync.' },
    ],
    results: ['+195% organic revenue growth', '4.8x average return on search spend', '-32% paid ad cost dependencies'],
  },
  {
    slug: 'real-estate', title: 'Real Estate & Development', shortTitle: 'Real Estate',
    tagline: 'Dominate competitive local and commercial property searches.',
    description: 'Bypassing third-party listings aggregators. We construct localized search systems that connect high-intent investors and buyers directly with your properties.',
    challenges: ['Aggregator site monopolies forcing high referral fees', 'Slow property page indexing for daily inventory updates', 'Low-trust intake forms generating unqualified spam leads'],
    opportunities: ['Target investors searching for specific neighborhood traits', 'Structure property catalogs and build fast project pages', 'Capture pre-construction and commercial deal seekers directly'],
    roadmap: [
      { phase: '01', title: 'Regional Mapping', description: 'Regional mapping analysis and listings database setup.' },
      { phase: '02', title: 'Neighborhood Hubs', description: 'Programmatic neighborhood catalogs deployment and local map packs sync.' },
      { phase: '03', title: 'Tour Funnels', description: 'Portfolio gallery mobile optimizations and qualifying tour request funnels.' },
    ],
    results: ['+240% qualified organic leads', '$15M+ attributed property sales', '#1 for 18 local target keywords'],
  },
  {
    slug: 'architecture', title: 'Architecture & Design Studios', shortTitle: 'Arch',
    tagline: 'Target high-budget spatial design searches.',
    description: 'Architectural decisions start with visual research. We optimize your portfolio design and spatial keywords, connecting your studio with developers and high-end residential clients.',
    challenges: ['Visual search discovery gaps from standard text SEO', 'JavaScript ghost portfolios hidden from crawler indexation', 'Enthusiast vs. buyer intent — student traffic diluting real leads'],
    opportunities: ['Establish your studio as a design authority for specific spatial styles', 'Structure portfolio images with precise schema tags', 'Ensure your work ranks in high-intent visual searches'],
    roadmap: [
      { phase: '01', title: 'Portfolio Audit', description: 'Portfolio page indexation audits and visual intent keyword mapping.' },
      { phase: '02', title: 'Image Optimization', description: 'Image Engine Optimization, metadata formatting, and editorial case studies.' },
      { phase: '03', title: 'Commission Routing', description: 'Spatial design query optimization and commission intake routing.' },
    ],
    results: ['+180% high-budget project inquiries', '#1 for 12 target regional design queries', '+320% visual search impressions'],
  },
  {
    slug: 'interior-design', title: 'Interior Design Consultancies', shortTitle: 'Interior',
    tagline: 'Connect luxury clients with your design portfolio.',
    description: 'Premium clients search for spatial design specialists. We optimize your project portfolios and local search placements to connect luxury buyers directly to your studio.',
    challenges: ['The Pinterest discovery gap — buyers pin images but can\'t find your studio', 'DIY vs. professional intent — attracting decorators instead of commissions', 'Slow portfolio page speeds from unoptimized large photos'],
    opportunities: ['Position your consultancy as the leading local authority for luxury interiors', 'Build local citation networks for high-intent queries', 'Optimize portfolios to convert visual discovery into paid engagements'],
    roadmap: [
      { phase: '01', title: 'Speed Diagnostic', description: 'Portfolio page speed diagnostic and local citation directory audits.' },
      { phase: '02', title: 'Image Conversion', description: 'AVIF/WebP next-gen image conversions and maps pack optimization.' },
      { phase: '03', title: 'Booking Intake', description: 'High-intent luxury local keyword targeting and booking intake verification.' },
    ],
    results: ['+210% qualified project briefings', '#1 for 15 target luxury design queries', '-45% mobile bounce rates'],
  },
];

// ── Case Studies ──────────────────────────────────────────
export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'b2b-saas-pipeline-expansion', title: 'Scaling B2B SaaS Pipeline by 312%',
    client: 'Enterprise Resource Planning (ERP) Platform', industry: 'B2B SaaS', services: ['SEO', 'AEO', 'Web Development'],
    overview: 'How we bypassed legacy directory listings by building custom programmatic comparison alternatives.',
    challenge: 'The client relied on AdWords campaigns costing $42 per click. High CAC prevented sustainable revenue growth, and third-party listings represented 70% of inbound sales demos. Their website lacked comparative content.',
    solution: 'We built 42 speed-optimized comparison landing pages hosted directly on the client\'s domain to intercept software buyers at the point of decision. Injected structured schema maps declaring feature differences and created comparison tables that load in under 0.4 seconds.',
    results: ['+312% organic search traffic in 90 days', '$1.2M in attributed pipeline growth', 'Top-3 rankings for target comparison queries', 'Significantly lower customer acquisition cost'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
  },
  {
    slug: 'luxury-property-developer', title: 'Luxury Property Developer',
    client: 'Pre-Construction High-End Residential Towers, Miami', industry: 'Real Estate', services: ['Local SEO', 'Web Development', 'Lead Generation'],
    overview: 'How we moved a developer from paid social to organic dominance, bypassing aggregators.',
    challenge: 'Paid ads on social networks generated high volumes of low-intent contact details. The client spent over $8,000 monthly for lists that sales reps couldn\'t close. The project portfolio page was an unindexed single-page app.',
    solution: 'Re-coded the project catalog into server-side rendered HTML formats. Targeted specific terms like "pre-construction penthouse Miami". Implemented multi-step verification forms for private tour requests.',
    results: ['+240% qualified organic inquiries', '$15M in attributed property sales', 'Complete project reservation prior to groundbreaking', 'Reduced ad spend dependency'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
  },
  {
    slug: 'multi-location-healthcare', title: 'Multi-Location Healthcare Group',
    client: 'Regional Network of 12 Clinical Facilities', industry: 'Healthcare', services: ['Local SEO', 'AEO', 'Reputation Management'],
    overview: 'How we claimed Google Map Pack dominance across an entire metro area.',
    challenge: 'Inbound patient acquisitions declined. Patient queries were captured by national directories, and their locations lacked visibility on local map search engines. Clinic coordinates were mismatched across web listings.',
    solution: 'Standardized map details for all 12 clinics across target directories. Developed local clinic pages linked to verified provider profiles. Structured patient review funnels to sync automatically with clinic profiles.',
    results: ['+280% organic clinic bookings', '#1 in local Map Packs across all locations', 'Top-3 rankings for procedural queries within 90 days', 'Clean YMYL-compliant profiles'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
  },
  {
    slug: 'luxury-jewelry-brand', title: 'Luxury Direct-to-Consumer Jewelry Brand',
    client: 'Bespoke Engagement Rings & Fine Jewelry', industry: 'Premium B2C', services: ['SEO', 'Web Development', 'Social Media'],
    overview: 'How we transitioned a jewelry brand from paid social dependency to organic visual search dominance.',
    challenge: 'Diminishing returns on paid social media channels increased acquisition costs, threatening product margins. Beautiful high-definition jewelry images had no metadata tags, missing searchers using Google Lens and image search.',
    solution: 'Compressed and tagged product images with alt tags detailing styles and stones. Structured product pages to display rich snippets in search results. Integrated direct-to-purchase links from image searches.',
    results: ['+195% organic revenue growth', '4.8x average return on search investment', 'Reduced reliance on paid advertising channels', 'Visual search becoming top acquisition channel'],
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=1200&h=800&fit=crop',
  },
];

// ── Insights / Articles ───────────────────────────────────
export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export const insightCategories = ['All', 'AI & Search', 'Web Development', 'SEO Strategy'] as const;

export const insights: InsightArticle[] = [
  { slug: 'llm-citation-shift', title: 'The LLM Citation Shift: How to Rank in ChatGPT and Claude', category: 'AI & Search', date: 'Jan 2026', readTime: '8 min', excerpt: 'A technical analysis of semantic indexing structures and database nodes scanned by conversational AI engines. Learn how to structure your brand for AI recommendations.' },
  { slug: 'wordpress-vs-headless', title: 'Why WordPress and Plugins Are Dragging Down Your Conversions', category: 'Web Development', date: 'Dec 2025', readTime: '6 min', excerpt: 'An engineering comparison of bloated CMS templates vs. clean headless code architecture. The performance decision that\'s costing you revenue.' },
  { slug: 'bypassing-aggregators', title: 'Bypassing Aggregators: The SaaS Blueprint to Intercept Alternative Queries', category: 'SEO Strategy', date: 'Nov 2025', readTime: '10 min', excerpt: 'A programmatic SEO guide to capturing high-intent comparative terms directly on your domain. How to own "[Competitor] alternatives" searches.' },
];

// ── Careers ───────────────────────────────────────────────
export interface Career {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const careers: Career[] = [
  { slug: 'senior-growth-engineer', title: 'Senior Growth Engineer (HTML/JS/Performance)', department: 'Engineering', location: 'Remote', type: 'Full-time', description: 'Build zero-bloat static web frameworks, custom intake funnels, and optimized client platforms. You should have deep expertise in vanilla web engineering and performance budgeting.', requirements: ['Deep expertise in vanilla HTML, CSS, and JavaScript', 'Experience with performance budgeting and Core Web Vitals', 'Understanding of headless architecture and static site generation', 'Ability to build custom intake funnels and CRM integrations', 'Comfort with version control and modern development workflows', 'Full ownership of codebase architecture and site performance scoring'] },
  { slug: 'search-ai-architect', title: 'Search & AI Indexing Architect (SEO/AEO/GEO)', department: 'Search', location: 'Remote', type: 'Full-time', description: 'Declare entity schemas, audit LLM recommendations, and design programmatic comparison indexes. You should have deep experience mapping semantic entities and parsing scraper behaviors.', requirements: ['Deep expertise in technical SEO and semantic entity mapping', 'Understanding of LLM training data and citation patterns', 'Experience with JSON-LD structured data and knowledge graphs', 'Familiarity with AEO and GEO optimization techniques', 'Strong analytical skills for parsing scraper behaviors', 'Design and deploy indexing roadmaps for client portfolios'] },
];

// ── Careers Page Perks ────────────────────────────────────
export const perks = [
  { title: 'Autonomy & Trust', description: 'We trust you to manage your time and deliverables. You work directly with founders and clients without administrative middle-managers.' },
  { title: 'Quiet Focus', description: 'We minimize meeting overhead so you have uninterrupted hours to code, analyze, and strategize. Deep work requires quiet space.' },
  { title: 'Continuous Mastery', description: 'Work on cutting-edge generative and answer engine search systems (AEO & GEO) that define the future of digital discovery.' },
  { title: 'Competitive Pay', description: 'Top-of-market compensation with full benefits.' },
  { title: 'Remote Flexibility', description: 'Work from anywhere. Fully remote environment.' },
  { title: 'Best Tools', description: 'Choose your tools. We provide whatever you need.' },
] as const;
