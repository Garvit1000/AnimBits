"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "framer-motion";
import { popVariants } from "@/lib/animation-presets";
import { useState } from "react";
interface PopIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  trigger?: "hover" | "tap" | "mount";
}
export function PopIcon({
  children,
  trigger = "mount",
  ...props
}: PopIconProps) {
  const [key, setKey] = useState(0);
  const handleTrigger = () => {
    setKey((prev) => prev + 1);
  };
  return (
    <motion.div
      key={key}
      variants={popVariants}
      initial="initial"
      animate={trigger === "mount" ? "animate" : undefined}
      whileHover={trigger === "hover" ? "animate" : undefined}
      whileTap={trigger === "tap" ? "animate" : undefined}
      onTap={trigger === "tap" ? handleTrigger : undefined}
      transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
