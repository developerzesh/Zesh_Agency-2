import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import type { Solution } from '../lib/data';

export default function SolutionDetail({ solution }: { solution: Solution }) {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText duration={1.4}><a href="/solutions.html" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700 mb-14 block">← Solutions</a></RevealText>
          <RevealText delay={0.1} duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.04em] leading-[0.9] mb-6">{solution.title}<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2} duration={1.6}><p className="font-syne text-2xl md:text-3xl font-800 text-text-secondary mb-8">{solution.tagline}</p></RevealText>
          <RevealText delay={0.3} duration={1.6}><p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl leading-[1.85] mb-16">{solution.description}</p></RevealText>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <RevealText duration={1.8}><h2 className="font-syne text-2xl md:text-4xl font-800 tracking-[-0.03em] mb-6">What we deliver<span className="text-signal">.</span></h2></RevealText>
              <RevealText delay={0.15} duration={1.4}><p className="font-lato text-base text-text-secondary leading-[1.85] mb-10">{solution.outcomes[0]}</p></RevealText>
              <MagneticButton strength={0.4}><a href="/contact.html" className="font-lato text-sm font-medium text-signal sig-hover">Start a Project →</a></MagneticButton>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <RevealText delay={0.1} duration={1.4}><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Core Capabilities</p></RevealText>
              {solution.features.map((f, i) => (
                <RevealText key={f} delay={0.15 + i * 0.05} duration={1.2}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-4 border-b border-border">
                    <div className="flex items-center gap-4">
                      <span className="w-1 h-1 rounded-full bg-signal/25 group-hover:bg-signal transition-colors duration-[1200ms]" />
                      <span className="font-lato text-sm md:text-base text-text-secondary group-hover:text-ink transition-colors duration-[1200ms]">{f}</span>
                    </div>
                  </motion.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText duration={1.8}><h2 className="font-syne text-2xl md:text-4xl font-800 tracking-[-0.03em] mb-16">Roadmap<span className="text-signal">.</span></h2></RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {solution.roadmap.map((phase, i) => (
              <RevealText key={phase.phase} delay={i * 0.1} duration={1.4}>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="border border-border rounded-2xl p-8">
                  <span className="font-lato text-[11px] tracking-[0.2em] uppercase text-signal mb-4 block">{phase.phase}</span>
                  <h3 className="font-syne text-xl font-800 mb-3">{phase.title}</h3>
                  <p className="font-lato text-sm text-text-secondary leading-[1.85]">{phase.description}</p>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center">
          <RevealText duration={1.8}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Ready to grow<span className="text-signal">?</span></h2></RevealText>
          <RevealText delay={0.15} duration={1.4}><p className="font-lato text-base text-text-secondary max-w-md mx-auto mb-10 leading-[1.8]">Let's discuss how {solution.shortTitle} can accelerate your growth.</p></RevealText>
          <MagneticButton strength={0.4}><a href="/contact.html" className="font-lato text-sm font-medium text-signal sig-hover">Get Started →</a></MagneticButton>
        </div>
      </section>
    </PageTransition>
  );
}
