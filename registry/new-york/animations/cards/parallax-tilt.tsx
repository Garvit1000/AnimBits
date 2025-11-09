"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useParallaxTilt, type UseParallaxTiltOptions } from "@/lib/hooks/use-parallax-tilt"

export interface CardParallaxTiltProps extends Omit<HTMLMotionProps<"div">, "ref">, UseParallaxTiltOptions {}

/**
 * A card component with 3D parallax tilt effect and shadow separation.
 * Built using the useParallaxTilt() primitive hook.
 * 
 * @example
 * ```tsx
 * <CardParallaxTilt className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Hover to tilt!</p>
 * </CardParallaxTilt>
 * ```
 * 
 * @example
 * ```tsx
 * <CardParallaxTilt maxTilt={20} shadowIntensity={0.5}>
 *   <h3>More Dramatic</h3>
 * </CardParallaxTilt>
 * ```
 * 
 * @example
 * ```tsx
 * // Use the hook directly for any element
 * import { useParallaxTilt } from "@/lib/hooks/use-parallax-tilt"
 * const { tiltProps, ref } = useParallaxTilt()
 * <motion.button ref={ref} {...tiltProps}>Button</motion.button>
 * ```
 */
export function CardParallaxTilt({
  children,
  className,
  maxTilt,
  duration,
  shadowIntensity,
  stiffness,
  damping,
  ...props
}: CardParallaxTiltProps) {
  const { tiltProps, ref } = useParallaxTilt({
    maxTilt,
    duration,
    shadowIntensity,
    stiffness,
    damping,
  })

  return (
    <motion.div
      ref={ref as any}
      {...tiltProps}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
