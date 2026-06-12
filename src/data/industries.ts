export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  challenges: string[];
  opportunities: string[];
  roadmap: { phase: string; title: string; description: string }[];
  results: string[];
}

export const industries: Industry[] = [
  {
    slug: 'b2b-saas',
    title: 'B2B SaaS',
    tagline: 'Turn your product into a category leader.',
    description: 'SaaS growth demands more than product-led motion. We engineer search ecosystems that capture high-intent buyers at every stage of the evaluation journey — from problem awareness to vendor comparison to purchase decision.',
    challenges: ['Long, complex buyer journeys with multiple stakeholders', 'High competition for bottom-funnel keywords', 'Difficulty differentiating in crowded categories', 'Churn eroding growth gains'],
    opportunities: ['Programmatic SEO for long-tail use cases', 'Comparison & alternative pages for bottom-funnel capture', 'AEO for AI-recommended vendor shortlists', 'Content-led nurture for multi-stakeholder deals'],
    roadmap: [
      { phase: '01', title: 'Category Mapping', description: 'Map your entire category search landscape — every term, competitor, and opportunity.' },
      { phase: '02', title: 'Foundation Build', description: 'Technical SEO, content architecture, and comparison page deployment.' },
      { phase: '03', title: 'Authority Acceleration', description: 'Thought leadership content, link building, and brand authority establishment.' },
      { phase: '04', title: 'Market Leadership', description: 'Category dominance defense, new market expansion, and compounding returns.' },
    ],
    results: ['Organic pipeline 340% increase', 'Demo requests 180% growth', 'Category keyword dominance', 'CAC reduction 45%'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    tagline: 'Become the obvious choice for high-value clients.',
    description: 'Professional services firms win on trust and expertise. We build digital authority systems that position your firm as the definitive expert in your practice area — so high-value clients find you before they find competitors.',
    challenges: ['Trust-based sales cycles resistant to traditional marketing', 'Difficulty demonstrating expertise digitally', 'Local and national visibility gaps', 'Referral dependency creating revenue volatility'],
    opportunities: ['Thought leadership SEO for expertise demonstration', 'Local SEO for market-specific visibility', 'AEO for AI-recommended expert citations', 'Content systems for consistent authority building'],
    roadmap: [
      { phase: '01', title: 'Expertise Mapping', description: 'Identify your highest-value practice areas and their search demand.' },
      { phase: '02', title: 'Authority Foundation', description: 'Build digital authority through optimized profiles and expert content.' },
      { phase: '03', title: 'Visibility Expansion', description: 'Scale content production and expand into adjacent practice areas.' },
      { phase: '04', title: 'Market Dominance', description: 'Establish thought leadership position and defend against competition.' },
    ],
    results: ['Qualified inquiries 250% increase', 'High-value client acquisition 3x', 'Local market leadership', 'Referral diversification'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    tagline: 'Connect patients who need you with the care you provide.',
    description: 'Healthcare search is unique — regulated, local, and deeply personal. We navigate compliance while building visibility systems that connect patients with providers at the moments that matter most.',
    challenges: ['Strict regulatory compliance requirements', 'Multi-location management complexity', 'Patient trust and credibility barriers', 'Insurance and service line search complexity'],
    opportunities: ['Local SEO for multi-location practices', 'Service line SEO for high-value procedures', 'Reputation management for trust building', 'AEO for health information queries'],
    roadmap: [
      { phase: '01', title: 'Compliance Audit', description: 'Full regulatory compliance review and search visibility assessment.' },
      { phase: '02', title: 'Local Foundation', description: 'Multi-location profile optimization and local search infrastructure.' },
      { phase: '03', title: 'Service Line Growth', description: 'High-value service line content and conversion optimization.' },
      { phase: '04', title: 'System Scale', description: 'Multi-location expansion and market leadership consolidation.' },
    ],
    results: ['Patient inquiries 300% increase', 'Local pack visibility 85%+', 'Appointment bookings 4x', 'Reputation score 4.8+'],
  },
  {
    slug: 'tech-ai',
    title: 'Tech & AI',
    tagline: 'Lead the category that\'s defining the future.',
    description: 'The tech and AI landscape moves at breakneck speed. We help you own the narrative, capture demand, and build the authority that makes your brand synonymous with innovation in your category.',
    challenges: ['Rapidly evolving competitive landscape', 'Category creation vs. category competition', 'Technical audience demands depth and authenticity', 'AI-era search disruption'],
    opportunities: ['GEO for AI-generated recommendations', 'Technical content authority building', 'Category-defining thought leadership', 'Developer community SEO'],
    roadmap: [
      { phase: '01', title: 'Category Analysis', description: 'Map your competitive landscape and identify category-defining opportunities.' },
      { phase: '02', title: 'Technical Authority', description: 'Build depth-first content that earns developer and technical buyer trust.' },
      { phase: '03', title: 'AI Visibility', description: 'Optimize for generative AI outputs and AI recommendation surfaces.' },
      { phase: '04', title: 'Category Leadership', description: 'Establish and defend category leadership through compounding authority.' },
    ],
    results: ['Organic traffic 500% growth', 'Developer sign-ups 3x', 'AI citation rate leading', 'Category term dominance'],
  },
  {
    slug: 'premium-b2c',
    title: 'Premium B2C',
    tagline: 'Attract discerning customers who value what you create.',
    description: 'Premium brands require premium digital presence. We craft search and visibility strategies that match the caliber of your products — attracting customers who value craftsmanship, heritage, and excellence.',
    challenges: ['Balancing exclusivity with discoverability', 'High customer acquisition costs', 'Brand perception management across channels', 'Competing with larger brands on visibility'],
    opportunities: ['Aspirational content SEO for discovery', 'Visual search and social commerce integration', 'Brand story optimization for AI citations', 'Premium local experience optimization'],
    roadmap: [
      { phase: '01', title: 'Brand Audit', description: 'Assess current digital positioning and premium market opportunities.' },
      { phase: '02', title: 'Presence Elevation', description: 'Elevate digital touchpoints to match brand caliber and capture intent.' },
      { phase: '03', title: 'Authority Building', description: 'Build authority through editorial content and strategic partnerships.' },
      { phase: '04', title: 'Market Position', description: 'Secure premium market position and defend against competitive pressure.' },
    ],
    results: ['Qualified traffic 280% increase', 'Average order value 35% lift', 'Brand search volume 4x', 'Customer quality improvement'],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    tagline: 'Fill your pipeline with qualified buyers and tenants.',
    description: 'Real estate is won in search. From luxury developments to commercial properties, we build visibility systems that put your listings in front of qualified buyers at the moment of intent.',
    challenges: ['Hyper-competitive local markets', 'Long consideration cycles', 'Seasonal demand fluctuations', 'Listing inventory management'],
    opportunities: ['Local SEO for neighborhood-level capture', 'Development pre-launch SEO strategy', 'Investment property content authority', 'Virtual tour and visual search optimization'],
    roadmap: [
      { phase: '01', title: 'Market Mapping', description: 'Map search demand across your target markets and property types.' },
      { phase: '02', title: 'Local Dominance', description: 'Establish neighborhood-level visibility and listing optimization.' },
      { phase: '03', title: 'Authority Building', description: 'Build market expertise authority through content and local presence.' },
      { phase: '04', title: 'Pipeline Optimization', description: 'Optimize conversion paths and scale across new markets.' },
    ],
    results: ['Qualified inquiries 400% increase', 'Local search visibility 90%+', 'Time-to-lease reduction 30%', 'Pipeline value 6x growth'],
  },
  {
    slug: 'architecture',
    title: 'Architecture',
    tagline: 'Let your work speak before you do.',
    description: 'Architecture firms win projects through demonstrated vision and expertise. We build digital platforms that showcase your portfolio, establish thought leadership, and attract the clients and projects that define your practice.',
    challenges: ['Project-based revenue creates pipeline anxiety', 'Portfolio-dependent sales process', 'Limited digital marketing expertise in-house', 'Competition from larger firms with bigger budgets'],
    opportunities: ['Project showcase SEO for inspiration searches', 'Thought leadership for design philosophy queries', 'Local SEO for regional project acquisition', 'AEO for architecture and design AI queries'],
    roadmap: [
      { phase: '01', title: 'Practice Positioning', description: 'Define your digital positioning and highest-value project types.' },
      { phase: '02', title: 'Portfolio Platform', description: 'Build a portfolio-driven platform optimized for search and conversion.' },
      { phase: '03', title: 'Thought Leadership', description: 'Establish design philosophy authority through strategic content.' },
      { phase: '04', title: 'Practice Growth', description: 'Scale visibility and attract progressively higher-caliber projects.' },
    ],
    results: ['Project inquiries 350% increase', 'High-value client acquisition 4x', 'Portfolio visibility 5x', 'Practice revenue 2x growth'],
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    tagline: 'Attract clients who value your creative vision.',
    description: 'Interior design is visual, emotional, and deeply personal. We build digital presence strategies that capture the aspirational searches that lead to high-value client relationships — from inspiration to inquiry.',
    challenges: ['Visual-first audience difficult to capture through text SEO', 'Competing with content platforms for attention', 'Client acquisition dependent on referrals', 'Difficulty scaling beyond local market'],
    opportunities: ['Visual SEO for inspiration and style searches', 'Local SEO for regional client acquisition', 'Social-search integration for brand building', 'AEO for design recommendation queries'],
    roadmap: [
      { phase: '01', title: 'Style Positioning', description: 'Define your design style positioning and target client search behavior.' },
      { phase: '02', title: 'Visual Platform', description: 'Create a visually-driven platform optimized for design searches.' },
      { phase: '03', title: 'Inspiration Authority', description: 'Build authority through style guides, project stories, and trend content.' },
      { phase: '04', title: 'Client Growth', description: 'Scale client acquisition and expand into new markets and styles.' },
    ],
    results: ['Client inquiries 300% increase', 'Project value 45% increase', 'Local market leadership', 'Referral diversification 3x'],
  },
];
