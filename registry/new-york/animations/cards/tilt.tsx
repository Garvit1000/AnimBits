"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardTiltProps extends HTMLMotionProps<"div"> {
  /**
   * Maximum tilt angle in degrees
   * @default 10
   */
  maxTilt?: number
  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number
}

/**
 * A card component that tilts based on mouse position on hover.
 * 
 * @example
 * ```tsx
 * <CardTilt className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Hover to tilt!</p>
 * </CardTilt>
 * ```
 * 
 * @example
 * ```tsx
 * <CardTilt maxTilt={15} className="p-6 bg-white rounded-lg border">
 *   <h3>More Tilt</h3>
 * </CardTilt>
 * ```
 */
export function CardTilt({
  children,
  className,
  maxTilt = 10,
  duration = 0.3,
  ...props
}: CardTiltProps) {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setTilt({
      x: (y - 0.5) * maxTilt * 2,
      y: (x - 0.5) * -maxTilt * 2,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ duration }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}