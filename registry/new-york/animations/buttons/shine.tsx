"use client";
import { motion, type HTMLMotionProps } from "motion/react";
interface ShineButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode;
  direction?: "left" | "right";
}
export function ShineButton({
  children,
  direction = "right",
  className,
  ...props
}: ShineButtonProps) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className || ""}`}
      whileHover="hover"
      initial="initial"
      {...props}
    >
      {children}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        variants={{
          initial: {
            x: direction === "right" ? "-100%" : "100%",
          },
          hover: {
            x: direction === "right" ? "100%" : "-100%",
          },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
