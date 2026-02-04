"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface EditorialItem {
  image: string;
  title: string;
  href?: string;
}

interface EditorialGridProps {
  headline: string;
  subheadline?: string;
  items: EditorialItem[];
}

export function EditorialGrid({ headline, subheadline, items }: EditorialGridProps) {
  // Ensure we have 5 items for the layout
  const displayItems = items.slice(0, 5);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative"
    >
      {/* Headline */}
      <motion.div variants={fadeInUp} className="text-center mb-16 md:mb-20">
        <h2 className="font-safira text-4xl md:text-5xl lg:text-6xl text-espresso leading-tight">
          {headline}
          {subheadline && (
            <>
              <br />
              <span className="text-espresso/80">{subheadline}</span>
            </>
          )}
        </h2>
      </motion.div>

      {/* Editorial Grid - Asymmetric Layout */}
      <div className="relative grid grid-cols-6 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-end">
        {/* Item 1 - Live Lounge (tall, left) */}
        {displayItems[0] && (
          <motion.div
            variants={staggerItem}
            className="col-span-3 md:col-span-2 self-end"
          >
            <EditorialCard
              image={displayItems[0].image}
              title={displayItems[0].title}
              href={displayItems[0].href}
              aspectRatio="aspect-[3/4]"
            />
          </motion.div>
        )}

        {/* Item 2 - Fine Dining (medium, offset up) */}
        {displayItems[1] && (
          <motion.div
            variants={staggerItem}
            className="col-span-3 md:col-span-2 self-start md:-mt-12"
          >
            <EditorialCard
              image={displayItems[1].image}
              title={displayItems[1].title}
              href={displayItems[1].href}
              aspectRatio="aspect-[4/5]"
            />
          </motion.div>
        )}

        {/* Item 3 - Signature Cocktails (large, center, prominent) */}
        {displayItems[2] && (
          <motion.div
            variants={staggerItem}
            className="col-span-6 md:col-span-3 self-center md:-mt-8"
          >
            <EditorialCard
              image={displayItems[2].image}
              title={displayItems[2].title}
              href={displayItems[2].href}
              aspectRatio="aspect-[3/4]"
              featured
            />
          </motion.div>
        )}

        {/* Item 4 - Private Dining (medium) */}
        {displayItems[3] && (
          <motion.div
            variants={staggerItem}
            className="col-span-3 md:col-span-2 self-start"
          >
            <EditorialCard
              image={displayItems[3].image}
              title={displayItems[3].title}
              href={displayItems[3].href}
              aspectRatio="aspect-[4/5]"
            />
          </motion.div>
        )}

        {/* Item 5 - Wine & Spirits (tall, right) */}
        {displayItems[4] && (
          <motion.div
            variants={staggerItem}
            className="col-span-3 md:col-span-3 self-end"
          >
            <EditorialCard
              image={displayItems[4].image}
              title={displayItems[4].title}
              href={displayItems[4].href}
              aspectRatio="aspect-[3/4]"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

interface EditorialCardProps {
  image: string;
  title: string;
  href?: string;
  aspectRatio?: string;
  featured?: boolean;
}

function EditorialCard({
  image,
  title,
  href,
  aspectRatio = "aspect-[4/5]",
  featured = false,
}: EditorialCardProps) {
  const content = (
    <div className="group">
      {/* Image */}
      <div className={`relative ${aspectRatio} overflow-hidden rounded-sm`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 25vw" : "(max-width: 768px) 50vw, 16vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Caption */}
      <p className={`mt-3 text-center font-garamond text-walnut ${featured ? "text-lg" : "text-sm md:text-base"}`}>
        {title}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
