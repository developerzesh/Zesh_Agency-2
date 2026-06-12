import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesPreview() {
  return (
    <section className="py-32 md:py-48 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Proof</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.03em]">Case studies<span className="text-signal">.</span></h2></RevealText>
          <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-[1.8] mt-6">Real results from real engagements. No vanity metrics — just revenue impact.</p></RevealText>
        </div>
        {/* Full-width editorial rows — no cards */}
        <div>
          {caseStudies.slice(0, 3).map((cs, i) => (
            <RevealText key={cs.slug} delay={i * 0.1}>
              <a href={`/case-studies.html?slug=${cs.slug}`}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="group py-10 md:py-14 border-b border-border"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal">{cs.industry}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted/20" />
                    <span className="font-lato text-[10px] text-text-muted">{cs.services.join(' · ')}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                    <h3 className="font-syne text-2xl md:text-4xl font-800 group-hover:text-signal transition-colors duration-700">{cs.title}</h3>
                    <div className="flex flex-wrap gap-6">
                      {cs.results.slice(0, 2).map((r) => (
                        <span key={r} className="font-lato text-sm font-medium text-ink">{r}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.3}>
          <div className="text-center mt-14">
            <a href="/case-studies.html" className="font-lato text-sm text-signal sig-hover">View all case studies →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
