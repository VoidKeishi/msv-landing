## MSV Website — Design Guidelines v3.0

### Theme Name
**"Technical Precision & Regional Agility"**

*Sự chính xác kỹ thuật kết hợp với sự linh hoạt địa phương*

---

### Brand Essence

| Attribute | Description |
|-----------|-------------|
| **Personality** | Professional • Practical • Reliable • Grounded |
| **Feeling** | An tâm, cấu trúc rõ ràng, năng lực kỹ thuật cao |
| **Tone** | Confident but not arrogant, Technical but accessible |
| **Tagline** | *"Uncovering Potential. Driving Progress."* |

**Core Message:** Western technical standards adapted to local cost structures

---

### Color System

#### Hierarchy & Application

| Role | Color | Hex | Specific Usage |
|------|-------|-----|----------------|
| **Background Primary** | White | `#FFFFFF` | Main page background |
| **Background Secondary** | Light Blue-Gray | `#CEDBE6` | Alternate sections, cards |
| **Text Primary** | Dark Purple-Gray | `#373545` | Body text, headings (softer than pure black) |
| **Text Secondary** | Gray-Blue | `#7A8C8E` | Captions, muted text |
| **Brand Primary** | Blue | `#3494BA` | CTAs, navbar, H1/H2, primary buttons |
| **Brand Secondary** | Cyan/Teal | `#58B6C0` | Hover states, overlays, secondary elements |
| **Accent Highlight** | Gold | `#D8A337` | **Dùng tiết chế** — Icons quan trọng, số liệu nổi bật, tags |
| **Accent Positive** | Green | `#6B9F25` | Links, environment/safety elements, success states |
| **Accent Tertiary** | Mint | `#75BDA7` | Supporting icons, illustrations |

#### Color Do's & Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Dùng Gold (#D8A337) cho 1-2 elements/section | Dùng Gold quá nhiều, trông như casino |
| Nền sáng để tạo "short and sharp" look | Nền tối toàn bộ, nặng nề |
| Blue (#3494BA) cho mọi CTA chính | Mix nhiều màu accent cho buttons |

---

### Typography

#### Font: Montserrat (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
```

#### Type Scale

| Element | Weight | Size | Style | Color |
|---------|--------|------|-------|-------|
| **H1 - Hero** | 700 | 48-56px | UPPERCASE optional | `#FFFFFF` on overlay |
| **H2 - Section** | 700 | 36-40px | UPPERCASE | `#373545` or `#3494BA` |
| **H3 - Card Title** | 600 | 20-24px | Title Case | `#373545` |
| **Body** | 400 | 16-18px | Sentence case | `#373545` |
| **Caption/Label** | 500 | 12-14px | UPPERCASE | `#7A8C8E` |
| **Stats/Numbers** | 600 | 32-48px | — | `#3494BA` or `#D8A337` |

#### Typography Tips
- **Line-height:** 1.5-1.6 cho body (dễ đọc thông tin kỹ thuật)
- **Letter-spacing:** 0.5-1px cho UPPERCASE headings
- **Số liệu lớn:** Làm to và bold để nhấn mạnh năng lực (150,000+ metres)

---

### Grid System

| Breakpoint | Columns | Max-width | Gutter |
|------------|---------|-----------|--------|
| Mobile | 4 | 100% | 16px |
| Tablet | 8 | 100% | 20px |
| Desktop | 12 | 1200px | 24px |
| Large | 12 | 1400px | 24px |

---

### Site Structure (Multi-page)

```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                        │
│  [Logo]     Home | About | Services | Projects | Team | Contact  │
└─────────────────────────────────────────────────────────┘

├── HOME (Landing Page)
│   ├── Hero Section
│   ├── Company Overview (brief)
│   ├── Core Capabilities (preview cards → link to Services)
│   ├── Featured Projects (2-3 → link to Projects)
│   └── CTA Section
│
├── ABOUT (Company Overview)
│   ├── Hero/Banner
│   ├── Vision & Mission
│   ├── Company Story
│   └── Key Stats & Achievements
│
├── SERVICES (Core Capabilities)
│   ├── Hero/Banner
│   ├── Service Delivery Model (Advisory | EPCM | Embedded)
│   ├── Core Capabilities Detail (4 areas)
│   └── Phase-based Support Diagram
│
├── PROJECTS (Select Projects)
│   ├── Hero/Banner
│   ├── Filter/Map (by country, commodity, service type)
│   └── Project Cards Grid
│
├── TEAM (Leadership & Key Personnel)
│   ├── Hero/Banner
│   ├── Board of Directors
│   ├── Advisory Board
│   ├── Technical Advisors
│   └── Executive Management Team
│
└── CONTACT
    ├── Contact Information
    ├── Contact Form
    └── Map / Office Location
```

---

### Navigation

#### Desktop Navigation (Sticky)

| Property | Value |
|----------|-------|
| Height | 72-80px |
| Background (default) | `transparent` on Hero |
| Background (scrolled) | `#FFFFFF` + shadow |
| Shadow | `0 2px 8px rgba(55, 53, 69, 0.08)` |
| Logo Height | 40-48px |
| Nav Links | Montserrat 600, 14px, `#373545` |
| Nav Links Hover | `#3494BA` + underline |
| Active Page | `#3494BA`, underline 2px |
| CTA Button | Primary style |

#### Mobile Navigation (< 1024px)

| Property | Value |
|----------|-------|
| Trigger | Hamburger icon |
| Style | Slide-in drawer (right) hoặc full-screen overlay |
| Background | `#373545` hoặc `#FFFFFF` |
| Nav Links | Montserrat 600, 18-20px, centered |
| Animation | Slide in 300ms |

#### Logo Requirements
- **Full color version** — for white backgrounds
- **White/Reversed version** — for dark hero sections

---

### Component Library

#### Buttons

| Type | Style |
|------|-------|
| **Primary** | `bg: #3494BA`, `text: #FFF`, `hover: #2A7A9A` |
| **Secondary** | `border: 2px #3494BA`, `text: #3494BA`, `hover: filled` |
| **Ghost (dark bg)** | `border: 2px #FFF`, `text: #FFF`, `hover: filled white` |
| **Text Link** | `color: #6B9F25`, `underline on hover` |

#### Tags/Badges

```css
.tag {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.tag-gold { background: #D8A337; color: #FFF; }
.tag-blue { background: #3494BA; color: #FFF; }
.tag-teal { background: #58B6C0; color: #FFF; }
.tag-green { background: #6B9F25; color: #FFF; }
```

#### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #CEDBE6;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(55, 53, 69, 0.06);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(55, 53, 69, 0.12);
  transform: translateY(-2px);
}
```

#### Hero Overlays

```css
/* Option A: Dark gradient */
background: linear-gradient(
  to bottom,
  rgba(55, 53, 69, 0.6),
  rgba(55, 53, 69, 0.85)
);

/* Option B: Brand tint */
background: linear-gradient(
  135deg,
  rgba(52, 148, 186, 0.7),
  rgba(55, 53, 69, 0.85)
);
```

---

### Page-by-Page Guidelines

#### HOME (Landing Page)

| Section | Content | CTA |
|---------|---------|-----|
| Hero | Headline + Subtext + Primary CTA | "Explore Services" |
| Company Brief | 2-3 paragraphs + Key stats | "Learn More About Us" |
| Capabilities Preview | 4 cards (icons + titles) | Each card → Services page |
| Featured Projects | 2-3 project cards | "View All Projects" |
| CTA Banner | "Ready to discuss your project?" | "Contact Us" |

#### ABOUT Page

| Section | Content |
|---------|---------|
| Hero Banner | Page title + brief intro |
| Vision & Mission | Text block với icon/graphic |
| Our Approach | "Western standards, local expertise" |
| Key Stats | 150,000+ metres, Engagements across out Southeast Asia, 20+ years |
| Geographic Reach | Map: Vietnam, Cambodia, Laos, Malaysia, Thailand |

#### SERVICES Page

| Section | Content |
|---------|---------|
| Hero Banner | "Integrated Mining Services" |
| Delivery Model | 3 cards: Advisory / EPCM / Embedded Team |
| Capabilities | 4 detailed sections (tabs hoặc expand) |
| Phase Support | Timeline: Exploration → Studies → Execution → Operations |
| Commercial | Fee-for-Service + Equity Participation |

#### PROJECTS Page

| Section | Content |
|---------|---------|
| Hero Banner | "Select Projects" |
| Filters | By Country / Commodity / Service Type |
| Project Grid | Cards với image, tags, checkbox services |

#### TEAM Page

| Section | Content |
|---------|---------|
| Hero Banner | "Leadership & Key Personnel" |
| Board of Directors | 3 members |
| Advisory Board | 2 members |
| Technical Advisors | 2 members (JORC & NI43-101) |
| Executive Team | 6 members |

#### CONTACT Page

| Section | Content |
|---------|---------|
| Hero Banner | "Get In Touch" |
| Contact Info | Email, Phone, Address |
| Contact Persons | Key contacts + direct emails |
| Contact Form | Name, Email, Company, Message |
| Map | Embedded Google Map |

---

### Footer

**Background:** `#373545`

| Element | Style |
|---------|-------|
| Column Headings | Montserrat 600, 14px, `#FFFFFF`, UPPERCASE |
| Links | Montserrat 400, 14px, `#CEDBE6`, hover `#FFFFFF` |
| Copyright | Montserrat 400, 12px, `#7A8C8E` |
| Padding | 64px top/bottom |

---

### Imagery Guidelines

#### Photo Requirements

| Type | Specification |
|------|---------------|
| **Subject** | Mining operations, drilling, engineers on site, core logging |
| **Context** | Southeast Asia (Vietnam, Laos, Cambodia) |
| **Must have** | Human element — people working, not just machines |
| **Safety** | Visible PPE (hard hats, safety vests) |
| **Tone** | Warm earth tones, golden hour preferred |
| **Resolution** | Minimum 1920px wide for hero |

#### Avoid
- Generic stock photos
- Machines without people
- Western/non-Asian contexts
- Overly polished/staged looks

#### Team Photos
- Consistent background (neutral/industrial)
- Same framing và lighting
- Professional but approachable expression

---

### Motion & Interaction

| Element | Animation |
|---------|-----------|
| Page load | Fade in (300ms) |
| Scroll reveal | Slide up + fade (200ms, stagger 50ms) |
| Hover cards | Lift + shadow (200ms ease-out) |
| Hover capability cards | Border color change to Gold |
| Buttons | Subtle scale 1.02 (150ms) |
| Stats numbers | Count up animation on scroll |
| Navigation | Transparent → solid on scroll (200ms) |

**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

---

### Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 640px | Single column, hamburger nav |
| Tablet | 640-1024px | 2 columns, hamburger nav |
| Desktop | > 1024px | Full layout, horizontal nav |
| Large | > 1400px | Max-width container, centered |