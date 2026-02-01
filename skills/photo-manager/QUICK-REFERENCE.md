# Photo Manager Quick Reference

## Quick Copy-Paste Patterns

### Hero Image (Full Width)
```tsx
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

<ResponsiveImage
  basePath="/optimized/restaurant/_S8A7268"
  alt="Bonao Restaurant dining room"
  variant="hero"
  priority
/>
```

### Card Image (Grid Item)
```tsx
<ResponsiveImage
  basePath="/optimized/food/BONAO BURGER .2"
  alt="Bonao Burger"
  variant="card"
/>
```

### Square Thumbnail
```tsx
<ResponsiveImage
  basePath="/optimized/food/GUAVA CHIPOTLE RIBS"
  alt="Guava Chipotle Ribs"
  variant="thumbnail"
/>
```

### Using Image Constants
```tsx
import { FOOD_IMAGES, RESTAURANT_IMAGES, KATRINE_IMAGES } from '@/lib/images';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

// Restaurant/ambiance shots
<ResponsiveImage
  basePath={RESTAURANT_IMAGES.bar7285}
  alt="Bar area"
  variant="hero"
  priority
/>

// Katrine collection - premium food presentation
<ResponsiveImage
  basePath={KATRINE_IMAGES.food0028}
  alt="Signature dish"
  variant="card"
/>

// Katrine drinks/cocktails
<ResponsiveImage
  basePath={KATRINE_IMAGES.drinks0102}
  alt="Craft cocktail"
  variant="card"
/>
```

---

## Available Variants

| Variant | Aspect | Use Case |
|---------|--------|----------|
| `hero` | 16/9 | Full-width backgrounds |
| `hero-tall` | 3/4 | Tall hero sections |
| `card` | 4/3 | Grid cards, features |
| `card-square` | 1/1 | Square cards |
| `thumbnail` | 1/1 | Small previews |
| `feature` | 4/3 | Feature highlights |
| `gallery` | 4/3 | Gallery grids |
| `banner` | 21/9 | Wide banners |

---

## Image Size Suffixes

| Suffix | Width | When to Use |
|--------|-------|-------------|
| `_400` | 400px | Mobile, thumbnails |
| `_800` | 800px | Tablet, cards |
| `_1200` | 1200px | Desktop cards |
| `_1920` | 1920px | Hero, full-width |

---

## Common Image Paths

### Food
```
/optimized/food/BONAO BURGER .2
/optimized/food/GUAVA CHIPOTLE RIBS
/optimized/food/ACHIOTE MARINATED SALMON
/optimized/food/CARIBBEAN TUNA TARTARE
/optimized/food/CRISPY COCONUT MAHI MAHI
/optimized/food/OCTOPUS A LA PLANCHA
/optimized/food/SHORT RIB LA BANDERA jpg
/optimized/food/PICAPOLLO WINGS
```

### Restaurant
```
/optimized/restaurant/_S8A7268  (dining)
/optimized/restaurant/_S8A7281  (bar)
/optimized/restaurant/_S8A7314  (ambiance)
/optimized/restaurant/_S8A7302  (interior)
```

### Cocktails
```
/optimized/food/Cocktail's/SPICY GUAVA MARGARITA
/optimized/food/I LIVE WHERE YOU VACATION
```

---

## With Motion Animation

```tsx
import { motion } from 'motion/react';
import { imageZoom } from '@/lib/motion';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

<motion.div variants={imageZoom}>
  <ResponsiveImage
    basePath="/optimized/food/DISH_NAME"
    alt="Dish"
    variant="card"
  />
</motion.div>
```

---

## With Gradient Overlay

```tsx
<div className="relative">
  <ResponsiveImage
    basePath="/optimized/restaurant/_S8A7268"
    alt="Restaurant"
    variant="hero"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
  <div className="absolute bottom-0 p-6 text-white">
    <h2>Your Title</h2>
  </div>
</div>
```

---

## Manual Next.js Image (When Needed)

```tsx
import Image from 'next/image';
import { getImagePath } from '@/lib/images';

<Image
  src={getImagePath('/optimized/food/BONAO BURGER .2', 1200)}
  alt="Bonao Burger"
  width={1200}
  height={800}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>
```

---

## Replace Existing Image Checklist

1. Find current usage: `grep -r "old-image" src/`
2. Choose new image from `/optimized/`
3. Update to use `ResponsiveImage` component
4. Add proper `alt` text
5. Set `priority` if above-fold
6. Test on mobile & desktop
