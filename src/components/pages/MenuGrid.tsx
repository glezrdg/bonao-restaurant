"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { MenuCategory } from "@/data/menu";
import { MenuItemCard } from "./MenuItemCard";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface MenuGridProps {
  categories: MenuCategory[];
  showCategoryNav?: boolean;
  itemLinkUrl: string;
}

export function MenuGrid({ categories, showCategoryNav = true, itemLinkUrl }: MenuGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? categories.filter((c) => c.name === activeCategory)
    : categories;

  return (
    <div>
      {/* Category Navigation */}
      {showCategoryNav && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-premium",
              !activeCategory
                ? "bg-sage text-paper"
                : "bg-paper text-walnut border border-line-light hover:border-sage"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-premium",
                activeCategory === category.name
                  ? "bg-sage text-paper"
                  : "bg-paper text-walnut border border-line-light hover:border-sage"
              )}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      )}

      {/* Menu Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <span className="section-label text-sage mb-2 block">
                  {category.nameEs?.toUpperCase() || category.name.toUpperCase()}
                </span>
                <h2 className="font-garamond text-3xl md:text-4xl text-espresso">
                  {category.name}
                </h2>
              </div>

              {/* Items Grid */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {category.items.map((item, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <MenuItemCard item={item} orderUrl={itemLinkUrl} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
