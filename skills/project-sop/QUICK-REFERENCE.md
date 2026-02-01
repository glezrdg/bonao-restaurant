# Quick Reference Card

## Project Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Color Tokens

### Base (Dark Mode)
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Deep Charcoal | `#0C0C0C` | `var(--deep-charcoal)` | Dark section backgrounds |
| Primary Text | `#FCFCFC` | `var(--primary-text-dark)` | Text on dark |
| Greige | `#C4BCB4` | `var(--greige)` | Muted text on dark |

### Brand Identity (Sage)
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Logo Sage | `#5F6654` | `var(--logo-sage)` | **Primary CTAs**, brand identity |
| Sage Focus | `rgba(95,102,84,0.5)` | `var(--sage-focus)` | Focus rings, form accents |

### Warm Luxury Accents
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Bronze | `#9C744C` | `var(--bronze)` | Labels, icons, highlights |
| Copper | `#A47444` | `var(--copper)` | Warm highlight alternative |
| Walnut | `#644C3C` | `var(--walnut)` | Secondary text on paper |
| Espresso | `#542C0C` | `var(--espresso)` | Primary text on paper |

### Paper Sections
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Linen | `#ECE4DC` | `var(--linen)` | Paper section backgrounds |
| Paper White | `#FCFCFC` | `var(--paper-white)` | Cards on paper |
| Sand Cream | `#F4D4B4` | `var(--sand-cream)` | Feature highlights (sparingly) |

### Borders
| Context | Value |
|---------|-------|
| On dark | `rgba(236, 228, 220, 0.12)` |
| On light | `rgba(100, 76, 60, 0.12)` |

---

## Typography

| Element | Font | Class |
|---------|------|-------|
| Hero headline | EB Garamond Italic | `font-garamond text-5xl italic` |
| Section title | EB Garamond Italic | `font-garamond text-4xl italic` |
| Section label | Figtree Uppercase | `uppercase tracking-wider text-sm text-sage` or `text-copper` |
| Body | Figtree | `font-sans text-base` |
| Button | Figtree | `font-sans font-medium` |

---

## Button Patterns

```tsx
{/* Primary CTA (Sage - conversions) */}
<Button variant="primary" href="/reserve">
  Book a Table
</Button>
{/* → bg-sage text-white */}

{/* Secondary CTA (Ghost/outline) */}
<Button variant="secondary" href="/menu">
  View Menu
</Button>
{/* → border-linen text-linen bg-transparent */}

{/* Link style (Copper underline) */}
<a href="/about" className="text-copper hover:underline">
  Learn More →
</a>
```

---

## Section Patterns

```tsx
{/* Dark section (Deep Charcoal) */}
<Section variant="dark" id="section-id">
  <span className="text-copper uppercase tracking-wider text-sm">LABEL</span>
  <h2 className="font-garamond text-4xl italic text-white mt-2">Title</h2>
  <p className="text-greige">Body text here</p>
</Section>

{/* Paper section (Linen) */}
<Section variant="paper" id="section-id">
  <span className="text-sage uppercase tracking-wider text-sm">LABEL</span>
  <h2 className="font-garamond text-4xl italic text-espresso mt-2">Title</h2>
  <p className="text-walnut">Body text here</p>
</Section>
```

---

## Text Colors by Section

### On Dark (Deep Charcoal)
| Purpose | Color | Class |
|---------|-------|-------|
| Primary text | `#FCFCFC` | `text-white` |
| Muted text | `#C4BCB4` | `text-greige` |
| Accent labels | `#A47444` | `text-copper` |
| CTA button | `#5F6654` | `bg-sage` |

### On Paper (Linen)
| Purpose | Color | Class |
|---------|-------|-------|
| Primary text | `#542C0C` | `text-espresso` |
| Secondary text | `#644C3C` | `text-walnut` |
| Accent labels | `#5F6654` | `text-sage` |
| Card background | `#FCFCFC` | `bg-paper-white` |

---

## Key External URLs

```typescript
// TryOtter (ordering)
const orderUrl = "https://order.tryotter.com/s/bonao";

// WhatsApp
const whatsappBase = "https://wa.me/17183460285";
const whatsappWithMessage = `${whatsappBase}?text=${encodeURIComponent("Hi BONAO...")}`;

// Phone
const phoneLink = "tel:+17183460285";

// Email
const emailLink = "mailto:Bonaobarandgrill@gmail.com";

// Social
const instagram = "https://instagram.com/bonaorestaurant";
const facebook = "https://facebook.com/bonaobarandgrill";
const tiktok = "https://tiktok.com/@bonaorestaurant";
```

---

## Import Paths

```typescript
// Data
import { menu, restaurantInfo } from '@/data/menu';

// Components (when created)
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';

// Utils
import { cn, formatPrice, generateWhatsAppUrl } from '@/lib/utils';
```

---

## CSS Variables (Full Set)

```css
/* Base (Dark Mode) */
--deep-charcoal: #0C0C0C;
--primary-text-dark: #FCFCFC;
--greige: #C4BCB4;
--dark-texture: rgba(255, 255, 255, 0.04);

/* Brand Identity (Sage) */
--logo-sage: #5F6654;
--sage-focus: rgba(95, 102, 84, 0.5);

/* Warm Luxury Accents */
--bronze: #9C744C;
--copper: #A47444;
--walnut: #644C3C;
--espresso: #542C0C;

/* Paper Sections */
--linen: #ECE4DC;
--paper-white: #FCFCFC;
--sand-cream: #F4D4B4;

/* Borders & Separators */
--line-dark: rgba(236, 228, 220, 0.12);
--line-light: rgba(100, 76, 60, 0.12);

/* Fonts */
--font-primary: 'Figtree', sans-serif;
--font-luxury: 'EB Garamond', serif;
```

---

## Menu Data Structure

```typescript
// Access categories
menu.forEach(category => {
  console.log(category.name);      // "Appetizers"
  console.log(category.nameEs);    // "Aperitivos"

  category.items.forEach(item => {
    console.log(item.name);        // "Tostones"
    console.log(item.description); // "Fried green plantains..."
    console.log(item.price);       // 8.99
    console.log(item.image);       // TryOtter CDN URL
  });
});
```

---

## Restaurant Info Access

```typescript
restaurantInfo.name           // "Bonao Restaurant"
restaurantInfo.tagline        // "Modern Dominican Cuisine"
restaurantInfo.address        // Full address
restaurantInfo.phone          // "(718) 346-0285"
restaurantInfo.email          // Email
restaurantInfo.orderOnlineUrl // TryOtter URL
restaurantInfo.hours.weekday  // "11am - 10pm"
restaurantInfo.hours.weekend  // "11am - 11pm"
restaurantInfo.socialMedia.instagram // IG URL
restaurantInfo.features       // Array of features
```

---

## WhatsApp Message Template

```typescript
const prefilled = encodeURIComponent(
  `Hi BONAO, I'd like to place an order.\n\nMy name is ___\nI'd like: ___\nFor: pickup/delivery\nTime: ___`
);
const url = `https://wa.me/17183460285?text=${prefilled}`;
```

---

## Responsive Breakpoints

| Name | Width | Tailwind Prefix |
|------|-------|-----------------|
| Mobile | 320px+ | (default) |
| Tablet | 768px+ | `md:` |
| Desktop | 1024px+ | `lg:` |
| Wide | 1280px+ | `xl:` |

---

## Common Tailwind Classes

### Spacing
- Container: `max-w-6xl mx-auto px-4`
- Section: `py-16 md:py-24`
- Card: `p-6 md:p-8`

### Dark Section Styling
```tsx
<section className="bg-deep-charcoal">
  <h2 className="text-white font-garamond italic">Title</h2>
  <p className="text-greige">Muted body text</p>
  <span className="text-copper uppercase tracking-wider text-sm">LABEL</span>
  <button className="bg-sage text-white">Reserve</button>
</section>
```

### Paper Section Styling
```tsx
<section className="bg-linen">
  <h2 className="text-espresso font-garamond italic">Title</h2>
  <p className="text-walnut">Body text</p>
  <span className="text-sage uppercase tracking-wider text-sm">LABEL</span>
  <div className="bg-paper-white shadow-lg">Card content</div>
</section>
```

### Effects
- Card shadow: `shadow-lg`
- Dark texture overlay: `bg-white/[0.04]`
- Hover lift: `hover:scale-102 transition-transform`
- Border on dark: `border border-linen/10`
- Border on light: `border border-walnut/10`

---

## Form Field Patterns

```tsx
{/* Input on dark background */}
<input className="bg-deep-charcoal border border-linen/20 text-white
  placeholder:text-greige focus:border-sage focus:ring-sage/50" />

{/* Input on paper background */}
<input className="bg-paper-white border border-walnut/15 text-espresso
  placeholder:text-walnut/60 focus:border-sage focus:ring-sage/50" />
```

---

## Page Metadata Template

```typescript
export const metadata: Metadata = {
  title: 'Page Title | Bonao Restaurant',
  description: 'Description here (150-160 chars).',
  openGraph: {
    title: 'Page Title | Bonao Restaurant',
    description: 'Description for social sharing.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
};
```

---

## Git Commit Prefixes

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `style:` | Styling changes |
| `refactor:` | Code restructuring |
| `docs:` | Documentation |
| `chore:` | Maintenance tasks |

---

## File Naming

| Type | Convention | Example |
|------|------------|---------|
| Page | lowercase | `src/app/about/page.tsx` |
| Component | PascalCase | `src/components/ui/Button.tsx` |
| Utility | camelCase | `src/lib/utils.ts` |
| Data | camelCase | `src/data/menu.ts` |

---

## Debug Tips

```bash
# Check build errors
npm run build

# Check lint errors
npm run lint

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules && npm install
```
