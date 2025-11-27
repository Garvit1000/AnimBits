"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "motion/react";
import {
  scaleInVariants,
  createDelayedTransition,
} from "@/lib/animation-presets";
interface ScaleInIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  from?: number;
}
export function ScaleInIcon({
  children,
  delay = 0,
  duration = 0.3,
  from = 0.9,
  ...props
}: ScaleInIconProps) {
  const customVariants = {
    hidden: { opacity: 0, scale: from },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      animate="visible"
      transition={createDelayedTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
