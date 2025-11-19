"use client"

import * as React from "react"
import * as motion from "framer-motion/client"
import type { SVGMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface MorphIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "children"> {
  /**
   * Array of path data strings to morph between
   */
  paths: string[]
  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number
  /**
   * Interval between morphs in seconds
   * @default 2
   */
  interval?: number
  /**
   * Stroke color
   * @default "currentColor"
   */
  strokeColor?: string
  /**
   * Stroke width
   * @default 2
   */
  strokeWidth?: number
}

/**
 * An icon that morphs between different states (e.g., play → pause).
 * 
 * @example
 * ```tsx
 * <MorphIcon 
 *   paths={[
 *     "M5 3l14 9-14 9V3z", // play
 *     "M6 4h4v16H6V4zm8 0h4v16h-4V4z" // pause
 *   ]}
 *   viewBox="0 0 24 24"
 * />
 * ```
 */
export function MorphIcon({
  paths,
  className,
  duration = 0.3,
  interval = 2,
  strokeColor = "currentColor",
  strokeWidth = 2,
  ...props
}: MorphIconProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paths.length)
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [paths.length, interval])

  return (
    <motion.svg
      className={cn(className)}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        d={paths[currentIndex]}
        animate={{ d: paths[currentIndex] }}
        transition={{ duration, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}
