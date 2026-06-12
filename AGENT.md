# AI Agent Instructions — NEXUS Theme

> **Read THEME.md first.** This file tells you HOW to work with the theme while making changes for the client.

---

## Your Role

You are working with the NEXUS design theme. A client has loaded these files into their AI IDE and will ask you to customize the website for their business. Your job is to:

1. **Change content** — names, descriptions, services, team members, images, etc.
2. **Add/remove pages** — while maintaining the theme's layout and motion patterns
3. **Adjust functionality** — forms, navigation, data structures
4. **NEVER change the design language** — colors, typography, motion, spacing, component patterns

---

## Before You Write Any Code

1. Read `THEME.md` — the master design system
2. Read `src/index.css` — CSS custom properties and theme tokens
3. Read `src/lib/data.ts` — where all content lives
4. Read the relevant component files before editing them

---

## Content Changes

### Where to Edit Content
All content is centralized in data files:

| Data | File |
|------|------|
| Solutions, Industries, Case Studies, Insights, Careers, Nav | `src/lib/data.ts` |
| Extended solutions data | `src/data/solutions.ts` |
| Extended industries data | `src/data/industries.ts` |
| Extended case studies data | `src/data/caseStudies.ts` |
| Extended articles data | `src/data/articles.ts` |
| Extended careers data | `src/data/careers.ts` |

### How to Change the Brand Name
1. In `src/lib/data.ts`: Update the `siteConfig` object
2. In `src/components/Navigation.tsx`: Update the logo text
3. In `src/components/Footer.tsx`: Update the logo text
4. In `src/components/Preloader.tsx`: Update the logo text
5. In `index.html`: Update the `<title>` tag
6. In `public/favicon.svg`: Update if needed

### How to Change Colors
The 3-color system is defined in `src/index.css` under `@theme`. To change colors:
1. Update `--color-ink` (primary text/structure color)
2. Update `--color-paper` (background color)
3. Update `--color-signal` (accent color)
4. Update the derived surfaces accordingly
5. **Never add a 4th color.** The system is 3 colors maximum.

---

## Component Editing Rules

### When creating new sections or pages:
1. **Always use `PageTransition`** as the page wrapper
2. **Always use `RevealText`** for scroll-triggered content reveals
3. **Always use the blur entrance** — `initial={{ opacity: 0, filter: 'blur(20px)', y: 40 }}`
4. **Always use `slowEase`** — `[0.22, 1, 0.36, 1]`
5. **Always use generous spacing** — `py-32 md:py-48` between sections
6. **Always use `border-t border-border`** between sections
7. **Always end headlines with Signal period** — `<span className="text-signal">.</span>`
8. **Always use `MagneticButton`** for interactive CTAs
9. **Always use `CinematicImage`** for image displays

### When adding new interactive elements:
1. Wrap text CTAs in `MagneticButton`
2. Use `sig-hover` class for link underline animations
3. Hover transitions: `duration-700` to `duration-[1200ms]`
4. Color transitions: always toward Signal, never away
5. Use `whileHover={{ x: 6 }}` for list rows, `whileHover={{ y: -4 }}` for cards

### When creating new pages:
1. Create in `src/pages/`
2. Add route in `src/App.tsx`
3. Use the standard page structure:
```tsx
import PageTransition from '../components/PageTransition';
import RevealText from '../components/RevealText';

export default function NewPage() {
  return (
    <PageTransition>
      {/* Hero section with scroll parallax */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pb-24">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="...">
          <RevealText duration={2}><h1>Page Title<span className="text-signal">.</span></h1></RevealText>
        </motion.div>
      </section>
      
      {/* Content sections with border separators */}
      <section className="py-28 md:py-36 border-t border-border">
        ...
      </section>
    </PageTransition>
  );
}
```

---

## Motion Reference

### Standard RevealText
```tsx
<RevealText delay={0.1} duration={1.4}>
  {content}
</RevealText>
```

### Stagger Pattern
```tsx
{items.map((item, i) => (
  <RevealText key={item.id} delay={i * 0.07} duration={1.4}>
    {content}
  </RevealText>
))}
```

### Hover Row
```tsx
<motion.div
  whileHover={{ x: 6 }}
  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
  className="group"
>
  <h3 className="group-hover:text-signal transition-colors duration-[1200ms]">Title</h3>
</motion.div>
```

### Hero Scroll Parallax
```tsx
const heroRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
```

---

## File Structure Reference

```
src/
├── App.tsx              # Routes and providers
├── main.tsx             # Entry point
├── index.css            # Theme tokens and global styles
├── components/
│   ├── RevealText.tsx   # Scroll reveal with blur
│   ├── MagneticButton.tsx  # Magnetic hover effect
│   ├── CinematicImage.tsx  # Image with blur reveal + parallax
│   ├── ImageModal.tsx   # Fullscreen image viewer
│   ├── CustomCursor.tsx # Custom cursor with spring physics
│   ├── CursorContext.tsx # Cursor state management
│   ├── PageTransition.tsx  # Page enter/exit with blur
│   ├── Preloader.tsx    # Loading screen
│   ├── Navigation.tsx   # Fixed nav + mobile menu
│   ├── Footer.tsx       # Multi-column footer
│   ├── ParticleField.tsx   # Three.js particles
│   ├── WireframeGlobe.tsx  # Three.js globe
│   ├── FloatingGeometry.tsx # Three.js shapes
│   └── MorphingShape.tsx   # Three.js morphing
├── sections/            # Home page sections
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── FeaturedSolutions.tsx
│   ├── CaseStudiesPreview.tsx
│   ├── IndustriesPreview.tsx
│   ├── InsightsPreview.tsx
│   ├── WhyChooseUs.tsx
│   ├── ResultsMetrics.tsx
│   └── GlobalCTA.tsx
├── pages/               # Full pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Solutions.tsx
│   ├── SolutionDetail.tsx
│   ├── Industries.tsx
│   ├── IndustryDetail.tsx
│   ├── CaseStudies.tsx
│   ├── CaseStudyDetail.tsx
│   ├── Insights.tsx
│   ├── InsightArticle.tsx
│   ├── Careers.tsx
│   ├── CareerDetail.tsx
│   ├── Contact.tsx
│   ├── Studio.tsx
│   ├── Lab.tsx
│   ├── Philosophy.tsx
│   └── WorkDetail.tsx
├── lib/
│   └── data.ts          # Primary content data
└── data/                # Extended content data
    ├── solutions.ts
    ├── industries.ts
    ├── caseStudies.ts
    ├── articles.ts
    └── careers.ts
```
