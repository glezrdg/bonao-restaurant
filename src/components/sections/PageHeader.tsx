'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { SectionLabel, SectionTitle } from '@/components/layout/Section';

interface PageHeaderProps {
  /** Section label (small caps above title) */
  label: string;
  /** Page title */
  title: string;
  /** Optional description text */
  description?: string;
  /** Background image base path (without size suffix) */
  backgroundImage?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Generates srcset for responsive images
 */
function getSrcSet(basePath: string): string {
  const sizes = [400, 800, 1200, 1920];
  return sizes
    .map((size) => {
      const encoded = basePath
        .split('/')
        .map((segment) => encodeURIComponent(segment))
        .join('/');
      return `${encoded}_${size}.webp ${size}w`;
    })
    .join(', ');
}

/**
 * Gets the default image src
 */
function getDefaultSrc(basePath: string, size: number = 1920): string {
  const encoded = basePath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${encoded}_${size}.webp`;
}

/**
 * PageHeader component with optional responsive background image
 * Used for page hero sections with background photos
 */
export function PageHeader({
  label,
  title,
  description,
  backgroundImage,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative w-full pt-32 pb-16 overflow-hidden',
        'bg-charcoal text-paper',
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.35 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={getDefaultSrc(backgroundImage)}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
        </>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        <SectionLabel variant="dark">{label}</SectionLabel>
        <SectionTitle variant="dark" className="mt-2">
          {title}
        </SectionTitle>
        {description && (
          <p className="text-greige max-w-xl mx-auto mt-4">{description}</p>
        )}
      </motion.div>
    </section>
  );
}
