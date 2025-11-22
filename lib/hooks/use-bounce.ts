import { type MotionProps, type Easing } from "framer-motion";

export interface UseBounceOptions {
  bounceHeight?: number;

  duration?: number;

  ease?: Easing | Easing[];

  repeat?: number;

  delay?: number;

  onHover?: boolean;
}

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
