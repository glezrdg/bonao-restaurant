# Component Development Guide

## Component Creation Checklist

When creating any new component, follow this checklist:

### Before Writing Code
- [ ] Check if similar component exists
- [ ] Review brand guidelines for styling requirements
- [ ] Identify all props needed
- [ ] Determine responsive breakpoints

### During Development
- [ ] Create TypeScript interface for props
- [ ] Use brand color tokens (not raw hex values)
- [ ] Apply Tailwind mobile-first
- [ ] Add hover/focus states
- [ ] Ensure keyboard accessibility

### After Completion
- [ ] Test on mobile (320px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1280px+)
- [ ] Verify dark section behavior
- [ ] Check for TypeScript errors

---

## UI Component Specifications

### Button

**File:** `src/components/ui/Button.tsx`

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}
```

**Variants:**
| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| primary | Ember (#BB452B) | White | None | Book, Order CTAs |
| secondary | Transparent | Bronze | Bronze 1px | View Menu, Learn More |
| ghost | Transparent | Bronze | None | Inline links, soft CTAs |

**Sizes:**
| Size | Padding | Font Size |
|------|---------|-----------|
| sm | px-4 py-2 | 14px |
| md | px-6 py-3 | 16px |
| lg | px-8 py-4 | 18px |

**States:**
- Hover: Slight brightness increase, subtle lift
- Focus: Ring with bronze color
- Disabled: 50% opacity, no pointer events

---

### Card

**File:** `src/components/ui/Card.tsx`

```typescript
interface CardProps {
  variant: 'dark' | 'ivory';
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

**Variants:**
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| dark | Midnight | White/Muted | rgba(255,255,255,0.10) |
| ivory | Ivory | Ink | None or Bronze subtle |

**Hover behavior (when enabled):**
- Slight scale (1.02)
- Border brightens
- Shadow increases

---

### Input

**File:** `src/components/ui/Input.tsx`

```typescript
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'date' | 'number';
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}
```

**Styling:**
- Background: White (on dark) or subtle gray (on ivory)
- Border: 1px subtle, Bronze on focus
- Label: Figtree, small, above input
- Error: Ember text below input

---

### Select

**File:** `src/components/ui/Select.tsx`

```typescript
interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}
```

---

### Badge

**File:** `src/components/ui/Badge.tsx`

```typescript
interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent';
}
```

**Usage:** Trust badges, feature highlights, tags

---

## Section Component Specifications

### Section Wrapper

**File:** `src/components/layout/Section.tsx`

```typescript
interface SectionProps {
  variant: 'dark' | 'ivory';
  id?: string;
  className?: string;
  children: React.ReactNode;
}
```

**Behavior:**
- Full-width container
- Consistent vertical padding (py-16 md:py-24)
- Centered content with max-width
- Applies appropriate background + text colors

```tsx
// Usage
<Section variant="dark" id="hero">
  <HeroContent />
</Section>
<Section variant="ivory" id="signatures">
  <SignatureGrid />
</Section>
```

---

### HeroSection

**File:** `src/components/sections/HeroSection.tsx`

```typescript
interface HeroSectionProps {
  headline: string;          // EB Garamond Italic
  subheadline: string;       // Figtree
  backgroundImage: string;
  showReservationForm?: boolean;
}
```

**Structure:**
```
┌────────────────────────────────────────┐
│  [Nav overlay or transparent]          │
│                                        │
│         [Headline - large]             │
│        [Subheadline - medium]          │
│                                        │
│   ┌──────────────────────────────┐     │
│   │  Date    Time    Guests      │     │
│   │  [Book a Table]              │     │
│   └──────────────────────────────┘     │
│                                        │
│   [View Menu]  [Order WhatsApp]        │
│                                        │
└────────────────────────────────────────┘
```

---

### FeatureGrid

**File:** `src/components/sections/FeatureGrid.tsx`

```typescript
interface FeatureGridProps {
  items: {
    image: string;
    title: string;
    description?: string;
    href?: string;
  }[];
}
```

**Layout:** 2x2 or 4-column grid depending on item count

---

### SplitSection

**File:** `src/components/sections/SplitSection.tsx`

```typescript
interface SplitSectionProps {
  variant: 'dark' | 'ivory';
  imagePosition: 'left' | 'right';
  image: string;
  label?: string;           // Small uppercase Figtree
  title: string;            // EB Garamond Italic
  description: string;      // Figtree body
  cta?: {
    label: string;
    href: string;
  };
}
```

**Structure:**
```
┌─────────────────┬─────────────────┐
│                 │  LABEL          │
│                 │  Title Here     │
│    [Image]      │                 │
│                 │  Description    │
│                 │  text here...   │
│                 │                 │
│                 │  [CTA Arrow →]  │
└─────────────────┴─────────────────┘
```

---

### MenuPreview (Three Column)

**File:** `src/components/sections/MenuPreview.tsx`

```typescript
interface MenuPreviewProps {
  leftColumn: {
    title: string;
    items: MenuItem[];
  };
  centerImage: string;
  rightColumn: {
    title: string;
    items: MenuItem[];
  };
}
```

---

### BookingBlock

**File:** `src/components/sections/BookingBlock.tsx`

```typescript
interface BookingBlockProps {
  showForm?: boolean;        // Full form or Resy widget only
  showPrivateDiningCTA?: boolean;
}
```

**Contains:**
- Reservation form OR Resy widget embed
- Supporting copy (hours, capacity)
- Secondary CTA for private dining

---

## Page Component Specifications

### MenuGrid

**File:** `src/components/pages/MenuGrid.tsx`

```typescript
interface MenuGridProps {
  categories: MenuCategory[];
  showCategoryNav?: boolean;
  itemLinkUrl: string;       // TryOtter base URL
}
```

**Features:**
- Category tabs or sections
- Item cards with image, name, description, price
- Each item links to TryOtter
- Sticky CTA bar at bottom

---

### MenuItemCard

**File:** `src/components/pages/MenuItemCard.tsx`

```typescript
interface MenuItemCardProps {
  item: MenuItem;
  orderUrl: string;
}
```

**Structure:**
```
┌─────────────────────────┐
│  ┌─────────────────┐    │
│  │                 │    │
│  │     [Image]     │    │
│  │                 │    │
│  └─────────────────┘    │
│  Name              $XX  │
│  Description text...    │
│                         │
│  [Order →]              │
└─────────────────────────┘
```

---

### EventCard

**File:** `src/components/pages/EventCard.tsx`

```typescript
interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
  ctaType: 'reserve' | 'whatsapp' | 'info';
  ctaHref: string;
}
```

---

### PartyForm

**File:** `src/components/pages/PartyForm.tsx`

```typescript
interface PartyFormProps {
  onSubmit: (data: PartyFormData) => Promise<void>;
}

interface PartyFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  timeRange: string;
  guestCount: number;
  eventType: string;
  notes?: string;
}
```

**Event type options:**
- Birthday
- Corporate
- Anniversary
- Graduation
- Holiday
- Other

**Time range options:**
- Lunch (11am - 3pm)
- Happy Hour (4pm - 7pm)
- Dinner (7pm - 10pm)
- Late Night (10pm+)

---

## Layout Components

### Header

**File:** `src/components/layout/Header.tsx`

```typescript
interface HeaderProps {
  transparent?: boolean;     // For hero overlay
}
```

**Desktop structure:**
```
┌──────────────────────────────────────────────────┐
│ [Logo]   Nav Nav Nav Nav   [Reserve] [Order] ☰  │
└──────────────────────────────────────────────────┘
```

**Mobile structure:**
```
┌──────────────────────────────────────────────────┐
│ [Logo]                              [☰ Menu]     │
└──────────────────────────────────────────────────┘
```

**Nav items:**
- Menu
- Drinks
- Reserve
- Order
- Parties
- About

**CTA buttons (always visible):**
- Reserve (primary)
- Order Online (secondary)

---

### Footer

**File:** `src/components/layout/Footer.tsx`

**Structure:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [Logo]                                                │
│                                                        │
│  ┌──────────┬──────────┬──────────┬──────────┐        │
│  │ LOCATION │  HOURS   │ CONTACT  │  FOLLOW  │        │
│  │ Address  │ Mon-Thu  │ Phone    │ IG       │        │
│  │ Brooklyn │ Fri-Sat  │ Email    │ FB       │        │
│  │ NY 11207 │ Sunday   │ WhatsApp │ TikTok   │        │
│  └──────────┴──────────┴──────────┴──────────┘        │
│                                                        │
│  ┌─────────────────────────────────────┐              │
│  │         [Google Maps Embed]         │              │
│  └─────────────────────────────────────┘              │
│                                                        │
│  © 2024 Bonao Restaurant. All rights reserved.        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### MobileNav

**File:** `src/components/layout/MobileNav.tsx`

```typescript
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Features:**
- Full-screen overlay (dark)
- Large touch targets (48px min)
- Primary CTAs at top
- Nav links in center
- Social icons at bottom
- Close button (X) prominent

---

## Utility Functions

### cn (className merger)

**File:** `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage:**
```tsx
<div className={cn(
  'base-class',
  variant === 'dark' && 'dark-class',
  className
)} />
```

---

### formatPrice

**File:** `src/lib/utils.ts`

```typescript
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
```

---

### generateWhatsAppUrl

**File:** `src/lib/utils.ts`

```typescript
export function generateWhatsAppUrl(message?: string): string {
  const phone = '17183460285';
  const defaultMessage = "Hi BONAO, I'd like to place an order.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${phone}?text=${text}`;
}
```

---

## Component Dependencies

Install these packages for component functionality:

```bash
npm install clsx tailwind-merge
npm install @radix-ui/react-dialog  # For mobile nav
npm install @radix-ui/react-select  # For form selects
```

Optional but recommended:
```bash
npm install framer-motion           # For animations
npm install react-hook-form         # For form handling
npm install zod                     # For form validation
```
