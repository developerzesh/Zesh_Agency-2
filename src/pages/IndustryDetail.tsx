import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import type { Industry } from '../lib/data';

export default function IndustryDetail({ industry }: { industry: Industry }) {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText duration={1.4}><a href="/industries.html" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700 mb-14 block">← Industries</a></RevealText>
          <RevealText delay={0.1} duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.04em] leading-[0.9] mb-6">{industry.title}<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2} duration={1.6}><p className="font-syne text-2xl md:text-3xl font-800 text-text-secondary mb-8">{industry.tagline}</p></RevealText>
          <RevealText delay={0.3} duration={1.6}><p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl leading-[1.85]">{industry.description}</p></RevealText>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <RevealText duration={1.6}><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Challenges We Solve</p></RevealText>
              {industry.challenges.map((c, i) => (
                <RevealText key={c} delay={0.1 + i * 0.05} duration={1.2}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-4 border-b border-border">
                    <div className="flex items-center gap-4">
                      <span className="w-1 h-1 rounded-full bg-signal/25 group-hover:bg-signal transition-colors duration-[1200ms]" />
                      <span className="font-lato text-sm md:text-base text-text-secondary group-hover:text-ink transition-colors duration-[1200ms]">{c}</span>
                    </div>
                  </motion.div>
                </RevealText>
              ))}
            </div>
            <div>
              <RevealText delay={0.1} duration={1.6}><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Our Approach</p></RevealText>
              {industry.opportunities.map((s, i) => (
                <RevealText key={s} delay={0.15 + i * 0.05} duration={1.2}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-4 border-b border-border">
                    <div className="flex items-center gap-4">
                      <span className="w-1 h-1 rounded-full bg-ink/15 group-hover:bg-ink transition-colors duration-[1200ms]" />
                      <span className="font-lato text-sm md:text-base text-text-secondary group-hover:text-ink transition-colors duration-[1200ms]">{s}</span>
                    </div>
                  </motion.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText duration={1.8}><h2 className="font-syne text-2xl md:text-4xl font-800 tracking-[-0.03em] mb-16">Attributed Impact<span className="text-signal">.</span></h2></RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {industry.results.map((result, i) => (
              <RevealText key={result} delay={i * 0.1} duration={1.4}>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                  <span className="font-lato text-2xl md:text-3xl font-700 tracking-tight text-signal mb-2 block">{result.split(' ')[0]}</span>
                  <p className="font-lato text-sm text-text-secondary">{result.split(' ').slice(1).join(' ')}</p>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText duration={1.8}><h2 className="font-syne text-2xl md:text-4xl font-800 tracking-[-0.03em] mb-16">Strategic Roadmap<span className="text-signal">.</span></h2></RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {industry.roadmap.map((phase, i) => (
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
          <RevealText duration={1.8}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Ready to grow in {industry.title.toLowerCase()}<span className="text-signal">?</span></h2></RevealText>
          <RevealText delay={0.15} duration={1.4}><p className="font-lato text-base text-text-secondary max-w-md mx-auto mb-10 leading-[1.8]">Let's discuss a strategy tailored to your market.</p></RevealText>
          <MagneticButton strength={0.4}><a href="/contact.html" className="font-lato text-sm font-medium text-signal sig-hover">Get Started →</a></MagneticButton>
        </div>
      </section>
    </PageTransition>
  );
}
