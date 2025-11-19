import { type MotionProps, type Easing } from "framer-motion";

export interface UsePressOptions {
  /**
   * Scale amount when pressed (1 = no scale, 0.9 = 10% smaller)
   * @default 0.95
   */
  pressScale?: number;

  /**
   * Animation duration (in seconds)
   * @default 0.1
   */
  duration?: number;

  /**
   * Animation easing
   * @default "easeInOut"
   */
  ease?: Easing | Easing[];

  /**
   * Whether to add slight rotation on press
   * @default false
   */
  addRotation?: boolean;

  /**
   * Rotation amount in degrees (only used if addRotation is true)
   * @default 2
   */
  rotationAmount?: number;
}

/**
 * Component-agnostic press/tap animation hook
 *
 * Returns MotionProps that can be spread onto any motion component
 * to add a press-down feedback effect on tap.
 *
 * @example
 * ```tsx
 * import { usePress } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 *
 * function MyButton() {
 *   const pressProps = usePress({ pressScale: 0.92 })
 *   return (
 *     <motion.button {...pressProps}>
 *       Click me
 *     </motion.button>
 *   )
 * }
 * ```
 */
export function usePress(options: UsePressOptions = {}): MotionProps {
  const {
    pressScale = 0.95,
    duration = 0.1,
    ease = "easeInOut",
    addRotation = false,
    rotationAmount = 2,
  } = options;

  return {
    whileTap: {
      scale: pressScale,
      rotate: addRotation ? rotationAmount : 0,
    },
    transition: {
      duration,
      ease,
    },
  };
}
