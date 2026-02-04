"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, fadeInUp, viewportOnce } from "@/lib/motion";

interface Review {
  text: string;
  author: string;
  timeAgo: string;
  isNew?: boolean;
}

interface ReviewSectionProps {
  reviews: Review[];
  badges?: string[];
  googleMapsUrl?: string;
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#FBBC04]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function getAvatarColor(name: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

export function ReviewSection({ reviews, badges, googleMapsUrl = "https://maps.app.goo.gl/AB3Vy5LU4oNcYv2N6" }: ReviewSectionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* Google Rating Header */}
      <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center mb-8">
        <div className="flex items-center gap-3 mb-2">
          {/* Google Logo */}
          <svg className="h-8 w-auto" viewBox="0 0 74 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
            <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
            <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54 0 2.02-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
            <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC04"/>
            <path d="M58 .24h2.51v17.57H58z" fill="#34A853"/>
            <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
          </svg>
          <span className="text-espresso font-medium">Reviews</span>
        </div>
        <div className="flex items-center gap-0.5">
          <StarRating count={4} />
          <svg className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="#FBBC04" />
                <stop offset="50%" stopColor="#E0E0E0" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-paper rounded-xl p-5 shadow-sm border border-line-light text-left"
          >
            {/* Author Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm shrink-0",
                getAvatarColor(review.author)
              )}>
                {getInitials(review.author)}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-espresso truncate">{review.author}</p>
                <p className="text-xs text-walnut/70">Local Guide</p>
              </div>
            </div>

            {/* Rating and Time */}
            <div className="flex items-center gap-2 mb-3">
              <StarRating count={5} />
              <span className="text-xs text-walnut/70">{review.timeAgo}</span>
              {review.isNew && (
                <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">
                  NEW
                </span>
              )}
            </div>

            {/* Review Text */}
            <p className="text-sm text-espresso leading-relaxed line-clamp-4">
              {review.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* See All Reviews Button */}
      <motion.div variants={fadeInUp} className="text-center mb-10">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-paper border border-line-light rounded-full text-espresso font-medium hover:bg-linen hover:border-sage/30 transition-all shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/>
          </svg>
          See all reviews on Google
        </a>
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
