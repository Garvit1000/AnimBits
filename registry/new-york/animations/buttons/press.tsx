"use client";
import { motion, type HTMLMotionProps } from "motion/react";
import { usePress } from "@/lib/use-press";
interface PressButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode;
  scale?: number;
}
export function PressButton({
  children,
  scale = 0.95,
  ...props
}: PressButtonProps) {
  const pressProps = usePress({
    pressScale: scale,
  });
  return (
    <motion.button {...pressProps} {...props}>
      {children}
    </motion.button>
  );
}
