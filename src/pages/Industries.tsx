import RevealText from '../components/RevealText';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { industries } from '../lib/data';

export default function Industries() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden pb-24">
        <ParticleField />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-32 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">WHO WE SERVE</p></RevealText>
          <RevealText duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">Dominate the Search Environments Where Your Clients Buy<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.3} duration={1.6}><p className="font-lato text-lg md:text-xl text-text-secondary max-w-lg mt-10 leading-[1.85]">We specialize exclusively in high-value business models where trust, authority, and positioning determine market share. Discover our vertical-specific frameworks below.</p></RevealText>
        </motion.div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {industries.map((ind, i) => (
              <RevealText key={ind.slug} delay={i * 0.07} duration={1.4}>
                <a href={`/industries.html?slug=${ind.slug}`} className="group block py-10 md:py-12 px-0 border-b border-border md:even:pl-16 md:odd:pr-16">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{ind.title}</h3>
                    <span className="text-signal group-hover:text-signal transition-colors duration-[1200ms]">→</span>
                  </div>
                  <p className="font-lato text-sm text-text-secondary leading-[1.8]">{ind.tagline}</p>
                </a>
              </RevealText>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
