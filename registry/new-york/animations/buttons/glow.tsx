"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

interface GlowButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode
  /**
   * Glow color (RGBA format recommended)
   * @default "rgba(59, 130, 246, 0.5)"
   */
  glowColor?: string
  /**
   * Glow spread intensity in pixels
   * @default 20
   */
  intensity?: number
}

/**
 * Button with glow effect on hover
 * 
 * @example
 * ```tsx
 * <GlowButton 
 *   className="px-4 py-2 bg-blue-500 text-white rounded"
 *   glowColor="rgba(59, 130, 246, 0.5)"
 * >
 *   Hover me
 * </GlowButton>
 * ```
 */
export function GlowButton({
  children,
  glowColor = "rgba(59, 130, 246, 0.5)",
  intensity = 20,
  ...props
}: GlowButtonProps) {
  return (
    <motion.button
      initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      whileHover={{
        boxShadow: `0 0 ${intensity}px ${glowColor}`,
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}