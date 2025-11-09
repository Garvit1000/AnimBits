"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TextSplitRevealProps extends Omit<HTMLMotionProps<"p">, "children"> {
  /**
   * The text content to animate
   */
  children: string
  /**
   * Animation duration in seconds
   * @default 0.6
   */
  duration?: number
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Stagger delay between left and right halves in seconds
   * @default 0.1
   */
  staggerDelay?: number
}

/**
 * A text component that reveals with a vertical split effect.
 * Left half animates first, right half shortly after.
 * 
 * @example
 * ```tsx
 * <TextSplitReveal>Split Text</TextSplitReveal>
 * ```
 * 
 * @example
 * ```tsx
 * <TextSplitReveal duration={0.8} staggerDelay={0.2}>
 *   Dramatic Reveal
 * </TextSplitReveal>
 * ```
 */
export function TextSplitReveal({
  children,
  className,
  duration = 0.6,
  delay = 0,
  staggerDelay = 0.1,
  ...props
}: TextSplitRevealProps) {
  const midpoint = Math.ceil(children.length / 2)
  const leftHalf = children.slice(0, midpoint)
  const rightHalf = children.slice(midpoint)

  return (
    <motion.p className={cn("overflow-hidden", className)} {...props}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
      >
        {leftHalf}
      </motion.span>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 20, clipPath: "inset(0 0 0 100%)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0%)" }}
        transition={{
          duration,
          delay: delay + staggerDelay,
          ease: "easeOut",
        }}
      >
        {rightHalf}
      </motion.span>
    </motion.p>
  )
}
