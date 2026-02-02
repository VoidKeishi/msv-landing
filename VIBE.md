# MSV Design Vibe Document

## Company Identity

**Mining Services Vietnam (MSV)** is a professional mining services company operating across Southeast Asia. The company bridges Western technical excellence with local expertise and cost-effectiveness.

### Core Brand Attributes

1. **Professional & Trustworthy** - Working with international standards (JORC, NI43-101)
2. **Regional Expert** - Deep local knowledge across Vietnam, Cambodia, Laos, Malaysia, Thailand
3. **Practical & Results-Oriented** - "Practical, high-quality solutions" is a key tagline
4. **Modern Yet Grounded** - Technical excellence with boots-on-the-ground experience
5. **Sustainable & Responsible** - Committed to environment and community wellbeing

---

## Design Vibe: "Technical Excellence Meets Earth"

### The Feeling

The website should feel like a **premium engineering consultancy** that works in the **natural world**. Think: precision meets nature, data meets dirt, blueprints meet mountains.

### Visual Metaphors

- **Geological layers** - stratified sections, depth, layered information
- **Topographic maps** - contour lines, terrain, elevation
- **Core samples** - cylindrical drill cores revealing what's beneath
- **Survey markers** - precision, GPS, gridlines
- **Mining operations** - professional, industrial, purposeful

---

## Design Principles

### 1. Clean & Professional

- **Not** overly corporate/stiff
- **Not** flashy or trendy for its own sake
- **IS** confident, competent, trustworthy
- White space is a feature, not emptiness

### 2. Subtle Industrial Elements

- Thin lines suggesting surveying/gridlines
- Geometric shapes from engineering drawings
- Subtle textures suggesting rock/mineral surfaces
- Icons that reference mining/geology equipment

### 3. Natural Color Accents

The brand colors already reflect natural minerals and earth:
- **MSV Blue (#3494BA)** - Deep water, clear sky over mining sites
- **MSV Cyan (#58B6C0)** - Copper patina, turquoise minerals
- **MSV Mint (#75BDA7)** - Vegetation, sustainable mining
- **MSV Gold (#D8A337)** - Gold commodity, value, premium
- **MSV Green (#6B9F25)** - Land, environment, growth

### 4. Motion & Interactivity

- **Scroll-triggered reveals** - Content emerging like layers of earth being revealed
- **Subtle parallax** - Creates depth, like looking into the ground
- **Smooth transitions** - Professional, not jarring
- **Hover states** - Interactive feedback on all clickable elements

---

## Typography Hierarchy

Using **Montserrat** throughout:

| Element | Weight | Size | Letter Spacing |
|---------|--------|------|----------------|
| H1 (Hero) | 700 (Bold) | 4xl-6xl | -0.02em (tight) |
| H2 (Section) | 700 (Bold) | 3xl-4xl | -0.01em |
| H3 (Card Title) | 600 (SemiBold) | xl-2xl | normal |
| Body | 400 (Regular) | base-lg | normal |
| Caption/Label | 500 (Medium) | sm | 0.02em (wider) |

---

## Layout Patterns

### F-Pattern for Scanning

Content should follow the F-pattern reading behavior:
1. **Strong horizontal top** - Hero with key message
2. **Secondary horizontal** - Key differentiators/stats
3. **Vertical scan down left** - Section titles catch the eye
4. **Staggered content** - Alternating left/right alignments

### Section Rhythm

```
Hero (full bleed, gradient)
↓
Content (contained, white)
↓
Feature (full bleed, subtle bg)
↓
Content (contained, white)
↓
CTA (full bleed, brand color)
```

### Card Variations

1. **Elevated cards** - White, shadow, hover lift
2. **Outlined cards** - Border, transparent bg, hover fill
3. **Feature cards** - Icon top, content below
4. **Project cards** - Image/map, overlay content

---

## Animation Guidelines

### Entrance Animations

- **Fade up** (translateY: 20px → 0, opacity: 0 → 1)
- **Duration**: 500-700ms
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1) (ease-out-expo)
- **Stagger**: 100ms between sibling elements

### Hover States

- **Cards**: translateY(-4px), shadow-lg
- **Buttons**: scale(1.02), shadow increase
- **Links**: color transition, optional underline grow
- **Icons**: subtle rotate or scale

### Scroll Triggers

- **Reveal on scroll**: Elements animate when 10-20% visible
- **Parallax**: Background moves slower than foreground (0.5x)
- **Progress indicators**: For long pages, show section progress

---

## Specific Section Guidelines

### Navigation

- **Fixed/sticky** at top
- **Transparent → solid** on scroll
- **Active state**: Blue underline or background pill
- **Mobile**: Smooth slide-down menu

### Hero Section

- **Full viewport height** on desktop (min-height: 100vh or 80vh)
- **Gradient overlay** on background
- **Stats bar** floating or integrated
- **Subtle particle/dot grid animation** in background

### Footer

- **Darker but not black** - Use MSV Dark-2 with gradient
- **Clear sections** with visual hierarchy
- **Map/location visual** could be nice
- **Links with hover states**

---

## Color Application

### Text Colors

| Use Case | Color | Notes |
|----------|-------|-------|
| Primary text | msv-dark-2 (#373545) | Body copy, titles |
| Secondary text | gray-600 (#4B5563) | Descriptions |
| Muted text | gray-500 (#6B7280) | Captions, dates |
| Light on dark | white or gray-100 | Reversed sections |
| Link | msv-green (#6B9F25) | Interactive |
| Link hover | msv-blue (#3494BA) | Hover state |

### Background Colors

| Use Case | Color | Notes |
|----------|-------|-------|
| Default | white | Main content areas |
| Alternate | gray-50 (#F9FAFB) | Alternating sections |
| Subtle brand | msv-light-2/30 | Light blue tint |
| Brand section | msv-blue gradient | CTAs, highlights |
| Footer | msv-dark-2 | Dark but warm |

### Accent Usage

- **Primary CTA**: msv-blue
- **Secondary CTA**: msv-green
- **Highlights**: msv-gold (sparingly)
- **Success/positive**: msv-mint
- **Data visualization**: Use full palette

---

## Component Patterns

### Buttons

```
Primary: bg-msv-blue, white text, hover: darken
Secondary: bg-msv-green, white text, hover: darken
Outline: border-msv-blue, msv-blue text, hover: fill
Ghost: transparent, msv-blue text, hover: subtle bg
```

### Cards

```
Default: white bg, shadow-md, rounded-lg, p-6
Hover: shadow-lg, translateY(-4px)
Featured: border-l-4 border-msv-blue
Interactive: cursor-pointer, transition-all
```

### Icons

- Use **Lucide React** consistently
- Size: 20-24px for inline, 32-48px for features
- Color: msv-blue or current-color
- Optional: icon with circular bg (bg-msv-blue/10)

---

## Inspiration References

- **Bechtel** (engineering professionalism)
- **Newmont Mining** (mining industry standard)
- **McKinsey** (consultancy trust)
- **Linear** (modern SaaS elegance)
- **Stripe** (technical documentation clarity)

---

## Don'ts

- No stock photos of generic businesspeople
- No overly bright/saturated colors
- No complex animations that distract
- No tiny text (min 14px body)
- No walls of text without visual breaks
- No navigation without clear hover/active states
- No sections without breathing room (padding)

---

## Summary

The MSV website should feel like visiting a **trusted, capable partner** who:
- Knows their craft deeply
- Operates with precision and care
- Respects the land they work with
- Delivers results, not just promises

**Vibe in three words**: Professional. Grounded. Capable.
