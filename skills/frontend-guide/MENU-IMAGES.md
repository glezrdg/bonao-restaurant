# Menu Item → Image Mapping

Use this reference when connecting menu data to photo assets.

---

## Appetizers / Starters

| Menu Item | Image File Base | Has Photo |
|-----------|-----------------|-----------|
| Caribbean Tuna Tartare | `CARIBBEAN TUNA TARTARE` | Yes (2 versions) |
| Rabo Encendio Croquettes | `RABO ENCENDIO CROQUETTES` | Yes (3 versions) |
| Guac Aplatanao | `guac aplatanao` | Yes |
| Liniero Dumplings | `LINIERO DUMPLINGS` | Yes (2 versions) |
| Picapollo Wings | `Picapollo wings`, `PICAPOLLO WINGS` | Yes (2 versions) |

---

## Main Courses

| Menu Item | Image File Base | Has Photo |
|-----------|-----------------|-----------|
| Bonao Burger | `BONAO BURGER .2`, `BONAO BURGUER` | Yes (3 versions) |
| Achiote Marinated Salmon | `ACHIOTE MARINATED SALMON` | Yes (2 versions) |
| Crispy Coconut Mahi Mahi | `CRISPY COCONUT MAHI MAHI`, `Crispy Coconut Crusted Mahi Mahi` | Yes (2 versions) |
| Short Rib La Bandera | `SHORT RIB LA BANDERA jpg`, `SHORT RIB L_A BANDERA` | Yes (2 versions) |
| Braised Goat Paccheri | `BRAISED GOAT LINIERO PACCHERI`, `BRAISED GOAT LINIERON PACCHERI` | Yes (2 versions) |
| Boniato & Plantain Mofongo | `BONIATO & PLANTAIN MOFONGO` | Yes (3 versions) |
| Octopus A La Plancha | `OCTOPUS A LA PLANCHA` | Yes |

---

## Sides

| Menu Item | Image File Base | Has Photo |
|-----------|-----------------|-----------|
| Yuca Mash | `YUCA MASH` | Yes |
| Guava Chipotle Ribs | `GUAVA CHIPOTLE RIBS` | Yes (2 versions) |

---

## Desserts

| Menu Item | Image File Base | Has Photo |
|-----------|-----------------|-----------|
| Date Steamed Cake | `DATE STEAMED CAKE` | Yes (3 versions) |
| Majarete Creme Brulee | `MAJARETE CREME BRULEE` | Yes (2 versions) |
| Coconut Salpicon | `COCONUT SALPICON` | Yes |

---

## Cocktails / Drinks

| Drink Name | Image File Base | Location |
|------------|-----------------|----------|
| Spicy Guava Margarita | `SPICY GUAVA MARGARITA` | `food/Cocktail's/` |
| I Live Where You Vacation | `I LIVE WHERE YOU VACATION` | `food/` |

---

## Ambient Food Shots (No Specific Dish)

These are great for section backgrounds, galleries, or generic food imagery:

```
012A6525, 012A6530, 012A6605, 012A6628, 012A6631,
012A6678, 012A6761, 012A6764, 012A6777, 012A6797,
012A6805, 012A6823, 012A6832, 012A6845, 012A6861,
012A6874, 012A6889, 012A6898, 012A6905, 012A6909,
012A6928, 012A6936, 012A6943, 012A6951, 012A7004,
012A7015, 012A7065, 012A7101, 012A7114, 012A7121,
012A7125
```

---

## Implementation Helper

```tsx
// src/lib/menuImages.ts

type ImageSize = 400 | 800 | 1200 | 1920;

const MENU_IMAGES: Record<string, string> = {
  // Appetizers
  'caribbean-tuna-tartare': 'CARIBBEAN TUNA TARTARE ',
  'rabo-encendio-croquettes': 'RABO ENCENDIO CROQUETTES ',
  'guac-aplatanao': 'guac aplatanao ',
  'liniero-dumplings': 'LINIERO DUMPLINGS ',
  'picapollo-wings': 'Picapollo wings',

  // Mains
  'bonao-burger': 'BONAO BURGER .2',
  'achiote-salmon': 'ACHIOTE MARINATED SALMON ',
  'coconut-mahi': 'CRISPY COCONUT MAHI MAHI',
  'short-rib-bandera': 'SHORT RIB LA BANDERA jpg',
  'goat-paccheri': 'BRAISED GOAT LINIERO PACCHERI ',
  'mofongo': 'BONIATO & PLANTAIN MOFONGO',
  'octopus': 'OCTOPUS A LA PLANCHA ',

  // Sides
  'yuca-mash': 'YUCA MASH',
  'guava-ribs': 'GUAVA CHIPOTLE RIBS',

  // Desserts
  'date-cake': 'DATE STEAMED CAKE ',
  'creme-brulee': 'MAJARETE CREME BRULEE',
  'coconut-salpicon': 'COCONUT SALPICON ',

  // Cocktails
  'guava-margarita': "Cocktail's/SPICY GUAVA MARGARITA ",
  'vacation-cocktail': 'I LIVE WHERE YOU VACATION',
};

export function getMenuImage(slug: string, size: ImageSize = 800): string {
  const baseName = MENU_IMAGES[slug];
  if (!baseName) return '/optimized/food/012A6525_800.webp'; // fallback
  return `/optimized/food/${baseName}_${size}.webp`;
}

// Usage in component:
// <Image src={getMenuImage('bonao-burger', 800)} ... />
```

---

## Notes on File Naming

1. **Trailing spaces**: Some files have trailing spaces before `_size` (e.g., `CARIBBEAN TUNA TARTARE _800.webp`)
2. **Variants**: Multiple versions exist for some dishes (different angles, plating)
3. **Case sensitivity**: File system may be case-sensitive; use exact casing
4. **Special characters**: `&` in filenames (Boniato & Plantain) - encode if needed
