import { type MotionProps, type Easing } from "framer-motion";

export interface UseFadeInOptions {
  duration?: number;

  delay?: number;

  from?: number;

  to?: number;

  ease?: Easing | Easing[];

  viewport?: "once" | "always";
}

export function useFadeIn(options: UseFadeInOptions = {}): MotionProps {
  const {
    duration = 0.5,
    delay = 0,
    from = 0,
    to = 1,
    ease = "easeOut",
    viewport = "once",
  } = options;

  return {
    initial: {
      opacity: from,
    },
    whileInView: {
      opacity: to,
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
