import { type MotionProps, type Easing } from "framer-motion";

export interface UsePressOptions {
  pressScale?: number;

  duration?: number;

  ease?: Easing | Easing[];

  addRotation?: boolean;

  rotationAmount?: number;
}

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
