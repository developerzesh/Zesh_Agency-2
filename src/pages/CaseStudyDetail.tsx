import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import CinematicImage from '../components/CinematicImage';
import PageTransition from '../components/PageTransition';
import type { CaseStudy } from '../lib/data';

export default function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  return (
    <PageTransition>
      <section ref={heroRef} className="relative pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText duration={1.4}><a href="/case-studies.html" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700 mb-14 block">← Case Studies</a></RevealText>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{caseStudy.industry}</span>
            <span className="w-1 h-1 rounded-full bg-text-muted/15" />
            <span className="font-lato text-[11px] text-text-muted">{caseStudy.client}</span>
          </div>
          <RevealText delay={0.1} duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-7rem font-800 tracking-[-0.04em] leading-[0.9]">{caseStudy.title}<span className="text-signal">.</span></h1></RevealText>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-16">
        <RevealText duration={1.8}>
          <CinematicImage
            src={caseStudy.image}
            alt={caseStudy.title}
            aspect="16/9"
            parallaxStrength={0.08}
            revealDuration={2}
            hoverZoom={1.01}
          />
        </RevealText>
      </div>

      <section className="py-20 md:py-28"><div className="max-w-[1400px] mx-auto px-6 md:px-16"><div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"><div><RevealText duration={1.6}><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">The Challenge</p><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">{caseStudy.challenge}</p></RevealText></div><div><RevealText delay={0.15} duration={1.6}><h3 className="font-syne text-2xl md:text-3xl font-800 mb-4">The Solution</h3><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">{caseStudy.solution}</p></RevealText></div></div></div></section>

      <section className="py-32 md:py-48 border-t border-border"><div className="max-w-[1400px] mx-auto px-6 md:px-16"><RevealText duration={2}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-16">Results<span className="text-signal">.</span></h2></RevealText><div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">{caseStudy.results.map((result, i) => (<RevealText key={result} delay={i * 0.1} duration={1.6}><motion.div whileHover={{ y: -3 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}><span className="font-lato text-xl md:text-3xl font-700 tracking-tight text-ink">{result.split(' ')[0]}</span><p className="font-lato text-sm text-text-secondary mt-2">{result.split(' ').slice(1).join(' ')}</p></motion.div></RevealText>))}</div></div></section>

      <section className="py-32 md:py-48 border-t border-border"><div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center"><RevealText duration={1.8}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Want results like these<span className="text-signal">?</span></h2></RevealText><RevealText delay={0.15} duration={1.4}><p className="font-lato text-base text-text-secondary max-w-md mx-auto mb-10 leading-[1.8]">Let's discuss your growth goals.</p></RevealText><MagneticButton strength={0.4}><a href="/contact.html" className="font-lato text-sm font-medium text-signal sig-hover">Start a Project →</a></MagneticButton></div></section>
    </PageTransition>
  );
}
