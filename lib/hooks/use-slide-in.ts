import { type MotionProps, type Easing } from "framer-motion";

export type SlideDirection = "left" | "right" | "up" | "down";

export interface UseSlideInOptions {
  /**
   * Direction to slide from
   * @default "left"
   */
  direction?: SlideDirection;

  /**
   * Distance to slide (in pixels)
   * @default 50
   */
  distance?: number;

  /**
   * Animation duration (in seconds)
   * @default 0.5
   */
  duration?: number;

  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;

  /**
   * Initial opacity
   * @default 0
   */
  initialOpacity?: number;

  /**
   * Animation easing
   * @default "easeOut"
   */
  ease?: Easing | Easing[];

  /**
   * Whether to animate once or always
   * @default "once"
   */
  viewport?: "once" | "always";
}

/**
 * Component-agnostic slide-in animation hook
 *
 * Returns MotionProps that can be spread onto any motion component
 * to add a slide-in entrance animation from any direction.
 *
 * @example
 * ```tsx
 * import { useSlideIn } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 *
 * function MyCard() {
 *   const slideProps = useSlideIn({
 *     direction: "left",
 *     distance: 100
 *   })
 *   return (
 *     <motion.div {...slideProps}>
 *       Content slides in from left
 *     </motion.div>
 *   )
 * }
 * ```
 */
export function useSlideIn(options: UseSlideInOptions = {}): MotionProps {
  const {
    direction = "left",
    distance = 50,
    duration = 0.5,
    delay = 0,
    initialOpacity = 0,
    ease = "easeOut",
    viewport = "once",
  } = options;

  // Calculate initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "up":
        return { x: 0, y: -distance };
      case "down":
        return { x: 0, y: distance };
      default:
        return { x: -distance, y: 0 };
    }
  };

  const initialPosition = getInitialPosition();

  return {
    initial: {
      ...initialPosition,
      opacity: initialOpacity,
    },
    whileInView: {
      x: 0,
      y: 0,
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
  };
}
