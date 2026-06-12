import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { solutions, industries, caseStudies } from '../lib/data';
import { useCursor } from './CursorContext';
import { useTheme } from './ThemeContext';

interface SubItem { label: string; path: string }
interface NavItem { label: string; path: string; submenu?: SubItem[] }

const insightCategories = ['AI & Search', 'Web Development', 'SEO Strategy'];
const navItems: NavItem[] = [
  { label: 'About', path: '/about.html' },
  { label: 'Solutions', path: '/solutions.html', submenu: solutions.map(s => ({ label: s.title, path: `/solutions.html?slug=${s.slug}` })) },
  { label: 'Industries', path: '/industries.html', submenu: industries.map(i => ({ label: i.title, path: `/industries.html?slug=${i.slug}` })) },
  { label: 'Case Studies', path: '/case-studies.html', submenu: caseStudies.map(cs => ({ label: cs.title, path: `/case-studies.html?slug=${cs.slug}` })) },
  { label: 'Insights', path: '/insights.html', submenu: [{ label: 'All Articles', path: '/insights.html' }, ...insightCategories.map(c => ({ label: c, path: '/insights.html' }))] },
  { label: 'Careers', path: '/careers.html', submenu: [{ label: 'Open Roles', path: '/careers.html' }] },
  { label: 'Contact', path: '/contact.html' },
];

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = window.location.pathname;
  const { startLoading } = useCursor();
  const submenuTimeout = useRef<ReturnType<typeof setTimeout>>();

  const { isDark, toggleTheme } = useTheme();
  const handleNavClick = () => { startLoading(); setIsOpen(false); };

  const showSubmenu = (path: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setActiveSubmenu(path);
  };

  const hideSubmenu = () => {
    submenuTimeout.current = setTimeout(() => setActiveSubmenu(null), 300);
  };

  const activeItem = navItems.find(item => item.path === activeSubmenu);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: slowEase }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-6 md:mx-16 mt-5 bg-paper/80 backdrop-blur-2xl border border-border/40 rounded-2xl px-6 md:px-10 py-4 flex items-center justify-between">
          <MagneticButton strength={0.2}>
            <a href="/index.html" onClick={handleNavClick} className="block">
              <img src="/images/zesh_logo.png" alt="ZESH." className="h-6 md:h-7 w-auto" />
            </a>
          </MagneticButton>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                onMouseEnter={() => item.submenu && showSubmenu(item.path)}
                onMouseLeave={hideSubmenu}
                className="relative"
              >
                <a
                  href={item.path}
                  onClick={handleNavClick}
                  className={`font-lato text-[11px] tracking-[0.14em] uppercase px-4 py-2 rounded-lg transition-all duration-700 ${
                    activeSubmenu === item.path
                      ? 'text-ink bg-surface'
                      : pathname === item.path
                        ? 'text-ink'
                        : 'text-text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </div>
            ))}
            </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="font-lato text-[11px] tracking-[0.14em] uppercase px-3 py-2 rounded-lg text-text-muted hover:text-ink transition-colors duration-700 hidden lg:block"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 w-7">
            <motion.span animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-ink origin-center" />
            <motion.span animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="block h-[1.5px] w-full bg-ink origin-center" />
            <motion.span animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-ink origin-center" />
          </button>
        </div>
        </div>

        {/* Desktop mega dropdown */}
        <AnimatePresence>
          {activeSubmenu && activeItem?.submenu && (
            <motion.div
              initial={{ opacity: 0, y: -8, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: slowEase }}
              onMouseEnter={() => showSubmenu(activeSubmenu)}
              onMouseLeave={hideSubmenu}
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-3xl"
            >
              <div className="mx-6 md:mx-16 bg-paper/90 backdrop-blur-2xl border border-border/40 rounded-2xl px-10 py-8 shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-syne text-2xl font-800 text-ink">{activeItem.label}</p>
                    <p className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted mt-1">Explore {activeItem.label.toLowerCase()}</p>
                  </div>
                  <a
                    href={activeItem.path}
                    onClick={handleNavClick}
                    className="font-lato text-[11px] tracking-[0.1em] uppercase text-signal hover:text-ink transition-colors duration-700 sig-hover"
                  >
                    View All →
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-1">
                  {activeItem.submenu.map((sub, i) => (
                    <motion.div
                      key={sub.path + sub.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.4, ease: slowEase }}
                    >
                      <a
                        href={sub.path}
                        onClick={handleNavClick}
                        className="group flex items-center gap-3 py-2.5 border-b border-border/30 hover:border-signal/20 transition-colors duration-700"
                      >
                        <span className="w-1 h-1 rounded-full bg-signal/0 group-hover:bg-signal transition-all duration-700" />
                        <span className="font-lato text-sm text-text-secondary group-hover:text-ink transition-colors duration-700">{sub.label}</span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-40 bg-paper"
          >
            <div className="h-full flex flex-col pt-28 px-8 md:px-16 pb-8 overflow-y-auto">
              <div className="flex-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, filter: 'blur(16px)', x: -24 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    exit={{ opacity: 0, filter: 'blur(12px)', x: -16 }}
                    transition={{ delay: i * 0.06, duration: 0.8, ease: slowEase }}
                    className="mb-1"
                  >
                    <a
                      href={item.path}
                      onClick={handleNavClick}
                      className="font-syne text-4xl md:text-6xl font-800 text-ink/70 hover:text-signal transition-colors duration-700 block py-2"
                    >
                      {item.label}
                    </a>
                    {item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, filter: 'blur(6px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ delay: i * 0.06 + 0.15, duration: 0.6 }}
                        className="grid grid-cols-2 gap-x-6 pl-1 pt-1 pb-4"
                      >
                        {item.submenu.slice(0, 4).map((sub) => (
                          <a
                            key={sub.path + sub.label}
                            href={sub.path}
                            onClick={handleNavClick}
                            className="font-lato text-[11px] tracking-[0.08em] uppercase text-text-muted hover:text-ink transition-colors duration-700 py-1"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="pt-8 mt-auto"
              >
                <div className="border-t border-border/50 pt-6">
                  <div className="flex flex-wrap gap-8 mb-6">
                    {['New York', 'London', 'Tokyo', 'Dubai'].map((city) => (
                      <span key={city} className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted">{city}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {['Twitter', 'LinkedIn', 'Dribbble'].map((s) => (
                      <a key={s} href="#" className="font-lato text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-ink transition-colors duration-700">{s}</a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <button onClick={toggleTheme} className="font-lato text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-ink transition-colors duration-700">
                      {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
