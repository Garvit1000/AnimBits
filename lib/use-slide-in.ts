import { type MotionProps, type Easing } from "framer-motion";

export type SlideDirection = "left" | "right" | "up" | "down";

export interface UseSlideInOptions {
  direction?: SlideDirection;

  distance?: number;

  duration?: number;

  delay?: number;

  initialOpacity?: number;

  ease?: Easing | Easing[];

  viewport?: "once" | "always";
}

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
