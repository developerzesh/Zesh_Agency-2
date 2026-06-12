import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import type { InsightArticle as InsightArticleType } from '../lib/data';

export default function InsightArticle({ article }: { article: InsightArticleType }) {
  return (
    <PageTransition>
      <article className="pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-16">
          <RevealText duration={1.4}><a href="/insights.html" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700 mb-14 block">← Insights</a></RevealText>

          <RevealText delay={0.1} duration={1.4}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{article.category}</span>
              <span className="w-1 h-1 rounded-full bg-text-muted/15" />
              <span className="font-lato text-[11px] text-text-muted">{article.date}</span>
              <span className="font-lato text-[11px] text-text-muted">· {article.readTime}</span>
            </div>
          </RevealText>

          <RevealText delay={0.2} duration={2}>
            <h1 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-[1.05] mb-12">{article.title}<span className="text-signal">.</span></h1>
          </RevealText>

          <RevealText delay={0.3} duration={1.6}>
            <div className="prose max-w-none">
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9] mb-6">{article.excerpt}</p>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9] mb-6">The landscape of search is undergoing its most significant transformation since Google's PageRank algorithm reshaped the web in 1998. The rise of AI-powered answer engines — from ChatGPT's browsing capabilities to Perplexity's real-time synthesis — has created an entirely new frontier for brand visibility.</p>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9] mb-6">For growth-focused organizations, this isn't a threat — it's an unprecedented opportunity. Brands that position themselves as authoritative sources in their domain will be cited by AI engines, recommended in synthesized answers, and featured in the conversational responses that increasingly shape buying decisions.</p>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9] mb-6">The key insight is that AI engines don't just index — they understand. They evaluate source credibility, synthesize multiple perspectives, and present the most authoritative answer. This means the brands that invest in genuine expertise, structured content, and clear positioning will win disproportionately.</p>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9]">The question isn't whether AI will transform search — it already has. The question is whether your brand will be visible when it does.</p>
            </div>
          </RevealText>

          <RevealText delay={0.4} duration={1.4}>
            <div className="mt-16 pt-8 border-t border-border">
              <MagneticButton strength={0.3}><a href="/contact.html" className="font-lato text-sm font-medium text-signal sig-hover">Discuss this topic →</a></MagneticButton>
            </div>
          </RevealText>
        </div>
      </article>
    </PageTransition>
  );
}
