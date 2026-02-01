"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { MenuItem } from "@/data/menu";
import { cardHover, imageZoom } from "@/lib/motion";

interface MenuItemCardProps {
  item: MenuItem;
  orderUrl: string;
}

export function MenuItemCard({ item, orderUrl }: MenuItemCardProps) {
  return (
    <motion.a
      href={orderUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className="group block bg-paper rounded-lg overflow-hidden border border-line-light shadow-sm"
    >
      {/* Image */}
      {item.image && (
        <div className="relative aspect-square overflow-hidden">
          <motion.div variants={imageZoom} className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Hover overlay with Order button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-charcoal/60 flex items-center justify-center"
          >
            <span className="px-4 py-2 bg-sage text-paper rounded-lg text-sm font-medium">
              Order Now
            </span>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-medium text-espresso group-hover:text-sage transition-premium line-clamp-2">
            {item.name}
          </h3>
          {item.price && (
            <span className="text-copper font-medium shrink-0">
              {formatPrice(item.price)}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-walnut line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </motion.a>
  );
}
