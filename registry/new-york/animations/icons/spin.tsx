"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "framer-motion";
interface SpinIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  duration?: number;
  direction?: "clockwise" | "counterclockwise";
}
export function SpinIcon({
  children,
  duration = 1,
  direction = "clockwise",
  ...props
}: SpinIconProps) {
  const rotation = direction === "clockwise" ? 360 : -360;
  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
