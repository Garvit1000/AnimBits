import { type MotionProps, type Easing } from "motion/react";

export interface UseStrokeDrawOptions {
  duration?: number;
  delay?: number;
  repeat?: boolean;
  ease?: Easing | Easing[];
}

export function useStrokeDraw(options: UseStrokeDrawOptions = {}): MotionProps {
  const {
    duration = 1.5,
    delay = 0,
    repeat = false,
    ease = "easeInOut",
  } = options;

  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration, delay, ease },
      opacity: { duration: 0.2, delay },
      repeat: repeat ? Infinity : 0,
      repeatDelay: 1,
    },
  };
}
