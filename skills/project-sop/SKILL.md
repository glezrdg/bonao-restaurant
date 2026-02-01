# Project SOP & Way of Work

## Metadata
name: Project SOP
description: Standard Operating Procedures for Bonao Restaurant website development

---

## Project Overview

**Project:** Bonao Restaurant Website
**Stack:** Next.js 16 + TypeScript + Tailwind CSS v4
**Goal:** Premium restaurant website driving reservations and orders

### Conversion Priorities
1. **Primary:** Reservations (Resy)
2. **Secondary:** Order Online (TryOtter)
3. **Secondary:** WhatsApp Orders
4. **Tertiary:** Private Event Inquiries

---

## Phase 1: Foundation (Current Sprint)

### 1.1 Design System Implementation
**Status:** 🔴 Not Started

| Task | Description | Acceptance |
|------|-------------|------------|
| Font Setup | Add Figtree + EB Garamond fonts | Fonts load in layout, CSS variables set |
| Color Tokens | Implement brand colors as CSS/Tailwind | Full palette available (Sage, Bronze, Linen, etc.) |
| Typography Scale | Create text utility classes | Headers, body, labels styled |
| Component Tokens | Button, card, section base styles | Consistent design primitives |

**Files to modify:**
- `src/app/globals.css` - Add color tokens, typography
- `src/app/layout.tsx` - Update font loading
- `tailwind.config.ts` - Extend theme (create if needed)

### 1.2 Layout Architecture
**Status:** 🔴 Not Started

| Task | Description | Acceptance |
|------|-------------|------------|
| Header Component | Sticky nav with CTAs | Nav works on mobile/desktop |
| Footer Component | Full footer with all info | Address, hours, map, socials |
| Page Layout | Wrapper with section rhythm | Dark (Charcoal) / Paper (Linen) alternating sections |
| Mobile Nav | Hamburger menu with CTAs | Touch-friendly, accessible |

**Files to create:**
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Section.tsx`
- `src/components/layout/MobileNav.tsx`

---

## Phase 2: Core Pages

### 2.1 Home Page
**Priority:** 🔴 Critical
**Converts:** All CTAs

| Section | Components Needed | Data Source |
|---------|------------------|-------------|
| Hero | HeroSection, ReservationMini, CTAButtons | Static + Resy widget |
| Signatures | FeatureGrid, DishCard | menu.ts (featured items) |
| Pairings | SplitSection, EditorialBlock | Static content |
| Specials | MenuPreview, ThreeColumn | menu.ts |
| Social Proof | ReviewCarousel, TrustBadges | Static (client provides) |
| Booking | BookingBlock, ReservationForm | Resy integration |

### 2.2 Menu Page
**Priority:** 🔴 Critical
**Converts:** Order Online, WhatsApp

| Requirement | Implementation |
|-------------|---------------|
| Categories from menu.ts | Dynamic category tabs/sections |
| Items with photo/name/desc/price | MenuItemCard component |
| Every item links to TryOtter | Use restaurantInfo.orderOnlineUrl |
| Top/bottom CTAs | Sticky CTA bar or repeated buttons |

**Note:** Menu is display-only. Transactions happen on TryOtter.

### 2.3 Drinks Page
**Priority:** 🟡 High
**Same structure as Menu, filtered to drinks category**

### 2.4 Reserve Page
**Priority:** 🔴 Critical
**Converts:** Reservations

| Component | Notes |
|-----------|-------|
| Resy Widget | Embed official Resy booking widget |
| Supporting Copy | Hours, dress code, capacity info |
| Fallback CTA | Phone number if widget fails |

### 2.5 Order Page
**Priority:** 🟡 High
**Converts:** Orders

| Section | Content |
|---------|---------|
| Order Online Card | Big CTA → TryOtter link |
| WhatsApp Card | Big CTA → wa.me link with prefilled message |
| Explanation | Short copy on each option |

### 2.6 Parties/Private Events Page
**Priority:** 🟡 High
**Converts:** Event inquiries

| Form Field | Type | Required |
|------------|------|----------|
| Full Name | text | ✅ |
| Email | email | ✅ |
| Phone | tel | ✅ |
| Preferred Date | date | ✅ |
| Time Range | select | ✅ |
| Guest Count | number | ✅ |
| Event Type | select | ✅ |
| Notes | textarea | ❌ |

**Form submission:** Email to client inbox (Phase 1)

### 2.7 About Page
**Priority:** 🟢 Medium

| Section | Content |
|---------|---------|
| Brand Story | Client-provided "About Bonao" copy |
| Visuals | Interior + food photography |
| Values | Quality, hospitality, community |

### 2.8 Events Page
**Priority:** 🟢 Medium

| Component | Notes |
|-----------|-------|
| Event Cards | 2 initial events from client |
| Each shows | Title, date/time, description, image, CTA |
| CTA options | Reserve, WhatsApp, More Info |

### 2.9 Specials Page
**Priority:** 🟢 Medium

| Section | Content |
|---------|---------|
| Featured Items | Curated specials from menu.ts |
| CTAs | Link to full Menu + Order buttons |

### 2.10 Jobs Page
**Priority:** 🟢 Low

| Option A | Option B |
|----------|----------|
| Simple email link | Basic form (name, role, contact, message) |

Keep lightweight.

### 2.11 Gift Cards Page
**Status:** ❌ Deferred
**Action:** Hide from nav or show "Coming Soon"

---

## Phase 3: Integrations

### 3.1 TryOtter Integration
**Type:** Outbound links only

```typescript
// All menu items link to:
const orderUrl = restaurantInfo.orderOnlineUrl;
// Already configured in src/data/menu.ts
```

### 3.2 WhatsApp Integration
**Type:** Deep link with prefilled message

```typescript
const whatsappNumber = "17183460285";
const prefilledMessage = encodeURIComponent(
  "Hi BONAO, I'd like to place an order. My name is ___, I'd like ___, for pickup/delivery at ___."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;
```

### 3.3 Resy Integration
**Type:** Embed widget

```html
<!-- Resy widget embed (get code from Resy dashboard) -->
<div id="resy-widget" data-restaurant-id="BONAO_ID"></div>
<script src="https://widgets.resy.com/embed.js"></script>
```

### 3.4 Form Submission (Private Events)
**Phase 1:** Email via serverless function

```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email via Resend/SendGrid/etc
  // Return success/error response
}
```

### 3.5 Google Maps
**Already implemented:** Embedded iframe in current page

---

## Component Library

### Atomic Components
Create in `src/components/ui/`

| Component | Props | Usage |
|-----------|-------|-------|
| Button | variant, size, href, onClick | CTAs everywhere |
| Card | variant (dark/ivory), hover | Menu items, features |
| Badge | label, icon | Trust badges, features |
| Input | type, label, error | Forms |
| Select | options, label | Forms |
| Textarea | label, rows | Forms |
| Icon | name, size | Throughout |

### Section Components
Create in `src/components/sections/`

| Component | Used On | Notes |
|-----------|---------|-------|
| HeroSection | Home | Full-bleed, reservation mini-form |
| FeatureGrid | Home | 3-4 signature tiles |
| SplitSection | Home, About | Two-column magazine layout |
| MenuPreview | Home | Three-column specials |
| ReviewSection | Home | Social proof carousel |
| BookingBlock | Home, Reserve | Full reservation form |
| CTABar | Menu, Drinks | Sticky order buttons |

### Page Components
Create in `src/components/pages/`

| Component | Page |
|-----------|------|
| MenuGrid | Menu, Drinks |
| EventCard | Events |
| PartyForm | Parties |
| JobForm | Jobs |

---

## File Structure Convention

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── drinks/
│   │   └── page.tsx
│   ├── specials/
│   │   └── page.tsx
│   ├── order/
│   │   └── page.tsx
│   ├── reserve/
│   │   └── page.tsx
│   ├── parties/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx
│   ├── jobs/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts     # Form submission endpoint
├── components/
│   ├── ui/                  # Atomic components
│   ├── layout/              # Header, Footer, Section
│   ├── sections/            # Page sections
│   └── pages/               # Page-specific components
├── data/
│   └── menu.ts              # Menu + restaurant data
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript interfaces
```

---

## Development Standards

### Git Workflow

```bash
# Branch naming
feature/[page-name]      # feature/home-page
feature/[component]      # feature/header-component
fix/[issue]              # fix/mobile-nav-scroll
```

```bash
# Commit format
feat: add hero section with reservation form
fix: correct WhatsApp prefilled message encoding
style: update button hover states per brand guidelines
refactor: extract MenuItemCard component
```

### Code Standards

**TypeScript:**
- Strict mode enabled
- All props typed with interfaces
- No `any` types

**Components:**
```typescript
// Component template
interface ComponentProps {
  variant?: 'dark' | 'ivory';
  children: React.ReactNode;
}

export function Component({ variant = 'dark', children }: ComponentProps) {
  return (
    <div className={cn(
      'base-styles',
      variant === 'dark' && 'dark-styles',
      variant === 'ivory' && 'ivory-styles'
    )}>
      {children}
    </div>
  );
}
```

**Styling:**
- Use Tailwind utilities first
- Extract to components for reuse
- Follow brand guidelines color tokens
- Mobile-first responsive design

### Performance Standards

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Image format | WebP with fallbacks |
| Image sizes | 400, 800, 1200, 1920 variants |

**Image handling:**
```typescript
// Use Next.js Image with sizes
<Image
  src="/optimized/food/dish_800.webp"
  alt="Dish name"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={isAboveFold}
/>
```

---

## Quality Assurance

### Pre-Commit Checklist

- [ ] TypeScript compiles without errors
- [ ] ESLint passes
- [ ] Responsive on mobile (320px+)
- [ ] Dark mode tested (if applicable)
- [ ] All links work (no 404s)
- [ ] Images have alt text
- [ ] Forms validate correctly

### Pre-Deploy Checklist

- [ ] Build succeeds (`npm run build`)
- [ ] All pages render correctly
- [ ] Meta tags present (title, description, OG)
- [ ] Favicon displays
- [ ] TryOtter links work
- [ ] WhatsApp opens correctly
- [ ] Resy widget loads
- [ ] Forms submit successfully
- [ ] Map displays correctly
- [ ] Social links work
- [ ] Mobile nav functions
- [ ] All images load

### Acceptance Testing

Run through each user journey:

**A) Order Online**
1. Click "Order Online" from any location
2. Verify redirect to TryOtter
3. Confirm menu loads

**B) Order via WhatsApp**
1. Click "Order via WhatsApp"
2. Verify WhatsApp opens
3. Confirm prefilled message appears

**C) Reserve a Table**
1. Navigate to Reserve page
2. Interact with Resy widget
3. Complete test booking (if possible)

**D) Private Event Inquiry**
1. Navigate to Parties page
2. Fill out form completely
3. Submit and verify confirmation
4. Check email delivery

---

## Content Requirements

### Client Must Provide

| Item | Status | Notes |
|------|--------|-------|
| "About Bonao" copy | ⏳ Pending | Brand story text |
| Event 1 details | ⏳ Pending | Title, date, description, image |
| Event 2 details | ⏳ Pending | Title, date, description, image |
| Private dining policy | ⏳ Pending | Capacity, minimum spend (optional) |
| Resy restaurant ID | ⏳ Pending | For widget integration |
| Review quotes | ⏳ Pending | 4-6 short testimonials |
| Trust badge info | ⏳ Pending | Valet, dress code, etc. |

### Already Available

| Item | Location |
|------|----------|
| Menu data | `src/data/menu.ts` |
| Restaurant info | `src/data/menu.ts` |
| Address + Map | Configured |
| Pro photos | TryOtter CDN + `/optimized/` |
| Brand guidelines | `skills/brand-guidelines/SKILL.md` |
| Social links | `src/data/menu.ts` |

---

## Deployment

### Environment Setup

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

### Recommended Hosting

**Vercel** (optimal for Next.js):
- Automatic deployments from Git
- Edge functions for API routes
- Image optimization included
- Analytics available

### Environment Variables

```env
# .env.local (create this file)
RESEND_API_KEY=your_key_here      # For email sending
RESY_RESTAURANT_ID=your_id_here   # For Resy widget
```

---

## Timeline Phases

### Phase 1: Foundation
- Design system implementation
- Layout components (Header, Footer, Section)
- Home page complete

### Phase 2: Core Pages
- Menu + Drinks pages
- Reserve page with Resy
- Order page
- Parties page with form

### Phase 3: Supporting Pages
- About page
- Events page
- Specials page
- Jobs page

### Phase 4: Polish & Launch
- Performance optimization
- SEO finalization
- Cross-browser testing
- Client review
- Go-live

---

## Quick Reference

### Brand Colors (CSS Variables)
```css
/* Base (Dark Mode) */
--deep-charcoal: #0C0C0C;
--primary-text-dark: #FCFCFC;
--greige: #C4BCB4;

/* Brand Identity (Sage - Primary CTA) */
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

/* Borders */
--line-dark: rgba(236, 228, 220, 0.12);
--line-light: rgba(100, 76, 60, 0.12);
```

### Key External Links
```typescript
const links = {
  tryOtter: restaurantInfo.orderOnlineUrl,
  whatsApp: `https://wa.me/17183460285`,
  phone: `tel:+17183460285`,
  email: `mailto:Bonaobarandgrill@gmail.com`,
  instagram: 'https://instagram.com/bonaorestaurant',
  facebook: 'https://facebook.com/bonaobarandgrill',
  tiktok: 'https://tiktok.com/@bonaorestaurant'
};
```

### Import Aliases
```typescript
import { Button } from '@/components/ui/Button';
import { menu, restaurantInfo } from '@/data/menu';
```
