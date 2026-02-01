'use client';

import Image from 'next/image';

/**
 * Image size variants available in the optimized folder
 */
const IMAGE_SIZES = {
  small: 400,
  medium: 800,
  large: 1200,
  full: 1920,
} as const;

/**
 * Preset configurations for common image use cases
 */
const VARIANT_CONFIG = {
  hero: {
    sizes: '100vw',
    defaultSize: 'full' as const,
    aspectRatio: '16/9',
    width: 1920,
    height: 1080,
  },
  'hero-tall': {
    sizes: '100vw',
    defaultSize: 'full' as const,
    aspectRatio: '3/4',
    width: 1920,
    height: 2560,
  },
  card: {
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    defaultSize: 'medium' as const,
    aspectRatio: '4/3',
    width: 800,
    height: 600,
  },
  'card-square': {
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    defaultSize: 'medium' as const,
    aspectRatio: '1/1',
    width: 800,
    height: 800,
  },
  thumbnail: {
    sizes: '(max-width: 640px) 50vw, 200px',
    defaultSize: 'small' as const,
    aspectRatio: '1/1',
    width: 400,
    height: 400,
  },
  feature: {
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
    defaultSize: 'medium' as const,
    aspectRatio: '4/3',
    width: 800,
    height: 600,
  },
  gallery: {
    sizes: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw',
    defaultSize: 'medium' as const,
    aspectRatio: '4/3',
    width: 800,
    height: 600,
  },
  banner: {
    sizes: '100vw',
    defaultSize: 'large' as const,
    aspectRatio: '21/9',
    width: 1200,
    height: 514,
  },
} as const;

type ImageVariant = keyof typeof VARIANT_CONFIG;
type ImageSizeKey = keyof typeof IMAGE_SIZES;

interface ResponsiveImageProps {
  /** Base path without size suffix or extension (e.g., "/optimized/food/BONAO BURGER .2") */
  basePath: string;
  /** Alt text for accessibility */
  alt: string;
  /** Preset variant for common use cases */
  variant?: ImageVariant;
  /** Custom sizes attribute (overrides variant default) */
  sizes?: string;
  /** Custom aspect ratio (overrides variant default) */
  aspectRatio?: string;
  /** Load with priority (for above-fold images) */
  priority?: boolean;
  /** Additional CSS classes for the image */
  className?: string;
  /** Additional CSS classes for the container */
  containerClassName?: string;
  /** File extension (default: webp) */
  extension?: string;
  /** Use fill mode instead of explicit dimensions */
  fill?: boolean;
  /** Callback when image loads */
  onLoad?: () => void;
  /** Custom width (overrides variant) */
  width?: number;
  /** Custom height (overrides variant) */
  height?: number;
}

/**
 * Encodes a path for use in URLs, handling spaces and special characters
 */
function encodePath(path: string): string {
  // Split path into segments, encode each segment, rejoin
  return path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

/**
 * Generates the full image path with size suffix
 */
function getImagePath(
  basePath: string,
  size: ImageSizeKey,
  extension: string
): string {
  const sizeValue = IMAGE_SIZES[size];
  const encodedBase = encodePath(basePath);
  return `${encodedBase}_${sizeValue}.${extension}`;
}

/**
 * Generates srcSet for responsive images
 */
function generateSrcSet(basePath: string, extension: string): string {
  return Object.entries(IMAGE_SIZES)
    .map(([key, width]) => {
      const path = getImagePath(basePath, key as ImageSizeKey, extension);
      return `${path} ${width}w`;
    })
    .join(', ');
}

/**
 * ResponsiveImage component for optimized, device-resolution-aware images
 *
 * @example
 * // Hero image
 * <ResponsiveImage
 *   basePath="/optimized/restaurant/_S8A7268"
 *   alt="Restaurant interior"
 *   variant="hero"
 *   priority
 * />
 *
 * @example
 * // Card image
 * <ResponsiveImage
 *   basePath="/optimized/food/BONAO BURGER .2"
 *   alt="Bonao Burger"
 *   variant="card"
 * />
 *
 * @example
 * // Custom configuration
 * <ResponsiveImage
 *   basePath="/optimized/food/DISH"
 *   alt="Dish photo"
 *   sizes="(max-width: 768px) 100vw, 600px"
 *   aspectRatio="3/2"
 *   width={600}
 *   height={400}
 * />
 */
export function ResponsiveImage({
  basePath,
  alt,
  variant = 'card',
  sizes: customSizes,
  aspectRatio: customAspectRatio,
  priority = false,
  className = '',
  containerClassName = '',
  extension = 'webp',
  fill = true,
  onLoad,
  width: customWidth,
  height: customHeight,
}: ResponsiveImageProps) {
  const config = VARIANT_CONFIG[variant];
  const sizes = customSizes || config.sizes;
  const aspectRatio = customAspectRatio || config.aspectRatio;
  const width = customWidth || config.width;
  const height = customHeight || config.height;

  // Get the default src (largest reasonable size for the variant)
  const defaultSrc = getImagePath(basePath, config.defaultSize, extension);

  // Generate srcSet for all available sizes
  const srcSet = generateSrcSet(basePath, extension);

  if (fill) {
    return (
      <div
        className={`relative overflow-hidden ${containerClassName}`}
        style={{ aspectRatio }}
      >
        <Image
          src={defaultSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${className}`}
          onLoad={onLoad}
        />
      </div>
    );
  }

  return (
    <Image
      src={defaultSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onLoad={onLoad}
    />
  );
}

/**
 * Hook to get responsive image props for manual Image usage
 */
export function useResponsiveImageProps(
  basePath: string,
  variant: ImageVariant = 'card',
  extension: string = 'webp'
) {
  const config = VARIANT_CONFIG[variant];
  const defaultSrc = getImagePath(basePath, config.defaultSize, extension);
  const srcSet = generateSrcSet(basePath, extension);

  return {
    src: defaultSrc,
    srcSet,
    sizes: config.sizes,
    width: config.width,
    height: config.height,
    aspectRatio: config.aspectRatio,
  };
}

/**
 * Utility to get image path with specific size
 */
export function getOptimizedImagePath(
  basePath: string,
  size: ImageSizeKey = 'medium',
  extension: string = 'webp'
): string {
  return getImagePath(basePath, size, extension);
}

export { IMAGE_SIZES, VARIANT_CONFIG };
export type { ImageVariant, ImageSizeKey, ResponsiveImageProps };
