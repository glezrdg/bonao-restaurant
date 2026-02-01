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

| Token | Hex | CSS Variable | Tailwind |
|-------|-----|--------------|----------|
| Midnight | `#020B14` | `var(--midnight)` | `bg-midnight` |
| Ink | `#190F0D` | `var(--ink)` | `text-ink` |
| Ivory | `#F8F2EC` | `var(--ivory)` | `bg-ivory` |
| Bronze | `#A46A3A` | `var(--bronze)` | `text-bronze` |
| Ember | `#BB452B` | `var(--ember)` | `bg-ember` |

**Utility colors:**
```css
--line-dark: rgba(255, 255, 255, 0.10);
--muted-dark: rgba(255, 255, 255, 0.72);
```

---

## Typography

| Element | Font | Class |
|---------|------|-------|
| Hero headline | EB Garamond Italic | `font-garamond text-5xl italic` |
| Section title | EB Garamond Italic | `font-garamond text-4xl italic` |
| Section label | Figtree Uppercase | `uppercase tracking-wider text-sm` |
| Body | Figtree | `font-sans text-base` |
| Button | Figtree | `font-sans font-medium` |

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

## Section Pattern

```tsx
{/* Dark section */}
<Section variant="dark" id="section-id">
  <span className="text-bronze uppercase tracking-wider text-sm">LABEL</span>
  <h2 className="font-garamond text-4xl italic mt-2">Title</h2>
  {/* Content */}
</Section>

{/* Ivory section */}
<Section variant="ivory" id="section-id">
  <span className="text-bronze uppercase tracking-wider text-sm">LABEL</span>
  <h2 className="font-garamond text-4xl italic mt-2 text-ink">Title</h2>
  {/* Content */}
</Section>
```

---

## Button Patterns

```tsx
{/* Primary CTA (conversions) */}
<Button variant="primary" href="/reserve">
  Book a Table
</Button>

{/* Secondary CTA */}
<Button variant="secondary" href="/menu">
  View Menu
</Button>

{/* Ghost/soft CTA */}
<Button variant="ghost" href="/about">
  Learn More →
</Button>
```

---

## Responsive Breakpoints

| Name | Width | Tailwind Prefix |
|------|-------|-----------------|
| Mobile | 320px+ | (default) |
| Tablet | 768px+ | `md:` |
| Desktop | 1024px+ | `lg:` |
| Wide | 1280px+ | `xl:` |

```tsx
{/* Responsive grid example */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## Common Tailwind Classes

### Spacing
- Container: `max-w-6xl mx-auto px-4`
- Section: `py-16 md:py-24`
- Card: `p-6 md:p-8`

### Text on Dark
- Primary: `text-white`
- Muted: `text-white/70`
- Accent: `text-bronze`

### Text on Ivory
- Primary: `text-ink`
- Muted: `text-ink/60`
- Accent: `text-bronze`

### Effects
- Card shadow: `shadow-lg`
- Blur backdrop: `backdrop-blur-sm`
- Hover lift: `hover:scale-102 transition-transform`
- Border subtle: `border border-white/10`

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

## Form Field Patterns

```tsx
{/* Text input */}
<Input
  type="text"
  name="fullName"
  label="Full Name"
  required
/>

{/* Email */}
<Input
  type="email"
  name="email"
  label="Email Address"
  required
/>

{/* Phone */}
<Input
  type="tel"
  name="phone"
  label="Phone Number"
  required
/>

{/* Date */}
<Input
  type="date"
  name="preferredDate"
  label="Preferred Date"
  required
/>

{/* Select */}
<Select
  name="eventType"
  label="Event Type"
  options={[
    { value: 'birthday', label: 'Birthday' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'anniversary', label: 'Anniversary' },
  ]}
  required
/>
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
