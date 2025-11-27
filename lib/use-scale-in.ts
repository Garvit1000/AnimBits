import { type MotionProps, type Easing } from "motion/react";

export interface UseScaleInOptions {
  duration?: number;

  delay?: number;

  from?: number;

  to?: number;

  initialOpacity?: number;

  ease?: Easing | Easing[];

  viewport?: "once" | "always";
}

export function useScaleIn(options: UseScaleInOptions = {}): MotionProps {
  const {
    duration = 0.5,
    delay = 0,
    from = 0.8,
    to = 1,
    initialOpacity = 0,
    ease = "easeOut",
    viewport = "once",
  } = options;

  return {
    initial: {
      scale: from,
      opacity: initialOpacity,
    },
    whileInView: {
      scale: to,
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
