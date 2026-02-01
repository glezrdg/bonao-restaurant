# Photo Manager Skill

## Metadata
name: photo-manager
description: Add, replace, and manage photos in the website UI with automatic responsive image handling for different device resolutions.

---

## Overview

This skill helps you manage photos throughout the Bonao Restaurant website. It handles:
- Adding new photos to pages and components
- Replacing existing photos with new ones
- Organizing photos in the correct directory structure
- Generating responsive image code with proper `sizes` and `srcset` for all device resolutions

---

## Directory Structure

```
public/
└── images/
    └── food/           # Hero and feature images (current production)

optimized/
├── food/              # Food photography (31 dishes + cocktails)
│   └── Cocktail's/    # Cocktail subcategory
├── restaurant/        # Interior/ambiance shots (44 images)
└── katrine/           # Additional photography collection
```

### Image Size Variants

All optimized images have 4 size variants:
| Suffix | Width | Use Case |
|--------|-------|----------|
| `_400` | 400px | Mobile, thumbnails, cards on mobile |
| `_800` | 800px | Tablet, cards on desktop, half-width sections |
| `_1200` | 1200px | Desktop cards, medium sections |
| `_1920` | 1920px | Hero images, full-width backgrounds |

---

## How to Use This Skill

### 1. Adding a New Photo

**Step 1: Identify the image location**
Check if the image exists in `/optimized/` with size variants:
```
/optimized/food/DISH NAME_400.webp
/optimized/food/DISH NAME_800.webp
/optimized/food/DISH NAME_1200.webp
/optimized/food/DISH NAME_1920.webp
```

**Step 2: Choose the appropriate component pattern**

For **Hero/Full-Width Images**:
```tsx
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

<ResponsiveImage
  basePath="/optimized/restaurant/_S8A7268"
  alt="Bonao Restaurant dining room with warm ambient lighting"
  variant="hero"
  priority
/>
```

For **Card/Grid Images**:
```tsx
<ResponsiveImage
  basePath="/optimized/food/BONAO BURGER .2"
  alt="Bonao Burger with purple cabbage slaw and fries"
  variant="card"
/>
```

For **Thumbnail Images**:
```tsx
<ResponsiveImage
  basePath="/optimized/food/GUAVA CHIPOTLE RIBS"
  alt="Guava Chipotle Ribs"
  variant="thumbnail"
/>
```

### 2. Replacing an Existing Photo

**Step 1: Locate the current usage**
Search for the image path in the codebase:
```bash
# Example: Find where hero.webp is used
grep -r "hero.webp" src/
```

**Step 2: Update the image path**
Replace the old path with the new optimized image base path:
```tsx
// Before
backgroundImage="/images/food/hero.webp"

// After - using ResponsiveImage component
<ResponsiveImage
  basePath="/optimized/restaurant/_S8A7394"
  alt="Restaurant ambiance"
  variant="hero"
  priority
/>
```

### 3. Using Raw Next.js Image (Manual Approach)

When you need more control, use the manual pattern:

```tsx
import Image from 'next/image';

<Image
  src="/optimized/food/BONAO BURGER .2_1200.webp"
  alt="Bonao Burger with purple cabbage slaw and fries"
  width={1200}
  height={800}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>
```

---

## Responsive Image Sizes Reference

### Size Presets by Use Case

| Use Case | sizes Attribute | Recommended Image |
|----------|-----------------|-------------------|
| Hero (full-width) | `100vw` | `_1920` |
| Hero (with sidebar) | `(max-width: 1024px) 100vw, 75vw` | `_1920` |
| 2-column grid | `(max-width: 640px) 100vw, 50vw` | `_1200` |
| 3-column grid | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` | `_800` |
| 4-column grid | `(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw` | `_800` |
| Thumbnail | `(max-width: 640px) 50vw, 200px` | `_400` |
| Card image | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px` | `_800` |

### Breakpoints

| Breakpoint | Tailwind | Pixels |
|------------|----------|--------|
| Mobile | default | 0-639px |
| Tablet | `sm:` | 640-767px |
| Tablet landscape | `md:` | 768-1023px |
| Desktop | `lg:` | 1024-1279px |
| Large desktop | `xl:` | 1280-1535px |
| Extra large | `2xl:` | 1536px+ |

---

## Photo Selection Guidelines

### By Page Type

**Home Page**
- Hero: Use `/optimized/restaurant/` ambiance shots (`_1920`)
- Feature cards: Use `/optimized/food/` dish photos (`_800`)
- Special highlight: Use signature dish (`_1200`)

**Menu Page**
- Category headers: Use `/optimized/restaurant/` or themed food (`_1200`)
- Menu items: Use external CDN or `/optimized/food/` (`_800`)

**About Page**
- Main photo: Restaurant interior (`_1920`)
- Gallery: Mix of food and restaurant (`_800`, `_1200`)

**Events/Parties Page**
- Hero: Private dining or event space (`_1920`)
- Gallery: Event photos from `/optimized/restaurant/` (`_800`)

### Image Quality Priorities

1. **Hero images**: Always use `priority` prop for LCP optimization
2. **Above-the-fold**: Use `priority` or `loading="eager"`
3. **Below-the-fold**: Default lazy loading (no prop needed)
4. **Thumbnails**: Always lazy load

---

## File Naming Convention

### For New Images

When adding new optimized images:

```
[DISH NAME]_[SIZE].webp

Examples:
GRILLED SALMON_400.webp
GRILLED SALMON_800.webp
GRILLED SALMON_1200.webp
GRILLED SALMON_1920.webp
```

### Handling Spaces in Filenames

Some existing files have spaces. Encode them in URLs:
```tsx
// File: "BONAO BURGER .2_800.webp"
// URL: "/optimized/food/BONAO%20BURGER%20.2_800.webp"

// The ResponsiveImage component handles this automatically
```

---

## Available Images Inventory

### Food Photography (`/optimized/food/`)
- Bonao Burger
- Guava Chipotle Ribs
- Grilled dishes
- Seafood selections
- Appetizers
- Cocktails (in `/Cocktail's/` subfolder)

### Restaurant Photography (`/optimized/restaurant/`)
- Dining room ambiance
- Bar area
- Private event space
- Architectural details
- Exterior shots

### Additional (`/optimized/katrine/`)
- Supplementary photography collection

---

## Integration Patterns

### With Motion Animations

```tsx
import { motion } from 'motion/react';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { imageZoom } from '@/lib/motion';

<motion.div variants={imageZoom} className="relative aspect-[4/3] overflow-hidden">
  <ResponsiveImage
    basePath="/optimized/food/DISH_NAME"
    alt="Dish description"
    variant="card"
  />
</motion.div>
```

### With Gradient Overlays

```tsx
<div className="relative aspect-[16/9] overflow-hidden">
  <ResponsiveImage
    basePath="/optimized/restaurant/_S8A7268"
    alt="Restaurant interior"
    variant="hero"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
  <div className="absolute bottom-0 p-6">
    <h2>Your Content</h2>
  </div>
</div>
```

---

## Performance Checklist

- [ ] Hero images use `priority` prop
- [ ] All images have descriptive `alt` text
- [ ] Correct size variant selected for use case
- [ ] `sizes` attribute matches layout breakpoints
- [ ] Images wrapped in aspect-ratio container to prevent CLS
- [ ] Below-fold images lazy load (default behavior)

---

## Troubleshooting

### Image Not Displaying
1. Check file path exists in `/optimized/` or `/public/images/`
2. Verify all 4 size variants exist
3. Check for special characters/spaces in filename

### Layout Shift (CLS)
1. Wrap image in aspect-ratio container: `aspect-[4/3]`
2. Use explicit width/height when possible
3. Avoid `fill` without a sized container

### Slow Loading (LCP)
1. Add `priority` to hero/above-fold images
2. Use smaller size variant if image is small on screen
3. Verify WebP format is being used
