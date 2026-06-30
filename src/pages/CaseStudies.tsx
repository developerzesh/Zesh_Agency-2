import RevealText from '../components/RevealText';
import PageTransition from '../components/PageTransition';
import CinematicImage from '../components/CinematicImage';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { caseStudies } from '../lib/data';
import { useCursor } from '../components/CursorContext';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CaseStudies() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const { startLoading } = useCursor();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });
  const glowY = useSpring(useTransform(mouseY, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden pb-24" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div style={{ x: glowX, y: glowY }} className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-signal/[0.015] blur-[220px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.008] blur-[180px]" />
        </div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-32 w-full">
          <RevealText duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">Case Studies<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.3} duration={1.6}><p className="font-lato text-lg md:text-xl text-text-secondary max-w-lg mt-10 leading-[1.85]">Strategic shifts that changed business trajectories. Every number is verified, every story is true.</p></RevealText>
        </motion.div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {caseStudies.map((cs, i) => (
              <RevealText key={cs.slug} delay={i * 0.1} duration={1.6}>
                <a href={`/case-studies.html?slug=${cs.slug}`} onClick={startLoading} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.6, ease: slowEase }}
                    className="h-full bg-surface/20 border border-border/40 hover:border-signal/40 p-6 rounded-3xl backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top linear glow */}
                    <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

                    <div>
                      {/* Image section */}
                      <div className="rounded-2xl overflow-hidden mb-6 relative">
                        <CinematicImage
                          src={cs.image}
                          alt={cs.title}
                          aspect="16/9"
                          revealDelay={i * 0.06}
                          parallaxStrength={0.06}
                          hoverZoom={1.03}
                          revealDuration={1.6}
                        />
                      </div>

                      {/* Client + Industry Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded bg-signal/15 text-signal border border-signal/25 inline-block font-semibold">
                          {cs.industry}
                        </span>
                        <span className="font-lato text-[10px] text-text-muted tracking-wider uppercase font-bold">
                          {cs.client}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight mb-4 group-hover:text-signal transition-colors duration-500">
                        {cs.title}
                      </h3>

                      {/* Challenge & Solution info grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-border/20 border-b border-border/20 mb-4 bg-white/[0.02] dark:bg-white/[0.01] rounded-xl px-4">
                        <div>
                          <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-text-muted font-bold block mb-1">
                            Challenge
                          </span>
                          <p className="font-lato text-xs text-text-secondary leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-signal font-bold block mb-1">
                            Solution
                          </span>
                          <p className="font-lato text-xs text-[#a1a1aa] leading-relaxed">
                            {cs.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results Accomplished */}
                      <div className="mb-6">
                        <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-[#a1a1aa] font-bold block mb-2">
                          Key Results
                        </span>
                        <ul className="space-y-2">
                          {cs.results.map((res, idx) => (
                            <li key={idx} className="flex items-start gap-2 font-lato text-xs text-text-secondary">
                              <span className="text-[#8cda28] font-bold select-none">✓</span>
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA section */}
                    <div className="pt-4 border-t border-border/20 flex justify-between items-center mt-auto">
                      <span className="font-lato text-sm font-semibold text-signal flex items-center gap-1.5 group-hover:text-ink transition-colors duration-300">
                        Explore Case Study
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </motion.div>
                </a>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
