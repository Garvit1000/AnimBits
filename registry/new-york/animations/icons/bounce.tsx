"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "motion/react";
import { bounceVariants } from "@/lib/animation-presets";
import { useState } from "react";
interface BounceIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  trigger?: "hover" | "tap" | "mount";
}
export function BounceIcon({
  children,
  trigger = "hover",
  ...props
}: BounceIconProps) {
  const [key, setKey] = useState(0);
  const handleTrigger = () => {
    setKey((prev) => prev + 1);
  };
  return (
    <motion.div
      key={key}
      variants={bounceVariants}
      initial="initial"
      animate={trigger === "mount" ? "animate" : undefined}
      whileHover={trigger === "hover" ? "animate" : undefined}
      whileTap={trigger === "tap" ? "animate" : undefined}
      onTap={trigger === "tap" ? handleTrigger : undefined}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
