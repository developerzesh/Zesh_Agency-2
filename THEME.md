# Zesh Agency — Master Design System

> **This document is the single source of truth for this theme.** Any AI agent working with these files MUST read this first and follow every rule without deviation. The client's content will change, but the design language defined here must remain intact.

---

## 1. Color System — 3 Colors Maximum

This theme uses exactly **3 colors**. No more, no less. No gradients. No exceptions.

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| **Ink** | `#0A0A0A` | `text-ink` `bg-ink` `border-ink` | All text, buttons, structural elements, scrollbar |
| **Paper** | `#F6F5F0` | `text-paper` `bg-paper` | Backgrounds, inverted text on dark surfaces |
| **Signal** | `#F4A536` | `text-signal` `bg-signal` `border-signal` | Accent only — punctuation, hover states, progress, logo dot |

### Derived Surfaces (NOT new colors — Paper variants)
| Token | Hex | Usage |
|-------|-----|-------|
| Surface | `#EDECE7` | Image placeholder backgrounds, subtle surface fills |
| Border | `#DDDCD6` | All dividers, borders, horizontal rules |
| Text Secondary | `#6E6E6A` | Body text, descriptions |
| Text Muted | `#A5A5A0` | Captions, labels, metadata |

### Color Rules
1. **Signal appears on ~5% of pixels.** It is never used as a background fill for sections or cards.
2. **Ink is the default text color.** Text Secondary and Muted are used for supporting content only.
3. **Paper is the only background color.** No dark sections, no colored sections.
4. **No gradients anywhere.** Not on text, not on backgrounds, not on buttons.
5. **Every headline ends with a Signal-colored period.** This is the brand signature: `Services.` `Projects.` `About.`
6. **Hover states transition TO Signal.** Text goes `text-ink → text-signal`. Borders go `border-border → border-signal`. Never the reverse.
7. **Selection highlight:** Ink background, Paper text.

---

## 2. Typography System

### Fonts (2 only)
| Font | Weights | Usage |
|------|---------|-------|
| **Syne** | 400, 500, 600, 700, 800 | All headlines (h1–h4), logo, preloader counter |
| **Inter** | 300, 400, 500, 600 | All body text, labels, navigation, metadata |

### Type Scale
| Element | Size | Weight | Tracking | Leading |
|---------|------|--------|----------|--------|
| Hero h1 | `text-4xl md:text-6xl lg:text-[5rem]` | 800 | `-0.04em` | `0.85–0.95` |
| Section h2 | `text-4xl md:text-6xl` | 800 | `-0.03em` | default |
| Row h3 | `text-2xl md:text-4xl` | 800 | tight | default |
| Card h4 | `text-xl md:text-2xl` | 800 | tight | default |
| Body | `text-base md:text-lg` | 400 | normal | `1.85` |
| Label | `11px` | 500 | `0.2em–0.3em` uppercase | default |
| Caption | `10px–11px` | 400 | `0.12em–0.15em` uppercase | default |

### Typography Rules
1. **Never use system sans-serif.** Always Syne or Inter.
2. **Headlines are always Syne weight 800.** No exceptions.
3. **Body text line-height is always 1.85.** Generous, readable, premium.
4. **Labels and captions are always uppercase with wide tracking.**
5. **Numbers in stats use Syne 800 with tight tracking.**

---

## 3. Motion & Transition System — Soft, Slow, Dramatic Blur

This is the most critical part of the theme's feel. Every animation must feel like it's moving through honey — slow, smooth, deliberate.

### The Core Easing Curve
```typescript
const slowEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
```
**Every** framer-motion transition uses this curve. No other easing.

### Duration Scale
| Context | Duration | Notes |
|---------|----------|-------|
| RevealText entry | `1.2–2.0s` | Slow, dreamy entrance |
| Hover micro-interaction | `0.8–1.2s` | Not snappy — luxurious |
| Color transitions | `0.7–1.2s` | `duration-700` to `duration-1200` in Tailwind |
| Page transitions | `1.4s` | Scale + blur + fade |
| Preloader exit | `1.2s` | Smooth wipe up |
| Scroll parallax | Continuous | Driven by scroll progress |

### The Blur Signature
**Every element that enters the viewport does so with blur.** This is the theme's defining motion characteristic.

```tsx
// RevealText — the standard entrance
initial={{ opacity: 0, filter: 'blur(28px)', y: 50 }}
whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
transition={{ duration: 1.4, ease: slowEase }}
```

```tsx
// Page transitions — scale + blur + fade
initial={{ opacity: 0, filter: 'blur(40px)', scale: 0.97 }}
animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.98 }}
transition={{ duration: 1.4, ease: slowEase }}
```

```tsx
// Image reveals (CinematicImage)
initial={{ scale: 1.18, filter: 'blur(24px)', opacity: 0.6 }}
whileInView={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
transition={{ duration: 1.8, ease: slowEase }}
```

### Spring Physics (for interactive elements)
```typescript
// Magnetic buttons — heavy, slow follow
{ damping: 40, stiffness: 150, mass: 1.2 }

// Custom cursor — very heavy, luxurious drag
{ damping: 50, stiffness: 120, mass: 1.5 }

// Mouse parallax — slow drift
{ damping: 50, stiffness: 80, mass: 2.0 }
```

### Hover Interactions
| Element | Hover Effect | Duration |
|---------|-------------|----------|
| List rows | `whileHover={{ x: 6 }}` | `duration: 1.0` |
| Cards/items | `whileHover={{ y: -4 }}` | `duration: 1.2` |
| Stats | `whileHover={{ y: -3 }}` | `duration: 1.0` |
| Text color change | `text-ink → text-signal` | `duration-[1200ms]` |
| Border color change | `border-border → border-signal` | `duration-700` |
| Background color change | `bg-ink → bg-signal` | `duration-700` |
| Link underline | `sig-hover` class | `0.8s` |

### Smooth Scrolling (Lenis)
- Duration: `1.4s`
- Easing: Exponential deceleration
- Wheel multiplier: `0.9`
- Touch multiplier: `1.2`

---

## 4. Layout System — Apple-Style Clean

### Container
- Max width: `1400px` (pages)
- Horizontal padding: `px-6 md:px-16`
- Sections are **never centered text** except CTA sections
- Hero text is left-aligned

### Section Spacing
| Context | Padding |
|---------|--------|
| Major sections | `py-32 md:py-48` |
| Sub-sections | `py-20 md:py-28` |
| Border separators | `border-t border-border` between sections |
| Footer | `py-28 md:py-36` |

### Grid System
- Use `grid-cols-1 md:grid-cols-12` for two-column layouts
- Left column: `md:col-span-5` or `md:col-span-6` (headline)
- Right column: `md:col-span-5 md:col-start-7` or `md:col-start-8` (body/detail)
- Stats grid: `grid-cols-2 md:grid-cols-4`
- Card grid: `grid-cols-1 md:grid-cols-2` or `md:grid-cols-3`

### Whitespace Rules
1. **Generous whitespace is mandatory.** `py-32` minimum between sections.
2. **Never crowd elements.** If it feels tight, add more space.
3. **Borders separate sections**, not background color changes.
4. **No cards with backgrounds.** Content sits directly on Paper.
5. **No shadows.** No box-shadow, no drop-shadow, no elevation.

---

## 5. Component Patterns

### RevealText (mandatory for all viewport entries)
Every piece of content that appears on scroll MUST use RevealText. It provides:
- Blur-to-sharp entrance
- Gentle vertical drift (50px)
- Slow fade-in (1.4s+)
- Stagger via `delay` prop

### MagneticButton
All interactive text links and CTAs should be wrapped in MagneticButton.
- Strength: 0.15–0.4 (lower for nav, higher for CTAs)
- Uses heavy spring physics for slow, luxurious follow

### CinematicImage
All images use CinematicImage with:
- Blur-to-sharp reveal on scroll
- Subtle parallax (0.06–0.12 strength)
- Paper-colored overlay that fades with scroll
- Hover zoom: 1.02–1.06

### PageTransition
Every page component wraps its content in PageTransition:
- Scale (0.97→1) + blur (40px→0) + opacity (0→1)
- 1.4s duration

### Navigation
- Fixed top, glass-morphism background
- Logo left (image), links right
- Desktop: mega dropdown on hover
- Mobile: full-screen overlay with staggered link entrance
- Links: Inter 11px uppercase with wide tracking

### Footer
- Multi-column grid with logo, capabilities, consultancy, legal, offices
- Signal dots next to office cities
- Border-top separator

### Preloader
- Paper background, centered content
- Logo, percentage counter, progress bar
- Combinatorial statement system (50 hard truths + ~65M combinations)
- Cycles every 2.8s
- Exit: smooth y:-100% wipe over 1.2s

---

## 6. Ambient Effects

### Custom Cursor
- Ring: 32px circle, `mix-blend-difference`, heavy spring
- Dot: 5px circle, `mix-blend-difference`, lighter spring
- Hidden on mobile
- `cursor: none` on all elements

### Film Grain Overlay
- Fixed full-screen div, z-99, pointer-events-none
- SVG fractal noise background
- 3.5% opacity (light mode), 6% (dark mode)

### Scroll Progress Bar
- Fixed top, z-100, 2px height
- Signal color
- Spring-physics driven from framer-motion useScroll

### Mouse-Tracking Ambient Glows
- Large blurred Signal or Ink orbs
- Spring-parallax follow cursor movement
- Present in all hero sections

---

## 7. 3D/Canvas Scenes

All Three.js scenes must:
1. Use only Ink and Signal colors
2. Have very low opacity (0.02–0.08)
3. Use transparent backgrounds
4. Respond subtly to mouse movement
5. Never compete with content for attention

Available scenes:
- `ParticleField` — Floating dots and lines
- `WireframeGlobe` — Globe with Signal ring and dots
- `FloatingGeometry` — Spheres and wireframe octahedrons
- `MorphingShape` — Distorted torus knot + wireframe icosahedron

---

## 8. Content Structure

All content data lives in:
- `src/lib/siteConfig.ts` — Primary data file (solutions, industries, case studies, insights, careers, stats, nav)
- `src/lib/data.ts` — Re-exports from siteConfig for backward compatibility

When a client wants to change content, modify ONLY the data files. The components will render automatically.

### Multi-Page App Structure
Each page has:
- Root `.html` file (Vite MPA entry)
- `src/entries/[page].tsx` (React entry point)
- `src/pages/[Page].tsx` (page component)

Pages pass data via URL query parameters (`?slug=`, `?id=`).

---

## 9. Anti-Patterns — NEVER Do These

1. ❌ **Never use more than 3 colors.** Ink, Paper, Signal. Period.
2. ❌ **Never use gradients.** Not on text, not on backgrounds, not on buttons.
3. ❌ **Never use shadows.** No box-shadow, no elevation, no depth via shadow.
4. ❌ **Never use dark backgrounds.** Paper only.
5. ❌ **Never use fast animations.** Minimum 0.7s, most 1.0–2.0s.
6. ❌ **Never use sharp/springy easing.** Always `[0.22, 1, 0.36, 1]`.
7. ❌ **Never skip the blur.** Every entrance animation includes `filter: 'blur()'`.
8. ❌ **Never use RevealText without blur.** It's part of the signature feel.
9. ❌ **Never use colored section backgrounds.** All sections are Paper.
10. ❌ **Never use cards with bg fills.** Content sits directly on Paper.
11. ❌ **Never forget the Signal period.** Every headline ends with `.` in Signal.
12. ❌ **Never use system fonts.** Syne for headlines, Inter for body.
13. ❌ **Never use tight spacing.** Generous whitespace everywhere.
14. ❌ **Never use border-radius on content areas.** Only on buttons (rounded-full) and images (if needed).
