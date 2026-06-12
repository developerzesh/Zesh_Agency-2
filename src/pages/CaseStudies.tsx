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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {caseStudies.map((cs, i) => (
              <RevealText key={cs.slug} delay={i * 0.1} duration={1.6}>
                <a href={`/case-studies.html?slug=${cs.slug}`} onClick={startLoading} className="group block h-full">
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 1, ease: slowEase }} className="h-full">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      <div className="md:col-span-2">
                        <CinematicImage
                          src={cs.image}
                          alt={cs.title}
                          aspect="1/1"
                          revealDelay={i * 0.06}
                          parallaxStrength={0.06}
                          hoverZoom={1.05}
                          revealDuration={1.6}
                        />
                      </div>
                      <div className="md:col-span-3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{cs.industry}</span>
                            <span className="w-1 h-1 rounded-full bg-text-muted/15" />
                            <span className="font-lato text-[11px] text-text-muted">{cs.client}</span>
                          </div>
                          <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight mb-3 group-hover:text-signal transition-colors duration-[1200ms]">{cs.title}</h3>
                          <p className="font-lato text-sm text-text-secondary leading-[1.8]">{cs.overview}</p>
                        </div>
                        <span className="font-lato text-sm font-medium text-signal sig-hover mt-6 block">Read Study →</span>
                      </div>
                    </div>
                    <div className="mt-6 border-b border-border" />
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
