"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, cardHover, imageZoom, viewportOnce } from "@/lib/motion";

interface FeatureItem {
  image: string;
  title: string;
  description?: string;
  href?: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {items.map((item, index) => (
        <FeatureCard key={index} {...item} index={index} />
      ))}
    </motion.div>
  );
}

function FeatureCard({ image, title, description, href, index }: FeatureItem & { index: number }) {
  const content = (
    <motion.div
      variants={staggerItem}
      initial="rest"
      whileHover="hover"
      className={cn(
        "group relative overflow-hidden rounded-lg",
        "bg-paper border border-line-light",
        href && "cursor-pointer"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div variants={imageZoom} className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Subtle overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-charcoal/20"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-garamond text-xl text-espresso mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-walnut">{description}</p>
        )}
        {href && (
          <motion.span
            className="inline-flex items-center gap-1 mt-2 text-sm text-sage"
          >
            Explore
            <motion.svg
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.span>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
