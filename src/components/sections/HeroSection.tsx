"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/Button";
import { restaurantInfo } from "@/data/menu";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

/**
 * Gets the default image src with size suffix
 */
function getImageSrc(basePath: string, size: number = 1920): string {
  const encoded = basePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${encoded}_${size}.webp`;
}

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  /** Array of background image base paths for carousel */
  backgroundImages?: string[];
  /** Single background image (legacy support) */
  backgroundImage?: string;
  /** Interval between slides in ms (default: 5000) */
  interval?: number;
}

export function HeroSection({
  headline = "Fire & Spirits",
  subheadline = "Modern Dominican cuisine crafted for the night",
  backgroundImages,
  backgroundImage,
  interval = 5000,
}: HeroSectionProps) {
  // Combine single image and array for backwards compatibility
  const images = backgroundImages || (backgroundImage ? [backgroundImage] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Auto-rotate carousel
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 bg-charcoal">
        <AnimatePresence mode="popLayout">
          {images.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={getImageSrc(images[currentIndex])}
                alt="Bonao Restaurant"
                fill
                priority={currentIndex === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />
      </div>

      {/* Carousel Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-copper w-6"
                  : "bg-paper/40 hover:bg-paper/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20"
      >
        {/* Label */}
        <motion.span
          variants={staggerItem}
          className="section-label text-copper mb-4 block"
        >
          Brooklyn, NY
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="font-safira text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-paper mb-4 sm:mb-6"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={staggerItem}
          className="text-base sm:text-lg md:text-xl text-greige max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0"
        >
          {subheadline}
        </motion.p>

        {/* Reservation Mini Form */}
        <motion.div
          variants={staggerItem}
          className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-charcoal/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-line-dark"
        >
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-greige">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs sm:text-sm">Today</span>
            </div>
            <div className="w-px h-4 sm:h-6 bg-line-dark" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-greige">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs sm:text-sm">7:00 PM</span>
            </div>
            <div className="w-px h-4 sm:h-6 bg-line-dark" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-greige">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xs sm:text-sm">2 Guests</span>
            </div>
          </div>
          <Button variant="primary" size="md" href="/reserve">
            Book a Table
          </Button>
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          <Button variant="secondary" size="md" href="/menu">
            View Menu
          </Button>
          <Button
            variant="ghost"
            size="md"
            href={restaurantInfo.orderOnlineUrl}
            external
          >
            Order Online &rarr;
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-greige"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
