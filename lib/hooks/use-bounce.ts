import { type MotionProps, type Easing } from "framer-motion";

export interface UseBounceOptions {
  /**
   * Bounce height (in pixels, negative moves up)
   * @default -20
   */
  bounceHeight?: number;

  /**
   * Animation duration for one bounce cycle (in seconds)
   * @default 0.6
   */
  duration?: number;

  /**
   * Animation easing for bounce effect
   * @default [0.68, -0.55, 0.265, 1.55]
   */
  ease?: Easing | Easing[];

  /**
   * Number of times to repeat (Infinity for continuous)
   * @default Infinity
   */
  repeat?: number;

  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;

  /**
   * Whether to bounce on hover instead of continuous
   * @default false
   */
  onHover?: boolean;
}

/**
 * Component-agnostic bounce animation hook
 *
 * Returns MotionProps that can be spread onto any motion component
 * to add a bounce animation (continuous or on hover).
 *
 * @example
 * ```tsx
 * import { useBounce } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 *
 * function BouncyIcon() {
 *   const bounceProps = useBounce({ bounceHeight: -30 })
 *   return (
 *     <motion.div {...bounceProps}>
 *       ⬆️
 *     </motion.div>
 *   )
 * }
 *
 * // Bounce on hover
 * function HoverBounce() {
 *   const bounceProps = useBounce({ onHover: true })
 *   return <motion.button {...bounceProps}>Hover me</motion.button>
 * }
 * ```
 */
export function useBounce(options: UseBounceOptions = {}): MotionProps {
  const {
    bounceHeight = -20,
    duration = 0.6,
    ease = [0.68, -0.55, 0.265, 1.55],
    repeat = Infinity,
    delay = 0,
    onHover = false,
  } = options;

  if (onHover) {
    return {
      whileHover: {
        y: [0, bounceHeight, 0],
      },
      transition: {
        duration,
        ease,
      },
    };
  }

  return {
    animate: {
      y: [0, bounceHeight, 0],
    },
    transition: {
      duration,
      ease,
      repeat,
      delay,
    },
  };
}
