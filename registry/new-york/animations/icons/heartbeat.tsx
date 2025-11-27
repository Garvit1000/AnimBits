"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "motion/react";
import { heartbeatVariants } from "@/lib/animation-presets";
interface HeartbeatIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  bpm?: number;
}
export function HeartbeatIcon({
  children,
  bpm = 60,
  ...props
}: HeartbeatIconProps) {
  const duration = 60 / bpm;
  return (
    <motion.div
      variants={heartbeatVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
