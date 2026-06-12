import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import { careers, perks } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

function PositionRow({ position, index }: { position: typeof careers[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <RevealText delay={index * 0.06}>
      <motion.div layout onClick={() => setIsExpanded(!isExpanded)} className="group">
        <motion.div whileHover={{ x: 6 }} transition={{ duration: 1, ease: slowEase }} className="py-8 md:py-10 border-b border-border">
          <div className="flex items-start md:items-baseline justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{position.department}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted/20" />
                <span className="font-lato text-[11px] text-text-muted">{position.location}</span>
                <span className="font-lato text-[11px] text-text-muted">· {position.type}</span>
              </div>
              <h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{position.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.8, ease: slowEase }}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-text-muted group-hover:text-signal transition-colors duration-700"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0, filter: isExpanded ? 'blur(0px)' : 'blur(8px)' }}
            transition={{ duration: 0.8, ease: slowEase }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <p className="font-lato text-sm text-text-secondary leading-[1.85] mb-6 max-w-xl">{position.description}</p>
              <div className="mb-6">
                {position.requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3 py-1">
                    <span className="text-signal text-xs mt-0.5">→</span>
                    <span className="font-lato text-sm text-text-secondary">{req}</span>
                  </div>
                ))}
              </div>
              <MagneticButton strength={0.2}>
                <a href="mailto:careers@zesh.agency" className="font-lato text-sm font-medium text-signal sig-hover">Apply Now →</a>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </RevealText>
  );
}

export default function Careers() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { damping: 50, stiffness: 30, mass: 2 });
  const glowY = useSpring(useTransform(mouseY, [-500, 500], [-5, 5]), { damping: 50, stiffness: 30, mass: 2 });

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden pb-20" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div style={{ x: glowX, y: glowY }} className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-signal/[0.012] blur-[200px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.006] blur-[160px]" />
        </div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-40 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Careers</p></RevealText>
          <RevealText delay={0.1}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">Join us<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-lg mt-8 leading-[1.85]">Built for operators who love quiet focus. We don't believe in corporate politics, endless status meetings, or micro-management.</p></RevealText>
        </motion.div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText><h2 className="font-syne text-3xl md:text-4xl font-800 tracking-tight mb-16">Our culture<span className="text-signal">.</span></h2></RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
            {perks.map((perk, i) => (
              <RevealText key={perk.title} delay={i * 0.06}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 1 }}>
                  <h3 className="font-syne text-lg font-800 mb-2">{perk.title}</h3>
                  <p className="font-lato text-sm text-text-secondary leading-[1.85]">{perk.description}</p>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-4">
              <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">{careers.length} Open Positions</p></RevealText>
              <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Open Roles<span className="text-signal">.</span></h2></RevealText>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <RevealText delay={0.2}><p className="font-lato text-base text-text-secondary leading-[1.85]">Fully remote. Click any role to learn more.</p></RevealText>
            </div>
          </div>
          <div>{careers.map((p, i) => <PositionRow key={p.slug} position={p} index={i} />)}</div>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Don't see your role<span className="text-signal">?</span></h2></RevealText>
          <RevealText delay={0.1}><p className="font-lato text-base text-text-secondary max-w-md mb-8 leading-[1.85]">We're always interested in exceptional people. Send us your portfolio, GitHub, or cleanest project.</p></RevealText>
          <MagneticButton strength={0.3}><a href="mailto:careers@zesh.agency" className="font-lato text-sm font-medium text-signal sig-hover">careers@zesh.agency →</a></MagneticButton>
        </div>
      </section>
    </PageTransition>
  );
}
