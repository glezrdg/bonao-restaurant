# Frontend Guide - Quick Reference

## Image Paths at a Glance

### Hero Images (Use `_1920` with `priority`)

```
/optimized/restaurant/_S8A7268_1920.webp  ← PRIMARY HERO (wide dining room)
/optimized/restaurant/_S8A7283_1920.webp  ← Alt hero (pendant lights)
/optimized/restaurant/_S8A7315_1920.webp  ← Art sculpture (About hero)
```

---

### Signature Dishes (Use `_1200` for features, `_800` for cards)

```
BONAO BURGER .2                     ← Burger with slaw & fries
GUAVA CHIPOTLE RIBS                 ← Glazed ribs, top-down
CARIBBEAN TUNA TARTARE              ← Pink tartare, elegant plating
ACHIOTE MARINATED SALMON            ← Salmon with tomatoes
SHORT RIB LA BANDERA jpg            ← Dominican flag dish
DATE STEAMED CAKE                   ← Dessert with ice cream
```

---

### Page → Image Mapping

| Page | Hero | Supporting |
|------|------|------------|
| **Home** | `_S8A7268` | Burger, Ribs, Tartare, Cocktail |
| **Menu** | `_S8A7287` or food | All dish photos |
| **Drinks** | `_S8A7295` (bar) | `I LIVE WHERE YOU VACATION`, `SPICY GUAVA MARGARITA` |
| **About** | `_S8A7315` (art) | `_S8A7268`, `_S8A7317` |
| **Reserve** | `_S8A7264` | `_S8A7336` (background) |
| **Parties** | `_S8A7343` | `_S8A7346`, `_S8A7351` |
| **Contact** | `_S8A7310` (exterior) | `_S8A7312` |

---

### Size Guide

| Context | Size | Example |
|---------|------|---------|
| Full-width hero | `_1920` | Hero sections |
| Split column | `_1200` | 50% width layouts |
| Card/grid | `_800` | Menu items, galleries |
| Thumbnail | `_400` | Small previews |

---

### Next.js Quick Pattern

```tsx
// Hero (priority load)
<Image
  src="/optimized/restaurant/_S8A7268_1920.webp"
  alt="Bonao Restaurant dining room"
  width={1920}
  height={1080}
  priority
  sizes="100vw"
/>

// Card (lazy load)
<Image
  src="/optimized/food/BONAO BURGER .2_800.webp"
  alt="Bonao Burger"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

---

### Cocktails Path (Note the apostrophe)

```
/optimized/food/Cocktail's/SPICY GUAVA MARGARITA _[size].webp
/optimized/food/I LIVE WHERE YOU VACATION_[size].webp
```

---

### Dark Overlay (for text on images)

```css
background: linear-gradient(
  rgba(12, 12, 12, 0.4),
  rgba(12, 12, 12, 0.7)
);
```

---

### File Count Summary

- **Food photos:** 31 unique dishes × 4 sizes = 124 images
- **Cocktails:** 1 dish × 4 sizes = 4 images
- **Restaurant:** 44 shots × 4 sizes = 176 images
- **Total:** ~304 optimized images ready to use
