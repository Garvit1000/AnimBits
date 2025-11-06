"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { usePress } from "@/lib/hooks"

interface PressButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode
  /**
   * Scale factor when pressed
   * @default 0.95
   */
  scale?: number
}

/**
 * Button with press-down effect on tap
 *
 * Uses the `usePress` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
 *
 * @example
 * ```tsx
 * <PressButton className="px-4 py-2 bg-blue-500 text-white rounded">
 *   Click me
 * </PressButton>
 * ```
 *
 * @example Using the hook directly
 * ```tsx
 * import { usePress } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const pressProps = usePress({ pressScale: 0.92 })
 *   return <motion.div {...pressProps}>Any element</motion.div>
 * }
 * ```
 */
export function PressButton({
  children,
  scale = 0.95,
  ...props
}: PressButtonProps) {
  const pressProps = usePress({
    pressScale: scale,
  })

  return (
    <motion.button {...pressProps} {...props}>
      {children}
    </motion.button>
  )
}