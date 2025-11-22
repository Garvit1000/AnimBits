import * as React from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export interface UseParallaxTiltOptions {
  maxTilt?: number;
  duration?: number;
  shadowIntensity?: number;
  stiffness?: number;
  damping?: number;
}

export function useParallaxTilt(options: UseParallaxTiltOptions = {}) {
  const {
    maxTilt = 15,
    duration = 0.3,
    shadowIntensity = 0.3,
    stiffness = 300,
    damping = 30,
  } = options;

  const ref = React.useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness, damping });
  const mouseYSpring = useSpring(y, { stiffness, damping });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const tiltProps = {
    style: {
      rotateX,
      rotateY,
      transformStyle: "preserve-3d" as const,
      boxShadow: useTransform(
        [shadowX, shadowY],
        ([x, y]) => `${x}px ${y}px 30px rgba(0, 0, 0, ${shadowIntensity})`,
      ),
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    transition: { duration },
  };

  return { tiltProps, ref };
}
