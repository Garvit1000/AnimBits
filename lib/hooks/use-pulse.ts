import { type MotionProps, type Easing } from "framer-motion";

export interface UsePulseOptions {
  /**
   * Minimum scale
   * @default 1
   */
  scaleFrom?: number;

  /**
   * Maximum scale
   * @default 1.05
   */
  scaleTo?: number;

  /**
   * Animation duration for one pulse cycle (in seconds)
   * @default 1
   */
  duration?: number;

  /**
   * Animation easing
   * @default "easeInOut"
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
}

/**
 * Component-agnostic pulse animation hook
 *
 * Returns MotionProps that can be spread onto any motion component
 * to add a continuous pulsing animation.
 *
 * @example
 * ```tsx
 * import { usePulse } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 *
 * function NotificationBadge() {
 *   const pulseProps = usePulse({ scaleTo: 1.1, duration: 0.8 })
 *   return (
 *     <motion.div {...pulseProps}>
 *       🔔
 *     </motion.div>
 *   )
 * }
 * ```
 */
export function usePulse(options: UsePulseOptions = {}): MotionProps {
  const {
    scaleFrom = 1,
    scaleTo = 1.05,
    duration = 1,
    ease = "easeInOut",
    repeat = Infinity,
    delay = 0,
  } = options;

  return {
    animate: {
      scale: [scaleFrom, scaleTo, scaleFrom],
    },
    transition: {
      duration,
      ease,
      repeat,
      delay,
    },
  };
}
