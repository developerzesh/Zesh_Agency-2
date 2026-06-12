import RevealText from '../components/RevealText';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { solutions } from '../lib/data';

export default function Solutions() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden pb-24">
        <ParticleField />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-32 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">WHAT WE BUILD</p></RevealText>
          <RevealText duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">Growth Systems Built for Search Dominance<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.3} duration={1.6}><p className="font-lato text-lg md:text-xl text-text-secondary max-w-lg mt-10 leading-[1.85]">We replace abstract vanity metrics with attributed sales pipelines. Below is the technical roadmap and capability suite we deploy to establish authority inside traditional, AI, and conversational search platforms.</p></RevealText>
        </motion.div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          {solutions.map((s, i) => (
            <RevealText key={s.slug} delay={i * 0.07} duration={1.4}>
              <a href={`/solutions.html?slug=${s.slug}`} className="group block">
                <motion.div whileHover={{ x: 6 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="flex items-start md:items-baseline justify-between gap-4 py-10 md:py-14 border-b border-border">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="font-lato text-[11px] text-text-muted w-8">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-syne text-2xl md:text-4xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{s.title}</h3>
                    </div>
                    <p className="font-lato text-sm text-text-secondary leading-[1.8] max-w-lg md:ml-12">{s.tagline}</p>
                  </div>
                  <span className="font-syne text-sm font-800 text-signal group-hover:text-signal transition-colors duration-[1200ms] flex-shrink-0 pt-2">{s.shortTitle} →</span>
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
