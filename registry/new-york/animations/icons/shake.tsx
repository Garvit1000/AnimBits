"use client";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "framer-motion";
import { shakeVariants } from "@/lib/animation-presets";
import { useState } from "react";
interface ShakeIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode;
  trigger?: "hover" | "tap" | "mount";
  intensity?: number;
}
export function ShakeIcon({
  children,
  trigger = "hover",
  intensity = 10,
  ...props
}: ShakeIconProps) {
  const [key, setKey] = useState(0);
  const customVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -intensity, intensity, -intensity, intensity, 0],
    },
  };
  const handleTrigger = () => {
    setKey((prev) => prev + 1);
  };
  return (
    <motion.div
      key={key}
      variants={customVariants}
      initial="initial"
      animate={trigger === "mount" ? "animate" : undefined}
      whileHover={trigger === "hover" ? "animate" : undefined}
      whileTap={trigger === "tap" ? "animate" : undefined}
      onTap={trigger === "tap" ? handleTrigger : undefined}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
