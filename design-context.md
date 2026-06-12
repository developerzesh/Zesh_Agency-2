# NEXUS — Complete UI/UX Design Context

> This document contains every design decision, color value, typography rule, animation parameter, component specification, layout system, and content structure needed to recreate the NEXUS Creative Studio website pixel-perfectly. Feed this to any AI agent to reproduce the project exactly.

---

## 1. PROJECT OVERVIEW

**Name:** NEXUS — Global Creative Studio
**Type:** Single-page application (SPA) with 7 routes
**Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion + React Three Fiber + Lenis smooth scroll
**Aesthetic:** "Swiss Minimal meets Editorial Luxury" — Inspired by apple.com's clean layout philosophy: generous whitespace, restrained color, dramatic but slow blur-based motion, left-aligned typography, Apple-style rounded image cards.
**Brand Personality:** Premium, restrained, confident. The website whispers, never shouts. Signal color (vermillion red) appears only ~3% of the time — that restraint IS the brand.

---

## 2. COLOR SYSTEM — STRICT 3 COLORS, ZERO GRADIENTS

### Primary Colors (THE ONLY 3 COLORS USED ANYWHERE)

| Token | Hex | Role | Usage |
|-------|-----|------|-------|
| **Ink** | `#0A0A0A` | Primary text, buttons, structural elements | All headings, body text, CTA button bg, scrollbar, selection bg, divider accents |
| **Paper** | `#F6F5F0` | Background | Page bg, image reveal overlay, nav backdrop, preloader bg |
| **Signal** | `#D9382A` | Accent ONLY | Logo dot, headline periods, hover states, progress line, office location dots, CTA hover, testimonial quote marks |

### Derived Colors (contrast-safe variations, NOT new colors)

| Token | Hex | Usage |
|-------|-----|-------|
| **surface** | `#EDECE7` | Card backgrounds, image placeholder bg |
| **border** | `#DDDCD6` | All dividers, section borders, card borders |
| **text-primary** | `#0A0A0A` | Same as Ink — primary text |
| **text-secondary** | `#4A4A46` | Body text, descriptions |
| **text-muted** | `#7A7A75` | Labels, metadata, timestamps |

### Opacity Variations Used Throughout

- `bg-ink/[0.008]` — Atmospheric blur blobs (extremely subtle)
- `bg-ink/[0.06]` — Marquee text (barely visible)
- `text-ink/70` — Mobile menu items
- `text-signal/60` — Category labels on journal/careers
- `text-signal/40` — Department labels, arrows
- `text-signal/30` — Decorative dots in marquee
- `text-signal/20` — Ring dots in marquee
- `text-text-muted/30` — Separator dots between metadata

### ABSOLUTE RULES
1. **NO gradients anywhere** — no `gradient-text`, no `bg-gradient-*`, no CSS gradients
2. **NO additional colors** — no blue, purple, teal, orange beyond the 3 defined above
3. **Signal appears sparingly** — only on: logo dot, headline punctuation, hover states, progress indicators, accent dots, quote marks
4. **Ink is the workhorse** — 90% of all visible color is Ink on Paper
5. **Paper is never pure white** — always warm `#F6F5F0`

---

## 3. TYPOGRAPHY

### Font Loading (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Font Assignments

| Element | Font | Weight | Size (mobile → desktop) | Tracking | Leading |
|---------|------|--------|--------------------------|----------|---------|
| **H1 (Hero)** | Syne | 800 | `clamp(3.2rem, 9vw, 10rem)` | `-0.04em` | `0.9` |
| **H1 (Page heroes)** | Syne | 800 | `6xl → 8xl → 10rem` | `-0.04em` | `0.85` |
| **H2 (Section)** | Syne | 800 | `5xl → 7xl` | `-0.03em` | default |
| **H3 (Card/Row)** | Syne | 800 | `2xl → 4xl` | `tight` | default |
| **H4 (Subsection)** | Syne | 800 | `xl → 2xl` | default | default |
| **Body** | Inter | 400 | `base → lg` | default | `1.85` |
| **Label/Tag** | Inter | 400 | `11px` | `0.12em` uppercase | default |
| **Section Label** | Inter | 400 | `11px` | `0.3em` uppercase | default |
| **Nav Link** | Inter | 400 | `11px` | `0.18em` uppercase | default |
| **Meta/Date** | Inter | 400 | `11px` | default | default |
| **Stat Value** | Syne | 800 | `5xl → 7xl` | `tight` | default |
| **Preloader Number** | Syne | 800 | `7xl → 9xl` | `tabular-nums` | `none` |

### Typography Rules
1. **Every headline ends with a Signal-colored period** — `Services.`, `Projects.`, `About.`, `Process.` — this is the BRAND SIGNATURE
2. **Section labels are always Signal-colored** — "What We Do", "Selected Work", etc. appear in `text-signal` above the H2
3. **Body line-height is always 1.85** — generous, readable, Apple-like
4. **Headline tracking is always negative** — tight, editorial feel
5. **Labels are always uppercase with wide tracking** — 0.12em to 0.3em

---

## 4. LAYOUT SYSTEM

### Container
- **Max width:** `1400px`
- **Padding:** `px-6 md:px-16 lg:px-24`
- **Centered:** `mx-auto`

### Grid System
- Uses Tailwind's `grid-cols-12` for section headers
- **Section header pattern:** Label+H2 in `col-span-4`, description in `col-span-5 col-start-8`
- **Content pattern:** Left column `col-span-5`, right column `col-span-5 col-start-8`

### Section Spacing
- **Section padding:** `py-32 md:py-48` (massive, Apple-like whitespace)
- **Between header and content:** `mb-16 md:mb-24`
- **Between grid items:** `gap-8 md:gap-16`
- **Row padding (services, team, etc.):** `py-10 md:py-14`
- **Border between sections:** `border-t border-border`

### Apple.com Layout Principles Applied
1. **Left-aligned content** — text is never centered except in specific CTA sections
2. **Hero text is NOT centered** — it's left-aligned with a max-width container
3. **Images have generous rounded corners** — `rounded-2xl md:rounded-3xl`
4. **Whitespace is luxurious** — sections have 128px–192px vertical padding
5. **Content width is constrained** — `max-w-4xl` on hero text, `max-w-xl` on descriptions
6. **Stats are large and clean** — big numbers, tiny labels below

---

## 5. ANIMATION & MOTION SYSTEM

### Core Philosophy: "Soft, Slow, Dramatic Blur"
Every animation is slow (0.8s–2s), uses dramatic blur (12px–24px), and eases with the custom cubic-bezier. Nothing snaps. Everything breathes.

### Custom Easing
```typescript
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
```
This is used on EVERY animation throughout the entire site. No other easing is used.

### RevealText Component (the core animation primitive)

**Entry animation for every text element on scroll:**
```typescript
initial={{ opacity: 0, filter: 'blur(24px)', y: 50 }}  // or x: 50 for direction variants
whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{
  duration: 1.4,           // default, varies 1.0–1.8
  delay: 0–0.3,            // staggered per element
  ease: [0.22, 1, 0.36, 1],
  opacity: { duration: duration * 0.7, delay, ease },
  filter: { duration: duration * 0.85, delay, ease },
}}
```

**Key parameters:**
- Blur amount: `24px` on enter (dramatic), `8-12px` on exit (subtle)
- Y offset: `50px` (up direction), `-50px` (down), `50px` (left/right for x)
- Duration: `1.0–1.8s` depending on element importance
- Stagger: `0.06–0.12s` between sibling elements

### Page Transitions
```typescript
initial={{ opacity: 0, filter: 'blur(16px)' }}
animate={{ opacity: 1, filter: 'blur(0px)' }}
exit={{ opacity: 0, filter: 'blur(12px)' }}
transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
```

### Hover Animations
- **Row hover (services, team, articles):** `whileHover={{ x: 6 }}` with `duration: 1`
- **Card hover (testimonials, stats):** `whileHover={{ y: -4 }}` or `y: -6` with `duration: 1`
- **Color transitions:** `transition-colors duration-700` (700ms — slow, luxurious)
- **Image scale on hover:** `scale: 1.03–1.04` with `duration: 1.4`
- **Image reveal:** Paper overlay fades from `opacity: 0.55` to `0` on hover, `duration: 1.2`
- **Arrow rotation:** `rotate: 45 → 0` with `duration: 1`

### Expand/Collapse (Services, Careers)
```typescript
initial={{ opacity: 0, height: 0, filter: 'blur(12px)' }}
animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
exit={{ opacity: 0, height: 0, filter: 'blur(8px)' }}
transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
```

### Magnetic Button (cursor-following spring)
```typescript
springX = useSpring(x, { damping: 50, stiffness: 100, mass: 1.5 });
springY = useSpring(y, { damping: 50, stiffness: 100, mass: 1.5 });
// strength: 0.08 (nav) to 0.35 (hero CTA)
```
High mass + high damping = slow, soft magnetic pull.

### Custom Cursor
```typescript
// Ring (outer circle)
ringX = useSpring(cursorX, { damping: 60, stiffness: 80, mass: 2 });
ringY = useSpring(cursorY, { damping: 60, stiffness: 80, mass: 2 });
// 32px ring, border: border-white/25, mix-blend-difference

// Dot (inner point)
dotX = useSpring(dotX, { damping: 80, stiffness: 150, mass: 1 });
dotY = useSpring(dotY, { damping: 80, stiffness: 150, mass: 1 });
// 5px dot, bg: white/80, mix-blend-difference
```
The ring trails the mouse with heavy lag (mass: 2). The dot follows faster but still soft.

### Preloader
- **Progress steps:** `[6, 14, 24, 36, 48, 60, 72, 82, 91, 97, 100]` at 240ms intervals
- **Progress bar:** Spring-animated width with `{ damping: 40, stiffness: 50, mass: 2 }`
- **Exit animation:** `y: '-100%'` with `duration: 1.4, ease: [0.76, 0, 0.24, 1]`
- **Blur on enter:** Logo blurs in from `blur(12px)`, numbers from `blur(10px)`, label from `blur(6px)`

### Scroll-based Parallax
- **Hero Y offset:** `useTransform(scrollYProgress, [0, 1], [0, 120])`
- **Hero opacity:** `useTransform(scrollYProgress, [0, 0.6], [1, 0])`
- **Mouse parallax:** `useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { damping: 50, stiffness: 60, mass: 2 })`
- **Process progress line:** `useTransform(scrollYProgress, [0, 1], ['0%', '100%'])` — Signal-colored

### Lenis Smooth Scroll
```typescript
new Lenis({
  duration: 1.8,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
```

### Mobile Menu
- **Open:** `opacity: 0→1, filter: blur(24px)→blur(0px)`, duration 1s
- **Each link:** staggered 0.08s, `blur(16px)→blur(0px), y: 30→0`, duration 1s
- **Close:** `opacity: 0, filter: blur(20px)`, duration implicit
- **Hamburger:** lines rotate with `duration: 0.8`, middle line blurs out `blur(4px)`

### Category Filter (Journal)
- **Filter change:** AnimatePresence with `blur(12px)→blur(0px)` on enter, `blur(8px)` on exit, duration 0.8s

---

## 6. COMPONENT SPECIFICATIONS

### Navigation
- **Position:** Fixed, full-width, z-50
- **Background:** `backdrop-blur-md bg-paper/80` (frosted glass)
- **Padding:** `px-6 md:px-16 lg:px-24 py-6`
- **Logo:** `NEXUS.` — Syne 800, 18px, Ink with Signal dot
- **Nav links:** 5 items — Studio, Work, Lab, Journal, Careers
- **Link style:** Inter, 11px, tracking 0.18em, uppercase, text-muted → text-ink on hover (700ms)
- **Active state:** `text-ink` (no underline, no decoration)
- **Mobile:** Full-screen overlay, `bg-paper`, links in Syne 5xl/7xl, `text-ink/70 → text-signal` on hover

### Hero Section
- **Height:** `min-h-screen`
- **Layout:** Left-aligned, `max-w-4xl` content area
- **3D Background:** ParticleField — 500 particles, Ink color, opacity 0.06, slow rotation
- **Atmospheric blur:** Single `600px` circle, `bg-ink/[0.008] blur-[200px]`, mouse-parallax
- **Content:**
  - Label: "Global Creative Studio — Est. 2019" (Inter 11px, tracking 0.3em, uppercase, text-muted)
  - H1: "We design the\nfuture of brands." (Syne 800, clamp responsive)
  - Body: max-w-xl
  - CTA: Ink circle (56-64px) with arrow →, hover bg-signal (700ms)
  - Secondary: "Get in Touch" with sig-hover underline
- **Bottom strip:** City names + scroll indicator (appears after 2.5s delay with blur)

### Marquee
- **Height:** `py-4`
- **Border:** `border-y border-border`
- **Text:** Syne 800, lg/2xl, `text-ink/[0.06]` (barely visible)
- **Separator:** 4px Signal dot at 20% opacity
- **Speed:** 80s linear infinite
- **Items:** Brand Strategy, Digital Design, Motion & 3D, Development, Creative Direction, Growth (repeated 4x)

### Services Section
- **Layout:** Section header (12-col grid) + 6 expandable rows
- **Row structure:** Number (01-06) | Title + arrow | Expandable description + tags
- **Expand:** Blur-based animation (blur 12px→0px, height 0→auto)
- **Arrow:** Rotates 45°→0° on hover, opacity 0.2→1, Signal color
- **Tags:** Inter 11px, tracking 0.12em, uppercase, text-muted

### Projects Section
- **Layout:** Section header + 4 project cards
- **Card:** Apple-style rounded image (`rounded-2xl md:rounded-3xl`, aspect 16:9 / 2:1)
- **Image behavior:** Paper overlay at 55% opacity, fades to 0 on hover (1.2s); image scales 1→1.04 (1.4s)
- **Below image:** Title (Syne 3xl/5xl) + "View Case Study →" appears on hover with blur animation
- **Metadata:** Category + Year, right-aligned, Inter 14px, text-muted
- **Spacing:** `space-y-10 md:space-y-14` between cards

### Process Section
- **Layout:** Section header + 4 steps with vertical progress line
- **Progress line:** 1px border line with Signal-colored fill that grows with scroll
- **Step:** Circle (32-40px, border, contains step number in Signal) + Title + Description + Detail tags
- **Hover:** `x: 6`, title turns Signal, circle border turns Signal (all 700ms)

### About Section
- **Stats row:** 4 stats in 2-col/4-col grid, Syne 5xl/7xl numbers, Inter 11px labels
- **Content:** 12-col grid — left col-span-5 (label + H2 + paragraphs + CTA), right col-span-5 col-start-8 (3 values + office grid)
- **Values:** Title (Syne xl/2xl) + description, border-b, hover x:6 + Signal title
- **Office grid:** 2-col, each with Signal dot (6px) + city name + type label

### Testimonials Section
- **Layout:** Section header + 3 cards in 3-col grid
- **Card:** Large Signal quote mark (4xl) + quote text (Inter lg/xl, leading 1.85) + avatar circle (36px, Ink bg, Paper initials) + name + role
- **Hover:** `y: -6`, duration 1s
- **Scroll parallax:** Subtle x offset based on scroll

### CTA Section
- **Layout:** Left-aligned, massive typography
- **H2:** Syne 800, 6xl→8xl→10rem, leading 0.88, two lines
- **Atmospheric:** Signal blur blob (500px, `bg-signal/[0.015] blur-[200px]`), mouse-parallax
- **Email:** Syne 2xl/3xl, 800, sig-hover underline, hover→Signal (700ms)
- **Social links:** Inter 11px, tracking 0.12em, uppercase, text-muted→ink (700ms)

### Footer
- **Layout:** 12-col grid — Brand (col-span-4) + Nav (col-span-2, col-start-6) + Contact (col-span-2) + Offices (col-span-2)
- **Office dots:** 4px Signal dots before city names
- **Bottom bar:** `border-t border-border`, copyright left, social right
- **All links:** `hover:text-ink transition-colors duration-700`

---

## 7. PAGE STRUCTURES

### Home Page (/)
Section order: Hero → Marquee → Services → Projects → Process → About → Testimonials → CTA

### Studio Page (/studio)
- Hero (min-h 80vh) with atmospheric blur
- Team section: 8 members as hover-able rows (number + name + role + location)
- Culture section: Sticky left (label+H2+description) + scrollable right (4 culture items)
- CTA: "Join the team."

### Lab Page (/lab)
- Hero with FloatingGeometry 3D scene (spheres + wireframe octahedrons, very low opacity)
- Experiments: 6 items as expandable rows (id + title + category + description + tech tags)
- Stats: 4 stats in 2x4 grid
- CTA: "Have an idea?"

### Journal Page (/journal)
- Hero with atmospheric blur
- Category filter bar (7 categories, active = text-ink, others = text-muted)
- Articles: 6 articles as rows with category + date + readTime + title + excerpt
- Filter change: blur-based AnimatePresence transition

### Philosophy Page (/philosophy)
- Hero with MorphingShape 3D (torusKnot + icosahedron wireframe, very low opacity)
- Fixed progress bar at top (1px Signal line, grows with scroll)
- Manifesto: 6 items (D.E.S.I.G.N. acronym), large letter backgrounds (8xl, ink/4% → signal/15% on hover)
- Five Principles: Sticky left + scrollable right
- CTA: "Share our vision?"

### Careers Page (/careers)
- Hero with atmospheric blur
- Perks section: 6 perks in 3-col grid
- Open Roles: 5 expandable position rows (department + location + type + title + description + requirements + apply link)
- CTA: "Don't see your role?"

### Work Detail Page (/work/:id)
- Hero with parallax
- Back link ("← Back to Work")
- Large rounded image (aspect 2:1, rounded-2xl/3xl)
- Overview + Tags (12-col grid)
- Challenge + Solution (2-col grid)
- Results (4-col grid, stat values)
- CTA: "Like what you see?"

---

## 8. 3D SCENES

### ParticleField (Hero background)
- **Engine:** React Three Fiber
- **Content:** 500 points in a sphere distribution (18x18x18)
- **Material:** Ink color, size 0.02, opacity 0.06
- **Animation:** Slow rotation (0.008 rad/s X, 0.01 rad/s Y) + subtle mouse influence
- **Camera:** position [0,0,8], fov 60
- **Background:** Transparent

### WireframeGlobe (Studio page)
- **Content:** Wireframe sphere (Ink, opacity 0.02) + solid inner sphere (Paper, opacity 0.2) + Signal torus ring (opacity 0.25) + Ink secondary ring (opacity 0.06) + 16 Signal emissive dots on surface
- **Animation:** Globe rotates Y at 0.06 rad/s, ring rotates Z at 0.03 rad/s
- **Camera:** position [0,0,7], fov 45

### FloatingGeometry (Lab page)
- **Content:** 2 transparent spheres (Ink, opacity 0.025) + 2 wireframe octahedrons (Ink, opacity 0.04)
- **Animation:** Float from drei (speed 0.8–1.2), slow self-rotation
- **Camera:** position [0,0,10], fov 50

### MorphingShape (Philosophy page)
- **Content:** TorusKnot with MeshDistortMaterial (Ink, opacity 0.02, distort 0.3, speed 1.2) + inner icosahedron wireframe (Ink, opacity 0.02)
- **Animation:** Float (speed 0.5–1.0), slow counter-rotation
- **Camera:** position [0,0,8], fov 50

### 3D Rules
1. **All 3D is EXTREMELY subtle** — opacities between 0.02–0.06 for geometry
2. **Only Ink and Signal colors** are used in 3D scenes
3. **Background is always transparent** — the Paper bg shows through
4. **No dramatic lighting** — single ambient light at 0.7–0.9 intensity
5. **Mouse interaction is minimal** — very slight rotation influence

---

## 9. CUSTOM CURSOR

- **Hidden on mobile** (`hidden md:block`)
- **Ring:** 32px circle, `border border-white/25`, follows mouse with heavy spring lag (damping: 60, stiffness: 80, mass: 2)
- **Dot:** 5px circle, `bg-white/80`, follows faster (damping: 80, stiffness: 150, mass: 1)
- **Both use `mix-blend-difference`** — inverts colors underneath
- **All elements have `cursor: none !important`**

---

## 10. MICRO-INTERACTIONS & BRANDED DETAILS

### The Period Signature
Every section headline ends with `<span className="text-signal">.</span>`. This is the single most recognizable brand element.

### sig-hover Underline
Custom CSS class that reveals a 1.5px Signal underline from left-to-right on hover (1s ease):
```css
.sig-hover::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1.5px;
  background: #D9382A;
  transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.sig-hover:hover::after { width: 100%; }
```

### Favicon
Black rounded square (`#0A0A0A`, rx=6) with red circle (`#D9382A`, r=3.5) centered.

### Text Selection
`::selection { background: #0A0A0A; color: #F6F5F0; }` — Ink bg with Paper text.

### Scrollbar
2px wide, Ink thumb, transparent track, rounded.

### Nav Backdrop
`backdrop-blur-md bg-paper/80` — frosted glass effect, Apple-style.

---

## 11. IMAGE SPECIFICATIONS

### Project Images
- **Aspect ratio:** 16:9 on mobile, 2:1 on desktop
- **Border radius:** `rounded-2xl md:rounded-3xl` (Apple-style generous rounding)
- **Hover:** Scale 1→1.04 (1.4s), paper overlay fades 55%→0% (1.2s)
- **Placeholder bg:** `bg-surface` (#EDECE7)
- **Source:** Unsplash URLs with `w=1200&h=600&fit=crop`

### Image URLs Used
1. `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop` (Meridian — abstract art)
2. `https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=600&fit=crop` (Vertex — colorful paint)
3. `https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=600&fit=crop` (Aether — digital art)
4. `https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=600&fit=crop` (Prism — retro tech)

---

## 12. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| **Base** | 0–767px | Single column, compact spacing, hidden cursor, hamburger menu |
| **md** | 768px+ | 12-col grid, larger type, visible cursor, desktop nav |
| **lg** | 1024px+ | Wider padding (px-24), largest type sizes, full layout |

### Mobile-Specific
- Custom cursor hidden
- Navigation collapses to hamburger
- Hero text smaller (clamp handles this)
- Project images: aspect-16/9 instead of 2:1
- Team/services rows: smaller gaps
- Footer: single column stack

---

## 13. CONTENT DATA

### Services
01. Brand Strategy — Identity, Positioning, Guidelines
02. Digital Design — UI/UX, Web Design, Design Systems
03. Motion & 3D — Animation, 3D, Motion Graphics
04. Development — Frontend, Full-Stack, CMS
05. Creative Direction — Art Direction, Campaigns, Content
06. Growth Strategy — SEO, Analytics, Optimization

### Projects
1. Meridian — Brand Identity, 2024
2. Vertex Labs — Digital Product, 2024
3. Aether — Web Experience, 2023
4. Prism — Creative Direction, 2023

### Team Members
Alex Chen (Creative Director, New York), Maya Rivera (Design Lead, London), Liam Novak (Tech Director, Tokyo), Sofia Park (Motion Designer, New York), Kai Müller (Sr. Developer, London), Elena Sato (Brand Strategist, Dubai), James Wright (Product Designer, New York), Aisha Patel (UX Researcher, Tokyo)

### Offices
New York (HQ), London (Studio), Tokyo (Studio), Dubai (Office)

### Testimonials
- Sarah Chen, CEO Meridian Group
- Marcus Rivera, Founder Vertex Labs
- Elena Kowalski, CMO Aether Audio

### Stats
150+ Projects, 40+ Clients, 12 Awards, 98% Retention

---

## 14. NPM DEPENDENCIES

```json
{
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.6.1",
    "@tailwindcss/vite": "^4.2.1",
    "@types/three": "^0.184.1",
    "framer-motion": "^12.35.0",
    "lenis": "^1.3.23",
    "lucide-react": "^0.577.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.1",
    "tailwindcss": "^4.2.1",
    "three": "^0.184.0"
  }
}
```

---

## 15. FILE STRUCTURE

```
src/
├── App.tsx                    # Router, Preloader, Lenis, Layout
├── main.tsx                   # React entry point
├── index.css                  # Tailwind + theme tokens + custom CSS
├── components/
│   ├── Navigation.tsx         # Fixed nav with frosted glass
│   ├── Hero.tsx               # Home hero with ParticleField
│   ├── Marquee.tsx            # Scrolling service names
│   ├── Services.tsx           # 6 expandable service rows
│   ├── Projects.tsx           # 4 project cards with rounded images
│   ├── Process.tsx            # 4 steps with scroll progress line
│   ├── About.tsx              # Stats + values + offices
│   ├── Testimonials.tsx       # 3 testimonial cards
│   ├── CTA.tsx                # Large CTA section
│   ├── Footer.tsx             # 4-column footer
│   ├── CustomCursor.tsx       # Ring + dot cursor
│   ├── RevealText.tsx         # Blur-based scroll reveal
│   ├── MagneticButton.tsx     # Spring-based magnetic hover
│   ├── PageTransition.tsx     # Blur-based route transition
│   ├── Preloader.tsx          # Progress counter + bar
│   ├── ParticleField.tsx      # R3F particles (Hero)
│   ├── WireframeGlobe.tsx     # R3F globe (Studio)
│   ├── FloatingGeometry.tsx   # R3F shapes (Lab)
│   └── MorphingShape.tsx      # R3F distort mesh (Philosophy)
├── pages/
│   ├── Home.tsx               # Composes all home sections
│   ├── Studio.tsx             # Team + Culture
│   ├── Lab.tsx                # Experiments + Stats
│   ├── Journal.tsx            # Articles + Category filter
│   ├── Philosophy.tsx         # Manifesto + Principles
│   ├── Careers.tsx            # Perks + Open Roles
│   └── WorkDetail.tsx         # Project case study
public/
└── favicon.svg                # Black square + red dot
```

---

## 16. CRITICAL IMPLEMENTATION NOTES

1. **Tailwind v4 theme tokens** are defined in `index.css` using `@theme { }` block — NOT in tailwind.config.js
2. **All framer-motion `ease` values** must be typed as `[0.22, 1, 0.36, 1] as [number, number, number, number]` for TypeScript compatibility
3. **R3F geometry** must use `useMemo` with `new THREE.BufferGeometry()` + `setAttribute` pattern, NOT JSX `<bufferGeometry>` + `<bufferAttribute>` (TypeScript issues)
4. **R3F lines** must use `new THREE.Line(geometry, material)` via `<primitive>`, NOT `<line>` JSX (conflicts with SVG `<line>`)
5. **The `filter: 'blur()'` property** in framer-motion must be applied to the `motion.div` wrapper, not individual text elements
6. **Lenis smooth scroll** is initialized in a wrapper component that persists across routes
7. **AnimatePresence mode="wait"** wraps the Routes for page transitions
8. **All `whileInView` animations use `once: true`** — elements animate in once and stay
9. **The Preloader** sets `visibility: hidden` on all content until loading completes
10. **Mobile menu** uses AnimatePresence with blur-based enter/exit for each staggered link

---

## 17. THE FEEL — WHAT MAKES THIS PREMIUM

The website should feel like walking into a quiet, sunlit architecture studio. Nothing screams. Everything breathes. The typography is enormous but never loud. The color is restrained — 97% black-on-cream — so the 3% vermillion red lands like a punctuation mark. Animations are slow and blurred, like waking from a dream. Hover states respond with the weight of a heavy door swinging closed. The 3D backgrounds are ghostly — you sense them more than see them. The custom cursor trails with deliberate lag. Every section has enough whitespace to feel like a gallery wall with a single painting. This is NOT a startup landing page. This is a creative studio that knows its worth and doesn't need to prove it.
