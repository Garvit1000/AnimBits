"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "motion/react";
import {
  pulseVariants,
  createContinuousTransition,
} from "@/lib/animation-presets";
interface PulseIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  trigger?: "mount" | "hover" | "always";
  duration?: number;
}
export function PulseIcon({
  children,
  trigger = "always",
  duration = 0.8,
  ...props
}: PulseIconProps) {
  const animate = trigger === "always" ? "animate" : undefined;
  const whileHover = trigger === "hover" ? "animate" : undefined;
  return (
    <motion.div
      variants={pulseVariants}
      initial="initial"
      animate={animate}
      whileHover={whileHover}
      transition={createContinuousTransition(duration, "easeInOut")}
      {...props}
    >
      {children}
    </motion.div>
  );
}
