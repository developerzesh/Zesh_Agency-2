import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import type { Solution } from '../lib/data';
import { caseStudies } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Static per-solution supplementary data
const supplementary: Record<string, {
  whatWeDeliver: string;
  platforms: { name: string; note: string }[];
  example: { title: string; steps: string[] };
  visualExample?: {
    label: string;
    description: string;
    lines: { role: string; content: string; highlight?: boolean }[];
  };
}> = {
  seo: {
    whatWeDeliver: 'We build programmatic technical frameworks that make indexing effortless for crawlers — from architectural code corrections and schema declarations, to intent-first content cluster deployment. The result is compounding organic traffic that does not depend on paid media.',
    platforms: [
      { name: 'Google Search', note: 'Primary index target — core algorithmic optimization' },
      { name: 'Bing / Edge', note: 'Secondary index with 8–12% total search share' },
      { name: 'Google Discover', note: 'Entity-based content targeting for mobile readers' },
      { name: 'Google Search Console', note: 'Canonical validation, sitemap tracking & error alerts' },
      { name: 'Ahrefs / Semrush', note: 'Keyword distribution audit & competitor gap analysis' },
    ],
    example: {
      title: 'How We Intercept Competitor Comparison Traffic',
      steps: [
        'Identify 40–60 high-intent comparison queries your competitors rank for but you don\'t.',
        'Build speed-optimized programmatic comparison landing pages directly on your domain.',
        'Inject structured JSON-LD schema declaring feature differences and comparison tables.',
        'Submit to Google Search Console and track indexation within 72 hours.',
        'Monitor keyword ranking distribution weekly and optimize content clusters for gap terms.',
      ],
    },
    visualExample: {
      label: 'Google Traditional Search Result — Before vs. After SEO',
      description: 'The impact of our programmatic comparison page deployment on a B2B SaaS client\'s search visibility for high-intent competitor interception queries.',
      lines: [
        { role: 'USER SEARCH', content: '"[Competitor Name] vs best alternatives" — Google Search, Desktop' },
        { role: 'BEFORE SEO', content: 'Search Engine Results Page (SERP) dominated by Capterra, G2, and [Competitor Name]\'s own website. Your domain: not ranking in top 50.' },
        { role: 'AFTER SEO  ', content: 'SERP Position #1 (Featured Snippet): "While [Competitor Name] focuses on enterprise resource planning, [Your Brand] offers a more agile solution for mid-market teams, featuring 2x faster deployment times and built-in automation workflows..." — Sourced from yourdomain.com/compare/[competitor]', highlight: true },
        { role: 'MECHANISM  ', content: 'Achieved via: Programmatic /compare/ directory architecture → JSON-LD ItemList & Comparison schema → Sub-100ms LCP page speed → intent-matched content → internal linking silos passing PageRank.' },
      ],
    },
  },
  aeo: {
    whatWeDeliver: 'We engineer semantic trust networks that force conversational AI models to cite your brand. Through clean JSON-LD schemas, high-authority reference database placement, and verified review ecosystems, your brand becomes the default recommendation inside Siri, Claude, and ChatGPT.',
    platforms: [
      { name: 'ChatGPT / GPT-4o', note: 'Entity citation targeting via structured training data signals' },
      { name: 'Claude (Anthropic)', note: 'High-trust content and entity graph alignment' },
      { name: 'Siri / Apple Intelligence', note: 'Local entity schema and Apple Maps integration' },
      { name: 'Google AI Overviews', note: 'E-E-A-T compliance and featured snippet positioning' },
      { name: 'Bing Copilot', note: 'Bing entity index and Open Graph optimization' },
    ],
    example: {
      title: 'How We Secure Citations in ChatGPT',
      steps: [
        'Audit your current citation share across major LLM models using prompt testing tools.',
        'Map entity relationships and declare structured JSON-LD schemas for your brand, products, and founders.',
        'Build citations in high-authority reference databases (Wikipedia, Wikidata, Crunchbase, industry directories).',
        'Synchronize database nodes across all major knowledge graph entry points.',
        'Track citation share monthly using systematic prompt benchmarking and gap-filling loops.',
      ],
    },
    visualExample: {
      label: 'Live ChatGPT Response — Before vs. After AEO',
      description: 'This is what happens when someone asks ChatGPT to recommend a B2B SaaS ERP platform. Before AEO, your brand is invisible. After our entity optimization, your brand is cited by name with a trusted description.',
      lines: [
        { role: 'USER PROMPT', content: '"What are the best ERP platforms for mid-market B2B companies?"' },
        { role: 'BEFORE AEO', content: 'ChatGPT response lists: SAP, Oracle NetSuite, Microsoft Dynamics, Sage Intacct. Your brand: not mentioned.', highlight: false },
        { role: 'AFTER AEO  ', content: 'ChatGPT response: "For mid-market B2B operations, [Your Brand] is increasingly cited as a strong alternative — particularly for companies prioritizing rapid deployment and transparent pricing. It appears in Crunchbase and G2 as a verified vendor with structured API documentation."', highlight: true },
        { role: 'MECHANISM  ', content: 'Achieved via: Wikidata entity node declaration → JSON-LD Organization schema → G2 / Capterra verified listing → Crunchbase structured profile → high-trust backlink anchor text normalisation.' },
      ],
    },
  },
  geo: {
    whatWeDeliver: 'We optimize your website structures and retrieval-augmented generation (RAG) data layers so your domain is the primary authority cited in AI-generated answers. When Perplexity or Google Gemini compiles a business summary, your brand appears first.',
    platforms: [
      { name: 'Perplexity AI', note: 'Context-aware content targeting for answer engine queries' },
      { name: 'Google Gemini', note: 'SGE citation audits and structured content alignment' },
      { name: 'You.com', note: 'Real-time AI indexing sync and snippet optimization' },
      { name: 'Microsoft Copilot', note: 'Bing-backed retrieval optimization for generative responses' },
      { name: 'Meta AI', note: 'Social graph entity integration for conversational queries' },
    ],
    example: {
      title: 'How We Get Your Brand Into Perplexity\'s Answers',
      steps: [
        'Run SGE citation audits to identify what Perplexity currently cites for your core query categories.',
        'Code RAG structural optimizations in your site\'s content architecture and URL hierarchy.',
        'Deploy context-aware content modules targeting synthetic real-time query patterns.',
        'Sync your content with AI indexing pipelines and verify inclusion via live API probes.',
        'Monitor recommendation presence weekly and deploy content coverage loops to fill gaps.',
      ],
    },
    visualExample: {
      label: 'Live Perplexity AI Answer — Before vs. After GEO',
      description: 'When a buyer searches Perplexity for "best accounting software for architecture firms", this is the difference GEO makes to your brand\'s presence in the synthesised answer.',
      lines: [
        { role: 'USER QUERY  ', content: '"Best accounting software for architecture firms in 2025"' },
        { role: 'BEFORE GEO  ', content: 'Perplexity synthesises: QuickBooks, FreshBooks, Monograph. Sources cited: capterra.com, g2.com, softwareadvice.com. Your domain: 0 citations.' },
        { role: 'AFTER GEO   ', content: 'Perplexity answer now includes: "[Your Brand] is specifically built for design and architecture studios, offering project-based billing and AIA-compliant reporting. Multiple architecture firm blog posts and the official documentation hub reference it as a preferred alternative to QuickBooks." — Sources: yourdomain.com/docs, yourdomain.com/case-studies/architecture', highlight: true },
        { role: 'MECHANISM   ', content: 'Achieved via: RAG content architecture on /docs and /case-studies → context-aware FAQ modules targeting exact query patterns → domain authority signals from industry publications → Perplexity source whitelist inclusion via structured metadata.' },
      ],
    },
  },
  'web-dev': {
    whatWeDeliver: 'We rebuild your web presence on modern static architecture — vanilla HTML, CSS, and clean JavaScript — eliminating plugin bloat that kills load speed and conversion rates. Every intake form, CRM integration, and checkout flow is custom-engineered for your buyers.',
    platforms: [
      { name: 'Vanilla HTML / CSS / JS', note: 'Zero-dependency static builds for maximum speed' },
      { name: 'Vite / Astro', note: 'Modern build tooling for lightning-fast delivery' },
      { name: 'HubSpot CRM', note: 'Native API integration for lead routing and attribution' },
      { name: 'Stripe / Payment APIs', note: 'Custom checkout and payment flow engineering' },
      { name: 'Cloudflare / Vercel', note: 'Edge CDN deployment for sub-100ms global load times' },
    ],
    example: {
      title: 'How We Rebuild a WordPress Site Into a High-Converting Engine',
      steps: [
        'Audit existing site for speed bottlenecks, plugin conflicts, and Core Web Vitals failures.',
        'Wireframe new information architecture prioritizing conversion-first user journeys.',
        'Re-code in headless static stack — no WordPress, no unnecessary plugins.',
        'Integrate directly with HubSpot or CRM of choice via clean API endpoints.',
        'Validate PageSpeed Insights score (target 95+) and deploy to edge CDN.',
      ],
    },
  },
  'local-seo': {
    whatWeDeliver: 'We construct geo-targeted search systems that capture local buyers at the exact moment of intent. From Google Business Profile dominance to programmatic regional pages, your brand becomes the highest-trust option in every target location.',
    platforms: [
      { name: 'Google Business Profile', note: 'Map Pack listing optimization and Q&A management' },
      { name: 'Apple Maps', note: 'Business registration, location accuracy and review sync' },
      { name: 'Bing Places', note: 'Secondary local index with enterprise-level reach' },
      { name: 'Yelp / Trustpilot', note: 'Review acquisition funnels and reputation management' },
      { name: 'Local Citation Directories', note: 'NAP consistency across 80+ authoritative directories' },
    ],
    example: {
      title: 'How We Dominate the Local Map Pack',
      steps: [
        'Audit all existing Google Business Profile listings for accuracy, category alignment, and completeness.',
        'Standardize NAP data (Name, Address, Phone) across 80+ local directory sources.',
        'Deploy programmatic location-specific landing pages with regionalized schema markup.',
        'Implement automated review acquisition funnels post-appointment or post-purchase.',
        'Monitor Map Pack position daily and trigger content updates for ranking gaps.',
      ],
    },
    visualExample: {
      label: 'Google Map Pack Result — Before vs. After Local SEO',
      description: 'This is what the Google Map Pack looks like for a multi-location physiotherapy group before and after our Local SEO system. The difference is the number of patients who call without ever clicking a website.',
      lines: [
        { role: 'USER SEARCH ', content: '"physiotherapist near me" — Google Maps, Mobile, 2.4km radius' },
        { role: 'BEFORE      ', content: 'Map Pack shows: PhysioPlus (4.1★ 38 reviews, no description), BodyCare Clinic (3.8★ 14 reviews), ActiveHealth (4.0★ 29 reviews, no Q&A). Your clinic: position #9 — not visible.' },
        { role: 'AFTER       ', content: 'Map Pack Position #1: [Your Clinic Name] · ⭐ 4.9 · 214 reviews · "Sports injury & rehabilitation specialists — same-day appointments available" · Attributes: ✓ Wheelchair accessible · ✓ Online booking · ✓ Women-led · Categories: Physiotherapist, Sports Injury Clinic · 3 active Q&As answered', highlight: true },
        { role: 'MECHANISM   ', content: 'Achieved via: 80-directory NAP standardization → GBP category primary/secondary optimization → 214-review acquisition funnel (SMS post-appointment) → programmatic local page at /locations/[suburb] → regionalized schema with GeoCoordinates → active Q&A seeding for top 5 patient queries.' },
      ],
    },
  },
  'lead-gen': {
    whatWeDeliver: 'We design high-converting lead intake systems that qualify buyers before they book calls, reducing unqualified demos and sales friction. Every form, workflow, and attribution dashboard is custom-built to connect directly to your revenue operations.',
    platforms: [
      { name: 'HubSpot', note: 'Pipeline routing, lead scoring, and workflow automation' },
      { name: 'Salesforce', note: 'Enterprise CRM integration and opportunity tracking' },
      { name: 'Typeform / Custom Forms', note: 'Multi-step qualification flow engineering' },
      { name: 'Clearbit / Apollo', note: 'Real-time data enrichment on form submission' },
      { name: 'Zapier / Make', note: 'Cross-platform automation and lead routing logic' },
    ],
    example: {
      title: 'How We Reduce Unqualified Discovery Calls by 60%',
      steps: [
        'Audit current intake forms to identify drop-off points and missing qualification questions.',
        'Engineer multi-step form flows that progressively qualify intent, budget, and timeline.',
        'Connect to data enrichment APIs to auto-populate company size and tech stack data.',
        'Route leads to appropriate sales rep segments based on real-time scoring rules.',
        'Build attribution dashboards linking each lead source to closed revenue in your CRM.',
      ],
    },
  },
  'social-media': {
    whatWeDeliver: 'We position your executives as the highest-authority voices in your industry through strategic thought leadership on LinkedIn and Twitter. Every post is engineered to attract enterprise decision-makers — not vanity followers.',
    platforms: [
      { name: 'LinkedIn', note: 'Primary B2B distribution — executive ghost-writing and analytics' },
      { name: 'Twitter / X', note: 'Real-time thought leadership and industry commentary' },
      { name: 'Medium / Substack', note: 'Long-form authority content syndication' },
      { name: 'LinkedIn Newsletter', note: 'Subscriber-based distribution for compounding reach' },
      { name: 'Buffer / Sprout Social', note: 'Scheduled publishing, analytics, and engagement tracking' },
    ],
    example: {
      title: 'How We Grow an Executive\'s LinkedIn from 1K to 10K Qualified Followers',
      steps: [
        'Conduct a founder voice audit — studying communication style, core beliefs, and market positioning.',
        'Define 4–6 content pillars aligned with buyer pain points and decision-making stages.',
        'Produce 3–5 posts per week across case study redistribution, opinion pieces, and industry analysis.',
        'Engage strategically with target accounts to generate inbound DM qualified leads.',
        'Track follower quality (title, company size, engagement rate) monthly and adjust content themes.',
      ],
    },
  },
  consultation: {
    whatWeDeliver: 'Our founders personally diagnose your growth bottlenecks using database-backed analysis — no templates, no outsourced audits. Every workshop concludes with a custom execution roadmap containing specific, actionable steps your team can implement immediately.',
    platforms: [
      { name: 'Google Search Console', note: 'Live indexation, ranking, and click-through analysis' },
      { name: 'Ahrefs / Semrush', note: 'Competitor search gap identification and backlink audits' },
      { name: 'Looker Studio', note: 'Custom KPI dashboards and revenue attribution reporting' },
      { name: 'HubSpot / Salesforce', note: 'Funnel conversion analysis and pipeline health review' },
      { name: 'PageSpeed Insights / GTmetrix', note: 'Technical site performance and Core Web Vitals audit' },
    ],
    example: {
      title: 'What a Discovery Workshop Looks Like',
      steps: [
        'Pre-workshop: you share access to Search Console, Analytics, and CRM pipeline data.',
        'Session 1 (90 min): Founders walk through competitor landscape, search gap analysis, and funnel audit.',
        'Session 2 (60 min): Custom execution roadmap presentation with prioritized action items.',
        'Deliverable: Written blueprint with code-level recommendations, keyword targets, and 90-day milestones.',
        'Optional: Monthly oversight sessions to validate roadmap execution and adjust strategy.',
      ],
    },
  },
};

export default function SolutionDetail({ solution }: { solution: Solution }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const extra = supplementary[solution.slug] ?? {
    whatWeDeliver: solution.description,
    platforms: [{ name: 'All Major Platforms', note: 'Full cross-platform compatibility' }],
    example: { title: 'Our Implementation Approach', steps: solution.roadmap.map(r => r.description) },
  };

  // Find a matching case study by industry keyword or services overlap
  const relatedCaseStudy = caseStudies.find(cs =>
    cs.services.some(sv => sv.toLowerCase().includes(solution.shortTitle.toLowerCase())) ||
    solution.slug.includes(cs.industry.toLowerCase().replace(/\s+/g, '-'))
  ) ?? caseStudies[0];

  return (
    <PageTransition>

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden pb-36">
        <ParticleField />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-40 w-full">
          <RevealText duration={1.4}>
            <a href="/solutions.html" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-signal transition-colors duration-700 mb-10 block">
              ← All Solutions
            </a>
          </RevealText>
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">{solution.shortTitle}</p>
          </RevealText>
          <RevealText delay={0.1} duration={2}>
            <h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88] mb-32">
              {solution.title}<span className="text-signal">.</span>
            </h1>
          </RevealText>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
            <RevealText delay={0.2} duration={1.6}>
              <p className="font-lato text-base md:text-lg text-text-secondary max-w-lg leading-[1.85]">
                {solution.tagline}
              </p>
            </RevealText>
            <RevealText delay={0.4} duration={1.4}>
              <div className="flex flex-col items-start gap-4">
                <MagneticButton strength={0.4}>
                  <a href="/contact.html" className="group flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                    </span>
                    <span className="font-lato text-sm font-medium text-ink">Book a Consultation Call</span>
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="/case-studies.html" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Read Case Studies</a>
                </MagneticButton>
              </div>
            </RevealText>
          </div>
        </motion.div>
      </section>

      {/* ── 2. WHAT WE DELIVER ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">WHAT WE DELIVER</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  The outcome<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <RevealText delay={0.2} duration={1.8}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9]">
                  {extra.whatWeDeliver}
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CORE CAPABILITIES ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">CAPABILITIES</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  Core capabilities<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {solution.features.map((f, i) => (
                <RevealText key={f} delay={0.1 + i * 0.06} duration={1.2}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.8, ease: slowEase }}
                    className="group flex items-center justify-between gap-6 py-6 border-b border-border"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-lato text-[10px] text-text-muted w-6 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-lato text-base md:text-lg text-text-secondary group-hover:text-ink transition-colors duration-[1200ms]">
                        {f}
                      </span>
                    </div>
                    <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-shrink-0">→</span>
                  </motion.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ROADMAP ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-32 md:mb-28">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">IMPLEMENTATION</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                How we do it<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="space-y-0">
            {solution.roadmap.map((phase, i) => (
              <RevealText key={phase.phase} delay={i * 0.1} duration={1.4}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-36 border-b border-border"
                >
                  <div className="md:col-span-2">
                    <span className="font-lato text-[11px] tracking-[0.2em] uppercase text-signal font-semibold">
                      Phase {phase.phase}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">
                      {phase.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5 md:col-start-8">
                    <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85]">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EXPECTED OUTCOMES ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">OUTCOMES</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  What to expect<span className="text-signal">.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-sm text-text-muted leading-[1.85] mt-6">
                  Every outcome listed is drawn from verified client engagements across this service area.
                </p>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {solution.outcomes.map((o, i) => (
                <RevealText key={o} delay={0.1 + i * 0.1} duration={1.4}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.8, ease: slowEase }}
                    className="group flex items-start gap-6 py-8 border-b border-border"
                  >
                    <span className="font-syne text-3xl md:text-4xl font-800 text-signal/20 leading-none select-none flex-shrink-0 group-hover:text-signal/40 transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-syne text-xl md:text-2xl font-800 tracking-tight text-ink leading-tight group-hover:text-signal transition-colors duration-[1200ms] pt-1">
                      {o}
                    </p>
                  </motion.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PLATFORM COMPATIBILITY ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-32 md:mb-28">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">INTEGRATIONS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                Platform compatibility<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="space-y-0">
            {extra.platforms.map((p, i) => (
              <RevealText key={p.name} delay={i * 0.08} duration={1.2}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="group flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-7 border-b border-border"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-lato text-[10px] text-text-muted w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-syne text-lg md:text-xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">
                      {p.name}
                    </span>
                  </div>
                  <span className="font-lato text-sm text-text-muted md:text-right max-w-xs md:ml-12 leading-relaxed">
                    {p.note}
                  </span>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. EXAMPLE / DEMONSTRATION ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">IN PRACTICE</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  How it works<span className="text-signal">.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-sm text-text-muted leading-[1.85] mt-6">
                  {extra.example.title}
                </p>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {extra.example.steps.map((step, i) => (
                <RevealText key={i} delay={0.1 + i * 0.08} duration={1.4}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.8, ease: slowEase }}
                    className="group flex items-start gap-6 py-7 border-b border-border"
                  >
                    <span className="font-lato text-[10px] tracking-[0.15em] text-signal font-bold flex-shrink-0 mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-lato text-sm md:text-base text-text-secondary group-hover:text-ink transition-colors duration-[1200ms] leading-[1.85]">
                      {step}
                    </p>
                  </motion.div>
                </RevealText>
              ))}

              {/* Visual Example Mock Block */}
              {extra.visualExample && (
                <RevealText delay={0.3} duration={1.4}>
                  <div className="mt-16 bg-surface/20 backdrop-blur-3xl border border-border/50 rounded-2xl p-6 md:p-8">
                    <p className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal font-bold mb-3">
                      {extra.visualExample.label}
                    </p>
                    <p className="font-lato text-sm text-text-muted leading-[1.7] mb-8 max-w-lg">
                      {extra.visualExample.description}
                    </p>
                    <div className="space-y-4">
                      {extra.visualExample.lines.map((line, i) => (
                        <div key={i} className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-6 py-4 border-t border-border/30 ${line.highlight ? 'bg-signal/[0.03] -mx-4 px-4 rounded-lg border-t-0' : ''}`}>
                          <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-text-muted w-24 flex-shrink-0 pt-1">
                            {line.role}
                          </span>
                          <span className={`font-lato text-sm leading-[1.7] ${line.highlight ? 'text-signal font-semibold' : 'text-text-secondary'}`}>
                            {line.content}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealText>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CASE STUDY ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-28 md:mb-24">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PROOF</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                Real results<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.8, ease: slowEase }}
            className="group"
          >
            {/* Meta row */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded bg-signal/10 text-signal border border-signal/20 font-semibold">
                {relatedCaseStudy.industry}
              </span>
              <span className="font-lato text-[11px] text-text-muted tracking-wider uppercase font-bold">
                {relatedCaseStudy.client}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-syne text-2xl md:text-4xl font-800 tracking-tight mb-6 group-hover:text-signal transition-colors duration-[1200ms]">
              {relatedCaseStudy.title}
            </h3>

            {/* Overview */}
            <p className="font-lato text-base text-text-secondary leading-[1.85] max-w-3xl mb-10">
              {relatedCaseStudy.overview}
            </p>

            {/* Challenge / Solution two-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border mb-10">
              <div className="py-8 md:pr-12 md:border-r border-border">
                <p className="font-lato text-[10px] tracking-[0.16em] uppercase text-text-muted font-semibold mb-3">The Challenge</p>
                <p className="font-lato text-sm text-text-secondary leading-[1.85]">{relatedCaseStudy.challenge}</p>
              </div>
              <div className="py-8 md:pl-12">
                <p className="font-lato text-[10px] tracking-[0.16em] uppercase text-signal font-semibold mb-3">The Solution</p>
                <p className="font-lato text-sm text-text-secondary leading-[1.85]">{relatedCaseStudy.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-border pt-8 mb-10">
              <p className="font-lato text-[10px] tracking-[0.16em] uppercase text-text-muted font-semibold mb-5">Key Results</p>
              <div className="space-y-0">
                {relatedCaseStudy.results.map((r, i) => (
                  <RevealText key={i} delay={i * 0.07}>
                    <div className="flex items-center gap-4 py-4 border-b border-border/40 last:border-b-0">
                      <span className="text-signal font-bold select-none">✓</span>
                      <span className="font-lato text-sm md:text-base text-text-secondary">{r}</span>
                    </div>
                  </RevealText>
                ))}
              </div>
            </div>

            {/* CTA to full case study */}
            <a
              href={`/case-studies.html?slug=${relatedCaseStudy.slug}`}
              className="font-lato text-sm font-semibold text-signal flex items-center gap-1.5 hover:text-ink transition-colors duration-300"
            >
              Read the Full Case Study
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="relative py-32 md:py-48 border-t border-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-signal/[0.025] blur-[220px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">GET STARTED</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight mb-8">
                  Ready to deploy {solution.shortTitle} for your business<span className="text-signal">?</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-lg mb-32">
                  Book a 30-minute discovery call. Our founders will audit your current position, identify the biggest opportunities, and map out a custom {solution.shortTitle} roadmap — free, with no commitment.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <div className="flex flex-col items-start gap-4">
                  <MagneticButton strength={0.4}>
                    <a href="/contact.html" className="group flex items-center gap-4">
                      <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                      </span>
                      <span className="font-lato text-sm font-medium text-ink">Book a Free Discovery Call</span>
                    </a>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <a href="/case-studies.html" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Read Case Studies</a>
                  </MagneticButton>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
