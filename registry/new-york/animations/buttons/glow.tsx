"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { useHoverGlow } from "@/lib/hooks"

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
 * Uses the `useHoverGlow` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
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
 *
 * @example Using the hook directly
 * ```tsx
 * import { useHoverGlow } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const glowProps = useHoverGlow({ glowColor: "rgba(168, 85, 247, 0.5)" })
 *   return <motion.div {...glowProps}>Any element</motion.div>
 * }
 * ```
 */
export function GlowButton({
  children,
  glowColor = "rgba(59, 130, 246, 0.5)",
  intensity = 20,
  ...props
}: GlowButtonProps) {
  const glowProps = useHoverGlow({
    glowColor,
    glowBlur: intensity,
  })

  return (
    <motion.button {...glowProps} {...props}>
      {children}
    </motion.button>
  )
}