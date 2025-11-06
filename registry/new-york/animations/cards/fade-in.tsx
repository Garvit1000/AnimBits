"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/lib/hooks"

export interface CardFadeInProps extends HTMLMotionProps<"div"> {
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
}

/**
 * A card component that fades in when it enters the viewport.
 *
 * Uses the `useFadeIn` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
 *
 * @example
 * ```tsx
 * <CardFadeIn className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardFadeIn>
 * ```
 *
 * @example
 * ```tsx
 * <CardFadeIn delay={0.2} duration={0.5} className="p-6 bg-white rounded-lg border">
 *   <h3>Delayed Card</h3>
 * </CardFadeIn>
 * ```
 *
 * @example Using the hook directly
 * ```tsx
 * import { useFadeIn } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const fadeProps = useFadeIn({ duration: 0.6, delay: 0.2 })
 *   return <motion.div {...fadeProps}>Any element</motion.div>
 * }
 * ```
 */
export function CardFadeIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
  ...props
}: CardFadeInProps) {
  const fadeProps = useFadeIn({
    duration,
    delay,
  })

  return (
    <motion.div
      {...fadeProps}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}