import { type MotionProps, type Easing } from "motion/react";

export interface UseHoverLiftOptions {
  liftDistance?: number;

  addShadow?: boolean;

  shadowIntensity?: number;

  duration?: number;

  ease?: Easing | Easing[];

  scale?: number;
}

export function useHoverLift(options: UseHoverLiftOptions = {}): MotionProps {
  const {
    liftDistance = 8,
    addShadow = true,
    shadowIntensity = 0.3,
    duration = 0.2,
    ease = "easeOut",
    scale = 1,
  } = options;

  const shadowBlur = liftDistance * 2;
  const shadowSpread = Math.round(liftDistance / 4);

  return {
    initial: {
      y: 0,
      scale: 1,
      boxShadow: addShadow
        ? `0 2px 4px rgba(0, 0, 0, ${shadowIntensity * 0.3})`
        : undefined,
    },
    whileHover: {
      y: -liftDistance,
      scale,
      boxShadow: addShadow
        ? `0 ${shadowBlur}px ${shadowBlur + shadowSpread}px rgba(0, 0, 0, ${shadowIntensity})`
        : undefined,
    },
    transition: {
      duration,
      ease,
    },
  };
}
