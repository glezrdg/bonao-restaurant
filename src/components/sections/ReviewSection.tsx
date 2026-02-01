"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, fadeInUp, viewportOnce } from "@/lib/motion";

interface Review {
  text: string;
  author: string;
  rating?: number;
}

interface ReviewSectionProps {
  reviews: Review[];
  badges?: string[];
}

export function ReviewSection({ reviews, badges }: ReviewSectionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="text-center"
    >
      {/* Star Rating */}
      <motion.div variants={fadeInUp} className="flex items-center justify-center gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((star, i) => (
          <motion.svg
            key={star}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            viewport={{ once: true }}
            className="w-6 h-6 text-bronze"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
        <motion.span
          variants={staggerItem}
          className="ml-2 text-walnut"
        >
          5.0
        </motion.span>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-paper rounded-lg p-6 shadow-sm border border-line-light"
          >
            <p className="font-garamond text-xl text-espresso mb-4">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-sm text-walnut">&mdash; {review.author}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Badges */}
      {badges && badges.length > 0 && (
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "flex items-center gap-2 px-4 py-2",
                "bg-linen/50 rounded-full",
                "text-sm text-walnut"
              )}
            >
              <span className="text-sage">&#10003;</span>
              {badge}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
