import { type MotionProps, type Easing } from "motion/react";

export interface UsePulseOptions {
  scaleFrom?: number;

  scaleTo?: number;

  duration?: number;

  ease?: Easing | Easing[];

  repeat?: number;

  delay?: number;
}

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
