/**
 * Image Configuration & Inventory
 *
 * Central registry of all optimized images available in the codebase.
 * Use with ResponsiveImage component for automatic responsive handling.
 */

// ============================================================================
// IMAGE PATHS - Base paths without size suffix or extension
// ============================================================================

/**
 * Food photography base paths
 * Located in: /optimized/food/
 */
export const FOOD_IMAGES = {
  // Signature Dishes
  bonaoBurger: '/optimized/food/BONAO BURGER .2',
  bonaoBurgerAlt: '/optimized/food/BONAO BURGUER ',
  guavaChipotleRibs: '/optimized/food/GUAVA CHIPOTLE RIBS',
  achioteSalmon: '/optimized/food/ACHIOTE MARINATED SALMON ',
  achioteSalmonAlt: '/optimized/food/ACHIOTE MARINATED SALMON (1)',

  // Seafood
  caribbeanTunaTartare: '/optimized/food/CARIBBEAN TUNA TARTARE ',
  caribbeanTunaTartareAlt: '/optimized/food/CARIBBEAN TUNA TARTARE (1)',
  coconutMahiMahi: '/optimized/food/CRISPY COCONUT MAHI MAHI',
  coconutMahiMahiAlt: '/optimized/food/Crispy Coconut Crusted Mahi Mahi ',
  octopusPlancha: '/optimized/food/OCTOPUS A LA PLANCHA ',

  // Meat & Poultry
  shortRibBandera: '/optimized/food/SHORT RIB LA BANDERA jpg',
  shortRibBanderaAlt: '/optimized/food/SHORT RIB L_A BANDERA ',
  braisedGoatPaccheri: '/optimized/food/BRAISED GOAT LINIERO PACCHERI ',
  picapolloWings: '/optimized/food/PICAPOLLO WINGS ',
  picapolloWingsAlt: '/optimized/food/Picapollo wings',

  // Appetizers
  raboEncendioCroquettes: '/optimized/food/RABO ENCENDIO CROQUETTES ',
  raboEncendioCroquettesAlt: '/optimized/food/RABO ENCENDIO CROQUETTES (1)',
  linieroDumplings: '/optimized/food/LINIERO DUMPLINGS ',
  linieroDumplingsAlt: '/optimized/food/LINIERO DUMPLINGS (1)',
  guacAplatanao: '/optimized/food/guac aplatanao ',

  // Sides
  boniatoMofongo: '/optimized/food/BONIATO & PLANTAIN MOFONGO ',
  boniatoMofongoAlt: '/optimized/food/BONIATO & PLANTAIN MOFONGO (1)',
  yucaMash: '/optimized/food/YUCA MASH',
  coconutSalpicon: '/optimized/food/COCONUT SALPICON ',

  // Desserts
  dateSteamedCake: '/optimized/food/DATE STEAMED CAKE ',
  dateSteamedCakeAlt: '/optimized/food/DATE STEAMED CAKE (1)',
  majareteCremeBrulee: '/optimized/food/MAJARETE CREME BRULEE ',

  // Numbered photos (professional shoot)
  photo6525: '/optimized/food/012A6525',
  photo6530: '/optimized/food/012A6530',
  photo6605: '/optimized/food/012A6605',
  photo6628: '/optimized/food/012A6628',
  photo6631: '/optimized/food/012A6631',
  photo6678: '/optimized/food/012A6678',
  photo6761: '/optimized/food/012A6761',
  photo6764: '/optimized/food/012A6764',
  photo6777: '/optimized/food/012A6777',
  photo6797: '/optimized/food/012A6797',
  photo6805: '/optimized/food/012A6805',
  photo6823: '/optimized/food/012A6823',
  photo6832: '/optimized/food/012A6832',
  photo6845: '/optimized/food/012A6845',
  photo6861: '/optimized/food/012A6861',
  photo6874: '/optimized/food/012A6874',
  photo6889: '/optimized/food/012A6889',
  photo6898: '/optimized/food/012A6898',
  photo6905: '/optimized/food/012A6905',
  photo6909: '/optimized/food/012A6909',
  photo6928: '/optimized/food/012A6928',
  photo6936: '/optimized/food/012A6936',
  photo6943: '/optimized/food/012A6943',
  photo6951: '/optimized/food/012A6951',
  photo7004: '/optimized/food/012A7004',
  photo7015: '/optimized/food/012A7015',
  photo7065: '/optimized/food/012A7065',
  photo7101: '/optimized/food/012A7101',
  photo7114: '/optimized/food/012A7114',
  photo7121: '/optimized/food/012A7121',
  photo7125: '/optimized/food/012A7125',
} as const;

/**
 * Cocktail photography base paths
 * Located in: /optimized/food/Cocktail's/
 */
export const COCKTAIL_IMAGES = {
  spicyGuavaMargarita: "/optimized/food/Cocktail's/SPICY GUAVA MARGARITA ",
  iLiveWhereYouVacation: '/optimized/food/I LIVE WHERE YOU VACATION ',
  iLiveWhereYouVacationAlt: '/optimized/food/I LIVE WHERE YOU VACATION',
} as const;

/**
 * Restaurant/ambiance photography base paths
 * Located in: /optimized/restaurant/
 */
export const RESTAURANT_IMAGES = {
  // Main dining area
  dining7264: '/optimized/restaurant/_S8A7264',
  dining7268: '/optimized/restaurant/_S8A7268',
  dining7270: '/optimized/restaurant/_S8A7270',
  dining7271: '/optimized/restaurant/_S8A7271',
  dining7273: '/optimized/restaurant/_S8A7273',
  dining7275: '/optimized/restaurant/_S8A7275',

  // Bar area
  bar7279: '/optimized/restaurant/_S8A7279',
  bar7281: '/optimized/restaurant/_S8A7281',
  bar7283: '/optimized/restaurant/_S8A7283',
  bar7285: '/optimized/restaurant/_S8A7285',
  bar7287: '/optimized/restaurant/_S8A7287',
  bar7290: '/optimized/restaurant/_S8A7290',

  // Interior details
  interior7295: '/optimized/restaurant/_S8A7295',
  interior7298: '/optimized/restaurant/_S8A7298',
  interior7302: '/optimized/restaurant/_S8A7302',
  interior7305: '/optimized/restaurant/_S8A7305',
  interior7308: '/optimized/restaurant/_S8A7308',

  // Ambiance shots
  ambiance7310: '/optimized/restaurant/_S8A7310',
  ambiance7312: '/optimized/restaurant/_S8A7312',
  ambiance7314: '/optimized/restaurant/_S8A7314',
  ambiance7315: '/optimized/restaurant/_S8A7315',
  ambiance7317: '/optimized/restaurant/_S8A7317',
  ambiance7319: '/optimized/restaurant/_S8A7319',
  ambiance7320: '/optimized/restaurant/_S8A7320',

  // Additional shots
  detail7322: '/optimized/restaurant/_S8A7322',
  detail7324: '/optimized/restaurant/_S8A7324',
  detail7326: '/optimized/restaurant/_S8A7326',
  detail7328: '/optimized/restaurant/_S8A7328',
  detail7329: '/optimized/restaurant/_S8A7329',
  detail7332: '/optimized/restaurant/_S8A7332',
  detail7334: '/optimized/restaurant/_S8A7334',
  detail7336: '/optimized/restaurant/_S8A7336',

  // Extended collection
  exterior7339: '/optimized/restaurant/_S8A7339',
  exterior7341: '/optimized/restaurant/_S8A7341',
  exterior7343: '/optimized/restaurant/_S8A7343',
  bar7346: '/optimized/restaurant/_S8A7346',
  bar7348: '/optimized/restaurant/_S8A7348',
  bar7351: '/optimized/restaurant/_S8A7351',
  bar7355: '/optimized/restaurant/_S8A7355',
  detail7361: '/optimized/restaurant/_S8A7361',
  detail7367: '/optimized/restaurant/_S8A7367',
  detail7369: '/optimized/restaurant/_S8A7369',
  detail7372: '/optimized/restaurant/_S8A7372',
  detail7384: '/optimized/restaurant/_S8A7384',
  detail7390: '/optimized/restaurant/_S8A7390',
  detail7394: '/optimized/restaurant/_S8A7394',
} as const;

/**
 * Katrine collection - High-end food and drinks photography
 * Located in: /optimized/katrine/
 * Features beautifully presented dishes and real cocktails
 */
export const KATRINE_IMAGES = {
  // Food presentation shots
  food0005: '/optimized/katrine/3P4A0005',
  food0008: '/optimized/katrine/3P4A0008',
  food0008v2: '/optimized/katrine/3P4A0008-2',
  food0010: '/optimized/katrine/3P4A0010',
  food0011: '/optimized/katrine/3P4A0011',
  food0014: '/optimized/katrine/3P4A0014',
  food0015: '/optimized/katrine/3P4A0015',
  food0017: '/optimized/katrine/3P4A0017',
  food0018: '/optimized/katrine/3P4A0018',
  food0023: '/optimized/katrine/3P4A0023',
  food0025: '/optimized/katrine/3P4A0025',
  food0028: '/optimized/katrine/3P4A0028',
  food0029: '/optimized/katrine/3P4A0029',
  food0030: '/optimized/katrine/3P4A0030',
  food0032: '/optimized/katrine/3P4A0032',
  food0033: '/optimized/katrine/3P4A0033',
  food0034: '/optimized/katrine/3P4A0034',
  food0036: '/optimized/katrine/3P4A0036',
  food0041: '/optimized/katrine/3P4A0041',
  food0044: '/optimized/katrine/3P4A0044',
  food0047: '/optimized/katrine/3P4A0047',
  food0049: '/optimized/katrine/3P4A0049',
  food0051: '/optimized/katrine/3P4A0051',
  food0053: '/optimized/katrine/3P4A0053',
  food0054: '/optimized/katrine/3P4A0054',
  food0055: '/optimized/katrine/3P4A0055',
  food0056: '/optimized/katrine/3P4A0056',
  food0057: '/optimized/katrine/3P4A0057',
  food0058: '/optimized/katrine/3P4A0058',
  food0060: '/optimized/katrine/3P4A0060',
  food0061: '/optimized/katrine/3P4A0061',
  food0063: '/optimized/katrine/3P4A0063',
  food0064: '/optimized/katrine/3P4A0064',
  food0065: '/optimized/katrine/3P4A0065',
  food0071: '/optimized/katrine/3P4A0071',
  food0072: '/optimized/katrine/3P4A0072',
  food0073: '/optimized/katrine/3P4A0073',
  food0074: '/optimized/katrine/3P4A0074',
  food0075: '/optimized/katrine/3P4A0075',
  food0078: '/optimized/katrine/3P4A0078',
  food0079: '/optimized/katrine/3P4A0079',
  food0080: '/optimized/katrine/3P4A0080',
  food0082: '/optimized/katrine/3P4A0082',
  food0083: '/optimized/katrine/3P4A0083',
  food0085: '/optimized/katrine/3P4A0085',
  food0087: '/optimized/katrine/3P4A0087',
  food0089: '/optimized/katrine/3P4A0089',

  // Drinks / Cocktails
  drinks0096: '/optimized/katrine/3P4A0096',
  drinks0099: '/optimized/katrine/3P4A0099',
  drinks0100: '/optimized/katrine/3P4A0100',
  drinks0102: '/optimized/katrine/3P4A0102',
  drinks0103: '/optimized/katrine/3P4A0103',
  drinks0104: '/optimized/katrine/3P4A0104',
  drinks0105: '/optimized/katrine/3P4A0105',
  drinks0106: '/optimized/katrine/3P4A0106',
  drinks0107: '/optimized/katrine/3P4A0107',
  drinks0109: '/optimized/katrine/3P4A0109',
  drinks0110: '/optimized/katrine/3P4A0110',
  drinks0113: '/optimized/katrine/3P4A0113',
  drinks0117: '/optimized/katrine/3P4A0117',
  drinks0120: '/optimized/katrine/3P4A0120',
  drinks0127: '/optimized/katrine/3P4A0127',
  drinks0133: '/optimized/katrine/3P4A0133',
  drinks0137: '/optimized/katrine/3P4A0137',
  drinks0141: '/optimized/katrine/3P4A0141',
  drinks0144: '/optimized/katrine/3P4A0144',
  drinks0145: '/optimized/katrine/3P4A0145',
  drinks0148: '/optimized/katrine/3P4A0148',
  drinks0149: '/optimized/katrine/3P4A0149',
  drinks0150: '/optimized/katrine/3P4A0150',
  drinks0151: '/optimized/katrine/3P4A0151',
  drinks0152: '/optimized/katrine/3P4A0152',
  drinks0153: '/optimized/katrine/3P4A0153',
  drinks0155: '/optimized/katrine/3P4A0155',
  drinks0158: '/optimized/katrine/3P4A0158',
  drinks0161: '/optimized/katrine/3P4A0161',
  drinks0163: '/optimized/katrine/3P4A0163',
  drinks0164: '/optimized/katrine/3P4A0164',
  drinks0166: '/optimized/katrine/3P4A0166',
  drinks0168: '/optimized/katrine/3P4A0168',
  drinks0170: '/optimized/katrine/3P4A0170',
  drinks0171: '/optimized/katrine/3P4A0171',
  drinks0174: '/optimized/katrine/3P4A0174',
  drinks0175: '/optimized/katrine/3P4A0175',
  drinks0176: '/optimized/katrine/3P4A0176',
  drinks0177: '/optimized/katrine/3P4A0177',
  drinks0179: '/optimized/katrine/3P4A0179',
  drinks0181: '/optimized/katrine/3P4A0181',
  drinks0184: '/optimized/katrine/3P4A0184',
  drinks0187: '/optimized/katrine/3P4A0187',
  drinks0191: '/optimized/katrine/3P4A0191',
  drinks0192: '/optimized/katrine/3P4A0192',
  drinks0193: '/optimized/katrine/3P4A0193',
  drinks0194: '/optimized/katrine/3P4A0194',
  drinks0196: '/optimized/katrine/3P4A0196',
  drinks0199: '/optimized/katrine/3P4A0199',
  drinks0201: '/optimized/katrine/3P4A0201',
  drinks0202: '/optimized/katrine/3P4A0202',
  drinks0203: '/optimized/katrine/3P4A0203',
  drinks0204: '/optimized/katrine/3P4A0204',
} as const;

// ============================================================================
// CURATED COLLECTIONS - Pre-selected images for specific purposes
// ============================================================================

/**
 * Recommended hero images for different pages
 */
export const HERO_IMAGES = {
  home: RESTAURANT_IMAGES.bar7285,
  menu: RESTAURANT_IMAGES.interior7295,
  about: RESTAURANT_IMAGES.ambiance7314,
  events: RESTAURANT_IMAGES.bar7281,
  drinks: RESTAURANT_IMAGES.bar7351,
  reserve: RESTAURANT_IMAGES.interior7302,
} as const;

/**
 * Page header background images
 * These are used for the header sections on interior pages
 */
export const PAGE_HEADER_IMAGES = {
  menu: RESTAURANT_IMAGES.interior7295,
  drinks: RESTAURANT_IMAGES.bar7351,
  about: RESTAURANT_IMAGES.bar7285,
  events: RESTAURANT_IMAGES.bar7281,
  parties: RESTAURANT_IMAGES.ambiance7314,
  reserve: RESTAURANT_IMAGES.interior7302,
  order: RESTAURANT_IMAGES.bar7290,
} as const;

/**
 * Feature card images for home page grid
 */
export const FEATURE_IMAGES = {
  signature1: FOOD_IMAGES.bonaoBurger,
  signature2: FOOD_IMAGES.guavaChipotleRibs,
  signature3: FOOD_IMAGES.achioteSalmon,
  signature4: FOOD_IMAGES.caribbeanTunaTartare,
} as const;

/**
 * Images for gallery/carousel sections
 */
export const GALLERY_IMAGES = {
  food: [
    FOOD_IMAGES.bonaoBurger,
    FOOD_IMAGES.guavaChipotleRibs,
    FOOD_IMAGES.achioteSalmon,
    FOOD_IMAGES.caribbeanTunaTartare,
    FOOD_IMAGES.coconutMahiMahi,
    FOOD_IMAGES.octopusPlancha,
    FOOD_IMAGES.shortRibBandera,
    FOOD_IMAGES.picapolloWings,
  ],
  restaurant: [
    RESTAURANT_IMAGES.dining7268,
    RESTAURANT_IMAGES.bar7281,
    RESTAURANT_IMAGES.ambiance7314,
    RESTAURANT_IMAGES.interior7302,
    RESTAURANT_IMAGES.detail7324,
    RESTAURANT_IMAGES.detail7328,
  ],
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get the full path for an image with specific size
 */
export function getImagePath(
  basePath: string,
  size: 400 | 800 | 1200 | 1920 = 800,
  extension: string = 'webp'
): string {
  // Encode spaces and special characters in path
  const encodedPath = basePath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${encodedPath}_${size}.${extension}`;
}

/**
 * Get srcset string for an image
 */
export function getImageSrcSet(
  basePath: string,
  extension: string = 'webp'
): string {
  const sizes = [400, 800, 1200, 1920] as const;
  return sizes
    .map((size) => `${getImagePath(basePath, size, extension)} ${size}w`)
    .join(', ');
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type FoodImageKey = keyof typeof FOOD_IMAGES;
export type CocktailImageKey = keyof typeof COCKTAIL_IMAGES;
export type RestaurantImageKey = keyof typeof RESTAURANT_IMAGES;
export type KatrineImageKey = keyof typeof KATRINE_IMAGES;
export type HeroImageKey = keyof typeof HERO_IMAGES;
export type PageHeaderImageKey = keyof typeof PAGE_HEADER_IMAGES;
