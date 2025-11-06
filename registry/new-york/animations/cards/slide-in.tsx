"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useSlideIn, type SlideDirection } from "@/lib/hooks"

export interface CardSlideInProps extends HTMLMotionProps<"div"> {
  /**
   * Animation duration in seconds
   * @default 0.5
   */
  duration?: number
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Direction to slide from
   * @default "left"
   */
  direction?: SlideDirection
  /**
   * Distance to slide in pixels
   * @default 50
   */
  distance?: number
}

/**
 * A card component that slides in from a direction when it enters the viewport.
 *
 * Uses the `useSlideIn` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
 *
 * @example
 * ```tsx
 * <CardSlideIn className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardSlideIn>
 * ```
 *
 * @example
 * ```tsx
 * <CardSlideIn
 *   direction="right"
 *   distance={30}
 *   className="p-6 bg-white rounded-lg border"
 * >
 *   <h3>Slide from Right</h3>
 * </CardSlideIn>
 * ```
 *
 * @example Using the hook directly
 * ```tsx
 * import { useSlideIn } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const slideProps = useSlideIn({ direction: "left", distance: 100 })
 *   return <motion.div {...slideProps}>Any element</motion.div>
 * }
 * ```
 */
export function CardSlideIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
  direction = "left",
  distance = 50,
  ...props
}: CardSlideInProps) {
  const slideProps = useSlideIn({
    direction,
    distance,
    duration,
    delay,
  })

  return (
    <motion.div
      {...slideProps}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}