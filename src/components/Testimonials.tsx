import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const testimonials = [
  { quote: "Zesh transformed our digital presence entirely. The attention to detail and strategic approach exceeded every expectation.", author: 'Sarah Chen', role: 'CEO, Meridian Group' },
  { quote: "Working with Zesh felt like having an extension of our own team. They understood our vision and elevated it beyond imagination.", author: 'Marcus Rivera', role: 'Founder, Vertex Labs' },
  { quote: "The results speak for themselves — 340% increase in organic pipeline. Zesh doesn't just market, they deliver measurable impact.", author: 'Elena Kowalski', role: 'CMO, Aether Audio' },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Testimonials</p></RevealText>
        <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em] mb-16 md:mb-24">Client Words<span className="text-signal">.</span></h2></RevealText>
        <motion.div style={{ x }} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <RevealText key={t.author} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.8, ease: slowEase }} className="group">
                <span className="text-signal text-3xl font-syne font-800 leading-none block mb-4">"</span>
                <p className="font-lato text-lg md:text-xl text-ink leading-[1.8] mb-8">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center">
                    <span className="font-lato text-[10px] font-medium text-paper">{t.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-lato text-sm font-medium text-ink">{t.author}</p>
                    <p className="font-lato text-[11px] text-text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </RevealText>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
