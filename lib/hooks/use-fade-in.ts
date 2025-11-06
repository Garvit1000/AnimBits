import { type MotionProps } from "framer-motion"

export interface UseFadeInOptions {
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
   * Initial opacity
   * @default 0
   */
  from?: number
  
  /**
   * Final opacity
   * @default 1
   */
  to?: number
  
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
 * Component-agnostic fade-in animation hook
 * 
 * Returns MotionProps that can be spread onto any motion component
 * to add a fade-in entrance animation.
 * 
 * @example
 * ```tsx
 * import { useFadeIn } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 * 
 * function MyCard() {
 *   const fadeProps = useFadeIn({ duration: 0.6, delay: 0.2 })
 *   return (
 *     <motion.div {...fadeProps}>
 *       Content fades in
 *     </motion.div>
 *   )
 * }
 * ```
 */
export function useFadeIn(options: UseFadeInOptions = {}): MotionProps {
  const {
    duration = 0.5,
    delay = 0,
    from = 0,
    to = 1,
    ease = "easeOut",
    viewport = "once",
  } = options

  return {
    initial: {
      opacity: from,
    },
    whileInView: {
      opacity: to,
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