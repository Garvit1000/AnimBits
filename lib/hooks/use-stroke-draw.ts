import { type MotionProps } from "framer-motion"

export interface UseStrokeDrawOptions {
  /**
   * Animation duration in seconds
   * @default 1.5
   */
  duration?: number
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Whether to repeat the animation
   * @default false
   */
  repeat?: boolean
  /**
   * Easing function
   * @default "easeInOut"
   */
  ease?: string | number[]
}

/**
 * Component-agnostic stroke draw animation hook for SVG paths
 * Animates SVG path from 0 to full length
 * Works with any SVG path element via Framer Motion
 * 
 * @example
 * ```tsx
 * // Use with SVG path
 * const strokeProps = useStrokeDraw()
 * <svg>
 *   <motion.path d="M..." {...strokeProps} />
 * </svg>
 * 
 * // Custom duration and delay
 * const strokeProps = useStrokeDraw({ duration: 2, delay: 0.5 })
 * <svg>
 *   <motion.path d="M..." {...strokeProps} />
 * </svg>
 * 
 * // Repeating animation
 * const strokeProps = useStrokeDraw({ repeat: true })
 * <svg>
 *   <motion.path d="M..." {...strokeProps} />
 * </svg>
 * ```
 */
export function useStrokeDraw(options: UseStrokeDrawOptions = {}): MotionProps {
  const {
    duration = 1.5,
    delay = 0,
    repeat = false,
    ease = "easeInOut",
  } = options

  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration, delay, ease },
      opacity: { duration: 0.2, delay },
      repeat: repeat ? Infinity : 0,
      repeatDelay: 1,
    },
  }
}
