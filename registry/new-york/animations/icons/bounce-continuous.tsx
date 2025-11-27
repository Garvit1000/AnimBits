"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "motion/react";
import {
  bounceContinuousVariants,
  createContinuousTransition,
} from "@/lib/animation-presets";
interface BounceContinuousProps
  extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  duration?: number;
}
export function BounceContinuous({
  children,
  duration = 1,
  ...props
}: BounceContinuousProps) {
  return (
    <motion.div
      variants={bounceContinuousVariants}
      initial="initial"
      animate="animate"
      transition={createContinuousTransition(duration, "easeInOut")}
      {...props}
    >
      {children}
    </motion.div>
  );
}
