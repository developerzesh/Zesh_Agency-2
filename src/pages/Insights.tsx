import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import PageTransition from '../components/PageTransition';
import { insights, insightCategories } from '../lib/data';

export default function Insights() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? insights : insights.filter(a => a.category === activeCategory);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { damping: 50, stiffness: 30, mass: 2 });
  const glowY = useSpring(useTransform(mouseY, [-500, 500], [-5, 5]), { damping: 50, stiffness: 30, mass: 2 });

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden pb-24" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div style={{ x: glowX, y: glowY }} className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-signal/[0.012] blur-[200px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-ink/[0.006] blur-[180px]" />
        </div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-32 w-full">
          <RevealText duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">Insights<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.3} duration={1.6}><p className="font-lato text-lg md:text-xl text-text-secondary max-w-lg mt-10 leading-[1.85]">Straightforward analysis for growth-focused operators.</p></RevealText>
        </motion.div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-8">
          <div className="flex flex-wrap gap-6">
            {insightCategories.map((cat) => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.6 }} className={`font-lato text-[11px] tracking-[0.12em] uppercase transition-colors duration-700 ${activeCategory === cat ? 'text-ink' : 'text-text-muted hover:text-ink'}`}>{cat}</motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          {filtered.map((article, i) => (
            <RevealText key={article.slug} delay={i * 0.07} duration={1.4}>
              <a href={`/insights.html?slug=${article.slug}`}>
                <motion.article whileHover={{ x: 4 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-10 border-b border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted/15" />
                    <span className="font-lato text-[11px] text-text-muted">{article.date}</span>
                    <span className="font-lato text-[11px] text-text-muted">· {article.readTime}</span>
                  </div>
                  <h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight leading-tight group-hover:text-signal transition-colors duration-[1200ms] mb-3">{article.title}</h3>
                  <p className="font-lato text-sm text-text-secondary leading-[1.8] max-w-xl">{article.excerpt}</p>
                </motion.article>
              </a>
            </RevealText>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
