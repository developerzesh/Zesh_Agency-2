import MagneticButton from './MagneticButton';
import { useCursor } from './CursorContext';

export default function Footer() {
  const { startLoading } = useCursor();
  const handleNav = () => startLoading();

  return (
    <footer className="border-t border-border py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-28">
          <div className="col-span-2 md:col-span-3">
            <MagneticButton strength={0.1}><a href="/index.html" onClick={handleNav} className="block"><img src="/images/zesh_logo.png" alt="ZESH." className="h-7 md:h-8 w-auto" /></a></MagneticButton>
            <p className="font-lato text-sm text-text-secondary mt-5 max-w-[240px] leading-[1.85]">Partnering with ambitious brands to engineer high-converting growth systems.</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Capabilities</p>
            <ul className="space-y-3">{[{ label: 'Search Engine Optimization', path: '/solutions.html?slug=seo' }, { label: 'Answer & Generative Engine Optimization', path: '/solutions.html?slug=aeo' }, { label: 'Growth Engineering & Web Development', path: '/solutions.html?slug=web-dev' }, { label: 'Lead Generation Systems', path: '/solutions.html?slug=lead-gen' }].map((l) => (<li key={l.label}><a href={l.path} onClick={handleNav} className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700">{l.label}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Consultancy</p>
            <ul className="space-y-3">{[{ label: 'Why Partner With Us', path: '/about.html' }, { label: 'Featured Cases', path: '/case-studies.html' }, { label: 'Insights & Advisory', path: '/insights.html' }, { label: 'Careers', path: '/careers.html' }].map((l) => (<li key={l.label}><a href={l.path} onClick={handleNav} className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700">{l.label}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Legal & Admin</p>
            <ul className="space-y-3">{[{ label: 'Privacy Policy', path: '/index.html' }, { label: 'Terms of Engagement', path: '/index.html' }, { label: 'Client Portal Access', path: '/index.html' }].map((l) => (<li key={l.label}><a href={l.path} onClick={handleNav} className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700">{l.label}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Offices</p>
            <ul className="space-y-3">{['New York', 'London', 'Tokyo', 'Dubai'].map((city) => (<li key={city} className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-signal" /><span className="font-lato text-sm text-text-secondary">{city}</span></li>))}</ul>
          </div>
        </div>
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lato text-[11px] text-text-muted">© 2026 Zesh Agency LLC. All rights reserved.</p>
          <div className="flex items-center gap-8">{['Twitter', 'LinkedIn', 'Dribbble'].map((s) => (<a key={s} href="#" className="font-lato text-[11px] text-text-muted hover:text-ink transition-colors duration-700">{s}</a>))}</div>
        </div>
      </div>
    </footer>
  );
}
