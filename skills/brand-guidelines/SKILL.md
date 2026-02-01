# Brand Guidelines Skill

## Metadata
name: Brand Guidelines
description: Apply Bonao Restaurant brand guidelines for the "Modern House of Fire & Spirits" concept

## Overview

This Skill provides Bonao Restaurant's official brand guidelines for creating consistent, premium materials. The brand concept is **"Modern House of Fire & Spirits"**—a premium restaurant/lounge experience where the promise is craft + atmosphere.

**Brand Identity in One Sentence:**
> "Dark lounge luxury with sage-brand calm + editorial paper interludes + warm bronze food highlights."

**Positioning:** Upscale dining + signature cocktails + warm, intimate ambiance

**Primary conversion goal:** Reservations
**Secondary conversion goals:** View menu (TryOtter), WhatsApp ordering, private dining inquiries

When creating any materials, Claude should merge **B.Burger's conversion architecture** with **Savor's editorial luxury** for a design that feels expensive and drives bookings.

---

## Brand Colors

### The Bona Palette Philosophy

The conversion lever is **Sage** (not red)—calmer, more premium, more "Bona."
**Bronze/Copper** are warm luxury accents only—use sparingly or it turns "hotel lobby."

Let copper live mostly in:
- Section labels
- Tiny accents (rules, icons)
- Photo tone

---

### Color Roles

#### Base (Dark Mode Luxury)

| Token | Hex | Usage |
|-------|-----|-------|
| **Deep Charcoal** | `#0C0C0C` | Page background, dark section panels |
| **Primary Text** | `#FCFCFC` | Primary text on dark backgrounds |
| **Greige** | `#C4BCB4` | Secondary/muted text on dark |

Dark section texture: `rgba(255, 255, 255, 0.04)` subtle overlay

---

#### Brand Identity (Sage)

| Token | Hex | Usage |
|-------|-----|-------|
| **Logo Sage** | `#5F6654` | Primary CTA buttons, brand identity |
| **Sage Hover** | darken 10% | Button hover/active states |
| **Sage Focus** | `#5F6654` at 40–60% opacity | Focus rings, form accents |

---

#### Warm Luxury Accents (Highlights Only)

| Token | Hex | Usage |
|-------|-----|-------|
| **Bronze** | `#9C744C` | Gold-ish highlights, labels, icons |
| **Copper** | `#A47444` | Warm highlight alternative |
| **Walnut** | `#644C3C` | Depth accents, secondary text on paper |
| **Espresso** | `#542C0C` | Primary text on paper sections |

---

#### Paper Sections (Editorial Savor Vibe)

| Token | Hex | Usage |
|-------|-----|-------|
| **Linen** | `#ECE4DC` | Paper section backgrounds |
| **Paper White** | `#FCFCFC` | Cards on paper sections |
| **Sand Cream** | `#F4D4B4` | Feature highlight panels (use sparingly) |

**Text on paper:** Use Espresso/Walnut (not pure black) for warmth:
- Primary text: `#542C0C` (Espresso)
- Secondary text: `#644C3C` (Walnut)

---

### Border & Separator Rules

| Context | Value |
|---------|-------|
| On dark backgrounds | `rgba(236, 228, 220, 0.12)` (linen-ish lines) |
| On light backgrounds | Walnut at 10–15% opacity |

---

## Typography

We use two fonts with distinct roles:

### Figtree (Primary UI / Body)
**File:** `Figtree-VariableFont_wght.ttf`

- Navigation, buttons, labels, body text, forms, prices
- Weights: 300–600
- Style cues: clean, modern, confident

### EB Garamond Italic (Luxury Accent)
**File:** `EBGaramond-Italic-VariableFont_wght.ttf`

- Hero headlines or hero phrases
- Section titles ("Tonight's Specials", "Private Dining", "Signature Dishes")
- Short poetic lines (1–10 words max)
- **Never use for long paragraphs**

---

### Typography Integration Rules

Because EB Garamond is italic-only, it becomes your **signature voice**.

**Do this:**
- EB Garamond Italic: Hero headline + section titles + short phrases
- Figtree: everything else (body, menu, forms, buttons)

**Add "luxury structure" using Figtree:**
Use Figtree uppercase labels with letter spacing as the system glue:
- "SIGNATURES"
- "TONIGHT"
- "PRIVATE DINING"
- "RESERVATIONS"

This keeps the page modern and prevents "all italic" from becoming theatrical.

---

### Type Hierarchy

| Element | Font | Size | Notes |
|---------|------|------|-------|
| Hero headline | EB Garamond Italic | 48–72px | Large, commanding |
| Hero subtext | Figtree Regular | 18–20px | Supporting value prop |
| Section label | Figtree Uppercase | 12–14px | Letter-spacing: 0.1em+ |
| Section title | EB Garamond Italic | 32–40px | Elegant, minimal |
| Body text | Figtree Regular | 16–18px | Clean readability |
| Buttons/CTAs | Figtree Medium/SemiBold | 14–16px | Confident, clear |
| Prices | Figtree Regular | 16px | Clarity over style |

---

### The Luxury Trick

Pair a small uppercase label with an elegant serif title:

```
SIGNATURES          ← Figtree, uppercase, letter-spaced, Sage or Copper
Crafted for the night.  ← EB Garamond Italic
```

---

## UI Patterns

### Buttons

| Type | Style |
|------|-------|
| **Primary** | Sage filled (`#5F6654`), white text |
| **Secondary** | Ghost/outline (Linen border, transparent fill) |
| **Links** | Copper underline on hover |

### Cards

| Context | Style |
|---------|-------|
| On Linen sections | Card background `#FCFCFC` with subtle shadow |
| Feature highlight | Sand Cream (`#F4D4B4`) behind feature dish/cocktail (not everywhere) |

---

## Layout Blueprint

### Section-by-Section Design

---

### 1. Hero Section (Dark Lounge + Sage CTA)
*Above-the-fold must convert.*

- Full-bleed interior image + dark overlay
- Headline in **EB Garamond Italic** (luxury)
- Subtext and microcopy in **Figtree** (clean)
- **Primary CTA:** Sage button (`#5F6654`)
- **Secondary CTA:** Outline or text link in Linen/Greige
- Optional: Inline reservation mini-form (Date / Time / Guests) with Sage button

**Why it works:** Sage buttons feel "boutique," not "template red."

---

### 2. Signature Tiles (Paper Editorial, Savor Style)
*Switch to Linen background immediately after hero.*

- Background: Linen (`#ECE4DC`)
- Four tiles: Dish / Cocktail / Private Dining / Wine
- Tile caption labels: Figtree uppercase, in Sage or Copper (small)
- Titles: EB Garamond Italic
- Minimal borders: Walnut at 10–15% opacity

**This is where the luxury brochure feel kicks in.**

---

### 3. Featured Pairings (Split Layout, Alternating)
*Magazine-style two-column blocks*

- Left: EB Garamond heading + short story text
- Right: Big photo framed with thin Bronze border
- Soft CTAs: "Taste the Signature →"

---

### 4. Tonight's Specials (Dark + Warm Accents)
*Return to dark for menu preview.*

- Background: Deep Charcoal (`#0C0C0C`)
- Headline: EB Garamond Italic (white)
- Menu text: Figtree in Greige
- Prices and key items: Bronze/Copper sparingly
- Single "Reserve" CTA in Sage

---

### 5. Social Proof (Linen)

- 4–6 short reviews + star row
- Trust anchors: "Valet / Parking", "Dress code", "Live music nights", "Private rooms"

---

### 6. Booking Block (Dark, Hotel Concierge Feel)
*This is where you win the conversion.*

- Background: Deep Charcoal
- Form fields: Dark inputs with subtle Linen borders
- Focus state: Sage outline
- Button: Sage fill, white text
- Small helper text in Greige
- Optional: Place form over photo with strong overlay for readability
- **Secondary CTA:** "Private Dining Inquiry"

---

### 7. Footer (Dark)

- Location + hours + phone + socials
- Embedded map (optional)
- Micro-links minimal

---

## Section Rhythm

Alternate between dark lounge and paper sections:

1. Hero → **Dark (Charcoal)**
2. Signature Tiles → **Paper (Linen)**
3. Featured Pairings → **Alternating splits**
4. Tonight's Specials → **Dark (Charcoal)**
5. Social Proof → **Paper (Linen)**
6. Booking Block → **Dark (Charcoal)**
7. Footer → **Dark (Charcoal)**

---

## Conversion Patterns

Premium conversion that matches the aesthetic:

### Hero Mini-Reserve Bar
- Date / Time / Guests fields
- Sage button

### Sticky Reserve (Desktop)
- Small sticky pill
- Sage background, minimal design

### Sticky Bottom Button (Mobile)
- Sage background
- Simple "Reserve" text

### Secondary Action: View Menu
- Calm link style
- Goes to TryOtter

### WhatsApp Ordering
- Small floating icon
- Sage outline (not huge green blob)

---

## Interaction & Animation Rules

Premium feel = calm, intentional motion.

| Element | Behavior |
|---------|----------|
| Links | Subtle underline + small arrow slide on hover |
| Buttons | Clean contrast, no heavy shadows |
| Image cards | Slight lift on hover + border brightens |
| Transitions | Keep animations slow (300–500ms ease) |
| Scrolling | Smooth, no jarring jumps |

**Hover states:** Subtle and refined. Bronze/Copper accent reveals on interaction.

---

## Color Harmony Warning

Sage can look "muted" if photos are too warm/orange.

**Fix:** Keep images warm, but balance with:
- Cooler shadows (neutral darks)
- Linen sections
- Greige typography

This prevents "muddy" color harmony.

---

## When to Apply

Apply these guidelines whenever creating:

- Website pages and components
- Landing pages
- Marketing materials
- Social media graphics
- Menus and print materials
- Email templates
- Reservation confirmations
- Private dining proposals

---

## Quick Reference (CSS Variables)

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

## Resources

Font files required:
- `Figtree-VariableFont_wght.ttf`
- `EBGaramond-Italic-VariableFont_wght.ttf`

---

## Design Philosophy

> The premium comes from the mood + execution, not from over-decoration.

- **Editorial luxury:** Big whitespace, alternating sections, serif moments
- **Conversion architecture:** Clear CTAs, strategic booking placements
- **Sage is the brand:** Primary buttons, focus states, brand identity
- **Bronze/Copper are jewelry:** Use for highlights, labels, small accents only
- **Calm confidence:** Slow animations, subtle hovers, no visual noise
- **Paper interludes:** Linen sections break up dark lounge, add editorial feel
