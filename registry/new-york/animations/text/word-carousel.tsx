"use client"

import * as React from "react"
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useWordCarousel, type UseWordCarouselOptions } from "@/lib/hooks/use-word-carousel"

export interface TextWordCarouselProps extends Omit<HTMLMotionProps<"span">, "children">, UseWordCarouselOptions {
  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number
}

/**
 * A text component that cycles through an array of words.
 * Built using the useWordCarousel() primitive hook.
 * 
 * @example
 * ```tsx
 * <TextWordCarousel words={["Fast", "Modern", "Beautiful"]} />
 * ```
 * 
 * @example
 * ```tsx
 * <TextWordCarousel 
 *   words={["React", "Next.js", "TypeScript"]}
 *   interval={3}
 *   duration={0.5}
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Use the hook directly for any element
 * import { useWordCarousel } from "@/lib/hooks/use-word-carousel"
 * const { currentWord, key } = useWordCarousel({ words: ["A", "B", "C"] })
 * <AnimatePresence mode="wait">
 *   <motion.h1 key={key}>{currentWord}</motion.h1>
 * </AnimatePresence>
 * ```
 */
export function TextWordCarousel({
  words,
  interval,
  className,
  duration = 0.3,
  ...props
}: TextWordCarouselProps) {
  const { currentWord, key } = useWordCarousel({ words, interval })

  return (
    <span className={cn("inline-block relative", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration }}
          className="inline-block"
          {...props}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
