# MSV Corporate Theme

This document provides the official MSV corporate branding colors and typography extracted from the MSV Corporate Theme files for use in the landing page development.

## Source
Extracted from: `References/MSV Corporate Theme/theme/theme/`

### Theme Files
The MSV Corporate Theme package contains two theme variants:

| File | Colors | Font Scheme | Typography | Status |
|------|--------|-------------|------------|--------|
| `theme1.xml` | MSV Option 1 | Office | Aptos Display/Aptos | Primary theme file |
| `theme2.xml` | MSV Option 1 | **MSV Font** | **Montserrat** | MSV custom font variant |

**Both files contain identical colors.** This document uses **theme2.xml** as the reference because it features the MSV-specific custom font (Montserrat), which is more appropriate for the MSV landing page than the generic Office fonts.

## Color Palette

### Base Colors
These form the foundation of the color system for text, backgrounds, and structural elements.

| Name | Hex Code | Usage |
|------|----------|-------|
| Dark 1 | `#000000` | Primary text, dark backgrounds |
| Light 1 | `#FFFFFF` | Light backgrounds, reversed text |
| Dark 2 | `#373545` | Secondary dark elements, dark purple-gray |
| Light 2 | `#CEDBE6` | Secondary light elements, light blue-gray |

### Accent Colors
Brand accent colors for highlights, call-to-actions, and visual interest.

| Name | Hex Code | Color | Usage |
|------|----------|-------|-------|
| Accent 1 | `#3494BA` | Blue | **Primary brand color** - main CTAs, primary buttons |
| Accent 2 | `#58B6C0` | Cyan/Teal | Secondary highlights, complementary elements |
| Accent 3 | `#75BDA7` | Mint Green | Tertiary accents, success states |
| Accent 4 | `#7A8C8E` | Gray-Blue | Neutral accents, muted elements |
| Accent 5 | `#6B9F25` | Green | Links, positive actions |
| Accent 6 | `#D8A337` | Gold/Orange | Attention, warnings, special highlights |

### Interactive Elements

| Element | Hex Code | Usage |
|---------|----------|-------|
| Hyperlink | `#6B9F25` | Default link color (Accent 5 Green) |
| Followed Hyperlink | `#9F6715` | Visited link color (Brown/Orange) |

## Typography

### Font Family
**Montserrat** is the official MSV typeface for both headings and body text.

- **Font Name:** Montserrat
- **Usage:** All text (headings and body)
- **Source:** Google Fonts
- **Import URL:** `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap`

### Recommended Weights
- 300 (Light) - Optional, for subtle text
- 400 (Regular) - Body text
- 500 (Medium) - Emphasized body text
- 600 (Semi-Bold) - Subheadings
- 700 (Bold) - Main headings

## Usage Guidelines

### Color Usage Recommendations
- Use **Accent 1 (Blue #3494BA)** as the primary brand color for main CTAs and important UI elements
- Reserve **Accent 5 (Green #6B9F25)** for links and positive actions
- Use **Dark 2 (#373545)** for body text on light backgrounds instead of pure black
- Use **Light 2 (#CEDBE6)** for subtle backgrounds and dividers

### Typography Guidelines
- Maintain consistent use of Montserrat across all text elements
- Use appropriate font weights to establish visual hierarchy
- Ensure sufficient contrast between text and backgrounds for accessibility

## CSS Variables Example

```css
:root {
  /* Base Colors */
  --color-dark-1: #000000;
  --color-light-1: #FFFFFF;
  --color-dark-2: #373545;
  --color-light-2: #CEDBE6;

  /* Accent Colors */
  --color-accent-1: #3494BA; /* Primary Blue */
  --color-accent-2: #58B6C0; /* Cyan/Teal */
  --color-accent-3: #75BDA7; /* Mint Green */
  --color-accent-4: #7A8C8E; /* Gray-Blue */
  --color-accent-5: #6B9F25; /* Green */
  --color-accent-6: #D8A337; /* Gold/Orange */

  /* Interactive */
  --color-link: #6B9F25;
  --color-link-visited: #9F6715;

  /* Typography */
  --font-primary: 'Montserrat', sans-serif;
}
```

## Tailwind CSS Example

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'msv-dark-1': '#000000',
        'msv-light-1': '#FFFFFF',
        'msv-dark-2': '#373545',
        'msv-light-2': '#CEDBE6',
        'msv-blue': '#3494BA',
        'msv-cyan': '#58B6C0',
        'msv-mint': '#75BDA7',
        'msv-gray-blue': '#7A8C8E',
        'msv-green': '#6B9F25',
        'msv-gold': '#D8A337',
        'msv-link': '#6B9F25',
        'msv-link-visited': '#9F6715',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
}
```
