import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import MagneticButton from '../components/MagneticButton';
import RevealText from '../components/RevealText';
import CinematicImage from '../components/CinematicImage';
import PageTransition from '../components/PageTransition';
import { solutions, industries, caseStudies, stats, heroContent, trustLabel, trustLogos, reasons } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const headlineWords = heroContent.headline.split(' ');
  const mid = Math.ceil(headlineWords.length / 2);
  const line1 = headlineWords.slice(0, mid).join(' ');
  const line2 = headlineWords.slice(mid).join(' ');

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen md:h-screen flex items-center overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-signal/[0.015] blur-[250px]" />
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.008] blur-[180px]" />
      </div>
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full pt-28 md:pt-32">
        <motion.p
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.3, ease: slowEase }}
          className="font-lato text-[11px] tracking-[0.3em] uppercase text-text-muted mb-14 md:mb-20"
        >
          {heroContent.badge}
        </motion.p>
        <h1 className="font-syne text-[clamp(2.2rem,5.5vw,5.5rem)] font-800 leading-[0.9] tracking-[-0.03em] mb-12 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: slowEase }}
            className="block mb-2"
          >
            {line1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease: slowEase }}
            className="block"
          >
            {line2}
          </motion.span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
          <motion.p
            initial={{ opacity: 0, filter: 'blur(24px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.4, ease: slowEase }}
            className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] max-w-lg"
          >
            {heroContent.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.7, ease: slowEase }}
            className="flex flex-col items-start gap-4"
          >
            <MagneticButton strength={0.4}>
              <a href="/contact.html" className="group flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                  <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                </span>
                <span className="font-lato text-sm font-medium text-ink md:inline">{heroContent.primaryCTA.label}</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a href="/case-studies.html" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">{heroContent.secondaryCTA.label}</a>
            </MagneticButton>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 2.5, duration: 1.8, ease: slowEase }}
          className="font-lato text-[10px] text-text-muted mt-16 max-w-sm leading-relaxed"
        >
          {heroContent.microcopy}
        </motion.p>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  const logos = [...trustLogos, ...trustLogos];
  return (
    <section className="relative py-20 border-y border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 mb-8">
        <RevealText>
          <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-text-muted text-center md:text-left">{trustLabel}</p>
        </RevealText>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-24 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          {logos.map((logo, i) => (
            <div key={`${logo.mark}-${i}`} className="flex items-center gap-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-ink/[0.04] flex items-center justify-center">
                <span className="font-syne text-xs font-800 text-ink/50">{logo.mark}</span>
              </div>
              <span className="font-syne text-lg font-800 text-ink/40 tracking-tight whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE DIFFERENCE</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Built for operators who expect clear growth systems<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85]">We built this consultancy to focus purely on measurable outcomes. Our mission is to align strategic growth planning with high-converting execution, replacing speculation with performance.</p>
            </RevealText>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {reasons.map((r, i) => (
            <RevealText key={r.number} delay={i * 0.12} duration={1.4}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.8, ease: slowEase }} className="group">
                <span className="font-lato text-[11px] tracking-[0.15em] text-signal">{r.number}</span>
                <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mt-4 mb-5 group-hover:text-signal transition-colors duration-[1200ms]">{r.title}</h3>
                <p className="font-lato text-sm text-text-secondary leading-[1.85]">{r.description}</p>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  const topSolutions = solutions.slice(0, 4);
  const diagnoses = [
    'Your site has technical barriers preventing crawlers from indexing your highest-value pages.',
    'Conversational AI models don\x27t cite your brand because your entity lacks structured semantic trust signals.',
    'Generative search engines compile answers without referencing your domain or expertise.',
    'Slow, plugin-heavy architecture is killing your conversion rates and wasting your crawl budget.',
  ];
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">CAPABILITIES</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Engineered to capture market share<span className="text-signal">.</span></h2></RevealText>
          </div>
        </div>
        <div className="space-y-0">
          {topSolutions.map((s, i) => (
            <RevealText key={s.slug} delay={i * 0.1} duration={1.4}>
              <motion.a
                href={`/solutions.html?slug=${s.slug}`}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.8, ease: slowEase }}
                className="group block py-8 md:py-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px flex-1 bg-border/40" />
                  <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-border/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-5">
                    <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal mb-3">Diagnosis</p>
                    <p className="font-lato text-sm md:text-base text-text-muted leading-[1.8]">&ldquo;{diagnoses[i]}&rdquo;</p>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal mb-2">Prescription</p>
                    <span className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal mb-1 block">{s.shortTitle}</span>
                    <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mb-3 group-hover:text-signal transition-colors duration-[1200ms]">{s.title}</h3>
                    <p className="font-lato text-sm text-text-secondary leading-[1.8] mb-3">{s.tagline}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                      {s.features.slice(0, 3).map((f) => (
                        <span key={f} className="font-lato text-[11px] text-text-muted">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                      <span className="font-lato text-[11px] font-medium text-signal">Evidence</span>
                      <span className="font-lato text-[11px] text-text-muted italic">{s.outcomes[0]}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.5}>
          <div className="mt-10 flex justify-start">
            <a href="/solutions.html" className="font-lato text-sm font-medium text-signal sig-hover">View All 8 Capabilities →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE METRICS</p></RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] max-w-3xl mb-20 md:mb-28">
            Partnering with ambitious brands who demand proven expertise, predictable systems, and real business results<span className="text-signal">.</span>
          </h2>
        </RevealText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          {stats.map((stat, i) => (
            <RevealText key={stat.label} delay={i * 0.12}>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 1, ease: slowEase }}>
                <span className="font-lato text-5xl md:text-7xl font-700 tracking-tight text-ink">{stat.value}</span>
                <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mt-4 max-w-xs">{stat.label}</p>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCaseStudy() {
  const cs = caseStudies[0];
  if (!cs) return null;
  const statPairs = [
    { value: cs.results[0]?.split(' ').slice(0, 2).join(' '), label: cs.results[0]?.split(' ').slice(2).join(' ') },
    { value: cs.results[1]?.split(' ').slice(0, 2).join(' '), label: cs.results[1]?.split(' ').slice(2).join(' ') },
    { value: cs.results[2]?.split(' ').slice(0, 2).join(' '), label: cs.results[2]?.split(' ').slice(2).join(' ') },
  ];
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PROOF</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Strategic shifts that changed business trajectories<span className="text-signal">.</span></h2></RevealText>
          </div>
        </div>
        <RevealText delay={0.2} duration={1.8}>
          <a href={`/case-studies.html?slug=${cs.slug}`} className="group block">
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 1, ease: slowEase }}>
              <div className="grid grid-cols-3 gap-6 md:gap-10 mb-10 md:mb-14 pb-10 md:pb-14 border-b border-border">
                {statPairs.map((p, i) => (
                  <RevealText key={p.label} delay={0.3 + i * 0.08}>
                    <div>
                      <span className="font-lato text-3xl md:text-5xl lg:text-6xl font-700 tracking-tight text-ink block leading-none mb-2">{p.value}</span>
                      <span className="font-lato text-[11px] md:text-xs text-text-muted uppercase tracking-[0.12em]">{p.label}</span>
                    </div>
                  </RevealText>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal">{cs.industry}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted/15" />
                    <span className="font-lato text-[10px] text-text-muted">{cs.client}</span>
                  </div>
                  <h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight mb-3 group-hover:text-signal transition-colors duration-[1200ms]">{cs.title}</h3>
                  <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.8]">{cs.overview}</p>
                </div>
                <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
                  <span className="font-lato text-sm font-medium text-signal sig-hover">Read Case Study →</span>
                </div>
              </div>
            </motion.div>
          </a>
        </RevealText>
      </div>
    </section>
  );
}

function IndustriesGrid() {
  const topIndustries = industries.slice(0, 4);
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-6">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">VERTICALS</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Specialized structures for high-value business models<span className="text-signal">.</span></h2></RevealText>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-6">
          {topIndustries.map((ind, i) => (
            <RevealText key={ind.slug} delay={i * 0.08} duration={1.4}>
              <a href={`/industries.html?slug=${ind.slug}`} className="group block py-6 border-b border-border">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-syne text-lg md:text-xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{ind.title}</h3>
                  <span className="text-signal group-hover:text-signal transition-colors duration-[1200ms] text-xs">→</span>
                </div>
                <p className="font-lato text-[13px] text-text-muted leading-[1.6]">{ind.tagline}</p>
              </a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.5}>
          <div className="mt-20">
            <a href="/industries.html" className="font-lato text-sm font-medium text-signal sig-hover">Explore All 8 Sectors We Serve →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

function CTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });

  return (
    <section id="contact" className="relative py-32 md:py-48 border-t border-border" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-signal/[0.02] blur-[200px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8">ACQUISITION</p></RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88] mb-12">
            Making marketing work for businesses<span className="text-signal">.</span>
          </h2>
        </RevealText>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <RevealText delay={0.2}><p className="font-lato text-base md:text-[17px] text-text-secondary max-w-md leading-[1.85]">We analyze your website metrics, inspect competitor search campaigns, and map out custom acquisition strategies from day one.</p></RevealText>
          <RevealText delay={0.3}>
            <div className="flex flex-col items-start gap-5">
              <MagneticButton strength={0.4}><a href="/contact.html" className="font-syne text-xl md:text-2xl font-800 text-ink hover:text-signal transition-colors duration-[1200ms] sig-hover">Book a Discovery Call</a></MagneticButton>
              <MagneticButton strength={0.2}><a href="/case-studies.html" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">View Case Studies</a></MagneticButton>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <SolutionsGrid />
      <Metrics />
      <FeaturedCaseStudy />
      <IndustriesGrid />
      <CTA />
    </PageTransition>
  );
}
