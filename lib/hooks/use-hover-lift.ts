import { type MotionProps } from "framer-motion"

export interface UseHoverLiftOptions {
  /**
   * Distance to lift the element on hover (in pixels)
   * @default 8
   */
  liftDistance?: number
  
  /**
   * Whether to add shadow on hover
   * @default true
   */
  addShadow?: boolean
  
  /**
   * Shadow intensity (0-1)
   * @default 0.3
   */
  shadowIntensity?: number
  
  /**
   * Animation duration (in seconds)
   * @default 0.2
   */
  duration?: number
  
  /**
   * Animation easing
   * @default "easeOut"
   */
  ease?: string | number[]
  
  /**
   * Scale on hover (1 = no scale)
   * @default 1
   */
  scale?: number
}

/**
 * Component-agnostic hover lift animation hook
 * 
 * Returns MotionProps that can be spread onto any motion component
 * to add a lift effect on hover with optional shadow.
 * 
 * @example
 * ```tsx
 * import { useHoverLift } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 * 
 * function MyCard() {
 *   const liftProps = useHoverLift({ liftDistance: 12 })
 *   return (
 *     <motion.div {...liftProps}>
 *       Content
 *     </motion.div>
 *   )
 * }
 * ```
 */
export function useHoverLift(options: UseHoverLiftOptions = {}): MotionProps {
  const {
    liftDistance = 8,
    addShadow = true,
    shadowIntensity = 0.3,
    duration = 0.2,
    ease = "easeOut",
    scale = 1,
  } = options

  const shadowBlur = liftDistance * 2
  const shadowSpread = Math.round(liftDistance / 4)

  return {
    initial: {
      y: 0,
      scale: 1,
      boxShadow: addShadow
        ? `0 2px 4px rgba(0, 0, 0, ${shadowIntensity * 0.3})`
        : undefined,
    },
    whileHover: {
      y: -liftDistance,
      scale,
      boxShadow: addShadow
        ? `0 ${shadowBlur}px ${shadowBlur + shadowSpread}px rgba(0, 0, 0, ${shadowIntensity})`
        : undefined,
    },
    transition: {
      duration,
      ease,
    },
  }
}