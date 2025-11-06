"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { useHoverLift } from "@/lib/hooks"

interface LiftButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode
  /**
   * Lift distance in pixels
   * @default 8
   */
  liftHeight?: number
  /**
   * Show shadow effect
   * @default true
   */
  shadow?: boolean
}

/**
 * Button that lifts up on hover
 *
 * Uses the `useHoverLift` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
 *
 * @example
 * ```tsx
 * <LiftButton
 *   className="px-4 py-2 bg-blue-500 text-white rounded"
 *   liftHeight={8}
 * >
 *   Hover me
 * </LiftButton>
 * ```
 *
 * @example Using the hook directly
 * ```tsx
 * import { useHoverLift } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const liftProps = useHoverLift({ liftDistance: 8 })
 *   return <motion.div {...liftProps}>Any element</motion.div>
 * }
 * ```
 */
export function LiftButton({
  children,
  liftHeight = 8,
  shadow = true,
  ...props
}: LiftButtonProps) {
  const liftProps = useHoverLift({
    liftDistance: liftHeight,
    addShadow: shadow,
  })

  return (
    <motion.button {...liftProps} {...props}>
      {children}
    </motion.button>
  )
}