import * as React from "react";
import { useMotionValue, useSpring } from "motion/react";

export interface UseMagneticOptions {
  strength?: number;
  stiffness?: number;
  damping?: number;
}

export function useMagnetic(options: UseMagneticOptions = {}) {
  const { strength = 30, stiffness = 150, damping = 15 } = options;

  const ref = React.useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping, stiffness };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * (strength / 100));
    y.set(distanceY * (strength / 100));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const magneticProps = {
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  return { magneticProps, ref };
}
