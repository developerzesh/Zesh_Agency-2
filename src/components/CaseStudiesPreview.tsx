import { motion } from 'framer-motion';
import RevealText from './RevealText';
import CinematicImage from './CinematicImage';
import { caseStudies } from '../lib/data';

export default function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24 md:mb-32">
          <div>
            <RevealText duration={2}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em]">Case Studies<span className="text-signal">.</span></h2></RevealText>
          </div>
          <RevealText delay={0.2} duration={1.6}>
            <p className="font-lato text-base md:text-lg text-text-secondary max-w-md leading-[1.85]">Real results for real companies. Every number is verified, every story is true.</p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {caseStudies.map((cs, i) => (
            <RevealText key={cs.slug} delay={i * 0.12} duration={1.8}>
              <a href={`/case-studies.html?slug=${cs.slug}`}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group">
                  <CinematicImage
                    src={cs.image}
                    alt={cs.title}
                    aspect="4/3"
                    revealDelay={i * 0.08}
                    parallaxStrength={0.1}
                    hoverZoom={1.03}
                    revealDuration={2}
                  />
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-border mt-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{cs.industry}</span>
                        <span className="w-1 h-1 rounded-full bg-text-muted/15" />
                        <span className="font-lato text-[11px] text-text-muted">{cs.client}</span>
                      </div>
                      <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{cs.title}</h3>
                    </div>
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="font-lato text-sm text-signal group-hover:text-signal transition-colors duration-[1200ms] mt-2">→</motion.span>
                  </div>
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.3}>
          <div className="mt-20 md:mt-24 flex justify-center">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
              <a href="/case-studies.html" className="font-lato text-sm font-medium text-signal sig-hover">View All Case Studies</a>
            </motion.div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
