"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { MenuItem } from "@/data/menu";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface MenuColumn {
  title: string;
  items: MenuItem[];
}

interface MenuPreviewProps {
  leftColumn: MenuColumn;
  centerImage: string;
  rightColumn: MenuColumn;
}

export function MenuPreview({
  leftColumn,
  centerImage,
  rightColumn,
}: MenuPreviewProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start"
    >
      {/* Left Column */}
      <MenuColumn {...leftColumn} />

      {/* Center Image */}
      <motion.div variants={fadeInUp} className="hidden lg:block">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-line-dark">
          <Image
            src={centerImage}
            alt="Featured dish"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        </div>
      </motion.div>

      {/* Right Column */}
      <MenuColumn {...rightColumn} />
    </motion.div>
  );
}

function MenuColumn({ title, items }: MenuColumn) {
  return (
    <motion.div variants={staggerItem}>
      <h3 className="font-garamond text-2xl text-paper mb-6">{title}</h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-6"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="font-medium text-paper group-hover:text-copper transition-premium">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-sm text-greige mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
              {item.price && (
                <span className="text-copper font-medium shrink-0">
                  {formatPrice(item.price)}
                </span>
              )}
            </div>
            {index < items.length - 1 && (
              <div className="mt-4 border-b border-line-dark" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
