"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderOrbitProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Size of the orbit in pixels
   * @default 40
   */
  size?: number
  /**
   * Size of particles in pixels
   * @default 8
   */
  particleSize?: number
  /**
   * Number of particles
   * @default 3
   */
  particleCount?: number
  /**
   * Color of the particles
   * @default "currentColor"
   */
  color?: string
  /**
   * Animation duration in seconds
   * @default 1.5
   */
  duration?: number
}

/**
 * A loader with particles orbiting in a circle.
 * 
 * @example
 * ```tsx
 * <LoaderOrbit />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderOrbit 
 *   size={60}
 *   particleCount={5}
 *   color="#3b82f6"
 * />
 * ```
 */
export function LoaderOrbit({
  className,
  size = 40,
  particleSize = 8,
  particleCount = 3,
  color = "currentColor",
  duration = 1.5,
  ...props
}: LoaderOrbitProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      style={{ width: size, height: size } as React.CSSProperties}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {Array.from({ length: particleCount }).map((_, index) => {
        const angle = (360 / particleCount) * index
        const radius = size / 2 - particleSize
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        
        return (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              width: particleSize,
              height: particleSize,
              backgroundColor: color,
              left: "50%",
              top: "50%",
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            } as React.CSSProperties}
          />
        )
      })}
    </motion.div>
  )
}
