"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardBackgroundZoomProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Background image URL
   */
  backgroundImage: string
  /**
   * Card content
   */
  children: React.ReactNode
  /**
   * Zoom scale factor
   * @default 1.1
   */
  scale?: number
  /**
   * Animation duration in seconds
   * @default 0.6
   */
  duration?: number
}

/**
 * A card with background image that zooms in on hover.
 * 
 * @example
 * ```tsx
 * <CardBackgroundZoom backgroundImage="/image.jpg">
 *   <h3>Card Title</h3>
 *   <p>Content</p>
 * </CardBackgroundZoom>
 * ```
 * 
 * @example
 * ```tsx
 * <CardBackgroundZoom 
 *   backgroundImage="/hero.jpg"
 *   scale={1.2}
 *   duration={0.8}
 * >
 *   <h3>Dramatic Zoom</h3>
 * </CardBackgroundZoom>
 * ```
 */
export function CardBackgroundZoom({
  backgroundImage,
  children,
  className,
  scale = 1.1,
  duration = 0.6,
  ...props
}: CardBackgroundZoomProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        variants={{
          initial: { scale: 1 },
          hover: { scale },
        }}
        transition={{ duration, ease: "easeOut" }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
