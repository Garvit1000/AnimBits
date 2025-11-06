import { type MotionProps } from "framer-motion"

export interface UseScaleInOptions {
  /**
   * Animation duration (in seconds)
   * @default 0.5
   */
  duration?: number
  
  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number
  
  /**
   * Initial scale (0 = invisible, 1 = normal size)
   * @default 0.8
   */
  from?: number
  
  /**
   * Final scale
   * @default 1
   */
  to?: number
  
  /**
   * Initial opacity
   * @default 0
   */
  initialOpacity?: number
  
  /**
   * Animation easing
   * @default "easeOut"
   */
  ease?: string | number[]
  
  /**
   * Whether to animate once or always
   * @default "once"
   */
  viewport?: "once" | "always"
}

/**
 * Component-agnostic scale-in animation hook
 * 
 * Returns MotionProps that can be spread onto any motion component
 * to add a scale-in entrance animation with optional fade.
 * 
 * @example
 * ```tsx
 * import { useScaleIn } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 * 
 * function MyCard() {
 *   const scaleProps = useScaleIn({ from: 0.5, duration: 0.6 })
 *   return (
 *     <motion.div {...scaleProps}>
 *       Content scales in
 *     </motion.div>
 *   )
 * }
 * ```
 */
export function useScaleIn(options: UseScaleInOptions = {}): MotionProps {
  const {
    duration = 0.5,
    delay = 0,
    from = 0.8,
    to = 1,
    initialOpacity = 0,
    ease = "easeOut",
    viewport = "once",
  } = options

  return {
    initial: {
      scale: from,
      opacity: initialOpacity,
    },
    whileInView: {
      scale: to,
      opacity: 1,
    },
    viewport: {
      once: viewport === "once",
    },
    transition: {
      duration,
      delay,
      ease,
    },
  }
}