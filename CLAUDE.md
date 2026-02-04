# Bonao Restaurant Website

Modern Dominican cuisine restaurant website built with Next.js 15 and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion (`motion/react`)
- **Language**: TypeScript
- **Fonts**: Figtree (sans), EB Garamond (serif), Safira March (display)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── menu/              # Menu page
│   ├── events/            # Events page (video hero)
│   ├── parties/           # Private events booking
│   ├── about/             # About page
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── layout/            # Header, Footer, Section
│   ├── sections/          # Page sections (HeroSection, EventsShowcase, etc.)
│   └── ui/                # Reusable UI components (Button, etc.)
├── data/                  # Static data (menu items)
└── lib/                   # Utilities (motion variants, cn helper)
```

## Design System

### Colors (CSS Variables)

```css
--deep-charcoal: #0C0C0C    /* Dark backgrounds */
--logo-sage: #5F6654        /* Primary brand/CTA color */
--copper: #A47444           /* Accent color */
--espresso: #542C0C         /* Dark text on light backgrounds */
--linen: #ECE4DC            /* Light section backgrounds */
--paper-white: #FCFCFC      /* White backgrounds */
--greige: #C4BCB4           /* Muted text */
--walnut: #644C3C           /* Secondary text */
```

### Typography Classes

- `.font-safira` - Safira March (display headlines)
- `.font-garamond` - EB Garamond (serif body text)
- `.font-figtree` - Figtree (sans-serif, default)
- `.section-label` - Uppercase, letter-spaced labels

### Section Variants

The `<Section>` component supports two variants:
- `variant="dark"` - Charcoal background, light text
- `variant="paper"` - Linen background, dark text

## Key Components

### Header
- 3-column grid layout (logo | nav | menu button)
- Animated logo that appears after 50% viewport scroll
- Props: `transparent`, `animatedLogo`

### HeroSection
- Image carousel with auto-rotation
- Responsive logo sizing
- Props: `subheadline`, `backgroundImages[]`, `interval`

### EventsShowcase
- Video center with event images on sides
- Mobile-responsive grid layout
- Feature tags for event types

## External Integrations

- **Resy**: Reservation widget (overlay technique)
- **WhatsApp**: Floating contact button

## Media Assets

- `/public/optimized/` - Optimized images (WebP format)
- `/public/event-video.mp4` - Events section video
- `/public/fonts/` - Custom fonts (Safira March)

## Tailwind v4 Notes

- Use `bg-linear-to-b` instead of `bg-gradient-to-b`
- Theme defined with `@theme inline` in globals.css
- CSS variables exposed via `--color-*` tokens
